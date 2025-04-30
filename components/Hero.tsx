import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRightIcon, ChevronLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

// --- Data with UPDATED text (bold tags added) ---
const serviceCards = [
    {
        id: 1,
        title: "Consulting Services",
        content: "We offer functional and domain consulting as well as advisory services on <strong>Dynamics 365</strong> platforms. Our expert Solution Architects and Functional Consultants provide tailored guidance to help you maximize the value of your investment in <strong>Dynamics 365</strong>. With over 15 years of experience across complex, multi-country, and multi-entity implementations, our senior consultants bring unparalleled expertise to ensure successful outcomes.",
        imageAlt: "Enterprise Consulting Services",
        imagePath: "/images/consulting-services.jpg" // Replace with your actual image path
    },
    {
        id: 2,
        title: "Industry Verticals and Product Development",
        content: "We enhance CRM platforms by delivering industry-specific vertical and horizontal solutions that automate end-to-end operational processes for businesses not fully aligned with standard enterprise ERP and CRM systems. Our vertical solutions for <strong>Dynamics 365</strong> and <strong>Zoho CRM</strong> complement your existing investments, seamlessly integrating with your business applications to enforce industry best practices across all operational processes.",
        imageAlt: "Industry Solutions Development",
        imagePath: "/images/industry-verticals.jpg" // Replace with your actual image path
    },
    {
        id: 3,
        title: "ESG & Data Solutions",
        content: "Our solution <strong>4Vue</strong> is an AI-driven data engineering platform that streamlines data collection, transformation, and governance. With <strong>4Vue</strong>, businesses can connect multiple data sources, automate data pipelines, and derive actionable insights from their data. Our solution <strong>4Scope</strong> helps organizations simplify their ESG reporting while ensuring alignment with top frameworks like GRI, SASB, and IFRS. Paired with expert consulting, <strong>4Scope</strong> empowers businesses to meet regulatory requirements and engage stakeholders effectively.",
        imageAlt: "ESG and Data Analytics",
        imagePath: "/images/esg-solutions.jpg" // Replace with your actual image path
    }
];


// --- Animation Variants (Defined ONCE here) ---
const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } },
};

const cardVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
        scale: 0.9,
        transition: { type: 'spring', stiffness: 300, damping: 30 }
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', stiffness: 300, damping: 30, duration: 0.5 }
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
        scale: 0.9,
        transition: { type: 'spring', stiffness: 300, damping: 30 }
    }),
};

// --- Component ---

interface HeroProps {
    // Assume scrollToSection exists elsewhere or adjust as needed
    scrollToSection: (id: string) => void;
}

const EnhancedHeroPatternOptimized: React.FC<HeroProps> = ({ scrollToSection }) => {
    const [[activeIndex, direction], setActive] = useState([0, 0]);

    const paginate = (newDirection: number) => {
        const newIndex = (activeIndex + newDirection + serviceCards.length) % serviceCards.length;
        setActive([newIndex, newDirection]);
    };

    const currentService = serviceCards[activeIndex];

    // Inline SVG for a subtle dot pattern background
    const dotPattern = `
        <svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'>
            <circle cx='1' cy='1' r='1' fill='rgb(203 213 225 / 0.15)'/> {/* Slightly more transparent */}
        </svg>
    `;
    const encodedDotPattern = `url("data:image/svg+xml,${encodeURIComponent(dotPattern)}")`;

    return (
        // Section: Added pattern style + mobile padding optimization
        <section
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-bl from-blue-50 via-slate-50 to-purple-50 pt-24 pb-20 md:pt-32 md:pb-28"
            style={{ backgroundImage: encodedDotPattern, backgroundSize: '12px 12px' }}
        >
            {/* Decorative Background Elements: Mobile opacity optimization */}
            <div className="absolute inset-0 z-0 overflow-hidden opacity-30 md:opacity-40">
                <div className="absolute -top-1/4 left-0 w-72 h-72 md:w-96 md:h-96 bg-blue-200 rounded-full filter blur-3xl mix-blend-multiply animate-pulse-slow"></div>
                <div className="absolute -bottom-1/4 right-0 w-72 h-72 md:w-96 md:h-96 bg-purple-200 rounded-full filter blur-3xl mix-blend-multiply animation-delay-2000 animate-pulse-slow"></div>
            </div>

            {/* Container: z-index + mobile padding */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Grid Layout: Mobile gap optimization */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

                    {/* --- Left Column: Text Content --- */}
                    {/* Mobile alignment + text size optimization */}
                    <motion.div
                        className="text-center lg:text-left"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="show"
                    >
                        {/* Label */}
                        <motion.div
                            variants={fadeInUp}
                            className="inline-block px-5 py-2 mb-5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold shadow-sm border border-blue-200/50"
                        >
                            Enterprise Solutions & Consulting
                        </motion.div>

                        {/* Headline: Mobile margin optimization */}
                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight mb-5 md:mb-6 text-slate-800"
                        >
                            Driving Success Through
                            <br className="hidden sm:inline" />
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                                Expert Consulting
                            </span>
                        </motion.h1>

                        {/* Subtitle: Mobile text size + margin optimization */}
                        <motion.p
                            variants={fadeInUp}
                            className="text-base sm:text-lg text-slate-600 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0"
                        >
                            Explore our tailored services designed to drive growth and efficiency.
                        </motion.p>

                        {/* --- CTAs --- */}
                        {/* Mobile gap + button padding optimization */}
                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3 sm:gap-4"
                        >
                            {/* Buttons */}
                            <motion.button
                                whileHover={{ scale: 1.03, y: -2, boxShadow: "0 12px 25px -8px rgba(99, 102, 241, 0.4)" }}
                                whileTap={{ scale: 0.98, y: 0 }}
                                onClick={() => scrollToSection('services')} // Assuming 'services' is the ID of your services section
                                className="w-full sm:w-auto group px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
                            >
                                <span>Explore Services</span>
                                <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5 flex-shrink-0" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.03, y: -2, backgroundColor: 'rgba(255, 255, 255, 1)', borderColor: 'rgb(129 140 248)' }}
                                whileTap={{ scale: 0.98, y: 0 }}
                                onClick={() => scrollToSection('footer')} // Assuming 'footer' is the ID of your contact/footer section
                                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3.5 backdrop-blur-sm bg-white/80 text-blue-700 text-base font-semibold rounded-full border-2 border-blue-200/80 hover:border-indigo-300 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
                            >
                                Contact Us
                            </motion.button>
                        </motion.div>

                        {/* --- Trusted Partners Section --- */}
                        <motion.div
                            variants={fadeInUp}
                            className="mt-12 md:mt-16" // Increased margin top slightly for bigger logos
                        >
                            <p className="text-sm text-slate-500 mb-4 text-center lg:text-left font-medium">
                                Trusted Technology Partners:
                            </p>
                            {/* Adjusted gap for potentially larger logos */}
                            <div className="flex items-center justify-center lg:justify-start gap-8 sm:gap-10">
                                {/* Microsoft Logo - INCREASED SIZE */}
                                <img
                                    src="/images/microsoft-logo.png" // !! REPLACE with actual path !!
                                    alt="Microsoft Partner Logo"
                                    className="h-14 sm:h-16 opacity-70 hover:opacity-100 transition-opacity duration-300" // Increased height significantly
                                    loading="lazy"
                                />
                                {/* Zoho Logo - INCREASED SIZE */}
                                <img
                                    src="/images/zoho-logo.png" // !! REPLACE with actual path !!
                                    alt="Zoho Partner Logo"
                                    className="h-14 sm:h-16 opacity-70 hover:opacity-100 transition-opacity duration-300" // Increased height significantly (kept same as MS for consistency)
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>
                        {/* --- End Trusted Partners Section --- */}

                    </motion.div>

                    {/* --- Right Column: Carousel --- */}
                    {/* Mobile margin + height optimization */}
                    <div className="relative w-full mt-8 lg:mt-0 min-h-[520px] sm:min-h-[550px] md:min-h-[580px] flex items-center justify-center">
                        {/* Navigation Buttons: Mobile padding + icon size optimization */}
                        <motion.button
                            onClick={() => paginate(-1)}
                            aria-label="Previous Service"
                            className="absolute -left-2 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3.5 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl border border-slate-200/70 hover:bg-white transition-all text-blue-600 hover:text-blue-700"
                            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                        >
                            <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </motion.button>
                        <motion.button
                            onClick={() => paginate(1)}
                            aria-label="Next Service"
                            className="absolute -right-2 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3.5 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl border border-slate-200/70 hover:bg-white transition-all text-blue-600 hover:text-blue-700"
                            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                        >
                            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </motion.button>

                        {/* Carousel Inner Container: Mobile height optimization */}
                        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl h-[480px] sm:h-[520px] md:h-[550px] overflow-hidden relative">
                            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                                <motion.div
                                    key={currentService.id}
                                    className="absolute inset-0 w-full h-full cursor-grab flex items-center justify-center p-1"
                                    variants={cardVariants}
                                    custom={direction}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.15}
                                    onDragEnd={(e, { offset, velocity }) => {
                                        const swipePower = Math.abs(offset.x) * velocity.x;
                                        if (swipePower < -8000) paginate(1);
                                        else if (swipePower > 8000) paginate(-1);
                                    }}
                                >
                                    {/* Card Content Wrapper */}
                                    <div className="w-full h-full bg-gradient-to-br from-white via-white to-slate-50/50 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-400 overflow-hidden flex flex-col border border-slate-200/60">
                                        {/* Image Area: Mobile height optimization */}
                                        <div className="w-full h-[40%] sm:h-[45%] flex-shrink-0 relative overflow-hidden">
                                            <img
                                                src={currentService.imagePath}
                                                alt={currentService.imageAlt}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>
                                        </div>
                                        {/* Text Area: Mobile padding + text size optimization */}
                                        <div className="flex-grow p-4 sm:p-6 md:p-8 flex flex-col justify-start overflow-y-auto custom-scrollbar">
                                            {/* Card Title: Mobile text size optimization */}
                                            <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 sm:mb-3">
                                                {currentService.title}
                                            </h3>
                                            {/* Card Content: Mobile text size optimization */}
                                            <p className="text-sm md:text-base text-slate-600 leading-relaxed flex-grow"
                                               dangerouslySetInnerHTML={{ __html: currentService.content }}>
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Progress Indicators: Mobile positioning optimization */}
                        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
                            {serviceCards.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActive([index, index > activeIndex ? 1 : -1])}
                                    aria-label={`Go to service ${index + 1}`}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ease-in-out ${
                                        activeIndex === index ? 'bg-blue-600 scale-125 ring-2 ring-blue-300 ring-offset-1' : 'bg-slate-300 hover:bg-slate-400'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
             {/* Global Styles: Remain the same */}
             <style jsx global>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.4; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.05); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                /* Custom Scrollbar for Webkit (Chrome, Safari, Edge) & Firefox */
                .custom-scrollbar {
                    scrollbar-width: thin; /* Firefox */
                    scrollbar-color: rgba(156, 163, 175, 0.4) transparent; /* Firefox: thumb track */
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px; /* Width for Webkit */
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent; /* Track for Webkit */
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(156, 163, 175, 0.4); /* gray-400 thumb */
                    border-radius: 20px;
                    border: 3px solid transparent; /* Creates padding around thumb */
                }
             `}</style>
        </section>
    );
};

export default EnhancedHeroPatternOptimized;