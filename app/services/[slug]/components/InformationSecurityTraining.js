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

export default function InformationSecurityTraining() {
  const [index, setIndex] = useState(0);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.slug === 'information-security-training');

  const slides = [
    {
      title: 'Empowering Employees to Fortify Cybersecurity',
      description:
        'Human error stands as a significant vulnerability in the cybersecurity armor of organizations. Our Information Security Training and Awareness program is designed to transform this vulnerability into a strength. By engaging employees with interactive training sessions, providing monthly updates on emerging threats, and focusing on critical areas such as phishing and password safety, we aim to significantly reduce security risks attributable to human errors.',
    },
    {
      title: 'Dynamic, Interactive Training Modules',
      description:
        'Central to our approach is the delivery of dynamic, interactive training sessions designed to captivate and educate. Utilizing a mix of simulations, interactive exercises, and real-life scenarios, we make the complex world of cybersecurity accessible and relevant. This immersive learning experience ensures that employees not only understand their role in safeguarding the organization\'s assets but are also equipped to take proactive steps against potential threats.',
    },
    {
      title: 'Monthly Threat Updates and Focused Security Practices',
      description:
        'In a landscape where cyber threats evolve with daunting speed, staying informed is crucial. Our program includes monthly briefings that deliver the latest intelligence on cybersecurity threats and defenses. This ongoing education, with a spotlight on prevalent dangers like phishing schemes and the essentials of strong password protocols, ensures that the workforce remains vigilant and informed, ready to adapt to new challenges.',
    },
    {
      title: 'Real-World Examples to Drive Home the Message of Personal Responsibility',
      description:
        'Leveraging real-world examples, our program highlights the tangible impacts of cybersecurity breaches, underlining the critical role that personal responsibility plays in safeguarding digital assets. These examples serve to illustrate not just the potential consequences of lapses in security but also how proactive measures can significantly reduce the likelihood of breaches.',
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
        <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 py-12">
          <div className="md:w-1/2" data-aos="fade-right">
            <h1 className="text-2xl md:text-3xl font-bold border-3 border-blue-600 px-4 py-3 rounded-lg shadow inline-block text-center">
              Information Security Training & Awareness
            </h1>
            <p className="mt-6 text-gray-700 text-base leading-relaxed">
              The ultimate goal of our Information Security Training and Awareness program is to create a culture of cybersecurity awareness within the organization. By empowering employees with the knowledge and tools to recognize and respond to cybersecurity threats, we significantly reduce the likelihood of breaches. This not only protects the organization's digital assets but also enhances its overall security posture, making it more resilient against cyber attacks.
            </p>
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <Image
              src="/images/information-security-training.jpg"
              alt="Information Security Training Program Session"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto shadow-lg"
              priority
            />
          </div>
        </section>

        <div className="text-center m-3">
          <button
            data-aos="fade-left"
            onClick={() =>
              isInCart
                ? removeFromCart('information-security-training')
                : addToCart({ slug: 'information-security-training', name: 'Information Security Training & Awareness' })
            }
            className={`mt-4 font-semibold py-2 px-4 rounded transition ${
              isInCart ? 'bg-red-600 cursor-pointer hover:bg-red-700 text-white' : 'bg-blue-600 cursor-pointer hover:bg-blue-700 text-white'
            }`}
          >
            {isInCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>

        <section className="bg-gray-100 py-16 px-6">
          <div className="relative max-w-6xl mx-auto min-h-[300px] flex items-center justify-center text-center">
            <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600">
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <div key={index} data-aos="fade-up" className="max-w-3xl">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">{slides[index].title}</h2>
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
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/images/cta-handshake.jpg"
              alt="Collaboration handshake for cybersecurity"
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

        {/* JSON-LD Schema */}
        <Script
          id="information-security-training-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Information Security Training & Awareness",
              "provider": {
                "@type": "Organization",
                "name": "CyberPunk",
                "url": "https://CyberPunk.com",
                "logo": "https://CyberPunk.com/logo.png"
              },
              "description": "Interactive cybersecurity training and awareness program to empower employees.",
              "areaServed": { "@type": "Country", "name": "India" }
            }),
          }}
        />

        <Footer />
      </main>
    </>
  );
}
