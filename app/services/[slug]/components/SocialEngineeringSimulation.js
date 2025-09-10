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

export default function SocialEngineeringSimulation() {
  const [index, setIndex] = useState(0);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.slug === 'simulate-social-engineering-attacks');

  const slides = [
    {
      title: 'Elevating Defenses Against Human-Focused Cyber Threats',
      description:
        "Service is specifically designed to address this critical threat vector. By employing the NIST Cybersecurity Framework and OWASP guidelines, we meticulously test and enhance your team’s defenses against sophisticated social engineering tactics. Through a series of controlled, realistic scenarios, including phishing, pretexting, and other manipulation techniques, we evaluate your employees' readiness to detect and respond to these insidious threats.",
    },
    {
      title: 'Comprehensive Assessment through Controlled Attack Simulations',
      description:
        "Our approach involves crafting customized social engineering campaigns that mirror the tactics, techniques, and procedures (TTPs) employed by real-world attackers. By simulating these attacks in a controlled environment, we can accurately assess the vulnerability of your personnel to social engineering, providing invaluable insights into how these threats can penetrate your defenses and how they can be effectively mitigated.",
    },
    {
      title: 'Identifying Vulnerabilities and Enhancing Employee Vigilance',
      description:
        "The primary goal of our service is not just to test but to teach and fortify. Following each simulated attack, we conduct a detailed analysis of employee responses, identifying vulnerabilities and areas where security awareness may be lacking. This post-simulation review is crucial for understanding the effectiveness of your current cybersecurity training programs and the overall security culture within your organization.",
    },
    {
      title: 'Aligning with Industry Standards for a Holistic Security Strategy',
      description:
        "By leveraging the NIST Cybersecurity Framework and OWASP guidelines, our service ensures that your defenses against social engineering attacks are aligned with industry-best practices and standards. This alignment guarantees a comprehensive security posture that addresses both technical and human factors, ensuring your organization is well-prepared to resist and recover from these attacks.",
    },
    {
      title: 'A Strategic Approach to Fortifying Against Social Engineering',
      description:
        "Engaging in our Simulated Social Engineering Attacks service represents a strategic investment in strengthening the weakest link in the cybersecurity chain: the human element. We view this service as a partnership in building a culture of security awareness and resilience, offering ongoing support and guidance to ensure that your organization remains fortified against evolving social engineering threats.",
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
                  Simulate Social Engineering Attacks
                </h1>
                <p className="mt-6 text-gray-700 text-base leading-relaxed">
                  Our Simulated Social Engineering Attacks service leverages the NIST Cybersecurity Framework and OWASP guidelines to test and strengthen your team's defenses against sophisticated social engineering tactics. Through controlled scenarios like phishing and pretexting, we assess employee readiness and identify vulnerabilities. Post-simulation, we offer a concise analysis and targeted training recommendations, ensuring your organization is fortified against the human aspects of cyber threats, aligning with industry standards for a comprehensive security posture.
                </p>
              </div>
              <div data-aos="fade-left">
                <Image
                  src="/images/iso-27001.jpg"
                  alt="ISO Review"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-md"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Cart Button */}
          <div className="text-center mb-3">
            <button
              data-aos="fade-left"
              onClick={() => {
                if (isInCart) {
                  removeFromCart('simulate-social-engineering-attacks');
                } else {
                  addToCart({
                    slug: 'simulate-social-engineering-attacks',
                    name: 'Simulate Social Engineering Attacks',
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
          <div className="relative max-w-6xl mx-auto min-h-[260px] flex items-center justify-center text-center">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
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
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
            <Image
              src="/images/cta-handshake.jpg"
              alt="Cyber handshake"
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
          id="simulate-social-engineering-attacks-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Simulate Social Engineering Attacks",
              "provider": {
                "@type": "Organization",
                "name": "CyberPunk",
                "url": "https://CyberPunk.com",
                "logo": "https://CyberPunk.com/logo.png"
              },
              "description": "Simulated social engineering attacks using NIST Cybersecurity Framework and OWASP guidelines to assess and strengthen employee defenses against human-targeted cyber threats.",
              "areaServed": { "@type": "Country", "name": "India" }
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}

