"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function AssemblyCells() {
  // Wrap items in useMemo to prevent recreation on every render
  const items = useMemo(() => [
    { 
      id: 2,
      title: "Assembly Line 1", 
      src: "/assets/Assy line 1.jpeg",
      category: "Full Line",
      description: "Modular assembly line configuration with quality checkpoints"
    },
    { 
      id: 5,
      title: "Assembly Line", 
      src: "/assets/Assy line.JPG",
      category: "Full Line",
      description: "Flexible assembly line supporting multiple product variants"
    },
    { 
      id: 6,
      title: "Auto Bowl Feeder", 
      src: "/assets/Auto Bowl feeder.JPG",
      category: "Component",
      description: "Automated part feeding system for consistent component supply"
    },
    { 
      id: 7,
      title: "Connector Engagement", 
      src: "/assets/Connector engagement fixture.JPG",
      category: "Station",
      description: "Precision fixture for automated connector engagement"
    },
    { 
      id: 8,
      title: "Conveyor Line", 
      src: "/assets/Conveyor line.jpeg",
      category: "Transport",
      description: "Material transport system with position tracking"
    },
    { 
      id: 9,
      title: "Pressing Fixture", 
      src: "/assets/Pressing Fixture.JPG",
      category: "Station",
      description: "Controlled force application fixture with feedback monitoring"
    },
    { 
      id: 10,
      title: "Screw Fixturing", 
      src: "/assets/Screw fixing with position arm.jpg",
      category: "Station",
      description: "Automated screwing station with position control arm"
    },
    { 
      id: 11,
      title: "Station with Enclosure", 
      src: "/assets/Station with Enclosure.JPG",
      category: "Station",
      description: "Safety-enclosed assembly station with operator interface"
    },
    { 
      id: 12,
      title: "Pressing Station", 
      src: "/assets/Station-Pressing.JPG",
      category: "Station",
      description: "Dedicated pressing station with force monitoring"
    },
  ], []);

  const [selected, setSelected] = useState(null);
  const [index, setIndex] = useState(0);
  const modalRef = useRef();

  useEffect(() => {
    function onKey(e) {
      if (!selected) return;
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + items.length) % items.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, items.length]);

  useEffect(() => {
    if (selected) {
      const foundIndex = items.findIndex((f) => f.id === selected.id);
      setIndex(foundIndex >= 0 ? foundIndex : 0);
    }
  }, [selected, items]);

  useEffect(() => {
    if (!selected) return;
    setSelected(items[index]);
  }, [index, items]);

  const openAt = (item) => setSelected(item);
  const closeModal = () => setSelected(null);
  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  const stats = [
    { 
      value: "95%", 
      label: "Automation Rate",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-blue-500 to-indigo-600"
    },
    { 
      value: "300+", 
      label: "Units/Hour",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-green-500 to-emerald-600"
    },
    { 
      value: "99.7%", 
      label: "First Pass Yield",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-purple-500 to-pink-600"
    },
    { 
      value: "24/7", 
      label: "Production Ready",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-orange-500 to-red-600"
    }
  ];

  const features = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Precision Fixturing",
      description: "High-accuracy fixtures ensure consistent alignment and positioning across all assembly operations"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      title: "Conveyor Integration",
      description: "Seamless material flow with synchronized conveyor systems and smart buffering"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Modular Design",
      description: "Scalable stations support multiple product variants with quick changeover capabilities"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Smart Tooling",
      description: "Integrated screwdrivers, presses, and feeders with real-time process monitoring"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Vision Systems",
      description: "Advanced optical inspection and poka-yoke verification at critical assembly stages"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
        </svg>
      ),
      title: "MES Connectivity",
      description: "Full traceability with real-time data logging and ERP/MES integration"
    }
  ];

  const deliverables = [
    "High-precision fixture designs for consistent assembly alignment",
    "Conveyor-integrated lines for continuous material flow",
    "Modular and scalable assembly stations for multiple variants",
    "Integration of screwdrivers, presses, bowl feeders & vision",
    "Robust safety enclosures and ergonomic operator stations",
    "Industry-standard sensors, poka-yoke checks, and MES connectivity"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-300 rounded-full opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400 to-blue-300 rounded-full opacity-10 blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 lg:px-8 lg:py-16">
        {/* Hero Section */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-white rounded-full shadow-lg shadow-blue-100 mb-6 border border-blue-100"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-semibold text-gray-700">PRODUCTION LINE AUTOMATION</span>
          </motion.div>

          <h1 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Assembly Cells
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Purpose-built automated assembly stations integrating fixtures, conveyors, and intelligent 
            tooling systems for high-productivity manufacturing
          </p>
          
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Fully Automated
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Modular Design
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Smart Integration
            </div>
          </div>
        </motion.header>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-xl shadow-blue-100/50 border border-gray-100 text-center group hover:border-blue-200 transition-all"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-black text-gray-800 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* About Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl shadow-blue-100/50 p-8 lg:p-12 mb-16 border border-gray-100"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold text-sm">Overview</span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Next-Generation Assembly Automation
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Assembly Cells are sophisticated manufacturing stations designed to automate and 
                streamline product assembly processes. These integrated systems combine fixtures, 
                conveyors, feeders, and smart tooling to deliver high productivity, exceptional 
                repeatability, and enhanced operator safety across manual, semi-automated, and 
                fully automated production environments.
              </p>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  What We Deliver
                </h3>
                <div className="space-y-2">
                  {deliverables.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.05 }}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <div className="mt-1 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Assembly Types", value: "Manual to Fully Auto", icon: "🔧" },
                { label: "Cycle Time", value: "10-60 seconds", icon: "⏱️" },
                { label: "Flexibility", value: "Multi-variant", icon: "🔄" },
                { label: "Safety", value: "CE Compliant", icon: "🛡️" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white border-2 border-gray-100 rounded-2xl p-6 text-center hover:border-blue-200 transition-all shadow-lg"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                  <div className="font-bold text-gray-800">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
              Key Features & Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced technologies integrated for maximum efficiency and quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg shadow-blue-100/50 border border-gray-100 hover:border-blue-200 transition-all group"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
              Assembly Cell Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our portfolio of automated assembly systems and stations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-2xl shadow-xl shadow-blue-100/50 overflow-hidden cursor-pointer border border-gray-100 hover:border-blue-200 transition-all"
                onClick={() => openAt(item)}
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                  <Image 
                    src={item.src} 
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover overlay with icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl"
                    >
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600 border border-blue-100">
                    {item.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all">
                    View Details
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-2xl shadow-blue-200/50 p-8 lg:p-12 text-center text-white overflow-hidden relative"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Ready to Automate Your Assembly Line?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let our experts design a custom assembly solution optimized for your production requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Catalog
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Modal Viewer */}
      <AnimatePresence>
        {selected && (
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm px-4"
            onClick={(e) => {
              if (e.target === modalRef.current) closeModal();
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Section */}
              <div className="relative bg-black">
                <div className="relative w-full max-h-[70vh]">
                  <Image 
                    src={selected.src} 
                    alt={selected.title}
                    width={1200}
                    height={800}
                    className="w-full h-auto max-h-[70vh] object-contain" 
                  />
                </div>

                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-xl hover:bg-gray-100 transition-colors"
                  aria-label="close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                {/* Navigation Buttons */}
                {items.length > 1 && (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        prev();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-xl hover:bg-gray-100 transition-colors"
                      aria-label="previous"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        next();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-xl hover:bg-gray-100 transition-colors"
                      aria-label="next"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <span className="text-sm font-semibold text-gray-800">
                    {index + 1} / {items.length}
                  </span>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-6 bg-gradient-to-br from-white to-blue-50">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                      {selected.category}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{selected.title}</h3>
                    <p className="text-gray-600">{selected.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}