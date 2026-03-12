// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Cloud,
//   CloudUpload,
//   Link2,
//   Database,
//   Server,
//   RefreshCw,
//   Factory,
//   Sparkles,
//   Globe,
//   ExternalLink,
//   Zap,
//   Clock,
//   TrendingUp,
//   CheckCircle2,
//   Layers,
//   Wrench,
// } from "lucide-react";

// import Carousel from "./Carousel";
// import TesterCellsCarousel from "./TesterCellsCarousel";

// // Common heading styles
// const headingStyles = {
//   primary: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black",
//   secondary: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black",
//   subsection:
//     "text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black",
// };

// // Image card component - Updated for Next.js
// const ImageCard = ({ title, imageSrc, altText }) => (
//   <div
//     className="group cursor-pointer w-full"
//     onContextMenu={(e) => e.preventDefault()}
//   >
//     <h3 className="font-bold text-gray-800 text-center mb-2 sm:mb-3 text-base sm:text-lg group-hover:text-blue-600 transition-colors">
//       {title}
//     </h3>

//     <div className="relative overflow-hidden rounded-xl transition-all duration-300 image-container">
//       <Image
//         src={imageSrc}
//         alt={altText}
//         width={500}
//         height={350}
//         className="h-40 sm:h-48 md:h-56 w-full object-contain transform group-hover:scale-105 transition-transform duration-500 protected-image"
//         draggable={false}
//       />
//     </div>
//   </div>
// );

// // Enhanced FlowBox with modern design
// const FlowBox = ({ children, icon: Icon, variant = "default" }) => {
//   const styles = {
//     default: {
//       bg: "from-[#f4f6f8] via-[#e6ebef] to-[#d8dee4]",
//       border: "border-slate-300",
//       text: "text-slate-700",
//       depth: "shadow-[0_3px_0_#c4cbd3,0_8px_18px_rgba(0,0,0,0.15)]",
//       highlight: "from-white/80",
//       iconBg: "bg-slate-600",
//     },
//     blue: {
//       bg: "from-[#eaf2ff] via-[#d7e4ff] to-[#c2d6ff]",
//       border: "border-blue-300",
//       text: "text-blue-800",
//       depth: "shadow-[0_3px_0_#9db7ff,0_8px_18px_rgba(37,99,235,0.25)]",
//       highlight: "from-white/70",
//       iconBg: "bg-blue-600",
//     },
//     gray: {
//       bg: "from-[#eef1f4] via-[#e3e7eb] to-[#d6dbe1]",
//       border: "border-slate-300",
//       text: "text-slate-600",
//       depth: "shadow-[0_3px_0_#bfc6cf,0_8px_18px_rgba(0,0,0,0.12)]",
//       highlight: "from-white/70",
//       iconBg: "bg-slate-500",
//     },
//   };

//   const s = styles[variant];

//   return (
//     <div
//       className="
//         relative inline-flex items-center justify-center
//         w-full max-w-[220px] sm:max-w-[240px] md:max-w-[260px]
//         px-3 sm:px-5 py-2.5 sm:py-3
//         text-xs sm:text-sm font-semibold
//       "
//     >
//       <div
//         className={`
//           absolute inset-0 rounded-xl border
//           bg-gradient-to-b ${s.bg}
//           ${s.border} ${s.depth}
//         `}
//       />
//       <div
//         className={`
//           absolute top-[2px] left-[6px] right-[6px] h-[45%]
//           rounded-lg bg-gradient-to-b ${s.highlight} to-transparent
//         `}
//       />
//       <div className={`relative flex items-center gap-1.5 sm:gap-2 ${s.text}`}>
//         {Icon && (
//           <div className={`${s.iconBg} text-white p-1 rounded-md`}>
//             <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
//           </div>
//         )}
//         {children}
//       </div>
//     </div>
//   );
// };

// // Enhanced ArrowDown
// const ArrowDown = ({ length = "md" }) => {
//   const size = {
//     sm: "h-5 sm:h-6",
//     md: "h-6 sm:h-10",
//     lg: "h-16 sm:h-24 md:h-28",
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <div
//         className={`w-[2px] ${size[length]} bg-gradient-to-b from-blue-400 via-blue-500 to-blue-700`}
//       />
//       <div className="w-0 h-0 border-x-[5px] sm:border-x-[6px] border-t-[7px] sm:border-t-[9px] border-x-transparent border-t-blue-700" />
//     </div>
//   );
// };

// const ArrowRight = () => (
//   <div className="absolute left-full ml-2 sm:ml-3 top-1/2 -translate-y-1/2 hidden lg:flex items-center">
//     <div className="h-[2px] w-6 sm:w-8 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700" />
//     <div className="w-0 h-0 border-y-[5px] sm:border-y-[6px] border-l-[7px] sm:border-l-[9px] border-y-transparent border-l-blue-700" />
//   </div>
// );

// const LineDown = ({ height = "h-8" }) => (
//   <div
//     className={`
//       w-[2px]
//       ${height}
//       bg-gradient-to-b from-blue-300 to-blue-500
//     `}
//   />
// );

// // Feature Section Component
// const FeatureSection = ({
//   title,
//   subtitle,
//   description,
//   features,
//   index,
//   isExpanded,
//   onToggle,
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.6, delay: index * 0.1 }}
//     className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border cursor-pointer ${
//       isExpanded
//         ? "border-blue-500 shadow-2xl"
//         : "border-blue-100 hover:border-blue-300"
//     }`}
//     onClick={onToggle}
//   >
//     <div className="flex items-start space-x-3 sm:space-x-4">
//       <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl">
//         {index + 1}
//       </div>
//       <div className="flex-1 min-w-0">
//         <div className="flex items-start justify-between gap-2">
//           <div className="flex-1 min-w-0">
//             <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-1 sm:mb-2 break-words">
//               {title}
//             </h3>
//             <p className="text-sm sm:text-base md:text-lg font-semibold text-blue-600 mb-2 sm:mb-3 break-words">
//               {subtitle}
//             </p>
//             <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
//               {description}
//             </p>
//           </div>
//           <motion.div
//             animate={{ rotate: isExpanded ? 180 : 0 }}
//             transition={{ duration: 0.3 }}
//             className="flex-shrink-0 text-blue-600 ml-2"
//           >
//             <svg
//               className="w-5 h-5 sm:w-6 sm:h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </motion.div>
//         </div>

//         <AnimatePresence>
//           {isExpanded && features && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="overflow-hidden"
//             >
//               <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-blue-200">
//                 <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">
//                   Key Features:
//                 </h4>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
//                   {features.map((feature, idx) => (
//                     <motion.div
//                       key={idx}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.3, delay: idx * 0.05 }}
//                       className="flex items-start space-x-2 sm:space-x-3 bg-blue-50 p-3 sm:p-4 rounded-lg hover:bg-blue-100 transition-colors"
//                     >
//                       <div className="flex-shrink-0 mt-1.5 sm:mt-1">
//                         <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <h5 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base break-words">
//                           {feature.title}
//                         </h5>
//                         <p className="text-xs sm:text-sm text-gray-600 break-words">
//                           {feature.description}
//                         </p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   </motion.div>
// );

// // Advantage Card Component
// const AdvantageCard = ({
//   icon: Icon,
//   title,
//   description,
//   index,
//   accentColor,
// }) => {
//   const colorMap = {
//     blue: {
//       iconBg: "from-blue-500 to-blue-700",
//       iconShadow: "shadow-blue-200",
//       hoverBorder: "hover:border-blue-300",
//       accentLine: "bg-blue-500",
//       badge: "bg-blue-50 text-blue-700",
//     },
//     indigo: {
//       iconBg: "from-indigo-500 to-indigo-700",
//       iconShadow: "shadow-indigo-200",
//       hoverBorder: "hover:border-indigo-300",
//       accentLine: "bg-indigo-500",
//       badge: "bg-indigo-50 text-indigo-700",
//     },
//     cyan: {
//       iconBg: "from-cyan-500 to-cyan-700",
//       iconShadow: "shadow-cyan-200",
//       hoverBorder: "hover:border-cyan-300",
//       accentLine: "bg-cyan-500",
//       badge: "bg-cyan-50 text-cyan-700",
//     },
//     emerald: {
//       iconBg: "from-emerald-500 to-emerald-700",
//       iconShadow: "shadow-emerald-200",
//       hoverBorder: "hover:border-emerald-300",
//       accentLine: "bg-emerald-500",
//       badge: "bg-emerald-50 text-emerald-700",
//     },
//   };

//   const colors = colorMap[accentColor] || colorMap.blue;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: index * 0.15 }}
//       whileHover={{ y: -6, scale: 1.02 }}
//       className={`
//         relative bg-white rounded-2xl p-6 sm:p-7 md:p-8 shadow-lg 
//         border border-gray-100 ${colors.hoverBorder}
//         hover:shadow-2xl transition-all duration-500 group overflow-hidden
//       `}
//     >
//       <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50/50 to-transparent rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
//       <div
//         className={`absolute top-0 left-6 right-6 h-1 ${colors.accentLine} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
//       ></div>
//       <div
//         className={`
//         relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${colors.iconBg}
//         flex items-center justify-center text-white shadow-lg ${colors.iconShadow}
//         mb-5 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500
//       `}
//       >
//         <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
//       </div>
//       <h3 className="relative z-10 text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-800 transition-colors duration-300">
//         {title}
//       </h3>
//       <p className="relative z-10 text-sm sm:text-base text-slate-600 leading-relaxed">
//         {description}
//       </p>
//       <div
//         className={`absolute bottom-4 right-4 w-2 h-2 rounded-full ${colors.accentLine} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
//       ></div>
//     </motion.div>
//   );
// };

// const TesterDiagram = () => {
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   // Updated to use public folder paths
//   const builtImages = [
//     { src: "/assets/leaktesting.webp", alt: "Factory Machine 2" },
//     { src: "/assets/mosfet.webp", alt: "Factory Machine 3" },
//     { src: "/assets/vibration.webp", alt: "Factory Machine 4" },
//     { src: "/assets/pcbtest.webp", alt: "Factory Machine 5" },
//     { src: "/assets/testsol1.webp", alt: "Factory Machine 6" },
//     { src: "/assets/testsol3.webp", alt: "Factory Machine 8" },
//     { src: "/assets/testsol4.webp", alt: "Factory Machine 9" },
//     { src: "/assets/testsol5.webp", alt: "Factory Machine 10" },
//     { src: "/assets/testsol6.webp", alt: "Factory Machine 11" },
//     { src: "/assets/testsol7.webp", alt: "Factory Machine 12" },
//   ];

//   const testerCells = [
//     {
//       src: "/assets/FCT.webp",
//       name: "FCT Tester Cell",
//       alt: "Functional Circuit Testing",
//     },
//     {
//       src: "/assets/FTM WCM.webp",
//       name: "FTM WCM Tester Cell",
//       alt: "FTM WCM Testing",
//     },
//     {
//       src: "/assets/ISO EOL USB.webp",
//       name: "ISO EOL USB Tester Cell",
//       alt: "ISO EOL USB Testing",
//     },
//     { src: "/assets/3.webp", name: "RF Testing Cell", alt: "RF Testing Solutions" },
//     { src: "/assets/EOL MCU.webp", name: "EOL MCU Tester Cell", alt: "EOL MCU Testing" },
//     {
//       src: "/assets/EOL Naxnova.webp",
//       name: "EOL Naxnova Tester Cell",
//       alt: "EOL Naxnova Testing",
//     },
//     { src: "/assets/EOL OBC.webp", name: "EOL OBC Tester Cell", alt: "EOL OBC Testing" },
//     {
//       src: "/assets/EOL River River.webp",
//       name: "EOL River Rider Tester Cell",
//       alt: "EOL River River Testing",
//     },
//     {
//       src: "/assets/indication.webp",
//       name: "Indication Tester Cell",
//       alt: "Indication Testing",
//     },
//     { src: "/assets/iso.webp", name: "ISO Tester Cell", alt: "ISO Testing" },
//     {
//       src: "/assets/test1new.webp",
//       name: "Advanced Tester Cell 1",
//       alt: "Advanced Testing Solutions 1",
//     },
//     {
//       src: "/assets/test1new2.webp",
//       name: "Advanced Tester Cell 2",
//       alt: "Advanced Testing Solutions 2",
//     },
//   ];

//   const testingCapabilities = [
//     {
//       title: "In-Circuit Testing (ICT)",
//       subtitle:
//         "Ensuring PCBA Quality Through Electrical Integrity Verification",
//       description:
//         "In-Circuit Testing (ICT) is a critical quality assurance process used to verify the electrical integrity and assembly correctness of Printed Circuit Board Assemblies (PCBAs).",
//       features: [
//         {
//           title: "Measurements",
//           description:
//             "Single or Panel PCBA testing to measure passive electronic components.",
//         },
//         {
//           title: "Fixture Interface",
//           description:
//             "Uses a bed-of-nails fixture, connector engagement, and wire harness to provide direct electrical access to individual nodes and components for accurate measurements.",
//         },
//         {
//           title: "Measuring Instruments",
//           description:
//             "Utilizes precision instruments such as LCR meters, multimeters, and oscilloscopes to measure resistance, capacitance, inductance, voltage, and current for comprehensive PCBA validation.",
//         },
//         {
//           title: "Multi-Board Parallel Testing",
//           description:
//             "Parallel PCBA testing supports simultaneous measurements per cycle, maximizing throughput and enhancing manufacturing efficiency through high-speed, automated, and parallel test execution.",
//         },
//       ],
//     },
//     {
//       title: "In-System Programming (ISP)",
//       subtitle: "Fast, Accurate, and Parallel Device Programming",
//       description:
//         "In-System Programming (ISP) programs and verifies on-board devices directly on the assembled PCBA using standard interfaces, supporting automated and parallel production workflows.",
//       features: [
//         {
//           title: "Support for Multiple Device Types",
//           description:
//             "Enables programming of MCUs, EEPROMs, and other programmable components.",
//         },
//         {
//           title: "Early-Stage Firmware Loading",
//           description:
//             "Ensures firmware is loaded at the earliest possible stage in the production process.",
//         },
//         {
//           title: "Built-In Verification",
//           description:
//             "Verifies programmed data to ensure firmware integrity and correctness.",
//         },
//         {
//           title: "Parallel PCBA Testing",
//           description:
//             "For Single PCBA or High-speed gang programming solutions for parallel device flashing, delivering faster production, zero-error configuration, and seamless traceability.",
//         },
//       ],
//     },
//     {
//       title: "Functional Circuit Testing (FCT)",
//       subtitle: "Validating Complete System Performance",
//       description:
//         "FCT validates complete system performance, detecting functional faults and confirming correct firmware operation.",
//       features: [
//         {
//           title: "Power-On Testing",
//           description:
//             "Performs powered functional verification of circuit operation, signal flow, device response, and checks LED color consistency and brightness intensity levels.",
//         },
//         {
//           title: "Interface & Communication Testing",
//           description:
//             "Checks connectivity and communication protocols including UART, RS232, RS485, CAN, LIN, and Ethernet, along with peripheral interfaces.",
//         },
//         {
//           title: "Input / Output Validation",
//           description:
//             "Measures input & output voltage, current consumption in idle & load conditions, power, frequency, and over-voltage / under-voltage protection.",
//         },
//         {
//           title: "Automated Test Execution",
//           description:
//             "Integrates DUT test fixtures with test instruments to execute automated test sequences using pre-configured test cases and pass/fail criteria.",
//         },
//         {
//           title: "Fault Detection & Reporting",
//           description:
//             "Identifies functional failures and logs results with respect to serial numbers.",
//         },
//         {
//           title: "Traceability & Reporting",
//           description:
//             "Records test results for quality control, compliance, and production tracking.",
//         },
//       ],
//     },
//     {
//       title: "End-of-Line (EOL) Testing",
//       subtitle: "Complete Product Validation Before Shipment",
//       description:
//         "End-of-Line Testing checks complete product functionality to ensure quality and reliability before delivery.",
//       features: [
//         {
//           title: "Complete Functional Validation",
//           description:
//             "Verifies the fully assembled product under real operating conditions to ensure performance, reliability, and compliance with customer specifications before shipment.",
//         },
//         {
//           title: "Connector Engagement & Interface Verification",
//           description:
//             "Confirms proper connector mating, terminal locking, pin continuity, and signal integrity to ensure secure electrical and mechanical engagement.",
//         },
//         {
//           title: "Digital & Analog I/O Verification",
//           description:
//             "Tests all digital and analog inputs and outputs by simulating field signals and load conditions, ensuring accurate signal processing, response behavior, and interface reliability.",
//         },
//         {
//           title: "Safety Testing",
//           description:
//             "Performs Hi-Pot (dielectric withstand) and Insulation Resistance (IR) testing to ensure electrical insulation integrity, leakage prevention.",
//         },
//         {
//           title: "Automated Vision Inspection",
//           description:
//             "Utilizes high-resolution vision systems to inspect LEDs, labeling, connector orientation, laser marking quality, and assembly accuracy for defect-free delivery.",
//         },
//         {
//           title: "Traceability & Data Logging",
//           description:
//             "Captures test results, serial numbers, firmware versions, and parameter data for complete production traceability, quality analytics, and audit readiness.",
//         },
//       ],
//     },
//     {
//       title: "RF Testing",
//       subtitle: "Reliable & Interference-Free Wireless Performance",
//       description:
//         "RF testing ensures reliable, interference-free wireless performance while meeting global regulatory standards.",
//       features: [
//         {
//           title: "Shielded RF Chamber Testing",
//           description:
//             "RF validation is performed inside a fully shielded RF chamber to eliminate EMI during Bluetooth (2.4 GHz), Wi-Fi (2.4/5/6 GHz), and UHF testing, ensuring accurate dBm/dB measurements across defined frequency ranges in a controlled RF environment.",
//         },
//         {
//           title: "Precision RF Fixtures & Connectors",
//           description:
//             "Impedance-controlled fixtures, RF connectors, and low-loss cables maintain signal integrity and repeatability, supporting stable multi-band measurements with minimal insertion loss (dB) and consistent DUT interfacing.",
//         },
//         {
//           title: "Connector, Harness & VSWR Validation",
//           description:
//             "Validates RF connector engagement, shielding effectiveness, impedance matching, and low VSWR performance to ensure reliable Bluetooth and Wi-Fi communication across ISM bands with quantified dB performance metrics.",
//         },
//         {
//           title: "Transmission Performance Testing",
//           description:
//             "Measures output power (dBm), EVM, bandwidth, and spectral characteristics for Bluetooth and Wi-Fi devices within specified frequency ranges, confirming stable RF transmission across multi-band and UHF applications.",
//         },
//         {
//           title: "Receiver & Sensitivity Testing",
//           description:
//             "Evaluates receiver sensitivity (dBm), RSSI, and communication robustness under controlled attenuation levels (dB) to ensure dependable wireless performance across 2.4 GHz, 5 GHz, and other supported bands.",
//         },
//         {
//           title: "RF Filtering & Automated Data Logging",
//           description:
//             "Integrates RF filters and isolation networks to suppress noise and improve spectral purity during chamber testing, enabling automated test execution with complete frequency, power (dBm/dB), and compliance data logging for full traceability.",
//         },
//       ],
//     },
//   ];

//   const advantages = [
//     {
//       icon: Zap,
//       title: "Fastest Delivery in 4–6 Weeks",
//       description:
//         "Pre-engineered architecture with a ready software platform and pre-built hardware drivers ensures the fastest delivery within 4 to 6 weeks by minimizing design and integration time.",
//       accentColor: "blue",
//     },
//     {
//       icon: Clock,
//       title: "Rapid Production Readiness",
//       description:
//         "Accelerates commissioning and enables rapid production readiness, getting your manufacturing line up and running in the shortest possible time.",
//       accentColor: "indigo",
//     },
//     {
//       icon: Wrench,
//       title: "Simplified Maintenance & Spares",
//       description:
//         "Standardized components simplify maintenance and spare management, significantly reducing downtime and total cost of ownership.",
//       accentColor: "cyan",
//     },
//     {
//       icon: TrendingUp,
//       title: "Scalable & Future-Ready",
//       description:
//         "Scalable, future-ready architecture supporting easy upgrades, higher volumes, and long-term standardization across your production ecosystem.",
//       accentColor: "emerald",
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
//       {/* Hero Banner - Fixed for Next.js */}
//       <motion.div
//         className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] min-h-[350px] sm:min-h-[400px] max-h-[600px] overflow-hidden"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="absolute inset-0">
//           <Image
//             src="/assets/pcb1.webp"
//             alt="PCB Testing Solutions"
//             fill
//             className="object-cover object-center"
//             priority
//           />
//         </div>
//         <div className="absolute inset-0 bg-black/30"></div>
//         <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6">
//           <motion.div
//             className="text-center max-w-5xl"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-2xl px-2">
//               Comprehensive Test Solutions for All Production Stages
//             </h1>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Main Content Container */}
//       <div className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
//         {/* Our Tester Cells Carousel */}
//         <motion.section
//           className="mb-12 sm:mb-16 md:mb-20"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           <div className="text-center mb-8 sm:mb-10 md:mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
//               Our Test Solutions from{" "}
//               <span className="text-transparent bg-clip-text bg-blue-600">
//                 PCBA to Final Product
//               </span>
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-3 sm:mb-4 px-4">
//               Explore our comprehensive range of testing solutions designed for
//               various applications
//             </p>
//             <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 mx-auto rounded-full"></div>
//           </div>
//           <TesterCellsCarousel cells={testerCells} />
//         </motion.section>

//         {/* Intro Paragraph */}
//         <motion.section
//           className="mb-12 sm:mb-16 md:mb-20"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-2xl text-white">
//             <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center max-w-5xl mx-auto font-light">
//               Our test solutions are designed to validate product functionality,
//               electrical integrity, and performance with{" "}
//               <span className="font-semibold">
//                 high accuracy and repeatability
//               </span>
//               . Built for demanding manufacturing environments, our systems
//               combine precision instrumentation, automated control, and
//               intelligent software to support{" "}
//               <span className="font-semibold">
//                 high-volume and high-mix production
//               </span>
//               .
//             </p>
//           </div>
//         </motion.section>

//         {/* Our Test System Capabilities */}
//         <motion.section
//           className="mb-12 sm:mb-16 md:mb-20"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           <div className="text-center mb-8 sm:mb-10 md:mb-12">
//             <h2 className={`${headingStyles.primary} mb-3 sm:mb-4 px-2`}>
//               Our Test System Capabilities
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 px-4">
//               Click to explore detailed features
//             </p>
//             <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 mx-auto rounded-full"></div>
//           </div>
//           <div className="space-y-4 sm:space-y-6">
//             {testingCapabilities.map((capability, index) => (
//               <FeatureSection
//                 key={index}
//                 title={capability.title}
//                 subtitle={capability.subtitle}
//                 description={capability.description}
//                 features={capability.features}
//                 index={index}
//                 isExpanded={expandedIndex === index}
//                 onToggle={() =>
//                   setExpandedIndex(expandedIndex === index ? null : index)
//                 }
//               />
//             ))}
//           </div>
//         </motion.section>

//         {/* Tester for PCBA and Final Products - Diagram Section */}
//         <motion.section
//           className="mb-12 sm:mb-16 md:mb-20"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           <div className="text-center mb-8 sm:mb-10 md:mb-12">
//             <h2 className={`${headingStyles.primary} mb-3 sm:mb-4 px-2`}>
//               Tester for PCBA and Final Products
//             </h2>
//             <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 mx-auto rounded-full"></div>
//           </div>

//           {/* Standard Test Architecture Sub-header */}
//           <motion.div
//             className="text-center mb-8 sm:mb-10"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
//               <Layers className="w-4 h-4" />
//               <span>Architecture Overview</span>
//             </div>
//             <h3 className={`${headingStyles.secondary} mb-3 px-2`}>
//               Standard Test Architecture
//             </h3>
//             <p className="text-blue-600 text-base sm:text-lg md:text-xl font-semibold px-4">
//               Precision Architecture. Rapid Deployment.
//             </p>
//           </motion.div>

//           {/* Main Diagram Grid */}
//           <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-xl border border-blue-100">
//             <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
//               {/* Left images - Updated with string paths */}
//               <motion.div
//                 className="flex flex-col space-y-4 sm:space-y-6 items-center lg:items-start order-1"
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <ImageCard
//                   title="PCB Assemblies"
//                   imageSrc="/assets/pcb.webp"
//                   altText="pcb assemblies"
//                 />
//                 <ImageCard
//                   title="Final Products"
//                   imageSrc="/assets/TEST.webp"
//                   altText="final products"
//                 />
//               </motion.div>

//               {/* Flow Diagram Center */}
//               <motion.div
//                 className="flex flex-col items-center order-3 lg:order-2"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.9 }}
//               >
//                 <FlowBox>Software</FlowBox>
//                 <LineDown height="h-8 sm:h-10 md:h-14" />
//                 <FlowBox variant="blue">Device Handler</FlowBox>
//                 <LineDown height="h-16 sm:h-20 md:h-28" />
//                 <FlowBox color="gray">Tester</FlowBox>
//               </motion.div>

//               {/* Flow Diagram Extended */}
//               <motion.div
//                 className="flex flex-col items-center order-4 lg:order-3"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1 }}
//               >
//                 <div className="flex flex-col sm:flex-row items-center relative w-full justify-center">
//                   <div className="relative flex items-center justify-center">
//                     <FlowBox>Software Platform</FlowBox>
//                     <ArrowRight />
//                   </div>
//                   <div className="flex lg:hidden my-2">
//                     <ArrowDown length="md" />
//                   </div>
//                 </div>

//                 <LineDown height="h-8 sm:h-14 md:h-[59px]" />
//                 <FlowBox variant="blue">DUT</FlowBox>
//                 <LineDown height="h-4 sm:h-6 md:h-8" />
//                 <FlowBox variant="blue">Fixture</FlowBox>

//                 <div className="mt-4 sm:mt-6 flex flex-col gap-2.5 sm:gap-3 w-full items-center rounded-xl sm:rounded-2xl p-4 sm:p-5">
//                   <FlowBox color="gray">Instrumentation</FlowBox>
//                   <FlowBox color="gray">DIO, DAQ</FlowBox>
//                   <FlowBox color="gray">Test Computer</FlowBox>
//                   <FlowBox color="gray">UPS, PDU</FlowBox>
//                   <FlowBox color="gray">Tester Cell</FlowBox>
//                 </div>
//               </motion.div>

//               {/* Right cloud & machine - Updated with Image component */}
//               <motion.div
//                 className="flex flex-col items-center space-y-4 sm:space-y-6 order-2 lg:order-4"
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border-2 border-blue-200 shadow-lg w-full">
//                   <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">☁️</div>
//                   <h3 className="font-bold text-blue-700 text-base sm:text-lg">
//                     Big Data Cloud
//                   </h3>
//                   <p className="text-xs sm:text-sm text-blue-600 font-semibold">
//                     Micrologic FactEyes
//                   </p>
//                   <p className="text-[10px] sm:text-xs text-gray-600 mt-2">
//                     Backup • Analytics • OEE
//                   </p>
//                 </div>
//                 <div className="overflow-hidden w-full">
//                   <Image
//                     src="/assets/testerMachine.webp"
//                     alt="Tester machine"
//                     width={500}
//                     height={400}
//                     className="w-full max-w-sm lg:max-w-md mx-auto"
//                   />
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </motion.section>

//         {/* Advantages Section */}
//         <motion.section
//           className="mb-12 sm:mb-16 md:mb-20"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="text-center mb-8 sm:mb-10 md:mb-14">
//             <motion.div
//               className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-600 text-sm font-medium mb-4"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//             >
//               <CheckCircle2 className="w-4 h-4" />
//               <span>Why Choose Our Architecture</span>
//             </motion.div>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 px-2">
//               Key{" "}
//               <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
//                 Advantages
//               </span>
//             </h2>
//             <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 mx-auto rounded-full mt-5"></div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
//             {advantages.map((advantage, index) => (
//               <AdvantageCard
//                 key={index}
//                 icon={advantage.icon}
//                 title={advantage.title}
//                 description={advantage.description}
//                 index={index}
//                 accentColor={advantage.accentColor}
//               />
//             ))}
//           </div>
//         </motion.section>

//         {/* Architecture Image - Updated with Image component */}
//         <motion.section
//           className="mb-12 sm:mb-16 md:mb-20"
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="text-center mb-8 sm:mb-10 md:mb-12">
//             <h2 className={`${headingStyles.primary} mb-3 sm:mb-4 px-2`}>
//               MTS Test Software Architecture
//             </h2>
//             <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 mx-auto rounded-full"></div>
//           </div>
//           <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-blue-100">
//             <Image
//               src="/assets/mtslatest.webp"
//               alt="MTS Software Architecture"
//               width={1200}
//               height={800}
//               className="w-full h-auto rounded-lg sm:rounded-xl"
//             />
//             <p className="text-center text-gray-600 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg font-medium px-2">
//               Scalable, modular, and integration-ready architecture
//             </p>
//           </div>
//         </motion.section>

//         {/* Cloud & Data Integration Section */}
//         <motion.section
//           className="mb-12 sm:mb-16 md:mb-20"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="text-center mb-8 sm:mb-10 md:mb-12">
//             <motion.div
//               className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-sm font-medium mb-4"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//             >
//               <Cloud className="w-4 h-4" />
//               <span>Cloud & Analytics</span>
//             </motion.div>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 px-2">
//               Seamless{" "}
//               <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
//                 Data Integration
//               </span>{" "}
//               & Smart Analytics
//             </h2>
//             <p className="text-slate-500 max-w-xl mx-auto text-base sm:text-lg px-4">
//               From production floor to cloud — unlock the full potential of your
//               manufacturing data
//             </p>
//             <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 mx-auto rounded-full mt-4"></div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
//             {/* Card 1: Your Cloud, Your Way */}
//             <motion.div
//               className="relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//             >
//               <div className="h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600"></div>
//               <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-50/80 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
//               <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-50/60 to-transparent rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
//               <div className="relative z-10 p-6 sm:p-8 md:p-10">
//                 <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-blue-200 mb-6 group-hover:scale-105 transition-transform duration-300">
//                   <CloudUpload className="w-7 h-7 sm:w-8 sm:h-8" />
//                 </div>
//                 <h3 className="text-2xl sm:text-2xl font-bold text-slate-900 mb-2">
//                   Your Cloud, Your Way
//                 </h3>
//                 <p className="text-sm text-blue-600 font-medium mb-5 flex items-center gap-1.5">
//                   <Link2 className="w-3.5 h-3.5" />
//                   Flexible Integration
//                 </p>
//                 <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
//                   We seamlessly push your production data to your preferred
//                   cloud platform for smooth integration with{" "}
//                   <span className="font-semibold text-slate-800">MES</span> or{" "}
//                   <span className="font-semibold text-slate-800">ERP</span>{" "}
//                   systems — ensuring your existing infrastructure stays
//                   connected and enriched with real-time production insights.
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     { icon: Database, label: "MES Ready" },
//                     { icon: Server, label: "ERP Compatible" },
//                     { icon: RefreshCw, label: "Real-time Sync" },
//                   ].map((item, idx) => (
//                     <div
//                       key={idx}
//                       className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-xs sm:text-sm font-medium text-blue-700"
//                     >
//                       <item.icon className="w-3.5 h-3.5" />
//                       <span>{item.label}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//             {/* Card 2: FactEyes */}
//             <motion.div
//               className="relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: 0.4 }}
//             >
//               <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600"></div>
//               <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-indigo-50/80 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
//               <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-50/60 to-transparent rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
//               <div className="relative z-10 p-6 sm:p-8 md:p-10">
//                 <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200 mb-6 group-hover:scale-105 transition-transform duration-300">
//                   <Factory className="w-7 h-7 sm:w-8 sm:h-8" />
//                 </div>
//                 <h3 className="text-2xl sm:text-2xl font-bold text-slate-900 mb-2">
//                   Micrologic FactEyes
//                 </h3>
//                 <p className="text-sm text-indigo-600 font-medium mb-5 flex items-center gap-1.5">
//                   <Sparkles className="w-3.5 h-3.5" />
//                   Our Proprietary Industrial Cloud Platform
//                 </p>
//                 <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
//                   FactEyes delivers a comprehensive suite of advanced
//                   manufacturing analytics and digital transformation solutions —
//                   providing{" "}
//                   <span className="font-semibold text-slate-800">
//                     real-time visibility
//                   </span>{" "}
//                   across production, quality, assets, energy, and inventory to
//                   enable{" "}
//                   <span className="font-semibold text-slate-800">
//                     higher efficiency, improved quality, and data-driven
//                     operational excellence
//                   </span>
//                   .
//                 </p>
//                 <a
//                   href="https://facteyes.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm sm:text-base rounded-xl shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 group/btn"
//                 >
//                   <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
//                   <span>Explore FactEyes</span>
//                   <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
//                 </a>
//               </div>
//             </motion.div>
//           </div>
//         </motion.section>

//         {/* Carousel Section */}
//         <motion.section
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           <div className="text-center mb-12">
//             <motion.div
//               className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-600 text-sm font-medium mb-4"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//             ></motion.div>
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
//               Our{" "}
//               <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
//                 Builds
//               </span>
//             </h2>
//             <p className="text-slate-600 max-w-3xl mx-auto text-lg">
//               Explore our portfolio of successfully delivered automation
//               solutions across various industries
//             </p>
//           </div>
//           <Carousel images={builtImages} />
//         </motion.section>
//       </div>
//     </div>
//   );
// };

// export default TesterDiagram;

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud,
  CloudUpload,
  Link2,
  Database,
  Server,
  RefreshCw,
  Factory,
  Sparkles,
  Globe,
  ExternalLink,
  Zap,
  Clock,
  TrendingUp,
  CheckCircle2,
  Layers,
  Wrench,
  Activity,
  Thermometer,
} from "lucide-react";

import Carousel from "./Carousel";
import TesterCellsCarousel from "./TesterCellsCarousel";

// Common heading styles
const headingStyles = {
  primary: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black",
  secondary:
    "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black",
  subsection:
    "text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black",
};

// Image card component
const ImageCard = ({ title, imageSrc, altText }) => (
  <div
    className="group cursor-pointer w-full"
    onContextMenu={(e) => e.preventDefault()}
  >
    <h3 className="font-bold text-gray-800 text-center mb-2 sm:mb-3 text-base sm:text-lg group-hover:text-blue-600 transition-colors">
      {title}
    </h3>
    <div className="relative overflow-hidden rounded-xl transition-all duration-300 image-container">
      <Image
        src={imageSrc}
        alt={altText}
        width={500}
        height={350}
        className="h-40 sm:h-48 md:h-56 w-full object-contain transform group-hover:scale-105 transition-transform duration-500 protected-image"
        draggable={false}
      />
    </div>
  </div>
);

// Enhanced FlowBox with modern design
const FlowBox = ({ children, icon: Icon, variant = "default" }) => {
  const styles = {
    default: {
      bg: "from-[#f4f6f8] via-[#e6ebef] to-[#d8dee4]",
      border: "border-slate-300",
      text: "text-slate-700",
      depth: "shadow-[0_3px_0_#c4cbd3,0_8px_18px_rgba(0,0,0,0.15)]",
      highlight: "from-white/80",
      iconBg: "bg-slate-600",
    },
    blue: {
      bg: "from-[#eaf2ff] via-[#d7e4ff] to-[#c2d6ff]",
      border: "border-blue-300",
      text: "text-blue-800",
      depth: "shadow-[0_3px_0_#9db7ff,0_8px_18px_rgba(37,99,235,0.25)]",
      highlight: "from-white/70",
      iconBg: "bg-blue-600",
    },
    gray: {
      bg: "from-[#eef1f4] via-[#e3e7eb] to-[#d6dbe1]",
      border: "border-slate-300",
      text: "text-slate-600",
      depth: "shadow-[0_3px_0_#bfc6cf,0_8px_18px_rgba(0,0,0,0.12)]",
      highlight: "from-white/70",
      iconBg: "bg-slate-500",
    },
  };

  const s = styles[variant];

  return (
    <div
      className="
        relative inline-flex items-center justify-center
        w-full max-w-[220px] sm:max-w-[240px] md:max-w-[260px]
        px-3 sm:px-5 py-2.5 sm:py-3
        text-xs sm:text-sm font-semibold
      "
    >
      <div
        className={`
          absolute inset-0 rounded-xl border
          bg-gradient-to-b ${s.bg}
          ${s.border} ${s.depth}
        `}
      />
      <div
        className={`
          absolute top-[2px] left-[6px] right-[6px] h-[45%]
          rounded-lg bg-gradient-to-b ${s.highlight} to-transparent
        `}
      />
      <div className={`relative flex items-center gap-1.5 sm:gap-2 ${s.text}`}>
        {Icon && (
          <div className={`${s.iconBg} text-white p-1 rounded-md`}>
            <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

// Enhanced ArrowDown
const ArrowDown = ({ length = "md" }) => {
  const size = {
    sm: "h-5 sm:h-6",
    md: "h-6 sm:h-10",
    lg: "h-16 sm:h-24 md:h-28",
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-[2px] ${size[length]} bg-gradient-to-b from-blue-400 via-blue-500 to-blue-700`}
      />
      <div className="w-0 h-0 border-x-[5px] sm:border-x-[6px] border-t-[7px] sm:border-t-[9px] border-x-transparent border-t-blue-700" />
    </div>
  );
};

const ArrowRight = () => (
  <div className="absolute left-full ml-2 sm:ml-3 top-1/2 -translate-y-1/2 hidden lg:flex items-center">
    <div className="h-[2px] w-6 sm:w-8 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700" />
    <div className="w-0 h-0 border-y-[5px] sm:border-y-[6px] border-l-[7px] sm:border-l-[9px] border-y-transparent border-l-blue-700" />
  </div>
);

const LineDown = ({ height = "h-8" }) => (
  <div
    className={`
      w-[2px]
      ${height}
      bg-gradient-to-b from-blue-300 to-blue-500
    `}
  />
);

// Feature Section Component - Updated to support both formats
const FeatureSection = ({
  title,
  subtitle,
  description,
  features,
  screeningTests,
  index,
  isExpanded,
  onToggle,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border cursor-pointer ${
      isExpanded
        ? "border-blue-500 shadow-2xl"
        : "border-blue-100 hover:border-blue-300"
    }`}
    onClick={onToggle}
  >
    <div className="flex items-start space-x-3 sm:space-x-4">
      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl">
        {index + 1}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-1 sm:mb-2 break-words">
              {title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-blue-600 mb-2 sm:mb-3 break-words">
              {subtitle}
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 text-blue-600 ml-2"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </div>

        <AnimatePresence>
          {isExpanded && features && !screeningTests && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-blue-200">
                <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">
                  Key Features:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="flex items-start space-x-2 sm:space-x-3 bg-blue-50 p-3 sm:p-4 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex-shrink-0 mt-1.5 sm:mt-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base break-words">
                          {feature.title}
                        </h5>
                        <p className="text-xs sm:text-sm text-gray-600 break-words">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Screening Tests Layout */}
          {isExpanded && screeningTests && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-blue-200 space-y-6 sm:space-y-8">
                {screeningTests.map((test, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.15 }}
                    className="relative"
                  >
                    {/* Test Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${test.gradient} flex items-center justify-center text-white shadow-lg ${test.shadow}`}
                      >
                        <test.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                          {test.title}
                        </h4>
                        {test.tagline && (
                          <p className="text-xs sm:text-sm text-slate-500 font-medium">
                            {test.tagline}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <div className="space-y-3 sm:space-y-4 pl-1">
                      {test.points.map((point, pIdx) => (
                        <motion.div
                          key={pIdx}
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: idx * 0.15 + pIdx * 0.08,
                          }}
                          className={`flex items-start gap-3 p-3 sm:p-4 rounded-xl ${test.bgColor} hover:shadow-md transition-all duration-300`}
                        >
                          <div className="flex-shrink-0 mt-1.5">
                            <div
                              className={`w-2 h-2 rounded-full ${test.dotColor}`}
                            ></div>
                          </div>
                          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                            {point}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Divider between tests (not after the last one) */}
                    {idx < screeningTests.length - 1 && (
                      <div className="mt-6 sm:mt-8 border-b border-dashed border-slate-200"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  </motion.div>
);

// Advantage Card Component
const AdvantageCard = ({
  icon: Icon,
  title,
  description,
  index,
  accentColor,
}) => {
  const colorMap = {
    blue: {
      iconBg: "from-blue-500 to-blue-700",
      iconShadow: "shadow-blue-200",
      hoverBorder: "hover:border-blue-300",
      accentLine: "bg-blue-500",
      badge: "bg-blue-50 text-blue-700",
    },
    indigo: {
      iconBg: "from-indigo-500 to-indigo-700",
      iconShadow: "shadow-indigo-200",
      hoverBorder: "hover:border-indigo-300",
      accentLine: "bg-indigo-500",
      badge: "bg-indigo-50 text-indigo-700",
    },
    cyan: {
      iconBg: "from-cyan-500 to-cyan-700",
      iconShadow: "shadow-cyan-200",
      hoverBorder: "hover:border-cyan-300",
      accentLine: "bg-cyan-500",
      badge: "bg-cyan-50 text-cyan-700",
    },
    emerald: {
      iconBg: "from-emerald-500 to-emerald-700",
      iconShadow: "shadow-emerald-200",
      hoverBorder: "hover:border-emerald-300",
      accentLine: "bg-emerald-500",
      badge: "bg-emerald-50 text-emerald-700",
    },
  };

  const colors = colorMap[accentColor] || colorMap.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`
        relative bg-white rounded-2xl p-6 sm:p-7 md:p-8 shadow-lg 
        border border-gray-100 ${colors.hoverBorder}
        hover:shadow-2xl transition-all duration-500 group overflow-hidden
      `}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50/50 to-transparent rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div
        className={`absolute top-0 left-6 right-6 h-1 ${colors.accentLine} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>
      <div
        className={`
        relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${colors.iconBg}
        flex items-center justify-center text-white shadow-lg ${colors.iconShadow}
        mb-5 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500
      `}
      >
        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
      </div>
      <h3 className="relative z-10 text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-800 transition-colors duration-300">
        {title}
      </h3>
      <p className="relative z-10 text-sm sm:text-base text-slate-600 leading-relaxed">
        {description}
      </p>
      <div
        className={`absolute bottom-4 right-4 w-2 h-2 rounded-full ${colors.accentLine} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
      ></div>
    </motion.div>
  );
};

const TesterDiagram = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const builtImages = [
    { src: "/assets/leaktesting.webp", alt: "Factory Machine 2" },
    { src: "/assets/mosfet.webp", alt: "Factory Machine 3" },
    { src: "/assets/vibration.webp", alt: "Factory Machine 4" },
    { src: "/assets/pcbtest.webp", alt: "Factory Machine 5" },
    { src: "/assets/testsol1.webp", alt: "Factory Machine 6" },
    { src: "/assets/testsol3.webp", alt: "Factory Machine 8" },
    { src: "/assets/testsol4.webp", alt: "Factory Machine 9" },
    { src: "/assets/testsol5.webp", alt: "Factory Machine 10" },
    { src: "/assets/testsol6.webp", alt: "Factory Machine 11" },
    { src: "/assets/testsol7.webp", alt: "Factory Machine 12" },
  ];

  const testerCells = [
    {
      src: "/assets/FCT.webp",
      name: "FCT Tester Cell",
      alt: "Functional Circuit Testing",
    },
    {
      src: "/assets/FTM WCM.webp",
      name: "FTM WCM Tester Cell",
      alt: "FTM WCM Testing",
    },
    {
      src: "/assets/ISO EOL USB.webp",
      name: "ISO EOL USB Tester Cell",
      alt: "ISO EOL USB Testing",
    },
    {
      src: "/assets/3.webp",
      name: "RF Testing Cell",
      alt: "RF Testing Solutions",
    },
    {
      src: "/assets/EOL MCU.webp",
      name: "EOL MCU Tester Cell",
      alt: "EOL MCU Testing",
    },
    {
      src: "/assets/EOL Naxnova.webp",
      name: "EOL Naxnova Tester Cell",
      alt: "EOL Naxnova Testing",
    },
    {
      src: "/assets/EOL OBC.webp",
      name: "EOL OBC Tester Cell",
      alt: "EOL OBC Testing",
    },
    {
      src: "/assets/EOL River River.webp",
      name: "EOL River Rider Tester Cell",
      alt: "EOL River River Testing",
    },
    {
      src: "/assets/indication.webp",
      name: "Indication Tester Cell",
      alt: "Indication Testing",
    },
    { src: "/assets/iso.webp", name: "ISO Tester Cell", alt: "ISO Testing" },
    {
      src: "/assets/test1new.webp",
      name: "Advanced Tester Cell 1",
      alt: "Advanced Testing Solutions 1",
    },
    {
      src: "/assets/test1new2.webp",
      name: "Advanced Tester Cell 2",
      alt: "Advanced Testing Solutions 2",
    },
  ];

  const testingCapabilities = [
    {
      title: "In-Circuit Testing (ICT)",
      subtitle:
        "Ensuring PCBA Quality Through Electrical Integrity Verification",
      description:
        "In-Circuit Testing (ICT) is a critical quality assurance process used to verify the electrical integrity and assembly correctness of Printed Circuit Board Assemblies (PCBAs).",
      features: [
        {
          title: "Measurements",
          description:
            "Single or Panel PCBA testing to measure passive electronic components.",
        },
        {
          title: "Fixture Interface",
          description:
            "Uses a bed-of-nails fixture, connector engagement, and wire harness to provide direct electrical access to individual nodes and components for accurate measurements.",
        },
        {
          title: "Measuring Instruments",
          description:
            "Utilizes precision instruments such as LCR meters, multimeters, and oscilloscopes to measure resistance, capacitance, inductance, voltage, and current for comprehensive PCBA validation.",
        },
        {
          title: "Multi-Board Parallel Testing",
          description:
            "Parallel PCBA testing supports simultaneous measurements per cycle, maximizing throughput and enhancing manufacturing efficiency through high-speed, automated, and parallel test execution.",
        },
      ],
    },
    {
      title: "In-System Programming (ISP)",
      subtitle: "Fast, Accurate, and Parallel Device Programming",
      description:
        "In-System Programming (ISP) programs and verifies on-board devices directly on the assembled PCBA using standard interfaces, supporting automated and parallel production workflows.",
      features: [
        {
          title: "Support for Multiple Device Types",
          description:
            "Enables programming of MCUs, EEPROMs, and other programmable components.",
        },
        {
          title: "Early-Stage Firmware Loading",
          description:
            "Ensures firmware is loaded at the earliest possible stage in the production process.",
        },
        {
          title: "Built-In Verification",
          description:
            "Verifies programmed data to ensure firmware integrity and correctness.",
        },
        {
          title: "Parallel PCBA Testing",
          description:
            "For Single PCBA or High-speed gang programming solutions for parallel device flashing, delivering faster production, zero-error configuration, and seamless traceability.",
        },
      ],
    },
    {
      title: "Functional Circuit Testing (FCT)",
      subtitle: "Validating Complete System Performance",
      description:
        "FCT validates complete system performance, detecting functional faults and confirming correct firmware operation.",
      features: [
        {
          title: "Power-On Testing",
          description:
            "Performs powered functional verification of circuit operation, signal flow, device response, and checks LED color consistency and brightness intensity levels.",
        },
        {
          title: "Interface & Communication Testing",
          description:
            "Checks connectivity and communication protocols including UART, RS232, RS485, CAN, LIN, and Ethernet, along with peripheral interfaces.",
        },
        {
          title: "Input / Output Validation",
          description:
            "Measures input & output voltage, current consumption in idle & load conditions, power, frequency, and over-voltage / under-voltage protection.",
        },
        {
          title: "Automated Test Execution",
          description:
            "Integrates DUT test fixtures with test instruments to execute automated test sequences using pre-configured test cases and pass/fail criteria.",
        },
        {
          title: "Fault Detection & Reporting",
          description:
            "Identifies functional failures and logs results with respect to serial numbers.",
        },
        {
          title: "Traceability & Reporting",
          description:
            "Records test results for quality control, compliance, and production tracking.",
        },
      ],
    },
    {
      title: "End-of-Line (EOL) Testing",
      subtitle: "Complete Product Validation Before Shipment",
      description:
        "End-of-Line Testing checks complete product functionality to ensure quality and reliability before delivery.",
      features: [
        {
          title: "Complete Functional Validation",
          description:
            "Verifies the fully assembled product under real operating conditions to ensure performance, reliability, and compliance with customer specifications before shipment.",
        },
        {
          title: "Connector Engagement & Interface Verification",
          description:
            "Confirms proper connector mating, terminal locking, pin continuity, and signal integrity to ensure secure electrical and mechanical engagement.",
        },
        {
          title: "Digital & Analog I/O Verification",
          description:
            "Tests all digital and analog inputs and outputs by simulating field signals and load conditions, ensuring accurate signal processing, response behavior, and interface reliability.",
        },
        {
          title: "Safety Testing",
          description:
            "Performs Hi-Pot (dielectric withstand) and Insulation Resistance (IR) testing to ensure electrical insulation integrity, leakage prevention.",
        },
        {
          title: "Automated Vision Inspection",
          description:
            "Utilizes high-resolution vision systems to inspect LEDs, labeling, connector orientation, laser marking quality, and assembly accuracy for defect-free delivery.",
        },
        {
          title: "Traceability & Data Logging",
          description:
            "Captures test results, serial numbers, firmware versions, and parameter data for complete production traceability, quality analytics, and audit readiness.",
        },
      ],
    },
    {
      title: "RF Testing",
      subtitle: "Reliable & Interference-Free Wireless Performance",
      description:
        "RF testing ensures reliable, interference-free wireless performance while meeting global regulatory standards.",
      features: [
        {
          title: "Shielded RF Chamber Testing",
          description:
            "RF validation is performed inside a fully shielded RF chamber to eliminate EMI during Bluetooth (2.4 GHz), Wi-Fi (2.4/5/6 GHz), and UHF testing, ensuring accurate dBm/dB measurements across defined frequency ranges in a controlled RF environment.",
        },
        {
          title: "Precision RF Fixtures & Connectors",
          description:
            "Impedance-controlled fixtures, RF connectors, and low-loss cables maintain signal integrity and repeatability, supporting stable multi-band measurements with minimal insertion loss (dB) and consistent DUT interfacing.",
        },
        {
          title: "Connector, Harness & VSWR Validation",
          description:
            "Validates RF connector engagement, shielding effectiveness, impedance matching, and low VSWR performance to ensure reliable Bluetooth and Wi-Fi communication across ISM bands with quantified dB performance metrics.",
        },
        {
          title: "Transmission Performance Testing",
          description:
            "Measures output power (dBm), EVM, bandwidth, and spectral characteristics for Bluetooth and Wi-Fi devices within specified frequency ranges, confirming stable RF transmission across multi-band and UHF applications.",
        },
        {
          title: "Receiver & Sensitivity Testing",
          description:
            "Evaluates receiver sensitivity (dBm), RSSI, and communication robustness under controlled attenuation levels (dB) to ensure dependable wireless performance across 2.4 GHz, 5 GHz, and other supported bands.",
        },
        {
          title: "RF Filtering & Automated Data Logging",
          description:
            "Integrates RF filters and isolation networks to suppress noise and improve spectral purity during chamber testing, enabling automated test execution with complete frequency, power (dBm/dB), and compliance data logging for full traceability.",
        },
      ],
    },
    {
      title: "Screening Test",
      subtitle:
        "Simulating Real-World Stress to Detect Defects & Ensure Reliable Performance",
      description:
        "It is done to identify and eliminate weak or defective units. By simulating real-world stress conditions, they ensure product reliability, durability, and consistent performance, improving overall quality and customer satisfaction.",
      screeningTests: [
        {
          title: "Vibration Test",
          tagline: "Validating mechanical & electrical integrity under motion",
          icon: Activity,
          gradient: "from-orange-500 to-amber-600",
          shadow: "shadow-orange-200",
          bgColor: "bg-orange-50/70",
          dotColor: "bg-orange-500",
          points: [
            "The setup simulates real vehicle operating conditions, ensuring that communication, sensors, and gauges work properly even when the vehicle experiences road vibrations.",
            "The vibration test ensures that electronic circuits, connectors, and mechanical components remain secure and operate correctly when subjected to continuous vibration.",
            "During the vibration test, system functions such as CAN communication, simulated input signals (e.g., fuel level), and instrument gauges are monitored to ensure stable data communication, correct signal processing, and accurate gauge operation under vibration conditions.",
          ],
        },
        {
          title: "Burn-in Test",
          tagline: "Eliminating early failures through accelerated aging",
          icon: Thermometer,
          gradient: "from-red-500 to-rose-600",
          shadow: "shadow-red-200",
          bgColor: "bg-red-50/70",
          dotColor: "bg-red-500",
          points: [
            "It is performed to identify early failures in components or electronic products. The device is operated for a certain period under controlled conditions so that defective parts fail before the product is delivered to customers.",
            "During this, the product is run continuously for several hours or days at elevated temperature, voltage, or load. This helps ensure the product is stable, reliable, and capable of long-term operation.",
            "By eliminating early failures, burn-in testing improves the overall reliability and quality of the final product.",
          ],
        },
      ],
    },
  ];

  const advantages = [
    {
      icon: Zap,
      title: "Fastest Delivery in 4–6 Weeks",
      description:
        "Pre-engineered architecture with a ready software platform and pre-built hardware drivers ensures the fastest delivery within 4 to 6 weeks by minimizing design and integration time.",
      accentColor: "blue",
    },
    {
      icon: Clock,
      title: "Rapid Production Readiness",
      description:
        "Accelerates commissioning and enables rapid production readiness, getting your manufacturing line up and running in the shortest possible time.",
      accentColor: "indigo",
    },
    {
      icon: Wrench,
      title: "Simplified Maintenance & Spares",
      description:
        "Standardized components simplify maintenance and spare management, significantly reducing downtime and total cost of ownership.",
      accentColor: "cyan",
    },
    {
      icon: TrendingUp,
      title: "Scalable & Future-Ready",
      description:
        "Scalable, future-ready architecture supporting easy upgrades, higher volumes, and long-term standardization across your production ecosystem.",
      accentColor: "emerald",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
      {/* Hero Banner */}
      <motion.div
        className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] min-h-[350px] sm:min-h-[400px] max-h-[600px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <Image
            src="/assets/pcb1.webp"
            alt="PCB Testing Solutions"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6">
          <motion.div
            className="text-center max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-2xl px-2">
              Comprehensive Test Solutions for All Production Stages
            </h1>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        {/* Our Tester Cells Carousel */}
        <motion.section
          className="mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Test Solutions from{" "}
              <span className="text-transparent bg-clip-text bg-blue-600">
                PCBA to Final Product
              </span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-3 sm:mb-4 px-4">
              Explore our comprehensive range of testing solutions designed for
              various applications
            </p>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          <TesterCellsCarousel cells={testerCells} />
        </motion.section>

        {/* Intro Paragraph */}
        <motion.section
          className="mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-2xl text-white">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center max-w-5xl mx-auto font-light">
              Our test solutions are designed to validate product functionality,
              electrical integrity, and performance with{" "}
              <span className="font-semibold">
                high accuracy and repeatability
              </span>
              . Built for demanding manufacturing environments, our systems
              combine precision instrumentation, automated control, and
              intelligent software to support{" "}
              <span className="font-semibold">
                high-volume and high-mix production
              </span>
              .
            </p>
          </div>
        </motion.section>

        {/* Our Test System Capabilities */}
        <motion.section
          className="mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className={`${headingStyles.primary} mb-3 sm:mb-4 px-2`}>
              Our Test System Capabilities
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 px-4">
              Click to explore detailed features
            </p>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-4 sm:space-y-6">
            {testingCapabilities.map((capability, index) => (
              <FeatureSection
                key={index}
                title={capability.title}
                subtitle={capability.subtitle}
                description={capability.description}
                features={capability.features}
                screeningTests={capability.screeningTests}
                index={index}
                isExpanded={expandedIndex === index}
                onToggle={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </motion.section>

        {/* Tester for PCBA and Final Products - Diagram Section */}
        <motion.section
          className="mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className={`${headingStyles.primary} mb-3 sm:mb-4 px-2`}>
              Tester for PCBA and Final Products
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          {/* Standard Test Architecture Sub-header */}
          <motion.div
            className="text-center mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
              <Layers className="w-4 h-4" />
              <span>Architecture Overview</span>
            </div>
            <h3 className={`${headingStyles.secondary} mb-3 px-2`}>
              Standard Test Architecture
            </h3>
            <p className="text-blue-600 text-base sm:text-lg md:text-xl font-semibold px-4">
              Precision Architecture. Rapid Deployment.
            </p>
          </motion.div>

          {/* Main Diagram Grid */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-xl border border-blue-100">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
              {/* Left images */}
              <motion.div
                className="flex flex-col space-y-4 sm:space-y-6 items-center lg:items-start order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <ImageCard
                  title="PCB Assemblies"
                  imageSrc="/assets/pcb.webp"
                  altText="pcb assemblies"
                />
                <ImageCard
                  title="Final Products"
                  imageSrc="/assets/TEST.webp"
                  altText="final products"
                />
              </motion.div>

              {/* Flow Diagram Center */}
              <motion.div
                className="flex flex-col items-center order-3 lg:order-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
              >
                <FlowBox>Software</FlowBox>
                <LineDown height="h-8 sm:h-10 md:h-14" />
                <FlowBox variant="blue">Device Handler</FlowBox>
                <LineDown height="h-16 sm:h-20 md:h-28" />
                <FlowBox color="gray">Tester</FlowBox>
              </motion.div>

              {/* Flow Diagram Extended */}
              <motion.div
                className="flex flex-col items-center order-4 lg:order-3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="flex flex-col sm:flex-row items-center relative w-full justify-center">
                  <div className="relative flex items-center justify-center">
                    <FlowBox>Software Platform</FlowBox>
                    <ArrowRight />
                  </div>
                  <div className="flex lg:hidden my-2">
                    <ArrowDown length="md" />
                  </div>
                </div>

                <LineDown height="h-8 sm:h-14 md:h-[59px]" />
                <FlowBox variant="blue">DUT</FlowBox>
                <LineDown height="h-4 sm:h-6 md:h-8" />
                <FlowBox variant="blue">Fixture</FlowBox>

                <div className="mt-4 sm:mt-6 flex flex-col gap-2.5 sm:gap-3 w-full items-center rounded-xl sm:rounded-2xl p-4 sm:p-5">
                  <FlowBox color="gray">Instrumentation</FlowBox>
                  <FlowBox color="gray">DIO, DAQ</FlowBox>
                  <FlowBox color="gray">Test Computer</FlowBox>
                  <FlowBox color="gray">UPS, PDU</FlowBox>
                  <FlowBox color="gray">Tester Cell</FlowBox>
                </div>
              </motion.div>

              {/* Right cloud & machine */}
              <motion.div
                className="flex flex-col items-center space-y-4 sm:space-y-6 order-2 lg:order-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border-2 border-blue-200 shadow-lg w-full">
                  <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">☁️</div>
                  <h3 className="font-bold text-blue-700 text-base sm:text-lg">
                    Big Data Cloud
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-600 font-semibold">
                    Micrologic FactEyes
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-600 mt-2">
                    Backup • Analytics • OEE
                  </p>
                </div>
                <div className="overflow-hidden w-full">
                  <Image
                    src="/assets/testerMachine.webp"
                    alt="Tester machine"
                    width={500}
                    height={400}
                    className="w-full max-w-sm lg:max-w-md mx-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Advantages Section */}
        <motion.section
          className="mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-14">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-600 text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Why Choose Our Architecture</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 px-2">
              Key{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                Advantages
              </span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 mx-auto rounded-full mt-5"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            {advantages.map((advantage, index) => (
              <AdvantageCard
                key={index}
                icon={advantage.icon}
                title={advantage.title}
                description={advantage.description}
                index={index}
                accentColor={advantage.accentColor}
              />
            ))}
          </div>
        </motion.section>

        {/* Architecture Image */}
        <motion.section
          className="mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className={`${headingStyles.primary} mb-3 sm:mb-4 px-2`}>
              MTS Test Software Architecture
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-blue-100">
            <Image
              src="/assets/mtslatest.webp"
              alt="MTS Software Architecture"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg sm:rounded-xl"
            />
            <p className="text-center text-gray-600 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg font-medium px-2">
              Scalable, modular, and integration-ready architecture
            </p>
          </div>
        </motion.section>

        {/* Cloud & Data Integration Section */}
        <motion.section
          className="mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Cloud className="w-4 h-4" />
              <span>Cloud & Analytics</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 px-2">
              Seamless{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                Data Integration
              </span>{" "}
              & Smart Analytics
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base sm:text-lg px-4">
              From production floor to cloud — unlock the full potential of your
              manufacturing data
            </p>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1: Your Cloud, Your Way */}
            <motion.div
              className="relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600"></div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-50/80 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-50/60 to-transparent rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
              <div className="relative z-10 p-6 sm:p-8 md:p-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-blue-200 mb-6 group-hover:scale-105 transition-transform duration-300">
                  <CloudUpload className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-2xl sm:text-2xl font-bold text-slate-900 mb-2">
                  Your Cloud, Your Way
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-5 flex items-center gap-1.5">
                  <Link2 className="w-3.5 h-3.5" />
                  Flexible Integration
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                  We seamlessly push your production data to your preferred
                  cloud platform for smooth integration with{" "}
                  <span className="font-semibold text-slate-800">MES</span> or{" "}
                  <span className="font-semibold text-slate-800">ERP</span>{" "}
                  systems — ensuring your existing infrastructure stays
                  connected and enriched with real-time production insights.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: Database, label: "MES Ready" },
                    { icon: Server, label: "ERP Compatible" },
                    { icon: RefreshCw, label: "Real-time Sync" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-xs sm:text-sm font-medium text-blue-700"
                    >
                      <item.icon className="w-3.5 h-3.5" />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card 2: FactEyes */}
            <motion.div
              className="relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600"></div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-indigo-50/80 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-50/60 to-transparent rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
              <div className="relative z-10 p-6 sm:p-8 md:p-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200 mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Factory className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-2xl sm:text-2xl font-bold text-slate-900 mb-2">
                  Micrologic FactEyes
                </h3>
                <p className="text-sm text-indigo-600 font-medium mb-5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Our Proprietary Industrial Cloud Platform
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                  FactEyes delivers a comprehensive suite of advanced
                  manufacturing analytics and digital transformation solutions —
                  providing{" "}
                  <span className="font-semibold text-slate-800">
                    real-time visibility
                  </span>{" "}
                  across production, quality, assets, energy, and inventory to
                  enable{" "}
                  <span className="font-semibold text-slate-800">
                    higher efficiency, improved quality, and data-driven
                    operational excellence
                  </span>
                  .
                </p>
                <a
                  href="https://facteyes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm sm:text-base rounded-xl shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 group/btn"
                >
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Explore FactEyes</span>
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Carousel Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-600 text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            ></motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                Builds
              </span>
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              Explore our portfolio of successfully delivered automation
              solutions across various industries
            </p>
          </div>
          <Carousel images={builtImages} />
        </motion.section>
      </div>
    </div>
  );
};

export default TesterDiagram;