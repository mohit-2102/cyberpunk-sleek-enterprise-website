'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen snap-start flex flex-col justify-center items-center text-center px-4 bg-gray-50 pt-24">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-gray-900 max-w-4xl"
      >
        Simplifying Cybersecurity. Elevating Resilience.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl"
      >
        AI-powered GRC, assessments & security automation for modern enterprises.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, delay: 0.3, duration: 0.6 }}
        className="mt-8"
      >
        <Link
          href="/cart" // ✅ Cart page route
          className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700"
        >
          Book a Free Consultation
        </Link>
      </motion.div>
    </section>
  );
}



// 'use client';

// import { motion } from 'framer-motion';

// export default function Hero() {
//   return (
//     <section
//       className="min-h-screen snap-start flex flex-col justify-center items-center text-center px-4 bg-gray-50 pt-24"
//     >
//       <motion.h1
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl md:text-6xl font-bold text-gray-900 max-w-4xl"
//       >
//         Simplifying Cybersecurity. Elevating Resilience.
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.6 }}
//         className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl"
//       >
//         AI-powered GRC, assessments & security automation for modern enterprises.
//       </motion.p>

//       <motion.a
//         href="/cart"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         transition={{ type: 'spring', stiffness: 300 }}
//         className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700"
//       >
//         Book a Free Consultation
//       </motion.a>
//     </section>
//   );
// }

