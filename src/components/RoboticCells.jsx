// "use client";

// import React, { useState, useRef, useMemo } from "react";
// import Image from "next/image";
// import { 
//   Bot, 
//   Wrench, 
//   BarChart3, 
//   Zap, 
//   RefreshCw, 
//   Shield, 
//   Smartphone, 
//   Car, 
//   Heart, 
//   Home,
//   Target,
//   Cog,
//   Clock,
//   Box,
//   Ruler,
//   Database,
//   Thermometer,
//   ArrowRight,
//   X,
//   ZoomIn,
//   Mail,
//   FileText,
//   CheckCircle2,
//   Gauge,
//   Activity,
//   Settings,
//   Eye,
//   Package,
//   Play,
//   Pause,
//   Droplet,
//   Search
// } from "lucide-react";

// const Badge = ({ children, variant = "primary", icon: Icon }) => {
//   const variants = {
//     primary: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white",
//     secondary: "bg-gradient-to-r from-cyan-600 to-blue-600 text-white",
//     accent: "bg-gradient-to-r from-pink-600 to-rose-600 text-white",
//   };

//   return (
//     <span className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full ${variants[variant]} text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}>
//       {Icon && <Icon className="w-3 h-3 sm:w-4 sm:h-4" />}
//       {children}
//     </span>
//   );
// };

// const VideoPlayer = ({ src, title, description, icon: Icon, gradient }) => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [showControls, setShowControls] = useState(false);

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const handleMouseEnter = () => {
//     setShowControls(true);
//     if (videoRef.current) {
//       videoRef.current.play();
//       setIsPlaying(true);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (videoRef.current) {
//       videoRef.current.pause();
//       setIsPlaying(false);
//     }
//     setShowControls(false);
//   };

//   const handleTouchStart = () => {
//     setShowControls(true);
//     if (videoRef.current) {
//       videoRef.current.play();
//       setIsPlaying(true);
//     }
//   };

//   return (
//     <div 
//       className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500 bg-slate-900"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       onTouchStart={handleTouchStart}
//     >
//       <video
//         ref={videoRef}
//         src={src}
//         loop
//         muted={true}
//         playsInline
//         className="w-full h-full object-cover min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px]"
//         onClick={togglePlay}
//       />

//       <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 pointer-events-none`}></div>

//       {!isPlaying && (
//         <div className="absolute inset-0 flex items-center justify-center">
//           <button
//             onClick={togglePlay}
//             className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 hover:bg-white shadow-2xl flex items-center justify-center text-purple-600 hover:scale-110 transition-all duration-300"
//           >
//             <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1" />
//           </button>
//         </div>
//       )}

//       <div className={`absolute top-0 left-0 right-0 p-3 sm:p-4 md:p-6 ${showControls || !isPlaying ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300`}>
//         <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
//           <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-xl flex-shrink-0`}>
//             <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
//           </div>
//           <div className="flex-1 text-white">
//             <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-0.5 sm:mb-1">{title}</h3>
//             <p className="text-xs sm:text-sm text-white/90 line-clamp-2">{description}</p>
//           </div>
//         </div>
//       </div>

//       <div className={`absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 ${showControls || !isPlaying ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-300`}>
//         <div className="flex items-center gap-2 sm:gap-3">
//           <button
//             onClick={togglePlay}
//             className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/95 hover:bg-white shadow-lg flex items-center justify-center text-slate-900 hover:scale-105 transition-all duration-200"
//           >
//             {isPlaying ? (
//               <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
//             ) : (
//               <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />
//             )}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const FeatureCard = ({ icon: Icon, title, description, gradient }) => (
//   <div className="group relative p-4 sm:p-5 md:p-6 bg-white rounded-xl sm:rounded-2xl border-2 border-slate-100 hover:border-purple-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden">
//     <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 ${gradient} opacity-5 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 group-hover:scale-150 transition-transform duration-500`}></div>
    
//     <div className="relative z-10">
//       <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
//         <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
//       </div>
//       <h3 className="font-bold text-base sm:text-lg md:text-xl text-slate-900 mb-2 sm:mb-3">{title}</h3>
//       <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{description}</p>
//     </div>
//   </div>
// );

// const ApplicationCard = ({ title, description, icon: Icon, stats }) => (
//   <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-slate-100 hover:border-indigo-300 shadow-md hover:shadow-xl transition-all duration-300">
//     <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
//       <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white flex-shrink-0 shadow-lg">
//         <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
//       </div>
//       <div>
//         <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-1 sm:mb-2">{title}</h4>
//         <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{description}</p>
//       </div>
//     </div>
//     {stats && (
//       <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 sm:gap-3">
//         {stats.map((stat, idx) => (
//           <div key={idx} className="text-center">
//             <div className="text-lg sm:text-xl font-bold text-indigo-600">{stat.value}</div>
//             <div className="text-xs text-slate-500 mt-0.5 sm:mt-1">{stat.label}</div>
//           </div>
//         ))}
//       </div>
//     )}
//   </div>
// );

// const SpecificationItem = ({ label, value, icon: Icon }) => (
//   <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-br from-slate-50 to-white rounded-lg sm:rounded-xl border border-slate-200 hover:border-purple-300 transition-all duration-200">
//     <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
//       <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
//     </div>
//     <div className="flex-1 min-w-0">
//       <div className="text-xs sm:text-sm font-semibold text-slate-900 mb-0.5 sm:mb-1">{label}</div>
//       <div className="text-xs sm:text-sm text-slate-600">{value}</div>
//     </div>
//   </div>
// );

// const ImageModal = ({ src, alt, onClose }) => {
//   if (!src) return null;
  
//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 sm:p-4 backdrop-blur-sm animate-fadeIn"
//       onClick={onClose}
//     >
//       <div className="max-w-7xl w-full rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-2xl animate-scaleIn" onClick={(e) => e.stopPropagation()}>
//         <div className="relative">
//           <Image 
//             src={src} 
//             alt={alt} 
//             width={1200} 
//             height={800} 
//             className="w-full h-auto object-contain bg-slate-900 max-h-[70vh] sm:max-h-[85vh]" 
//           />
//           <button
//             onClick={onClose}
//             className="absolute top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white shadow-2xl flex items-center justify-center text-slate-700 hover:text-slate-900 transition-all duration-200 hover:scale-110"
//           >
//             <X className="w-5 h-5 sm:w-6 sm:h-6" />
//           </button>
//         </div>
//         <div className="p-4 sm:p-6 bg-gradient-to-r from-slate-50 to-white border-t-2 border-slate-200">
//           <p className="text-sm sm:text-base font-semibold text-slate-800">{alt}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RoboticCells = () => {
//   const [showModal, setShowModal] = useState(false);

//   const features = useMemo(() => [
//     {
//       icon: Bot,
//       title: "Automated Assembly",
//       description: "High-precision robotic arms perform complex assembly tasks with consistent accuracy, reducing human error and increasing throughput.",
//       gradient: "from-purple-500 to-indigo-600"
//     },
//     {
//       icon: Wrench,
//       title: "Precision Screwing",
//       description: "Torque-controlled screwing with real-time monitoring ensures every fastener meets exact specifications for quality assurance.",
//       gradient: "from-cyan-500 to-blue-600"
//     },
//     {
//       icon: BarChart3,
//       title: "Quality Inspection",
//       description: "Integrated vision systems and sensors perform 100% inspection, detecting defects and ensuring compliance with standards.",
//       gradient: "from-pink-500 to-rose-600"
//     },
//     {
//       icon: Zap,
//       title: "Fast Deployment",
//       description: "Modular design allows rapid installation and reconfiguration to adapt to changing production requirements.",
//       gradient: "from-amber-500 to-orange-600"
//     },
//     {
//       icon: RefreshCw,
//       title: "Flexible Integration",
//       description: "Seamlessly integrates with existing production lines, PLCs, and MES systems for unified manufacturing control.",
//       gradient: "from-green-500 to-emerald-600"
//     },
//     {
//       icon: Shield,
//       title: "Safety Systems",
//       description: "Advanced safety features including light curtains, emergency stops, and collaborative robot technology for operator protection.",
//       gradient: "from-red-500 to-pink-600"
//     }
//   ], []);

//   const applications = useMemo(() => [
//     {
//       title: "Electronics Assembly",
//       description: "Precise component placement, screwing, and testing for PCBs, consumer electronics, and telecommunications equipment.",
//       icon: Smartphone,
//       stats: [
//         { value: "±0.05mm", label: "Positioning" },
//         { value: "99.9%", label: "Accuracy" }
//       ]
//     },
//     {
//       title: "Automotive Components",
//       description: "Automated assembly of sensors, control units, and mechanical assemblies with full traceability.",
//       icon: Car,
//       stats: [
//         { value: "0.1-5 Nm", label: "Torque Range" },
//         { value: "100%", label: "Inspection" }
//       ]
//     },
//     {
//       title: "Medical Devices",
//       description: "Clean-room compatible cells for assembling medical instruments and diagnostic equipment with validation.",
//       icon: Heart,
//       stats: [
//         { value: "ISO 7", label: "Clean Room" },
//         { value: "FDA", label: "Compliant" }
//       ]
//     },
//     {
//       title: "Consumer Products",
//       description: "High-speed assembly lines for appliances, tools, and household products with flexible changeover.",
//       icon: Home,
//       stats: [
//         { value: "< 5 min", label: "Changeover" },
//         { value: "24/7", label: "Operation" }
//       ]
//     }
//   ], []);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
//       {/* HERO SECTION */}
//       <header className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50">
//         {/* Decorative Background */}
//         <div className="absolute inset-0 -z-10 overflow-hidden">
//           <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
//             {/* Text Content */}
//             <div className="space-y-6 sm:space-y-8">
//               <div className="space-y-4 sm:space-y-6">
//                 <Badge variant="primary" icon={Bot}>
//                   Industrial Automation Excellence
//                 </Badge>

//                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
//                   <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
//                     Robotic Assembly
//                   </span>
//                   <br />
//                   <span className="text-slate-900">Cells</span>
//                 </h1>

//                 <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-700 leading-relaxed">
//                   Precision automation for modern manufacturing
//                 </p>

//                 <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
//                   Our robotic cells deliver consistent quality, increased throughput, and flexible automation 
//                   for assembly, screwing, inspection, and material handling applications across industries.
//                 </p>
//               </div>

//               {/* CTA Buttons */}
//               <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
//                 <a
//                   href="#showcase"
//                   className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
//                 >
//                   <span>Watch Demos</span>
//                   <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
//                 </a>

//                 <a
//                   href="#features"
//                   className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-slate-300 bg-white text-slate-900 font-semibold shadow-sm hover:shadow-md hover:border-purple-400 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
//                 >
//                   <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
//                   Key Features
//                 </a>
//               </div>

//               {/* Quick Stats */}
//               <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4">
//                 <div className="px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-white border-2 border-purple-200 shadow-sm">
//                   <div className="text-xl sm:text-2xl font-bold text-purple-600">40%</div>
//                   <div className="text-xs text-slate-600">Faster Production</div>
//                 </div>
//                 <div className="px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-white border-2 border-indigo-200 shadow-sm">
//                   <div className="text-xl sm:text-2xl font-bold text-indigo-600">99.9%</div>
//                   <div className="text-xs text-slate-600">Quality Rate</div>
//                 </div>
//                 <div className="px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-white border-2 border-cyan-200 shadow-sm">
//                   <div className="text-xl sm:text-2xl font-bold text-cyan-600">24/7</div>
//                   <div className="text-xs text-slate-600">Operation</div>
//                 </div>
//               </div>
//             </div>

//             {/* Hero Image */}
//             <div className="relative mt-8 lg:mt-0">
//               <div 
//                 className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1 sm:hover:-translate-y-2"
//                 onClick={() => setShowModal(true)}
//               >
//                 <Image
//                   src="/assets/Robotic Screwing.JPG"
//                   alt="Robotic screwing system in operation"
//                   width={800}
//                   height={600}
//                   className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
//                   priority
//                 />
                
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
//                     <p className="font-bold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">Precision Robotic Screwing</p>
//                     <p className="text-xs sm:text-sm text-white/90">Click to view full size</p>
//                   </div>
//                 </div>

//                 {/* Zoom Icon */}
//                 <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
//                   <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
//                 </div>
//               </div>

//               {/* Floating Info Cards - Hidden on mobile */}
//               <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border-2 border-purple-200 hidden md:block">
//                 <div className="flex items-center gap-2 sm:gap-3">
//                   <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white">
//                     <Cog className="w-5 h-5 sm:w-6 sm:h-6" />
//                   </div>
//                   <div>
//                     <div className="text-xs text-slate-500">Torque Accuracy</div>
//                     <div className="font-bold text-sm sm:text-base text-slate-900">±2% Precision</div>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border-2 border-cyan-200 hidden md:block">
//                 <div className="flex items-center gap-2 sm:gap-3">
//                   <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
//                     <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
//                   </div>
//                   <div>
//                     <div className="text-xs text-slate-500">Cycle Time</div>
//                     <div className="font-bold text-sm sm:text-base text-slate-900">3-8 Seconds</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* MAIN CONTENT */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
//         {/* Video Showcase Section */}
//         <section id="showcase" className="mb-16 sm:mb-20 lg:mb-24">
//           <div className="text-center mb-8 sm:mb-10 md:mb-12">
//             <Badge variant="primary" icon={Play}>
//               See It In Action
//             </Badge>
//             <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
//               Our Technology at Work
//             </h2>
//             <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
//               Experience the precision and efficiency of our robotic cells through real-world applications
//             </p>
//             <div className="mt-4 sm:mt-6 w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto rounded-full"></div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
//             {/* Sealant Dispensing Video */}
//             <VideoPlayer
//               src="/assets/Sealant_Dispensing.mp4"
//               title="Automated Sealant Dispensing"
//               description="Precision robotic dispensing with consistent bead quality and path accuracy"
//               icon={Droplet}
//               gradient="from-cyan-500 to-blue-600"
//             />

//             {/* Vehicle Inspection Video */}
//             <VideoPlayer
//               src="/assets/Vehicle_Inspection.mp4"
//               title="Intelligent Vehicle Inspection"
//               description="AI-powered vision systems for comprehensive quality control and defect detection"
//               icon={Search}
//               gradient="from-purple-500 to-indigo-600"
//             />
//           </div>

//           {/* Video Stats */}
//           <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
//             {[
//               { icon: Droplet, label: "Dispensing Accuracy", value: "±0.1mm", color: "from-cyan-500 to-blue-600" },
//               { icon: Clock, label: "Cycle Time", value: "< 30s", color: "from-purple-500 to-indigo-600" },
//               { icon: Eye, label: "Defect Detection", value: "99.8%", color: "from-pink-500 to-rose-600" },
//               { icon: CheckCircle2, label: "Quality Pass Rate", value: "99.5%", color: "from-green-500 to-emerald-600" }
//             ].map((stat, idx) => (
//               <div key={idx} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-slate-100 shadow-lg text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
//                 <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mx-auto mb-2 sm:mb-3 shadow-lg`}>
//                   <stat.icon className="w-6 h-6 sm:w-7 sm:h-7" />
//                 </div>
//                 <div className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
//                 <div className="text-xs sm:text-sm font-semibold text-slate-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Features Section */}
//         <section id="features" className="mb-16 sm:mb-20">
//           <div className="text-center mb-8 sm:mb-10 md:mb-12">
//             <Badge variant="secondary" icon={Zap}>
//               Core Capabilities
//             </Badge>
//             <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
//               Why Choose Our Robotic Cells
//             </h2>
//             <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
//               Advanced automation technology designed to transform your production line with precision, 
//               flexibility, and reliability.
//             </p>
//             <div className="mt-4 sm:mt-6 w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
//             {features.map((feature, idx) => (
//               <FeatureCard key={idx} {...feature} />
//             ))}
//           </div>
//         </section>

//         {/* Applications Section */}
//         <section id="applications" className="mb-16 sm:mb-20">
//           <div className="text-center mb-8 sm:mb-10 md:mb-12">
//             <Badge variant="accent" icon={Target}>
//               Industry Applications
//             </Badge>
//             <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
//               Proven Across Industries
//             </h2>
//             <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
//               From electronics to automotive, our robotic cells deliver consistent results 
//               in demanding production environments.
//             </p>
//             <div className="mt-4 sm:mt-6 w-20 sm:w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-600 mx-auto rounded-full"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
//             {applications.map((app, idx) => (
//               <ApplicationCard key={idx} {...app} />
//             ))}
//           </div>
//         </section>

//         {/* Technical Specifications */}
//         <section className="mb-16 sm:mb-20">
//           <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8 lg:p-12 text-white shadow-2xl">
//             <div className="text-center mb-8 sm:mb-10">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Technical Specifications</h2>
//               <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto px-4">
//                 Engineered for precision, reliability, and performance in industrial environments
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
//               <SpecificationItem
//                 icon={Target}
//                 label="Positioning Accuracy"
//                 value="±0.05 mm repeatability across all axes"
//               />
//               <SpecificationItem
//                 icon={Cog}
//                 label="Torque Control"
//                 value="0.1 - 5.0 Nm with ±2% accuracy"
//               />
//               <SpecificationItem
//                 icon={Clock}
//                 label="Cycle Time"
//                 value="3-8 seconds per assembly operation"
//               />
//               <SpecificationItem
//                 icon={Box}
//                 label="Payload Capacity"
//                 value="Up to 10 kg with precision handling"
//               />
//               <SpecificationItem
//                 icon={Ruler}
//                 label="Working Envelope"
//                 value="800mm reach, customizable workspace"
//               />
//               <SpecificationItem
//                 icon={RefreshCw}
//                 label="Integration"
//                 value="Supports major PLCs and MES systems"
//               />
//               <SpecificationItem
//                 icon={Shield}
//                 label="Safety Standards"
//                 value="ISO 10218, CE certified with safety PLC"
//               />
//               <SpecificationItem
//                 icon={Thermometer}
//                 label="Operating Environment"
//                 value="5-40°C, optional clean room configuration"
//               />
//               <SpecificationItem
//                 icon={Database}
//                 label="Data Logging"
//                 value="Real-time monitoring with full traceability"
//               />
//             </div>
//           </div>
//         </section>

//         {/* Process Flow */}
//         <section className="mb-16 sm:mb-20">
//           <div className="text-center mb-8 sm:mb-10 md:mb-12">
//             <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
//               How It Works
//             </h2>
//             <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
//               A streamlined workflow from part loading to quality verification
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
//             {[
//               {
//                 step: "01",
//                 title: "Part Loading",
//                 description: "Automated or manual loading of components into fixtures",
//                 color: "from-purple-500 to-indigo-600",
//                 icon: Package
//               },
//               {
//                 step: "02",
//                 title: "Vision Inspection",
//                 description: "Camera systems verify part presence and orientation",
//                 color: "from-cyan-500 to-blue-600",
//                 icon: Eye
//               },
//               {
//                 step: "03",
//                 title: "Assembly & Screwing",
//                 description: "Robotic arms perform precise assembly operations",
//                 color: "from-pink-500 to-rose-600",
//                 icon: Settings
//               },
//               {
//                 step: "04",
//                 title: "Quality Check",
//                 description: "Final inspection and data logging before unload",
//                 color: "from-green-500 to-emerald-600",
//                 icon: CheckCircle2
//               }
//             ].map((item, idx) => (
//               <div key={idx} className="relative">
//                 <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-slate-100 hover:border-purple-300 shadow-lg hover:shadow-xl transition-all duration-300">
//                   <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${item.color} text-white font-bold text-xl sm:text-2xl mb-3 sm:mb-4 shadow-lg`}>
//                     <item.icon className="w-7 h-7 sm:w-8 sm:h-8" />
//                   </div>
//                   <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-5xl sm:text-6xl font-black text-slate-100">
//                     {item.step}
//                   </div>
//                   <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-1 sm:mb-2 relative z-10">{item.title}</h3>
//                   <p className="text-xs sm:text-sm text-slate-600 relative z-10">{item.description}</p>
//                 </div>
//                 {idx < 3 && (
//                   <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
//                     <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 stroke-[3]" />
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Benefits Grid */}
//         <section className="mb-16 sm:mb-20">
//           <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 sm:p-8 lg:p-12 border-2 border-indigo-100">
//             <div className="text-center mb-8 sm:mb-10">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
//                 Measurable Benefits
//               </h2>
//               <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4">
//                 Real-world improvements delivered by our robotic assembly cells
//               </p>
//             </div>

//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
//               {[
//                 {
//                   icon: Gauge,
//                   value: "40%",
//                   label: "Productivity Increase",
//                   color: "from-purple-500 to-indigo-600"
//                 },
//                 {
//                   icon: CheckCircle2,
//                   value: "99.9%",
//                   label: "Quality Consistency",
//                   color: "from-cyan-500 to-blue-600"
//                 },
//                 {
//                   icon: Clock,
//                   value: "< 8s",
//                   label: "Average Cycle Time",
//                   color: "from-pink-500 to-rose-600"
//                 },
//                 {
//                   icon: Activity,
//                   value: "24/7",
//                   label: "Continuous Operation",
//                   color: "from-green-500 to-emerald-600"
//                 }
//               ].map((benefit, idx) => (
//                 <div key={idx} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
//                   <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white mx-auto mb-3 sm:mb-4 shadow-lg`}>
//                     <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8" />
//                   </div>
//                   <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1 sm:mb-2">{benefit.value}</div>
//                   <div className="text-xs sm:text-sm font-semibold text-slate-600">{benefit.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 p-6 sm:p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full -mr-24 -mt-24 sm:-mr-32 sm:-mt-32 blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full -ml-24 -mb-24 sm:-ml-32 sm:-mb-32 blur-3xl"></div>
          
//           <div className="relative z-10 max-w-3xl mx-auto text-center">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
//               Ready to Automate Your Production?
//             </h2>
//             <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 px-4">
//               Our engineering team will work with you to design a custom robotic cell 
//               that meets your specific requirements and integrates seamlessly with your existing processes.
//             </p>
//             <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center px-4">
//               <a
//                 href="/contact"
//                 className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white text-purple-600 font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
//               >
//                 <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
//                 Request Consultation
//               </a>
//               <a
//                 href="#applications"
//                 className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
//               >
//                 <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
//                 Download Brochure
//               </a>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Image Modal */}
//       {showModal && (
//         <ImageModal
//           src="/assets/Robotic Screwing.JPG"
//           alt="Robotic screwing system - High precision automated assembly cell"
//           onClose={() => setShowModal(false)}
//         />
//       )}

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes scaleIn {
//           from {
//             opacity: 0;
//             transform: scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.2s ease-out;
//         }
//         .animate-scaleIn {
//           animation: scaleIn 0.3s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default RoboticCells;
"use client";

import React, { useState, useEffect, useCallback } from "react";

const RoboticCellsPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeHighlight, setActiveHighlight] = useState(0);
  const [hoveredCapability, setHoveredCapability] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [activeDeployment, setActiveDeployment] = useState(0);
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
      setActiveHighlight((prev) => (prev + 1) % 4);
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
      title: "Advanced Automation",
      description: "Handles repetitive and complex tasks with high precision and consistency across every cycle.",
      stat: "99.9%",
      statLabel: "Precision",
      iconBg: "bg-blue-500",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "Faster Deployment",
      description: "In-house manufacturing ensures reduced lead time and rapid deployment to your production floor.",
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
      description: "Complete control over design, manufacturing, integration, and quality under one roof.",
      stat: "100%",
      statLabel: "In-House",
      iconBg: "bg-emerald-500",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Operator Safety Focused",
      description: "Built with safety enclosures, sensors, and interlocks ensuring safe human-machine interaction.",
      stat: "ISO",
      statLabel: "Compliant",
      iconBg: "bg-rose-500",
    },
  ];

  const features = [
    { text: "Compatible with conveyor, cellular & standalone setups", detail: "Multi-environment deployment flexibility", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75l-5.571-3m11.142 0l4.179 2.25L12 17.25l-9.75-5.25 4.179-2.25m11.142 0l4.179 2.25L12 21.75l-9.75-5.25 4.179-2.25" /></svg>) },
    { text: "Robotic pick-and-place, assembly & handling", detail: "Versatile robotic integration for diverse operations", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>) },
    { text: "Safety enclosures with interlocks & guarding", detail: "Comprehensive safety systems for operator protection", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>) },
    { text: "PLC, HMI & robot controller integration", detail: "Intelligent automation with industry-standard controllers", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>) },
    { text: "High precision, repeatability & speed", detail: "Engineered for consistent output quality at scale", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>) },
    { text: "Flexible and scalable architecture", detail: "Easily adapt and expand as production demands grow", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6z" /></svg>) },
    { text: "Real-time monitoring and control", detail: "Live dashboards with actionable production insights", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>) },
    { text: "Ergonomic and safety-compliant design", detail: "Built to international safety and ergonomic standards", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>) },
  ];

  const capabilities = [
    { title: "Pick-and-Place Automation", description: "High-speed robotic pick-and-place with precise positioning for diverse component handling.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>), number: "01" },
    { title: "Robotic Screw Fastening", description: "Precision screw fixing with torque-controlled robotic screwdriving for consistent quality.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L3 12.57m3.32-2.5a9.956 9.956 0 0112.36 0" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H7.5m9 0h1.5a.75.75 0 01.75.75v.75" /></svg>), number: "02" },
    { title: "Automated Dispensing Systems", description: "Robotic dispensing of adhesives, sealants, and potting compounds with precision path control.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>), number: "03" },
    { title: "Robotic Soldering", description: "Consistent and high-quality soldering joints through automated robotic soldering systems.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" /></svg>), number: "04" },
    { title: "Assembly & Fastening Operations", description: "Automated assembly and fastening with precision robotic arms for complex manufacturing tasks.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>), number: "05" },
    { title: "Material Handling & Transfer", description: "Automated material handling with robotic transfer systems for seamless production flow.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>), number: "06" },
    { title: "Machine Tending & Loading", description: "Robotic loading and unloading for CNC machines, presses, and other production equipment.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>), number: "07" },
    { title: "Conveyor Synchronization", description: "Inline automation with synchronized conveyor systems for continuous production flow.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>), number: "08" },
    { title: "Standalone Process Automation", description: "Independent robotic cells for dedicated processes with complete self-contained operation.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" /></svg>), number: "09" },
    { title: "Vision-Guided Operations", description: "Optional vision system integration for guided robotic operations and quality inspection.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>), number: "10" },
    { title: "Data Monitoring & Traceability", description: "Complete production data tracking with full traceability for every robotic operation.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>), number: "11" },
  ];

  const deploymentOptions = [
    {
      title: "Conveyor Line Integration",
      description: "Seamless inline automation for continuous production flow. Robotic cells synchronize perfectly with conveyor systems for uninterrupted throughput.",
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>),
    },
    {
      title: "Cellular Manufacturing",
      description: "Flexible robotic workstations for batch and mixed production. Adaptable cell layouts that reconfigure quickly for diverse product requirements.",
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6z" /></svg>),
    },
    {
      title: "Standalone Systems",
      description: "Independent robotic cells for dedicated processes. Self-contained units that operate autonomously for specialized automation tasks.",
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" /></svg>),
    },
  ];

  const safetyFeatures = [
    { text: "Safety enclosures and guarding", icon: "🛡️" },
    { text: "Interlocks and emergency stop systems", icon: "🔴" },
    { text: "Light curtains and safety sensors", icon: "📡" },
    { text: "Safe human-machine interaction design", icon: "🤝" },
  ];

  const processSteps = [
    { step: "01", title: "Requirement Analysis", description: "Understanding your automation goals, process constraints, and technical specifications.", emoji: "🔍" },
    { step: "02", title: "Design & Engineering", description: "Detailed 3D design, simulation, and robotic system architecture.", emoji: "✏️" },
    { step: "03", title: "In-House Manufacturing", description: "Complete fabrication, integration, and testing in our facility.", emoji: "⚙️" },
    { step: "04", title: "Installation & Support", description: "On-site deployment, commissioning, and ongoing technical support.", emoji: "🚀" },
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
              backgroundImage: `url('https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=2070&auto=format&fit=crop')`,
              transform: `scale(${1.08 + scrollY * 0.00008})`,
              transition: "transform 0.3s ease-out",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/98 via-slate-900/92 to-slate-800/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20" />
        </div>

        {/* Geometric accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-[12%] right-[6%] w-[1px] h-[350px] bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent rotate-[12deg]" />
          <div className="absolute top-[22%] right-[13%] w-[1px] h-[250px] bg-gradient-to-b from-transparent via-blue-400/15 to-transparent rotate-[12deg]" />
          <div className="absolute top-[30%] right-[20%] w-[1px] h-[180px] bg-gradient-to-b from-transparent via-indigo-400/10 to-transparent rotate-[12deg]" />
          <div className="absolute bottom-[18%] right-[4%] w-[450px] h-[450px] rounded-full border border-white/[0.03]" />
          <div className="absolute bottom-[12%] right-[2%] w-[550px] h-[550px] rounded-full border border-white/[0.02]" />
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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-50" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
              </span>
              <span className="text-white/70 text-[11px] font-semibold tracking-[0.25em] uppercase">
                Robotic Cell Solutions
              </span>
            </div>

            <h1 className="hero-title text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] leading-[1.02] mb-8">
              <span className="block text-white">Intelligent Robotic</span>
              <span className="block mt-2 text-white">Cells for{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                    Safe
                  </span>
                </span>
                {" "}&amp;
              </span>
              <span className="block mt-2">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-300 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
                    Efficient
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500/0 via-cyan-400/50 to-cyan-500/0 rounded-full hero-underline" />
                </span>
                <span className="text-white"> Automation</span>
                <span className="text-cyan-400/60">.</span>
              </span>
            </h1>

            <p className="hero-subtext max-w-xl text-base md:text-lg text-gray-400 leading-relaxed mb-10">
              Advanced robotic cells designed for conveyor integration, cellular manufacturing, and standalone operations—ensuring high productivity, precision, and operator safety in every process.
            </p>

            <div className="hero-pillars flex flex-wrap gap-6 mb-12">
              {["Automated", "Flexible", "Built for Safety"].map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 group cursor-default">
                  <div className="w-5 h-[2px] bg-gradient-to-r from-cyan-400 to-cyan-400/0 group-hover:to-cyan-400 transition-all duration-500" />
                  <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">{item}</span>
                </div>
              ))}
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
                    <div className="absolute inset-0 border border-cyan-500/20 rounded-2xl">
                      <div className="absolute -top-3 left-8 px-4 py-1.5 bg-slate-800 border border-cyan-500/30 rounded-lg">
                        <span className="text-cyan-400 text-[10px] font-mono tracking-widest font-bold">ROBOTIC-CELL-5000</span>
                      </div>
                    </div>

                    {/* Robot arm visualization */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {/* Base */}
                      <div className="w-12 h-4 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-lg border border-cyan-500/20 mx-auto" />
                      {/* Arm segment 1 */}
                      <div className="w-2 h-16 bg-gradient-to-b from-cyan-500/30 to-cyan-600/20 rounded mx-auto -mt-1 border border-cyan-500/15" />
                      {/* Joint */}
                      <div className="w-4 h-4 rounded-full bg-cyan-500/40 border border-cyan-400/30 mx-auto -mt-1 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400/50" />
                      </div>
                      {/* Arm segment 2 */}
                      <div className="w-1.5 h-12 bg-gradient-to-b from-cyan-500/25 to-blue-500/15 rounded mx-auto -mt-1 border border-cyan-500/10 rotate-[-15deg] origin-top" />
                    </div>

                    {/* Safety enclosure indicators */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-lg shadow-emerald-500/30" />
                        <span className="text-emerald-400/60 text-[7px] font-mono font-bold">SAFETY OK</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-lg shadow-cyan-500/30" style={{ animationDelay: "0.3s" }} />
                        <span className="text-cyan-400/60 text-[7px] font-mono font-bold">INTERLOCK</span>
                      </div>
                    </div>

                    {/* Status indicators */}
                    <div className="absolute top-4 right-4 w-20 h-14 border border-cyan-500/20 rounded-xl bg-cyan-500/5 flex flex-col items-center justify-center gap-1">
                      <div className="flex gap-[3px] items-end">
                        {barData.slice(0, 4).map((h, j) => (
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
                      <span className="text-cyan-400/60 text-[7px] font-mono font-bold">METRICS</span>
                    </div>

                    {/* Control panel */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-44 h-10 border border-cyan-500/20 rounded-xl bg-cyan-500/5 flex items-center justify-center gap-3">
                      <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-lg shadow-emerald-500/30" />
                        <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse shadow-lg shadow-cyan-500/30" style={{ animationDelay: "0.5s" }} />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse shadow-lg shadow-amber-500/30" style={{ animationDelay: "1s" }} />
                      </div>
                      <span className="text-cyan-400/60 text-[8px] font-mono font-bold tracking-wider">ROBOT CTRL</span>
                    </div>
                  </div>
                </div>

                {/* Scan line */}
                <div className="absolute inset-0 overflow-hidden opacity-20">
                  <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan" />
                </div>

                {/* Corners */}
                {["top-4 left-4 border-t border-l", "top-4 right-4 border-t border-r", "bottom-4 left-4 border-b border-l", "bottom-4 right-4 border-b border-r"].map((cls, i) => (
                  <div key={i} className={`absolute w-6 h-6 border-cyan-500/20 ${cls} rounded-sm`} />
                ))}

                <div className="absolute bottom-5 left-5 flex items-center gap-2 px-3 py-1.5 bg-slate-800/90 border border-cyan-500/20 rounded-lg backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-cyan-300 text-[10px] font-mono font-bold tracking-wider">SYSTEM ACTIVE</span>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 px-4 py-2.5 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100">
                <div className="text-xl font-black text-cyan-600">Safe</div>
                <div className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">&amp; Efficient</div>
              </div>
            </div>

            {/* Right – Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2.5 mb-8">
                <div className="w-8 h-[2px] bg-gradient-to-r from-cyan-600 to-cyan-600/0" />
                <span className="text-cyan-600 text-[11px] font-bold tracking-[0.2em] uppercase">About Our Robotic Cells</span>
              </div>

              <h2 id="about-heading" className="text-3xl md:text-4xl lg:text-[2.75rem] font-black text-gray-900 leading-[1.08] mb-8 tracking-[-0.02em]">
                Automating Complex Processes with{" "}
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Precision &amp; Safety
                </span>
              </h2>

              <div className="space-y-5 text-gray-500 leading-[1.8] text-[15px]">
                <p>
                  Our Robotic Cells are engineered to automate complex manufacturing processes with precision, consistency, and reliability. Designed and built{" "}
                  <span className="text-gray-900 font-semibold">in-house</span>, these systems provide seamless integration,{" "}
                  <span className="text-gray-900 font-semibold">faster deployment</span>, and superior performance.
                </p>
                <p>
                  Whether deployed in conveyor-based production lines, cellular manufacturing setups, or as standalone automation units, our robotic cells offer unmatched flexibility and scalability for modern production environments.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-3 gap-6">
                {[
                  { value: "Conveyor", label: "Integration" },
                  { value: "Cellular", label: "Manufacturing" },
                  { value: "Standalone", label: "Operation" },
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08),transparent_60%)]" />
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
                <div className="w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-cyan-400/0" />
                <span className="text-cyan-400 text-[11px] font-bold tracking-[0.2em] uppercase">Our Process</span>
                <div className="w-8 h-[2px] bg-gradient-to-l from-cyan-400 to-cyan-400/0" />
              </div>
              <h3 id="process-heading" className="text-2xl md:text-3xl font-black text-white tracking-[-0.02em]">
                From Concept to <span className="text-cyan-400">Deployment</span>
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 relative">
              <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0" />

              {processSteps.map((step, i) => (
                <div key={i} className="relative text-center group cursor-default">
                  <div className="relative z-10 w-20 h-20 mx-auto mb-5">
                    <div className="absolute inset-0 rounded-2xl border border-cyan-500/20 group-hover:border-cyan-400/40 transition-colors duration-500 rotate-3 group-hover:rotate-6" />
                    <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 flex items-center justify-center group-hover:from-cyan-900/50 group-hover:to-slate-900 transition-all duration-500 shadow-lg">
                      <span className="text-2xl transition-transform duration-300 group-hover:scale-125">{step.emoji}</span>
                    </div>
                  </div>
                  <div className="text-cyan-400/40 text-[11px] font-mono font-bold mb-1.5 tracking-widest">{step.step}</div>
                  <h4 className="text-white font-bold text-[15px] group-hover:text-cyan-300 transition-colors mb-1.5">{step.title}</h4>
                  <p className="text-gray-500 text-[12px] leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== KEY HIGHLIGHTS ===== */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden" aria-labelledby="highlights-heading">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-cyan-50/30 to-transparent rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div
            id="highlights-header"
            data-animate
            className={`mb-16 transition-all duration-1000 ${isVisible["highlights-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-[2px] bg-gradient-to-r from-cyan-600 to-cyan-600/0" />
                  <span className="text-cyan-600 text-[11px] font-bold tracking-[0.2em] uppercase">Key Highlights</span>
                </div>
                <h2 id="highlights-heading" className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-[-0.03em]">
                  Why Choose Our{" "}
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Robotic Cells</span>
                </h2>
              </div>
              <p className="text-gray-500 max-w-md text-[15px] leading-relaxed lg:text-right">
                Engineered for automation excellence with built-in safety, precision, and deployment flexibility.
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
                  activeHighlight === index ? "-translate-y-3" : "hover:-translate-y-1.5"
                }`}
                onMouseEnter={() => setActiveHighlight(index)}
              >
                <div className={`relative h-full rounded-2xl border transition-all duration-500 overflow-hidden ${
                  activeHighlight === index
                    ? "border-gray-200 shadow-2xl shadow-gray-200/50 bg-white"
                    : "border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 bg-white"
                }`}>
                  <div className={`h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 ${
                    activeHighlight === index ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                  }`} />

                  <div className="p-7">
                    <div className={`absolute top-6 right-6 text-right transition-all duration-500 ${
                      activeHighlight === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}>
                      <div className="text-2xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">{item.stat}</div>
                      <div className="text-[9px] text-gray-400 font-bold tracking-wider uppercase">{item.statLabel}</div>
                    </div>

                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                      activeHighlight === index
                        ? `${item.iconBg} text-white shadow-lg`
                        : "bg-gray-100 text-gray-400 group-hover:bg-gray-200/80 group-hover:text-gray-600"
                    }`}>
                      {item.icon}
                    </div>

                    <h3 className="text-[15px] font-bold text-gray-900 mb-3 leading-snug pr-12">{item.title}</h3>
                    <p className="text-gray-500 text-[13px] leading-[1.7]">{item.description}</p>

                    <div className={`mt-6 flex items-center gap-2 transition-all duration-500 ${
                      activeHighlight === index ? "opacity-100" : "opacity-0"
                    }`}>
                      <div className="h-[2px] w-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                      <span className="text-[11px] text-gray-400 font-semibold">Active</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-10">
            {keyHighlights.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveHighlight(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  activeHighlight === i ? "w-8 bg-cyan-500" : "w-2 bg-gray-200 hover:bg-gray-300"
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
                <div className="w-8 h-[2px] bg-gradient-to-r from-cyan-600 to-cyan-600/0" />
                <span className="text-cyan-600 text-[11px] font-bold tracking-[0.2em] uppercase">Features</span>
              </div>

              <h2 id="features-heading" className="text-3xl md:text-4xl font-black text-gray-900 mb-5 leading-[1.08] tracking-[-0.02em]">
                Intelligent{" "}
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Robotic</span>
                <br />Engineering
              </h2>

              <p className="text-gray-500 text-[15px] mb-10 leading-relaxed">
                Every robotic cell combines advanced automation with robust safety systems for maximum performance and operator protection.
              </p>

              <div className="space-y-2">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className={`group flex items-start gap-4 p-4 rounded-2xl transition-all duration-400 cursor-default border ${
                      hoveredFeature === i
                        ? "border-cyan-200 bg-white shadow-lg shadow-gray-100/50"
                        : "border-transparent hover:bg-white hover:shadow-lg hover:shadow-gray-100/50 hover:border-gray-100"
                    }`}
                    onMouseEnter={() => setHoveredFeature(i)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <div className={`flex-shrink-0 w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-400 ${
                      hoveredFeature === i
                        ? "bg-cyan-600 text-white border-cyan-600 shadow-lg shadow-cyan-200/40"
                        : "bg-gray-100 text-gray-400 border-gray-200/50 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600 group-hover:shadow-lg group-hover:shadow-cyan-200/40"
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
                {[12, 26, 39].map((inset, i) => (
                  <div key={i} className="absolute rounded-full border" style={{
                    inset: `${inset}%`,
                    borderColor: `rgba(6,182,212,${0.08 + i * 0.04})`,
                    animation: `orbitSpin ${30 - i * 5}s linear infinite ${i % 2 ? "reverse" : ""}`,
                  }}>
                    <div className="absolute w-2 h-2 rounded-full bg-cyan-400/30 blur-[1px]" style={{ top: "-4px", left: "50%" }} />
                  </div>
                ))}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-36 h-36 rounded-full bg-gradient-to-br from-cyan-100/30 to-blue-100/30 blur-2xl" />
                  <div className="relative w-28 h-28 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center shadow-2xl shadow-slate-900/30 border border-white/5">
                    <div className="text-center">
                      <svg className="w-9 h-9 text-cyan-400 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                      </svg>
                      <span className="text-cyan-300 text-[9px] font-bold tracking-widest uppercase">Robotic</span>
                    </div>
                  </div>
                </div>

                {[
                  { label: "Pick & Place", angle: 0 }, { label: "Fastening", angle: 45 },
                  { label: "Dispensing", angle: 90 }, { label: "Soldering", angle: 135 },
                  { label: "Handling", angle: 180 }, { label: "Vision", angle: 225 },
                  { label: "Safety", angle: 270 }, { label: "Monitoring", angle: 315 },
                ].map((node, i) => {
                  const r = 42;
                  const x = Math.round(Math.cos((node.angle * Math.PI) / 180) * r);
                  const y = Math.round(Math.sin((node.angle * Math.PI) / 180) * r);
                  return (
                    <div key={i} className="absolute" style={{ left: `${50 + x}%`, top: `${50 + y}%`, transform: "translate(-50%, -50%)" }}>
                      <div className="group px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 hover:border-cyan-300 hover:bg-cyan-50 transition-all duration-300 cursor-default shadow-sm hover:shadow-lg hover:shadow-cyan-100/40 hover:scale-110">
                        <span className="text-gray-600 text-[11px] font-bold whitespace-nowrap group-hover:text-cyan-700 transition-colors">{node.label}</span>
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
                  <div className="w-8 h-[2px] bg-gradient-to-r from-cyan-600 to-cyan-600/0" />
                  <span className="text-cyan-600 text-[11px] font-bold tracking-[0.2em] uppercase">Capabilities</span>
                </div>
                <h2 id="capabilities-heading" className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-[-0.03em]">
                  What We{" "}
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Deliver</span>
                </h2>
              </div>
              <p className="text-gray-500 max-w-md text-[15px] leading-relaxed lg:text-right">
                Comprehensive robotic automation capabilities covering diverse manufacturing processes.
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
                    <div className={`absolute -top-4 -right-2 text-[120px] font-black leading-none select-none transition-all duration-700 ${
                      isHovered ? "text-gray-100 translate-x-0" : "text-gray-50 translate-x-4"
                    }`} aria-hidden="true">
                      {cap.number}
                    </div>

                    <div className="relative z-10 flex gap-6">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        isHovered ? "bg-gradient-to-br from-cyan-600 to-blue-600 text-white shadow-xl scale-110" : "bg-gray-100 text-gray-500"
                      }`}>
                        {cap.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{cap.title}</h3>
                        <p className="text-gray-500 text-[13.5px] leading-[1.7]">{cap.description}</p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== DEPLOYMENT FLEXIBILITY ===== */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="deployment-heading">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            id="deployment-header"
            data-animate
            className={`mb-16 transition-all duration-1000 ${isVisible["deployment-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-[2px] bg-gradient-to-r from-cyan-600 to-cyan-600/0" />
                  <span className="text-cyan-600 text-[11px] font-bold tracking-[0.2em] uppercase">Deployment Flexibility</span>
                </div>
                <h2 id="deployment-heading" className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-[-0.03em]">
                  Flexible Deployment Across{" "}
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Manufacturing Setups</span>
                </h2>
              </div>
              <p className="text-gray-500 max-w-md text-[15px] leading-relaxed lg:text-right">
                Our robotic cells are designed to adapt to multiple production environments.
              </p>
            </div>
          </div>

          <div
            id="deployment-cards"
            data-animate
            className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 delay-200 ${isVisible["deployment-cards"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {deploymentOptions.map((option, index) => (
              <article
                key={index}
                className={`group relative rounded-2xl transition-all duration-500 cursor-pointer ${
                  activeDeployment === index ? "-translate-y-3 shadow-2xl shadow-gray-200/50" : "shadow-md hover:shadow-xl hover:-translate-y-1.5"
                }`}
                onMouseEnter={() => setActiveDeployment(index)}
              >
                <div className={`relative h-full rounded-2xl border overflow-hidden transition-all duration-500 ${
                  activeDeployment === index ? "border-cyan-200 bg-white" : "border-gray-100 bg-white hover:border-gray-200"
                }`}>
                  <div className={`h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transition-opacity duration-500 ${
                    activeDeployment === index ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                  }`} />

                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                      activeDeployment === index
                        ? "bg-gradient-to-br from-cyan-600 to-blue-600 text-white shadow-xl scale-110"
                        : "bg-gray-100 text-gray-500 group-hover:bg-gray-200/80"
                    }`}>
                      {option.icon}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                    <p className="text-gray-500 text-[14px] leading-[1.7]">{option.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SAFETY SECTION ===== */}
      <section className="relative py-20 lg:py-28 bg-white" aria-labelledby="safety-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            id="safety-section"
            data-animate
            className={`transition-all duration-1000 ${isVisible["safety-section"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative rounded-[2rem] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.12),transparent_50%)]" />
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }} />

              <div className="relative p-12 md:p-16 lg:p-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2.5 mb-6">
                      <div className="w-8 h-[2px] bg-gradient-to-r from-rose-400 to-rose-400/0" />
                      <span className="text-rose-400 text-[11px] font-bold tracking-[0.2em] uppercase">Operator Safety</span>
                    </div>

                    <h2 id="safety-heading" className="text-3xl md:text-4xl font-black text-white leading-[1.08] mb-6 tracking-[-0.02em]">
                      Built with Operator{" "}
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        Safety at the Core
                      </span>
                    </h2>

                    <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
                      We prioritize safety in every robotic system, ensuring compliance with industrial safety standards and safe operation in automated environments.
                    </p>

                    <div className="space-y-4">
                      {safetyFeatures.map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 group cursor-default">
                          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.1] group-hover:border-white/[0.15] transition-all duration-300">
                            <span className="text-lg">{feature.icon}</span>
                          </div>
                          <span className="text-gray-300 text-[14px] font-medium group-hover:text-white transition-colors">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      {/* Shield visualization */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute w-48 h-48 rounded-full bg-cyan-500/5 animate-ping" style={{ animationDuration: "3s" }} />
                        <div className="absolute w-40 h-40 rounded-full border border-cyan-500/10" />
                        <div className="absolute w-32 h-32 rounded-full border border-cyan-500/15" />
                        <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 flex items-center justify-center">
                          <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                          </svg>
                        </div>
                      </div>

                      {/* Floating safety badges */}
                      {[
                        { label: "ISO", angle: 30, distance: 48 },
                        { label: "CE", angle: 150, distance: 48 },
                        { label: "Safe", angle: 270, distance: 48 },
                      ].map((badge, i) => {
                        const x = Math.cos((badge.angle * Math.PI) / 180) * badge.distance;
                        const y = Math.sin((badge.angle * Math.PI) / 180) * badge.distance;
                        return (
                          <div key={i} className="absolute" style={{ left: `${50 + x}%`, top: `${50 + y}%`, transform: "translate(-50%, -50%)" }}>
                            <div className="px-3 py-1.5 rounded-lg bg-white/[0.08] border border-white/[0.1] backdrop-blur-sm">
                              <span className="text-cyan-300 text-[11px] font-bold">{badge.label}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-gray-50 to-white" aria-labelledby="cta-heading">
        <div
          id="cta-section"
          data-animate
          className={`relative max-w-5xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${isVisible["cta-section"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative rounded-[2rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.1),transparent_50%)]" />
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
                <span className="text-emerald-300 text-sm font-semibold">Ready to Automate</span>
              </div>

              <h2 id="cta-heading" className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-black text-white leading-[1.05] mb-6 tracking-[-0.03em]">
                Let&apos;s Build Your
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                  Robotic Solution
                </span>
              </h2>

              <p className="text-gray-400 text-[15px] md:text-base max-w-xl mx-auto mb-12 leading-relaxed">
                From concept to deployment—partner with us for precision-built robotic cells that automate your production safely and efficiently.
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
                    { icon: "🤖", text: "Advanced Automation" },
                    { icon: "🛡️", text: "Safety Focused" },
                    { icon: "⚡", text: "Fast Deployment" },
                    { icon: "🏭", text: "In-House Built" },
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

export default RoboticCellsPage;