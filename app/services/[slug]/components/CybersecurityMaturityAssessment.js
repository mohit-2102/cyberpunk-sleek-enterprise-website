'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useCart } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Script from 'next/script';

export default function CybersecurityMaturityAssessment() {
  const [activeSlide, setActiveSlide] = useState(0);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.slug === 'cybersecurity-maturity-assessment');

  const slides = [
    {
      title: 'From Initial Steps to Optimizing Security Postures',
      content: `Evaluates your organization's cybersecurity maturity across a spectrum from Initial to Optimizing stages. This evolutionary approach ensures a detailed understanding of your current cybersecurity health, highlighting strengths and identifying critical areas for improvement. Our goal is to facilitate a seamless journey towards achieving an Optimizing level of cybersecurity maturity, where continuous enhancement and proactive defense strategies become intrinsic to your organization's DNA.`,
    },
    {
      title: 'Empowerment Through Clarity',
      content: `The essence of our Cybersecurity Maturity Assessment lies in its ability to clarify the often complex landscape of cybersecurity metrics and benchmarks. By providing senior management with a clear, actionable view of the organization's cybersecurity maturity, we empower leaders to make informed decisions. This strategic clarity facilitates the refinement of cybersecurity strategies, guiding your organization towards a state of heightened security and preparedness.`,
    },
    {
      title: 'Guiding Organizations to Cybersecurity Excellence',
      content: `Leveraging our Cybersecurity Maturity Assessment, your organization gains more than a snapshot of its current security posture; it receives a dynamic roadmap tailored to navigate the intricacies of cybersecurity enhancement. From foundational security implementations to the optimization of sophisticated defense mechanisms, our service supports your organization at every step, ensuring a robust, adaptive approach to cybersecurity challenges.`,
    },
    {
      title: 'Empowering Adaptive Security Practices',
      content: `With our advanced assessment tools and strategic insights, we not only aim to bolster your cybersecurity defenses but also to position your organization as a leader in cybersecurity readiness. Our service is a testament to a commitment towards not just meeting but exceeding the standards of cybersecurity excellence, ensuring your organization remains resilient in the face of digital threats.`,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveSlide(prev => (prev + 1) % slides.length),
      6000
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleNext = () => setActiveSlide(prev => (prev + 1) % slides.length);
  const handlePrev = () => setActiveSlide(prev => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-12">
          <div className="md:w-1/2" data-aos="fade-right">
            <h1 className="text-3xl md:text-4xl font-bold border-4 border-blue-600 px-4 py-3 rounded-lg shadow inline-block text-center">
              Cybersecurity Maturity Assessment
            </h1>
            <p className="mt-6 text-gray-700 text-base leading-relaxed">
              In the rapidly evolving threat landscape, achieving a resilient cybersecurity posture is critical for safeguarding your organization’s digital assets. Our Cybersecurity Maturity Assessment service merges the structured approach of the NIST Cybersecurity Framework with the depth of the Capability Maturity Model Integration (CMMI) to offer a comprehensive management dashboard. This integration provides a clear, strategic overview of your cybersecurity health, enabling a precise assessment of your maturity from Initial stages to Optimizing levels.
            </p>
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <Image
              src="/images/cybersecurity-maturity.jpg"
              alt="Illustration showing stages of cybersecurity maturity"
              width={800}
              height={500}
              className="rounded-lg w-full h-auto shadow-lg"
            />
          </div>
        </section>

        {/* Add/Remove Cart */}
        <div className="text-center m-3">
          <button
            data-aos="fade-left"
            onClick={() =>
              isInCart
                ? removeFromCart('cybersecurity-maturity-assessment')
                : addToCart({
                  slug: 'cybersecurity-maturity-assessment',
                  name: 'Cybersecurity Maturity Assessment',
                })
            }
            className={`mt-4 inline-block cursor-pointer font-semibold py-2 px-4 rounded transition 
              ${isInCart
                ? 'bg-red-600 cursor-pointer hover:bg-red-700 text-white'
                : 'bg-blue-600 cursor-pointer hover:bg-blue-700 text-white'}`}
          >
            {isInCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>

        {/* Slider Section */}
        <section className="bg-gray-100 py-16 px-6 relative">
          <div className="max-w-5xl mx-auto min-h-[300px] flex items-center justify-center relative text-center">
            <button
              onClick={handlePrev}
              className="absolute left-0 px-4 text-2xl text-gray-500 hover:text-blue-600 transition"
            >
              &#8249;
            </button>
            <div key={activeSlide} data-aos="fade-up" className="transition-all duration-500 ease-in-out w-full">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                {slides[activeSlide].title}
              </h2>
              <p className="text-gray-700">{slides[activeSlide].content}</p>
            </div>
            <button
              onClick={handleNext}
              className="absolute right-0 px-4 text-2xl text-gray-500 hover:text-blue-600 transition"
            >
              &#8250;
            </button>
          </div>
          <div className="flex justify-center mt-6 gap-2">
            {slides.map((_, i) => (
              <span
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${i === activeSlide ? 'bg-blue-600' : 'bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8">
            <Image
              src="/images/cta-handshake.jpg"
              alt="Collaboration handshake representing cybersecurity partnership"
              width={800}
              height={500}
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

        {/* JSON-LD Schema */}
        <Script
          id="cybersecurity-maturity-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Cybersecurity Maturity Assessment',
              provider: {
                '@type': 'Organization',
                name: 'CyberPunk',
                url: 'https://CyberPunk.com',
                logo: 'https://CyberPunk.com/logo.png',
              },
              description:
                'Cybersecurity maturity evaluation service based on NIST CSF and CMMI to assess and improve security posture.',
              areaServed: {
                '@type': 'Country',
                name: 'India',
              },
            }),
          }}
        />
      </main>

      <Footer />
    </>
  );
}

