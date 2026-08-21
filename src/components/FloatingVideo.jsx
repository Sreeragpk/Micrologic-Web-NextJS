"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Volume2, VolumeX, ChevronUp, ChevronDown } from "lucide-react";
import Image from "next/image";

// ── Read sessionStorage safely (SSR-safe) ──
function getInitialClosed() {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem("floatingVideoClosed") === "true";
}

export default function FloatingVideo() {
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(getInitialClosed); // ← lazy initializer, no effect needed
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const iframeRef = useRef(null);

  // ── Detect Mobile ──
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ── Show after 400px scroll ──
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !closed) {
        setShow(true);
        if (!hasLoaded) setHasLoaded(true);
      } else if (window.scrollY <= 400) {
        setShow(false);
        setMobileExpanded(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [closed, hasLoaded]);

  // ── Sound tooltip after 2s ──
  useEffect(() => {
    if (show && isMuted && (!isMobile || mobileExpanded)) {
      const t = setTimeout(() => setShowTooltip(true), 2000);
      return () => clearTimeout(t);
    }
  }, [show, isMuted, isMobile, mobileExpanded]);

  // ── Hide tooltip after 4s ──
  useEffect(() => {
    if (showTooltip) {
      const t = setTimeout(() => setShowTooltip(false), 4000);
      return () => clearTimeout(t);
    }
  }, [showTooltip]);

  // ── Mute Toggle ──
  const handleMuteToggle = (e) => {
    e.stopPropagation();
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    setShowTooltip(false);
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: newMuted ? "mute" : "unMute",
      }),
      "*"
    );
  };

  // ── Close (session only) ──
  const handleClose = (e) => {
    e.stopPropagation();
    sessionStorage.setItem("floatingVideoClosed", "true");
    setClosed(true);
    setShow(false);
    setMobileExpanded(false);
  };

  // ── Click → scroll to section ──
  const handleClick = () => {
    const section = document.getElementById("company-video");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "center" });
    window.dispatchEvent(new Event("play-company-video"));
    sessionStorage.setItem("floatingVideoClosed", "true");
    setClosed(true);
    setShow(false);
    setMobileExpanded(false);
  };

  // ─────────────────────────────────────────────────
  // MOBILE — Compact Bottom Bar
  // ─────────────────────────────────────────────────
  if (isMobile) {
    return (
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed bottom-0 left-0 right-0 z-50"
          >
            {/* Top accent line */}
            <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

            <div className="bg-gray-950/95 backdrop-blur-sm">

              {/* ── Compact Pill Bar (always visible) ── */}
              <div
                className="flex items-center justify-between px-3 py-2 cursor-pointer"
                onClick={() => setMobileExpanded((p) => !p)}
              >
                {/* Left: thumbnail + text */}
                <div className="flex items-center gap-2">
                  {/* Tiny thumbnail */}
                  <div className="w-9 h-9 rounded-lg overflow-hidden bg-gray-800 shrink-0 relative border border-white/10">
                    {hasLoaded ? (
                      <Image
                        src="https://img.youtube.com/vi/PNj_ujIpY-k/mqdefault.jpg"
                        alt="Company video preview"
                        fill
                        className="object-cover"
                        sizes="36px"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-800" />
                    )}
                    {/* Mini play icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-blue-600/90 flex items-center justify-center">
                        <Play size={7} className="fill-white text-white ml-[1px]" />
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-white text-xs font-semibold leading-tight">
                      Company Overview
                    </p>
                    <p className="text-gray-400 text-[10px] leading-tight">
                      {mobileExpanded ? "Tap to collapse" : "Tap to preview"}
                    </p>
                  </div>
                </div>

                {/* Right: chevron + close */}
                <div className="flex items-center gap-1.5">
                  <div className="px-2 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center gap-1">
                    {mobileExpanded
                      ? <ChevronDown size={12} className="text-blue-400" />
                      : <ChevronUp size={12} className="text-blue-400" />
                    }
                  </div>

                  <button
                    onClick={handleClose}
                    className="p-1.5 rounded-full bg-white/5 text-gray-500 active:bg-white/10 active:text-gray-300 transition-all"
                  >
                    <X size={13} />
                  </button>
                </div>
              </div>

              {/* ── Expandable Video Panel ── */}
              <AnimatePresence>
                {mobileExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 pb-3 flex gap-2">

                      {/* Video — left side */}
                      <div
                        className="relative rounded-xl overflow-hidden border border-white/10 cursor-pointer flex-1 max-w-[55%]"
                        onClick={handleClick}
                      >
                        <div className="relative pb-[56.25%] bg-black">
                          {hasLoaded ? (
                            <iframe
                              ref={iframeRef}
                              src="https://www.youtube.com/embed/PNj_ujIpY-k?enablejsapi=1&autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1&controls=0"
                              className="absolute top-0 left-0 w-full h-full pointer-events-none"
                              allow="autoplay; encrypted-media"
                              title="Company Video"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                              <div className="w-6 h-6 rounded-full border-2 border-blue-500/40 border-t-blue-500 animate-spin" />
                            </div>
                          )}
                          {/* Play overlay */}
                          <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                            <div className="w-8 h-8 rounded-full bg-blue-600/90 flex items-center justify-center shadow-lg">
                              <Play size={13} className="text-white fill-white ml-0.5" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right: info + action buttons */}
                      <div className="flex flex-col justify-between flex-1 py-0.5">
                        <p className="text-gray-300 text-[11px] leading-snug">
                          See how we build excellence in every project.
                        </p>

                        <div className="flex flex-col gap-1.5 mt-2">
                          {/* Watch full button */}
                          <button
                            onClick={handleClick}
                            className="w-full py-1.5 px-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-semibold flex items-center justify-center gap-1 transition-all active:scale-95"
                          >
                            <Play size={10} className="fill-white" />
                            Watch Full
                          </button>

                          {/* Mute toggle */}
                          <button
                            onClick={handleMuteToggle}
                            className="w-full py-1 px-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-[11px] flex items-center justify-center gap-1 active:bg-white/10 transition-all"
                          >
                            {isMuted
                              ? <><VolumeX size={11} /> Unmute</>
                              : <><Volume2 size={11} /> Mute</>
                            }
                          </button>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  // ─────────────────────────────────────────────────
  // DESKTOP — Bottom Right Card
  // ─────────────────────────────────────────────────
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 80, scale: 0.85 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="fixed bottom-6 right-6 z-50 w-80"
        >
          {/* Glow Ring */}
          <div
            className={`relative rounded-2xl p-[2px] transition-all duration-500 ${
              isHovered
                ? "bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                : "bg-gradient-to-r from-blue-600/60 to-cyan-500/60 shadow-[0_0_20px_rgba(59,130,246,0.25)]"
            }`}
          >
            <div
              className="relative bg-gray-950 rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-3 py-2 bg-gray-900/90 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
                  </span>
                  <span className="text-white text-xs font-semibold tracking-wide">
                    Company Overview
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={handleMuteToggle}
                    className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                  </button>
                  <button
                    onClick={handleClose}
                    className="p-1.5 rounded-full text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all"
                    title="Close"
                  >
                    <X size={13} />
                  </button>
                </div>
              </div>

              {/* Video */}
              <div onClick={handleClick} className="relative">
                <div className="relative pb-[56.25%] bg-black">
                  {hasLoaded ? (
                    <iframe
                      ref={iframeRef}
                      src="https://www.youtube.com/embed/PNj_ujIpY-k?enablejsapi=1&autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1&controls=0"
                      className="absolute top-0 left-0 w-full h-full pointer-events-none"
                      allow="autoplay; encrypted-media"
                      title="Company Video"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full border-2 border-blue-500/40 border-t-blue-500 animate-spin" />
                    </div>
                  )}

                  {/* Hover overlay */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-2 pointer-events-none"
                      >
                        <div className="w-12 h-12 rounded-full bg-blue-600/90 flex items-center justify-center shadow-lg">
                          <Play size={20} className="text-white ml-1 fill-white" />
                        </div>
                        <p className="text-white text-xs font-medium tracking-wide">
                          Click to Watch Full Video
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Footer */}
              <motion.div
                animate={
                  isHovered
                    ? { backgroundColor: "rgba(59,130,246,0.12)" }
                    : { backgroundColor: "transparent" }
                }
                className="px-3 py-2.5 border-t border-white/10 flex items-center justify-between"
              >
                <p className="text-gray-300 text-xs">
                  See how we build excellence
                </p>
                <div className="flex items-center gap-1 text-blue-400 text-xs font-semibold">
                  <Play size={10} className="fill-blue-400" />
                  Watch
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}