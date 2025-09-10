'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoutButton from '@/components/admin/logoutButton';

const navItems = [
    { label: 'Dashboard', href: '/admin/dashboard' },
    { label: 'Blogs', href: '/admin/blogs' },
    { label: 'Research', href: '/admin/research' },
    { label: 'IoCs', href: '/admin/iocs' },
    { label: 'Jobs', href: '/admin/jobs' },
    { label: 'Subscribers', href: '/admin/subscribers' },
    { label: 'Users', href: '/admin/users' },
];

export default function AdminNavbar() {
    const pathname = usePathname();

    return (
        <nav className="bg-[#2C1A47] text-white px-6 py-4 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <h1 className="text-xl font-bold">CyberPunk Admin</h1>

                <div className="flex space-x-6 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-sm font-medium hover:underline ${pathname.startsWith(item.href) ? 'underline text-blue-300' : ''
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <LogoutButton />
                </div>
            </div>
        </nav>
    );
}
