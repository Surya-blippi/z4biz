import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  ComputerDesktopIcon, 
  GlobeAltIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  ArrowRightIcon,
  ArrowsRightLeftIcon,
  CogIcon
} from '@heroicons/react/24/outline';
import ServiceNavigation from '../../components/ServiceNavigation';
import Footer from '../../components/Footer';

const developmentTeams = [
  {
    id: "onshore",
    title: "Onshore Development Team",
    description: "Z4BIC enhances your in-house capabilities by seamlessly integrating our skilled engineering, testing, and support specialists into your team. Our experts continuously refine their domain-specific expertise, ensuring smooth collaboration within your existing processes and methodologies. This cooperative model allows you to leverage our advanced R&D and engineering competencies while maximizing the synergy of our combined resources for optimal efficiency and innovation.",
    icon: BuildingOfficeIcon,
    gradient: "from-cyan-500 to-blue-600",
    bgPattern: "radial-gradient(circle at 90% 10%, rgba(6, 182, 212, 0.1) 0%, transparent 60%)",
    features: [
      "Seamless integration with your team",
      "Domain-specific expertise",
      "Smooth collaboration within existing processes",
      "Access to advanced R&D capabilities",
      "Enhanced in-house engineering capacity",
      "Maximized resource synergy"
    ]
  },
  {
    id: "offshore",
    title: "Offshore Development Team",
    description: "Z4BIZ assembles dedicated offshore development teams for businesses looking to build products efficiently, scale rapidly, or enhance their existing teams with top-tier professionals. Our partners gain access to our cutting-edge technology, business expertise, and robust infrastructure while we seamlessly adapt to their development methodologies and requirements. We take full ownership of the development process, ensuring smooth execution, high-quality outcomes, and minimized operational overhead.",
    icon: GlobeAltIcon,
    gradient: "from-blue-500 to-indigo-600",
    bgPattern: "radial-gradient(circle at 10% 90%, rgba(59, 130, 246, 0.1) 0%, transparent 60%)",
    features: [
      "Dedicated development teams",
      "Efficient product development",
      "Rapid scaling capabilities",
      "Access to cutting-edge technology",
      "Seamless adaptation to your methodologies",
      "Full ownership of development process",
      "Minimized operational overhead"
    ]
  }
];

const benefits = [
  {
    title: "Cost Efficiency",
    description: "Reduce overhead and operational costs while maintaining high-quality development standards.",
    icon: CogIcon,
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "Scalability",
    description: "Quickly adjust team size and composition based on your project requirements and business growth.",
    icon: ArrowsRightLeftIcon,
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    title: "Expertise Access",
    description: "Tap into our pool of specialized talent across a wide range of technologies and domains.",
    icon: UserGroupIcon,
    gradient: "from-indigo-500 to-purple-500"
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

const ExtendedITPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Extended IT Solutions | Z4BIZ</title>
        <meta 
          name="description" 
          content="Comprehensive IT support and infrastructure management services by Z4BIZ. Onshore and offshore development teams to enhance your business capabilities." 
        />
      </Head>

      <div className="flex flex-col min-h-screen relative overflow-hidden">
        {/* Global Background Colors and Decorations */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-50 to-white" />
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100 to-transparent opacity-70" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-cyan-100 to-transparent opacity-70" />
        </div>
        
        {/* Animated blobs */}
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 right-32 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [0.8, 1, 0.8], rotate: [0, -90, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />

        <ServiceNavigation />

        <main className="flex-grow relative z-10 pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            {/* Hero Section */}
            <motion.div 
              className="mb-16 rounded-3xl overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative p-8 sm:p-12 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/30 rounded-full transform translate-x-1/3 -translate-y-1/2" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/20 rounded-full transform -translate-x-1/3 translate-y-1/2" />
                  
                  {/* Circuit-like pattern */}
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
                    IT Solutions
                  </motion.div>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                  >
                    Extended <span className="text-cyan-200">IT Services</span>
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
                  >
                    Enhance your business capabilities with our dedicated development teams, working seamlessly with your organization to deliver exceptional results.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <a 
                      href="#onshore" 
                      className="inline-flex items-center px-6 py-3 bg-white text-cyan-600 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition-colors duration-300 group mr-4"
                    >
                      Onshore Teams
                      <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                    <a 
                      href="#offshore" 
                      className="inline-flex items-center px-6 py-3 bg-blue-900/30 text-white border border-white/30 backdrop-blur-sm font-medium rounded-lg shadow-lg hover:bg-blue-900/50 transition-colors duration-300 group mt-4 sm:mt-0"
                    >
                      Offshore Teams
                      <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </motion.div>
                </div>
              </div>
              
              {/* Wave Bottom Border */}
              <div className="h-16 bg-white relative -mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute -top-1 left-0 w-full">
                  <path 
                    fill="#0891b2" 
                    fillOpacity="1" 
                    d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,128C672,149,768,171,864,165.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                  ></path>
                </svg>
              </div>
            </motion.div>

            {/* IT Teams Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-16"
            >
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">Why Choose Our Extended IT Services</h2>
                <p className="text-base sm:text-lg text-blue-700/80 max-w-3xl mx-auto">
                  Tailored solutions designed to enhance your development capabilities, reduce costs, and accelerate your digital initiatives.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{benefit.title}</h3>
                    <p className="text-blue-700/80">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Development Teams */}
            <motion.div 
              className="space-y-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {developmentTeams.map((team) => (
                <motion.div
                  key={team.id}
                  variants={itemVariants}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-500 group"
                  id={team.id}
                  style={{ background: `${team.bgPattern}, white` }}
                >
                  <div className="p-6 sm:p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${team.gradient} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <team.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="flex-grow">
                        {/* Title with gradient underline */}
                        <div className="relative mb-4 pb-2">
                          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">
                            {team.title}
                          </h2>
                          <div className={`absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r ${team.gradient} group-hover:w-32 transition-all duration-500`}></div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-blue-700/90 mb-8 text-base sm:text-lg leading-relaxed">
                          {team.description}
                        </p>
                        
                        {/* Features */}
                        <div className="mb-6 bg-blue-50/50 rounded-xl p-6">
                          <h3 className={`text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${team.gradient}`}>
                            Key Benefits
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {team.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start">
                                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 bg-gradient-to-r ${team.gradient}`}>
                                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                  </svg>
                                </div>
                                <span className="text-blue-700/90">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Technology Stack Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-16 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl p-8 sm:p-10 shadow-lg border border-blue-200 relative overflow-hidden"
            >
              <div className="absolute inset-0 overflow-hidden opacity-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                  <defs>
                    <pattern id="tech-pattern" patternUnits="userSpaceOnUse" width="10" height="10">
                      <path d="M-3,3 l6,0" stroke="#0e7490" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect x="0" y="0" width="100" height="100" fill="url(#tech-pattern)" />
                </svg>
              </div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Technology Expertise</h3>
                <p className="text-lg text-blue-800 mb-8">
                  Our development teams bring a wealth of expertise across numerous technologies and domains, ensuring we can meet your specific requirements:
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    "Microsoft Dynamics 365", "Java", ".NET", "Python", "React", "Angular", "Node.js", 
                    "Cloud Services (AWS, Azure)", "DevOps", "Mobile Development", "AI & Machine Learning", "IoT Solutions"
                  ].map((tech, index) => (
                    <div 
                      key={tech} 
                      className="bg-white/80 backdrop-blur-sm rounded-lg py-3 px-4 text-center text-blue-800 font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      {tech}
                    </div>
                  ))}
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

export default ExtendedITPage;