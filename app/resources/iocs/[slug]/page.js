'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import parse from 'html-react-parser';
import { FaEye, FaHeart, FaRegHeart } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function IoCDetailPage() {
  const { slug } = useParams();
  const [ioc, setIoc] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const fetchIoC = async () => {
      try {
        console.log('Fetching from:', `${process.env.NEXT_PUBLIC_API_BASE}/iocs/${slug}`);

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/iocs/${slug}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        setIoc(data);
        setLikeCount(data.likes || 0);

        const likedIoCs = JSON.parse(localStorage.getItem('likedIocs') || '[]');
        setLiked(likedIoCs.includes(data._id));

        const viewedKey = `viewed-ioc-${data._id}`;
        if (!sessionStorage.getItem(viewedKey)) {
          await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/iocs/${data._id}/view`, { method: 'POST' });
          sessionStorage.setItem(viewedKey, 'true');
        }
      } catch (error) {
        console.error('Error fetching IoC:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) fetchIoC();
  }, [slug]);

  const handleLikeToggle = async () => {
    if (!ioc) return;
    const likedIoCs = JSON.parse(localStorage.getItem('likedIocs') || '[]');
    const alreadyLiked = likedIoCs.includes(ioc._id);

    try {
      if (alreadyLiked) {
        await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/iocs/${ioc.slug}/unlike`, { method: 'POST' });
        const updated = likedIoCs.filter(id => id !== ioc._id);
        localStorage.setItem('likedIocs', JSON.stringify(updated));
        setLiked(false);
        setLikeCount(prev => Math.max(0, prev - 1));
      } else {
        await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/iocs/${ioc.slug}/like`, { method: 'POST' });
        const updated = [...likedIoCs, ioc._id];
        localStorage.setItem('likedIocs', JSON.stringify(updated));
        setLiked(true);
        setLikeCount(prev => prev + 1);
      }
    } catch (err) {
      console.error('Error toggling like:', err);
    }
  };

  if (isLoading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-600">Error: {error}</div>;
  if (!ioc) return <div className="text-center py-20">IoC not found</div>;

  return (
    <>
      <Navbar />
      <main className="pt-24 text-gray-800">
        {/* Title */}
        <section className="text-center py-8 px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2e1d46] mb-2">{ioc.title}</h1>
          <p className="text-sm text-gray-500 mb-1">Published by CyberPunk Threat Intelligence Team</p>
          <p className="text-sm text-gray-500">Date: {new Date(ioc.createdAt).toLocaleDateString()}</p>
        </section>

        {/* Stats */}
        <section className="flex items-center justify-center gap-6 mb-4 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <FaEye /> {ioc.views ?? 0}
          </div>
          <div className="flex items-center gap-1">
            <button onClick={handleLikeToggle}>
              {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
            </button>
            {likeCount}
          </div>
        </section>

        {/* Banner Image */}
        {/* <section className="w-full max-w-4xl mx-auto mt-4 px-4">
          <img src={ioc.images?.[0]} alt={ioc.title} className="w-full rounded shadow-lg object-cover" />
        </section> */}

        {/* Content */}
        <section className="prose prose-sm sm:prose-base lg:prose-lg max-w-4xl mx-auto px-4 pb-16">
          <div className="border border-gray-200 p-6 rounded-md shadow-xl">
            {parse(ioc.content || '')}
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
            <img
              src="/images/cta-handshake.jpg"
              alt="Cyber handshake"
              className="w-full rounded-xl shadow-md"
              data-aos="fade-right"
            />
            <div className="bg-blue-100 rounded-xl p-6" data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Collaborate to Navigate the Cyber Seas Safely: A Journey Toward Secure Digital Horizons
              </h3>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
