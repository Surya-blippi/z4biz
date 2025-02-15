// components/Navigation.tsx
import React from 'react';
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
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-50 px-4 py-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-white/30 rounded-3xl shadow-lg border border-white/30 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                <Image
                  src="/z4biz-logo.png"
                  alt="Z4BIZ Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                Z4BIZ
              </span>
            </div>
            <div className="flex items-center space-x-12">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-blue-900/80 relative group text-sm font-medium tracking-wide"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600/50 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
