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

export default function DataGovernanceAssessment() {
  const [index, setIndex] = useState(0);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.slug === 'data-governance-assessment');

  const slides = [
    {
      title: 'Exhaustive Evaluation for Holistic PII Management',
      description:
        'Leveraging a framework that combines thoroughness with strategic insight, our service examines the full spectrum of your PII management activities. From policy development and data processing techniques to the safeguarding of individual rights and the deployment of security measures, we dissect your operations to identify strengths and uncover areas needing improvement. This 360-degree review is designed to align your practices with the pinnacle of data governance standards.',
    },
    {
      title: 'Upholding Rights and Privacy with Precision',
      description:
        'Central to our service is a dedicated focus on the protection of individual rights, ensuring your data governance framework supports consent, access, rectification, and the right to be forgotten with utmost clarity and precision. We assess your mechanisms for responding to privacy requests, evaluating their responsiveness and alignment with legal and ethical standards.',
    },
    {
      title: 'Tailoring Security Measures to PII Needs',
      description:
        'Understanding that the security of PII demands bespoke solutions, our assessment includes a targeted review of your security infrastructure. We examine the adequacy of your technical and organizational measures in protecting against unauthorized access, data breaches, and other cyber threats. This involves an analysis of encryption practices, access control protocols, and incident response mechanisms, ensuring they are robust and fit for purpose.',
    },
    {
      title: 'Providing a Roadmap for Data Governance Excellence',
      description:
        'The outcome of our Data Governance Assessment is more than a snapshot of your current PII management status; it is a comprehensive blueprint for ongoing improvement. With actionable recommendations tailored to your specific context, we guide your organization towards a future where data governance and privacy protection are not just adhered to but championed.',
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
        <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-12">
          <div className="md:w-1/2" data-aos="fade-right">
            <h1 className="text-2xl md:text-3xl font-bold border-3 border-blue-600 px-4 py-3 rounded-lg shadow inline-block text-center">
              Data Governance Assessment
            </h1>
            <p className="mt-6 text-gray-700 text-base leading-relaxed">
              In today’s digital ecosystem, where data privacy is paramount, our Data Governance Assessment service
              embodies a comprehensive approach to protecting Personally Identifiable Information (PII). With a deep
              dive into your organizational practices, we meticulously evaluate how PII is handled, ensuring every
              process from policy creation to data lifecycle management meets the pinnacle of data governance
              standards. Our mission is to foster an environment where data privacy isn’t just achieved—it’s a
              benchmark for excellence.
            </p>
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <Image
              src="/images/data-governance.jpg"
              alt="Data Governance Assessment"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto shadow-lg"
              priority
            />
          </div>
        </section>

        <div className="text-center m-3">
          <button
            data-aos="fade-left"
            onClick={() => {
              if (isInCart) removeFromCart('data-governance-assessment');
              else addToCart({ slug: 'data-governance-assessment', name: 'Data Governance Assessment' });
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
          id="data-governance-assessment-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Data Governance Assessment",
              "provider": {
                "@type": "Organization",
                "name": "CyberPunk",
                "url": "https://CyberPunk.com",
                "logo": "https://CyberPunk.com/logo.png"
              },
              "description": "Comprehensive Data Governance Assessment to ensure compliance and privacy excellence.",
              "areaServed": { "@type": "Country", "name": "India" }
            })
          }}
        />
        <Footer />
      </main>
    </>
  );
}

