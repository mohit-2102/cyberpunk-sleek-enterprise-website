import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from './provider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cyberpunk | Cybersecurity consulting services",
  description: "AI-powered GRC, assessments & security automation for modern enterprises.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative z-0 snap-y snap-mandatory overflow-y-auto font-sans bg-white text-gray-900">
      {/* <body className="relative z-0 snap-y snap-mandatory overflow-y-scroll font-sans bg-white text-gray-900"> */}
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
