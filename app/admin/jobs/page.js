'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEdit, FaTrash } from 'react-icons/fa';
import AdminNavbar from '@/components/admin/AdminNavbar';
import { BriefcaseIcon, MapPinIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AdminJobsPage() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [jobType, setJobType] = useState('');
    const [workspace, setWorkspace] = useState('');
    const [isFilterApplied, setIsFilterApplied] = useState(false);
    const router = useRouter();

    const fetchJobs = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/jobs`);
            const data = await res.json();
            if (Array.isArray(data)) {
                setJobs(data);
                setFilteredJobs(data);
            }
        } catch (err) {
            console.error('Failed to fetch jobs:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (slug) => {
        if (!confirm('Are you sure you want to delete this job?')) return;

        try {
            const token = localStorage.getItem('adminToken');
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/jobs/${slug}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (res.ok) {
                setJobs(jobs.filter(job => job.slug !== slug));
            } else {
                const error = await res.json();
                alert(error.message || 'Failed to delete job');
            }
        } catch (err) {
            alert('Error deleting job');
            console.error(err);
        }
    };
    const handleSearch = () => {
    let filtered = [...jobs];

    if (jobType && jobType !== 'All') {
        filtered = filtered.filter(
            (job) => (job.jobType || job.type).toLowerCase() === jobType.toLowerCase()
        );
    }

    if (workspace && workspace !== 'All') {
        const onsiteCities = ['mumbai', 'pune', 'delhi', 'bangalore', 'gurgaon'];
        filtered = filtered.filter((job) => {
            const ws = (job.workspace || '').toLowerCase().trim();
            const loc = (job.location || '').toLowerCase().trim();

            if (workspace.toLowerCase() === 'onsite') {
                return (
                    ws === 'onsite' ||
                    onsiteCities.some((city) => loc.includes(city))
                );
            }

            return ws === workspace.toLowerCase();
        });
    }

    setFilteredJobs(filtered);
    setIsFilterApplied(true); // 👈 mark filtering as applied
};


    useEffect(() => {
        fetchJobs();
    }, []);

    return (
        <>
            <AdminNavbar />
            <div className="min-h-screen bg-gray-50 px-6 py-10">
                <div className="max-w-5xl mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold">Manage Jobs</h1>
                        <button
                            onClick={() => router.push('/admin/jobs/create')}
                            className="bg-[#2C1A47] text-white px-4 py-2 rounded hover:bg-[#1e1132]"
                        >
                            + Create Job
                        </button>
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap justify-center items-end gap-6 mb-12">
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Job Type</label>
                            <select
                                value={jobType}
                                onChange={(e) => setJobType(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white"
                            >
                                <option value="">Select Job Type</option>
                                <option value="All">All</option>
                                <option value="Internship">Internship</option>
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Contract">Contract</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Workspace</label>
                            <select
                                value={workspace}
                                onChange={(e) => setWorkspace(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white"
                            >
                                <option value="">Select Workspace</option>
                                <option value="All">All</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Remote">Remote</option>
                                <option value="Onsite">Onsite</option>
                            </select>
                        </div>

                        <button
                            onClick={handleSearch}
                            className="px-6 py-2 mt-1 bg-[#2C1A47] text-white font-medium hover:bg-[#1e1132] transition rounded-md"
                        >
                            Search Jobs
                        </button>
                    </div>

                    {/* Job Count */}
                    <div className="text-sm font-medium text-gray-700 text-center mb-6">
                        {filteredJobs.length} job{filteredJobs.length !== 1 && 's'} found
                    </div>

                    {loading ? (
                        <p className="text-center text-gray-500">Loading jobs...</p>
                    ) : (
                        <>
                            {(isFilterApplied ? filteredJobs : jobs).length === 0 ? (
                                <p className="text-center text-gray-500">No jobs available.</p>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {(isFilterApplied ? filteredJobs : jobs).map((job) => (
                                        <motion.div
                                            key={job._id}
                                            className="flex flex-col justify-between min-h-[280px] border rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition duration-300 w-full"
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <div>
                                        <h3 className="text-xl font-semibold text-blue-800 mb-2">{job.title}</h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {job.shortDescription || job.description}
                                        </p>

                                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                                            <div className="flex items-center gap-1">
                                                <BriefcaseIcon className="w-4 h-4" />
                                                {job.jobType}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPinIcon className="w-4 h-4" />
                                                {job.location}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <CalendarDaysIcon className="w-4 h-4" />
                                                Posted on {new Date(job.createdAt).toLocaleDateString()}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex justify-between items-center">
                                        <Link
                                            href={`/admin/jobs/${job.slug}`}
                                            className="inline-flex items-center text-sm text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md transition cursor-pointer"
                                        >
                                            View Details
                                        </Link>
                                        <div className="flex gap-3 text-sm">
                                            <button
                                                onClick={() => router.push(`/admin/jobs/${job.slug}/edit`)}
                                                className="text-yellow-600 hover:text-yellow-800 cursor-pointer"
                                            >
                                                <FaEdit />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(job.slug)}
                                                className="text-red-600 hover:text-red-800 cursor-pointer"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}

                </div>
            </div>
        </>
    );
}
