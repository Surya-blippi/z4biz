import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
    CalendarIcon,
    NewspaperIcon,
    ArrowRightIcon,
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

// --- News Articles Data Structure ---
const newsArticles: NewsArticle[] = [
    {
        id: 'uae-infrastructure-provider',
        title: '50-Year-Old Reputed Infrastructure Solutions Provider in the UAE Selects Z4BIZ to Implement Zoho One for 124 Users Across Multi-Country, Multi-Division Operations',
        date: 'March 28, 2025',
        excerpt: "A leading infrastructure solutions provider has chosen Z4BIZ for a major Zoho One implementation project.",
        content: [
            "A leading infrastructure solutions provider, with a 50-year legacy and headquartered in the UAE, has selected Z4BIZ to implement Zoho One for its 124-user Sales, Sales-Support, and Logistics teams. The company's operations span multiple divisions and locations across the region, partnering with globally renowned brands to deliver innovative infrastructure products and solutions for major projects.",
            "Z4BIZ was chosen for its proven domain expertise and deep understanding of best practices in sales processes specific to the infrastructure projects sector. By leveraging this knowledge, Z4BIZ demonstrated how Zoho One's CRM capabilities align seamlessly with the customer's complex sales processes and project tracking needs. The platform's user-friendly interface and flexible configuration further assured the customer of a smooth transition and high adoption rates among their geographically dispersed sales force.",
            "A critical factor in securing this project win was Z4BIZ's expertise in guiding large teams through the transition from manual workflows to system-driven automation as part of enterprise-wide business transformation initiatives.",
            "The project scope includes the deployment of Zoho One's CRM as a comprehensive Sales Force Automation tool. The system will manage the entire sales lifecycle—from regional project tracking, stakeholder mapping, and lead generation to project contract closure and milestone tracking. With Zoho One, the customer's sales teams will collaborate efficiently on a unified platform, enabling seamless coordination between Sales, Sales-Support, and Logistics teams. Additionally, the platform will provide real-time 360-degree visibility across Projects, Opportunities, Accounts, and Sales Orders."
        ],
        tags: ["Zoho One", "CRM Implementation", "Infrastructure Sector", "UAE", "Enterprise Solution"]
    },
    {
        id: 'placeholder-news-1',
        title: 'Z4BIZ Announces Strategic Partnership with Leading Cloud Services Provider',
        date: 'March 15, 2025',
        excerpt: "Strategic partnership aims to enhance cloud-based business solutions for enterprise clients.",
        content: [
            "Placeholder text for the second news article. Detailed information about the partnership will be added later.",
            "This section will include information about the scope of the partnership, technologies involved, and benefits for clients.",
            "Additional paragraphs will elaborate on strategic goals, market positioning, and growth opportunities resulting from this collaboration."
        ],
        tags: ["Partnership", "Cloud Services", "Enterprise Solutions"]
    },
    {
        id: 'placeholder-news-2',
        title: 'Z4BIZ Recognized for Excellence in Digital Transformation Services',
        date: 'February 22, 2025',
        excerpt: "Industry recognition highlights Z4BIZ's innovative approach to business technology solutions.",
        content: [
            "Placeholder text for the third news article. Detailed information about the industry recognition and awards will be added later.",
            "This section will include quotes from leadership, details about the award criteria, and examples of successful projects that led to this recognition.",
            "Additional paragraphs will discuss the company's approach to digital transformation and future innovation roadmap."
        ],
        tags: ["Awards", "Digital Transformation", "Industry Recognition"]
    },
    {
        id: 'placeholder-news-3',
        title: 'Z4BIZ Expands Operations with New Regional Office',
        date: 'January 18, 2025',
        excerpt: "Strategic expansion strengthens Z4BIZ's presence in growing markets and enhances client support capabilities.",
        content: [
            "Placeholder text for the fourth news article. Detailed information about the new office location and expansion strategy will be added later.",
            "This section will include details about the new facility, staffing plans, and service capabilities being added through this expansion.",
            "Additional paragraphs will discuss market opportunities in the region and the company's growth trajectory."
        ],
        tags: ["Expansion", "Global Presence", "Growth Strategy"]
    }
];

// --- Component Props Interfaces ---
interface NewsArticleCardProps {
    article: NewsArticle;
    featured?: boolean;
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

const NewsArticleCard: React.FC<NewsArticleCardProps> = ({ article, featured = false }) => (
    <motion.div 
        className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg ${featured ? 'lg:col-span-2' : ''}`}
        variants={fadeInUp}
    >
        <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-3">
                <CalendarIcon className="w-4 h-4 mr-1.5" />
                <span>{article.date}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
            <a 
                href={`#${article.id}`} 
                className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800"
            >
                Read full story
                <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
        </div>
    </motion.div>
);

const DetailedNewsArticle: React.FC<NewsArticleCardProps> = ({ article }) => (
    <section id={article.id} className="py-16 bg-white">
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
    // Extract the featured article (first one) and the rest
    const featuredArticle = newsArticles[0];
    const otherArticles = newsArticles.slice(1);

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
                                Stay Informed
                            </motion.div>
                            <motion.h1
                                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight"
                                variants={fadeInUp}
                            >
                                Latest News & Updates
                            </motion.h1>
                            <motion.p
                                className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto mb-8"
                                variants={fadeInUp}
                            >
                                Keep up with the latest announcements, achievements, and innovations from Z4BIZ Technologies.
                            </motion.p>
                            <motion.div variants={fadeInUp}>
                                <a href="#featured-news" className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-indigo-700 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                                    Read Latest News
                                    <ArrowRightIcon className="ml-2 w-4 h-4" />
                                </a>
                            </motion.div>
                        </motion.div>
                    </section>

                    <div id="featured-news" className="py-2">
                        {/* Invisible anchor for smooth scrolling */}
                    </div>

                    {/* --- Featured News Article --- */}
                    <DetailedNewsArticle article={featuredArticle} />

                    {/* --- News Articles Grid --- */}
                    <section className="py-16 bg-gradient-to-br from-slate-50 to-indigo-50">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.div 
                                className="text-center mb-12"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                            >
                                <motion.h2 
                                    className="text-3xl font-bold text-gray-900 mb-2"
                                    variants={fadeInUp}
                                >
                                    More News & Updates
                                </motion.h2>
                                <motion.div 
                                    className="w-16 h-1 bg-indigo-600 mx-auto"
                                    variants={fadeInUp}
                                ></motion.div>
                            </motion.div>

                            <motion.div 
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                            >
                                {otherArticles.map((article) => (
                                    <NewsArticleCard key={article.id} article={article} />
                                ))}
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
                    .line-clamp-2 {
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }
                `}</style>
            </div>
        </>
    );
};

export default NewsPage;