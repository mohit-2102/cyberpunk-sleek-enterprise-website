'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';
import BlogEditor from '@/components/admin/BlogEditor';

export default function EditResearchPage() {
  const { slug } = useParams();
  const router = useRouter();

  const [research, setResearch] = useState(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchResearch = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/research/${slug}`);
        setResearch(res.data);
        setContent(res.data.content || '');
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch research:', error);
        setLoading(false);
      }
    };

    if (slug) fetchResearch();
  }, [slug]);

  const handleSave = async () => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      alert('Unauthorized. Please log in.');
      router.push('/admin');
      return;
    }

    try {
      setSaving(true);
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE}/research/${slug}`,
        {
          ...research,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      router.push('/admin/research');
    } catch (error) {
      console.error('Failed to update research:', error);
      alert('Error updating research');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="p-4">Loading research...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-semibold">Edit Research: {research?.title}</h1>

      {/* Title */}
      <input
        type="text"
        className="w-full border p-2 rounded"
        value={research?.title || ''}
        onChange={(e) => setResearch({ ...research, title: e.target.value })}
        placeholder="Research Title"
      />

      {/* Description */}
      <textarea
        className="w-full border p-2 rounded"
        rows={3}
        value={research?.description || ''}
        onChange={(e) => setResearch({ ...research, description: e.target.value })}
        placeholder="Short Description"
      />

      {/* Cover Image */}
      <div className="space-y-2">
        <label className="block font-medium">Cover Image</label>
        <div className='flex items-center gap-4'>

        {research?.images?.[0] && (
          <img
          src={research.images[0]}
          alt="Cover"
          className="h-40 w-40 object-cover rounded border"
          />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={async (e) => {
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
                setResearch((prev) => ({
                  ...prev,
                  images: [data.url],
                }));
              } else {
                alert('Image upload failed');
              }
            } catch (err) {
              console.error('Image upload error:', err);
              alert('Upload failed');
            }
          }}
          className="border p-2 rounded"
          />
          </div>
      </div>

      {/* Tiptap Editor */}
      <BlogEditor content={content} onContentChange={setContent} />

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="bg-[#2C1A47] text-white px-6 py-2 rounded hover:bg-[#1e1132] transition"
        disabled={saving}
      >
        {saving ? 'Saving...' : 'Update Research'}
      </button>
    </div>
  );
}
