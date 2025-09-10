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
  const isInCart = cartItems.some(item => item.slug === 'third-party-risk-management');

  const slides = [
    {
      title: 'Aligning External Partners with Your Security Standards',
      description:
        "In today's interconnected business landscape, the security practices and compliance of your external partners and vendors are integral to your organization's overall risk profile. Our Third-Party Risk Management (TPRM) service is meticulously crafted to ensure these third parties not only meet but also align with your stringent security standards and compliance requirements. By conducting a comprehensive assessment of risks posed by external entities, we protect the integrity of your supply chain and preserve the security of your operations.",
    },
    {
      title: 'Leveraging Leading Frameworks for Thorough Risk Assessments',
      description:
        'Utilizing the globally recognized standards of ISO/IEC 27001 and the NIST Cybersecurity Framework, our TPRM process involves an in-depth examination of your third parties security measures. This rigorous vetting process is designed to uncover any discrepancies between your security expectations and the practices of your partners, ensuring a unified approach to data protection and cyber risk management.',
    },
    {
      title: 'Proactive Vulnerability Identification and Mitigation',
      description:
        'Beyond the initial assessment, our TPRM service is dedicated to the ongoing identification and mitigation of vulnerabilities within your third-party network. This continuous vigilance allows for the early detection of potential security weaknesses, ensuring that effective countermeasures can be implemented promptly to mitigate risks and enhance the resilience of your supply chain against cyber threats.',
    },
    {
      title: 'Continuous Monitoring for Dynamic Risk Management',
      description:
        'Recognizing that third-party relationships evolve and new risks can emerge, our service includes continuous monitoring of these external entities. This ensures that any changes in the security posture or compliance levels of your partners are quickly identified, allowing for timely interventions to maintain the security and integrity of your business ecosystem.',
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
              Third-Party Risk Management (TPRM)
            </h1>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Our Third-Party Risk Management (TPRM) service rigorously assesses risks from external partners and vendors, aligning their security practices with your standards and compliance needs. Employing ISO/IEC 27001 and the NIST Cybersecurity Framework, we conduct a thorough vetting, identify and mitigate vulnerabilities, and ensure ongoing monitoring. This approach safeguards your supply chain and business operations, maintaining integrity and security.
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
                removeFromCart('third-party-risk-management');
              } else {
                addToCart({
                  slug: 'third-party-risk-management',
                  name: 'Third-Party Risk Management (TPRM)',
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
          id="third-party-risk-management-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Third-Party Risk Management (TPRM)",
              "provider": {
                "@type": "Organization",
                "name": "CyberPunk",
                "url": "https://CyberPunk.com",
                "logo": "https://CyberPunk.com/logo.png"
              },
              "description":
                "Third-Party Risk Management (TPRM) service that assesses and aligns external partners' security practices with your organization's standards, employing ISO/IEC 27001 and NIST Cybersecurity Framework.",
              "areaServed": { "@type": "Country", "name": "India" }
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
