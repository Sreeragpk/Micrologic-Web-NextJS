"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function BONFixtures() {
  const allImages = [
    { src: "/assets/StationBONFixture.JPG", alt: "BON Fixture Station - Front View", label: "Production Station", type: "realtime" },
    { src: "/assets/Stn-BON.JPG", alt: "BON Fixture Station - Side View", label: "Station Overview", type: "realtime" },
    { src: "/assets/BONAP1.webp", alt: "BON Assembly Plan 1", label: "Assembly Design", type: "design" },
    { src: "/assets/BON AS ITA 11.webp", alt: "BON Assembly ITA 11", label: "Technical Assembly", type: "design" },
    { src: "/assets/BON FM 11.webp", alt: "BON FM 11", label: "Component Layout", type: "design" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const timerRef = useRef(null);
  const autoAdvanceMs = 6000;

  useEffect(() => {
    if (!isZoomed && autoPlay) {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCurrentIndex((i) => (i + 1) % allImages.length);
      }, autoAdvanceMs);
    }
    return () => clearTimeout(timerRef.current);
  }, [currentIndex, isZoomed, autoPlay, allImages.length]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  const prev = () => {
    clearTimeout(timerRef.current);
    setCurrentIndex((i) => (i - 1 + allImages.length) % allImages.length);
  };

  const next = () => {
    clearTimeout(timerRef.current);
    setCurrentIndex((i) => (i + 1) % allImages.length);
  };

  const goToSlide = (index) => {
    clearTimeout(timerRef.current);
    setCurrentIndex(index);
  };

  const features = [
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Precision Clamping",
      description: "Advanced pneumatic clamping system ensures consistent pressure distribution across the PCB surface",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Rapid Testing",
      description: "High-speed pogo pins with gold-plated contacts for reliable electrical connectivity up to 100,000 cycles",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
      title: "Modular Design",
      description: "Interchangeable test modules accommodate various board sizes and test point configurations",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
      title: "Smart Alignment",
      description: "Laser-guided positioning system with ±0.05mm accuracy for precise board placement",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Real-Time Monitoring",
      description: "Integrated sensors provide live feedback on contact resistance, temperature, and test status",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
      title: "Easy Maintenance",
      description: "Tool-free component replacement and self-diagnostic routines minimize downtime",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const stats = [
    { 
      label: "Test Accuracy",
      value: "99.98%",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      color: "from-emerald-500 to-green-600"
    },
    { 
      label: "Cycle Life",
      value: "100K+",
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
      color: "from-blue-500 to-indigo-600"
    },
    { 
      label: "Setup Time",
      value: "<30s",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      color: "from-purple-500 to-pink-600"
    },
    { 
      label: "Board Sizes",
      value: "50-450mm",
      icon: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4",
      color: "from-orange-500 to-red-600"
    }
  ];

  const specifications = [
    { label: "Contact Force", value: "50-200g adjustable", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { label: "Positioning Accuracy", value: "±0.05mm", icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" },
    { label: "Test Points", value: "Up to 512 pins", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" },
    { label: "Operating Temp", value: "-10°C to 50°C", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
    { label: "Pneumatic Pressure", value: "0.5-0.7 MPa", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" },
    { label: "Interface", value: "USB 3.0 / Ethernet", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
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

      <div className="relative z-10 px-4 py-8 lg:px-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
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
              <span className="text-sm font-semibold text-gray-700">PRODUCTION READY</span>
              <span className="w-px h-4 bg-gray-300"></span>
              <span className="text-sm text-gray-500">Industry 4.0 Compatible</span>
            </motion.div>
            
            <h1 className="text-4xl lg:text-6xl font-black mb-4 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                BON Test Fixtures
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
              Professional Board-On testing fixtures engineered for precision, reliability, and efficiency
            </p>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              Advanced pneumatic clamping • High-speed testing • Modular architecture
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg shadow-blue-100/50 border border-gray-100 hover:border-blue-200 transition-all">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-3 shadow-lg`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                    </svg>
                  </div>
                  <div className="text-3xl font-black text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Carousel Section */}
          <div className="grid lg:grid-cols-5 gap-8 mb-12">
            {/* Carousel - Left Side (Larger) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl shadow-2xl shadow-blue-100/50 p-4 lg:p-6 border border-gray-100">
                {/* Image Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    key={allImages[currentIndex].type}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm ${
                      allImages[currentIndex].type === 'realtime'
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                        : 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                    }`}
                  >
                    {allImages[currentIndex].type === 'realtime' ? (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>Live Station</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Technical Design</span>
                      </>
                    )}
                  </motion.div>

                  {/* Auto-play Toggle */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setAutoPlay(!autoPlay)}
                    className={`p-2 rounded-xl transition-all ${
                      autoPlay ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {autoPlay ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </motion.button>
                </div>

                <div 
                  className="relative group cursor-crosshair"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => setMousePosition({ x: 50, y: 50 })}
                >
                  {/* Main Image Display */}
                  <div className="relative h-[400px] lg:h-[550px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.1, rotateY: 10 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        exit={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={allImages[currentIndex].src}
                          alt={allImages[currentIndex].alt}
                          fill
                          className="object-contain"
                          style={{
                            transform: `scale(1.05)`,
                            transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                            transition: 'transform 0.3s ease-out'
                          }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 40vw"
                          priority={currentIndex === 0}
                        />
                        
                        {/* Image Label Overlay */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white px-5 py-3 rounded-xl font-bold text-lg shadow-2xl border border-white/20"
                        >
                          {allImages[currentIndex].label}
                        </motion.div>

                        {/* Magnifying Effect */}
                        <div 
                          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: `radial-gradient(circle 200px at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.1) 0%, transparent 100%)`
                          }}
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
                      <motion.button
                        whileHover={{ scale: 1.15, x: -5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prev}
                        className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-xl hover:shadow-2xl transition-all hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 group"
                      >
                        <svg className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.15, x: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={next}
                        className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-xl hover:shadow-2xl transition-all hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 group"
                      >
                        <svg className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    </div>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-xl border border-gray-200">
                      <span className="text-sm font-bold text-gray-700">{currentIndex + 1} / {allImages.length}</span>
                    </div>
                  </div>

                  {/* Thumbnail Navigation */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-bold text-gray-700">All Views</h3>
                      <div className="flex gap-2">
                        <button className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-lg font-semibold">
                          2 Live Photos
                        </button>
                        <button className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-lg font-semibold">
                          3 Designs
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-3">
                      {allImages.map((img, i) => (
                        <motion.button
                          key={i}
                          onClick={() => goToSlide(i)}
                          whileHover={{ scale: 1.08, y: -4 }}
                          whileTap={{ scale: 0.95 }}
                          className={`relative aspect-video rounded-xl overflow-hidden border-3 transition-all ${
                            i === currentIndex 
                              ? 'border-blue-500 shadow-xl shadow-blue-200 ring-4 ring-blue-100' 
                              : 'border-gray-200 hover:border-blue-300 shadow-md'
                          }`}
                        >
                          <Image 
                            src={img.src} 
                            alt={img.alt} 
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 20vw, 10vw"
                          />
                          {i === currentIndex && (
                            <motion.div
                              layoutId="activeIndicator"
                              className="absolute inset-0 bg-gradient-to-t from-blue-600/40 via-transparent to-transparent"
                            />
                          )}
                          {/* Type Indicator */}
                          <div className={`absolute top-1 right-1 w-2 h-2 rounded-full ${
                            img.type === 'realtime' ? 'bg-green-500' : 'bg-purple-500'
                          }`} />
                          
                          {/* Label on Hover */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2"
                          >
                            <p className="text-white text-xs font-semibold truncate">{img.label}</p>
                          </motion.div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                {autoPlay && (
                  <div className="mt-6 bg-gradient-to-r from-gray-100 via-blue-50 to-gray-100 rounded-full h-2 overflow-hidden shadow-inner">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-lg"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ 
                        duration: autoAdvanceMs / 1000,
                        ease: "linear",
                        repeat: Infinity
                      }}
                      key={currentIndex}
                    />
                  </div>
                )}
              </div>
            </motion.div>

            {/* Specifications - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Technical Specifications */}
              <div className="bg-white rounded-3xl shadow-xl shadow-blue-100/50 p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Technical Specs</h3>
                    <p className="text-xs text-gray-500">Core specifications</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {specifications.map((spec, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      whileHover={{ x: 5, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                      className="flex items-center gap-3 py-3 px-3 rounded-xl border border-gray-100 hover:border-blue-200 transition-all group"
                    >
                      <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-100 transition-colors">
                        <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={spec.icon} />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-medium text-gray-500 block">{spec.label}</span>
                        <span className="text-sm font-bold text-gray-800">{spec.value}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-slate-900 to-gray-900 rounded-3xl shadow-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-4">Performance Highlights</h3>
                <div className="space-y-4">
                  {[
                    { label: "Tests per Hour", value: "1,200+", color: "from-green-500 to-emerald-600" },
                    { label: "Average Uptime", value: "99.7%", color: "from-blue-500 to-cyan-600" },
                    { label: "Fault Detection", value: "99.98%", color: "from-purple-500 to-pink-600" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-gray-400">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                          {item.value}
                        </span>
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`}></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                Advanced Features
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Engineered with cutting-edge technology for superior performance and reliability
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.03, y: -8 }}
                  onClick={() => setSelectedFeature(i)}
                  className={`bg-white rounded-2xl p-6 shadow-lg shadow-blue-100/50 border-2 transition-all cursor-pointer ${
                    selectedFeature === i 
                      ? 'border-blue-500 shadow-blue-200 shadow-2xl' 
                      : 'border-gray-100 hover:border-blue-200'
                  }`}
                >
                  <div className={`inline-flex p-4 rounded-xl mb-4 transition-all bg-gradient-to-br ${feature.color} text-white shadow-lg ${
                    selectedFeature === i ? 'scale-110 shadow-xl' : ''
                  }`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  
                  {selectedFeature === i && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      className={`h-1 bg-gradient-to-r ${feature.color} rounded-full mt-4`}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 flex items-center justify-center p-4"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: -20 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateY: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-7xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-white rounded-3xl p-3 shadow-2xl">
                <div className="relative w-full h-[85vh]">
                  <Image
                    src={allImages[currentIndex].src}
                    alt="Zoomed view"
                    fill
                    className="object-contain rounded-2xl"
                    sizes="100vw"
                    priority
                  />
                </div>
                
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsZoomed(false)}
                  className="absolute -top-5 -right-5 bg-red-500 text-white rounded-full p-4 shadow-2xl hover:bg-red-600 transition-colors border-4 border-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                {/* Image Info */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-xl">
                    <div className="text-sm font-bold text-gray-700">
                      {allImages[currentIndex].label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {currentIndex + 1} of {allImages.length}
                    </div>
                  </div>
                  <div className={`px-4 py-2 rounded-xl font-semibold text-sm ${
                    allImages[currentIndex].type === 'realtime'
                      ? 'bg-green-500 text-white'
                      : 'bg-purple-500 text-white'
                  }`}>
                    {allImages[currentIndex].type === 'realtime' ? 'Live Station' : 'Technical Design'}
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