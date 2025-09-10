'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { FaEye, FaHeart, FaComment, FaTrash } from 'react-icons/fa';

export default function AdminResearchDetailPage() {
    const { slug } = useParams();
    const router = useRouter();
    const [research, setResearch] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchResearch = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/research/${slug}`);
            const data = await res.json();
            if (res.ok) setResearch(data);
        } catch (err) {
            console.error('Error fetching research:', err);
        }
    };

    const fetchReviews = async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/reviews/research/${slug}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await res.json();
            if (res.ok) {
                setReviews(data);
            } else {
                console.error('Failed to fetch reviews:', data.message);
            }
        } catch (err) {
            console.error('Error fetching reviews:', err);
        }
    };


    const handleDeleteReview = async (id) => {
        const confirmDelete = confirm('Delete this review?');
        if (!confirmDelete) return;

        try {
            const token = localStorage.getItem('adminToken');
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (res.ok) {
                setReviews(prev => prev.filter(r => r._id !== id));
            } else {
                const data = await res.json();
                alert(data.message || 'Failed to delete review');
            }
        } catch (err) {
            console.error('Error deleting review:', err);
        }
    };

    useEffect(() => {
        if (slug) {
            fetchResearch();
            fetchReviews();
        }
        setLoading(false);
    }, [slug]);

    if (loading || !research) return <div className="p-10 text-center text-gray-500">Loading...</div>;

    return (
        <div className="min-h-screen bg-white py-10 px-4 md:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">{research.title}</h1>
                    <button onClick={() => router.back()} className="text-sm text-blue-600 hover:underline">
                        ← Back
                    </button>
                </div>

                {/* Meta */}
                <p className="text-sm text-gray-500">
                    {new Date(research.createdAt).toLocaleDateString()} &nbsp; | &nbsp; CyberPunk Research Team
                </p>

                {/* Research Content */}
                <div className=" border border-gray-200 p-6 rounded-md shadow-xl">
                    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: research.content }} />
                </div>


                {/* Stats */}
                <div className="flex gap-6 text-sm text-gray-600 border-t pt-4">
                    <span className="flex items-center gap-1"><FaEye /> {research.views || 0}</span>
                    <span className="flex items-center gap-1"><FaHeart /> {research.likes || 0}</span>
                    <span className="flex items-center gap-1"> {reviews.length} reviews</span>
                </div>

                {/* Reviews */}
                {/* Reviews */}
                <div className="mt-10">
                    <h3 className="text-2xl font-semibold mb-6 border-b pb-2">User Reviews</h3>

                    {reviews.length === 0 ? (
                        <p className="text-gray-500">No reviews yet.</p>
                    ) : (
                        <ul className="space-y-6">
                            {reviews.map((review) => (
                                <li
                                    key={review._id}
                                    className="relative border-l-4 border-blue-600 pl-6 pr-4 py-4 bg-blue-50 rounded-md shadow-sm group"
                                >
                                    {/* Quote icon */}
                                    <div className="absolute -left-4 top-2 text-blue-600 text-4xl font-serif opacity-20 pointer-events-none select-none">
                                        “
                                    </div>

                                    {/* Review text */}
                                    <p className="text-gray-800 text-base italic leading-relaxed mb-3">
                                        {review.review}
                                    </p>

                                    {/* Metadata */}
                                    <div className="text-sm text-gray-600 flex justify-between items-center">
                                        <div>
                                            <span className="font-semibold text-blue-800">
                                                {review.firstName} {review.lastName}
                                            </span>
                                            <span className="text-gray-500 ml-2">({review.email})</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-gray-400">{new Date(review.createdAt).toLocaleString()}</span>
                                            <button
                                                onClick={() => handleDeleteReview(review._id)}
                                                className="text-red-500 hover:text-red-700"
                                                title="Delete review"
                                            >
                                                <FaTrash size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

            </div>
        </div>
    );
}
