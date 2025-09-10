'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';
import BlogEditor from '@/components/admin/BlogEditor';

export default function EditIocPage() {
  const { slug } = useParams();
  const router = useRouter();

  const [ioc, setIoc] = useState(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchIoc = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/iocs/${slug}`);
        setIoc(res.data);
        setContent(res.data.content || '');
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch IoC:', error);
        setLoading(false);
      }
    };

    if (slug) fetchIoc();
  }, [slug]);

  const handleSave = async () => {
    const token = localStorage.getItem('adminToken');

    if (!token) {
      alert('You are not authorized. Please log in again.');
      router.push('/admin');
      return;
    }

    try {
      setSaving(true);
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE}/iocs/${slug}`,
        {
          ...ioc,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      router.push('/admin/iocs');
    } catch (error) {
      console.error('Failed to update IoC:', error);
      alert('Error updating IoC');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="p-4">Loading IoC...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-semibold">Edit IoC: {ioc?.title}</h1>

      {/* IoC Title */}
      <input
        type="text"
        className="w-full border p-2 rounded"
        value={ioc?.title || ''}
        onChange={(e) => setIoc({ ...ioc, title: e.target.value })}
        placeholder="IoC Title"
      />

      {/* IoC Description */}
      <textarea
        className="w-full border p-2 rounded"
        rows={3}
        value={ioc?.description || ''}
        onChange={(e) => setIoc({ ...ioc, description: e.target.value })}
        placeholder="Short Description"
      />

      {/* Cover Image */}
      <div className='space-y-2'>
        <label className='block font-medium'>Cover Image</label>
        <div className='flex items-center gap-4'>
        {ioc?.images?.[0] && (
          <img
          src={ioc.images[0]}
          alt='Cover Image'
          className='h-40 w-40 object-cover rounded border'
          />
        )}
        <input
          type='file'
          accept='image/*'
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
                setIoc((prev) => ({
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

      {/* Rich Content Editor */}
      <BlogEditor content={content} onContentChange={setContent} />

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="bg-[#2C1A47] text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        disabled={saving}
      >
        {saving ? 'Saving...' : 'Save Changes'}
      </button>
    </div>
  );
}
