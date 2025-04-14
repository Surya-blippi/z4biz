import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import ProductsPlatforms from '../components/ProductsPlatforms';
import Resources from '../components/Resources';
import Footer from '../components/Footer';

const Z4BIZLanding = () => {
  // Scroll function to target a section by ID
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Global Background Colors and Decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
      </div>
      <motion.div 
        className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
        animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <Navigation />

      <main className="flex-grow relative z-10">
        {/* Explicitly add ID for each section to match navigation links */}
        <section id="home">
          <Hero scrollToSection={scrollToSection} />
        </section>
        
        <section id="services">
          <ServicesSection />
        </section>
        
        <section id="products">
          <ProductsPlatforms />
        </section>
        
        <section id="resources">
          <Resources />
        </section>
      </main>

      <section id="footer">
        <Footer />
      </section>

      {/* Global Custom Styles */}
      <style jsx global>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 10px rgba(255, 255, 255, 0.2); }
          50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.6); }
        }
        .glow {
          animation: glow 2s infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Z4BIZLanding;