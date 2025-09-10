'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LogoutButton from '@/components/admin/logoutButton';

const sections = [
  { name: 'Blogs', path: '/admin/blogs' },
  { name: 'Research', path: '/admin/research' },
  { name: 'IoCs', path: '/admin/iocs' },
  { name: 'Jobs', path: '/admin/jobs' },
  { name: 'Subscribers', path: '/admin/subscribers'},
  { name: 'Users', path: '/admin/users'},
];
  
export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin'); // redirect to login if not logged in
    }
  }, []);

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="flex justify-around items-center mb-6">
        <h1 className="text-2xl font-bold text-[#2C1A47]">Admin Dashboard</h1>
        <LogoutButton />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {sections.map((section) => (
          <div
            key={section.name}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md cursor-pointer border hover:border-blue-600 transition"
            onClick={() => router.push(section.path)}
          >
            <h2 className="text-xl font-semibold text-gray-800">{section.name}</h2>
            <p className="text-sm text-gray-500 mt-2">Manage {section.name.toLowerCase()} content</p>
          </div>
        ))}
      </div>
    </main>
  );
}
