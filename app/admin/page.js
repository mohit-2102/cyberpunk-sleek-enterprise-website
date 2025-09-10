import AdminLoginForm from '@/components/admin/AdminLoginForm';

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <AdminLoginForm />
    </main>
  );
}



// 'use client';

// import { useState } from 'react';

// export default function AdminDashboard() {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [author, setAuthor] = useState('');
//   const [image, setImage] = useState(null);
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('author', author);
//     formData.append('content', content);
//     if (image) formData.append('image', image);

//     const res = await fetch('http://localhost:4000/api/blogs', {
//       method: 'POST',
//       body: formData, // Automatically sets the correct multipart headers
//     });

//     const result = await res.json();
//     if (res.ok) {
//       setMessage('✅ Blog posted successfully!');
//       setTitle('');
//       setContent('');
//       setAuthor('');
//       setImage(null);
//     } else {
//       setMessage('❌ Failed to post blog.');
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 mt-12">
//       <h1 className="text-2xl font-bold mb-6">Create New Blog Post</h1>
//       {message && <div className="mb-4 text-sm text-green-600">{message}</div>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Author Name"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//           className="w-full p-2 border rounded"
//         />
//         <textarea
//           placeholder="Write blog content here..."
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           className="w-full p-2 border rounded h-60"
//           required
//         />

//         {/* ✅ Image Upload */}
//         <div>
//           <label className="block mb-1 text-sm font-medium">Upload Image</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setImage(e.target.files?.[0])}
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Publish
//         </button>
//       </form>
//     </div>
//   );
// }
