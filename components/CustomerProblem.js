'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CustomerProblem() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="about"
      className="bg-white py-20 px-6 md:px-12 snap-start"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
        >
          Too many risks. Not enough clarity.
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Today's organizations are overwhelmed with compliance requirements, security risks, and manual processes. CyberPunk helps simplify it all — using automation, AI, and smart dashboards.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-10 grid gap-6 md:grid-cols-3 text-left"
        >
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Too Many Frameworks</h3>
            <p className="text-gray-600">Managing ISO, SOC2, GDPR, and more — all manually — is inefficient and risky.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Lack of Real-Time Insight</h3>
            <p className="text-gray-600">Teams don’t get up-to-date views of risk posture or compliance progress.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Manual, Repetitive Work</h3>
            <p className="text-gray-600">Assessments, audits, and controls are tracked in spreadsheets. It’s slow and error-prone.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
