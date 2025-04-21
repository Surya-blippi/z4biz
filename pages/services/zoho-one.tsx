import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  SquaresPlusIcon, // Represents the platform/suite
  ArrowsRightLeftIcon, // Represents processes/workflows
  ShieldCheckIcon, // Represents trust/why choose us
  BuildingOfficeIcon, // Represents industries
  ArrowRightIcon,
  CheckCircleIcon // Used for feature lists
} from '@heroicons/react/24/outline';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

// Define the structure for Zoho One content sections
const ZohoOneSections = [
  {
    id: "zoho-one-platform",
    title: "Zoho One: The Operating System for Business",
    description: "A comprehensive, all-in-one platform offering over 45+ enterprise-grade applications designed to help businesses operate efficiently. Simplify data management, enhance decision-making, and achieve new levels of productivity through a unified suite of contextually integrated applications.",
    featuresTitle: "One Integrated System for Your Entire Business:",
    features: [
      "Transform disparate activities into a connected, agile organization.",
      "Increase productivity across your business.",
      "Deliver better customer experiences.",
      "Includes CRM, Marketing Automation, Accounting, HR, and much more.",
      "Seamless integration across all apps for connected teams."
    ],
    conclusion: "Discover how Zoho One provides a unified system to manage every aspect of your business.",
    icon: SquaresPlusIcon,
    gradient: "from-red-500 to-orange-500", // Zoho-like colors
    bgPattern: "radial-gradient(circle at 10% 10%, rgba(239, 68, 68, 0.1) 0%, transparent 60%)"
  },
  {
    id: "zoho-one-processes",
    title: "Streamline Key Business Processes",
    description: "Zoho One helps you manage critical workflows from end-to-end within a single ecosystem, improving efficiency and providing clear visibility.",
    featuresTitle: "Optimize Your Operations:",
    features: [
      "Leads to Cash: Collect leads, close deals, create quotes/invoices, sign contracts, get paid, and track metrics.",
      "Customer into Promoters: Centralize data, segment customers, send targeted campaigns/surveys, and monitor performance.",
      "Sale to Service: Manage contracts, projects, track time/expenses, and stay on schedule and budget."
    ],
    conclusion: "Automate and integrate your core business functions for seamless operations.",
    icon: ArrowsRightLeftIcon,
    gradient: "from-amber-500 to-yellow-500",
    bgPattern: "radial-gradient(circle at 90% 10%, rgba(245, 158, 11, 0.1) 0%, transparent 60%)"
  },
  {
      id: "why-z4biz-zoho",
      title: "Why Partner with Z4BIZ for Zoho One?",
      description: "Leverage our regional expertise and dedicated support to maximize your Zoho One investment and ensure a smooth transition tailored to the GCC market.",
      featuresTitle: "Our Commitment to Your Success:",
      features: [
          "Local Expertise & Proven Success: Deep understanding of the GCC business environment ensures Zoho One is perfectly adapted.",
          "Industry Recognition: Successfully implemented Zoho One across diverse industries, demonstrating capability and reliability.",
          "Unmatched Customer Support: Dedicated on-site and remote support team to ensure smooth operations.",
          "Comprehensive Training: Equipping your team with the skills to maximize Zoho One benefits through training and resources."
      ],
      conclusion: "Curious about how Z4BIZ can tailor ZOHO One to your needs? Our experts are available to assist you.",
      icon: ShieldCheckIcon,
      gradient: "from-green-500 to-emerald-600",
      bgPattern: "radial-gradient(circle at 10% 90%, rgba(16, 185, 129, 0.1) 0%, transparent 60%)"
  },
  {
      id: "zoho-industries",
      title: "Industries We Empower with Zoho One",
      description: "Zoho One’s flexibility and extensive suite of apps make it an ideal solution for a wide range of industries. We customize Zoho One to fit your specific sector needs.",
      featuresTitle: "Tailored Solutions For:",
      features: [
          "Retail: Integrated sales, inventory, CRM, and marketing.",
          "Manufacturing & Distribution: Streamlined supply chain, production, and automation.",
          "Real Estate: Efficient property, lead, and financial management.",
          "Professional Services: Robust project management, time tracking, and invoicing.",
          "Healthcare: Secure patient management, scheduling, and billing.",
          "Non-Profit: Effective donor, campaign, and grant management."
      ],
      conclusion: "Let us show you how Zoho One can be configured for success in your industry.",
      icon: BuildingOfficeIcon,
      gradient: "from-sky-500 to-cyan-500",
      bgPattern: "radial-gradient(circle at 90% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 60%)"
  }
];


// Animation variants (same as before)
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

const ZohoOnePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Zoho One Implementation & Consulting | Z4BIZ</title>
        <meta
          name="description"
          content="Z4BIZ provides expert Zoho One implementation, customization, and support services to streamline your business operations across the GCC."
        />
      </Head>

      <div className="flex flex-col min-h-screen relative overflow-hidden">
        {/* Global Background Colors and Decorations */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-red-50 to-white" /> {/* Adjusted gradient */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-red-100 to-transparent opacity-60" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-amber-100 to-transparent opacity-60" />
        </div>

        {/* Animated blobs (adjust colors slightly if desired) */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-32 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [0.8, 1, 0.8], rotate: [0, -90, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />

        <Navigation />

        {/* Ensure main content has padding-top */}
        <main className="flex-grow relative z-10 pt-24 pb-16"> {/* pt-24 ensures content starts below Nav */}
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            {/* Hero Section */}
            <motion.div
              className="mb-16 rounded-3xl overflow-hidden bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-xl" // Adjusted gradient
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative p-8 sm:p-12 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/30 rounded-full transform translate-x-1/3 -translate-y-1/2" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/20 rounded-full transform -translate-x-1/3 translate-y-1/2" />
                   {/* Grid pattern */}
                   <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
                    {[...Array(100)].map((_, i) => (
                      <div key={i} className="border-t border-l border-white/5"></div>
                    ))}
                  </div>
                </div>

                <div className="relative max-w-4xl mx-auto text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="inline-block px-4 py-2 mb-4 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium"
                  >
                    All-in-One Business Platform
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                  >
                    Zoho One: <span className="text-red-200">The Operating System for Business</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg sm:text-xl text-red-100 mb-8 max-w-3xl mx-auto" // Adjusted text color
                  >
                    Integrate every aspect of your business with Zoho One's comprehensive suite of applications. Z4BIZ provides expert implementation and support tailored for the GCC region.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <a
                      href="#zoho-one-platform" // Link to the first section
                      className="inline-flex items-center px-6 py-3 bg-white text-red-600 font-medium rounded-lg shadow-lg hover:bg-red-50 transition-colors duration-300 group" // Adjusted text color
                    >
                      Explore Zoho One Solutions
                      <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </motion.div>
                </div>
              </div>

              {/* Wave Bottom Border */}
              <div className="h-16 bg-white relative -mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute -top-1 left-0 w-full">
                  <path
                    fill="#ea580c" // Match hero bg gradient end (orange-600)
                    fillOpacity="1"
                    d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,170.7C672,149,768,107,864,101.3C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                  ></path>
                </svg>
              </div>
            </motion.div>

            {/* Zoho One Sections */}
             <motion.div
              className="space-y-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
            >
              {ZohoOneSections.map((section) => (
                <motion.div
                  key={section.id}
                  variants={itemVariants}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-500 group"
                  id={section.id}
                  style={{ background: `${section.bgPattern}, white` }}
                >
                  <div className="p-6 sm:p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${section.gradient} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <section.icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex-grow">
                        {/* Title with gradient underline */}
                        <div className="relative mb-4 pb-2">
                          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800"> {/* Adjusted text color */}
                            {section.title}
                          </h2>
                          <div className={`absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r ${section.gradient} group-hover:w-32 transition-all duration-500`}></div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed"> {/* Adjusted text color */}
                          {section.description}
                        </p>

                        {/* Features */}
                        <div className="mb-8 bg-gray-50/70 rounded-xl p-6"> {/* Adjusted bg color */}
                          <h3 className={`text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${section.gradient}`}>
                            {section.featuresTitle}
                          </h3>
                          <ul className="space-y-4">
                            {section.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 bg-gradient-to-r ${section.gradient}`}>
                                  {/* Using CheckCircleIcon for consistency */}
                                  <CheckCircleIcon className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-gray-700">{feature}</span> {/* Adjusted text color */}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Conclusion */}
                        <div className="border-t border-gray-200 pt-6"> {/* Adjusted border color */}
                          <p className={`font-medium text-lg text-transparent bg-clip-text bg-gradient-to-r ${section.gradient}`}>
                            {section.conclusion}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ZohoOnePage;