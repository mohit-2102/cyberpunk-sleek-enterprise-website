'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ResetPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Safely decode token from URL
  const token = decodeURIComponent(searchParams.get('token') || '');

  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!password || !confirm) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/users/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Reset failed. Please try again.');
        return;
      }

      setMessage('Password reset successful. Redirecting to login...');
      setTimeout(() => {
        router.push('/resources');
      }, 2000);
    } catch (err) {
      console.error('Reset error:', err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleReset}
        className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Reset Password</h2>

        {/* New password input */}
        <div className="relative mb-3">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded pr-10"
            required
          />
          <span
            className="absolute right-3 top-2.5 text-sm text-gray-600 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>

        {/* Confirm password input */}
        <div className="relative mb-3">
          <input
            type={showConfirm ? 'text' : 'password'}
            placeholder="Confirm new password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded pr-10"
            required
          />
          <span
            className="absolute right-3 top-2.5 text-sm text-gray-600 cursor-pointer"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? 'Hide' : 'Show'}
          </span>
        </div>

        {/* Error and success messages */}
        {error && <p className="text-red-600 text-sm">{error}</p>}
        {message && <p className="text-green-600 text-sm">{message}</p>}

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-[#2C1A47] text-white py-2 rounded hover:bg-[#1e1034] transition-colors"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}
