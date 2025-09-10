'use client';

import Aos from 'aos';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import 'aos/dist/aos.css';


export default function AboutPage() {
    useEffect(() => {
        Aos.init({ duration: 800 });
    }, []);

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 bg-white text-gray-800">
                {/* Hero Section */}
                <section className="max-w-6xl mx-auto px-4 py-16">
                    {/* Title */}
                    <h1
                        className="text-2xl md:text-3xl font-bold text-center text-[#2C1A47] mb-10"
                        data-aos="fade-down"
                    >
                        About Us
                    </h1>

                    {/* Intro Paragraph */}
                    <p
                        className="leading-relaxed text-center mb-10"
                        data-aos="fade-up"
                    >
                        CyberPunk Consultants Private Limited stands at the forefront of cybersecurity excellence, especially in safeguarding the Government of India's critical infrastructure. Our essence is a deeply committed team that thrives on the forefront of cybersecurity innovation. This team's expertise spans across numerous technical domains, and they are adept at leveraging the most advanced methodologies in the field. Our engagement goes beyond conventional service delivery; we establish strategic partnerships that empower organizations to navigate and triumph over the evolving landscape of cyber threats, thus affirming our dedication to fostering a secure and resilient digital future. An ISO/IEC 27001:2022 Certified organization, CyberPunk upholds global standards in information security—ensuring the confidentiality, integrity, and availability of our clients' digital assets.

                    </p>

                    {/* Image */}
                    <div className="w-full mb-12" data-aos="zoom-in">
                        <Image
                            src="/images/About.avif"
                            alt="Cybersecurity visualization"
                            width={1200}
                            height={600}
                            className="rounded-lg mx-auto shadow-md"
                        />
                    </div>

                    {/* Paragraph 2 */}
                    <p
                        className=" leading-relaxed text-center mb-12"
                        data-aos="fade-up"
                    >

                        Our expertise transcends traditional boundaries, covering a broad spectrum of sectors including the Armed Forces, Stock Exchanges, Banks, Non-Banking Financial Companies (NBFCs), Mutual Funds, the Manufacturing and Services sectors, Education, and Information Technology. This diverse proficiency enables us to craft tailored, forward-thinking solutions that tackle complex challenges head-on. CyberPunk Consultants Private Limited is recognized as the preferred partner for projects of national significance, distinguished by our track record of surpassing expectations with results that are not just solutions, but milestones in cybersecurity excellence.
                    </p>
                </section>

                {/* Separator */}
                <div className="max-w-7xl mx-auto px-4 py-[1px] bg-gray-300" data-aos="fade-right"></div>

                {/* CTA Section */}
                <section className="w-full bg-gray-50 py-16 px-6">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
                        <img
                            src="/images/cta-handshake.jpg"
                            alt="Cyber handshake"
                            className="w-full rounded-xl shadow-md"
                            data-aos="fade-right"
                        />
                        <div className="bg-blue-100 p-6 rounded-xl" data-aos="fade-left">
                            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
                                Collaborate to Navigate the Cyber Seas Safely: A Journey Toward Secure Digital Horizons
                            </h3>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
