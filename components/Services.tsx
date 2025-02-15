import React from 'react';
import { motion } from 'framer-motion';
import { 
  CubeTransparentIcon, 
  LightBulbIcon, 
  ComputerDesktopIcon, 
  ChartBarIcon 
} from '@heroicons/react/24/outline';

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

const Services = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 mb-6 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"
          >
            Our Expertise
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-blue-950 mb-6"
          >
            Our Services
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-700/80"
          >
            Expert consulting and technology solutions tailored for your business.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceItems.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100 
                hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} 
                  opacity-10 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:opacity-20 transition-opacity`} />
                
                <div className="flex flex-col gap-6 relative">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center
                    bg-gradient-to-r ${service.gradient} transform transition-all duration-300
                    group-hover:scale-110 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-transparent 
                      group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${service.gradient} transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-blue-700/80 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Learn More Link */}
                  <div className="mt-auto pt-4">
                    <motion.button
                      whileHover={{ x: 5 }}
                      className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} 
                        font-medium flex items-center gap-2`}
                    >
                      Learn more
                      <span className="transform transition-transform group-hover:translate-x-1">→</span>
                    </motion.button>
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} 
                  opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>
    </section>
  );
};

export default Services;