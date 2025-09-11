'use client';

import { useEffect, useState } from 'react';
import JobCard from '@/components/Careers/JobCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CareersPage() {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [jobType, setJobType] = useState('');
    const [workspace, setWorkspace] = useState('');

    useEffect(() => {
        AOS.init({ duration: 700 });
    }, []);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/jobs`);
                const data = await res.json();
                setJobs(data);
                setFilteredJobs(data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();
    }, []);

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
    };

    return (
        <>
            <Navbar />

            <main className="min-h-screen pt-24 bg-gradient-to-br from-gray-50 to-white text-gray-900 px-4">
                <section className="max-w-6xl mx-auto py-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-[#2C1A47] mb-12 tracking-tight">
                        Explore Career Opportunities
                    </h1>

                    {/* Filters */}
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

                    {/* Job Cards */}
                    {filteredJobs.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredJobs.map((job) => (
                                <div key={job._id} className="h-full" data-aos="fade-up">
                                    <JobCard job={job} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center px-4 py-20 text-gray-500 text-center">
                            <img
                                src="/images/unemployment.png"
                                alt="No jobs"
                                className="w-12 h-12 opacity-70 mb-6"
                            />
                            <p className="text-lg font-medium"> No jobs available at the moment.</p>
                        </div>
                    )}
                </section>
            </main>

            <Footer />
        </>
    );
}
