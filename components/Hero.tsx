import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';

// Keep serviceCards and fadeIn the same
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
  zIndex: number; // Added zIndex for clearer stacking control
}

// Adjusted cardVariants - Note: Stacking logic remains, responsiveness comes from layout constraints
const cardVariants = {
  // Initial position off-screen to the right
  initial: (direction: number) => ({
    x: direction > 0 ? 300 : -300, // Start offscreen based on navigation direction
    opacity: 0,
    scale: 0.8,
    rotateY: 15,
  }),
  // Animate to the calculated position
  animate: (custom: CardAnimationProps) => ({
    x: custom.xPosition,
    opacity: custom.opacity,
    scale: custom.scale,
    rotateY: custom.rotateY,
    zIndex: custom.zIndex, // Apply calculated zIndex
    transition: { type: "spring", stiffness: 300, damping: 30 },
  }),
  // Exit animation off-screen to the left
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300, // Exit offscreen based on navigation direction
    opacity: 0,
    scale: 0.8,
    rotateY: -15,
    zIndex: 0, // Ensure exiting card is behind
    transition: { type: "spring", stiffness: 300, damping: 30 },
  }),
};


interface HeroProps {
  scrollToSection: (id: string) => void;
}

const EnhancedHero: React.FC<HeroProps> = ({ scrollToSection }) => {
  // Use state for both index and direction for better animation control
  const [[currentCard, direction], setCurrent] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newCardIndex = (currentCard + newDirection + serviceCards.length) % serviceCards.length;
    setCurrent([newCardIndex, newDirection]);
  };

  const nextCard = () => paginate(1);
  const prevCard = () => paginate(-1);

  return (
    // *** UPDATED HERE: Increased top padding (pt-24 and md:pt-28) ***
    <section className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden">
      {/* pt-16 changed to pt-24 */}
      {/* md:pt-20 changed to md:pt-28 */}
      {/* Increased padding ensures content starts below the fixed navigation bar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={{
            animate: { transition: { staggerChildren: 0.1 } },
            initial: {},
          }}
          initial="initial"
          animate="animate"
          // Adjusted bottom margin for mobile
          className="text-center mb-12 md:mb-16"
        >
          {/* This is the label that was likely getting cut off */}
          <motion.div
            variants={fadeIn}
            className="inline-block px-4 py-2 mb-4 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"
          >
            Enterprise Solutions & Consulting
          </motion.div>
          <motion.h1
            variants={fadeIn}
            // Responsive text size
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 text-transparent bg-clip-text"
          >
            Transform Your Business
            <br className="hidden sm:inline" /> {/* Keep break on larger screens */}
            With Expert Solutions
          </motion.h1>
          <motion.p
            variants={fadeIn}
            // Responsive text size and margin
            className="text-base sm:text-lg text-blue-800/80 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            {/* You can add a short subtitle here if needed */}
            Explore our tailored services designed to drive growth and efficiency.
          </motion.p>
        </motion.div>

        {/* Card Carousel */}
        {/* Adjusted height and margin for responsiveness */}
        <div className="relative w-full min-h-[550px] md:min-h-[600px] mt-8 md:mt-12 flex items-center justify-center">
          {/* Background Elements - Hidden on xs screens */}
          <div className="absolute inset-0 hidden sm:block">
            <div className="absolute top-1/4 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20" />
            <div className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20" />
          </div>

          {/* Card Navigation Button - Left */}
          {/* Adjusted positioning and padding for mobile */}
          <div className="absolute left-1 md:left-2 lg:left-4 top-1/2 -translate-y-1/2 z-30"> {/* Increased z-index */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevCard}
              aria-label="Previous Card"
              // Adjusted padding and icon size
              className="p-2 md:p-3 bg-white rounded-full shadow-lg text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
          </div>

          {/* AnimatePresence for handling enter/exit animations */}
          {/* Use custom prop to pass direction */}
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            {/* Render only the current card based on state */}
             {(() => {
                const card = serviceCards[currentCard];
                // Always render the current card in the center
                const customProps: CardAnimationProps = {
                    xPosition: 0,
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                    zIndex: 2 // Highest zIndex for the active card
                };

                return (
                  <motion.div
                    key={currentCard} // Key changes when currentCard changes, triggering animation
                    custom={customProps} // Pass animation props
                    variants={cardVariants}
                    initial="initial" // Use variant for entry
                    animate="animate" // Use variant for active state
                    exit="exit"     // Use variant for exit
                    drag="x" // Optional: allow dragging
                    dragConstraints={{ left: 0, right: 0 }} // Optional: constrain drag
                    dragElastic={1} // Optional: drag elasticity
                    onDragEnd={(e, { offset, velocity }) => { // Optional: swipe gesture
                        const swipe = Math.abs(offset.x) * velocity.x;
                        if (swipe < -10000) {
                            paginate(1); // Swipe left, go next
                        } else if (swipe > 10000) {
                            paginate(-1); // Swipe right, go prev
                        }
                    }}
                    // Apply calculated zIndex and position absolutely
                    style={{ position: 'absolute', zIndex: customProps.zIndex }}
                    // Responsive width and general card styling
                    className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
                  >
                    {/* Card Content Container */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl border border-blue-100 overflow-hidden"> {/* Added overflow-hidden */}
                      {/* Flex container for image and text (stacks vertically on mobile) */}
                      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                        {/* Image Container */}
                        <div className="w-full lg:w-72 xl:w-80 flex-shrink-0">
                          <div className="relative w-full aspect-video lg:aspect-[4/3] rounded-lg md:rounded-2xl overflow-hidden">
                            <img
                              src={card.imagePath}
                              alt={card.imageAlt}
                              className="w-full h-full object-cover"
                              // Optimization: Add loading="lazy" if images are below the fold initially
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                          </div>
                        </div>

                        {/* Text Content Container */}
                        <div className="flex-1">
                          <div className="mb-4 md:mb-6">
                            {/* Responsive heading size */}
                            <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
                              {card.title}
                            </h3>
                          </div>
                          {/* Responsive paragraph size */}
                          <p className="text-blue-700/80 leading-relaxed text-base md:text-lg">
                            {card.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
             })()}
          </AnimatePresence>

          {/* Card Navigation Button - Right */}
          {/* Adjusted positioning and padding */}
          <div className="absolute right-1 md:right-2 lg:right-4 top-1/2 -translate-y-1/2 z-30"> {/* Increased z-index */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextCard}
              aria-label="Next Card"
              // Adjusted padding and icon size
              className="p-2 md:p-3 bg-white rounded-full shadow-lg text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
          </div>

          {/* Progress Indicators - Positioned below the card area */}
           <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
             {serviceCards.map((_, index) => (
               <button
                 key={index}
                 onClick={() => setCurrent([index, index > currentCard ? 1 : -1])} // Update state with direction
                 aria-label={`Go to card ${index + 1}`}
                 className={`h-2 transition-all duration-300 rounded-full ${
                   currentCard === index ? 'w-6 md:w-8 bg-blue-600' : 'w-2 bg-blue-200 hover:bg-blue-300'
                 }`}
               />
             ))}
           </div>
        </div>

        {/* Call to Action Buttons */}
        <motion.div
          variants={fadeIn} // Reuse fadeIn animation
          initial="initial"
          animate="animate"
          // Added transition delay for staggered effect after carousel
          transition={{ delay: 0.3 }}
          // Stack vertically on mobile, row on sm+, adjusted top margin
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-20 md:mt-24"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('services')}
            // Responsive padding and text size
            className="group w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm md:text-base font-medium rounded-full hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Our Services</span>
            <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('footer')}
             // Responsive padding and text size
            className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 backdrop-blur-md bg-white/70 text-blue-600 text-sm md:text-base font-medium rounded-full border border-blue-200 hover:border-blue-300 hover:bg-white/90 transition-all"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedHero;