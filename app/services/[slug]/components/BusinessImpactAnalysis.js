'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useCart } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Script from 'next/script';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function BusinessImpactAnalysis() {
  const [index, setIndex] = useState(0);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.slug === 'business-impact-analysis-bia-digital-assets-platforms');

   const slides = [
    {
      title: 'Strategically Safeguarding Digital Assets Against Cyber Threats',
      description:
        'Our Business Impact Analysis service, grounded in the robust methodologies of ISO/IEC 27031 and NIST SP 800-34, offers a detailed assessment of how cyber incidents could potentially disrupt your digital operations. This analysis is vital for developing strategies that mitigate the operational and financial repercussions of such breaches, ensuring that your business remains agile, secure, and resilient in the face of digital threats.',
    },
    {
      title: 'Leveraging Global Standards to Enhance Resilience',
      description:
        'By incorporating the guidelines of ISO/IEC 27031 and NIST SP 800-34, our service not only assesses the potential impact of cyber incidents on your digital assets but also aligns your response strategies with international cyber resilience standards. This ensures a comprehensive and proactive approach to protecting your digital infrastructure, minimizing downtime, and maintaining business continuity.',
    },
    {
      title: 'Targeted Protection for Critical Digital Infrastructure',
      description:
        'Our Business Impact Analysis delves deep into the heart of your digital ecosystem, identifying key vulnerabilities and assessing the potential impact on your business operations. This targeted analysis allows us to craft customized mitigation strategies that protect your most crucial digital assets, ensuring operational continuity and safeguarding against significant financial loss.',
    },
    {
      title: 'Strategic Alignment with Global Cyber Response Standards',
      description:
        'Our approach to Business Impact Analysis transcends traditional risk assessment by strategically aligning your digital asset protection efforts with global cyber response standards. This strategic alignment not only bolsters your defenses against current and emerging cyber threats but also positions your organization as a leader in digital resilience, committed to maintaining the highest standards of data protection and cybersecurity.',
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
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <h1 className="text-3xl md:text-4xl font-bold border-3 border-blue-700 px-6 py-4 w-fit shadow-sm">
              Business Impact Analysis (BIA) – Digital Assets / Platforms
            </h1>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Leveraging ISO/IEC 27031 and NIST SP 800-34 guidelines, our service conducts a Business Impact Analysis
              to gauge cyber incident effects on digital assets. It seeks to mitigate operational and financial fallout
              from breaches, ensuring continuity and resilience by safeguarding crucial assets, aligning with global
              cyber response standards.
            </p>
          </div>
          <div data-aos="fade-left">
            <Image
              src="/images/business-impact-analysis.avif"
              alt="Business Impact Analysis for Digital Assets and Platforms"
              width={800}
              height={500}
              className="w-full rounded-xl"
              priority
            />
          </div>
        </section>

        <div className="text-center m-3">
          <button
            data-aos="fade-left"
            onClick={() => {
              if (isInCart) {
                removeFromCart('business-impact-analysis-bia-digital-assets-platforms');
              } else {
                addToCart({
                  slug: 'business-impact-analysis-bia-digital-assets-platforms',
                  name: 'Business Impact Analysis (BIA) – Digital Assets / Platforms',
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
              <ChevronLeftIcon className="w-6 h-6 md:w-8 md:h-8" />
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
              <ChevronRightIcon className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

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
        <section className="w-full bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
            <div data-aos="fade-right">
              <Image
                src="/images/cta-handshake.jpg"
                alt="Cybersecurity collaboration handshake"
                width={800}
                height={500}
                className="w-full rounded-xl shadow-md"
                priority
              />
            </div>
            <div className="bg-blue-100 p-6 rounded-xl" data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Collaborate to Navigate the Cyber Seas Safely: A Journey Toward Secure Digital Horizons
              </h3>
            </div>
          </div>
        </section>

        {/* JSON-LD Structured Data */}
        <Script
          id="business-impact-analysis-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Business Impact Analysis (BIA) – Digital Assets / Platforms",
              "provider": {
                "@type": "Organization",
                "name": "CyberPunk",
                "url": "https://CyberPunk.com",
                "logo": "https://CyberPunk.com/logo.png"
              },
              "description": "Business Impact Analysis to assess and mitigate the effects of cyber incidents on digital assets, guided by ISO/IEC 27031 and NIST SP 800-34 standards.",
              "areaServed": {
                "@type": "Country",
                "name": "India"
              }
            })
          }}
        />
      </main>
      <Footer />
    </>
  );
}


