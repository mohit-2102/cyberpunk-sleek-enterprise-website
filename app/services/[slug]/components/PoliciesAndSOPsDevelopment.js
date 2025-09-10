'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useCart } from '@/context/CartContext';

export default function PoliciesAndSOPsDevelopment() {
  const [index, setIndex] = useState(0);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.slug === 'policies-and-sops-development');

  const slides = [
    {
      title: 'Strategic Development of Organizational Policies',
      description:
        'In the complex regulatory environment shaped by authorities like RBI, SEBI, IRDAI, and NHB, along with the IT Act and the Digital Personal Data Protection (DPDP) Act 2023, the crafting of organizational policies and Standard Operating Procedures (SOPs) becomes not just a requirement but a strategic advantage. Our objective is to empower your organization with governance structures and processes that enhance compliance, risk management, and operational excellence.',
    },
    {
      title: 'Establishing Robust Data Protection and Cybersecurity Frameworks',
      description:
        'Recognizing the critical importance of data protection and cybersecurity in today\'s digital landscape, our approach includes establishing a comprehensive framework that covers these areas in depth. By integrating best practices and current regulatory expectations into your organizational policies and SOPs, we help create a robust infrastructure that safeguards sensitive information, protects against cyber threats, and ensures operational resilience.',
    },
    {
      title: 'Boosting Governance, Risk Management, and Compliance Initiatives',
      description:
        'The heart of our service lies in its ability to enhance your organization\'s governance, risk management, and compliance (GRC) initiatives. Through the strategic development and refinement of policies and SOPs, we empower your organization to navigate the regulatory landscape with confidence, ensuring that every aspect of your operations is aligned with legal requirements and best practices. This comprehensive approach not only mitigates risks but also streamlines processes, making compliance a seamless part of your organizational culture.',
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
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
        <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-12">
          <div className="md:w-1/2" data-aos="fade-right">
            <h1 className="text-2xl md:text-3xl font-bold border-3 border-blue-600 px-4 py-3 rounded-lg shadow inline-block text-center">
              Policies / SOPs Development
            </h1>
            <p className="mt-6 text-gray-700 text-base leading-relaxed">
              The development of organizational policies and SOPs in alignment with RBI, SEBI, IRDAI, NHB, the IT Act, and DPDP 2023 is no longer optional — it is a strategic requirement. Our service delivers tailored documentation to embed governance and compliance deeply into your operations.
            </p>
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <Image
              src="/images/policies-sops.jpg"
              alt="Team collaborating on policies and SOPs development"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto shadow-lg"
              priority
            />
          </div>
        </section>

        {/* Add to Cart */}
        <div className="text-center m-3">
          <button
            data-aos="fade-left"
            onClick={() => {
              if (isInCart) {
                removeFromCart('policies-and-sops-development');
              } else {
                addToCart({
                  slug: 'policies-and-sops-development',
                  name: 'Policies/SOP’s Development',
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
          <div className="relative max-w-6xl mx-auto min-h-[280px] flex items-center justify-center text-center">
            <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800">
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <div key={index} data-aos="fade-up" className="transition-all duration-500 ease-in-out max-w-3xl">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                {slides[index].title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{slides[index].description}</p>
            </div>

            <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800">
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {slides.map((_, i) => (
              <span
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${i === index ? 'bg-blue-600' : 'bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
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

        {/* JSON-LD Structured Data */}
        <Script
          id="policies-sops-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Policies and SOPs Development",
              "provider": {
                "@type": "Organization",
                "name": "CyberPunk",
                "url": "https://CyberPunk.com",
                "logo": "https://CyberPunk.com/logo.png"
              },
              "description": "Development of organizational policies and SOPs aligned with RBI, SEBI, IRDAI, NHB, IT Act, and DPDP 2023 for governance and compliance.",
              "areaServed": {
                "@type": "Country",
                "name": "India"
              }
            }),
          }}
        />

        <Footer />
      </main>
    </>
  );
}

