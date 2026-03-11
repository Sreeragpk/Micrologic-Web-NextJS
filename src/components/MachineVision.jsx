import React from "react";
import { Cpu, Camera, Scan, Layers, Users } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const MachineVision = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent"
        >
          Machine Vision Solutions
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center text-gray-600 max-w-3xl mx-auto mt-6 text-lg"
        >
          We specialize in <span className="font-semibold text-indigo-600">developing advanced vision software and integrating hardware</span> for high-speed inspection,
          defect detection, and traceability — ensuring consistent quality and efficiency
          across industries.
        </motion.p>

        {/* Image Grid */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {/* Vision System */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <img
              src="https://micrologicglobal.com/wp-content/uploads/2023/01/Image19-2048x1365.jpg"
              alt="Machine Vision System"
              className="w-full h-72 object-contain bg-gray-100"
            />
            <div className="p-6 text-center">
              <Cpu className="mx-auto w-10 h-10 text-indigo-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Vision Systems</h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                End-to-end automated vision systems combining software and hardware for assembly lines and production monitoring.
              </p>
            </div>
          </motion.div>

          {/* Camera Technology */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <img
              src="https://micrologicglobal.com/wp-content/uploads/2023/02/4.Vehicle-Inspection-PDI.jpg"
              alt="Industrial Camera"
              className="w-full h-72 object-contain bg-gray-100"
            />
            <div className="p-6 text-center">
              <Camera className="mx-auto w-10 h-10 text-green-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Camera Technology</h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                High-resolution cameras integrated with vision software for precision inspection,
                barcode reading, and defect detection.
              </p>
            </div>
          </motion.div>

          {/* Inspection Automation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <img
              src="https://micrologicglobal.com/wp-content/uploads/2023/02/12.PCBA-Inspection.jpg"
              alt="Automated Inspection"
              className="w-full h-72 object-contain bg-gray-100"
            />
            <div className="p-6 text-center">
              <Scan className="mx-auto w-10 h-10 text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Inspection Automation</h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                AI-powered inspection tools with integrated hardware that improve accuracy and reduce downtime in production.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Technologies Used */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20 bg-white rounded-2xl shadow-lg p-10"
        >
          <div className="flex items-center justify-center gap-3">
            <Layers className="w-8 h-8 text-purple-600" />
            <h3 className="text-2xl font-bold text-gray-800">Technologies We Use</h3>
          </div>
          <ul className="grid md:grid-cols-3 gap-6 mt-6 text-gray-700 text-center">
            <li className="p-4 border rounded-xl bg-gray-50">MTS Vision – Our Proprietary Vision Software</li>
            <li className="p-4 border rounded-xl bg-gray-50">NeuroCheck – Vision System Software</li>
            <li className="p-4 border rounded-xl bg-gray-50">MVTec HALCON – Image Processing Library</li>
            <li className="p-4 border rounded-xl bg-gray-50">Custom AI/ML Models – Deep Learning for Defect Detection</li>
            <li className="p-4 border rounded-xl bg-gray-50">OpenCV – Computer Vision Framework</li>
            <li className="p-4 border rounded-xl bg-gray-50">Industrial Cameras, Lighting & Optics</li>
          </ul>
        </motion.div>

        {/* Partnerships */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <Users className="w-8 h-8 text-indigo-600" />
            <h3 className="text-2xl font-bold text-gray-800">Trusted Partnerships</h3>
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading companies like <span className="font-semibold">NeuroCheck</span> to deliver reliable and scalable machine vision solutions. Alongside these partnerships, we proudly develop and provide our own software <span className="font-semibold">MTS Vision</span>, ensuring tailored and powerful solutions for our clients.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MachineVision;