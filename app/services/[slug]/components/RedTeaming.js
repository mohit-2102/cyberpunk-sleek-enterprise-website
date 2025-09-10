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

export default function RedTeaming() {
  const [index, setIndex] = useState(0);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.slug === 'red-teaming');

  const slides = [
    {
      title: 'Simulating Sophisticated Cyber Attacks to Fortify Defenses',
      description:
        'Our Red Teaming service transcends conventional vulnerability assessments by providing a comprehensive, realistic simulation of potential attacker strategies aimed at penetrating your organization’s defenses. Leveraging the depth of the MITRE ATT&CK framework alongside bespoke attack vectors, our expert red team embarks on multi-layered attack simulations designed to test the resilience of your systems and data against real-world cyber threats.',
    },
    {
      title: 'Comprehensive Coverage with the MITRE ATT&CK Framework',
      description:
        "At the heart of our Red Teaming service is the strategic use of the MITRE ATT&CK framework, which enables us to cover a wide array of attack methodologies and scenarios. This approach ensures that our simulations are not only varied but also reflect the latest and most sophisticated techniques used by attackers today. By exposing your systems and data to these controlled attack simulations, we help identify vulnerabilities that might otherwise be exploited by malicious actors.",
    },
    {
      title: 'Multi-Layered Simulations for Deep Defense Analysis',
      description:
        "Our Red Teaming exercises go beyond superficial testing, employing multi-layered attack simulations that probe deep into your cybersecurity defenses. This thorough analysis allows us to evaluate the resilience of your systems across different levels of your IT infrastructure, from external entry points to internal data access controls, ensuring a comprehensive assessment of your organization's ability to detect, respond to, and recover from cyber-attacks.",
    },
    {
      title: 'Customized Attack Vectors for Targeted Security Insights',
      description:
        "Understanding that each organization faces unique security challenges, our Red Teaming service customizes attack vectors to closely align with your specific risk profile and threat landscape. This tailored approach ensures that our attack simulations provide targeted insights, enabling us to offer actionable recommendations that significantly enhance your cybersecurity posture.",
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
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div data-aos="fade-right">
              <h1 className="text-2xl md:text-3xl font-bold border-3 border-blue-600 px-6 py-4 rounded-lg shadow-sm w-fit">
                Red Teaming Exercise
              </h1>
              <p className="mt-6 text-gray-700 text-base leading-relaxed">
                Our Red Teaming Service provides a comprehensive and realistic simulation of how an attacker would attempt to gain access to your organization's systems and data. Utilizing techniques from the MITRE ATT&CK framework and custom attack vectors, our red team conducts multi-layered attack simulations.
              </p>
            </div>
            <div data-aos="fade-left">
              <Image
                src="/images/iso-27001.jpg"
                alt="Red Teaming cybersecurity simulation"
                width={600}
                height={400}
                className="w-full rounded-xl shadow-md"
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
                removeFromCart('red-teaming');
              } else {
                addToCart({
                  slug: 'red-teaming',
                  name: 'Red Teaming',
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
          <div className="relative max-w-6xl mx-auto min-h-[260px] flex items-center justify-center text-center">
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

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
              alt="Cybersecurity collaboration handshake"
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
          id="red-teaming-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Red Teaming Exercise",
              "provider": {
                "@type": "Organization",
                "name": "CyberPunk",
                "url": "https://CyberPunk.com",
                "logo": "https://CyberPunk.com/logo.png"
              },
              "description": "Realistic cyber attack simulations using MITRE ATT&CK framework and custom attack vectors to assess and strengthen your cybersecurity posture.",
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
