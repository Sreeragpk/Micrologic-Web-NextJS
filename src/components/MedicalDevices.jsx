
// import React, { useState } from "react";
// import medical from "../assets/med.png";
// // import medical from "../assets/medicalimg.webp";
// import medical1 from "../assets/medical1.jpg";
// import medical2 from "../assets/medical2.jpg";
// import medical3 from "../assets/medical3.jpg";
// import Seo from "./Seo";

// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Shield,
//   ChevronRight,
//   CheckCircle2,
//   Gauge,
//   ScanLine,
//   Settings,
//   TrendingUp,
//   Eye,
//   FlaskConical,
//   PackageCheck,
//   X,
//   Activity,
//   Heart,
//   Syringe,
//   Pill,
//   Microscope,
//   ClipboardCheck,
//   FileCheck2,
//   Stethoscope,
//   ThermometerSun,
//   CircuitBoard,
//   Package,
// } from "lucide-react";

// const MedicalDevices = () => {
//   const [lightbox, setLightbox] = useState(null);

//   const galleryImages = [
//     { src: medical1, alt: "Medical Assembly Line", caption: "Medical Device Assembly System" },
//     { src: medical2, alt: "Inspection Station", caption: "Automated Inspection Station" },
//     { src: medical3, alt: "Testing Equipment", caption: "Compliance Testing Equipment" },
//   ];

//   const capabilities = [
//     // {
//     //   icon: <CircuitBoard className="w-7 h-7" />,
//     //   title: "Assembly Automation",
//     //   desc: "Cleanroom-compatible robotic and semi-automated assembly for syringes, inhalers, sensors, and orthopaedic implants.",
//     // },
//     {
//       icon: <Eye className="w-7 h-7" />,
//       title: "Vision Inspection",
//       desc: "High-resolution machine vision for dimensional verification, defect detection, and label inspection at production speed.",
//     },
//     {
//       icon: <FlaskConical className="w-7 h-7" />,
//       title: "System Performance Evaluation",
//       desc: "End-of-line validation including leak testing, electrical safety, and performance verification per FDA protocols.",
//     },
//     // {
//     //   icon: <PackageCheck className="w-7 h-7" />,
//     //   title: "Packaging & Traceability",
//     //   desc: "Serialized packaging with pharma-grade traceability, barcode verification, and tamper-evident seal validation.",
//     // },
//     {
//     icon: <Package className="w-7 h-7" />,
//     title: "Packaging",
//     desc: "Automated medical device packaging with tamper-evident sealing, sterile barrier protection, and quality validation.",
//   },
//   {
//     icon: <ScanLine className="w-7 h-7" />,
//     title: "Traceability",
//     desc: "End-to-end product traceability with barcode verification, serialization, and regulatory compliance tracking.",
//   },
//   ];

//   // const stats = [
//   //   { value: "FDA", label: "Compliant Systems" },
//   //   { value: "GAMP", label: "Validated Processes" },
//   //   { value: "100%", label: "Traceability" },
//   //   { value: "ISO 13485", label: "Ready Solutions" },
//   // ];

//   // const medicalDomains = [
//   //   {
//   //     icon: <Pill className="w-6 h-6" />,
//   //     title: "Consumables & Disposables",
//   //     gradient: "from-blue-600 to-cyan-500",
//   //     border: "border-blue-500/30",
//   //     bg: "bg-blue-500/5",
//   //     items: [
//   //       { name: "Surgical Gloves", detail: "Automated inspection & packaging" },
//   //       { name: "Inhalers", detail: "Dose assembly & leak testing" },
//   //       { name: "Glass Vials", detail: "Fill, seal & integrity testing" },
//   //     ],
//   //   },
//   //   {
//   //     icon: <Activity className="w-6 h-6" />,
//   //     title: "Monitoring & Sensors",
//   //     gradient: "from-blue-700 to-indigo-500",
//   //     border: "border-indigo-500/30",
//   //     bg: "bg-indigo-500/5",
//   //     items: [
//   //       { name: "SPO2 Sensors", detail: "Precision assembly & calibration" },
//   //       { name: "Medical Device Assembly", detail: "Multi-stage automated build" },
//   //       { name: "Pharma Code Traceability", detail: "Serialization & track-and-trace" },
//   //     ],
//   //   },
//   //   {
//   //     icon: <Syringe className="w-6 h-6" />,
//   //     title: "Advanced Systems",
//   //     gradient: "from-blue-500 to-sky-500",
//   //     border: "border-sky-500/30",
//   //     bg: "bg-sky-500/5",
//   //     items: [
//   //       { name: "Safety Syringes", detail: "Retractable mechanism assembly & test" },
//   //       { name: "Orthopaedic Joints", detail: "Precision machining verification" },
//   //       { name: "Packing Integrity Testers", detail: "Seal strength & leak validation" },
//   //     ],
//   //   },
//   // ];
// const medicalSegments = [
//   "Patient Monitors",
//   "Ventilators",
//   "Surgical Gloves",
//   "Defibrillators",
//   "ECG / EEG Systems",
//   "Dialysis Machines",
//   "Anesthesia Workstations",
//   "Portable & Home Healthcare Devices",
// ];
//   const processSteps = [
//     { step: "01", title: "Component Prep", desc: "Cleanroom material handling" },
//     { step: "02", title: "Assembly", desc: "Automated build & joining" },
//     { step: "03", title: "Inspection", desc: "Vision & dimensional check" },
//     { step: "04", title: "Testing", desc: "Functional & safety validation" },
//     // { step: "05", title: "Serialization", desc: "UDI & pharma code marking" },
//     { step: "05", title: "Packaging", desc: "Sterile pack & seal verify" },
//   ];

//   const complianceItems = [
//     {
//       label: "Design Qualification (DQ)",
//       detail: "Requirements verification against URS",
//       color: "bg-blue-500",
//       icon: <ClipboardCheck className="w-4 h-4" />,
//     },
//     {
//       label: "Installation Qualification (IQ)",
//       detail: "Hardware, software & utility verification",
//       color: "bg-cyan-500",
//       icon: <Settings className="w-4 h-4" />,
//     },
//     {
//       label: "Operational Qualification (OQ)",
//       detail: "Functional testing across operating ranges",
//       color: "bg-indigo-500",
//       icon: <Gauge className="w-4 h-4" />,
//     },
//     {
//       label: "Performance Qualification (PQ)",
//       detail: "Sustained production validation & Cpk",
//       color: "bg-sky-500",
//       icon: <TrendingUp className="w-4 h-4" />,
//     },
//   ];

//   return (
//     <>
//       <Seo
//   title="Medical Device Automation & Inspection | Micrologic"
//   description="Automation solutions for medical device assembly, inspection and testing including sensors, safety syringes, vials and orthopaedic components with full traceability."
//   canonical="https://www.micrologicglobal.com/industries/medical"
//   image={medical}
// />

//       {/* ================= HERO ================= */}
//       <div className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
//         <img
//           src={medical}
//           alt="Medical Devices Automation"
//           className="absolute inset-0 w-full h-full object-cover object-center"
//         />
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="relative z-10 h-full flex items-center justify-center px-6">
//           <div className="max-w-4xl text-center">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
//               Medical Devices
//             </h1>
//             {/* <p className="text-lg md:text-xl text-white/90 leading-relaxed">
//               Delivering precision and compliance‑ready automation for critical
//               healthcare devices, assemblies, and inspection systems.
//             </p> */}
//                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
//               Intelligent Inspection. Regulatory Excellence. Patient Safety.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ============ STATS BAR ============ */}
//       {/* <section className="relative bg-slate-900 border-y border-slate-800">
//         <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 className="text-center"
//               >
//                 <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
//                   {stat.value}
//                 </div>
//                 <div className="text-slate-400 text-sm font-medium tracking-wide">
//                   {stat.label}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* ============ OVERVIEW ============ */}
//       <section className="relative bg-white py-24 px-6 lg:px-16 overflow-hidden">
//         <div
//           className="absolute inset-0 opacity-[0.02]"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)",
//             backgroundSize: "40px 40px",
//           }}
//         />

//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             {/* Left: Text */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
//                   <Heart className="w-5 h-5 text-white" />
//                 </div>
//                 <span className="text-slate-400 font-semibold text-sm tracking-[0.15em] uppercase">
//                   Overview
//                 </span>
//               </div>

//               <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
//                 Precision Automation for{" "}
//                 <span className="text-blue-600">Life-Critical Devices</span>
//               </h2>

//               <div className="space-y-5 text-slate-600 leading-relaxed text-[15px]">
//                 <p>
//                   Medical device manufacturing demands the highest levels of
//                   precision, cleanliness, and regulatory compliance. Every
//                   component must meet stringent safety standards there is no
//                   room for error.
//                 </p>
//                 <p>
//                   <span className="font-semibold text-slate-900">Micrologic</span>{" "}
//                   delivers turnkey automation systems for assembly, inspection,
//                   and testing of medical devices from disposable consumables to
//                   complex implantable systems all validated to meet GAMP and
//                   FDA regulatory requirements.
//                 </p>
//                 <p>
//                   Our systems ensure complete traceability, batch integrity, and
//                   compliance documentation throughout the entire production
//                   lifecycle.
//                 </p>
//               </div>

//               <div className="mt-8 space-y-3">
//                 {[
//                   "FDA 21 CFR Part 11 compliant data systems",
//                   "GAMP 5 validated equipment & software",
//                   // "Complete UDI serialization & pharma traceability",
//                   "Cleanroom-compatible system design",
//                 ].map((item, i) => (
//                   <div key={i} className="flex items-start gap-3">
//                     <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
//                     <span className="text-slate-700 text-sm font-medium">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Right: Compliance Visual */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 p-8 md:p-10">
//                 <div className="flex items-center gap-3 mb-8">
//                   <FileCheck2 className="w-6 h-6 text-blue-600" />
//                   <h3 className="text-lg font-bold text-blue-900">
//                     GAMP Validation Framework
//                   </h3>
//                 </div>

//                 <div className="space-y-4">
//                   {complianceItems.map((tier, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, y: 10 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: 0.3 + i * 0.1 }}
//                       className="flex items-center gap-4 bg-white rounded-xl p-4 border border-slate-100 
//                                  shadow-sm hover:shadow-md transition-shadow"
//                     >
//                       <div
//                         className={`w-10 h-10 rounded-lg ${tier.color} flex items-center justify-center text-white shrink-0`}
//                       >
//                         {tier.icon}
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <div className="font-semibold text-slate-900 text-sm">
//                           {tier.label}
//                         </div>
//                         <div className="text-slate-500 text-xs">{tier.detail}</div>
//                       </div>
//                       <Shield className="w-4 h-4 text-slate-300 shrink-0" />
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* <div className="mt-6 pt-6 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-500">
//                   <Shield className="w-4 h-4 text-blue-500" />
//                   <span>
//                     Compliant with FDA 21 CFR Part 11, GAMP 5, ISO 13485 & EU MDR
//                   </span>
//                 </div> */}
//               </div>

//               <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
//               <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ============ CAPABILITIES ============ */}
//       <section className="relative bg-slate-950 py-24 px-6 lg:px-16 overflow-hidden">
//         <div
//           className="absolute inset-0 opacity-[0.04]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
//             backgroundSize: "80px 80px",
//           }}
//         />

//         <div className="max-w-7xl mx-auto relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             {/* <span className="text-blue-400 font-semibold text-sm tracking-[0.2em] uppercase mb-3 block">
//               What We Deliver
//             </span> */}
//             <h2 className="text-3xl md:text-4xl font-bold text-white">
//               What We Offer
//             </h2>
//           </motion.div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {capabilities.map((cap, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 className="group relative bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-8
//                            hover:border-blue-500/40 transition-all duration-500"
//               >
//                 <div
//                   className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/5 to-transparent 
//                                 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                 />

//                 <div
//                   className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 
//                                 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6
//                                 group-hover:from-blue-600/30 group-hover:to-cyan-600/30 transition-all"
//                 >
//                   {cap.icon}
//                 </div>

//                 <h3 className="relative z-10 text-xl font-bold text-white mb-3">
//                   {cap.title}
//                 </h3>
//                 <p className="relative z-10 text-slate-400 text-sm leading-relaxed">
//                   {cap.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ============ PROCESS FLOW ============ */}
//       <section className="relative bg-gradient-to-b from-slate-50 to-white py-24 px-6 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <span className="text-blue-600 font-semibold text-sm tracking-[0.2em] uppercase mb-3 block">
//               Production Workflow
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
//               Medical Device Production Flow
//             </h2>
//           </motion.div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//             {processSteps.map((step, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: i * 0.08 }}
//                 className="relative group"
//               >
//                 <div
//                   className="bg-white border border-slate-200 rounded-xl p-5 text-center h-full
//                                 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 
//                                 transition-all duration-300"
//                 >
//                   <div
//                     className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 
//                                   bg-clip-text text-transparent mb-2"
//                   >
//                     {step.step}
//                   </div>
//                   <div className="font-bold text-slate-900 text-sm mb-1">
//                     {step.title}
//                   </div>
//                   <div className="text-slate-400 text-xs">{step.desc}</div>
//                 </div>

//                 {i < processSteps.length - 1 && (
//                   <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
//                     <ChevronRight className="w-5 h-5 text-slate-300" />
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ============ MEDICAL DOMAINS ============ */}
//       <section className="relative bg-white py-24 px-6 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <span className="text-blue-600 font-semibold text-sm tracking-[0.2em] uppercase mb-3 block">
//               Domain Expertise
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
//               Medical Segments We Serve
//             </h2>
//           </motion.div>
// <div className="max-w-6xl mx-auto px-4 py-12">
//   <div className="grid md:grid-cols-2 gap-6">
//     {medicalSegments.map((item, i) => (
//       <div 
//         key={i} 
//         className="group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-xl transition-all duration-300"
//       >
//         <div className="flex items-start gap-4">
//           <div className="flex-shrink-0 w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
//             <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={2.5} />
//           </div>
//           <p className="text-slate-700 text-base leading-relaxed pt-2">
//             {item}
//           </p>
//         </div>
        
//         {/* Corner Accent */}
//         <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
//       </div>
//     ))}
//   </div>
// </div>
//         </div>
//       </section>

//       {/* ================= GALLERY ================= */}
//       {/* <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-100 py-20 px-6 lg:px-20">
//         <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full mix-blend-multiply blur-3xl" />
//         <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full mix-blend-multiply blur-3xl" />

//         <div className="max-w-6xl mx-auto relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
//               Medical Applications & Solutions
//             </h2>
//             <p className="text-slate-500 max-w-2xl mx-auto text-sm">
//               Precision automation systems designed, built, and validated for
//               leading medical device and pharmaceutical manufacturers.
//             </p>
//           </motion.div>

//           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {galleryImages.map((img, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//                 className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer
//                            border border-slate-200 hover:border-blue-400/50 transition-all duration-500"
//                 onClick={() => setLightbox(idx)}
//               >
//                 <img
//                   src={img.src}
//                   alt={img.alt}
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
//                 />
//                 <div
//                   className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
//                                 opacity-0 group-hover:opacity-100 transition duration-300"
//                 />
//                 <div
//                   className="absolute bottom-0 left-0 right-0 p-4 translate-y-full 
//                                 group-hover:translate-y-0 transition-transform duration-300"
//                 >
//                   <p className="text-white text-sm font-semibold">{img.caption}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section> */}

      

//       {/* ============ LIGHTBOX ============ */}
//       <AnimatePresence>
//         {lightbox !== null && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
//             onClick={() => setLightbox(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="relative max-w-4xl max-h-[85vh] w-full"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <img
//                 src={galleryImages[lightbox].src}
//                 alt={galleryImages[lightbox].alt}
//                 className="w-full h-full object-contain rounded-xl"
//               />
//               <button
//                 onClick={() => setLightbox(null)}
//                 className="absolute -top-4 -right-4 w-10 h-10 bg-white/10 backdrop-blur rounded-full 
//                            flex items-center justify-center text-white hover:bg-white/20 transition"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//               <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-4 py-2 rounded-lg">
//                 <p className="text-white text-sm font-medium">
//                   {galleryImages[lightbox].caption}
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default MedicalDevices;
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  ChevronRight,
  CheckCircle2,
  Gauge,
  ScanLine,
  Settings,
  TrendingUp,
  Eye,
  FlaskConical,
  X,
  Heart,
  ClipboardCheck,
  FileCheck2,
  Package,
  ArrowRight,
  Cpu,
} from "lucide-react";

const MedicalDevices = () => {
  const [lightbox, setLightbox] = useState(null);

  const galleryImages = [
    { src: "/assets/medical1.jpg", alt: "Medical Assembly Line", caption: "Medical Device Assembly System" },
    { src: "/assets/medical2.jpg", alt: "Inspection Station", caption: "Automated Inspection Station" },
    { src: "/assets/medical3.jpg", alt: "Testing Equipment", caption: "Compliance Testing Equipment" },
  ];

  const capabilities = [
    {
      icon: <Eye className="w-7 h-7" />,
      title: "Vision Inspection",
      desc: "High-resolution machine vision for dimensional verification, defect detection, and label inspection at production speed.",
    },
    {
      icon: <FlaskConical className="w-7 h-7" />,
      title: "System Performance Evaluation",
      desc: "End-of-line validation including leak testing, electrical safety, and performance verification per FDA protocols.",
    },
    {
      icon: <Package className="w-7 h-7" />,
      title: "Packaging",
      desc: "Automated medical device packaging with tamper-evident sealing, sterile barrier protection, and quality validation.",
    },
    {
      icon: <ScanLine className="w-7 h-7" />,
      title: "Traceability",
      desc: "End-to-end product traceability with barcode verification, serialization, and regulatory compliance tracking.",
    },
  ];

  const medicalSegments = [
    "Patient Monitors",
    "Ventilators",
    "Surgical Gloves",
    "ECG / EEG Systems",
    "Dialysis Machines",
    "Portable & Home Healthcare Devices",
  ];

  const processSteps = [
    { step: "01", title: "Component Prep" },
    { step: "02", title: "Assembly" },
    { step: "03", title: "Inspection" },
    { step: "04", title: "Testing" },
    { step: "05", title: "Packaging" },
  ];

  const complianceItems = [
    {
      label: "Design Qualification (DQ)",
      detail: "Requirements verification against URS",
      color: "bg-blue-500",
      icon: <ClipboardCheck className="w-4 h-4" />,
    },
    {
      label: "Installation Qualification (IQ)",
      detail: "Hardware, software & utility verification",
      color: "bg-cyan-500",
      icon: <Settings className="w-4 h-4" />,
    },
    {
      label: "Operational Qualification (OQ)",
      detail: "Functional testing across operating ranges",
      color: "bg-indigo-500",
      icon: <Gauge className="w-4 h-4" />,
    },
    {
      label: "Performance Qualification (PQ)",
      detail: "Sustained production validation & Cpk",
      color: "bg-sky-500",
      icon: <TrendingUp className="w-4 h-4" />,
    },
  ];

  const otherIndustries = [
  {
    name: "Automotive",
    href: "/industries/automotive-automation",
    image: "/assets/car.webp",
    gradient: "from-red-600 to-red-800",
    accent: "bg-red-500",
    description:
      "Advanced automation solutions for automotive electronics covering assembly, inspection, validation, and full production traceability.",
    highlights: [
      "ECU & Sensor Assembly",
      "End-of-Line (EOL) Testing",
      "Vision-Based Inspection",
      "Component-Level Traceability",
    ],
  },
    {
  name: "Electric Vehicles",
  href: "/industries/electric-vehicle-automation",
  image: "/assets/evfinalimg.webp",
  gradient: "from-emerald-600 to-emerald-800",
  accent: "bg-emerald-500",
  description:
    "End-to-end EV automation solutions covering battery systems, power electronics, and vehicle integration with real-time monitoring and Industry 4.0 traceability.",
  highlights: [
    "Battery Pack & Cell Assembly",
    "BMS & Power Electronics Testing",
    "Motor & Inverter Integration",
    "High-Voltage (HV) Validation & Safety Testing",
  ],
},
  {
    name: "Electrical & Electronics",
    href: "/industries/electrical-and-electronics-automation",
    image: "/assets/electronicsandelectrical.webp",
    gradient: "from-blue-600 to-blue-800",
    accent: "bg-blue-500",
    description:
      "Scalable automation platforms for electronics manufacturing with high-speed assembly, inspection, and data-driven quality control.",
    highlights: [
      "SMT & THT Assembly Lines",
      "Automated Optical Inspection (AOI)",
      "Burn-In & Functional Testing",
      "Laser & Barcode Traceability",
    ],
  },

];

  return (
    <>
      {/* ================= HERO ================= */}
      <div className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
        <Image
          src="/assets/med.png"
          alt="Medical Devices Automation"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Medical Devices
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Intelligent Inspection. Regulatory Excellence. Patient Safety.
            </p>
          </div>
        </div>
      </div>

      {/* ============ OVERVIEW ============ */}
      <section className="relative bg-white py-24 px-6 lg:px-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-slate-400 font-semibold text-sm tracking-[0.15em] uppercase">
                  Overview
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
                Precision Automation for{" "}
                <span className="text-blue-600">Life-Critical Devices</span>
              </h2>

              <div className="space-y-5 text-slate-600 leading-relaxed text-[15px]">
                <p>
                  Medical device manufacturing demands the highest levels of
                  precision, cleanliness, and regulatory compliance. Every
                  component must meet stringent safety standards there is no
                  room for error.
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Micrologic</span>{" "}
                  delivers turnkey automation systems for assembly, inspection,
                  and testing of medical devices from disposable consumables to
                  complex implantable systems all validated to meet GAMP and
                  FDA regulatory requirements.
                </p>
                <p>
                  Our systems ensure complete traceability, batch integrity, and
                  compliance documentation throughout the entire production
                  lifecycle.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  "FDA 21 CFR Part 11 compliant data systems",
                  "GAMP 5 validated equipment & software",
                  "Cleanroom-compatible system design",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <FileCheck2 className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-bold text-blue-900">
                    GAMP Validation Framework
                  </h3>
                </div>

                <div className="space-y-4">
                  {complianceItems.map((tier, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-4 bg-white rounded-xl p-4 border border-slate-100 
                                 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div
                        className={`w-10 h-10 rounded-lg ${tier.color} flex items-center justify-center text-white shrink-0`}
                      >
                        {tier.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-slate-900 text-sm">{tier.label}</div>
                        <div className="text-slate-500 text-xs">{tier.detail}</div>
                      </div>
                      <Shield className="w-4 h-4 text-slate-300 shrink-0" />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ CAPABILITIES ============ */}
      <section className="relative bg-slate-950 py-24 px-6 lg:px-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">What We Offer</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-8
                           hover:border-blue-500/40 transition-all duration-500"
              >
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/5 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div
                  className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 
                                border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6
                                group-hover:from-blue-600/30 group-hover:to-cyan-600/30 transition-all"
                >
                  {cap.icon}
                </div>

                <h3 className="relative z-10 text-xl font-bold text-white mb-3">{cap.title}</h3>
                <p className="relative z-10 text-slate-400 text-sm leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS FLOW ============ */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold text-sm tracking-[0.2em] uppercase mb-3 block">
              Production Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Medical Device Production Flow
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative group"
              >
                <div
                  className="bg-white border border-slate-200 rounded-xl p-5 text-center h-full
                                hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 
                                transition-all duration-300"
                >
                  <div
                    className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 
                                  bg-clip-text text-transparent mb-2"
                  >
                    {step.step}
                  </div>
                  <div className="font-bold text-slate-900 text-sm mb-1">{step.title}</div>
                </div>

                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <ChevronRight className="w-5 h-5 text-slate-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MEDICAL DOMAINS ============ */}
      <section className="relative bg-white py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold text-sm tracking-[0.2em] uppercase mb-3 block">
              Domain Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Medical Segments We Serve
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-6">
              {medicalSegments.map((item, i) => (
                <div
                  key={i}
                  className="group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                      <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                    <p className="text-slate-700 text-base leading-relaxed pt-2">{item}</p>
                  </div>

                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ OTHER INDUSTRIES — FLIP CARDS ============ */}
{/* ============ OTHER INDUSTRIES — ELEGANT WHITE (MEDICAL DEVICES PAGE) ============ */}
<section className="relative bg-white py-28 px-6 lg:px-16 overflow-hidden">
  {/* Subtle Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-purple-50 via-violet-50/50 to-transparent rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-slate-100 to-transparent rounded-full blur-3xl" />
  </div>
  
  {/* Refined Grid Pattern */}
  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }}
  />

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-20"
    >
      <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-full px-4 py-1.5 mb-6">
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
        <span className="text-purple-700 font-semibold text-sm tracking-wide">
          Beyond Medical Devices
        </span>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        Industries We{" "}
        <span className="relative">
          <span className="bg-gradient-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">
            Transform
          </span>
          <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
            <path d="M2 6C50 2 150 2 198 6" stroke="url(#medical-underline)" strokeWidth="3" strokeLinecap="round"/>
            <defs>
              <linearGradient id="medical-underline" x1="0" y1="0" x2="200" y2="0">
                <stop stopColor="#9333ea"/>
                <stop offset="1" stopColor="#8b5cf6"/>
              </linearGradient>
            </defs>
          </svg>
        </span>
      </h2>
      
      <p className="text-slate-500 text-lg max-w-2xl mx-auto mt-6">
        Enabling life-saving innovation with compliant automation — from cleanroom assembly 
        and validated testing to full device traceability
      </p>
    </motion.div>

    {/* Cards Grid */}
    <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
      {otherIndustries.map((industry, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
        >
          <Link href={industry.href} className="block group" style={{ perspective: "1200px" }}>
            <div
              className="relative w-full h-[460px] transition-transform duration-700 ease-out group-hover:[transform:rotateY(180deg)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* FRONT FACE */}
              <div
                className="absolute inset-0 rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-lg shadow-slate-200/50"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>

                <div className="p-7">
                  <div className={`w-12 h-1.5 ${industry.accent} rounded-full mb-5`} />
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{industry.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                    {industry.description}
                  </p>
                  
                  <div className="mt-6 flex items-center gap-2 text-purple-600 font-semibold text-sm">
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-purple-50 group-hover:border-purple-100 transition-colors">
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 transition-colors" />
                  </div>
                </div>
              </div>

              {/* BACK FACE */}
              <div
                className="absolute inset-0 rounded-3xl overflow-hidden [transform:rotateY(180deg)]"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient}`} />
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl" />

                <div className="relative z-10 h-full flex flex-col p-8">
                  <div className="flex-1">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{industry.name}</h3>
                    
                    <div className="space-y-3">
                      {industry.highlights.map((item, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-white/90 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-white/20">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-semibold">View Details</span>
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-slate-900" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* ============ LIGHTBOX ============ */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[lightbox].src}
                alt={galleryImages[lightbox].alt}
                width={800}
                height={600}
                className="w-full h-full object-contain rounded-xl"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white/10 backdrop-blur rounded-full 
                           flex items-center justify-center text-white hover:bg-white/20 transition"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-4 py-2 rounded-lg">
                <p className="text-white text-sm font-medium">{galleryImages[lightbox].caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MedicalDevices;
// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Shield,
//   ChevronRight,
//   CheckCircle2,
//   Gauge,
//   ScanLine,
//   Settings,
//   TrendingUp,
//   Eye,
//   FlaskConical,
//   X,
//   Heart,
//   ClipboardCheck,
//   FileCheck2,
//   Package,
// } from "lucide-react";

// const MedicalDevices = () => {
//   const [lightbox, setLightbox] = useState(null);

//   const galleryImages = [
//     { src: "/assets/medical1.jpg", alt: "Medical Assembly Line", caption: "Medical Device Assembly System" },
//     { src: "/assets/medical2.jpg", alt: "Inspection Station", caption: "Automated Inspection Station" },
//     { src: "/assets/medical3.jpg", alt: "Testing Equipment", caption: "Compliance Testing Equipment" },
//   ];

//   const capabilities = [
//     {
//       icon: <Eye className="w-7 h-7" />,
//       title: "Vision Inspection",
//       desc: "High-resolution machine vision for dimensional verification, defect detection, and label inspection at production speed.",
//     },
//     {
//       icon: <FlaskConical className="w-7 h-7" />,
//       title: "System Performance Evaluation",
//       desc: "End-of-line validation including leak testing, electrical safety, and performance verification per FDA protocols.",
//     },
//     {
//       icon: <Package className="w-7 h-7" />,
//       title: "Packaging",
//       desc: "Automated medical device packaging with tamper-evident sealing, sterile barrier protection, and quality validation.",
//     },
//     {
//       icon: <ScanLine className="w-7 h-7" />,
//       title: "Traceability",
//       desc: "End-to-end product traceability with barcode verification, serialization, and regulatory compliance tracking.",
//     },
//   ];

//   const medicalSegments = [
//     "Patient Monitors",
//     "Ventilators",
//     "Surgical Gloves",
//     "ECG / EEG Systems",
//     "Dialysis Machines",
//     "Portable & Home Healthcare Devices",
//   ];

//   const processSteps = [
//     { step: "01", title: "Component Prep",},
//     { step: "02", title: "Assembly" },
//     { step: "03", title: "Inspection" },
//     { step: "04", title: "Testing" },
//     { step: "05", title: "Packaging" },
//   ];

//   const complianceItems = [
//     {
//       label: "Design Qualification (DQ)",
//       detail: "Requirements verification against URS",
//       color: "bg-blue-500",
//       icon: <ClipboardCheck className="w-4 h-4" />,
//     },
//     {
//       label: "Installation Qualification (IQ)",
//       detail: "Hardware, software & utility verification",
//       color: "bg-cyan-500",
//       icon: <Settings className="w-4 h-4" />,
//     },
//     {
//       label: "Operational Qualification (OQ)",
//       detail: "Functional testing across operating ranges",
//       color: "bg-indigo-500",
//       icon: <Gauge className="w-4 h-4" />,
//     },
//     {
//       label: "Performance Qualification (PQ)",
//       detail: "Sustained production validation & Cpk",
//       color: "bg-sky-500",
//       icon: <TrendingUp className="w-4 h-4" />,
//     },
//   ];

//   return (
//     <>
//       {/* ================= HERO ================= */}
//       <div className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
//         <Image
//           src="/assets/med.png"
//           alt="Medical Devices Automation"
//           fill
//           className="object-cover object-center"
//           priority
//         />
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="relative z-10 h-full flex items-center justify-center px-6">
//           <div className="max-w-4xl text-center">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
//               Medical Devices
//             </h1>
//             <p className="text-lg md:text-xl text-white/90 leading-relaxed">
//               Intelligent Inspection. Regulatory Excellence. Patient Safety.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ============ OVERVIEW ============ */}
//       <section className="relative bg-white py-24 px-6 lg:px-16 overflow-hidden">
//         <div
//           className="absolute inset-0 opacity-[0.02]"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)",
//             backgroundSize: "40px 40px",
//           }}
//         />

//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             {/* Left: Text */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
//                   <Heart className="w-5 h-5 text-white" />
//                 </div>
//                 <span className="text-slate-400 font-semibold text-sm tracking-[0.15em] uppercase">
//                   Overview
//                 </span>
//               </div>

//               <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
//                 Precision Automation for{" "}
//                 <span className="text-blue-600">Life-Critical Devices</span>
//               </h2>

//               <div className="space-y-5 text-slate-600 leading-relaxed text-[15px]">
//                 <p>
//                   Medical device manufacturing demands the highest levels of
//                   precision, cleanliness, and regulatory compliance. Every
//                   component must meet stringent safety standards there is no
//                   room for error.
//                 </p>
//                 <p>
//                   <span className="font-semibold text-slate-900">Micrologic</span>{" "}
//                   delivers turnkey automation systems for assembly, inspection,
//                   and testing of medical devices from disposable consumables to
//                   complex implantable systems all validated to meet GAMP and
//                   FDA regulatory requirements.
//                 </p>
//                 <p>
//                   Our systems ensure complete traceability, batch integrity, and
//                   compliance documentation throughout the entire production
//                   lifecycle.
//                 </p>
//               </div>

//               <div className="mt-8 space-y-3">
//                 {[
//                   "FDA 21 CFR Part 11 compliant data systems",
//                   "GAMP 5 validated equipment & software",
//                   "Cleanroom-compatible system design",
//                 ].map((item, i) => (
//                   <div key={i} className="flex items-start gap-3">
//                     <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
//                     <span className="text-slate-700 text-sm font-medium">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Right: Compliance Visual */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 p-8 md:p-10">
//                 <div className="flex items-center gap-3 mb-8">
//                   <FileCheck2 className="w-6 h-6 text-blue-600" />
//                   <h3 className="text-lg font-bold text-blue-900">
//                     GAMP Validation Framework
//                   </h3>
//                 </div>

//                 <div className="space-y-4">
//                   {complianceItems.map((tier, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, y: 10 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: 0.3 + i * 0.1 }}
//                       className="flex items-center gap-4 bg-white rounded-xl p-4 border border-slate-100 
//                                  shadow-sm hover:shadow-md transition-shadow"
//                     >
//                       <div
//                         className={`w-10 h-10 rounded-lg ${tier.color} flex items-center justify-center text-white shrink-0`}
//                       >
//                         {tier.icon}
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <div className="font-semibold text-slate-900 text-sm">{tier.label}</div>
//                         <div className="text-slate-500 text-xs">{tier.detail}</div>
//                       </div>
//                       <Shield className="w-4 h-4 text-slate-300 shrink-0" />
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
//               <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ============ CAPABILITIES ============ */}
//       <section className="relative bg-slate-950 py-24 px-6 lg:px-16 overflow-hidden">
//         <div
//           className="absolute inset-0 opacity-[0.04]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
//             backgroundSize: "80px 80px",
//           }}
//         />

//         <div className="max-w-7xl mx-auto relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white">What We Offer</h2>
//           </motion.div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {capabilities.map((cap, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 className="group relative bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-8
//                            hover:border-blue-500/40 transition-all duration-500"
//               >
//                 <div
//                   className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/5 to-transparent 
//                                 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                 />

//                 <div
//                   className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 
//                                 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6
//                                 group-hover:from-blue-600/30 group-hover:to-cyan-600/30 transition-all"
//                 >
//                   {cap.icon}
//                 </div>

//                 <h3 className="relative z-10 text-xl font-bold text-white mb-3">{cap.title}</h3>
//                 <p className="relative z-10 text-slate-400 text-sm leading-relaxed">{cap.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ============ PROCESS FLOW ============ */}
//       <section className="relative bg-gradient-to-b from-slate-50 to-white py-24 px-6 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <span className="text-blue-600 font-semibold text-sm tracking-[0.2em] uppercase mb-3 block">
//               Production Workflow
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
//               Medical Device Production Flow
//             </h2>
//           </motion.div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//             {processSteps.map((step, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: i * 0.08 }}
//                 className="relative group"
//               >
//                 <div
//                   className="bg-white border border-slate-200 rounded-xl p-5 text-center h-full
//                                 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 
//                                 transition-all duration-300"
//                 >
//                   <div
//                     className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 
//                                   bg-clip-text text-transparent mb-2"
//                   >
//                     {step.step}
//                   </div>
//                   <div className="font-bold text-slate-900 text-sm mb-1">{step.title}</div>
                 
//                 </div>

//                 {i < processSteps.length - 1 && (
//                   <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
//                     <ChevronRight className="w-5 h-5 text-slate-300" />
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ============ MEDICAL DOMAINS ============ */}
//       <section className="relative bg-white py-24 px-6 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <span className="text-blue-600 font-semibold text-sm tracking-[0.2em] uppercase mb-3 block">
//               Domain Expertise
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
//               Medical Segments We Serve
//             </h2>
//           </motion.div>

//           <div className="max-w-6xl mx-auto px-4 py-12">
//             <div className="grid md:grid-cols-2 gap-6">
//               {medicalSegments.map((item, i) => (
//                 <div
//                   key={i}
//                   className="group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-xl transition-all duration-300"
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className="flex-shrink-0 w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
//                       <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={2.5} />
//                     </div>
//                     <p className="text-slate-700 text-base leading-relaxed pt-2">{item}</p>
//                   </div>

//                   {/* Corner Accent */}
//                   <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ============ LIGHTBOX ============ */}
//       <AnimatePresence>
//         {lightbox !== null && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
//             onClick={() => setLightbox(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="relative max-w-4xl max-h-[85vh] w-full"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <Image
//                 src={galleryImages[lightbox].src}
//                 alt={galleryImages[lightbox].alt}
//                 width={800}
//                 height={600}
//                 className="w-full h-full object-contain rounded-xl"
//               />
//               <button
//                 onClick={() => setLightbox(null)}
//                 className="absolute -top-4 -right-4 w-10 h-10 bg-white/10 backdrop-blur rounded-full 
//                            flex items-center justify-center text-white hover:bg-white/20 transition"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//               <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-4 py-2 rounded-lg">
//                 <p className="text-white text-sm font-medium">{galleryImages[lightbox].caption}</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default MedicalDevices;