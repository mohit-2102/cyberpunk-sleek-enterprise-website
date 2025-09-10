'use client';

import { useEffect, useState } from 'react';
import AdminNavbar from '@/components/admin/AdminNavbar';

export default function AdminSubscribersPage() {
    const [subscribers, setSubscribers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSubscribers = async () => {
            try {
                const token = localStorage.getItem('adminToken');
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/subscribers`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!res.ok) {
                    throw new Error('Failed to fetch subscribers');
                }

                const data = await res.json();
                setSubscribers(data);
            } catch (err) {
                console.error('Error fetching subscribers:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchSubscribers();
    }, []);

    return (
        <>
            <AdminNavbar />
            <div className="min-h-screen bg-gray-50 px-6 py-10">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6">Email Subscribers</h1>

                    {loading ? (
                        <p className="text-gray-500">Loading subscribers...</p>
                    ) : subscribers.length === 0 ? (
                        <p className="text-gray-500">No subscribers found.</p>
                    ) : (
                        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                            <table className="min-w-full table-auto">
                                <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                                    <tr>
                                        <th className="px-6 py-3">Email</th>
                                        <th className="px-6 py-3">Subscribed On</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-gray-700 divide-y divide-gray-200">
                                    {subscribers.map((subscriber) => (
                                        <tr key={subscriber._id}>
                                            <td className="px-6 py-4">{subscriber.email}</td>
                                            <td className="px-6 py-4">
                                                {new Date(subscriber.createdAt).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
