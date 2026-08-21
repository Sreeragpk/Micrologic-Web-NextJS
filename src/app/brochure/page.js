"use client";

import { useEffect, useState, forwardRef, useRef, useCallback } from "react";
import HTMLFlipBook from "react-pageflip";
import axios from "axios";

// API Base URL from environment variable
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

// Page component for HTMLFlipBook (requires forwardRef) - MUST be outside main component
const Page = forwardRef(({ src, pageNumber }, ref) => {
  return (
    <div ref={ref} className="bg-white shadow-lg overflow-hidden">
      <img
        src={src}
        alt={`Page ${pageNumber}`}
        className="w-full h-full object-contain bg-white"
        draggable={false}
      />
    </div>
  );
});

Page.displayName = "Page";

export default function BrochurePage() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const flipBookRef = useRef(null);
  const containerRef = useRef(null);

  const sizeConfig = {
    1: { width: 550, height: 750, minWidth: 450, maxWidth: 600 },
    1.25: { width: 650, height: 850, minWidth: 550, maxWidth: 700 },
    1.5: { width: 750, height: 950, minWidth: 650, maxWidth: 800 },
  };

  const currentSize = sizeConfig[zoomLevel];

  useEffect(() => {
    fetchPages();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        goToPrevPage();
      } else if (e.key === "ArrowRight") {
        goToNextPage();
      } else if (e.key === "Escape" && isFullscreen) {
        toggleFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  const fetchPages = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(`${API_URL}/api/brochure`);
      setPages(res.data.pages || []);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load brochure");
    } finally {
      setLoading(false);
    }
  };

  const onFlip = useCallback((e) => {
    setCurrentPage(e.data);
  }, []);

  const goToPrevPage = useCallback(() => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  }, []);

  const goToNextPage = useCallback(() => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
  }, []);

  const goToPage = useCallback((pageIndex) => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().turnToPage(pageIndex);
    }
  }, []);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleZoomIn = () => {
    if (zoomLevel < 1.5) {
      setZoomLevel((prev) => prev + 0.25);
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 1) {
      setZoomLevel((prev) => prev - 0.25);
    }
  };

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 border-4 border-indigo-200 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
              </div>
              <div className="space-y-2">
                <p className="text-white text-lg font-medium">
                  Loading brochure...
                </p>
                <p className="text-gray-400 text-sm">
                  Please wait while we prepare your document
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Failed to Load Brochure
          </h3>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={fetchPages}
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Empty State
  if (pages.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            No Brochure Available
          </h3>
          <p className="text-gray-600 mb-6">
            There is no brochure uploaded yet. Please upload one to get started.
          </p>
          <a
            href="/upload"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            Upload Brochure
          </a>
        </div>
      </div>
    );
  }

  // Brochure Viewer
  return (
    <div
      ref={containerRef}
      className={`min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 ${
        isFullscreen ? "fixed inset-0 z-50" : ""
      }`}
    >
      {/* Header */}
      <div className="bg-black/30 backdrop-blur-sm border-b border-white/10 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">
                  Digital Brochure
                </h1>
                <p className="text-sm text-gray-400">Interactive Viewer</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Zoom Controls */}
              <div className="hidden sm:flex items-center space-x-1 bg-white/10 rounded-lg p-1">
                <button
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 1}
                  className="p-2 text-white hover:bg-white/10 rounded disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  title="Zoom Out"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
                    />
                  </svg>
                </button>
                <span className="text-white text-sm font-medium px-2 min-w-[60px] text-center">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 1.5}
                  className="p-2 text-white hover:bg-white/10 rounded disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  title="Zoom In"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </button>
              </div>

              {/* Fullscreen Button */}
              <button
                onClick={toggleFullscreen}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                  </svg>
                )}
              </button>

              {/* Page Indicator */}
              <span className="hidden sm:inline-flex px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium">
                Page {currentPage + 1} of {pages.length}
              </span>

              <a
                href="/upload"
                className="hidden sm:inline-flex px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white text-sm font-medium transition-colors"
              >
                Upload New
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Flipbook Container */}
      <div className="flex flex-col items-center justify-center py-6 px-4 overflow-auto">
        {/* Instructions */}
        <div className="mb-4 flex flex-wrap items-center justify-center gap-4 text-gray-400 text-sm">
          <div className="flex items-center space-x-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
              />
            </svg>
            <span>Click or drag pages to flip</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
            <span>Use keyboard arrows to navigate</span>
          </div>
        </div>

        {/* Flipbook with Navigation */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 0}
            className="absolute left-[-80px] z-10 w-14 h-14 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all group shadow-lg"
          >
            <svg
              className="w-7 h-7 text-white group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Flipbook */}
          <div
            className="shadow-2xl rounded-lg overflow-hidden transition-all duration-300"
            style={{
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)",
            }}
          >
            <HTMLFlipBook
              key={zoomLevel}
              width={currentSize.width}
              height={currentSize.height}
              size="stretch"
              minWidth={currentSize.minWidth}
              maxWidth={currentSize.maxWidth}
              minHeight={currentSize.height - 100}
              maxHeight={currentSize.height + 100}
              showCover={true}
              mobileScrollSupport={true}
              onFlip={onFlip}
              className="shadow-2xl"
              ref={flipBookRef}
              flippingTime={800}
              usePortrait={false}
              startZIndex={0}
              autoSize={true}
              maxShadowOpacity={0.5}
              drawShadow={true}
              useMouseEvents={true}
              swipeDistance={30}
              clickEventForward={true}
            >
              {pages.map((page, i) => (
                <Page key={i} src={page} pageNumber={i + 1} />
              ))}
            </HTMLFlipBook>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNextPage}
            disabled={currentPage >= pages.length - 1}
            className="absolute right-[-80px] z-10 w-14 h-14 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all group shadow-lg"
          >
            <svg
              className="w-7 h-7 text-white group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="mt-6 sm:hidden flex items-center space-x-4">
          <div className="flex items-center space-x-1 bg-white/10 rounded-lg p-1">
            <button
              onClick={handleZoomOut}
              disabled={zoomLevel <= 1}
              className="p-2 text-white hover:bg-white/10 rounded disabled:opacity-30"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            </button>
            <span className="text-white text-sm px-2">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              disabled={zoomLevel >= 1.5}
              className="p-2 text-white hover:bg-white/10 rounded disabled:opacity-30"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>

          <span className="px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium">
            {currentPage + 1} / {pages.length}
          </span>
        </div>

        {/* Page Thumbnails Navigation */}
        <div className="mt-6 flex items-center justify-center gap-2 flex-wrap max-w-2xl">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`min-w-[32px] h-8 rounded-md text-sm font-medium transition-all duration-300 ${
                currentPage === index
                  ? "bg-indigo-500 text-white px-3 scale-110"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white px-2"
              }`}
              title={`Go to page ${index + 1}`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Keyboard Shortcuts Info */}
        <div className="mt-6 text-center text-gray-500 text-xs">
          <p className="flex items-center justify-center flex-wrap gap-2">
            <span className="inline-flex items-center">
              <kbd className="px-2 py-1 bg-white/10 rounded text-gray-400 font-mono text-xs">
                ←
              </kbd>
              <span className="ml-1">Previous</span>
            </span>
            <span className="text-gray-600">|</span>
            <span className="inline-flex items-center">
              <kbd className="px-2 py-1 bg-white/10 rounded text-gray-400 font-mono text-xs">
                →
              </kbd>
              <span className="ml-1">Next</span>
            </span>
            <span className="text-gray-600">|</span>
            <span className="inline-flex items-center">
              <kbd className="px-2 py-1 bg-white/10 rounded text-gray-400 font-mono text-xs">
                ESC
              </kbd>
              <span className="ml-1">Exit Fullscreen</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}