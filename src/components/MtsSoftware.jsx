"use client";
import React from "react";
import { motion } from "framer-motion";
import ArchitectureDiagram from "./ArchitectureDiagram";


const toolsAndFunctionalities = [
  {
    title: "Device Configuration",
    desc: "Supports configuration for devices & communication protocols like Digital IO, measurement devices, and interfaces (CAN, LIN, RS232, RS485).",
  },
  {
    title: "Tool Monitoring",
    desc: "Real-time monitoring of tool performance with visualization of operations. Allows manual device testing through software.",
  },
  {
    title: "Test Edit",
    desc: "A user-friendly editor to create and modify test sequences. Flexible interface to define complex test cases quickly.",
  },
  {
    title: "Auto Run",
    desc: "Automated execution of test sequences with interactive dashboards and minimal manual intervention.",
  },
  {
    title: "User Management",
    desc: "Granular control of access and permissions with secure role-based restrictions for sensitive data.",
  },
  {
    title: "Reports",
    desc: "Provides measurement reports, defect logs, and production summary reports for quality insights.",
  },
];

const configuratorHighlights = [
  "MTS is a standard application for Test and Measurement: user-friendly and efficient.",
  "Application areas range from PCBA Testing to Box-Build level assembly verification.",
  "Compatible with CAN, LIN, RS232, RS485, and more.",
  "Hardware Configurator for seamless integration of devices like Power Supplies, DMM, and Electronic Loads.",
  "Protocol Configurator for CAN, LIN, RS232, RS485, and UDS communication.",
  "Barcode and QR Code support (2D / 3D) for traceability.",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const MtsSoftware = () => {
  return (
   

      <section className="bg-gradient-to-b from-slate-50 to-white py-20 px-6 lg:px-16 min-h-screen">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
          >
            MTS Software
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto"
          >
            A comprehensive, user-friendly application for Test and Measurement.{" "}
            Designed to simplify processes from{" "}
            <span className="font-semibold text-slate-900">
              PCBA testing to Box Build
            </span>
            , offering unmatched flexibility, integration with industrial
            communication protocols and complete production traceability.
          </motion.p>
        </div>

        {/* Architecture / High-level view */}
        <ArchitectureDiagram />

        {/* Tools & Functionalities */}
        <div className="max-w-6xl mx-auto mb-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center"
          >
            Tools & Functionalities
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {toolsAndFunctionalities.map((tool, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.2 }}
                className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  {tool.title}
                </h3>
                <p className="text-slate-600">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Configurators & Integration */}
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 text-center"
          >
            Configurators & Integration Highlights
          </motion.h2>
          <ul className="space-y-4 text-slate-600 text-lg leading-relaxed">
            {configuratorHighlights.map((point, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex items-start gap-3"
              >
                <span className="text-blue-600 text-xl mt-1">✔</span>
                {point}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

  );
};

export default MtsSoftware;
