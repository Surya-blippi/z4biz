import React from 'react';
import { motion } from 'framer-motion';
import { CubeTransparentIcon, LightBulbIcon, ComputerDesktopIcon, ChartBarIcon, SquaresPlusIcon } from '@heroicons/react/24/outline'; // Import SquaresPlusIcon
import Link from 'next/link';

const serviceItems = [
  {
    title: "Dynamics365 Expert Consulting",
    description: "Specialized consulting services for Microsoft Dynamics 365 implementation, customization, and optimization.",
    icon: CubeTransparentIcon,
    gradient: "from-blue-500 to-indigo-500",
    link: "/services/dynamics365"
  },
  { // Added ZOHO One Service
    title: "ZOHO One Implementation",
    description: "Comprehensive setup and integration of the ZOHO One suite for streamlined business operations.",
    icon: SquaresPlusIcon, // Using SquaresPlusIcon for ZOHO One
    gradient: "from-orange-500 to-amber-500", // New distinct gradient
    link: "/services/zoho-one"
  },
  {
    title: "Envisioning Workshops",
    description: "Interactive workshops designed to accelerate your digital transformation journey.",
    icon: LightBulbIcon,
    gradient: "from-purple-500 to-pink-500",
    link: "/services/envisioning-workshops"
  },
  {
    title: "Extended IT",
    description: "Comprehensive IT support and infrastructure management services.",
    icon: ComputerDesktopIcon,
    gradient: "from-cyan-500 to-blue-500",
    link: "/services/extended-it"
  },
  {
    title: "Sustainability Consulting",
    description: "Expert guidance on implementing sustainable business practices and ESG reporting.",
    icon: ChartBarIcon,
    gradient: "from-emerald-500 to-teal-500",
    link: "/services/sustainability"
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white"
    >
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white" />

      {/* Content Layer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 mb-4 rounded-full bg-blue-100 text-blue-700 text-sm font-medium glow"
          >
            Our Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-blue-950 mb-4 glow"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-xl text-blue-700/80 glow"
          >
            Expert consulting and technology solutions tailored for your business.
          </motion.p>
        </div>

        {/* Service Cards Grid */}
        {/* Updated grid to potentially handle 5 items better on larger screens, e.g., lg:grid-cols-3 */}
        {/* Keeping md:grid-cols-2 for consistency, the 5th item will be centered on its own row on md */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {serviceItems.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // Apply specific grid styling for the last item if it's odd and on md+ screens
              className={`group glow ${
                serviceItems.length % 2 !== 0 && index === serviceItems.length - 1
                  ? 'md:col-span-2 lg:col-span-1 md:max-w-lg md:mx-auto' // Center last item on md if odd total
                  : ''
              }`}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden">
                {/* Decorative Gradient Blob */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-2xl transform translate-x-6 -translate-y-6 group-hover:opacity-20 transition-opacity`}
                />
                <div className="flex flex-col gap-3 relative h-full">
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${service.gradient} transform transition-all duration-300 group-hover:scale-110 shadow-lg`}
                  >
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
                  </div>
                  {/* Text Content */}
                  <div className="flex-grow"> {/* Allow text to take available space */}
                    <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-1 transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-blue-700/80 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  {/* Button */}
                  <div className="mt-auto pt-4"> {/* Push button to bottom */}
                    <Link href={service.link} passHref>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full justify-center sm:w-auto px-4 py-2 rounded-lg bg-gradient-to-r ${service.gradient} text-white font-medium flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300`}
                      >
                        Learn more
                        <span className="transform transition-transform group-hover:translate-x-1">→</span>
                      </motion.button>
                    </Link>
                  </div>
                </div>
                {/* Bottom Border Highlight on Hover */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-10 left-0 w-56 h-56 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-0 w-56 h-56 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        {/* Optional: Add another blob for visual balance */}
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-3000" />
      </div>
    </section>
  );
};

export default ServicesSection;