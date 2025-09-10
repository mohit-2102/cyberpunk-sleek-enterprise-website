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

export default function WebSecurityAssessment() {
  const [index, setIndex] = useState(0);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.slug === 'web-application-security-assessment');

  const slides = [
    {
      title: 'Elevating Web Application Security with Framework Analysis',
      description:
        "Assessment is crafted to provide an exhaustive evaluation of your web applications, identifying vulnerabilities that could be exploited by cyber threats. By incorporating the OWASP Top 10 and the Web Application Security Consortium Threat Classification (WASC-TC) standards, our assessment delivers a dual-framework approach. This methodology ensures a comprehensive examination of common security risks, offering a holistic view of your web application's vulnerabilities.",
    },
    {
      title: 'Comprehensive Vulnerability Identification for Enhanced Protection',
      description:
        "Our service goes beyond superficial checks to deeply analyze your web applications for a wide range of security weaknesses. From injection flaws and cross-site scripting (XSS) to insecure direct object references and more, we meticulously test against the OWASP Top 10 and WASC-TC classifications. This thorough vetting process uncovers both well-known and emerging vulnerabilities, providing a clear snapshot of your web application's security health.",
    },
    {
      title: 'Leveraging OWASP and WASC-TC for Comprehensive Risk Insights',
      description:
        "Utilizing these esteemed frameworks, our Web Application Security Assessment not only identifies vulnerabilities but also quantifies the risk they pose to your operations. This risk-based approach prioritizes findings based on their potential impact, allowing for targeted remediation efforts where they are needed most. By aligning with OWASP and WASC-TC guidelines, we ensure that our assessment adheres to globally recognized best practices in web application security.",
    },
    {
      title: 'Tailored Recommendations for Enhanced Security Posture',
      description:
        "Upon completion of our assessment, we deliver detailed, actionable recommendations designed to fortify your web applications against identified vulnerabilities. These recommendations are tailored to the specific issues uncovered during the assessment, ensuring relevance and effectiveness. Our strategic guidance supports the strengthening of your web application's security posture, addressing both immediate vulnerabilities and enhancing overall resilience.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
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
                Web Application Security Assessment
              </h1>
              <p className="mt-6 text-gray-700 text-base leading-relaxed">
                Our Web Application Security Assessment meticulously evaluates web applications for vulnerabilities, adhering to the OWASP Top 10 and the Web Application Security Consortium Threat Classification (WASC-TC) standards. This dual-framework approach ensures a thorough examination of common security risks, providing detailed, actionable recommendations to bolster the security posture of your web applications.
              </p>
            </div>
            <div
              data-aos="fade-left"
              className="relative w-full h-[300px] md:h-[400px] rounded-xl shadow-md overflow-hidden"
            >
              <Image
                src="/images/iso-27001.jpg"
                alt="ISO Review"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </section>

        {/* Cart Button */}
        <div className="text-center m-3">
          <button
            data-aos="fade-left"
            onClick={() => {
              if (isInCart) {
                removeFromCart('web-application-security-assessment');
              } else {
                addToCart({
                  slug: 'web-application-security-assessment',
                  name: 'Web Application Security Assessment',
                });
              }
            }}
            className={`mt-4 inline-block cursor-pointer font-semibold py-2 px-4 rounded transition ${
              isInCart ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
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
              aria-label="Previous Slide"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            {/* Slide Content */}
            <div
              className="transition-all duration-500 ease-in-out max-w-3xl"
              data-aos="fade-right"
              key={index}
            >
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">{slides[index].title}</h2>
              <p className="text-gray-700 leading-relaxed">{slides[index].description}</p>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
              aria-label="Next Slide"
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
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  i === index ? 'bg-blue-600' : 'bg-gray-400'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
            <div
              data-aos="fade-right"
              className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src="/images/cta-handshake.jpg"
                alt="Cyber handshake"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <div className="bg-blue-100 rounded-xl p-6" data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Collaborate to Navigate the Cyber Seas Safely: A Journey Toward Secure Digital Horizons
              </h3>
            </div>
          </div>
        </section>

        {/* JSON-LD Structured Data */}
        <Script
          id="web-security-assessment-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Web Application Security Assessment",
              "provider": {
                "@type": "Organization",
                "name": "CyberPunk",
                "url": "https://CyberPunk.com",
                "logo": "https://CyberPunk.com/logo.png"
              },
              "description":
                "Comprehensive Web Application Security Assessment adhering to OWASP Top 10 and WASC-TC standards, providing detailed vulnerability analysis and actionable recommendations.",
              "areaServed": { "@type": "Country", "name": "India" }
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}

