
// import React from "react";
// import { Mail, Phone, MapPin, User, MessageSquare, Clock, Zap } from "lucide-react";
// import LocationMap from "./LocationMap";

// export default function ContactForm() {
//   return (
//     <section
//       id="contact"
//       className="relative bg-gradient-to-br from-slate-50 via-white to-indigo-50/50 py-16 sm:py-20 md:py-24 overflow-hidden"
//     >
//       {/* Subtle Background Elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-100 rounded-full opacity-40 blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-100 rounded-full opacity-40 blur-3xl"></div>
//       </div>

//       <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
//         {/* Header */}
//         <div className="text-center mb-12 sm:mb-16">
//           <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 text-xs sm:text-sm font-semibold rounded-full mb-4">
//             Get In Touch
//           </span>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
//             Contact <span className="text-indigo-600">Us</span>
//           </h2>
//           <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
//             Have questions or need assistance? We're here to help. Reach out to us and we'll respond as soon as possible.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-stretch">
//           {/* Left Panel: Form & Info */}
//           <div className="lg:col-span-2 bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8 md:p-10 flex flex-col order-2 lg:order-1">
//             {/* Company Info */}
//             <div className="mb-8">
//               <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
//                 Micrologic Integrated Systems
//               </h3>
//               <p className="text-sm text-indigo-600 font-medium mb-6">(P) Limited</p>
              
//               <ul className="space-y-4 text-slate-600">
//                 <li className="flex gap-3">
//                   <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
//                     <MapPin className="w-5 h-5 text-indigo-600" />
//                   </div>
//                   <span className="text-sm leading-relaxed pt-2">
//                     #22-D1, "Micrologic Drive", KIADB, Kumbalgodu Industrial Area, NH 275, 1st Phase, Bengaluru, Karnataka 560074
//                   </span>
//                 </li>
//                 <li className="flex gap-3 items-center">
//                   <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
//                     <Phone className="w-5 h-5 text-indigo-600" />
//                   </div>
//                   <a 
//                     href="tel:+919663521132" 
//                     className="text-sm hover:text-indigo-600 transition-colors font-medium"
//                   >
//                     +91 96635 21132
//                   </a>
//                 </li>
//                 <li className="flex gap-3 items-center">
//                   <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
//                     <Mail className="w-5 h-5 text-indigo-600" />
//                   </div>
//                   <a 
//                     href="mailto:info@micrologicglobal.com" 
//                     className="text-sm hover:text-indigo-600 transition-colors font-medium break-all"
//                   >
//                     info@micrologicglobal.com
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Divider */}
//             <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-8"></div>

//             {/* Contact Form */}
//             <div className="flex-1">
//               <h4 className="text-lg font-bold text-slate-900 mb-5">
//                 Send us a Message
//               </h4>
//               <form className="space-y-4">
//                 <div className="relative group">
//                   <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 w-5 h-5 transition-colors" />
//                   <input
//                     type="text"
//                     placeholder="Your Name"
//                     className="w-full pl-12 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
//                     required
//                   />
//                 </div>
//                 <div className="relative group">
//                   <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 w-5 h-5 transition-colors" />
//                   <input
//                     type="email"
//                     placeholder="Your Email"
//                     className="w-full pl-12 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
//                     required
//                   />
//                 </div>
//                 <div className="relative group">
//                   <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 w-5 h-5 transition-colors" />
//                   <input
//                     type="tel"
//                     placeholder="Phone Number"
//                     className="w-full pl-12 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
//                   />
//                 </div>
//                 <div className="relative group">
//                   <MessageSquare className="absolute left-4 top-4 text-slate-400 group-focus-within:text-indigo-500 w-5 h-5 transition-colors" />
//                   <textarea
//                     rows="4"
//                     placeholder="Your Message"
//                     className="w-full pl-12 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none resize-none transition-all"
//                     required
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full py-3.5 px-6 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white text-sm font-semibold rounded-xl shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 active:scale-[0.98] transition-all duration-300"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>

//           {/* Right Panel: Map - Clean & Centered */}
//           <div className="lg:col-span-3 order-1 lg:order-2 flex flex-col">
//             {/* Map Container */}
//             <div className="flex-1 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 min-h-[400px] sm:min-h-[500px] lg:min-h-0">
//               <LocationMap 
//                 size="custom"
//                 customWidth="100%"
//                 customHeight="100%"
//                 defaultMapType="hybrid"
//                 showHeader={true}
//                 showMapTypeControls={true}
//                 showDirectionsButton={true}
//                 className="h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[650px]"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Info Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-12">
//           {/* Business Hours */}
//           <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-slate-100 p-5 sm:p-6 hover:shadow-xl hover:border-indigo-100 transition-all duration-300">
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-200">
//                 <Clock className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
//                 <p className="text-sm text-slate-600">Mon - Sat: 9AM - 6PM</p>
//                 <p className="text-xs text-slate-400">Sunday: Closed</p>
//               </div>
//             </div>
//           </div>

//           {/* Quick Response */}
//           <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-slate-100 p-5 sm:p-6 hover:shadow-xl hover:border-sky-100 transition-all duration-300">
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-sky-200">
//                 <Zap className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h4 className="font-bold text-slate-900 mb-1">Quick Response</h4>
//                 <p className="text-sm text-slate-600">Within 24 hours</p>
//                 <p className="text-xs text-slate-400">We value your time</p>
//               </div>
//             </div>
//           </div>

//           {/* Call Us */}
//           <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-slate-100 p-5 sm:p-6 hover:shadow-xl hover:border-emerald-100 transition-all duration-300">
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-200">
//                 <Phone className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
//                 <a href="tel:+919663521132" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">
//                   +91 96635 21132
//                 </a>
//                 <p className="text-xs text-slate-400">Direct line</p>
//               </div>
//             </div>
//           </div>

//           {/* Email Us */}
//           <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-slate-100 p-5 sm:p-6 hover:shadow-xl hover:border-amber-100 transition-all duration-300">
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-200">
//                 <Mail className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
//                 <a href="mailto:info@micrologicglobal.com" className="text-sm text-slate-600 hover:text-amber-600 transition-colors truncate block max-w-[150px]">
//                   info@micrologicglobal.com
//                 </a>
//                 <p className="text-xs text-slate-400">24/7 support</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  User,
  MessageSquare,
  Clock,
  Send,
  Building2,
  ArrowRight,
  CheckCircle2,
  Headphones,
} from "lucide-react";
import LocationMap from "./LocationMap";

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

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
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
  secondary: "1st Phase, Bengaluru, Karnataka 560074",
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

  return (
    <section
      id="contact"
      className="relative bg-slate-50 py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-100/40 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-sky-100/40 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/60 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-14 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm mb-5">
            <Headphones className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-slate-700">
              We're Here to Help
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

                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full pl-12 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 outline-none transition-all appearance-none cursor-pointer"
                          required
                        >
                          <option value="">Select a topic</option>
                          <option value="general">General Inquiry</option>
                          <option value="sales">Sales & Pricing</option>
                          <option value="support">Technical Support</option>
                          <option value="partnership">Partnership</option>
                          <option value="other">Other</option>
                        </select>
                        <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 rotate-90 pointer-events-none" />
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