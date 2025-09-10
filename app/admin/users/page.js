'use client';

import { useEffect, useState } from 'react';
import AdminNavbar from '@/components/admin/AdminNavbar';

export default function AdminUsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('adminToken');
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/users`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!res.ok) {
                    throw new Error('Failed to fetch users');
                }

                const data = await res.json();
                setUsers(data);
            } catch (err) {
                console.error('Error fetching users:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <>
            <AdminNavbar />
            <div className="min-h-screen bg-gray-50 px-6 py-10">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6">Registered Users</h1>

                    {loading ? (
                        <p className="text-gray-500">Loading users...</p>
                    ) : users.length === 0 ? (
                        <p className="text-gray-500">No users found.</p>
                    ) : (
                        <div className="overflow-x-auto bg-white border border-gray-500 shadow-xl rounded-lg">
                            <table className="min-w-full table-auto">
                                <thead className="bg-gray-100 text-sm text-gray-700 font-semibold text-left">
                                    <tr>
                                        <th className="px-6 py-3">Name</th>
                                        <th className="px-6 py-3">Email</th>
                                        {/* <th className="px-6 py-3">Role</th> */}
                                        <th className="px-6 py-3">Joined</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                                    {users.map((user) => (
                                        <tr key={user._id}>
                                            <td className="px-6 py-4">{user.name || '—'}</td>
                                            <td className="px-6 py-4">{user.email}</td>
                                            {/* <td className="px-6 py-4 capitalize">{user.role}</td> */}
                                            <td className="px-6 py-4">
                                                {new Date(user.createdAt).toLocaleDateString()}
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
