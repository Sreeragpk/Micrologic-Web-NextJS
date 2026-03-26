// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import {
//   Database,
//   BarChart3,
//   Activity,
//   Shield,
//   CheckCircle2,
//   TrendingUp,
//   Zap,
//   Eye,
//   Target,
//   Cpu,
//   PackageSearch,
// } from "lucide-react";

// export default function TraceabilityFlow() {
//   return (
//     <div className="relative w-full min-h-screen overflow-hidden">
//       {/* Enhanced Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50" />
      
//       {/* Animated Background Orbs */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3],
//             x: [0, 100, 0],
//             y: [0, 50, 0],
//           }}
//           transition={{ duration: 20, repeat: Infinity }}
//           className="absolute top-0 left-0 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.3, 0.5, 0.3],
//             x: [0, -100, 0],
//             y: [0, -50, 0],
//           }}
//           transition={{ duration: 15, repeat: Infinity }}
//           className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl"
//         />
//       </div>

//       {/* Hero Banner - Updated with Next.js Image */}
//       <motion.div
//         className="relative w-full h-[60vh] min-h-[450px] max-h-[600px] overflow-hidden"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.2 }}
//       >
//         <motion.div
//           className="absolute inset-0"
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         >
//           <Image
//             src="/assets/scanning.webp"
//            alt="Manufacturing production traceability system with barcode scanning and process monitoring"
//             fill
//             className="object-cover object-center"
//             priority
//           />
//         </motion.div>
//         <div className="absolute inset-0 bg-black/30"></div>
        
//         {/* Grid Pattern Overlay */}
//         <div className="absolute inset-0 opacity-10">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
//               backgroundSize: "50px 50px",
//             }}
//           ></div>
//         </div>

//         {/* Floating Orbs */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <motion.div
//             className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
//             animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
//             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//           />
//           <motion.div
//             className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
//             animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
//             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </div>
        
//         {/* Hero Content */}
//         <div className="relative z-10 h-full flex items-center justify-center">
//           <div className="container mx-auto px-6 lg:px-12 text-center">
//             <div className="max-w-4xl mx-auto">
//               {/* Main Title */}
//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//               >
//                 <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
//                   Traceability Solutions
//                 </h1>
//                 <p className="text-lg text-white/90 max-w-3xl mx-auto">
// Micrologic Traceware provides end-to-end manufacturing traceability by tracking
// components, processes, and quality data throughout the production lifecycle.
// </p>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Main Content Section */}
//       <section className="relative py-20 overflow-hidden">
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50"></div>
//           <div
//             className="absolute inset-0 opacity-[0.015]"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//             }}
//           ></div>
//         </div>

//         <div className="container mx-auto px-6 lg:px-12 relative z-10">
//           {/* Traceability Content Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="mb-20"
//           >
//             <div className="max-w-6xl mx-auto">
//               {/* Section Header */}
//               <div className="text-center mb-12">
//                 <motion.div
//                   className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4"
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                 >
//                   <Target className="w-4 h-4" />
//                   <span>Complete Visibility</span>
//                 </motion.div>
//                 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
//                   <span className="text-transparent bg-clip-text bg-blue-600">
//                     Traceability
//                   </span>
//                 </h2>
                
//                 <p className="text-slate-600 max-w-3xl mx-auto text-lg">
//                   End-to-end visibility from production to analytics
//                 </p>
//               </div>

//               {/* Hero Statement Box */}
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600 text-white text-center px-8 py-8 rounded-2xl shadow-xl mb-12 overflow-hidden border-2 border-white/20"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
//                 <div className="relative z-10">
//                   <Shield className="w-12 h-12 mx-auto mb-4 opacity-90" />
//                   <p className="text-lg leading-relaxed">
//                     Traceware keeps a complete history of everything that the product undergoes
//                     in the assembly process and reports the precise details.
//                   </p>
//                 </div>
//               </motion.div>

//               {/* Three Pillars Grid */}
//               <div className="grid md:grid-cols-4 gap-6 mb-12">
//                 {[
//                   {
//   title: "PART TRACEABILITY",
//   icon: PackageSearch,
//   description:
//     "Tracks and records all parts and material used in the production, including components, consumables and housing. Details such as batch code, supplier code, date code are tracked and recorded for each Product ID.",
//   gradient: "from-blue-600 via-blue-500 to-indigo-500"
// },
// {
//   title: "PROCESS TRACEABILITY",
//   icon: Activity,
//   description:
//     "Tracks and records all process parameters and settings such as voltage, current, torque, test results, defects against each product ID.",
//   gradient: "from-indigo-600 via-purple-500 to-indigo-500"
// },
// {
//   title: "REPORTS",
//   icon: BarChart3,
//   description:
//     "The data will be stored in a SQL database for parsing and query. Quick reports can be generated by scanning a part with all the details of process and part.",
//   gradient: "from-cyan-600 via-blue-500 to-indigo-600"
// },
// {
//   title: "LEGACY SYSTEMS",
//   icon: Cpu,
//   description:
//     "Micrologic Traceware can be effortlessly adapted to any existing legacy machines to provide complete visibility and important insights across older production systems.",
//   gradient: "from-emerald-600 via-teal-500 to-cyan-500"
// }
//                 ].map((pillar, index) => (
//                   <motion.div
//                     key={pillar.title}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.15 }}
//                     whileHover={{ y: -5 }}
//                     className="group relative"
//                   >
//                     <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                    
//                     <div className={`relative bg-gradient-to-br ${pillar.gradient} text-white rounded-2xl shadow-lg p-8 h-full border border-white/20`}>
//                       <div className="bg-white/20 backdrop-blur-sm w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-lg">
//                         <pillar.icon className="w-7 h-7 text-white" strokeWidth={2} />
//                       </div>
                      
//                       <h3 className="font-bold text-xl mb-3">
//                         {pillar.title}
//                       </h3>
                      
//                       <p className="text-sm leading-relaxed text-white/95">
//                         {pillar.description}
//                       </p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Key Questions */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
//               >
//                 <div className="flex items-start gap-4">
//                   {/* Icon */}
//                   <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
//                     <Zap className="w-7 h-7 text-white" />
//                   </div>

//                   <div className="flex-1">
//                     <h4 className="font-bold text-lg text-slate-900 mb-4">
//                       Key Traceability Questions Answered
//                     </h4>

//                     {/* Questions Grid */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
//                       {[
//                         "Who produced the product?",
//                         "When was it produced?",
//                         "What parts were used?",
//                         "Where did the parts come from?",
//                         "What processes did it go through?",
//                         "What were the test results?",
//                       ].map((question, i) => (
//                         <div
//                           key={i}
//                           className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2.5 rounded-lg text-sm font-medium text-blue-800 border border-blue-100"
//                         >
//                           <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
//                           <span>{question}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Error Proofing Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="mb-20"
//           >
//             <div className="max-w-6xl mx-auto">
//               <div className="relative bg-white rounded-3xl shadow-sm p-8 md:p-12 border border-slate-100 overflow-hidden">
//                 <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl -z-10" />
//                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl -z-10" />

//                 {/* Header */}
//                 <div className="text-center mb-12">
//                   <motion.div
//                     className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-50 border border-cyan-100 rounded-full text-cyan-600 text-sm font-medium mb-4"
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                   >
//                     <Shield className="w-4 h-4" />
//                     <span>Quality Assurance</span>
//                   </motion.div>
                  
//                   <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
//                     Error Proofing &{" "}
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
//                       Process Traceability
//                     </span>
//                   </h2>
                  
//                   <p className="text-slate-600 max-w-3xl mx-auto text-lg">
//                     <span className="text-blue-600 font-semibold">Micrologic Philosophy:</span> Building quality and a reliable history into every product
//                     produced in the assembly and test lines.
//                   </p>
//                 </div>

//                 {/* Content */}
//                 <div className="space-y-8">
//                   {/* Error Proofing */}
//                   <motion.div
//                     initial={{ opacity: 0, x: -30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-8 shadow-sm border border-blue-100"
//                   >
//                     <div className="flex items-center gap-4 mb-5">
//                       <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg">
//                         <Shield className="w-7 h-7 text-white" strokeWidth={2} />
//                       </div>
//                       <h3 className="text-xl font-bold text-slate-900">Error Proofing</h3>
//                     </div>
                    
//                     <p className="text-slate-600 mb-6 text-lg leading-relaxed">
//                       Making it impossible (or obvious) to mix up or skip a process. Preventing errors by design is
//                       the spirit of error proofing — often implemented using <span className="font-bold text-blue-600">poka-yoke</span> (mistake-proofing).
//                     </p>
                    
//                     <div className="grid md:grid-cols-3 gap-4">
//                       {[
//                         { title: "Prevention", desc: "Design parts and fixtures so components only fit the right way.", icon: Shield },
//                         { title: "Make Errors Visible", desc: "Sensors and vision systems confirm correct parts or placement.", icon: Eye },
//                         { title: "Fool-proof Tools", desc: "Torque-controlled screwdrivers prevent over-torque.", icon: CheckCircle2 }
//                       ].map((item, i) => (
//                         <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300">
//                           <item.icon className="w-6 h-6 text-blue-600 mb-3" />
//                           <h4 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h4>
//                           <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </motion.div>

//                   {/* Process Traceability */}
//                   <motion.div
//                     initial={{ opacity: 0, x: 30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     className="bg-gradient-to-br from-white to-cyan-50/50 rounded-2xl p-8 shadow-sm border border-cyan-100"
//                   >
//                     <div className="flex items-center gap-4 mb-5">
//                       <div className="bg-gradient-to-br from-cyan-600 to-blue-600 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg">
//                         <Activity className="w-7 h-7 text-white" strokeWidth={2} />
//                       </div>
//                       <h3 className="text-xl font-bold text-slate-900">Process Traceability</h3>
//                     </div>
                    
//                     <p className="text-slate-600 mb-6 text-lg leading-relaxed">
//                       <span className="text-blue-600 font-bold">Micrologic Traceware</span> creates a detailed birth certificate and life history for every
//                       electronic product. It records every step, component, and parameter.
//                     </p>
                    
//                     <div className="grid md:grid-cols-2 gap-4">
//                       {[
//                         { title: "Identifying Everything", desc: "Unique IDs (serials, barcodes) for boards, components, batches" },
//                         { title: "Recording Steps", desc: "Machine, operator, timestamp, environmental conditions logged" },
//                         { title: "Tracking Components", desc: "Supplier and batch information for every part used" },
//                         { title: "Capturing Test Results", desc: "Link quality checks and test data to product's unique ID" }
//                       ].map((item, i) => (
//                         <div key={i} className="flex gap-3 bg-white rounded-xl p-4 shadow-sm border border-cyan-100 hover:shadow-md transition-all duration-300">
//                           <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
//                           <div>
//                             <h4 className="font-bold text-lg text-slate-900 mb-1">{item.title}</h4>
//                             <p className="text-sm text-slate-600">{item.desc}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </motion.div>

//                   {/* Importance - Premium Neon Design */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     className="relative bg-black rounded-2xl p-8 shadow-xl text-white overflow-hidden border border-white/[0.08]"
//                   >
//                     {/* Background Glow */}
//                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-blue-600/20 via-cyan-600/10 to-transparent blur-3xl"></div>
                    
//                     <div className="relative z-10">
//                       <div className="flex items-center gap-4 mb-6">
//                         <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.3)]"
//                           style={{
//                             background: `linear-gradient(135deg, rgba(34,211,238,0.2), rgba(34,211,238,0.05))`,
//                             border: `1px solid rgba(34,211,238,0.4)`,
//                           }}
//                         >
//                           <TrendingUp className="w-7 h-7 text-cyan-400" strokeWidth={2} />
//                         </div>
//                         <h3 className="text-xl font-bold">The Importance of Traceware</h3>
//                       </div>
                      
//                       <div className="grid md:grid-cols-2 gap-4">
//                         {[
//                           { title: "Quality Control", desc: "Trace back defects to source — bad batch, machine failure, or operator issue" },
//                           { title: "Regulatory Compliance", desc: "Meet strict traceability requirements in regulated industries" },
//                           { title: "Warranty & Recalls", desc: "Identify exactly which products are affected to minimize scope and cost" },
//                           { title: "Continuous Improvement", desc: "Analyze trace data to find trends, bottlenecks, and optimization opportunities" }
//                         ].map((item, i) => (
//                           <div key={i} className="flex gap-3 bg-white/[0.02] rounded-xl p-4 border border-white/[0.08] hover:border-white/[0.2] transition-colors">
//                             <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
//                             <div>
//                               <h4 className="font-bold text-lg mb-1">{item.title}</h4>
//                               <p className="text-sm text-slate-400">{item.desc}</p>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </motion.div>

//                   {/* Power of Combining */}
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-sm border border-blue-200/50"
//                   >
//                     <div className="text-center mb-6">
//                       <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg mb-4">
//                         <Zap className="w-4 h-4" />
//                         The Power of Combining
//                       </div>
//                     </div>
                    
//                     <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">
//                       Error Proofing + Traceware = Excellence
//                     </h3>
                    
//                     <p className="text-slate-600 mb-6 text-center text-lg">
//                       Together, they form a robust system for high-quality electronic assembly
//                     </p>
                    
//                     <div className="flex flex-wrap justify-center gap-3">
//                       {[
//                         "Error proofing reduces defects up front",
//                         "Traceware provides detailed records for fast root cause analysis",
//                         "Fewer defects & faster fixes",
//                         "Better compliance & more reliable products"
//                       ].map((benefit, i) => (
//                         <div
//                           key={i}
//                           className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-blue-100 hover:shadow-md transition-all"
//                         >
//                           <CheckCircle2 className="w-4 h-4 text-emerald-600" strokeWidth={2} />
//                           <span className="font-medium text-slate-800 text-sm">{benefit}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Database,
  BarChart3,
  Activity,
  Shield,
  CheckCircle2,
  TrendingUp,
  Zap,
  Eye,
  Target,
  Cpu,
  PackageSearch,
  ArrowRight,
} from "lucide-react";

const otherSolutions = [
  {
    name: "Test Solutions",
    href: "/solutions/test-solutions",
    image: "/assets/pcb1.webp",
    gradient: "from-green-600 to-green-800",
    accent: "bg-green-500",
    description:
      "Comprehensive test systems covering ICT, FCT, EOL, RF testing, and screening — ensuring product quality from PCBA to final product.",
    highlights: [
      "In-Circuit & Functional Testing",
      "End-of-Line Validation",
      "RF & Wireless Testing",
      "Burn-In & Vibration Screening",
    ],
  },
  {
    name: "Assembly Automation",
    href: "/solutions/assembly-automation",
    image: "/assets/robotnew.webp",
    gradient: "from-orange-600 to-orange-800",
    accent: "bg-orange-500",
    description:
      "High-precision automated assembly lines with robotic integration, vision-guided pick & place, and torque-controlled fastening for scalable production.",
    highlights: [
      "Robotic Pick & Place",
      "Precision Dispensing & Fastening",
      "Vision-Guided Assembly",
      "Inline Quality Verification",
    ],
  },
  {
    name: "Digital Transformation",
    href: "/solutions/digital-transformation",
    image: "/assets/digitalimagefinal.webp",
    gradient: "from-indigo-600 to-indigo-800",
    accent: "bg-indigo-500",
    description:
      "Industry 4.0-ready digital solutions with IoT connectivity, real-time analytics, MES/ERP integration, and cloud-based manufacturing intelligence.",
    highlights: [
      "IoT & Edge Computing",
      "Real-Time Analytics & OEE",
      "MES / ERP Integration",
      "FactEyes Cloud Platform",
    ],
  },
];

export default function TraceabilityFlow() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50"
        aria-hidden="true"
      />

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Banner */}
      <motion.header
        className="relative w-full h-[60vh] min-h-[450px] max-h-[600px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/assets/scanning.webp"
            alt="Micrologic Traceware — production traceability system with barcode scanning, part tracking, and real-time process monitoring"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Floating Orbs */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                  Traceability Solutions
                </h1>
                <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto">
                  <strong className="font-semibold">
                    Micrologic Traceware
                  </strong>{" "}
                  provides end-to-end manufacturing traceability by tracking{" "}
                  <strong className="font-semibold">components</strong>,{" "}
                  <strong className="font-semibold">processes</strong>, and{" "}
                  <strong className="font-semibold">quality data</strong>{" "}
                  throughout the production lifecycle.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6"
      >
        <ol className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500 flex-wrap">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-900 font-medium" aria-current="page">
            Traceability
          </li>
        </ol>
      </nav>

      {/* Main Content Section */}
      <div className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50"></div>
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          {/* Traceability Overview Section */}
          <section
            aria-labelledby="traceability-heading"
            className="mb-16 sm:mb-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-12">
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    <Target className="w-4 h-4" aria-hidden="true" />
                    <span>Complete Visibility</span>
                  </motion.div>
                  <h2
                    id="traceability-heading"
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                  >
                    <span className="text-transparent bg-clip-text bg-blue-600">
                      Traceability
                    </span>
                  </h2>
                  <p className="text-slate-600 max-w-3xl mx-auto text-base sm:text-lg">
                    End-to-end visibility from production to analytics
                  </p>
                </div>

                {/* Hero Statement Box */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600 text-white text-center px-6 sm:px-8 py-6 sm:py-8 rounded-2xl shadow-xl mb-10 sm:mb-12 overflow-hidden border-2 border-white/20"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="relative z-10">
                    <Shield
                      className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 opacity-90"
                      aria-hidden="true"
                    />
                    <p className="text-base sm:text-lg leading-relaxed">
                      <strong className="font-semibold">Traceware</strong>{" "}
                      keeps a complete history of everything that the product
                      undergoes in the assembly process and reports the precise
                      details.
                    </p>
                  </div>
                </motion.div>

                {/* Four Pillars Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
                  {[
                    {
                      title: "Part Traceability",
                      icon: PackageSearch,
                      description:
                        "Tracks and records all parts and material used in the production, including components, consumables and housing. Details such as batch code, supplier code, date code are tracked and recorded for each Product ID.",
                      gradient: "from-blue-600 via-blue-500 to-indigo-500",
                    },
                    {
                      title: "Process Traceability",
                      icon: Activity,
                      description:
                        "Tracks and records all process parameters and settings such as voltage, current, torque, test results, defects against each product ID.",
                      gradient: "from-indigo-600 via-purple-500 to-indigo-500",
                    },
                    {
                      title: "Reports & Analytics",
                      icon: BarChart3,
                      description:
                        "The data will be stored in a SQL database for parsing and query. Quick reports can be generated by scanning a part with all the details of process and part.",
                      gradient: "from-cyan-600 via-blue-500 to-indigo-600",
                    },
                    {
                      title: "Legacy Systems",
                      icon: Cpu,
                      description:
                        "Micrologic Traceware can be effortlessly adapted to any existing legacy machines to provide complete visibility and important insights across older production systems.",
                      gradient: "from-emerald-600 via-teal-500 to-cyan-500",
                    },
                  ].map((pillar, index) => (
                    <motion.article
                      key={pillar.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      whileHover={{ y: -5 }}
                      className="group relative"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                        aria-hidden="true"
                      />

                      <div
                        className={`relative bg-gradient-to-br ${pillar.gradient} text-white rounded-2xl shadow-lg p-6 sm:p-8 h-full border border-white/20`}
                      >
                        <div
                          className="bg-white/20 backdrop-blur-sm w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-5 shadow-lg"
                          aria-hidden="true"
                        >
                          <pillar.icon
                            className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                            strokeWidth={2}
                          />
                        </div>

                        <h3 className="font-bold text-lg sm:text-xl mb-3">
                          {pillar.title}
                        </h3>

                        <p className="text-sm leading-relaxed text-white/95">
                          {pillar.description}
                        </p>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {/* Key Questions */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg"
                      aria-hidden="true"
                    >
                      <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-4">
                        Key Traceability Questions Answered
                      </h3>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none p-0 m-0">
                        {[
                          "Who produced the product?",
                          "When was it produced?",
                          "What parts were used?",
                          "Where did the parts come from?",
                          "What processes did it go through?",
                          "What were the test results?",
                        ].map((question, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2.5 rounded-lg text-sm font-medium text-blue-800 border border-blue-100"
                          >
                            <CheckCircle2
                              className="w-4 h-4 text-blue-600 flex-shrink-0"
                              aria-hidden="true"
                            />
                            <span>{question}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Error Proofing & Process Traceability Section */}
          <section
            aria-labelledby="error-proofing-heading"
            className="mb-16 sm:mb-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-6xl mx-auto">
                <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-sm p-6 sm:p-8 md:p-12 border border-slate-100 overflow-hidden">
                  <div
                    className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl -z-10"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl -z-10"
                    aria-hidden="true"
                  />

                  {/* Header */}
                  <div className="text-center mb-10 sm:mb-12">
                    <motion.div
                      className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-50 border border-cyan-100 rounded-full text-cyan-600 text-sm font-medium mb-4"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                    >
                      <Shield className="w-4 h-4" aria-hidden="true" />
                      <span>Quality Assurance</span>
                    </motion.div>

                    <h2
                      id="error-proofing-heading"
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                    >
                      Error Proofing &{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                        Process Traceability
                      </span>
                    </h2>

                    <p className="text-slate-600 max-w-3xl mx-auto text-base sm:text-lg">
                      <strong className="text-blue-600 font-semibold">
                        Micrologic Philosophy:
                      </strong>{" "}
                      Building quality and a reliable history into every product
                      produced in the assembly and test lines.
                    </p>
                  </div>

                  {/* Content */}
                  <div className="space-y-6 sm:space-y-8">
                    {/* Error Proofing */}
                    <motion.article
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-6 sm:p-8 shadow-sm border border-blue-100"
                    >
                      <div className="flex items-center gap-3 sm:gap-4 mb-5">
                        <div
                          className="bg-gradient-to-br from-blue-600 to-cyan-600 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shadow-lg"
                          aria-hidden="true"
                        >
                          <Shield
                            className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                            strokeWidth={2}
                          />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                          Error Proofing
                        </h3>
                      </div>

                      <p className="text-slate-600 mb-6 text-base sm:text-lg leading-relaxed">
                        Making it impossible (or obvious) to mix up or skip a
                        process. Preventing errors by design is the spirit of
                        error proofing — often implemented using{" "}
                        <strong className="font-bold text-blue-600">
                          poka-yoke
                        </strong>{" "}
                        (mistake-proofing).
                      </p>

                      <div className="grid sm:grid-cols-3 gap-4">
                        {[
                          {
                            title: "Prevention",
                            desc: "Design parts and fixtures so components only fit the right way.",
                            icon: Shield,
                          },
                          {
                            title: "Make Errors Visible",
                            desc: "Sensors and vision systems confirm correct parts or placement.",
                            icon: Eye,
                          },
                          {
                            title: "Fool-proof Tools",
                            desc: "Torque-controlled screwdrivers prevent over-torque.",
                            icon: CheckCircle2,
                          },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300"
                          >
                            <item.icon
                              className="w-6 h-6 text-blue-600 mb-3"
                              aria-hidden="true"
                            />
                            <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-2">
                              {item.title}
                            </h4>
                            <p className="text-sm text-slate-600 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.article>

                    {/* Process Traceability */}
                    <motion.article
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-white to-cyan-50/50 rounded-2xl p-6 sm:p-8 shadow-sm border border-cyan-100"
                    >
                      <div className="flex items-center gap-3 sm:gap-4 mb-5">
                        <div
                          className="bg-gradient-to-br from-cyan-600 to-blue-600 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shadow-lg"
                          aria-hidden="true"
                        >
                          <Activity
                            className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                            strokeWidth={2}
                          />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                          Process Traceability
                        </h3>
                      </div>

                      <p className="text-slate-600 mb-6 text-base sm:text-lg leading-relaxed">
                        <strong className="text-blue-600 font-bold">
                          Micrologic Traceware
                        </strong>{" "}
                        creates a detailed birth certificate and life history for
                        every electronic product. It records every step,
                        component, and parameter.
                      </p>

                      <ul className="grid sm:grid-cols-2 gap-4 list-none p-0 m-0">
                        {[
                          {
                            title: "Identifying Everything",
                            desc: "Unique IDs (serials, barcodes) for boards, components, batches",
                          },
                          {
                            title: "Recording Steps",
                            desc: "Machine, operator, timestamp, environmental conditions logged",
                          },
                          {
                            title: "Tracking Components",
                            desc: "Supplier and batch information for every part used",
                          },
                          {
                            title: "Capturing Test Results",
                            desc: "Link quality checks and test data to product's unique ID",
                          },
                        ].map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-3 bg-white rounded-xl p-4 shadow-sm border border-cyan-100 hover:shadow-md transition-all duration-300"
                          >
                            <CheckCircle2
                              className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <div>
                              <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-1">
                                {item.title}
                              </h4>
                              <p className="text-sm text-slate-600">
                                {item.desc}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </motion.article>

                    {/* Importance */}
                    <motion.article
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="relative bg-black rounded-2xl p-6 sm:p-8 shadow-xl text-white overflow-hidden border border-white/[0.08]"
                    >
                      <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-blue-600/20 via-cyan-600/10 to-transparent blur-3xl"
                        aria-hidden="true"
                      ></div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-3 sm:gap-4 mb-6">
                          <div
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                            style={{
                              background: `linear-gradient(135deg, rgba(34,211,238,0.2), rgba(34,211,238,0.05))`,
                              border: `1px solid rgba(34,211,238,0.4)`,
                            }}
                            aria-hidden="true"
                          >
                            <TrendingUp
                              className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400"
                              strokeWidth={2}
                            />
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold">
                            The Importance of Traceware
                          </h3>
                        </div>

                        <ul className="grid sm:grid-cols-2 gap-4 list-none p-0 m-0">
                          {[
                            {
                              title: "Quality Control",
                              desc: "Trace back defects to source — bad batch, machine failure, or operator issue",
                            },
                            {
                              title: "Regulatory Compliance",
                              desc: "Meet strict traceability requirements in regulated industries",
                            },
                            {
                              title: "Warranty & Recalls",
                              desc: "Identify exactly which products are affected to minimize scope and cost",
                            },
                            {
                              title: "Continuous Improvement",
                              desc: "Analyze trace data to find trends, bottlenecks, and optimization opportunities",
                            },
                          ].map((item, i) => (
                            <li
                              key={i}
                              className="flex gap-3 bg-white/[0.02] rounded-xl p-4 border border-white/[0.08] hover:border-white/[0.2] transition-colors"
                            >
                              <CheckCircle2
                                className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5"
                                strokeWidth={2}
                                aria-hidden="true"
                              />
                              <div>
                                <h4 className="font-bold text-base sm:text-lg mb-1">
                                  {item.title}
                                </h4>
                                <p className="text-sm text-slate-400">
                                  {item.desc}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.article>

                    {/* Power of Combining */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-blue-200/50"
                    >
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg mb-4">
                          <Zap className="w-4 h-4" aria-hidden="true" />
                          The Power of Combining
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 text-center">
                        Error Proofing + Traceware = Excellence
                      </h3>

                      <p className="text-slate-600 mb-6 text-center text-base sm:text-lg">
                        Together, they form a robust system for high-quality
                        electronic assembly
                      </p>

                      <ul className="flex flex-wrap justify-center gap-3 list-none p-0 m-0">
                        {[
                          "Error proofing reduces defects up front",
                          "Traceware provides detailed records for fast root cause analysis",
                          "Fewer defects & faster fixes",
                          "Better compliance & more reliable products",
                        ].map((benefit, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-blue-100 hover:shadow-md transition-all"
                          >
                            <CheckCircle2
                              className="w-4 h-4 text-emerald-600"
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                            <span className="font-medium text-slate-800 text-sm">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </div>

      {/* Other Solutions Section */}
      <aside
        aria-labelledby="other-solutions-heading"
        className="relative bg-white py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-16 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-emerald-50 via-cyan-50/50 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-slate-100 to-transparent rounded-full blur-3xl" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.03]"
          aria-hidden="true"
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
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-1.5 mb-6">
              <div
                className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"
                aria-hidden="true"
              />
              <span className="text-emerald-700 font-semibold text-sm tracking-wide">
                Beyond Traceability
              </span>
            </div>

            <h2
              id="other-solutions-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            >
              Solutions We{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  Deliver
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6C50 2 150 2 198 6"
                    stroke="url(#trace-underline)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="trace-underline"
                      x1="0"
                      y1="0"
                      x2="200"
                      y2="0"
                    >
                      <stop stopColor="#059669" />
                      <stop offset="1" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>

            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto mt-6 px-4">
              Comprehensive automation solutions spanning testing, assembly, and
              digital transformation — engineered for manufacturing excellence
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {otherSolutions.map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Link
                  href={solution.href}
                  className="block group"
                  aria-label={`Explore ${solution.name} — ${solution.description}`}
                  style={{ perspective: "1200px" }}
                >
                  {/* SR-only text for crawlers */}
                  <span className="sr-only">
                    {solution.name}: {solution.description}. Key capabilities:{" "}
                    {solution.highlights.join(", ")}.
                  </span>

                  <div
                    className="relative w-full h-[420px] sm:h-[460px] transition-transform duration-700 ease-out group-hover:[transform:rotateY(180deg)]"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* FRONT FACE */}
                    <div
                      className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-lg shadow-slate-200/50"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="relative h-44 sm:h-52 overflow-hidden">
                        <Image
                          src={solution.image}
                          alt={`${solution.name} — ${solution.description}`}
                          fill
                          loading="lazy"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={80}
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"
                          aria-hidden="true"
                        />
                      </div>

                      <div className="p-5 sm:p-7">
                        <div
                          className={`w-12 h-1.5 ${solution.accent} rounded-full mb-4 sm:mb-5`}
                          aria-hidden="true"
                        />
                        <p className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">
                          {solution.name}
                        </p>
                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                          {solution.description}
                        </p>

                        <div className="mt-4 sm:mt-6 flex items-center gap-2 text-emerald-600 font-semibold text-sm">
                          <span>Explore Solutions</span>
                          <ArrowRight
                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      <div
                        className="absolute top-4 right-4"
                        aria-hidden="true"
                      >
                        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors">
                          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                        </div>
                      </div>
                    </div>

                    {/* BACK FACE */}
                    <div
                      className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden [transform:rotateY(180deg)]"
                      style={{ backfaceVisibility: "hidden" }}
                      aria-hidden="true"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${solution.gradient}`}
                      />

                      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl" />

                      <div className="relative z-10 h-full flex flex-col p-6 sm:p-8">
                        <div className="flex-1">
                          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                            <Cpu className="w-6 h-6 text-white" />
                          </div>

                          <p className="text-xl sm:text-2xl font-bold text-white mb-4">
                            {solution.name}
                          </p>

                          <div className="space-y-3">
                            {solution.highlights.map((item, j) => (
                              <div key={j} className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                                  <CheckCircle2 className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-white/90 text-sm">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-auto pt-6 border-t border-white/20">
                          <div className="flex items-center justify-between">
                            <span className="text-white font-semibold">
                              View Details
                            </span>
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
      </aside>
    </main>
  );
}