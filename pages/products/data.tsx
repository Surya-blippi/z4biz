import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  ServerIcon,
  ArrowPathIcon,
  ChartBarIcon,
  SparklesIcon,
  LightBulbIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CircleStackIcon,
  BeakerIcon // Added for 4Vue (if SparklesIcon is needed elsewhere distinctly, or use SparklesIcon)
             // Using SparklesIcon as it was originally assigned and fits AI theme
} from '@heroicons/react/24/outline';
import ServiceNavigation from '../../components/ServiceNavigation';
import Footer from '../../components/Footer';

const dataServices = [
  {
    id: "etl-pipelines",
    title: "ETL Pipelines",
    subtitle: "Robust Data Integration & Transformation",
    tagline: "Extract. Transform. Load.",
    description: "Z4BIZ designs and implements efficient ETL pipelines that connect disparate data sources, transform raw data into usable formats, and load it into your data warehouse. Our solutions ensure reliable data flow, data quality monitoring, and seamless integration with your existing systems.",
    benefits: [
      "Automated Data Collection: Streamline data gathering from multiple sources with automated extract processes.",
      "Custom Transformations: Apply business rules and complex transformations to prepare your data for analysis.",
      "Reliable Data Loading: Ensure consistent and error-free data loading into your target systems."
    ],
    icon: ArrowPathIcon,
    gradient: "from-indigo-500 to-blue-600",
    bgPattern: "radial-gradient(circle at 90% 10%, rgba(79, 70, 229, 0.1) 0%, transparent 60%)"
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    subtitle: "Building Robust Data Foundations",
    tagline: "Architect. Integrate. Scale.",
    description: "Our data engineering services help businesses design and implement scalable data architectures that support modern analytics needs. From data modeling to pipeline automation, Z4BIZ ensures your data infrastructure is optimized for performance, reliability, and future growth.",
    benefits: [
      "Data Architecture Design: Create scalable and flexible data infrastructures tailored to your business needs.",
      "Data Modeling: Develop efficient schemas and models that optimize storage and query performance.",
      "Data Quality Management: Implement processes to ensure data accuracy, completeness, and consistency."
    ],
    icon: CircleStackIcon,
    gradient: "from-blue-500 to-cyan-600",
    bgPattern: "radial-gradient(circle at 10% 90%, rgba(14, 165, 233, 0.1) 0%, transparent 60%)"
  },
  // *** START: Added 4Vue Section ***
  {
    id: "4vue-data-engineering", // Changed id slightly to avoid potential conflicts if "4vue" is used elsewhere
    title: "4Vue Platform",
    subtitle: "AI-Powered Data Engineering for Seamless Integration",
    tagline: "Connect. Automate. Analyze.", // Adjusted tagline for data context
    description: "Leverage 4Vue, our AI-driven data engineering platform, to streamline data collection, transformation, and governance. Connect multiple data sources, automate complex data pipelines with a no-code interface, and derive actionable insights faster.",
    benefits: [ // Renamed 'features' to 'benefits' for consistency
      "Seamless Integration: Connect diverse data sources using pre-built connectors, simplifying data ingestion.",
      "Automated Data Pipelines: Schedule pipelines for timely and accurate data flow without manual intervention.",
      "No-Code Data Transformation: Empower users to transform data effortlessly, accelerating decision-making.",
      "AI-Powered Analytics: Uncover hidden insights, optimize workflows, and drive decisions with embedded AI."
    ],
    icon: SparklesIcon, // Kept SparklesIcon as it signifies AI/Automation
    gradient: "from-teal-500 to-cyan-600", // Gradient from original ESG definition
    bgPattern: "radial-gradient(circle at 10% 90%, rgba(20, 184, 166, 0.1) 0%, transparent 60%)" // BG pattern from original
  },
  // *** END: Added 4Vue Section ***
  {
    id: "business-intelligence",
    title: "Business Intelligence",
    subtitle: "Interactive Dashboards & Visualizations",
    tagline: "Visualize. Analyze. Decide.",
    description: "Z4BIZ transforms your data into actionable insights through powerful BI solutions. We create interactive dashboards and reports that provide real-time visibility into your business performance, enabling faster, data-driven decision-making across all organizational levels.",
    benefits: [
      "Interactive Dashboards: Build customized dashboards displaying key metrics and KPIs in real-time.",
      "Self-Service Analytics: Enable non-technical users to explore data and generate insights independently.",
      "Automated Reporting: Streamline recurring report generation to save time and ensure consistent delivery."
    ],
    icon: ChartBarIcon,
    gradient: "from-cyan-500 to-teal-600",
    bgPattern: "radial-gradient(circle at 90% 50%, rgba(20, 184, 166, 0.1) 0%, transparent 60%)"
  },
  {
    id: "advanced-analytics",
    title: "Advanced Analytics",
    subtitle: "Uncovering Insights & Driving Optimization",
    tagline: "Predict. Optimize. Innovate.",
    description: "Our advanced analytics services help businesses leverage predictive modeling, machine learning, and statistical analysis to identify patterns, forecast trends, and optimize operations. Z4BIZ enables data-driven decision-making that drives measurable business value.",
    benefits: [
      "Predictive Analytics: Forecast future trends and outcomes based on historical data patterns.",
      "Prescriptive Insights: Receive actionable recommendations to optimize business processes.",
      "Performance Optimization: Identify inefficiencies and opportunities for business improvement."
    ],
    icon: SparklesIcon, // Note: SparklesIcon is now used twice. Consider if a different icon for 4Vue or Advanced Analytics is better, or if it's acceptable.
    gradient: "from-violet-500 to-purple-600",
    bgPattern: "radial-gradient(circle at 10% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)"
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

const DataManagementPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Data Management & Solutions | Z4BIZ</title> {/* Updated Title */}
        <meta
          name="description"
          content="Harness your data's potential with ETL pipelines, data engineering, AI-powered platforms like 4Vue, interactive BI, and advanced analytics." /* Updated Meta */
        />
      </Head>

      <div className="flex flex-col min-h-screen relative overflow-hidden">
        {/* Global Background Colors and Decorations */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white" />
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100 to-transparent opacity-70" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-100 to-transparent opacity-70" />
        </div>

        {/* Animated blobs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-32 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [0.8, 1, 0.8], rotate: [0, -90, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />

        <ServiceNavigation />

        <main className="flex-grow relative z-10 pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            {/* Hero Section */}
            <motion.div
              className="mb-16 rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-700 to-blue-700 text-white shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative p-8 sm:p-12 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/30 rounded-full transform translate-x-1/3 -translate-y-1/2" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/20 rounded-full transform -translate-x-1/3 translate-y-1/2" />

                  {/* Data flow pattern */}
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-20">
                    <pattern id="dataflow" width="80" height="80" patternUnits="userSpaceOnUse">
                      <path d="M0,40 L80,40 M40,0 L40,80 M20,20 L60,60 M60,20 L20,60" stroke="white" strokeWidth="1" fill="none"/>
                      <circle cx="40" cy="40" r="3" fill="white" />
                      <circle cx="20" cy="20" r="2" fill="white" />
                      <circle cx="60" cy="60" r="2" fill="white" />
                      <circle cx="60" cy="20" r="2" fill="white" />
                      <circle cx="20" cy="60" r="2" fill="white" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#dataflow)" />
                  </svg>
                </div>

                <div className="relative max-w-4xl mx-auto text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="inline-block px-4 py-2 mb-4 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium"
                  >
                    {/* Updated Tagline */}
                    ETL · Data Engineering · AI Integration · BI · Advanced Analytics
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                  >
                    Data <span className="text-blue-200">Management & Solutions</span> {/* Updated Heading */}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
                  >
                    Harness your data's potential with integrated solutions for modern enterprises
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <a
                      href="#etl-pipelines"
                      className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-lg hover:bg-indigo-50 transition-colors duration-300 group"
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
                    fill="#4f46e5"
                    fillOpacity="1"
                    d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,128C672,149,768,171,864,165.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                  ></path>
                </svg>
              </div>
            </motion.div>

            {/* Overview Section */}
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
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-600 shadow-lg">
                      <ServerIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h2 className="text-2xl sm:text-3xl font-bold text-indigo-900 mb-6">Turn Data into Actionable Insights</h2>

                    <div className="prose prose-lg max-w-none text-indigo-700">
                      <p>
                        At Z4BIZ, we help organizations transform raw data into valuable business insights through comprehensive data management solutions. Our services include building robust ETL pipelines, implementing scalable data engineering practices, leveraging AI-driven platforms like <strong className='text-indigo-800'>4Vue</strong> for seamless integration, creating interactive business intelligence dashboards, and applying advanced analytics to uncover hidden patterns. We ensure a seamless flow of information that drives better decision-making. {/* Added mention of 4Vue */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-16 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-2xl p-8 sm:p-10 shadow-lg border border-indigo-200 relative overflow-hidden"
            >
              <div className="absolute inset-0 overflow-hidden opacity-40">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(79, 70, 229, 0.3)" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              <div className="relative">
                <h3 className="text-2xl font-bold text-indigo-900 mb-6">Why Choose Z4BIZ for Data Management?</h3>
                <p className="text-lg text-indigo-700 mb-8">
                  Our data management solutions are designed to tackle complex challenges and deliver measurable value. We combine technical expertise with business acumen to align data initiatives with your strategic goals.
                </p>

                {/* *** START: Why Choose Items (Including 4Vue Benefit) *** */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    "End-to-End Solutions",
                    "Scalable Architecture",
                    "Performance Optimization",
                    "AI-Powered Platform (4Vue)", // Added benefit related to 4Vue
                    "Seamless Integration",
                    "Industry Expertise",
                    "Ongoing Support"
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="bg-white/80 backdrop-blur-sm rounded-lg py-3 px-4 text-center text-indigo-800 font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
                 {/* *** END: Why Choose Items *** */}
              </div>
            </motion.div>

            {/* Data Management Services Title Area */}
            <div className="mb-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 mb-4 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium"
              >
                Our Data Services & Platforms {/* Updated Title */}
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold text-indigo-900 mb-4"
              >
                Comprehensive Data Management Solutions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-base sm:text-xl text-indigo-600 max-w-3xl mx-auto"
              >
                From data collection to visualization and AI-driven insights, we provide end-to-end solutions.
              </motion.p>
            </div>

            {/* Service Cards Section (Now includes 4Vue) */}
            <motion.div
              className="space-y-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {dataServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-500 group"
                  id={service.id}
                  style={{ background: `${service.bgPattern}, white` }}
                >
                  <div className="p-6 sm:p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex-grow">
                        {/* Title with gradient underline */}
                        <div className="relative mb-1 pb-2">
                          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-900">
                            {service.title}
                          </h2>
                          <div className={`absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r ${service.gradient} group-hover:w-32 transition-all duration-500`}></div>
                        </div>

                        <h3 className={`text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                          {service.subtitle}
                        </h3>

                        <div className="mb-4 inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                          {service.tagline}
                        </div>

                        {/* Description */}
                        <p className="text-indigo-700 mb-8 text-base sm:text-lg leading-relaxed">
                          {service.description}
                        </p>

                        {/* Benefits/Features */}
                        <div className="mb-6 bg-indigo-50 rounded-xl p-6">
                          <h3 className={`text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                             {/* Dynamic Title based on service ID */}
                            {service.id === '4vue-data-engineering' ? `Key Features of ${service.title}` : `Key Benefits of ${service.title}`}
                          </h3>
                          <ul className="space-y-4">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 bg-gradient-to-r ${service.gradient}`}>
                                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                  </svg>
                                </div>
                                <span className="text-indigo-700">{benefit}</span>
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-16 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl p-8 sm:p-10 overflow-hidden relative"
            >
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid-data-benefits" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"> {/* Changed pattern ID */}
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-data-benefits)" /> {/* Changed pattern ID */}
                </svg>
              </div>

              <div className="relative text-white">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">The Impact of Effective Data Management</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
                    <LightBulbIcon className="w-10 h-10 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Data-Driven Decisions</h3>
                    <p className="text-white/90">Enable faster, more accurate decision-making at all levels.</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
                    <ChartBarIcon className="w-10 h-10 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
                    <p className="text-white/90">Identify inefficiencies and opportunities for business improvement.</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
                    <GlobeAltIcon className="w-10 h-10 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Scalable Growth</h3>
                    <p className="text-white/90">Build data infrastructure that grows with your business needs.</p>
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

export default DataManagementPage;