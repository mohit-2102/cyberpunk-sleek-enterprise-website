
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaHeart, FaEye, FaComment } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ResourcesPage() {
  const [blogs, setBlogs] = useState([]);
  const [researches, setResearches] = useState([]);
  const [iocs, setIocs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  useEffect(() => {

    // Fetch blogs
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/blogs`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          console.error('Expected blogs to be an array, got:', data);
          setBlogs([]);
        }
      })
      .catch(err => {
        console.error(err);
        setBlogs([]);
      });


    // Fetch research
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/research`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setResearches(data);
        } else {
          console.error('Expected researches to be an array, got:', data);
          setResearches([]);
        }
      })
      .catch(err => {
        console.error(err);
        setResearches([]);
      });


    // Fetch IoCs
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/iocs`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setIocs(data);
        } else {
          console.error('Expected iocs to be an array, got:', data);
          setIocs([]);
        }
      })
      .catch(err => {
        console.error(err);
        setIocs([]);
      });

  }, []);

  const handleSubscribe = async () => {
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
    }
  };


  // Filter function for all content types
  const filterContent = (content) => {
    if (!Array.isArray(content)) return [];
    return content.filter(item =>
      item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };


  // Get filtered content
  const filteredBlogs = filterContent(blogs);
  const filteredResearch = filterContent(researches);
  const filteredIocs = filterContent(iocs);

  // Search handler with debounce
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };



  return (
    <>
      <Navbar />
      <main className="bg-white text-gray-800 pt-24">
        {/* Header */}
        <section className="text-center py-12 bg-[#2e1d46] text-white" data-aos="fade-down">
          <h1 className="text-4xl font-bold mb-2">Resources</h1>
          <p className="text-sm">Find Blogs, Research Papers and Indicator of Compromise on latest trends.</p>
        </section>

        {/* Search */}
        <div className="max-w-5xl mx-auto mt-6 px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search blogs, research papers and IoCs..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              value={searchQuery}
              onChange={handleSearch}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* All Posts */}
        <section className="max-w-5xl mx-auto px-4 py-8">
          <h2 className="text-xl font-bold mb-4">All Posts</h2>
          {filteredBlogs.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No matching blogs found</p>
          ) : (
            
            <div className="grid md:grid-cols-2 gap-6" data-aos="fade-right">
              {filteredBlogs.map((blog) => (
                <Link
                 key={blog._id} 
                 href={`/resources/${blog.slug}`}
                 className="flex border rounded-lg overflow-hidden shadow-sm">

                  {/* <img src={blog.imageUrl} alt={blog.title} className="w-40 object-cover" /> */}
                  <img
                    src={
                      blog.images && blog.images.length > 0
                        ? blog.images[0]
                        : 'https://source.unsplash.com/400x300/?cybersecurity,technology'
                    }
                    alt={blog.title}
                    className="w-40 h-40 object-cover"
                  />

                  <div className="flex-1 p-4">
                    <h3 className="block font-semibold hover:underline">
                      {blog.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(blog.createdAt).toDateString()} &bull; {blog.readTime || '2 min read'}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                      <span>{blog.views ?? 0} views</span>
                      <span>{blog.commentCount ?? 0} comments</span>
                      <span className="flex items-center gap-1 ">
                        {blog.likes ?? 0} <FaHeart className="text-sm" />
                      </span>
                    </div>

                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Research */}
        <section className="bg-[#f3f6fd] py-16">
          <div className="max-w-5xl mx-auto px-4" data-aos="fade-left">
            <h2 className="text-2xl font-bold mb-6">Research</h2>
            {filteredResearch.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No matching research papers found</p>
            ) : (

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredResearch.map((research) => (
                  <Link
                    key={research._id}
                    href={`/resources/research/${research.slug}`}
                    className="bg-white rounded shadow hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden group"
                  >
                    <img
                      src={research.images?.[0] || 'https://source.unsplash.com/600x400/?cybersecurity'}
                      alt={research.title}
                      className="h-48 w-full object-cover group-hover:opacity-90 transition"
                    />

                    <div className="p-4 flex flex-col">
                      <h2 className="text-lg font-semibold mb-1 text-black">{research.title}</h2>

                      <p className="text-xs text-gray-500 mb-2">
                        {new Date(research.createdAt).toLocaleDateString()}
                      </p>

                      <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                        {research.description}
                      </p>

                      <div className="flex gap-4 text-sm text-gray-600 mt-auto">
                        <div className="flex items-center gap-1">
                          <FaEye /> {research.views || 0}
                        </div>
                        <div className="flex items-center gap-1">
                          <FaHeart /> {research.likes || 0}
                        </div>
                        <div className="flex items-center gap-1">
                          <FaComment /> {research.reviewCount || 0}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>


            )}
          </div>
        </section>

        {/* IoCs */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto " data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-10">Indicator of Compromise (IoCs)</h2>
            {filteredIocs.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No matching IoCs found</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-6 mx-auto w-fit">
                {filteredIocs.map((ioc) => (
                  <Link key={ioc._id} href={`/resources/iocs/${ioc.slug}`} className="text-center ">
                    <img
                      src={
                        ioc.images?.[0] ||
                        'https://source.unsplash.com/80x80/?cybersecurity,hacking,threat'
                      }
                      alt={ioc.title}
                      className="w-30 h-30 mx-auto object-cover border border-gray-500 rounded-full mb-2"
                    />

                    <p className="font-medium hover:underline text-sm">{ioc.title}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Subscribe */}
        <section className="bg-blue-100 py-16 px-6 my-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Be the first to know</h3>
            <p className="text-sm text-gray-700 mb-4">Subscribe to our blog to receive updates.</p>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-2/3 p-2 mx-2 border border-black-300 rounded mb-3"
            />

            <button
              onClick={handleSubscribe}
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
            >
              Subscribe
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



// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { FaHeart, FaEye, FaComment } from 'react-icons/fa';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// export default function ResourcesPageClient({ initialBlogs, initialResearches, initialIocs }) {
//   const [blogs] = useState(initialBlogs || []);
//   const [researches] = useState(initialResearches || []);
//   const [iocs] = useState(initialIocs || []);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubscribe = async () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setMessage('Please enter a valid email address');
//       return;
//     }
//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/subscribers`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         setMessage('Subscription successful!');
//         setEmail('');
//       } else {
//         setMessage(data.message || 'Subscription failed.');
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage('An error occurred. Please try again later.');
//     }
//   };

//   const filterContent = (content) =>
//     content.filter(
//       (item) =>
//         item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         item.summary?.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//   const filteredBlogs = filterContent(blogs);
//   const filteredResearch = filterContent(researches);
//   const filteredIocs = filterContent(iocs);

//   return (
//     <>
//       <Navbar />
//       <main className="bg-white text-gray-800 pt-24">
//         {/* Header */}
//         <section className="text-center py-12 bg-[#2e1d46] text-white">
//           <h1 className="text-4xl font-bold mb-2">Resources</h1>
//           <p className="text-sm">
//             Find Blogs, Research Papers and Indicator of Compromise on latest trends.
//           </p>
//         </section>

//         {/* Search */}
//         <div className="max-w-5xl mx-auto mt-6 px-4">
//           <input
//             type="text"
//             placeholder="Search blogs, research papers and IoCs..."
//             className="w-full px-4 py-2 border border-gray-300 rounded-md"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>

//         {/* All Posts */}
//         <section className="max-w-5xl mx-auto px-4 py-8">
//           <h2 className="text-xl font-bold mb-4">All Posts</h2>
//           {filteredBlogs.length === 0 ? (
//             <p className="text-gray-500 text-center py-4">No matching blogs found</p>
//           ) : (
//             <div className="grid md:grid-cols-2 gap-6">
//               {filteredBlogs.map((blog) => (
//                 <Link
//                   key={blog._id}
//                   href={`/resources/${blog.slug}`}
//                   className="flex border rounded-lg overflow-hidden shadow-sm"
//                 >
//                   <img
//                     src={
//                       blog.images?.[0] ||
//                       'https://source.unsplash.com/400x300/?cybersecurity,technology'
//                     }
//                     alt={blog.title}
//                     className="w-40 h-40 object-cover"
//                   />
//                   <div className="flex-1 p-4">
//                     <h3 className="block font-semibold hover:underline">{blog.title}</h3>
//                     <p className="text-xs text-gray-500 mt-1">
//                       {new Date(blog.createdAt).toDateString()} &bull;{' '}
//                       {blog.readTime || '2 min read'}
//                     </p>
//                     <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
//                       <span>{blog.views ?? 0} views</span>
//                       <span>{blog.commentCount ?? 0} comments</span>
//                       <span className="flex items-center gap-1">
//                         {blog.likes ?? 0} <FaHeart className="text-sm" />
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           )}
//         </section>

//         {/* Research */}
//         <section className="bg-[#f3f6fd] py-16">
//           <div className="max-w-5xl mx-auto px-4">
//             <h2 className="text-2xl font-bold mb-6">Research</h2>
//             {filteredResearch.length === 0 ? (
//               <p className="text-gray-500 text-center py-4">No matching research papers found</p>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {filteredResearch.map((research) => (
//                   <Link
//                     key={research._id}
//                     href={`/resources/research/${research.slug}`}
//                     className="bg-white rounded shadow hover:shadow-md flex flex-col overflow-hidden"
//                   >
//                     <img
//                       src={
//                         research.images?.[0] ||
//                         'https://source.unsplash.com/600x400/?cybersecurity'
//                       }
//                       alt={research.title}
//                       className="h-48 w-full object-cover"
//                     />
//                     <div className="p-4 flex flex-col">
//                       <h2 className="text-lg font-semibold mb-1 text-black">{research.title}</h2>
//                       <p className="text-xs text-gray-500 mb-2">
//                         {new Date(research.createdAt).toLocaleDateString()}
//                       </p>
//                       <p className="text-sm text-gray-700 mb-4 line-clamp-3">
//                         {research.description}
//                       </p>
//                       <div className="flex gap-4 text-sm text-gray-600 mt-auto">
//                         <div className="flex items-center gap-1">
//                           <FaEye /> {research.views || 0}
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <FaHeart /> {research.likes || 0}
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <FaComment /> {research.reviewCount || 0}
//                         </div>
//                       </div>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         </section>

//         {/* IoCs */}
//         <section className="py-16 px-4 bg-white">
//           <div className="max-w-5xl mx-auto">
//             <h2 className="text-2xl font-bold mb-10">Indicator of Compromise (IoCs)</h2>
//             {filteredIocs.length === 0 ? (
//               <p className="text-gray-500 text-center py-4">No matching IoCs found</p>
//             ) : (
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//                 {filteredIocs.map((ioc) => (
//                   <Link
//                     key={ioc._id}
//                     href={`/resources/iocs/${ioc.slug}`}
//                     className="text-center"
//                   >
//                     <img
//                       src={
//                         ioc.images?.[0] ||
//                         'https://source.unsplash.com/80x80/?cybersecurity,hacking,threat'
//                       }
//                       alt={ioc.title}
//                       className="w-30 h-30 mx-auto object-cover border border-gray-500 rounded-full mb-2"
//                     />
//                     <p className="font-medium hover:underline text-sm">{ioc.title}</p>
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         </section>

//         {/* Subscribe */}
//         <section className="bg-blue-100 py-16 px-6 my-12">
//           <div className="max-w-3xl mx-auto text-center">
//             <h3 className="text-2xl font-bold mb-4">Be the first to know</h3>
//             <p className="text-sm text-gray-700 mb-4">Subscribe to our blog to receive updates.</p>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full md:w-2/3 p-2 mx-2 border border-gray-300 rounded mb-3"
//             />
//             <button
//               onClick={handleSubscribe}
//               className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
//             >
//               Subscribe
//             </button>
//             {message && (
//               <p
//                 className={`mt-2 text-sm ${
//                   message.includes('success') ? 'text-green-600' : 'text-red-600'
//                 }`}
//               >
//                 {message}
//               </p>
//             )}
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// }


