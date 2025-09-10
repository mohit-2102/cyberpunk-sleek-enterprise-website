'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { FaEye, FaHeart } from 'react-icons/fa';

export default function AdminIocDetailPage() {
    const { slug } = useParams();
    const router = useRouter();
    const [ioc, setIoc] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchIoc = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/iocs/${slug}`);
            const data = await res.json();
            if (res.ok) setIoc(data);
        } catch (err) {
            console.error('Error fetching IOC:', err);
        }
    };

    useEffect(() => {
        const loadData = async () => {
            if (!slug) return;
            setLoading(true);
            await fetchIoc();
            setLoading(false);
        };

        loadData();
    }, [slug]);

    if (loading || !ioc) {
        return <div className="p-10 text-center text-gray-500">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-white py-10 px-4 md:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">{ioc.title}</h1>
                    <button onClick={() => router.back()} className="text-sm text-blue-600 hover:underline">
                        ← Back
                    </button>
                </div>
                

                {/* Meta */}
                <p className="text-sm text-gray-500">
                    {new Date(ioc.createdAt).toLocaleDateString()} &nbsp; | &nbsp; CyberPunk IoC Team
                </p>
                {/* Stats */}
                <div className="flex gap-6 justify-center text-sm text-gray-600 border-t pt-4">
                    <span className="flex items-center gap-1"><FaEye /> {ioc.views || 0}</span>
                    <span className="flex items-center gap-1"><FaHeart /> {ioc.likes || 0}</span>
                </div>

                {/* Content */}
                <div className="border border-gray-200 p-6 rounded-md shadow-xl">
                    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: ioc.content }} />
                </div>

                
            </div>
        </div>
    );
}
