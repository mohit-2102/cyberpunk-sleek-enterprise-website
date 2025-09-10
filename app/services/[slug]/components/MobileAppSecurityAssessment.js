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

export default function MobileAppSecurityAssessment() {
  const [index, setIndex] = useState(0);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.slug === 'mobile-application-security-assessment');

  const slides = [
    {
      title: 'Safeguarding Mobile Applications with Best-in-Class Standards',
      description:
        "Service is meticulously designed to fortify your mobile applications against the myriad of cyber threats they face daily. By harnessing the power of industry-leading standards, such as the OWASP Mobile Security Project and the Mobile Application Security Verification Standard (MASVS), we provide a robust framework for identifying and addressing security weaknesses within your mobile applications.",
    },
    {
      title: 'Uncovering Vulnerabilities with Precision and Depth',
      description:
        "Our assessment process is tailored to unearth a broad spectrum of security weaknesses that could compromise your mobile applications. From insecure data storage practices that might expose sensitive information to improper session handling that could leave user sessions vulnerable to hijacking, we ensure comprehensive coverage of mobile-specific vulnerabilities. This thorough approach allows us to pinpoint areas of concern that require immediate attention, ensuring that every aspect of your mobile application's security posture is scrutinized.",
    },
    {
      title: 'Employing OWASP and MASVS for Targeted Security Insights',
      description:
        "Utilizing the OWASP Mobile Security Project and MASVS guidelines, our assessment delivers targeted insights into the security architecture of your mobile applications. These frameworks provide a structured methodology for evaluating the effectiveness of your application's security mechanisms, offering a clear and actionable set of criteria against which to measure your application's resilience against cyber threats.",
    },
    {
      title: 'Actionable Recommendations for Mobile Application Security Enhancement',
      description:
        "Following our in-depth assessment, we provide a set of actionable recommendations designed to address the identified vulnerabilities and enhance your mobile application's overall security. These recommendations are tailored to the specific findings of the assessment, ensuring that remediation efforts are both effective and efficient. Our goal is to empower you with the knowledge and strategies necessary to build a more secure mobile application environment, one that is resilient against both current and emerging security threats.",
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
                Mobile Application Security Assessment
              </h1>
              <p className="mt-6 text-gray-700 text-base leading-relaxed">
                Our Mobile Application Security Assessment is designed to safeguard mobile applications by leveraging industry-leading standards such as the OWASP Mobile Security Project and the Mobile Application Security Verification Standard (MASVS). This assessment aims to uncover security weaknesses within mobile applications, from insecure data storage to improper session handling, ensuring comprehensive coverage of mobile-specific vulnerabilities.
              </p>
            </div>
            <div data-aos="fade-left">
              <Image
                src="/images/iso-27001.jpg"
                alt="Mobile App Security Assessment"
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
            onClick={() =>
              isInCart
                ? removeFromCart('mobile-application-security-assessment')
                : addToCart({ slug: 'mobile-application-security-assessment', name: 'Mobile Application Security Assessment' })
            }
            className={`mt-4 font-semibold py-2 px-4 rounded transition ${isInCart ? 'bg-red-600 cursor-pointer hover:bg-red-700 text-white' : 'bg-blue-600 cursor-pointer hover:bg-blue-700 text-white'
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
            <div key={index} data-aos="fade-right" className="max-w-3xl">
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
              alt="Cyber handshake"
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
          id="mobile-app-security-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Mobile Application Security Assessment",
              "provider": { "@type": "Organization", "name": "CyberPunk", "url": "https://CyberPunk.com", "logo": "https://CyberPunk.com/logo.png" },
              "description": "Assessment using OWASP MASVS to secure mobile applications.",
              "areaServed": { "@type": "Country", "name": "India" }
            }),
          }}
        />

        <Footer />
      </main>
    </>
  );
}
