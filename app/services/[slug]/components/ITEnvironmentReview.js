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

export default function ITEnvironmentReview() {
  const [index, setIndex] = useState(0);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.slug === 'it-environment-review');

  const slides = [
    {
      title: 'Holistic Evaluation for a Secure IT Ecosystem',
      description:
        'Service is meticulously designed to offer a comprehensive evaluation of your entire IT ecosystem. By focusing on enhancing security controls, incident response capabilities, and cyber-incident response maturity, this assessment provides a 360-degree view of your network infrastructure, servers, software, devices, personnel, and compliance protocols, ensuring a holistic understanding of potential risks and areas requiring improvement.',
    },
    {
      title: 'Strengthening Security Controls Across All IT Components',
      description:
        "The cornerstone of our service is a thorough examination of the existing security controls within your IT environment. From network defenses to server configurations, software security measures, and endpoint protection on devices, we assess each component for vulnerabilities and misconfigurations that could expose your organization to cyber threats. This comprehensive approach ensures that security enhancements are not only targeted but also aligned with best practices and industry standards, fortifying your defenses across the board.",
    },
    {
      title: 'Enhancing Incident Response Capabilities for Rapid Mitigation',
      description:
        "Beyond assessing security controls, our review places a significant emphasis on evaluating and improving your organization’s incident response capabilities. By analyzing current protocols and practices for detecting, responding to, and recovering from cyber incidents, we identify opportunities to streamline and strengthen these processes. Our recommendations aim to elevate your cyber-incident response maturity, ensuring your team is prepared to act swiftly and effectively in the face of threats, minimizing potential impacts on your operations.",
    },
    {
      title: 'Identifying Risks and Pinpointing Areas for Improvement',
      description:
        "Our IT Environment Review extends to a strategic analysis of compliance protocols and the role of personnel in maintaining cybersecurity hygiene. By identifying risks associated with non-compliance and human factors, we provide targeted insights into how to enhance your IT ecosystem's overall security posture. This includes recommendations for training, policy adjustments, and procedural updates to ensure that every aspect of your IT environment contributes positively to your cybersecurity defenses.",
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
                IT Environment Review
              </h1>
              <p className="mt-6 text-gray-700 text-base leading-relaxed">
                Our IT environment Review combines a comprehensive evaluation of IT ecosystem with a focus on enhancing security controls, incident response capabilities, and overall cyber-incident response maturity. This integrated assessment spans network infrastructure, servers, software, devices, people and compliance protocols to identify risks and pinpoint areas for improvement.
              </p>
            </div>
            <div data-aos="fade-left">
              <Image
                src="/images/iso-27001.jpg"
                alt="IT Environment Review"
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
                ? removeFromCart('it-environment-review')
                : addToCart({ slug: 'it-environment-review', name: 'IT Environment Review' })
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
          id="it-environment-review-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "IT Environment Review",
              "provider": { "@type": "Organization", "name": "CyberPunk", "url": "https://CyberPunk.com", "logo": "https://CyberPunk.com/logo.png" },
              "description": "Comprehensive evaluation of IT ecosystem to enhance security, incident response, and compliance.",
              "areaServed": { "@type": "Country", "name": "India" }
            }),
          }}
        />

        <Footer />
      </main>
    </>
  );
}
