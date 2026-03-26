// "use client";

// import React, { useState, useRef, useEffect, useMemo } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// export default function AssemblyCells() {
//   // Wrap items in useMemo to prevent recreation on every render
//   const items = useMemo(() => [
//     {
//       id: 2,
//       title: "Assembly Line 1",
//       src: "/assets/Assy line 1.jpeg",
//       category: "Full Line",
//       description: "Modular assembly line configuration with quality checkpoints"
//     },
//     {
//       id: 5,
//       title: "Assembly Line",
//       src: "/assets/Assy line.JPG",
//       category: "Full Line",
//       description: "Flexible assembly line supporting multiple product variants"
//     },
//     {
//       id: 6,
//       title: "Auto Bowl Feeder",
//       src: "/assets/Auto Bowl feeder.JPG",
//       category: "Component",
//       description: "Automated part feeding system for consistent component supply"
//     },
//     {
//       id: 7,
//       title: "Connector Engagement",
//       src: "/assets/Connector engagement fixture.JPG",
//       category: "Station",
//       description: "Precision fixture for automated connector engagement"
//     },
//     {
//       id: 8,
//       title: "Conveyor Line",
//       src: "/assets/Conveyor line.jpeg",
//       category: "Transport",
//       description: "Material transport system with position tracking"
//     },
//     {
//       id: 9,
//       title: "Pressing Fixture",
//       src: "/assets/Pressing Fixture.JPG",
//       category: "Station",
//       description: "Controlled force application fixture with feedback monitoring"
//     },
//     {
//       id: 10,
//       title: "Screw Fixturing",
//       src: "/assets/Screw fixing with position arm.jpg",
//       category: "Station",
//       description: "Automated screwing station with position control arm"
//     },
//     {
//       id: 11,
//       title: "Station with Enclosure",
//       src: "/assets/Station with Enclosure.JPG",
//       category: "Station",
//       description: "Safety-enclosed assembly station with operator interface"
//     },
//     {
//       id: 12,
//       title: "Pressing Station",
//       src: "/assets/Station-Pressing.JPG",
//       category: "Station",
//       description: "Dedicated pressing station with force monitoring"
//     },
//   ], []);

//   const [selected, setSelected] = useState(null);
//   const [index, setIndex] = useState(0);
//   const modalRef = useRef();

//   useEffect(() => {
//     function onKey(e) {
//       if (!selected) return;
//       if (e.key === "Escape") setSelected(null);
//       if (e.key === "ArrowRight") setIndex((i) => (i + 1) % items.length);
//       if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + items.length) % items.length);
//     }
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [selected, items.length]);

//   useEffect(() => {
//     if (selected) {
//       const foundIndex = items.findIndex((f) => f.id === selected.id);
//       setIndex(foundIndex >= 0 ? foundIndex : 0);
//     }
//   }, [selected, items]);

//   useEffect(() => {
//     if (!selected) return;
//     setSelected(items[index]);
//   }, [index, items]);

//   const openAt = (item) => setSelected(item);
//   const closeModal = () => setSelected(null);
//   const next = () => setIndex((i) => (i + 1) % items.length);
//   const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

//   const stats = [
//     {
//       value: "95%",
//       label: "Automation Rate",
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//         </svg>
//       ),
//       color: "from-blue-500 to-indigo-600"
//     },
//     {
//       value: "300+",
//       label: "Units/Hour",
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//       color: "from-green-500 to-emerald-600"
//     },
//     {
//       value: "99.7%",
//       label: "First Pass Yield",
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//       color: "from-purple-500 to-pink-600"
//     },
//     {
//       value: "24/7",
//       label: "Production Ready",
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//         </svg>
//       ),
//       color: "from-orange-500 to-red-600"
//     }
//   ];

//   const features = [
//     {
//       icon: (
//         <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//         </svg>
//       ),
//       title: "Precision Fixturing",
//       description: "High-accuracy fixtures ensure consistent alignment and positioning across all assembly operations"
//     },
//     {
//       icon: (
//         <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
//         </svg>
//       ),
//       title: "Conveyor Integration",
//       description: "Seamless material flow with synchronized conveyor systems and smart buffering"
//     },
//     {
//       icon: (
//         <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
//         </svg>
//       ),
//       title: "Modular Design",
//       description: "Scalable stations support multiple product variants with quick changeover capabilities"
//     },
//     {
//       icon: (
//         <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//         </svg>
//       ),
//       title: "Smart Tooling",
//       description: "Integrated screwdrivers, presses, and feeders with real-time process monitoring"
//     },
//     {
//       icon: (
//         <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//         </svg>
//       ),
//       title: "Vision Systems",
//       description: "Advanced optical inspection and poka-yoke verification at critical assembly stages"
//     },
//     {
//       icon: (
//         <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
//         </svg>
//       ),
//       title: "MES Connectivity",
//       description: "Full traceability with real-time data logging and ERP/MES integration"
//     }
//   ];

//   const deliverables = [
//     "High-precision fixture designs for consistent assembly alignment",
//     "Conveyor-integrated lines for continuous material flow",
//     "Modular and scalable assembly stations for multiple variants",
//     "Integration of screwdrivers, presses, bowl feeders & vision",
//     "Robust safety enclosures and ergonomic operator stations",
//     "Industry-standard sensors, poka-yoke checks, and MES connectivity"
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full opacity-20 blur-3xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             x: [0, 50, 0],
//             y: [0, -50, 0],
//           }}
//           transition={{ duration: 20, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-300 rounded-full opacity-20 blur-3xl"
//           animate={{
//             scale: [1, 1.3, 1],
//             x: [0, -50, 0],
//             y: [0, 50, 0],
//           }}
//           transition={{ duration: 25, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400 to-blue-300 rounded-full opacity-10 blur-3xl"
//           animate={{
//             scale: [1, 1.5, 1],
//             rotate: [0, 180, 360],
//           }}
//           transition={{ duration: 30, repeat: Infinity }}
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 lg:px-8 lg:py-16">
//         {/* Hero Section */}
//         <motion.header
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ type: "spring", duration: 0.6 }}
//             className="inline-flex items-center gap-3 px-5 py-2.5 bg-white rounded-full shadow-lg shadow-blue-100 mb-6 border border-blue-100"
//           >
//             <span className="relative flex h-3 w-3">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
//             </span>
//             <span className="text-sm font-semibold text-gray-700">PRODUCTION LINE AUTOMATION</span>
//           </motion.div>

//           <h1 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
//               Assembly Cells
//             </span>
//           </h1>

//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
//             Purpose-built automated assembly stations integrating fixtures, conveyors, and intelligent
//             tooling systems for high-productivity manufacturing
//           </p>

//           <div className="flex items-center justify-center gap-4 flex-wrap">
//             <div className="flex items-center gap-2 text-sm text-gray-500">
//               <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//               Fully Automated
//             </div>
//             <div className="flex items-center gap-2 text-sm text-gray-500">
//               <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//               Modular Design
//             </div>
//             <div className="flex items-center gap-2 text-sm text-gray-500">
//               <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//               Smart Integration
//             </div>
//           </div>
//         </motion.header>

//         {/* Stats Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
//         >
//           {stats.map((stat, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.3 + i * 0.1 }}
//               whileHover={{ scale: 1.05, y: -5 }}
//               className="bg-white rounded-2xl p-6 shadow-xl shadow-blue-100/50 border border-gray-100 text-center group hover:border-blue-200 transition-all"
//             >
//               <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
//                 {stat.icon}
//               </div>
//               <div className="text-3xl font-black text-gray-800 mb-1">{stat.value}</div>
//               <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* About Section */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="bg-white rounded-3xl shadow-2xl shadow-blue-100/50 p-8 lg:p-12 mb-16 border border-gray-100"
//         >
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-4">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <span className="font-semibold text-sm">Overview</span>
//               </div>

//               <h2 className="text-3xl font-bold text-gray-800 mb-4">
//                 Next-Generation Assembly Automation
//               </h2>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 Assembly Cells are sophisticated manufacturing stations designed to automate and
//                 streamline product assembly processes. These integrated systems combine fixtures,
//                 conveyors, feeders, and smart tooling to deliver high productivity, exceptional
//                 repeatability, and enhanced operator safety across manual, semi-automated, and
//                 fully automated production environments.
//               </p>

//               <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
//                 <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
//                   <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   What We Deliver
//                 </h3>
//                 <div className="space-y-2">
//                   {deliverables.map((item, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.5 + i * 0.05 }}
//                       className="flex items-start gap-2 text-sm text-gray-700"
//                     >
//                       <div className="mt-1 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
//                       <span>{item}</span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 { label: "Assembly Types", value: "Manual to Fully Auto", icon: "🔧" },
//                 { label: "Cycle Time", value: "10-60 seconds", icon: "⏱️" },
//                 { label: "Flexibility", value: "Multi-variant", icon: "🔄" },
//                 { label: "Safety", value: "CE Compliant", icon: "🛡️" },
//               ].map((item, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.6 + i * 0.1 }}
//                   whileHover={{ scale: 1.05, y: -5 }}
//                   className="bg-white border-2 border-gray-100 rounded-2xl p-6 text-center hover:border-blue-200 transition-all shadow-lg"
//                 >
//                   <div className="text-3xl mb-2">{item.icon}</div>
//                   <div className="text-sm text-gray-500 mb-1">{item.label}</div>
//                   <div className="font-bold text-gray-800">{item.value}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>

//         {/* Features Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           className="mb-16"
//         >
//           <div className="text-center mb-10">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
//               Key Features & Capabilities
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Advanced technologies integrated for maximum efficiency and quality
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {features.map((feature, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.7 + i * 0.1 }}
//                 whileHover={{ scale: 1.03, y: -5 }}
//                 className="bg-white rounded-2xl p-6 shadow-lg shadow-blue-100/50 border border-gray-100 hover:border-blue-200 transition-all group"
//               >
//                 <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-4 group-hover:scale-110 transition-transform">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
//                 <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Gallery Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//         >
//           <div className="text-center mb-10">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
//               Assembly Cell Solutions
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Browse our portfolio of automated assembly systems and stations
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {items.map((item, i) => (
//               <motion.article
//                 key={item.id}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.9 + i * 0.05 }}
//                 whileHover={{ y: -8, scale: 1.02 }}
//                 className="group bg-white rounded-2xl shadow-xl shadow-blue-100/50 overflow-hidden cursor-pointer border border-gray-100 hover:border-blue-200 transition-all"
//                 onClick={() => openAt(item)}
//               >
//                 <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
//                   <Image
//                     src={item.src}
//                     alt={item.title}
//                     fill
//                     className="object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                   {/* Hover overlay with icon */}
//                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       whileHover={{ scale: 1 }}
//                       className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl"
//                     >
//                       <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
//                       </svg>
//                     </motion.div>
//                   </div>

//                   {/* Category badge */}
//                   <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600 border border-blue-100">
//                     {item.category}
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-600 leading-relaxed mb-4">
//                     {item.description}
//                   </p>

//                   <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all">
//                     View Details
//                     <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </div>
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </motion.div>

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.2 }}
//           className="mt-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-2xl shadow-blue-200/50 p-8 lg:p-12 text-center text-white overflow-hidden relative"
//         >
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
//           </div>

//           <div className="relative z-10">
//             <h2 className="text-3xl lg:text-4xl font-black mb-4">
//               Ready to Automate Your Assembly Line?
//             </h2>
//             <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
//               Let our experts design a custom assembly solution optimized for your production requirements
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
//                 </svg>
//                 Schedule Consultation
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                 </svg>
//                 Download Catalog
//               </motion.button>
//             </div>
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
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm px-4"
//             onClick={(e) => {
//               if (e.target === modalRef.current) closeModal();
//             }}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0, y: 20 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 20 }}
//               transition={{ type: "spring", damping: 25 }}
//               className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Image Section */}
//               <div className="relative bg-black">
//                 <div className="relative w-full max-h-[70vh]">
//                   <Image
//                     src={selected.src}
//                     alt={selected.title}
//                     width={1200}
//                     height={800}
//                     className="w-full h-auto max-h-[70vh] object-contain"
//                   />
//                 </div>

//                 {/* Close Button */}
//                 <motion.button
//                   whileHover={{ scale: 1.1, rotate: 90 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={closeModal}
//                   className="absolute top-4 right-4 bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-xl hover:bg-gray-100 transition-colors"
//                   aria-label="close"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </motion.button>

//                 {/* Navigation Buttons */}
//                 {items.length > 1 && (
//                   <>
//                     <motion.button
//                       whileHover={{ scale: 1.1, x: -5 }}
//                       whileTap={{ scale: 0.9 }}
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         prev();
//                       }}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-xl hover:bg-gray-100 transition-colors"
//                       aria-label="previous"
//                     >
//                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                       </svg>
//                     </motion.button>

//                     <motion.button
//                       whileHover={{ scale: 1.1, x: 5 }}
//                       whileTap={{ scale: 0.9 }}
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         next();
//                       }}
//                       className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-xl hover:bg-gray-100 transition-colors"
//                       aria-label="next"
//                     >
//                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </motion.button>
//                   </>
//                 )}

//                 {/* Image Counter */}
//                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
//                   <span className="text-sm font-semibold text-gray-800">
//                     {index + 1} / {items.length}
//                   </span>
//                 </div>
//               </div>

//               {/* Info Section */}
//               <div className="p-6 bg-gradient-to-br from-white to-blue-50">
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                   <div className="flex-1">
//                     <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-2">
//                       {selected.category}
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-800 mb-2">{selected.title}</h3>
//                     <p className="text-gray-600">{selected.description}</p>
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
"use client";

import React, { useState, useEffect, useCallback } from "react";

const AssemblyCellsPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredCapability, setHoveredCapability] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
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
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const keyHighlights = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
      title: "High Precision Assembly",
      description: "Ensures repeatability and consistent product quality across every unit produced.",
      stat: "±0.01",
      statLabel: "mm Precision",
      iconBg: "bg-blue-500",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "Faster Delivery",
      description: "In-house manufacturing enables significantly reduced lead times and rapid deployment.",
      stat: "3×",
      statLabel: "Faster",
      iconBg: "bg-amber-500",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      ),
      title: "End-to-End In-House Build",
      description: "Design, manufacturing, and integration under one roof for complete quality control.",
      stat: "100%",
      statLabel: "In-House",
      iconBg: "bg-emerald-500",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
      title: "Flexible & Scalable",
      description: "Supports both conveyor lines and cellular layouts for versatile production needs.",
      stat: "2-in-1",
      statLabel: "Layout",
      iconBg: "bg-violet-500",
    },
  ];

  const features = [
    { text: "Modular and ergonomic design", detail: "Operator-friendly layout with adaptable configurations", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75l-5.571-3m11.142 0l4.179 2.25L12 17.25l-9.75-5.25 4.179-2.25m11.142 0l4.179 2.25L12 21.75l-9.75-5.25 4.179-2.25" /></svg>) },
    { text: "Manual, semi-auto & fully automated systems", detail: "Choose the automation level that fits your production", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>) },
    { text: "Conveyor line integration", detail: "Continuous flow production with seamless line integration", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>) },
    { text: "Cellular assembly setups", detail: "Flexible operations for batch and variable production", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6z" /></svg>) },
    { text: "PLC, HMI & control system integration", detail: "Intelligent automation with industry-standard controllers", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>) },
    { text: "High accuracy and repeatability", detail: "Precision-engineered for consistent output quality", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>) },
    { text: "Optimized cycle time & throughput", detail: "Engineered for maximum production efficiency", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>) },
    { text: "Safety-compliant & operator-friendly", detail: "Built to international safety standards with ergonomic focus", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>) },
  ];

  const capabilities = [
    { title: "Component Assembly & Sub-Assembly", description: "Precision assembly of complex components and sub-assemblies with high repeatability.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>), number: "01" },
    { title: "Screwdriving, Press-Fit & Fastening", description: "Automated torque-controlled screwdriving and precision press-fit operations.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L3 12.57m3.32-2.5a9.956 9.956 0 0112.36 0" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H7.5m9 0h1.5a.75.75 0 01.75.75v.75" /></svg>), number: "02" },
    { title: "Pick-and-Place & Material Handling", description: "Automated material handling with precise pick-and-place positioning.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>), number: "03" },
    { title: "Conveyor System Integration", description: "Seamless integration with conveyor systems for continuous production flow.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 12h.01M21 12h.01" /></svg>), number: "04" },
    { title: "Cellular Assembly Setups", description: "Flexible cell-based assembly for batch production and variable workflows.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>), number: "05" },
    { title: "Sensor-Based Inspection & Validation", description: "Integrated sensor systems for real-time quality inspection and validation.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>), number: "06" },
    { title: "Data Monitoring & Traceability", description: "Complete production data tracking with full traceability for every assembly.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>), number: "07" },
  ];

  const processSteps = [
    { step: "01", title: "Requirement Analysis", description: "Understanding your production goals, constraints, and technical specifications to define the optimal solution.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>), emoji: "🔍" },
    { step: "02", title: "Design & Engineering", description: "Detailed 3D design, simulation, and engineering to create the perfect assembly solution for your needs.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>), emoji: "✏️" },
    { step: "03", title: "In-House Manufacturing", description: "Complete fabrication, assembly, and testing in our state-of-the-art facility for guaranteed quality.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>), emoji: "⚙️" },
    { step: "04", title: "Installation & Support", description: "On-site installation, commissioning, operator training, and ongoing technical support.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L3 12.57m3.32-2.5a9.956 9.956 0 0112.36 0M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>), emoji: "🚀" },
  ];

  const barData = [8, 12, 10, 15, 9, 11];
  const durations = [1.8, 2, 1.6, 2.2, 1.9, 2.1];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden" role="banner">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2070&auto=format&fit=crop')`,
              transform: `scale(${1.08 + scrollY * 0.00008})`,
              transition: "transform 0.3s ease-out",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/98 via-slate-900/92 to-slate-800/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20" />
        </div>

        {/* Geometric accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-[15%] right-[8%] w-[1px] h-[300px] bg-gradient-to-b from-transparent via-blue-400/20 to-transparent rotate-[15deg]" />
          <div className="absolute top-[25%] right-[15%] w-[1px] h-[200px] bg-gradient-to-b from-transparent via-indigo-400/15 to-transparent rotate-[15deg]" />
          <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] rounded-full border border-white/[0.03]" />
          <div className="absolute bottom-[15%] right-[3%] w-[500px] h-[500px] rounded-full border border-white/[0.02]" />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true" style={{
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
                Assembly Cell Solutions
              </span>
            </div>

            <h1 className="hero-title text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] leading-[1.02] mb-8">
              <span className="block text-white">Precision Assembly</span>
              <span className="block mt-2 text-white">Systems for{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    Faster
                  </span>
                </span>
                ,
              </span>
              <span className="block mt-2">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Smarter
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-400/50 to-blue-500/0 rounded-full hero-underline" />
                </span>
                <span className="text-white"> Production</span>
                <span className="text-blue-400/60">.</span>
              </span>
            </h1>

            <p className="hero-subtext max-w-xl text-base md:text-lg text-gray-400 leading-relaxed mb-10">
              Advanced assembly cells designed for conveyor-based lines and flexible cellular setups—ensuring high efficiency, consistent quality, and optimized production performance.
            </p>

            <div className="hero-pillars flex flex-wrap gap-6 mb-12">
              {["In-House Built", "Fast Deployment", "High Precision"].map((item, index) => (
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
                { value: "±0.01mm", label: "Precision" },
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
      <section className="relative py-20 lg:py-28 bg-white" aria-labelledby="about-heading">
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
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <div className="relative w-full h-full max-w-md max-h-64">
                    {/* Main frame */}
                    <div className="absolute inset-0 border border-blue-500/20 rounded-2xl">
                      <div className="absolute -top-3 left-8 px-4 py-1.5 bg-slate-800 border border-blue-500/30 rounded-lg">
                        <span className="text-blue-400 text-[10px] font-mono tracking-widest font-bold">ASSEMBLY-CELL-4100</span>
                      </div>
                    </div>

                    {/* Conveyor line */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 h-6 border border-blue-500/20 rounded bg-blue-500/5 flex items-center px-2">
                      <div className="flex gap-3 items-center w-full">
                        {[...Array(8)].map((_, j) => (
                          <div key={j} className="w-3 h-3 rounded-sm border border-blue-400/30 bg-blue-400/10 flex-shrink-0" />
                        ))}
                        <svg className="w-4 h-4 text-blue-400/60 flex-shrink-0 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>

                    {/* Station blocks */}
                    <div className="absolute top-6 left-6 w-16 h-14 border border-blue-500/20 rounded-xl bg-blue-500/5 flex flex-col items-center justify-center gap-1">
                      <div className="w-6 h-6 rounded border border-blue-400/30 bg-blue-400/10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50 animate-pulse" />
                      </div>
                      <span className="text-blue-400/60 text-[7px] font-mono font-bold">STN-01</span>
                    </div>

                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-14 border border-blue-500/20 rounded-xl bg-blue-500/5 flex flex-col items-center justify-center gap-1">
                      <div className="flex gap-[3px] items-end">
                        {barData.slice(0, 3).map((h, j) => (
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
                            className="w-1.5 rounded-sm bg-gradient-to-t from-cyan-500 to-blue-400"
                          />
                        ))}
                      </div>
                      <span className="text-blue-400/60 text-[7px] font-mono font-bold">STN-02</span>
                    </div>

                    <div className="absolute top-6 right-6 w-16 h-14 border border-blue-500/20 rounded-xl bg-blue-500/5 flex flex-col items-center justify-center gap-1">
                      <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                      </svg>
                      <span className="text-blue-400/60 text-[7px] font-mono font-bold">QC</span>
                    </div>

                    {/* Control panel */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-40 h-10 border border-blue-500/20 rounded-xl bg-blue-500/5 flex items-center justify-center gap-3">
                      <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-lg shadow-emerald-500/30" />
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-lg shadow-blue-500/30" style={{ animationDelay: "0.5s" }} />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse shadow-lg shadow-amber-500/30" style={{ animationDelay: "1s" }} />
                      </div>
                      <span className="text-blue-400/60 text-[8px] font-mono font-bold tracking-wider">PLC CONTROL</span>
                    </div>

                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                      <line x1="20%" y1="35%" x2="20%" y2="44%" stroke="rgba(59,130,246,0.15)" strokeWidth="1" strokeDasharray="4,4">
                        <animate attributeName="stroke-dashoffset" values="8;0" dur="2s" repeatCount="indefinite" />
                      </line>
                      <line x1="50%" y1="35%" x2="50%" y2="44%" stroke="rgba(59,130,246,0.15)" strokeWidth="1" strokeDasharray="4,4">
                        <animate attributeName="stroke-dashoffset" values="8;0" dur="2s" repeatCount="indefinite" />
                      </line>
                      <line x1="80%" y1="35%" x2="80%" y2="44%" stroke="rgba(59,130,246,0.15)" strokeWidth="1" strokeDasharray="4,4">
                        <animate attributeName="stroke-dashoffset" values="8;0" dur="2s" repeatCount="indefinite" />
                      </line>
                    </svg>
                  </div>
                </div>

                {/* Scan line */}
                <div className="absolute inset-0 overflow-hidden opacity-20">
                  <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan" />
                </div>

                {/* Corner accents */}
                {["top-4 left-4 border-t border-l", "top-4 right-4 border-t border-r", "bottom-4 left-4 border-b border-l", "bottom-4 right-4 border-b border-r"].map((cls, i) => (
                  <div key={i} className={`absolute w-6 h-6 border-blue-500/20 ${cls} rounded-sm`} />
                ))}

                {/* Status */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2 px-3 py-1.5 bg-slate-800/90 border border-blue-500/20 rounded-lg backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-blue-300 text-[10px] font-mono font-bold tracking-wider">PRODUCTION ACTIVE</span>
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
                <span className="text-blue-600 text-[11px] font-bold tracking-[0.2em] uppercase">About Our Assembly Cells</span>
              </div>

              <h2 id="about-heading" className="text-3xl md:text-4xl lg:text-[2.75rem] font-black text-gray-900 leading-[1.08] mb-8 tracking-[-0.02em]">
                Delivering{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Precision &amp; Consistency
                </span>
                <br />at Scale
              </h2>

              <div className="space-y-5 text-gray-500 leading-[1.8] text-[15px]">
                <p>
                  Our Assembly Cells are designed to deliver precision, consistency, and efficiency across a wide range of manufacturing applications. Engineered with a focus on quality and performance, our systems streamline assembly processes while{" "}
                  <span className="text-gray-900 font-semibold">reducing cycle time</span> and{" "}
                  <span className="text-gray-900 font-semibold">improving overall productivity</span>.
                </p>
                <p>
                  With complete in-house manufacturing capabilities, we maintain full control over design, fabrication, and integration—ensuring superior build quality and faster delivery. From standalone workstations to fully integrated systems, our solutions support both conveyor-based assembly lines and cellular manufacturing setups, enabling flexible and scalable production.
                </p>
              </div>

              {/* Mini stats */}
              <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-3 gap-6">
                {[
                  { value: "In-House", label: "Manufacturing" },
                  { value: "Conveyor", label: "& Cellular" },
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
      <section className="relative py-20 bg-slate-950 overflow-hidden" aria-labelledby="process-heading">
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
              <h3 id="process-heading" className="text-2xl md:text-3xl font-black text-white tracking-[-0.02em]">
                From Concept to <span className="text-blue-400">Commissioning</span>
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 relative">
              <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0" />

              {processSteps.map((step, i) => (
                <div key={i} className="relative text-center group cursor-default">
                  <div className="relative z-10 w-20 h-20 mx-auto mb-5">
                    <div className="absolute inset-0 rounded-2xl border border-blue-500/20 group-hover:border-blue-400/40 transition-colors duration-500 rotate-3 group-hover:rotate-6" />
                    <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 flex items-center justify-center group-hover:from-blue-900/50 group-hover:to-slate-900 transition-all duration-500 shadow-lg">
                      <span className="text-2xl transition-transform duration-300 group-hover:scale-125">{step.emoji}</span>
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

      {/* ===== KEY HIGHLIGHTS ===== */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden" aria-labelledby="highlights-heading">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-50/30 to-transparent rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div
            id="highlights-header"
            data-animate
            className={`mb-16 transition-all duration-1000 ${isVisible["highlights-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-blue-600/0" />
                  <span className="text-blue-600 text-[11px] font-bold tracking-[0.2em] uppercase">Key Highlights</span>
                </div>
                <h2 id="highlights-heading" className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-[-0.03em]">
                  Why Choose Our{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Assembly Cells</span>
                </h2>
              </div>
              <p className="text-gray-500 max-w-md text-[15px] leading-relaxed lg:text-right">
                Engineered for performance, built for reliability, designed for your production needs.
              </p>
            </div>
          </div>

          <div
            id="highlights-cards"
            data-animate
            className={`grid md:grid-cols-2 xl:grid-cols-4 gap-6 transition-all duration-1000 delay-200 ${isVisible["highlights-cards"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {keyHighlights.map((item, index) => (
              <article
                key={index}
                className={`group relative cursor-pointer transition-all duration-500 ${
                  activeStep === index ? "-translate-y-3" : "hover:-translate-y-1.5"
                }`}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className={`relative h-full rounded-2xl border transition-all duration-500 overflow-hidden ${
                  activeStep === index
                    ? "border-gray-200 shadow-2xl shadow-gray-200/50 bg-white"
                    : "border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 bg-white"
                }`}>
                  {/* Top gradient bar */}
                  <div className={`h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500 ${
                    activeStep === index ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                  }`} />

                  <div className="p-7">
                    {/* Stat badge */}
                    <div className={`absolute top-6 right-6 text-right transition-all duration-500 ${
                      activeStep === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}>
                      <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{item.stat}</div>
                      <div className="text-[9px] text-gray-400 font-bold tracking-wider uppercase">{item.statLabel}</div>
                    </div>

                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                      activeStep === index
                        ? `${item.iconBg} text-white shadow-lg`
                        : "bg-gray-100 text-gray-400 group-hover:bg-gray-200/80 group-hover:text-gray-600"
                    }`}>
                      {item.icon}
                    </div>

                    <h3 className="text-[15px] font-bold text-gray-900 mb-3 leading-snug pr-12">{item.title}</h3>
                    <p className="text-gray-500 text-[13px] leading-[1.7]">{item.description}</p>

                    <div className={`mt-6 flex items-center gap-2 transition-all duration-500 ${
                      activeStep === index ? "opacity-100" : "opacity-0"
                    }`}>
                      <div className="h-[2px] w-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                      <span className="text-[11px] text-gray-400 font-semibold">Active</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {keyHighlights.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  activeStep === i ? "w-8 bg-blue-500" : "w-2 bg-gray-200 hover:bg-gray-300"
                }`}
                aria-label={`Select highlight ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="features-heading">
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
                <span className="text-blue-600 text-[11px] font-bold tracking-[0.2em] uppercase">Features</span>
              </div>

              <h2 id="features-heading" className="text-3xl md:text-4xl font-black text-gray-900 mb-5 leading-[1.08] tracking-[-0.02em]">
                Advanced{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Engineering</span>
                <br />Built In
              </h2>

              <p className="text-gray-500 text-[15px] mb-10 leading-relaxed">
                Every assembly cell combines smart design with robust engineering for maximum performance and operator efficiency.
              </p>

              <div className="space-y-2">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className={`group flex items-start gap-4 p-4 rounded-2xl transition-all duration-400 cursor-default border ${
                      hoveredFeature === i
                        ? "border-blue-200 bg-white shadow-lg shadow-gray-100/50"
                        : "border-transparent hover:bg-white hover:shadow-lg hover:shadow-gray-100/50 hover:border-gray-100"
                    }`}
                    onMouseEnter={() => setHoveredFeature(i)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <div className={`flex-shrink-0 w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-400 ${
                      hoveredFeature === i
                        ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200/40"
                        : "bg-gray-100 text-gray-400 border-gray-200/50 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:shadow-lg group-hover:shadow-blue-200/40"
                    } group-hover:scale-105`}>
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-blue-300 text-[9px] font-bold tracking-widest uppercase">Assembly</span>
                    </div>
                  </div>
                </div>

                {/* Orbital nodes */}
                {[
                  { label: "Conveyor", angle: 0 }, { label: "Press-Fit", angle: 51 },
                  { label: "Fastening", angle: 103 }, { label: "Inspection", angle: 154 },
                  { label: "Pick & Place", angle: 206 }, { label: "PLC/HMI", angle: 257 },
                  { label: "Traceability", angle: 309 },
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

      {/* ===== CAPABILITIES ===== */}
      <section className="relative py-20 lg:py-28 bg-white" aria-labelledby="capabilities-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            id="capabilities-header"
            data-animate
            className={`mb-16 transition-all duration-1000 ${isVisible["capabilities-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-blue-600/0" />
                  <span className="text-blue-600 text-[11px] font-bold tracking-[0.2em] uppercase">Capabilities</span>
                </div>
                <h2 id="capabilities-heading" className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-[-0.03em]">
                  What We{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Deliver</span>
                </h2>
              </div>
              <p className="text-gray-500 max-w-md text-[15px] leading-relaxed lg:text-right">
                Comprehensive assembly capabilities covering the full spectrum of production needs.
              </p>
            </div>
          </div>

          <div
            id="capabilities-grid"
            data-animate
            className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 delay-200 ${isVisible["capabilities-grid"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {capabilities.map((cap, index) => {
              const isHovered = hoveredCapability === index;
              return (
                <article
                  key={index}
                  className={`group relative rounded-2xl transition-all duration-500 cursor-pointer ${
                    isHovered ? "-translate-y-2 shadow-2xl shadow-gray-200/50" : "shadow-md hover:shadow-xl hover:-translate-y-1"
                  }`}
                  onMouseEnter={() => setHoveredCapability(index)}
                  onMouseLeave={() => setHoveredCapability(null)}
                >
                  <div className="relative p-8 bg-white border border-gray-100 rounded-2xl group-hover:border-gray-200 transition-all duration-500 overflow-hidden">
                    {/* Background number */}
                    <div className={`absolute -top-4 -right-2 text-[120px] font-black leading-none select-none transition-all duration-700 ${
                      isHovered ? "text-gray-100 translate-x-0" : "text-gray-50 translate-x-4"
                    }`} aria-hidden="true">
                      {cap.number}
                    </div>

                    <div className="relative z-10 flex gap-6">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        isHovered ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xl scale-110" : "bg-gray-100 text-gray-500"
                      }`}>
                        {cap.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{cap.title}</h3>
                        <p className="text-gray-500 text-[13.5px] leading-[1.7]">{cap.description}</p>

                        <div className={`mt-4 flex items-center gap-2 text-blue-600 text-[13px] font-semibold transition-all duration-400 ${
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
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-white" aria-labelledby="cta-heading">
        <div
          id="cta-section"
          data-animate
          className={`relative max-w-5xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${isVisible["cta-section"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative rounded-[2rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.1),transparent_50%)]" />
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }} />

            <div className="absolute top-8 right-8 w-32 h-32 border border-white/[0.05] rounded-3xl rotate-12" />
            <div className="absolute bottom-8 left-8 w-24 h-24 border border-white/[0.04] rounded-2xl -rotate-6" />

            <div className="relative p-12 md:p-16 lg:p-20 text-center">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-400/15 backdrop-blur-sm mb-10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-emerald-300 text-sm font-semibold">Ready to Build</span>
              </div>

              <h2 id="cta-heading" className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-black text-white leading-[1.05] mb-6 tracking-[-0.03em]">
                Let&apos;s Build Your
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  Assembly Solution
                </span>
              </h2>

              <p className="text-gray-400 text-[15px] md:text-base max-w-xl mx-auto mb-12 leading-relaxed">
                From concept to commissioning—partner with us for precision-built assembly cells that accelerate your production.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="group relative px-10 py-4.5 bg-white hover:bg-gray-50 text-slate-900 font-bold text-[15px] rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 overflow-hidden inline-flex items-center justify-center">
                  <span className="relative flex items-center gap-2.5 justify-center">
                    Get in Touch
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </span>
                </a>
                <button className="group px-10 py-4.5 border border-white/15 hover:border-white/30 bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-sm text-white/90 hover:text-white font-semibold text-[15px] rounded-xl transition-all duration-300 hover:-translate-y-0.5">
                  <span className="flex items-center gap-2.5 justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                    Download Brochure
                  </span>
                </button>
              </div>

              <div className="mt-14 pt-8 border-t border-white/[0.06]">
                <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                  {[
                    { icon: "🏭", text: "In-House Manufacturing" },
                    { icon: "⚡", text: "Fast Deployment" },
                    { icon: "🎯", text: "High Precision" },
                    { icon: "🤝", text: "End-to-End Support" },
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

export default AssemblyCellsPage;