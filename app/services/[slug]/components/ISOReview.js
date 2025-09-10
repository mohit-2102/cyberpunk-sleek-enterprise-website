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

export default function ISOReview() {
  const [index, setIndex] = useState(0);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.slug === 'it-environment-review-iso27001');

  const slides = [
    {
      title: 'Comprehensive Compliance Assessment and Gap Identification',
      description:
        'Our approach begins with a thorough evaluation of your current IT environment and information security practices against the ISO/IEC 27001:2022 requirements. This critical assessment phase aims to uncover any discrepancies or gaps that may exist in your existing ISMS, providing a clear and detailed analysis of areas requiring improvement.',
    },
    {
      title: 'Strategic Implementation of Controls and Processes',
      description:
        'We proceed to tailor and implement the necessary controls and processes that bridge the identified gaps. This phase is pivotal in transforming your ISMS into a robust framework capable of not only achieving ISO/IEC 27001:2022 certification but also enhancing your overall information security posture.',
    },
    {
      title: 'Certification Readiness and Continuous Improvement',
      description:
        'Achieving ISO/IEC 27001:2022 certification is a significant milestone, yet our vision extends beyond initial compliance. We equip your organization with the tools and knowledge for ongoing ISMS improvement, ensuring your practices remain agile and aligned with future ISO/IEC standards and cybersecurity trends.',
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div data-aos="fade-right">
              <h1 className="text-2xl md:text-3xl font-bold border-3 border-blue-600 px-6 py-4 rounded-lg shadow-sm w-fit">
                IT environment Compliance Review and Implementation with ISO/IEC 27001:2022
              </h1>
              <p className="mt-6 text-gray-700 text-base leading-relaxed">
                In an era dominated by digital threats, establishing a resilient Information Security Management System (ISMS) compliant with ISO/IEC 27001:2022 is imperative for safeguarding your organization’s information assets. Our specialized service assesses, enhances, and certifies your IT environment’s alignment with these rigorous standards, ensuring your systems are secure and aligned with international best practices.
              </p>
            </div>
            <div data-aos="fade-left">
              <Image
                src="/images/iso-27001.jpg"
                alt="ISO 27001 Compliance Review"
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
            onClick={() =>
              isInCart
                ? removeFromCart('it-environment-review-iso27001')
                : addToCart({ slug: 'it-environment-review-iso27001', name: 'IT Environment Compliance Review with ISO/IEC 27001:2022' })
            }
            className={`mt-4 font-semibold py-2 px-4 rounded transition ${
              isInCart ? 'bg-red-600 cursor-pointer hover:bg-red-700 text-white' : 'bg-blue-600 cursorpointer hover:bg-blue-700 text-white'
            }`}
          >
            {isInCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>

        <section className="bg-gray-100 py-16 px-6">
          <div className="relative max-w-6xl mx-auto min-h-[260px] flex items-center justify-center text-center">
            <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600">
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <div key={index} data-aos="fade-up" className="max-w-3xl">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">{slides[index].title}</h2>
              <p className="text-gray-700">{slides[index].description}</p>
            </div>
            <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600">
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="flex justify-center mt-6 gap-2">
            {slides.map((_, i) => (
              <span key={i} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full ${i === index ? 'bg-blue-600' : 'bg-gray-400'}`} />
            ))}
          </div>
        </section>

        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <Image
              src="/images/cta-handshake.jpg"
              alt="Cybersecurity partnership handshake"
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

        <Script
          id="iso-review-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "IT Environment Compliance Review with ISO/IEC 27001:2022",
              "provider": {
                "@type": "Organization",
                "name": "CyberPunk",
                "url": "https://CyberPunk.com",
                "logo": "https://CyberPunk.com/logo.png"
              },
              "description": "Assessment and implementation to meet ISO/IEC 27001:2022 standards.",
              "areaServed": { "@type": "Country", "name": "India" }
            }),
          }}
        />

        <Footer />
      </main>
    </>
  );
}


