// components/AboutUs.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

type ServiceCard = {
  title: string;
  content: string;
};

interface AboutUsProps {
  serviceCards: ServiceCard[];
  currentCard: number;
  setCurrentCard: (index: number) => void;
}

// Variants for card animations
const cardVariants = {
  initial: { x: 1000, opacity: 0 },
  animate: (custom: { xPosition: number; scale: number; opacity: number }) => ({
    x: custom.xPosition,
    opacity: custom.opacity,
    scale: custom.scale,
  }),
  exit: { x: -1000, opacity: 0 },
};

const AboutUs = ({ serviceCards, currentCard, setCurrentCard }: AboutUsProps) => {
  const nextCard = () => {
    setCurrentCard((currentCard + 1) % serviceCards.length);
  };

  const prevCard = () => {
    setCurrentCard((currentCard - 1 + serviceCards.length) % serviceCards.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white" />

      {/* Decorative Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header & Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-5xl font-bold text-blue-950 mb-4">About Us</h2>
          <p className="text-xl text-blue-700/80">
            We are dedicated to transforming ideas into innovative solutions.
            Learn more about our journey and commitment to excellence.
          </p>
        </motion.div>

        {/* Main Content Area with Side Navigation */}
        <div className="relative flex items-center justify-center gap-12">
          {/* Left Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevCard}
            className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg text-white hover:from-blue-600 hover:to-indigo-600 transition-colors z-20 flex-shrink-0"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </motion.button>

          {/* Card Stack Display */}
          <div className="relative w-[800px] h-[400px] flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {serviceCards.map((card, index) => {
                // Calculate the relative position in the stack
                const position = (index - currentCard + serviceCards.length) % serviceCards.length;
                const isActive = position === 0;
                // Adjust x position, scale, and opacity based on stack order
                const xPosition = position === 0 ? 0 : position === 1 ? 40 : position === 2 ? 80 : 100;
                const scale = isActive ? 1 : 0.9;
                const opacity = position >= 3 ? 0 : 1;
                const zIndex = 10 - position;

                return (
                  <motion.div
                    key={card.title}
                    custom={{ xPosition, scale, opacity }}
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{ zIndex, position: 'absolute', width: '100%' }}
                  >
                    <div className={`bg-white/95 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-blue-100
                      ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
                    >
                      <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                          <div className="w-1 h-8 bg-blue-600 rounded-full" />
                          <h3 className="text-2xl font-bold text-blue-900">
                            {card.title}
                          </h3>
                        </div>
                        <p className="text-blue-700/80 leading-relaxed pl-6 text-lg">
                          {card.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextCard}
            className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg text-white hover:from-blue-600 hover:to-indigo-600 transition-colors z-20 flex-shrink-0"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-12 gap-3">
          {serviceCards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCard(index)}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentCard === index 
                  ? 'w-8 bg-blue-600' 
                  : 'w-2 bg-blue-200 hover:bg-blue-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
