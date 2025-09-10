'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-blue-100 border-t border-gray-200 py-12 px-6 text-sm text-gray-700">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Logo & ISO */}
        <div className="flex flex-col items-center text-center md:text-left space-y-4">
          <Image
            src="/images/cybervahak-logo.png"
            alt="CyberPunk Logo"
            width={220}
            height={40}
            className="h-auto"
          />
          <Image
            src="/images/iso-27001.png"
            alt="ISO 27001 Certified"
            width={120}
            height={120}
            className="h-20 w-auto"
          />
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-4 ">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
            <p className="mb-1">
              <strong>Email</strong><br />
              <a
                href="mailto:contact@CyberPunk.com"
                className="text-blue-600 hover:underline"
              >
                contact@CyberPunk.com
              </a>
            </p>
            <p className="mb-1"> 
              <strong>LinkedIn</strong><br />
              <a
                href="https://in.linkedin.com/company/CyberPunk"
                target='_blank'
                className="text-blue-600 hover:underline"
              >
                CyberPunk
              </a>
            </p>
            <p className="mb-1">
              <strong>Instagram</strong><br />
              <a
                href=""
                target='_blank'
                className="text-blue-600 hover:underline"
              >
                CyberPunk
              </a>
            </p>
          </div>
          <p>
            <strong>Address</strong><br />
            CyberPunk Consultants Private Limited,<br />
            Office No: 1204-1205, 12th Floor, Orion Nexus Towers, Zenith Avenue<br />
            Near Solaris Plaza, Andheri East,<br />
            Mumbai, Maharashtra – 400099
          </p>
        </div>
      </div>
    </footer>
  );
}
