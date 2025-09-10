'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useCart } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function SecureConfigurationReview() {
  const [index, setIndex] = useState(0);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.slug === 'secure-configuration-review');

  const slides = [
    {
      title: 'Elevating Cybersecurity with Rigorous Configuration Standards',
      description:
        'Our Secure Configuration (Baseline) Review and Documentation service is precisely engineered to enhance the security posture of your IT environment. By meticulously applying benchmarks from the Center for Internet Security (CIS) and guidelines from the National Institute of Standards and Technology (NIST), we ensure your systems are configured to resist unauthorized access and cyber breaches effectively.',
    },
    {
      title: 'Adhering to CIS and NIST for Robust Security Foundations',
      description:
        'Central to our approach is the adoption of the CIS Benchmarks and NIST standards, internationally recognized for defining the pinnacle of secure system configurations. These standards provide a comprehensive framework for assessing and enhancing the security settings of your digital infrastructure, laying a solid foundation for your cybersecurity strategy. Through this strategic alignment, we not only bolster your defenses but also ensure compliance with leading security practices.',
    },
    {
      title: 'Detailed Reviews for Security Assurance and Documentation',
      description:
        'Our service encompasses an exhaustive review of your current system and application configurations against these high standards. This detailed assessment uncovers potential vulnerabilities and deviations from optimal security practices. We document these findings, along with tailored recommendations for adjustment, offering a clear and actionable guide to securing your IT environment. This documentation becomes a valuable resource for ongoing security management and compliance verification.',
    },
    {
      title: 'Customized Security Enhancements for Operational Excellence',
      description:
        'Understanding that each organization’s technology landscape is unique, we deliver personalized recommendations designed to address the specific needs and challenges of your systems and applications. These bespoke solutions not only align with CIS and NIST benchmarks but also consider the practical aspects of your operational environment, ensuring that enhancements are both effective and feasible to implement.',
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
            <h1 className="text-2xl md:text-3xl font-bold border-3 border-blue-700 px-6 py-4 w-fit shadow-sm rounded-lg">
              Secure Configuration (Baseline) Review and Documentation
            </h1>
            <p className="mt-6 text-gray-700 leading-relaxed">
              This service strategically optimizes your systems and applications for peak security, leveraging standards from the Center for Internet Security (CIS) and the National Institute of Standards and Technology (NIST) to guard against unauthorized access and breaches.
            </p>
          </div>
          <Image
            src="/images/iso-27001.jpg"
            alt="Secure Configuration"
            width={600}
            height={400}
            className="w-full rounded-xl shadow-md"
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
                removeFromCart('secure-configuration-review');
              } else {
                addToCart({
                  slug: 'secure-configuration-review',
                  name: 'Secure Configuration (Baseline) Review and Documentation',
                });
              }
            }}
            className={`mt-4 inline-block cursor-pointer font-semibold py-2 px-4 rounded transition 
              ${isInCart ? 'bg-red-600 cursor-pointer hover:bg-red-700 text-white' : 'bg-blue-600 cursor-pointer hover:bg-blue-700 text-white'}`}
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
            <div
              key={index}
              data-aos="fade-up"
              className="transition-all duration-500 ease-in-out max-w-3xl"
            >
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
          id="secure-configuration-review-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Secure Configuration (Baseline) Review and Documentation",
              "provider": {
                "@type": "Organization",
                "name": "CyberPunk",
                "url": "https://CyberPunk.com",
                "logo": "https://CyberPunk.com/logo.png"
              },
              "description": "Optimize your system security by reviewing and documenting configurations aligned with CIS and NIST standards to prevent unauthorized access and breaches.",
              "areaServed": { "@type": "Country", "name": "India" }
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}

