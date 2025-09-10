'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useCart } from '@/context/CartContext';

export default function RiskAssessment() {
  const [index, setIndex] = useState(0);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.slug === 'risk-assessment');

  const slides = [
    {
      title: 'Comprehensive Risk Identification and Strategic Prioritization',
      description:
        'At the core of our service is a commitment to uncovering the full spectrum of cyber risks that threaten your IT infrastructure, data integrity, and operational continuity. By conducting a deep-dive analysis, we meticulously identify, assess, and prioritize risks, shedding light on vulnerabilities that could be exploited by cyber adversaries. This comprehensive risk landscape mapping is the cornerstone of our strategy, enabling targeted interventions that are both proactive and reactive.',
    },
    {
      title: 'Tailored Mitigation Strategies for Enhanced Security',
      description:
        'Recognizing the unique cyber ecosystem of each organization, we craft customized mitigation strategies that address identified risks with precision. Our tailored approach ensures that every recommendation is actionable, relevant, and aligned with your specific operational context. By focusing on strategic risk mitigation, we not only fortify your cyber defenses but also optimize your resource allocation, ensuring maximum protection with efficient use of investments.',
    },
    {
      title: 'Aligning with International Standards for Robust Cyber Defenses',
      description:
        'Our service is grounded in the principle that cybersecurity is a global concern that demands adherence to international standards. By aligning your risk management practices with frameworks like ISO/IEC 27005 and NIST SP 800-30, we ensure your organization is not just protected against current threats but is also prepared for the future. This alignment fosters a security posture that is dynamic, resilient, and capable of evolving with the cybersecurity landscape.',
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
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-left">
            <h1 className="text-2xl md:text-3xl font-bold border-3 border-blue-700 px-6 py-4 w-fit shadow-sm">
              Risk Assessment
            </h1>
            <p className="mt-6 text-gray-700 leading-relaxed">
              In the face of ever-evolving cyber threats, achieving a robust security posture requires a strategic,
              informed approach. Our Risk Assessment service is designed to arm your organization with this advantage.
              By leveraging internationally acclaimed frameworks such as ISO/IEC 27005 and NIST SP 800-30, we offer a
              comprehensive evaluation of your cyber vulnerabilities and the external threats you face. This service is
              not merely an assessment; it’s a strategic pathway to cybersecurity excellence, tailored to the unique
              landscape of your IT environment, data ecosystem, and operational realities.
            </p>
          </div>
          <Image
            src="/images/risk-assessment.jpg"
            alt="Risk assessment process and cybersecurity evaluation"
            width={600}
            height={400}
            className="w-full rounded-xl"
            data-aos="fade-right"
            priority
          />
        </section>

        {/* Cart Button */}
        <div className="text-center m-3">
          <button
            data-aos="fade-left"
            onClick={() => {
              if (isInCart) {
                removeFromCart('risk-assessment');
              } else {
                addToCart({
                  slug: 'risk-assessment',
                  name: 'Risk Assessment',
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
          <div className="relative max-w-6xl mx-auto min-h-[300px] flex items-center justify-center text-center">
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <div key={index} data-aos="fade-up" className="transition-all duration-500 ease-in-out max-w-3xl">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                {slides[index].title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{slides[index].description}</p>
            </div>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="flex justify-center mt-6 gap-2">
            {slides.map((_, i) => (
              <span
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${i === index ? 'bg-blue-600' : 'bg-gray-400'}`}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8">
            <Image
              src="/images/cta-handshake.jpg"
              alt="Collaboration handshake for cybersecurity solutions"
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
          id="risk-assessment-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Risk Assessment",
              "provider": {
                "@type": "Organization",
                "name": "CyberPunk",
                "url": "https://CyberPunk.com",
                "logo": "https://CyberPunk.com/logo.png"
              },
              "description": "Comprehensive risk assessment aligning with ISO/IEC 27005 and NIST SP 800-30 frameworks to identify, assess, and mitigate cyber risks.",
              "areaServed": { "@type": "Country", "name": "India" }
            }),
          }}
        />

      </main>
      <Footer />
    </>
  );
}
