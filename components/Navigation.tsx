import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface SubNavItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  subItems?: SubNavItem[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/#services',
    subItems: [
      { label: 'Dynamics 365', href: '/services/dynamics365' },
      { label: 'ZOHO One Implementation', href: '/services/zoho-one' },
      { label: 'Envisioning Workshops', href: '/services/envisioning-workshops' },
      { label: 'Extended IT', href: '/services/extended-it' },
      { label: 'Sustainability Consulting', href: '/services/sustainability' },
    ],
  },
  {
    label: 'Products',
    href: '/#products',
    subItems: [
      { label: 'Z-Estate', href: '/products/zestate' },
      { label: 'Z-Estate-FM', href: '/products/zestatefm' },
      { label: 'ESG', href: '/products/esg' },
      { label: 'Data', href: '/products/data' },
      { label: 'AI & Automation', href: '/products/ai-automation' },
    ],
  },
  {
    label: 'Resources',
    href: '/#resources',
    subItems: [
      { label: 'News', href: '/news' },
      { label: 'Case Studies', href: '/case-studies' },
    ],
  },
  { label: 'Contact', href: '/#footer' }
];

const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15, ease: "easeIn" } }
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const router = useRouter();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    setHoveredItem(null);

    if (href.startsWith('/#') && router.pathname === '/') {
       e.preventDefault();
       const targetId = href.replace('/#', '');
       const element = document.getElementById(targetId);
       if (element) {
         const navbarHeight = 100;
         const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
         const offsetPosition = elementPosition - navbarHeight;

         window.scrollTo({
             top: offsetPosition,
             behavior: 'smooth'
         });
       }
    } else if (href === '/' && router.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleMobileSubmenu = (label: string) => {
    setExpandedMobileItem(expandedMobileItem === label ? null : label);
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 px-4 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-white/20 rounded-3xl px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Brand - Static Logo - No Animation */}
            <Link href="/" className="flex items-center space-x-3">
              <motion.div>
                <div className="relative w-12 h-12">
                  <Image
                    src="/z4biz-logo.png"
                    alt="Z4BIZ Logo"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
              </motion.div>
              <span className="text-3xl font-medium text-blue-600">
                Z4BIZ
              </span>
            </Link>

            {/* Desktop Navigation with Dropdowns - Kept Hover Dropdown Functionality */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link href={item.href} passHref legacyBehavior>
                      <motion.a
                       onClick={(e) => handleNavClick(e, item.href)}
                       className="text-blue-600 relative group text-lg font-medium transition-colors cursor-pointer flex items-center gap-1"
                       whileHover={{ scale: 1.05 }}
                      >
                        {item.label}
                        {item.subItems && (
                            <ChevronDownIcon
                                className={`w-5 h-5 transition-transform duration-200 ${
                                    hoveredItem === item.label ? 'rotate-180' : ''
                                }`}
                            />
                        )}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
                      </motion.a>
                  </Link>

                  <AnimatePresence>
                    {item.subItems && hoveredItem === item.label && (
                      <motion.ul
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 bg-white/90 backdrop-blur-md rounded-lg shadow-xl border border-blue-100/50 py-2 z-10 overflow-hidden"
                      >
                        {item.subItems.map((subItem) => (
                          <li key={subItem.label}>
                            <Link href={subItem.href} passHref legacyBehavior>
                              <a
                                onClick={(e) => handleNavClick(e, subItem.href)}
                                className="block px-5 py-2 text-blue-700 hover:bg-blue-100/70 transition-colors whitespace-nowrap text-base font-medium"
                              >
                                {subItem.label}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="text-blue-600 focus:outline-none"
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
            className="md:hidden mt-2 rounded-xl bg-white/20 backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-blue-100/20 last:border-b-0">
                  {item.subItems ? (
                    <div>
                      <button
                        onClick={() => toggleMobileSubmenu(item.label)}
                        className="flex justify-between items-center w-full px-6 py-3 text-blue-600 hover:bg-blue-100/50 transition-colors text-lg font-medium"
                      >
                        {item.label}
                        <ChevronDownIcon
                          className={`w-5 h-5 transition-transform duration-200 ${
                            expandedMobileItem === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      <AnimatePresence>
                        {expandedMobileItem === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-blue-50/50"
                          >
                            {item.subItems.map((subItem) => (
                              <Link key={subItem.label} href={subItem.href} passHref legacyBehavior>
                                <a
                                  onClick={(e) => handleNavClick(e, subItem.href)}
                                  className="block px-10 py-2 text-blue-700 hover:bg-blue-100/70 transition-colors text-base font-medium"
                                >
                                  {subItem.label}
                                </a>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={item.href} passHref legacyBehavior>
                      <a
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="block px-6 py-3 text-blue-600 hover:bg-blue-100/50 transition-colors text-lg font-medium"
                      >
                        {item.label}
                      </a>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;