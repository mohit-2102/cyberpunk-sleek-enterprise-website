'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaEye, FaHeart, FaRegHeart } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ResearchDetailPage() {
  const { slug } = useParams();
  const [research, setResearch] = useState(null);
  const [error, setError] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    review: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!slug) return;
    let isMounted = true;

    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/research/${slug}`);
        if (!res.ok) throw new Error('Research not found');
        const data = await res.json();

        if (isMounted) {
          setResearch(data);
          setLikeCount(data.likes || 0);

          const likedResearch = JSON.parse(localStorage.getItem('likedResearch') || '[]');
          setLiked(likedResearch.includes(data._id));
        }

        // ✅ Use _id for sessionStorage key and call view only once
        const viewedKey = `viewed-research-${data._id}`;
        if (!sessionStorage.getItem(viewedKey)) {
          await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/research/${data._id}/view`, {
            method: 'POST',
          });
          sessionStorage.setItem(viewedKey, 'true');
        }
      } catch (err) {
        if (isMounted) setError(err.message);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  const handleLikeToggle = async () => {
    if (!research) return;

    const likedResearch = JSON.parse(localStorage.getItem('likedResearch') || '[]');
    const alreadyLiked = likedResearch.includes(research._id);

    try {
      if (alreadyLiked) {
        await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/research/${research._id}/unlike`, { method: 'POST' });
        const updated = likedResearch.filter(id => id !== research._id);
        localStorage.setItem('likedResearch', JSON.stringify(updated));
        setLiked(false);
        setLikeCount(prev => Math.max(0, prev - 1));
      } else {
        await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/research/${research._id}/like`, { method: 'POST' });
        const updated = [...likedResearch, research._id];
        localStorage.setItem('likedResearch', JSON.stringify(updated));
        setLiked(true);
        setLikeCount(prev => prev + 1);
      }
    } catch (err) {
      console.error('Error toggling like:', err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!form.email || !form.review) {
      setMessage('Please fill in the required fields.');
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/reviews/research/${slug}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage('Review submitted!');
        setForm({ firstName: '', lastName: '', email: '', review: '' });
      } else {
        setMessage(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error(err);
      setMessage('Server error');
    }
  };

  if (error) return <div className="text-red-600 py-24 text-center">{error}</div>;
  if (!research) return <div className="text-gray-600 py-24 text-center">Loading research...</div>;

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white text-gray-800">
        {/* Hero Image */}
        {research.imageUrl && (
          <div className="w-full">
            <img
              src={research.imageUrl}
              alt={research.title}
              className="w-full max-h-[480px] object-cover"
            />
          </div>
        )}

        {/* Title */}
        <section className="max-w-5xl mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">{research.title}</h1>
        </section>

        {/* Stats */}
        <section className="max-w-4xl mx-auto px-6 flex items-center gap-6 mb-6 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <FaEye /> {research.views ?? 0}
          </div>
          <div className="flex items-center gap-1">
            <button onClick={handleLikeToggle}>
              {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
            </button>
            {likeCount}
          </div>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-6 pb-10">
          {/* Research Content */}
          <div className="border border-gray-50 p-6 rounded-md shadow-xl">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: research.content }} />
          </div>
        </section>

        {/* Review Form */}
        <section className="bg-blue-50 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-lg font-semibold mb-6">Let’s Work Together</h2>
            <form className="grid md:grid-cols-2 gap-4" onSubmit={handleReviewSubmit}>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                type="text"
                placeholder="First Name"
                className="border p-2 rounded"
              />
              <textarea
                name="review"
                value={form.review}
                onChange={handleChange}
                placeholder="Review"
                className="border p-2 rounded h-full md:row-span-2"
              ></textarea>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Last Name"
                className="border p-2 rounded"
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Email *"
                className="border p-2 rounded"
              />
              <button
                type="submit"
                className="md:col-span-2 bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
              >
                Send
              </button>
              {message && <p className="text-sm text-red-500 md:col-span-2">{message}</p>}
            </form>
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
