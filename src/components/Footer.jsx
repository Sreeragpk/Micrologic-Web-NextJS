// "use client";
// import React from "react";
// import Image from "next/image";
// import {
//   Linkedin,
//   Mail,
//   Phone,
//   Youtube,
//   Instagram,
//   Code,
//   MapPin,
// } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
//       <div className="container mx-auto px-6 lg:px-12 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {/* Company Info */}
//           <div className="text-center">
//             <Image
//               src="/assets/micrologicnew.png"
//               alt="Micrologic Logo"
//               width={220}
//               height={60}
//               className="mb-6 mx-auto h-auto"
//               priority
//             />

//             <div className="flex justify-center items-start gap-3 text-gray-400 max-w-sm mx-auto">
//               <MapPin size={18} className="mt-1 shrink-0 text-blue-400" />

//               <p className="text-sm leading-relaxed break-words text-left">
//                 #22-D1, &quot;Micrologic Drive&quot;, KIADB Industrial Area, NH
//                 275, 1st Phase, Kumbalagodu, Bengaluru, Karnataka 560&nbsp;074
//               </p>
//             </div>
//           </div>

//           {/* Solutions */}
//           <div>
//             <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
//               Solutions
//               <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
//             </h4>

//             <ul className="space-y-3">
//               <li>
//                 <a
//                   href="/solutions/test-solutions"
//                   className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
//                 >
//                   <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
//                   Test Solutions
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="/solutions/assembly-automation"
//                   className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
//                 >
//                   <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
//                   Assembly Automation
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="/solutions/traceability"
//                   className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
//                 >
//                   <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
//                   Traceability
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="/solutions/digital-transformation"
//                   className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
//                 >
//                   <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
//                   Digital Transformation
//                 </a>
//               </li>
//             </ul>
//           </div>
//           {/* Industries */}
//           <div>
//             <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
//               Industries
//               <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
//             </h4>

//             <ul className="space-y-3">
//               <li>
//                 <a
//                   href="/industries/automotive-automation"
//                   className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
//                 >
//                   <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
//                   Automotive
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="/industries/electric-vehicle-automation"
//                   className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
//                 >
//                   <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
//                   Electric Vehicles
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="/industries/electrical-and-electronics-automation"
//                   className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
//                 >
//                   <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
//                   Electrical & Electronics
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/industries/medical-device-automation"
//                   className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
//                 >
//                   <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
//                   Medical Devices
//                 </a>
//               </li>
//             </ul>
//           </div>
//           {/* Contact */}
//           <div>
//             <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
//               Get in Touch
//               <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
//             </h4>

//             <ul className="space-y-4">
//               <li>
//                 <a
//                   href="mailto:info@micrologicglobal.com"
//                   className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-200 group"
//                 >
//                   <Mail
//                     size={18}
//                     className="mt-1 shrink-0 group-hover:scale-110 transition-transform"
//                   />
//                   <span className="text-sm">info@micrologicglobal.com</span>
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="tel:+919663521132"
//                   className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-200 group"
//                 >
//                   <Phone
//                     size={18}
//                     className="mt-1 flex-shrink-0 group-hover:scale-110 transition-transform"
//                   />
//                   <span className="text-sm">+91 96635 21132</span>
//                 </a>
//               </li>
//             </ul>

//             {/* Social Media */}
//             <div className="flex gap-4 mt-6">
//               <a
//                 href="https://www.linkedin.com/company/micrologic-integrated-systems-pvt.-ltd/posts/?feedView=all"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
//               >
//                 <Linkedin size={20} />
//               </a>

//               <a
//                 href="https://www.youtube.com/@micrologicmispl2014"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-110"
//               >
//                 <Youtube size={20} />
//               </a>

//               <a
//                 href="https://www.instagram.com/micrologic_mispl/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="bg-gray-800 p-3 rounded-full hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
//               >
//                 <Instagram size={20} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-700/50">
//         <div className="container mx-auto px-6 lg:px-12 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
//             <p>
//               © {new Date().getFullYear()} Micrologic Integrated Systems Pvt.
//               Ltd. All rights reserved.
//             </p>

//             <div className="flex gap-6">
//               <a
//                 href="/privacy-policy"
//                 className="hover:text-blue-400 transition-colors"
//               >
//                 Privacy Policy
//               </a>

//               <a
//                 href="/terms-and-conditions"
//                 className="hover:text-blue-400 transition-colors"
//               >
//                 Terms & Conditions
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Developer Credit */}
//       <div className="border-t border-gray-800/50 bg-white">
//         <div className="container mx-auto px-6 lg:px-12 py-4">
//           <div className="flex justify-center items-center gap-2 text-xs text-gray-500">
//             <Code size={14} className="text-blue-500" />
//             <span>Crafted with passion by</span>

//             <a
//               href="https://www.facteyes.com"
//               target="_blank"
//               rel="noreferrer"
//               className="font-semibold"
//             >
//               <span className="text-blue-600">Fact</span>
//               <span className="text-black">Eyes</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
"use client";
import React from "react";
import Image from "next/image";
import {
  Linkedin,
  Mail,
  Phone,
  Youtube,
  Instagram,
  Code,
  MapPin,
  Globe,
  Building2,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  const solutions = [
    { label: "Test Solutions", href: "/solutions/test-solutions" },
    { label: "Assembly Automation", href: "/solutions/assembly-automation" },
    { label: "Traceability", href: "/solutions/traceability" },
    {
      label: "Digital Transformation",
      href: "/solutions/digital-transformation",
    },
  ];

  const industries = [
    { label: "Automotive", href: "/industries/automotive-automation" },
    {
      label: "Electric Vehicles",
      href: "/industries/electric-vehicle-automation",
    },
    {
      label: "Electrical & Electronics",
      href: "/industries/electrical-and-electronics-automation",
    },
    {
      label: "Medical Devices",
      href: "/industries/medical-device-automation",
    },
  ];

  return (
    <footer className="relative bg-[#0a0f1e] text-gray-300 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,179,237,0.5) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(99,179,237,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── MAIN FOOTER CONTENT ── */}
      <div className="relative container mx-auto px-6 lg:px-12 py-14">
        {/* ══ ROW 1: Logo + 2 Address Cards ══ */}
        {/* items-stretch ensures both cards grow to same height */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10 lg:items-stretch">
          {/* Logo */}
          <div className="flex flex-col items-start justify-center gap-3 py-4 lg:pl-2">
            <Image
              src="/assets/micrologicnew.png"
              alt="Micrologic Logo"
              width={180}
              height={50}
              className="h-auto w-52"
              priority
            />
          </div>

          {/* ── India Office Card ── */}
          {/* flex flex-col so inner content can use flex-1 on address */}
          <div className="group relative rounded-2xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm overflow-hidden hover:border-blue-500/40 hover:bg-gray-800/50 transition-all duration-300 flex flex-col">
            <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 to-cyan-400 shrink-0" />
            <div className="p-5 flex flex-col flex-1">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center">
                    <Building2 size={13} className="text-blue-400" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-white">
                    India
                  </span>
                </div>
                <span className="text-lg leading-none">🇮🇳</span>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-gray-700/80 to-transparent mb-4" />

              {/* Address — flex-1 pushes divider+contact to bottom */}
              <div className="flex items-start gap-2.5 mb-4 flex-1">
                <MapPin size={13} className="text-blue-400 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400 leading-relaxed">
                  #22-D1, &quot;Micrologic Drive&quot;, KIADB, Industrial Area,
                  NH 275, 1st Phase, Kumbalagodu, Bengaluru – 560074, India
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-700/40 mb-3 shrink-0" />

              {/* Contact — always at bottom */}
              <div className="flex flex-col gap-2 shrink-0">
                <a
                  href="tel:+919663521132"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-blue-400 transition-colors group/link"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-500/10 group-hover/link:bg-blue-500/20 flex items-center justify-center shrink-0 transition-colors">
                    <Phone size={11} className="text-blue-400" />
                  </div>
                  <span className="text-sm">+91 96635 21132</span>
                </a>
                <a
                  href="mailto:info@micrologicglobal.com"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-blue-400 transition-colors group/link"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-500/10 group-hover/link:bg-blue-500/20 flex items-center justify-center shrink-0 transition-colors">
                    <Mail size={11} className="text-blue-400" />
                  </div>
                  <span className="text-sm">info@micrologicglobal.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* ── USA Office Card ── */}
          <div className="group relative rounded-2xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm overflow-hidden hover:border-blue-500/40 hover:bg-gray-800/50 transition-all duration-300 flex flex-col">
            <div className="h-[2px] w-full bg-gradient-to-r from-indigo-500 to-blue-400 shrink-0" />
            <div className="p-5 flex flex-col flex-1">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center">
                    <Building2 size={13} className="text-blue-400" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-white">
                    USA
                  </span>
                </div>
                <span className="text-lg leading-none">🇺🇸</span>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-gray-700/80 to-transparent mb-4" />

              {/* Address — flex-1 pushes divider+contact to bottom */}
              <div className="flex items-start gap-2.5 mb-4 flex-1">
                <MapPin size={13} className="text-blue-400 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400 leading-relaxed">
                  23933 Research Dr, Farmington Hills, MI 48335, United States
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-700/40 mb-3 shrink-0" />

              {/* Contact — always at bottom */}
              <div className="flex flex-col gap-2 shrink-0">
                <a
                  href="tel:+12483815930"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-blue-400 transition-colors group/link"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-500/10 group-hover/link:bg-blue-500/20 flex items-center justify-center shrink-0 transition-colors">
                    <Phone size={11} className="text-blue-400" />
                  </div>
                  <span className="text-sm">+1 248 381 5930</span>
                </a>
                <a
                  href="mailto:usoffice@micrologicglobal.com"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-blue-400 transition-colors group/link"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-500/10 group-hover/link:bg-blue-500/20 flex items-center justify-center shrink-0 transition-colors">
                    <Mail size={11} className="text-blue-400" />
                  </div>
                  <span className="text-sm">usoffice@micrologicglobal.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider between rows */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700/60 to-transparent mb-10" />

        {/* ══ ROW 2: Solutions | Industries | Follow Us ══ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Solutions */}
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-blue-400 mb-1 block">
              What We Offer
            </span>
            <h4 className="text-lg font-bold text-white mb-1">Solutions</h4>
            <div className="h-0.5 w-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-5" />
            <ul className="space-y-1">
              {solutions.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-blue-500/10 border border-transparent hover:border-blue-500/20 transition-all duration-200 group"
                  >
                    <ChevronRight
                      size={13}
                      className="text-blue-500/50 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
                    />
                    <span className="text-sm">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-blue-400 mb-1 block">
              Sectors We Serve
            </span>
            <h4 className="text-lg font-bold text-white mb-1">Industries</h4>
            <div className="h-0.5 w-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-5" />
            <ul className="space-y-1">
              {industries.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-blue-500/10 border border-transparent hover:border-blue-500/20 transition-all duration-200 group"
                  >
                    <ChevronRight
                      size={13}
                      className="text-blue-500/50 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
                    />
                    <span className="text-sm">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-blue-400 mb-1 block">
              Stay Connected
            </span>
            <h4 className="text-lg font-bold text-white mb-1">Follow Us</h4>
            <div className="h-0.5 w-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-5" />

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Follow us on social media to stay updated with our latest
              innovations and industry insights.
            </p>

            <div className="flex gap-3 mb-5">
              {[
                {
                  href: "https://www.linkedin.com/company/micrologic-integrated-systems-pvt.-ltd/posts/?feedView=all",
                  icon: <Linkedin size={17} />,
                  label: "LinkedIn",
                  hover:
                    "hover:bg-blue-600 hover:border-blue-500/50 hover:shadow-blue-500/20",
                },
                {
                  href: "https://www.youtube.com/@micrologicmispl2014",
                  icon: <Youtube size={17} />,
                  label: "YouTube",
                  hover:
                    "hover:bg-red-600 hover:border-red-500/50 hover:shadow-red-500/20",
                },
                {
                  href: "https://www.instagram.com/micrologic_mispl/",
                  icon: <Instagram size={17} />,
                  label: "Instagram",
                  hover:
                    "hover:bg-pink-600 hover:border-pink-500/50 hover:shadow-pink-500/20",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800/80 border border-gray-700/60 ${s.hover} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/20 backdrop-blur-sm">
              <p className="text-xs text-gray-400 mb-2">
                Have a project in mind?
              </p>
              <a
                href="/contact-us"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Get in Touch <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-800/60">
        <div className="container mx-auto px-6 lg:px-12 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Micrologic Integrated Systems Pvt.
              Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/privacy-policy"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <span className="w-px h-3 bg-gray-700" />
              <a
                href="/terms-and-conditions"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Credit */}
      <div className="relative border-t border-gray-800/40 bg-white">
        <div className="container mx-auto px-6 lg:px-12 py-3.5">
          <div className="flex justify-center items-center gap-2 text-xs text-gray-500">
            <Code size={13} className="text-blue-500" />
            <span>Crafted with passion by</span>
            <a
              href="https://www.facteyes.com"
              target="_blank"
              rel="noreferrer"
              className="font-bold hover:opacity-80 transition-opacity"
            >
              <span className="text-blue-600">Fact</span>
              <span className="text-gray-900">Eyes</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
