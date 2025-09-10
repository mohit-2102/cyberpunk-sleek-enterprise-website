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

export default function ComplianceReview() {
  const [index, setIndex] = useState(0);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.slug === 'compliance-review-audit');

  const slides = [
    {
      title: 'Ensuring Strict Adherence to Policies and Procedures',
      description:
        'We understand the complexities of regulatory compliance and the importance of aligning with established policies and procedures. Through our rigorous audit process, we ensure that your organization is not only compliant but also equipped with the knowledge and practices to maintain compliance. This involves a thorough examination of your current compliance status, identification of potential gaps, and providing actionable insights to achieve and maintain strict compliance.',
    },
    {
      title: 'Customized to Your Needs',
      description:
        'Recognizing that each organization is unique, we tailor our compliance review and audit services to meet your specific needs and challenges. Whether you\'re navigating the complexities of the Digital Personal Data Protection Act of 2023, ISO/IEC 27001 standards, or any other regulatory framework, our experts are here to guide you through every step of the process.',
    },
    {
      title: 'Beyond Compliance - A Partner in Your Growth',
      description:
        'Our goal is to ensure that compliance becomes a seamless part of your organizational culture and operational excellence. By partnering with us, you gain more than just a compliance service; you gain a strategic ally dedicated to enhancing your organization\'s integrity, security, and overall performance.',
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

  const handleNext = () => setIndex(prev => (prev + 1) % slides.length);
  const handlePrev = () => setIndex(prev => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div data-aos="fade-right">
              <h1 className="text-3xl md:text-4xl font-bold border-3 border-blue-600 px-6 py-4 rounded-lg shadow-sm w-fit">
                Compliance Review/Audit
              </h1>
              <p className="mt-6 text-gray-700 text-base leading-relaxed">
                In the rapidly evolving digital era, ensuring robust IT governance and disciplined operational practices is paramount. Our specialized compliance review and audit solutions are crafted to fortify your organization’s IT framework. We delve deep into your systems and processes, reinforcing a culture of excellence and adherence to the highest standards of operational discipline.
              </p>
            </div>
            <div data-aos="fade-left">
              <Image
                src="/images/compliance-review.jpg"
                alt="Illustration representing compliance review and auditing processes"
                width={800}
                height={500}
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
                removeFromCart('compliance-review-audit');
              } else {
                addToCart({
                  slug: 'compliance-review-audit',
                  name: 'Compliance Review/ Audit',
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
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <div
              className="transition-all duration-500 ease-in-out max-w-3xl"
              data-aos="fade-up"
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
            <div className="bg-blue-100 rounded-xl p-6" data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Collaborate to Navigate the Cyber Seas Safely: A Journey Toward Secure Digital Horizons
              </h3>
            </div>
          </div>
        </section>

        {/* JSON-LD Structured Data */}
        <Script
          id="compliance-review-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Compliance Review and Audit",
              "provider": {
                "@type": "Organization",
                "name": "CyberPunk",
                "url": "https://CyberPunk.com",
                "logo": "https://CyberPunk.com/logo.png"
              },
              "description": "Specialized compliance review and audit services to ensure IT governance and adherence to operational discipline.",
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

