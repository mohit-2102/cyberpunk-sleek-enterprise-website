'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaHeart, FaRegHeart, FaEye, FaComment } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Comments from './components/Comments';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subscribe, setSubscribe] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  useEffect(() => {
    if (!slug) return;

    let isMounted = true;

    const fetchData = async () => {
      try {
        // Fetch main blog
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/blogs/${slug}`);
        if (!res.ok) throw new Error('Blog not found');
        const data = await res.json();
        if (isMounted) {
          setBlog(data);
          setLikeCount(data.likes || 0);
          const likedBlogs = JSON.parse(localStorage.getItem('likedBlogs') || '[]');
          setLiked(likedBlogs.includes(data._id));
        }


        // ✅ Only count view if not already viewed in session
        const viewed = sessionStorage.getItem(`viewed-${data._id}`);

        if (!viewed) {
          await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/blogs/${data._id}/view`, {
            method: 'POST',
          });
          sessionStorage.setItem(`viewed-${data._id}`, 'true'); // ✅ mark as viewed
        }

        // Fetch comments
        const commentRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/comments/${slug}`);
        const commentData = await commentRes.json();
        if (isMounted && Array.isArray(commentData)) {
          setCommentCount(commentData.length);
        }

        // Fetch recent blogs
        const blogsRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/blogs`);
        const blogsData = await blogsRes.json();
        const blogArray = Array.isArray(blogsData) ? blogsData : blogsData.blogs || [];
        const filtered = blogArray.filter((b) => b.slug !== slug);
        if (isMounted) {
          setRecentBlogs(filtered.slice(0, 3));
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


  const handleSubscribe = async () => {
    if (subscribe) return;

    setSubscribe(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address');
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/subscribers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage('Subscription successful!');
        setEmail('');
      } else {
        setMessage(data.message || 'Subscription failed.');
      }
    } catch (err) {
      console.error('Error:', err);
      setMessage('An error occurred. Please try again later.');
    } finally {
      setSubscribe(false);
    }
  };

  const handleLikeToggle = async () => {
    if (!blog) return;

    const likedBlogs = JSON.parse(localStorage.getItem('likedBlogs') || '[]');
    const alreadyLiked = likedBlogs.includes(blog._id);

    try {
      if (alreadyLiked) {
        await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/blogs/${blog._id}/unlike`, {
          method: 'POST',
        });
        const updated = likedBlogs.filter(id => id !== blog._id);
        localStorage.setItem('likedBlogs', JSON.stringify(updated));
        setLiked(false);
        setLikeCount(prev => Math.max(0, prev - 1));
      } else {
        await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/blogs/${blog._id}/like`, {
          method: 'POST',
        });
        const updated = [...likedBlogs, blog._id];
        localStorage.setItem('likedBlogs', JSON.stringify(updated));
        setLiked(true);
        setLikeCount(prev => prev + 1);
      }
    } catch (err) {
      console.error('Failed to update like status:', err);
      setLiked(alreadyLiked);
      setLikeCount(prev => alreadyLiked ? prev : prev - 1);
    }
  };

  if (error) return <div className="text-red-600 py-24 text-center">{error}</div>;
  if (!blog) return <div className="text-gray-600 py-24 text-center">Loading blog...</div>;

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white text-gray-800">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 py-12" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
          <p className="text-sm text-gray-500">
            {new Date(blog.createdAt).toLocaleDateString()} &nbsp; | &nbsp; {blog.author || 'CyberPunk Team'}
          </p>

          {/* Blog Images */}
          {/* {blog.images && blog.images.length > 0 && (
            <div className="my-6 space-y-4" data-aos="fade-in">
              {blog.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Image ${index + 1}`}
                  className="w-full rounded-xl shadow-md"
                />
              ))}
            </div>
          )} */}
        </section>


        {/* Blog Content */}
        <section className="max-w-4xl mx-auto px-6 py-8" data-aos="fade-up">
          {/* Research Content */}
          <div className=" border border-gray-200 p-6 rounded-md shadow-xl">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>

        </section>

        {/* Stats */}
        <section className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-200">
          <div className="flex items-center justify-center gap-12 text-gray-600">
            <div className="flex items-center gap-2">
              <FaEye className="text-xl" />
              <span className="text-lg">{blog.views || 0}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaComment className="text-xl" />
              <span className="text-lg">{commentCount}</span>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={handleLikeToggle} className="focus:outline-none">
                {liked ? (
                  <FaHeart className="text-red-500 text-xl" />
                ) : (
                  <FaRegHeart className="text-red-500 text-xl" />
                )}
              </button>
              <span className="text-lg">{likeCount}</span>
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="max-w-4xl mx-auto px-6 py-12" data-aos="fade-up">
          <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {recentBlogs.map((item) => (
              <Link
                key={item._id}
                href={`/resources/${item.slug}`}
                className="border rounded-lg shadow-sm hover:shadow-md transition flex flex-col overflow-hidden"
              >
                <img
                  src={
                    item.images && item.images.length > 0
                      ? item.images[0]
                      : 'https://source.unsplash.com/400x300/?cybersecurity,technology'
                  }
                  alt={item.title}
                  className="h-40 w-full object-cover"
                />

                <div className="flex flex-col flex-1 p-4">
                  <p className="text-sm font-medium mb-2">{item.title}</p>

                  {/* Metrics pinned at bottom */}
                  <div className="flex gap-4 text-xs text-gray-500 mt-auto">
                    <div className="flex items-center gap-1">
                      <FaEye /> {item.views || 0}
                    </div>
                    <div className="flex items-center gap-1">
                      <FaComment /> {item.commentCount || 0}
                    </div>
                    <div className="flex items-center gap-1">
                      <FaHeart /> {item.likes || 0}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>


        {/* Comments Section */}
        <Comments slug={blog.slug} />

        {/* Subscribe */}
        <section className="bg-blue-100 py-16 px-6 mt-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Be the first to know</h3>
            <p className="text-sm text-gray-700 mb-4">Subscribe to our blog to receive updates.</p>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-2/3 p-2 border border-gray-300 rounded mb-3"
            />

            <button
              onClick={handleSubscribe}
              className="bg-blue-700 text-white px-6 py-2 rounded cursor-pointer hover:bg-blue-800"
            >
              {subscribe ? 'Subscribing...' : 'Subscribe'}
            </button>

            {message && (
              <p className={`mt-2 text-sm ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                {message}
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
