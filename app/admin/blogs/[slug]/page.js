'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { FaEye, FaHeart, FaComment, FaTrash } from 'react-icons/fa';

export default function AdminBlogDetailPage() {
    const { slug } = useParams();
    const router = useRouter();
    const [blog, setBlog] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBlog = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/blogs/${slug}`);
            const data = await res.json();
            if (res.ok) setBlog(data);
        } catch (err) {
            console.error('Error fetching blog:', err);
        }
    };

    const fetchComments = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/comments/${slug}`);
            const data = await res.json();
            if (res.ok) setComments(data);
        } catch (err) {
            console.error('Error fetching comments:', err);
        }
    };

    const handleDeleteComment = async (id) => {
        const confirmDelete = confirm('Delete this comment?');
        if (!confirmDelete) return;

        try {
            const token = localStorage.getItem('adminToken');
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/comments/${id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}` },
            });

            if (res.ok) {
                setComments((prev) => prev.filter((c) => c._id !== id));
            } else {
                const data = await res.json();
                alert(data.message || 'Failed to delete comment');
            }
        } catch (err) {
            console.error('Error deleting comment:', err);
        }
    };

    useEffect(() => {
        if (slug) {
            fetchBlog();
            fetchComments();
        }
        setLoading(false);
    }, [slug]);

    if (loading || !blog) return <div className="p-10 text-center text-gray-500">Loading...</div>;

    return (
        <div className="min-h-screen bg-white py-10 px-4 md:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">{blog.title}</h1>
                    <button
                        onClick={() => router.back()}
                        className="text-sm text-blue-600 hover:underline"
                    >
                        ← Back
                    </button>
                </div>
                <p className="text-sm text-gray-500">
                    {new Date(blog.createdAt).toLocaleDateString()} &nbsp; | &nbsp; {blog.author || 'CyberPunk Team'}
                </p>

                {/* Blog Images */}
                {/* {blog.images?.length > 0 && (
                    <div className="space-y-4">
                        {blog.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Blog Image ${index + 1}`}
                                className="w-full rounded-lg shadow"
                            />
                        ))}
                    </div>
                )} */}

                {/* Blog Content */}
                <div className="border border-gray-200 p-6 rounded-md shadow-xl">
                    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>

                {/* Stats */}
                <div className="flex gap-6 text-sm text-gray-600 border-t pt-4">
                    <span className="flex items-center gap-1">
                        <FaEye /> {blog.views || 0}
                    </span>
                    <span className="flex items-center gap-1">
                        <FaHeart /> {blog.likes || 0}
                    </span>
                    <span className="flex items-center gap-1">
                        <FaComment /> {comments.length}
                    </span>
                </div>

                {/* Comments */}
                <div className="mt-10">
                    <h3 className="text-xl font-semibold mb-4">Comments</h3>
                    {comments.length === 0 ? (
                        <p className="text-gray-500">No comments yet.</p>
                    ) : (
                        <ul className="space-y-4">
                            {comments.map((comment) => (
                                <div key={comment._id} className="mb-4 p-4 bg-gray-50 border rounded">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm font-semibold text-[#2C1A47]">{comment.userEmail}</span>
                                        <button
                                            onClick={() => handleDeleteComment(comment._id)}
                                            className="mt-2 cursor-pointer text-xs text-red-600 hover:underline"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-800">{comment.text}</p>
                                    <span className="text-xs text-gray-500">
                                        {new Date(comment.createdAt).toLocaleString()}
                                    </span>
                                </div>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
