"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X, ChevronDown, ArrowRight, Menu, CircuitBoard } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  FaLaptopCode,
  FaTools,
  FaIndustry,
  FaSlidersH,
  FaBroadcastTower,
  FaCogs,
  FaDesktop,
  FaMicrochip,
  FaRobot,
  FaEye,
  FaChartLine,
  FaRocket,
  FaCarSide,
  FaStethoscope,
  FaChargingStation,
  FaInfoCircle,
  FaUserTie,
  FaWrench,
  FaQuestionCircle,
  FaVideo,
  FaChalkboardTeacher,
  FaHeadset,
  FaDatabase,
  FaLayerGroup,
  FaCloud,
  FaRoute,
  FaClipboardCheck,
} from "react-icons/fa";

import { SiIntel } from "react-icons/si"; // Example for electronics (brand-like)

const navLinks = [
  // {
  //   name: "Products",
  //   href: "products",
  //   type: "scroll",
  //   columns: [
  //     {
  //       heading: "Our Products",
  //       links: [
  //         {
  //           name: "MTS Software",
  //           href: "/products/mts-test-software",
  //           icon: <FaLaptopCode className="text-blue-600" />,
  //         },
  //         {
  //           name: "Traceware Platform",
  //           href: "/products/traceware-platform",
  //           icon: <FaDatabase className="text-green-600" />,
  //         },
  //         {
  //           name: "Automated Test Cells",
  //           href: "/products/automated-test-cells",
  //           icon: <FaTools className="text-amber-600" />,
  //         },
  //         {
  //           name: "Automated Assembly Cells",
  //           href: "/products/automated-assembly-cells",
  //           icon: <FaIndustry className="text-purple-600" />,
  //         },
  //         {
  //           name: "Robotic Automation Cells",
  //           href: "/products/robotic-automation-cells",
  //           icon: <FaRobot className="text-rose-600" />,
  //         },
  //         // {
  //         //   name: "Control Systems",
  //         //   href: "/products/control-systems",
  //         //   icon: <FaSlidersH className="text-indigo-600" />,
  //         // },
  //         {
  //           name: "RF Shielded Test Enclosures",
  //           href: "/products/rf-shielded-test-enclosures",
  //           icon: <FaBroadcastTower className="text-pink-600" />,
  //         },
  //         {
  //           name: "BON Test Fixtures",
  //           href: "/products/bon-test-fixtures",
  //           icon: <FaCogs className="text-teal-600" />,
  //         },
  //         // {
  //         //   name: "Industrial Computers",
  //         //   href: "/products/industrial-computers",
  //         //   icon: <FaDesktop className="text-gray-700" />,
  //         // },
  //       ],
  //     },
  //   ],
  // },

  {
    name: "Solutions",
    href: "solutions",
    type: "scroll",
    columns: [
      {
        heading: "Our Solutions",
        links: [
          {
            name: "Test Solutions",
            href: "/solutions/test-solutions",
            icon: <FaClipboardCheck className="text-green-600" />,
          },
          {
            name: "Assembly Automation",
            href: "/solutions/assembly-automation",
            icon: <FaRobot className="text-orange-600" />,
          },
          {
            name: "Traceability",
            href: "/solutions/traceability",
            icon: <FaRoute className="text-purple-600" />,
          },
          {
            name: "Digital Transformation",
            href: "/solutions/digital-transformation",
            icon: <FaCloud className="text-indigo-600" />,
          },
        ],
      },
    ],
  },

  {
    name: "Industries",
    href: "industries",
    type: "scroll",
    columns: [
      {
        heading: "Industries We Serve",
        links: [
          {
            name: "Automotive",
            href: "/industries/automotive-automation",
            icon: <FaCarSide className="text-red-600" />,
          },
          {
            name: "Electric Vehicles",
            href: "/industries/electric-vehicle-automation",
            icon: <FaChargingStation className="text-emerald-600" />,
          },
          {
            name: "Electrical & Electronics",
            href: "/industries/electrical-and-electronics-automation",
            icon: <FaMicrochip className="text-green-600" />,
          },
          {
            name: "Medical Devices",
            href: "/industries/medical-device-automation",
            icon: <FaStethoscope className="text-purple-600" />,
          },
        ],
      },
    ],
  },

  {
    name: "Company",
    href: "company",
    type: "scroll",
    columns: [
      {
        heading: "About the Company",
        links: [
          {
            name: "About",
            href: "/about",
            icon: <FaInfoCircle className="text-blue-600" />,
          },
          {
            name: "Careers",
            href: "/careers",
            icon: <FaUserTie className="text-amber-600" />,
          },
          {
            name: "Events & Exhibitions",
            href: "/events",
            icon: <FaRocket className="text-pink-600" />,
          },
          {
            name: "MicroSync",
            href: "https://facteyes.com/pm/login",
            icon: <FaLayerGroup className="text-indigo-600" />,
          },
        ],
      },
    ],
  },

  {
    name: "Support",
    href: "support",
    type: "scroll",
    columns: [
      {
        heading: "Customer Support",
        links: [
          {
            name: "FAQ",
            href: "/support/faq",
            icon: <FaQuestionCircle className="text-indigo-600" />,
          },
          // {
          //   name: "MTS Training",
          //   href: "/support/mts-training",
          //   icon: <FaChalkboardTeacher className="text-green-600" />,
          // },
        ],
      },
    ],
  },

  // {
  //   name: "Contact",
  //   href: "/#contact",
  //   type: "scroll",
  //   columns: [
  //     {
  //       heading: "Get in Touch",
  //       links: [
  //         {
  //           name: "Customer Care",
  //           href: "/#contact",
  //           icon: <FaHeadset className="text-blue-600" />,
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    name: "Contact",
    href: "contact",
    type: "scroll",
    columns: [
      {
        heading: "Get in Touch",
        links: [
          {
            name: "Customer Care",
            href: "contact",
            icon: <FaHeadset className="text-blue-600" />,
          },
        ],
      },
    ],
  },
];
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState("home");

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScrollListener = () => {
      setScrolled(window.scrollY > 20);

      const allLinks = navLinks.flatMap((link) =>
        link.columns
          ? [link, ...link.columns.flatMap((col) => col.links)]
          : link,
      );

      let currentSection = "home";
      let minOffset = Infinity;

      // ✅ Only activate other sections after scrolling a bit
      if (window.scrollY > 200) {
        // 200px threshold (adjust as you like)
        allLinks.forEach((link) => {
          if (link.type === "route") return;
          const el = document.getElementById(link.href);
          if (el) {
            const rect = el.getBoundingClientRect();

            // ✅ Only count elements actually in the viewport (top half of screen)
            if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
              const distance = Math.abs(rect.top - 120);
              if (distance < minOffset) {
                minOffset = distance;
                currentSection = link.href;
              }
            }
          }
        });
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScrollListener);
    handleScrollListener();

    return () => window.removeEventListener("scroll", handleScrollListener);
  }, [pathname]);

  // const scrollToSection = (e, id) => {
  //   e.preventDefault();
  //   setActiveSection(id);

  //   if (pathname !== "/") {
  //     router.push("/");
  //     setTimeout(() => {
  //       const el = document.getElementById(id);
  //       if (el) {
  //         const offsetTop = el.offsetTop - 80;
  //         window.scrollTo({ top: offsetTop, behavior: "smooth" });
  //       }
  //     }, 300);
  //   } else {
  //     const el = document.getElementById(id);
  //     if (el) {
  //       const offsetTop = el.offsetTop - 80;
  //       window.scrollTo({ top: offsetTop, behavior: "smooth" });
  //     }
  //   }

  //   setMobileMenuOpen(false);
  //   setActiveDropdown(null);
  // };
  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActiveSection(id);

    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const offsetTop = el.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }

    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const isNavItemActive = (link) => {
    if (link.type === "route") {
      return pathname === link.href;
    }

    if (pathname === "/") {
      if (link.href === activeSection) return true;
      if (link.columns) {
        return link.columns.some((col) =>
          col.links.some((sublink) => sublink.href === activeSection),
        );
      }
    } else {
      if (link.columns) {
        return link.columns.some((col) =>
          col.links.some((sublink) => sublink.href === pathname),
        );
      }
    }

    return false;
  };

  const toggleMobileSubMenu = (menuName) => {
    setOpenMobileSubMenu(openMobileSubMenu === menuName ? null : menuName);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-gray-200/50"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between px-6 h-20 relative">
            {/* Logo */}
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="flex items-center gap-3 group"
            >
<motion.div
  layoutId="site-logo"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.35 }}
  className="relative group"
>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

                <Image
  src="/assets/micrologic.png"
  alt="Micrologic"
  className="h-12 w-auto relative z-10"
  width={220}
  height={60}
  priority
/>
              </motion.div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1 gap-5">
              {navLinks.map((link) => {
                const isActive = isNavItemActive(link);
                const isContactButton = link.name === "Contact";

                if (isContactButton) {
                  // Special Contact Button
                  return (
                    <Link
                      key={link.name}
                      // href={`#${link.href}`}
                      href={`#${link.href}`}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="ml-6 inline-flex items-center px-5 py-2.5 rounded-full text-white font-medium 
                     bg-gradient-to-r from-blue-600 to-purple-600 shadow-md hover:shadow-lg 
                     hover:scale-105 transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  );
                }

                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() =>
                      link.columns && setActiveDropdown(link.name)
                    }
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {link.type === "route" ? (
                      <Link
                        href={link.href}
                        className={`relative px-4 py-2 text-[15px] font-medium transition-colors duration-300 
                       ${
                         isActive
                           ? "text-blue-600"
                           : "text-gray-700 hover:text-blue-600"
                       }`}
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </Link>
                    ) : (
                      //     <a
                      //       href={`#${link.href}`}
                      //       onClick={(e) => scrollToSection(e, link.href)}
                      //       className={`relative px-4 py-2 text-[15px] font-medium transition-colors duration-300
                      //      ${
                      //        isActive
                      //          ? "text-blue-600"
                      //          : "text-gray-700 hover:text-blue-600"
                      //      }`}
                      //     >
                      //       <span className="relative flex items-center gap-1">
                      //         {link.name}
                      //         {link.columns && (
                      //           <ChevronDown
                      //             className={`w-3.5 h-3.5 transition-transform duration-300
                      // ${activeDropdown === link.name ? "rotate-180" : ""}`}
                      //           />
                      //         )}
                      //         <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                      //       </span>
                      //     </a>
                      <a
                        href={`#${link.href}`}
                        onClick={(e) => {
                          if (link.columns) {
                            e.preventDefault();
                          } else {
                            scrollToSection(e, link.href);
                          }
                        }}
                        className={`relative px-4 py-2 text-[15px] font-medium transition-colors duration-300 
  ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
                      >
                        <span className="relative flex items-center gap-1">
                          {link.name}
                          {link.columns && (
                            <ChevronDown
                              className={`w-3.5 h-3.5 transition-transform duration-300 
        ${activeDropdown === link.name ? "rotate-180" : ""}`}
                            />
                          )}
                        </span>
                      </a>
                    )}

                    {/* Dropdown */}
                    {link.columns && activeDropdown === link.name && (
                      <div className="absolute top-full left-0 pt-3">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 min-w-[340px] grid grid-cols-1 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                          {link.columns.map((col) => (
                            <div key={col.heading}>
                              <h3 className="text-xs uppercase text-gray-400 font-semibold tracking-wider mb-2">
                                {col.heading}
                              </h3>
                              <div className="space-y-1">
                                {col.links.map((sublink) => {
                                  const isSubActive = pathname === sublink.href;
                                  const isExternal =
                                    sublink.href.startsWith("http");

                                  // External link
                                  if (isExternal) {
                                    return (
                                      <a
                                        key={sublink.name}
                                        href={sublink.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 py-2 px-3 text-sm rounded-lg transition-all text-gray-600 hover:bg-gray-50 hover:text-black"
                                      >
                                        <span className="text-lg">
                                          {sublink.icon}
                                        </span>
                                        {sublink.name}
                                      </a>
                                    );
                                  }

                                  // Internal route
                                  return sublink.href.startsWith("/") ? (
                                    <Link
                                      key={sublink.name}
                                      href={sublink.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className={`flex items-center gap-2 py-2 px-3 text-sm rounded-lg transition-all 
        ${
          isSubActive
            ? "bg-blue-50 text-blue-600"
            : "text-gray-600 hover:bg-gray-50 hover:text-black"
        }`}
                                    >
                                      <span className="text-lg">
                                        {sublink.icon}
                                      </span>
                                      {sublink.name}
                                    </Link>
                                  ) : (
                                    // Scroll link
                                    <a
                                      key={sublink.name}
                                      href={`#${sublink.href}`}
                                      onClick={(e) =>
                                        scrollToSection(e, sublink.href)
                                      }
                                      className="flex items-center gap-2 py-2 px-3 text-sm rounded-lg transition-all text-gray-600 hover:bg-gray-50 hover:text-black"
                                    >
                                      <span className="text-lg">
                                        {sublink.icon}
                                      </span>
                                      {sublink.name}
                                    </a>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-50 to-purple-50 transition-all duration-300 hover:shadow-lg"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-blue-600 transition-transform duration-300" />
              ) : (
                <Menu className="w-5 h-5 text-blue-600 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-500 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
             <div className="relative">
                <Image
                  src="/assets/micrologic.png"
                  alt="Micrologic"
                  className="h-8 w-auto"
                  width={140}
                  height={40}
                  priority
                />
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <div className="p-6 flex flex-col h-[calc(100%-88px)] overflow-y-auto">
            <div className="space-y-2">
              {navLinks.map((link) => {
                const isActive = isNavItemActive(link);
                const isContactButton = link.name === "Contact";

                if (!link.columns) {
                  return link.type === "route" ? (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-3 px-4 text-base font-medium rounded-xl transition-all duration-200 ${
                        isContactButton
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center mt-4"
                          : isActive
                            ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600"
                            : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      key={link.name}
                      href={`#${link.href}`}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`block py-3 px-4 text-base font-medium rounded-xl transition-all duration-200 ${
                        isContactButton
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center mt-4"
                          : isActive
                            ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600"
                            : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                }

                return (
                  <div key={link.name} className="space-y-2">
                    <button
                      onClick={() => toggleMobileSubMenu(link.name)}
                      className={`w-full flex justify-between items-center py-3 px-4 text-base font-medium rounded-xl transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openMobileSubMenu === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openMobileSubMenu === link.name && (
                      <div className="ml-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
                        {link.columns.flatMap((col) =>
                          col.links.map((sublink) => {
                            const isExternal = sublink.href.startsWith("http");

                            // External link
                            if (isExternal) {
                              return (
                                <a
                                  key={sublink.name}
                                  href={sublink.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center gap-3 py-2.5 px-4 text-sm rounded-lg transition-all duration-200 text-gray-600 hover:bg-gray-50"
                                >
                                  <span className="text-base">
                                    {sublink.icon}
                                  </span>
                                  <span>{sublink.name}</span>
                                </a>
                              );
                            }

                            // Internal route
                            return sublink.href.startsWith("/") ? (
                              <Link
                                key={sublink.name}
                                href={sublink.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`flex items-center gap-3 py-2.5 px-4 text-sm rounded-lg transition-all duration-200 ${
                                  pathname === sublink.href
                                    ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600"
                                    : "text-gray-600 hover:bg-gray-50"
                                }`}
                              >
                                <span className="text-base">
                                  {sublink.icon}
                                </span>
                                <span>{sublink.name}</span>
                              </Link>
                            ) : (
                              // Scroll link
                              <a
                                key={sublink.name}
                                href={`#${sublink.href}`}
                                onClick={(e) =>
                                  scrollToSection(e, sublink.href)
                                }
                                className={`flex items-center gap-3 py-2.5 px-4 text-sm rounded-lg transition-all duration-200 ${
                                  activeSection === sublink.href
                                    ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600"
                                    : "text-gray-600 hover:bg-gray-50"
                                }`}
                              >
                                <span className="text-base">
                                  {sublink.icon}
                                </span>
                                <span>{sublink.name}</span>
                              </a>
                            );
                          }),
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Footer */}
            <div className="mt-auto pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-400 text-center">
                © {new Date().getFullYear()} Micrologic. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add these styles to your global CSS or Tailwind config */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        @keyframes slide-in-from-top-2 {
          from {
            transform: translateY(-8px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-in {
          animation-fill-mode: both;
        }

        .fade-in {
          animation: fadeIn 0.2s ease-out;
        }

        .slide-in-from-top-2 {
          animation: slide-in-from-top-2 0.2s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;
