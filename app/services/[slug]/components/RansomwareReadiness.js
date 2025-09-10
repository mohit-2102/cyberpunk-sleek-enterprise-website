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

export default function RansomwareReadiness() {
  const [index, setIndex] = useState(0);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.slug === 'ransomware-readiness');

  const slides = [
    {
      title: 'Comprehensive TTP Analysis for Enhanced Security Posture',
      description:
        'Our approach centers on a detailed assessment of ransomware TTPs, providing a clear picture of potential vulnerabilities within your organization\'s security posture. By aligning this analysis with the MITRE ATT&CK framework, we identify specific areas where your defenses can be fortified to prevent, detect, and respond to ransomware threats more effectively. This targeted analysis forms the basis for developing a customized defense strategy that addresses the unique aspects of your security environment.',
    },
    {
      title: 'Assessing Preparedness to Strengthen Cyber Resilience',
      description:
        'Beyond identifying vulnerabilities, our service evaluates your organization’s overall preparedness for withstanding ransomware attacks. This comprehensive assessment examines the robustness of your defense mechanisms, the effectiveness of your response strategies, and your capacity for recovery in the aftermath of an attack.',
    },
    {
      title: 'Optimizing Defenses Against Malicious Threats',
      description:
        'Leveraging our deep understanding of ransomware attack vectors and your organization\'s specific security landscape, we provide targeted recommendations to optimize your defenses. This strategic optimization ensures that your security controls are agile and resilient against modern ransomware threats.',
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
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-16 items-center">
          <div data-aos="fade-right">
            <h1 className="text-2xl md:text-3xl font-bold border-3 border-blue-600 px-6 py-4 w-fit shadow-sm">
              Ransomware Readiness Assessment
            </h1>
            <p className="mt-6 text-gray-700 leading-relaxed">
              In the digital battlefield, ransomware represents one of the most disruptive and damaging threats to organizations worldwide. Our Ransomware Readiness service is engineered to position your organization at the forefront of ransomware defense, deploying the MITRE ATT&CK framework as our strategic compass.
              By meticulously mapping ransomware tactics, techniques, and procedures (TTPs) against your current security controls, we offer a nuanced, comprehensive analysis that transcends conventional preparedness methods.
            </p>
          </div>
          <div data-aos="fade-left">
            <Image
              src="/images/ransomware-readiness.jpg"
              alt="Illustration representing ransomware readiness assessment"
              width={600}
              height={400}
              className="w-full rounded-xl shadow-md"
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
                removeFromCart('ransomware-readiness');
              } else {
                addToCart({
                  slug: 'ransomware-readiness',
                  name: 'Ransomware Readiness',
                });
              }
            }}
            className={`mt-4 inline-block font-semibold py-2 px-4 rounded transition cursor-pointer
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
              aria-label="Previous Slide"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <div key={index} data-aos="fade-up" className="max-w-3xl transition-all duration-500 ease-in-out">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                {slides[index].title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{slides[index].description}</p>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
              aria-label="Next Slide"
            >
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
              alt="Business handshake representing partnership in cybersecurity"
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
          id="ransomware-readiness-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Ransomware Readiness Assessment",
              "provider": {
                "@type": "Organization",
                "name": "CyberPunk",
                "url": "https://CyberPunk.com",
                "logo": "https://CyberPunk.com/logo.png"
              },
              "description": "Ransomware readiness assessment using MITRE ATT&CK framework to evaluate vulnerabilities, improve defenses, and enhance cyber resilience.",
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

