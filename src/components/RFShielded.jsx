"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ==================== UTILITY COMPONENTS ====================

const SectionBadge = ({ children, variant = "primary" }) => {
  const variants = {
    primary: "bg-cyan-600 text-white",
    secondary: "bg-slate-800 text-white",
    success: "bg-emerald-600 text-white",
    purple: "bg-purple-600 text-white"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${variants[variant]} text-xs font-bold uppercase tracking-wider shadow-sm`}
    >
      {children}
    </motion.div>
  );
};

const SectionTitle = ({ children, subtitle }) => (
  <div className="text-center mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg text-slate-600 max-w-3xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: "80px" }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="h-1 bg-cyan-600 mx-auto mt-6 rounded-full"
    />
  </div>
);

const SpecificationItem = ({ label, value, icon }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="bg-slate-50 rounded-lg p-5 border border-slate-200 hover:border-slate-300 transition-colors"
  >
    <div className="flex items-start gap-3">
      {icon && <span className="text-2xl mt-1">{icon}</span>}
      <div className="flex-1">
        <dt className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
          {label}
        </dt>
        <dd className="text-base font-medium text-slate-900">{value}</dd>
      </div>
    </div>
  </motion.div>
);

// ==================== IMAGE MODAL ====================

const ImageModal = ({ item, onClose, onPrev, onNext, total, current }) => {
  if (!item) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative max-w-7xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
      >
        {/* Image Container */}
        <div className="relative bg-slate-900">
          <div className="relative w-full h-[60vh] md:h-[80vh]">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-contain"
              priority
              sizes="100vw"
            />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors shadow-lg"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation */}
          {total > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors shadow-lg"
                aria-label="Previous"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors shadow-lg"
                aria-label="Next"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image Type Badge */}
          <div className="absolute top-4 left-4">
            <div className={`px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-lg ${
              item.type === 'realtime' ? 'bg-emerald-600' : 'bg-purple-600'
            }`}>
              {item.type === 'realtime' ? 'Product Photo' : 'Technical Design'}
            </div>
          </div>

          {/* Counter */}
          {total > 1 && (
            <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-medium text-slate-700">
              {current + 1} / {total}
            </div>
          )}
        </div>

        {/* Info Bar */}
        <div className="p-6 bg-white border-t border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
          <p className="text-sm text-slate-600">{item.alt}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ==================== MAIN COMPONENT ====================

const RFShielded = () => {
  const [realtimeModal, setRealtimeModal] = useState(null);
  const [designModal, setDesignModal] = useState(null);

  // Real-time product images - using public folder paths
  const realtimeGallery = [
    {
      id: "front",
      title: "RF Chamber - Exterior View",
      alt: "Professional installation showing chamber exterior and door assembly",
      src: "/assets/RF Chamber.webp",
      type: 'realtime'
    },
    {
      id: "interior",
      title: "RF Chamber - Interior Setup",
      alt: "Interior view with integrated control systems and equipment",
      src: "/assets/RF chamber -Switch.webp",
      type: 'realtime'
    },
  ];

  // Technical design images - using public folder paths
  const designGallery = [
    {
      id: "design1",
      title: "Layout & Dimensions",
      alt: "Technical layout with dimensional specifications",
      src: "/assets/t rf 2.webp",
      type: 'design'
    },
    {
      id: "design2",
      title: "3D Engineering Model",
      alt: "Complete 3D model showing structural design",
      src: "/assets/2.webp",
      type: 'design'
    },
    {
      id: "design3",
      title: "Shielding Panel Details",
      alt: "RF shielding panel specifications and assembly",
      src: "/assets/3.webp",
      type: 'design'
    },
    {
      id: "design4",
      title: "Door System Design",
      alt: "RF door assembly with gasket system",
      src: "/assets/rf 1.webp",
      type: 'design'
    },
    {
      id: "design5",
      title: "System Integration",
      alt: "Complete system integration schematic",
      src: "/assets/rf 2.webp",
      type: 'design'
    },
  ];

  const openRealtimeModal = (item) => {
    const index = realtimeGallery.findIndex(g => g.id === item.id);
    setRealtimeModal({ item, currentIndex: index });
  };

  const openDesignModal = (item) => {
    const index = designGallery.findIndex(g => g.id === item.id);
    setDesignModal({ item, currentIndex: index });
  };

  const handleRealtimePrev = () => {
    if (!realtimeModal) return;
    const newIndex = (realtimeModal.currentIndex - 1 + realtimeGallery.length) % realtimeGallery.length;
    setRealtimeModal({ item: realtimeGallery[newIndex], currentIndex: newIndex });
  };

  const handleRealtimeNext = () => {
    if (!realtimeModal) return;
    const newIndex = (realtimeModal.currentIndex + 1) % realtimeGallery.length;
    setRealtimeModal({ item: realtimeGallery[newIndex], currentIndex: newIndex });
  };

  const handleDesignPrev = () => {
    if (!designModal) return;
    const newIndex = (designModal.currentIndex - 1 + designGallery.length) % designGallery.length;
    setDesignModal({ item: designGallery[newIndex], currentIndex: newIndex });
  };

  const handleDesignNext = () => {
    if (!designModal) return;
    const newIndex = (designModal.currentIndex + 1) % designGallery.length;
    setDesignModal({ item: designGallery[newIndex], currentIndex: newIndex });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionBadge variant="primary">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                </svg>
                Industrial RF Solutions
              </SectionBadge>

              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mt-6 mb-6 leading-tight">
                RF Shielded Test Chambers
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Professional-grade electromagnetic shielding solutions engineered for precision testing, 
                EMC compliance, and research applications.
              </p>

              {/* Key Features Pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: "📊", text: "≥90 dB Attenuation" },
                  { icon: "⚙️", text: "Custom Configurations" },
                  { icon: "🔧", text: "Turnkey Installation" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700">
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-600/30 hover:shadow-xl"
                >
                  Request Quote
                </button>
                <button 
                  onClick={() => scrollToSection('specifications')}
                  className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-lg border-2 border-slate-300 hover:border-slate-400 transition-all"
                >
                  View Specifications
                </button>
              </div>
            </motion.div>

            {/* Hero Images */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {realtimeGallery.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    onClick={() => openRealtimeModal(item)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-cyan-400"
                  >
                    <div className="aspect-[4/3] bg-slate-100 relative">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="text-white text-sm font-medium">
                        Click to enlarge
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== OVERVIEW SECTION ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle subtitle="Precision-engineered electromagnetic isolation for mission-critical testing environments">
            What is an RF Shielded Chamber?
          </SectionTitle>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-slate-700 leading-relaxed text-center">
              RF shielded chambers provide controlled electromagnetic environments by blocking external 
              interference and containing emissions. Essential for EMC/EMI testing, antenna measurements, 
              wireless device certification, and sensitive R&D applications.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== PRODUCT GALLERY ==================== */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionBadge variant="success">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              Live Installations
            </SectionBadge>
          </div>

          <SectionTitle subtitle="Real-world implementations showcasing our engineering excellence and professional deployment">
            Completed Projects
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {realtimeGallery.map((item, idx) => (
              <motion.button
                key={item.id}
                onClick={() => openRealtimeModal(item)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200"
              >
                <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="mb-2">
                      <span className="inline-block px-2 py-1 bg-emerald-600 text-white text-xs font-bold rounded">
                        INSTALLED
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.alt}</p>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TECHNICAL DESIGNS ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionBadge variant="purple">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Technical Documentation
            </SectionBadge>
          </div>

          <SectionTitle subtitle="Comprehensive engineering drawings, 3D models, and system integration schematics">
            Design & Engineering
          </SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designGallery.map((item, idx) => (
              <motion.button
                key={item.id}
                onClick={() => openDesignModal(item)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-lg overflow-hidden border border-slate-200 hover:border-purple-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-slate-50 relative overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-purple-600 text-white text-xs font-bold rounded">
                      TECHNICAL
                    </span>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-200">
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-600">{item.alt}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== DELIVERABLES ==================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle subtitle="Complete turnkey solutions from design through commissioning">
            What We Deliver
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Engineering & Planning",
                description: "Detailed CAD drawings, site assessments, and comprehensive project plans tailored to your requirements.",
                icon: "📐"
              },
              {
                title: "Precision Manufacturing",
                description: "Custom-fabricated panels, doors, and components built to exact specifications with quality materials.",
                icon: "🏭"
              },
              {
                title: "System Integration",
                description: "Filtered power distribution, HVAC systems, lighting, and all necessary penetrations and feedthroughs.",
                icon: "⚡"
              },
              {
                title: "Professional Installation",
                description: "Expert on-site assembly, alignment, and integration by experienced technical teams.",
                icon: "👷"
              },
              {
                title: "Performance Verification",
                description: "Complete attenuation testing across specified frequency ranges with certified measurements.",
                icon: "✅"
              },
              {
                title: "Documentation & Training",
                description: "As-built drawings, test reports, operating manuals, and comprehensive user training.",
                icon: "📚"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex gap-4 p-6 bg-white rounded-lg border border-slate-200 hover:border-cyan-400 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SPECIFICATIONS ==================== */}
      <section id="specifications" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle subtitle="Industry-leading performance specifications for demanding test environments">
            Technical Specifications
          </SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <SpecificationItem
              icon="📡"
              label="Frequency Range"
              value="10 MHz – 18 GHz (customizable to application)"
            />
            <SpecificationItem
              icon="🛡️"
              label="Shielding Effectiveness"
              value="≥90 dB typical, >100 dB available"
            />
            <SpecificationItem
              icon="📏"
              label="Standard Panel Sizes"
              value="1m × 1m, 2m × 2m (custom available)"
            />
            <SpecificationItem
              icon="🚪"
              label="Door System"
              value="Multi-lip RF gasket with compression locks"
            />
            <SpecificationItem
              icon="❄️"
              label="Ventilation"
              value="Filtered HVAC with EMI suppression"
            />
            <SpecificationItem
              icon="⚡"
              label="Power Filtering"
              value="Multi-stage filtered feedthroughs"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-amber-50 border border-amber-200 rounded-xl max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-2xl">
                💡
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Custom Configurations Available</h3>
                <p className="text-slate-700 leading-relaxed">
                  All specifications can be tailored to your specific testing requirements, facility constraints, 
                  and performance objectives. Contact our engineering team for a detailed consultation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== MODALS ==================== */}
      <AnimatePresence>
        {realtimeModal && (
          <ImageModal 
            item={realtimeModal.item} 
            onClose={() => setRealtimeModal(null)}
            onPrev={handleRealtimePrev}
            onNext={handleRealtimeNext}
            total={realtimeGallery.length}
            current={realtimeModal.currentIndex}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {designModal && (
          <ImageModal 
            item={designModal.item} 
            onClose={() => setDesignModal(null)}
            onPrev={handleDesignPrev}
            onNext={handleDesignNext}
            total={designGallery.length}
            current={designModal.currentIndex}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default RFShielded;