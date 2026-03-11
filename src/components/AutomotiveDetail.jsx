
// "use client";
// import React, { useState } from "react";
// import AutomotiveExperienceexamples from "./Automotive";
// import automotivedisplay from "../assets/car.webp";
// import Seo from "./Seo";

// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Car,
//   Shield,
//   Cog,
//   Eye,
//   ChevronRight,
//   CheckCircle2,
//   Cpu,
//   Wrench,
//   Battery,
//   Gauge,
//   ScanLine,
//   PackageCheck,
//   FlaskConical,
//   X,
//   Settings,
//   Target,
//   TrendingUp,
//   Radio,
//   Lightbulb,
//   Monitor,
//   Radar,
// } from "lucide-react";

// const Automotive = () => {
//   const [lightbox, setLightbox] = useState(null);

//   const galleryImages = [
//     {
//       src: "https://micrologicglobal.com/wp-content/uploads/2023/02/2.-BMS-Assembly-Line-570x696.jpg",
//       alt: "BMS Assembly Line",
//       caption: "Battery Management System Assembly",
//     },
//     {
//       src: "https://micrologicglobal.com/wp-content/uploads/2023/02/7.-Robot-Pick-Place-2-570x696.jpg",
//       alt: "Robot Pick & Place",
//       caption: "Robotic Pick & Place Station",
//     },
//     {
//       src: "https://micrologicglobal.com/wp-content/uploads/2023/02/16.-Car-Door-Assembly-Inspection-570x696.jpg",
//       alt: "Car Door Assembly Inspection",
//       caption: "Door Assembly Inspection System",
//     },
//   ];

//   const capabilities = [
//     {
//       icon: <Cog className="w-7 h-7" />,
//       title: "Assembly Systems",
//       desc: "Human-assisted to fully automated assembly lines for automotive electronics, EV components, and mechanical assemblies.",
//     },
//     {
//       icon: <Eye className="w-7 h-7" />,
//       title: "Inspection Systems",
//       desc: "Machine vision, dimensional gauging, and surface inspection systems ensuring zero-defect quality standards.",
//     },
//     {
//       icon: <FlaskConical className="w-7 h-7" />,
//       title: "Test Equipment",
//       desc: "End-of-line testing, functional validation, and parametric testing with full data traceability.",
//     },
//     {
//       icon: <PackageCheck className="w-7 h-7" />,
//       title: "Material Handling",
//       desc: "Automated conveyors, robotic pick-and-place, and smart material flow systems for lean manufacturing.",
//     },
//   ];

//   // const automotiveDomains = [
//   // {
//   //   icon: <Battery className="w-6 h-6" />,
//   //   title: "EV & Battery Systems",
//   //   items: ["BMS Assembly & Test", "Battery Pack Assembly", "Charging Systems"],
//   //   gradient: "from-blue-600 to-cyan-500",
//   //   border: "border-blue-500/30",
//   //   bg: "bg-blue-500/5",
//   // },
//   // {
//   //   icon: <Cpu className="w-6 h-6" />,
//   //   title: "Automotive Electronics",
//   //   items: ["ECU Testing", "Sensor Assembly", "Dashboard Systems"],
//   //   gradient: "from-blue-700 to-indigo-500",
//   //   border: "border-indigo-500/30",
//   //   bg: "bg-indigo-500/5",
//   // },
//   // {
//   //   icon: <Wrench className="w-6 h-6" />,
//   //   title: "Mechanical Components",
//   //   items: ["Door Assemblies", "Seating Systems", "Powertrain Components"],
//   //   gradient: "from-blue-500 to-sky-500",
//   //   border: "border-sky-500/30",
//   //   bg: "bg-sky-500/5",
//   // },
//   // {
//   //   icon: <Shield className="w-6 h-6" />,
//   //   title: "Safety Systems",
//   //   items: ["Airbag Module Testing", "Brake System Validation", "ADAS Components"],
//   //   gradient: "from-blue-800 to-blue-500",
//   //   border: "border-blue-500/30",
//   //   bg: "bg-blue-500/5",
//   // },
//   const automotiveDomains = [
//     {
//       title: "Controllers",
//       icon: <Settings className="w-6 h-6" />,
//       gradient: "from-emerald-600 to-emerald-800",
//       border: "border-emerald-500/30",
//       bg: "bg-emerald-500/5",
//       items: [
//         "Vehicle Control Unit",
//         "Body Control Module",
//         "Brake Controllers",
//         "Fan Controls",
//         "EGR Controller",
//         "Engine Control Unit",
//       ],
//     },
//     {
//       title: "Switches / RF",
//       icon: <Radio className="w-6 h-6" />,
//       gradient: "from-orange-500 to-orange-700",
//       border: "border-orange-500/30",
//       bg: "bg-orange-500/5",
//       items: [
//         "Window Switches",
//         "Steering Switches",
//         "Auto Gear Shifter",
//         "Start Stop Button",
//         "Remote Keyless Entry",
//         "Ultra Wide Band",
//       ],
//     },
//     {
//       title: "Lighting",
//       icon: <Lightbulb className="w-6 h-6" />,
//       gradient: "from-amber-500 to-amber-700",
//       border: "border-amber-500/30",
//       bg: "bg-amber-500/5",
//       items: [
//         "Head Lights",
//         "Tail Lamps",
//         "Indicator Lights",
//         "Projector Lamps",
//         "Tail Strip",
//         "Light Controllers",
//       ],
//     },
//     {
//       title: "Display Devices",
//       icon: <Monitor className="w-6 h-6" />,
//       gradient: "from-violet-600 to-violet-800",
//       border: "border-violet-500/30",
//       bg: "bg-violet-500/5",
//       items: [
//         "Instrument Clusters",
//         "Infotainment Systems",
//         "Audio Systems",
//         "HVAC Controllers",
//         "Silver Boxes",
//       ],
//     },
//     {
//       title: "Sensors",
//       icon: <Radar className="w-6 h-6" />,
//       gradient: "from-cyan-600 to-cyan-800",
//       border: "border-cyan-500/30",
//       bg: "bg-cyan-500/5",
//       items: ["Reverse Parking", "TPMS", "Touch Sensors"],
//     },
//   ];

//   const processSteps = [
//     {
//       step: "01",
//       title: "Requirement Analysis",
//       desc: "Understanding OEM specs",
//     },
//     {
//       step: "02",
//       title: "Design & Engineering",
//       desc: "Custom solution design",
//     },
//     { step: "03", title: "Build & Integration", desc: "System manufacturing" },
//     { step: "04", title: "Validation", desc: "FAT & SAT testing" },
//     { step: "05", title: "Deployment", desc: "Installation & commissioning" },
//     { step: "06", title: "Support", desc: "Lifecycle maintenance" },
//   ];

//   return (
//     <>
//  <Seo
//   title="Automotive Automation Systems | Micrologic"
//   description="Advanced automotive automation solutions for assembly, inspection, EV battery manufacturing, and electronics testing with full traceability."
//   canonical="https://www.micrologicglobal.com/industries/automotive"
//   image={automotivedisplay}
// />

//       {/* ================= HERO ================= */}
//       <div className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
//         <img
//           src={automotivedisplay}
//           alt="Automotive Electronics"
//           className="absolute inset-0 w-full h-full object-cover object-center"
//         />
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="relative z-10 h-full flex items-center justify-center px-6">
//           <div className="max-w-4xl text-center">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
//               Automotive
//             </h1>
//             <p className="text-lg md:text-xl text-white/90 leading-relaxed">
//               Built to Integrate. Designed to Accelerate. Powered by Intelligent
//               Automation.
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
//                   <Car className="w-5 h-5 text-white" />
//                 </div>
//                 <span className="text-slate-400 font-semibold text-sm tracking-[0.15em] uppercase">
//                   Overview
//                 </span>
//               </div>

//               <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
//                 Driving Automation in{" "}
//                 <span className="text-blue-600">Automotive Manufacturing</span>
//               </h2>

//               <div className="space-y-5 text-slate-600 leading-relaxed text-[15px]">
//                 <p>
//                   The modern automobile is a complex, cyber-physical system
//                   integrating advanced electronics, embedded software,
//                   high-speed communication networks, and lightweight engineered
//                   materials. Rapid advancements in vehicle electrification,
//                   ADAS, connectivity, and powertrain innovation combined with
//                   evolving global safety and environmental regulations are
//                   redefining manufacturing standards across the automotive
//                   industry.
//                 </p>
//                 {/* <p>
//             From conventional ICE platforms to next-generation electric vehicles,
//             manufacturers require high-precision, scalable, and data-driven
//             automation to ensure consistent quality, traceability, and
//             throughput.
//           </p> */}
//                 <p>
//                   <span className="font-semibold text-slate-900">
//                     Micrologic
//                   </span>{" "}
//                   delivers intelligent, end-to-end automation solutions for the
//                   automotive electronics spanning semi-automated workstations to
//                   fully integrated assembly, inspection, and end-of-line test
//                   systems. Our systems combine precision engineering, real-time
//                   data acquisition, process validation, and zero-defect
//                   manufacturing principles to enable high-volume,
//                   high-reliability production in Industry 4.0 environments.
//                 </p>
//               </div>

//               <div className="mt-8 space-y-3">
//                 {[
//                   // "Compliant with IATF 16949 & automotive safety standards",
//                   "Full traceability with unique serial ID per component",
//                   "Scalable from semi-auto to fully robotic lines",
//                 ].map((item, i) => (
//                   <div key={i} className="flex items-start gap-3">
//                     <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
//                     <span className="text-slate-700 text-sm font-medium">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Right: Quality Assurance Visual */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 p-8 md:p-10">
//                 <div className="flex items-center gap-3 mb-8">
//                   <Target className="w-6 h-6 text-blue-600" />
//                   <h3 className="text-lg font-bold text-blue-900">
//                     Quality & Compliance Framework
//                   </h3>
//                 </div>

//                 <div className="space-y-4">
//                   {[
//                     {
//                       label: "Design Validation",
//                       detail: "DFMEA & Prototyping",
//                       color: "bg-blue-600",
//                       icon: <Settings className="w-4 h-4" />,
//                     },
//                     {
//                       label: "Process Validation",
//                       detail: "PFMEA, Cpk analysis, Gauge R&R, & Run-off",
//                       color: "bg-blue-500",
//                       icon: <Gauge className="w-4 h-4" />,
//                     },
//                     {
//                       label: "Production Monitoring",
//                       detail: "Real-time SPC, OEE & reject tracking",
//                       color: "bg-cyan-500",
//                       icon: <TrendingUp className="w-4 h-4" />,
//                     },
//                     {
//                       label: "Traceability",
//                       detail: "Component-level genealogy & data archival",
//                       color: "bg-indigo-500",
//                       icon: <ScanLine className="w-4 h-4" />,
//                     },
//                   ].map((tier, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, y: 10 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: 0.3 + i * 0.1 }}
//                       className="flex items-center gap-4 bg-white rounded-xl p-4 border border-slate-100 
//                            shadow-sm hover:shadow-md transition-shadow"
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
//                         <div className="text-slate-500 text-xs">
//                           {tier.detail}
//                         </div>
//                       </div>
//                       <Shield className="w-4 h-4 text-slate-300 shrink-0" />
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* <div className="mt-6 pt-6 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-500">
//             <Shield className="w-4 h-4 text-blue-500" />
//             <span>
//               Compliant with IATF 16949, ISO 9001, and OEM-specific standards
//             </span>
//           </div> */}
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
//              What We Offer
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
//               Our Process
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
//               From Concept to Production
//             </h2>
//           </motion.div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
//       {/* ============ AUTOMOTIVE DOMAINS ============ */}
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
//               Automotive Segments We Serve
//             </h2>
//           </motion.div>

//           {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {automotiveDomains.map((domain, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: i * 0.1 }}
//                 className={`relative rounded-2xl border ${domain.border} ${domain.bg} p-7 
//                            hover:shadow-xl transition-all duration-500 group overflow-hidden`}
//               >
//                 <div
//                   className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${domain.gradient} 
//                                 opacity-60 group-hover:opacity-100 transition-opacity`}
//                 />

//                 <div
//                   className={`w-12 h-12 rounded-xl bg-gradient-to-br ${domain.gradient} 
//                                 flex items-center justify-center text-white mb-5 
//                                 shadow-lg group-hover:scale-105 transition-transform`}
//                 >
//                   {domain.icon}
//                 </div>

//                 <h3 className="text-lg font-bold text-blue-900 mb-4">
//                   {domain.title}
//                 </h3>

//                 <ul className="space-y-2">
//                   {domain.items.map((item, j) => (
//                     <li key={j} className="flex items-center gap-2 text-slate-600 text-sm">
//                       <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div> */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
//             {automotiveDomains.map((domain, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: i * 0.1 }}
//                 className={`relative rounded-2xl border ${domain.border} ${domain.bg} p-7
//                   hover:shadow-xl hover:-translate-y-1 transition-all duration-500 
//                   group overflow-hidden`}
//               >
//                 {/* top gradient line */}
//                 <div
//                   className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${domain.gradient}
//                     opacity-60 group-hover:opacity-100 transition-opacity`}
//                 />

//                 {/* icon */}
//                 <div
//                   className={`w-12 h-12 rounded-xl bg-gradient-to-br ${domain.gradient}
//                     flex items-center justify-center text-white mb-5
//                     shadow-lg group-hover:scale-105 transition-transform`}
//                 >
//                   {domain.icon}
//                 </div>

//                 {/* title */}
//                 <h3 className="text-lg font-bold text-blue-900 mb-4">
//                   {domain.title}
//                 </h3>

//                 {/* items */}
//                 <ul className="space-y-2">
//                   {domain.items.map((item, j) => (
//                     <li
//                       key={j}
//                       className="flex items-center gap-2 text-slate-600 text-sm"
//                     >
//                       <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ============ EXPERIENCE COMPONENT ============ */}
//       {/* <section className="relative bg-white py-24 px-6 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           <AutomotiveExperienceexamples />
//         </div>
//       </section> */}

//       {/* ================= GALLERY ================= */}
//       {/* <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-100 py-20 px-6 lg:px-20">
//         <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply blur-3xl" />
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
//               Automotive Applications
//             </h2>
//             <p className="text-slate-500 max-w-2xl mx-auto text-sm">
//               A selection of automation systems engineered and deployed for
//               automotive manufacturers and suppliers.
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

// export default Automotive;
// // import React from "react";
// // import AutomotiveExperienceexamples from "./Automotive";
// // import automotivedisplay from "../assets/automotivedisplay.jpg";

// // const Automotive = () => {
// //   return (
// //     <>
// //       {/* ================= FULL WIDTH HERO ================= */}
// //       <div className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
// //         {/* Hero Image */}
// //         <img
// //           src={automotivedisplay}
// //           alt="Automotive Electronics"
// //           className="absolute inset-0 w-full h-full object-cover object-center"
// //         />

// //         {/* Overlay */}
// //         <div className="absolute inset-0 bg-black/40"></div>

// //         {/* Hero Content */}
// //         <div className="relative z-10 h-full flex items-center justify-center px-6">
// //           <div className="max-w-4xl text-center">
// //             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
// //               Automotive
// //             </h1>
// //             <p className="text-lg md:text-xl text-white/90 leading-relaxed">
// //               We deliver advanced test, inspection, and assembly systems that
// //               ensure quality, safety, and efficiency across automotive
// //               electronics and components.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //       {/* ================= END HERO ================= */}

// //       {/* ================= MAIN CONTENT ================= */}
// //       <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-100 py-20 px-6 lg:px-20">
// //         {/* Decorative Blobs */}
// //         <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
// //         <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>

// //         {/* Description */}
// //         <div className="max-w-5xl mx-auto text-slate-700 leading-relaxed text-lg mb-20 relative z-10">
// //           <p className="mb-6">
// //             The modern automobile is a highly advanced system with multiple{" "}
// //             <span className="font-semibold text-slate-900">subsystems</span> and
// //             thousands of components — powered by breakthroughs in{" "}
// //             <span className="font-semibold text-orange-600">
// //               computing, electronics
// //             </span>{" "}
// //             and new lightweight materials.
// //           </p>

// //           <p className="mb-6">
// //             Regulatory changes, safety standards, and environmental
// //             considerations have influenced new automotive technologies
// //             worldwide.
// //           </p>

// //           <p className="font-semibold text-slate-900">
// //             Micrologic provides automation solutions ranging from{" "}
// //             <span className="text-orange-600">human-assisted</span> to fully
// //             automated assembly, inspection, and test equipment for the
// //             automotive sector.
// //           </p>
// //         </div>

// //         {/* Experience Section */}
// //         <AutomotiveExperienceexamples />

// //         {/* Image Gallery */}
// //         <div className="max-w-6xl mx-auto relative z-10 mt-20">
// //           <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
// //             Automotive Applications
// //           </h2>

// //           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
// //             {[
// //               "https://micrologicglobal.com/wp-content/uploads/2023/02/2.-BMS-Assembly-Line-570x696.jpg",
// //               "https://micrologicglobal.com/wp-content/uploads/2023/02/7.-Robot-Pick-Place-2-570x696.jpg",
// //               "https://micrologicglobal.com/wp-content/uploads/2023/02/16.-Car-Door-Assembly-Inspection-570x696.jpg",
// //             ].map((src, idx) => (
// //               <div
// //                 key={idx}
// //                 className="relative overflow-hidden rounded-xl shadow-lg group"
// //               >
// //                 <img
// //                   src={src}
// //                   alt={`Automotive application ${idx + 1}`}
// //                   className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //       {/* ================= END MAIN CONTENT ================= */}
// //     </>
// //   );
// // };

// // export default Automotive;
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  Shield,
  Cog,
  Eye,
  ChevronRight,
  CheckCircle2,
  Wrench,
  Gauge,
  ScanLine,
  PackageCheck,
  FlaskConical,
  X,
  Settings,
  Target,
  TrendingUp,
  Radio,
  Lightbulb,
  Monitor,
  Radar,
} from "lucide-react";

const Automotive = () => {
  const [lightbox, setLightbox] = useState(null);

  const galleryImages = [
    {
      src: "https://micrologicglobal.com/wp-content/uploads/2023/02/2.-BMS-Assembly-Line-570x696.jpg",
      alt: "BMS Assembly Line",
      caption: "Battery Management System Assembly",
    },
    {
      src: "https://micrologicglobal.com/wp-content/uploads/2023/02/7.-Robot-Pick-Place-2-570x696.jpg",
      alt: "Robot Pick & Place",
      caption: "Robotic Pick & Place Station",
    },
    {
      src: "https://micrologicglobal.com/wp-content/uploads/2023/02/16.-Car-Door-Assembly-Inspection-570x696.jpg",
      alt: "Car Door Assembly Inspection",
      caption: "Door Assembly Inspection System",
    },
  ];

  const capabilities = [
    {
      icon: <Cog className="w-7 h-7" />,
      title: "Assembly Systems",
      desc: "Human-assisted to fully automated assembly lines for automotive electronics, EV components, and mechanical assemblies.",
    },
    {
      icon: <Eye className="w-7 h-7" />,
      title: "Inspection Systems",
      desc: "Machine vision, dimensional gauging, and surface inspection systems ensuring zero-defect quality standards.",
    },
    {
      icon: <FlaskConical className="w-7 h-7" />,
      title: "Test Equipment",
      desc: "End-of-line testing, functional validation, and parametric testing with full data traceability.",
    },
    {
      icon: <PackageCheck className="w-7 h-7" />,
      title: "Material Handling",
      desc: "Automated conveyors, robotic pick-and-place, and smart material flow systems for lean manufacturing.",
    },
  ];

  const automotiveDomains = [
    {
      title: "Controllers",
      icon: <Settings className="w-6 h-6" />,
      gradient: "from-emerald-600 to-emerald-800",
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/5",
      items: [
        "Vehicle Control Unit",
        "Body Control Module",
        "Brake Controllers",
        "Fan Controls",
        "EGR Controller",
        "Engine Control Unit",
      ],
    },
    {
      title: "Switches / RF",
      icon: <Radio className="w-6 h-6" />,
      gradient: "from-orange-500 to-orange-700",
      border: "border-orange-500/30",
      bg: "bg-orange-500/5",
      items: [
        "Window Switches",
        "Steering Switches",
        "Auto Gear Shifter",
        "Start Stop Button",
        "Remote Keyless Entry",
        "Ultra Wide Band",
      ],
    },
    {
      title: "Lighting",
      icon: <Lightbulb className="w-6 h-6" />,
      gradient: "from-amber-500 to-amber-700",
      border: "border-amber-500/30",
      bg: "bg-amber-500/5",
      items: [
        "Head Lights",
        "Tail Lamps",
        "Indicator Lights",
        "Projector Lamps",
        "Tail Strip",
        "Light Controllers",
      ],
    },
    {
      title: "Display Devices",
      icon: <Monitor className="w-6 h-6" />,
      gradient: "from-violet-600 to-violet-800",
      border: "border-violet-500/30",
      bg: "bg-violet-500/5",
      items: [
        "Instrument Clusters",
        "Infotainment Systems",
        "Audio Systems",
        "HVAC Controllers",
        "Silver Boxe",
      ],
    },
    {
      title: "Sensors",
      icon: <Radar className="w-6 h-6" />,
      gradient: "from-cyan-600 to-cyan-800",
      border: "border-cyan-500/30",
      bg: "bg-cyan-500/5",
      items: ["Reverse Parking", "TPMS", "Touch Sensors"],
    },
  ];

  const processSteps = [
    { step: "01", title: "Requirement Analysis", desc: "Understanding OEM specs" },
    { step: "02", title: "Design & Engineering", desc: "Custom solution design" },
    { step: "03", title: "Build & Integration", desc: "System manufacturing" },
    { step: "04", title: "Validation", desc: "FAT & SAT testing" },
    { step: "05", title: "Deployment", desc: "Installation & commissioning" },
    { step: "06", title: "Support", desc: "Lifecycle maintenance" },
  ];

  return (
    <>
      {/* ================= HERO ================= */}
      <div className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
        <Image
          src="/assets/car.webp"
          alt="Automotive Electronics"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Automotive
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Built to Integrate. Designed to Accelerate. Powered by Intelligent
              Automation.
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
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <span className="text-slate-400 font-semibold text-sm tracking-[0.15em] uppercase">
                  Overview
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
                Driving Automation in{" "}
                <span className="text-blue-600">Automotive Manufacturing</span>
              </h2>

              <div className="space-y-5 text-slate-600 leading-relaxed text-[15px]">
                <p>
                  The modern automobile is a complex, cyber-physical system
                  integrating advanced electronics, embedded software,
                  high-speed communication networks, and lightweight engineered
                  materials. Rapid advancements in vehicle electrification,
                  ADAS, connectivity, and powertrain innovation combined with
                  evolving global safety and environmental regulations are
                  redefining manufacturing standards across the automotive
                  industry.
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Micrologic</span>{" "}
                  delivers intelligent, end-to-end automation solutions for the
                  automotive electronics spanning semi-automated workstations to
                  fully integrated assembly, inspection, and end-of-line test
                  systems. Our systems combine precision engineering, real-time
                  data acquisition, process validation, and zero-defect
                  manufacturing principles to enable high-volume,
                  high-reliability production in Industry 4.0 environments.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  "Full traceability with unique serial ID per component",
                  "Scalable from semi-auto to fully robotic lines",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Quality Assurance Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <Target className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-bold text-blue-900">
                    Quality & Compliance Framework
                  </h3>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      label: "Design Validation",
                      detail: "DFMEA & Prototyping",
                      color: "bg-blue-600",
                      icon: <Settings className="w-4 h-4" />,
                    },
                    {
                      label: "Process Validation",
                      detail: "PFMEA, Cpk analysis, Gauge R&R, & Run-off",
                      color: "bg-blue-500",
                      icon: <Gauge className="w-4 h-4" />,
                    },
                    {
                      label: "Production Monitoring",
                      detail: "Real-time SPC, OEE & reject tracking",
                      color: "bg-cyan-500",
                      icon: <TrendingUp className="w-4 h-4" />,
                    },
                    {
                      label: "Traceability",
                      detail: "Component-level genealogy & data archival",
                      color: "bg-indigo-500",
                      icon: <ScanLine className="w-4 h-4" />,
                    },
                  ].map((tier, i) => (
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
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              From Concept to Production
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
                  <div className="text-slate-400 text-xs">{step.desc}</div>
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

      {/* ============ AUTOMOTIVE DOMAINS ============ */}
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
              Automotive Segments We Serve
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {automotiveDomains.map((domain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative rounded-2xl border ${domain.border} ${domain.bg} p-7
                  hover:shadow-xl hover:-translate-y-1 transition-all duration-500 
                  group overflow-hidden`}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${domain.gradient}
                    opacity-60 group-hover:opacity-100 transition-opacity`}
                />

                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${domain.gradient}
                    flex items-center justify-center text-white mb-5
                    shadow-lg group-hover:scale-105 transition-transform`}
                >
                  {domain.icon}
                </div>

                <h3 className="text-lg font-bold text-blue-900 mb-4">{domain.title}</h3>

                <ul className="space-y-2">
                  {domain.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
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
                <p className="text-white text-sm font-medium">
                  {galleryImages[lightbox].caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Automotive;