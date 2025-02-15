import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#footer' }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 px-4 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-white/30 rounded-3xl shadow-lg border border-white/30 px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                <Image
                  src="/z4biz-logo.png"
                  alt="Z4BIZ Logo"
                  width={50}
                  height={50}
                  className="object-contain rounded-full"
                />
              </motion.div>
              <span className="text-3xl font-extrabold text-white drop-shadow-lg">
                Z4BIZ
              </span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-white relative group text-lg font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>
            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <motion.button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
                whileHover={{ scale: 1.1 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden mt-2 rounded-xl bg-white/30 backdrop-blur-xl shadow-lg overflow-hidden"
          >
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-6 py-3 text-white hover:bg-blue-700 transition-colors text-lg font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
