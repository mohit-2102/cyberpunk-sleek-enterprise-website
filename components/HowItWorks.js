'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    title: '1. Assess',
    description: 'We begin with a deep dive into your existing security posture, risks, and compliance needs.',
  },
  {
    title: '2. Automate',
    description: 'We implement GRC automation workflows to streamline assessments, audits, and controls.',
  },
  {
    title: '3. Monitor',
    description: 'Real-time dashboards keep you updated on risks, KPIs, and compliance status.',
  },
  {
    title: '4. Improve',
    description: 'We continuously improve your resilience with alerts, insights, and strategic guidance.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="approach"
      className="bg-white py-20 px-6 md:px-12 snap-start"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          How It Works
        </h2>

        <div className="relative border-l-4 border-blue-600 pl-6 space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-1">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
