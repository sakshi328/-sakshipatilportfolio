
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Certifications from '../components/Certifications';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Certifications />
      <Contact />
      <Footer />
    </div>

  );
};

export default Index;
