'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminNavbar from '@/components/admin/AdminNavbar';
import BlogEditor from '@/components/admin/BlogEditor';

export default function CreateJobPage() {
  const router = useRouter();

  const [job, setJob] = useState({
    title: '',
    jobType: '',
    location: '',
    workspace: '',
    description: '',
  });

  const [editorContent, setEditorContent] = useState('');
  const [saving, setSaving] = useState(false);

  const handleCreate = async () => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      alert('Unauthorized. Please log in.');
      router.push('/admin');
      return;
    }

    try {
      setSaving(true);

      const newJob = {
        ...job,
        fullDescription: editorContent,
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/jobs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newJob),
      });

      if (res.ok) {
        const created = await res.json();
        router.push(`/admin/jobs/${created.slug}`);
      } else {
        const error = await res.json();
        alert(error.message || 'Creation failed');
      }
    } catch (err) {
      console.error('Error creating job:', err);
      alert('Job creation failed');
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="max-w-4xl mx-auto p-6 space-y-6 mt-10 bg-white rounded shadow">
        <h1 className="text-2xl font-bold">Create New Job</h1>

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
          placeholder="Job Type (e.g., Internship, Full-Time)"
        />

        {/* Location */}
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={job.location}
          onChange={(e) => setJob({ ...job, location: e.target.value })}
          placeholder="Location (e.g., Mumbai, India)"
        />

        {/* Workspace */}
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={job.workspace}
          onChange={(e) => setJob({ ...job, workspace: e.target.value })}
          placeholder="Workspace (e.g., Remote, Onsite, Hybrid)"
        />

        {/* Short Description */}
        <textarea
          className="w-full border p-2 rounded"
          rows={3}
          value={job.description}
          onChange={(e) => setJob({ ...job, description: e.target.value })}
          placeholder="Short Description"
        />

        {/* Full Description with Tiptap */}
        <BlogEditor content={editorContent} onContentChange={setEditorContent} />

        {/* Save Button */}
        <button
          onClick={handleCreate}
          className="bg-[#2C1A47] text-white px-6 py-2 cursor-pointer rounded hover:bg-[#1e1132] transition"
          disabled={saving}
        >
          {saving ? 'Creating...' : 'Create Job'}
        </button>
      </div>
    </>
  );
}
