'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaTrash, FaEdit, FaEye, FaHeart, FaComment } from 'react-icons/fa';
import AdminNavbar from '@/components/admin/AdminNavbar';

export default function AdminResearchPage() {
    const [researches, setResearches] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const fetchResearch = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/research`);
            const data = await res.json();
            if (Array.isArray(data)) {
                setResearches(data);
            }
        } catch (err) {
            console.error('Failed to fetch research:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (slug) => {
        if (!confirm('Are you sure you want to delete this research post?')) return;

        try {
            const token = localStorage.getItem('adminToken');
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/research/${slug}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (res.ok) {
                setResearches(researches.filter(item => item.slug !== slug));
            } else {
                const error = await res.json();
                alert(error.message || 'Failed to delete');
            }
        } catch (err) {
            console.error(err);
            alert('Error deleting research');
        }
    };

    useEffect(() => {
        fetchResearch();
    }, []);

    return (
        <>
            <AdminNavbar />
            <div className="min-h-screen bg-gray-50 px-6 py-10">
                <div className="max-w-5xl mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold">Manage Research</h1>
                        <button
                            onClick={() => router.push('/admin/research/create')}
                            className="bg-[#2C1A47] text-white px-4 py-2 rounded hover:bg-[#1e1132]"
                        >
                            + Create Research
                        </button>
                    </div>

                    {loading ? (
                        <p className="text-center text-gray-500">Loading...</p>
                    ) : researches.length === 0 ? (
                        <p className="text-center text-gray-500">No research entries found.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {researches.map(research => (
                                <div key={research._id} className="bg-white rounded shadow flex flex-col">
                                    <img
                                        src={research.images?.[0] || 'https://source.unsplash.com/600x400/?technology'}
                                        alt={research.title}
                                        className="h-48 w-full object-cover rounded-t"
                                    />
                                    <div className="p-4">
                                        <Link href={`/admin/research/${research.slug}`}>
                                            <h2 className="text-lg font-semibold mb-1 text-black hover:underline cursor-pointer">
                                                {research.title}
                                            </h2>
                                        </Link>
                                        <p className="text-xs text-gray-500 mb-2">
                                            {new Date(research.createdAt).toLocaleDateString()}
                                        </p>

                                        {/* Counts */}
                                        <div className="flex gap-4 text-sm text-gray-600 mb-4">
                                            <div className="flex items-center gap-1">
                                                <FaEye /> {research.views || 0}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <FaHeart /> {research.likes || 0}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <FaComment /> {research.reviewCount || 0}
                                            </div>
                                        </div>

                                        <p className="text-sm text-gray-700 mb-3 line-clamp-3">
                                            {research.description}
                                        </p>

                                        <div className="mt-auto flex justify-between items-center">
                                            <Link
                                                href={`/admin/research/${research.slug}`}
                                                className="text-blue-600 hover:underline text-sm"
                                            >
                                                View Details
                                            </Link>

                                            <div className="flex gap-3 text-sm">
                                                <button
                                                    onClick={() => router.push(`/admin/research/${research.slug}/edit`)}
                                                    className="text-yellow-600 hover:text-yellow-800 cursor-pointer"
                                                >
                                                    <FaEdit />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(research.slug)}
                                                    className="text-red-600 hover:text-red-800 cursor-pointer"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
