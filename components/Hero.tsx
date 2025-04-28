import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRightIcon, ChevronLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

// --- Data remains the same - Using ORIGINAL text ---
const serviceCards = [
    {
        id: 1,
        title: "Consulting Services",
        content: "We offer functional and domain consulting as well as advisory services on Dynamics 365 platforms. Our expert Solution Architects and Functional Consultants provide tailored guidance to help you maximize the value of your investment in Dynamics 365. With over 15 years of experience across complex, multi-country, and multi-entity implementations, our senior consultants bring unparalleled expertise to ensure successful outcomes.",
        imageAlt: "Enterprise Consulting Services",
        imagePath: "/images/consulting-services.jpg"
    },
    {
        id: 2,
        title: "Industry Verticals and Product Development",
        content: "We enhance CRM platforms by delivering industry-specific vertical and horizontal solutions that automate end-to-end operational processes for businesses not fully aligned with standard enterprise ERP and CRM systems. Our vertical solutions for Dynamics 365 and Zoho CRM complement your existing investments, seamlessly integrating with your business applications to enforce industry best practices across all operational processes.",
        imageAlt: "Industry Solutions Development",
        imagePath: "/images/industry-verticals.jpg"
    },
    {
        id: 3,
        title: "ESG & Data Solutions",
        content: "Drive Sustainability and Data Excellence. Our solution 4Scope helps organizations simplify their ESG reporting while ensuring alignment with top frameworks like GRI, SASB, and IFRS. Paired with expert consulting, 4Scope empowers businesses to meet regulatory requirements and engage stakeholders effectively. Our solution 4Vue is an AI-driven data engineering platform that streamlines data collection, transformation, and governance. With 4Vue, businesses can connect multiple data sources, automate data pipelines, and derive actionable insights from their data.",
        imageAlt: "ESG and Data Analytics",
        imagePath: "/images/esg-solutions.jpg"
    }
];

// --- Animation Variants ---
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
        transition: { type: 'spring', stiffness: 300, damping: 30 }
    }),
    center: {
        zIndex: 1, // Content is at zIndex 1
        x: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 300, damping: 30, duration: 0.5 }
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
        transition: { type: 'spring', stiffness: 300, damping: 30 }
    })
};

// --- Component ---
interface HeroProps {
    scrollToSection: (id: string) => void;
}

const MobileOptimizedHero: React.FC<HeroProps> = ({ scrollToSection }) => {
    const [[activeIndex, direction], setActive] = useState([0, 0]);
    const [isHovered, setIsHovered] = useState(false);

    const paginate = (newDirection: number) => {
        const newIndex = (activeIndex + newDirection + serviceCards.length) % serviceCards.length;
        setActive([newIndex, newDirection]);
    };

    const currentService = serviceCards[activeIndex];

    return (
        <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 -z-10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(237,242,255,0.6)_0%,rgba(255,255,255,0)_70%)] -z-10"></div>

            {/* Decorative Elements - Simplified for mobile */}
            <div className="absolute top-0 right-0 w-full max-w-sm -z-10 opacity-50 md:opacity-100">
                <svg width="404" height="392" fill="none" viewBox="0 0 404 392">
                    <defs>
                        <pattern id="pattern-squares" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" fill="rgba(99, 102, 241, 0.08)" />
                        </pattern>
                    </defs>
                    <rect width="404" height="392" fill="url(#pattern-squares)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Content Grid - Mobile First */}
                {/* Adjusted order classes for mobile-first text */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                    {/* Text Content Column - Now order-1 by default */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="order-1 lg:order-1" // Changed: order-1 default, order-1 lg
                    >
                        <motion.div variants={fadeInUp} className="mb-5 sm:mb-6 text-center lg:text-left">
                            <span className="inline-block text-indigo-600 font-semibold text-base sm:text-lg mb-2">Enterprise Solutions & Consulting</span>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                                Driving Success Through{" "}
                                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    Expert Consulting
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            variants={fadeInUp}
                            className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
                        >
                            Explore our tailored services designed to drive growth and efficiency.
                        </motion.p>

                        {/* CTA Buttons - Full width on mobile */}
                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <button
                                onClick={() => scrollToSection('services')}
                                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg shadow-lg hover:shadow-indigo-500/20 transition-shadow duration-300 group"
                            >
                                Explore Services
                                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button
                                onClick={() => scrollToSection('footer')}
                                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 text-base font-medium text-indigo-600 bg-white border border-indigo-200 rounded-lg hover:bg-indigo-50 hover:border-indigo-300 transition-colors duration-200"
                            >
                                Contact Us
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Service Card - Now order-2 by default */}
                    <div className="order-2 lg:order-2 mb-8 lg:mb-0"> {/* Changed: order-2 default, order-2 lg */}
                        {/* Card Container - Relative position established here */}
                        <motion.div
                            className="relative mx-auto max-w-lg lg:max-w-none"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {/* Navigation Arrows - Increased z-index */}
                            <div className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-5 md:-left-7 z-30"> {/* Increased z-index */}
                                <button
                                    onClick={() => paginate(-1)}
                                    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg hover:bg-indigo-50 transition-colors text-indigo-600 focus:outline-none"
                                    aria-label="Previous Service"
                                >
                                    <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                                </button>
                            </div>
                            <div className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-5 md:-right-7 z-30"> {/* Increased z-index */}
                                <button
                                    onClick={() => paginate(1)}
                                    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg hover:bg-indigo-50 transition-colors text-indigo-600 focus:outline-none"
                                    aria-label="Next Service"
                                >
                                    <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                                </button>
                            </div>

                            {/* Service Card - overflow-hidden for rounded corners */}
                            <div
                                className="relative bg-white rounded-2xl shadow-xl sm:shadow-2xl border border-indigo-50 overflow-hidden"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                onTouchStart={() => setIsHovered(true)}
                                onTouchEnd={() => setIsHovered(false)}
                            >
                                <AnimatePresence initial={false} custom={direction} mode="wait">
                                    {/* Sliding Content */}
                                    <motion.div
                                        key={currentService.id}
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        className="w-full" // This div slides
                                    >
                                        {/* Image Header */}
                                        <div className="relative h-48 sm:h-56 md:h-64 w-full">
                                            {/* Gradient overlay - z-10 within this container */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                                            {/* Image - base layer (z-0 within this container) */}
                                            <img
                                                src={currentService.imagePath}
                                                alt={currentService.imageAlt}
                                                className="w-full h-full object-cover object-center"
                                                style={{
                                                    transition: "transform 8s ease-out",
                                                    transform: isHovered ? "scale(1.05)" : "scale(1)"
                                                }}
                                                loading="eager"
                                            />
                                            {/* Title text - z-20 within this container */}
                                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20 text-white">
                                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                                                    {currentService.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Content Area */}
                                        <div className="p-4 sm:p-6 md:p-8">
                                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                                {currentService.content}
                                            </p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Progress Indicator - Needs to be above the sliding content */}
                                <div className="absolute bottom-0 left-0 right-0 z-20 px-4 py-3 sm:px-6 sm:py-4 flex justify-center gap-2">
                                    {serviceCards.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActive([index, index > activeIndex ? 1 : -1])}
                                            className={`h-2 rounded-full transition-all duration-300 ${
                                                activeIndex === index ? 'w-8 bg-indigo-500' : 'w-4 bg-gray-300 hover:bg-gray-400'
                                            }`}
                                            aria-label={`Go to service ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div> {/* End Inner card content div */}
                        </motion.div> {/* End Card Container */}
                    </div> {/* End Service Card Column */}
                </div> {/* End Main Content Grid */}

                {/* Logo Section - Relocated and Updated */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }} // Slightly delayed after main content
                    className="flex flex-col items-center justify-center mt-16 lg:mt-24" // Added top margin
                >
                    <div className="text-center mb-6 sm:mb-8">
                        <h2 className="text-base sm:text-lg font-medium text-gray-500 mb-2">Trusted By Leading Platforms</h2>
                        <div className="h-px w-20 bg-gray-200 mx-auto"></div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 md:gap-24">
                        {/* Microsoft Logo and Label */}
                        <motion.div
                            className="flex flex-col items-center"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="relative h-12 sm:h-16 md:h-20 w-48 sm:w-64 md:w-80">
                                <Image
                                    src="/images/microsoft-logo.png"
                                    alt="Microsoft Logo"
                                    layout="fill"
                                    objectFit="contain"
                                    priority
                                />
                            </div>
                            <p className="text-xs sm:text-sm text-center text-indigo-700 font-medium mt-2">
                                Microsoft Partner
                            </p>
                        </motion.div>

                        {/* Zoho Logo and Label */}
                        <motion.div
                            className="flex flex-col items-center mt-4 sm:mt-0"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="relative h-10 sm:h-14 md:h-16 w-40 sm:w-56 md:w-72">
                                <Image
                                    src="/images/zoho-logo.png"
                                    alt="Zoho Logo"
                                    layout="fill"
                                    objectFit="contain"
                                    priority
                                />
                            </div>
                             <p className="text-xs sm:text-sm text-center text-indigo-700 font-medium mt-2">
                                Zoho Partner
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

            </div> {/* End Container */}

            {/* Add mobile-specific styles to keep animations light for mobile devices */}
            <style jsx global>{`
                @media (prefers-reduced-motion: reduce) {
                    *, ::before, ::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                        scroll-behavior: auto !important;
                    }
                }

                @media (max-width: 640px) {
                    .container {
                        padding-left: 16px;
                        padding-right: 16px;
                    }
                }
            `}</style>
        </section>
    );
};

export default MobileOptimizedHero;