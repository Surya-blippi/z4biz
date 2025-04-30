import React, { useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  LightBulbIcon,
  UserGroupIcon,
  DocumentTextIcon,
  MapIcon,
  PresentationChartBarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
// import ServiceNavigation from '../../components/ServiceNavigation'; // REMOVED
import Navigation from '../../components/Navigation'; // ADDED
import Footer from '../../components/Footer';

const workshopPhases = [
  // ... (keep array content the same)
  {
    id: "preparation",
    title: "Pre-Workshop Preparation Phase",
    description: "We gather key information about your business, industry, and challenges to customize the workshop experience and ensure maximum value.",
    icon: DocumentTextIcon,
    gradient: "from-purple-500 to-pink-600",
    bgPattern: "radial-gradient(circle at 90% 10%, rgba(168, 85, 247, 0.1) 0%, transparent 60%)"
  },
  {
    id: "kickoff",
    title: "Kick-off and Alignment",
    description: "We begin with aligning stakeholders around key business objectives, challenges, and desired outcomes to establish a shared vision.",
    icon: UserGroupIcon,
    gradient: "from-pink-500 to-rose-600",
    bgPattern: "radial-gradient(circle at 10% 90%, rgba(244, 114, 182, 0.1) 0%, transparent 60%)"
  },
  {
    id: "prioritization",
    title: "Prioritization and Roadmap",
    description: "Collaboratively identify, evaluate, and prioritize digital transformation initiatives based on business impact and feasibility.",
    icon: MapIcon,
    gradient: "from-amber-500 to-orange-600",
    bgPattern: "radial-gradient(circle at 90% 50%, rgba(245, 158, 11, 0.1) 0%, transparent 60%)"
  },
  {
    id: "workshop",
    title: "Interactive Workshops",
    description: "Engage in structured, hands-on sessions to explore solutions, map processes, and define technical requirements for implementation.",
    icon: LightBulbIcon,
    gradient: "from-purple-500 to-indigo-600",
    bgPattern: "radial-gradient(circle at 10% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)"
  },
  {
    id: "executive",
    title: "Executive Buy-In",
    description: "Present findings, recommendations, and a clear implementation roadmap to executive stakeholders to secure support and approval.",
    icon: PresentationChartBarIcon,
    gradient: "from-cyan-500 to-blue-600",
    bgPattern: "radial-gradient(circle at 90% 70%, rgba(6, 182, 212, 0.1) 0%, transparent 60%)"
  }
];

const outcomes = [
  // ... (keep array content the same)
  "Understand business objectives, challenges and opportunities for improvement",
  "Provide content to drive the solution envisioning report",
  "Provide detail level inputs that can be submitted for Senior Stakeholder Approvals",
  "Establish the base specifications for the Design and Development of the Final Solution"
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

const EnvisioningWorkshopsPage: React.FC = () => {
  // Function to handle smooth scrolling with offset
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Calculate header offset (navbar height + additional padding)
      const headerOffset = 100; // Adjust this value based on your navbar height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Add global smooth scrolling CSS
  useEffect(() => {
    // This ensures smoother scrolling for all hash links
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <>
      <Head>
        <title>Envisioning Workshops | Z4BIZ</title>
        <meta
          name="description"
          content="Interactive workshops designed to accelerate your digital transformation journey with Z4BIZ."
        />
      </Head>

      <div className="flex flex-col min-h-screen relative overflow-hidden">
        {/* Global Background Colors and Decorations */}
        {/* ... (keep background styles the same) ... */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white" />
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-100 to-transparent opacity-70" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-pink-100 to-transparent opacity-70" />
        </div>

        {/* Animated blobs */}
        {/* ... (keep animated blobs the same) ... */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-32 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
              className="mb-16 rounded-3xl overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl"
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
                    Digital Transformation
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                  >
                    Envisioning <span className="text-pink-200">Workshops</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg sm:text-xl text-purple-100 mb-8 max-w-3xl mx-auto"
                  >
                    Align stakeholders, explore business challenges, and define a roadmap for achieving
                    your digital transformation goals.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <a
                      href="#overview"
                      className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-medium rounded-lg shadow-lg hover:bg-purple-50 transition-colors duration-300 group"
                      onClick={(e) => handleSmoothScroll(e, 'overview')}
                    >
                      Discover Our Approach
                      <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </motion.div>
                </div>
              </div>

              {/* Wave Bottom Border */}
              <div className="h-16 bg-white relative -mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute -top-1 left-0 w-full">
                  <path
                    fill="#9333ea" // Match hero bg gradient start
                    fillOpacity="1"
                    d="M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,186.7C672,181,768,203,864,202.7C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                  ></path>
                </svg>
              </div>
            </motion.div>

            {/* Overview Section */}
            {/* ... (keep overview section the same) ... */}
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
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg">
                      <LightBulbIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h2 className="text-2xl sm:text-3xl font-bold text-purple-900 mb-6">Understanding Our Envisioning Workshops</h2>

                    <div className="prose prose-lg max-w-none text-purple-800/90">
                      <p>
                        Our Envisioning Workshops are designed to align stakeholders, explore business challenges,
                        and define a roadmap for achieving desired outcomes.
                      </p>
                      <p>
                        Solution envisioning involves going into further details to understand the business goals,
                        prioritize the top digital transformation initiatives and study and document the To-Be processes
                        based on desired process automation goals in order to define an optimal solution that will meet
                        the Digital Transformation objectives.
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-purple-100">
                      <h3 className="text-xl font-semibold text-purple-900 mb-4">Workshop Outcomes</h3>
                      <ul className="space-y-3">
                        {outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 bg-gradient-to-r from-purple-500 to-pink-600">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                              </svg>
                            </div>
                            <span className="text-purple-700/90">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Our Approach Section */}
            {/* ... (keep approach section the same) ... */}
            <div className="mb-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 mb-4 rounded-full bg-purple-100 text-purple-700 text-sm font-medium"
              >
                Our Methodology
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold text-purple-950 mb-4"
              >
                Envisioning Workshop Phases
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-base sm:text-xl text-purple-700/80 max-w-3xl mx-auto"
              >
                A structured approach to ensure your business makes informed decisions, minimizing risks and maximizing ROI.
              </motion.p>
            </div>

            {/* Workshop Phases */}
            {/* ... (keep workshop phases section the same) ... */}
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {workshopPhases.map((phase, index) => (
                <motion.div
                  key={phase.id}
                  variants={itemVariants}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-500 group"
                  id={phase.id}
                  style={{ background: `${phase.bgPattern}, white` }}
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-r ${phase.gradient} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <phase.icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex-grow">
                        {/* Title with gradient underline */}
                        <div className="relative mb-3 pb-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-purple-900">
                            {index + 1}. {phase.title}
                          </h3>
                          <div className={`absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r ${phase.gradient} group-hover:w-32 transition-all duration-500`}></div>
                        </div>

                        {/* Description */}
                        <p className="text-purple-700/90 text-base sm:text-lg leading-relaxed">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Value Proposition */}
            {/* ... (keep value proposition section the same) ... */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 sm:p-10 shadow-lg border border-purple-200 relative overflow-hidden"
            >
              <div className="absolute inset-0 overflow-hidden opacity-40">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid-value" width="40" height="40" patternUnits="userSpaceOnUse"> {/* Changed id */}
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-value)" /> {/* Changed id */}
                </svg>
              </div>

              <div className="relative">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                    <LightBulbIcon className="w-10 h-10 text-white" />
                  </div>

                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-2xl font-bold text-purple-900 mb-3">Expert-Led Digital Transformation</h3>
                    <p className="text-lg text-purple-800">
                      Use our Consulting Expertise to design a structured approach that will ensure your businesses makes informed decisions,
                      minimizing risks and maximizing ROI.
                    </p>
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

export default EnvisioningWorkshopsPage;