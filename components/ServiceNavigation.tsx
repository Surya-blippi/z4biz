import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

const ServiceNavigation: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 px-4 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-white/20 rounded-3xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center space-x-3">
              <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                <div className="relative w-10 h-10">
                  <Image
                    src="/z4biz-logo.png"
                    alt="Z4BIZ Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
              </motion.div>
              <span className="text-2xl font-medium text-blue-600">
                Z4BIZ
              </span>
            </Link>
            
            {/* Back to Homepage Button */}
            <Link 
              href="/" 
              className="inline-flex items-center py-2 px-4 rounded-full bg-white/80 backdrop-blur-sm shadow-sm text-blue-600 hover:bg-white hover:text-blue-800 transition-all duration-300 group"
            >
              <ChevronLeftIcon className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default ServiceNavigation;