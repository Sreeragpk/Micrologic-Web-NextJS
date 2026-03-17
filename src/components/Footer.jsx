// "use client";
// import React from "react";
// import {
//   Linkedin,
//   Mail,
//   Phone,
//   Youtube,
//   Instagram,
//   MapPin,
//   Code,
// } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
//       <div className="container mx-auto px-6 lg:px-12 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {/* Company Info */}
//           <div className="lg:col-span-1">
//             <h3 className="text-2xl font-bold text-white mb-4 bg-linear-to-r from-blue-400 to-cyan-500 bg-clip-text">
//               Micrologic Integrated Systems Pvt. Ltd.
//             </h3>

//             {/* Address */}
// <div className="flex items-start gap-3 text-gray-400">
//   <MapPin size={18} className="mt-1 shrink-0 text-blue-400" />
//   <p className="text-sm leading-relaxed">
//     #22-D1, &quot;Micrologic Drive&quot;, KIADB, Kumbalgodu
//     Industrial Area, NH 275, 1st Phase, Bengaluru, Karnataka 560074
//   </p>
// </div>
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
//                   href="/industries/medical-device-automation"
//                   className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
//                 >
//                   <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
//                   Medical Devices
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/industries/electrical-and-electronics-automation"
//                   className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
//                 >
//                   <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
//                   Electronics
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
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin size={20} />
//               </a>
//               <a
//                 href="https://youtube.com/@micrologicmispl2014?si=9Vjw8ziuals3SvQh"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-110"
//                 aria-label="YouTube"
//               >
//                 <Youtube size={20} />
//               </a>
//               <a
//                 href="https://www.instagram.com/micrologic_mispl/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="bg-gray-800 p-3 rounded-full hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
//                 aria-label="Instagram"
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
//               className="font-semibold transition-all duration-300"
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
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="text-center">
            <Image
              src="/assets/micrologicnew.png"
              alt="Micrologic Logo"
              width={220}
              height={60}
              className="mb-6 mx-auto"
              priority
            />

            <div className="flex justify-center items-start gap-3 text-gray-400 max-w-sm mx-auto">
              <MapPin size={18} className="mt-1 shrink-0 text-blue-400" />

              <p className="text-sm leading-relaxed break-words text-left">
                #22-D1, &quot;Micrologic Drive&quot;, KIADB Industrial Area, NH
                275, 1st Phase, Kumbalagodu, Bengaluru, Karnataka 560&nbsp;074
              </p>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Solutions
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h4>

            <ul className="space-y-3">
              <li>
                <a
                  href="/solutions/test-solutions"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  Test Solutions
                </a>
              </li>

              <li>
                <a
                  href="/solutions/assembly-automation"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  Assembly Automation
                </a>
              </li>

              <li>
                <a
                  href="/solutions/traceability"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  Traceability
                </a>
              </li>

              <li>
                <a
                  href="/solutions/digital-transformation"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  Digital Transformation
                </a>
              </li>
            </ul>
          </div>
          {/* Industries */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Industries
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h4>

            <ul className="space-y-3">
              <li>
                <a
                  href="/industries/automotive-automation"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  Automotive
                </a>
              </li>

              <li>
                <a
                  href="/industries/electric-vehicle-automation"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  Electric Vehicles
                </a>
              </li>

              <li>
                <a
                  href="/industries/electrical-and-electronics-automation"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  Electrical & Electronics
                </a>
              </li>
              <li>
                <a
                  href="/industries/medical-device-automation"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  Medical Devices
                </a>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Get in Touch
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h4>

            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@micrologicglobal.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-200 group"
                >
                  <Mail
                    size={18}
                    className="mt-1 shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm">info@micrologicglobal.com</span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+919663521132"
                  className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-200 group"
                >
                  <Phone
                    size={18}
                    className="mt-1 flex-shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm">+91 96635 21132</span>
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/company/micrologic-integrated-systems-pvt.-ltd/posts/?feedView=all"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://youtube.com/@micrologicmispl2014?si=9Vjw8ziuals3SvQh"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-110"
              >
                <Youtube size={20} />
              </a>

              <a
                href="https://www.instagram.com/micrologic_mispl/"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} Micrologic Integrated Systems Pvt.
              Ltd. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="/privacy-policy"
                className="hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>

              <a
                href="/terms-and-conditions"
                className="hover:text-blue-400 transition-colors"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Credit */}
      <div className="border-t border-gray-800/50 bg-white">
        <div className="container mx-auto px-6 lg:px-12 py-4">
          <div className="flex justify-center items-center gap-2 text-xs text-gray-500">
            <Code size={14} className="text-blue-500" />
            <span>Crafted with passion by</span>

            <a
              href="https://www.facteyes.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold"
            >
              <span className="text-blue-600">Fact</span>
              <span className="text-black">Eyes</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
