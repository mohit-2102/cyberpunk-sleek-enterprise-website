
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

export default function GapAssessment() {
  const [index, setIndex] = useState(0);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.slug === 'gap-assessment');

  const slides = [
    {
      title: 'In-depth Evaluation for Comprehensive Compliance',
      description:
        'We conduct an in-depth analysis of your systems against regulatory requirements, identifying discrepancies and vulnerabilities. Our goal is to ensure your cybersecurity measures and IT governance not only meet but surpass regulatory expectations.',
    },
    {
      title: 'Actionable Insights for Security and Compliance Fortification',
      description:
        'From our findings, we provide a clear, actionable roadmap to close gaps, enhance security, and ensure ongoing compliance. This service is your guide to a robust digital defense and a stronger compliance posture.',
    },
    {
      title: 'Pathway to Enhanced Digital Protection and Compliance Assurance',
      description:
        'Partner with us for a streamlined path to regulatory compliance and cybersecurity excellence. Our Gap Assessment positions your organization for success in a complex regulatory environment, ensuring a secure, compliant future.',
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
            <h1 className="text-2xl md:text-3xl font-bold border-3 border-blue-600 px-6 py-4 rounded-lg shadow-sm w-fit">
              Gap Assessment as per the Regulatory Standards and Guidelines (RBI, SEBI, IRDAI, and NHB)
            </h1>
            <p className="mt-6 text-gray-700 text-base leading-relaxed">
              In an era where digital security and regulatory compliance are intertwined, our Gap Assessment service stands as your beacon of guidance through the complex terrain of regulatory standards and guidelines. Specializing in aligning IT environments and cybersecurity frameworks with stringent regulations set forth by RBI, SEBI, IRDAI, and NHB, we offer a comprehensive solution tailored to navigate the challenges of today’s regulatory expectations.
            </p>
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <Image
              src="/images/gap-assessment.jpg"
              alt="Gap Assessment"
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
              if (isInCart) removeFromCart('gap-assessment');
              else addToCart({ slug: 'gap-assessment', name: 'Gap Assessment' });
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
          id="gap-assessment-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Gap Assessment",
              "provider": {
                "@type": "Organization",
                "name": "CyberPunk",
                "url": "https://CyberPunk.com",
                "logo": "https://CyberPunk.com/logo.png"
              },
              "description": "Identify and address gaps in your cybersecurity framework with expert analysis.",
              "areaServed": { "@type": "Country", "name": "India" }
            })
          }}
        />
        <Footer />
      </main>
    </>
  );
}

