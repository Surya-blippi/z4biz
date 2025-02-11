"use client";

import React, { useState, useEffect } from "react";
import {
  Code,
  Cpu,
  Database,
  Server,
  Bell,
  Zap,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Building,
  BarChart,
  FileText,
  Globe,
  Users,
  Leaf,
  Menu,
  X,
} from "lucide-react";

// Reusable Divider Component
const Divider = () => (
  <div className="w-full my-16 flex justify-center">
    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full"></div>
  </div>
);

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      title: "Consulting Services",
      subtitle: "Expert Guidance for Digital Transformation",
      content:
        "We offer functional and domain consulting as well as advisory services on Dynamics 365 platforms. Our expert Solution Architects and Functional Consultants provide tailored guidance to help you maximize the value of your investment in Dynamics 365. With over 15 years of experience across complex, multi-country, and multi-entity implementations, our senior consultants bring unparalleled expertise to ensure successful outcomes.",
      icon: Code,
      bgImage:
        "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%236366f1' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E",
    },
    {
      title: "Industry Verticals",
      subtitle: "Specialized Solutions for Your Industry",
      content:
        "We enhance CRM platforms by delivering industry-specific vertical and horizontal solutions that automate end-to-end operational processes for businesses not fully aligned with standard enterprise ERP and CRM systems. Our vertical solutions for Dynamics 365 and Zoho CRM complement your existing investments, seamlessly integrating with your business applications to enforce industry best practices across all operational processes.",
      icon: Server,
      bgImage:
        "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    },
    {
      title: "ESG & Data Solutions",
      subtitle: "Drive Sustainability and Data Excellence",
      content:
        "Our solution 4Scope helps organizations simplify their ESG reporting while ensuring alignment with top frameworks like GRI, SASB, and IFRS. Paired with expert consulting, 4Scope empowers businesses to meet regulatory requirements and engage stakeholders effectively. Our solution 4Vue is an AI-driven data engineering platform that streamlines data collection, transformation, and governance. With 4Vue, businesses can connect multiple data sources, automate data pipelines, and derive actionable insights from their data.",
      icon: Database,
      bgImage:
        "data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % services.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + services.length) % services.length);
  };

  // Smooth scroll function for navigation links
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden scroll-smooth">
      {/* Animated Background for the rest of the page */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950 via-black to-black" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(129,140,248,0.15),transparent_50%)]" />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-black/50 backdrop-blur-lg" : ""
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <Code className="w-8 h-8 text-indigo-500" />
                <div className="absolute -inset-2 bg-indigo-500/20 rounded-full blur group-hover:bg-indigo-500/30 transition-all duration-500" />
              </div>
              <span className="text-2xl font-light tracking-wider">Z4BIZ</span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all font-light"
              >
                About Us
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, "services")}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all font-light"
              >
                Services
              </a>
              <a
                href="#products"
                onClick={(e) => handleNavClick(e, "products")}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all font-light"
              >
                Products
              </a>
              <a
                href="#resources"
                onClick={(e) => handleNavClick(e, "resources")}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all font-light"
              >
                Resources
              </a>
              <button className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all font-light">
                Contact Us →
              </button>
            </div>
            {/* Mobile Navigation Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2"
              >
                {mobileMenuOpen ? (
                  <X className="w-8 h-8 text-white" />
                ) : (
                  <Menu className="w-8 h-8 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg">
            <div className="container mx-auto px-6 py-4 flex flex-col items-center space-y-4">
              <a
                href="#about"
                onClick={(e) => {
                  handleNavClick(e, "about");
                  setMobileMenuOpen(false);
                }}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all font-light"
              >
                About Us
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  handleNavClick(e, "services");
                  setMobileMenuOpen(false);
                }}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all font-light"
              >
                Services
              </a>
              <a
                href="#products"
                onClick={(e) => {
                  handleNavClick(e, "products");
                  setMobileMenuOpen(false);
                }}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all font-light"
              >
                Products
              </a>
              <a
                href="#resources"
                onClick={(e) => {
                  handleNavClick(e, "resources");
                  setMobileMenuOpen(false);
                }}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all font-light"
              >
                Resources
              </a>
              <button className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all font-light">
                Contact Us →
              </button>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section with Background Video */}
        <section
          id="hero"
          className="relative h-screen flex flex-col items-center justify-center px-6 text-center"
        >
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-light backdrop-blur-sm mb-6">
              <Bell className="w-4 h-4 mr-2 text-indigo-400" />
              Enterprise Technology Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-light mb-6 leading-tight tracking-tight">
              Transform Your
              <span className="block relative mt-2">
                <span className="relative inline-block">
                  Business
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-400 opacity-20 blur-2xl -z-10" />
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-400">
                  Technology
                </span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-8">
              Empowering businesses with cutting-edge technology solutions and innovative digital transformation strategies.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-indigo-400 text-white rounded-xl inline-flex items-center space-x-2 hover:opacity-90 transition-all">
              <span>Get Started</span>
              <Zap className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Divider */}
        <Divider />

        {/* About Us Section */}
        <div id="about" className="mb-32 relative px-6">
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5,#6366f1)] opacity-5"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z")',
            }}
          />
          <div className="text-center relative pt-24 pb-12">
            <h2 className="text-5xl font-light mb-4">About Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Discover our comprehensive range of technology solutions and services.
            </p>
          </div>
          {/* About Us slider (Services preview) */}
          <div className="relative max-w-6xl mx-auto px-4">
            {/* Navigation Arrows */}
            <button
              onClick={prevCard}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 p-4 bg-indigo-500/20 hover:bg-indigo-500/30 rounded-full z-10 transition-transform duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-8 h-8 text-indigo-400" />
            </button>
            <button
              onClick={nextCard}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 p-4 bg-indigo-500/20 hover:bg-indigo-500/30 rounded-full z-10 transition-transform duration-300 hover:scale-110"
            >
              <ChevronRight className="w-8 h-8 text-indigo-400" />
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden">
              <div
                className="transition-transform duration-500 ease-in-out flex"
                style={{ transform: `translateX(-${currentCard * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={index} className="min-w-full px-4">
                    <div className="relative group transform transition-all duration-300 hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-3xl opacity-50 blur-sm group-hover:opacity-80"></div>
                      <div
                        className="relative p-12 bg-black/50 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
                        style={{
                          backgroundImage: `url("${service.bgImage}")`,
                          backgroundRepeat: "repeat",
                        }}
                      >
                        <div className="flex flex-col h-full relative z-10">
                          <div className="flex items-center space-x-4 mb-8">
                            <div className="p-4 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-2xl shadow-lg">
                              <service.icon className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-3xl font-light mb-2">
                                {service.title}
                              </h3>
                              <p className="text-indigo-400 text-lg">
                                {service.subtitle}
                              </p>
                            </div>
                          </div>
                          <p className="text-gray-300 font-light leading-relaxed text-lg mb-8">
                            {service.content}
                          </p>
                          <button className="mt-auto inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                            <span className="text-lg">Learn More</span>
                            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCard(index)}
                  className={`w-4 h-4 rounded-full transition-transform duration-300 hover:scale-110 ${
                    currentCard === index
                      ? "bg-gradient-to-r from-indigo-500 to-indigo-400 shadow-lg"
                      : "bg-indigo-500/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <Divider />

        {/* Services Section */}
        <div id="services" className="mb-32 px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Expert consulting and technology solutions for your business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Dynamics365 Expert Consulting",
                desc: "Specialized consulting services for Microsoft Dynamics 365 implementation, customization, and optimization.",
                icon: Code,
                gradient: "from-indigo-500 to-indigo-400",
              },
              {
                title: "Catalyst Workshops",
                desc: "Interactive workshops designed to accelerate your digital transformation journey.",
                icon: Users,
                gradient: "from-violet-500 to-violet-400",
              },
              {
                title: "Extended IT",
                desc: "Comprehensive IT support and infrastructure management services.",
                icon: Server,
                gradient: "from-blue-500 to-blue-400",
              },
              {
                title: "Sustainability Consulting",
                desc: "Expert guidance on implementing sustainable business practices and ESG reporting.",
                icon: Leaf,
                gradient: "from-emerald-500 to-emerald-400",
              },
            ].map((service, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/0 rounded-2xl opacity-50 group-hover:opacity-100 blur transition duration-500" />
                <div className="relative p-10 bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10 h-full">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 bg-gradient-to-r ${service.gradient} rounded-xl shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-light">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 font-light leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <button className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                    <span className="text-lg">Explore Service</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <Divider />

        {/* Products & Platforms Section */}
        <div id="products" className="mb-32 px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-4">Products & Platforms</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Innovative solutions for modern business challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Z-Estate",
                desc: "Real Estate Property Management.",
                icon: Building,
                gradient: "from-violet-500 to-violet-400",
              },
              {
                title: "M-Stream",
                desc: "Efficient Management Reporting.",
                icon: BarChart,
                gradient: "from-blue-500 to-blue-400",
              },
              {
                title: "Calibre",
                desc: "Automate RFP Response.",
                icon: FileText,
                gradient: "from-green-500 to-green-400",
              },
              {
                title: "Data",
                desc: "Data Platforms.",
                icon: Database,
                gradient: "from-orange-500 to-orange-400",
              },
              {
                title: "ESG",
                desc: "Sustainability & Compliance Solutions.",
                icon: Globe,
                gradient: "from-emerald-500 to-emerald-400",
              },
              {
                title: "AI & Automation",
                desc: "Intelligent Process Automation.",
                icon: Cpu,
                gradient: "from-rose-500 to-rose-400",
              },
            ].map((product, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/0 rounded-2xl opacity-50 group-hover:opacity-100 blur transition duration-500" />
                <div className="relative p-8 bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10 h-full">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-3 bg-gradient-to-r ${product.gradient} rounded-xl`}>
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-light">{product.title}</h3>
                  </div>
                  <p className="text-gray-400 font-light leading-relaxed mb-4">
                    {product.desc}
                  </p>
                  <button className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <Divider />

        {/* Resources Section */}
        <div id="resources" className="mb-32 px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-4">Resources</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Stay updated with our latest news, blogs, and case studies.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* News Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-2xl opacity-50 group-hover:opacity-100 blur transition duration-500" />
              <div className="relative p-8 bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10 h-full">
                <h3 className="text-xl font-light mb-4">News</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-6">
                  Get the latest updates on our company and industry trends.
                </p>
                <button className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Blogs Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-2xl opacity-50 group-hover:opacity-100 blur transition duration-500" />
              <div className="relative p-8 bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10 h-full">
                <h3 className="text-xl font-light mb-4">Blogs</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-6">
                  Explore insights, tips, and trends in the technology space.
                </p>
                <button className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Case Studies Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-2xl opacity-50 group-hover:opacity-100 blur transition duration-500" />
              <div className="relative p-8 bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10 h-full">
                <h3 className="text-xl font-light mb-4">Case Studies</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-6">
                  Discover how our solutions have transformed businesses.
                </p>
                <button className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-32 px-6">
        <div className="container mx-auto py-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
            <span className="text-gray-500 font-light">
              © 2025 Z4BIZ Technologies. All rights reserved.
            </span>
            <div className="flex flex-col text-gray-500 font-light">
              <span>Call us: +971 50 188 7848 / +971 55 413 2942</span>
              <span>Email us: info@z4biz.com</span>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-white transition-colors font-light">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors font-light">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
