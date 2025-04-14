import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';

const serviceCards = [
  {
    title: "Consulting Services",
    content: "We offer functional and domain consulting as well as advisory services on Dynamics 365 platforms. Our expert Solution Architects and Functional Consultants provide tailored guidance to help you maximize the value of your investment in Dynamics 365. With over 15 years of experience across complex, multi-country, and multi-entity implementations, our senior consultants bring unparalleled expertise to ensure successful outcomes.",
    imageAlt: "Enterprise Consulting Services",
    imagePath: "/images/consulting-services.jpg"
  },
  {
    title: "Industry Verticals and Product Development",
    content: "We enhance CRM platforms by delivering industry-specific vertical and horizontal solutions that automate end-to-end operational processes for businesses not fully aligned with standard enterprise ERP and CRM systems. Our vertical solutions for Dynamics 365 and Zoho CRM complement your existing investments, seamlessly integrating with your business applications to enforce industry best practices across all operational processes.",
    imageAlt: "Industry Solutions Development",
    imagePath: "/images/industry-verticals.jpg"
  },
  {
    title: "ESG & Data Solutions",
    content: "Drive Sustainability and Data Excellence. Our solution 4Scope helps organizations simplify their ESG reporting while ensuring alignment with top frameworks like GRI, SASB, and IFRS. Paired with expert consulting, 4Scope empowers businesses to meet regulatory requirements and engage stakeholders effectively. Our solution 4Vue is an AI-driven data engineering platform that streamlines data collection, transformation, and governance. With 4Vue, businesses can connect multiple data sources, automate data pipelines, and derive actionable insights from their data.",
    imageAlt: "ESG and Data Analytics",
    imagePath: "/images/esg-solutions.jpg"
  }
];

const fadeIn = { 
  initial: { opacity: 0, y: 20 }, 
  animate: { opacity: 1, y: 0 }
};

// Define interface for custom animation parameter
interface CardAnimationProps {
  xPosition: number;
  opacity: number;
  scale: number;
  rotateY: number;
}

const cardVariants = {
  initial: { x: 300, opacity: 0 },
  animate: (custom: CardAnimationProps) => ({
    x: custom.xPosition,
    opacity: custom.opacity,
    scale: custom.scale,
    rotateY: custom.rotateY,
  }),
  exit: { x: -300, opacity: 0 }
};

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const EnhancedHero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % serviceCards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + serviceCards.length) % serviceCards.length);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 pt-20 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={{
            animate: { transition: { staggerChildren: 0.1 } },
            initial: {},
          }}
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeIn}
            className="inline-block px-4 py-2 mb-4 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"
          >
            Enterprise Solutions & Consulting
          </motion.div>
          <motion.h1 
            variants={fadeIn}
            className="text-4xl sm:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 text-transparent bg-clip-text"
          >
            Transform Your Business
            <br />
            With Expert Solutions
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-lg text-blue-800/80 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
          </motion.p>
        </motion.div>

        {/* Card Carousel */}
        <div className="relative w-full h-[600px] mt-12">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20" />
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20" />
          </div>

          {/* Card Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevCard}
                className="p-3 bg-white rounded-full shadow-lg text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </motion.button>
            </div>

            <AnimatePresence mode="popLayout">
              {serviceCards.map((card, index) => {
                const position = (index - currentCard + serviceCards.length) % serviceCards.length;
                const isActive = position === 0;
                const xPosition = position === 0 ? 0 : position === 1 ? 60 : position === 2 ? 120 : 160;
                const scale = isActive ? 1 : 0.8;
                const opacity = position >= 3 ? 0 : 1;
                const rotateY = position === 0 ? 0 : 5;

                return (
                  <motion.div
                    key={card.title}
                    custom={{ xPosition, scale, opacity, rotateY }}
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{ position: 'absolute', width: '100%', maxWidth: '900px' }}
                    className={isActive ? 'z-10' : 'z-0'}
                  >
                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-blue-100">
                      <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-80 flex-shrink-0">
                          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                            <img 
                              src={card.imagePath} 
                              alt={card.imageAlt}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="mb-8">
                            <h3 className="text-3xl font-bold text-blue-900">
                              {card.title}
                            </h3>
                          </div>
                          
                          <p className="text-blue-700/80 leading-relaxed text-lg">
                            {card.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            <div className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextCard}
                className="p-3 bg-white rounded-full shadow-lg text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {serviceCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  currentCard === index ? 'w-8 bg-blue-600' : 'w-2 bg-blue-200 hover:bg-blue-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action Buttons */}
        <motion.div 
          variants={fadeIn}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('services')}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Our Services</span>
            <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('footer')}
            className="px-8 py-4 backdrop-blur-md bg-white/70 text-blue-600 rounded-full border border-blue-200 hover:border-blue-300 hover:bg-white/90 transition-all"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedHero;