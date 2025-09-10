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

export default function CloudSecurityAssessment() {
  const [index, setIndex] = useState(0);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.slug === 'cloud-security-assessment');

  const slides = [
    {
      title: 'Aligning Cloud Operations with Leading Industry Standards',
      description:
        'Service is designed to rigorously align your cloud operations with the foremost industry standards, such as the Cloud Security Alliance (CSA) Cloud Controls Matrix, Center for Internet Security (CIS) benchmarks, NIST guidelines, and ISO/IEC 27017. Through a detailed evaluation of your cloud architectures, policies, compliance measures, and security protocols, we aim to identify and mitigate risks, thereby enhancing your overall cloud governance framework.',
    },
    {
      title: 'Evaluating Cloud Architectures for Secure and Compliant Operations',
      description:
        "Our service delves deep into the structural aspects of your cloud operations, examining the architecture for potential vulnerabilities and inefficiencies. By leveraging the CSA Cloud Controls Matrix and other industry benchmarks, we assess how well your cloud infrastructure aligns with recognized best practices for security and compliance. This thorough analysis ensures that your cloud environment is not only robust against threats but also optimized for performance and compliance.",
    },
    {
      title: 'Mitigating Risks with Tailored Security and Compliance Measures',
      description:
        "Recognizing the dynamic nature of cloud environments, our Cloud Security Assessment focuses on identifying and mitigating risks that could compromise the security or integrity of your cloud operations. By evaluating your existing policies, compliance measures, and security protocols against CIS benchmarks, NIST guidelines, and ISO/IEC 27017 standards, we pinpoint areas for improvement. Our strategic recommendations are designed to bolster your defenses, enhance data protection, and ensure compliance with relevant regulations and standards.",
    },
    {
      title: 'Enhancing Governance with Strategic Recommendation',
      description:
        "The outcome of our assessment is a strategic roadmap tailored to enhance your cloud governance. This roadmap includes actionable recommendations for strengthening cloud architectures, refining policies, and improving compliance measures. Our focus on aligning your operations with industry-leading standards ensures that your cloud environment is secure, efficient, and compliant, ready to support your business objectives and growth.",
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
              <h1 className="text-2xl md:text-3xl font-bold border-3 border-blue-600 px-6 py-4 rounded-lg shadow-sm w-fit">
                Cloud Security Assessment
              </h1>
              <p className="mt-6 text-gray-700 text-base leading-relaxed">
                Our Cloud Governance Review service meticulously aligns your cloud operations with premier industry standards, including Cloud Security Alliance (CSA) Cloud Control Matrix, Center for Internet Security (CIS) benchmarks, NIST, and ISO/IEC 27017. By evaluating your cloud architectures, policies, compliance measures, and security protocols, we mitigate risks and enhance governance.
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

        <div className="text-center m-3">
          <button
            data-aos="fade-left"
            onClick={() => {
              if (isInCart) {
                removeFromCart('cloud-security-assessment');
              } else {
                addToCart({
                  slug: 'cloud-security-assessment',
                  name: 'Cloud Security Assessment',
                });
              }
            }}
            className={`mt-4 inline-block cursor-pointer font-semibold py-2 px-4 rounded transition 
              ${isInCart
                ? 'bg-red-600  hover:bg-red-700 text-white'
                : 'bg-blue-600  hover:bg-blue-700 text-white'}`}
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
                alt="Cybersecurity Collaboration Handshake"
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
          id="cloud-security-assessment-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Cloud Security Assessment",
              "provider": {
                "@type": "Organization",
                "name": "CyberPunk",
                "url": "https://CyberPunk.com",
                "logo": "https://CyberPunk.com/logo.png"
              },
              "description": "Align your cloud operations with CSA, CIS, NIST, and ISO/IEC 27017 standards through our Cloud Security Assessment, ensuring security, compliance, and governance.",
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

