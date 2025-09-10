import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CustomerProblem from '../components/CustomerProblem';
import WhatWeOffer from '../components/WhatWeOffer';
import HowItWorks from '../components/HowItWorks';
import SuccessMetrics from '../components/SuccessMetrics';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <CustomerProblem />
      <WhatWeOffer />
      <HowItWorks />
      <SuccessMetrics />
      <Footer />
    </>
  );
}
