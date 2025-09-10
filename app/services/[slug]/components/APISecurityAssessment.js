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

export default function APISecurityAssessment() {
  const [index, setIndex] = useState(0);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.slug === 'api-security-assessment');

  const slides = [
    {
      title: 'Fortifying APIs with Targeted Security Insights',
      description:
        'Service is designed to address these challenges head-on, focusing on securing your APIs against a range of vulnerabilities and misconfigurations. By leveraging the comprehensive OWASP API Security Top 10 and specialized API security guidelines from the Cloud Security Alliance (CSA), we offer a focused framework for evaluating and enhancing the security of your APIs.',
    },
    {
      title: 'Comprehensive Assessment Aligned with Industry Best Practices',
      description:
        "Our service utilizes the OWASP API Security Top 10, a widely recognized standard outlining the most critical security risks to APIs, alongside the CSA’s API-specific security recommendations. This dual-guideline approach ensures that our assessments cover a broad spectrum of potential API security issues, from authentication and authorization flaws to injection attacks and data exposure risks. This thorough examination enables us to uncover even the most subtle vulnerabilities, ensuring no aspect of your API security is overlooked.",
    },
    {
      title: 'Identifying Vulnerabilities and Misconfigurations for Robust API Defense',
      description:
        "Through our meticulous assessment process, we identify vulnerabilities and misconfigurations that could be exploited by attackers. Our goal is to not only pinpoint existing security gaps but also to predict potential future vulnerabilities, providing your organization with a comprehensive understanding of its API security posture. This proactive approach allows for the early rectification of issues, significantly enhancing the overall security of your APIs.",
    },
    {
      title: 'Tailored Recommendations for Strengthening API Security',
      description:
        "Following our in-depth assessment, we deliver actionable recommendations designed to address the specific vulnerabilities identified within your APIs. These recommendations are informed by the OWASP API Security Top 10 and CSA guidelines, ensuring they are grounded in industry-recognized best practices. Our expert guidance facilitates the implementation of effective security measures, improving authentication processes, data encryption, access control, and more, to fortify your APIs against threats.",
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
              <h1 className="text-2xl md:text-3xl font-bold border-3 border-blue-600 px-6 py-4 rounded-lg shadow-sm w-fit text-left md:text-left">
                API Security Assessment
              </h1>
              <p className="mt-6 text-gray-700 text-base leading-relaxed">
                The API Security Assessment service focuses on securing Application Programming Interfaces (APIs) against vulnerabilities and misconfigurations, guided by the OWASP API Security Top 10 and API-specific guidelines from the Cloud Security Alliance (CSA).
              </p>
            </div>
            <div data-aos="fade-left">
              <Image
                src="/images/iso-27001.jpg"
                alt="API Security Assessment service illustration showing secure API development process"
                width={800}
                height={500}
                className="w-full h-auto rounded-xl shadow-md"
                priority
              />
            </div>
          </div>
        </section>

        <div className="text-center m-3">
          <button
            onClick={() => {
              if (isInCart) {
                removeFromCart('api-security-assessment');
              } else {
                addToCart({
                  slug: 'api-security-assessment',
                  name: 'API Security Assessment',
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
        <section className="bg-gray-100 py-16 px-4 sm:px-6 md:px-8">
          <div className="relative max-w-6xl mx-auto min-h-[260px] flex items-center justify-center text-center">
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <div
              className="transition-all duration-500 ease-in-out max-w-3xl w-full px-4 sm:px-6 md:px-8 mx-auto"
              data-aos="fade-right"
              key={index}
            >
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
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

        {/* CTA Section (re-added, design unchanged) */}
        <section className="w-full bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
            <div data-aos="fade-right">
              <Image
                src="/images/cta-handshake.jpg"
                alt="Two professionals shaking hands representing collaboration on cybersecurity"
                width={800}
                height={500}
                className="w-full rounded-xl shadow-md"
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
          id="api-security-assessment-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "API Security Assessment",
              "provider": {
                "@type": "Organization",
                "name": "CyberPunk",
                "url": "https://CyberPunk.com",
                "logo": "https://CyberPunk.com/logo.png"
              },
              "description": "Secure your APIs against vulnerabilities and misconfigurations, guided by OWASP API Security Top 10 and CSA guidelines.",
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
