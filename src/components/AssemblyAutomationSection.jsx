// /// AssemblyAutomationSection.jsx
// "use client";

// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import {
//   X,
//   ChevronRight,
//   ChevronLeft,
//   Mail,
//   Factory,
//   Zap,
//   DollarSign,
//   Rocket,
//   TrendingUp,
//   Settings,
//   Package,
//   CheckCircle2,
//   Target,
//   Wrench,
//   MapPin,
//   Flame,
//   Cog,
//   Sparkles,
//   Clock,
//   Award,
//   Users,
//   Globe,
//   Cpu,
//   FileText,
//   Shield,
//   Eye,
//   RotateCcw,
//   Layers,
//   Bot,
//   ChevronDown,
//   Database,
//   RefreshCw,
//   ArrowRight,
//   Play,
//   Star,
//   CircuitBoard,
//   ScanLine,
//   Scan,
//   Binary,
//   Palette,
//   CheckSquare,
// } from "lucide-react";

// import Carousel from "./Carousel";

// // Image path arrays - now using public folder paths
// const ourBuildsImages = [
//   { src: "/assets/assemblybending.webp", alt: "Assembly & Bending Station" },
//   { src: "/assets/controlpcba.webp", alt: "Control PCBA Panel" },
//   { src: "/assets/conveyer.webp", alt: "Conveyor Automation System" },
//   { src: "/assets/robotic.webp", alt: "Robotic Automation Cell" },
//   { src: "/assets/steppermotor.webp", alt: "Stepper Motor Assembly System" },
//   { src: "/assets/assembly1.webp", alt: "Automated Assembly Line 1" },
//   { src: "/assets/assembly2.webp", alt: "Automated Assembly Line 2" },
//   { src: "/assets/assembly3.webp", alt: "Automated Assembly Line 3" },
//   { src: "/assets/assembly4.webp", alt: "Automated Assembly Line 4" },
//   { src: "/assets/assembly5.webp", alt: "Automated Assembly Line 5" },
//   { src: "/assets/assembly6.webp", alt: "Automated Assembly Line 6" },
// ];

// const solutionCategories = [
//   {
//     id: 1,
//     title: "Conveyors & Transfer Systems",
//     icon: Layers,
//     color: "blue",
//     gradient: "from-blue-600 to-blue-400",
//     bgGradient: "from-blue-50/80 to-blue-100/50",
//     accentColor: "#3B82F6",
//     thumbnail: "/assets/chain.webp",
//     features: [
//       "Provide structured and reliable material flow for automated assembly and inspection processes",
//       "Seamlessly integrate drives, sensors, and intelligent control systems",
//       "Modular design enables easy scaling, reconfiguration, and expansion",
//       "Support synchronization and operation of multiple production lines",
//       "Equipped with ESD-safe fixtures to protect sensitive electronic components",
//       "Incorporate comprehensive safety features including guarding, interlocks, and emergency stops",
//       "Ensure high productivity, process consistency, and operator safety",
//     ],
//     subProducts: [
//       {
//         name: "Chain Conveyor",
//         images: [
//           "/assets/Conveyorcpy.webp",
//           "/assets/chain.webp",
//           "/assets/pallet1.webp",
//           "/assets/chain2.webp",
//         ],
//       },
//       { name: "Belt Conveyor", images: ["/assets/belt (1).webp"] },
//       {
//         name: "Pallet Movers & Lifters",
//         images: ["/assets/pallet (1).webp", "/assets/Lifter 1.1.webp"],
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Cellular Cells",
//     icon: Package,
//     color: "purple",
//     gradient: "from-purple-600 to-purple-400",
//     bgGradient: "from-purple-50/80 to-purple-100/50",
//     accentColor: "#9333EA",
//     thumbnail: "/assets/SBDP.webp",
//     features: [
//       "Flexible manufacturing cells that combine multiple operations into one optimized workspace",
//       "Modular and scalable design to adapt quickly to changing products and volumes",
//       "Seamless integration of assembly, testing, and inspection processes",
//       "Reduced material handling and faster cycle times for higher productivity",
//       "Improved quality and process consistency through controlled workflows",
//       "Compact layouts that maximize factory floor utilization",
//       "Designed with built-in safety and operator-friendly ergonomics",
//     ],
//     subProducts: [
//       {
//         name: "Modular Discrete Station",
//         images: [
//           "/assets/Cellular.webp",
//           "/assets/Cellular2.webp",
//           "/assets/SBDP.webp",
//           "/assets/line1new.webp",
//         ],
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "Rotary Indexing",
//     icon: RotateCcw,
//     color: "emerald",
//     gradient: "from-emerald-600 to-emerald-400",
//     bgGradient: "from-emerald-50/80 to-emerald-100/50",
//     accentColor: "#059669",
//     thumbnail: "/assets/Rotary2cpy.webp",
//     features: [
//       "Enable high-speed, precise, and repeatable part positioning",
//       "Index components seamlessly through sequential assembly operations",
//       "Reduce cycle times and increase overall production efficiency",
//       "Support integration with automated assembly, testing, and inspection systems",
//       "Modular design allows flexibility for different part sizes and assembly requirements",
//       "Ensure consistent quality and process repeatability",
//       "Built-in safety features for reliable and operator-friendly operation",
//     ],
//     subProducts: [
//       {
//         name: "Rotary Indexing Tables",
//         images: [
//           "/assets/Rotary2cpy.webp",
//           "/assets/Rotarynew.webp",
//           "/assets/rotary (1).webp",
//         ],
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: "Robotic Automation",
//     icon: Bot,
//     color: "orange",
//     gradient: "from-orange-600 to-orange-400",
//     bgGradient: "from-orange-50/80 to-orange-100/50",
//     accentColor: "#EA580C",
//     thumbnail: "/assets/RoboP&P2.webp",
//     features: [
//       "Enable flexible, fully automated production with reprogrammable robots for precision operations",
//       "Adapt quickly to dynamic production environments and changing product lines",
//       "Reduce manual intervention, ensuring consistent quality and high throughput",
//       "Integrate seamlessly with assembly, testing, inspection, and material handling systems",
//       "Incorporate advanced safety features including interlocks, light curtains, and emergency stops",
//       "Enhance productivity while maintaining safe and ergonomic working conditions",
//     ],
//     subProducts: [
//       {
//         name: "Robotic Screw Fixing",
//         images: ["/assets/ROBOT SCREWING -BCM Stn 2.webp"],
//       },
//       {
//         name: "Robotic Soldering",
//         images: ["/assets/Soldering Station1.webp"],
//       },
//       {
//         name: "Robotic Dispensing",
//         images: ["/assets/dispensing (1).webp", "/assets/Dispensing2copy.webp"],
//       },
//       {
//         name: "Robotic Pick and Place",
//         images: ["/assets/RoboP&P2.webp", "/assets/RoboP&Pcopy.webp"],
//       },
//     ],
//   },
//   {
//     id: 5,
//     title: "Vision Inspection",
//     icon: Eye,
//     color: "indigo",
//     gradient: "from-indigo-600 to-indigo-400",
//     bgGradient: "from-indigo-50/80 to-indigo-100/50",
//     accentColor: "#4F46E5",
//     thumbnail: "/assets/visionimg.webp",
//     features: [
//       "Leverage advanced cameras and AI-powered algorithms to detect defects with high accuracy",
//       "Ensure consistent, defect-free manufacturing and superior product quality",
//       "Inspect complex components quickly, reducing manual errors and rework",
//       "Integrate seamlessly into assembly and production lines for real-time quality control",
//       "Support scalable, flexible inspection for different product types and volumes",
//       "Enable data-driven insights to optimize processes and improve efficiency",
//     ],
//     subProducts: [
//       {
//         name: "Vision Inspection System",
//         images: [
//           "/assets/visionimg.webp",
//           "/assets/vision2.webp",
//           "/assets/vision3.webp",
//           "/assets/vision4.webp",
//           "/assets/isight.webp",
//         ],
//       },
//     ],
//   },
// ];

// // Vision Inspection Parameters Data
// const visionParameters = [
//   {
//     icon: CheckSquare,
//     title: "Object Presence Verification",
//     description: "Precise detection and validation of component presence",
//     color: "from-indigo-500 to-blue-500",
//   },
//   {
//     icon: ScanLine,
//     title: "High-Accuracy OCR",
//     description: "Advanced optical character recognition reading",
//     color: "from-violet-500 to-purple-500",
//   },
//   {
//     icon: Scan,
//     title: "BLOB Detection",
//     description: "Robust binary large object identification",
//     color: "from-fuchsia-500 to-pink-500",
//   },
//   {
//     icon: Palette,
//     title: "Color Detection",
//     description: "Reliable color verification and analysis",
//     color: "from-cyan-500 to-teal-500",
//   },
// ];

// const automationBenefits = [
//   {
//     icon: TrendingUp,
//     title: "Higher Throughput",
//     description:
//       "Automated assembly systems significantly increase production speed while maintaining consistent cycle times.",
//     color: "blue",
//     stat: "40%",
//     statLabel: "Faster Production",
//   },
//   {
//     icon: Award,
//     title: "Consistent Quality",
//     description:
//       "Precision-controlled automation minimizes human error and ensures repeatable, high-quality assembly.",
//     color: "emerald",
//     stat: "99.9%",
//     statLabel: "Quality Rate",
//   },
//   {
//     icon: DollarSign,
//     title: "Cost Efficiency",
//     description:
//       "Reduced rework, scrap, and labor dependency lead to lower overall manufacturing costs.",
//     color: "purple",
//     stat: "30%",
//     statLabel: "Cost Reduction",
//   },
//   {
//     icon: RefreshCw,
//     title: "Scalability & Flexibility",
//     description:
//       "Automation enables quick adaptation to new product variants, volume changes, and evolving market demands.",
//     color: "orange",
//     stat: "2x",
//     statLabel: "Faster Changeover",
//   },
//   {
//     icon: Shield,
//     title: "Process Reliability",
//     description:
//       "Automated systems deliver stable, predictable performance with minimal variation across shifts and batches.",
//     color: "indigo",
//     stat: "24/7",
//     statLabel: "Operation Ready",
//   },
//   {
//     icon: Database,
//     title: "Data & Traceability",
//     description:
//       "Integrated sensors and software provide real-time production data for quality control and continuous improvement.",
//     color: "cyan",
//     stat: "100%",
//     statLabel: "Traceability",
//   },
// ];

// const AssemblyAutomationSection = () => {
//   const [expandedCategory, setExpandedCategory] = useState(null);
//   const [activeViewer, setActiveViewer] = useState(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: "ease-out-cubic",
//       once: true,
//     });
//   }, []);

//   const getColorClasses = (color) => {
//     const colors = {
//       blue: {
//         bg: "bg-blue-500",
//         text: "text-blue-600",
//         light: "bg-blue-50",
//         border: "border-blue-200",
//         hover: "hover:bg-blue-600",
//         gradient: "from-blue-500 to-blue-600",
//         ring: "ring-blue-500",
//         lightText: "text-blue-400",
//       },
//       purple: {
//         bg: "bg-purple-500",
//         text: "text-purple-600",
//         light: "bg-purple-50",
//         border: "border-purple-200",
//         hover: "hover:bg-purple-600",
//         gradient: "from-purple-500 to-purple-600",
//         ring: "ring-purple-500",
//         lightText: "text-purple-400",
//       },
//       emerald: {
//         bg: "bg-emerald-500",
//         text: "text-emerald-600",
//         light: "bg-emerald-50",
//         border: "border-emerald-200",
//         hover: "hover:bg-emerald-600",
//         gradient: "from-emerald-500 to-emerald-600",
//         ring: "ring-emerald-500",
//         lightText: "text-emerald-400",
//       },
//       orange: {
//         bg: "bg-orange-500",
//         text: "text-orange-600",
//         light: "bg-orange-50",
//         border: "border-orange-200",
//         hover: "hover:bg-orange-600",
//         gradient: "from-orange-500 to-orange-600",
//         ring: "ring-orange-500",
//         lightText: "text-orange-400",
//       },
//       indigo: {
//         bg: "bg-indigo-500",
//         text: "text-indigo-600",
//         light: "bg-indigo-50",
//         border: "border-indigo-200",
//         hover: "hover:bg-indigo-600",
//         gradient: "from-indigo-500 to-indigo-600",
//         ring: "ring-indigo-500",
//         lightText: "text-indigo-400",
//       },
//       cyan: {
//         bg: "bg-cyan-500",
//         text: "text-cyan-600",
//         light: "bg-cyan-50",
//         border: "border-cyan-200",
//         hover: "hover:bg-cyan-600",
//         gradient: "from-cyan-500 to-cyan-600",
//         ring: "ring-cyan-500",
//         lightText: "text-cyan-400",
//       },
//     };
//     return colors[color] || colors.blue;
//   };

//   const openViewer = (category) => {
//     setActiveViewer({
//       categoryId: category.id,
//       subProductIndex: 0,
//       imageIndex: 0,
//     });
//   };

//   const getActiveCategory = () => {
//     if (!activeViewer) return null;
//     return solutionCategories.find((c) => c.id === activeViewer.categoryId);
//   };

//   const getActiveSubProduct = () => {
//     const cat = getActiveCategory();
//     if (!cat) return null;
//     return cat.subProducts[activeViewer.subProductIndex];
//   };

//   const nextSubProduct = (e) => {
//     e.stopPropagation();
//     const cat = getActiveCategory();
//     if (!cat) return;
//     setActiveViewer((prev) => ({
//       ...prev,
//       subProductIndex: (prev.subProductIndex + 1) % cat.subProducts.length,
//       imageIndex: 0,
//     }));
//   };

//   const prevSubProduct = (e) => {
//     e.stopPropagation();
//     const cat = getActiveCategory();
//     if (!cat) return;
//     setActiveViewer((prev) => ({
//       ...prev,
//       subProductIndex:
//         prev.subProductIndex === 0
//           ? cat.subProducts.length - 1
//           : prev.subProductIndex - 1,
//       imageIndex: 0,
//     }));
//   };

//   const nextImage = (e) => {
//     e.stopPropagation();
//     const subProduct = getActiveSubProduct();
//     if (!subProduct || subProduct.images.length <= 1) return;
//     setActiveViewer((prev) => ({
//       ...prev,
//       imageIndex: (prev.imageIndex + 1) % subProduct.images.length,
//     }));
//   };

//   const prevImage = (e) => {
//     e.stopPropagation();
//     const subProduct = getActiveSubProduct();
//     if (!subProduct || subProduct.images.length <= 1) return;
//     setActiveViewer((prev) => ({
//       ...prev,
//       imageIndex:
//         prev.imageIndex === 0
//           ? subProduct.images.length - 1
//           : prev.imageIndex - 1,
//     }));
//   };

//   const activeCategory = getActiveCategory();
//   const activeSubProduct = getActiveSubProduct();

//   return (
//     <div className="bg-white min-h-screen">
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
//             src="/assets/robotnew.webp"
//             alt="Assembly Automation Solutions"
//             fill
//             className="object-cover object-center"
//             priority
//           />
//         </motion.div>

//         <div className="absolute inset-0 bg-black/30"></div>

//         <div className="absolute inset-0 opacity-10">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
//               backgroundSize: "50px 50px",
//             }}
//           ></div>
//         </div>

//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <motion.div
//             className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
//             animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
//             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//           />
//           <motion.div
//             className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
//             animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
//             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </div>

//         <div className="relative z-10 h-full flex items-center justify-center">
//           <div className="container mx-auto px-6 lg:px-12 text-center">
//             <div className="max-w-4xl mx-auto">
//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//               >
//                 <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
//                   Advanced Assembly Automation Solutions
//                 </h1>
//                 <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
//   We design and deliver advanced assembly automation systems that combine 
//   robotics, intelligent conveyors, rotary indexing platforms, and machine 
//   vision inspection to create highly efficient manufacturing environments.
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
//           {/* Precision Assembly Section */}
//           <motion.div
//             className="mb-20"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="max-w-6xl mx-auto">
//               <div className="text-center mb-12">
//                 <motion.div
//                   className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4"
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                 >
//                   <CircuitBoard className="w-4 h-4" />
//                   <span>Precision Engineering</span>
//                 </motion.div>
//                 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
//                   Precision Assembly for{" "}
//                   <span className="text-transparent bg-clip-text bg-blue-600">
//                     Critical Applications
//                   </span>
//                 </h2>
//                 <p className="text-slate-600 max-w-3xl mx-auto text-lg">
//                   We ensure highly precise assembly of products such as
//                   electronic components, airbags, automotive lighting,
//                   instrument panels, infotainment systems, medical devices, and
//                   more.
//                 </p>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 {[
//                   {
//                     icon: Users,
//                     title: "People-Assisted Semi-Automated",
//                     description:
//                       "Flexible solutions combining human expertise with automation for optimal efficiency and quality control.",
//                     gradient: "from-blue-600 to-blue-500",
//                     bgPattern: "bg-blue-50",
//                   },
//                   {
//                     icon: Rocket,
//                     title: "Fully Automatic High-Volume",
//                     description:
//                       "Lights-out automation systems designed for maximum throughput and 24/7 production capability.",
//                     gradient: "from-purple-600 to-purple-500",
//                     bgPattern: "bg-purple-50",
//                   },
//                 ].map((card, idx) => {
//                   const IconComp = card.icon;
//                   return (
//                     <motion.div
//                       key={idx}
//                       className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-transparent transition-all duration-500 overflow-hidden"
//                       initial={{ opacity: 0, y: 30 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: idx * 0.15 }}
//                       whileHover={{ y: -5 }}
//                     >
//                       <div
//                         className={`absolute inset-0 ${card.bgPattern} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
//                       ></div>
//                       <div
//                         className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${card.gradient} opacity-5 rounded-full group-hover:scale-150 transition-transform duration-500`}
//                       ></div>
//                       <div className="relative z-10">
//                         <div
//                           className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg mb-5`}
//                         >
//                           <IconComp className="w-7 h-7 text-white" />
//                         </div>
//                         <h3 className="text-xl font-bold text-slate-900 mb-3">
//                           {card.title}
//                         </h3>
//                         <p className="text-slate-600 leading-relaxed">
//                           {card.description}
//                         </p>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           </motion.div>

//           {/* Solutions Portfolio Section */}
//           <motion.div
//             className="mb-20"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="text-center mb-12">
//               <motion.div
//                 className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-50 border border-purple-100 rounded-full text-purple-600 text-sm font-medium mb-4"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//               >
//                 <Package className="w-4 h-4" />
//                 <span>Complete Solutions Portfolio</span>
//               </motion.div>
//               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
//                 Our Assembly Automation Solutions
//               </h2>
//               <p className="text-slate-600 max-w-3xl mx-auto text-lg">
//                 Comprehensive range of proven automation systems designed to
//                 meet your unique manufacturing challenges
//               </p>
//             </div>

//             {/* Solution Categories Accordion */}
//             <div className="max-w-5xl mx-auto space-y-4">
//               {solutionCategories.map((category, idx) => {
//                 const IconComponent = category.icon;
//                 const isExpanded = expandedCategory === category.id;
//                 const colorClasses = getColorClasses(category.color);
//                 const isVisionInspection = category.id === 5;

//                 return (
//                   <motion.div
//                     key={category.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: idx * 0.1 }}
//                     className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
//                       isExpanded
//                         ? `${colorClasses.border} shadow-lg`
//                         : "border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md"
//                     }`}
//                   >
//                     {/* Category Header */}
//                     <button
//                       onClick={() =>
//                         setExpandedCategory(isExpanded ? null : category.id)
//                       }
//                       className="w-full p-6 flex items-center justify-between transition-colors duration-300"
//                     >
//                       <div className="flex items-center gap-4">
//                         <motion.div
//                           className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}
//                           whileHover={{ scale: 1.05, rotate: 5 }}
//                           transition={{ type: "spring", stiffness: 400 }}
//                         >
//                           <IconComponent className="w-7 h-7 text-white" />
//                         </motion.div>
//                         <div className="text-left">
//                           <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
//                             <span className="text-slate-400 font-medium">
//                               {String(idx + 1).padStart(2, "0")}
//                             </span>
//                             {category.title}
//                           </h3>
//                         </div>
//                       </div>
//                       <motion.div
//                         animate={{ rotate: isExpanded ? 180 : 0 }}
//                         transition={{ duration: 0.3 }}
//                         className={`w-10 h-10 rounded-full ${colorClasses.light} flex items-center justify-center`}
//                       >
//                         <ChevronDown
//                           className={`w-5 h-5 ${colorClasses.text}`}
//                         />
//                       </motion.div>
//                     </button>

//                     {/* Expanded Content */}
//                     <AnimatePresence>
//                       {isExpanded && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.4, ease: "easeInOut" }}
//                           className="overflow-hidden"
//                         >
//                           <div
//                             className={`p-6 pt-0 bg-gradient-to-br ${category.bgGradient}`}
//                           >
//                             <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6"></div>

//                             {/* Vision Inspection Parameter Section */}
//                             {isVisionInspection && (
//                               <div className="mb-8">
//                                 <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
//                                   {/* Header */}
//                                   <div className="flex items-center gap-4 mb-6">
//                                     <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center">
//                                       <Eye className="w-6 h-6 text-white" />
//                                     </div>

//                                     <div>
//                                       <h3 className="text-xl font-bold text-white">
//                                         Vision Inspection Parameters
//                                       </h3>
//                                     </div>
//                                   </div>

//                                   {/* Description */}
//                                   <p className="text-slate-400 leading-relaxed mb-8 max-w-3xl">
//                                     Our vision inspection platform uses
//                                     intelligent algorithms and high-precision
//                                     cameras to verify components, read markings,
//                                     detect defects, and validate product quality
//                                     in real time.
//                                   </p>

//                                   {/* Parameter Cards */}
//                                   <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                                     {visionParameters.map((param, pIdx) => {
//                                       const ParamIcon = param.icon;

//                                       return (
//                                         <div
//                                           key={pIdx}
//                                           className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-indigo-400/40 transition-all duration-300"
//                                         >
//                                           <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-3">
//                                             <ParamIcon className="w-5 h-5 text-indigo-400" />
//                                           </div>

//                                           <h4 className="text-white font-semibold text-sm mb-1">
//                                             {param.title}
//                                           </h4>

//                                           <p className="text-slate-400 text-xs">
//                                             {param.description}
//                                           </p>
//                                         </div>
//                                       );
//                                     })}
//                                   </div>
//                                 </div>
//                               </div>
//                             )}

//                             <div className="grid lg:grid-cols-2 gap-8">
//                               {/* Features List */}
//                               <div>
//                                 <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
//                                   <CheckCircle2
//                                     className={`w-5 h-5 ${colorClasses.text}`}
//                                   />
//                                   Key Features
//                                 </h4>
//                                 <ul className="space-y-3">
//                                   {category.features.map((feature, fIdx) => (
//                                     <motion.li
//                                       key={fIdx}
//                                       initial={{ opacity: 0, x: -20 }}
//                                       animate={{ opacity: 1, x: 0 }}
//                                       transition={{ delay: fIdx * 0.05 }}
//                                       className="flex items-start gap-3 group"
//                                     >
//                                       <div
//                                         className={`w-2 h-2 rounded-full ${colorClasses.bg} mt-2 flex-shrink-0 group-hover:scale-125 transition-transform`}
//                                       ></div>
//                                       <span className="text-slate-700 text-sm leading-relaxed">
//                                         {feature}
//                                       </span>
//                                     </motion.li>
//                                   ))}
//                                 </ul>
//                               </div>

//                               {/* Single Product Card */}
//                               <div>
//                                 <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
//                                   <Package
//                                     className={`w-5 h-5 ${colorClasses.text}`}
//                                   />
//                                   Products
//                                 </h4>

//                                 <motion.div
//                                   initial={{ opacity: 0, scale: 0.95 }}
//                                   animate={{ opacity: 1, scale: 1 }}
//                                   transition={{ delay: 0.1 }}
//                                   onClick={() => openViewer(category)}
//                                   className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 cursor-pointer hover:shadow-xl hover:border-blue-200 transition-all duration-300 group relative overflow-hidden"
//                                 >
//                                   <div
//                                     className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
//                                   ></div>

//                                   <div className="relative z-10">
//                                     <div className="w-full h-48 bg-slate-50 rounded-xl flex items-center justify-center overflow-hidden border border-slate-100 mb-4">
//                                       <Image
//                                         src={category.thumbnail}
//                                         alt={category.title}
//                                         width={400}
//                                         height={300}
//                                         className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
//                                       />
//                                     </div>

//                                     {category.subProducts.length > 1 && (
//                                       <div className="flex flex-wrap gap-2 mt-4">
//                                         {category.subProducts.map(
//                                           (sp, spIdx) => (
//                                             <span
//                                               key={spIdx}
//                                               className={`text-xs px-3 py-1.5 rounded-full ${colorClasses.light} ${colorClasses.text} font-medium`}
//                                             >
//                                               {sp.name}
//                                             </span>
//                                           ),
//                                         )}
//                                       </div>
//                                     )}
//                                   </div>
//                                 </motion.div>
//                               </div>
//                             </div>
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </motion.div>

//           {/* Why Automation Matters Section */}
//      {/* Why Automation Matters Section */}
// <motion.div
//   className="mb-20"
//   initial={{ opacity: 0, y: 40 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true }}
//   transition={{ duration: 0.6 }}
// >
//   <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800/80 rounded-3xl p-10 lg:p-16 border border-slate-700/50 shadow-2xl shadow-black/20">

//     {/* Header */}
//     <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">

//       <div>
//         <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-300">
//           <Zap className="w-4 h-4 text-blue-400" />
//           Transformative Benefits
//         </div>

//         <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
//           Why Assembly
//           <br />
//           <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//             Automation Matters
//           </span>
//         </h2>

//         <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
//           Assembly automation drives productivity, ensures consistent
//           product quality, and enables scalable manufacturing operations
//           in modern industrial environments.
//         </p>
//       </div>

//       <div className="bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
//         <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
//           <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
//           Business Impact
//         </h3>

//         <div className="space-y-3">
//           {[
//             { label: "Throughput Increase", value: "↑ Higher", color: "text-emerald-400" },
//             { label: "Quality Variation", value: "↓ Minimal", color: "text-cyan-400" },
//             { label: "Operational Cost", value: "↓ Reduced", color: "text-blue-400" },
//             { label: "Scalability", value: "✓ Built-In", color: "text-violet-400" },
//           ].map((item, idx) => (
//             <div
//               key={idx}
//               className="group flex justify-between items-center p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 cursor-default"
//             >
//               <span className="text-slate-300 text-sm">{item.label}</span>
//               <span className={`${item.color} font-semibold text-sm`}>
//                 {item.value}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>

//     {/* Divider */}
//     <div className="h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent mb-10"></div>

//     {/* Benefits Grid */}
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
//       {automationBenefits.map((benefit, idx) => {
//         const IconComponent = benefit.icon;

//         return (
//           <motion.div
//             key={idx}
//             whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
//             className="group relative bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.07] hover:border-blue-400/25 rounded-2xl p-6 transition-all duration-300 cursor-default"
//           >
//             {/* Soft glow on hover */}
//             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-br from-blue-500/[0.06] via-transparent to-cyan-500/[0.04]"></div>

//             <div className="relative z-10">
//               <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/15 to-blue-600/10 border border-blue-500/10 group-hover:border-blue-500/20 flex items-center justify-center mb-4 transition-colors duration-300">
//                 <IconComponent className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
//               </div>

//               <h3 className="text-white font-semibold mb-2 text-[15px]">
//                 {benefit.title}
//               </h3>

//               <p className="text-slate-400 group-hover:text-slate-300/90 text-sm leading-relaxed transition-colors duration-300">
//                 {benefit.description}
//               </p>
//             </div>
//           </motion.div>
//         );
//       })}
//     </div>

//   </div>
// </motion.div>
//         </div>
//       </section>

//       {/* Product Viewer Modal */}
//       <AnimatePresence>
//         {activeViewer && activeCategory && activeSubProduct && (
//           <motion.div
//             className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setActiveViewer(null)}
//           >
//             <motion.div
//               className="bg-white rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl"
//               initial={{ scale: 0.9, y: 50, opacity: 0 }}
//               animate={{ scale: 1, y: 0, opacity: 1 }}
//               exit={{ scale: 0.9, y: 50, opacity: 0 }}
//               transition={{ duration: 0.4, type: "spring", damping: 25 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div
//                 className={`bg-gradient-to-r ${activeCategory.gradient} p-6 text-white`}
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
//                       {(() => {
//                         const CatIcon = activeCategory.icon;
//                         return <CatIcon className="w-6 h-6 text-white" />;
//                       })()}
//                     </div>
//                     <div>
//                       <p className="text-white/70 text-sm">
//                         {activeCategory.title}
//                       </p>
//                       <h3 className="text-2xl font-bold">
//                         {activeSubProduct.name}
//                       </h3>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3">
//                     {activeCategory.subProducts.length > 1 && (
//                       <span className="text-sm text-white/70 bg-white/10 px-3 py-1.5 rounded-full">
//                         {activeViewer.subProductIndex + 1} /{" "}
//                         {activeCategory.subProducts.length}
//                       </span>
//                     )}
//                     <motion.button
//                       onClick={() => setActiveViewer(null)}
//                       className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <X className="w-6 h-6" />
//                     </motion.button>
//                   </div>
//                 </div>

//                 {activeCategory.subProducts.length > 1 && (
//                   <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
//                     {activeCategory.subProducts.map((sp, spIdx) => (
//                       <button
//                         key={spIdx}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setActiveViewer((prev) => ({
//                             ...prev,
//                             subProductIndex: spIdx,
//                             imageIndex: 0,
//                           }));
//                         }}
//                         className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
//                           spIdx === activeViewer.subProductIndex
//                             ? "bg-white text-slate-900 shadow-lg"
//                             : "bg-white/10 text-white/80 hover:bg-white/20"
//                         }`}
//                       >
//                         {sp.name}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <div className="relative bg-gradient-to-br from-slate-50 to-white p-8">
//                 <div className="flex justify-center items-center min-h-[350px]">
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={`${activeViewer.subProductIndex}-${activeViewer.imageIndex}`}
//                       initial={{ opacity: 0, x: 50 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -50 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <Image
//                         src={activeSubProduct.images[activeViewer.imageIndex]}
//                         alt={activeSubProduct.name}
//                         width={600}
//                         height={400}
//                         className="max-h-[400px] w-auto object-contain"
//                       />
//                     </motion.div>
//                   </AnimatePresence>
//                 </div>

//                 {activeSubProduct.images.length > 1 && (
//                   <>
//                     <motion.button
//                       onClick={prevImage}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white hover:bg-slate-50 rounded-full shadow-lg border border-slate-200 transition-all duration-300"
//                       whileHover={{ scale: 1.1, x: -2 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <ChevronLeft className="w-6 h-6 text-slate-700" />
//                     </motion.button>
//                     <motion.button
//                       onClick={nextImage}
//                       className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white hover:bg-slate-50 rounded-full shadow-lg border border-slate-200 transition-all duration-300"
//                       whileHover={{ scale: 1.1, x: 2 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <ChevronRight className="w-6 h-6 text-slate-700" />
//                     </motion.button>
//                   </>
//                 )}

//                 {activeCategory.subProducts.length > 1 && (
//                   <div className="absolute bottom-4 right-4 flex items-center gap-2">
//                     <motion.button
//                       onClick={prevSubProduct}
//                       className={`p-2.5 rounded-xl bg-gradient-to-br ${activeCategory.gradient} text-white shadow-lg transition-all duration-300`}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       title="Previous product"
//                     >
//                       <ChevronLeft className="w-5 h-5" />
//                     </motion.button>
//                     <motion.button
//                       onClick={nextSubProduct}
//                       className={`p-2.5 rounded-xl bg-gradient-to-br ${activeCategory.gradient} text-white shadow-lg transition-all duration-300`}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       title="Next product"
//                     >
//                       <ChevronRight className="w-5 h-5" />
//                     </motion.button>
//                   </div>
//                 )}
//               </div>

//               {activeSubProduct.images.length > 1 && (
//                 <div className="p-4 bg-slate-50 border-t border-slate-100">
//                   <div className="flex justify-center gap-3">
//                     {activeSubProduct.images.map((img, idx) => (
//                       <motion.button
//                         key={idx}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setActiveViewer((prev) => ({
//                             ...prev,
//                             imageIndex: idx,
//                           }));
//                         }}
//                         className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
//                           idx === activeViewer.imageIndex
//                             ? `border-2 shadow-lg`
//                             : "border-slate-200 hover:border-slate-300"
//                         }`}
//                         style={
//                           idx === activeViewer.imageIndex
//                             ? { borderColor: activeCategory.accentColor }
//                             : {}
//                         }
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <Image
//                           src={img}
//                           alt={`${activeSubProduct.name} ${idx + 1}`}
//                           width={64}
//                           height={64}
//                           className="w-full h-full object-contain bg-white p-1"
//                         />
//                       </motion.button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Our Builds Section */}
//       <motion.div
//         className="mb-20 container mx-auto px-6"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="text-center mb-12">
//           <motion.div
//             className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-600 text-sm font-medium mb-4"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//           ></motion.div>
//           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
//             Our{" "}
//             <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
//               Builds
//             </span>
//           </h2>
//           <p className="text-slate-600 max-w-3xl mx-auto text-lg">
//             Explore our portfolio of successfully delivered automation solutions
//             across various industries
//           </p>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="relative"
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 via-transparent to-teal-50/50 rounded-3xl -z-10 blur-xl"></div>
//           <Carousel images={ourBuildsImages} />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default AssemblyAutomationSection;
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ChevronRight,
  ChevronLeft,
  Factory,
  Zap,
  DollarSign,
  Rocket,
  TrendingUp,
  Settings,
  Package,
  CheckCircle2,
  Target,
  Wrench,
  Cog,
  Clock,
  Award,
  Users,
  Globe,
  Cpu,
  Shield,
  Eye,
  RotateCcw,
  Layers,
  Bot,
  ChevronDown,
  Database,
  RefreshCw,
  ArrowRight,
  CircuitBoard,
  ScanLine,
  Scan,
  Palette,
  CheckSquare,
} from "lucide-react";

import Carousel from "./Carousel";

// Image arrays with descriptive alt texts
const ourBuildsImages = [
  {
    src: "/assets/assemblybending.webp",
    alt: "Automated assembly and bending station for sheet metal components",
  },
  {
    src: "/assets/controlpcba.webp",
    alt: "Control PCBA panel with integrated PLC and HMI for assembly line management",
  },
  {
    src: "/assets/conveyer.webp",
    alt: "Chain conveyor automation system with pallet fixtures for electronics assembly",
  },
  {
    src: "/assets/robotic.webp",
    alt: "6-axis robotic automation cell for precision pick and place operations",
  },
  {
    src: "/assets/steppermotor.webp",
    alt: "Stepper motor automated assembly system with torque verification",
  },
  {
    src: "/assets/assembly1.webp",
    alt: "Multi-station automated assembly line for automotive electronics",
  },
  {
    src: "/assets/assembly2.webp",
    alt: "Rotary indexing assembly system with integrated vision inspection",
  },
  {
    src: "/assets/assembly3.webp",
    alt: "Modular cellular assembly cell for high-mix production",
  },
  {
    src: "/assets/assembly4.webp",
    alt: "Conveyor-based assembly line with robotic dispensing station",
  },
  {
    src: "/assets/assembly5.webp",
    alt: "Automated assembly line with inline quality inspection and traceability",
  },
  {
    src: "/assets/assembly6.webp",
    alt: "Complete factory assembly automation system with safety guarding",
  },
];

const solutionCategories = [
  {
    id: 1,
    title: "Conveyors & Transfer Systems",
    icon: Layers,
    color: "blue",
    gradient: "from-blue-600 to-blue-400",
    bgGradient: "from-blue-50/80 to-blue-100/50",
    accentColor: "#3B82F6",
    thumbnail: "/assets/chain.webp",
    thumbnailAlt:
      "Chain conveyor transfer system with ESD-safe pallet fixtures",
    features: [
      "Provide structured and reliable material flow for automated assembly and inspection processes",
      "Seamlessly integrate drives, sensors, and intelligent control systems",
      "Modular design enables easy scaling, reconfiguration, and expansion",
      "Support synchronization and operation of multiple production lines",
      "Equipped with ESD-safe fixtures to protect sensitive electronic components",
      "Incorporate comprehensive safety features including guarding, interlocks, and emergency stops",
      "Ensure high productivity, process consistency, and operator safety",
    ],
    subProducts: [
      {
        name: "Chain Conveyor",
        images: [
          "/assets/Conveyorcpy.webp",
          "/assets/chain.webp",
          "/assets/pallet1.webp",
          "/assets/chain2.webp",
        ],
      },
      { name: "Belt Conveyor", images: ["/assets/belt (1).webp"] },
      {
        name: "Pallet Movers & Lifters",
        images: ["/assets/pallet (1).webp", "/assets/Lifter 1.1.webp"],
      },
    ],
  },
  {
    id: 2,
    title: "Cellular Cells",
    icon: Package,
    color: "purple",
    gradient: "from-purple-600 to-purple-400",
    bgGradient: "from-purple-50/80 to-purple-100/50",
    accentColor: "#9333EA",
    thumbnail: "/assets/SBDP.webp",
    thumbnailAlt:
      "Modular cellular manufacturing cell for multi-operation assembly",
    features: [
      "Flexible manufacturing cells that combine multiple operations into one optimized workspace",
      "Modular and scalable design to adapt quickly to changing products and volumes",
      "Seamless integration of assembly, testing, and inspection processes",
      "Reduced material handling and faster cycle times for higher productivity",
      "Improved quality and process consistency through controlled workflows",
      "Compact layouts that maximize factory floor utilization",
      "Designed with built-in safety and operator-friendly ergonomics",
    ],
    subProducts: [
      {
        name: "Modular Discrete Station",
        images: [
          "/assets/Cellular.webp",
          "/assets/Cellular2.webp",
          "/assets/SBDP.webp",
          "/assets/line1new.webp",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Rotary Indexing",
    icon: RotateCcw,
    color: "emerald",
    gradient: "from-emerald-600 to-emerald-400",
    bgGradient: "from-emerald-50/80 to-emerald-100/50",
    accentColor: "#059669",
    thumbnail: "/assets/Rotary2cpy.webp",
    thumbnailAlt:
      "Rotary indexing table for high-speed sequential assembly operations",
    features: [
      "Enable high-speed, precise, and repeatable part positioning",
      "Index components seamlessly through sequential assembly operations",
      "Reduce cycle times and increase overall production efficiency",
      "Support integration with automated assembly, testing, and inspection systems",
      "Modular design allows flexibility for different part sizes and assembly requirements",
      "Ensure consistent quality and process repeatability",
      "Built-in safety features for reliable and operator-friendly operation",
    ],
    subProducts: [
      {
        name: "Rotary Indexing Tables",
        images: [
          "/assets/Rotary2cpy.webp",
          "/assets/Rotarynew.webp",
          "/assets/rotary (1).webp",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Robotic Automation",
    icon: Bot,
    color: "orange",
    gradient: "from-orange-600 to-orange-400",
    bgGradient: "from-orange-50/80 to-orange-100/50",
    accentColor: "#EA580C",
    thumbnail: "/assets/RoboP&P2.webp",
    thumbnailAlt:
      "Robotic pick and place automation cell with vision-guided positioning",
    features: [
      "Enable flexible, fully automated production with reprogrammable robots for precision operations",
      "Adapt quickly to dynamic production environments and changing product lines",
      "Reduce manual intervention, ensuring consistent quality and high throughput",
      "Integrate seamlessly with assembly, testing, inspection, and material handling systems",
      "Incorporate advanced safety features including interlocks, light curtains, and emergency stops",
      "Enhance productivity while maintaining safe and ergonomic working conditions",
    ],
    subProducts: [
      {
        name: "Robotic Screw Fixing",
        images: ["/assets/ROBOT SCREWING -BCM Stn 2.webp"],
      },
      {
        name: "Robotic Soldering",
        images: ["/assets/Soldering Station1.webp"],
      },
      {
        name: "Robotic Dispensing",
        images: ["/assets/dispensing (1).webp", "/assets/Dispensing2copy.webp"],
      },
      {
        name: "Robotic Pick and Place",
        images: ["/assets/RoboP&P2.webp", "/assets/RoboP&Pcopy.webp"],
      },
    ],
  },
  {
    id: 5,
    title: "Vision Inspection",
    icon: Eye,
    color: "indigo",
    gradient: "from-indigo-600 to-indigo-400",
    bgGradient: "from-indigo-50/80 to-indigo-100/50",
    accentColor: "#4F46E5",
    thumbnail: "/assets/visionimg.webp",
    thumbnailAlt:
      "Machine vision inspection system with AI-powered defect detection",
    features: [
      "Leverage advanced cameras and AI-powered algorithms to detect defects with high accuracy",
      "Ensure consistent, defect-free manufacturing and superior product quality",
      "Inspect complex components quickly, reducing manual errors and rework",
      "Integrate seamlessly into assembly and production lines for real-time quality control",
      "Support scalable, flexible inspection for different product types and volumes",
      "Enable data-driven insights to optimize processes and improve efficiency",
    ],
    subProducts: [
      {
        name: "Vision Inspection System",
        images: [
          "/assets/visionimg.webp",
          "/assets/vision2.webp",
          "/assets/vision3.webp",
          "/assets/vision4.webp",
          "/assets/isight.webp",
        ],
      },
    ],
  },
];

const visionParameters = [
  {
    icon: CheckSquare,
    title: "Object Presence Verification",
    description: "Precise detection and validation of component presence",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: ScanLine,
    title: "High-Accuracy OCR",
    description: "Advanced optical character recognition reading",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Scan,
    title: "BLOB Detection",
    description: "Robust binary large object identification",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "Color Detection",
    description: "Reliable color verification and analysis",
    color: "from-cyan-500 to-teal-500",
  },
];

const automationBenefits = [
  {
    icon: TrendingUp,
    title: "Higher Throughput",
    description:
      "Automated assembly systems significantly increase production speed while maintaining consistent cycle times.",
    color: "blue",
  },
  {
    icon: Award,
    title: "Consistent Quality",
    description:
      "Precision-controlled automation minimizes human error and ensures repeatable, high-quality assembly.",
    color: "emerald",
  },
  {
    icon: DollarSign,
    title: "Cost Efficiency",
    description:
      "Reduced rework, scrap, and labor dependency lead to lower overall manufacturing costs.",
    color: "purple",
  },
  {
    icon: RefreshCw,
    title: "Scalability & Flexibility",
    description:
      "Automation enables quick adaptation to new product variants, volume changes, and evolving market demands.",
    color: "orange",
  },
  {
    icon: Shield,
    title: "Process Reliability",
    description:
      "Automated systems deliver stable, predictable performance with minimal variation across shifts and batches.",
    color: "indigo",
  },
  {
    icon: Database,
    title: "Data & Traceability",
    description:
      "Integrated sensors and software provide real-time production data for quality control and continuous improvement.",
    color: "cyan",
  },
];

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

const AssemblyAutomationSection = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [activeViewer, setActiveViewer] = useState(null);

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-500",
        text: "text-blue-600",
        light: "bg-blue-50",
        border: "border-blue-200",
        hover: "hover:bg-blue-600",
        gradient: "from-blue-500 to-blue-600",
        ring: "ring-blue-500",
        lightText: "text-blue-400",
      },
      purple: {
        bg: "bg-purple-500",
        text: "text-purple-600",
        light: "bg-purple-50",
        border: "border-purple-200",
        hover: "hover:bg-purple-600",
        gradient: "from-purple-500 to-purple-600",
        ring: "ring-purple-500",
        lightText: "text-purple-400",
      },
      emerald: {
        bg: "bg-emerald-500",
        text: "text-emerald-600",
        light: "bg-emerald-50",
        border: "border-emerald-200",
        hover: "hover:bg-emerald-600",
        gradient: "from-emerald-500 to-emerald-600",
        ring: "ring-emerald-500",
        lightText: "text-emerald-400",
      },
      orange: {
        bg: "bg-orange-500",
        text: "text-orange-600",
        light: "bg-orange-50",
        border: "border-orange-200",
        hover: "hover:bg-orange-600",
        gradient: "from-orange-500 to-orange-600",
        ring: "ring-orange-500",
        lightText: "text-orange-400",
      },
      indigo: {
        bg: "bg-indigo-500",
        text: "text-indigo-600",
        light: "bg-indigo-50",
        border: "border-indigo-200",
        hover: "hover:bg-indigo-600",
        gradient: "from-indigo-500 to-indigo-600",
        ring: "ring-indigo-500",
        lightText: "text-indigo-400",
      },
      cyan: {
        bg: "bg-cyan-500",
        text: "text-cyan-600",
        light: "bg-cyan-50",
        border: "border-cyan-200",
        hover: "hover:bg-cyan-600",
        gradient: "from-cyan-500 to-cyan-600",
        ring: "ring-cyan-500",
        lightText: "text-cyan-400",
      },
    };
    return colors[color] || colors.blue;
  };

  const openViewer = (category) => {
    setActiveViewer({
      categoryId: category.id,
      subProductIndex: 0,
      imageIndex: 0,
    });
  };

  const getActiveCategory = () => {
    if (!activeViewer) return null;
    return solutionCategories.find((c) => c.id === activeViewer.categoryId);
  };

  const getActiveSubProduct = () => {
    const cat = getActiveCategory();
    if (!cat) return null;
    return cat.subProducts[activeViewer.subProductIndex];
  };

  const nextSubProduct = (e) => {
    e.stopPropagation();
    const cat = getActiveCategory();
    if (!cat) return;
    setActiveViewer((prev) => ({
      ...prev,
      subProductIndex: (prev.subProductIndex + 1) % cat.subProducts.length,
      imageIndex: 0,
    }));
  };

  const prevSubProduct = (e) => {
    e.stopPropagation();
    const cat = getActiveCategory();
    if (!cat) return;
    setActiveViewer((prev) => ({
      ...prev,
      subProductIndex:
        prev.subProductIndex === 0
          ? cat.subProducts.length - 1
          : prev.subProductIndex - 1,
      imageIndex: 0,
    }));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const subProduct = getActiveSubProduct();
    if (!subProduct || subProduct.images.length <= 1) return;
    setActiveViewer((prev) => ({
      ...prev,
      imageIndex: (prev.imageIndex + 1) % subProduct.images.length,
    }));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const subProduct = getActiveSubProduct();
    if (!subProduct || subProduct.images.length <= 1) return;
    setActiveViewer((prev) => ({
      ...prev,
      imageIndex:
        prev.imageIndex === 0
          ? subProduct.images.length - 1
          : prev.imageIndex - 1,
    }));
  };

  const activeCategory = getActiveCategory();
  const activeSubProduct = getActiveSubProduct();

  return (
    <main className="bg-white min-h-screen">
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
            src="/assets/robotnew.webp"
            alt="Advanced assembly automation solutions by Micrologic — robotic integration, conveyors, and vision inspection systems"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>

        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

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
            className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                  Advanced Assembly Automation Solutions
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  We design and deliver advanced assembly automation systems
                  that combine{" "}
                  <strong className="font-semibold">robotics</strong>,{" "}
                  <strong className="font-semibold">
                    intelligent conveyors
                  </strong>
                  ,{" "}
                  <strong className="font-semibold">
                    rotary indexing platforms
                  </strong>
                  , and{" "}
                  <strong className="font-semibold">
                    machine vision inspection
                  </strong>{" "}
                  to create highly efficient manufacturing environments.
                </p>
              </motion.div>
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
            Assembly Automation
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
          {/* Precision Assembly Section */}
          <section
            aria-labelledby="precision-heading"
            className="mb-16 sm:mb-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10 sm:mb-12">
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    <CircuitBoard className="w-4 h-4" aria-hidden="true" />
                    <span>Precision Engineering</span>
                  </motion.div>
                  <h2
                    id="precision-heading"
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                  >
                    Precision Assembly for{" "}
                    <span className="text-transparent bg-clip-text bg-blue-600">
                      Critical Applications
                    </span>
                  </h2>
                  <p className="text-slate-600 max-w-3xl mx-auto text-base sm:text-lg">
                    We ensure highly precise assembly of products such as
                    electronic components, airbags, automotive lighting,
                    instrument panels, infotainment systems, medical devices, and
                    more.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    {
                      icon: Users,
                      title: "People-Assisted Semi-Automated",
                      description:
                        "Flexible solutions combining human expertise with automation for optimal efficiency and quality control.",
                      gradient: "from-blue-600 to-blue-500",
                      bgPattern: "bg-blue-50",
                    },
                    {
                      icon: Rocket,
                      title: "Fully Automatic High-Volume",
                      description:
                        "Lights-out automation systems designed for maximum throughput and 24/7 production capability.",
                      gradient: "from-purple-600 to-purple-500",
                      bgPattern: "bg-purple-50",
                    },
                  ].map((card, idx) => {
                    const IconComp = card.icon;
                    return (
                      <motion.article
                        key={idx}
                        className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-transparent transition-all duration-500 overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 }}
                        whileHover={{ y: -5 }}
                      >
                        <div
                          className={`absolute inset-0 ${card.bgPattern} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                          aria-hidden="true"
                        ></div>
                        <div
                          className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${card.gradient} opacity-5 rounded-full group-hover:scale-150 transition-transform duration-500`}
                          aria-hidden="true"
                        ></div>
                        <div className="relative z-10">
                          <div
                            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg mb-5`}
                            aria-hidden="true"
                          >
                            <IconComp className="w-7 h-7 text-white" />
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                            {card.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                            {card.description}
                          </p>
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </section>

          {/* Solutions Portfolio Section */}
          <section
            aria-labelledby="solutions-heading"
            className="mb-16 sm:mb-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-10 sm:mb-12">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-50 border border-purple-100 rounded-full text-purple-600 text-sm font-medium mb-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <Package className="w-4 h-4" aria-hidden="true" />
                  <span>Complete Solutions Portfolio</span>
                </motion.div>
                <h2
                  id="solutions-heading"
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                >
                  Our Assembly Automation Solutions
                </h2>
                <p className="text-slate-600 max-w-3xl mx-auto text-base sm:text-lg">
                  Comprehensive range of proven automation systems designed to
                  meet your unique manufacturing challenges
                </p>
              </div>

              {/* Solution Categories Accordion */}
              <div className="max-w-5xl mx-auto space-y-4">
                {solutionCategories.map((category, idx) => {
                  const IconComponent = category.icon;
                  const isExpanded = expandedCategory === category.id;
                  const colorClasses = getColorClasses(category.color);
                  const isVisionInspection = category.id === 5;
                  const sectionId = `solution-${category.id}`;
                  const contentId = `solution-content-${category.id}`;

                  return (
                    <motion.article
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                        isExpanded
                          ? `${colorClasses.border} shadow-lg`
                          : "border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md"
                      }`}
                    >
                      <button
                        id={sectionId}
                        onClick={() =>
                          setExpandedCategory(
                            isExpanded ? null : category.id
                          )
                        }
                        aria-expanded={isExpanded}
                        aria-controls={contentId}
                        className="w-full p-4 sm:p-6 flex items-center justify-between transition-colors duration-300 cursor-pointer text-left"
                      >
                        <div className="flex items-center gap-3 sm:gap-4">
                          <motion.div
                            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            aria-hidden="true"
                          >
                            <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                          </motion.div>
                          <div className="text-left">
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                              <span
                                className="text-slate-400 font-medium"
                                aria-hidden="true"
                              >
                                {String(idx + 1).padStart(2, "0")}
                              </span>
                              {category.title}
                            </h3>
                          </div>
                        </div>
                        <motion.span
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className={`w-10 h-10 rounded-full ${colorClasses.light} flex items-center justify-center flex-shrink-0`}
                          aria-hidden="true"
                        >
                          <ChevronDown
                            className={`w-5 h-5 ${colorClasses.text}`}
                          />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            id={contentId}
                            role="region"
                            aria-labelledby={sectionId}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div
                              className={`p-4 sm:p-6 pt-0 bg-gradient-to-br ${category.bgGradient}`}
                            >
                              <div
                                className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6"
                                aria-hidden="true"
                              ></div>

                              {isVisionInspection && (
                                <div className="mb-8">
                                  <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-800">
                                    <div className="flex items-center gap-3 sm:gap-4 mb-6">
                                      <div
                                        className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center"
                                        aria-hidden="true"
                                      >
                                        <Eye className="w-6 h-6 text-white" />
                                      </div>
                                      <div>
                                        <h4 className="text-lg sm:text-xl font-bold text-white">
                                          Vision Inspection Parameters
                                        </h4>
                                      </div>
                                    </div>

                                    <p className="text-slate-400 leading-relaxed mb-6 sm:mb-8 max-w-3xl text-sm sm:text-base">
                                      Our vision inspection platform uses
                                      intelligent algorithms and high-precision
                                      cameras to verify components, read
                                      markings, detect defects, and validate
                                      product quality in real time.
                                    </p>

                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                                      {visionParameters.map((param, pIdx) => {
                                        const ParamIcon = param.icon;
                                        return (
                                          <div
                                            key={pIdx}
                                            className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 hover:border-indigo-400/40 transition-all duration-300"
                                          >
                                            <div
                                              className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-3"
                                              aria-hidden="true"
                                            >
                                              <ParamIcon className="w-5 h-5 text-indigo-400" />
                                            </div>
                                            <h5 className="text-white font-semibold text-xs sm:text-sm mb-1">
                                              {param.title}
                                            </h5>
                                            <p className="text-slate-400 text-xs">
                                              {param.description}
                                            </p>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                              )}

                              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                                <div>
                                  <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                    <CheckCircle2
                                      className={`w-5 h-5 ${colorClasses.text}`}
                                      aria-hidden="true"
                                    />
                                    Key Features
                                  </h4>
                                  <ul className="space-y-3 list-none p-0 m-0">
                                    {category.features.map((feature, fIdx) => (
                                      <motion.li
                                        key={fIdx}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: fIdx * 0.05 }}
                                        className="flex items-start gap-3 group"
                                      >
                                        <div
                                          className={`w-2 h-2 rounded-full ${colorClasses.bg} mt-2 flex-shrink-0 group-hover:scale-125 transition-transform`}
                                          aria-hidden="true"
                                        ></div>
                                        <span className="text-slate-700 text-sm leading-relaxed">
                                          {feature}
                                        </span>
                                      </motion.li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                    <Package
                                      className={`w-5 h-5 ${colorClasses.text}`}
                                      aria-hidden="true"
                                    />
                                    Products
                                  </h4>

                                  <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1 }}
                                    onClick={() => openViewer(category)}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`View ${category.title} product images`}
                                    onKeyDown={(e) => {
                                      if (
                                        e.key === "Enter" ||
                                        e.key === " "
                                      ) {
                                        e.preventDefault();
                                        openViewer(category);
                                      }
                                    }}
                                    className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100 cursor-pointer hover:shadow-xl hover:border-blue-200 transition-all duration-300 group relative overflow-hidden"
                                  >
                                    <div
                                      className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                                      aria-hidden="true"
                                    ></div>

                                    <div className="relative z-10">
                                      <div className="w-full h-40 sm:h-48 bg-slate-50 rounded-xl flex items-center justify-center overflow-hidden border border-slate-100 mb-4">
                                        <Image
                                          src={category.thumbnail}
                                          alt={category.thumbnailAlt}
                                          width={400}
                                          height={300}
                                          loading="lazy"
                                          sizes="(max-width: 768px) 100vw, 50vw"
                                          quality={80}
                                          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                        />
                                      </div>

                                      {category.subProducts.length > 1 && (
                                        <div className="flex flex-wrap gap-2 mt-4">
                                          {category.subProducts.map(
                                            (sp, spIdx) => (
                                              <span
                                                key={spIdx}
                                                className={`text-xs px-3 py-1.5 rounded-full ${colorClasses.light} ${colorClasses.text} font-medium`}
                                              >
                                                {sp.name}
                                              </span>
                                            )
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  </motion.div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>
          </section>

          {/* Why Automation Matters Section */}
          <section
            aria-labelledby="benefits-heading"
            className="mb-16 sm:mb-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800/80 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-16 border border-slate-700/50 shadow-2xl shadow-black/20">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-10 sm:mb-14">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-300">
                      <Zap className="w-4 h-4 text-blue-400" aria-hidden="true" />
                      Transformative Benefits
                    </div>

                    <h2
                      id="benefits-heading"
                      className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
                    >
                      Why Assembly
                      <br />
                      <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Automation Matters
                      </span>
                    </h2>

                    <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
                      Assembly automation drives productivity, ensures
                      consistent product quality, and enables scalable
                      manufacturing operations in modern industrial
                      environments.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-sm">
                    <p className="text-white font-semibold mb-6 flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-blue-400"
                        aria-hidden="true"
                      ></span>
                      Business Impact
                    </p>

                    <div className="space-y-3">
                      {[
                        {
                          label: "Throughput Increase",
                          value: "↑ Higher",
                          color: "text-emerald-400",
                        },
                        {
                          label: "Quality Variation",
                          value: "↓ Minimal",
                          color: "text-cyan-400",
                        },
                        {
                          label: "Operational Cost",
                          value: "↓ Reduced",
                          color: "text-blue-400",
                        },
                        {
                          label: "Scalability",
                          value: "✓ Built-In",
                          color: "text-violet-400",
                        },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="group flex justify-between items-center p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
                        >
                          <span className="text-slate-300 text-sm">
                            {item.label}
                          </span>
                          <span
                            className={`${item.color} font-semibold text-sm`}
                          >
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className="h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent mb-8 sm:mb-10"
                  aria-hidden="true"
                ></div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {automationBenefits.map((benefit, idx) => {
                    const IconComponent = benefit.icon;
                    return (
                      <motion.article
                        key={idx}
                        whileHover={{
                          y: -4,
                          transition: { duration: 0.25, ease: "easeOut" },
                        }}
                        className="group relative bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.07] hover:border-blue-400/25 rounded-2xl p-5 sm:p-6 transition-all duration-300"
                      >
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-br from-blue-500/[0.06] via-transparent to-cyan-500/[0.04]"
                          aria-hidden="true"
                        ></div>

                        <div className="relative z-10">
                          <div
                            className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/15 to-blue-600/10 border border-blue-500/10 group-hover:border-blue-500/20 flex items-center justify-center mb-4 transition-colors duration-300"
                            aria-hidden="true"
                          >
                            <IconComponent className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                          </div>

                          <h3 className="text-white font-semibold mb-2 text-sm sm:text-[15px]">
                            {benefit.title}
                          </h3>

                          <p className="text-slate-400 group-hover:text-slate-300/90 text-xs sm:text-sm leading-relaxed transition-colors duration-300">
                            {benefit.description}
                          </p>
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </div>

      {/* Product Viewer Modal */}
      <AnimatePresence>
        {activeViewer && activeCategory && activeSubProduct && (
          <motion.div
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveViewer(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeCategory.title} — ${activeSubProduct.name} product viewer`}
          >
            <motion.div
              className="bg-white rounded-2xl sm:rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ duration: 0.4, type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`bg-gradient-to-r ${activeCategory.gradient} p-4 sm:p-6 text-white`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                      aria-hidden="true"
                    >
                      {(() => {
                        const CatIcon = activeCategory.icon;
                        return <CatIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />;
                      })()}
                    </div>
                    <div>
                      <p className="text-white/70 text-xs sm:text-sm">
                        {activeCategory.title}
                      </p>
                      <p className="text-lg sm:text-2xl font-bold">
                        {activeSubProduct.name}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3">
                    {activeCategory.subProducts.length > 1 && (
                      <span className="text-xs sm:text-sm text-white/70 bg-white/10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                        {activeViewer.subProductIndex + 1} /{" "}
                        {activeCategory.subProducts.length}
                      </span>
                    )}
                    <motion.button
                      onClick={() => setActiveViewer(null)}
                      className="p-2 sm:p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Close product viewer"
                    >
                      <X className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.button>
                  </div>
                </div>

                {activeCategory.subProducts.length > 1 && (
                  <div
                    className="flex gap-2 mt-4 overflow-x-auto pb-1"
                    role="tablist"
                    aria-label="Product variants"
                  >
                    {activeCategory.subProducts.map((sp, spIdx) => (
                      <button
                        key={spIdx}
                        role="tab"
                        aria-selected={spIdx === activeViewer.subProductIndex}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveViewer((prev) => ({
                            ...prev,
                            subProductIndex: spIdx,
                            imageIndex: 0,
                          }));
                        }}
                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                          spIdx === activeViewer.subProductIndex
                            ? "bg-white text-slate-900 shadow-lg"
                            : "bg-white/10 text-white/80 hover:bg-white/20"
                        }`}
                      >
                        {sp.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative bg-gradient-to-br from-slate-50 to-white p-4 sm:p-8">
                <div className="flex justify-center items-center min-h-[250px] sm:min-h-[350px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${activeViewer.subProductIndex}-${activeViewer.imageIndex}`}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={
                          activeSubProduct.images[activeViewer.imageIndex]
                        }
                        alt={`${activeSubProduct.name} — Image ${activeViewer.imageIndex + 1} of ${activeSubProduct.images.length}`}
                        width={600}
                        height={400}
                        loading="lazy"
                        sizes="(max-width: 768px) 90vw, 600px"
                        quality={85}
                        className="max-h-[300px] sm:max-h-[400px] w-auto object-contain"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {activeSubProduct.images.length > 1 && (
                  <>
                    <motion.button
                      onClick={prevImage}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white hover:bg-slate-50 rounded-full shadow-lg border border-slate-200 transition-all duration-300"
                      whileHover={{ scale: 1.1, x: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
                    </motion.button>
                    <motion.button
                      onClick={nextImage}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white hover:bg-slate-50 rounded-full shadow-lg border border-slate-200 transition-all duration-300"
                      whileHover={{ scale: 1.1, x: 2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
                    </motion.button>
                  </>
                )}

                {activeCategory.subProducts.length > 1 && (
                  <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex items-center gap-2">
                    <motion.button
                      onClick={prevSubProduct}
                      className={`p-2 sm:p-2.5 rounded-xl bg-gradient-to-br ${activeCategory.gradient} text-white shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Previous product variant"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.button>
                    <motion.button
                      onClick={nextSubProduct}
                      className={`p-2 sm:p-2.5 rounded-xl bg-gradient-to-br ${activeCategory.gradient} text-white shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Next product variant"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.button>
                  </div>
                )}
              </div>

              {activeSubProduct.images.length > 1 && (
                <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-100">
                  <div
                    className="flex justify-center gap-2 sm:gap-3"
                    role="tablist"
                    aria-label="Image thumbnails"
                  >
                    {activeSubProduct.images.map((img, idx) => (
                      <motion.button
                        key={idx}
                        role="tab"
                        aria-selected={idx === activeViewer.imageIndex}
                        aria-label={`View image ${idx + 1}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveViewer((prev) => ({
                            ...prev,
                            imageIndex: idx,
                          }));
                        }}
                        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          idx === activeViewer.imageIndex
                            ? "shadow-lg"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                        style={
                          idx === activeViewer.imageIndex
                            ? { borderColor: activeCategory.accentColor }
                            : {}
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Image
                          src={img}
                          alt={`${activeSubProduct.name} thumbnail ${idx + 1}`}
                          width={64}
                          height={64}
                          loading="lazy"
                          quality={60}
                          className="w-full h-full object-contain bg-white p-1"
                        />
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Our Builds Section */}
      <section
        aria-labelledby="builds-heading"
        className="mb-16 sm:mb-20 container mx-auto px-4 sm:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10 sm:mb-12">
            <h2
              id="builds-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                Builds
              </span>
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-base sm:text-lg">
              Explore our portfolio of successfully delivered assembly
              automation solutions across various industries
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 via-transparent to-teal-50/50 rounded-3xl -z-10 blur-xl"
              aria-hidden="true"
            ></div>
            <Carousel images={ourBuildsImages} />
          </motion.div>
        </motion.div>
      </section>

      {/* Other Solutions Section */}
      <aside
        aria-labelledby="other-solutions-heading"
        className="relative bg-white py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-16 overflow-hidden"
      >
        {/* Background Elements */}
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
                Beyond Assembly Automation
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
                    stroke="url(#assembly-underline)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="assembly-underline"
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
              Comprehensive automation solutions spanning testing, traceability,
              and digital transformation — engineered for manufacturing
              excellence
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
};

export default AssemblyAutomationSection;