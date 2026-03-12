"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Database,
  BarChart3,
  Activity,
  Shield,
  CheckCircle2,
  TrendingUp,
  Zap,
  Eye,
  Target,
  Cpu,
  PackageSearch,
} from "lucide-react";

export default function TraceabilityFlow() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50" />
      
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Banner - Updated with Next.js Image */}
      <motion.div
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
            src="/assets/scanning.webp"
            alt="Traceability Solutions"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                  Traceability Solutions
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50"></div>
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Traceability Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <Target className="w-4 h-4" />
                  <span>Complete Visibility</span>
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  <span className="text-transparent bg-clip-text bg-blue-600">
                    Traceability
                  </span>
                </h2>
                
                <p className="text-slate-600 max-w-3xl mx-auto text-lg">
                  End-to-end visibility from production to analytics
                </p>
              </div>

              {/* Hero Statement Box */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600 text-white text-center px-8 py-8 rounded-2xl shadow-xl mb-12 overflow-hidden border-2 border-white/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <div className="relative z-10">
                  <Shield className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <p className="text-lg leading-relaxed">
                    Traceware keeps a complete history of everything that the product undergoes
                    in the assembly process and reports the precise details.
                  </p>
                </div>
              </motion.div>

              {/* Three Pillars Grid */}
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {[
                  {
  title: "PART TRACEABILITY",
  icon: PackageSearch,
  description:
    "Tracks and records all parts and material used in the production, including components, consumables and housing. Details such as batch code, supplier code, date code are tracked and recorded for each Product ID.",
  gradient: "from-blue-600 via-blue-500 to-indigo-500"
},
{
  title: "PROCESS TRACEABILITY",
  icon: Activity,
  description:
    "Tracks and records all process parameters and settings such as voltage, current, torque, test results, defects against each product ID.",
  gradient: "from-indigo-600 via-purple-500 to-indigo-500"
},
{
  title: "REPORTS",
  icon: BarChart3,
  description:
    "The data will be stored in a SQL database for parsing and query. Quick reports can be generated by scanning a part with all the details of process and part.",
  gradient: "from-cyan-600 via-blue-500 to-indigo-600"
},
{
  title: "LEGACY SYSTEMS",
  icon: Cpu,
  description:
    "Micrologic Traceware can be effortlessly adapted to any existing legacy machines to provide complete visibility and important insights across older production systems.",
  gradient: "from-emerald-600 via-teal-500 to-cyan-500"
}
                ].map((pillar, index) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ y: -5 }}
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                    
                    <div className={`relative bg-gradient-to-br ${pillar.gradient} text-white rounded-2xl shadow-lg p-8 h-full border border-white/20`}>
                      <div className="bg-white/20 backdrop-blur-sm w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-lg">
                        <pillar.icon className="w-7 h-7 text-white" strokeWidth={2} />
                      </div>
                      
                      <h3 className="font-bold text-xl mb-3">
                        {pillar.title}
                      </h3>
                      
                      <p className="text-sm leading-relaxed text-white/95">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Key Questions */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap className="w-7 h-7 text-white" />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-slate-900 mb-4">
                      Key Traceability Questions Answered
                    </h4>

                    {/* Questions Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {[
                        "Who produced the product?",
                        "When was it produced?",
                        "What parts were used?",
                        "Where did the parts come from?",
                        "What processes did it go through?",
                        "What were the test results?",
                      ].map((question, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2.5 rounded-lg text-sm font-medium text-blue-800 border border-blue-100"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span>{question}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Error Proofing Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="max-w-6xl mx-auto">
              <div className="relative bg-white rounded-3xl shadow-sm p-8 md:p-12 border border-slate-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl -z-10" />

                {/* Header */}
                <div className="text-center mb-12">
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-50 border border-cyan-100 rounded-full text-cyan-600 text-sm font-medium mb-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    <Shield className="w-4 h-4" />
                    <span>Quality Assurance</span>
                  </motion.div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Error Proofing &{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                      Process Traceability
                    </span>
                  </h2>
                  
                  <p className="text-slate-600 max-w-3xl mx-auto text-lg">
                    <span className="text-blue-600 font-semibold">Micrologic Philosophy:</span> Building quality and a reliable history into every product
                    produced in the assembly and test lines.
                  </p>
                </div>

                {/* Content */}
                <div className="space-y-8">
                  {/* Error Proofing */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-8 shadow-sm border border-blue-100"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg">
                        <Shield className="w-7 h-7 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Error Proofing</h3>
                    </div>
                    
                    <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                      Making it impossible (or obvious) to mix up or skip a process. Preventing errors by design is
                      the spirit of error proofing — often implemented using <span className="font-bold text-blue-600">poka-yoke</span> (mistake-proofing).
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { title: "Prevention", desc: "Design parts and fixtures so components only fit the right way.", icon: Shield },
                        { title: "Make Errors Visible", desc: "Sensors and vision systems confirm correct parts or placement.", icon: Eye },
                        { title: "Fool-proof Tools", desc: "Torque-controlled screwdrivers prevent over-torque.", icon: CheckCircle2 }
                      ].map((item, i) => (
                        <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300">
                          <item.icon className="w-6 h-6 text-blue-600 mb-3" />
                          <h4 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h4>
                          <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Process Traceability */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-white to-cyan-50/50 rounded-2xl p-8 shadow-sm border border-cyan-100"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className="bg-gradient-to-br from-cyan-600 to-blue-600 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg">
                        <Activity className="w-7 h-7 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Process Traceability</h3>
                    </div>
                    
                    <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                      <span className="text-blue-600 font-bold">Micrologic Traceware</span> creates a detailed birth certificate and life history for every
                      electronic product. It records every step, component, and parameter.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { title: "Identifying Everything", desc: "Unique IDs (serials, barcodes) for boards, components, batches" },
                        { title: "Recording Steps", desc: "Machine, operator, timestamp, environmental conditions logged" },
                        { title: "Tracking Components", desc: "Supplier and batch information for every part used" },
                        { title: "Capturing Test Results", desc: "Link quality checks and test data to product's unique ID" }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-3 bg-white rounded-xl p-4 shadow-sm border border-cyan-100 hover:shadow-md transition-all duration-300">
                          <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-lg text-slate-900 mb-1">{item.title}</h4>
                            <p className="text-sm text-slate-600">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Importance - Premium Neon Design */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-black rounded-2xl p-8 shadow-xl text-white overflow-hidden border border-white/[0.08]"
                  >
                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-blue-600/20 via-cyan-600/10 to-transparent blur-3xl"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                          style={{
                            background: `linear-gradient(135deg, rgba(34,211,238,0.2), rgba(34,211,238,0.05))`,
                            border: `1px solid rgba(34,211,238,0.4)`,
                          }}
                        >
                          <TrendingUp className="w-7 h-7 text-cyan-400" strokeWidth={2} />
                        </div>
                        <h3 className="text-xl font-bold">The Importance of Traceware</h3>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { title: "Quality Control", desc: "Trace back defects to source — bad batch, machine failure, or operator issue" },
                          { title: "Regulatory Compliance", desc: "Meet strict traceability requirements in regulated industries" },
                          { title: "Warranty & Recalls", desc: "Identify exactly which products are affected to minimize scope and cost" },
                          { title: "Continuous Improvement", desc: "Analyze trace data to find trends, bottlenecks, and optimization opportunities" }
                        ].map((item, i) => (
                          <div key={i} className="flex gap-3 bg-white/[0.02] rounded-xl p-4 border border-white/[0.08] hover:border-white/[0.2] transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                            <div>
                              <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                              <p className="text-sm text-slate-400">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Power of Combining */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-sm border border-blue-200/50"
                  >
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg mb-4">
                        <Zap className="w-4 h-4" />
                        The Power of Combining
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">
                      Error Proofing + Traceware = Excellence
                    </h3>
                    
                    <p className="text-slate-600 mb-6 text-center text-lg">
                      Together, they form a robust system for high-quality electronic assembly
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-3">
                      {[
                        "Error proofing reduces defects up front",
                        "Traceware provides detailed records for fast root cause analysis",
                        "Fewer defects & faster fixes",
                        "Better compliance & more reliable products"
                      ].map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-blue-100 hover:shadow-md transition-all"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" strokeWidth={2} />
                          <span className="font-medium text-slate-800 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}