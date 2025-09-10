'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaEye, FaHeart, FaComment, FaEdit, FaTrash } from 'react-icons/fa';
import AdminNavbar from '@/components/admin/AdminNavbar';

export default function AdminBlogsPage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const fetchBlogs = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/blogs`);
            const data = await res.json();
            if (Array.isArray(data)) {
                setBlogs(data);
            }
        } catch (err) {
            console.error('Failed to fetch blogs:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (slug) => {
        if (!confirm('Are you sure you want to delete this blog?')) return;

        try {
            const token = localStorage.getItem('adminToken');
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/blogs/${slug}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (res.ok) {
                setBlogs(blogs.filter(blog => blog.slug !== slug));
            } else {
                const error = await res.json();
                alert(error.message || 'Failed to delete');
            }
        } catch (err) {
            alert('Error deleting blog');
            console.error(err);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <>
            <AdminNavbar />
        <div className="min-h-screen bg-gray-50 px-6 py-10">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Manage Blogs</h1>
                    <button
                        onClick={() => router.push('/admin/blogs/create')}
                        className="bg-[#2C1A47] text-white px-4 py-2 rounded hover:bg-[#1e1132]"
                        >
                        + Create Blog
                    </button>
                </div>

                {loading ? (
                    <p className="text-center text-gray-500">Loading blogs...</p>
                ) : blogs.length === 0 ? (
                    <p className="text-center text-gray-500">No blogs available.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {blogs.map(blog => (
                            <div key={blog._id} className="bg-white border rounded shadow flex flex-col">
                                <img
                                    src={blog.images?.[0] || 'https://source.unsplash.com/600x400/?cybersecurity'}
                                    alt={blog.title}
                                    className="h-48 w-full object-cover rounded mb-3"
                                />
                                <div className='p-4'>
                                    <Link href={`/admin/blogs/${blog.slug}`}>
                                        <h2 className="text-lg font-semibold mb-1 text-black hover:underline cursor-pointer">
                                            {blog.title}
                                        </h2>
                                    </Link>
                                    <p className="text-xs text-gray-500 mb-2">
                                        {new Date(blog.createdAt).toLocaleDateString()}
                                    </p>

                                    <div className="flex gap-4 text-sm text-gray-600 mb-4">
                                        <div className="flex items-center gap-1">
                                            <FaEye /> {blog.views || 0}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FaHeart /> {blog.likes || 0}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FaComment /> {blog.commentCount || 0}
                                        </div>
                                    </div>

                                    <div className="mt-auto flex justify-between items-center">
                                        <Link
                                            href={`/admin/blogs/${blog.slug}`}
                                            className="text-blue-600 hover:underline text-sm"
                                            >
                                            View Details
                                        </Link>

                                        <div className="flex gap-3 text-sm">
                                            <button
                                                onClick={() => router.push(`/admin/blogs/${blog.slug}/edit`)}
                                                className="text-yellow-600 hover:text-yellow-800 cursor-pointer"
                                                >
                                                <FaEdit />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(blog.slug)}
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
