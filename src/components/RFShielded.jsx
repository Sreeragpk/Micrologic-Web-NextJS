// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// // ==================== UTILITY COMPONENTS ====================

// const SectionBadge = ({ children, variant = "primary" }) => {
//   const variants = {
//     primary: "bg-cyan-600 text-white",
//     secondary: "bg-slate-800 text-white",
//     success: "bg-emerald-600 text-white",
//     purple: "bg-purple-600 text-white"
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -10 }}
//       animate={{ opacity: 1, y: 0 }}
//       className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${variants[variant]} text-xs font-bold uppercase tracking-wider shadow-sm`}
//     >
//       {children}
//     </motion.div>
//   );
// };

// const SectionTitle = ({ children, subtitle }) => (
//   <div className="text-center mb-16">
//     <motion.h2
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
//     >
//       {children}
//     </motion.h2>
//     {subtitle && (
//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.1 }}
//         className="text-lg text-slate-600 max-w-3xl mx-auto"
//       >
//         {subtitle}
//       </motion.p>
//     )}
//     <motion.div
//       initial={{ width: 0 }}
//       whileInView={{ width: "80px" }}
//       viewport={{ once: true }}
//       transition={{ delay: 0.2 }}
//       className="h-1 bg-cyan-600 mx-auto mt-6 rounded-full"
//     />
//   </div>
// );

// const SpecificationItem = ({ label, value, icon }) => (
//   <motion.div
//     initial={{ opacity: 0, scale: 0.95 }}
//     whileInView={{ opacity: 1, scale: 1 }}
//     viewport={{ once: true }}
//     className="bg-slate-50 rounded-lg p-5 border border-slate-200 hover:border-slate-300 transition-colors"
//   >
//     <div className="flex items-start gap-3">
//       {icon && <span className="text-2xl mt-1">{icon}</span>}
//       <div className="flex-1">
//         <dt className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
//           {label}
//         </dt>
//         <dd className="text-base font-medium text-slate-900">{value}</dd>
//       </div>
//     </div>
//   </motion.div>
// );

// // ==================== IMAGE MODAL ====================

// const ImageModal = ({ item, onClose, onPrev, onNext, total, current }) => {
//   if (!item) return null;

//   return (
//     <motion.div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4"
//       onClick={onClose}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <motion.div
//         className="relative max-w-7xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
//         onClick={(e) => e.stopPropagation()}
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         transition={{ type: "spring", damping: 25 }}
//       >
//         {/* Image Container */}
//         <div className="relative bg-slate-900">
//           <div className="relative w-full h-[60vh] md:h-[80vh]">
//             <Image
//               src={item.src}
//               alt={item.alt}
//               fill
//               className="object-contain"
//               priority
//               sizes="100vw"
//             />
//           </div>

//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors shadow-lg"
//             aria-label="Close"
//           >
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>

//           {/* Navigation */}
//           {total > 1 && (
//             <>
//               <button
//                 onClick={(e) => { e.stopPropagation(); onPrev(); }}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors shadow-lg"
//                 aria-label="Previous"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>

//               <button
//                 onClick={(e) => { e.stopPropagation(); onNext(); }}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors shadow-lg"
//                 aria-label="Next"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </>
//           )}

//           {/* Image Type Badge */}
//           <div className="absolute top-4 left-4">
//             <div className={`px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-lg ${
//               item.type === 'realtime' ? 'bg-emerald-600' : 'bg-purple-600'
//             }`}>
//               {item.type === 'realtime' ? 'Product Photo' : 'Technical Design'}
//             </div>
//           </div>

//           {/* Counter */}
//           {total > 1 && (
//             <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-medium text-slate-700">
//               {current + 1} / {total}
//             </div>
//           )}
//         </div>

//         {/* Info Bar */}
//         <div className="p-6 bg-white border-t border-slate-200">
//           <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
//           <p className="text-sm text-slate-600">{item.alt}</p>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// // ==================== MAIN COMPONENT ====================

// const RFShielded = () => {
//   const [realtimeModal, setRealtimeModal] = useState(null);
//   const [designModal, setDesignModal] = useState(null);

//   // Real-time product images - using public folder paths
//   const realtimeGallery = [
//     {
//       id: "front",
//       title: "RF Chamber - Exterior View",
//       alt: "Professional installation showing chamber exterior and door assembly",
//       src: "/assets/RF Chamber.webp",
//       type: 'realtime'
//     },
//     {
//       id: "interior",
//       title: "RF Chamber - Interior Setup",
//       alt: "Interior view with integrated control systems and equipment",
//       src: "/assets/RF chamber -Switch.webp",
//       type: 'realtime'
//     },
//   ];

//   // Technical design images - using public folder paths
//   const designGallery = [
//     {
//       id: "design1",
//       title: "Layout & Dimensions",
//       alt: "Technical layout with dimensional specifications",
//       src: "/assets/t rf 2.webp",
//       type: 'design'
//     },
//     {
//       id: "design2",
//       title: "3D Engineering Model",
//       alt: "Complete 3D model showing structural design",
//       src: "/assets/2.webp",
//       type: 'design'
//     },
//     {
//       id: "design3",
//       title: "Shielding Panel Details",
//       alt: "RF shielding panel specifications and assembly",
//       src: "/assets/3.webp",
//       type: 'design'
//     },
//     {
//       id: "design4",
//       title: "Door System Design",
//       alt: "RF door assembly with gasket system",
//       src: "/assets/rf 1.webp",
//       type: 'design'
//     },
//     {
//       id: "design5",
//       title: "System Integration",
//       alt: "Complete system integration schematic",
//       src: "/assets/rf 2.webp",
//       type: 'design'
//     },
//   ];

//   const openRealtimeModal = (item) => {
//     const index = realtimeGallery.findIndex(g => g.id === item.id);
//     setRealtimeModal({ item, currentIndex: index });
//   };

//   const openDesignModal = (item) => {
//     const index = designGallery.findIndex(g => g.id === item.id);
//     setDesignModal({ item, currentIndex: index });
//   };

//   const handleRealtimePrev = () => {
//     if (!realtimeModal) return;
//     const newIndex = (realtimeModal.currentIndex - 1 + realtimeGallery.length) % realtimeGallery.length;
//     setRealtimeModal({ item: realtimeGallery[newIndex], currentIndex: newIndex });
//   };

//   const handleRealtimeNext = () => {
//     if (!realtimeModal) return;
//     const newIndex = (realtimeModal.currentIndex + 1) % realtimeGallery.length;
//     setRealtimeModal({ item: realtimeGallery[newIndex], currentIndex: newIndex });
//   };

//   const handleDesignPrev = () => {
//     if (!designModal) return;
//     const newIndex = (designModal.currentIndex - 1 + designGallery.length) % designGallery.length;
//     setDesignModal({ item: designGallery[newIndex], currentIndex: newIndex });
//   };

//   const handleDesignNext = () => {
//     if (!designModal) return;
//     const newIndex = (designModal.currentIndex + 1) % designGallery.length;
//     setDesignModal({ item: designGallery[newIndex], currentIndex: newIndex });
//   };

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* ==================== HERO SECTION ==================== */}
//       <section className="relative bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 border-b border-slate-200">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//             {/* Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <SectionBadge variant="primary">
//                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
//                   <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
//                 </svg>
//                 Industrial RF Solutions
//               </SectionBadge>

//               <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mt-6 mb-6 leading-tight">
//                 RF Shielded Test Chambers
//               </h1>

//               <p className="text-xl text-slate-600 mb-8 leading-relaxed">
//                 Professional-grade electromagnetic shielding solutions engineered for precision testing,
//                 EMC compliance, and research applications.
//               </p>

//               {/* Key Features Pills */}
//               <div className="flex flex-wrap gap-3 mb-8">
//                 {[
//                   { icon: "📊", text: "≥90 dB Attenuation" },
//                   { icon: "⚙️", text: "Custom Configurations" },
//                   { icon: "🔧", text: "Turnkey Installation" }
//                 ].map((item, idx) => (
//                   <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700">
//                     <span>{item.icon}</span>
//                     <span>{item.text}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA Buttons */}
//               <div className="flex flex-wrap gap-4">
//                 <button
//                   onClick={() => scrollToSection('contact')}
//                   className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-600/30 hover:shadow-xl"
//                 >
//                   Request Quote
//                 </button>
//                 <button
//                   onClick={() => scrollToSection('specifications')}
//                   className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-lg border-2 border-slate-300 hover:border-slate-400 transition-all"
//                 >
//                   View Specifications
//                 </button>
//               </div>
//             </motion.div>

//             {/* Hero Images */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="grid grid-cols-2 gap-4">
//                 {realtimeGallery.map((item, idx) => (
//                   <motion.button
//                     key={item.id}
//                     onClick={() => openRealtimeModal(item)}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3 + idx * 0.1 }}
//                     whileHover={{ y: -4, scale: 1.02 }}
//                     className="group relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-cyan-400"
//                   >
//                     <div className="aspect-[4/3] bg-slate-100 relative">
//                       <Image
//                         src={item.src}
//                         alt={item.alt}
//                         fill
//                         className="object-cover group-hover:scale-105 transition-transform duration-500"
//                         sizes="(max-width: 768px) 50vw, 25vw"
//                       />
//                     </div>

//                     {/* Hover Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
//                       <div className="text-white text-sm font-medium">
//                         Click to enlarge
//                       </div>
//                     </div>
//                   </motion.button>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ==================== OVERVIEW SECTION ==================== */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <SectionTitle subtitle="Precision-engineered electromagnetic isolation for mission-critical testing environments">
//             What is an RF Shielded Chamber?
//           </SectionTitle>

//           <div className="max-w-4xl mx-auto mb-16">
//             <p className="text-lg text-slate-700 leading-relaxed text-center">
//               RF shielded chambers provide controlled electromagnetic environments by blocking external
//               interference and containing emissions. Essential for EMC/EMI testing, antenna measurements,
//               wireless device certification, and sensitive R&D applications.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ==================== PRODUCT GALLERY ==================== */}
//       <section className="py-20 bg-slate-50 border-y border-slate-200">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <SectionBadge variant="success">
//               <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//               Live Installations
//             </SectionBadge>
//           </div>

//           <SectionTitle subtitle="Real-world implementations showcasing our engineering excellence and professional deployment">
//             Completed Projects
//           </SectionTitle>

//           <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//             {realtimeGallery.map((item, idx) => (
//               <motion.button
//                 key={item.id}
//                 onClick={() => openRealtimeModal(item)}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 whileHover={{ y: -6 }}
//                 className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200"
//               >
//                 <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
//                   <Image
//                     src={item.src}
//                     alt={item.alt}
//                     fill
//                     className="object-cover group-hover:scale-105 transition-transform duration-500"
//                     sizes="(max-width: 768px) 100vw, 50vw"
//                   />

//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

//                   {/* Content */}
//                   <div className="absolute inset-0 flex flex-col justify-end p-6">
//                     <div className="mb-2">
//                       <span className="inline-block px-2 py-1 bg-emerald-600 text-white text-xs font-bold rounded">
//                         INSTALLED
//                       </span>
//                     </div>
//                     <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
//                     <p className="text-white/90 text-sm">{item.alt}</p>
//                   </div>

//                   {/* Zoom Icon */}
//                   <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
//                     <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                     </svg>
//                   </div>
//                 </div>
//               </motion.button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ==================== TECHNICAL DESIGNS ==================== */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <SectionBadge variant="purple">
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//               </svg>
//               Technical Documentation
//             </SectionBadge>
//           </div>

//           <SectionTitle subtitle="Comprehensive engineering drawings, 3D models, and system integration schematics">
//             Design & Engineering
//           </SectionTitle>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {designGallery.map((item, idx) => (
//               <motion.button
//                 key={item.id}
//                 onClick={() => openDesignModal(item)}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.05 }}
//                 whileHover={{ y: -4 }}
//                 className="group bg-white rounded-lg overflow-hidden border border-slate-200 hover:border-purple-400 hover:shadow-lg transition-all duration-300"
//               >
//                 <div className="aspect-[4/3] bg-slate-50 relative overflow-hidden">
//                   <Image
//                     src={item.src}
//                     alt={item.alt}
//                     fill
//                     className="object-cover group-hover:scale-105 transition-transform duration-500"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                   />

//                   {/* Badge */}
//                   <div className="absolute top-3 left-3">
//                     <span className="px-2 py-1 bg-purple-600 text-white text-xs font-bold rounded">
//                       TECHNICAL
//                     </span>
//                   </div>

//                   {/* Zoom Icon */}
//                   <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                     <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                     </svg>
//                   </div>
//                 </div>

//                 <div className="p-4 bg-slate-50 border-t border-slate-200">
//                   <h4 className="font-semibold text-slate-900 text-sm mb-1">{item.title}</h4>
//                   <p className="text-xs text-slate-600">{item.alt}</p>
//                 </div>
//               </motion.button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ==================== DELIVERABLES ==================== */}
//       <section className="py-20 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <SectionTitle subtitle="Complete turnkey solutions from design through commissioning">
//             What We Deliver
//           </SectionTitle>

//           <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
//             {[
//               {
//                 title: "Engineering & Planning",
//                 description: "Detailed CAD drawings, site assessments, and comprehensive project plans tailored to your requirements.",
//                 icon: "📐"
//               },
//               {
//                 title: "Precision Manufacturing",
//                 description: "Custom-fabricated panels, doors, and components built to exact specifications with quality materials.",
//                 icon: "🏭"
//               },
//               {
//                 title: "System Integration",
//                 description: "Filtered power distribution, HVAC systems, lighting, and all necessary penetrations and feedthroughs.",
//                 icon: "⚡"
//               },
//               {
//                 title: "Professional Installation",
//                 description: "Expert on-site assembly, alignment, and integration by experienced technical teams.",
//                 icon: "👷"
//               },
//               {
//                 title: "Performance Verification",
//                 description: "Complete attenuation testing across specified frequency ranges with certified measurements.",
//                 icon: "✅"
//               },
//               {
//                 title: "Documentation & Training",
//                 description: "As-built drawings, test reports, operating manuals, and comprehensive user training.",
//                 icon: "📚"
//               }
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.05 }}
//                 className="flex gap-4 p-6 bg-white rounded-lg border border-slate-200 hover:border-cyan-400 hover:shadow-md transition-all duration-300"
//               >
//                 <div className="flex-shrink-0 w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center text-2xl">
//                   {item.icon}
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
//                   <p className="text-slate-600 leading-relaxed">{item.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ==================== SPECIFICATIONS ==================== */}
//       <section id="specifications" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <SectionTitle subtitle="Industry-leading performance specifications for demanding test environments">
//             Technical Specifications
//           </SectionTitle>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//             <SpecificationItem
//               icon="📡"
//               label="Frequency Range"
//               value="10 MHz – 18 GHz (customizable to application)"
//             />
//             <SpecificationItem
//               icon="🛡️"
//               label="Shielding Effectiveness"
//               value="≥90 dB typical, >100 dB available"
//             />
//             <SpecificationItem
//               icon="📏"
//               label="Standard Panel Sizes"
//               value="1m × 1m, 2m × 2m (custom available)"
//             />
//             <SpecificationItem
//               icon="🚪"
//               label="Door System"
//               value="Multi-lip RF gasket with compression locks"
//             />
//             <SpecificationItem
//               icon="❄️"
//               label="Ventilation"
//               value="Filtered HVAC with EMI suppression"
//             />
//             <SpecificationItem
//               icon="⚡"
//               label="Power Filtering"
//               value="Multi-stage filtered feedthroughs"
//             />
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mt-12 p-8 bg-amber-50 border border-amber-200 rounded-xl max-w-4xl mx-auto"
//           >
//             <div className="flex items-start gap-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-2xl">
//                 💡
//               </div>
//               <div>
//                 <h3 className="font-bold text-lg text-slate-900 mb-2">Custom Configurations Available</h3>
//                 <p className="text-slate-700 leading-relaxed">
//                   All specifications can be tailored to your specific testing requirements, facility constraints,
//                   and performance objectives. Contact our engineering team for a detailed consultation.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ==================== MODALS ==================== */}
//       <AnimatePresence>
//         {realtimeModal && (
//           <ImageModal
//             item={realtimeModal.item}
//             onClose={() => setRealtimeModal(null)}
//             onPrev={handleRealtimePrev}
//             onNext={handleRealtimeNext}
//             total={realtimeGallery.length}
//             current={realtimeModal.currentIndex}
//           />
//         )}
//       </AnimatePresence>

//       <AnimatePresence>
//         {designModal && (
//           <ImageModal
//             item={designModal.item}
//             onClose={() => setDesignModal(null)}
//             onPrev={handleDesignPrev}
//             onNext={handleDesignNext}
//             total={designGallery.length}
//             current={designModal.currentIndex}
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default RFShielded;
"use client";

import { BadgeCheck, BarChart3, Cable, Lock, Package, Radio, Shield, Target } from "lucide-react";
import React, { useState, useEffect } from "react";

const RFShieldedChamberPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeHighlight, setActiveHighlight] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredCapability, setHoveredCapability] = useState(null);
  const [activeWorkflow, setActiveWorkflow] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );
    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHighlight((prev) => (prev + 1) % 6);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const keyFeatures = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      ),
      title: "High Shielding Effectiveness",
      description:
        "Superior electromagnetic attenuation across wide frequency ranges for reliable test isolation.",
      stat: "≥90dB",
      statLabel: "Attenuation",
      iconBg: "bg-indigo-500",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
          />
        </svg>
      ),
      title: "Precision RF Absorption",
      description:
        "Minimized reflections and standing waves for accurate, repeatable test measurements.",
      stat: "99.5%",
      statLabel: "Absorption",
      iconBg: "bg-violet-500",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      ),
      title: "Leak-Proof Construction",
      description:
        "RF-tight sealing with precision gasket systems preventing signal leakage at every junction.",
      stat: "100%",
      statLabel: "Sealed",
      iconBg: "bg-teal-500",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
      title: "Filtered Power & Signal Interfaces",
      description:
        "Multi-stage filtered feedthroughs allow clean power and signal pass-through without noise.",
      stat: "Multi",
      statLabel: "Stage",
      iconBg: "bg-amber-500",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Optimized Ventilation Design",
      description:
        "EMI-suppressed HVAC integration maintaining chamber integrity while ensuring thermal control.",
      stat: "EMI",
      statLabel: "Filtered",
      iconBg: "bg-emerald-500",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
          />
        </svg>
      ),
      title: "Robust Industrial Build",
      description:
        "Heavy-duty construction with structural integrity designed for demanding industrial environments.",
      stat: "Built",
      statLabel: "To Last",
      iconBg: "bg-rose-500",
    },
  ];

  const howItWorks = [
    {
      title: "Shielding Enclosure",
      subtitle: "Faraday Cage Effect",
      description:
        "Blocks external electromagnetic interference from entering the test environment.",
      icon: Shield,
    },
    {
      title: "RF Absorbers",
      subtitle: "Internal Treatment",
      description:
        "Reduce reflections and standing waves inside the chamber for clean measurements.",
      icon: Radio,
    },
    {
      title: "Filtered Interfaces",
      subtitle: "Clean Pass-Through",
      description:
        "Allow power and signals to pass without introducing electromagnetic noise.",
      icon: Cable,
    },
    {
      title: "Controlled Environment",
      subtitle: "Repeatable Conditions",
      description:
        "Provides repeatable and accurate testing conditions for compliance validation.",
      icon: Target,
    },
  ];

  const designExcellence = [
    {
      text: "Advanced shielding materials for maximum attenuation",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      ),
      detail: "Materials optimized for broadband electromagnetic shielding",
    },
    {
      text: "Precision-engineered panel construction",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
          />
        </svg>
      ),
      detail: "Interlocking panels with RF-tight seams",
    },
    {
      text: "RF-tight sealing mechanisms",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      ),
      detail: "Multi-lip gasket systems with compression locks",
    },
    {
      text: "Structural integrity for industrial environments",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21"
          />
        </svg>
      ),
      detail: "Heavy-duty framework for long-term durability",
    },
    {
      text: "Optimized internal layouts for testing flexibility",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75l-5.571-3m11.142 0l4.179 2.25L12 17.25l-9.75-5.25 4.179-2.25"
          />
        </svg>
      ),
      detail: "Configurable interiors for diverse test setups",
    },
  ];

  const customization = [
    {
      title: "Chamber Size & Configuration",
      description:
        "Tailored dimensions and layouts to match your facility and testing requirements.",
      number: "01",
    },
    {
      title: "Frequency Range Adaptation",
      description:
        "Optimized shielding and absorption for your specific frequency bands.",
      number: "02",
    },
    {
      title: "Absorber Type & Placement",
      description:
        "Custom absorber selection and strategic placement for optimal performance.",
      number: "03",
    },
    {
      title: "Interface Panels",
      description:
        "RF, fiber optic, and power interface panels configured to your exact needs.",
      number: "04",
    },
    {
      title: "Equipment & Automation Integration",
      description:
        "Seamless integration with test equipment, automation systems, and data acquisition.",
      number: "05",
    },
  ];

  const integrationCapabilities = [
    {
      title: "Conveyor-Based Automated Testing",
      description:
        "Inline RF testing integrated with conveyor systems for continuous production flow.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      ),
      number: "01",
    },
    {
      title: "Robotic Loading & Unloading",
      description:
        "Automated robotic systems for efficient device placement and retrieval.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
          />
        </svg>
      ),
      number: "02",
    },
    {
      title: "Inline Production Testing",
      description:
        "Seamless integration into production lines for real-time quality validation.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281"
          />
        </svg>
      ),
      number: "03",
    },
    {
      title: "Data Acquisition & Traceability",
      description:
        "Complete data capture with full traceability for every test cycle.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      ),
      number: "04",
    },
    {
      title: "MES/SCADA Integration",
      description:
        "Connect with manufacturing execution and supervisory control systems.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
          />
        </svg>
      ),
      number: "05",
    },
  ];

 const workflowSteps = [
  {
    step: "01",
    title: "Device Placement",
    description: "Device placed inside the chamber on test fixture.",
    icon: Package,
  },
  {
    step: "02",
    title: "Chamber Sealed",
    description: "Chamber sealed to achieve complete RF isolation.",
    icon: Lock,
  },
  {
    step: "03",
    title: "Signal Testing",
    description: "Test signals are applied and precisely measured.",
    icon: Radio,
  },
  {
    step: "04",
    title: "Data Capture",
    description: "Data is captured, analyzed, and logged.",
    icon: BarChart3,
  },
  {
    step: "05",
    title: "Compliance Validation",
    description: "Results validated for compliance and performance.",
    icon: BadgeCheck,
  },
];

  const barData = [8, 12, 10, 15, 9, 11, 13, 7];
  const durations = [1.8, 2, 1.6, 2.2, 1.9, 2.1, 1.7, 2.3];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative min-h-[85vh] flex items-center overflow-hidden"
        role="banner"
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')`,
              transform: `scale(${1.08 + scrollY * 0.00008})`,
              transition: "transform 0.3s ease-out",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/98 via-slate-900/93 to-indigo-950/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20" />
        </div>

        {/* Geometric accents */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-[10%] right-[6%] w-[1px] h-[350px] bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent rotate-[12deg]" />
          <div className="absolute top-[20%] right-[13%] w-[1px] h-[250px] bg-gradient-to-b from-transparent via-violet-400/15 to-transparent rotate-[12deg]" />
          <div className="absolute top-[28%] right-[20%] w-[1px] h-[180px] bg-gradient-to-b from-transparent via-blue-400/10 to-transparent rotate-[12deg]" />
          {/* Signal wave patterns */}
          <svg
            className="absolute bottom-[25%] right-[5%] w-[400px] h-[200px] opacity-[0.04]"
            viewBox="0 0 400 200"
          >
            <path
              d="M0 100 Q50 20, 100 100 Q150 180, 200 100 Q250 20, 300 100 Q350 180, 400 100"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M0 100 Q50 40, 100 100 Q150 160, 200 100 Q250 40, 300 100 Q350 160, 400 100"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>
          <div className="absolute bottom-[18%] right-[4%] w-[450px] h-[450px] rounded-full border border-white/[0.03]" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.02]"
          aria-hidden="true"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <div className="hero-badge inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-50" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-400" />
              </span>
              <span className="text-white/70 text-[11px] font-semibold tracking-[0.25em] uppercase">
                RF Shielded Chambers
              </span>
            </div>

            <h1 className="hero-title text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] leading-[1.02] mb-4">
              <span className="block text-white">Precision-Driven</span>
              <span className="block mt-2">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent">
                    RF Chambers
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500/0 via-indigo-400/50 to-indigo-500/0 rounded-full hero-underline" />
                </span>
                <span className="text-white"> for</span>
              </span>
              <span className="block mt-2 text-white">
                Modern Electronics<span className="text-indigo-400/60">.</span>
              </span>
            </h1>

            <p className="hero-punch text-lg md:text-xl text-indigo-300/80 font-semibold mb-6 tracking-wide">
              Control the Signal. Perfect the Results.
            </p>

            <p className="hero-subtext max-w-xl text-base md:text-lg text-gray-400 leading-relaxed mb-10">
              Engineered to create controlled electromagnetic environments for
              reliable EMI/EMC, wireless, and high-frequency testing across
              industries.
            </p>

            <div className="hero-pillars flex flex-wrap gap-6 mb-12">
              {["EMI/EMC Testing", "High Shielding", "Custom Solutions"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 group cursor-default"
                  >
                    <div className="w-5 h-[2px] bg-gradient-to-r from-indigo-400 to-indigo-400/0 group-hover:to-indigo-400 transition-all duration-500" />
                    <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hero-scroll">
          <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ===== ABOUT / OVERVIEW ===== */}
      <section
        className="relative py-16 lg:py-22 bg-white"
        aria-labelledby="about-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            id="about-section"
            data-animate
            className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-[1.2s] ease-out ${
              isVisible["about-section"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* Left – Visual */}
            <div className="relative group order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 shadow-2xl shadow-slate-900/20">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative w-full h-full max-w-md max-h-64">
                    {/* Chamber frame */}
                    <div className="absolute inset-0 border border-indigo-500/20 rounded-2xl">
                      <div className="absolute -top-3 left-8 px-4 py-1.5 bg-slate-800 border border-indigo-500/30 rounded-lg">
                        <span className="text-indigo-400 text-[10px] font-mono tracking-widest font-bold">
                          RF-CHAMBER-9000
                        </span>
                      </div>
                    </div>

                    {/* Inner absorber pattern */}
                    <div className="absolute inset-4 border border-indigo-500/10 rounded-xl border-dashed" />
                    <div className="absolute inset-6 grid grid-cols-6 grid-rows-4 gap-1 opacity-20">
                      {[...Array(24)].map((_, i) => (
                        <div key={i} className="bg-indigo-400/30 rounded-sm" />
                      ))}
                    </div>

                    {/* Signal wave animation */}
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      viewBox="0 0 400 300"
                    >
                      <path
                        d="M80 150 Q120 80, 160 150 Q200 220, 240 150 Q280 80, 320 150"
                        fill="none"
                        stroke="rgba(99,102,241,0.2)"
                        strokeWidth="1.5"
                        strokeDasharray="6,4"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          values="10;0"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </path>
                    </svg>

                    {/* Status panels */}
                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-lg shadow-emerald-500/30" />
                        <span className="text-emerald-400/60 text-[7px] font-mono font-bold">
                          SHIELDED
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-lg shadow-indigo-500/30"
                          style={{ animationDelay: "0.3s" }}
                        />
                        <span className="text-indigo-400/60 text-[7px] font-mono font-bold">
                          RF SEALED
                        </span>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="absolute top-6 right-6 w-20 h-14 border border-indigo-500/20 rounded-xl bg-indigo-500/5 flex flex-col items-center justify-center gap-1">
                      <div className="flex gap-[3px] items-end">
                        {barData.slice(0, 5).map((h, j) => (
                          <div
                            key={j}
                            style={{
                              height: `${h}px`,
                              animationName: "dataBar",
                              animationDuration: `${durations[j]}s`,
                              animationTimingFunction: "ease-in-out",
                              animationIterationCount: "infinite",
                              animationDirection: "alternate",
                              animationDelay: `${j * 0.12}s`,
                            }}
                            className="w-1.5 rounded-sm bg-gradient-to-t from-indigo-500 to-violet-400"
                          />
                        ))}
                      </div>
                      <span className="text-indigo-400/60 text-[7px] font-mono font-bold">
                        dB LEVEL
                      </span>
                    </div>

                    {/* Bottom panel */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-44 h-10 border border-indigo-500/20 rounded-xl bg-indigo-500/5 flex items-center justify-center gap-3">
                      <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-lg shadow-emerald-500/30" />
                        <div
                          className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse shadow-lg shadow-indigo-500/30"
                          style={{ animationDelay: "0.5s" }}
                        />
                        <div
                          className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse shadow-lg shadow-amber-500/30"
                          style={{ animationDelay: "1s" }}
                        />
                      </div>
                      <span className="text-indigo-400/60 text-[8px] font-mono font-bold tracking-wider">
                        RF CONTROL
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 overflow-hidden opacity-20">
                  <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-scan" />
                </div>

                {[
                  "top-4 left-4 border-t border-l",
                  "top-4 right-4 border-t border-r",
                  "bottom-4 left-4 border-b border-l",
                  "bottom-4 right-4 border-b border-r",
                ].map((cls, i) => (
                  <div
                    key={i}
                    className={`absolute w-6 h-6 border-indigo-500/20 ${cls} rounded-sm`}
                  />
                ))}

                <div className="absolute bottom-5 left-5 flex items-center gap-2 px-3 py-1.5 bg-slate-800/90 border border-indigo-500/20 rounded-lg backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-indigo-300 text-[10px] font-mono font-bold tracking-wider">
                    CHAMBER ACTIVE
                  </span>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 px-4 py-2.5 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100">
                <div className="text-xl font-black text-indigo-600">≥90dB</div>
                <div className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">
                  Shielding
                </div>
              </div>
            </div>

            {/* Right – Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2.5 mb-6">
                <div className="w-8 h-[2px] bg-gradient-to-r from-indigo-600 to-indigo-600/0" />
                <span className="text-indigo-600 text-[11px] font-bold tracking-[0.2em] uppercase">
                  About RF Chambers
                </span>
              </div>

              <h2
                id="about-heading"
                className="text-3xl md:text-4xl lg:text-[2.75rem] font-black text-gray-900 leading-[1.08] mb-6 tracking-[-0.02em]"
              >
                Controlled RF Environments for{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Reliable Testing
                </span>
              </h2>

              <div className="space-y-4 text-gray-500 leading-[1.8] text-[15px]">
                <p>
                  Our RF Chambers are designed to provide a controlled and
                  interference-free testing environment by isolating external
                  electromagnetic signals and preventing internal emissions from
                  escaping. These chambers are critical for validating the{" "}
                  <span className="text-gray-900 font-semibold">
                    performance, reliability, and compliance
                  </span>{" "}
                  of modern electronic systems.
                </p>
                <p>
                  With increasing complexity in electronics—especially in EVs,
                  telecom, and smart devices—precision RF testing has become
                  essential. We deliver robust,{" "}
                  <span className="text-gray-900 font-semibold">
                    high-shielding solutions
                  </span>{" "}
                  built with advanced materials and precision engineering to
                  ensure repeatability, consistency, and compliance with global
                  standards.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-3 gap-6">
                {[
                  { value: "EMI/EMC", label: "Testing" },
                  { value: "Wireless", label: "Validation" },
                  { value: "Global", label: "Compliance" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="text-base font-bold text-gray-900">
                      {s.value}
                    </div>
                    <div className="text-[11px] text-gray-400 font-medium mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section
        className="relative py-16 bg-slate-950 overflow-hidden"
        aria-labelledby="how-heading"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div
            id="how-works"
            data-animate
            className={`transition-all duration-1000 ${isVisible["how-works"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2.5 mb-4">
                <div className="w-8 h-[2px] bg-gradient-to-r from-indigo-400 to-indigo-400/0" />
                <span className="text-indigo-400 text-[11px] font-bold tracking-[0.2em] uppercase">
                  How It Works
                </span>
                <div className="w-8 h-[2px] bg-gradient-to-l from-indigo-400 to-indigo-400/0" />
              </div>
              <h3
                id="how-heading"
                className="text-2xl md:text-3xl font-black text-white tracking-[-0.02em]"
              >
                Proven <span className="text-indigo-400">Electromagnetic</span>{" "}
                Principles
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-4">
              {howItWorks.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="relative text-center group cursor-default"
                  >
                    <div className="relative z-10 w-20 h-20 mx-auto mb-4">
                      <div className="absolute inset-0 rounded-2xl border border-indigo-500/20 group-hover:border-indigo-400/40 transition-colors duration-500 rotate-3 group-hover:rotate-6" />
                      <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 flex items-center justify-center group-hover:from-indigo-900/50 group-hover:to-slate-900 transition-all duration-500 shadow-lg">
                        <Icon className="w-8 h-8 text-indigo-400 transition-transform duration-300 group-hover:scale-125" />
                      </div>
                    </div>

                    <div className="text-indigo-400/60 text-[10px] font-mono font-bold mb-1 tracking-widest">
                      {item.subtitle}
                    </div>
                    <h4 className="text-white font-bold text-[14px] group-hover:text-indigo-300 transition-colors mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-[11px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== KEY FEATURES ===== */}
      <section
        className="relative py-16 lg:py-22 bg-white overflow-hidden"
        aria-labelledby="features-heading"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-50/30 to-transparent rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div
            id="features-header"
            data-animate
            className={`mb-12 transition-all duration-1000 ${isVisible["features-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
              <div>
                <div className="inline-flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-[2px] bg-gradient-to-r from-indigo-600 to-indigo-600/0" />
                  <span className="text-indigo-600 text-[11px] font-bold tracking-[0.2em] uppercase">
                    Key Features
                  </span>
                </div>
                <h2
                  id="features-heading"
                  className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-[-0.03em]"
                >
                  Engineered for{" "}
                  <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    RF Excellence
                  </span>
                </h2>
              </div>
              <p className="text-gray-500 max-w-md text-[15px] leading-relaxed lg:text-right">
                Six pillars of engineering excellence that define our RF
                shielded chamber solutions.
              </p>
            </div>
          </div>

          <div
            id="features-cards"
            data-animate
            className={`grid md:grid-cols-2 xl:grid-cols-3 gap-5 transition-all duration-1000 delay-200 ${isVisible["features-cards"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {keyFeatures.map((item, index) => (
              <article
                key={index}
                className={`group relative cursor-pointer transition-all duration-500 ${activeHighlight === index ? "-translate-y-2" : "hover:-translate-y-1"}`}
                onMouseEnter={() => setActiveHighlight(index)}
              >
                <div
                  className={`relative h-full rounded-2xl border transition-all duration-500 overflow-hidden ${activeHighlight === index ? "border-gray-200 shadow-2xl shadow-gray-200/50 bg-white" : "border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 bg-white"}`}
                >
                  <div
                    className={`h-1 bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500 ${activeHighlight === index ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
                  />
                  <div className="p-6">
                    <div
                      className={`absolute top-5 right-5 text-right transition-all duration-500 ${activeHighlight === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                    >
                      <div className="text-xl font-black bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                        {item.stat}
                      </div>
                      <div className="text-[9px] text-gray-400 font-bold tracking-wider uppercase">
                        {item.statLabel}
                      </div>
                    </div>
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${activeHighlight === index ? `${item.iconBg} text-white shadow-lg` : "bg-gray-100 text-gray-400 group-hover:bg-gray-200/80 group-hover:text-gray-600"}`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-[15px] font-bold text-gray-900 mb-2 leading-snug pr-16">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-[13px] leading-[1.7]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DESIGN & ENGINEERING EXCELLENCE ===== */}
      <section
        className="relative py-16 lg:py-22 bg-gradient-to-b from-gray-50 to-white"
        aria-labelledby="design-heading"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div
              id="design-section"
              data-animate
              className={`transition-all duration-1000 ${isVisible["design-section"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="inline-flex items-center gap-2.5 mb-5">
                <div className="w-8 h-[2px] bg-gradient-to-r from-indigo-600 to-indigo-600/0" />
                <span className="text-indigo-600 text-[11px] font-bold tracking-[0.2em] uppercase">
                  Design Excellence
                </span>
              </div>
              <h2
                id="design-heading"
                className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-[1.08] tracking-[-0.02em]"
              >
                Precision{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Engineering
                </span>
                <br />& Durability
              </h2>
              <p className="text-gray-500 text-[15px] mb-8 leading-relaxed">
                Our chambers are built with a focus on precision, durability,
                and performance to meet the most demanding RF testing
                requirements.
              </p>
              <div className="space-y-2">
                {designExcellence.map((feature, i) => (
                  <div
                    key={i}
                    className={`group flex items-start gap-4 p-3.5 rounded-2xl transition-all duration-400 cursor-default border ${hoveredFeature === i ? "border-indigo-200 bg-white shadow-lg shadow-gray-100/50" : "border-transparent hover:bg-white hover:shadow-lg hover:shadow-gray-100/50 hover:border-gray-100"}`}
                    onMouseEnter={() => setHoveredFeature(i)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-400 ${hoveredFeature === i ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200/40" : "bg-gray-100 text-gray-400 border-gray-200/50 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600"} group-hover:scale-105`}
                    >
                      {feature.icon}
                    </div>
                    <div className="pt-0.5">
                      <span className="text-gray-800 font-semibold text-[14px] group-hover:text-gray-900 transition-colors">
                        {feature.text}
                      </span>
                      <p className="text-gray-400 text-[12px] mt-0.5 group-hover:text-gray-500 transition-colors leading-relaxed">
                        {feature.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Orbital Visual */}
            <div
              id="design-visual"
              data-animate
              className={`transition-all duration-1000 delay-300 ${isVisible["design-visual"] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {[12, 26, 39].map((inset, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border"
                    style={{
                      inset: `${inset}%`,
                      borderColor: `rgba(99,102,241,${0.08 + i * 0.04})`,
                      animation: `orbitSpin ${30 - i * 5}s linear infinite ${i % 2 ? "reverse" : ""}`,
                    }}
                  >
                    <div
                      className="absolute w-2 h-2 rounded-full bg-indigo-400/30 blur-[1px]"
                      style={{ top: "-4px", left: "50%" }}
                    />
                  </div>
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-36 h-36 rounded-full bg-gradient-to-br from-indigo-100/30 to-violet-100/30 blur-2xl" />
                  <div className="relative w-28 h-28 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center shadow-2xl shadow-slate-900/30 border border-white/5">
                    <div className="text-center">
                      <svg
                        className="w-9 h-9 text-indigo-400 mx-auto mb-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                      <span className="text-indigo-300 text-[9px] font-bold tracking-widest uppercase">
                        RF Core
                      </span>
                    </div>
                  </div>
                </div>
                {[
                  { label: "Shielding", angle: 0 },
                  { label: "Absorbers", angle: 60 },
                  { label: "Filters", angle: 120 },
                  { label: "Sealing", angle: 180 },
                  { label: "Ventilation", angle: 240 },
                  { label: "Panels", angle: 300 },
                ].map((node, i) => {
                  const r = 42;
                  const x = Math.round(
                    Math.cos((node.angle * Math.PI) / 180) * r,
                  );
                  const y = Math.round(
                    Math.sin((node.angle * Math.PI) / 180) * r,
                  );
                  return (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        left: `${50 + x}%`,
                        top: `${50 + y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="group px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 cursor-default shadow-sm hover:shadow-lg hover:shadow-indigo-100/40 hover:scale-110">
                        <span className="text-gray-600 text-[11px] font-bold whitespace-nowrap group-hover:text-indigo-700 transition-colors">
                          {node.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CUSTOMIZATION ===== */}
      <section
        className="relative py-16 lg:py-22 bg-white"
        aria-labelledby="custom-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            id="custom-header"
            data-animate
            className={`mb-12 transition-all duration-1000 ${isVisible["custom-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
              <div>
                <div className="inline-flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-[2px] bg-gradient-to-r from-indigo-600 to-indigo-600/0" />
                  <span className="text-indigo-600 text-[11px] font-bold tracking-[0.2em] uppercase">
                    Customization
                  </span>
                </div>
                <h2
                  id="custom-heading"
                  className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-[-0.03em]"
                >
                  Tailored to Your{" "}
                  <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    Exact Needs
                  </span>
                </h2>
              </div>
              <p className="text-gray-500 max-w-md text-[15px] leading-relaxed lg:text-right">
                We design chambers that fit your exact testing requirements, not
                standard templates.
              </p>
            </div>
          </div>

          <div
            id="custom-cards"
            data-animate
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-1000 delay-200 ${isVisible["custom-cards"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {customization.map((item, index) => (
              <article
                key={index}
                className="group relative rounded-2xl transition-all duration-500 cursor-pointer hover:-translate-y-1.5 shadow-md hover:shadow-xl"
              >
                <div className="relative p-7 bg-white border border-gray-100 rounded-2xl group-hover:border-gray-200 transition-all duration-500 overflow-hidden">
                  <div
                    className="absolute -top-4 -right-2 text-[100px] font-black leading-none select-none text-gray-50 group-hover:text-gray-100 transition-colors duration-700"
                    aria-hidden="true"
                  >
                    {item.number}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-[13.5px] leading-[1.7]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTEGRATION CAPABILITIES ===== */}
      <section
        className="relative py-16 lg:py-22 bg-gradient-to-b from-gray-50 to-white"
        aria-labelledby="integration-heading"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            id="integration-header"
            data-animate
            className={`mb-12 transition-all duration-1000 ${isVisible["integration-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
              <div>
                <div className="inline-flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-[2px] bg-gradient-to-r from-indigo-600 to-indigo-600/0" />
                  <span className="text-indigo-600 text-[11px] font-bold tracking-[0.2em] uppercase">
                    Seamless Integration
                  </span>
                </div>
                <h2
                  id="integration-heading"
                  className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-[-0.03em]"
                >
                  Automation &amp;{" "}
                  <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    System Integration
                  </span>
                </h2>
              </div>
              <p className="text-gray-500 max-w-md text-[15px] leading-relaxed lg:text-right">
                A key strength of our RF chambers is seamless integration with
                production systems.
              </p>
            </div>
          </div>

          <div
            id="integration-grid"
            data-animate
            className={`grid md:grid-cols-2 gap-5 transition-all duration-1000 delay-200 ${isVisible["integration-grid"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {integrationCapabilities.map((cap, index) => {
              const isHovered = hoveredCapability === index;
              return (
                <article
                  key={index}
                  className={`group relative rounded-2xl transition-all duration-500 cursor-pointer ${isHovered ? "-translate-y-2 shadow-2xl shadow-gray-200/50" : "shadow-md hover:shadow-xl hover:-translate-y-1"}`}
                  onMouseEnter={() => setHoveredCapability(index)}
                  onMouseLeave={() => setHoveredCapability(null)}
                >
                  <div className="relative p-7 bg-white border border-gray-100 rounded-2xl group-hover:border-gray-200 transition-all duration-500 overflow-hidden">
                    <div
                      className={`absolute -top-4 -right-2 text-[100px] font-black leading-none select-none transition-all duration-700 ${isHovered ? "text-gray-100 translate-x-0" : "text-gray-50 translate-x-4"}`}
                      aria-hidden="true"
                    >
                      {cap.number}
                    </div>
                    <div className="relative z-10 flex gap-5">
                      <div
                        className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${isHovered ? "bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-xl scale-110" : "bg-gray-100 text-gray-500"}`}
                      >
                        {cap.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {cap.title}
                        </h3>
                        <p className="text-gray-500 text-[13.5px] leading-[1.7]">
                          {cap.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TESTING WORKFLOW ===== */}
      <section
        className="relative py-16 bg-slate-950 overflow-hidden"
        aria-labelledby="workflow-heading"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.06),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div
            id="workflow"
            data-animate
            className={`transition-all duration-1000 ${isVisible["workflow"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2.5 mb-4">
                <div className="w-8 h-[2px] bg-gradient-to-r from-indigo-400 to-indigo-400/0" />
                <span className="text-indigo-400 text-[11px] font-bold tracking-[0.2em] uppercase">
                  Testing Workflow
                </span>
                <div className="w-8 h-[2px] bg-gradient-to-l from-indigo-400 to-indigo-400/0" />
              </div>
              <h3
                id="workflow-heading"
                className="text-2xl md:text-3xl font-black text-white tracking-[-0.02em]"
              >
                Typical <span className="text-indigo-400">RF Testing</span>{" "}
                Process
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-3 relative">
              <div className="hidden md:block absolute top-[40px] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-indigo-500/0 via-indigo-500/30 to-indigo-500/0" />

      {workflowSteps.map((step, i) => {
  const Icon = step.icon; // ✅ extract component

  return (
    <div
      key={i}
      className="relative text-center group cursor-default"
    >
      <div className="relative z-10 w-20 h-20 mx-auto mb-4">
        <div className="absolute inset-0 rounded-2xl border border-indigo-500/20 group-hover:border-indigo-400/40 transition-colors duration-500 rotate-3 group-hover:rotate-6" />
        
        <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 flex items-center justify-center group-hover:from-indigo-900/50 group-hover:to-slate-900 transition-all duration-500 shadow-lg">
          
          {/* ✅ FIX HERE */}
          <Icon className="w-8 h-8 text-indigo-400 transition-transform duration-300 group-hover:scale-125" />
        
        </div>
      </div>

      <div className="text-indigo-400/40 text-[11px] font-mono font-bold mb-1 tracking-widest">
        {step.step}
      </div>

      <h4 className="text-white font-bold text-[14px] group-hover:text-indigo-300 transition-colors mb-1">
        {step.title}
      </h4>

      <p className="text-gray-500 text-[11px] leading-relaxed">
        {step.description}
      </p>
    </div>
  );
})}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section
        className="relative py-16 lg:py-22 overflow-hidden bg-white"
        aria-labelledby="cta-heading"
      >
        <div
          id="cta-section"
          data-animate
          className={`relative max-w-5xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${isVisible["cta-section"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative rounded-[2rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.1),transparent_50%)]" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />

            <div className="absolute top-8 right-8 w-32 h-32 border border-white/[0.05] rounded-3xl rotate-12" />
            <div className="absolute bottom-8 left-8 w-24 h-24 border border-white/[0.04] rounded-2xl -rotate-6" />

            <div className="relative p-10 md:p-14 lg:p-18 text-center">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-400/15 backdrop-blur-sm mb-8">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-emerald-300 text-sm font-semibold">
                  Ready to Design
                </span>
              </div>

              <h2
                id="cta-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.05] mb-5 tracking-[-0.03em]"
              >
                Build a Controlled RF Testing
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent">
                  Environment with Confidence
                </span>
              </h2>

              <p className="text-gray-400 text-[15px] md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
                Connect with our experts to design a customized RF chamber
                tailored to your application and testing requirements.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="group relative px-10 py-4.5 bg-white hover:bg-gray-50 text-slate-900 font-bold text-[15px] rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 overflow-hidden inline-flex items-center justify-center"
                >
                  <span className="relative flex items-center gap-2.5 justify-center">
                    Get in Touch
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </a>
                <button className="group px-10 py-4.5 border border-white/15 hover:border-white/30 bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-sm text-white/90 hover:text-white font-semibold text-[15px] rounded-xl transition-all duration-300 hover:-translate-y-0.5">
                  <span className="flex items-center gap-2.5 justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                    Download Brochure
                  </span>
                </button>
              </div>

              <div className="mt-12 pt-6 border-t border-white/[0.06]">
                <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
                  {[
                    { icon: "📡", text: "High Shielding Effectiveness" },
                    { icon: "⚙️", text: "Custom Engineered" },
                    { icon: "🏭", text: "In-House Manufacturing" },
                    { icon: "🔒", text: "RF-Tight Sealing" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 text-gray-500 hover:text-gray-300 transition-colors cursor-default group"
                    >
                      <span className="text-base group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <span className="text-[12px] font-medium tracking-wide">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <style jsx>{`
        @keyframes orbitSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes scan {
          0% {
            top: -2px;
          }
          100% {
            top: 100%;
          }
        }
        @keyframes dataBar {
          0% {
            opacity: 0.4;
            transform: scaleY(0.7);
          }
          100% {
            opacity: 1;
            transform: scaleY(1);
          }
        }
        .animate-scan {
          animation: scan 4s ease-in-out infinite;
        }
        .hero-badge {
          animation: fadeSlideUp 0.8s ease-out 0.1s both;
        }
        .hero-title {
          animation: fadeSlideUp 0.8s ease-out 0.25s both;
        }
        .hero-punch {
          animation: fadeSlideUp 0.8s ease-out 0.35s both;
        }
        .hero-subtext {
          animation: fadeSlideUp 0.8s ease-out 0.45s both;
        }
        .hero-pillars {
          animation: fadeSlideUp 0.8s ease-out 0.55s both;
        }
        .hero-stats {
          animation: fadeSlideUp 0.8s ease-out 0.65s both;
        }
        .hero-scroll {
          animation: fadeSlideUp 0.8s ease-out 1s both;
        }
        .hero-underline {
          animation: expandWidth 1s ease-out 1s both;
        }
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes expandWidth {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
};

export default RFShieldedChamberPage;
