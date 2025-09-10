'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import BlogEditor from '@/components/admin/BlogEditor';

export default function CreateBlogPage() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [saving, setSaving] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.url) {
        setCoverImage(data.url);
      } else {
        alert('Image upload failed');
      }
    } catch (err) {
      console.error('Upload failed:', err);
      alert('Image upload error');
    }
  };

  const handleCreate = async () => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      alert('Not authorized. Please log in.');
      router.push('/admin');
      return;
    }

    try {
      setSaving(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/blogs`,
        {
          title,
          description,
          content,
          images: coverImage ? [coverImage] : [],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      router.push('/admin/blogs');
    } catch (err) {
      console.error('Error creating blog:', err);
      alert('Failed to create blog');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-semibold">Create New Blog</h1>

      {/* Title */}
      <input
        type="text"
        className="w-full border p-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog Title"
      />

      {/* Description */}
      <textarea
        className="w-full border p-2 rounded"
        rows={3}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Short Description"
      />

      {/* Cover Image Upload */}
      <div className="space-y-2 ">
        <label className="block font-medium">Cover Image</label>
      <div className="flex items-center gap-4">
        {coverImage && (
          <img
            src={coverImage}
            alt="Cover"
            className="h-40 w-40 object-cover rounded border"
          />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className=" max-h-10 bg-green-500 text-white  border p-2 rounded"
        />
      </div>
      </div>

      {/* Blog Editor */}
      <BlogEditor content={content} onContentChange={setContent} />

      {/* Create Button */}
      <button
        onClick={handleCreate}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        disabled={saving}
      >
        {saving ? 'Creating...' : 'Create Blog'}
      </button>
    </div>
  );
}
