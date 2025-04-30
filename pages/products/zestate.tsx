import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    AdjustmentsHorizontalIcon, FunnelIcon, SparklesIcon, ArrowsRightLeftIcon,
    CurrencyDollarIcon, WrenchIcon, CogIcon, ClipboardIcon, ChartPieIcon,
    LinkIcon, DevicePhoneMobileIcon, CheckBadgeIcon, // Base Icons
    HomeModernIcon, // Using for Hero or Masters
    ArrowRightIcon, // For CTA
    PuzzlePieceIcon, // For Modularity/Integration
    DocumentCheckIcon // For Tenant App features
} from '@heroicons/react/24/solid';

// Assuming these components exist
import Navigation from '../../components/Navigation'; // Adjust path
import Footer from '../../components/Footer';       // Adjust path

// --- Animation Variants ---
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

// *** CORRECTED scaleUp DEFINITION ***
const scaleUp = {
    hidden: { opacity: 0, scale: 0.9, y: 0 }, // Kept y:0 for compatibility
    visible: {
        opacity: 1,
        scale: 1,
        y: 0, // Kept y:0 for compatibility
        transition: { duration: 0.6, ease: "easeOut" } // Changed ease to string
    }
};


// Helper to apply viewport-triggered animation easily
const motionProps = (variants = fadeInUp) => ({
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.2 },
    variants
});

const motionContainerProps = (variants = staggerContainer) => ({
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.1 },
    variants
});


// --- Feature List Data with Descriptions ---
const featureListItems = [
    { id: 1, title: "Master Management", icon: AdjustmentsHorizontalIcon, description: "Comprehensive capabilities for managing all master data: Buildings, Units, Floor/Unit Maps, Pricing, Packages, Payment Plans." },
    { id: 2, title: "Lead Management", icon: FunnelIcon, description: "Centralized Lead Repository integrated with Property Listing Sites, enabling efficient qualification and assignment to Sales/Leasing teams." },
    { id: 3, title: "Deal Management", icon: SparklesIcon, description: "Automates the full sales cycle—from lead qualification to KYC and Contracting—with guided steps for effective deal closure." },
    { id: 4, title: "Move In/Out Management", icon: ArrowsRightLeftIcon, description: "Operational bridge for seamless tenant onboarding (Snagging, Checklists) and controlled move-outs." },
    { id: 5, title: "Financial Management", icon: CurrencyDollarIcon, description: "Integrated module for contract financials, automated invoicing, collections tracking, and ERP/accounting system interface." },
    { id: 6, title: "Property Maintenance (Z-FM)", icon: WrenchIcon, description: "Add-on for scheduling Preventive/Reactive maintenance. Handles service requests (Renewals, Complaints) across teams." },
    { id: 7, title: "Service Request Management", icon: CogIcon, description: "Supports Call Centre/Operations in handling Renewals, Cancellations, Terminations, and Complaints efficiently." },
    { id: 8, title: "Work Order Management", icon: ClipboardIcon, description: "Enables efficient logging, assignment, and closure of Customer Cases and Work Orders for timely issue resolution." },
    { id: 9, title: "Property Dashboards", icon: ChartPieIcon, description: "Powerful Analytics for transactional, financial, and predictive insights to drive proactive decision-making." },
    { id: 10, title: "ERP Connector", icon: LinkIcon, description: "Pre-built, API-based connectors for seamless data synchronization with leading ERP systems." },
];

// --- Tenant App Features ---
const tenantAppFeatures = [
    { title: "My Contracts", desc: "View All Open Contracts", icon: DocumentCheckIcon },
    { title: "Service Requests", desc: "Create & Track Cases", icon: CogIcon },
    { title: "Overdue Invoices", desc: "View All Pending Invoices", icon: CurrencyDollarIcon },
    { title: "Upcoming Invoices", desc: "Track Future Payments", icon: ClipboardIcon },
    { title: "My Activities", desc: "View & Action Team Tasks", icon: SparklesIcon },
    { title: "Alerts & Updates", desc: "Notifications from Real Estate Team", icon: CheckBadgeIcon },
];


const ZEstateFinalRedesignPage: React.FC = () => {
     // Inline SVG dot pattern
    const dotPattern = `
        <svg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='3' cy='3' r='0.4' fill='rgb(156 163 175 / 0.3)'/>
        </svg>
    `;
    const encodedDotPattern = `url("data:image/svg+xml,${encodeURIComponent(dotPattern)}")`;

    return (
        <>
            <Head>
                <title>Z-ESTATE | Integrated Real Estate Management Platform</title>
                <meta
                    name="description"
                    content="Transform your real estate operations with Z-ESTATE on Zoho CRM. Manage sales, leasing, facilities, financials, and tenant engagement seamlessly."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col min-h-screen bg-slate-50">
                <Navigation />

                <main className="flex-grow">

                    {/* --- Hero Section --- */}
                    <motion.section
                        className="relative bg-gradient-to-br from-indigo-600 to-blue-500 text-white pt-28 pb-36 md:pt-36 md:pb-44 overflow-hidden"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp} // Section uses simple fade-in
                    >
                         <div className="absolute inset-0 opacity-[0.04]">
                             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="heroGrid" patternUnits="userSpaceOnUse" width="30" height="30"><path d="M0 15h30 M15 0v30" stroke="white" strokeWidth="0.5" shapeRendering="crispEdges"/></pattern></defs><rect width="100%" height="100%" fill="url(#heroGrid)" /></svg>
                         </div>

                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                            {/* Use helper for viewport trigger */}
                            <motion.div {...motionProps()}>
                                <HomeModernIcon className="h-16 w-16 md:h-20 md:w-20 mx-auto mb-5 text-indigo-200" />
                            </motion.div>
                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
                                {...motionProps()}
                            >
                                Boost Your Real Estate Business with Z-ESTATE
                            </motion.h1>
                            <motion.p
                                className="text-lg md:text-xl lg:text-2xl text-indigo-100 max-w-3xl mx-auto mb-8"
                                {...motionProps()}
                            >
                                The comprehensive, Zoho CRM-based solution to manage sales, leads, rentals, marketing, facilities, and more – effectively and efficiently.
                            </motion.p>
                            <motion.div {...motionProps()}>
                                <a
                                    href="#features"
                                    className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 transition duration-300 group"
                                >
                                    Explore Features
                                    <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </motion.div>
                        </div>
                         <div className="absolute bottom-0 left-0 w-full h-16 md:h-20" style={{ transform: 'translateY(1px)' }}>
                            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="#f8fafc"> {/* slate-50 */}
                                <polygon points="0,100 100,0 100,100" />
                            </svg>
                        </div>
                    </motion.section>

                    {/* --- Feature List Section --- */}
                    <section id="features" className="py-20 md:py-28 bg-slate-50">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                             <motion.div
                                className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
                                {...motionContainerProps()}
                             >
                                <motion.h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase" variants={fadeInUp}>
                                    Core Functions
                                </motion.h2>
                                <motion.p className="mt-2 text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" variants={fadeInUp}>
                                    A Complete Toolkit for Real Estate
                                </motion.p>
                                <motion.p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500" variants={fadeInUp}>
                                    Z-Estate integrates essential functions into one powerful platform.
                                </motion.p>
                             </motion.div>

                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto"
                                {...motionContainerProps()}
                            >
                                {featureListItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        variants={fadeInUp}
                                        className="flex items-start p-6 bg-white rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-100 to-blue-100 text-indigo-600 flex items-center justify-center mr-5">
                                            <item.icon className="w-6 h-6" aria-hidden="true" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </section>

                    {/* --- Modularity & Figure 1 Section --- */}
                    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
                        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                            {/* ... svg patterns ... */}
                            <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                                <svg className="absolute top-12 left-full transform translate-x-32 opacity-20" width="404" height="384" fill="none" viewBox="0 0 404 384">
                                    <defs><pattern id="pattern-modularity" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" className="text-indigo-200" fill="currentColor" /></pattern></defs>
                                    <rect width="404" height="384" fill="url(#pattern-modularity)" />
                                </svg>
                                <svg className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32 opacity-20" width="404" height="384" fill="none" viewBox="0 0 404 384">
                                    <defs><pattern id="pattern-modularity2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" className="text-indigo-200" fill="currentColor" /></pattern></defs>
                                    <rect width="404" height="384" fill="url(#pattern-modularity2)" />
                                </svg>
                            </div>
                        </div>
                        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                <motion.div {...motionProps()}>
                                    <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Flexible & Scalable</h2>
                                    <p className="mt-2 text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                                        Designed for Your Growth Journey
                                    </p>
                                    <p className="mt-4 text-xl text-slate-500 mb-4">
                                        Implement Z-Estate in phases with its modular design. Start with core needs and activate advanced modules—Leasing, Sales, Brokerage, Facilities, Mall Management—as you expand, without needing a new system.
                                    </p>
                                    <p className="text-slate-600">
                                        This approach protects your investment and ensures Z-Estate evolves alongside your business.
                                    </p>
                                </motion.div>

                                {/* CORRECTED: Using motionProps helper with scaleUp */}
                                <motion.div className="relative" {...motionProps(scaleUp)}>
                                     <div className="rounded-xl shadow-xl overflow-hidden border border-slate-200 p-2 bg-slate-50">
                                        <Image
                                            src="/images/zestate-figure-1.png" // ADJUST PATH & DIMENSIONS
                                            alt="Figure 1: Z-Estate Core Modules Diagram"
                                            width={1000}
                                            height={900}
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <p className="text-sm text-slate-500 mt-3 text-center">Figure 1: Z-Estate Core Management Areas</p>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* --- Process Flow (Figure 2) Section --- */}
                     <section className="py-20 md:py-28 bg-slate-50">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                             <motion.div
                                className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
                                {...motionContainerProps()}
                            >
                                <motion.h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase" variants={fadeInUp}>
                                    Integrated Workflow
                                </motion.h2>
                                <motion.p className="mt-2 text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" variants={fadeInUp}>
                                    See the Seamless Flow in Action
                                </motion.p>
                                <motion.p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500" variants={fadeInUp}>
                                    Z-Estate connects critical functions and processes implemented for our customers, ensuring smooth operations.
                                </motion.p>
                             </motion.div>

                             {/* CORRECTED: Using motionProps helper with scaleUp */}
                             <motion.div className="max-w-6xl mx-auto" {...motionProps(scaleUp)}>
                                 <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-slate-200">
                                    <Image
                                        src="/images/zestate-figure-2.png" // ADJUST PATH & DIMENSIONS
                                        alt="Figure 2: Z-Estate High-Level Process Flow"
                                        width={1800}
                                        height={1013}
                                        className="rounded-lg"
                                    />
                                 </div>
                                 <p className="text-sm text-slate-500 mt-4 text-center">Figure 2: High-Level Process Flow</p>
                             </motion.div>
                        </div>
                    </section>

                    {/* --- Tenant App Section --- */}
                    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-800 to-gray-900 text-white relative overflow-hidden">
                        {/* ... background elements ... */}
                         <div className="absolute inset-0 opacity-10">
                             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="tenantAppPattern" patternUnits="userSpaceOnUse" width="50" height="50"><circle cx="25" cy="25" r="1.5" fill="rgba(255,255,255,0.5)"/></pattern></defs><rect width="100%" height="100%" fill="url(#tenantAppPattern)" /></svg>
                         </div>

                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                <motion.div {...motionContainerProps()}>
                                    <motion.h2 className="text-base font-semibold text-cyan-400 tracking-wide uppercase" variants={fadeInUp}>
                                        Tenant Engagement Hub
                                    </motion.h2>
                                    <motion.p className="mt-2 text-3xl lg:text-4xl font-extrabold tracking-tight" variants={fadeInUp}>
                                        The Z-Estate Tenant App
                                    </motion.p>
                                    <motion.p className="mt-4 text-xl text-slate-300 mb-8" variants={fadeInUp}>
                                        Strengthen tenant relationships with a dedicated, fully-branded native mobile app (iOS & Android) connected in real-time to Z-Estate.
                                    </motion.p>
                                    <div className="space-y-5">
                                        {tenantAppFeatures.map((feature) => (
                                            <motion.div key={feature.title} className="flex items-start" variants={fadeInUp}>
                                                <div className="flex-shrink-0">
                                                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 text-cyan-300">
                                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                                    </div>
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg leading-6 font-medium text-white">{feature.title}</h3>
                                                    <p className="mt-1 text-base text-slate-400">{feature.desc}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                 {/* CORRECTED: Using motionProps helper with scaleUp */}
                                <motion.div className="flex justify-center lg:justify-end items-center mt-10 lg:mt-0" {...motionProps(scaleUp)}>
                                     <div className="relative w-72 h-[36rem] group">
                                         {/* ... phone mockup structure ... */}
                                         <div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-800 rounded-[3rem] shadow-2xl border-4 border-slate-600 overflow-hidden">
                                             <div className="absolute inset-x-3 top-8 bottom-3 bg-slate-800 rounded-[2rem] p-4 overflow-y-auto">
                                                 <div className="flex items-center justify-between mb-6">
                                                     <div className="w-8 h-8 bg-indigo-500/50 rounded-full animate-pulse"></div>
                                                     <div className="w-24 h-4 bg-slate-600 rounded-md animate-pulse"></div>
                                                     <div className="w-5 h-5 bg-slate-600 rounded-full animate-pulse"></div>
                                                 </div>
                                                 <div className="space-y-3">
                                                     {[...Array(5)].map((_, i) => (
                                                         <div key={i} className="flex items-center space-x-3 p-2 bg-slate-700/70 rounded-lg">
                                                             <div className="w-8 h-8 bg-blue-500/40 rounded-md flex-shrink-0 animate-pulse"></div>
                                                             <div className="flex-grow space-y-1.5">
                                                                 <div className="h-3 bg-slate-600 rounded animate-pulse"></div>
                                                                 <div className="h-2 bg-slate-600/50 rounded w-4/5 animate-pulse"></div>
                                                             </div>
                                                         </div>
                                                     ))}
                                                 </div>
                                             </div>
                                             <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl"></div>
                                         </div>
                                     </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* --- Final CTA Section REMOVED --- */}
                    {/*
                     <section className="bg-white">
                        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
                           <motion.h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl" {...motionProps()}>
                             <span className="block">Ready to Elevate Your Real Estate Operations?</span>
                             <span className="block text-indigo-600 mt-1">See Z-Estate in Action Today.</span>
                           </motion.h2>
                           <motion.div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5 lg:mt-0 lg:ml-10 lg:flex-shrink-0" {...motionProps()}>
                             <a href="#" // Replace with Demo link
                               className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300">
                               Request a Demo
                             </a>
                             <a href="#" // Replace with Contact link
                                className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition duration-300">
                               Contact Sales
                             </a>
                           </motion.div>
                         </div>
                     </section>
                    */}

                </main>

                <Footer />

                <style jsx global>{`
                     @keyframes pulse-slow { /* ... pulse definition ... */ }
                    .animate-pulse-slow { /* ... pulse application ... */ }
                    .animation-delay-2000 { /* ... delay ... */ }
                    /* Re-add pulse animation if needed */
                     @keyframes pulse-slow {
                        0%, 100% { opacity: 0.6; transform: scale(1); }
                        50% { opacity: 0.8; transform: scale(1.03); }
                    }
                    .animate-pulse-slow {
                        animation: pulse-slow 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                    }
                    .animation-delay-2000 {
                        animation-delay: 1.5s;
                    }
                `}</style>
            </div>
        </>
    );
};

export default ZEstateFinalRedesignPage;