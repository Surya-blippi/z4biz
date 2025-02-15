// pages/Z4BIZLanding.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { 
  CubeTransparentIcon, 
  LightBulbIcon, 
  ComputerDesktopIcon, 
  ChartBarIcon,
  HomeIcon,
  DocumentTextIcon,
  ServerIcon,
  ShieldCheckIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';
import Navigation from '../components/Navigation';
import AboutUs from '../components/AboutUs';

const serviceItems = [
  {
    title: "Dynamics365 Expert Consulting",
    description: "Specialized consulting services for Microsoft Dynamics 365 implementation, customization, and optimization.",
    icon: CubeTransparentIcon,
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    title: "Catalyst Workshops",
    description: "Interactive workshops designed to accelerate your digital transformation journey.",
    icon: LightBulbIcon,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Extended IT",
    description: "Comprehensive IT support and infrastructure management services.",
    icon: ComputerDesktopIcon,
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "Sustainability Consulting",
    description: "Expert guidance on implementing sustainable business practices and ESG reporting.",
    icon: ChartBarIcon,
    gradient: "from-emerald-500 to-teal-500"
  }
];

const productItems = [
  {
    title: "Z-Estate",
    description: "Real Estate Property Management.",
    icon: HomeIcon,
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "M-Stream",
    description: "Efficient Management Reporting.",
    icon: ChartBarIcon,
    gradient: "from-orange-500 to-yellow-500"
  },
  {
    title: "Calibre",
    description: "Automate RFP Response.",
    icon: DocumentTextIcon,
    gradient: "from-red-500 to-pink-500"
  },
  {
    title: "Data",
    description: "Data Platforms.",
    icon: ServerIcon,
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    title: "ESG",
    description: "Sustainability & Compliance Solutions.",
    icon: ShieldCheckIcon,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "AI & Automation",
    description: "Intelligent Process Automation.",
    icon: Cog6ToothIcon,
    gradient: "from-gray-500 to-blue-500"
  }
];

const Resources = () => {
  const resourcesData = [
    {
      title: "News",
      description: "Get the latest updates on our company and industry trends.",
    },
    {
      title: "Blogs",
      description: "Explore insights, tips, and trends in the technology space.",
    },
    {
      title: "Case Studies",
      description: "Discover how our solutions have transformed businesses.",
    }
  ];

  return (
    <section
      id="resources"
      className="py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 glow"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Resources
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Stay updated with our latest news, blogs, and case studies.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {resourcesData.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glow"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 opacity-10 rounded-full blur-2xl transform translate-x-6 -translate-y-6 group-hover:opacity-20 transition-opacity" />
                <div className="flex flex-col gap-3 relative">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {resource.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    {resource.description}
                  </p>
                  <button className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 font-medium flex items-center gap-1 hover:underline text-sm">
                    Read More <ChevronRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 bg-gray-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gray-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30" />
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative z-10 bg-gradient-to-r from-blue-500 to-indigo-500 py-8 glow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center text-white">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Call us</h3>
          <p className="mt-1">+971 50 188 7848 / +971 55 413 2942</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Email us</h3>
          <p className="mt-1">info@z4biz.com</p>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl -translate-x-16 -translate-y-16" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl translate-x-16 translate-y-16" />
      </div>
    </footer>
  );
};

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 mb-4 rounded-full bg-blue-100 text-blue-700 text-sm font-medium glow"
          >
            Our Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-blue-950 mb-4 glow"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-xl text-blue-700/80 glow"
          >
            Expert consulting and technology solutions tailored for your business.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {serviceItems.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glow"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden">
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-2xl transform translate-x-6 -translate-y-6 group-hover:opacity-20 transition-opacity`}
                />
                <div className="flex flex-col gap-3 relative">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${service.gradient} transform transition-all duration-300 group-hover:scale-110 shadow-lg`}
                  >
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-1 transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-blue-700/80 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-auto pt-1">
                    <motion.button
                      whileHover={{ x: 5 }}
                      className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} font-medium flex items-center gap-1 text-sm`}
                    >
                      Learn more
                      <span className="transform transition-transform group-hover:translate-x-1">→</span>
                    </motion.button>
                  </div>
                </div>
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-56 h-56 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-0 w-56 h-56 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>
    </section>
  );
};

const ProductsPlatforms = () => {
  return (
    <section id="products" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50 to-white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 mb-4 rounded-full bg-green-100 text-green-700 text-sm font-medium glow"
          >
            Our Products &amp; Platforms
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-green-900 mb-4 glow"
          >
            Products &amp; Platforms
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-xl text-green-700/80 glow"
          >
            Innovative solutions for modern business challenges.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {productItems.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glow"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${product.gradient} opacity-10 rounded-full blur-2xl transform translate-x-6 -translate-y-6 group-hover:opacity-20 transition-opacity`} />
                <div className="flex flex-col gap-3 relative">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-r ${product.gradient} transform transition-all duration-300 group-hover:scale-110 shadow-lg`}>
                    <product.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-1 transition-all duration-300">
                      {product.title}
                    </h3>
                    <p className="text-sm sm:text-base text-green-700/80 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-auto pt-1">
                    <motion.button
                      whileHover={{ x: 5 }}
                      className={`text-transparent bg-clip-text bg-gradient-to-r ${product.gradient} font-medium flex items-center gap-1 text-sm`}
                    >
                      Learn more
                      <span className="transform transition-transform group-hover:translate-x-1">→</span>
                    </motion.button>
                  </div>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-56 h-56 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-0 w-56 h-56 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>
    </section>
  );
};

const Z4BIZLanding = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const serviceCards = [
    {
      title: "Consulting Services",
      content: "We offer functional and domain consulting as well as advisory services on Dynamics 365 platforms. Our expert Solution Architects and Functional Consultants provide tailored guidance to help you maximize the value of your investment in Dynamics 365. With over 15 years of experience across complex, multi-country, and multi-entity implementations, our senior consultants bring unparalleled expertise to ensure successful outcomes."
    },
    {
      title: "Industry Verticals and Product Development",
      content: "We enhance CRM platforms by delivering industry-specific vertical and horizontal solutions that automate end-to-end operational processes for businesses not fully aligned with standard enterprise ERP and CRM systems. Our vertical solutions for Dynamics 365 and Zoho CRM complement your existing investments, seamlessly integrating with your business applications to enforce industry best practices across all operational processes."
    },
    {
      title: "ESG & Data Solutions",
      content: "Drive Sustainability and Data Excellence. Our solution 4Scope helps organizations simplify their ESG reporting while ensuring alignment with top frameworks like GRI, SASB, and IFRS. Paired with expert consulting, 4Scope empowers businesses to meet regulatory requirements and engage stakeholders effectively. Our solution 4Vue is an AI-driven data engineering platform that streamlines data collection, transformation, and governance. With 4Vue, businesses can connect multiple data sources, automate data pipelines, and derive actionable insights from their data."
    }
  ];
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Scroll function to target a section by ID
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Global Background Colors */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
      </div>
      {/* Global Background Decorations */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, easings: ["easeInOut"] }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 20, repeat: Infinity, easings: ["easeInOut"] }}
        />
      </div>
      <Navigation />
      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-b from-blue-50 to-white pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-8">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="flex flex-col md:flex-row items-center justify-between"
            >
              {/* Left Content */}
              <div className="max-w-2xl mb-8 md:mb-0">
                <motion.div
                  variants={fadeIn}
                  className="inline-block px-4 py-2 mb-4 rounded-full bg-blue-100 text-blue-700 text-sm font-medium glow"
                >
                  Revolutionizing Business Technology
                </motion.div>
                <motion.h1 
                  variants={fadeIn}
                  className="text-4xl sm:text-7xl font-bold leading-tight mb-4 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 text-transparent bg-clip-text glow"
                >
                  Transform Your
                  <br />
                  Business &
                  <br />
                  Technology
                </motion.h1>
                <motion.p 
                  variants={fadeIn}
                  className="text-base sm:text-xl text-blue-800/80 mb-6 leading-relaxed glow"
                >
                  Empowering businesses with cutting-edge technology solutions and innovative digital transformation strategies.
                </motion.p>
                <motion.div 
                  variants={fadeIn}
                  className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 glow"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => scrollToSection('services')}
                    className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:shadow-2xl transition-all flex items-center gap-2"
                  >
                    <span>Get Started</span>
                    <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => scrollToSection('footer')}
                    className="px-6 py-3 backdrop-blur-md bg-white/70 text-blue-600 rounded-full border border-blue-200 hover:border-blue-300 hover:bg-white/90 transition-all"
                  >
                    Contact Us
                  </motion.button>
                </motion.div>
              </div>
              {/* Right Content - Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-full sm:w-[500px] h-64 sm:h-[400px] flex-shrink-0 glow"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-3xl opacity-20" />
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative w-full h-full backdrop-blur-md bg-white/70 rounded-3xl shadow-xl p-4 sm:p-8 flex items-center justify-center overflow-hidden"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/business-tech.jpg"
                      alt="Business Technology"
                      fill
                      objectFit="cover"
                      className="rounded-2xl"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg sm:text-xl font-semibold mb-1">Digital Transformation</h3>
                      <p className="text-xs sm:text-sm">Empowering your business with innovative solutions</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* Enhanced About Us Section */}
        <section id="about">
          <AboutUs 
            serviceCards={serviceCards}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
          />
        </section>
        {/* Services Section */}
        <section id="services">
          <ServicesSection />
        </section>
        {/* Products & Platforms Section */}
        <section id="products">
          <ProductsPlatforms />
        </section>
        {/* Enhanced Resources Section */}
        <section id="resources">
          <Resources />
        </section>
      </main>
      {/* Footer Section */}
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
