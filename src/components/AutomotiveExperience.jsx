
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  Cpu,
  Settings,
  Radio,
  Lightbulb,
  Monitor,
  Radar,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const categories = [
  {
    title: "Power Electronics",
    icon: Cpu,
    color: "from-slate-700 to-slate-900",
    accentColor: "bg-slate-700",
    items: [
      "Motor Controllers",
      "On Board Chargers",
      "Off Board Chargers",
      "DC to DC Converters",
      "Wireless Chargers",
      "Battery Management",
      "EV Supply Equipment",
      "Battery Interconnect",
      "USB Charger",
    ],
  },
  {
    title: "Controllers",
    icon: Settings,
    color: "from-emerald-600 to-emerald-800",
    accentColor: "bg-emerald-600",
    items: [
      "Vehicle Control Unit",
      "Body Control Module",
      "Brake Controllers",
      "Fan Controls",
      "EGR Controller",
      "Engine Control Unit",
    ],
  },
  {
    title: "Switches / RF",
    icon: Radio,
    color: "from-orange-500 to-orange-700",
    accentColor: "bg-orange-500",
    items: [
      "Window Switches",
      "Steering Switches",
      "Auto Gear Shifter",
      "Start Stop Button",
      "Remote Keyless Entry",
      "Ultra Wide Band",
    ],
  },
  {
    title: "Lighting",
    icon: Lightbulb,
    color: "from-amber-500 to-amber-700",
    accentColor: "bg-amber-500",
    items: [
      "Head Lights",
      "Tail Lamps",
      "Indicator Lights",
      "Projector Lamps",
      "Tail Strip",
      "Light Controllers",
    ],
  },
  {
    title: "Display Devices",
    icon: Monitor,
    color: "from-violet-600 to-violet-800",
    accentColor: "bg-violet-600",
    items: [
      "Instrument Clusters",
      "Infotainment Systems",
      "Audio Systems",
      "HVAC Controllers",
      "Silver Box and Display",
    ],
  },
  {
    title: "Sensors",
    icon: Radar,
    color: "from-cyan-600 to-cyan-800",
    accentColor: "bg-cyan-600",
    items: ["Reverse Parking", "TPMS", "Touch Sensors"],
  },
];

export default function AutoElectronicsShowcase() {
  return (
    <div className="w-full bg-white">
      {/* Our Automotive Experience Section */}
      <section className="relative bg-slate-50">
        {/* Header with Background Image */}
        <div className="relative w-full h-[50vh] lg:h-[55vh] overflow-hidden">
          {/* Background Image */}
    <div className="absolute inset-0">
  <Image
    src="/assets/autonew.png"
    alt="Automotive Electronics"
    fill
    className="object-cover brightness-100 contrast-105"
    priority
  />

  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-slate-900/40"></div>
</div>

          {/* Header Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center px-6 max-w-4xl"
            >
              <span className="inline-block text-sm font-semibold text-amber-400 uppercase tracking-widest mb-8">
                What We Offer
              </span>
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Test and Assembly Solutions for Automotive and EV Electronic
                Components
              </h2>

              <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-8"></div>
              {/* <p className="text-slate-200 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                Test and Assembly Solutions For Automotive and EV
              </p> */}
            </motion.div>
          </div>
        </div>

        {/* Categories Grid */}
    <div className="relative py-12 lg:py-14">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[size:40px_40px]"></div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat, idx) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 hover:border-slate-300 transition-all duration-500 overflow-hidden"
                >
                  {/* Top Accent Bar */}
                  <div className={`h-1 bg-gradient-to-r ${cat.color}`}></div>

                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`p-3.5 rounded-xl bg-gradient-to-br ${cat.color} shadow-lg`}
                      >
                        <cat.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {cat.title}
                      </h3>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-slate-100 mb-6"></div>

                    {/* Items List */}
                    <ul className="space-y-3">
                      {cat.items.map((item, itemIdx) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.08 + itemIdx * 0.02 }}
                          className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer group/item"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${cat.accentColor} group-hover/item:scale-125 transition-transform`}
                          ></div>
                          <span className="text-[15px] group-hover/item:translate-x-1 transition-transform">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {/* Why Choose Us Section */}
     <section className="relative bg-gradient-to-b from-slate-50 to-white pt-8 pb-16 lg:pt-10 lg:pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.03)_1px,transparent_0)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          {/* Centered Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20"
          >
            <span className="inline-flex items-center justify-center gap-2 text-sm font-semibold tracking-widest uppercase text-indigo-600 mb-6">
              <span className="w-8 h-px bg-indigo-600"></span>
              Why Micrologic
              <span className="w-8 h-px bg-indigo-600"></span>
            </span>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
              <span className="block">Engineering Excellence for</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent pb-2">
                Smart Manufacturing
              </span>
            </h3>

            <div className="mt-6 h-1.5 w-24 md:w-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"></div>

            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto mt-6">
              We combine automation, testing, and digital intelligence to
              deliver scalable, reliable, and future-ready industrial solutions.
            </p>
          </motion.div>

          {/* Left-Right Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* LEFT - Features Grid */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-4">
                {[
                  {
                    title: "Proven Automation & Test Expertise",
                    desc: "Decades of experience in industrial automation and validation",
                  },
                  {
                    title: "End-to-End Solutions Under One Roof",
                    desc: "From concept, engineering, and testing to deployment",
                  },
                  {
                    title: "Standardized, Modular Platforms",
                    desc: "Scalable systems designed for flexibility and reuse",
                  },
                  {
                    title: "Strong Software & Digitalization Capability",
                    desc: "Advanced data, connectivity, and digital factory solutions",
                  },
                  {
                    title: "Quality, Precision & Reliability",
                    desc: "Built to perform consistently in critical environments",
                  },
                  {
                    title: "Responsive Service & Support",
                    desc: "Fast, knowledgeable global technical assistance",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="group flex gap-4 p-4 rounded-xl bg-white/50 hover:bg-white hover:shadow-lg border border-slate-100 hover:border-indigo-200 transition-all duration-300 cursor-pointer"
                  >
                    {/* Number Badge */}
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/25 group-hover:scale-110 group-hover:shadow-indigo-500/40 transition-all duration-300">
                      {String(idx + 1).padStart(2, "0")}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="text-slate-900 font-semibold text-base mb-1 group-hover:text-indigo-600 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-slate-500 text-sm leading-relaxed">
                        {item.desc}
                      </div>
                    </div>

                    {/* Arrow */}
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-2.5" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT - Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center"
            >
              <div className="relative h-full min-h-[500px] lg:min-h-[600px]">
                {/* Decorative Frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-600/20 via-blue-600/10 to-transparent rounded-3xl"></div>

                {/* Corner Accents */}
                <div className="absolute -top-3 -left-3 w-20 h-20 border-l-4 border-t-4 border-indigo-500 rounded-tl-2xl z-10"></div>
                <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-4 border-b-4 border-blue-500 rounded-br-2xl z-10"></div>

                <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/office.png"
                    alt="Automation & Testing Engineering"
                    className="w-full h-full object-cover"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-bold bg-gradient-to-br from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                          20+
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-lg">
                          Years of Industrial Excellence
                        </div>
                        <div className="text-white/70 text-sm">
                          Automation • Testing • Digitalization
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl -z-10 opacity-20 blur-sm"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full -z-10 opacity-15 blur-sm"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
