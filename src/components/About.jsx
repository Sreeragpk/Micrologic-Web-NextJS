// "use client";

// import { useState, useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import Image from "next/image";
// import { Settings, Factory, Code, Zap, GitMerge, TestTube, Network } from "lucide-react";
// import TechnologyPartners from "./TechnologyPartners";

// // ----------- Animated Background Shapes -----------
// const AnimatedShape = ({ type, className }) => {
//   const shapes = {
//     circle: (
//       <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.1">
//         <animate
//           attributeName="r"
//           values="40;45;40"
//           dur="4s"
//           repeatCount="indefinite"
//         />
//       </circle>
//     ),
//     hexagon: (
//       <path
//         d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z"
//         fill="currentColor"
//         opacity="0.1"
//       >
//         <animateTransform
//           attributeName="transform"
//           type="rotate"
//           from="0 50 50"
//           to="360 50 50"
//           dur="20s"
//           repeatCount="indefinite"
//         />
//       </path>
//     ),
//     triangle: (
//       <path d="M50 20 L80 80 L20 80 Z" fill="currentColor" opacity="0.1">
//         <animate
//           attributeName="opacity"
//           values="0.1;0.3;0.1"
//           dur="3s"
//           repeatCount="indefinite"
//         />
//       </path>
//     ),
//   };

//   return (
//     <svg viewBox="0 0 100 100" className={className}>
//       {shapes[type]}
//     </svg>
//   );
// };

// // ----------- Counter Component (Animated) -----------
// const Counter = ({ target, suffix = "" }) => {
//   const [value, setValue] = useState(0);
//   const controls = useAnimation();

//   useEffect(() => {
//     controls.start({
//       val: target,
//       transition: { duration: 2, ease: "easeOut" },
//     });
//   }, [target, controls]);

//   return (
//     <motion.span
//       initial={{ val: 0 }}
//       animate={controls}
//       onUpdate={(latest) => setValue(Math.floor(latest.val))}
//     >
//       {value}
//       {suffix}
//     </motion.span>
//   );
// };

// // ----------- Image Gallery -----------
// const ImageGallery = () => {
//   const images = [
//     "/assets/office.png",
//     "/assets/image2.jpg",
//     "/assets/image3.jpg",
//     "/assets/image4.jpg",
//   ];
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(
//       () => setCurrentImage((prev) => (prev + 1) % images.length),
//       4000,
//     );
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <motion.div
//       className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//     >
//       <div className="relative h-full">
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === currentImage ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <Image
//               src={img}
//               alt={`Micrologic facility and team ${index + 1}`}
//               fill
//               className="object-cover"
//               priority={index === 0}
//             />
//           </div>
//         ))}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
//       </div>

//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
//         {images.map((img, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentImage(index)}
//             className={`relative w-16 h-12 rounded overflow-hidden transition-all ${
//               index === currentImage
//                 ? "ring-2 ring-white scale-110"
//                 : "opacity-70"
//             }`}
//           >
//             <Image
//               src={img}
//               alt={`Micrologic thumbnail ${index + 1}`}
//               fill
//               className="object-cover"
//             />
//           </button>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// // ----------- Stats Counter Section -----------
// const StatsCounter = () => {
//   const stats = [
//     { number: 2000, suffix: "+", label: "Installations" },
//     { number: 20, suffix: "+", label: "Years of Excellence" },
//     { number: 50, suffix: "+", label: "Clients" },
//   ];

//   return (
//     <motion.div
//       className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ amount: 0.4 }}
//       variants={{
//         hidden: {},
//         visible: {
//           transition: { staggerChildren: 0.3 },
//         },
//       }}
//     >
//       {stats.map((stat, index) => (
//         <motion.div
//           key={index}
//           className="text-center p-6 bg-white/80 backdrop-blur rounded-xl shadow-lg transform hover:scale-105 transition-transform"
//           variants={{
//             hidden: { opacity: 0, y: 30 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           transition={{ duration: 0.6 }}
//         >
//           <h3 className="text-3xl font-bold text-indigo-900">
//             <Counter target={stat.number} suffix={stat.suffix} />
//           </h3>
//           <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };

// // ----------- Core Competency Section -----------
// const CoreCompetency = () => {
//   const competencies = [
//   {
//     title: "Mechanical Engineering",
//     icon: Settings,
//     color: "bg-gradient-to-br from-orange-500 to-orange-600",
//     bgGlow: "bg-orange-500/20",
//     desc: "Precision design, prototyping & robust mechanical solutions.",
//   },
//   {
//     title: "Electrical Engineering",
//     icon: Zap,
//     color: "bg-gradient-to-br from-yellow-500 to-yellow-600",
//     bgGlow: "bg-yellow-500/20",
//     desc: "Smart electrical systems, integration & circuit design.",
//   },
//   {
//     title: "Part Manufacturing",
//     icon: Factory,
//     color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
//     bgGlow: "bg-emerald-500/20",
//     desc: "High-quality component manufacturing at scale.",
//   },
//   {
//     title: "System Integration",
//     icon: Network,
//     color: "bg-gradient-to-br from-purple-500 to-purple-600",
//     bgGlow: "bg-purple-500/20",
//     desc: "Seamless integration of hardware, software & processes.",
//   },
//   {
//     title: "Software Development",
//     icon: Code,
//     color: "bg-gradient-to-br from-blue-500 to-blue-600",
//     bgGlow: "bg-blue-500/20",
//     desc: "Custom applications, test automation & embedded engineering.",
//   },
//   {
//     title: "Test and Validation",
//     icon: TestTube,
//     color: "bg-gradient-to-br from-red-500 to-red-600",
//     bgGlow: "bg-red-500/20",
//     desc: "Comprehensive testing, validation & quality assurance services.",
//   },
// ];

//   const CompetencyCard = ({ item, idx }) => (
//    <motion.div
//   className="group relative p-8 bg-white backdrop-blur-xl rounded-3xl shadow-sm border border-slate-200/60 flex flex-col items-center text-center overflow-hidden"
//   initial={{ opacity: 0, y: 20 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true }}
//   transition={{ duration: 0.5, delay: idx * 0.1 }}
//   whileHover={{ y: -8 }}
// >
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//       <div
//         className={`absolute top-8 w-24 h-24 ${item.bgGlow} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
//       />

//       <div className="relative z-10 mb-6">
//         <div
//   className={`w-20 h-20 flex items-center justify-center rounded-2xl ${item.color} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mx-auto`}
// >
//           <item.icon size={34} strokeWidth={2.2} className="text-white" />
//         </div>
//       </div>

//       <h3 className="relative z-10 text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-900 transition-colors">
//         {item.title}
//       </h3>

//       <p className="relative z-10 text-slate-600 text-sm leading-relaxed">
//         {item.desc}
//       </p>

//       <div
//         className={`absolute bottom-0 left-0 right-0 h-1 ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
//       />
//     </motion.div>
//   );

//   return (
//     <motion.div
//      className="mt-6 py-8"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//     >
//       <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-blue-600 mb-12">
//         Our Core Competencies
//       </h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {competencies.map((item, idx) => (
//           <CompetencyCard key={idx} item={item} idx={idx} />
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// // ----------- Main Page -----------
// export default function AboutPage() {
//   return (
//     <motion.div
//       className="relative min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-50 overflow-hidden mt-12"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, ease: "easeOut" }}
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 z-0">
//         <AnimatedShape
//           type="circle"
//           className="absolute top-20 right-20 w-64 h-64 text-sky-400"
//         />
//         <AnimatedShape
//           type="hexagon"
//           className="absolute bottom-20 left-10 w-48 h-48 text-indigo-400"
//         />
//         <AnimatedShape
//           type="triangle"
//           className="absolute top-1/2 right-1/3 w-32 h-32 text-purple-400"
//         />
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-sky-300 rounded-full filter blur-3xl"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 rounded-full filter blur-3xl"></div>
//           <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="relative z-10 container mx-auto px-6 py-16">
//         {/* Hero Section */}
//         <div className="text-center mb-16">
//           <motion.h1
//             className="text-6xl md:text-7xl font-black mb-4"
//             initial={{ opacity: 0, y: -40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="text-blue-900">From Evolution</span>
//           </motion.h1>

//           <motion.h1
//             className="text-6xl md:text-7xl font-black"
//             initial={{ opacity: 0, y: -40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             <span className="text-blue-600">To Excellence</span>
//           </motion.h1>

//           <motion.p
//             className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             Transforming manufacturing with innovative automation solutions
//             since 2006.
//           </motion.p>
//         </div>

//         {/* Content Grid */}
//         <div className="grid lg:grid-cols-2 gap-16 items-start">
//           {/* Left column: Story + Stats */}
//           <motion.div
//             className="space-y-12"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="bg-white/70 backdrop-blur rounded-2xl p-8 shadow-xl">
//               <h2 className="text-3xl font-bold text-indigo-900 mb-6">
//                 Our Story
//               </h2>
//               <div className="space-y-4 text-slate-700">
//                 <p className="leading-relaxed">
//                   Since 2006, Micrologic has been consistently innovating and
//                   constantly evolving towards a single purpose - to keep our
//                   clients ahead.
//                 </p>
//                 <div className="pl-4 border-l-4 border-sky-400 space-y-2">
//                   <p className="font-semibold">Ahead of rising costs.</p>
//                   <p className="font-semibold">Ahead of compliance demands.</p>
//                   <p className="font-semibold">
//                     Ahead of shifting technologies.
//                   </p>
//                   <p className="font-semibold">
//                     And most importantly, ahead of competition.
//                   </p>
//                 </div>
//                 <p>
//                   Every upgrade, every solution, every system we deliver is
//                   designed to do more with{" "}
//                   <span className="font-bold text-indigo-900">less</span>. And
//                   of course, do it quicker and do it right.
//                 </p>
//               </div>
//             </div>
//             <StatsCounter />
//           </motion.div>

//           {/* Right column: Gallery */}
//           <div className="lg:sticky lg:top-8">
//             <ImageGallery />
//           </div>
//         </div>

//         {/* Technology Partners */}
//         <motion.div
//           className="mt-24"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <TechnologyPartners />
//         </motion.div>

//         {/* Core Competencies */}
//         <CoreCompetency />
//       </div>
//     </motion.div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import {
  Settings,
  Factory,
  Code,
  Zap,
  Network,
  TestTube,
} from "lucide-react";
import TechnologyPartners from "./TechnologyPartners";

// ----------- Animated Background Shapes -----------
const AnimatedShape = ({ type, className }) => {
  const shapes = {
    circle: (
      <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.1">
        <animate
          attributeName="r"
          values="40;45;40"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
    ),
    hexagon: (
      <path
        d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z"
        fill="currentColor"
        opacity="0.1"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="20s"
          repeatCount="indefinite"
        />
      </path>
    ),
    triangle: (
      <path d="M50 20 L80 80 L20 80 Z" fill="currentColor" opacity="0.1">
        <animate
          attributeName="opacity"
          values="0.1;0.3;0.1"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>
    ),
  };

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {shapes[type]}
    </svg>
  );
};

// ----------- Counter Component (Animated) -----------
const Counter = ({ target, suffix = "" }) => {
  const [value, setValue] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      val: target,
      transition: { duration: 2, ease: "easeOut" },
    });
  }, [target, controls]);

  return (
    <motion.span
      initial={{ val: 0 }}
      animate={controls}
      onUpdate={(latest) => setValue(Math.floor(latest.val))}
    >
      {value}
      {suffix}
    </motion.span>
  );
};

// ----------- Image Gallery -----------
const ImageGallery = () => {
  const images = [
    {
      src: "/assets/office.png",
      alt: "Micrologic headquarters and office building in Bengaluru KIADB Industrial Area",
    },
    {
      src: "/assets/image2.jpg",
      alt: "Micrologic industrial automation assembly line and manufacturing floor",
    },
    {
      src: "/assets/image3.jpg",
      alt: "Micrologic engineering team working on system integration projects",
    },
    {
      src: "/assets/image4.jpg",
      alt: "Micrologic automated testing and validation equipment in action",
    },
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImage((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      role="region"
      aria-label="Micrologic facility image gallery"
    >
      <div className="relative h-full">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== currentImage}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      <div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2"
        role="tablist"
        aria-label="Gallery navigation"
      >
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            role="tab"
            aria-selected={index === currentImage}
            aria-label={`View image ${index + 1}: ${img.alt}`}
            className={`relative w-16 h-12 rounded overflow-hidden transition-all ${
              index === currentImage
                ? "ring-2 ring-white scale-110"
                : "opacity-70"
            }`}
          >
            <Image
              src={img.src}
              alt=""
              fill
              className="object-cover"
              sizes="64px"
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
};

// ----------- Stats Counter Section -----------
const StatsCounter = () => {
  const stats = [
    {
      number: 2000,
      suffix: "+",
      label: "Successful Installations Worldwide",
    },
    {
      number: 20,
      suffix: "+",
      label: "Years of Engineering Excellence",
    },
    {
      number: 50,
      suffix: "+",
      label: "Trusted Enterprise Clients",
    },
  ];

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.3 },
        },
      }}
      role="list"
      aria-label="Micrologic company statistics"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center p-6 bg-white/80 backdrop-blur rounded-xl shadow-lg transform hover:scale-105 transition-transform"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          role="listitem"
        >
          <h3 className="text-3xl font-bold text-indigo-900">
            <Counter target={stat.number} suffix={stat.suffix} />
          </h3>
          <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

// ----------- Core Competency Section -----------
const CoreCompetency = () => {
  const competencies = [
    {
      title: "Mechanical Engineering",
      icon: Settings,
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      bgGlow: "bg-orange-500/20",
      desc: "Precision mechanical design, rapid prototyping and robust engineering solutions for industrial automation systems.",
    },
    {
      title: "Electrical Engineering",
      icon: Zap,
      color: "bg-gradient-to-br from-yellow-500 to-yellow-600",
      bgGlow: "bg-yellow-500/20",
      desc: "Smart electrical system design, PLC programming, panel integration and advanced circuit engineering.",
    },
    {
      title: "Part Manufacturing",
      icon: Factory,
      color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      bgGlow: "bg-emerald-500/20",
      desc: "High-precision CNC machining, component manufacturing and scalable production capabilities.",
    },
    {
      title: "System Integration",
      icon: Network,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      bgGlow: "bg-purple-500/20",
      desc: "End-to-end integration of hardware, software, robotics and manufacturing processes for seamless operations.",
    },
    {
      title: "Software Development",
      icon: Code,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      bgGlow: "bg-blue-500/20",
      desc: "Custom industrial software, test automation platforms, SCADA systems and Industry 4.0 analytics dashboards.",
    },
    {
      title: "Test and Validation",
      icon: TestTube,
      color: "bg-gradient-to-br from-red-500 to-red-600",
      bgGlow: "bg-red-500/20",
      desc: "Comprehensive functional testing, end-of-line validation, quality assurance and compliance verification services.",
    },
  ];

  const CompetencyCard = ({ item, idx }) => (
    <motion.article
      className="group relative p-8 bg-white backdrop-blur-xl rounded-3xl shadow-sm border border-slate-200/60 flex flex-col items-center text-center overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden="true"
      />
      <div
        className={`absolute top-8 w-24 h-24 ${item.bgGlow} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        aria-hidden="true"
      />

      <div className="relative z-10 mb-6">
        <div
          className={`w-20 h-20 flex items-center justify-center rounded-2xl ${item.color} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mx-auto`}
        >
          <item.icon
            size={34}
            strokeWidth={2.2}
            className="text-white"
            aria-hidden="true"
          />
        </div>
      </div>

      <h3 className="relative z-10 text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-900 transition-colors">
        {item.title}
      </h3>

      <p className="relative z-10 text-slate-600 text-sm leading-relaxed">
        {item.desc}
      </p>

      <div
        className={`absolute bottom-0 left-0 right-0 h-1 ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
        aria-hidden="true"
      />
    </motion.article>
  );

  return (
    <motion.section
      className="mt-6 py-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      aria-labelledby="core-competencies-heading"
    >
      <h2
        id="core-competencies-heading"
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-blue-600 mb-12"
      >
        Our Core Competencies
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {competencies.map((item, idx) => (
          <CompetencyCard key={idx} item={item} idx={idx} />
        ))}
      </div>
    </motion.section>
  );
};

// ----------- Main Page -----------
export default function AboutPage() {
  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-50 overflow-hidden mt-12"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <AnimatedShape
          type="circle"
          className="absolute top-20 right-20 w-64 h-64 text-sky-400"
        />
        <AnimatedShape
          type="hexagon"
          className="absolute bottom-20 left-10 w-48 h-48 text-indigo-400"
        />
        <AnimatedShape
          type="triangle"
          className="absolute top-1/2 right-1/3 w-32 h-32 text-purple-400"
        />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-sky-300 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 rounded-full filter blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Main content */}
      <main className="relative z-10 container mx-auto px-6 py-16">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-black mb-4"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-900">From Evolution </span>
            <br />
            <motion.span
              className="text-blue-600"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              To Excellence
            </motion.span>
          </motion.h1>

          <motion.p
            className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Micrologic is a Bengaluru-based industrial automation and system
            integration company transforming manufacturing with innovative
            solutions since 2006.
          </motion.p>
        </header>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column: Story + Stats */}
          <motion.section
            className="space-y-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            aria-labelledby="our-story-heading"
          >
            <div className="bg-white/70 backdrop-blur rounded-2xl p-8 shadow-xl">
              <h2
                id="our-story-heading"
                className="text-3xl font-bold text-indigo-900 mb-6"
              >
                Our Story
              </h2>
              <div className="space-y-4 text-slate-700">
                <p className="leading-relaxed">
                  Founded in 2006 and headquartered at{" "}
                  <strong>
                    #22-D1, &ldquo;Micrologic Drive&rdquo;, KIADB Industrial
                    Area, NH&nbsp;275, 1st&nbsp;Phase, Kumbalagodu, Bengaluru,
                    Karnataka&nbsp;560&nbsp;074
                  </strong>
                  , Micrologic has been consistently innovating and constantly
                  evolving towards a single purpose&nbsp;to keep our
                  clients ahead.
                </p>
                <blockquote className="pl-4 border-l-4 border-sky-400 space-y-2">
                  <p className="font-semibold">Ahead of rising costs.</p>
                  <p className="font-semibold">Ahead of compliance demands.</p>
                  <p className="font-semibold">
                    Ahead of shifting technologies.
                  </p>
                  <p className="font-semibold">
                    And most importantly, ahead of competition.
                  </p>
                </blockquote>
                <p>
                  With over{" "}
                  <strong>2,000+ installations across 50+ clients</strong>,
                  every upgrade, every solution, every system we deliver is
                  designed to do more with{" "}
                  less
                  and do it quicker and do it right. Our expertise
                  spans assembly automation, test &amp; validation systems,
                  robotics integration and Industry&nbsp;4.0 smart
                  manufacturing analytics.
                </p>
              </div>
            </div>
            <StatsCounter />
          </motion.section>

          {/* Right column: Gallery */}
          <aside className="lg:sticky lg:top-8" aria-label="Company gallery">
            <ImageGallery />
          </aside>
        </div>

        {/* Technology Partners */}
        <motion.section
          className="mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          aria-label="Technology partners"
        >
          <TechnologyPartners />
        </motion.section>

        {/* Core Competencies */}
        <CoreCompetency />
      </main>
    </div>
  );
}