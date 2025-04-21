import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
    CpuChipIcon,
    SparklesIcon,
    UserGroupIcon,
    WrenchScrewdriverIcon,
    AcademicCapIcon,
    BuildingOffice2Icon,
    CheckBadgeIcon,
    ArrowRightIcon,
    RectangleGroupIcon,
    BriefcaseIcon,
    ChatBubbleLeftRightIcon,
    LightBulbIcon,
    LifebuoyIcon, // Keep if used in Why Z4BIZ or App Categories
    BanknotesIcon, // Keep if used in App Categories
    ArchiveBoxIcon, // Keep if used in App Categories
    ChartBarIcon, // Keep if used in App Categories
    ArrowsPointingOutIcon, // Keep if used in Overview
    CurrencyDollarIcon, // Keep if used in Processes
    MapPinIcon, // Keep if used in Why Z4BIZ
    ShoppingCartIcon, // Keep if used in Industries
    CogIcon, // Keep if used in Industries
    HomeModernIcon, // Keep if used in Industries
    HeartIcon, // Keep if used in Industries
    GiftIcon // Keep if used in Industries
} from '@heroicons/react/24/outline';
import Navigation from '../../components/Navigation'; // Adjust path if needed
import Footer from '../../components/Footer'; // Adjust path if needed

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const ZohoOnePage: React.FC = () => {
    const appCategories = [
        { name: "CRM", icon: UserGroupIcon },
        { name: "Marketing Automation", icon: SparklesIcon },
        { name: "Social & Events", icon: ChatBubbleLeftRightIcon },
        { name: "E-Commerce & Loyalty", icon: ShoppingCartIcon }, // Using ShoppingCartIcon here
        { name: "Customer Support", icon: LifebuoyIcon },
        { name: "Project Management", icon: BriefcaseIcon },
        { name: "Learning & Training", icon: AcademicCapIcon },
        { name: "Accounting & Finance", icon: BanknotesIcon },
        { name: "Inventory & Payroll", icon: ArchiveBoxIcon },
        { name: "Human Resources", icon: UserGroupIcon }, // Reusing, consider specific icon
        { name: "BI & Analytics", icon: ChartBarIcon },
        { name: "Custom Apps & Integration", icon: WrenchScrewdriverIcon },
    ];

    const industries = [
        { name: "Retail", description: "Integrated sales, inventory, CRM, and marketing.", icon: ShoppingCartIcon },
        { name: "Manufacturing & Distribution", description: "Streamlined supply chain, production, and automation.", icon: CogIcon },
        { name: "Real Estate", description: "Efficient property, lead, and financial management.", icon: HomeModernIcon },
        { name: "Professional Services", description: "Robust project management, time tracking, and invoicing.", icon: BriefcaseIcon },
        { name: "Healthcare", description: "Secure patient management, scheduling, and billing.", icon: HeartIcon },
        { name: "Non-Profit", description: "Effective donor, campaign, and grant management.", icon: GiftIcon },
    ];

    return (
        <>
            <Head>
                <title>Zoho One: The Operating System for Business | Z4BIZ</title>
                <meta
                    name="description"
                    content="Z4BIZ offers expert Zoho One implementation and consulting in the GCC. Streamline operations with 45+ integrated apps."
                />
                {/* Add other relevant meta tags like keywords, canonical URL etc. */}
            </Head>

            <div className="flex flex-col min-h-screen bg-gray-50">
                <Navigation />

                <main className="flex-grow pt-20"> {/* Adjust pt if nav height differs */}

                    {/* Hero Section */}
                    <motion.section
                        className="relative bg-gradient-to-br from-red-600 to-orange-500 text-white pt-24 pb-32 overflow-hidden"
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <div className="absolute inset-0 opacity-10">
                            {/* Subtle background pattern */}
                            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="heroPattern" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(2) rotate(45)"><rect x="0" y="0" width="100%" height="100%" fill="none" /><path d="M10-10 L10 50 M-10 10 L50 10 M-10 30 L50 30 M30-10 L30 50" stroke="white" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#heroPattern)" /></svg>
                        </div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                            <motion.div variants={fadeIn}>
                                <CpuChipIcon className="h-16 w-16 mx-auto mb-4 text-red-100" />
                            </motion.div>
                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
                                variants={fadeIn}
                            >
                                Zoho One: The Operating System for Business
                            </motion.h1>
                            <motion.p
                                className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto mb-8"
                                variants={fadeIn}
                            >
                                Unify every aspect of your work with a comprehensive suite of 45+ integrated applications, expertly implemented by Z4BIZ for the GCC region.
                            </motion.p>
                            <motion.div variants={fadeIn}>
                                <a
                                    href="#overview"
                                    className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-red-600 bg-white hover:bg-red-50 transition duration-300 group"
                                >
                                    Learn More
                                    <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </motion.div>
                        </div>
                        {/* Angled bottom shape */}
                        <div className="absolute bottom-0 left-0 w-full h-20" style={{ transform: 'translateY(1px)' }}>
                            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="#f9fafb"> {/* Fill with next section's bg */}
                                <polygon points="0,100 100,0 100,100" />
                            </svg>
                        </div>
                    </motion.section>

                    {/* Overview Section */}
                    <section id="overview" className="py-16 md:py-24 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.div
                                className="text-center"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeIn}
                            >
                                <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">All-in-One Platform</h2>
                                <p className="mt-2 text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                                    Everything Your Business Needs, Connected.
                                </p>
                                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                                    Zoho One offers over 45 integrated applications covering sales, marketing, finance, HR, operations, and more. Streamline workflows, boost productivity, and gain unparalleled visibility across your organization.
                                </p>
                            </motion.div>

                            <motion.div
                                className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={staggerContainer}
                            >
                                {/* Feature 1: Integration */}
                                <motion.div className="text-center" variants={fadeIn}>
                                    <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-md shadow-lg mb-4">
                                        <RectangleGroupIcon className="h-8 w-8 text-red-600" />
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900">Unified System</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Transform disparate activities into a connected, agile organization with contextually integrated apps.
                                    </p>
                                </motion.div>
                                {/* Feature 2: Productivity */}
                                <motion.div className="text-center" variants={fadeIn}>
                                    <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-md shadow-lg mb-4">
                                        <SparklesIcon className="h-8 w-8 text-orange-600" />
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900">Enhanced Productivity</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Increase efficiency across your business, deliver better customer experiences, and automate routine tasks.
                                    </p>
                                </motion.div>
                                {/* Feature 3: Scalability */}
                                <motion.div className="text-center" variants={fadeIn}>
                                    <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-md shadow-lg mb-4">
                                        <ArrowsPointingOutIcon className="h-8 w-8 text-amber-600" />
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900">Grows With You</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        A flexible platform that scales effortlessly as your business expands its operations and needs.
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Key Processes Section */}
                    <section id="processes" className="py-16 md:py-24 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.div
                                className="lg:text-center"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeIn}
                            >
                                <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">Streamlined Operations</h2>
                                <p className="mt-2 text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                                    Manage Your Core Business Flows
                                </p>
                                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                                    Zoho One connects your critical functions for end-to-end visibility and control.
                                </p>
                            </motion.div>

                            <motion.div
                                className="mt-12 space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={staggerContainer}
                            >
                                {/* Process 1 */}
                                <motion.div className="relative" variants={fadeIn}>
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                                            <CurrencyDollarIcon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Lead to Cash</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        Collect leads, close deals quickly, manage quotes & invoices, sign contracts digitally, get paid, and track key metrics seamlessly.
                                    </dd>
                                </motion.div>
                                {/* Process 2 */}
                                <motion.div className="relative" variants={fadeIn}>
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                                            <UserGroupIcon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Customer to Promoter</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        Centralize customer data, create segments, run targeted campaigns & surveys, and track performance with executive dashboards.
                                    </dd>
                                </motion.div>
                                {/* Process 3 */}
                                <motion.div className="relative" variants={fadeIn}>
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
                                            <BriefcaseIcon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Sale to Service</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        Close deals, manage contracts & projects, track time & expenses accurately, and stay on schedule and within budget.
                                    </dd>
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Apps Included Section */}
                    <section id="apps" className="py-16 md:py-24 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.div
                                className="text-center"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeIn}
                            >
                                <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">45+ Integrated Apps</h2>
                                <p className="mt-2 text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                                    Covering Every Business Need
                                </p>
                                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                                    A sample of the powerful application categories included in Zoho One:
                                </p>
                            </motion.div>

                            <motion.div
                                className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                variants={staggerContainer}
                            >
                                {appCategories.map((app) => (
                                    <motion.div key={app.name} className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow" variants={fadeIn}>
                                        <app.icon className="h-10 w-10 mx-auto mb-3 text-red-500" />
                                        <p className="text-sm font-medium text-gray-700">{app.name}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </section>

                    {/* Why Z4BIZ Section */}
                    <section id="why-z4biz" className="py-16 md:py-24 bg-white relative overflow-hidden">
                        {/* Background decoration */}
                        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                            <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                                <svg className="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
                                    <defs><pattern id="pattern-why" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" /></pattern></defs>
                                    <rect width="404" height="384" fill="url(#pattern-why)" />
                                </svg>
                                <svg className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
                                    <defs><pattern id="pattern-why2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" /></pattern></defs>
                                    <rect width="404" height="384" fill="url(#pattern-why2)" />
                                </svg>
                            </div>
                        </div>
                        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.div
                                className="text-center"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeIn}
                            >
                                <CheckBadgeIcon className="h-12 w-12 mx-auto text-red-600 mb-4" />
                                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
                                    Why Choose Z4BIZ for Zoho One?
                                </h2>
                                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                                    Your trusted partner for successful Zoho One implementation and ongoing support in the GCC.
                                </p>
                            </motion.div>

                            <motion.div
                                className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={staggerContainer}
                            >
                                {/* Point 1: Local Expertise */}
                                <motion.div className="flex" variants={fadeIn}>
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 text-red-600">
                                            <MapPinIcon className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Local Expertise & Proven Success</h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            Deep understanding of the GCC business environment ensures Zoho One is perfectly adapted. Successfully implemented across diverse industries.
                                        </p>
                                    </div>
                                </motion.div>
                                {/* Point 2: Support */}
                                <motion.div className="flex" variants={fadeIn}>
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100 text-orange-600">
                                            <LifebuoyIcon className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Unmatched Customer Support</h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            Our expert team provides dedicated on-site and remote assistance to ensure your system runs smoothly.
                                        </p>
                                    </div>
                                </motion.div>
                                {/* Point 3: Training */}
                                <motion.div className="flex" variants={fadeIn}>
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-100 text-amber-600">
                                            <AcademicCapIcon className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Training and Resources</h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            Comprehensive training and continuous learning resources empower your team to maximize Zoho One's benefits and ROI.
                                        </p>
                                    </div>
                                </motion.div>
                                {/* Point 4: Tailored Solutions */}
                                <motion.div className="flex" variants={fadeIn}>
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-100 text-emerald-600">
                                            <LightBulbIcon className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Tailored to Your Needs</h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            We work closely with you to understand your unique challenges and configure Zoho One for optimal performance.
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Industries Served Section */}
                    <section id="industries" className="py-16 md:py-24 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.div
                                className="lg:text-center"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeIn}
                            >
                                <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">Industry Solutions</h2>
                                <p className="mt-2 text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                                    Flexible for Diverse Sectors
                                </p>
                                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                                    Zoho One adapts to the specific needs of various industries. See how we tailor it for success:
                                </p>
                            </motion.div>

                            <motion.div
                                className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                variants={staggerContainer}
                            >
                                {industries.map((industry) => (
                                    <motion.div key={industry.name} className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4" variants={fadeIn}>
                                        <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-red-100 text-red-600">
                                            <industry.icon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">{industry.name}</h3>
                                            <p className="mt-1 text-base text-gray-500">{industry.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </section>

                   {/* CTA Section Removed */}

                </main>

                <Footer />
            </div>
        </>
    );
};

export default ZohoOnePage;