'use client';

import { MapPinIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import AOS from 'aos';

export default function JobDetail({ job }) {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="bg-gray-100 text-black p-6 border border-gray-400 rounded-lg shadow-xl" data-aos="fade-up">
      <div className="mt-6 flex justify-between mb-4 items-center">
        <h1 className="text-3xl font-bold items-center text-[#2C1A47] ">{job.title}</h1>
        <a href='mailto:contact@CyberPunk.com?subject=Application for Job - {job.title}'
          className='bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-md transition'
        >
          Apply Now
        </a>
      </div>


      <div className="flex flex-wrap gap-6 text-gray-600 text-sm mb-6">
        <span className="flex items-center gap-1">
          <BriefcaseIcon className="w-4 h-4" /> {job.jobType}
        </span>
        <span className="flex items-center gap-1">
          <MapPinIcon className="w-4 h-4" /> {job.location}
        </span>
        <span>Posted on {new Date(job.createdAt).toLocaleDateString()}</span>
      </div>

      {/* Job Description */}
      {job.description && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Job Description</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{job.description}</p>
        </div>
      )}

      {/* Editor-rendered HTML */}
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: job.fullDescription }} />
      <div className="mt-6 text-center">
        <a href='mailto:contact@CyberPunk.com?subject=Application for Job - {job.title}'
          className='bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md transition'
        >
          Apply Now
        </a>
      </div>

    </div>
  );
}




// 'use client';

// import { MapPinIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
// import AOS from 'aos';
// import { useEffect } from 'react';

// export default function JobDetail({ job }) {
//   useEffect(() => {
//     AOS.init({ duration: 800 });
//   }, []);

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
//       <h1 className="text-3xl font-bold text-[#2C1A47] mb-4">{job.title}</h1>

//       <div className="flex flex-wrap gap-6 text-gray-600 text-sm mb-6">
//         <span className="flex items-center gap-1">
//           <BriefcaseIcon className="w-4 h-4" /> {job.jobType}
//         </span>
//         <span className="flex items-center gap-1">
//           <MapPinIcon className="w-4 h-4" /> {job.location}
//         </span>
//         <span>Posted on {new Date(job.createdAt).toLocaleDateString()}</span>
//       </div>

//       {/* Job Description */}
//       {job.description && (
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold text-gray-800 mb-2">Job Description</h2>
//           <p className="text-gray-700 leading-relaxed whitespace-pre-line">{job.description}</p>
//         </div>
//       )}

//       {/* Responsibilities */}
//       {job.responsibilities?.length > 0 && (
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold text-gray-800 mb-2">Responsibilities</h2>
//           <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
//             {job.responsibilities.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Qualifications */}
//       {job.qualifications?.length > 0 && (
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold text-gray-800 mb-2">Qualifications</h2>
//           <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
//             {job.qualifications.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Requirements */}
//       {job.requirements?.length > 0 && (
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold text-gray-800 mb-2">Requirements</h2>
//           <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
//             {job.requirements.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Perks */}
//       {job.perks?.length > 0 && (
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold text-gray-800 mb-2">Perks</h2>
//           <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
//             {job.perks.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Extra Info */}
//       {(job.duration || job.stipend || job.experience || job.openings || job.postedBy) && (
//         <div className="mb-6 text-gray-700 space-y-2">
//           {job.duration && (
//             <p>
//               <span className="font-semibold">Duration:</span> {job.duration}
//             </p>
//           )}
//           {job.stipend && (
//             <p>
//               <span className="font-semibold">Stipend:</span> {job.stipend}
//             </p>
//           )}
//           {job.experience && (
//             <p>
//               <span className="font-semibold">Experience:</span> {job.experience}
//             </p>
//           )}
//           {job.openings && (
//             <p>
//               <span className="font-semibold">Openings:</span> {job.openings}
//             </p>
//           )}
//           {job.postedBy && (
//             <p>
//               <span className="font-semibold">Posted By:</span> {job.postedBy}
//             </p>
//           )}
//         </div>
//       )}

//       <div className="text-center mt-10">
//         <a
//           href={`mailto:careers@CyberPunk.com?subject=Job Application - ${job.title}`}
//           className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md transition"
//         >
//           Apply Now
//         </a>
//       </div>
//     </div>
//   );
// }
