import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Cog6ToothIcon, 
  BoltIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import ServiceNavigation from '../../components/ServiceNavigation';
import Footer from '../../components/Footer';

const powerPlatformServices = [
  {
    id: "power-automate",
    title: "Power Automate",
    subtitle: "Streamline Workflows and Automate Repetitive Tasks",
    tagline: "Automate. Integrate. Accelerate.",
    description: "With Microsoft Power Automate, Z4BIZ helps businesses automate repetitive tasks and integrate third-party apps, saving time and reducing manual errors. From simple tasks to complex workflows, our expert consultants develop tailored automation solutions that enhance productivity and operational efficiency.",
    benefits: [
      "Automate Data Entry and Reporting: Automate routine processes like data entry and report generation to save valuable time.",
      "Integrate Third-Party Applications: Seamlessly connect your tools and platforms to create unified workflows.",
      "Boost Productivity: Let automation handle repetitive tasks so your team can focus on higher-value activities."
    ],
    icon: BoltIcon,
    gradient: "from-blue-500 to-indigo-600",
    bgPattern: "radial-gradient(circle at 90% 10%, rgba(59, 130, 246, 0.1) 0%, transparent 60%)"
  },
  {
    id: "power-apps",
    title: "Power Apps",
    subtitle: "Build Custom Business Applications",
    tagline: "Create Apps, Automate Workflows, and Enhance Efficiency",
    description: "Z4BIZ offers Microsoft Power Apps services that empower businesses to create custom, low-code applications tailored to their specific needs. With Power Apps, companies can automate workflows, integrate with Microsoft tools, and build business apps without extensive coding.",
    benefits: [
      "Custom Business Apps: Develop apps that are aligned with your unique business processes.",
      "Office 365 Integration: Seamlessly integrate with Microsoft tools, including Office 365, for enhanced functionality.",
      "Drive Growth and Efficiency: Streamline operations with tailored applications that enhance your overall productivity."
    ],
    icon: RocketLaunchIcon,
    gradient: "from-purple-500 to-pink-600",
    bgPattern: "radial-gradient(circle at 10% 90%, rgba(168, 85, 247, 0.1) 0%, transparent 60%)"
  },
  {
    id: "power-bi",
    title: "Power BI",
    subtitle: "Make Data-Driven Decisions with Real-Time Insights",
    tagline: "Visualize Data. Create Dashboards. Share Insights.",
    description: "Unlock the power of data with Microsoft Power BI. Z4BIZ offers Power BI services to help businesses visualize data from multiple sources, create custom reports, and share insights with key stakeholders. Our experts provide tailored solutions that enable data-driven decision-making.",
    benefits: [
      "Custom Dashboards: Create powerful visualizations to monitor KPIs and track business performance.",
      "Real-Time Insights: Access up-to-date data for accurate and timely decision-making.",
      "Multiple Data Sources: Integrate data from sources like Power BI, Excel, and Dynamics to get a full view of your operations."
    ],
    icon: ChartBarIcon,
    gradient: "from-amber-500 to-orange-600",
    bgPattern: "radial-gradient(circle at 90% 50%, rgba(245, 158, 11, 0.1) 0%, transparent 60%)"
  },
  {
    id: "copilot-studio",
    title: "CoPilot Studio",
    subtitle: "Elevate Customer Engagement with AI-Driven Chatbots",
    tagline: "Automate Customer Service with Intelligent Chatbots",
    description: "Z4BIZ leverages Microsoft CoPilot Studio to help businesses create AI-powered chatbots that automate customer service and enhance engagement. From automating FAQs to personalizing customer interactions, CoPilot streamlines customer service processes for higher satisfaction and lower operational costs.",
    benefits: [
      "Automate Customer Service: Provide 24/7 support with intelligent chatbots that address customer needs in real time.",
      "Personalized Engagement: Enhance customer interactions with AI-driven, personalized responses.",
      "Reduce Service Costs: Streamline customer service operations, reducing response times and overhead costs."
    ],
    icon: ChatBubbleBottomCenterTextIcon,
    gradient: "from-teal-500 to-cyan-600",
    bgPattern: "radial-gradient(circle at 10% 30%, rgba(20, 184, 166, 0.1) 0%, transparent 60%)"
  },
  {
    id: "power-pages",
    title: "Power Pages",
    subtitle: "Build Custom Web Pages for Real-Time Data Access",
    tagline: "Create Web Pages. Display Data. Enhance Online Presence.",
    description: "With Microsoft Power Pages, Z4BIZ helps businesses create custom websites that display real-time data and reports from various sources, enhancing communication and accessibility. Whether you need to share information with stakeholders or improve your online presence, Power Pages provides a flexible solution.",
    benefits: [
      "Real-Time Data Display: Access data from Power BI, Excel, SharePoint, or Dynamics to provide stakeholders with real-time insights.",
      "Custom Web Pages: Design websites that align with your business objectives and brand.",
      "Seamless Integration: Ensure real-time access to critical information by integrating multiple data sources."
    ],
    icon: GlobeAltIcon,
    gradient: "from-sky-500 to-blue-600",
    bgPattern: "radial-gradient(circle at 90% 70%, rgba(6, 182, 212, 0.1) 0%, transparent 60%)"
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

const AIAutomationPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>AI & Automation | Z4BIZ</title>
        <meta 
          name="description" 
          content="Intelligent process automation with Microsoft Power Platform and CoPilot for businesses. Build apps, streamline workflows, and gain real-time insights." 
        />
      </Head>

      <div className="flex flex-col min-h-screen relative overflow-hidden">
        {/* Global Background Colors and Decorations */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100 to-transparent opacity-70" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-slate-100 to-transparent opacity-70" />
        </div>
        
        {/* Animated blobs */}
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
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [0.8, 1, 0.8], rotate: [0, -90, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />

        <ServiceNavigation />

        <main className="flex-grow relative z-10 pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            {/* Hero Section */}
            <motion.div 
              className="mb-16 rounded-3xl overflow-hidden bg-gradient-to-r from-slate-700 to-blue-700 text-white shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative p-8 sm:p-12 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/30 rounded-full transform translate-x-1/3 -translate-y-1/2" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/20 rounded-full transform -translate-x-1/3 translate-y-1/2" />
                  
                  {/* Circuit pattern */}
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-20">
                    <pattern id="circuit" width="80" height="80" patternUnits="userSpaceOnUse">
                      <path d="M0,40 L80,40 M40,0 L40,80 M20,20 L60,60 M60,20 L20,60" stroke="white" strokeWidth="1" fill="none"/>
                      <circle cx="40" cy="40" r="3" fill="white" />
                      <circle cx="20" cy="20" r="2" fill="white" />
                      <circle cx="60" cy="60" r="2" fill="white" />
                      <circle cx="60" cy="20" r="2" fill="white" />
                      <circle cx="20" cy="60" r="2" fill="white" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#circuit)" />
                  </svg>
                </div>
                
                <div className="relative max-w-4xl mx-auto text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="inline-block px-4 py-2 mb-4 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium"
                  >
                    Microsoft Power Platform & CoPilot
                  </motion.div>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                  >
                    AI & <span className="text-blue-200">Automation</span>
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
                  >
                    Empower Your Business with Low-Code and AI-Enhanced Automation
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <a 
                      href="#power-automate" 
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
                    fill="#334155" 
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
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r from-gray-600 to-blue-600 shadow-lg">
                      <Cog6ToothIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Low-Code & AI-Enhanced Automation</h2>
                    
                    <div className="prose prose-lg max-w-none text-gray-600">
                      <p>
                        Z4BIZ leverages Microsoft Power Platform and CoPilot to deliver fast, low-code solutions that help businesses automate processes, build custom apps, and gain real-time insights. Our AI-assisted approach ensures that businesses can innovate faster while maintaining operational efficiency, driving growth with lower development costs and quicker implementation.
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
              className="mb-16 bg-gradient-to-r from-slate-100 to-blue-100 rounded-2xl p-8 sm:p-10 shadow-lg border border-slate-200 relative overflow-hidden"
            >
              <div className="absolute inset-0 overflow-hidden opacity-40">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Microsoft Power Platform & CoPilot from Z4BIZ?</h3>
                <p className="text-lg text-slate-700 mb-8">
                  At Z4BIZ, we combine the power of Microsoft's low-code platform with AI-driven capabilities to deliver customized solutions that align with your business goals. Our Hybrid Global Delivery Model ensures fast implementation and cost savings, helping you boost productivity and accelerate innovation.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    "Tailored Solutions", 
                    "Regional Expertise", 
                    "Fast Implementation",
                    "Cost Savings", 
                    "Ongoing Support",
                    "Innovation Focus"
                  ].map((feature) => (
                    <div 
                      key={feature} 
                      className="bg-white/80 backdrop-blur-sm rounded-lg py-3 px-4 text-center text-slate-800 font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Power Platform Services */}
            <div className="mb-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 mb-4 rounded-full bg-slate-100 text-slate-700 text-sm font-medium"
              >
                Our Platform Services
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
              >
                Microsoft Power Platform & CoPilot Solutions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto"
              >
                Comprehensive AI-enhanced automation solutions for modern businesses
              </motion.p>
            </div>

            {/* Service Cards */}
            <motion.div 
              className="space-y-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {powerPlatformServices.map((service) => (
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
                          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                            {service.title}
                          </h2>
                          <div className={`absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r ${service.gradient} group-hover:w-32 transition-all duration-500`}></div>
                        </div>
                        
                        <h3 className={`text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                          {service.subtitle}
                        </h3>
                        
                        <div className="mb-4 inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                          {service.tagline}
                        </div>
                        
                        {/* Description */}
                        <p className="text-slate-700 mb-8 text-base sm:text-lg leading-relaxed">
                          {service.description}
                        </p>
                        
                        {/* Features */}
                        <div className="mb-6 bg-slate-50 rounded-xl p-6">
                          <h3 className={`text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                            Key Benefits of {service.title}
                          </h3>
                          <ul className="space-y-4">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 bg-gradient-to-r ${service.gradient}`}>
                                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                  </svg>
                                </div>
                                <span className="text-slate-700">{benefit}</span>
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
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIAutomationPage;