'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ShieldCheckIcon, ChartBarIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function WhatWeOffer() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const features = [
    {
      icon: <ShieldCheckIcon className="w-10 h-10 text-blue-600 mb-4" />,
      title: 'GRC Automation',
      description:
        'Automate governance, risk, and compliance workflows to save time and improve accuracy.',
    },
    {
      icon: <ChartBarIcon className="w-10 h-10 text-blue-600 mb-4" />,
      title: 'Compliance Monitoring',
      description:
        'Track frameworks like ISO, SOC2, and GDPR in real time with visual dashboards and alerts.',
    },
    {
      icon: <MagnifyingGlassIcon className="w-10 h-10 text-blue-600 mb-4" />,
      title: 'Security Assessments & Audits',
      description:
        'Perform smart assessments, manage controls, and generate reports with a few clicks.',
    },
  ];

  return (
    <section
      id="services"
      className="bg-gray-50 py-20 px-6 md:px-12 snap-start"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
        >
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {features.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white rounded-xl p-6 shadow hover:shadow-md transition duration-300"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
