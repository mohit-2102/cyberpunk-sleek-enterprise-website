'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Script from 'next/script';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useCart } from '@/context/CartContext';

export default function DigitalDataProtectionActCompliance() {
  const [index, setIndex] = useState(0);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.slug === 'digital-data-protection-act-compliance');

  const slides = [
    {
      title: 'Navigating Regulatory Complexities with Expertise',
      description:
        'The Digital Personal Data Protection Act of 2023 sets forth a new paradigm of personal data management, imposing stringent requirements on how organizations collect, process, and store personal data. Guiding you through data privacy regulations. We evaluate your data practices, pinpoint compliance gaps, and mitigate risks, ensuring your operations align with the Act. This involves a comprehensive review of your existing policies, practices, and systems to identify compliance gaps and potential vulnerabilities.',
    },
    {
      title: 'Customized Data Protection Strategies',
      description:
        'Recognizing the unique nature of every organization, we tailor our compliance solutions to fit your specific needs. From drafting bespoke data protection policies to implementing state-of-the-art security measures, our goal is to create a robust framework that not only meets but surpasses the requirements of the Digital Personal Data Protection Act of 2023. This tailored approach ensures that your organization not only achieves compliance but also fosters a culture of privacy that builds trust with your clients and stakeholders.',
    },
    {
      title: 'Ensuring Continuous Compliance and Protection',
      description:
        'Achieving compliance with the Digital Personal Data Protection Act of 2023 is a significant milestone, yet maintaining this compliance amidst evolving digital landscapes is equally crucial. Our service extends beyond initial compliance efforts, providing ongoing support and updates to ensure your data protection measures remain effective and ahead of regulatory changes. We empower your organization with the knowledge and tools for continuous improvement, safeguarding your reputation and the privacy of individuals\' data in the long term.',
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 py-12">
          <div className="md:w-1/2" data-aos="fade-right">
            <h1 className="text-2xl md:text-3xl font-bold border-3 border-blue-600 px-4 py-3 rounded-lg shadow inline-block text-center">
              Compliance to The Digital Personal Data Protection Act of 2023
            </h1>
            <p className="mt-6 text-gray-700 text-base leading-relaxed">
              The DPDP Act of 2023 introduces a transformative data privacy regime. Our compliance service is built to help you meet these new expectations with confidence. From gap assessments to proactive strategy implementation, we ensure your data processing environment is secure, transparent, and ready for tomorrow.
            </p>
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <Image
              src="/images/digital-data-protection.jpg"
              alt="Digital Personal Data Protection Act Compliance"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto shadow-lg"
              priority
            />
          </div>
        </section>

        {/* Cart */}
        <div className="text-center m-3">
          <button
            data-aos="fade-left"
            onClick={() => {
              if (isInCart) removeFromCart('digital-data-protection-act-compliance');
              else addToCart({ slug: 'digital-data-protection-act-compliance', name: 'Digital Data Protection Act Compliance' });
            }}
            className={`mt-4 inline-block cursor-pointer font-semibold py-2 px-4 rounded transition 
              ${isInCart ? 'bg-red-600 cursor-pointer hover:bg-red-700 text-white' : 'bg-blue-600 cursor-pointer hover:bg-blue-700 text-white'}`}
          >
            {isInCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>

        {/* Slider */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="relative max-w-6xl mx-auto min-h-[300px] flex items-center justify-center text-center">
            <button onClick={() => setIndex(prev => (prev - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800">
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <div key={index} data-aos="fade-up" className="transition-all duration-500 ease-in-out max-w-3xl">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">{slides[index].title}</h2>
              <p className="text-gray-700 leading-relaxed">{slides[index].description}</p>
            </div>

            <button onClick={() => setIndex(prev => (prev + 1) % slides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800">
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {slides.map((_, i) => (
              <span key={i} onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${i === index ? 'bg-blue-600' : 'bg-gray-400'}`} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8">
            <Image
              src="/images/cta-handshake.jpg"
              alt="Cyber handshake"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
              data-aos="fade-right"
              priority
            />
            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold text-gray-800">
                Collaborate to Navigate the Cyber Seas Safely: A Journey Toward Secure Digital Horizons
              </h3>
            </div>
          </div>
        </section>

        {/* JSON-LD */}
        <Script
          id="digital-data-protection-act-compliance-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Digital Data Protection Act Compliance",
              "provider": {
                "@type": "Organization",
                "name": "CyberPunk",
                "url": "https://CyberPunk.com",
                "logo": "https://CyberPunk.com/logo.png"
              },
              "description": "Ensure compliance with India’s Digital Personal Data Protection Act, 2023.",
              "areaServed": { "@type": "Country", "name": "India" }
            })
          }}
        />
        <Footer />
      </main>
    </>
  );
}

