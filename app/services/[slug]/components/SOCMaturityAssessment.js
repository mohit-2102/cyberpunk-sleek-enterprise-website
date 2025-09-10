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

export default function SOCMaturityAssessment() {
  const [index, setIndex] = useState(0);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.slug === 'soc-maturity-assessment');

  const slides = [
    {
      title: 'Elevating Security Operations with Comprehensive Maturity Insights',
      description:
        'Service is tailored to evaluate and enhance your SOC by benchmarking its performance against the SOC Capability & Maturity Model (SOC-CMM). This thorough assessment not only measures your SOC’s current capabilities in threat detection, incident response, and operational efficiency but also identifies areas for improvement, ensuring alignment with industry-leading standards and practices.',
    },
    {
      title: 'Benchmarking Against SOC-CMM for Targeted Enhancements',
      description:
        "leveraging the SOC-CMM framework, our assessment provides a structured evaluation of your SOC across various dimensions of performance and maturity. This benchmarking process highlights strengths and pinpoints critical areas where enhancements can significantly impact your SOC’s effectiveness. By comparing your operations against recognized best practices, we offer a clear perspective on how your SOC stacks up in the broader cybersecurity landscape.",
    },
    {
      title: 'Developing a Tailored Roadmap for SOC Optimization',
      description:
        "The outcome of our SOC Maturity Assessment is a detailed and actionable roadmap designed to guide your SOC's enhancement efforts. This roadmap focuses on key areas such as technology optimization, process refinement, and team skill development, ensuring a holistic approach to improving SOC operations. Our recommendations are prioritized based on their potential impact and feasibility, providing a strategic path to elevating your SOC's maturity and effectiveness.",
    },
    {
      title: 'Focusing on Technology, Process, and People for Comprehensive Improvement',
      description:
        "Recognizing that a high-performing SOC relies on more than just advanced technology, our assessment encompasses all critical aspects of SOC operations, including process efficiencies and team capabilities. We delve into the integration of technology with operational processes and the skill sets of your team, ensuring that each element is optimized for peak performance. This comprehensive approach ensures that improvements are sustainable and impactful, enhancing your SOC's ability to respond to cybersecurity challenges effectively.",
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
                Security Operations Center (SOC) Maturity Assessment
              </h1>
              <p className="mt-6 text-gray-700 text-base leading-relaxed">
                Our SOC Maturity Assessment service rigorously evaluates your Security Operations Center, aligning its performance with leading industry standards and frameworks for SOC-CMM (the SOC Capability & Maturity Model). This concise assessment benchmarks your SOC’s capabilities in threat detection, incident response, and operational efficiency against best practices. We provide a clear roadmap for enhancing your SOC's effectiveness, focusing on technology optimization, process refinement, and team skill enhancement.
              </p>
            </div>
            <div data-aos="fade-left">
              <Image
                src="/images/iso-27001.jpg"
                alt="Cloud Security Compliance Review"
                width={800}
                height={500}
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
                removeFromCart('soc-maturity-assessment');
              } else {
                addToCart({
                  slug: 'soc-maturity-assessment',
                  name: 'Security Operations Center (SOC) Maturity Assessment',
                });
              }
            }}
            className={`mt-4 inline-block cursor-pointer font-semibold py-2 px-4 rounded transition 
              ${isInCart ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
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
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                {slides[index].title}
              </h2>
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
                className={`h-2 w-2 rounded-full transition-all duration-300 ${i === index ? 'bg-blue-600' : 'bg-gray-400'
                  }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
            <Image
              src="/images/cta-handshake.jpg"
              alt="Cybersecurity partnership handshake"
              width={600}
              height={400}
              className="rounded-xl shadow-md"
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
          id="soc-maturity-assessment-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Security Operations Center (SOC) Maturity Assessment",
              "provider": {
                "@type": "Organization",
                "name": "CyberPunk",
                "url": "https://CyberPunk.com",
                "logo": "https://CyberPunk.com/logo.png"
              },
              "description":
                "SOC Maturity Assessment service benchmarking your SOC’s capabilities in threat detection, incident response, and operational efficiency with SOC-CMM standards. Provides actionable roadmap for SOC improvements.",
              "areaServed": { "@type": "Country", "name": "India" }
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}

