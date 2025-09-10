'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import SignupModal from '@/app/resources/[slug]/components/SignupModal';
import { useCart } from '@/context/CartContext';
import { ShoppingCartIcon } from '@heroicons/react/24/outline'; // You can swap this icon
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ShieldCheckIcon,
  ScaleIcon,
  BugAntIcon,
  SparklesIcon,
  Cog6ToothIcon,
  DocumentCheckIcon,
  BuildingLibraryIcon,
  PuzzlePieceIcon,
  ServerStackIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  ArchiveBoxIcon,
} from '@heroicons/react/24/solid';

const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // desktop services
  const [isProductsOpen, setIsProductsOpen] = useState(false); // desktop products
  const [activeCategory, setActiveCategory] = useState('Cyber Security As a Service');

  // Mobile menu accordions
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileOpenCategory, setMobileOpenCategory] = useState(null);

  const [showSignupModal, setShowSignupModal] = useState(false);
  const { data: session } = useSession();
  const { cartItems } = useCart();


  const navItems = [
    { label: 'Resources', href: '/resources' },
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ];

  const categoryIcons = {
    'Cyber Security As a Service': <ShieldCheckIcon className="w-5 h-5 text-purple-400" />,
    'Compliance and Cybersecurity Governance Services': <ScaleIcon className="w-5 h-5 text-yellow-300" />,
    'Digital Security and Risk Management Services': <BugAntIcon className="w-5 h-5 text-pink-400" />,
    'Cybersecurity Evaluation and Protection Services': <SparklesIcon className="w-5 h-5 text-green-400" />,
  };

  const serviceCategories = {
    'Cyber Security As a Service': [
      'Compliance and Cybersecurity Governance Services',
      'Digital Security and Risk Management Services',
      'Cybersecurity Evaluation and Protection Services',
      'Handholding Support',
      'Cyber War Room Activation',
      'Senior Management Cybersecurity Dashboard',
    ],
    'Compliance and Cybersecurity Governance Services': [
      'Compliance Review/ Audit',
      'Gap Assessment as per the Regulatory Standards and guidelines',
      'IT environment Compliance Review and Implementation with ISO/IEC 27001:2022',
      'Cybersecurity Maturity Assessment',
      'Policies/SOP’s Development',
      'Information security Training and Awareness',
      'Data Governance Assessment',
      'Compliance to The Digital Personal Data Protection Act of 2023',
    ],
    'Digital Security and Risk Management Services': [
      'Risk Assessment',
      'Ransomware Readiness',
      'Threat Modelling',
      'Business Impact Analysis (BIA))-Digital Assets/Platforms',
      'Third-Party Risk Management (TPRM)',
    ],
    'Cybersecurity Evaluation and Protection Services': [
      'Data Flow mapping and Trust Boundary Assessment',
      'Secure Configuration (Baseline) Review and Documentation',
      'Security operations center (SOC) Maturity Assessment',
      'Red Teaming',
      'IT Environment Review',
      'API Security Assessment',
      'Digital Forensic Services',
      'Cloud Security Assessment',
      'Vulnerability Assessment and Penetration Testing (VAPT)',
      'Web Application Security Assessment',
      'Mobile Application Security Assessment',
      'Simulate Social Engineering Attacks',
    ],
  };

  const serviceSlugMap = {
    'Compliance Review/ Audit': 'compliance-review-audit',
    'Gap Assessment as per the Regulatory Standards and guidelines': 'gap-assessment-as-per-the-regulatory-standards-and-guidelines',
    'IT environment Compliance Review and Implementation with ISO/IEC 27001:2022': 'it-environment-review-iso27001',
    'Policies/SOP’s Development': 'policies-and-sops-development',
    'Information security Training and Awareness': 'information-security-training',
    'Data Governance Assessment': 'data-governance-assessment',
    'Compliance to The Digital Personal Data Protection Act of 2023': 'digital-personal-data-protection-act-compliance',
    'Cybersecurity Maturity Assessment': 'cybersecurity-maturity-assessment',
    'Risk Assessment': 'risk-assessment',
    'Ransomware Readiness': 'ransomware-readiness',
    'Threat Modelling': 'threat-modelling',
    'Business Impact Analysis (BIA)-Digital Assets/Platforms': 'business-impact-analysis-bia-digital-assets-platforms',
    'Third-Party Risk Management (TPRM)': 'third-party-risk-management',
    'Data Flow mapping and Trust Boundary Assessment': 'data-flow-trust-boundary-assessment',
    'Secure Configuration (Baseline) Review and Documentation': 'secure-configuration-review',
    'Red Teaming': 'red-teaming',
    'IT Environment Review': 'it-environment-review',
    'API Security Assessment': 'api-security-assessment',
    'Digital Forensic Services': 'digital-forensic-services',
    'Vulnerability Assessment and Penetration Testing (VAPT)': 'vulnerability-assessment-penetration-testing',
    'Web Application Security Assessment': 'web-application-security-assessment',
    'Security operations center (SOC) Maturity Assessment': 'soc-maturity-assessment',
    'Mobile Application Security Assessment': 'mobile-application-security-assessment',
    'Cloud Security Assessment': 'cloud-security-assessment',
    'Simulate Social Engineering Attacks': 'simulate-social-engineering-attacks',
  };

  return (
    <>
      {showSignupModal && (
        <SignupModal
          show={showSignupModal}
          onClose={() => setShowSignupModal(false)}
        />
      )}

      <nav className="w-screen fixed top-0 left-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between w-full flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/cybervahak-logo.png"
              alt="CyberPunk Logo"
              width={140}
              height={40}
              style={{ height: '2.5rem', width: 'auto' }}
              className="cursor-pointer"
              priority
            />

          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 text-gray-700 font-medium">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>

            {/* Desktop Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { setIsServicesOpen(true); setIsProductsOpen(false); }}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="hover:text-blue-600 cursor-pointer transition px-2 py-1 rounded-md">Services</button>
              {isServicesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-screen max-w-6xl z-50">
                  <div className="bg-[#0B1220] text-white shadow-2xl p-8 rounded-2xl w-full flex">
                    <div className="w-1/4 pr-8 border-r border-white/10 space-y-3">
                      {Object.keys(serviceCategories).map((category) => (
                        <button
                          key={category}
                          onClick={() => setActiveCategory(category)}
                          className={`flex items-center gap-3 p-3 w-full text-left rounded-xl transition ${activeCategory === category ? 'bg-white/10 font-semibold' : 'hover:bg-white/10 text-white/70'}`}
                        >
                          <span>{categoryIcons[category]}</span>
                          <span className="text-sm">{category}</span>
                        </button>
                      ))}
                    </div>
                    <div className="w-3/4 px-8">
                      <h3 className="text-white font-semibold text-xl mb-4">{activeCategory}</h3>
                      <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
                        {serviceCategories[activeCategory]?.map((item, index) => (
                          <li key={index}>
                            <Link
                              href={activeCategory === 'Cyber Security As a Service'
                                ? '/services/cyber-security-as-a-service'
                                : `/services/${serviceSlugMap[item] || slugify(item)}`}
                              className="text-white/90 text-sm hover:text-blue-400 block"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Desktop Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { setIsProductsOpen(true); setIsServicesOpen(false); }}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="hover:text-blue-600 cursor-pointer transition px-2 py-1 rounded-md">Products</button>
              {isProductsOpen && (
                <div className="absolute left-1 -translate-x-1/2 top-full mt-0 w-screen max-w-5xl z-50">
                  <div className="bg-[#0B1220] text-white shadow-2xl p-8 rounded-2xl w-full grid grid-cols-2 gap-12 text-sm">
                    <div>
                      <h4 className="text-base font-semibold mb-2 border-b border-white/20 pb-1">Integrated Product</h4>
                      <ul className="mt-3 space-y-3">
                        <li>CyberPunk Integrated Cybersecurity Solution</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold mb-2 border-b border-white/20 pb-1">Individual Products</h4>
                      <ul className="grid grid-cols-2 gap-y-3 gap-x-6 mt-3">
                        {[
                          'Compliance and Audit Management',
                          'Third-Party Risk and Vendor Management',
                          'Cybersecurity Insights & Analytics',
                          'Business Impact Analysis (BIA)',
                          'Asset Management',
                          'Policy & Document Governance',
                          'Integrated Risk Management',
                          'Configuration Review & Compliance',
                        ].map((product, i) => (
                          <li key={i}>{product}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-blue-600 transition">{item.label}</Link>
            ))}
            <Link href="/cart" className="relative">
              <ShoppingCartIcon className="w-6 h-6 text-gray-700 hover:text-blue-600" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {session?.user ? (
              <button onClick={() => signOut({ callbackUrl: '/' })} className="bg-red-600 text-white px-3 cursor-pointer py-1.5 rounded hover:bg-red-700 text-sm">Log Out</button>
            ) : (
              <button onClick={() => setShowSignupModal(true)} className="bg-blue-600 text-white px-3 cursor-pointer py-1.5 rounded hover:bg-blue-700 text-sm">Login</button>
            )}
          </div>

          {/* Mobile Toggle */}
          {/* Mobile Cart & Toggle */}
          <div className="lg:hidden flex items-center gap-4 flex-shrink-0">
            {/* Cart Icon */}
            <Link href="/cart" className="relative">
              <ShoppingCartIcon className="w-6 h-6 text-gray-700 hover:text-blue-600" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* Hamburger Menu */}
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <XMarkIcon className="w-6 h-6 text-gray-700" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>


        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden px-4 pb-6 flex flex-col gap-4 bg-white text-sm text-gray-800 max-h-[80vh] overflow-y-auto">
            <Link href="/" className="hover:text-blue-600">Home</Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                className="flex justify-between w-full font-semibold text-gray-700"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="mt-2 space-y-2">
                  {Object.entries(serviceCategories).map(([category, items]) => (
                    <div key={category}>
                      <button
                        onClick={() => setMobileOpenCategory(mobileOpenCategory === category ? null : category)}
                        className="flex justify-between w-full text-left text-gray-600"
                      >
                        {category}
                        <ChevronDownIcon className={`w-4 h-4 transition-transform ${mobileOpenCategory === category ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileOpenCategory === category && (
                        <ul className="ml-4 mt-1 space-y-1">
                          {items.map((item, i) => (
                            <li key={i}>
                              <Link
                                href={category === 'Cyber Security As a Service'
                                  ? '/services/cyber-security-as-a-service'
                                  : `/services/${serviceSlugMap[item] || slugify(item)}`}
                                className="text-gray-700 hover:text-blue-600 block"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Products Accordion */}
            <div>
              <button
                className="flex justify-between w-full font-semibold text-gray-700"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              >
                Products
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileProductsOpen && (
                <div className="mt-2 space-y-4">
                  <div>
                    <p className="font-medium text-gray-600">Integrated Product</p>
                    <ul className="ml-4 mt-1 space-y-1">
                      <li>CyberPunk Integrated Cybersecurity Solution</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-gray-600">Individual Products</p>
                    <ul className="ml-4 mt-1 space-y-1">
                      {[
                        'Compliance and Audit Management',
                        'Third-Party Risk and Vendor Management',
                        'Cybersecurity Insights & Analytics',
                        'Business Impact Analysis (BIA)',
                        'Asset Management',
                        'Policy & Document Governance',
                        'Integrated Risk Management',
                        'Configuration Review & Compliance',
                      ].map((product, i) => (
                        <li key={i}>{product}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-blue-600">{item.label}</Link>
            ))}

            {session?.user ? (
              <button onClick={() => { setMenuOpen(false); signOut({ callbackUrl: '/' }); }} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm w-full">Log Out</button>
            ) : (
              <button onClick={() => { setMenuOpen(false); setShowSignupModal(true); }} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm w-full">Login</button>
            )}
          </div>
        )}
      </nav>
    </>
  );
}

