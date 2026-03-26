// "use client";

// import React, { useEffect, useState, useRef, useMemo } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// export default function TestCells() {
//   // Wrap gallery in useMemo to prevent recreation on every render
//   const gallery = useMemo(() => [
//     { 
//       id: 1, 
//       title: "Dispensing Station", 
//       src: "/assets/Dispesing stn.JPG", 
//       tag: "Dispensing",
//       description: "Precision automated dispensing for adhesives and thermal compounds"
//     },
//     { 
//       id: 2, 
//       title: "EOL Testing", 
//       src: "/assets/EOL.JPG", 
//       tag: "EOL",
//       description: "Comprehensive end-of-line validation and quality assurance"
//     },
//     { 
//       id: 3, 
//       title: "Grading Machine", 
//       src: "/assets/Grading Machine.JPG", 
//       tag: "Grading",
//       description: "Automated component classification and performance grading"
//     },
//     { 
//       id: 4, 
//       title: "Light Guide Inspection", 
//       src: "/assets/Light guide inspection.JPG", 
//       tag: "Inspection",
//       description: "Advanced optical testing for brightness and uniformity"
//     },
//     { 
//       id: 5, 
//       title: "Mosfet Grading", 
//       src: "/assets/Mosfet Grading.JPG", 
//       tag: "Grading",
//       description: "High-precision MOSFET electrical parameter testing"
//     },
//     { 
//       id: 6, 
//       title: "PCB Flashing", 
//       src: "/assets/PCB Flashing.JPG", 
//       tag: "PCB",
//       description: "Firmware programming and verification systems"
//     },
//     {
//       id: 7,
//       title: "MOSFET Grading Process",
//       src: "/assets/MOSFET_Grading_720p_h264_crf22.mp4",
//       tag: "Video",
//       description: "Walkthrough of MOSFET grading process",
//       type: "video",
//       poster: "/assets/Mosfet Grading.JPG"
//     }
//   ], []); // Empty dependency array means it only creates once

//   const [selected, setSelected] = useState(null);
//   const [index, setIndex] = useState(0);
//   const modalRef = useRef();

//   useEffect(() => {
//     function onKey(e) {
//       if (!selected) return;
//       if (e.key === "Escape") setSelected(null);
//       if (e.key === "ArrowRight") setIndex((i) => (i + 1) % gallery.length);
//       if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + gallery.length) % gallery.length);
//     }
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [selected, gallery.length]);

//   useEffect(() => {
//     if (selected) {
//       const foundIndex = gallery.findIndex((f) => f.id === selected.id);
//       setIndex(foundIndex >= 0 ? foundIndex : 0);
//     }
//   }, [selected, gallery]);

//   const openAt = (item) => {
//     setSelected(item);
//   };

//   const closeModal = () => setSelected(null);

//   const next = () => setIndex((i) => (i + 1) % gallery.length);
//   const prev = () => setIndex((i) => (i - 1 + gallery.length) % gallery.length);

//   useEffect(() => {
//     if (!selected) return;
//     setSelected(gallery[index]);
//   }, [index, gallery]);

//   const stats = [
//     { value: "99.9%", label: "Test Accuracy", icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>) },
//     { value: "50K+", label: "Tests/Day", icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>) },
//     { value: "24/7", label: "Operation", icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>) },
//     { value: "100%", label: "Traceability", icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>) }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
//       {/* Subtle Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
//         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
//         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//         {/* Hero Section */}
//         <motion.header 
//           initial={{ opacity: 0, y: -20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           className="text-center mb-16 lg:mb-20"
//         >
//           {/* Status Badge */}
//           <motion.div 
//             initial={{ scale: 0 }} 
//             animate={{ scale: 1 }} 
//             transition={{ type: "spring", duration: 0.6 }} 
//             className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-200/50 mb-6 mt-4.5"
//           >
//             <span className="relative flex h-2.5 w-2.5">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
//             </span>
//             <span className="text-sm font-semibold text-slate-700 tracking-wide ">AUTOMATED TESTING SOLUTIONS</span>
//           </motion.div>

//           {/* Main Heading */}
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 tracking-tight">
//             <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
//               Test Cells
//             </span>
//           </h1>

//           <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6 font-medium">
//             Advanced automated testing stations designed to validate electrical, optical, and functional parameters with unmatched precision and reliability
//           </p>

//           {/* Feature Pills */}
//           <div className="flex items-center justify-center gap-3 flex-wrap max-w-2xl mx-auto">
//             {[
//               "Full Automation",
//               "MES Integration", 
//               "Industry 4.0 Ready"
//             ].map((feature, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 + i * 0.1 }}
//                 className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200/50 shadow-sm"
//               >
//                 <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//                 <span className="text-sm font-medium text-slate-700">{feature}</span>
//               </motion.div>
//             ))}
//           </div>
//         </motion.header>

//         {/* Stats Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ delay: 0.2 }} 
//           className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16 lg:mb-20"
//         >
//           {stats.map((stat, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.3 + i * 0.1 }}
//               whileHover={{ y: -5, scale: 1.02 }}
//               className="group bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg border border-slate-200/50 text-center hover:shadow-xl hover:border-blue-300/50 transition-all duration-300"
//             >
//               <div className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                 {stat.icon}
//               </div>
//               <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-1">
//                 {stat.value}
//               </div>
//               <div className="text-sm lg:text-base text-slate-600 font-semibold">
//                 {stat.label}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* About Section */}
//         <motion.section 
//           initial={{ opacity: 0, y: 20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ delay: 0.4 }} 
//           className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-200/50 p-8 lg:p-12 mb-16 lg:mb-20"
//         >
//           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
//             {/* Left Column */}
//             <div>
//               <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-2 rounded-full mb-6 border border-blue-100">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <span className="font-bold text-sm">What Are Test Cells?</span>
//               </div>

//               <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 leading-tight">
//                 Precision Testing Infrastructure
//               </h2>
              
//               <p className="text-slate-600 leading-relaxed mb-6 text-base lg:text-lg">
//                 Test Cells are controlled environments engineered to inspect, validate, and measure electrical, optical, and functional characteristics of products. They ensure consistent quality by automating test procedures and eliminating human variability.
//               </p>

//               <div className="space-y-3">
//                 {[
//                   "Fully automated test processes for maximum accuracy",
//                   "High repeatability using advanced sensors",
//                   "Modular, scalable designs for any product",
//                   "Complete MES/ERP traceability and digital logging",
//                   "Industry safety and quality standards compliance"
//                 ].map((item, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.5 + i * 0.1 }}
//                     className="flex items-start gap-3 group"
//                   >
//                     <div className="mt-0.5 p-1 bg-emerald-100 rounded-full group-hover:scale-110 transition-transform">
//                       <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     <span className="text-slate-700 text-sm lg:text-base">{item}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Column - Key Capabilities */}
//             <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl p-6 lg:p-8 border border-slate-200/50">
//               <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
//                 <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
//                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
//                   </svg>
//                 </div>
//                 Key Capabilities
//               </h3>
              
//               <ul className="space-y-3">
//                 {[
//                   "Electrical parameter testing (voltage, current, Rds(on))",
//                   "Functional validation under real-world conditions",
//                   "Optical inspection and brightness measurement",
//                   "Automated grading and classification",
//                   "Firmware flashing and verification",
//                   "High-speed vision systems"
//                 ].map((capability, i) => (
//                   <li key={i} className="flex items-start gap-3 text-slate-700 text-sm lg:text-base group hover:translate-x-1 transition-transform">
//                     <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
//                     <span>{capability}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </motion.section>

//         {/* Featured Video Section */}
//         <motion.section 
//           initial={{ opacity: 0, y: 12 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           className="mb-16 lg:mb-20"
//         >
//           <div className="grid lg:grid-cols-5 gap-6 items-stretch">
//             {/* Info Card */}
//             <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg border border-slate-200/50 flex flex-col justify-between">
//               <div>
//                 <div className="flex items-start gap-4 mb-6">
//                   <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">
//                     <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M8 5v14l11-7z"/>
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-2">
//                       MOSFET Grading
//                     </h3>
//                     <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
//                       Watch our automated grading system in action with real-time vision inspection and parameter logging
//                     </p>
//                   </div>
//                 </div>

//                 <div className="space-y-3 mb-6">
//                   {[
//                     "High-speed vision inspection",
//                     "Electrical parameter logging",
//                     "Automated grading & reporting"
//                   ].map((item, i) => (
//                     <div key={i} className="flex items-center gap-3 text-slate-700">
//                       <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
//                       <span className="text-sm lg:text-base">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="pt-4 border-t border-slate-200">
//                 <div className="flex items-center gap-2 text-sm text-slate-500">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
//                   </svg>
//                   <span>Demo Video — 2 mins</span>
//                 </div>
//               </div>
//             </div>

//             {/* Video Player */}
//             <div className="lg:col-span-3 bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-lg border border-slate-200/50">
//               <div className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-2xl">
//                 <StyledVideoPlayer 
//                   src="/assets/MOSFET_Grading_720p_h264_crf22.mp4" 
//                   poster="/assets/Mosfet Grading.JPG" 
//                 />
//               </div>
//             </div>
//           </div>
//         </motion.section>

//         {/* Gallery Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ delay: 0.8 }}
//         >
//           <div className="text-center mb-12 lg:mb-16">
//             <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-2 rounded-full mb-6 border border-blue-100">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//               </svg>
//               <span className="font-bold text-sm">Our Solutions</span>
//             </div>

//             <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-4">
//               Test Cell Solutions
//             </h2>
//             <p className="text-slate-600 max-w-2xl mx-auto text-base lg:text-lg">
//               Explore our comprehensive range of specialized testing stations
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//             {gallery.map((item, i) => (
//               <motion.article
//                 key={item.id}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.9 + i * 0.1 }}
//                 whileHover={{ y: -8, scale: 1.02 }}
//                 className="group bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl shadow-lg overflow-hidden cursor-pointer border border-slate-200/50 hover:shadow-2xl hover:border-blue-300/50 transition-all duration-300"
//                 onClick={() => openAt(item)}
//               >
//                 <div className="relative h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
//                   {item.type === 'video' ? (
//                     <>
//                       <video 
//                         muted 
//                         loop 
//                         playsInline 
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                       >
//                         <source src={item.src} type="video/mp4" />
//                       </video>
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-2xl group-hover:scale-110 transition-transform">
//                           <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
//                             <path d="M8 5v14l11-7z"/>
//                           </svg>
//                         </div>
//                       </div>
//                     </>
//                   ) : (
//                     <>
//                       <Image 
//                         src={item.src} 
//                         alt={item.title}
//                         fill
//                         className="object-cover group-hover:scale-110 transition-transform duration-700" 
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                         <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-2xl group-hover:scale-110 transition-transform">
//                           <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
//                           </svg>
//                         </div>
//                       </div>
//                     </>
//                   )}

//                   <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-blue-600 border border-blue-100 shadow-lg">
//                     {item.tag}
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-lg lg:text-xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-4">
//                     {item.description}
//                   </p>

//                   <div className="flex items-center text-blue-600 text-sm font-bold group-hover:gap-2 transition-all">
//                     <span>View Details</span>
//                     <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </div>
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </motion.div>
//       </div>

//       {/* Enhanced Modal Viewer */}
//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             ref={modalRef}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md px-4"
//             onClick={(e) => { if (e.target === modalRef.current) closeModal(); }}
//           >
//             <motion.div 
//               initial={{ scale: 0.9, opacity: 0, y: 20 }} 
//               animate={{ scale: 1, opacity: 1, y: 0 }} 
//               exit={{ scale: 0.9, opacity: 0, y: 20 }} 
//               transition={{ type: "spring", damping: 25 }} 
//               className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl" 
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Media Section */}
//               <div className="relative bg-slate-900">
//                 {selected.type === 'video' ? (
//                   <video 
//                     controls 
//                     playsInline 
//                     muted
//                     className="w-full max-h-[70vh] object-contain bg-slate-900" 
//                     poster={selected.poster || ''}
//                   >
//                     <source src={selected.src} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 ) : (
//                   <div className="relative w-full max-h-[70vh]">
//                     <Image 
//                       src={selected.src} 
//                       alt={selected.title}
//                       width={1200}
//                       height={800}
//                       className="w-full h-auto max-h-[70vh] object-contain" 
//                     />
//                   </div>
//                 )}

//                 {/* Close Button */}
//                 <motion.button
//                   whileHover={{ scale: 1.1, rotate: 90 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={closeModal}
//                   className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-slate-800 rounded-full w-12 h-12 flex items-center justify-center shadow-2xl hover:bg-white transition-colors"
//                   aria-label="close"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </motion.button>

//                 {/* Navigation Buttons */}
//                 {gallery.length > 1 && (
//                   <>
//                     <motion.button
//                       whileHover={{ scale: 1.1, x: -5 }}
//                       whileTap={{ scale: 0.9 }}
//                       onClick={(e) => { e.stopPropagation(); prev(); }}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm text-slate-800 rounded-full w-12 h-12 flex items-center justify-center shadow-2xl hover:bg-white transition-colors"
//                       aria-label="previous"
//                     >
//                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                       </svg>
//                     </motion.button>

//                     <motion.button
//                       whileHover={{ scale: 1.1, x: 5 }}
//                       whileTap={{ scale: 0.9 }}
//                       onClick={(e) => { e.stopPropagation(); next(); }}
//                       className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm text-slate-800 rounded-full w-12 h-12 flex items-center justify-center shadow-2xl hover:bg-white transition-colors"
//                       aria-label="next"
//                     >
//                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </motion.button>
//                   </>
//                 )}

//                 {/* Counter */}
//                 <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-xl">
//                   <span className="text-sm font-bold text-slate-800">
//                     {index + 1} / {gallery.length}
//                   </span>
//                 </div>
//               </div>

//               {/* Info Section */}
//               <div className="p-6 lg:p-8 bg-gradient-to-br from-white to-slate-50">
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                   <div className="flex-1">
//                     <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold mb-3 border border-blue-200">
//                       {selected.tag}
//                     </div>
//                     <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-2">
//                       {selected.title}
//                     </h3>
//                     <p className="text-slate-600 text-base lg:text-lg">
//                       {selected.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// /* --------------------- StyledVideoPlayer component --------------------- */

// function StyledVideoPlayer({ src, poster }) {
//   const videoRef = useRef(null);
//   const progressRef = useRef(null);
//   const [playing, setPlaying] = useState(false);
//   const [time, setTime] = useState({ current: 0, duration: 0 });
//   const [rate, setRate] = useState(1);

//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;
//     const onTime = () => setTime({ current: v.currentTime, duration: v.duration || 0 });
//     v.addEventListener('timeupdate', onTime);
//     v.addEventListener('loadedmetadata', onTime);
//     v.addEventListener('ended', () => setPlaying(false));
//     return () => {
//       v.removeEventListener('timeupdate', onTime);
//       v.removeEventListener('loadedmetadata', onTime);
//       v.removeEventListener('ended', () => setPlaying(false));
//     };
//   }, []);

//   const togglePlay = async () => {
//     const v = videoRef.current;
//     if (!v) return;
//     if (v.paused) {
//       try { await v.play(); setPlaying(true); } catch (e) { console.warn(e); }
//     } else {
//       v.pause(); setPlaying(false);
//     }
//   };

//   const onSeek = (e) => {
//     const v = videoRef.current;
//     if (!v || !progressRef.current) return;
//     const rect = progressRef.current.getBoundingClientRect();
//     const clickX = e.clientX - rect.left;
//     const pct = Math.max(0, Math.min(1, clickX / rect.width));
//     v.currentTime = pct * (v.duration || 0);
//     setTime({ current: v.currentTime, duration: v.duration || 0 });
//   };

//   const onRate = (r) => { 
//     const v = videoRef.current; 
//     if (!v) return; 
//     v.playbackRate = r; 
//     setRate(r); 
//   };

//   const fmt = (s=0) => {
//     if (!isFinite(s)) return '0:00';
//     const m = Math.floor(s/60); 
//     const ss = Math.floor(s%60).toString().padStart(2,'0'); 
//     return `${m}:${ss}`;
//   };

//   return (
//     <div className="w-full">
//       <div className="relative" style={{ paddingTop: '56.25%' }}>
//         <video 
//           ref={videoRef} 
//           src={src} 
//           poster={poster} 
//           className="absolute inset-0 w-full h-full object-cover" 
//           preload="metadata" 
//           playsInline 
//           muted
//         />

//         {/* Center Play Button */}
//         <button 
//           onClick={togglePlay} 
//           aria-label="play" 
//           className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-5 rounded-full shadow-2xl hover:scale-110 hover:bg-white transition-all duration-300"
//         >
//           {playing ? (
//             <svg className="w-7 h-7 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
//             </svg>
//           ) : (
//             <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M8 5v14l11-7z" />
//             </svg>
//           )}
//         </button>

//         {/* Control Bar */}
//         <div className="absolute left-3 right-3 bottom-3 bg-gradient-to-t from-black/80 via-black/60 to-transparent px-4 py-3 rounded-xl flex items-center gap-3 backdrop-blur-md">
//           <button 
//             onClick={togglePlay} 
//             className="w-10 h-10 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
//           >
//             {playing ? <PauseIcon/> : <PlayIcon/>}
//           </button>

//           <div className="flex-1">
//             <div 
//               ref={progressRef} 
//               onClick={onSeek} 
//               className="h-2 bg-white/20 rounded-full cursor-pointer overflow-hidden hover:h-2.5 transition-all"
//             >
//               <div 
//                 className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" 
//                 style={{ width: `${(time.current / Math.max(1, time.duration)) * 100}%` }} 
//               />
//             </div>
//             <div className="flex items-center justify-between text-xs text-white/90 mt-1.5 font-medium">
//               <div>{fmt(time.current)}</div>
//               <div>{fmt(time.duration)}</div>
//             </div>
//           </div>

//           <div className="flex items-center gap-2">
//             <select 
//               value={rate} 
//               onChange={(e) => onRate(Number(e.target.value))} 
//               className="bg-white/15 hover:bg-white/25 text-white text-xs rounded-lg px-2.5 py-1.5 border-0 outline-none cursor-pointer font-medium transition-colors"
//             >
//               <option value={0.5} className="bg-slate-800">0.5x</option>
//               <option value={1} className="bg-slate-800">1x</option>
//               <option value={1.5} className="bg-slate-800">1.5x</option>
//               <option value={2} className="bg-slate-800">2x</option>
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* SVG Icons */
// function PlayIcon(){ 
//   return (
//     <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M8 5v14l11-7z"/>
//     </svg>
//   ); 
// }

// function PauseIcon(){ 
//   return (
//     <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
//     </svg>
//   ); 
// }
"use client";

import React, { useState, useEffect, useCallback } from "react";

const TestCellsPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredApp, setHoveredApp] = useState(null);
  const [activeTab, setActiveTab] = useState("modular");
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  const whatSetsUsApart = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      ),
      title: "In-House Manufacturing Excellence",
      description: "End-to-end development under one roof ensures better quality control, seamless integration, and rapid execution.",
      accent: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-500",
      stat: "100%",
      statLabel: "In-House",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      ),
      title: "Ready Modular Plug-and-Play",
      description: "Pre-built, standardized test cells for quick deployment and instant operation with minimal integration effort.",
      accent: "from-emerald-500 to-teal-500",
      iconBg: "bg-emerald-500",
      stat: "Plug",
      statLabel: "& Play",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "Faster Delivery Timelines",
      description: "Optimized processes and internal capabilities enable us to deliver solutions within significantly shorter timelines.",
      accent: "from-amber-500 to-orange-500",
      iconBg: "bg-amber-500",
      stat: "3×",
      statLabel: "Faster",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Superior Build Quality",
      description: "Robust mechanical design and precision engineering ensure long-lasting, reliable performance across all conditions.",
      accent: "from-violet-500 to-purple-500",
      iconBg: "bg-violet-500",
      stat: "99.9%",
      statLabel: "Reliable",
    },
  ];

  const barData = [8, 12, 10, 15, 9, 11];
  const durations = [1.8, 2, 1.6, 2.2, 1.9, 2.1];

  const keyFeatures = [
    { text: "Modular and scalable architecture", detail: "Easily expand capacity as your production grows", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>) },
    { text: "Plug-and-play ready systems", detail: "Quick commissioning with minimal downtime", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" /></svg>) },
    { text: "High accuracy and repeatability", detail: "Precision-calibrated for consistent results", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>) },
    { text: "Integrated hardware & intelligent software", detail: "Seamless hardware-software synchronization", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>) },
    { text: "Real-time data monitoring & reporting", detail: "Live dashboards with actionable insights", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>) },
    { text: "Ergonomic and safety-compliant design", detail: "Built to international safety standards", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>) },
  ];

  const applications = [
    { title: "End-of-Line Testing", description: "Comprehensive EOL validation ensuring every product meets quality standards before shipment. Catch defects at the final stage.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>), color: "blue", number: "01" },
    { title: "Functional Testing", description: "Verify component and system functionality with precision-engineered test protocols and automated validation sequences.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>), color: "emerald", number: "02" },
    { title: "Assembly Line Integration", description: "Seamlessly integrate testing into existing production lines for inline quality assurance without disrupting workflow.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" /></svg>), color: "violet", number: "03" },
    { title: "Pilot Production & Ramp-Up", description: "Rapid deployment for pilot runs and quick production scaling with minimal downtime and maximum flexibility.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>), color: "amber", number: "04" },
  ];

  const comparisonData = [
    { feature: "Deployment Time", modular: "Very Fast", custom: "Medium–High", modularWin: true },
    { feature: "Flexibility", modular: "Standard + Scalable", custom: "Fully Custom", customWin: true },
    { feature: "Cost Efficiency", modular: "Optimized", custom: "Higher Investment", modularWin: true },
    { feature: "Lead Time", modular: "Short", custom: "Longer", modularWin: true },
    { feature: "Customization", modular: "Configurable", custom: "Unlimited", customWin: true },
    { feature: "Scalability", modular: "High", custom: "Project-Based", modularWin: true },
  ];

  const processSteps = [
    { step: "01", title: "Consult", description: "Define requirements & objectives", icon: "💬" },
    { step: "02", title: "Design", description: "Engineering & system architecture", icon: "✏️" },
    { step: "03", title: "Build", description: "In-house manufacturing & assembly", icon: "⚙️" },
    { step: "04", title: "Deploy", description: "Installation & commissioning", icon: "🚀" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden" onMouseMove={handleMouseMove}>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')`,
              transform: `scale(${1.08 + scrollY * 0.00008})`,
              transition: "transform 0.3s ease-out",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/98 via-slate-900/92 to-slate-800/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20" />
        </div>

        {/* Geometric accent lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] right-[8%] w-[1px] h-[300px] bg-gradient-to-b from-transparent via-blue-400/20 to-transparent rotate-[15deg]" />
          <div className="absolute top-[25%] right-[15%] w-[1px] h-[200px] bg-gradient-to-b from-transparent via-indigo-400/15 to-transparent rotate-[15deg]" />
          <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] rounded-full border border-white/[0.03]" />
          <div className="absolute bottom-[15%] right-[3%] w-[500px] h-[500px] rounded-full border border-white/[0.02]" />
        </div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <div className="hero-badge inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-white/70 text-[11px] font-semibold tracking-[0.25em] uppercase">
                Test Cell Solutions
              </span>
            </div>

            <h1 className="hero-title text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] leading-[1.02] mb-8">
              <span className="block text-white">Deploy Testing in</span>
              <span className="block mt-2">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    Days, Not Months
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-400/50 to-blue-500/0 rounded-full hero-underline" />
                </span>
                <span className="text-blue-400/60">.</span>
              </span>
            </h1>

            <p className="hero-subtext max-w-xl text-base md:text-lg text-gray-400 leading-relaxed mb-10">
              Pre-engineered, in-house manufactured test solutions designed for rapid deployment,
              faster delivery, and immediate productivity.
            </p>

            <div className="hero-pillars flex flex-wrap gap-6 mb-12">
              {["Faster Delivery", "In-House Manufacturing", "Plug & Play Systems"].map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 group cursor-default">
                  <div className="w-5 h-[2px] bg-gradient-to-r from-blue-400 to-blue-400/0 group-hover:to-blue-400 transition-all duration-500" />
                  <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">{item}</span>
                </div>
              ))}
            </div>

            {/* Hero Stats */}
            <div className="hero-stats flex gap-8 md:gap-12">
              {[
                { value: "100%", label: "In-House Built" },
                { value: "3×", label: "Faster Delivery" },
                { value: "99.9%", label: "Reliability" },
              ].map((stat, i) => (
                <div key={i} className="group cursor-default">
                  <div className="text-2xl md:text-3xl font-black text-white group-hover:text-blue-300 transition-colors duration-300">{stat.value}</div>
                  <div className="text-[11px] text-gray-500 font-medium tracking-wider uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hero-scroll">
          <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ===== ABOUT / OVERVIEW ===== */}
      <section className="relative py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            id="about-section"
            data-animate
            className={`grid lg:grid-cols-2 gap-14 lg:gap-24 items-center transition-all duration-[1.2s] ease-out ${
              isVisible["about-section"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Left – Visual */}
            <div className="relative group order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl shadow-slate-900/20">
                {/* Schematic visual */}
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <div className="relative w-full h-full max-w-sm max-h-64">
                    {/* Main frame */}
                    <div className="absolute inset-0 border border-blue-500/20 rounded-2xl">
                      <div className="absolute -top-3 left-8 px-4 py-1.5 bg-slate-800 border border-blue-500/30 rounded-lg">
                        <span className="text-blue-400 text-[10px] font-mono tracking-widest font-bold">TEST-CELL-3200</span>
                      </div>
                    </div>

                    {/* Inner grid */}
                    <div className="absolute inset-4 border border-blue-500/10 rounded-xl border-dashed" />

                    {/* Sensor module */}
                    <div className="absolute top-8 left-6 w-20 h-16 border border-blue-500/20 rounded-xl bg-blue-500/5 backdrop-blur-sm flex flex-col items-center justify-center gap-1.5">
                      <div className="w-8 h-8 rounded-full border-2 border-blue-400/30 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50 animate-pulse" />
                      </div>
                      <span className="text-blue-400/60 text-[8px] font-mono font-bold tracking-wider">SENSOR</span>
                    </div>

                    {/* Data module */}
                    <div className="absolute top-8 right-6 w-24 h-16 border border-blue-500/20 rounded-xl bg-blue-500/5 backdrop-blur-sm flex flex-col items-center justify-center gap-1.5">
                      <div className="flex gap-[3px] items-end">
                        {barData.map((_, j) => (
                          <div
                            key={j}
                            style={{
                              height: `${barData[j]}px`,
                              animationName: "dataBar",
                              animationDuration: `${durations[j]}s`,
                              animationTimingFunction: "ease-in-out",
                              animationIterationCount: "infinite",
                              animationDirection: "alternate",
                              animationDelay: `${j * 0.12}s`,
                            }}
                            className="w-1.5 rounded-sm bg-gradient-to-t from-cyan-500 to-blue-400"
                          />
                        ))}
                      </div>
                      <span className="text-blue-400/60 text-[8px] font-mono font-bold tracking-wider">DATA</span>
                    </div>

                    {/* Control unit */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-44 h-12 border border-blue-500/20 rounded-xl bg-blue-500/5 backdrop-blur-sm flex items-center justify-center gap-4">
                      <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-lg shadow-emerald-500/30" />
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-lg shadow-blue-500/30" style={{ animationDelay: "0.5s" }} />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse shadow-lg shadow-amber-500/30" style={{ animationDelay: "1s" }} />
                      </div>
                      <span className="text-blue-400/60 text-[8px] font-mono font-bold tracking-wider">CONTROL UNIT</span>
                    </div>

                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                      <line x1="30%" y1="40%" x2="50%" y2="58%" stroke="rgba(59,130,246,0.15)" strokeWidth="1" strokeDasharray="4,4">
                        <animate attributeName="stroke-dashoffset" values="8;0" dur="2s" repeatCount="indefinite" />
                      </line>
                      <line x1="70%" y1="40%" x2="50%" y2="58%" stroke="rgba(59,130,246,0.15)" strokeWidth="1" strokeDasharray="4,4">
                        <animate attributeName="stroke-dashoffset" values="8;0" dur="2s" repeatCount="indefinite" />
                      </line>
                    </svg>

                    {/* Center pulse */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 rounded-full bg-blue-400/15 animate-ping" />
                      <div className="absolute inset-1.5 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 shadow-lg shadow-blue-500/40" />
                    </div>
                  </div>
                </div>

                {/* Scan line */}
                <div className="absolute inset-0 overflow-hidden opacity-20">
                  <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan" />
                </div>

                {/* Corner accents */}
                {[
                  "top-4 left-4 border-t border-l",
                  "top-4 right-4 border-t border-r",
                  "bottom-4 left-4 border-b border-l",
                  "bottom-4 right-4 border-b border-r",
                ].map((cls, i) => (
                  <div key={i} className={`absolute w-6 h-6 border-blue-500/20 ${cls} rounded-sm`} />
                ))}

                {/* Status badge */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2 px-3 py-1.5 bg-slate-800/90 border border-blue-500/20 rounded-lg backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-blue-300 text-[10px] font-mono font-bold tracking-wider">SYSTEM ACTIVE</span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 px-4 py-2.5 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100">
                <div className="text-xl font-black text-blue-600">100%</div>
                <div className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">In-House</div>
              </div>
            </div>

            {/* Right – Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2.5 mb-8">
                <div className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-blue-600/0" />
                <span className="text-blue-600 text-[11px] font-bold tracking-[0.2em] uppercase">
                  About Our Test Cells
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black text-gray-900 leading-[1.08] mb-8 tracking-[-0.02em]">
                Engineered for{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Quality, Precision
                  </span>
                </span>
                <br />
                <span className="bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent">
                  & Speed
                </span>
              </h2>

              <div className="space-y-5 text-gray-500 leading-[1.8] text-[15px]">
                <p>
                  Our Test Cells are engineered with a strong focus on quality, precision, and speed.
                  With complete in-house manufacturing capabilities, we ensure full control over
                  design, fabrication, assembly, and integration—resulting in{" "}
                  <span className="text-gray-900 font-semibold">superior build quality</span> and{" "}
                  <span className="text-gray-900 font-semibold">faster turnaround times</span>.
                </p>
                <p>
                  We offer ready-to-deploy modular test cells designed for plug-and-play operation,
                  enabling quick installation, minimal setup, and immediate productivity in
                  fast-paced production environments.
                </p>
                <p>
                  Backed by in-house manufacturing, we reduce dependency on external vendors and
                  significantly cut lead times. Each system is built with precision to ensure high
                  reliability, durability, and consistent long-term performance.
                </p>
              </div>

              {/* Mini stats row */}
              <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-3 gap-6">
                {[
                  { value: "In-House", label: "Manufacturing" },
                  { value: "Rapid", label: "Deployment" },
                  { value: "Modular", label: "Architecture" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="text-base font-bold text-gray-900">{s.value}</div>
                    <div className="text-[11px] text-gray-400 font-medium mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS STRIP ===== */}
      <section className="relative py-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div
            id="process"
            data-animate
            className={`transition-all duration-1000 ${isVisible["process"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2.5 mb-5">
                <div className="w-8 h-[2px] bg-gradient-to-r from-blue-400 to-blue-400/0" />
                <span className="text-blue-400 text-[11px] font-bold tracking-[0.2em] uppercase">Our Process</span>
                <div className="w-8 h-[2px] bg-gradient-to-l from-blue-400 to-blue-400/0" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-[-0.02em]">
                From Concept to <span className="text-blue-400">Deployment</span>
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 relative">
              {/* Connection line */}
              <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0" />

              {processSteps.map((step, i) => (
                <div key={i} className="relative text-center group cursor-default">
                  <div className="relative z-10 w-20 h-20 mx-auto mb-5">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-2xl border border-blue-500/20 group-hover:border-blue-400/40 transition-colors duration-500 rotate-3 group-hover:rotate-6" />
                    {/* Inner card */}
                    <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 flex items-center justify-center group-hover:from-blue-900/50 group-hover:to-slate-900 transition-all duration-500 shadow-lg">
                      <span className="text-2xl transition-transform duration-300 group-hover:scale-125">{step.icon}</span>
                    </div>
                  </div>
                  <div className="text-blue-400/40 text-[11px] font-mono font-bold mb-1.5 tracking-widest">{step.step}</div>
                  <h4 className="text-white font-bold text-[15px] group-hover:text-blue-300 transition-colors mb-1.5">{step.title}</h4>
                  <p className="text-gray-500 text-[12px] leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT SETS US APART ===== */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-50/30 to-transparent rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div
            id="apart-header"
            data-animate
            className={`mb-16 transition-all duration-1000 ${isVisible["apart-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-blue-600/0" />
                  <span className="text-blue-600 text-[11px] font-bold tracking-[0.2em] uppercase">Our Advantages</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-[-0.03em]">
                  What Sets Us{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Apart</span>
                </h2>
              </div>
              <p className="text-gray-500 max-w-md text-[15px] leading-relaxed lg:text-right">
                Four pillars that define our commitment to delivering superior test solutions with unmatched speed and quality.
              </p>
            </div>
          </div>

          <div
            id="apart-cards"
            data-animate
            className={`grid md:grid-cols-2 xl:grid-cols-4 gap-6 transition-all duration-1000 delay-200 ${isVisible["apart-cards"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {whatSetsUsApart.map((item, index) => (
              <div
                key={index}
                className={`group relative cursor-pointer transition-all duration-500 ${
                  activeFeature === index ? "-translate-y-3" : "hover:-translate-y-1.5"
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`relative h-full rounded-2xl border transition-all duration-500 overflow-hidden ${
                  activeFeature === index 
                    ? "border-gray-200 shadow-2xl shadow-gray-200/50 bg-white" 
                    : "border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 bg-white"
                }`}>
                  {/* Top gradient bar */}
                  <div className={`h-1 bg-gradient-to-r ${item.accent} transition-all duration-500 ${
                    activeFeature === index ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                  }`} />

                  <div className="p-7">
                    {/* Stat badge */}
                    <div className={`absolute top-6 right-6 text-right transition-all duration-500 ${
                      activeFeature === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}>
                      <div className={`text-2xl font-black bg-gradient-to-r ${item.accent} bg-clip-text text-transparent`}>{item.stat}</div>
                      <div className="text-[9px] text-gray-400 font-bold tracking-wider uppercase">{item.statLabel}</div>
                    </div>

                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                      activeFeature === index
                        ? `${item.iconBg} text-white shadow-lg`
                        : "bg-gray-100 text-gray-400 group-hover:bg-gray-200/80 group-hover:text-gray-600"
                    }`}>
                      {item.icon}
                    </div>

                    <h3 className="text-[15px] font-bold text-gray-900 mb-3 leading-snug pr-12">{item.title}</h3>
                    <p className="text-gray-500 text-[13px] leading-[1.7]">{item.description}</p>

                    {/* Bottom indicator */}
                    <div className={`mt-6 flex items-center gap-2 transition-all duration-500 ${
                      activeFeature === index ? "opacity-100" : "opacity-0"
                    }`}>
                      <div className={`h-[2px] w-8 rounded-full bg-gradient-to-r ${item.accent}`} />
                      <span className="text-[11px] text-gray-400 font-semibold">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Progress indicator */}
          <div className="flex justify-center gap-2 mt-10">
            {whatSetsUsApart.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveFeature(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  activeFeature === i ? "w-8 bg-blue-500" : "w-2 bg-gray-200 hover:bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== KEY FEATURES ===== */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div
              id="features-section"
              data-animate
              className={`transition-all duration-1000 ${isVisible["features-section"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="inline-flex items-center gap-2.5 mb-6">
                <div className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-blue-600/0" />
                <span className="text-blue-600 text-[11px] font-bold tracking-[0.2em] uppercase">Key Features</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5 leading-[1.08] tracking-[-0.02em]">
                Built with{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Intelligent</span>
                <br />Engineering
              </h2>

              <p className="text-gray-500 text-[15px] mb-10 leading-relaxed">
                Every test cell integrates cutting-edge technology with robust engineering principles to deliver unmatched performance.
              </p>

              <div className="space-y-2">
                {keyFeatures.map((feature, i) => (
                  <div key={i} className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-400 cursor-default border border-transparent hover:border-gray-100">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gray-100 border border-gray-200/50 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:shadow-lg group-hover:shadow-blue-200/40 transition-all duration-400 group-hover:scale-105">
                      {feature.icon}
                    </div>
                    <div className="pt-0.5">
                      <span className="text-gray-800 font-semibold text-[14px] group-hover:text-gray-900 transition-colors">{feature.text}</span>
                      <p className="text-gray-400 text-[12px] mt-1 group-hover:text-gray-500 transition-colors leading-relaxed">{feature.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Orbital Visual */}
            <div
              id="features-visual"
              data-animate
              className={`transition-all duration-1000 delay-300 ${isVisible["features-visual"] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Orbital rings */}
                {[12, 26, 39].map((inset, i) => (
                  <div key={i} className="absolute rounded-full border" style={{
                    inset: `${inset}%`,
                    borderColor: `rgba(99,102,241,${0.08 + i * 0.04})`,
                    animation: `orbitSpin ${30 - i * 5}s linear infinite ${i % 2 ? "reverse" : ""}`,
                  }}>
                    <div className="absolute w-2 h-2 rounded-full bg-blue-400/30 blur-[1px]" style={{ top: "-4px", left: "50%" }} />
                  </div>
                ))}

                {/* Center hub */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-36 h-36 rounded-full bg-gradient-to-br from-blue-100/30 to-indigo-100/30 blur-2xl" />
                  <div className="relative w-28 h-28 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center shadow-2xl shadow-slate-900/30 border border-white/5">
                    <div className="text-center">
                      <svg className="w-9 h-9 text-blue-400 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                      </svg>
                      <span className="text-blue-300 text-[9px] font-bold tracking-widest uppercase">Core</span>
                    </div>
                  </div>
                </div>

                {/* Orbital nodes */}
                {[
                  { label: "Modular", angle: 0 }, { label: "Accurate", angle: 60 },
                  { label: "Real-time", angle: 120 }, { label: "Scalable", angle: 180 },
                  { label: "Smart", angle: 240 }, { label: "Safe", angle: 300 },
                ].map((node, i) => {
                  const r = 42;
                  const x = Math.round(Math.cos((node.angle * Math.PI) / 180) * r);
                  const y = Math.round(Math.sin((node.angle * Math.PI) / 180) * r);
                  return (
                    <div key={i} className="absolute" style={{ left: `${50 + x}%`, top: `${50 + y}%`, transform: "translate(-50%, -50%)" }}>
                      <div className="group px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 cursor-default shadow-sm hover:shadow-lg hover:shadow-blue-100/40 hover:scale-110">
                        <span className="text-gray-600 text-[11px] font-bold whitespace-nowrap group-hover:text-blue-700 transition-colors">{node.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== APPLICATIONS ===== */}
      <section className="relative py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            id="apps-header"
            data-animate
            className={`mb-16 transition-all duration-1000 ${isVisible["apps-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-blue-600/0" />
                  <span className="text-blue-600 text-[11px] font-bold tracking-[0.2em] uppercase">Applications</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-[-0.03em]">
                  Where Our Test Cells{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Excel</span>
                </h2>
              </div>
              <p className="text-gray-500 max-w-md text-[15px] leading-relaxed lg:text-right">
                Versatile solutions designed for diverse manufacturing and production environments.
              </p>
            </div>
          </div>

          <div
            id="apps-grid"
            data-animate
            className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 delay-200 ${isVisible["apps-grid"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {applications.map((app, index) => {
              const colorMap = {
                blue: { gradient: "from-blue-600 to-blue-700", light: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", shadow: "shadow-blue-100/50" },
                emerald: { gradient: "from-emerald-600 to-emerald-700", light: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200", shadow: "shadow-emerald-100/50" },
                violet: { gradient: "from-violet-600 to-violet-700", light: "bg-violet-50", text: "text-violet-600", border: "border-violet-200", shadow: "shadow-violet-100/50" },
                amber: { gradient: "from-amber-500 to-orange-600", light: "bg-amber-50", text: "text-amber-600", border: "border-amber-200", shadow: "shadow-amber-100/50" },
              };
              const c = colorMap[app.color];
              const isHovered = hoveredApp === index;

              return (
                <div
                  key={index}
                  className={`group relative rounded-2xl transition-all duration-500 cursor-pointer ${
                    isHovered ? "-translate-y-2 shadow-2xl" : "shadow-md hover:shadow-xl hover:-translate-y-1"
                  } ${isHovered ? c.shadow : ""}`}
                  onMouseEnter={() => setHoveredApp(index)}
                  onMouseLeave={() => setHoveredApp(null)}
                >
                  <div className="relative p-8 bg-white border border-gray-100 rounded-2xl group-hover:border-gray-200 transition-all duration-500 overflow-hidden">
                    {/* Background number */}
                    <div className={`absolute -top-4 -right-2 text-[120px] font-black leading-none select-none transition-all duration-700 ${
                      isHovered ? "text-gray-100 translate-x-0" : "text-gray-50 translate-x-4"
                    }`}>
                      {app.number}
                    </div>

                    <div className="relative z-10 flex gap-6">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        isHovered ? `bg-gradient-to-br ${c.gradient} text-white shadow-xl scale-110` : `${c.light} ${c.text}`
                      }`}>
                        {app.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{app.title}</h3>
                        <p className="text-gray-500 text-[13.5px] leading-[1.7]">{app.description}</p>

                        <div className={`mt-4 flex items-center gap-2 ${c.text} text-[13px] font-semibold transition-all duration-400 ${
                          isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                        }`}>
                          Learn more
                          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      <section className="relative py-20 lg:py-28 bg-gray-50">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div
            id="compare-header"
            data-animate
            className={`text-center mb-14 transition-all duration-1000 ${isVisible["compare-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-blue-600/0" />
              <span className="text-blue-600 text-[11px] font-bold tracking-[0.2em] uppercase">Comparison</span>
              <div className="w-8 h-[2px] bg-gradient-to-l from-blue-600 to-blue-600/0" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-[-0.03em]">
              Modular vs Custom{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Test Cells</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-[15px]">
              Choose the right solution for your needs. Both deliver exceptional quality.
            </p>
          </div>

          {/* Mobile Tabs */}
          <div className="flex md:hidden justify-center mb-6">
            <div className="inline-flex bg-white rounded-2xl border border-gray-200 p-1.5 shadow-sm">
              {["modular", "custom"].map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all capitalize ${
                  activeTab === tab
                    ? tab === "modular" ? "bg-blue-600 text-white shadow-lg shadow-blue-200/50" : "bg-gray-800 text-white shadow-lg"
                    : "text-gray-400 hover:text-gray-600"
                }`}>{tab}</button>
              ))}
            </div>
          </div>

          {/* Desktop Table */}
          <div
            id="compare-table"
            data-animate
            className={`hidden md:block transition-all duration-1000 delay-200 ${isVisible["compare-table"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl shadow-gray-200/30 bg-white border border-gray-200/60">
              {/* Header */}
              <div className="grid grid-cols-3">
                <div className="p-6 flex items-end bg-gray-50">
                  <span className="text-gray-400 text-[11px] font-bold uppercase tracking-widest">Feature</span>
                </div>
                <div className="p-6 bg-gradient-to-b from-blue-600 to-blue-700 text-center relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-400" />
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 mb-2 backdrop-blur-sm">
                    <span className="text-[9px] text-white font-bold uppercase tracking-widest">Recommended</span>
                  </div>
                  <div className="text-white font-black text-xl">Modular</div>
                </div>
                <div className="p-6 bg-slate-800 text-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 mb-2">
                    <span className="text-[9px] text-white/70 font-bold uppercase tracking-widest">Enterprise</span>
                  </div>
                  <div className="text-white font-black text-xl">Custom</div>
                </div>
              </div>

              {/* Rows */}
              {comparisonData.map((row, index) => (
                <div key={index} className="grid grid-cols-3 group hover:bg-blue-50/30 transition-colors duration-300">
                  <div className={`p-5 flex items-center ${index < comparisonData.length - 1 ? "border-b border-gray-100" : ""}`}>
                    <span className="text-gray-700 font-semibold text-[14px]">{row.feature}</span>
                  </div>
                  <div className={`p-5 flex items-center justify-center bg-blue-50/20 border-x border-blue-100/20 ${index < comparisonData.length - 1 ? "border-b border-blue-50" : ""}`}>
                    <div className="flex items-center gap-2.5">
                      {row.modularWin && (
                        <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-sm shadow-emerald-200">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                      )}
                      <span className={`font-semibold text-[13.5px] ${row.modularWin ? "text-blue-700" : "text-gray-600"}`}>{row.modular}</span>
                    </div>
                  </div>
                  <div className={`p-5 flex items-center justify-center ${index < comparisonData.length - 1 ? "border-b border-gray-100" : ""}`}>
                    <div className="flex items-center gap-2.5">
                      {row.customWin && (
                        <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-sm shadow-emerald-200">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                      )}
                      <span className={`font-semibold text-[13.5px] ${row.customWin ? "text-gray-800" : "text-gray-500"}`}>{row.custom}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Cards */}
          <div
            id="compare-mobile"
            data-animate
            className={`md:hidden space-y-3 transition-all duration-1000 delay-200 ${isVisible["compare-mobile"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {comparisonData.map((row, index) => (
              <div key={index} className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-gray-400 text-[11px] font-bold uppercase tracking-widest mb-2">{row.feature}</div>
                <div className={`text-base font-bold ${
                  activeTab === "modular" ? (row.modularWin ? "text-blue-700" : "text-gray-700") : (row.customWin ? "text-blue-700" : "text-gray-700")
                }`}>{activeTab === "modular" ? row.modular : row.custom}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
        <div
          id="cta-section"
          data-animate
          className={`relative max-w-5xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${isVisible["cta-section"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative rounded-[2rem] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.1),transparent_50%)]" />
            
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }} />

            {/* Geometric accents */}
            <div className="absolute top-8 right-8 w-32 h-32 border border-white/[0.05] rounded-3xl rotate-12" />
            <div className="absolute bottom-8 left-8 w-24 h-24 border border-white/[0.04] rounded-2xl -rotate-6" />

            <div className="relative p-12 md:p-16 lg:p-20 text-center">
              {/* Status badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-400/15 backdrop-blur-sm mb-10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-emerald-300 text-sm font-semibold">Ready to Start</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-black text-white leading-[1.05] mb-6 tracking-[-0.03em]">
                Ready to Accelerate
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  Your Testing?
                </span>
              </h2>

              <p className="text-gray-400 text-[15px] md:text-base max-w-xl mx-auto mb-12 leading-relaxed">
                Let&apos;s build faster, smarter, and more reliable solutions together.
                Get started with a free consultation today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative px-10 py-4.5 bg-white hover:bg-gray-50 text-slate-900 font-bold text-[15px] rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 overflow-hidden">
                  <span className="relative flex items-center gap-2.5 justify-center">
                    Get in Touch
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </span>
                </button>
                <button className="group px-10 py-4.5 border border-white/15 hover:border-white/30 bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-sm text-white/90 hover:text-white font-semibold text-[15px] rounded-xl transition-all duration-300 hover:-translate-y-0.5">
                  <span className="flex items-center gap-2.5 justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                    Download Brochure
                  </span>
                </button>
              </div>

              {/* Trust indicators */}
              <div className="mt-14 pt-8 border-t border-white/[0.06]">
                <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                  {[
                    { icon: "🏭", text: "100% In-House Manufacturing" },
                    { icon: "⚡", text: "Rapid Deployment" },
                    { icon: "🛡️", text: "Quality Assured" },
                    { icon: "🤝", text: "Dedicated Expert Support" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-gray-500 hover:text-gray-300 transition-colors cursor-default group">
                      <span className="text-base group-hover:scale-110 transition-transform">{item.icon}</span>
                      <span className="text-[12px] font-medium tracking-wide">{item.text}</span>
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
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes scan {
          0% { top: -2px; }
          100% { top: 100%; }
        }
        @keyframes dataBar {
          0% { opacity: 0.4; transform: scaleY(0.7); }
          100% { opacity: 1; transform: scaleY(1); }
        }
        .animate-scan { animation: scan 4s ease-in-out infinite; }
        .hero-badge { animation: fadeSlideUp 0.8s ease-out 0.1s both; }
        .hero-title { animation: fadeSlideUp 0.8s ease-out 0.25s both; }
        .hero-subtext { animation: fadeSlideUp 0.8s ease-out 0.4s both; }
        .hero-pillars { animation: fadeSlideUp 0.8s ease-out 0.5s both; }
        .hero-stats { animation: fadeSlideUp 0.8s ease-out 0.6s both; }
        .hero-scroll { animation: fadeSlideUp 0.8s ease-out 1s both; }
        .hero-underline {
          animation: expandWidth 1s ease-out 1s both;
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes expandWidth {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default TestCellsPage;
// "use client";

// import React, { useState, useEffect } from "react";

// const TestCellsPage = () => {
//   const [isVisible, setIsVisible] = useState({});
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [hoveredApp, setHoveredApp] = useState(null);
//   const [activeTab, setActiveTab] = useState("modular");

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
//           }
//         });
//       },
//       { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
//     );

//     const elements = document.querySelectorAll("[data-animate]");
//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % 4);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const whatSetsUsApart = [
//     {
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
//         </svg>
//       ),
//       title: "In-House Manufacturing Excellence",
//       description: "End-to-end development under one roof ensures better quality control, seamless integration, and rapid execution.",
//     },
//     {
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
//         </svg>
//       ),
//       title: "Ready Modular Plug-and-Play",
//       description: "Pre-built, standardized test cells for quick deployment and instant operation with minimal integration effort.",
//     },
//     {
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
//         </svg>
//       ),
//       title: "Faster Delivery Timelines",
//       description: "Optimized processes and internal capabilities enable us to deliver solutions within significantly shorter timelines.",
//     },
//     {
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
//         </svg>
//       ),
//       title: "Superior Build Quality",
//       description: "Robust mechanical design and precision engineering ensure long-lasting, reliable performance across all conditions.",
//     },
//   ];

//   const keyFeatures = [
//     {
//       text: "Modular and scalable architecture",
//       detail: "Easily expand capacity as your production grows",
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
//         </svg>
//       ),
//     },
//     {
//       text: "Plug-and-play ready systems",
//       detail: "Quick commissioning with minimal downtime",
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
//         </svg>
//       ),
//     },
//     {
//       text: "High accuracy and repeatability",
//       detail: "Precision-calibrated for consistent results",
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
//         </svg>
//       ),
//     },
//     {
//       text: "Integrated hardware & intelligent software",
//       detail: "Seamless hardware-software synchronization",
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
//         </svg>
//       ),
//     },
//     {
//       text: "Real-time data monitoring & reporting",
//       detail: "Live dashboards with actionable insights",
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
//         </svg>
//       ),
//     },
//     {
//       text: "Ergonomic and safety-compliant design",
//       detail: "Built to international safety standards",
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
//         </svg>
//       ),
//     },
//   ];

//   const applications = [
//     {
//       title: "End-of-Line Testing",
//       description: "Comprehensive EOL validation ensuring every product meets quality standards before shipment. Catch defects at the final stage.",
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//     },
//     {
//       title: "Functional Testing",
//       description: "Verify component and system functionality with precision-engineered test protocols and automated validation sequences.",
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
//         </svg>
//       ),
//     },
//     {
//       title: "Assembly Line Integration",
//       description: "Seamlessly integrate testing into existing production lines for inline quality assurance without disrupting workflow.",
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
//         </svg>
//       ),
//     },
//     {
//       title: "Pilot Production & Ramp-Up",
//       description: "Rapid deployment for pilot runs and quick production scaling with minimal downtime and maximum flexibility.",
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
//         </svg>
//       ),
//     },
//   ];

//   const comparisonData = [
//     { feature: "Deployment Time", modular: "Very Fast", custom: "Medium–High", modularWin: true },
//     { feature: "Flexibility", modular: "Standard + Scalable", custom: "Fully Custom", customWin: true },
//     { feature: "Cost Efficiency", modular: "Optimized", custom: "Higher Investment", modularWin: true },
//     { feature: "Lead Time", modular: "Short", custom: "Longer", modularWin: true },
//     { feature: "Customization", modular: "Configurable", custom: "Unlimited", customWin: true },
//     { feature: "Scalability", modular: "High", custom: "Project-Based", modularWin: true },
//   ];

//   const processSteps = [
//     { step: "01", title: "Consult", description: "Define requirements & objectives" },
//     { step: "02", title: "Design", description: "Engineering & system architecture" },
//     { step: "03", title: "Build", description: "In-house manufacturing & assembly" },
//     { step: "04", title: "Deploy", description: "Installation & commissioning" },
//   ];

//   return (
//     <div className="min-h-screen bg-white text-gray-900 overflow-hidden">

//       {/* ===== HERO SECTION ===== */}
//       <section className="relative h-[75vh] min-h-[520px] max-h-[700px] flex items-center overflow-hidden">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0">
//           <div
//             className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//             style={{
//               backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')`,
//             }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-gray-900/92 via-gray-900/80 to-gray-900/60" />
//           <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-gray-900/20" />
//         </div>

//         {/* Subtle grid overlay */}
//         <div
//           className="absolute inset-0 opacity-[0.06]"
//           style={{
//             backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
//             backgroundSize: "60px 60px",
//           }}
//         />

//         {/* Hero Content */}
//         <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
//           <div className="max-w-3xl">
//             {/* Badge */}
//             <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-6">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
//               </span>
//               <span className="text-blue-200 text-xs font-semibold tracking-wider uppercase">
//                 Test Cell Solutions
//               </span>
//             </div>

//             {/* Headline */}
//             <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1] mb-5">
//               <span className="block text-white">Deploy Testing in</span>
//               <span className="block mt-2">
//                 <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">
//                   Days, Not Months
//                 </span>
//                 <span className="text-blue-400">.</span>
//               </span>
//             </h1>

//             {/* Pillars */}
//             <div className="hero-pillars flex flex-wrap gap-x-6 gap-y-2 mb-5">
//               {["Faster Delivery", "In-House Manufacturing", "Plug & Play Systems"].map((item, index) => (
//                 <div key={index} className="flex items-center gap-2">
//                   <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
//                   <span className="text-gray-300 text-sm font-medium">{item}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Subtext */}
//             <p className="hero-subtext max-w-xl text-base md:text-lg text-gray-400 leading-relaxed mb-8">
//               Pre-engineered, in-house manufactured test solutions designed for rapid deployment,
//               faster delivery, and immediate productivity.
//             </p>

  
//           </div>
//         </div>

//         {/* Bottom fade */}
//         <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
//       </section>

//       {/* ===== ABOUT / OVERVIEW SECTION ===== */}
//       <section className="relative py-16 lg:py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div
//             id="about-section"
//             data-animate
//             className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ease-out ${
//               isVisible["about-section"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//             }`}
//           >
//             {/* Left – Visual */}
//             <div className="relative group order-2 lg:order-1">
//               <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-gray-50 to-blue-50/30 shadow-lg">
//                 {/* Test Cell Schematic */}
//                 <div className="absolute inset-0">
//                   <div className="absolute inset-0 flex items-center justify-center p-8">
//                     <div className="relative w-full h-full max-w-sm max-h-64">
//                       <div className="absolute inset-0 border-2 border-blue-300/40 rounded-xl">
//                         <div className="absolute -top-3 left-6 px-3 py-0.5 bg-white border border-blue-200 rounded text-blue-600 text-[10px] font-mono tracking-wider font-bold">
//                           TEST-CELL-3200
//                         </div>
//                       </div>
//                       <div className="absolute inset-3 border border-blue-200/30 rounded-lg border-dashed" />

//                       <div className="absolute top-6 left-6 w-20 h-14 border border-blue-300/50 rounded-lg bg-blue-50/80 flex flex-col items-center justify-center gap-1">
//                         <div className="w-8 h-8 rounded-full border-2 border-blue-400/50 flex items-center justify-center">
//                           <div className="w-3 h-3 rounded-full bg-blue-500/60" />
//                         </div>
//                         <span className="text-blue-500 text-[8px] font-mono font-bold">SENSOR</span>
//                       </div>

//                       <div className="absolute top-6 right-6 w-24 h-14 border border-blue-300/50 rounded-lg bg-blue-50/80 flex flex-col items-center justify-center gap-1">
//                         <div className="flex gap-0.5">
//                           {[...Array(6)].map((_, j) => (
//                             <div key={j} className="w-1.5 rounded-sm bg-blue-400/50" style={{ height: `${6 + Math.random() * 14}px` }} />
//                           ))}
//                         </div>
//                         <span className="text-blue-500 text-[8px] font-mono font-bold">DATA</span>
//                       </div>

//                       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-40 h-10 border border-blue-300/50 rounded-lg bg-blue-50/80 flex items-center justify-center gap-3">
//                         <div className="flex gap-1">
//                           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//                           <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: "0.5s" }} />
//                           <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" style={{ animationDelay: "1s" }} />
//                         </div>
//                         <span className="text-blue-500 text-[8px] font-mono font-bold">CONTROL UNIT</span>
//                       </div>

//                       <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
//                         <line x1="30%" y1="35%" x2="50%" y2="55%" stroke="rgba(37,99,235,0.2)" strokeWidth="1" strokeDasharray="4,4">
//                           <animate attributeName="stroke-dashoffset" values="8;0" dur="2s" repeatCount="indefinite" />
//                         </line>
//                         <line x1="70%" y1="35%" x2="50%" y2="55%" stroke="rgba(37,99,235,0.2)" strokeWidth="1" strokeDasharray="4,4">
//                           <animate attributeName="stroke-dashoffset" values="8;0" dur="2s" repeatCount="indefinite" />
//                         </line>
//                       </svg>

//                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//                         <div className="w-4 h-4 rounded-full bg-blue-400/40 animate-ping" />
//                         <div className="absolute inset-0.5 rounded-full bg-blue-600" />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="absolute inset-0 overflow-hidden opacity-20">
//                     <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-scan" />
//                   </div>
//                 </div>

//                 <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-blue-400/50 rounded-tl-lg" />
//                 <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-blue-400/50 rounded-tr-lg" />
//                 <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-blue-400/50 rounded-bl-lg" />
//                 <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-blue-400/50 rounded-br-lg" />

//                 <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur border border-blue-200 rounded-lg shadow-sm">
//                   <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
//                   <span className="text-blue-700 text-xs font-mono font-bold">SYSTEM ACTIVE</span>
//                 </div>
//               </div>
//             </div>

//             {/* Right – Content */}
//             <div className="order-1 lg:order-2">
//               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-6">
//                 <div className="w-1 h-4 rounded-full bg-blue-600" />
//                 <span className="text-blue-700 text-xs font-bold tracking-wider uppercase">
//                   About Our Test Cells
//                 </span>
//               </div>

//               <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-gray-900 leading-[1.1] mb-6">
//                 Engineered for{" "}
//                 <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
//                   Quality, Precision
//                 </span>
//                 <br />
//                 <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
//                   & Speed
//                 </span>
//               </h2>

//               <div className="space-y-4 text-gray-500 leading-relaxed text-[15px]">
//                 <p>
//                   Our Test Cells are engineered with a strong focus on quality, precision, and speed.
//                   With complete in-house manufacturing capabilities, we ensure full control over
//                   design, fabrication, assembly, and integration—resulting in{" "}
//                   <span className="text-blue-700 font-semibold">superior build quality</span> and{" "}
//                   <span className="text-blue-700 font-semibold">faster turnaround times</span>.
//                 </p>
//                 <p>
//                   We offer ready-to-deploy modular test cells designed for plug-and-play operation,
//                   enabling quick installation, minimal setup, and immediate productivity in
//                   fast-paced production environments.
//                 </p>
//                 <p>
//                   Backed by in-house manufacturing, we reduce dependency on external vendors and
//                   significantly cut lead times. Each system is built with precision to ensure high
//                   reliability, durability, and consistent long-term performance.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== PROCESS STRIP ===== */}
//       <section className="relative py-12 bg-gradient-to-r from-blue-50/50 via-white to-blue-50/50 border-y border-gray-100">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div
//             id="process"
//             data-animate
//             className={`transition-all duration-1000 ${
//               isVisible["process"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//             }`}
//           >
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-0 relative">
//               <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-300/50 via-blue-400/60 to-blue-300/50" />

//               {processSteps.map((step, i) => (
//                 <div key={i} className="relative text-center group">
//                   <div className="relative z-10 w-14 h-14 mx-auto rounded-xl bg-white border-2 border-gray-200 group-hover:border-blue-400 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-100 shadow-sm">
//                     <span className="text-blue-600 text-base font-black font-mono">{step.step}</span>
//                   </div>
//                   <h4 className="text-gray-900 font-bold mt-3 text-base">{step.title}</h4>
//                   <p className="text-gray-400 text-xs mt-1">{step.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== WHAT SETS US APART ===== */}
//       <section className="relative py-16 lg:py-20 bg-white">
//         <div className="absolute inset-0 opacity-[0.25]">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `radial-gradient(circle, rgba(37,99,235,0.06) 1px, transparent 1px)`,
//             backgroundSize: "32px 32px",
//           }} />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
//           {/* Section Header */}
//           <div
//             id="apart-header"
//             data-animate
//             className={`text-center mb-12 transition-all duration-1000 ${
//               isVisible["apart-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//             }`}
//           >
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-4">
//               <div className="w-1 h-4 rounded-full bg-blue-600" />
//               <span className="text-blue-700 text-xs font-bold tracking-wider uppercase">
//                 Our Advantages
//               </span>
//             </div>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
//               What Sets Us{" "}
//               <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
//                 Apart
//               </span>
//             </h2>
//             <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
//               Four pillars that define our commitment to delivering superior test solutions
//               with unmatched speed and quality.
//             </p>
//           </div>

//           {/* Cards Grid */}
//           <div
//             id="apart-cards"
//             data-animate
//             className={`grid md:grid-cols-2 xl:grid-cols-4 gap-5 transition-all duration-1000 delay-200 ${
//               isVisible["apart-cards"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//             }`}
//           >
//             {whatSetsUsApart.map((item, index) => (
//               <div
//                 key={index}
//                 className={`group relative p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer overflow-hidden ${
//                   activeFeature === index
//                     ? "bg-blue-50/80 border-blue-400 shadow-lg shadow-blue-100/60 -translate-y-1"
//                     : "bg-white border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
//                 }`}
//                 onMouseEnter={() => setActiveFeature(index)}
//               >
//                 <div className={`absolute -top-4 -right-2 text-7xl font-black select-none transition-colors duration-500 ${
//                   activeFeature === index ? "text-blue-100" : "text-gray-50"
//                 }`}>
//                   {String(index + 1).padStart(2, "0")}
//                 </div>

//                 <div className="relative z-10">
//                   <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${
//                     activeFeature === index
//                       ? "bg-blue-600 text-white shadow-lg shadow-blue-300/40 scale-110"
//                       : "bg-blue-100 text-blue-600 group-hover:bg-blue-200"
//                   }`}>
//                     {item.icon}
//                   </div>

//                   <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{item.title}</h3>
//                   <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
//                 </div>

//                 <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 rounded-b-2xl ${
//                   activeFeature === index ? "opacity-100" : "opacity-0"
//                 }`} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== KEY FEATURES ===== */}
//       <section className="relative py-16 lg:py-20 bg-gradient-to-b from-gray-50/80 via-white to-gray-50/80">
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//             {/* Left – Feature List */}
//             <div
//               id="features-section"
//               data-animate
//               className={`transition-all duration-1000 ${
//                 isVisible["features-section"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//               }`}
//             >
//               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-6">
//                 <div className="w-1 h-4 rounded-full bg-blue-600" />
//                 <span className="text-blue-700 text-xs font-bold tracking-wider uppercase">
//                   Key Features
//                 </span>
//               </div>

//               <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-[1.1]">
//                 Built with{" "}
//                 <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
//                   Intelligent
//                 </span>
//                 <br />
//                 Engineering
//               </h2>

//               <p className="text-gray-500 text-base mb-8 leading-relaxed">
//                 Every test cell integrates cutting-edge technology with robust engineering
//                 principles to deliver unmatched performance.
//               </p>

//               <div className="space-y-2">
//                 {keyFeatures.map((feature, i) => (
//                   <div
//                     key={i}
//                     className="group flex items-start gap-3 p-3 rounded-xl border border-transparent hover:border-gray-200 hover:bg-blue-50/40 transition-all duration-300 cursor-default"
//                   >
//                     <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 border border-blue-200/50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
//                       {feature.icon}
//                     </div>
//                     <div className="pt-0.5">
//                       <span className="text-gray-800 font-semibold text-sm group-hover:text-gray-900 transition-colors">
//                         {feature.text}
//                       </span>
//                       <p className="text-gray-400 text-xs mt-0.5 group-hover:text-gray-500 transition-colors">
//                         {feature.detail}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right – Orbital Visual */}
//             <div
//               id="features-visual"
//               data-animate
//               className={`transition-all duration-1000 delay-300 ${
//                 isVisible["features-visual"] ? "opacity-100 scale-100" : "opacity-0 scale-95"
//               }`}
//             >
//               <div className="relative w-full aspect-square max-w-md mx-auto">
//                 <div className="absolute inset-[15%] border border-blue-200/40 rounded-full" style={{ animation: "orbitSpin 25s linear infinite" }} />
//                 <div className="absolute inset-[28%] border border-blue-200/50 rounded-full" style={{ animation: "orbitSpin 18s linear infinite reverse" }} />
//                 <div className="absolute inset-[40%] border border-blue-300/50 rounded-full" style={{ animation: "orbitSpin 22s linear infinite" }} />

//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="absolute w-32 h-32 rounded-full bg-blue-200/30 blur-2xl" />
//                   <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-blue-300/60 flex items-center justify-center shadow-xl shadow-blue-100/40">
//                     <div className="text-center">
//                       <svg className="w-8 h-8 text-blue-600 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
//                       </svg>
//                       <span className="text-blue-700 text-[9px] font-bold tracking-wider uppercase">Core</span>
//                     </div>
//                   </div>
//                 </div>

//                 {[
//                   { label: "Modular", angle: 0, radius: 42 },
//                   { label: "Accurate", angle: 60, radius: 42 },
//                   { label: "Real-time", angle: 120, radius: 42 },
//                   { label: "Scalable", angle: 180, radius: 42 },
//                   { label: "Smart", angle: 240, radius: 42 },
//                   { label: "Safe", angle: 300, radius: 42 },
//                 ].map((node, i) => {
//                   const x = Math.cos((node.angle * Math.PI) / 180) * (node.radius / 100) * 100;
//                   const y = Math.sin((node.angle * Math.PI) / 180) * (node.radius / 100) * 100;
//                   return (
//                     <div
//                       key={i}
//                       className="absolute"
//                       style={{
//                         left: `${50 + x}%`,
//                         top: `${50 + y}%`,
//                         transform: "translate(-50%, -50%)",
//                       }}
//                     >
//                       <div className="group px-2.5 py-1.5 rounded-lg bg-white border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 cursor-default shadow-sm hover:shadow-md hover:shadow-blue-100/40">
//                         <span className="text-gray-600 text-[11px] font-semibold whitespace-nowrap group-hover:text-blue-700 transition-colors">
//                           {node.label}
//                         </span>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== APPLICATIONS ===== */}
//       <section className="relative py-16 lg:py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           {/* Section Header */}
//           <div
//             id="apps-header"
//             data-animate
//             className={`text-center mb-12 transition-all duration-1000 ${
//               isVisible["apps-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//             }`}
//           >
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-4">
//               <div className="w-1 h-4 rounded-full bg-blue-600" />
//               <span className="text-blue-700 text-xs font-bold tracking-wider uppercase">
//                 Applications
//               </span>
//             </div>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
//               Where Our Test Cells{" "}
//               <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
//                 Excel
//               </span>
//             </h2>
//             <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
//               Versatile solutions designed for diverse manufacturing and production environments.
//             </p>
//           </div>

//           {/* Application Cards */}
//           <div
//             id="apps-grid"
//             data-animate
//             className={`grid md:grid-cols-2 xl:grid-cols-4 gap-5 transition-all duration-1000 delay-200 ${
//               isVisible["apps-grid"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//             }`}
//           >
//             {applications.map((app, index) => (
//               <div
//                 key={index}
//                 className={`group relative rounded-2xl border-2 transition-all duration-500 overflow-hidden cursor-pointer ${
//                   hoveredApp === index
//                     ? "border-blue-400 -translate-y-2 shadow-lg shadow-blue-100/50"
//                     : "border-gray-100 hover:-translate-y-1 shadow-sm hover:shadow-md"
//                 }`}
//                 onMouseEnter={() => setHoveredApp(index)}
//                 onMouseLeave={() => setHoveredApp(null)}
//               >
//                 <div className={`h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-opacity ${
//                   hoveredApp === index ? "opacity-100" : "opacity-0"
//                 }`} />

//                 <div className="p-6 bg-white">
//                   <div className={`absolute inset-0 bg-gradient-to-b from-blue-50/60 to-transparent transition-opacity duration-500 ${
//                     hoveredApp === index ? "opacity-100" : "opacity-0"
//                   }`} />

//                   <div className="relative z-10">
//                     <div className="w-14 h-14 rounded-xl bg-blue-100 border border-blue-200/50 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-200/50">
//                       {app.icon}
//                     </div>

//                     <h3 className="text-lg font-bold text-gray-900 mb-2">{app.title}</h3>
//                     <p className="text-gray-500 text-sm leading-relaxed">{app.description}</p>

//                     <div className={`mt-4 flex items-center gap-2 text-blue-600 text-sm font-semibold transition-all duration-300 ${
//                       hoveredApp === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
//                     }`}>
//                       Learn more
//                       <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== COMPARISON TABLE ===== */}
//       <section className="relative py-16 lg:py-20 bg-gradient-to-b from-gray-50/60 via-white to-gray-50/60">
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

//         <div className="max-w-5xl mx-auto px-6 lg:px-8">
//           {/* Header */}
//           <div
//             id="compare-header"
//             data-animate
//             className={`text-center mb-12 transition-all duration-1000 ${
//               isVisible["compare-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//             }`}
//           >
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-4">
//               <div className="w-1 h-4 rounded-full bg-blue-600" />
//               <span className="text-blue-700 text-xs font-bold tracking-wider uppercase">
//                 Comparison
//               </span>
//             </div>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
//               Modular vs Custom{" "}
//               <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
//                 Test Cells
//               </span>
//             </h2>
//             <p className="text-gray-500 max-w-2xl mx-auto text-base">
//               Choose the right solution for your needs. Both deliver exceptional quality.
//             </p>
//           </div>

//           {/* Mobile Toggle */}
//           <div className="flex md:hidden justify-center mb-6">
//             <div className="inline-flex bg-gray-100 rounded-xl border border-gray-200 p-1">
//               <button
//                 onClick={() => setActiveTab("modular")}
//                 className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
//                   activeTab === "modular"
//                     ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
//                     : "text-gray-500 hover:text-gray-700"
//                 }`}
//               >
//                 Modular
//               </button>
//               <button
//                 onClick={() => setActiveTab("custom")}
//                 className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
//                   activeTab === "custom"
//                     ? "bg-gray-700 text-white shadow"
//                     : "text-gray-500 hover:text-gray-700"
//                 }`}
//               >
//                 Custom
//               </button>
//             </div>
//           </div>

//           {/* Desktop Table */}
//           <div
//             id="compare-table"
//             data-animate
//             className={`hidden md:block transition-all duration-1000 delay-200 ${
//               isVisible["compare-table"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//             }`}
//           >
//             <div className="grid grid-cols-3 gap-3 mb-1">
//               <div className="p-4 flex items-end">
//                 <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">Feature</span>
//               </div>
//               <div className="p-4 rounded-t-xl bg-blue-50 border-2 border-b-0 border-blue-200 text-center">
//                 <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-100 mb-1.5">
//                   <span className="text-[9px] text-blue-700 font-bold uppercase tracking-widest">Recommended</span>
//                 </div>
//                 <div className="text-blue-700 font-extrabold text-lg">Modular</div>
//               </div>
//               <div className="p-4 rounded-t-xl bg-gray-50 border-2 border-b-0 border-gray-200 text-center">
//                 <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-gray-200 mb-1.5">
//                   <span className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">Enterprise</span>
//                 </div>
//                 <div className="text-gray-700 font-extrabold text-lg">Custom</div>
//               </div>
//             </div>

//             {comparisonData.map((row, index) => (
//               <div key={index} className="grid grid-cols-3 gap-3 group">
//                 <div className="p-4 flex items-center border-b border-gray-100 group-hover:bg-gray-50/60 transition-colors rounded-l-lg">
//                   <span className="text-gray-700 font-semibold text-sm">{row.feature}</span>
//                 </div>
//                 <div className={`p-4 flex items-center justify-center border-x-2 border-b-2 border-blue-200 bg-blue-50/40 group-hover:bg-blue-50/80 transition-colors ${
//                   index === comparisonData.length - 1 ? "rounded-b-xl" : ""
//                 }`}>
//                   <div className="flex items-center gap-2">
//                     {row.modularWin && (
//                       <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
//                         <svg className="w-2.5 h-2.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
//                           <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                         </svg>
//                       </div>
//                     )}
//                     <span className={`font-semibold text-sm ${row.modularWin ? "text-blue-700" : "text-gray-600"}`}>
//                       {row.modular}
//                     </span>
//                   </div>
//                 </div>
//                 <div className={`p-4 flex items-center justify-center border-x-2 border-b-2 border-gray-200 bg-gray-50/40 group-hover:bg-gray-50/80 transition-colors ${
//                   index === comparisonData.length - 1 ? "rounded-b-xl" : ""
//                 }`}>
//                   <div className="flex items-center gap-2">
//                     {row.customWin && (
//                       <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
//                         <svg className="w-2.5 h-2.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
//                           <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                         </svg>
//                       </div>
//                     )}
//                     <span className={`font-semibold text-sm ${row.customWin ? "text-gray-800" : "text-gray-500"}`}>
//                       {row.custom}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Mobile Cards */}
//           <div
//             id="compare-mobile"
//             data-animate
//             className={`md:hidden space-y-3 transition-all duration-1000 delay-200 ${
//               isVisible["compare-mobile"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//             }`}
//           >
//             {comparisonData.map((row, index) => (
//               <div key={index} className="p-4 rounded-xl bg-white border-2 border-gray-100 shadow-sm">
//                 <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">{row.feature}</div>
//                 <div className={`text-base font-bold ${
//                   activeTab === "modular"
//                     ? (row.modularWin ? "text-blue-700" : "text-gray-700")
//                     : (row.customWin ? "text-blue-700" : "text-gray-700")
//                 }`}>
//                   {activeTab === "modular" ? row.modular : row.custom}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== CTA SECTION ===== */}
//       <section className="relative py-16 lg:py-20 overflow-hidden bg-white">
//         <div className="absolute inset-0">
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-50/60 blur-3xl" />
//         </div>

//         <div
//           id="cta-section"
//           data-animate
//           className={`relative max-w-4xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${
//             isVisible["cta-section"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//           }`}
//         >
//           <div className="relative rounded-2xl border-2 border-blue-200 bg-gradient-to-b from-blue-50/80 to-white overflow-hidden shadow-lg shadow-blue-100/20">
//             <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400" />

//             <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-blue-300/30 rounded-tl-2xl" />
//             <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-blue-300/30 rounded-br-2xl" />

//             <div className="absolute inset-0 opacity-[0.25]">
//               <div className="absolute inset-0" style={{
//                 backgroundImage: `radial-gradient(circle, rgba(37,99,235,0.04) 1px, transparent 1px)`,
//                 backgroundSize: "20px 20px",
//               }} />
//             </div>

//             <div className="relative p-10 md:p-14 lg:p-16 text-center">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-8">
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
//                 </span>
//                 <span className="text-green-700 text-sm font-semibold">Ready to Start</span>
//               </div>

//               <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-[1.05] mb-5">
//                 Ready to Accelerate
//                 <br />
//                 <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
//                   Your Testing?
//                 </span>
//               </h2>

//               <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
//                 Let&apos;s build faster, smarter, and more reliable solutions together.
//                 Get started with a free consultation today.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-3 justify-center">
//                 <button className="group relative px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 overflow-hidden">
//                   <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
//                   <span className="relative flex items-center gap-2.5 justify-center">
//                     Get in Touch
//                     <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                     </svg>
//                   </span>
//                 </button>
//                 <button className="group px-10 py-4 border-2 border-gray-200 hover:border-blue-300 bg-white hover:bg-blue-50/50 text-gray-700 hover:text-blue-700 font-semibold text-base rounded-xl transition-all duration-300 hover:-translate-y-0.5">
//                   <span className="flex items-center gap-2.5 justify-center">
//                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
//                     </svg>
//                     Download Brochure
//                   </span>
//                 </button>
//               </div>

//               <div className="mt-10 pt-6 border-t border-blue-100">
//                 <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
//                   {[
//                     { icon: "🏭", text: "100% In-House Manufacturing" },
//                     { icon: "⚡", text: "Rapid Deployment" },
//                     { icon: "🛡️", text: "Quality Assured" },
//                     { icon: "🤝", text: "Dedicated Expert Support" },
//                   ].map((item, i) => (
//                     <div key={i} className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
//                       <span className="text-sm">{item.icon}</span>
//                       <span className="text-xs font-medium">{item.text}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

//       {/* ===== GLOBAL STYLES ===== */}
//       <style jsx>{`
//         @keyframes orbitSpin {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         @keyframes scan {
//           0% { top: -2px; }
//           100% { top: 100%; }
//         }

//         .animate-scan {
//           animation: scan 3s ease-in-out infinite;
//         }

//         .hero-badge {
//           animation: fadeSlideUp 0.7s ease-out 0.1s both;
//         }
//         .hero-title {
//           animation: fadeSlideUp 0.7s ease-out 0.2s both;
//         }
//         .hero-pillars {
//           animation: fadeSlideUp 0.7s ease-out 0.35s both;
//         }
//         .hero-subtext {
//           animation: fadeSlideUp 0.7s ease-out 0.45s both;
//         }
//         .hero-cta {
//           animation: fadeSlideUp 0.7s ease-out 0.55s both;
//         }

//         @keyframes fadeSlideUp {
//           from {
//             opacity: 0;
//             transform: translateY(25px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TestCellsPage;