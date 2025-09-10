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

export default function VAPTAssessment() {
  const [index, setIndex] = useState(0);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.slug === 'vulnerability-assessment-penetration-testing');

  const slides = [
    {
      title: 'Strategic Assessment Using Industry-Standard Frameworks',
      description:
        'Service integrates the best practices and methodologies from leading frameworks such as OWASP for web application security and MITRE ATT&CK for enterprise threats. This strategic approach ensures a comprehensive assessment, uncovering vulnerabilities that could be exploited by cyber adversaries and testing your defenses against simulated attacks.',
    },
    {
      title: 'In-Depth Vulnerability Assessment for Robust Insight',
      description:
        "The first phase of our service involves a meticulous vulnerability assessment, where we systematically scan and analyze your IT environment to identify security weaknesses. This process not only uncovers known vulnerabilities but also anticipates potential future threats, providing a detailed overview of areas where your defenses may be lacking. By leveraging the latest in vulnerability discovery techniques and tools, we ensure that your organization has the insights needed to fortify its cyber defenses effectively.",
    },
    {
      title: 'Targeted Penetration Testing to Validate Defenses',
      description:
        "Building on the insights gained from the vulnerability assessment, our service includes targeted penetration testing that simulates real-world attack scenarios. This hands-on approach tests the resilience of your security measures, identifying not just theoretical vulnerabilities but how they can be exploited in practice. Our expert team employs a variety of attack vectors, guided by the OWASP and MITRE ATT&CK frameworks, to provide a realistic assessment of your ability to detect, resist, and recover from cyber attacks.",
    },
    {
      title: 'Tailored Recommendations for Enhanced Security Posture',
      description:
        "Following our comprehensive assessment and testing, we provide personalized recommendations designed to address the specific vulnerabilities identified within your IT infrastructure. These recommendations are prioritized based on the potential impact and feasibility of implementation, ensuring that you can take immediate action to enhance your cybersecurity posture. Our goal is to empower your organization with the knowledge and strategies necessary for continuous improvement in cyber defense.",
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
                Vulnerability Assessment and Penetration Testing (VAPT)
              </h1>
              <p className="mt-6 text-gray-700 text-base leading-relaxed">
                Leveraging industry-standard frameworks such as OWASP and MITRE ATT&CK, our Vulnerability Assessment and Penetration Testing (VAPT) service is meticulously designed to conduct in-depth assessments of your IT infrastructure.
              </p>
            </div>
            <div data-aos="fade-left" className="relative w-full h-[300px] md:h-[400px] rounded-xl shadow-md overflow-hidden">
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
                removeFromCart('vulnerability-assessment-penetration-testing');
              } else {
                addToCart({
                  slug: 'vulnerability-assessment-penetration-testing',
                  name: 'Vulnerability Assessment and Penetration Testing (VAPT)',
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
            <div data-aos="fade-right" className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-md">
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
          id="vapt-assessment-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Vulnerability Assessment and Penetration Testing (VAPT)",
              "provider": {
                "@type": "Organization",
                "name": "CyberPunk",
                "url": "https://CyberPunk.com",
                "logo": "https://CyberPunk.com/logo.png"
              },
              "description":
                "Comprehensive VAPT service leveraging OWASP and MITRE ATT&CK frameworks for vulnerability assessment, penetration testing, and tailored security recommendations.",
              "areaServed": { "@type": "Country", "name": "India" }
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
