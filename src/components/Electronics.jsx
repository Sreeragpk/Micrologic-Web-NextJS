// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Cpu,
//   Shield,
//   Zap,
//   Radio,
//   ChevronRight,
//   CircuitBoard,
//   CheckCircle2,
//   X,
//   Activity,
//   Eye,
// } from "lucide-react";

// const Electronics = () => {
//   const [lightbox, setLightbox] = useState(null);

//   const builtImages = [
//     { src: "/assets/IMG_0361.webp", alt: "Electronics Assembly Line" },
//     { src: "/assets/electronics.jpg", alt: "PCB Testing Station" },
//     { src: "/assets/electronics1.jpg", alt: "Quality Inspection System" },
//     { src: "/assets/IMG_0523.webp", alt: "Automated Assembly Cell" },
//   ];

//   const capabilities = [
//     {
//       icon: <Cpu className="w-7 h-7" />,
//       title: "Smart Assembly Systems",
//       desc: "Automated precision assembly for PCB modules, RF, GPS, and GSM devices with integrated traceability.",
//     },
//     {
//       icon: <Eye className="w-7 h-7" />,
//       title: "Intelligent Inspection Solutions",
//       desc: "AOI, vision inspection, defect detection, and component verification for zero-defect production.",
//     },
//     {
//       icon: <Radio className="w-7 h-7" />,
//       title: "Wireless Performance Verification",
//       desc: "RF signal integrity, power measurement, sensitivity testing, and protocol verification for wireless electronics components.",
//     },
//     {
//       icon: <Activity className="w-7 h-7" />,
//       title: "Full-System Electronics Qualification",
//       desc: "End-of-line testing, firmware flashing, burn-in, calibration, and lifecycle data logging.",
//     },
//   ];

//   const segmentsWeServe = [
//     "Main Control PCBAs",
//     "Microcontroller-Based Control Units",
//     "Inverter & Compressor Control Boards",
//     "Motor Driver Circuits",
//     "LED/LCD Display Modules",
//     "Touch Interface Panels",
//     "Wi-Fi / Bluetooth Communication Modules",
//     "Door Lock Control Systems",
//     "Defrost Control Units",
//     "Fan Motor Driver Boards",
//   ];

//   const processSteps = [
//     { step: "01", title: "Component Loading", desc: "Automated feeder systems" },
//     { step: "02", title: "Assembly", desc: "Robotic pick & place" },
//     { step: "03", title: "Inspection", desc: "Vision & AOI systems" },
//     { step: "04", title: "Testing", desc: "Parametric & functional" },
//     { step: "05", title: "ID Assignment", desc: "Unique serialization" },
//     { step: "06", title: "Packaging", desc: "ESD-safe packaging" },
//   ];

//   return (
//     <>
//       {/* ================= HERO ================= */}
//       <div className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
//         <Image
//           src="/assets/electronicsandelectrical.webp"
//           alt="Electronic Devices Automation"
//           fill
//           className="object-cover object-center"
//           priority
//         />
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="relative z-10 h-full flex items-center justify-center px-6">
//           <div className="max-w-4xl text-center">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
//               Electrical & Electronics
//             </h1>
//             <p className="text-lg md:text-xl text-white/90 leading-relaxed">
//               Engineered Precision. Verified Performance. Seamless Integration.
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
//                   <Cpu className="w-5 h-5 text-white" />
//                 </div>
//                 <span className="text-slate-400 font-semibold text-sm tracking-[0.15em] uppercase">
//                   Overview
//                 </span>
//               </div>

//               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
//                 Precision-Driven Solutions for{" "}
//                 <span className="text-blue-600">Advanced Electronics</span>
//               </h2>

//               <div className="space-y-5 text-slate-600 leading-relaxed text-[15px]">
//                 <p>
//                   Miniaturisation and packed functionality have made modern electronic devices highly complex to
//                   assemble and test. The margin for error is measured in microns, and the demand for traceability is
//                   absolute.
//                 </p>
//                 <p>
//                   <span className="font-semibold text-slate-900">Micrologic</span> delivers complete automation
//                   ecosystems from high-speed assembly and multi-stage inspection to parametric testing and serialized
//                   packaging engineered for electronics manufacturers who demand zero-defect production.
//                 </p>
//               </div>

//               <div className="mt-8 space-y-3">
//                 {[
//                   "Full part & process traceability with genealogy mapping",
//                   "Unique ID-based test data storage per device",
//                   "Real-time SPC and quality analytics dashboards",
//                 ].map((item, i) => (
//                   <div key={i} className="flex items-start gap-3">
//                     <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
//                     <span className="text-slate-700 text-sm font-medium">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Right: Technical Edge Visual */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 p-8 md:p-10">
//                 <div className="flex items-center gap-3 mb-8">
//                   <Zap className="w-6 h-6 text-blue-600" />
//                   <h3 className="text-lg font-bold text-slate-900">Our Technical Edge</h3>
//                 </div>

//                 <div className="space-y-4">
//                   {[
//                     {
//                       label: "Engineering Expertise",
//                       detail: "Advanced electronics automation and testing know-how.",
//                       color: "bg-blue-500",
//                     },
//                     {
//                       label: "Quality Assurance",
//                       detail: "Reliable, compliant, zero-defect validation systems.",
//                       color: "bg-cyan-500",
//                     },
//                     {
//                       label: "Operational Efficiency",
//                       detail: "Scalable solutions for faster production and delivery.",
//                       color: "bg-violet-500",
//                     },
//                     {
//                       label: "Value-Driven Performance",
//                       detail: "Cost-effective systems with strong long-term ROI.",
//                       color: "bg-emerald-500",
//                     },
//                   ].map((tier, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, y: 10 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: 0.3 + i * 0.1 }}
//                       className="flex items-center gap-4 bg-white rounded-xl p-4 border border-slate-100 
//                                  shadow-sm hover:shadow-md transition-shadow"
//                     >
//                       <div className={`w-3 h-3 rounded-full ${tier.color} shrink-0`} />
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
//       <section
//         id="capabilities"
//         className="relative bg-slate-950 py-24 px-6 lg:px-16 overflow-hidden"
//       >
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
//               Workflow
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Typical Production Flow</h2>
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
//                   <div className="font-bold text-slate-900 text-sm mb-1">{step.title}</div>
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

//       {/* ============ SEGMENTS WE SERVE ============ */}
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
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Industries We Serve</h2>
//           </motion.div>

//           <div className="max-w-6xl mx-auto px-4 py-12">
//             <div className="grid md:grid-cols-2 gap-6">
//               {segmentsWeServe.map((item, i) => (
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
//               className="relative max-w-5xl max-h-[85vh] w-full"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <Image
//                 src={builtImages[lightbox].src}
//                 alt={builtImages[lightbox].alt}
//                 width={1200}
//                 height={800}
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
//                 <p className="text-white text-sm font-medium">{builtImages[lightbox].alt}</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Electronics;
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Shield,
  Zap,
  Radio,
  ChevronRight,
  CheckCircle2,
  X,
  Activity,
  Eye,
  ArrowRight,
} from "lucide-react";

const Electronics = () => {
  const [lightbox, setLightbox] = useState(null);

  const builtImages = [
    { src: "/assets/IMG_0361.webp", alt: "Electronics Assembly Line" },
    { src: "/assets/electronics.jpg", alt: "PCB Testing Station" },
    { src: "/assets/electronics1.jpg", alt: "Quality Inspection System" },
    { src: "/assets/IMG_0523.webp", alt: "Automated Assembly Cell" },
  ];

  const capabilities = [
    {
      icon: <Cpu className="w-7 h-7" />,
      title: "Smart Assembly Systems",
      desc: "Automated precision assembly for PCB modules, RF, GPS, and GSM devices with integrated traceability.",
    },
    {
      icon: <Eye className="w-7 h-7" />,
      title: "Intelligent Inspection Solutions",
      desc: "AOI, vision inspection, defect detection, and component verification for zero-defect production.",
    },
    {
      icon: <Radio className="w-7 h-7" />,
      title: "Wireless Performance Verification",
      desc: "RF signal integrity, power measurement, sensitivity testing, and protocol verification for wireless electronics components.",
    },
    {
      icon: <Activity className="w-7 h-7" />,
      title: "Full-System Electronics Qualification",
      desc: "End-of-line testing, firmware flashing, burn-in, calibration, and lifecycle data logging.",
    },
  ];

  const segmentsWeServe = [
    "Main Control PCBAs",
    "Microcontroller-Based Control Units",
    "Inverter & Compressor Control Boards",
    "Motor Driver Circuits",
    "LED/LCD Display Modules",
    "Touch Interface Panels",
    "Wi-Fi / Bluetooth Communication Modules",
    "Door Lock Control Systems",
    "Defrost Control Units",
    "Fan Motor Driver Boards",
  ];

  const processSteps = [
    { step: "01", title: "Component Loading", desc: "Automated feeder systems" },
    { step: "02", title: "Assembly", desc: "Robotic pick & place" },
    { step: "03", title: "Inspection", desc: "Vision & AOI systems" },
    { step: "04", title: "Testing", desc: "Parametric & functional" },
    { step: "05", title: "ID Assignment", desc: "Unique serialization" },
    { step: "06", title: "Packaging", desc: "ESD-safe packaging" },
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
    name: "Medical Devices",
    href: "/industries/medical-device-automation",
    image: "/assets/med.png",
    gradient: "from-purple-600 to-purple-800",
    accent: "bg-purple-500",
    description:
      "Regulatory-compliant automation for medical devices with precision assembly, validated testing, and end-to-end traceability.",
    highlights: [
      "Cleanroom Assembly Systems",
      "Vision Inspection & Verification",
      "Compliance & Safety Testing",
      "Batch & Device Traceability",
    ],
  },
];

  return (
    <>
      {/* ================= HERO ================= */}
      <div className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
        <Image
          src="/assets/electronicsandelectrical.webp"
          alt="Electronic Devices Automation"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Electrical & Electronics
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Engineered Precision. Verified Performance. Seamless Integration.
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
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <span className="text-slate-400 font-semibold text-sm tracking-[0.15em] uppercase">
                  Overview
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Precision-Driven Solutions for{" "}
                <span className="text-blue-600">Advanced Electronics</span>
              </h2>

              <div className="space-y-5 text-slate-600 leading-relaxed text-[15px]">
                <p>
                  Miniaturisation and packed functionality have made modern electronic devices highly complex to
                  assemble and test. The margin for error is measured in microns, and the demand for traceability is
                  absolute.
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Micrologic</span> delivers complete automation
                  ecosystems from high-speed assembly and multi-stage inspection to parametric testing and serialized
                  packaging engineered for electronics manufacturers who demand zero-defect production.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  "Full part & process traceability with genealogy mapping",
                  "Unique ID-based test data storage per device",
                  "Real-time SPC and quality analytics dashboards",
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
                  <Zap className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-bold text-slate-900">Our Technical Edge</h3>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      label: "Engineering Expertise",
                      detail: "Advanced electronics automation and testing know-how.",
                      color: "bg-blue-500",
                    },
                    {
                      label: "Quality Assurance",
                      detail: "Reliable, compliant, zero-defect validation systems.",
                      color: "bg-cyan-500",
                    },
                    {
                      label: "Operational Efficiency",
                      detail: "Scalable solutions for faster production and delivery.",
                      color: "bg-violet-500",
                    },
                    {
                      label: "Value-Driven Performance",
                      detail: "Cost-effective systems with strong long-term ROI.",
                      color: "bg-emerald-500",
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
                      <div className={`w-3 h-3 rounded-full ${tier.color} shrink-0`} />
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
      <section id="capabilities" className="relative bg-slate-950 py-24 px-6 lg:px-16 overflow-hidden">
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
              Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Typical Production Flow</h2>
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

      {/* ============ SEGMENTS WE SERVE ============ */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Industries We Serve</h2>
          </motion.div>

          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-6">
              {segmentsWeServe.map((item, i) => (
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

{/* ============ OTHER INDUSTRIES — ELEGANT WHITE ============ */}
<section className="relative bg-white py-28 px-6 lg:px-16 overflow-hidden">
  {/* Subtle Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-50 via-cyan-50/50 to-transparent rounded-full blur-3xl" />
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
      <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        <span className="text-blue-700 font-semibold text-sm tracking-wide">
          Beyond Electronics
        </span>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        Industries We{" "}
        <span className="relative">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Transform
          </span>
          <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
            <path d="M2 6C50 2 150 2 198 6" stroke="url(#underline)" strokeWidth="3" strokeLinecap="round"/>
            <defs>
              <linearGradient id="underline" x1="0" y1="0" x2="200" y2="0">
                <stop stopColor="#2563eb"/>
                <stop offset="1" stopColor="#06b6d4"/>
              </linearGradient>
            </defs>
          </svg>
        </span>
      </h2>
      
      <p className="text-slate-500 text-lg max-w-2xl mx-auto mt-6">
        Delivering precision automation solutions across diverse industries with unmatched expertise
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
                  
                  <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold text-sm">
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
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
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={builtImages[lightbox].src}
                alt={builtImages[lightbox].alt}
                width={1200}
                height={800}
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
                <p className="text-white text-sm font-medium">{builtImages[lightbox].alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Electronics;