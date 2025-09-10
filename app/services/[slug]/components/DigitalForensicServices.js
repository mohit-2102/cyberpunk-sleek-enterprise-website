'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Script from 'next/script';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useCart } from '@/context/CartContext';

export default function DigitalForensicServices() {
  const [index, setIndex] = useState(0);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.slug === 'digital-forensic-services');

  const slides = [
    {
      title: 'Systematic Investigation for Uncovering Electronic Evidence',
      description:
        'Services are designed to meet this critical need, employing advanced methodologies to uncover, collect, and interpret electronic evidence. This rigorous process is essential not only for understanding the intricate details of cybersecurity incidents or crimes but also for reconstructing the sequence of events that led to these incidents.',
    },
    {
      title: 'Employing Advanced Techniques for Detailed Evidence Analysis',
      description:
        "Leveraging state-of-the-art forensic tools and techniques, our service delves deep into the digital fabric to extract and preserve vital evidence. Our experts are adept at navigating complex digital environments, from conventional computing devices to mobile platforms and cloud infrastructures. This comprehensive approach ensures that no stone is left unturned in the quest to uncover relevant evidence, regardless of where or how it is stored.",
    },
    {
      title: 'Reconstructing Events to Determine Incident Dynamics',
      description:
        "Understanding the dynamics of a cybersecurity incident or crime goes beyond merely identifying the evidence. Our Digital Forensic Services specialize in the critical analysis and interpretation of data, piecing together digital clues to reconstruct the sequence of events. This reconstruction is pivotal in determining how security breaches occurred, identifying potential vulnerabilities exploited by attackers, and providing insights into the motivations behind malicious activities.",
    },
    {
      title: 'Providing Clear, Detailed Reports for Legal and Security Use',
      description:
        "The culmination of our forensic investigation is a clear, detailed report that articulates our findings and the inferred sequence of events. This report is meticulously prepared to serve both legal purposes, such as litigation and compliance investigations, and as a foundational element for bolstering your organization's security measures. The insights gained through our forensic analysis can inform strategic decisions, guiding improvements in security protocols and practices to prevent future incidents.",
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

  return (
    <>
      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 py-12">
          <div className="md:w-1/2" data-aos="fade-right">
            <h1 className="text-2xl md:text-3xl font-bold border-3 border-blue-600 px-4 py-3 rounded-lg shadow inline-block text-center">
              Digital Forensic Services
            </h1>
            <p className="mt-6 text-gray-700 text-base leading-relaxed">
              Systematically investigate and analyze digital data with the aim of uncovering and interpreting electronic evidence. This process is crucial for understanding the details of cybersecurity incidents or crimes, determining the sequence of events, and providing a clear and detailed report that can be used for legal purposes or to bolster security measures.
            </p>
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <Image
              src="/images/digital-forensics.jpg"
              alt="Digital Forensic Services"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto shadow-lg"
              priority
            />
          </div>
        </section>

        {/* Cart */}
        <div className="text-center m-3">
          <button
            data-aos="fade-left"
            onClick={() => {
              if (isInCart) removeFromCart('digital-forensic-services');
              else addToCart({ slug: 'digital-forensic-services', name: 'Digital Forensic Services' });
            }}
            className={`mt-4 inline-block cursor-pointer font-semibold py-2 px-4 rounded transition 
              ${isInCart ? 'bg-red-600 cursor-pointer hover:bg-red-700 text-white' : 'bg-blue-600 cursor-pointer hover:bg-blue-700 text-white'}`}
          >
            {isInCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>

        {/* Slider */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="relative max-w-6xl mx-auto min-h-[300px] flex items-center justify-center text-center">
            <button onClick={() => setIndex(prev => (prev - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800">
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <div key={index} data-aos="fade-up" className="transition-all duration-500 ease-in-out max-w-3xl">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">{slides[index].title}</h2>
              <p className="text-gray-700 leading-relaxed">{slides[index].description}</p>
            </div>

            <button onClick={() => setIndex(prev => (prev + 1) % slides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800">
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {slides.map((_, i) => (
              <span key={i} onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${i === index ? 'bg-blue-600' : 'bg-gray-400'}`} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8">
            <Image
              src="/images/cta-handshake.jpg"
              alt="Cyber handshake"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
              data-aos="fade-right"
              priority
            />
            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold text-gray-800">
                Collaborate to Navigate the Cyber Seas Safely: A Journey Toward Secure Digital Horizons
              </h3>
            </div>
          </div>
        </section>

        {/* JSON-LD */}
        <Script
          id="digital-forensic-services-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Digital Forensic Services",
              "provider": {
                "@type": "Organization",
                "name": "CyberPunk",
                "url": "https://CyberPunk.com",
                "logo": "https://CyberPunk.com/logo.png"
              },
              "description": "Professional digital forensic investigations for cyber incidents and legal cases.",
              "areaServed": { "@type": "Country", "name": "India" }
            })
          }}
        />
        <Footer />
      </main>
    </>
  );
}

