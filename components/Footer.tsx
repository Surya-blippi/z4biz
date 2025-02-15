// components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-blue-900">Call us</h3>
          <p className="text-blue-700">+971 50 188 7848 / +971 55 413 2942</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-blue-900">Email us</h3>
          <p className="text-blue-700">info@z4biz.com</p>
        </div>
        <div>
          <p className="text-blue-500 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
