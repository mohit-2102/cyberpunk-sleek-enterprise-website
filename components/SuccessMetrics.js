'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SuccessMetrics() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const metrics = [
    {
      value: '75%',
      label: 'Faster Compliance Audits',
    },
    {
      value: '60%',
      label: 'Reduction in Manual Tasks',
    },
    {
      value: '24/7',
      label: 'Risk Monitoring & Insights',
    },
  ];

  const tools = ['Metabase', 'Panorama', 'CSET', 'AWS Security Hub'];

  return (
    <section
      id="metrics"
      className="bg-gray-50 py-20 px-6 md:px-12 snap-start"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
        >
          Impact & Integrations
        </h2>

        {/* KPIs */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <p className="text-4xl font-bold text-blue-600">{item.value}</p>
              <p className="text-gray-700 mt-2">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Tool Logos */}
        <h3
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-xl font-semibold text-gray-700 mb-4"
        >
          Powered by industry-trusted tools
        </h3>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex flex-wrap justify-center gap-6"
        >
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="px-4 py-2 bg-white shadow-sm rounded-lg text-blue-600 font-medium"
            >
              {tool}
            </div>
          ))}
        </div>

        {/* Optional Screenshot */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-12"
        >
          <div className="aspect-video w-full max-w-3xl mx-auto bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-lg italic">
            [Insert Dashboard Screenshot or Demo GIF]
          </div>
        </div>
      </div>
    </section>
  );
}
