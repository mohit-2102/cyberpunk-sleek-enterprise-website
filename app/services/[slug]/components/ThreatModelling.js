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

export default function ThreatModelling() {
  const [index, setIndex] = useState(0);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.slug === 'threat-modelling');

  const slides = [
    {
      title: 'Leveraging Advanced Frameworks for Deep Threat Insight',
      description:
        'Our Threat Modelling service integrates the sophisticated methodologies of PASTA (Process for Attack Simulation and Threat Analysis) and STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege) to dissect and understand the myriad of threats facing your organization\'s IT infrastructure. These advanced frameworks enable a structured, comprehensive analysis, uncovering potential vulnerabilities and the tactics attackers might use to exploit them.',
    },
    {
      title: 'Systematic Identification and Prioritization of Cyber Threats',
      description:
        'By adopting PASTA and STRIDE, our approach is not merely about listing possible cyber threats; it\'s about contextualizing and prioritizing them within the framework of your specific IT environment. This ensures a focused analysis that identifies which vulnerabilities are most critical and which threats could have the most significant impact, allowing for a strategic allocation of resources towards mitigating the most pressing risks.',
    },
    {
      title: 'Mitigating Risks with Tailored Security Measures',
      description:
        'The essence of our Threat Modelling service lies in transforming threat intelligence into actionable defense strategies. Tailored to the unique aspects of your organization, these strategies are designed to fortify your IT infrastructure against identified threats efficiently. From enhancing system configurations to implementing advanced security protocols, we guide you through reinforcing your cyber defenses, ensuring they are resilient against both current and future threats.',
    },
    {
      title: 'Proactive Adaptation to the Evolving Threat Landscape',
      description:
        'A key advantage of our Threat Modelling service is its dynamic nature, allowing your organization to stay ahead of emerging threats. With ongoing analysis and updates based on the latest threat intelligence, we ensure that your cybersecurity measures evolve in tandem with the changing threat landscape. This proactive stance not only safeguards your digital assets but also enhances your overall security posture, ensuring long-term resilience.',
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
          <div data-aos="fade-right">
            <h1 className="text-2xl md:text-3xl font-bold border-3 border-blue-700 px-6 py-4 w-fit shadow-sm">
              Threat Modelling
            </h1>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Our Threat Modelling service empowers organizations with the tools and methodologies to understand,
              evaluate, and proactively counter cyber threats. Using frameworks like PASTA and STRIDE, we uncover
              vulnerabilities, assess their impact, and translate insights into concrete, tailored security strategies.
              This comprehensive approach fosters cyber resilience in an evolving threat environment.
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
        </section>

        {/* Cart Button */}
        <div className="text-center m-3">
          <button
            data-aos="fade-left"
            onClick={() => {
              if (isInCart) {
                removeFromCart('threat-modelling');
              } else {
                addToCart({
                  slug: 'threat-modelling',
                  name: 'Threat Modelling',
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
          <div className="relative max-w-6xl mx-auto min-h-[300px] flex items-center justify-center text-center">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
              aria-label="Previous Slide"
            >
              <ChevronLeftIcon className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Slide Content */}
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

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
              aria-label="Next Slide"
            >
              <ChevronRightIcon className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${i === index ? 'bg-blue-600' : 'bg-gray-400'}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
            <div data-aos="fade-right" className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/cta-handshake.jpg"
                alt="Cybersecurity partnership handshake"
                width={600}
                height={400}
                className="rounded-xl shadow-md"
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
          id="threat-modelling-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Threat Modelling",
              "provider": {
                "@type": "Organization",
                "name": "CyberPunk",
                "url": "https://CyberPunk.com",
                "logo": "https://CyberPunk.com/logo.png"
              },
              "description":
                "Threat Modelling service leveraging PASTA and STRIDE frameworks to identify, prioritize, and mitigate cyber threats with tailored security strategies.",
              "areaServed": { "@type": "Country", "name": "India" }
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}

