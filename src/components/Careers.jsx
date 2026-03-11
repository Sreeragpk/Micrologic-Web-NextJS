// import React from "react";
// import { Mail, Users, Lightbulb, TrendingUp, Heart } from "lucide-react";
// import { motion } from "framer-motion";
// import careerHero from "../assets/team1.jpg";
// import teamImage1 from "../assets/team2.jpg";
// import teamImage2 from "../assets/team3.jpg";
// import teamImage3 from "../assets/team4.jpg";
// import Seo from "./Seo";

// // Variants for reusability
// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0 },
// };

// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
// };

// export default function Careers() {
//   return (
//     <>
//     <Seo
//   title="Careers at Micrologic | Automation, Robotics & Software Jobs in Bengaluru"
//   description="Join Micrologic Integrated Systems and build the future of automation. We hire Mechanical, Electrical, Electronics, Robotics, Machine Vision, Application Engineers, and .NET/Python/AI-ML Developers for cutting-edge manufacturing projects."
//   canonical="https://www.micrologicglobal.com/careers"
//   keywords="automation careers, robotics jobs, machine vision engineer, mechanical design engineer jobs, electrical engineer automation, application engineer, .NET developer, Python developer, AI ML engineer, jobs in Bengaluru, Micrologic careers"
//   ogImage={careerHero}
// />
//     <motion.div
//       className="relative min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-50 overflow-hidden"
//       initial="hidden"
//       animate="visible"
//       transition={{ staggerChildren: 0.3 }}
//     >
//       {/* Hero Section with Parallax Effect */}
//       <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
//         <motion.div
//           className="absolute inset-0 w-full h-full"
//           initial={{ scale: 1.2 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         >
//           <img
//             src={careerHero}
//             alt="Micrologic Team Working"
//             className="w-full h-full object-cover object-center"
//           />
//           {/* Gradient Overlay for better text visibility */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
//         </motion.div>

//         <motion.div
//           className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto"
//           variants={fadeUp}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="mb-6"
//           >
//             <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium mb-6">
//               Join Our Team
//             </span>
//           </motion.div>

//           <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
//             Join the Future of
//             <span className="block text-transparent bg-clip-text bg-blue-600">
//               Automation
//             </span>
//           </h1>
//           <p className="max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed text-gray-100">
//             At Micrologic, we don't just work together — we innovate, build and
//             create together. Behind every breakthrough is a team that believes
//             and trusts in each other.
//           </p>

//           <motion.div
//             className="mt-10"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//           >
//             <a
//               href="#opportunities"
//               className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
//             >
//               Explore Opportunities
//               <svg
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </a>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Intro Section with Cards */}
//       <motion.section
//         className="container mx-auto px-6 py-24"
//         variants={fadeUp}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <motion.h2
//               className="text-5xl font-extrabold text-blue-600 mb-6"
//               variants={fadeUp}
//             >
//               Why Micrologic?
//             </motion.h2>
//             <motion.p
//               className="text-slate-700 text-xl leading-relaxed max-w-3xl mx-auto"
//               variants={fadeUp}
//               transition={{ delay: 0.2 }}
//             >
//               Micrologic designs, develops, manufactures and deploys high-end
//               automation solutions for global manufacturing companies.
//             </motion.p>
//           </div>

//           {/* Feature Cards */}
//           <div className="grid md:grid-cols-2 gap-8 mt-16">
//             <motion.div
//               className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-100"
//               variants={fadeUp}
//               whileHover={{ y: -5 }}
//             >
//               <div className="flex items-start gap-4">
//                 <div className="p-3 bg-indigo-100 rounded-2xl">
//                   <Users className="w-8 h-8 text-indigo-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-blue-600 mb-3">
//                     Diverse Expertise
//                   </h3>
//                   <p className="text-slate-600 leading-relaxed">
//                     We are filled with talented people from diverse engineering
//                     disciplines —
//                     <span className="font-semibold text-blue-700">
//                       {" "}
//                       Mechanical, Electronics, Robotics, Machine Vision, and
//                       Software.
//                     </span>
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-100"
//               variants={fadeUp}
//               whileHover={{ y: -5 }}
//               transition={{ delay: 0.2 }}
//             >
//               <div className="flex items-start gap-4">
//                 <div className="p-3 bg-indigo-100 rounded-2xl">
//                   <Heart className="w-8 h-8 text-indigo-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-blue-600 mb-3">
//                     Celebrate Uniqueness
//                   </h3>
//                   <p className="text-slate-600 leading-relaxed">
//                     It's through these creative and passionate teams that we are
//                     what we are today. We identify, nurture, and celebrate
//                     unique talents.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Culture Section with Icons */}
//       <motion.section
//         className="relative py-24 overflow-hidden"
//         variants={fadeIn}
//       >
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//             }}
//           />
//         </div>

//         <div className="container mx-auto px-6 relative z-10">
//           <motion.h2
//             className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-16"
//             variants={fadeUp}
//           >
//             Our Culture & Values
//           </motion.h2>

//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {[
//               {
//                 icon: Lightbulb,
//                 title: "Innovation",
//                 color: "from-purple-500 to-indigo-500",
//               },
//               {
//                 icon: Users,
//                 title: "Collaboration",
//                 color: "from-blue-500 to-cyan-500",
//               },
//               {
//                 icon: TrendingUp,
//                 title: "Growth",
//                 color: "from-green-500 to-emerald-500",
//               },
//             ].map((value, i) => (
//               <motion.div
//                 key={value.title}
//                 className="relative group"
//                 variants={fadeUp}
//                 transition={{ duration: 0.6, delay: i * 0.2 }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <div
//                   className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur-xl"
//                   style={{
//                     background: `linear-gradient(to right, ${value.color})`,
//                   }}
//                 />
//                 <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
//                   <div
//                     className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center`}
//                   >
//                     <value.icon className="w-8 h-8 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                     {value.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed">
//                     {value.title === "Innovation" &&
//                       "From concepts to deployed solutions, innovation is at the heart of everything we build."}
//                     {value.title === "Collaboration" &&
//                       "Cross-disciplinary teams in Mechanical, Electrical, Robotics, and Software work seamlessly."}
//                     {value.title === "Growth" &&
//                       "Every individual is unique. We nurture talents, provide mentoring, and create opportunities for growth."}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Team Spirit Section with Larger Images */}
//       <motion.section
//         className="py-24 bg-gradient-to-b from-transparent to-white/50"
//         variants={fadeUp}
//       >
//         <div className="container mx-auto px-6">
//           <motion.div className="text-center mb-16" variants={fadeUp}>
//             <h2 className="text-5xl font-extrabold text-blue-600 mb-6">
//               Life at Micrologic
//             </h2>
//             <p className="text-xl text-slate-700 max-w-3xl mx-auto">
//               Our recent team outing was a celebration of this spirit — a day
//               filled with laughter, connection, and energy.
//             </p>
//           </motion.div>

//           {/* Large Image Gallery */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//             {[teamImage1, teamImage2, teamImage3].map((img, i) => (
//               <motion.div
//                 key={i}
//                 className="relative group overflow-hidden rounded-3xl shadow-2xl"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: i * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <div className="aspect-w-4 aspect-h-5 relative h-96">
//                   <img
//                     src={img}
//                     alt={`Team ${i + 1}`}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Call to Action with Wave */}
//       <motion.section
//         className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-sky-700 text-white py-32 overflow-hidden"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//       >
//         {/* Animated Wave Background */}
//         <div className="absolute inset-0 opacity-10">
//           <svg
//             className="absolute bottom-0 w-full h-40"
//             preserveAspectRatio="none"
//             viewBox="0 0 1440 320"
//           >
//             <motion.path
//               fill="currentColor"
//               d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//               initial={{ pathLength: 0 }}
//               animate={{ pathLength: 1 }}
//               transition={{ duration: 2, ease: "easeInOut" }}
//             />
//           </svg>
//         </div>
//         <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
//           <motion.h2
//             className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
//             variants={fadeUp}
//           >
//             Build the Future With Us
//           </motion.h2>

//           <motion.p
//             className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed"
//             variants={fadeUp}
//             transition={{ delay: 0.2 }}
//           >
//             We’re looking for passionate minds to join our growing team —
//             <span className="font-semibold">
//               {" "}
//               Mechanical Engineers, Electrical Engineers, Application Engineers,
//               .NET/Python Developers, Vision Specialists, and AI/ML Engineers
//             </span>
//             . If you thrive on innovation, creativity, and problem-solving, we’d
//             love to hear from you.
//           </motion.p>

//           <motion.a
//             href="mailto:hr@micrologicglobal.com"
//             className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
//             variants={fadeUp}
//             transition={{ delay: 0.4 }}
//             whileHover={{ y: -2 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
//             <span className="text-lg">
//               Send Your CV to hr@micrologicglobal.com
//             </span>
//           </motion.a>
//         </div>
//       </motion.section>

//       {/* Floating Elements for Visual Interest */}
//       <div className="fixed inset-0 pointer-events-none overflow-hidden">
//         <motion.div
//           className="absolute top-20 left-10 w-20 h-20 bg-indigo-400 rounded-full opacity-10 blur-xl"
//           animate={{
//             x: [0, 100, 0],
//             y: [0, -100, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-10 w-32 h-32 bg-sky-400 rounded-full opacity-10 blur-xl"
//           animate={{
//             x: [0, -100, 0],
//             y: [0, 100, 0],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />
//       </div>
//     </motion.div>
//     </>
//   );
// }
"use client";

import Image from "next/image";
import { Mail, Users, Lightbulb, TrendingUp, Heart } from "lucide-react";
import { motion } from "framer-motion";

// Variants for reusability
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Careers() {
  return (
    <motion.div
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-50 overflow-hidden"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.3 }}
    >
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/assets/team1.jpg"
            alt="Micrologic Team Working"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium mb-6">
              Join Our Team
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Join the Future of
            <span className="block text-transparent bg-clip-text bg-blue-600">Automation</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed text-gray-100">
            At Micrologic, we don't just work together — we innovate, build and create together. Behind every
            breakthrough is a team that believes and trusts in each other.
          </p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#opportunities"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
            >
              Explore Opportunities
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Intro Section with Cards */}
      <motion.section className="container mx-auto px-6 py-24" variants={fadeUp} transition={{ duration: 0.8 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 className="text-5xl font-extrabold text-blue-600 mb-6" variants={fadeUp}>
              Why Micrologic?
            </motion.h2>
            <motion.p
              className="text-slate-700 text-xl leading-relaxed max-w-3xl mx-auto"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              Micrologic designs, develops, manufactures and deploys high-end automation solutions for global
              manufacturing companies.
            </motion.p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <motion.div
              className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-100"
              variants={fadeUp}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 rounded-2xl">
                  <Users className="w-8 h-8 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">Diverse Expertise</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We are filled with talented people from diverse engineering disciplines —
                    <span className="font-semibold text-blue-700">
                      {" "}
                      Mechanical, Electronics, Robotics, Machine Vision, and Software.
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-100"
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 rounded-2xl">
                  <Heart className="w-8 h-8 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">Celebrate Uniqueness</h3>
                  <p className="text-slate-600 leading-relaxed">
                    It's through these creative and passionate teams that we are what we are today. We identify, nurture,
                    and celebrate unique talents.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Culture Section with Icons */}
      <motion.section className="relative py-24 overflow-hidden" variants={fadeIn}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-16" variants={fadeUp}>
            Our Culture & Values
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                color: "from-purple-500 to-indigo-500",
                desc: "From concepts to deployed solutions, innovation is at the heart of everything we build.",
              },
              {
                icon: Users,
                title: "Collaboration",
                color: "from-blue-500 to-cyan-500",
                desc: "Cross-disciplinary teams in Mechanical, Electrical, Robotics, and Software work seamlessly.",
              },
              {
                icon: TrendingUp,
                title: "Growth",
                color: "from-green-500 to-emerald-500",
                desc: "Every individual is unique. We nurture talents, provide mentoring, and create opportunities for growth.",
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                className="relative group"
                variants={fadeUp}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur-xl"
                  style={{
                    background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  }}
                />
                <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div
                    className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Spirit Section with Larger Images */}
      <motion.section className="py-24 bg-gradient-to-b from-transparent to-white/50" variants={fadeUp}>
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeUp}>
            <h2 className="text-5xl font-extrabold text-blue-600 mb-6">Life at Micrologic</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Our recent team outing was a celebration of this spirit — a day filled with laughter, connection, and
              energy.
            </p>
          </motion.div>

          {/* Large Image Gallery */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {["/assets/team2.jpg", "/assets/team3.jpg", "/assets/team4.jpg"].map((img, i) => (
              <motion.div
                key={i}
                className="relative group overflow-hidden rounded-3xl shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-96">
                  <Image
                    src={img}
                    alt={`Team ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action with Wave */}
      <motion.section
        className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-sky-700 text-white py-32 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Animated Wave Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute bottom-0 w-full h-40" preserveAspectRatio="none" viewBox="0 0 1440 320">
            <motion.path
              fill="currentColor"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8" variants={fadeUp}>
            Build the Future With Us
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            We're looking for passionate minds to join our growing team —
            <span className="font-semibold">
              {" "}
              Mechanical Engineers, Electrical Engineers, Application Engineers, .NET/Python Developers, Vision
              Specialists, and AI/ML Engineers
            </span>
            . If you thrive on innovation, creativity, and problem-solving, we'd love to hear from you.
          </motion.p>

          <motion.a
            href="mailto:hr@micrologicglobal.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-lg">Send Your CV to hr@micrologicglobal.com</span>
          </motion.a>
        </div>
      </motion.section>

      {/* Floating Elements for Visual Interest */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-indigo-400 rounded-full opacity-10 blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-sky-400 rounded-full opacity-10 blur-xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </motion.div>
  );
}