"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Server,
  Barcode,
  Monitor,
  BarChart3,
  Globe,
  Smartphone,
  Cloud,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Database,
  Settings,
  FileText,
  CheckCircle2,
  ArrowRight,
  Eye,
  Lock,
  Wifi,
  Layers,
  Activity,
} from "lucide-react";

const Traceware = () => {
  const components = [
    {
      title: "Traceware Server",
      icon: Server,
      gradient: "from-blue-500 to-blue-600",
      description:
        "The centralized control and data management system for production, lifecycle tracking, and measurement data.",
      features: [
        "Handles customer, factory, and production line information",
        "Stores product lifecycle and measurement data",
        "Coordinates communication with all client PCs",
        "Ensures full data traceability across the factory",
      ],
    },
    {
      title: "UID Generator",
      icon: Barcode,
      gradient: "from-indigo-500 to-indigo-600",
      description:
        "Generates unique identifiers (UIDs) for products to ensure transparency and product-level traceability.",
      features: [
        "Generates unique product codes",
        "Integrates with barcode & QR printers",
        "Supports QR codes for transparency",
        "Links every product to its lifecycle",
      ],
    },
    {
      title: "Traceware Client",
      icon: Monitor,
      gradient: "from-green-500 to-green-600",
      description:
        "Installed on each workstation, it manages barcode scanning and real-time communication with the server.",
      features: [
        "Scans product UID/barcode at each station",
        "Validates process data with server",
        "Reports pass/fail or rework",
        "Collects test & measurement data",
      ],
    },
    {
      title: "Traceware Client Manager",
      icon: BarChart3,
      gradient: "from-red-500 to-red-600",
      description:
        "Provides management and reporting tools for supervisors and managers with actionable analytics.",
      features: {
        "Manager Tools": [
          "Production Planning",
          "Data Management",
          "User Management",
          "Report Generation",
        ],
        Reports: [
          "Measurement Reports",
          "Production Reports",
          "Traceability Reports",
          "Rework & Summary Reports",
        ],
      },
    },
  ];

  const managerFeatures = [
    {
      icon: Globe,
      title: "Global Access",
      description: "Access from anywhere in the world through secure web browser",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Fully optimized for tablets and smartphones",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: Cloud,
      title: "Cloud-Based",
      description: "No installation required, instant updates and scalability",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: Eye,
      title: "Real-Time Visibility",
      description: "Monitor all production lines and traceability data live",
      color: "from-orange-500 to-red-400",
    },
    {
      icon: Settings,
      title: "Remote Control",
      description: "Configure and control Traceware clients remotely",
      color: "from-indigo-500 to-purple-400",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and role-based access control",
      color: "from-red-500 to-pink-400",
    },
  ];

  const managerCapabilities = [
    {
      category: "Production Management",
      icon: Activity,
      items: [
        "Real-time production monitoring",
        "Live dashboard with KPIs",
        "Production planning & scheduling",
        "Multi-line coordination",
        "Capacity planning tools",
      ],
    },
    {
      category: "Traceability Control",
      icon: Database,
      items: [
        "Complete product genealogy",
        "Serial number tracking",
        "Component-level traceability",
        "Quality event tracking",
        "Compliance documentation",
      ],
    },
    {
      category: "Analytics & Reporting",
      icon: TrendingUp,
      items: [
        "Customizable dashboards",
        "Advanced data analytics",
        "Automated report generation",
        "Trend analysis & forecasting",
        "Export to multiple formats",
      ],
    },
    {
      category: "User & Security",
      icon: Users,
      items: [
        "Role-based permissions",
        "Multi-factor authentication",
        "Audit trail logging",
        "User activity monitoring",
        "Compliance management",
      ],
    },
  ];

  const benefits = [
    {
      icon: CheckCircle2,
      title: "100% Traceability",
      text: "Track every product through its entire lifecycle with complete visibility",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      text: "Instant visibility into production status across all facilities",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      text: "Comprehensive analytics and reports for better decision making",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: Globe,
      title: "Anywhere Access",
      text: "Monitor and control operations from any device, anywhere",
      color: "from-orange-500 to-red-400",
    },
    {
      icon: Lock,
      title: "Secure & Compliant",
      text: "Enterprise-grade security meeting global compliance standards",
      color: "from-indigo-500 to-purple-400",
    },
    {
      icon: Layers,
      title: "Scalable Platform",
      text: "Grows with your business from single line to global operations",
      color: "from-red-500 to-pink-400",
    },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20"></div>

        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -left-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 -right-20 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative px-6 py-20 md:px-12 md:py-28">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Wifi className="w-4 h-4" />
              Next-Generation Manufacturing Intelligence
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Traceware Software
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              A comprehensive digital manufacturing platform ensuring complete
              product traceability, transparency, and quality control across your
              entire production ecosystem.
            </motion.p>

     
          </div>
        </div>
      </div>

      {/* Architecture Image */}
      <div className="px-6 md:px-12 -mt-16 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-4 border-4 border-white">
            <Image
              src="/assets/traceware.png"
              alt="Traceware Architecture"
              width={1200}
              height={800}
              className="rounded-xl w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Core Components Section */}
      <div className="px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
                <Layers className="w-4 h-4" />
                <span>System Architecture</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Core Components
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                Four powerful modules working together to deliver complete
                manufacturing intelligence
              </p>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {components.map((component, index) => {
              const IconComponent = component.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                >
                  {/* Gradient Border Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${component.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  <div className="relative bg-white m-[2px] rounded-2xl p-6 sm:p-8">
                    <div className="flex items-center mb-6">
                      <div
                        className={`p-3 sm:p-4 bg-gradient-to-r ${component.gradient} rounded-xl shadow-lg mr-4 sm:mr-5 transform group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="text-white w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {component.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                      {component.description}
                    </p>

                    {Array.isArray(component.features) ? (
                      <ul className="space-y-3">
                        {component.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm text-gray-700"
                          >
                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-sm">
                        {Object.entries(component.features).map(
                          ([category, items]) => (
                            <div key={category}>
                              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <div
                                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${component.gradient}`}
                                ></div>
                                {category}
                              </h4>
                              <ul className="space-y-2">
                                {items.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="text-gray-600 flex items-start"
                                  >
                                    <span className="text-gray-400 mr-2 mt-1">
                                      •
                                    </span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Traceware 2.0 Manager Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50"></div>

        {/* Animated Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative px-6 md:px-12 max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-200 text-sm font-semibold mb-6 border border-blue-400/30">
              <Cloud className="w-4 h-4" />
              Next-Generation Web Platform
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Introducing Traceware 2.0 Manager
            </h2>
            <p className="text-lg sm:text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed px-4">
              Revolutionary web-based management platform providing global
              visibility and control of your entire manufacturing operations from
              any device, anywhere in the world.
            </p>
          </motion.div>

          {/* Manager Screenshot/Image */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>

              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-2 border border-white/20 shadow-2xl">
                <Image
                  src="/assets/traceware2.png"
                  alt="Traceware 2.0 Manager Dashboard"
                  width={1200}
                  height={800}
                  className="rounded-xl w-full h-auto shadow-2xl"
                />

                {/* Floating badges */}
                <div className="absolute -top-4 sm:-top-6 left-4 sm:left-8 bg-green-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm shadow-lg flex items-center gap-2">
                  <Wifi className="w-3 h-3 sm:w-4 sm:h-4" />
                  Live
                </div>
                <div className="absolute -bottom-4 sm:-bottom-6 right-4 sm:right-8 bg-blue-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm shadow-lg flex items-center gap-2">
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                  Web-Based
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Features Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {managerFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div key={index} variants={fadeUp} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-white backdrop-blur-md rounded-xl p-5 sm:p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Capabilities Section */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {managerCapabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="bg-white backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/20"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {capability.category}
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {capability.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 sm:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-600 text-sm font-medium mb-4">
              <CheckCircle2 className="w-4 h-4" />
              <span>Platform Benefits</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why Choose Traceware?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Industry-leading features that set new standards in manufacturing
              intelligence
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-4"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div key={idx} variants={fadeUp} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 shadow-lg"></div>
                  <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-5 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {benefit.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-16 px-6">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Zap className="w-4 h-4" />
              <span>Get Started Today</span>
            </motion.div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6">
              Start Your Digital Transformation Today
            </h3>
            <p className="text-lg sm:text-xl text-blue-100 mb-8">
              Join industry leaders who trust Traceware for complete manufacturing
              visibility
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl text-base sm:text-lg">
                Get Started Now
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 border-2 border-white/30 text-base sm:text-lg">
                <FileText className="w-5 h-5" />
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Traceware;