import React from 'react';
import { motion } from 'framer-motion';
import { CubeTransparentIcon, LightBulbIcon, ComputerDesktopIcon, ChartBarIcon, SquaresPlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Define the service items array
const serviceItems = [
  {
    title: "Dynamics365 Expert Consulting",
    description: "Specialized consulting services for Microsoft Dynamics 365 implementation, customization, and optimization.",
    icon: CubeTransparentIcon,
    gradient: "from-blue-500 to-indigo-500",
    link: "/services/dynamics365"
  },
  {
    title: "ZOHO One Implementation",
    description: "Comprehensive setup and integration of the ZOHO One suite for streamlined business operations.",
    icon: SquaresPlusIcon,
    gradient: "from-orange-500 to-amber-500",
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

// Define the ServicesSection component
const ServicesSection: React.FC = () => {
  const isOddNumberOfItems = serviceItems.length % 2 !== 0; // Will be true for 5 items

  return (
    <section
      id="services"
      className="py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white"
    >
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white pointer-events-none" />

      {/* Content Layer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 mb-4 glow"
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

        {/* Service Cards Grid - Using md:grid-cols-2, last item spans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {serviceItems.map((service, index) => {
            const isLastItem = index === serviceItems.length - 1;

            // Apply spanning class only to the last item if the total is odd
            const spanClass =
              isOddNumberOfItems && isLastItem ? 'md:col-span-2' : '';

            // Apply max-width and centering only to the card itself when it spans
            const cardStylingClass =
              isOddNumberOfItems && isLastItem ? 'md:max-w-2xl md:mx-auto' : '';

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                // Apply span class to the grid item container
                className={`group glow flex ${spanClass}`} // flex helps align card height
              >
                {/* The actual card */}
                {/* Apply card-specific styling (like max-width when spanning) */}
                <div className={`w-full bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden flex flex-col ${cardStylingClass}`}>
                   {/* Decorative Gradient Blob */}
                   <div
                     className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-2xl transform translate-x-6 -translate-y-6 group-hover:opacity-20 transition-opacity duration-300`}
                     aria-hidden="true"
                   />
                   {/* Top part: Icon */}
                   <div className="flex-shrink-0 mb-4">
                     <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${service.gradient} transform transition-all duration-300 group-hover:scale-110 shadow-lg`}>
                       <service.icon className="w-6 h-6 text-white" aria-hidden="true" />
                     </div>
                   </div>
                   {/* Middle part: Text content - Allow this to grow */}
                   <div className="flex-grow mb-4">
                     <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2 transition-colors duration-300 group-hover:text-blue-700">
                       {service.title}
                     </h3>
                     <p className="text-sm sm:text-base text-blue-700/80 leading-relaxed">
                       {service.description}
                     </p>
                   </div>
                   {/* Bottom part: Button - Pushed to the bottom */}
                   <div className="mt-auto flex-shrink-0 pt-4">
                     <Link href={service.link} passHref legacyBehavior>
                       <motion.a
                         whileHover={{ scale: 1.03 }}
                         whileTap={{ scale: 0.98 }}
                         className={`inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-gradient-to-r ${service.gradient} text-white text-sm sm:text-base font-medium shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto`}
                       >
                         Learn more
                         <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                       </motion.a>
                     </Link>
                   </div>
                   {/* Bottom Border Highlight on Hover */}
                   <div
                     className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                     aria-hidden="true"
                   />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background Decorative Blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-10 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-1/4 w-56 h-56 bg-cyan-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000" />
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-3000" />
      </div>
    </section>
  );
};

export default ServicesSection;