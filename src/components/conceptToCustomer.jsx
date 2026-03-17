// import React, { useEffect, useRef, useState } from "react";
// import machineImage from "../assets/machinary.png";
// import bgImage from "../assets/clean.png";

// const ConceptToCustomer = () => {
//   const textRef = useRef(null);
//   const imageRef = useRef(null);

//   const [textVisible, setTextVisible] = useState(false);
//   const [imageVisible, setImageVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.target === textRef.current && entry.isIntersecting) {
//             setTextVisible(true);
//           }
//           if (entry.target === imageRef.current && entry.isIntersecting) {
//             setImageVisible(true);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     if (textRef.current) observer.observe(textRef.current);
//     if (imageRef.current) observer.observe(imageRef.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       className="relative w-full flex justify-center overflow-hidden bg-cover bg-center"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       {/* Content overlay */}
//       <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
//         {/* LEFT TEXT */}
//         <div
//           ref={textRef}
//           className={`p-4 sm:p-6 md:p-8 max-w-2xl transform transition-all duration-700 ease-out ${
//             textVisible
//               ? "opacity-100 translate-y-0"
//               : "opacity-0 translate-y-10"
//           }`}
//         >
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 uppercase leading-snug">
//             From Concept
//             <span className="block text-blue-700 text-3xl sm:text-4xl md:text-5xl font-extrabold">
//               To Customer – Faster
//             </span>
//           </h2>

//           <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
//             In a world where speed is synonymous with success, Micrologic’s
//             standard Test and Automation Solutions cut down development cycles
//             and accelerate your time to market.
//           </p>

//           <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
//             Our easy-to-integrate and ready-to-deploy modular platforms simplify
//             complexity and streamline workflows – ensuring quicker roll-outs and
//             measurable gains.
//           </p>

//           <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
//             Markets never stop evolving – and neither do we. At Micrologic,
//             every solution is built to adapt, scale and stay relevant as your
//             needs change. This continuous evolution means you get more than
//             faster results today – you gain enduring value and future-ready
//             outcomes.
//           </p>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div
//           ref={imageRef}
//           className={`flex justify-center md:justify-end transform transition-all duration-700 ease-out delay-200 ${
//             imageVisible
//               ? "opacity-100 translate-y-0"
//               : "opacity-0 translate-y-10"
//           }`}
//         >
//           <img
//             src={machineImage}
//             alt="Automation Machine"
//             className="w-4/5 sm:w-3/4 md:w-full h-auto max-h-[400px] sm:max-h-[450px] md:max-h-[500px] object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConceptToCustomer;
"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
// import machineImage from "../assets/marketpng.webp";

const ConceptToCustomer = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === textRef.current && entry.isIntersecting) {
            setTextVisible(true);
          }
          if (entry.target === imageRef.current && entry.isIntersecting) {
            setImageVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Accelerated Time-to-Market",
      description: "Standardized solutions that shorten development cycles",
      gradient: "from-amber-400 to-orange-500",
      bgGlow: "bg-orange-500/20"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: "Modular Integration",
      description: "Ready-to-deploy platforms that reduce complexity",
      gradient: "from-blue-400 to-indigo-500",
      bgGlow: "bg-blue-500/20"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Future-Ready Scalability",
      description: "Engineered for adaptability as requirements evolve",
      gradient: "from-emerald-400 to-teal-500",
      bgGlow: "bg-emerald-500/20"
    }
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Light Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(circle, #cbd5e1 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-10">
        
        {/* Section Header - Badge */}
        <div className="text-center mb-6 md:mb-8">
          <span className="inline-block px-4 py-1.5 bg-blue-100 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold tracking-wide">
            Efficiency Enhanced
          </span>
        </div>

        {/* Centered Main Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            <span className="text-gray-900">From Concept To </span>
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Customer Faster
            </span>
          </h2>
          <div className="mt-4 sm:mt-5 md:mt-6 h-1 sm:h-1.5 w-20 sm:w-24 md:w-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"></div>
        </div>

        {/* Left-Right Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT TEXT CONTENT */}
          <div
            ref={textRef}
            className={`transform transition-all duration-1000 ease-out ${
              textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Description */}
            <div className="space-y-5 mb-10">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                In today&apos;s fast-paced world, where speed defines success, 
                <span className="text-gray-900 font-semibold"> Micrologic&apos;s standardized Test and Assembly solutions </span> 
                shorten development cycles and accelerate time-to-market.
              </p>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Our ready-to-deploy, easy-to-integrate modular platforms reduce 
                complexity and optimize workflows, enabling faster implementation 
                and measurable performance improvements.
              </p>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                As markets continuously evolve, so do our solutions. Every system is 
                engineered for adaptability and scalability, delivering not just 
                immediate speed, but 
                <span className="text-blue-700 font-semibold"> sustained value </span> 
                and future-ready manufacturing outcomes.
              </p>
            </div>

            {/* Premium Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Gradient border wrapper */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500`}></div>
                  
                  {/* Card content */}
                  <div className="relative h-full p-6 bg-white rounded-2xl border border-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-500">
                    {/* Background glow effect */}
                    <div className={`absolute top-0 right-0 w-32 h-32 ${feature.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Icon container */}
                    <div className={`relative w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      {feature.icon}
                      {/* Icon shine effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/20 to-transparent"></div>
                    </div>
                    
                    {/* Text content */}
                    <h4 className="relative text-gray-900 font-bold text-base mb-2 group-hover:text-gray-800 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="relative text-gray-500 text-sm leading-relaxed group-hover:text-gray-600 transition-colors">
                      {feature.description}
                    </p>
                    
                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${feature.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
   <div
  ref={imageRef}
  className={`relative transform transition-all duration-1000 ease-out delay-300 ${
    imageVisible
      ? "opacity-100 translate-y-0 scale-100"
      : "opacity-0 translate-y-12 scale-95"
  }`}
>
  <div className="relative p-6 sm:p-8 h-[450px] sm:h-[500px]">

    <div className="absolute top-0 left-0 w-24 h-24 border-l-4 border-t-4 border-blue-500 rounded-tl-3xl"></div>
    <div className="absolute bottom-0 right-0 w-24 h-24 border-r-4 border-b-4 border-indigo-500 rounded-br-3xl"></div>

    <Image
      src="/assets/marketpng.webp"
      alt="Automation Machine"
      fill
      className="object-contain"
      priority
    />

  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default ConceptToCustomer;