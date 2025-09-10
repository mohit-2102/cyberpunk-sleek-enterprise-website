'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function AdminLoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        setLoading(true);

        if (!email || !password) {
            setErrorMsg('Please fill in both fields.');
            setLoading(false);
            return;
        }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Login failed');
            }

            // Save token securely
            // After successful login:
            localStorage.setItem('adminToken', data.token);


            // Redirect to admin dashboard (e.g., /admin/dashboard or /admin/blogs)
            router.push('/admin/dashboard'); // 🔁 redirect to dashboard


        } catch (err) {
            setErrorMsg(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-24 p-8 bg-white shadow-lg rounded-md">
            <h2 className="text-2xl font-bold text-center mb-6 text-[#2C1A47]">Admin Login</h2>
            {errorMsg && <p className="text-red-600 text-sm mb-4">{errorMsg}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    placeholder="Admin Email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="button"
                        className='absolute right-3 top-2.5 transform-translate-y-1/2 text-sm text-gray-600 cursor-pointer hover:text-black focus:outline-none'
                        aria-label="Toggle password visibility"
                        onClick={()=>setShowPassword(!showPassword)} >
                        {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                        {/* {showPassword ? 'Hide' : 'Show'} */}
                    </button>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#2C1A47] text-white py-2 rounded-md hover:bg-[#1e1132] transition"
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
}
