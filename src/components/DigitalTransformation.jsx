// "use client";
// import React from "react";
// import Image from "next/image";
// import {
//   Database,
//   BarChart3,
//   Cloud,
//   Lock,
//   Zap,
//   Activity,
//   TrendingUp,
//   GitBranch,
//   LineChart,
//   Gauge,
//   AlertTriangle,
//   CheckCircle2,
//   ArrowRight,
//   Shield,
//   Server,
//   Eye,
//   Settings,
//   Target,
//   RefreshCw,
//   Radio,
//   Repeat,
//   Trash2,
//   CircleDot,
//   Thermometer,
//   GitCompare,
//   Layers,
// } from "lucide-react";
// import { motion } from "framer-motion";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
// };

// const DigitalTransformation = () => {
//   return (
//     <div className="bg-gradient-to-b from-slate-50 via-white to-blue-50">
//       {/* Hero Banner - Updated with Next.js Image */}
//       <motion.div
//         className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden"
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
//           {/* <Image
//             src="/assets/digitalimagefinal.webp"
//             alt="Digital Transformation"
//             fill
//             className="object-cover object-center"
//             priority
//           /> */}
//               <Image
//             src="/assets/digitalimagefinal.webp"
//            alt="Digital transformation Industry 4.0 manufacturing analytics platform dashboard"
//             fill
//             className="object-cover object-center"
//             priority
//           />
//         </motion.div>
//         <div className="absolute inset-0 bg-black/30"></div>

//         <div className="relative z-10 h-full flex items-center justify-center text-center">
//           <div className="container mx-auto px-6 lg:px-12">
//             <div className="max-w-3xl mx-auto">
//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.5 }}
//                 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-center"
//               >
//                 Digital Transformation
//               </motion.h1>
//               <p className="text-white/90 max-w-2xl mx-auto text-lg">
// Industry 4.0 digital transformation using FactEyes manufacturing analytics,
// real-time OEE monitoring, predictive maintenance, and AI-driven insights.
// </p>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Architecture Workflow */}
//       <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
//               FactEyes Architecture{" "}
//               <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
//                 and Capability
//               </span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               End-to-end data journey from collection to visualization
//             </p>
//           </motion.div>

//           {/* Architecture Diagram - Updated with Next.js Image */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={scaleIn}
//             className="mb-12"
//           >
//             <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
//               <Image
//                 src="/assets/digitalimgnew.webp"
//                 alt="FactEyes Data Architecture"
//                 width={1200}
//                 height={600}
//                 className="w-full h-auto rounded-lg"
//               />
//             </div>
//           </motion.div>

//           {/* Pipeline Steps */}
//       {/* Pipeline Steps */}
// <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch">
//   {[
//     {
//       icon: <Database className="w-5 h-10" />,
//       title: "Data Sources",
//       desc: "IoT sensors, ERP, MES, databases",
//       cardBg: "from-blue-50 to-blue-100",
//       borderColor: "border-blue-200",
//       iconColor: "text-blue-600",
//     },
//     {
//       icon: <GitBranch className="w-5 h-10" />,
//       title: "Ingestion",
//       desc: "Azure Data Factory ETL & Stream Analytics",
//       cardBg: "from-indigo-50 to-indigo-100",
//       borderColor: "border-indigo-200",
//       iconColor: "text-indigo-600",
//     },
//     {
//       icon: <Server className="w-5 h-10" />,
//       title: "Processing",
//       desc: "Databricks",
//       cardBg: "from-purple-50 to-purple-100",
//       borderColor: "border-purple-200",
//       iconColor: "text-purple-600",
//     },
//     {
//       icon: <Lock className="w-5 h-10" />,
//       title: "Storage",
//       desc: "Azure SQL, Secure data lake & warehouse",
//       cardBg: "from-pink-50 to-pink-100",
//       borderColor: "border-pink-200",
//       iconColor: "text-pink-600",
//     },
//     {
//       icon: <BarChart3 className="w-5 h-10" />,
//       title: "Visualization",
//       desc: "Power BI - FactEyes",
//       cardBg: "from-cyan-50 to-cyan-100",
//       borderColor: "border-cyan-200",
//       iconColor: "text-cyan-600",
//     },
//   ].map((step, idx) => (
//     <motion.div
//       key={idx}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: idx * 0.1 }}
//       className="relative"
//     >
//       <div
//         className={`bg-gradient-to-br ${step.cardBg} rounded-xl p-6 text-center border-2 ${step.borderColor} hover:shadow-lg transition-all h-full flex flex-col justify-center`}
//       >
//         <div
//           className={`flex justify-center items-center ${step.iconColor} mb-4`}
//         >
//           {step.icon}
//         </div>
//         <h4 className="font-bold text-base text-gray-900 mb-2">
//           {step.title}
//         </h4>
//         <p className="text-sm text-gray-600">{step.desc}</p>
//       </div>
//       {idx < 4 && (
//         <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 text-gray-400 z-10" />
//       )}
//     </motion.div>
//   ))}
// </div>
//         </div>
//       </section>

//       {/* Facteyes Analytics Platform */}
//       <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 text-white relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
//           <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
//         </div>

//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="text-center mb-16"
//           >
//             <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-6">
//               <Eye className="w-5 h-5 text-cyan-300" />
//               <span className="text-sm font-semibold bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
//                 Powered by FactEyes
//               </span>
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent pb-2">
//               Advanced Analytics & Reporting
//             </h2>
//             <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
//               Transform data into actionable insights with Power BI and FactEyes dashboards
//             </p>
//           </motion.div>

//           {/* Main Dashboard Showcase */}
//           <div className="grid lg:grid-cols-2 gap-8 mb-12">
//             {/* Power BI Integration */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={scaleIn}
//               className="group relative"
//             >
//               <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
//               <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all">
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
//                     <BarChart3 className="w-7 h-7 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-white">Power BI</h3>
//                     <p className="text-blue-200 text-sm">Interactive Dashboards</p>
//                   </div>
//                 </div>

//                 <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl mb-6 ring-4 ring-white/10">
//                   <Image
//                     src="/assets/bi.webp"
//                     alt="Power BI Dashboard"
//                     width={600}
//                     height={400}
//                     className="w-full h-auto"
//                   />
//                   <div className="absolute top-4 right-4">
//                     <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
//                       <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//                       LIVE
//                     </span>
//                   </div>
//                 </div>

//                 <div className="space-y-3">
//                   {[
//                     { icon: <RefreshCw className="w-4 h-4" />, text: "Real-time data refresh" },
//                     { icon: <Target className="w-4 h-4" />, text: "Custom KPI tracking" },
//                     { icon: <Layers className="w-4 h-4" />, text: "Multi-layered drill-down" },
//                     { icon: <CheckCircle2 className="w-4 h-4" />, text: "Mobile-responsive design" },
//                   ].map((item, idx) => (
//                     <div key={idx} className="flex items-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all">
//                       <div className="text-yellow-400">{item.icon}</div>
//                       <span className="text-blue-100 text-sm">{item.text}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//             {/* Facteyes Platform */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={scaleIn}
//               className="group relative"
//             >
//               <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
//               <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all">
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
//                     <Eye className="w-7 h-7 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-white">FactEyes</h3>
//                     <p className="text-blue-200 text-sm">Manufacturing Intelligence</p>
//                   </div>
//                 </div>

//                 <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl mb-6 ring-4 ring-white/10">
//                   <Image
//                     src="/assets/facteyes-dashboard.png"
//                     alt="FactEyes Dashboard"
//                     width={600}
//                     height={400}
//                     className="w-full h-auto"
//                   />
//                 </div>

//                 <div className="space-y-3">
//                   {[
//                     { icon: <Settings className="w-4 h-4" />, text: "Industry-specific modules" },
//                     { icon: <CircleDot className="w-4 h-4" />, text: "Customizable workflows" },
//                     { icon: <Cloud className="w-4 h-4" />, text: "Azure cloud integration" },
//                     { icon: <CheckCircle2 className="w-4 h-4" />, text: "Predictive analytics" },
//                   ].map((item, idx) => (
//                     <div key={idx} className="flex items-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all">
//                       <div className="text-cyan-400">{item.icon}</div>
//                       <span className="text-blue-100 text-sm">{item.text}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Integration Benefits */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="grid md:grid-cols-4 gap-6"
//           >
//             {[
//               {
//                 icon: <Zap className="w-8 h-8" />,
//                 title: "Instant Insights",
//                 desc: "Sub-second query performance",
//                 gradient: "from-yellow-400 to-orange-500",
//               },
//               {
//                 icon: <Shield className="w-8 h-8" />,
//                 title: "Secure Access",
//                 desc: "Role-based permissions",
//                 gradient: "from-green-400 to-emerald-500",
//               },
//               {
//                 icon: <Database className="w-8 h-8" />,
//                 title: "Unlimited Scale",
//                 desc: "Cloud-native architecture",
//                 gradient: "from-blue-400 to-indigo-500",
//               },
//               {
//                 icon: <TrendingUp className="w-8 h-8" />,
//                 title: "Predictive AI",
//                 desc: "Machine learning insights",
//                 gradient: "from-purple-400 to-pink-500",
//               },
//             ].map((benefit, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all text-center"
//               >
//                 <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
//                   {benefit.icon}
//                 </div>
//                 <h4 className="text-base font-bold text-white mb-2">{benefit.title}</h4>
//                 <p className="text-sm text-blue-200">{benefit.desc}</p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Comprehensive Analytics Suite */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Comprehensive Analytics Suite</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Industry-standard metrics and custom analytics tailored to your manufacturing needs
//             </p>
//           </motion.div>

//           {/* Primary Analytics - With Images */}
//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             {/* OEE Dashboard */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={scaleIn}
//               className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all flex flex-col"
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
//                   <Gauge className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">OEE Dashboard</h3>
//               </div>
//               <p className="text-base text-gray-600 mb-6 leading-relaxed min-h-[72px]">
//                 Overall Equipment Effectiveness tracking with availability, performance, and quality metrics
//               </p>
//               <div className="bg-white rounded-xl overflow-hidden shadow-md mb-6 h-48 flex items-center justify-center">
//                 <Image
//                   src="/assets/oee-dashboard.png"
//                   alt="OEE Dashboard"
//                   width={400}
//                   height={300}
//                   className="max-h-full max-w-full object-contain"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <div className="flex items-center gap-2 text-sm">
//                   <CheckCircle2 className="w-4 h-4 text-green-600" />
//                   <span className="text-gray-700">Real-time OEE calculation</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm">
//                   <CheckCircle2 className="w-4 h-4 text-green-600" />
//                   <span className="text-gray-700">Downtime analysis</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm">
//                   <CheckCircle2 className="w-4 h-4 text-green-600" />
//                   <span className="text-gray-700">Production efficiency trends</span>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Statistical Process Control */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={scaleIn}
//               className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
//                   <LineChart className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">SPC Analysis</h3>
//               </div>
//               <p className="text-base text-gray-600 mb-6 leading-relaxed min-h-[72px]">
//                 Statistical Process Control with Cp, Cpk, Cg, and Cgk indices for quality management
//               </p>

//               <div className="bg-white rounded-xl overflow-hidden shadow-md mb-6 h-48 flex items-center justify-center">
//                 <Image
//                   src="/assets/cpk-analysis.png"
//                   alt="CPK Analysis"
//                   width={400}
//                   height={300}
//                   className="max-h-full max-w-full object-contain"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <div className="flex items-center gap-2 text-sm">
//                   <CheckCircle2 className="w-4 h-4 text-blue-600" />
//                   <span className="text-gray-700">Cp/Cpk capability analysis</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm">
//                   <CheckCircle2 className="w-4 h-4 text-blue-600" />
//                   <span className="text-gray-700">Cg/Cgk gauge studies</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm">
//                   <CheckCircle2 className="w-4 h-4 text-blue-600" />
//                   <span className="text-gray-700">Control chart monitoring</span>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Bottleneck Analysis */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={scaleIn}
//               className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
//                   <AlertTriangle className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Bottleneck Analysis</h3>
//               </div>
//               <p className="text-base text-gray-600 mb-6 leading-relaxed min-h-[72px]">
//                 Identify production constraints and optimize throughput with AI-powered bottleneck detection
//               </p>

//               <div className="bg-white rounded-xl overflow-hidden shadow-md mb-6 h-48 flex items-center justify-center">
//                 <Image
//                   src="/assets/bottleneck-analysis.png"
//                   alt="Bottleneck Analysis"
//                   width={400}
//                   height={300}
//                   className="max-h-full max-w-full object-contain"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <div className="flex items-center gap-2 text-sm">
//                   <CheckCircle2 className="w-4 h-4 text-orange-600" />
//                   <span className="text-gray-700">Constraint identification</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm">
//                   <CheckCircle2 className="w-4 h-4 text-orange-600" />
//                   <span className="text-gray-700">Throughput optimization</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm">
//                   <CheckCircle2 className="w-4 h-4 text-orange-600" />
//                   <span className="text-gray-700">Predictive maintenance alerts</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Additional Analytics Features */}
// {/* Additional Analytics Features */}
// <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//   {[
//     {
//       icon: Repeat,
//       title: "EOL Repeatability",
//       desc: "End-of-line test repeatability analysis for consistent quality validation",
//       features: ["Test-retest correlation", "Measurement variability", "Precision tracking"],
//       cardBg: "from-violet-50 to-violet-50",
//       borderColor: "border-violet-100 hover:border-violet-300",
//       iconBg: "from-violet-500 to-violet-600",
//       dotColor: "bg-violet-500",
//     },
//     {
//       icon: Trash2,
//       title: "Defect & Scrap",
//       desc: "Comprehensive defect tracking and scrap reduction analytics",
//       features: ["Pareto analysis by defect type", "Scrap cost tracking", "Root cause correlation"],
//       cardBg: "from-rose-50 to-rose-50",
//       borderColor: "border-rose-100 hover:border-rose-300",
//       iconBg: "from-rose-500 to-rose-600",
//       dotColor: "bg-rose-500",
//     },
//     {
//       icon: Radio,
//       title: "Condition Monitoring",
//       desc: "Real-time sensor-based equipment health monitoring",
//       features: ["Vibration analysis", "Temperature monitoring", "Predictive maintenance"],
//       cardBg: "from-cyan-50 to-cyan-50",
//       borderColor: "border-cyan-100 hover:border-cyan-300",
//       iconBg: "from-cyan-500 to-cyan-600",
//       dotColor: "bg-cyan-500",
//     },
//     {
//       icon: GitCompare,
//       title: "Gauge R&R",
//       desc: "Measurement system analysis for repeatability and reproducibility",
//       features: ["Operator variation study", "Equipment calibration", "MSA compliance"],
//       cardBg: "from-amber-50 to-amber-50",
//       borderColor: "border-amber-100 hover:border-amber-300",
//       iconBg: "from-amber-500 to-amber-600",
//       dotColor: "bg-amber-500",
//     },
//     {
//       icon: Target,
//       title: "First Pass Yield",
//       desc: "Track production quality at first attempt without rework",
//       features: ["Station-by-station FPY", "Trend analysis", "Quality improvement tracking"],
//       cardBg: "from-emerald-50 to-emerald-50",
//       borderColor: "border-emerald-100 hover:border-emerald-300",
//       iconBg: "from-emerald-500 to-emerald-600",
//       dotColor: "bg-emerald-500",
//     },
//     {
//       icon: Activity,
//       title: "Cycle Time",
//       desc: "Detailed cycle time monitoring and optimization",
//       features: ["Process step timing", "Takt time comparison", "Efficiency optimization"],
//       cardBg: "from-sky-50 to-sky-50",
//       borderColor: "border-sky-100 hover:border-sky-300",
//       iconBg: "from-sky-500 to-sky-600",
//       dotColor: "bg-sky-500",
//     },
//     {
//       icon: Zap,
//       title: "Energy Analytics",
//       desc: "Monitor and optimize energy consumption patterns",
//       features: ["Real-time power monitoring", "Cost per unit analysis", "Sustainability metrics"],
//       cardBg: "from-lime-50 to-lime-50",
//       borderColor: "border-lime-100 hover:border-lime-300",
//       iconBg: "from-lime-500 to-lime-600",
//       dotColor: "bg-lime-500",
//     },
//     {
//       icon: Layers,
//       title: "Inventory & WIP",
//       desc: "Work-in-progress and inventory level optimization",
//       features: ["Real-time WIP tracking", "Buffer optimization", "Inventory turnover ratio"],
//       cardBg: "from-indigo-50 to-indigo-50",
//       borderColor: "border-indigo-100 hover:border-indigo-300",
//       iconBg: "from-indigo-500 to-indigo-600",
//       dotColor: "bg-indigo-500",
//     },
//   ].map((item, idx) => {
//     const IconComponent = item.icon;
//     return (
//       <motion.div
//         key={idx}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={scaleIn}
//         className={`group bg-gradient-to-br ${item.cardBg} rounded-xl p-6 border-2 ${item.borderColor} hover:shadow-lg transition-all`}
//       >
//         <div
//           className={`w-14 h-14 bg-gradient-to-br ${item.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
//         >
//           <IconComponent className="w-7 h-7 text-white" />
//         </div>
//         <h3 className="text-base font-bold text-gray-900 mb-2">
//           {item.title}
//         </h3>
//         <p className="text-sm text-gray-600 mb-4 leading-relaxed">
//           {item.desc}
//         </p>
//         <ul className="space-y-2">
//           {item.features.map((feature, fIdx) => (
//             <li
//               key={fIdx}
//               className="flex items-start gap-2 text-xs text-gray-700"
//             >
//               <div
//                 className={`w-1.5 h-1.5 ${item.dotColor} rounded-full mt-1.5 flex-shrink-0`}
//               ></div>
//               <span>{feature}</span>
//             </li>
//           ))}
//         </ul>
//       </motion.div>
//     );
//   })}
// </div>
//         </div>
//       </section>

//       {/* Live Data Analytics */}
//       <section className="py-20 bg-gradient-to-b from-slate-50 to-blue-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//             >
//               <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2 mb-6">
//                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                 <span className="text-sm font-semibold">Live Data</span>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Real-Time Analytics Engine</h2>
//               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                 Monitor your production floor with millisecond-level data updates. Our live analytics engine processes streaming data from IoT sensors,
//                 machines, and quality systems to deliver instant insights.
//               </p>

//               <div className="space-y-4">
//                 {[
//                   {
//                     icon: <Activity />,
//                     title: "Sub-second latency",
//                     desc: "Real-time data streaming with Azure",
//                   },
//                   {
//                     icon: <TrendingUp />,
//                     title: "Predictive insights",
//                     desc: "AI-powered trend forecasting",
//                   },
//                   {
//                     icon: <Zap />,
//                     title: "Instant alerts",
//                     desc: "Automated anomaly detection",
//                   },
//                   {
//                     icon: <Thermometer />,
//                     title: "Sensor integration",
//                     desc: "IoT device monitoring",
//                   },
//                 ].map((feature, idx) => (
//                   <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
//                     <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">{feature.icon}</div>
//                     <div>
//                       <h4 className="font-semibold text-base text-gray-900 mb-1">{feature.title}</h4>
//                       <p className="text-sm text-gray-600">{feature.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={scaleIn}
//               className="relative"
//             >
//               <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
//               <div className="relative bg-white rounded-2xl shadow-2xl p-6">
//                 <Image
//                   src="/assets/liveproduction.png"
//                   alt="Live Analytics Dashboard"
//                   width={600}
//                   height={400}
//                   className="w-full h-auto rounded-lg"
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DigitalTransformation;
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Database,
  BarChart3,
  Cloud,
  Lock,
  Zap,
  Activity,
  TrendingUp,
  GitBranch,
  LineChart,
  Gauge,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Shield,
  Server,
  Eye,
  Settings,
  Target,
  RefreshCw,
  Radio,
  Repeat,
  Trash2,
  CircleDot,
  Thermometer,
  GitCompare,
  Layers,
  Cpu,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

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
    name: "Traceability",
    href: "/solutions/traceability",
    image: "/assets/scanning.webp",
    gradient: "from-purple-600 to-purple-800",
    accent: "bg-purple-500",
    description:
      "End-to-end traceability solutions with laser marking, barcode/QR scanning, and real-time data capture for complete production genealogy.",
    highlights: [
      "Laser & Barcode Marking",
      "Component-Level Tracking",
      "Production Genealogy",
      "Regulatory Compliance",
    ],
  },
];

const DigitalTransformation = () => {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Hero Banner */}
      <motion.header
        className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden"
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
            src="/assets/digitalimagefinal.webp"
            alt="FactEyes Industry 4.0 digital transformation platform showing real-time manufacturing analytics dashboard with OEE monitoring and predictive maintenance insights"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>

        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-center"
              >
                Digital Transformation for Smart Manufacturing
              </motion.h1>
              <p className="text-white/90 max-w-2xl mx-auto text-base sm:text-lg">
                Accelerate your <strong className="font-semibold">Industry 4.0</strong> journey
                with <strong className="font-semibold">FactEyes</strong> — a cloud-based
                manufacturing analytics platform delivering{" "}
                <strong className="font-semibold">real-time OEE monitoring</strong>,{" "}
                <strong className="font-semibold">statistical process control</strong>,{" "}
                <strong className="font-semibold">predictive maintenance</strong>, and{" "}
                <strong className="font-semibold">AI-driven production insights</strong>{" "}
                powered by Azure and Power BI.
              </p>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6"
      >
        <ol className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500 flex-wrap">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-900 font-medium" aria-current="page">
            Digital Transformation
          </li>
        </ol>
      </nav>

      {/* Architecture Workflow */}
      <section
        className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white"
        aria-labelledby="architecture-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10 sm:mb-16"
          >
            <h2
              id="architecture-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              FactEyes Architecture{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                and Capability
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end manufacturing data pipeline — from IoT sensor
              collection through Azure cloud processing to real-time Power BI
              visualization and actionable insights.
            </p>
          </motion.div>

          {/* Architecture Diagram */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="mb-10 sm:mb-12"
          >
            <figure className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-gray-100">
              <Image
                src="/assets/digitalimgnew.webp"
                alt="FactEyes data architecture diagram showing IoT data sources, Azure Data Factory ingestion, Databricks processing, Azure SQL storage, and Power BI visualization layers"
                width={1200}
                height={600}
                loading="lazy"
                className="w-full h-auto rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                quality={85}
              />
              <figcaption className="sr-only">
                FactEyes platform architecture: Data flows from IoT sensors and
                ERP systems through Azure Data Factory for ingestion, Databricks
                for processing, Azure SQL for storage, and Power BI for
                visualization.
              </figcaption>
            </figure>
          </motion.div>

          {/* Pipeline Steps */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-stretch"
            role="list"
            aria-label="Data pipeline steps"
          >
            {[
              {
                icon: <Database className="w-5 h-10" aria-hidden="true" />,
                title: "Data Sources",
                desc: "IoT sensors, ERP, MES, databases",
                cardBg: "from-blue-50 to-blue-100",
                borderColor: "border-blue-200",
                iconColor: "text-blue-600",
              },
              {
                icon: <GitBranch className="w-5 h-10" aria-hidden="true" />,
                title: "Ingestion",
                desc: "Azure Data Factory ETL & Stream Analytics",
                cardBg: "from-indigo-50 to-indigo-100",
                borderColor: "border-indigo-200",
                iconColor: "text-indigo-600",
              },
              {
                icon: <Server className="w-5 h-10" aria-hidden="true" />,
                title: "Processing",
                desc: "Databricks for large-scale data transformation",
                cardBg: "from-purple-50 to-purple-100",
                borderColor: "border-purple-200",
                iconColor: "text-purple-600",
              },
              {
                icon: <Lock className="w-5 h-10" aria-hidden="true" />,
                title: "Storage",
                desc: "Azure SQL, secure data lake & warehouse",
                cardBg: "from-pink-50 to-pink-100",
                borderColor: "border-pink-200",
                iconColor: "text-pink-600",
              },
              {
                icon: <BarChart3 className="w-5 h-10" aria-hidden="true" />,
                title: "Visualization",
                desc: "Power BI dashboards via FactEyes platform",
                cardBg: "from-cyan-50 to-cyan-100",
                borderColor: "border-cyan-200",
                iconColor: "text-cyan-600",
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
                role="listitem"
              >
                <div
                  className={`bg-gradient-to-br ${step.cardBg} rounded-xl p-4 sm:p-6 text-center border-2 ${step.borderColor} hover:shadow-lg transition-all h-full flex flex-col justify-center`}
                >
                  <div
                    className={`flex justify-center items-center ${step.iconColor} mb-3 sm:mb-4`}
                    aria-hidden="true"
                  >
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-1 sm:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">{step.desc}</p>
                </div>
                {idx < 4 && (
                  <ArrowRight
                    className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 text-gray-400 z-10"
                    aria-hidden="true"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FactEyes Analytics Platform */}
      <section
        className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 text-white relative overflow-hidden"
        aria-labelledby="analytics-heading"
      >
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6">
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                Powered by FactEyes
              </span>
            </div>
            <h2
              id="analytics-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent pb-2"
            >
              Advanced Manufacturing Analytics & Reporting
            </h2>
            <p className="text-base sm:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Transform raw production data into actionable manufacturing
              insights with integrated Power BI dashboards and the FactEyes
              intelligence platform.
            </p>
          </motion.div>

          {/* Main Dashboard Showcase */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
            {/* Power BI Integration */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="group relative"
            >
              <div
                className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"
                aria-hidden="true"
              ></div>
              <article className="relative bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center gap-3 sm:gap-4 mb-6">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
                    aria-hidden="true"
                  >
                    <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Power BI Manufacturing Dashboards
                    </h3>
                    <p className="text-blue-200 text-xs sm:text-sm">
                      Interactive Real-Time Dashboards
                    </p>
                  </div>
                </div>

                <figure className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl mb-6 ring-4 ring-white/10">
                  <Image
                    src="/assets/bi.webp"
                    alt="Power BI manufacturing dashboard showing production KPIs, OEE metrics, and real-time machine performance data"
                    width={600}
                    height={400}
                    loading="lazy"
                    className="w-full h-auto"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={80}
                  />
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <span className="bg-green-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <div
                        className="w-2 h-2 bg-white rounded-full animate-pulse"
                        aria-hidden="true"
                      ></div>
                      LIVE
                    </span>
                  </div>
                </figure>

                <ul className="space-y-2 sm:space-y-3" aria-label="Power BI features">
                  {[
                    {
                      icon: <RefreshCw className="w-4 h-4" />,
                      text: "Real-time data refresh from production floor",
                    },
                    {
                      icon: <Target className="w-4 h-4" />,
                      text: "Custom manufacturing KPI tracking",
                    },
                    {
                      icon: <Layers className="w-4 h-4" />,
                      text: "Multi-layered drill-down analysis",
                    },
                    {
                      icon: <CheckCircle2 className="w-4 h-4" />,
                      text: "Mobile-responsive design for shop floor",
                    },
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all"
                    >
                      <span className="text-yellow-400" aria-hidden="true">
                        {item.icon}
                      </span>
                      <span className="text-blue-100 text-xs sm:text-sm">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </motion.div>

            {/* FactEyes Platform */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="group relative"
            >
              <div
                className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"
                aria-hidden="true"
              ></div>
              <article className="relative bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center gap-3 sm:gap-4 mb-6">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
                    aria-hidden="true"
                  >
                    <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      FactEyes Manufacturing Intelligence
                    </h3>
                    <p className="text-blue-200 text-xs sm:text-sm">
                      AI-Powered Production Analytics
                    </p>
                  </div>
                </div>

                <figure className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl mb-6 ring-4 ring-white/10">
                  <Image
                    src="/assets/facteyes-dashboard.png"
                    alt="FactEyes manufacturing intelligence dashboard displaying equipment health, quality metrics, production efficiency, and predictive maintenance alerts"
                    width={600}
                    height={400}
                    loading="lazy"
                    className="w-full h-auto"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={80}
                  />
                </figure>

                <ul className="space-y-2 sm:space-y-3" aria-label="FactEyes features">
                  {[
                    {
                      icon: <Settings className="w-4 h-4" />,
                      text: "Industry-specific analytics modules",
                    },
                    {
                      icon: <CircleDot className="w-4 h-4" />,
                      text: "Customizable manufacturing workflows",
                    },
                    {
                      icon: <Cloud className="w-4 h-4" />,
                      text: "Native Azure cloud integration",
                    },
                    {
                      icon: <CheckCircle2 className="w-4 h-4" />,
                      text: "AI-powered predictive analytics",
                    },
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all"
                    >
                      <span className="text-cyan-400" aria-hidden="true">
                        {item.icon}
                      </span>
                      <span className="text-blue-100 text-xs sm:text-sm">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </motion.div>
          </div>

          {/* Integration Benefits */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {[
              {
                icon: <Zap className="w-7 h-7 sm:w-8 sm:h-8" />,
                title: "Instant Insights",
                desc: "Sub-second query performance for production data",
                gradient: "from-yellow-400 to-orange-500",
              },
              {
                icon: <Shield className="w-7 h-7 sm:w-8 sm:h-8" />,
                title: "Secure Access",
                desc: "Role-based permissions with enterprise security",
                gradient: "from-green-400 to-emerald-500",
              },
              {
                icon: <Database className="w-7 h-7 sm:w-8 sm:h-8" />,
                title: "Unlimited Scale",
                desc: "Cloud-native architecture on Azure platform",
                gradient: "from-blue-400 to-indigo-500",
              },
              {
                icon: <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8" />,
                title: "Predictive AI",
                desc: "Machine learning for maintenance and quality",
                gradient: "from-purple-400 to-pink-500",
              },
            ].map((benefit, idx) => (
              <article
                key={idx}
                className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all text-center"
              >
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br ${benefit.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg`}
                  aria-hidden="true"
                >
                  {benefit.icon}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-2">
                  {benefit.title}
                </h4>
                <p className="text-xs sm:text-sm text-blue-200">
                  {benefit.desc}
                </p>
              </article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Analytics Suite */}
      <section
        className="py-12 sm:py-16 md:py-20 bg-white"
        aria-labelledby="analytics-suite-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10 sm:mb-16"
          >
            <h2
              id="analytics-suite-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Comprehensive Manufacturing Analytics Suite
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Industry-standard metrics including OEE, SPC, Cpk, gauge R&R, and
              custom analytics tailored to your manufacturing processes and
              quality requirements.
            </p>
          </motion.div>

          {/* Primary Analytics */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
            {/* OEE Dashboard */}
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-xl flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Gauge className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  OEE Dashboard
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed min-h-[60px] sm:min-h-[72px]">
                Overall Equipment Effectiveness tracking with real-time
                availability, performance, and quality metrics for continuous
                production optimization.
              </p>
              <figure className="bg-white rounded-xl overflow-hidden shadow-md mb-6 h-40 sm:h-48 flex items-center justify-center">
                <Image
                  src="/assets/oee-dashboard.png"
                  alt="OEE dashboard showing overall equipment effectiveness with availability, performance, and quality metrics across production lines"
                  width={400}
                  height={300}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={80}
                />
              </figure>
              <ul className="space-y-2">
                {[
                  "Real-time OEE calculation across all equipment",
                  "Downtime categorization and root cause analysis",
                  "Production efficiency trends and benchmarking",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <CheckCircle2
                      className="w-4 h-4 text-green-600 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>

            {/* SPC Analysis */}
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-xl flex items-center justify-center"
                  aria-hidden="true"
                >
                  <LineChart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  SPC Analysis
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed min-h-[60px] sm:min-h-[72px]">
                Statistical Process Control with Cp, Cpk, Cg, and Cgk process
                capability indices for comprehensive quality management and
                compliance.
              </p>
              <figure className="bg-white rounded-xl overflow-hidden shadow-md mb-6 h-40 sm:h-48 flex items-center justify-center">
                <Image
                  src="/assets/cpk-analysis.png"
                  alt="SPC analysis chart showing Cpk process capability index with control limits, normal distribution curve, and specification boundaries"
                  width={400}
                  height={300}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={80}
                />
              </figure>
              <ul className="space-y-2">
                {[
                  "Cp/Cpk process capability analysis",
                  "Cg/Cgk gauge capability studies",
                  "X-bar R and control chart monitoring",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <CheckCircle2
                      className="w-4 h-4 text-blue-600 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>

            {/* Bottleneck Analysis */}
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-xl flex items-center justify-center"
                  aria-hidden="true"
                >
                  <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Bottleneck Analysis
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed min-h-[60px] sm:min-h-[72px]">
                Identify production constraints and optimize throughput with
                AI-powered bottleneck detection and capacity planning tools.
              </p>
              <figure className="bg-white rounded-xl overflow-hidden shadow-md mb-6 h-40 sm:h-48 flex items-center justify-center">
                <Image
                  src="/assets/bottleneck-analysis.png"
                  alt="Production bottleneck analysis visualization showing constraint identification across manufacturing stations with throughput optimization recommendations"
                  width={400}
                  height={300}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={80}
                />
              </figure>
              <ul className="space-y-2">
                {[
                  "Automated constraint identification",
                  "Throughput optimization recommendations",
                  "Predictive maintenance alerts integration",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <CheckCircle2
                      className="w-4 h-4 text-orange-600 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>

          {/* Additional Analytics */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Repeat,
                title: "EOL Repeatability",
                desc: "End-of-line test repeatability analysis ensuring consistent quality validation across production runs",
                features: [
                  "Test-retest correlation analysis",
                  "Measurement variability tracking",
                  "Precision and accuracy monitoring",
                ],
                cardBg: "from-violet-50 to-violet-50",
                borderColor: "border-violet-100 hover:border-violet-300",
                iconBg: "from-violet-500 to-violet-600",
                dotColor: "bg-violet-500",
              },
              {
                icon: Trash2,
                title: "Defect & Scrap Analytics",
                desc: "Comprehensive defect tracking and scrap reduction analytics for cost optimization",
                features: [
                  "Pareto analysis by defect type",
                  "Scrap cost tracking per unit",
                  "Root cause correlation mapping",
                ],
                cardBg: "from-rose-50 to-rose-50",
                borderColor: "border-rose-100 hover:border-rose-300",
                iconBg: "from-rose-500 to-rose-600",
                dotColor: "bg-rose-500",
              },
              {
                icon: Radio,
                title: "Condition Monitoring",
                desc: "Real-time IoT sensor-based equipment health monitoring for predictive maintenance",
                features: [
                  "Vibration analysis patterns",
                  "Temperature anomaly monitoring",
                  "Predictive failure detection",
                ],
                cardBg: "from-cyan-50 to-cyan-50",
                borderColor: "border-cyan-100 hover:border-cyan-300",
                iconBg: "from-cyan-500 to-cyan-600",
                dotColor: "bg-cyan-500",
              },
              {
                icon: GitCompare,
                title: "Gauge R&R Studies",
                desc: "Measurement system analysis for repeatability and reproducibility compliance",
                features: [
                  "Operator variation study",
                  "Equipment calibration tracking",
                  "MSA compliance reporting",
                ],
                cardBg: "from-amber-50 to-amber-50",
                borderColor: "border-amber-100 hover:border-amber-300",
                iconBg: "from-amber-500 to-amber-600",
                dotColor: "bg-amber-500",
              },
              {
                icon: Target,
                title: "First Pass Yield",
                desc: "Track production quality at first attempt to minimize rework and improve efficiency",
                features: [
                  "Station-by-station FPY analysis",
                  "Yield trend visualization",
                  "Quality improvement tracking",
                ],
                cardBg: "from-emerald-50 to-emerald-50",
                borderColor: "border-emerald-100 hover:border-emerald-300",
                iconBg: "from-emerald-500 to-emerald-600",
                dotColor: "bg-emerald-500",
              },
              {
                icon: Activity,
                title: "Cycle Time Analysis",
                desc: "Detailed cycle time monitoring against takt time for production optimization",
                features: [
                  "Process step timing breakdown",
                  "Takt time comparison analysis",
                  "Efficiency gap identification",
                ],
                cardBg: "from-sky-50 to-sky-50",
                borderColor: "border-sky-100 hover:border-sky-300",
                iconBg: "from-sky-500 to-sky-600",
                dotColor: "bg-sky-500",
              },
              {
                icon: Zap,
                title: "Energy Analytics",
                desc: "Monitor and optimize energy consumption patterns for sustainable manufacturing",
                features: [
                  "Real-time power consumption",
                  "Cost per unit energy analysis",
                  "Sustainability metrics dashboard",
                ],
                cardBg: "from-lime-50 to-lime-50",
                borderColor: "border-lime-100 hover:border-lime-300",
                iconBg: "from-lime-500 to-lime-600",
                dotColor: "bg-lime-500",
              },
              {
                icon: Layers,
                title: "Inventory & WIP Tracking",
                desc: "Work-in-progress and inventory level optimization for lean manufacturing",
                features: [
                  "Real-time WIP visualization",
                  "Buffer stock optimization",
                  "Inventory turnover ratio",
                ],
                cardBg: "from-indigo-50 to-indigo-50",
                borderColor: "border-indigo-100 hover:border-indigo-300",
                iconBg: "from-indigo-500 to-indigo-600",
                dotColor: "bg-indigo-500",
              },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.article
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  className={`group bg-gradient-to-br ${item.cardBg} rounded-xl p-4 sm:p-6 border-2 ${item.borderColor} hover:shadow-lg transition-all`}
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${item.iconBg} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}
                    aria-hidden="true"
                  >
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    {item.desc}
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {item.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2 text-xs text-gray-700"
                      >
                        <div
                          className={`w-1.5 h-1.5 ${item.dotColor} rounded-full mt-1.5 flex-shrink-0`}
                          aria-hidden="true"
                        ></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Live Data Analytics */}
      <section
        className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-50 to-blue-50"
        aria-labelledby="live-analytics-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2 mb-6">
                <div
                  className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                  aria-hidden="true"
                ></div>
                <span className="text-sm font-semibold">
                  Live Data Streaming
                </span>
              </div>
              <h2
                id="live-analytics-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Real-Time Manufacturing Analytics Engine
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Monitor your production floor with millisecond-level data
                updates. Our live analytics engine processes streaming data from
                IoT sensors, PLCs, machines, and quality systems to deliver
                instant actionable insights for operators and managers.
              </p>

              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    icon: <Activity aria-hidden="true" />,
                    title: "Sub-second data latency",
                    desc: "Real-time data streaming via Azure Event Hubs and Stream Analytics",
                  },
                  {
                    icon: <TrendingUp aria-hidden="true" />,
                    title: "Predictive trend insights",
                    desc: "AI-powered production trend forecasting and anomaly prediction",
                  },
                  {
                    icon: <Zap aria-hidden="true" />,
                    title: "Instant alert notifications",
                    desc: "Automated anomaly detection with configurable threshold alerts",
                  },
                  {
                    icon: <Thermometer aria-hidden="true" />,
                    title: "IoT sensor integration",
                    desc: "Direct integration with temperature, vibration, pressure, and flow sensors",
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <div
                      className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0"
                      aria-hidden="true"
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="relative"
            >
              <div
                className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"
                aria-hidden="true"
              ></div>
              <figure className="relative bg-white rounded-2xl shadow-2xl p-4 sm:p-6">
                <Image
                  src="/assets/liveproduction.png"
                  alt="Real-time live production monitoring dashboard showing active machine status, production counts, cycle times, and quality alerts across manufacturing lines"
                  width={600}
                  height={400}
                  loading="lazy"
                  className="w-full h-auto rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                />
                <figcaption className="sr-only">
                  FactEyes live production monitoring interface with real-time
                  machine data, production KPIs, and automated alert system.
                </figcaption>
              </figure>
            </motion.div>
          </div>
        </div>
      </section>

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
                Beyond Digital Transformation
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
                    stroke="url(#digital-underline)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="digital-underline"
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
              traceability — engineered for manufacturing excellence
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

                      <div
                        className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"
                      />
                      <div
                        className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl"
                      />

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
};

export default DigitalTransformation;
// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   Database,
//   BarChart3,
//   Cloud,
//   Lock,
//   Zap,
//   Activity,
//   TrendingUp,
//   GitBranch,
//   LineChart,
//   Gauge,
//   AlertTriangle,
//   CheckCircle2,
//   ArrowRight,
//   Shield,
//   Server,
//   Eye,
//   Settings,
//   Target,
//   RefreshCw,
//   Radio,
//   Repeat,
//   Trash2,
//   CircleDot,
//   Thermometer,
//   GitCompare,
//   Layers,
// } from "lucide-react";
// import { motion } from "framer-motion";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
// };

// const DigitalTransformation = () => {
//   return (
//     <main className="bg-gradient-to-b from-slate-50 via-white to-blue-50">
//       {/* Hero Banner */}
//       <motion.header
//         className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.2 }}
//         role="banner"
//       >
//         <motion.div
//           className="absolute inset-0"
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         >
//           <Image
//             src="/assets/digitalimagefinal.webp"
//             alt="FactEyes Industry 4.0 digital transformation platform showing real-time manufacturing analytics dashboard with OEE monitoring and predictive maintenance insights"
//             fill
//             className="object-cover object-center"
//             priority
//             sizes="100vw"
//           />
//         </motion.div>
//         <div className="absolute inset-0 bg-black/30"></div>

//         <div className="relative z-10 h-full flex items-center justify-center text-center">
//           <div className="container mx-auto px-6 lg:px-12">
//             <div className="max-w-3xl mx-auto">
//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.5 }}
//                 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-center"
//               >
//                 Digital Transformation for Smart Manufacturing
//               </motion.h1>
//               <p className="text-white/90 max-w-2xl mx-auto text-lg">
//                 Accelerate your Industry 4.0 journey with FactEyes — a
//                 cloud-based manufacturing analytics platform delivering
//                 real-time OEE monitoring, statistical process control,
//                 predictive maintenance, and AI-driven production insights
//                 powered by Azure and Power BI.
//               </p>
//             </div>
//           </div>
//         </div>
//       </motion.header>

//       {/* Architecture Workflow */}
//       <section
//         className="py-20 bg-gradient-to-b from-slate-50 to-white"
//         aria-labelledby="architecture-heading"
//       >
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="text-center mb-16"
//           >
//             <h2
//               id="architecture-heading"
//               className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
//             >
//               FactEyes Architecture{" "}
//               <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
//                 and Capability
//               </span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               End-to-end manufacturing data pipeline — from IoT sensor
//               collection through Azure cloud processing to real-time Power BI
//               visualization and actionable insights.
//             </p>
//           </motion.div>

//           {/* Architecture Diagram */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={scaleIn}
//             className="mb-12"
//           >
//             <figure className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
//               <Image
//                 src="/assets/digitalimgnew.webp"
//                 alt="FactEyes data architecture diagram showing IoT data sources, Azure Data Factory ingestion, Databricks processing, Azure SQL storage, and Power BI visualization layers"
//                 width={1200}
//                 height={600}
//                 className="w-full h-auto rounded-lg"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
//               />
//               <figcaption className="sr-only">
//                 FactEyes platform architecture: Data flows from IoT sensors and
//                 ERP systems through Azure Data Factory for ingestion, Databricks
//                 for processing, Azure SQL for storage, and Power BI for
//                 visualization.
//               </figcaption>
//             </figure>
//           </motion.div>

//           {/* Pipeline Steps */}
//           <div
//             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch"
//             role="list"
//             aria-label="Data pipeline steps"
//           >
//             {[
//               {
//                 icon: <Database className="w-5 h-10" aria-hidden="true" />,
//                 title: "Data Sources",
//                 desc: "IoT sensors, ERP, MES, databases",
//                 cardBg: "from-blue-50 to-blue-100",
//                 borderColor: "border-blue-200",
//                 iconColor: "text-blue-600",
//               },
//               {
//                 icon: <GitBranch className="w-5 h-10" aria-hidden="true" />,
//                 title: "Ingestion",
//                 desc: "Azure Data Factory ETL & Stream Analytics",
//                 cardBg: "from-indigo-50 to-indigo-100",
//                 borderColor: "border-indigo-200",
//                 iconColor: "text-indigo-600",
//               },
//               {
//                 icon: <Server className="w-5 h-10" aria-hidden="true" />,
//                 title: "Processing",
//                 desc: "Databricks for large-scale data transformation",
//                 cardBg: "from-purple-50 to-purple-100",
//                 borderColor: "border-purple-200",
//                 iconColor: "text-purple-600",
//               },
//               {
//                 icon: <Lock className="w-5 h-10" aria-hidden="true" />,
//                 title: "Storage",
//                 desc: "Azure SQL, secure data lake & warehouse",
//                 cardBg: "from-pink-50 to-pink-100",
//                 borderColor: "border-pink-200",
//                 iconColor: "text-pink-600",
//               },
//               {
//                 icon: <BarChart3 className="w-5 h-10" aria-hidden="true" />,
//                 title: "Visualization",
//                 desc: "Power BI dashboards via FactEyes platform",
//                 cardBg: "from-cyan-50 to-cyan-100",
//                 borderColor: "border-cyan-200",
//                 iconColor: "text-cyan-600",
//               },
//             ].map((step, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="relative"
//                 role="listitem"
//               >
//                 <div
//                   className={`bg-gradient-to-br ${step.cardBg} rounded-xl p-6 text-center border-2 ${step.borderColor} hover:shadow-lg transition-all h-full flex flex-col justify-center`}
//                 >
//                   <div
//                     className={`flex justify-center items-center ${step.iconColor} mb-4`}
//                   >
//                     {step.icon}
//                   </div>
//                   <h3 className="font-bold text-base text-gray-900 mb-2">
//                     {step.title}
//                   </h3>
//                   <p className="text-sm text-gray-600">{step.desc}</p>
//                 </div>
//                 {idx < 4 && (
//                   <ArrowRight
//                     className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 text-gray-400 z-10"
//                     aria-hidden="true"
//                   />
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Facteyes Analytics Platform */}
//       <section
//         className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 text-white relative overflow-hidden"
//         aria-labelledby="analytics-heading"
//       >
//         <div className="absolute inset-0 opacity-10" aria-hidden="true">
//           <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
//           <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
//         </div>

//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="text-center mb-16"
//           >
//             <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-6">
//               <Eye className="w-5 h-5 text-cyan-300" aria-hidden="true" />
//               <span className="text-sm font-semibold bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
//                 Powered by FactEyes
//               </span>
//             </div>
//             <h2
//               id="analytics-heading"
//               className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent pb-2"
//             >
//               Advanced Manufacturing Analytics & Reporting
//             </h2>
//             <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
//               Transform raw production data into actionable manufacturing
//               insights with integrated Power BI dashboards and the FactEyes
//               intelligence platform.
//             </p>
//           </motion.div>

//           {/* Main Dashboard Showcase */}
//           <div className="grid lg:grid-cols-2 gap-8 mb-12">
//             {/* Power BI Integration */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={scaleIn}
//               className="group relative"
//             >
//               <div
//                 className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"
//                 aria-hidden="true"
//               ></div>
//               <article className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all">
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
//                     <BarChart3
//                       className="w-7 h-7 text-white"
//                       aria-hidden="true"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-white">
//                       Power BI Manufacturing Dashboards
//                     </h3>
//                     <p className="text-blue-200 text-sm">
//                       Interactive Real-Time Dashboards
//                     </p>
//                   </div>
//                 </div>

//                 <figure className="relative bg-white rounded-2xl overflow-hidden shadow-2xl mb-6 ring-4 ring-white/10">
//                   <Image
//                     src="/assets/bi.webp"
//                     alt="Power BI manufacturing dashboard showing production KPIs, OEE metrics, and real-time machine performance data"
//                     width={600}
//                     height={400}
//                     className="w-full h-auto"
//                     sizes="(max-width: 1024px) 100vw, 50vw"
//                   />
//                   <div className="absolute top-4 right-4">
//                     <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
//                       <div
//                         className="w-2 h-2 bg-white rounded-full animate-pulse"
//                         aria-hidden="true"
//                       ></div>
//                       LIVE
//                     </span>
//                   </div>
//                 </figure>

//                 <ul className="space-y-3" aria-label="Power BI features">
//                   {[
//                     {
//                       icon: <RefreshCw className="w-4 h-4" />,
//                       text: "Real-time data refresh from production floor",
//                     },
//                     {
//                       icon: <Target className="w-4 h-4" />,
//                       text: "Custom manufacturing KPI tracking",
//                     },
//                     {
//                       icon: <Layers className="w-4 h-4" />,
//                       text: "Multi-layered drill-down analysis",
//                     },
//                     {
//                       icon: <CheckCircle2 className="w-4 h-4" />,
//                       text: "Mobile-responsive design for shop floor",
//                     },
//                   ].map((item, idx) => (
//                     <li
//                       key={idx}
//                       className="flex items-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all"
//                     >
//                       <div className="text-yellow-400" aria-hidden="true">
//                         {item.icon}
//                       </div>
//                       <span className="text-blue-100 text-sm">{item.text}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </article>
//             </motion.div>

//             {/* Facteyes Platform */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={scaleIn}
//               className="group relative"
//             >
//               <div
//                 className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"
//                 aria-hidden="true"
//               ></div>
//               <article className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all">
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
//                     <Eye className="w-7 h-7 text-white" aria-hidden="true" />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-white">
//                       FactEyes Manufacturing Intelligence
//                     </h3>
//                     <p className="text-blue-200 text-sm">
//                       AI-Powered Production Analytics
//                     </p>
//                   </div>
//                 </div>

//                 <figure className="relative bg-white rounded-2xl overflow-hidden shadow-2xl mb-6 ring-4 ring-white/10">
//                   <Image
//                     src="/assets/facteyes-dashboard.png"
//                     alt="FactEyes manufacturing intelligence dashboard displaying equipment health, quality metrics, production efficiency, and predictive maintenance alerts"
//                     width={600}
//                     height={400}
//                     className="w-full h-auto"
//                     sizes="(max-width: 1024px) 100vw, 50vw"
//                   />
//                 </figure>

//                 <ul className="space-y-3" aria-label="FactEyes features">
//                   {[
//                     {
//                       icon: <Settings className="w-4 h-4" />,
//                       text: "Industry-specific analytics modules",
//                     },
//                     {
//                       icon: <CircleDot className="w-4 h-4" />,
//                       text: "Customizable manufacturing workflows",
//                     },
//                     {
//                       icon: <Cloud className="w-4 h-4" />,
//                       text: "Native Azure cloud integration",
//                     },
//                     {
//                       icon: <CheckCircle2 className="w-4 h-4" />,
//                       text: "AI-powered predictive analytics",
//                     },
//                   ].map((item, idx) => (
//                     <li
//                       key={idx}
//                       className="flex items-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all"
//                     >
//                       <div className="text-cyan-400" aria-hidden="true">
//                         {item.icon}
//                       </div>
//                       <span className="text-blue-100 text-sm">{item.text}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </article>
//             </motion.div>
//           </div>

//           {/* Integration Benefits */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="grid md:grid-cols-4 gap-6"
//           >
//             {[
//               {
//                 icon: <Zap className="w-8 h-8" />,
//                 title: "Instant Insights",
//                 desc: "Sub-second query performance for production data",
//                 gradient: "from-yellow-400 to-orange-500",
//               },
//               {
//                 icon: <Shield className="w-8 h-8" />,
//                 title: "Secure Access",
//                 desc: "Role-based permissions with enterprise security",
//                 gradient: "from-green-400 to-emerald-500",
//               },
//               {
//                 icon: <Database className="w-8 h-8" />,
//                 title: "Unlimited Scale",
//                 desc: "Cloud-native architecture on Azure platform",
//                 gradient: "from-blue-400 to-indigo-500",
//               },
//               {
//                 icon: <TrendingUp className="w-8 h-8" />,
//                 title: "Predictive AI",
//                 desc: "Machine learning for maintenance and quality",
//                 gradient: "from-purple-400 to-pink-500",
//               },
//             ].map((benefit, idx) => (
//               <article
//                 key={idx}
//                 className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all text-center"
//               >
//                 <div
//                   className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}
//                   aria-hidden="true"
//                 >
//                   {benefit.icon}
//                 </div>
//                 <h4 className="text-base font-bold text-white mb-2">
//                   {benefit.title}
//                 </h4>
//                 <p className="text-sm text-blue-200">{benefit.desc}</p>
//               </article>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Comprehensive Analytics Suite */}
//       <section
//         className="py-20 bg-white"
//         aria-labelledby="analytics-suite-heading"
//       >
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="text-center mb-16"
//           >
//             <h2
//               id="analytics-suite-heading"
//               className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
//             >
//               Comprehensive Manufacturing Analytics Suite
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Industry-standard metrics including OEE, SPC, Cpk, gauge R&R, and
//               custom analytics tailored to your manufacturing processes and
//               quality requirements.
//             </p>
//           </motion.div>

//           {/* Primary Analytics - With Images */}
//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             {/* OEE Dashboard */}
//             <motion.article
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={scaleIn}
//               className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all flex flex-col"
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
//                   <Gauge className="w-6 h-6 text-white" aria-hidden="true" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">
//                   OEE Dashboard
//                 </h3>
//               </div>
//               <p className="text-base text-gray-600 mb-6 leading-relaxed min-h-[72px]">
//                 Overall Equipment Effectiveness tracking with real-time
//                 availability, performance, and quality metrics for continuous
//                 production optimization.
//               </p>
//               <figure className="bg-white rounded-xl overflow-hidden shadow-md mb-6 h-48 flex items-center justify-center">
//                 <Image
//                   src="/assets/oee-dashboard.png"
//                   alt="OEE dashboard showing overall equipment effectiveness with availability, performance, and quality metrics across production lines"
//                   width={400}
//                   height={300}
//                   className="max-h-full max-w-full object-contain"
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                 />
//               </figure>
//               <ul className="space-y-2">
//                 <li className="flex items-center gap-2 text-sm">
//                   <CheckCircle2
//                     className="w-4 h-4 text-green-600"
//                     aria-hidden="true"
//                   />
//                   <span className="text-gray-700">
//                     Real-time OEE calculation across all equipment
//                   </span>
//                 </li>
//                 <li className="flex items-center gap-2 text-sm">
//                   <CheckCircle2
//                     className="w-4 h-4 text-green-600"
//                     aria-hidden="true"
//                   />
//                   <span className="text-gray-700">
//                     Downtime categorization and root cause analysis
//                   </span>
//                 </li>
//                 <li className="flex items-center gap-2 text-sm">
//                   <CheckCircle2
//                     className="w-4 h-4 text-green-600"
//                     aria-hidden="true"
//                   />
//                   <span className="text-gray-700">
//                     Production efficiency trends and benchmarking
//                   </span>
//                 </li>
//               </ul>
//             </motion.article>

//             {/* Statistical Process Control */}
//             <motion.article
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={scaleIn}
//               className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
//                   <LineChart
//                     className="w-6 h-6 text-white"
//                     aria-hidden="true"
//                   />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">
//                   SPC Analysis
//                 </h3>
//               </div>
//               <p className="text-base text-gray-600 mb-6 leading-relaxed min-h-[72px]">
//                 Statistical Process Control with Cp, Cpk, Cg, and Cgk process
//                 capability indices for comprehensive quality management and
//                 compliance.
//               </p>

//               <figure className="bg-white rounded-xl overflow-hidden shadow-md mb-6 h-48 flex items-center justify-center">
//                 <Image
//                   src="/assets/cpk-analysis.png"
//                   alt="SPC analysis chart showing Cpk process capability index with control limits, normal distribution curve, and specification boundaries"
//                   width={400}
//                   height={300}
//                   className="max-h-full max-w-full object-contain"
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                 />
//               </figure>
//               <ul className="space-y-2">
//                 <li className="flex items-center gap-2 text-sm">
//                   <CheckCircle2
//                     className="w-4 h-4 text-blue-600"
//                     aria-hidden="true"
//                   />
//                   <span className="text-gray-700">
//                     Cp/Cpk process capability analysis
//                   </span>
//                 </li>
//                 <li className="flex items-center gap-2 text-sm">
//                   <CheckCircle2
//                     className="w-4 h-4 text-blue-600"
//                     aria-hidden="true"
//                   />
//                   <span className="text-gray-700">
//                     Cg/Cgk gauge capability studies
//                   </span>
//                 </li>
//                 <li className="flex items-center gap-2 text-sm">
//                   <CheckCircle2
//                     className="w-4 h-4 text-blue-600"
//                     aria-hidden="true"
//                   />
//                   <span className="text-gray-700">
//                     X-bar R and control chart monitoring
//                   </span>
//                 </li>
//               </ul>
//             </motion.article>

//             {/* Bottleneck Analysis */}
//             <motion.article
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={scaleIn}
//               className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
//                   <AlertTriangle
//                     className="w-6 h-6 text-white"
//                     aria-hidden="true"
//                   />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">
//                   Bottleneck Analysis
//                 </h3>
//               </div>
//               <p className="text-base text-gray-600 mb-6 leading-relaxed min-h-[72px]">
//                 Identify production constraints and optimize throughput with
//                 AI-powered bottleneck detection and capacity planning tools.
//               </p>

//               <figure className="bg-white rounded-xl overflow-hidden shadow-md mb-6 h-48 flex items-center justify-center">
//                 <Image
//                   src="/assets/bottleneck-analysis.png"
//                   alt="Production bottleneck analysis visualization showing constraint identification across manufacturing stations with throughput optimization recommendations"
//                   width={400}
//                   height={300}
//                   className="max-h-full max-w-full object-contain"
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                 />
//               </figure>
//               <ul className="space-y-2">
//                 <li className="flex items-center gap-2 text-sm">
//                   <CheckCircle2
//                     className="w-4 h-4 text-orange-600"
//                     aria-hidden="true"
//                   />
//                   <span className="text-gray-700">
//                     Automated constraint identification
//                   </span>
//                 </li>
//                 <li className="flex items-center gap-2 text-sm">
//                   <CheckCircle2
//                     className="w-4 h-4 text-orange-600"
//                     aria-hidden="true"
//                   />
//                   <span className="text-gray-700">
//                     Throughput optimization recommendations
//                   </span>
//                 </li>
//                 <li className="flex items-center gap-2 text-sm">
//                   <CheckCircle2
//                     className="w-4 h-4 text-orange-600"
//                     aria-hidden="true"
//                   />
//                   <span className="text-gray-700">
//                     Predictive maintenance alerts integration
//                   </span>
//                 </li>
//               </ul>
//             </motion.article>
//           </div>

//           {/* Additional Analytics Features */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 icon: Repeat,
//                 title: "EOL Repeatability",
//                 desc: "End-of-line test repeatability analysis ensuring consistent quality validation across production runs",
//                 features: [
//                   "Test-retest correlation analysis",
//                   "Measurement variability tracking",
//                   "Precision and accuracy monitoring",
//                 ],
//                 cardBg: "from-violet-50 to-violet-50",
//                 borderColor: "border-violet-100 hover:border-violet-300",
//                 iconBg: "from-violet-500 to-violet-600",
//                 dotColor: "bg-violet-500",
//               },
//               {
//                 icon: Trash2,
//                 title: "Defect & Scrap Analytics",
//                 desc: "Comprehensive defect tracking and scrap reduction analytics for cost optimization",
//                 features: [
//                   "Pareto analysis by defect type",
//                   "Scrap cost tracking per unit",
//                   "Root cause correlation mapping",
//                 ],
//                 cardBg: "from-rose-50 to-rose-50",
//                 borderColor: "border-rose-100 hover:border-rose-300",
//                 iconBg: "from-rose-500 to-rose-600",
//                 dotColor: "bg-rose-500",
//               },
//               {
//                 icon: Radio,
//                 title: "Condition Monitoring",
//                 desc: "Real-time IoT sensor-based equipment health monitoring for predictive maintenance",
//                 features: [
//                   "Vibration analysis patterns",
//                   "Temperature anomaly monitoring",
//                   "Predictive failure detection",
//                 ],
//                 cardBg: "from-cyan-50 to-cyan-50",
//                 borderColor: "border-cyan-100 hover:border-cyan-300",
//                 iconBg: "from-cyan-500 to-cyan-600",
//                 dotColor: "bg-cyan-500",
//               },
//               {
//                 icon: GitCompare,
//                 title: "Gauge R&R Studies",
//                 desc: "Measurement system analysis for repeatability and reproducibility compliance",
//                 features: [
//                   "Operator variation study",
//                   "Equipment calibration tracking",
//                   "MSA compliance reporting",
//                 ],
//                 cardBg: "from-amber-50 to-amber-50",
//                 borderColor: "border-amber-100 hover:border-amber-300",
//                 iconBg: "from-amber-500 to-amber-600",
//                 dotColor: "bg-amber-500",
//               },
//               {
//                 icon: Target,
//                 title: "First Pass Yield",
//                 desc: "Track production quality at first attempt to minimize rework and improve efficiency",
//                 features: [
//                   "Station-by-station FPY analysis",
//                   "Yield trend visualization",
//                   "Quality improvement tracking",
//                 ],
//                 cardBg: "from-emerald-50 to-emerald-50",
//                 borderColor: "border-emerald-100 hover:border-emerald-300",
//                 iconBg: "from-emerald-500 to-emerald-600",
//                 dotColor: "bg-emerald-500",
//               },
//               {
//                 icon: Activity,
//                 title: "Cycle Time Analysis",
//                 desc: "Detailed cycle time monitoring against takt time for production optimization",
//                 features: [
//                   "Process step timing breakdown",
//                   "Takt time comparison analysis",
//                   "Efficiency gap identification",
//                 ],
//                 cardBg: "from-sky-50 to-sky-50",
//                 borderColor: "border-sky-100 hover:border-sky-300",
//                 iconBg: "from-sky-500 to-sky-600",
//                 dotColor: "bg-sky-500",
//               },
//               {
//                 icon: Zap,
//                 title: "Energy Analytics",
//                 desc: "Monitor and optimize energy consumption patterns for sustainable manufacturing",
//                 features: [
//                   "Real-time power consumption",
//                   "Cost per unit energy analysis",
//                   "Sustainability metrics dashboard",
//                 ],
//                 cardBg: "from-lime-50 to-lime-50",
//                 borderColor: "border-lime-100 hover:border-lime-300",
//                 iconBg: "from-lime-500 to-lime-600",
//                 dotColor: "bg-lime-500",
//               },
//               {
//                 icon: Layers,
//                 title: "Inventory & WIP Tracking",
//                 desc: "Work-in-progress and inventory level optimization for lean manufacturing",
//                 features: [
//                   "Real-time WIP visualization",
//                   "Buffer stock optimization",
//                   "Inventory turnover ratio",
//                 ],
//                 cardBg: "from-indigo-50 to-indigo-50",
//                 borderColor: "border-indigo-100 hover:border-indigo-300",
//                 iconBg: "from-indigo-500 to-indigo-600",
//                 dotColor: "bg-indigo-500",
//               },
//             ].map((item, idx) => {
//               const IconComponent = item.icon;
//               return (
//                 <motion.article
//                   key={idx}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   variants={scaleIn}
//                   className={`group bg-gradient-to-br ${item.cardBg} rounded-xl p-6 border-2 ${item.borderColor} hover:shadow-lg transition-all`}
//                 >
//                   <div
//                     className={`w-14 h-14 bg-gradient-to-br ${item.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
//                     aria-hidden="true"
//                   >
//                     <IconComponent className="w-7 h-7 text-white" />
//                   </div>
//                   <h3 className="text-base font-bold text-gray-900 mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-600 mb-4 leading-relaxed">
//                     {item.desc}
//                   </p>
//                   <ul className="space-y-2">
//                     {item.features.map((feature, fIdx) => (
//                       <li
//                         key={fIdx}
//                         className="flex items-start gap-2 text-xs text-gray-700"
//                       >
//                         <div
//                           className={`w-1.5 h-1.5 ${item.dotColor} rounded-full mt-1.5 flex-shrink-0`}
//                           aria-hidden="true"
//                         ></div>
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </motion.article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Live Data Analytics */}
//       <section
//         className="py-20 bg-gradient-to-b from-slate-50 to-blue-50"
//         aria-labelledby="live-analytics-heading"
//       >
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//             >
//               <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2 mb-6">
//                 <div
//                   className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
//                   aria-hidden="true"
//                 ></div>
//                 <span className="text-sm font-semibold">
//                   Live Data Streaming
//                 </span>
//               </div>
//               <h2
//                 id="live-analytics-heading"
//                 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
//               >
//                 Real-Time Manufacturing Analytics Engine
//               </h2>
//               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                 Monitor your production floor with millisecond-level data
//                 updates. Our live analytics engine processes streaming data from
//                 IoT sensors, PLCs, machines, and quality systems to deliver
//                 instant actionable insights for operators and managers.
//               </p>

//               <div className="space-y-4">
//                 {[
//                   {
//                     icon: <Activity aria-hidden="true" />,
//                     title: "Sub-second data latency",
//                     desc: "Real-time data streaming via Azure Event Hubs and Stream Analytics",
//                   },
//                   {
//                     icon: <TrendingUp aria-hidden="true" />,
//                     title: "Predictive trend insights",
//                     desc: "AI-powered production trend forecasting and anomaly prediction",
//                   },
//                   {
//                     icon: <Zap aria-hidden="true" />,
//                     title: "Instant alert notifications",
//                     desc: "Automated anomaly detection with configurable threshold alerts",
//                   },
//                   {
//                     icon: <Thermometer aria-hidden="true" />,
//                     title: "IoT sensor integration",
//                     desc: "Direct integration with temperature, vibration, pressure, and flow sensors",
//                   },
//                 ].map((feature, idx) => (
//                   <div
//                     key={idx}
//                     className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
//                   >
//                     <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
//                       {feature.icon}
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-base text-gray-900 mb-1">
//                         {feature.title}
//                       </h3>
//                       <p className="text-sm text-gray-600">{feature.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={scaleIn}
//               className="relative"
//             >
//               <div
//                 className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"
//                 aria-hidden="true"
//               ></div>
//               <figure className="relative bg-white rounded-2xl shadow-2xl p-6">
//                 <Image
//                   src="/assets/liveproduction.png"
//                   alt="Real-time live production monitoring dashboard showing active machine status, production counts, cycle times, and quality alerts across manufacturing lines"
//                   width={600}
//                   height={400}
//                   className="w-full h-auto rounded-lg"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                 />
//                 <figcaption className="sr-only">
//                   FactEyes live production monitoring interface with real-time
//                   machine data, production KPIs, and automated alert system.
//                 </figcaption>
//               </figure>
//             </motion.div>
//           </div>
//         </div>
//       </section>


//     </main>
//   );
// };

// export default DigitalTransformation;