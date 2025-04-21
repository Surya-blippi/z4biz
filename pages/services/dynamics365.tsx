import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  CubeIcon,
  BuildingStorefrontIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
// import ServiceNavigation from '../../components/ServiceNavigation'; // REMOVED
import Navigation from '../../components/Navigation'; // ADDED
import Footer from '../../components/Footer';

const D365Offerings = [
  // ... (keep array content the same)
  {
    id: "finance-operations",
    title: "D365 Finance & Operations",
    description: "At Z4BIZ, we specialize in Dynamics 365 Finance and Operations Consulting, providing expert guidance to identify and resolve key business challenges. As a trusted Dynamics 365 Finance and Operations Partner, our team of certified consultants delivers tailored solutions to enhance efficiency, reduce costs, and adapt to the evolving market landscape.",
    features: [
      "Refine Financial Analysis for smarter decision-making",
      "Enhance Operational Scalability to support business growth",
      "Develop a Strategic Business Plan tailored to your objectives",
      "Focus on High-Impact Areas to maximize performance",
      "Achieve Business Goals with Agility in a dynamic market",
      "Accelerate Product Development for faster time-to-market",
      "Boost Efficiency & Productivity while saving valuable time",
      "Leverage Cost-Effective Applications to optimize expenses"
    ],
    conclusion: "Let us help you drive innovation, efficiency, and profitability with Dynamics 365 Finance and Operations.",
    icon: CubeIcon,
    gradient: "from-blue-500 to-indigo-600",
    bgPattern: "radial-gradient(circle at 90% 10%, rgba(59, 130, 246, 0.1) 0%, transparent 60%)"
  },
  {
    id: "business-central",
    title: "D365 Business Central",
    description: "Dynamics 365 Business Central is a comprehensive, cloud-based ERP solution designed to streamline operations, enhance financial management, and drive business growth. Our team of skilled professionals brings extensive expertise in implementing Business Central across diverse industries, including Manufacturing, Trading, Services, and Real Estate. With deep industry knowledge and a customer-centric approach, we ensure seamless integration, customization, and optimization of the platform to meet unique business needs.",
    features: [
      "Industry-Specific Solutions – Tailored implementations for Manufacturing, Trading, Services, and Real Estate businesses.",
      "Seamless Integration – Smooth transition with minimal disruptions to existing operations.",
      "Customization & Scalability – Solutions designed to grow and adapt with your business.",
      "Enhanced Financial & Operational Efficiency – Improved workflows, cost savings, and better decision-making.",
      "Expert Support & Training – Ongoing guidance to maximize platform adoption and ROI."
    ],
    conclusion: "Partner with us to unlock the full potential of Dynamics 365 Business Central and drive digital transformation across your business.",
    icon: BuildingStorefrontIcon,
    gradient: "from-purple-500 to-pink-600",
    bgPattern: "radial-gradient(circle at 10% 90%, rgba(168, 85, 247, 0.1) 0%, transparent 60%)"
  },
  {
    id: "ls-central",
    title: "D365 LS Central",
    description: "LS Retail is a comprehensive, all-in-one software solution designed specifically for retailers, built on the powerful Microsoft Dynamics 365 Business Central ERP platform. It seamlessly integrates key retail functions, including Point of Sale (POS), inventory management, purchasing, and financial management, into a single, unified system. Trusted by retailers across industries such as fashion, hospitality, grocery, and electronics, LS Retail enhances operational efficiency, streamlines processes, and drives business growth.",
    features: [
      "Streamline Operations",
      "Enhance Customer Experience",
      "Improve Inventory Management",
      "Increase Efficiency",
      "Enable Scalability"
    ],
    conclusion: "Let our Consultants take you through, how you can use LS Retail to revolutionize your retail business.",
    icon: ShoppingBagIcon,
    gradient: "from-cyan-500 to-blue-600",
    bgPattern: "radial-gradient(circle at 90% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 60%)"
  },
  {
    id: "crm",
    title: "D365 Customer Relationship Management",
    description: "Dynamics 365 CRM for Customer Engagement empowers businesses to build stronger relationships, enhance customer experiences, and streamline sales, marketing, and service processes. Our expert team specializes in implementing and customizing the Customer Engagement platform to automate unique customer-facing workflows across industries such as Manufacturing, Trading, Services, and Real Estate. With deep domain expertise and a strategic approach, we help businesses optimize interactions, improve efficiency, and drive customer loyalty.",
    features: [
      "Tailored Customer Engagement Solutions – Industry-specific CRM implementations for Manufacturing, Trading, Services, and Real Estate.",
      "Automation of Customer-Facing Processes – Streamline sales, marketing, and service workflows for improved efficiency.",
      "360° Customer Insights – Gain real-time data and analytics to personalize interactions and enhance decision-making.",
      "Seamless Integration & Scalability – Easily connect with existing systems and scale as your business grows.",
      "Expert Implementation & Support – End-to-end CRM deployment with ongoing training and optimization."
    ],
    conclusion: "Leverage our expertise to transform customer engagement, automate key processes, and drive business success with Dynamics 365 CRM.",
    icon: UserGroupIcon,
    gradient: "from-emerald-500 to-teal-600",
    bgPattern: "radial-gradient(circle at 10% 30%, rgba(16, 185, 129, 0.1) 0%, transparent 60%)"
  }
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

const Dynamics365Page: React.FC = () => {
  return (
    <>
      <Head>
        <title>Dynamics 365 Expert Consulting | Z4BIZ</title>
        <meta
          name="description"
          content="Specialized consulting services for Microsoft Dynamics 365 implementation, customization, and optimization by Z4BIZ."
        />
      </Head>

      <div className="flex flex-col min-h-screen relative overflow-hidden">
        {/* Global Background Colors and Decorations */}
        {/* ... (keep background styles the same) ... */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100 to-transparent opacity-70" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-100 to-transparent opacity-70" />
        </div>

        {/* Animated blobs */}
        {/* ... (keep animated blobs the same) ... */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-32 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
              className="mb-16 rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl"
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
                    Enterprise Solutions
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                  >
                    Dynamics 365 <span className="text-blue-200">Expert Consulting</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
                  >
                    Comprehensive expertise across the entire Dynamics 365 ecosystem to transform operations,
                    improve efficiency, and accelerate growth for your business.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <a
                      href="#finance-operations"
                      className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition-colors duration-300 group"
                    >
                      Explore Our Solutions
                      <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </motion.div>
                </div>
              </div>

              {/* Wave Bottom Border */}
              <div className="h-16 bg-white relative -mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute -top-1 left-0 w-full">
                  <path
                    fill="#4f46e5" // Match hero bg gradient end
                    fillOpacity="1"
                    d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,170.7C672,149,768,107,864,101.3C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                  ></path>
                </svg>
              </div>
            </motion.div>

            {/* D365 Offerings */}
            {/* ... (keep offerings section the same) ... */}
             <motion.div
              className="space-y-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible" // Changed from whileInView for immediate animation
              viewport={{ once: true }} // Keep viewport for optimization if preferred
            >
              {D365Offerings.map((offering, index) => (
                <motion.div
                  key={offering.id}
                  variants={itemVariants}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-500 group"
                  id={offering.id}
                  style={{ background: `${offering.bgPattern}, white` }}
                >
                  <div className="p-6 sm:p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${offering.gradient} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <offering.icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex-grow">
                        {/* Title with gradient underline */}
                        <div className="relative mb-4 pb-2">
                          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">
                            {offering.title}
                          </h2>
                          <div className={`absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r ${offering.gradient} group-hover:w-32 transition-all duration-500`}></div>
                        </div>

                        {/* Description */}
                        <p className="text-blue-700/90 mb-8 text-base sm:text-lg leading-relaxed">
                          {offering.description}
                        </p>

                        {/* Features */}
                        <div className="mb-8 bg-blue-50/50 rounded-xl p-6">
                          <h3 className={`text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${offering.gradient}`}>
                            Unlock Your Business Potential with Our Expertise
                          </h3>
                          <ul className="space-y-4">
                            {offering.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 bg-gradient-to-r ${offering.gradient}`}>
                                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                  </svg>
                                </div>
                                <span className="text-blue-700/90">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Conclusion */}
                        <div className="border-t border-blue-100 pt-6">
                          <p className={`font-medium text-lg text-transparent bg-clip-text bg-gradient-to-r ${offering.gradient}`}>
                            {offering.conclusion}
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

export default Dynamics365Page;