"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Building2,
  ArrowRight,
  HelpCircle,
  DollarSign,
  Wrench,
  Handshake,
  Mail,
  Phone,
  MapPin,
  User,
  MessageSquare,
  Clock,
  Send,
  CheckCircle2,
  Headphones,
} from "lucide-react";
import LocationMap from "./LocationMap";
// import { AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSubjectOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e) => {
    if (!isSubjectOpen) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % subjects.length);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + subjects.length) % subjects.length);
    }

    if (e.key === "Enter" && activeIndex >= 0) {
      const selected = subjects[activeIndex];
      setFormData({ ...formData, subject: selected.value });
      setIsSubjectOpen(false);
    }

    if (e.key === "Escape") {
      setIsSubjectOpen(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   await new Promise((resolve) => setTimeout(resolve, 1500));
  //   setIsSubmitting(false);
  //   setIsSubmitted(true);
  //   setTimeout(() => setIsSubmitted(false), 3000);
  // };
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const payload = {
    ...formData,
    company: e.target.company.value,
  };

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await res.json();

    if (res.ok && data.success) {
      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setIsSubmitted(false), 3000);
    }
  } catch (error) {
    console.error("Error sending message:", error);
  }

  setIsSubmitting(false);
};

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      primary: (
        <>
          #22-D1, Micrologic Drive, KIADB, Kumbalgodu Industrial Area,{" "}
          <span className="whitespace-nowrap">NH 275</span>
        </>
      ),
      secondary: "1st Phase, Bengaluru, Karnataka 560 074",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      iconBg: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      icon: Phone,
      title: "Call Us Directly",
      primary: "+91 96635 21132",
      secondary: "Mon - Sat, 9:00 AM - 6:00 PM IST",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      iconBg: "bg-emerald-100",
      textColor: "text-emerald-600",
      link: "tel:+919663521132",
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@micrologicglobal.com",
      // secondary: "We reply within 24 hours",
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50",
      iconBg: "bg-violet-100",
      textColor: "text-violet-600",
      link: "mailto:info@micrologicglobal.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "Monday - Saturday",
      secondary: "9:00 AM - 6:00 PM IST",
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50",
      iconBg: "bg-amber-100",
      textColor: "text-amber-600",
    },
  ];

  const subjects = [
    { value: "general", label: "General Inquiry", icon: HelpCircle },
    { value: "sales", label: "Sales & Pricing", icon: DollarSign },
    { value: "support", label: "Technical Support", icon: Wrench },
    { value: "partnership", label: "Partnership", icon: Handshake },
    { value: "other", label: "Other", icon: HelpCircle },
  ];

  return (
    <section
      id="contact"
      className="relative bg-slate-50 py-14 sm:py-16 lg:py-18 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-linear-to-bl from-indigo-100/40 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-linear-to-tr from-sky-100/40 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-white/60 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-14 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm mb-5">
            <Headphones className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-slate-700">
              We&apos;re Here to Help
            </span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Get in Touch with{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Our Team
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Have a question or want to discuss a project? We'd love to hear from
            you. Send us a message and we'll respond promptly.
          </p>
        </div>

        {/* Main Content - Form & Map */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 h-full">
              <div className="p-6 sm:p-8 lg:p-10">
                {/* Form Header */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-200/50">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Send us a Message
                    </h3>
                    <p className="text-sm text-slate-500">
                      Fill the form below and we'll get back to you
                    </p>
                  </div>
                </div>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <p className="text-sm font-medium text-emerald-700">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot Spam Protection */}
                  <input
                    type="text"
                    name="company"
                    style={{ display: "none" }}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 outline-none transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 outline-none transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone & Subject */}
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700">
                        Phone Number
                      </label>
                      <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5" ref={dropdownRef}>
                      <label className="text-sm font-semibold text-slate-700">
                        Subject <span className="text-red-500">*</span>
                      </label>

                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsSubjectOpen(!isSubjectOpen)}
                          onKeyDown={handleKeyDown}
                          className="w-full pl-12 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-left flex items-center justify-between focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 outline-none transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <Building2 className="w-5 h-5 text-slate-400" />

                            <span
                              className={
                                formData.subject
                                  ? "text-slate-900"
                                  : "text-slate-400"
                              }
                            >
                              {subjects.find(
                                (s) => s.value === formData.subject,
                              )?.label || "Select a topic"}
                            </span>
                          </div>

                          <ArrowRight
                            className={`w-4 h-4 text-slate-400 transition-transform ${
                              isSubjectOpen ? "-rotate-90" : "rotate-90"
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {isSubjectOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -8, scale: 0.97 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -8, scale: 0.97 }}
                              transition={{ duration: 0.18 }}
                              className="absolute z-30 mt-2 w-full bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden"
                            >
                              {subjects.map((subject, index) => {
                                const Icon = subject.icon;

                                return (
                                  <button
                                    key={subject.value}
                                    type="button"
                                    onClick={() => {
                                      setFormData({
                                        ...formData,
                                        subject: subject.value,
                                      });
                                      setIsSubjectOpen(false);
                                    }}
                                    className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors ${
                                      index === activeIndex
                                        ? "bg-indigo-50 text-indigo-600"
                                        : "hover:bg-slate-50"
                                    }`}
                                  >
                                    <div className="flex items-center gap-3">
                                      <Icon className="w-4 h-4 text-slate-400" />
                                      {subject.label}
                                    </div>

                                    {formData.subject === subject.value && (
                                      <Check className="w-4 h-4 text-indigo-600" />
                                    )}
                                  </button>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="How can we help you?"
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 outline-none transition-all resize-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:shadow-indigo-300/50 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden h-full min-h-[400px] lg:min-h-0">
              <LocationMap
                size="custom"
                customWidth="100%"
                customHeight="100%"
                defaultMapType="hybrid"
                showHeader={true}
                showMapTypeControls={true}
                showDirectionsButton={true}
                className="h-full min-h-[400px] lg:min-h-[600px]"
              />
            </div>
          </div>
        </div>

        {/* Contact Info Cards - Horizontal Footer Style */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={`relative group p-5 rounded-2xl bg-gradient-to-br ${item.bgGradient} border border-slate-100 hover:shadow-lg transition-all duration-300`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </div>

                {/* Content */}
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>

                {item.link ? (
                  <a
                    href={item.link}
                    className={`text-sm font-medium ${item.textColor} hover:underline block mb-1 transition-colors`}
                  >
                    {item.primary}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-slate-700 mb-1">
                    {item.primary}
                  </p>
                )}

                <p className="text-sm text-slate-500">{item.secondary}</p>

                {/* Decorative Element */}
                <div
                  className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${item.gradient} opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
