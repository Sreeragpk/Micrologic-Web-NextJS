"use client";

import React from "react";
import Image from "next/image";
import {
  Database,
  BarChart3,
  Cloud,
  Lock,
  Zap,
  Activity,
  TrendingUp,
  GitBranch,
  LineChart,
  Gauge,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Shield,
  Server,
  Eye,
  Settings,
  Target,
  RefreshCw,
  Radio,
  Repeat,
  Trash2,
  CircleDot,
  Thermometer,
  GitCompare,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const DigitalTransformation = () => {
  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Hero Banner - Updated with Next.js Image */}
      <motion.div
        className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden"
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
            src="/assets/digitalimagefinal.webp"
            alt="Digital Transformation"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-center"
              >
                Digital Transformation
              </motion.h1>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Architecture Workflow */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              FactEyes Architecture{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                and Capability
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end data journey from collection to visualization
            </p>
          </motion.div>

          {/* Architecture Diagram - Updated with Next.js Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="mb-12"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <Image
                src="/assets/digitalimgnew.webp"
                alt="FactEyes Data Architecture"
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>

          {/* Pipeline Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch">
            {[
              {
                icon: <Database className="w-5 h-10" />,
                title: "Data Sources",
                desc: "IoT sensors, ERP, MES, databases",
                color: "blue",
              },
              {
                icon: <GitBranch className="w-5 h-10" />,
                title: "Ingestion",
                desc: "Azure Data Factory ETL & Stream Analytics",
                color: "indigo",
              },
              {
                icon: <Server className="w-5 h-10" />,
                title: "Processing",
                desc: "Databricks",
                color: "purple",
              },
              {
                icon: <Lock className="w-5 h-10" />,
                title: "Storage",
                desc: "Azure SQL, Secure data lake & warehouse",
                color: "pink",
              },
              {
                icon: <BarChart3 className="w-5 h-10" />,
                title: "Visualization",
                desc: "Power BI - FactEyes",
                color: "cyan",
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div
                  className={`bg-gradient-to-br from-${step.color}-50 to-${step.color}-100 
                    rounded-xl p-6 text-center border-2 border-${step.color}-200 
                    hover:shadow-lg transition-all h-full flex flex-col justify-center`}
                >
                  <div className={`flex justify-center items-center text-${step.color}-600 mb-4`}>
                    {step.icon}
                  </div>
                  <h4 className="font-bold text-base text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
                {idx < 4 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 text-gray-400 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facteyes Analytics Platform */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-6">
              <Eye className="w-5 h-5 text-cyan-300" />
              <span className="text-sm font-semibold bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                Powered by FactEyes
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent pb-2">
              Advanced Analytics & Reporting
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Transform data into actionable insights with Power BI and FactEyes dashboards
            </p>
          </motion.div>

          {/* Main Dashboard Showcase */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Power BI Integration */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <BarChart3 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Power BI</h3>
                    <p className="text-blue-200 text-sm">Interactive Dashboards</p>
                  </div>
                </div>

                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl mb-6 ring-4 ring-white/10">
                  <Image
                    src="/assets/bi.webp"
                    alt="Power BI Dashboard"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      LIVE
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { icon: <RefreshCw className="w-4 h-4" />, text: "Real-time data refresh" },
                    { icon: <Target className="w-4 h-4" />, text: "Custom KPI tracking" },
                    { icon: <Layers className="w-4 h-4" />, text: "Multi-layered drill-down" },
                    { icon: <CheckCircle2 className="w-4 h-4" />, text: "Mobile-responsive design" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all">
                      <div className="text-yellow-400">{item.icon}</div>
                      <span className="text-blue-100 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Facteyes Platform */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">FactEyes</h3>
                    <p className="text-blue-200 text-sm">Manufacturing Intelligence</p>
                  </div>
                </div>

                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl mb-6 ring-4 ring-white/10">
                  <Image
                    src="/assets/facteyes-dashboard.png"
                    alt="FactEyes Dashboard"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>

                <div className="space-y-3">
                  {[
                    { icon: <Settings className="w-4 h-4" />, text: "Industry-specific modules" },
                    { icon: <CircleDot className="w-4 h-4" />, text: "Customizable workflows" },
                    { icon: <Cloud className="w-4 h-4" />, text: "Azure cloud integration" },
                    { icon: <CheckCircle2 className="w-4 h-4" />, text: "Predictive analytics" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all">
                      <div className="text-cyan-400">{item.icon}</div>
                      <span className="text-blue-100 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Integration Benefits */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Instant Insights",
                desc: "Sub-second query performance",
                gradient: "from-yellow-400 to-orange-500",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Secure Access",
                desc: "Role-based permissions",
                gradient: "from-green-400 to-emerald-500",
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Unlimited Scale",
                desc: "Cloud-native architecture",
                gradient: "from-blue-400 to-indigo-500",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Predictive AI",
                desc: "Machine learning insights",
                gradient: "from-purple-400 to-pink-500",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                  {benefit.icon}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-sm text-blue-200">{benefit.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Analytics Suite */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Comprehensive Analytics Suite</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Industry-standard metrics and custom analytics tailored to your manufacturing needs
            </p>
          </motion.div>

          {/* Primary Analytics - With Images */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* OEE Dashboard */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <Gauge className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">OEE Dashboard</h3>
              </div>
              <p className="text-base text-gray-600 mb-6 leading-relaxed min-h-[72px]">
                Overall Equipment Effectiveness tracking with availability, performance, and quality metrics
              </p>
              <div className="bg-white rounded-xl overflow-hidden shadow-md mb-6 h-48 flex items-center justify-center">
                <Image
                  src="/assets/oee-dashboard.png"
                  alt="OEE Dashboard"
                  width={400}
                  height={300}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-gray-700">Real-time OEE calculation</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-gray-700">Downtime analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-gray-700">Production efficiency trends</span>
                </div>
              </div>
            </motion.div>

            {/* Statistical Process Control */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <LineChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">SPC Analysis</h3>
              </div>
              <p className="text-base text-gray-600 mb-6 leading-relaxed min-h-[72px]">
                Statistical Process Control with Cp, Cpk, Cg, and Cgk indices for quality management
              </p>

              <div className="bg-white rounded-xl overflow-hidden shadow-md mb-6 h-48 flex items-center justify-center">
                <Image
                  src="/assets/cpk-analysis.png"
                  alt="CPK Analysis"
                  width={400}
                  height={300}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">Cp/Cpk capability analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">Cg/Cgk gauge studies</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">Control chart monitoring</span>
                </div>
              </div>
            </motion.div>

            {/* Bottleneck Analysis */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Bottleneck Analysis</h3>
              </div>
              <p className="text-base text-gray-600 mb-6 leading-relaxed min-h-[72px]">
                Identify production constraints and optimize throughput with AI-powered bottleneck detection
              </p>

              <div className="bg-white rounded-xl overflow-hidden shadow-md mb-6 h-48 flex items-center justify-center">
                <Image
                  src="/assets/bottleneck-analysis.png"
                  alt="Bottleneck Analysis"
                  width={400}
                  height={300}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-orange-600" />
                  <span className="text-gray-700">Constraint identification</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-orange-600" />
                  <span className="text-gray-700">Throughput optimization</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-orange-600" />
                  <span className="text-gray-700">Predictive maintenance alerts</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Analytics Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Repeat,
                title: "EOL Repeatability",
                desc: "End-of-line test repeatability analysis for consistent quality validation",
                color: "violet",
                features: ["Test-retest correlation", "Measurement variability", "Precision tracking"],
              },
              {
                icon: Trash2,
                title: "Defect & Scrap",
                desc: "Comprehensive defect tracking and scrap reduction analytics",
                color: "rose",
                features: ["Pareto analysis by defect type", "Scrap cost tracking", "Root cause correlation"],
              },
              {
                icon: Radio,
                title: "Condition Monitoring",
                desc: "Real-time sensor-based equipment health monitoring",
                color: "cyan",
                features: ["Vibration analysis", "Temperature monitoring", "Predictive maintenance"],
              },
              {
                icon: GitCompare,
                title: "Gauge R&R",
                desc: "Measurement system analysis for repeatability and reproducibility",
                color: "amber",
                features: ["Operator variation study", "Equipment calibration", "MSA compliance"],
              },
              {
                icon: Target,
                title: "First Pass Yield",
                desc: "Track production quality at first attempt without rework",
                color: "emerald",
                features: ["Station-by-station FPY", "Trend analysis", "Quality improvement tracking"],
              },
              {
                icon: Activity,
                title: "Cycle Time",
                desc: "Detailed cycle time monitoring and optimization",
                color: "sky",
                features: ["Process step timing", "Takt time comparison", "Efficiency optimization"],
              },
              {
                icon: Zap,
                title: "Energy Analytics",
                desc: "Monitor and optimize energy consumption patterns",
                color: "lime",
                features: ["Real-time power monitoring", "Cost per unit analysis", "Sustainability metrics"],
              },
              {
                icon: Layers,
                title: "Inventory & WIP",
                desc: "Work-in-progress and inventory level optimization",
                color: "indigo",
                features: ["Real-time WIP tracking", "Buffer optimization", "Inventory turnover ratio"],
              },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  className={`group bg-gradient-to-br from-${item.color}-50 to-${item.color}-50 rounded-xl p-6 border-2 border-${item.color}-100 hover:border-${item.color}-300 hover:shadow-lg transition-all`}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-gray-700">
                        <div className={`w-1.5 h-1.5 bg-${item.color}-500 rounded-full mt-1.5`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Live Data Analytics */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">Live Data</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Real-Time Analytics Engine</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Monitor your production floor with millisecond-level data updates. Our live analytics engine processes streaming data from IoT sensors,
                machines, and quality systems to deliver instant insights.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: <Activity />,
                    title: "Sub-second latency",
                    desc: "Real-time data streaming with Azure",
                  },
                  {
                    icon: <TrendingUp />,
                    title: "Predictive insights",
                    desc: "AI-powered trend forecasting",
                  },
                  {
                    icon: <Zap />,
                    title: "Instant alerts",
                    desc: "Automated anomaly detection",
                  },
                  {
                    icon: <Thermometer />,
                    title: "Sensor integration",
                    desc: "IoT device monitoring",
                  },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-base text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-6">
                <Image
                  src="/assets/liveproduction.png"
                  alt="Live Analytics Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;