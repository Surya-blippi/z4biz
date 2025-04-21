import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  DocumentChartBarIcon,
  CloudArrowUpIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';
// import ServiceNavigation from '../../components/ServiceNavigation'; // REMOVED
import Navigation from '../../components/Navigation'; // ADDED
import Footer from '../../components/Footer';

// Only 4Scope product definition
const esgProducts = [
  {
    id: "4scope",
    title: "4Scope",
    subtitle: "Comprehensive ESG Reporting Solution",
    description: "Simplify ESG reporting effortlessly! Our software, 4Scope ensures automated GRI compliance, materiality assessment, and supports diverse frameworks (GRI, SASB, IFRS, ESRS). Seamlessly manage social and governance aspects to bridge awareness gaps and tackle sustainability challenges head-on.",
    features: [
      "Automated GRI Compliance: Ensure your reports meet Global Reporting Initiative standards with automated checks and guidance",
      "Materiality Assessment: Easily identify and prioritize the most important sustainability issues for your organization",
      "Multi-Framework Support: Generate reports that comply with various ESG frameworks including GRI, SASB, IFRS, and ESRS",
      "Social & Governance Management: Comprehensive tools to track and report on social and governance metrics alongside environmental data"
    ],
    icon: DocumentChartBarIcon,
    gradient: "from-green-500 to-emerald-600",
    bgPattern: "radial-gradient(circle at 90% 10%, rgba(16, 185, 129, 0.1) 0%, transparent 60%)"
  }
];

const esgFrameworks = [
  // ... (keep array content the same)
  "Global Reporting Initiative (GRI)",
  "Sustainability Accounting Standards Board (SASB)",
  "Task Force on Climate-Related Financial Disclosures (TCFD)",
  "International Financial Reporting Standards (IFRS)",
  "European Sustainability Reporting Standards (ESRS)",
  "UN Sustainable Development Goals (SDGs)",
  "Science Based Targets initiative (SBTi)",
  "Carbon Disclosure Project (CDP)"
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const ESGPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>ESG Reporting Solutions | Z4BIZ</title> {/* Updated title */}
        <meta
          name="description"
          content="Sustainability & compliance solutions with 4Scope for comprehensive ESG reporting across major frameworks." /* Updated description */
        />
      </Head>

      <div className="flex flex-col min-h-screen relative overflow-hidden">
        {/* Global Background Colors and Decorations */}
        {/* ... (keep background styles the same) ... */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white" />
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-emerald-100 to-transparent opacity-70" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-teal-100 to-transparent opacity-70" />
        </div>

        {/* Animated nature-inspired blobs */}
        {/* ... (keep animated blobs the same) ... */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-32 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [0.8, 1, 0.8], rotate: [0, -90, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* <ServiceNavigation /> REMOVED */}
        <Navigation /> {/* ADDED */}

        {/* Ensure main content has padding-top */}
        <main className="flex-grow relative z-10 pt-24 pb-16"> {/* pt-24 ensures content starts below Nav */}
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            {/* Hero Section */}
            {/* ... (keep hero section the same) ... */}
            <motion.div
              className="mb-16 rounded-3xl overflow-hidden bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative p-8 sm:p-12 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/30 rounded-full transform translate-x-1/3 -translate-y-1/2" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/20 rounded-full transform -translate-x-1/3 translate-y-1/2" />

                  {/* Leaf pattern */}
                  <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 200 200">
                    <path fill="white" d="M42.7,-62.9C53.4,-54.7,59.2,-40.6,65.2,-26.6C71.1,-12.6,77.2,1.4,75.4,14.9C73.7,28.4,64.2,41.3,52.7,50.9C41.3,60.5,27.9,66.9,14.3,69.1C0.7,71.3,-13.2,69.4,-25.2,63.5C-37.2,57.6,-47.3,47.7,-56,36.1C-64.7,24.5,-72,11.2,-74.6,-3.8C-77.2,-18.9,-75,-35.8,-65.6,-45.9C-56.2,-56,-39.5,-59.2,-24.8,-64.7C-10.1,-70.3,2.5,-78.2,16.1,-77.8C29.8,-77.3,32,-71.2,42.7,-62.9Z" transform="translate(100 100) scale(1.2)" />
                  </svg>
                </div>

                <div className="relative max-w-4xl mx-auto text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="inline-block px-4 py-2 mb-4 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium"
                  >
                    Environmental, Social & Governance Reporting {/* Updated Tag */}
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                  >
                    ESG <span className="text-emerald-200">Reporting Solution</span> {/* Updated Heading */}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg sm:text-xl text-teal-100 mb-8 max-w-3xl mx-auto"
                  >
                    Comprehensive sustainability and compliance solutions powered by 4Scope to meet your ESG reporting needs. {/* Updated Sub-heading */}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <a
                      href="#4scope"
                      className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-medium rounded-lg shadow-lg hover:bg-green-50 transition-colors duration-300 group"
                    >
                      Explore 4Scope Solution
                      <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </motion.div>
                </div>
              </div>

              {/* Wave Bottom Border */}
              <div className="h-16 bg-white relative -mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute -top-1 left-0 w-full">
                  <path
                    fill="#10b981" // Match hero bg gradient end
                    fillOpacity="1"
                    d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,96C672,96,768,128,864,154.7C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                  ></path>
                </svg>
              </div>
            </motion.div>

            {/* Overview Section */}
            {/* ... (keep overview section the same) ... */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-16 bg-white rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-100"
            >
              <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-600 shadow-lg">
                      <ShieldCheckIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-6">Streamlined Sustainability & Compliance</h2> {/* Updated title */}

                    <div className="prose prose-lg max-w-none text-green-700">
                      <p>
                        At Z4BIZ, we provide powerful software solutions to help organizations navigate the complex landscape of ESG reporting. Our flagship product, <strong className="text-green-800">4Scope</strong>, simplifies compliance, streamlines data collection for reporting, and provides actionable insights for your sustainability journey. {/* Updated description */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ESG Frameworks */}
            {/* ... (keep frameworks section the same) ... */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-16 bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl p-8 sm:p-10 shadow-lg border border-green-200 relative overflow-hidden"
            >
              <div className="absolute inset-0 overflow-hidden opacity-40">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="leaf-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#leaf-grid)" />
                </svg>
              </div>

              <div className="relative">
                <h3 className="text-2xl font-bold text-green-900 mb-6">Supported ESG Frameworks with 4Scope</h3> {/* Specified 4Scope */}
                <p className="text-lg text-green-700 mb-8">
                  Our 4Scope solution supports a wide range of global sustainability and reporting frameworks to ensure your business stays compliant:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {esgFrameworks.map((framework) => (
                    <div
                      key={framework}
                      className="bg-white/80 backdrop-blur-sm rounded-lg py-3 px-4 text-center text-green-800 font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      {framework}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Product Cards Title Area */}
            {/* ... (keep title area the same) ... */}
             <div className="mb-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 mb-4 rounded-full bg-green-100 text-green-700 text-sm font-medium"
              >
                Our ESG Reporting Product
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold text-green-900 mb-4"
              >
                Introducing 4Scope
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-base sm:text-xl text-green-700 max-w-3xl mx-auto"
              >
                A powerful tool to simplify your ESG reporting and compliance management.
              </motion.p>
            </div>

            {/* Product Cards Section (Only 4Scope now) */}
            {/* ... (keep product cards section the same) ... */}
            <motion.div
              className="space-y-16" // Keep for consistency or remove if only one card
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {esgProducts.map((product) => ( // Only iterates once for 4Scope
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-500 group"
                  id={product.id}
                  style={{ background: `${product.bgPattern}, white` }}
                >
                  <div className="p-6 sm:p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${product.gradient} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <product.icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex-grow">
                        {/* Title with gradient underline */}
                        <div className="relative mb-2 pb-2">
                          <h2 className="text-2xl sm:text-3xl font-bold text-green-900">
                            {product.title}
                          </h2>
                          <div className={`absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r ${product.gradient} group-hover:w-32 transition-all duration-500`}></div>
                        </div>

                        <h3 className={`text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${product.gradient}`}>
                          {product.subtitle}
                        </h3>

                        {/* Description */}
                        <p className="text-green-700 mb-8 text-base sm:text-lg leading-relaxed">
                          {product.description}
                        </p>

                        {/* Features */}
                        <div className="mb-6 bg-green-50/70 rounded-xl p-6">
                          <h3 className={`text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${product.gradient}`}>
                            Key Features of {product.title}
                          </h3>
                          <ul className="space-y-4">
                            {product.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 bg-gradient-to-r ${product.gradient}`}>
                                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                  </svg>
                                </div>
                                <span className="text-green-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Benefits Section */}
            {/* ... (keep benefits section the same) ... */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl p-8 sm:p-10 overflow-hidden relative"
            >
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid-esg-benefits" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"> {/* Changed pattern ID */}
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-esg-benefits)" /> {/* Changed pattern ID */}
                </svg>
              </div>

              <div className="relative text-white">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Why Choose the 4Scope ESG Solution?</h2> {/* Updated title */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
                    <GlobeAltIcon className="w-10 h-10 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Complete Compliance</h3>
                    <p className="text-white/90">Meet requirements for major ESG frameworks with automated reporting.</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
                    <CloudArrowUpIcon className="w-10 h-10 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Cloud-Based Platform</h3>
                    <p className="text-white/90">Access your sustainability data anywhere, anytime securely.</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
                    <BeakerIcon className="w-10 h-10 mb-4" /> {/* Kept BeakerIcon, could be changed if needed */}
                    <h3 className="text-xl font-semibold mb-2">Simplified Reporting</h3> {/* Changed from AI-Powered Insights */}
                    <p className="text-white/90">Streamline data collection and report generation processes efficiently.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ESGPage;