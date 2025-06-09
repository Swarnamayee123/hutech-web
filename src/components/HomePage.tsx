import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Technologies from './Technologies';
import Services from './Services';
import Benefits from './Benefits';
import Clients from './Clients';
import Contact from './Contact';
import CustomContent from './CustomContent';
import Footer from './Footer';
import SEO from './SEO';

function HomePage() {
  return (
    <div className="font-sans text-gray-800 dark:text-gray-200 dark:bg-slate-900">
      <SEO />
      <Header />
      <main>
        <Hero />
        <Technologies />
        <Services />
        <Benefits />
        <Clients />
        <Contact />
        <CustomContent />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default HomePage