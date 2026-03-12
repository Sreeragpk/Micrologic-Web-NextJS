"use client";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaDatabase,
  FaTools,
  FaIndustry,
  FaRobot,
  FaBroadcastTower,
  FaCogs,
  FaPause,
  FaPlay,
  FaSyncAlt,
  FaCheckCircle,
} from "react-icons/fa";

const products = [
  {
    name: "MTS Software",
    href: "/products/mts-test-software",
    icon: <FaLaptopCode className="text-blue-600 text-xl sm:text-2xl" />,
  },

  {
    name: "Traceware",
    href: "/products/traceware-platform",
    icon: <FaDatabase className="text-green-600 text-xl sm:text-2xl" />,
  },

  {
    name: "Test Cells",
    href: "/products/automated-test-cells",
    icon: <FaTools className="text-amber-600 text-xl sm:text-2xl" />,
  },

  {
    name: "Assembly Cells",
    href: "/products/automated-assembly-cells",
    icon: <FaIndustry className="text-purple-600 text-xl sm:text-2xl" />,
  },

  {
    name: "Robotic Cells",
    href: "/products/robotic-automation-cells",
    icon: <FaRobot className="text-rose-600 text-xl sm:text-2xl" />,
  },

  {
    name: "RF Shielded Chambers",
    href: "/products/rf-shielded-test-enclosures",
    icon: <FaBroadcastTower className="text-pink-600 text-xl sm:text-2xl" />,
  },

  {
    name: "BON Fixtures",
    href: "/products/bon-test-fixtures",
    icon: <FaCogs className="text-teal-600 text-xl sm:text-2xl" />,
  },
];

export default function CircleOrbitCards() {
  const circleRef = useRef(null);
  const [radius, setRadius] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startAngle, setStartAngle] = useState(0);
  const [startRotation, setStartRotation] = useState(0);
  const [windowWidth, setWindowWidth] = useState(800);
  const [windowHeight, setWindowHeight] = useState(600);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const updateRadius = () => {
      if (circleRef.current) {
        const baseRadius = circleRef.current.offsetWidth / 2;

        let padding;
        if (windowWidth < 380) {
          padding = 25;
        } else if (windowWidth < 640) {
          padding = 30;
        } else if (windowWidth < 768) {
          padding = 35;
        } else if (windowWidth < 1024) {
          padding = 45;
        } else if (windowWidth < 1280) {
          padding = 55;
        } else {
          padding = 65;
        }

        setRadius(baseRadius + padding);
      }
    };

    updateRadius();
    const timer = setTimeout(updateRadius, 100);
    return () => clearTimeout(timer);
  }, [windowWidth, windowHeight]);

  // useEffect(() => {
  //   let interval;
  //   if (isAutoRotating) {
  //     interval = setInterval(() => {
  //       setRotation((prev) => prev + 0.5);
  //     }, 50);
  //   }
  //   return () => clearInterval(interval);
  // }, [isAutoRotating]);
  useEffect(() => {
  let animationFrame;

  const rotate = () => {
    if (isAutoRotating) {
      setRotation((prev) => prev + 0.3);
    }
    animationFrame = requestAnimationFrame(rotate);
  };

  animationFrame = requestAnimationFrame(rotate);

  return () => cancelAnimationFrame(animationFrame);
}, [isAutoRotating]);

  // const handleMouseDown = useCallback(
  //   (e) => {
  //     setIsDragging(true);
  //     setIsAutoRotating(false);
  //     const rect = e.currentTarget.getBoundingClientRect();
  //     const centerX = rect.left + rect.width / 2;
  //     const centerY = rect.top + rect.height / 2;

  //     const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
  //     setStartAngle(angle);
  //     setStartRotation(rotation);
  //   },
  //   [rotation],
  // );
  const handleMouseDown = useCallback((e) => {
  setIsDragging(true);

  const rect = e.currentTarget.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
  setStartAngle(angle);
  setStartRotation(rotation);
}, [rotation]);

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;

      const container = document.querySelector(".orbit-container");
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const currentAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      const angleDiff = currentAngle - startAngle;

      setRotation(startRotation + angleDiff * (180 / Math.PI));
    },
    [isDragging, startAngle, startRotation],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("mouseleave", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // const handleTouchStart = useCallback(
  //   (e) => {
  //     if (e.touches.length === 1) {
  //       setIsDragging(true);
  //       setIsAutoRotating(false);
  //       const touch = e.touches[0];
  //       const rect = e.currentTarget.getBoundingClientRect();
  //       const centerX = rect.left + rect.width / 2;
  //       const centerY = rect.top + rect.height / 2;

  //       const angle = Math.atan2(
  //         touch.clientY - centerY,
  //         touch.clientX - centerX,
  //       );
  //       setStartAngle(angle);
  //       setStartRotation(rotation);
  //     }
  //   },
  //   [rotation],
  // );
const handleTouchStart = useCallback((e) => {
  if (e.touches.length === 1) {
    setIsDragging(true);

    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.atan2(touch.clientY - centerY, touch.clientX - centerX);
    setStartAngle(angle);
    setStartRotation(rotation);
  }
}, [rotation]);
  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging || e.touches.length !== 1) return;

      const touch = e.touches[0];
      const container = document.querySelector(".orbit-container");
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const currentAngle = Math.atan2(
        touch.clientY - centerY,
        touch.clientX - centerX,
      );
      const angleDiff = currentAngle - startAngle;

      setRotation(startRotation + angleDiff * (180 / Math.PI));
    },
    [isDragging, startAngle, startRotation],
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const resetRotation = () => {
    setRotation(0);
  };

  const toggleAutoRotation = () => {
    setIsAutoRotating(!isAutoRotating);
  };

  const getCircleContainerClasses = () => {
    return "w-full lg:w-1/2 flex justify-center items-center mt-8 sm:mt-10 lg:mt-0 relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[600px]";
  };

  const getCircleSizeClasses = () => {
    if (windowWidth < 380) {
      return "w-[160px] h-[160px]";
    } else if (windowWidth < 640) {
      return "w-[180px] h-[180px]";
    } else if (windowWidth < 768) {
      return "w-[220px] h-[220px]";
    } else if (windowWidth < 1024) {
      return "w-[260px] h-[260px]";
    } else if (windowWidth < 1280) {
      return "w-[320px] h-[320px]";
    } else if (windowWidth < 1536) {
      return "w-[380px] h-[380px]";
    } else {
      return "w-[420px] h-[420px]";
    }
  };

  const getHandsSizeClasses = () => {
    if (windowWidth < 380) {
      return "w-14";
    } else if (windowWidth < 640) {
      return "w-16";
    } else if (windowWidth < 768) {
      return "w-20";
    } else if (windowWidth < 1024) {
      return "w-24";
    } else if (windowWidth < 1280) {
      return "w-28";
    } else {
      return "w-32";
    }
  };

  const getHandSize = () => {
    if (windowWidth < 380) return 56;
    if (windowWidth < 640) return 64;
    if (windowWidth < 768) return 80;
    if (windowWidth < 1024) return 96;
    if (windowWidth < 1280) return 112;
    return 128;
  };

  const getProductCardMinWidth = () => {
    if (windowWidth < 380) {
      return "75px";
    } else if (windowWidth < 640) {
      return "85px";
    } else if (windowWidth < 768) {
      return "95px";
    } else if (windowWidth < 1024) {
      return "105px";
    } else {
      return "115px";
    }
  };

  const getControlButtonSize = () => {
    if (windowWidth < 640) {
      return "p-2";
    } else if (windowWidth < 1024) {
      return "p-2.5";
    } else {
      return "p-3";
    }
  };

  const getControlIconSize = () => {
    if (windowWidth < 640) {
      return "w-3 h-3";
    } else if (windowWidth < 1024) {
      return "w-3.5 h-3.5";
    } else {
      return "w-4 h-4";
    }
  };

  return (
    <section className="relative flex flex-col min-h-screen lg:min-h-[700px] xl:min-h-[800px] overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 py-8 sm:py-10 md:py-12 lg:py-8 xl:py-10 px-4 sm:px-6 lg:px-8 xl:px-12">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="1.5" fill="#3b82f6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Centered Headline Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-8 sm:mb-10 lg:mb-12"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
          <span className="text-gray-900">Innovative Solutions for </span>
          <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
            Modern Manufacturing
          </span>
        </h1>

        <div className="w-24 sm:w-32 md:w-40 lg:w-48 h-1 mx-auto mt-4 sm:mt-5 md:mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
      </motion.div>

      {/* Left-Right Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between flex-1 z-10">
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:pr-8 xl:pr-12 2xl:pr-16">
          <motion.div
            initial={{
              opacity: 0,
              x: windowWidth >= 1024 ? -50 : 0,
              y: windowWidth < 1024 ? 20 : 0,
            }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Explore our advanced automation, testing, and manufacturing
              solutions engineered to deliver efficiency, precision, and
              reliability. From concept to deployment, we design intelligent
              systems that empower modern factories with scalable, future-ready
              production technologies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-4 sm:mt-6 md:mt-8">
              <div className="bg-white/70 backdrop-blur-sm p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                    <FaCheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </div>
                  <h3 className="ml-2 sm:ml-3 text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                    Mechanical Engineering
                  </h3>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  Precision-driven mechanical design, prototyping, and machine
                  development built for durability, accuracy, and
                  high-performance industrial automation systems.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                    <FaCheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </div>
                  <h3 className="ml-2 sm:ml-3 text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                    Electrical Engineering
                  </h3>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  Advanced electrical architecture, control panels, and smart
                  system integration designed to power reliable automation,
                  monitoring, and machine intelligence.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 flex-shrink-0">
                    <FaCheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </div>
                  <h3 className="ml-2 sm:ml-3 text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                    Manufacturing & System Integration
                  </h3>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  End-to-end manufacturing and integration of hardware,
                  software, and automation technologies to create efficient,
                  scalable, and high-quality production systems.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 flex-shrink-0">
                    <FaCheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </div>
                  <h3 className="ml-2 sm:ml-3 text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                    Custom Engineering
                  </h3>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  Custom-built solutions designed around your production lines,
                  tooling, quality standards, and automation requirements.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Circle Orbit */}
        <div className={getCircleContainerClasses()}>
          <div
            ref={circleRef}
            className={`
              relative flex items-center justify-center 
              rounded-full overflow-hidden
              bg-blue-700
              shadow-2xl shadow-blue-300/30
              ${getCircleSizeClasses()}
              before:absolute before:inset-0 before:rounded-full before:bg-white before:opacity-10 before:-z-10 before:blur-xl
              after:absolute after:inset-0 after:rounded-full after:border after:border-white/30 after:-z-10
              hover:shadow-3xl transition-all duration-500
            `}
          >
            <div className="absolute inset-3 sm:inset-4 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-sm"></div>

            <div className="absolute top-4 sm:top-5 md:top-6 lg:top-8 z-30 text-center px-3 sm:px-4 md:px-6">
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-white drop-shadow-md tracking-wide">
                Our Products
              </h2>
              <div className="w-6 sm:w-8 md:w-10 lg:w-12 h-0.5 mx-auto mt-1 md:mt-2 bg-gradient-to-r from-blue-300 to-violet-300 rounded-full"></div>
            </div>

            <div className="relative z-20 flex items-center space-x-1 sm:space-x-2 md:space-x-4">
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={getHandsSizeClasses()}
              >
                <Image
                  src="/assets/left-hand.webp"
                  alt="Human Hand"
                  width={getHandSize()}
                  height={getHandSize()}
                  className="drop-shadow-lg w-full h-auto"
                />
              </motion.div>
              <motion.div
                className="w-0.5 sm:w-1 h-8 sm:h-10 md:h-12 lg:h-16 bg-gradient-to-b from-blue-300 to-violet-400 rounded-full opacity-60"
                animate={{ opacity: [0.6, 0.8, 0.6] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className={getHandsSizeClasses()}
              >
                <Image
                  src="/assets/right-hand.webp"
                  alt="Robot Hand"
                  width={getHandSize()}
                  height={getHandSize()}
                  className="drop-shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>

            <div className="absolute inset-0 rounded-full overflow-hidden">
              {[...Array(windowWidth < 640 ? 4 : 6)].map((_, i) => {
                const particleRadius =
                  windowWidth < 380
                    ? 70
                    : windowWidth < 640
                      ? 80
                      : windowWidth < 768
                        ? 90
                        : windowWidth < 1024
                          ? 100
                          : 110;
                const particleRadiusExpanded = particleRadius + 10;

                return (
                  <motion.div
                    key={i}
                    className="absolute w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white/60 rounded-full"
                    animate={{
                      x: [
                        Math.cos(
                          (i / (windowWidth < 640 ? 4 : 6)) * 2 * Math.PI,
                        ) * particleRadius,
                        Math.cos(
                          (i / (windowWidth < 640 ? 4 : 6)) * 2 * Math.PI,
                        ) * particleRadiusExpanded,
                        Math.cos(
                          (i / (windowWidth < 640 ? 4 : 6)) * 2 * Math.PI,
                        ) * particleRadius,
                      ],
                      y: [
                        Math.sin(
                          (i / (windowWidth < 640 ? 4 : 6)) * 2 * Math.PI,
                        ) * particleRadius,
                        Math.sin(
                          (i / (windowWidth < 640 ? 4 : 6)) * 2 * Math.PI,
                        ) * particleRadiusExpanded,
                        Math.sin(
                          (i / (windowWidth < 640 ? 4 : 6)) * 2 * Math.PI,
                        ) * particleRadius,
                      ],
                    }}
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                );
              })}
            </div>
          </div>

          <div
            className="absolute w-full h-full flex items-center justify-center orbit-container cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: "none" }}
          >
            <motion.div
              className="absolute w-full h-full flex items-center justify-center"
              animate={{ rotate: rotation }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {products.map((item, index) => {
                const angle = (index / products.length) * 2 * Math.PI;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                  // <a
                  //   key={item.name}
                  //   href={item.href}
                  //   className="absolute bg-white/90 backdrop-blur-sm px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 shadow-md md:shadow-lg rounded-lg md:rounded-xl border border-gray-100/50 text-gray-700 flex flex-col items-center justify-center hover:scale-105 md:hover:scale-110 transition-transform duration-300 hover:shadow-xl hover:shadow-blue-200/30 hover:border-blue-200 group hover:bg-white text-xs"
                  //   style={{
                  //     top: `calc(50% + ${y}px)`,
                  //     left: `calc(50% + ${x}px)`,
                  //     transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
                  //     zIndex: 20,
                  //     minWidth: getProductCardMinWidth(),
                  //   }}
                  //   onClick={(e) => e.stopPropagation()}
                  // >
                  <div
                    key={item.name}
                    className="absolute bg-white/90 backdrop-blur-sm px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 shadow-md md:shadow-lg rounded-lg md:rounded-xl border border-gray-100/50 text-gray-700 flex flex-col items-center justify-center hover:scale-105 md:hover:scale-110 transition-transform duration-300 hover:shadow-xl hover:shadow-blue-200/30 hover:border-blue-200 group hover:bg-white text-xs"
                    style={{
                      top: `calc(50% + ${y}px)`,
                      left: `calc(50% + ${x}px)`,
                      transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
                      zIndex: 20,
                      minWidth: getProductCardMinWidth(),
                    }}
                  >
                    <div className="group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-300 mb-0.5 sm:mb-1 md:mb-1.5">
                      {item.icon}
                    </div>
                    <span className="font-medium text-center text-gray-800 group-hover:text-blue-600 transition-colors duration-300 px-0.5 md:px-1 leading-tight">
                      {item.name}
                    </span>
                    <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 right-2 sm:right-3 md:right-4 bg-white/60 backdrop-blur-md rounded-lg md:rounded-xl p-1.5 sm:p-2 md:p-3 shadow-xl border border-white/30 flex items-center gap-1 sm:gap-1.5 md:gap-2">
            <button
              onClick={toggleAutoRotation}
              className={`${getControlButtonSize()} rounded-lg md:rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white transition-all duration-200 shadow-md hover:shadow-lg`}
              title={
                isAutoRotating ? "Pause Auto-Rotation" : "Start Auto-Rotation"
              }
            >
              {isAutoRotating ? (
                <FaPause className={getControlIconSize()} />
              ) : (
                <FaPlay className={getControlIconSize()} />
              )}
            </button>

            <button
              onClick={resetRotation}
              className={`${getControlButtonSize()} rounded-lg md:rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white transition-all duration-200 shadow-md hover:shadow-lg`}
              title="Reset Rotation"
            >
              <FaSyncAlt className={getControlIconSize()} />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Dots */}
      <div className="absolute w-full h-full pointer-events-none overflow-hidden">
        {[...Array(windowWidth < 640 ? 2 : 3)].map((_, i) => {
          const movementRange =
            windowWidth < 640 ? 8 : windowWidth < 1024 ? 12 : 15;

          return (
            <motion.div
              key={i}
              className="absolute w-1 sm:w-1.5 md:w-2 h-1 sm:h-1.5 md:h-2 bg-gradient-to-br from-blue-400 to-violet-400 rounded-full opacity-30 md:opacity-40"
              animate={{
                x: [0, movementRange, -movementRange, 0],
                y: [0, -movementRange, movementRange, 0],
                scale: [1, 1.2, 1, 1],
                opacity: [0.3, 0.5, 0.3, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                top: `${20 + i * (windowWidth < 640 ? 40 : 25)}%`,
                left: `${10 + i * (windowWidth < 640 ? 20 : 15)}%`,
              }}
            />
          );
        })}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-6 sm:top-8 md:top-10 left-6 sm:left-8 md:left-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-blue-400/5 rounded-full blur-md md:blur-xl"></div>
      {windowWidth >= 640 && (
        <div className="absolute bottom-8 sm:bottom-10 right-1/4 sm:right-1/3 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-violet-400/5 rounded-full blur-md md:blur-xl"></div>
      )}
    </section>
  );
}
