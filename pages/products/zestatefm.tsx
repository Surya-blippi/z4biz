import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  BuildingOffice2Icon, // Real Estate / Corporate
  HeartIcon,           // Healthcare
  HomeModernIcon,      // Hospitality / Real Estate
  ShoppingCartIcon,    // Retail
  AcademicCapIcon,     // Educational
  WrenchScrewdriverIcon, // Manufacturing / Maintenance
  CpuChipIcon,         // Automation / Technology
  ChartBarIcon,        // Analytics
  DevicePhoneMobileIcon, // Mobile
  UsersIcon,           // Vendor / Experts
  ClipboardDocumentCheckIcon, // Compliance / Contract
  CircleStackIcon,     // Inventory / Integration
  SparklesIcon,        // Benefits / Optimization
  ScaleIcon,           // Scalable
  CheckBadgeIcon,      // Compliance / Reliability
  Cog6ToothIcon,       // Features / Settings
  PhoneIcon,           // Contact / Demo
  QuestionMarkCircleIcon, // Support
  ArrowRightIcon,      // Call to Action
  LifebuoyIcon,        // Support
  LightBulbIcon,       // Solution / Smarter Way
} from '@heroicons/react/24/outline';

// Assuming these components exist in your project structure
import Navigation from '../../components/Navigation'; // Or your actual path
import Footer from '../../components/Footer';       // Or your actual path

// Data Structures for easier mapping (Keep these the same as before)
const keyBenefits = [
  {
    id: 1,
    title: "Seamless Automation",
    description: "Automate maintenance schedules, work orders, and vendor interactions. Reduces manual efforts, enabling faster turnaround times.",
    icon: CpuChipIcon,
  },
  {
    id: 2,
    title: "Operational Efficiency",
    description: "Real-time tracking and dashboards for improved visibility. Streamlined workflows boost productivity and minimize downtime.",
    icon: SparklesIcon,
  },
  {
    id: 3,
    title: "Cost Optimization",
    description: "Predictive maintenance reduces unexpected repairs. Optimized inventory usage lowers operational costs.",
    icon: ChartBarIcon,
  },
  {
    id: 4,
    title: "Regulatory Compliance",
    description: "Integrated safety modules ensure adherence to industry regulations. Automated alerts prevent non-compliance risks.",
    icon: CheckBadgeIcon,
  },
  {
    id: 5,
    title: "Scalable & Flexible",
    description: "Adaptable to multiple facility locations. Supports integration with ERP and financial systems for unified operations.",
    icon: ScaleIcon,
  },
];

const industries = [
  { title: "Real Estate", description: "Residential, commercial properties. Tenant management, leasing, maintenance.", icon: HomeModernIcon },
  { title: "Healthcare", description: "Critical equipment uptime. Compliance, safety protocols, hygiene standards.", icon: HeartIcon },
  { title: "Hospitality", description: "Hotel operations. Room servicing, guest experience, utility management.", icon: BuildingOffice2Icon },
  { title: "Retail", description: "Maintenance of retail spaces. Vendor services, energy consumption optimization.", icon: ShoppingCartIcon },
  { title: "Educational Institutions", description: "Managing classrooms, dormitories, labs, & sports complexes. Scheduling regular inspections & safety checks.", icon: AcademicCapIcon },
  { title: "Corporate & Office Spaces", description: "Facility upkeep, energy management, & workspace optimization. Tracking assets like IT equipment and infrastructure.", icon: BuildingOffice2Icon },
  { title: "Industrial & Manufacturing Units", description: "Ensuring smooth operation of machinery & equipment. Safety compliance & preventive maintenance for uninterrupted production.", icon: WrenchScrewdriverIcon },
];

const coreFeatures = [
  { id: 1, title: "Automated Maintenance Management", description: "Centralized platform for issues and work orders. Supports preventive and reactive maintenance.", icon: Cog6ToothIcon },
  { id: 2, title: "Real-Time Dashboards & Analytics", description: "Role-based dashboards. Real-time insights into KPIs, asset performance, maintenance history.", icon: ChartBarIcon },
  { id: 3, title: "Mobile-First Approach", description: "Mobile app with QR scanning, geo-tracking, offline capabilities for remote operations.", icon: DevicePhoneMobileIcon },
  { id: 4, title: "Vendor & Contract Management", description: "Manage third-party vendors with SLA tracking. Automated vendor performance evaluations.", icon: UsersIcon },
  { id: 5, title: "Financial & Inventory Integration", description: "ERP Integration ensures real-time inventory and financial tracking. Automated cost allocation for materials and labor.", icon: CircleStackIcon },
];

const whyChooseReasons = [
  { title: "Tailored for Every Business", description: "Industry agnostic solution. Customizable modules adaptable to unique business needs.", icon: Cog6ToothIcon },
  { title: "Future-Ready Technology", description: "Built on robust Zoho CRM platform. AI-driven insights for predictive maintenance.", icon: CpuChipIcon },
  { title: "Reliable Support", description: "Comprehensive onboarding and training. 24/7 support for uninterrupted operations.", icon: LifebuoyIcon },
];

const getStartedSteps = [
  { title: "Book a Demo", description: "See Z-Estate in action.", icon: PhoneIcon },
  { title: "Connect with Our Experts", description: "Tailor the solution to your business needs.", icon: UsersIcon },
  { title: "Optimize Your Operations", description: "Enhance efficiency, reduce costs, and ensure compliance.", icon: SparklesIcon },
];

// Animation variants (Keep these the same)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ZEstateFacilityManagementPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Z-Estate Facility Management Solution | Intelligent Automation</title>
        <meta
          name="description"
          content="Z-Estate: All-in-one facility management solution built on Zoho CRM. Streamline, automate, and optimize operations across industries."
        />
      </Head>

      <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navigation /> {/* Assumes Navigation is sticky/fixed */}

        {/* Add padding-top to main to offset the fixed Navigation */}
        <main className="flex-grow pt-20 sm:pt-24"> {/* Adjust pt value based on Navigation height */}

          {/* Hero Section - UPDATED */}
          <section className="relative py-24 md:py-32 bg-gradient-to-br from-blue-500 to-cyan-400 text-white overflow-hidden">
            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    {/* Horizontal lines */}
                    <path d="M 0 10 L 40 10 M 0 20 L 40 20 M 0 30 L 40 30" stroke="white" strokeWidth="0.5" fill="none"/>
                    {/* Vertical lines */}
                    <path d="M 10 0 L 10 40 M 20 0 L 20 40 M 30 0 L 30 40" stroke="white" strokeWidth="0.5" fill="none"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
              </svg>
            </div>

            {/* Content Container - Centered */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-center">
              <motion.div
                className="max-w-3xl text-center" // Ensure text-center is applied here
                initial={{ opacity: 0, y: 20 }} // Simple fade-in animation
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Z-Estate Facility Management Solution
                </h1>
                <p className="text-lg md:text-xl text-blue-100 mb-6">
                  "Transforming Facility Management Across Industries with Intelligent Automation"
                </p>
                <p className="text-base md:text-lg mb-8">
                  Z-Estate Facility management Solution: An all-in-one solution to streamline, automate, and optimize facility management processes. Built on Zoho CRM, designed for scalability and flexibility.
                </p>
                <motion.a
                  href="#get-started" // Link to the get started section
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-50 transition duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            </div>
          </section>
          {/* End of Updated Hero Section */}


          {/* Key Benefits Section (Keep Same) */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 md:mb-16"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Key Benefits of Z-Estate Facility Management
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {keyBenefits.map((benefit) => (
                  <motion.div
                    key={benefit.id}
                    variants={itemVariants}
                    className="p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center shadow">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
                 {/* Add placeholder divs if benefits count is not a multiple of 3 for alignment */}
                 {keyBenefits.length % 3 === 2 && <div className="hidden lg:block"></div>}
                 {keyBenefits.length % 3 === 1 && <><div className="hidden lg:block"></div><div className="hidden lg:block"></div></>}
              </motion.div>
            </div>
          </section>

          {/* Industries We Serve Section (Keep Same) */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-gray-100 to-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 md:mb-16"
                 initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Industries We Serve
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                 variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {industries.map((industry) => (
                  <motion.div
                    key={industry.title}
                    variants={itemVariants}
                    className="p-6 bg-white rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
                  >
                    <div className="mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center shadow-lg">
                      <industry.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{industry.title}</h3>
                    <p className="text-gray-600 text-sm flex-grow">{industry.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Core Features Section (Keep Same) */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 md:mb-16"
                 initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Core Features of Z-Estate Facility Management
              </motion.h2>
              <motion.div
                className="max-w-3xl mx-auto space-y-8"
                 variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {coreFeatures.map((feature) => (
                  <motion.div
                    key={feature.id}
                    variants={itemVariants}
                    className="flex items-start space-x-6 p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-100"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center shadow">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Why Choose Us Section (Keep Same) */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 md:mb-16"
                 initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Why Choose Z-Estate Facility Management?
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
                 variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {whyChooseReasons.map((reason) => (
                  <motion.div
                    key={reason.title}
                    variants={itemVariants}
                    className="p-8 bg-white rounded-xl shadow-lg text-center border border-gray-100 flex flex-col items-center"
                  >
                     <div className="mb-5 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center shadow-lg">
                      <reason.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{reason.title}</h3>
                    <p className="text-gray-600 flex-grow">{reason.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Get Started Section - MODIFIED to add hyperlinks */}
          <section id="get-started" className="py-16 md:py-24 bg-gray-800 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Get Started with Z-Estate
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {getStartedSteps.map((step) => (
                  <motion.div
                    key={step.title}
                    variants={itemVariants}
                    className="relative group"
                  >
                    <a 
                      href="#footer" 
                      className="block text-center p-6 bg-gray-700 rounded-lg shadow-md group-hover:bg-gray-600 transition-colors duration-300 h-full"
                    >
                      <div className="flex flex-col items-center h-full">
                        <div className="mb-4 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-md">
                          <step.icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 underline font-bold">{step.title}</h3>
                        <p className="text-gray-300 flex-grow">{step.description}</p>
                        
                        {/* Arrow indicator that appears on hover */}
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </motion.div>
              <motion.p
                className="text-xl md:text-2xl font-semibold text-center text-cyan-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                "Z-Estate Facility Management – The Smarter Way to Manage Facilities" <LightBulbIcon className="inline-block w-6 h-6 ml-1"/>
              </motion.p>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
};

export default ZEstateFacilityManagementPage;