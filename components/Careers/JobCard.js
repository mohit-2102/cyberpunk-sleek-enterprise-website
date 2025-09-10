'use client';

import Link from 'next/link';
import { BriefcaseIcon, MapPinIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function JobCard({ job }) {
    return (
        <motion.div
            className="flex flex-col justify-between h-full min-h-[280px] border rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition duration-300 w-full max-w-md mx-auto"
            whileHover={{ scale: 1.02 }}
        >
            <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                    {job.description}
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

            <div className="mt-4">
                <Link
                    href={`/careers/${job.slug}`}
                    className="inline-flex items-center justify-center text-sm text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md transition"
                >
                    View Details
                </Link>
            </div>

        </motion.div>
    );
}
