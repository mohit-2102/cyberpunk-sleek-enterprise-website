'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BlogEditor from '@/components/admin/BlogEditor';

export default function CreateIoCPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);
  const router = useRouter();

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
        setImages([data.url]); // Single cover image
      } else {
        alert('Image upload failed');
      }
    } catch (err) {
      console.error('Image upload error:', err);
      alert('Upload failed');
    }
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      alert('Unauthorized. Please login again.');
      router.push('/admin');
      return;
    }

    setSaving(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/iocs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description,
          content,
          images,
        }),
      });

      if (res.ok) {
        router.push('/admin/iocs');
      } else {
        const data = await res.json();
        alert(data.message || 'Failed to create IoC');
      }
    } catch (err) {
      console.error('Create IoC error:', err);
      alert('Error creating IoC');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Create New IoC</h1>

        <input
          type="text"
          placeholder="IoC Title"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Short Description"
          className="w-full border p-2 rounded"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="space-y-2">
          <label className="block font-medium">Cover Image</label>
          <div className="flex items-center gap-4">
          {images.length > 0 && (
            <img
              src={images[0]}
              alt="Cover"
              className="h-40 w-40 object-cover rounded border"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border p-2 rounded"
          />
          </div>
        </div>

        <BlogEditor content={content} onContentChange={setContent} />

        <button
          onClick={handleSubmit}
          className="bg-[#2C1A47] text-white px-6 py-2 rounded hover:bg-[#1e1132]"
          disabled={saving}
        >
          {saving ? 'Creating...' : 'Create IoC'}
        </button>
      </div>
    </div>
  );
}
