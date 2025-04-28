import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
    CheckCircleIcon,
    LightBulbIcon,
    ExclamationTriangleIcon,
    DocumentTextIcon,
    MagnifyingGlassIcon,
    TruckIcon,
    CurrencyDollarIcon,
    ShieldCheckIcon,
    WrenchScrewdriverIcon,
    ArrowsRightLeftIcon,
    CircleStackIcon,
    ClipboardIcon,
    CpuChipIcon,
    CogIcon,
    SparklesIcon,
    UsersIcon,
    ArrowTrendingUpIcon,
    ComputerDesktopIcon,
    KeyIcon,
    IdentificationIcon,
    LockClosedIcon,
    ListBulletIcon,
    BuildingLibraryIcon,
    ChartBarIcon,
    ArrowRightIcon
} from '@heroicons/react/24/outline';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// --- Animation Variants ---
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
};

// Helper for viewport animations
const motionProps = (variants = fadeInUp, amount = 0.2) => ({
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount },
    variants
});

const motionContainerProps = (variants = staggerContainer, amount = 0.1) => ({
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount },
    variants
});

// TypeScript interfaces for data structures
interface SolutionHighlightItem {
    title: string;
    description: string;
    icon?: React.ElementType;
}

interface BenefitItem {
    title: string;
    description: string;
    icon?: React.ElementType;
}

interface ChallengePoint {
    primary?: string;
    points?: string[];
}

interface Pillar {
    title: string;
    icon: React.ElementType;
    points: string[];
}

interface CaseStudy {
    id: string;
    title: string;
    subtitle: string;
    icon: React.ElementType;
    challenge?: {
        primary: string;
        points?: string[];
    };
    overview?: string[];
    solution?: string[];
    keyHighlights?: string[];
    solutionHighlights?: SolutionHighlightItem[];
    benefits?: BenefitItem[];
    results?: string[];
    pillars?: Pillar[];
}

// --- Case Study Data Structure ---
const caseStudies: CaseStudy[] = [
     {
        id: 'contract-management',
        title: 'Derivative Contract Management System',
        subtitle: 'Streamlining workflows and enhancing financial control.',
        icon: DocumentTextIcon,
        challenge: {
            primary: 'Derivative contract workflow is predominantly manual – document dump; bad surprises from contract triggers; audit trail erratic;',
            points: [
                'Lengthy negotiations and manual drafting of derivative contracts.',
                'Lack of a centralized platform for collaboration, version control, and comments tracking.',
                'Poor audit trail and traceability due to reliance on email communication.',
                'Difficulty in historical contract retrieval and archival.',
                'Absence of intelligent features for prefilling contracts and generating schedule terms.'
            ]
        },
        solutionHighlights: [
             { title: 'Automated Document Creation', description: 'Leveraging AI and the ISDA universe taxonomy, the system generates a base master agreement template and uses Azure OpenAI to construct the highly negotiated Schedule.', icon: DocumentTextIcon },
             { title: 'Automated Workflow', description: 'The system streamlines collaboration by providing real-time updates, version control, and comment tracking for all parties involved.', icon: ArrowsRightLeftIcon },
             { title: 'Audit Trail & Archival', description: 'All interactions are logged and stored securely, providing a comprehensive audit trail, and enabling easy archival and retrieval of historical contracts.', icon: CircleStackIcon },
             { title: 'Version Comparison & Track Changes', description: 'Users can compare different versions, track changes, and approve modifications.', icon: ClipboardIcon },
             { title: 'AI Query for Agreement Versions', description: 'Allows users to query agreement versions for insights using Azure OpenAI.', icon: CpuChipIcon },
             { title: 'Approval Workflow', description: 'Power Automate flow for submitting agreements and handling approvals.', icon: CogIcon },
             { title: 'Multiple Creation Methods', description: 'Agreements can be created from scratch, using templates, or based on existing contracts.', icon: SparklesIcon }
        ]
    },
    {
        id: 'intelligent-search',
        title: 'Intelligent Search (Custom Copilot)',
        subtitle: 'Improving productivity with secure, user-friendly information access.',
        icon: MagnifyingGlassIcon,
        challenge: {
            primary: 'How employees can quickly access information to improve their productivity in a secure and user-friendly manner:',
            points: [
                'Family Bank Service catalog', 'Family Bank HR Policies', 'Family Bank Admin policies', 'Family Bank-Customer Agreements', 'Family Bank Procurement contracts', 'Family Bank Legal document repository', 'Family Bank Compliance filings', 'Family Bank Financial documentation', 'Family Bank Business review documentation'
            ]
        },
        solutionHighlights: [
            { title: 'Custom Copilot Integration', description: 'Implementing Custom Copilot to power the intelligent search functionality, enabling users to query company policies in natural language. This will allow employees to ask specific questions about policies, such as leave policies, and receive relevant and precise information.', icon: MagnifyingGlassIcon },
            { title: 'SharePoint Document Library', description: 'Utilize SharePoint as the document management system for storing company policies. This ensures centralized, secure, and organized storage of policy documents, making retrieval efficient and structured.', icon: CircleStackIcon },
            { title: 'User-Friendly Interface', description: 'Develop an intuitive Windows app interface that allows employees to interact seamlessly with the system. The app will provide easy search functionality, quick access to policy documents, and secure login mechanisms.', icon: ComputerDesktopIcon },
            { title: 'Secure Access Control', description: 'Ensure that the app integrates secure authentication methods to control access to policy documents, ensuring only authorized personnel can query or retrieve policies.', icon: LockClosedIcon },
            { title: 'Real-Time Updates', description: 'Allow the SharePoint document library to be updated in real-time, ensuring that users always access the latest version of any company policy.', icon: ArrowsRightLeftIcon }
        ]
    },
    {
         id: 'fleet-maintenance',
         title: 'Fleet Preventive Maintenance Application',
         subtitle: 'Optimizing truck maintenance using Power Platform.',
         icon: TruckIcon,
         overview: [
             'Our customer is a leading manufacturer and distributor of high-quality ready-mixed and prefabricated concrete to commercial and private customers.',
             'They engaged us to design a solution to streamline and manage the preventive maintenance tasks for a fleet of trucks.'
         ],
         solution: [
             'The primary goal of the application developed by us is to ensure that all scheduled maintenance is completed in a timely manner, improving vehicle performance, reducing breakdowns, and ensuring regulatory compliance.',
             'The application act as a communication point between Fleet Department and Operations team. The fleet department can request the trucks for PM from operations and the operations team can send the truck for PM accordingly.',
             'The main UI interface is a power apps canvas app where the Fleet(Fleet Manager and Mechanic user)and the Operations team can see the PMs (BPM,CPM & DPM) which are due for the trucks in the current Month, and they can submit the PMs from the application.',
             'The PMs for the truck is created using Power Automate Flows which are scheduled on the first of every month, A BPM will be created for all the trucks while the CPM and DPM are Quarterly and Annual basis.',
             'A model driven application is used to create the admin application where admin can do all the admin activities like adding a new user, assigning user role, Mapping the division and location, Correcting the data entered by the fleet if it is wrong etc..'
         ],
         benefits: [
             { title: 'Increased Efficiency', description: 'The application automates the tracking of preventive maintenance, reducing the need for manual scheduling and tracking. This ensures that no maintenance tasks are overlooked.', icon: ArrowTrendingUpIcon },
             { title: 'Reduced Downtime', description: 'By ensuring all preventive maintenance is performed on schedule, the application helps minimize unexpected breakdowns and costly repairs, leading to increased uptime for trucks.', icon: WrenchScrewdriverIcon },
             { title: 'Enhanced Communication', description: 'The integrated communication feature ensures that both Operations and Fleet department stay aligned, leading to smoother and faster operations.', icon: UsersIcon }
         ],
         results: [
            'Trucks are consistently maintained on schedule, leading to reduced wear and tear, prolonged lifespan, better fleet performance and minimizes the risk of sudden breakdowns, ensuring trucks remain operational.',
            'Automating PM scheduling and tracking reduces manual effort, streamlining the maintenance process.',
            'Regular, planned maintenance prevents costly emergency repairs and reduces vehicle downtime.',
            'The application facilitates better communication between the Mechanic, Fleet Manager and Operations teams, reducing delays and miscommunication.',
            'Detailed records of maintenance activities provide valuable data for reporting and analysis, helping the business identify trends, common issues, and areas for improvement.'
         ]
     },
     {
         id: 'invoice-automation',
         title: 'Invoice Automation Process',
         subtitle: 'Accelerating payments and reducing errors with RPA.',
         icon: CurrencyDollarIcon,
         challenge: {
             primary: 'Manual invoice processing time-consuming, error-prone, and inefficient, leading to delays in payments, increased operational costs, and lack of real-time visibility.'
         },
         solution: [
            'Automating the process with RPA can streamline workflows, improve accuracy, and enhance overall financial management.'
         ],
         keyHighlights: [
            'Invoice is shared to designated email by user in PDF format.',
            'BOT extracts relevant info from invoice and summary is shared to the approver.',
            'Based on approval status, BOT populates data for further processing:',
            'Invoice Data will get feed in application, Status and file will be captured in Share Point',
            'Mail will be triggered for Notification and status will get captured in Share Point',
            'Progressed mail will be moved to subfolder in Outlook for future reference'
         ],
         solutionHighlights: [
             { title: 'RPA Implementation', description: 'Implementing RPA through Power Automate Desktop for invoice processing automates data extraction from invoices, progress approval process from stakeholders and updates financial systems in real time.', icon: ComputerDesktopIcon },
             { title: 'Error Reduction & Visibility', description: 'This solution eliminates manual errors, accelerates payment cycles, reduces operational costs, and provides real-time visibility into financial data.', icon: CheckCircleIcon },
             { title: 'Efficiency Gains', description: 'By automating repetitive tasks, the business can achieve greater accuracy, faster processing times, and improved compliance, leading to enhanced operational efficiency and better decision-making.', icon: ArrowTrendingUpIcon }
         ]
     },
     {
         id: 'data-protection',
         title: 'Data Classification & Protection',
         subtitle: 'Ensuring compliance and security with Microsoft Purview.',
         icon: ShieldCheckIcon,
         pillars: [
             {
                 title: 'Automated Data Scanning and Classification',
                 icon: MagnifyingGlassIcon,
                 points: [
                     'Automatically scan on-premises, multicloud, and Saas data.',
                     'Support for 100+ data classifiers, ensuring that sensitive data is properly identified.',
                     'Custom classification for organization-specific data categories.'
                 ]
             },
             {
                 title: 'Compliance-Driven Data Insights',
                 icon: ShieldCheckIcon,
                 points: [
                     'Monitor data classification and access patterns for compliance audits.',
                     'Generate reports for compliance with regulations like GDPR, HIPAA, and CCPA.'
                 ]
             },
             {
                 title: 'Data Protection Measures',
                 icon: LockClosedIcon,
                 points: [
                     'Integration with Microsoft Information Protection (MIP) to label and secure data.',
                     'Consistent classification and protection policies across data environments.'
                 ]
             }
         ]
     }
];

// --- Component Props Interfaces ---
interface SolutionHighlightProps {
    item: SolutionHighlightItem;
}

interface BenefitCardProps {
    item: BenefitItem;
}

interface ResultItemProps {
    point: string;
}

interface ChallengePointProps {
    point: string;
}

interface SectionDividerProps {
    text: string;
}

// --- Helper Components for Solution/Highlight Items ---
const SolutionHighlight: React.FC<SolutionHighlightProps> = ({ item }) => (
    <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
        {item.icon && (
            <div className="flex-shrink-0 w-10 h-10 mt-1 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center">
                <item.icon className="w-6 h-6" />
            </div>
        )}
        <div className={!item.icon ? 'pl-9' : 'flex-1'}>
            <h4 className="text-lg font-semibold text-slate-800">{item.title}</h4>
            <p className="text-sm text-slate-600 mt-1">{item.description}</p>
        </div>
    </div>
);

const BenefitCard: React.FC<BenefitCardProps> = ({ item }) => (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md border-t-4 border-emerald-500 hover:shadow-lg transition-all duration-300">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
            {item.icon && <item.icon className="w-8 h-8" />}
        </div>
        <h4 className="text-lg font-semibold text-slate-800 text-center mb-2">{item.title}</h4>
        <p className="text-sm text-slate-600 text-center">{item.description}</p>
    </div>
);

const ResultItem: React.FC<ResultItemProps> = ({ point }) => (
    <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-white to-emerald-50 rounded-lg border-l-4 border-emerald-500">
        <CheckCircleIcon className="w-5 h-5 mt-0.5 text-emerald-500 flex-shrink-0" />
        <p className="text-sm text-slate-700">{point}</p>
    </div>
);

const ChallengePoint: React.FC<ChallengePointProps> = ({ point }) => (
    <div className="flex items-start space-x-3 my-1.5">
        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-red-500 flex-shrink-0"></div>
        <p className="text-sm text-slate-700">{point}</p>
    </div>
);

const SectionDivider: React.FC<SectionDividerProps> = ({ text }) => (
    <div className="flex items-center my-12">
        <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <span className="px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">{text}</span>
        <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </div>
);

// --- Case Studies Page Component ---
const CaseStudiesPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Case Studies - Proven Results | Z4BIZ Technologies</title>
                <meta
                    name="description"
                    content="Explore how Z4BIZ Technologies delivers impactful solutions through real-world case studies in various domains."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
                <Navigation />

                <main className="flex-grow">
                    {/* --- Hero Section --- */}
                    <section className="relative py-24 md:py-32 bg-gradient-to-b from-indigo-900 to-indigo-700 text-white">
                        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                        <motion.div
                            className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.div
                                className="inline-block p-2 px-4 mb-6 rounded-full bg-indigo-600 bg-opacity-30 text-white text-sm font-medium"
                                variants={fadeInUp}
                            >
                                Real-World Impact
                            </motion.div>
                            <motion.h1
                                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight"
                                variants={fadeInUp}
                            >
                                Client Success Stories
                            </motion.h1>
                            <motion.p
                                className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto mb-8"
                                variants={fadeInUp}
                            >
                                Discover how we partner with businesses to overcome challenges and achieve tangible results through innovative solutions.
                            </motion.p>
                            <motion.div variants={fadeInUp}>
                                <a href="#case-studies" className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-indigo-700 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                                    Explore Our Work
                                    <ArrowRightIcon className="ml-2 w-4 h-4" />
                                </a>
                            </motion.div>
                        </motion.div>
                    </section>

                    <div id="case-studies" className="py-2">
                        {/* Invisible anchor for smooth scrolling */}
                    </div>

                    {/* --- Contract Management System --- */}
                    <section className="py-20 bg-white">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.div {...motionContainerProps()}>
                                <motion.div className="text-center mb-16" variants={fadeInUp}>
                                    <h2 className="inline-flex items-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        <DocumentTextIcon className="w-10 h-10 mr-3 text-indigo-600" />
                                        {caseStudies[0].title}
                                    </h2>
                                    <p className="text-xl text-gray-600">{caseStudies[0].subtitle}</p>
                                </motion.div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                                    <motion.div variants={fadeInLeft}>
                                        <div className="bg-gradient-to-br from-red-50 to-amber-50 p-6 rounded-2xl shadow-md mb-8">
                                            <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center">
                                                <ExclamationTriangleIcon className="w-6 h-6 mr-2" />
                                                Business Challenge
                                            </h3>
                                            <p className="text-base text-slate-700 font-medium mb-4 border-l-4 border-red-300 pl-4">
                                                {caseStudies[0].challenge?.primary}
                                            </p>
                                            <div className="space-y-2">
                                                {caseStudies[0].challenge?.points?.map((point, i) => (
                                                    <ChallengePoint key={i} point={point} />
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={fadeInRight}>
                                        <h3 className="text-xl font-semibold text-indigo-700 mb-6 flex items-center">
                                            <LightBulbIcon className="w-6 h-6 mr-2" />
                                            Our Solution
                                        </h3>
                                        <div className="grid grid-cols-1 gap-4">
                                            {caseStudies[0].solutionHighlights?.map((item, i) => (
                                                <SolutionHighlight key={i} item={item} />
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* --- Intelligent Search --- */}
                    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.div {...motionContainerProps()}>
                                <motion.div className="text-center mb-16" variants={fadeInUp}>
                                    <h2 className="inline-flex items-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        <MagnifyingGlassIcon className="w-10 h-10 mr-3 text-blue-600" />
                                        {caseStudies[1].title}
                                    </h2>
                                    <p className="text-xl text-gray-600">{caseStudies[1].subtitle}</p>
                                </motion.div>

                                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                                    <motion.div className="lg:col-span-2" variants={fadeInLeft}>
                                        <div className="bg-white p-6 rounded-2xl shadow-md">
                                            <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
                                                <ExclamationTriangleIcon className="w-6 h-6 mr-2" />
                                                Information Access Challenge
                                            </h3>
                                            <p className="text-base text-slate-700 mb-4">
                                                {caseStudies[1].challenge?.primary}
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6">
                                                {caseStudies[1].challenge?.points?.map((point, i) => (
                                                    <div key={i} className="bg-blue-50 p-3 rounded-lg text-sm text-blue-800 font-medium">
                                                        {point}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-8 relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl transform rotate-1"></div>
                                            <div className="relative bg-white p-6 rounded-xl border border-blue-200 shadow-md">
                                                <h4 className="text-lg font-semibold text-blue-700 mb-3">The Power of AI-Driven Search</h4>
                                                <p className="text-sm text-gray-600 mb-4">
                                                    Our Copilot solution allows employees to ask questions in natural language and receive precise, relevant answers from company documentation.
                                                </p>
                                                <div className="bg-slate-50 p-4 rounded-lg border border-gray-200">
                                                    <div className="flex items-start space-x-3 mb-4">
                                                        <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                                                        <div className="flex-1 p-3 bg-gray-100 rounded-lg">
                                                            <p className="text-sm">What's our policy on paternity leave?</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-8 h-8 rounded-full bg-blue-200 flex-shrink-0 flex items-center justify-center">
                                                            <MagnifyingGlassIcon className="w-4 h-4 text-blue-600" />
                                                        </div>
                                                        <div className="flex-1 p-3 bg-blue-50 rounded-lg">
                                                            <p className="text-sm">According to the HR Policy (Section 3.2), employees are entitled to 6 weeks of paid paternity leave...</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div className="lg:col-span-3" variants={fadeInRight}>
                                        <div className="bg-white p-6 rounded-2xl shadow-md">
                                            <h3 className="text-xl font-semibold text-blue-700 mb-6 flex items-center">
                                                <LightBulbIcon className="w-6 h-6 mr-2" />
                                                Intelligent Search Solution
                                            </h3>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {caseStudies[1].solutionHighlights?.map((item, i) => (
                                                    <SolutionHighlight key={i} item={item} />
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* --- Fleet Maintenance --- */}
                    <section className="py-20 bg-white">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.div {...motionContainerProps()}>
                                <motion.div className="text-center mb-16" variants={fadeInUp}>
                                    <h2 className="inline-flex items-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        <TruckIcon className="w-10 h-10 mr-3 text-yellow-600" />
                                        {caseStudies[2].title}
                                    </h2>
                                    <p className="text-xl text-gray-600">{caseStudies[2].subtitle}</p>
                                </motion.div>

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                    <motion.div className="lg:col-span-5" variants={fadeInLeft}>
                                        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl shadow-md">
                                            <h3 className="text-xl font-semibold text-amber-700 mb-4 flex items-center">
                                                <TruckIcon className="w-6 h-6 mr-2" />
                                                Business Overview
                                            </h3>
                                            <div className="space-y-3">
                                                {caseStudies[2].overview?.map((point, i) => (
                                                    <p key={i} className="text-sm text-slate-700">{point}</p>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-8 bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                                            <h3 className="text-xl font-semibold text-amber-700 mb-4 flex items-center">
                                                <LightBulbIcon className="w-6 h-6 mr-2" />
                                                Our Solution
                                            </h3>
                                            <div className="space-y-3">
                                                {caseStudies[2].solution?.map((point, i) => (
                                                    <p key={i} className="text-sm text-slate-700">{point}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div className="lg:col-span-7" variants={fadeInRight}>
                                        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
                                            <div className="relative mb-6">
                                                <div className="absolute -top-12 -left-12 w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center">
                                                    <WrenchScrewdriverIcon className="w-12 h-12 text-amber-600" />
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-semibold text-amber-700 mb-6">
                                                Key Benefits & Results
                                            </h3>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                                {caseStudies[2].benefits?.map((benefit, i) => (
                                                    <BenefitCard key={i} item={benefit} />
                                                ))}
                                            </div>

                                            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl">
                                                <h4 className="text-lg font-semibold text-amber-700 mb-4 flex items-center">
                                                    <CheckCircleIcon className="w-5 h-5 mr-2" />
                                                    Results Achieved
                                                </h4>
                                                <div className="space-y-3">
                                                    {caseStudies[2].results?.map((result, i) => (
                                                        <ResultItem key={i} point={result} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    <SectionDivider text="More Success Stories" />

                    {/* --- Invoice Automation --- */}
                    <section className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.div {...motionContainerProps()}>
                                <motion.div className="text-center mb-16" variants={fadeInUp}>
                                    <h2 className="inline-flex items-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        <CurrencyDollarIcon className="w-10 h-10 mr-3 text-green-600" />
                                        {caseStudies[3].title}
                                    </h2>
                                    <p className="text-xl text-gray-600">{caseStudies[3].subtitle}</p>
                                </motion.div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                                    <motion.div variants={fadeInLeft}>
                                        <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-red-500">
                                            <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center">
                                                <ExclamationTriangleIcon className="w-6 h-6 mr-2" />
                                                Business Challenge
                                            </h3>
                                            <p className="text-base text-slate-700 leading-relaxed">
                                                {caseStudies[3].challenge?.primary}
                                            </p>
                                            
                                            <div className="mt-6 bg-red-50 p-4 rounded-lg border-l-4 border-red-300">
                                                <h4 className="font-medium text-red-700 mb-2">Pain Points:</h4>
                                                <ul className="space-y-2 text-sm">
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 mt-1.5 bg-red-500 rounded-full mr-2"></span>
                                                        Time-consuming manual data entry
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 mt-1.5 bg-red-500 rounded-full mr-2"></span>
                                                        Error-prone invoice processing
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 mt-1.5 bg-red-500 rounded-full mr-2"></span>
                                                        Delayed payments to vendors
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 mt-1.5 bg-red-500 rounded-full mr-2"></span>
                                                        Lack of visibility into invoice status
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="mt-8 bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-md">
                                            <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                                                <LightBulbIcon className="w-6 h-6 mr-2" />
                                                Solution Approach
                                            </h3>
                                            <p className="text-base text-slate-700 mb-4">
                                                {caseStudies[3].solution?.[0]}
                                            </p>
                                            
                                            <div className="space-y-3 mt-6">
                                                <h4 className="font-medium text-green-700">Process Flow:</h4>
                                                <div className="bg-white p-4 rounded-lg">
                                                    {caseStudies[3].keyHighlights?.map((highlight, i) => (
                                                        <div key={i} className="flex items-start space-x-3 mb-4 last:mb-0">
                                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">
                                                                {i+1}
                                                            </div>
                                                            <p className="text-sm text-slate-700">{highlight}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={fadeInRight}>
                                        <h3 className="text-xl font-semibold text-green-700 mb-6 flex items-center">
                                            <CheckCircleIcon className="w-6 h-6 mr-2" />
                                            Solution Highlights & Benefits
                                        </h3>
                                        <div className="grid grid-cols-1 gap-4">
                                            {caseStudies[3].solutionHighlights?.map((item, i) => (
                                                <SolutionHighlight key={i} item={item} />
                                            ))}
                                        </div>

                                        <div className="mt-8 bg-gradient-to-r from-emerald-50 to-green-50 p-5 rounded-xl">
                                            <h4 className="text-lg font-semibold text-green-700 mb-4">Key Metrics Improved:</h4>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                                                    <p className="text-2xl font-bold text-green-600">90%</p>
                                                    <p className="text-xs text-slate-600">Processing Time Reduction</p>
                                                </div>
                                                <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                                                    <p className="text-2xl font-bold text-green-600">95%</p>
                                                    <p className="text-xs text-slate-600">Error Rate Reduction</p>
                                                </div>
                                                <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                                                    <p className="text-2xl font-bold text-green-600">30%</p>
                                                    <p className="text-xs text-slate-600">Cost Savings</p>
                                                </div>
                                                <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                                                    <p className="text-2xl font-bold text-green-600">100%</p>
                                                    <p className="text-xs text-slate-600">Visibility & Traceability</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* --- Data Protection --- */}
                    <section className="py-20 bg-white">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.div {...motionContainerProps()}>
                                <motion.div className="text-center mb-16" variants={fadeInUp}>
                                    <h2 className="inline-flex items-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        <ShieldCheckIcon className="w-10 h-10 mr-3 text-blue-600" />
                                        {caseStudies[4].title}
                                    </h2>
                                    <p className="text-xl text-gray-600">{caseStudies[4].subtitle}</p>
                                </motion.div>

                                <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        {caseStudies[4].pillars?.map((pillar, i) => (
                                            <motion.div 
                                                key={pillar.title} 
                                                className="bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-md border border-blue-100 overflow-hidden"
                                                variants={fadeInUp}
                                                transition={{ delay: i * 0.1 }}
                                            >
                                                <div className="h-2 bg-blue-600"></div>
                                                <div className="p-6">
                                                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                                        <pillar.icon className="w-8 h-8 text-blue-600" />
                                                    </div>
                                                    <h3 className="text-xl font-semibold text-blue-800 mb-4">
                                                        {pillar.title}
                                                    </h3>
                                                    <ul className="space-y-3">
                                                        {pillar.points.map((point, idx) => (
                                                            <li key={idx} className="flex items-start">
                                                                <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                                                                <span className="text-sm text-slate-700">{point}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <motion.div 
                                        className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 shadow-md"
                                        variants={fadeInUp}
                                    >
                                        <h3 className="text-xl font-semibold text-blue-800 mb-4">Why Data Classification & Protection Matters</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h4 className="text-lg font-medium text-blue-700 mb-2">Regulatory Compliance</h4>
                                                <p className="text-sm text-slate-600">
                                                    Meet the requirements of data protection regulations like GDPR, HIPAA, and CCPA with comprehensive data classification and protection policies.
                                                </p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h4 className="text-lg font-medium text-blue-700 mb-2">Data Breach Prevention</h4>
                                                <p className="text-sm text-slate-600">
                                                    Reduce the risk of data breaches by identifying sensitive data and implementing appropriate protection measures across all environments.
                                                </p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h4 className="text-lg font-medium text-blue-700 mb-2">Operational Efficiency</h4>
                                                <p className="text-sm text-slate-600">
                                                    Streamline data management with automated scanning and classification, reducing manual effort and improving accuracy.
                                                </p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h4 className="text-lg font-medium text-blue-700 mb-2">Business Intelligence</h4>
                                                <p className="text-sm text-slate-600">
                                                    Gain valuable insights into your data landscape, enabling better decision-making and strategic planning.
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>
                </main>

                <Footer />

                {/* Global Styles */}
                <style jsx global>{`
                    html { scroll-behavior: smooth; }
                    .bg-grid-pattern {
                        background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E");
                    }
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

export default CaseStudiesPage;