"use client"

import React from 'react';
import Aos from 'aos';
import { useEffect } from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {

    useEffect(() => {
        Aos.init({ duration: 800 })
    })

    return (
        <>
            <Navbar />
            <div className='mt-23'>
                <h1 className='text-2xl md:text-3xl text-center font-bold text-[#2C1A47] mb-10'
                    data-aos="fade-down">
                    Contact Us
                </h1>
            </div>
            {/*CTA Section*/}
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
            <Footer />

        </>
    )
}