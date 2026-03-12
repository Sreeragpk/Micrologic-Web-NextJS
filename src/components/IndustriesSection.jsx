// import React from "react";
// import { Link } from "react-router-dom";
// import { Stethoscope, CircuitBoard, Car, BatteryCharging } from "lucide-react";
// import { FaCarSide, FaChargingStation } from "react-icons/fa";

// const industries = [
//   {
//     name: "Automotive",
//     icon: <FaCarSide className="h-10 w-10 text-white" />,
//     desc: "Solutions for ECU, BCM, Lighting, Infotainment, Sensors, and Safety Systems.",
//     color: "from-orange-400 to-red-500",
//     link: "/industries/automotive",
//   },
//     {
//     name: "Electric Vehicles",
//     icon: <FaChargingStation className="h-10 w-10 text-white" />,
//     desc: "Specialized testing for chargers, BMS, motor controllers, and power electronics.",
//     color: "from-green-400 to-emerald-600",
//     link: "/industries/ev",
//   },
//   {
//     name: "Electronic Devices",
//     icon: <CircuitBoard className="h-10 w-10 text-white" />,
//     desc: "Scalable test automation for high-volume consumer and industrial electronics.",
//     color: "from-blue-400 to-indigo-600",
//     link: "/industries/electronics",
//   },
//   {
//     name: "Medical Devices",
//     icon: <Stethoscope className="h-10 w-10 text-white" />,
//     desc: "Precision testing and traceability solutions for mission-critical medical equipment.",
//     color: "from-green-400 to-emerald-600",
//     link: "/industries/medical",
//   },

// ];

// const IndustriesSection = () => {
//   return (
//     <section id="industries" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="container mx-auto px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-14">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
//             Industries We Empower
//           </h2>
//           <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
//             Delivering specialized solutions tailored to the unique demands of each sector.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {industries.map((industry) => (
//             <Link key={industry.name} to={industry.link} className="group">
//               <div
//                 className="relative bg-white/80 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl shadow-lg 
//                            hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 
//                            overflow-hidden ripple-card"
//               >
//                 {/* Ripple span */}
//                 <span className="absolute inset-0 w-full h-full pointer-events-none scale-0 bg-blue-300/30 rounded-full opacity-50 group-active:scale-150 group-active:opacity-0 transition transform duration-500 ease-out"></span>

//                 {/* Icon inside gradient circle */}
//                 <div
//                   className={`relative w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r ${industry.color} shadow-md mb-6`}
//                 >
//                   {industry.icon}
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>

//                 {/* Description */}
//                 <p className="text-gray-600 text-sm leading-relaxed">{industry.desc}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IndustriesSection;
"use client";
import React from "react";
import Link from "next/link";
import { Stethoscope, CircuitBoard, ArrowRight } from "lucide-react";
import { FaCarSide, FaChargingStation, FaMicrochip } from "react-icons/fa";
import { motion } from "framer-motion";

const industries = [
  {
    name: "Automotive",
    icon: <FaCarSide className="h-12 w-12 md:h-16 md:w-16" />,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    hoverBg: "group-hover:bg-orange-500",
    borderColor: "border-orange-500/20",
    glowColor: "group-hover:shadow-orange-500/30",
    link: "/industries/automotive-automation",
  },
  {
    name: "Electric Vehicles",
    icon: <FaChargingStation className="h-12 w-12 md:h-16 md:w-16" />,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    hoverBg: "group-hover:bg-emerald-500",
    borderColor: "border-emerald-500/20",
    glowColor: "group-hover:shadow-emerald-500/30",
    link: "/industries/electric-vehicle-automation",
  },
  {
    name: "Electrical & Electronics",
    icon: <FaMicrochip  className="h-12 w-12 md:h-16 md:w-16" />,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    hoverBg: "group-hover:bg-indigo-500",
    borderColor: "border-indigo-500/20",
    glowColor: "group-hover:shadow-indigo-500/30",
    link: "/industries/electrical-and-electronics-automation",
  },
  {
    name: "Medical",
    icon: <Stethoscope className="h-12 w-12 md:h-16 md:w-16" />,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    hoverBg: "group-hover:bg-rose-500",
    borderColor: "border-rose-500/20",
    glowColor: "group-hover:shadow-rose-500/30",
    link: "/industries/medical-device-automation",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.1, 
    rotate: [0, -5, 5, 0],
    transition: {
      rotate: {
        duration: 0.5,
        ease: "easeInOut",
      },
      scale: {
        duration: 0.3,
      },
    },
  },
};

const IndustriesSection = () => {
  return (
    <section id="industries" className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Floating Gradient Orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative container mx-auto px-6 lg:px-8 z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block text-sm font-bold tracking-widest text-slate-500 uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Industries We{" "}
            <span className="bg-gradient-to-r from-slate-400 to-slate-600 bg-clip-text text-transparent">
              Empower
            </span>
          </motion.h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={cardVariants}
            >
              <Link href={industry.link} className="group block">
                <motion.div 
                  className={`relative h-full rounded-2xl md:rounded-3xl border ${industry.borderColor} 
                             bg-slate-900/50 backdrop-blur-sm overflow-hidden
                             transition-all duration-500 
                             group-hover:border-transparent group-hover:shadow-2xl ${industry.glowColor}`}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                                  bg-gradient-to-br ${industry.bgColor}`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 md:p-8 lg:p-10 flex flex-col items-center text-center">
                    
                    {/* Icon Container */}
                    <motion.div 
                      className={`w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-2xl md:rounded-3xl 
                                 flex items-center justify-center mb-6 md:mb-8
                                 ${industry.bgColor} ${industry.color}
                                 transition-all duration-500
                                 ${industry.hoverBg} group-hover:text-white group-hover:shadow-lg`}
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      {industry.icon}
                    </motion.div>

                    {/* Name */}
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-4 md:mb-6
                                  group-hover:text-white transition-colors duration-300">
                      {industry.name}
                    </h3>

                    {/* Animated Arrow */}
                    <motion.div 
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center
                                 bg-white/5 border border-white/10
                                 group-hover:bg-white group-hover:border-white
                                 transition-all duration-300`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-slate-400 
                                            group-hover:text-slate-900 group-hover:translate-x-0.5
                                            transition-all duration-300" />
                    </motion.div>
                  </div>

                  {/* Shine Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] 
                                   transition-transform duration-1000 ease-out
                                   bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        {/* <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link 
            to="/industries"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white 
                      transition-colors duration-300 group"
          >
            <span className="text-sm font-medium">View All Industries</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
};

export default IndustriesSection;