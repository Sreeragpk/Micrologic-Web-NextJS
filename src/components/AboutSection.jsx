"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Sparkles,
  CircuitBoard,
  Cog,
  ScanLine,
  BarChart3,
} from "lucide-react";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Test Solutions",
    href: "/solutions/test-solutions",
    icon: <CircuitBoard className="h-6 w-6" />,
    gradient: "from-blue-500 to-cyan-500",
    gradientHover: "group-hover:from-blue-600 group-hover:to-cyan-600",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-100",
    description:
      "Our full-stack MTS platform with integrated hardware enables end-to-end testing from PCB assemblies to final products.",
    features: [
      "In-Circuit Test (ICT)",
      "In-System Programming (ISP)",
      "Functional Circuit Test (FCT)",
      "End-of-Line Test (EOL)",
      "Radio Frequency Test (RF)",
    ],
    stats: { value: "From Test", label: "to Trust" },
    image: "/assets/MCU EOL.jpg",
  },
  {
    title: "Assembly Solutions",
    href: "/solutions/assembly-automation",
    icon: <Cog className="h-6 w-6" />,
    gradient: "from-purple-500 to-pink-500",
    gradientHover: "group-hover:from-purple-600 group-hover:to-pink-600",
    bgLight: "bg-purple-50",
    textColor: "text-purple-600",
    borderColor: "border-purple-100",
    description:
      "Our advanced assembly automation systems that enhance productivity, reduce errors, and ensure quality which includes",
    features: [
      "Conveyor Lines",
      "Cellular Lines",
      "Rotary Indexing",
      "Robotic Automation",
      "Vision Inspection",
    ],
    stats: { value: "From Assembly", label: "to Automation" },
    image: "/assets/SBDP.png",
  },
  {
    title: "Traceability",
    href: "/solutions/production-traceability",
    icon: <ScanLine className="h-6 w-6" />,
    gradient: "from-emerald-500 to-teal-500",
    gradientHover: "group-hover:from-emerald-600 group-hover:to-teal-600",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-100",
    description:
      "End-to-end visibility across your production ecosystem. From raw materials to finished products, every part, every step, and every process is tracked and verified",
    features: [
      "Part Traceability",
      "Process Traceability",
      "Interface with the Legacy Machines",
    ],
    stats: { value: "From Track", label: "to Transparency" },
    image: "/assets/scanhome.webp",
  },
  {
    title: "Digital Transformation",
    href: "/solutions/digital-transformation",
    icon: <BarChart3 className="h-6 w-6" />,
    gradient: "from-indigo-500 to-purple-600",
    gradientHover: "group-hover:from-indigo-600 group-hover:to-purple-700",
    bgLight: "bg-indigo-50",
    textColor: "text-indigo-600",
    borderColor: "border-indigo-100",
    description:
      "Our Facteyes integrates AI, IoT, and Industry 4.0 technologies into a powerful digital transformation platform that turns insights into impact, and machines into smart collaborators",
    features: [
      "Real-time data Analytics",
      "OEE, Cp-CPK, MSA data analytics",
      "Predictive Maintenance",
    ],
    stats: { value: "From Data", label: "to Decisions" },
    image: "/assets/digitalhomeimg.webp",
  },
];

const AboutSection = () => {
  const router = useRouter();

  return (
    <section
      id="solutions"
      className="relative py-5 lg:py-10 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-gray-700 text-sm font-medium mb-6 shadow-sm border border-gray-100"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="h-4 w-4 text-amber-500" />
            <span>Industry 4.0 Powered Solutions</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight leading-tight">
            Automated{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Test
            </span>{" "}
            &{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Assembly
            </span>{" "}
            <br className="hidden md:block" />
            Solutions for Electronics Manufacturing
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlock smarter manufacturing through intelligent automation built to
            boost efficiency, quality, and performance
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group cursor-pointer"
              onClick={() => router.push(service.href)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div
                className="relative h-full bg-white rounded-2xl border border-gray-200 overflow-hidden
                              shadow-sm hover:shadow-xl transition-all duration-500
                              hover:border-gray-300"
              >
                {/* Gradient Top Bar */}
                <div className={`h-1 bg-gradient-to-r ${service.gradient}`} />

                <div className="p-6 lg:p-8">
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} ${service.gradientHover}
                                      flex items-center justify-center text-white shadow-lg
                                      transition-all duration-300 group-hover:shadow-xl group-hover:scale-105`}
                      >
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-gray-800 transition-colors">
                          {service.title}
                        </h3>
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`text-sm font-medium ${service.textColor}`}
                          >
                            {service.stats.value}
                          </span>
                          <span
                            className={`text-sm font-medium ${service.textColor}`}
                          >
                            {service.stats.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {/* Left Content */}
                    <div className="md:col-span-3 flex flex-col">
                      <p className="text-gray-600 mb-5 leading-relaxed text-[15px]">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className={`${service.bgLight} rounded-xl p-4 mb-5`}>
                        <ul className="space-y-2.5">
                          {service.features.map((feat, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-3 text-sm text-gray-700"
                            >
                              <div
                                className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} 
                                              flex items-center justify-center flex-shrink-0`}
                              >
                                <CheckCircle className="h-3 w-3 text-white" />
                              </div>
                              <span className="font-medium">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(service.href);
                        }}
                        className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                                   bg-gradient-to-r ${service.gradient} ${service.gradientHover}
                                   text-white font-semibold shadow-md
                                   hover:shadow-lg transition-all duration-300 mt-auto
                                   group/btn`}
                      >
                        <span>Explore Solution</span>
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>

                    {/* Right Image */}
                    <div className="md:col-span-2 flex items-stretch">
                      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-contain bg-white transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Gradient Glow */}
                <div
                  className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r ${service.gradient}
                                rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, CheckCircle, Sparkles, Cpu, Settings, BarChart3, Eye } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import assem from "../assets/screw.jpg";
// import digital from "../assets/bn.png";
// import test from "../assets/testsolution.jpg";
// import vision from "../assets/vision.jpg";

// // ✅ Single source of truth for all services
// const services = [
//   {
//     title: "Test Solutions",
//     href: "/solutions/test",
//     icon: <Cpu className="h-7 w-7" />,
//     gradient: "from-blue-500 to-cyan-500",
//     description:
//       "Standard PCBA & Final Product Testers for quick time-to-market. Includes ICT, FCT, ISP & EOL testing with the Micrologic Test Suite.",
//     features: [
//       "In-Circuit Testing (ICT)",
//       "Functional Testing (FCT)",
//       "In-System Programming (ISP)",
//       "End-of-Line Testing (EOL)",
//       "Micrologic Test Suite (Analytics & Reporting)",
//       "Wide Instrumentation Support (Power, Loads, Sensors, CAN Tools)",
//     ],
//     stats: { value: "From Test to", label: "Trust" },
//     image:
//       test,
//   },
//   {
//     title: "Assembly Automation",
//     href: "/solutions/assembly",
//     icon: <Settings className="h-7 w-7" />,
//     gradient: "from-purple-500 to-pink-500",
//     description:
//       "Customized automated assembly processes with precision, flexibility, and monitoring for seamless production.",
//     features: [
//       "Screw Driving & Press Fitting",
//       "Automated Soldering & Dispensing",
//       "Potting & Leak Testing",
//       "Packing Systems",
//       "Conveyors, Indexers, Fixtures",
//       "OEE Monitoring & Predictive Maintenance",
//     ],
//     stats: { value: "From Assembly", label: "To Automation" },
//     image: assem,
//   },
//   {
//     title: "Traceability & Digital Transformation",
//     href: "/solutions/traceability-digital",
//     icon: <BarChart3 className="h-7 w-7" />,
//     gradient: "from-indigo-500 to-teal-500",
//     description:
//       "Unify traceability with digital transformation to ensure real-time product lifecycle visibility, compliance, and data-driven smart manufacturing insights.",
//     features: [
//       "Traceware",
//       "Barcode & RFID Integration",
//       "Advanced Data Capture & Compliance Support",
//       "Root-Cause Analysis & Recall Management",
//       "Micrologic Facteyes Analytics Platform",
//       "Realtime KPIs (OEE, Cp/Cpk, Gage R&R)",
//       "Cloud & IoT Integration",
//       "Operational Excellence Insights",
//     ],
//     stats: { value: "From data to decisions,", label: "" },
//     image: digital,
//   },
//   {
//     title: "Machine Vision",
//     href: "/solutions/machine-vision",
//     icon: <Eye className="h-7 w-7" />,
//     gradient: "from-orange-500 to-red-500",
//     description:
//       "Intelligent vision systems for inspection, measurement, and defect detection to ensure superior product quality.",
//     features: [
//       "High-Speed Image Processing",
//       "Surface Defect & Crack Detection",
//       "Dimensional Measurement & Gauging",
//       "Barcode & OCR Verification",
//       "AI-Powered Classification",
//       "Integration with Robotics & PLCs",
//     ],
//     stats: { value: "AI", label: "ML" },
//     image:
//       vision
//   },
// ];

// const AboutSection = () => {
//   const navigate = useNavigate();

//   return (
//     <section id="solutions" className="relative py-10 overflow-hidden">
//       <div className="container mx-auto px-6 lg:px-12 relative z-10">
//         {/* Section Title */}
//         <motion.div
//           className="text-center mb-20"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
//             <Sparkles className="h-4 w-4" />
//             <span>Innovative automation solutions</span>
//           </div>
//           <h2 className="text-5xl md:text-6xl font-black mb-6">
//             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//               Automated Test & Assembly Solutions for Electronics Manufacturing
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Elevate with our intelligent automation solution designed to enhance productivity, quality, and overall efficiency.
//           </p>
//         </motion.div>

//         {/* Solutions Card Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
//           {services.map((service, i) => (
//             <motion.div
//               key={service.title}
//               className="cursor-pointer relative bg-white rounded-3xl border shadow-lg hover:shadow-2xl
//                          overflow-hidden transition-all duration-500 h-full flex flex-col"
//               onClick={() => navigate(service.href)}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.15, duration: 0.6 }}
//             >
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch p-8 lg:p-10 flex-grow">
//                 {/* LEFT: TEXT */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <div className="flex items-center gap-4 mb-4">
//                       <div
//                         className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.gradient}
//                                     flex items-center justify-center text-white`}
//                       >
//                         {service.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
//                         <p className={`text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
//                           {service.stats.value} {service.stats.label}
//                         </p>
//                       </div>
//                     </div>
//                     <p className="text-gray-600 mb-6">{service.description}</p>
//                     <ul className="space-y-2 mb-6">
//                       {service.features.slice(0, 4).map((feat, idx) => (
//                         <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
//                           <CheckCircle className="h-4 w-4 text-green-500" />
//                           {feat}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation(); // prevent bubbling when button inside card is clicked
//                       navigate(service.href);
//                     }}
//                     className={`inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r ${service.gradient} text-white shadow mt-auto`}
//                   >
//                     Explore <ArrowRight className="h-4 w-4" />
//                   </button>
//                 </div>

//                 {/* RIGHT: IMAGE */}
//                 <div className="flex justify-center items-center">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="rounded-xl w-full h-48 object-cover shadow-md hover:scale-105 transform transition"
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
