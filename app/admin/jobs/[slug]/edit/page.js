'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import AdminNavbar from '@/components/admin/AdminNavbar';
import BlogEditor from '@/components/admin/BlogEditor';

export default function EditJobPage() {
  const { slug } = useParams();
  const router = useRouter();

  const [job, setJob] = useState(null);
  const [editorContent, setEditorContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/jobs/${slug}`);
        const data = await res.json();
        if (res.ok) {
          setJob(data);
          setEditorContent(data.fullDescription || '');

        }
      } catch (err) {
        console.error('Failed to fetch job:', err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchJob();
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

      const updatedJob = {
        ...job,
        description: job.description,         // short plain text (from textarea)
        fullDescription: editorContent        // full HTML from Tiptap
      };



      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/jobs/${slug}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedJob),
      });

      if (res.ok) {
        router.push(`/admin/jobs/${slug}`);
      } else {
        const error = await res.json();
        alert(error.message || 'Update failed');
      }
    } catch (err) {
      console.error('Error updating job:', err);
      alert('Update failed');
    } finally {
      setSaving(false);
    }
  };

  if (loading || !job) return <p className="p-6 text-center">Loading job...</p>;

  return (
    <>
      <AdminNavbar />
      <div className="max-w-4xl mx-auto p-6 space-y-6 mt-10 bg-white rounded shadow">
        <h1 className="text-2xl font-bold">Edit Job: {job.title}</h1>

        {/* Title */}
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={job.title}
          onChange={(e) => setJob({ ...job, title: e.target.value })}
          placeholder="Job Title"
        />

        {/* Job Type */}
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={job.jobType}
          onChange={(e) => setJob({ ...job, jobType: e.target.value })}
          placeholder="Job Type"
        />

        {/* Location */}
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={job.location}
          onChange={(e) => setJob({ ...job, location: e.target.value })}
          placeholder="Location"
        />

        {/* Short Description */}
        <textarea
          className="w-full border p-2 rounded"
          rows={3}
          value={job.description || ''}
          onChange={(e) => setJob({ ...job, description: e.target.value })}
          placeholder="Short Description"
        />

        {/* Tiptap Editor */}
        <BlogEditor content={editorContent} onContentChange={setEditorContent} />

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="bg-[#2C1A47] text-white px-6 py-2 rounded hover:bg-[#1e1132] transition"
          disabled={saving}
        >
          {saving ? 'Saving...' : 'Update Job'}
        </button>
      </div>
    </>
  );
}
