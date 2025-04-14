import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  PresentationChartLineIcon,
  ArrowRightIcon,
  LightBulbIcon,
  GlobeAltIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';
import ServiceNavigation from '../../components/ServiceNavigation';
import Footer from '../../components/Footer';

const esgServices = [
  {
    id: "strategy",
    title: "ESG Strategy Development",
    description: "We help you create a comprehensive ESG strategy aligned with your business objectives, industry standards, and stakeholder expectations.",
    icon: PresentationChartLineIcon,
    gradient: "from-emerald-500 to-teal-600",
    bgPattern: "radial-gradient(circle at 90% 10%, rgba(16, 185, 129, 0.1) 0%, transparent 60%)"
  },
  {
    id: "reporting",
    title: "ESG Reporting & Disclosure",
    description: "Our team guides you through the complex landscape of ESG reporting frameworks including GRI, SASB, TCFD, and helps you prepare comprehensive reports that meet stakeholder requirements.",
    icon: DocumentTextIcon,
    gradient: "from-green-500 to-emerald-600",
    bgPattern: "radial-gradient(circle at 10% 90%, rgba(34, 197, 94, 0.1) 0%, transparent 60%)"
  },
  {
    id: "compliance",
    title: "Regulatory Compliance",
    description: "Stay ahead of evolving ESG regulations with our compliance expertise, ensuring your business meets current requirements and is prepared for future regulatory changes.",
    icon: CheckCircleIcon,
    gradient: "from-teal-500 to-cyan-600",
    bgPattern: "radial-gradient(circle at 90% 50%, rgba(20, 184, 166, 0.1) 0%, transparent 60%)"
  }
];

const benefits = [
  {
    title: "Enhance Brand Reputation",
    description: "Build trust with stakeholders through transparent ESG practices and authentic sustainability initiatives.",
    icon: GlobeAltIcon,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Mitigate Business Risks",
    description: "Identify and address ESG-related risks before they impact your operations or reputation.",
    icon: BriefcaseIcon,
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "Drive Innovation",
    description: "Leverage sustainability challenges to catalyze new products, services, and business models.",
    icon: LightBulbIcon,
    gradient: "from-teal-500 to-cyan-500"
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

const SustainabilityPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Sustainability Consulting | Z4BIZ</title>
        <meta 
          name="description" 
          content="Expert guidance on implementing sustainable business practices and ESG reporting with Z4BIZ." 
        />
      </Head>

      <div className="flex flex-col min-h-screen relative overflow-hidden">
        {/* Global Background Colors and Decorations */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white" />
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-emerald-100 to-transparent opacity-70" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-teal-100 to-transparent opacity-70" />
        </div>
        
        {/* Animated nature-inspired elements */}
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 right-32 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [0.8, 1, 0.8], rotate: [0, -90, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />

        <ServiceNavigation />

        <main className="flex-grow relative z-10 pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            {/* Hero Section */}
            <motion.div 
              className="mb-16 rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative p-8 sm:p-12 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/30 rounded-full transform translate-x-1/3 -translate-y-1/2" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/20 rounded-full transform -translate-x-1/3 translate-y-1/2" />
                  
                  {/* Leaf pattern background */}
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
                    Environmental, Social & Governance
                  </motion.div>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                  >
                    Sustainability <span className="text-emerald-200">Consulting</span>
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg sm:text-xl text-teal-100 mb-8 max-w-3xl mx-auto"
                  >
                    Expert guidance on implementing sustainable business practices and ESG reporting for a better future.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <a 
                      href="#overview" 
                      className="inline-flex items-center px-6 py-3 bg-white text-emerald-600 font-medium rounded-lg shadow-lg hover:bg-emerald-50 transition-colors duration-300 group"
                    >
                      Explore Our Approach
                      <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </motion.div>
                </div>
              </div>
              
              {/* Wave Bottom Border */}
              <div className="h-16 bg-white relative -mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute -top-1 left-0 w-full">
                  <path 
                    fill="#10b981" 
                    fillOpacity="1" 
                    d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,96C672,96,768,128,864,154.7C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                  ></path>
                </svg>
              </div>
            </motion.div>

            {/* Overview Section */}
            <motion.div
              id="overview"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-16 bg-white rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-100"
            >
              <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg">
                      <ChartBarIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-6">Why Sustainability Matters</h2>
                    
                    <div className="prose prose-lg max-w-none text-emerald-800/90">
                      <p>
                        Sustainability is more important than ever due to a combination of environmental, social, and economic challenges 
                        that impact our planet and future generations. Sustainability is no longer an option—it's essential for protecting 
                        the planet, ensuring social equity, and driving economic resilience. Businesses, governments, and individuals all 
                        play a role in making sustainable choices for a better future.
                      </p>
                      <p>
                        At Z4BIZ, we deliver bespoke ESG consulting that aligns with your business goals. Our seasoned experts are with 
                        you every step of the way, from pinpointing what matters most to refining your strategy and ensuring seamless 
                        implementation. Whether it's mastering regulatory compliance or boosting your ESG impact, we're your trusted 
                        partner in driving sustainable success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ESG Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-16"
            >
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-4">The Business Value of ESG</h2>
                <p className="text-base sm:text-lg text-emerald-700/80 max-w-3xl mx-auto">
                  Implementing robust ESG practices delivers tangible benefits that extend beyond regulatory compliance.
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
                    className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-emerald-900 mb-2">{benefit.title}</h3>
                    <p className="text-emerald-700/80">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Our Services */}
            <div className="mb-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 mb-4 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium"
              >
                Our Expertise
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold text-emerald-950 mb-4"
              >
                ESG Consulting Services
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-base sm:text-xl text-emerald-700/80 max-w-3xl mx-auto"
              >
                Comprehensive solutions to address your sustainability challenges and opportunities
              </motion.p>
            </div>

            {/* ESG Services */}
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {esgServices.map((service) => (
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
                        <div className="relative mb-4 pb-2">
                          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900">
                            {service.title}
                          </h2>
                          <div className={`absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r ${service.gradient} group-hover:w-32 transition-all duration-500`}></div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-emerald-700/90 text-base sm:text-lg leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Sustainability Frameworks */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-16 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl p-8 sm:p-10 shadow-lg border border-emerald-200 relative overflow-hidden"
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
                <h3 className="text-2xl font-bold text-emerald-900 mb-6">ESG Frameworks We Support</h3>
                <p className="text-lg text-emerald-800 mb-8">
                  We help your organization navigate and implement the most relevant sustainability frameworks and standards:
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    "Global Reporting Initiative (GRI)", 
                    "Sustainability Accounting Standards Board (SASB)", 
                    "Task Force on Climate-Related Financial Disclosures (TCFD)", 
                    "CDP (formerly Carbon Disclosure Project)",
                    "UN Sustainable Development Goals (SDGs)",
                    "IFRS Sustainability Disclosure Standards",
                    "EU Corporate Sustainability Reporting Directive (CSRD)",
                    "Science Based Targets initiative (SBTi)"
                  ].map((framework) => (
                    <div 
                      key={framework} 
                      className="bg-white/80 backdrop-blur-sm rounded-lg py-3 px-4 text-center text-emerald-800 font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      {framework}
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

export default SustainabilityPage;