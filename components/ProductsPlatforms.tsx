import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HomeIcon, ChartBarIcon, DocumentTextIcon, ServerIcon, ShieldCheckIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

const productItems = [
  {
    title: "Z-Estate",
    description: "Real Estate Property Management.",
    icon: HomeIcon,
    gradient: "from-green-500 to-teal-500",
    link: "/products/zestate"
  },
  {
    title: "Z-Estate-FM",
    description: "Facility Management Across Industries.",
    icon: ChartBarIcon,
    gradient: "from-orange-500 to-yellow-500",
    link: "/products/zestatefm"
  },
  {
    title: "Data",
    description: "Data Platforms.",
    icon: ServerIcon,
    gradient: "from-indigo-500 to-blue-500",
    link: "/products/data"
  },
  {
    title: "ESG",
    description: "Sustainability & Compliance Solutions.",
    icon: ShieldCheckIcon,
    gradient: "from-purple-500 to-pink-500",
    link: "/products/esg"
  },
  {
    title: "AI & Automation",
    description: "Intelligent Process Automation.",
    icon: Cog6ToothIcon,
    gradient: "from-gray-500 to-blue-500",
    link: "/products/ai-automation"
  }
];

const ProductsPlatforms: React.FC = () => {
  return (
    <section id="products" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50 to-white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 mb-4 rounded-full bg-green-100 text-green-700 text-sm font-medium glow"
          >
            Our Products &amp; Platforms
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-green-900 mb-4 glow"
          >
            Products &amp; Platforms
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-xl text-green-700/80 glow"
          >
            Innovative solutions for modern business challenges.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {productItems.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glow"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${product.gradient} opacity-10 rounded-full blur-2xl transform translate-x-6 -translate-y-6 group-hover:opacity-20 transition-opacity`} />
                <div className="flex flex-col gap-3 relative h-full">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-r ${product.gradient} transform transition-all duration-300 group-hover:scale-110 shadow-lg`}>
                    <product.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-1 transition-all duration-300">
                      {product.title}
                    </h3>
                    <p className="text-sm sm:text-base text-green-700/80 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-auto pt-4">
                    <Link href={product.link}>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className={`px-4 py-2 rounded-lg bg-gradient-to-r ${product.gradient} text-white font-medium flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 w-full justify-center sm:w-auto`}
                      >
                        Learn more
                        <span className="transform transition-transform group-hover:translate-x-1">→</span>
                      </motion.button>
                    </Link>
                  </div>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-56 h-56 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-0 w-56 h-56 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>
    </section>
  );
};

export default ProductsPlatforms;