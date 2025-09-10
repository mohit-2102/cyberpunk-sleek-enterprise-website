'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useCart } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Script from 'next/script';

export default function DataFlowAndTrustAssessment() {
  const [index, setIndex] = useState(0);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.slug === 'data-flow-trust-boundary-assessment');

  const slides = [
    {
      title: 'Optimizing Data Security Through Strategic Mapping',
      description:
        'Our Data Flow Mapping and Trust Boundary Assessment service is specifically designed to secure the pathways through which your data travels, both within and beyond your organization. By meticulously assessing how data is handled and transferred, we provide a comprehensive overview that not only highlights potential vulnerabilities but also optimizes safe data handling practices.',
    },
    {
      title: 'Identifying and Securing Trust Boundaries',
      description:
        "A crucial aspect of our service is the identification of trust boundaries—critical points where data security measures must be rigorously applied to prevent unauthorized access or exposure. Through detailed analysis, we delineate these boundaries within your organization's data flow, enabling targeted security enhancements that significantly reduce the risk of breaches. This focused approach ensures that protective measures are most stringent where they are needed the most, safeguarding data integrity and confidentiality.",
    },
    {
      title: 'Comprehensive Control Assessments for Improved Security',
      description:
        'Beyond mapping and boundary identification, our service includes in-depth control assessments to evaluate and enhance the security measures currently in place. This thorough review process identifies areas for improvement and recommends actionable steps to strengthen your data defense mechanisms. By systematically assessing and upgrading security controls, we help fortify your organization against potential data breaches and cyber threats.',
    },
    {
      title: 'Strengthening Defenses Against Breaches',
      description:
        "The ultimate goal of our Data Flow Mapping and Trust Boundary Assessment service is to bolster your organization's defense against data breaches. By providing a clear map of data flows, identifying critical trust boundaries, and assessing control effectiveness, we equip your organization with the knowledge and strategies needed to maintain data integrity and confidentiality.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      <Navbar />


      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div data-aos="fade-right">
              <h1 className="text-2xl md:text-3xl font-bold border-3 border-blue-600 px-6 py-4 rounded-lg shadow-sm w-fit">
                Data Flow Mapping and Trust Boundary Assessment
              </h1>
              <p className="mt-6 text-gray-700 text-base leading-relaxed">
                This service assesses and secures data flow within and beyond your organization, focusing on safe handling and transfer, identifying trust boundaries to protect against exposure, and conducting control assessments to improve security measures. It aims to strengthen defense against breaches, maintaining data integrity and confidentiality.
              </p>
            </div>
            <div data-aos="fade-left">
              <Image
                src="/images/iso-27001.jpg"
                alt="ISO 27001 compliance review during data flow assessment"
                width={600}
                height={400}
                className="w-full rounded-xl shadow-md"
                priority
              />
            </div>
          </div>
        </section>

        <div className="text-center m-3">
          <button
            data-aos="fade-left"
            onClick={() => {
              if (isInCart) {
                removeFromCart('data-flow-trust-boundary-assessment');
              } else {
                addToCart({
                  slug: 'data-flow-trust-boundary-assessment',
                  name: 'Data Flow mapping and Trust Boundary Assessment',
                });
              }
            }}
            className={`mt-4 inline-block cursor-pointer font-semibold py-2 px-4 rounded transition 
              ${isInCart
                ? 'bg-red-600 cursor-pointer hover:bg-red-700 text-white'
                : 'bg-blue-600 cursor-pointer hover:bg-blue-700 text-white'}`}
          >
            {isInCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>

        {/* Slider Section */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="relative max-w-6xl mx-auto min-h-[260px] flex items-center justify-center text-center">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            {/* Slide Content */}
            <div
              className="transition-all duration-500 ease-in-out max-w-3xl"
              data-aos="fade-right"
              key={index}
            >
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                {slides[index].title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{slides[index].description}</p>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${i === index ? 'bg-blue-600' : 'bg-gray-400'
                  }`}
              ></button>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
            <Image
              src="/images/cta-handshake.jpg"
              alt="Business handshake representing cyber security collaboration"
              width={600}
              height={400}
              className="w-full rounded-xl shadow-md"
              data-aos="fade-right"
              priority
            />
            <div className="bg-blue-100 rounded-xl p-6" data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Collaborate to Navigate the Cyber Seas Safely: A Journey Toward Secure Digital Horizons
              </h3>
            </div>
          </div>
        </section>

        {/* JSON-LD Structured Data */}
        <Script
          id="data-flow-trust-boundary-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Data Flow Mapping and Trust Boundary Assessment",
              "provider": {
                "@type": "Organization",
                "name": "Your Company Name",
                "url": "https://CyberPunk.com",
                "logo": "https://CyberPunk.com/logo.png"
              },
              "description": "Comprehensive service to secure data pathways, identify trust boundaries, and assess controls to strengthen defenses against breaches.",
              "areaServed": {
                "@type": "Country",
                "name": "India"
              }
            })
          }}
        />

        <Footer />
      </main>
    </>
  );
}

