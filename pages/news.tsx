import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
    CalendarIcon,
    NewspaperIcon,
    ArrowRightIcon,
    // Keeping these icons available if needed for future tags/content
    GlobeAsiaAustraliaIcon,
    UserGroupIcon,
    BuildingOfficeIcon,
    CubeIcon,
    ChevronRightIcon
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
interface NewsArticle {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    content: string[];
    tags?: string[];
}

// --- Updated News Articles Data Structure ---
const newsArticles: NewsArticle[] = [
    {
        id: 'uae-infrastructure-provider-zoho-one',
        title: '50-Year-Old Reputed Infrastructure Solutions Provider in the UAE Selects Z4BIZ to Implement Zoho One for 124 Users Across Multi-Country, Multi-Division Operations',
        date: 'March 28, 2025',
        excerpt: "A leading infrastructure solutions provider, with a 50-year legacy, has chosen Z4BIZ for a major Zoho One implementation project across multiple divisions and countries.",
        content: [
            "A leading infrastructure solutions provider, with a 50-year legacy and headquartered in the UAE, has selected Z4BIZ to implement Zoho One for its 124-user Sales, Sales-Support, and Logistics teams. The company's operations span multiple divisions and locations across the region, partnering with globally renowned brands to deliver innovative infrastructure products and solutions for major projects.",
            "Z4BIZ was chosen for its proven domain expertise and deep understanding of best practices in sales processes specific to the infrastructure projects sector. By leveraging this knowledge, Z4BIZ demonstrated how Zoho One's CRM capabilities align seamlessly with the customer's complex sales processes and project tracking needs. The platform's user-friendly interface and flexible configuration further assured the customer of a smooth transition and high adoption rates among their geographically dispersed sales force.",
            "A critical factor in securing this project win was Z4BIZ's expertise in guiding large teams through the transition from manual workflows to system-driven automation as part of enterprise-wide business transformation initiatives.",
            "The project scope includes the deployment of Zoho One's CRM as a comprehensive Sales Force Automation tool. The system will manage the entire sales lifecycle—from regional project tracking, stakeholder mapping, and lead generation to project contract closure and milestone tracking. With Zoho One, the customer's sales teams will collaborate efficiently on a unified platform, enabling seamless coordination between Sales, Sales-Support, and Logistics teams. Additionally, the platform will provide real-time 360-degree visibility across Projects, Opportunities, Accounts, and Sales Orders."
        ],
        tags: ["Zoho One", "CRM Implementation", "Infrastructure Sector", "UAE", "Enterprise Solution", "Sales Force Automation"]
    },
    {
        id: 'marine-logistics-esg-platform',
        title: 'Z4BIZ and 4SEER commence enterprise ESG Platform implementation for Large Marine Logistics & Services company',
        date: 'January 7, 2025',
        excerpt: "Z4BIZ partners with 4SEER to deploy an ESG platform for a major marine logistics company, focusing on GRI-aligned reporting and sustainability.",
        content: [
            "We're thrilled to announce the launch of our ESG platform deployment for a leading marine services operation, part of the UAE's foremost diversified energy group!",
            "This ambitious project marks a significant step forward in driving sustainability, leveraging comprehensive ESG reporting aligned with GRI principles. With 15 key material topics and protocols spanning Scope 1, 2, and 3 emissions, we're helping our client achieve actionable insights and measurable impact.",
            "Executed in two phases, the project involves close collaboration with the client's ESG team to transform their sustainability initiatives into a robust reporting framework. Here's to shaping a sustainable future—one deployment at a time."
        ],
        tags: ["ESG", "Sustainability", "Marine Logistics", "GRI Reporting", "Partnership", "4SEER", "UAE"]
    },
    {
        id: 'global-law-group-zoho',
        title: 'Z4BIZ wins a Zoho CRM and Projects Implementation deal from Global Law Group specializing in Corporate and Commercial Law',
        date: 'December 1, 2024',
        excerpt: "Z4BIZ selected to implement Zoho CRM & Projects for a global law firm, automating processes across multiple international locations.",
        content: [
            "Z4BIZ has been selected to implement Zoho CRM & PROJECTS for a 15-User Sales and Operations Team operating out of 3 Locations worldwide. The customer organization constitutes of a team of highly qualified Lawyers and Legal Consultants with 20 years of international experience in Corporate and Commercial Law. They work with corporations and business owners around the globe from their offices in Italy, China and the UAE.",
            "The customer had a myriad of processes that needed to be automated across user touch points, including touch points with external stakeholders. Z4BIZ effectively showcased the application of the different connected Apps from Zoho that would allow seamless flows of information from Lead Generation to Sales Processes until Contracting and from Project initiation to successful Project Closure and Customer Satisfaction surveys.",
            "The Project is intended to automate flexible contract creation and signoffs, KYC processes, and tracking of the Project for monitoring and facilitating timely billing based on terms defined in the contract, amongst other process automations, ensuring availability of full 360-degree views to Customer Accounts and Project Statuses.",
            "The Project will be executed in 2 Phases and expected to go Live early 2025, replacing their current solution developed on a popular enterprise CRM platform that users found difficult to adopt and has not provided the customer the best returns on investment.",
            "The Project involves deployment of the following connected Apps from the Zoho One Platform, seamlessly working together to form the Core Operations Platform for the customer's business: CRM (Sales Force Automation), CONTRACTS, SIGN (Contract Sign-Offs), PROJECTS (Task Execution, Status/Milestone Tracking, Financial Integration with BOOKS), EXPENSE (Project Expense Tracking), CLIQ (Internal Collaboration), and MARKETING AUTOMATION (Campaign Processes, Customer Engagement)."
        ],
        tags: ["Zoho CRM", "Zoho Projects", "Zoho One", "Legal Sector", "Process Automation", "Global Implementation", "Contract Management"]
    },
    {
        id: 'global-pipes-supplier-zoho-crm',
        title: 'Global Pipes, Valves and Fittings supplier selects Z4BIZ for 80 User Zoho CRM Implementation',
        date: 'November 12, 2024',
        excerpt: "A leading global supplier in the Oil & Gas and Energy sectors chooses Z4BIZ for an 80-user Zoho CRM implementation across 15 locations.",
        content: [
            "Z4BIZ has been selected to implement Zoho CRM for an 80 User Sales Team operating out of 15 Locations worldwide. The customer is a leading Pipes, Valves and Fittings supplier serving the material requirements of customer projects in the Oil & Gas and Energy sectors.",
            "Z4BIZ effectively showcased the remarkable ease of use and configuration of the Zoho Platforms, instilling confidence in the customer that their large sales force, spread across multiple geographies, would seamlessly adopt the new application. Z4BIZ's expertise in guiding large user teams through the transition from manual processes to system-driven automation, as part of enterprise business automation implementations, was a key factor in securing this win.",
            "The Project involves deployment of Zoho CRM Enterprise as the Sales Force Automation tool managing all processes from Lead Generation to Project Contract Closure and Project Status and Milestone Tracking. Sales Teams across the Middle East, Americas, Europe and South East Asia would work on one single platform to capture Sales Data and efficiently collaborate on Projects that involve stakeholder involvement from across operational geographies."
        ],
        tags: ["Zoho CRM", "Oil & Gas", "Energy Sector", "Supply Chain", "Sales Force Automation", "Global Implementation", "Enterprise Solution"]
    }
];


// --- Component Props Interfaces ---
interface NewsArticleCardProps {
    article: NewsArticle;
    featured?: boolean; // Keep featured prop for potential future use, though grid doesn't use it
}

interface TagProps {
    text: string;
}

// --- Helper Components ---
const Tag: React.FC<TagProps> = ({ text }) => (
    <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-1 rounded-full mr-2 mb-2">
        {text}
    </span>
);

const NewsArticleCard: React.FC<NewsArticleCardProps> = ({ article }) => (
    <motion.div
        className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg flex flex-col`} // Added flex flex-col
        variants={fadeInUp}
    >
        <div className="p-6 flex flex-col flex-grow"> {/* Added flex flex-col flex-grow */}
            <div className="flex items-center text-sm text-gray-500 mb-3">
                <CalendarIcon className="w-4 h-4 mr-1.5 flex-shrink-0" /> {/* Added flex-shrink-0 */}
                <span>{article.date}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{article.excerpt}</p> {/* Increased line-clamp and added flex-grow */}
            <div className="mt-auto pt-2"> {/* Ensures button stays at bottom */}
                <a
                    href={`#${article.id}`}
                    className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800"
                    onClick={(e) => { // Smooth scroll handling
                      e.preventDefault();
                      const targetElement = document.getElementById(article.id);
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                >
                    Read full story
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </div>
    </motion.div>
);


interface DetailedNewsArticleProps { // Renamed interface for clarity
    article: NewsArticle;
    isFeatured?: boolean; // Flag to know if it's the main featured article
}

const DetailedNewsArticle: React.FC<DetailedNewsArticleProps> = ({ article, isFeatured = false }) => (
    <section id={article.id} className={`py-16 ${isFeatured ? 'bg-white' : 'bg-slate-50 border-t border-gray-200'}`}> {/* Conditional background/border */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...motionContainerProps()}>
                <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center">
                        <div className="bg-indigo-100 p-2 rounded-full mr-4">
                            <NewspaperIcon className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                            <CalendarIcon className="w-4 h-4 mr-1.5" />
                            <span>{article.date}</span>
                        </div>
                    </div>

                    <motion.h2
                        className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
                        variants={fadeInUp}
                    >
                        {article.title}
                    </motion.h2>

                    <div className="flex flex-wrap mb-8">
                        {article.tags?.map((tag, i) => (
                            <Tag key={i} text={tag} />
                        ))}
                    </div>

                    <motion.div variants={fadeInLeft}>
                        <div className="prose prose-indigo max-w-none">
                            {article.content.map((paragraph, i) => (
                                <p key={i} className="mb-4 text-slate-700">{paragraph}</p>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    </section>
);

// --- News Page Component ---
const NewsPage: React.FC = () => {
    // Articles are now ordered chronologically in the data structure
    const allArticles = newsArticles; // Use all articles

    return (
        <>
            <Head>
                <title>Latest News & Announcements | Z4BIZ Technologies</title>
                <meta
                    name="description"
                    content="Stay up-to-date with the latest news, updates, and announcements from Z4BIZ Technologies."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
                <Navigation />

                <main className="flex-grow">
                    {/* --- Hero Section --- UPDATED COLORS FOR BETTER NAVBAR VISIBILITY --- */}
                    <section className="relative pt-32 md:pt-40 pb-24 md:pb-32 bg-gradient-to-b from-blue-100 to-indigo-200 text-slate-800">
                        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                        <motion.div
                            className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.div
                                className="inline-block p-2 px-4 mb-6 rounded-full bg-indigo-500 text-white text-sm font-medium"
                                variants={fadeInUp}
                            >
                                Stay Informed
                            </motion.div>
                            <motion.h1
                                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-indigo-900"
                                variants={fadeInUp}
                            >
                                Latest News & Updates
                            </motion.h1>
                            <motion.p
                                className="text-lg md:text-xl text-indigo-700 max-w-2xl mx-auto mb-8"
                                variants={fadeInUp}
                            >
                                Keep up with the latest announcements, achievements, and innovations from Z4BIZ Technologies.
                            </motion.p>
                            <motion.div variants={fadeInUp}>
                                <a href={`#${allArticles[0].id}`} // Link to the first article's ID
                                   className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300"
                                   onClick={(e) => { // Smooth scroll handling
                                     e.preventDefault();
                                     const targetElement = document.getElementById(allArticles[0].id);
                                     if (targetElement) {
                                       targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                     }
                                   }}
                                >
                                    Read Latest News
                                    <ArrowRightIcon className="ml-2 w-4 h-4" />
                                </a>
                            </motion.div>
                        </motion.div>
                    </section>

                    {/* --- Display All News Articles --- */}
                    {allArticles.map((article, index) => (
                        <DetailedNewsArticle
                            key={article.id}
                            article={article}
                            isFeatured={index === 0} // Mark the first one as featured for styling
                        />
                    ))}

                    {/* --- Optional: Add a section for older news cards if needed --- */}
                    {/* If you have many articles, you might want to revert to showing only the latest full article */}
                    {/* and the rest as cards. For now, showing all full articles sequentially. */}
                    {/* You could uncomment and adapt the grid section if preferred for > 4 articles */}
                    {/*
                    <section className="py-16 bg-gradient-to-br from-slate-50 to-indigo-50">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                             <motion.div
                                className="text-center mb-12"
                                // ... motion props ...
                            >
                                <motion.h2 className="text-3xl font-bold ..." variants={fadeInUp}>
                                    Older News
                                </motion.h2>
                                // ... divider ...
                            </motion.div>
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                // ... motion props ...
                            >
                                {olderArticles.map((article) => (
                                    <NewsArticleCard key={article.id} article={article} />
                                ))}
                            </motion.div>
                        </div>
                    </section>
                    */}

                </main>

                <Footer />

                {/* Global Styles */}
                <style jsx global>{`
                    html { scroll-behavior: smooth; }
                    .bg-grid-pattern {
                        background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23312e81' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E");
                    }
                    .line-clamp-2 {
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }
                    .line-clamp-3 {
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }
                    /* Ensure prose styles don't override link colors */
                    .prose a {
                      color: inherit;
                      text-decoration: inherit;
                    }
                    .prose a:hover {
                      color: inherit;
                    }

                `}</style>
            </div>
        </>
    );
};

export default NewsPage;