"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function TestCells() {
  // Wrap gallery in useMemo to prevent recreation on every render
  const gallery = useMemo(() => [
    { 
      id: 1, 
      title: "Dispensing Station", 
      src: "/assets/Dispesing stn.JPG", 
      tag: "Dispensing",
      description: "Precision automated dispensing for adhesives and thermal compounds"
    },
    { 
      id: 2, 
      title: "EOL Testing", 
      src: "/assets/EOL.JPG", 
      tag: "EOL",
      description: "Comprehensive end-of-line validation and quality assurance"
    },
    { 
      id: 3, 
      title: "Grading Machine", 
      src: "/assets/Grading Machine.JPG", 
      tag: "Grading",
      description: "Automated component classification and performance grading"
    },
    { 
      id: 4, 
      title: "Light Guide Inspection", 
      src: "/assets/Light guide inspection.JPG", 
      tag: "Inspection",
      description: "Advanced optical testing for brightness and uniformity"
    },
    { 
      id: 5, 
      title: "Mosfet Grading", 
      src: "/assets/Mosfet Grading.JPG", 
      tag: "Grading",
      description: "High-precision MOSFET electrical parameter testing"
    },
    { 
      id: 6, 
      title: "PCB Flashing", 
      src: "/assets/PCB Flashing.JPG", 
      tag: "PCB",
      description: "Firmware programming and verification systems"
    },
    {
      id: 7,
      title: "MOSFET Grading Process",
      src: "/assets/MOSFET_Grading_720p_h264_crf22.mp4",
      tag: "Video",
      description: "Walkthrough of MOSFET grading process",
      type: "video",
      poster: "/assets/Mosfet Grading.JPG"
    }
  ], []); // Empty dependency array means it only creates once

  const [selected, setSelected] = useState(null);
  const [index, setIndex] = useState(0);
  const modalRef = useRef();

  useEffect(() => {
    function onKey(e) {
      if (!selected) return;
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % gallery.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + gallery.length) % gallery.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, gallery.length]);

  useEffect(() => {
    if (selected) {
      const foundIndex = gallery.findIndex((f) => f.id === selected.id);
      setIndex(foundIndex >= 0 ? foundIndex : 0);
    }
  }, [selected, gallery]);

  const openAt = (item) => {
    setSelected(item);
  };

  const closeModal = () => setSelected(null);

  const next = () => setIndex((i) => (i + 1) % gallery.length);
  const prev = () => setIndex((i) => (i - 1 + gallery.length) % gallery.length);

  useEffect(() => {
    if (!selected) return;
    setSelected(gallery[index]);
  }, [index, gallery]);

  const stats = [
    { value: "99.9%", label: "Test Accuracy", icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>) },
    { value: "50K+", label: "Tests/Day", icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>) },
    { value: "24/7", label: "Operation", icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>) },
    { value: "100%", label: "Traceability", icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>) }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Hero Section */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-16 lg:mb-20"
        >
          {/* Status Badge */}
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            transition={{ type: "spring", duration: 0.6 }} 
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-200/50 mb-6 mt-4.5"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-semibold text-slate-700 tracking-wide ">AUTOMATED TESTING SOLUTIONS</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Test Cells
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6 font-medium">
            Advanced automated testing stations designed to validate electrical, optical, and functional parameters with unmatched precision and reliability
          </p>

          {/* Feature Pills */}
          <div className="flex items-center justify-center gap-3 flex-wrap max-w-2xl mx-auto">
            {[
              "Full Automation",
              "MES Integration", 
              "Industry 4.0 Ready"
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200/50 shadow-sm"
              >
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-slate-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.header>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }} 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16 lg:mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg border border-slate-200/50 text-center hover:shadow-xl hover:border-blue-300/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {stat.icon}
              </div>
              <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm lg:text-base text-slate-600 font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* About Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4 }} 
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-200/50 p-8 lg:p-12 mb-16 lg:mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-2 rounded-full mb-6 border border-blue-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-bold text-sm">What Are Test Cells?</span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 leading-tight">
                Precision Testing Infrastructure
              </h2>
              
              <p className="text-slate-600 leading-relaxed mb-6 text-base lg:text-lg">
                Test Cells are controlled environments engineered to inspect, validate, and measure electrical, optical, and functional characteristics of products. They ensure consistent quality by automating test procedures and eliminating human variability.
              </p>

              <div className="space-y-3">
                {[
                  "Fully automated test processes for maximum accuracy",
                  "High repeatability using advanced sensors",
                  "Modular, scalable designs for any product",
                  "Complete MES/ERP traceability and digital logging",
                  "Industry safety and quality standards compliance"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-0.5 p-1 bg-emerald-100 rounded-full group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700 text-sm lg:text-base">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Key Capabilities */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl p-6 lg:p-8 border border-slate-200/50">
              <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                Key Capabilities
              </h3>
              
              <ul className="space-y-3">
                {[
                  "Electrical parameter testing (voltage, current, Rds(on))",
                  "Functional validation under real-world conditions",
                  "Optical inspection and brightness measurement",
                  "Automated grading and classification",
                  "Firmware flashing and verification",
                  "High-speed vision systems"
                ].map((capability, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-sm lg:text-base group hover:translate-x-1 transition-transform">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Featured Video Section */}
        <motion.section 
          initial={{ opacity: 0, y: 12 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="mb-16 lg:mb-20"
        >
          <div className="grid lg:grid-cols-5 gap-6 items-stretch">
            {/* Info Card */}
            <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg border border-slate-200/50 flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-2">
                      MOSFET Grading
                    </h3>
                    <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
                      Watch our automated grading system in action with real-time vision inspection and parameter logging
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    "High-speed vision inspection",
                    "Electrical parameter logging",
                    "Automated grading & reporting"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
                      <span className="text-sm lg:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Demo Video — 2 mins</span>
                </div>
              </div>
            </div>

            {/* Video Player */}
            <div className="lg:col-span-3 bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-lg border border-slate-200/50">
              <div className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-2xl">
                <StyledVideoPlayer 
                  src="/assets/MOSFET_Grading_720p_h264_crf22.mp4" 
                  poster="/assets/Mosfet Grading.JPG" 
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Gallery Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.8 }}
        >
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-2 rounded-full mb-6 border border-blue-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-bold text-sm">Our Solutions</span>
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-4">
              Test Cell Solutions
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base lg:text-lg">
              Explore our comprehensive range of specialized testing stations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {gallery.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl shadow-lg overflow-hidden cursor-pointer border border-slate-200/50 hover:shadow-2xl hover:border-blue-300/50 transition-all duration-300"
                onClick={() => openAt(item)}
              >
                <div className="relative h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
                  {item.type === 'video' ? (
                    <>
                      <video 
                        muted 
                        loop 
                        playsInline 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-2xl group-hover:scale-110 transition-transform">
                          <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <Image 
                        src={item.src} 
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-2xl group-hover:scale-110 transition-transform">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-blue-600 border border-blue-100 shadow-lg">
                    {item.tag}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg lg:text-xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex items-center text-blue-600 text-sm font-bold group-hover:gap-2 transition-all">
                    <span>View Details</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.article>
            ))}
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md px-4"
            onClick={(e) => { if (e.target === modalRef.current) closeModal(); }}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 20 }} 
              transition={{ type: "spring", damping: 25 }} 
              className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl" 
              onClick={(e) => e.stopPropagation()}
            >
              {/* Media Section */}
              <div className="relative bg-slate-900">
                {selected.type === 'video' ? (
                  <video 
                    controls 
                    playsInline 
                    muted
                    className="w-full max-h-[70vh] object-contain bg-slate-900" 
                    poster={selected.poster || ''}
                  >
                    <source src={selected.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="relative w-full max-h-[70vh]">
                    <Image 
                      src={selected.src} 
                      alt={selected.title}
                      width={1200}
                      height={800}
                      className="w-full h-auto max-h-[70vh] object-contain" 
                    />
                  </div>
                )}

                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-slate-800 rounded-full w-12 h-12 flex items-center justify-center shadow-2xl hover:bg-white transition-colors"
                  aria-label="close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                {/* Navigation Buttons */}
                {gallery.length > 1 && (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => { e.stopPropagation(); prev(); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm text-slate-800 rounded-full w-12 h-12 flex items-center justify-center shadow-2xl hover:bg-white transition-colors"
                      aria-label="previous"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => { e.stopPropagation(); next(); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm text-slate-800 rounded-full w-12 h-12 flex items-center justify-center shadow-2xl hover:bg-white transition-colors"
                      aria-label="next"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </>
                )}

                {/* Counter */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-xl">
                  <span className="text-sm font-bold text-slate-800">
                    {index + 1} / {gallery.length}
                  </span>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-6 lg:p-8 bg-gradient-to-br from-white to-slate-50">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold mb-3 border border-blue-200">
                      {selected.tag}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-2">
                      {selected.title}
                    </h3>
                    <p className="text-slate-600 text-base lg:text-lg">
                      {selected.description}
                    </p>
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

/* --------------------- StyledVideoPlayer component --------------------- */

function StyledVideoPlayer({ src, poster }) {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState({ current: 0, duration: 0 });
  const [rate, setRate] = useState(1);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => setTime({ current: v.currentTime, duration: v.duration || 0 });
    v.addEventListener('timeupdate', onTime);
    v.addEventListener('loadedmetadata', onTime);
    v.addEventListener('ended', () => setPlaying(false));
    return () => {
      v.removeEventListener('timeupdate', onTime);
      v.removeEventListener('loadedmetadata', onTime);
      v.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  const togglePlay = async () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      try { await v.play(); setPlaying(true); } catch (e) { console.warn(e); }
    } else {
      v.pause(); setPlaying(false);
    }
  };

  const onSeek = (e) => {
    const v = videoRef.current;
    if (!v || !progressRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    v.currentTime = pct * (v.duration || 0);
    setTime({ current: v.currentTime, duration: v.duration || 0 });
  };

  const onRate = (r) => { 
    const v = videoRef.current; 
    if (!v) return; 
    v.playbackRate = r; 
    setRate(r); 
  };

  const fmt = (s=0) => {
    if (!isFinite(s)) return '0:00';
    const m = Math.floor(s/60); 
    const ss = Math.floor(s%60).toString().padStart(2,'0'); 
    return `${m}:${ss}`;
  };

  return (
    <div className="w-full">
      <div className="relative" style={{ paddingTop: '56.25%' }}>
        <video 
          ref={videoRef} 
          src={src} 
          poster={poster} 
          className="absolute inset-0 w-full h-full object-cover" 
          preload="metadata" 
          playsInline 
          muted
        />

        {/* Center Play Button */}
        <button 
          onClick={togglePlay} 
          aria-label="play" 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-5 rounded-full shadow-2xl hover:scale-110 hover:bg-white transition-all duration-300"
        >
          {playing ? (
            <svg className="w-7 h-7 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Control Bar */}
        <div className="absolute left-3 right-3 bottom-3 bg-gradient-to-t from-black/80 via-black/60 to-transparent px-4 py-3 rounded-xl flex items-center gap-3 backdrop-blur-md">
          <button 
            onClick={togglePlay} 
            className="w-10 h-10 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
          >
            {playing ? <PauseIcon/> : <PlayIcon/>}
          </button>

          <div className="flex-1">
            <div 
              ref={progressRef} 
              onClick={onSeek} 
              className="h-2 bg-white/20 rounded-full cursor-pointer overflow-hidden hover:h-2.5 transition-all"
            >
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" 
                style={{ width: `${(time.current / Math.max(1, time.duration)) * 100}%` }} 
              />
            </div>
            <div className="flex items-center justify-between text-xs text-white/90 mt-1.5 font-medium">
              <div>{fmt(time.current)}</div>
              <div>{fmt(time.duration)}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <select 
              value={rate} 
              onChange={(e) => onRate(Number(e.target.value))} 
              className="bg-white/15 hover:bg-white/25 text-white text-xs rounded-lg px-2.5 py-1.5 border-0 outline-none cursor-pointer font-medium transition-colors"
            >
              <option value={0.5} className="bg-slate-800">0.5x</option>
              <option value={1} className="bg-slate-800">1x</option>
              <option value={1.5} className="bg-slate-800">1.5x</option>
              <option value={2} className="bg-slate-800">2x</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

/* SVG Icons */
function PlayIcon(){ 
  return (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z"/>
    </svg>
  ); 
}

function PauseIcon(){ 
  return (
    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
    </svg>
  ); 
}