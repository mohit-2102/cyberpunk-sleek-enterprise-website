'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Script from 'next/script';

export default function CyberSecurityAsAServicePage() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const services = [
        {
            title: 'Digital Security and Risk Management Services',
            desc: 'Identify and assess cyber risks, including ransomware and third-party threats, to build a resilient cybersecurity strategy.',
            icon: '/images/icon-risk.png',
        },
        {
            title: 'Compliance and Cybersecurity Governance Services',
            desc: 'Strengthen IT and Cyber Security governance, ensuring adherence to best practices and operational excellence.',
            icon: '/images/icon-governance.png',
        },
        {
            title: 'Cybersecurity Evaluation and Protection Services',
            desc: 'Secure critical infrastructure and systems through in-depth reviews and evaluations of your IT environment, including networks, mobile platforms, and web applications.',
            icon: '/images/icon-evaluation.png',
        },
        {
            title: 'Handholding Support',
            desc: 'During cyber attacks, including ransomware, our team offers personalized support and coordination with government authorities, guiding response efforts to minimize downtime and mitigate damages, reinforcing a resilient defense with Cybersecurity as a Service and the senior management security dashboard.',
            icon: '/images/icon-handholding.png',
        },
        {
            title: 'Cyber War Room Activation',
            desc: 'In the event of a cyber attack, including ransomware threats, our emergency protocols ensure the immediate activation of a Cyber War Room. This dedicated facility operates around the clock with a specialized team committed to providing 24x7 surveillance and rapid response. Seamlessly integrating with government agencies to coordinate a robust defense strategy. Our goal is to swiftly guide you through containment and recovery efforts, prioritizing the reduction of operational downtime and the mitigation of potential damages.',
            icon: '/images/icon-war-room.png',
        },
        {
            title: 'Senior Management Cybersecurity Dashboard',
            desc: 'Our Senior Management Cybersecurity Dashboard provides executives with a high-level, real-time overview of their organization’s security status. This intuitive platform is designed to facilitate strategic decision-making by presenting critical data points, incident reports, and risk assessments in a clear, concise manner.',
            icon: '/images/icon-dashboard.png',
        },
    ];

    const jsonLdData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Cyber Security as a Service",
        "description": "Our Cybersecurity as a Service offers governance support, risk management, evaluation, and protection services to strengthen your organization's cyber resilience.",
        "provider": {
            "@type": "Organization",
            "name": "CyberPunk",
            "url": "https://www.CyberPunk.com"
        },
        "serviceType": "Cybersecurity",
        "areaServed": "Global"
    };

    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center">


                {/* Hero */}
                <section
                    className="w-full bg-cover bg-center text-white py-24 px-6"
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1581090700227-4c4c1c8cf548?auto=format&fit=crop&w=1470&q=80")',
                    }}
                >
                    <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
                        <h1 className="text-4xl md:text-5xl font-semibold text-blue-700 mb-6">
                            Cyber Security As A Service
                        </h1>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto text-black">
                            Our Cybersecurity as a Service offers a comprehensive, strategic approach to bolster your organization’s defense against cyber threats. It seamlessly combines governance support, administrative assessments, and technological evaluations to enhance your cybersecurity posture.
                        </p>
                    </div>
                </section>

                {/* Service Tiles */}
                <section className="w-full bg-white py-16 px-6">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                        {services.map((item, idx) => (
                            <div
                                key={idx}
                                className="p-6 bg-gray-50 rounded-xl shadow-sm"
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                            >
                                <div className="flex items-center gap-4 mb-2">
                                    <Image
                                        src={item.icon}
                                        alt={item.alt || item.title}
                                        width={72}
                                        height={72}
                                        className="rounded-full"
                                    />
                                    <h3 className="text-lg font-semibold text-blue-700">{item.title}</h3>
                                </div>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Quote Section */}
                <section className="w-full bg-blue-100 py-12 px-6">
                    <div className="max-w-5xl mx-auto text-center" data-aos="zoom-in">
                        <p className="text-xl md:text-2xl font-medium text-gray-800">
                            This cornerstone of our service empowers informed decision-making and proactive security management, underpinned by key processes such as risk assessments, business impact analyses, and threat modeling.
                        </p>
                    </div>
                </section>

                {/* Strategic Approach Section */}
                <section className="w-full bg-white py-16 px-6">
                    <div className="max-w-6xl mx-auto" data-aos="fade-up">
                        <p className="text-lg text-center max-w-3xl mx-auto text-gray-700">
                            Our approach is not just about delivering tasks; it's about providing a strategic framework that enhances your cybersecurity landscape, ensuring your organization stays ahead in the ever-evolving world of digital threats.
                        </p>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full bg-gray-50 py-16 px-6">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8">
                        <Image
                            src="/images/cta-handshake.jpg"
                            alt="Two business professionals shaking hands representing a cybersecurity partnership"
                            width={800}
                            height={600}
                            className="w-full rounded-xl shadow-md"
                            data-aos="fade-right"
                        />
                        <div className="bg-blue-100 p-6 md:p-8 rounded-xl text-center md:text-left" data-aos="fade-left">
                            <h3 className="text-2xl font-bold text-gray-800">
                                Collaborate to Navigate the Cyber Seas Safely:
                                A Journey Toward Secure Digital Horizons
                            </h3>
                        </div>
                    </div>
                </section>

                <Script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
                />
            </main>
            <Footer />
        </>
    );
}


// 'use client';

// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// export default function CyberSecurityAsAServicePage() {
//     useEffect(() => {
//         AOS.init({ duration: 800, once: true });
//     }, []);

//     const services = [
//         {
//             title: 'Digital Security and Risk Management Services',
//             desc: 'Identify and assess cyber risks, including ransomware and third-party threats, to build a resilient cybersecurity strategy.',
//             icon: '/images/icon-risk.png',
//         },
//         {
//             title: 'Compliance and Cybersecurity Governance Services',
//             desc: 'Strengthen IT and Cyber Security governance, ensuring adherence to best practices and operational excellence.',
//             icon: '/images/icon-governance.png',
//         },
//         {
//             title: 'Cybersecurity Evaluation and Protection Services',
//             desc: 'Secure critical infrastructure and systems through in-depth reviews and evaluations of your IT environment, including networks, mobile platforms, and web applications.',
//             icon: '/images/icon-evaluation.png',
//         },
//         {
//             title: 'Handholding Support',
//             desc: 'During cyber attacks, including ransomware, our team offers personalized support and coordination with government authorities, guiding response efforts to minimize downtime and mitigate damages, reinforcing a resilient defense with Cybersecurity as a Service and the senior management security dashboard.',
//             icon: '/images/icon-handholding.png',
//         },
//         {
//             title: 'Cyber War Room Activation',
//             desc: 'In the event of a cyber attack, including ransomware threats, our emergency protocols ensure the immediate activation of a Cyber War Room. This dedicated facility operates around the clock with a specialized team committed to providing 24x7 surveillance and rapid response. Seamlessly integrating with government agencies to coordinate a robust defense strategy. Our goal is to swiftly guide you through containment and recovery efforts, prioritizing the reduction of operational downtime and the mitigation of potential damages.',
//             icon: '/images/icon-war-room.png',
//         },
//         {
//             title: 'Senior Management Cybersecurity Dashboard',
//             desc: 'Our Senior Management Cybersecurity Dashboard provides executives with a high-level, real-time overview of their organization’s security status. This intuitive platform is designed to facilitate strategic decision-making by presenting critical data points, incident reports, and risk assessments in a clear, concise manner.',
//             icon: '/images/icon-dashboard.png',
//         },
//     ];

//     return (
//         <>
//             <Navbar />
//             <main className="flex flex-col items-center">

//                 {/* Hero */}
//                 <section
//                     className="w-full bg-cover bg-center text-white py-24 px-6"
//                     style={{
//                         backgroundImage:
//                             'url("https://images.unsplash.com/photo-1581090700227-4c4c1c8cf548?auto=format&fit=crop&w=1470&q=80")',
//                     }}
//                 >
//                     <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
//                         <h1 className="text-4xl md:text-5xl font-semibold text-blue-700 mb-6">
//                             Cyber Security As A Service
//                         </h1>
//                         <p className="text-lg md:text-xl max-w-3xl mx-auto text-black">
//                             Our Cybersecurity as a Service offers a comprehensive, strategic approach to bolster your organization’s defense against cyber threats. It seamlessly combines governance support, administrative assessments, and technological evaluations to enhance your cybersecurity posture.
//                         </p>
//                     </div>
//                 </section>

//                 {/* Service Tiles */}
//                 <section className="w-full bg-white py-16 px-6">
//                     <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
//                         {services.map((item, idx) => (
//                             <div
//                                 key={idx}
//                                 className="p-6 bg-gray-50 rounded-xl shadow-sm"
//                                 data-aos="fade-up"
//                                 data-aos-delay={idx * 100}
//                             >
//                                 <div className="flex items-center gap-4 mb-2">
//                                     <img src={item.icon} alt="" className="w-18 h-18 rounded-full" />
//                                     <h3 className="text-lg font-semibold text-blue-700">{item.title}</h3>
//                                 </div>
//                                 <p className="text-gray-600">{item.desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* Quote Section */}
//                 <section className="w-full bg-blue-100 py-12 px-6">
//                     <div className="max-w-5xl mx-auto text-center" data-aos="zoom-in">
//                         <p className="text-xl md:text-2xl font-medium text-gray-800">
//                             This cornerstone of our service empowers informed decision-making and proactive security management, underpinned by key processes such as risk assessments, business impact analyses, and threat modeling.
//                         </p>
//                     </div>
//                 </section>

//                 {/* Strategic Approach Section */}
//                 <section className="w-full bg-white py-16 px-6">
//                     <div className="max-w-6xl mx-auto" data-aos="fade-up">
//                         <p className="text-lg text-center max-w-3xl mx-auto text-gray-700">
//                             Our approach is not just about delivering tasks; it's about providing a strategic framework that enhances your cybersecurity landscape, ensuring your organization stays ahead in the ever-evolving world of digital threats.
//                         </p>
//                     </div>
//                 </section>

//                 {/* CTA Section */}
//                 <section className="w-full bg-gray-50 py-16 px-6">
//                     <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8">
//                         <img
//                             src="/images/cta-handshake.jpg"
//                             alt="Cyber handshake"
//                             className="w-full rounded-xl shadow-md"
//                             data-aos="fade-right"
//                         />
//                         <div className="bg-blue-100 p-6 md:p-8 rounded-xl text-center md:text-left" data-aos="fade-left">
//                             <h3 className="text-2xl font-bold text-gray-800">
//                                 Collaborate to Navigate the Cyber Seas Safely:
//                                 A Journey Toward Secure Digital Horizons
//                             </h3>
//                         </div>
//                     </div>
//                 </section>


//             </main>
//             <Footer />
//         </>
//     );
// }
