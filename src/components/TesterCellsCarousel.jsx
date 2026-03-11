// // TesterCellsCarousel.jsx
// import React, { useState, useEffect, useCallback, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const TesterCellsCarousel = ({ cells }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);
//   const [touchStart, setTouchStart] = useState(null);
//   const [touchEnd, setTouchEnd] = useState(null);
//   const [direction, setDirection] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const containerRef = useRef(null);

//   // Responsive check
//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const minSwipeDistance = 50;
//   const totalItems = cells.length;
//   const itemsPerView = 3;

//   // Get visible items with proper wrapping
//   const getVisibleItems = useCallback(() => {
//     const items = [];
//     for (let i = 0; i < itemsPerView; i++) {
//       const index = (currentIndex + i) % totalItems;
//       items.push({
//         ...cells[index],
//         originalIndex: index,
//         position: i
//       });
//     }
//     return items;
//   }, [currentIndex, cells, totalItems, itemsPerView]);

//   // Navigation functions
//   const nextSlide = useCallback(() => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setDirection(1);
//     setCurrentIndex((prev) => (prev + 1) % totalItems);
//     setTimeout(() => setIsAnimating(false), 400);
//   }, [totalItems, isAnimating]);

//   const prevSlide = useCallback(() => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
//     setTimeout(() => setIsAnimating(false), 400);
//   }, [totalItems, isAnimating]);

//   const goToSlide = (index) => {
//     if (isAnimating) return;
//     setDirection(index > currentIndex ? 1 : -1);
//     setCurrentIndex(index);
//   };

//   // Jump to specific position (for thumbnail clicks)
//   const jumpToPosition = (index) => {
//     if (isAnimating || index === currentIndex) return;
//     setIsAnimating(true);
//     const diff = index - currentIndex;
//     const wrappedDiff = ((diff % totalItems) + totalItems) % totalItems;
//     setDirection(wrappedDiff <= totalItems / 2 ? 1 : -1);
//     setCurrentIndex(index);
//     setTimeout(() => setIsAnimating(false), 400);
//   };

//   // Reset index on view change
//   useEffect(() => {
//     setCurrentIndex(0);
//   }, [isMobile]);

//   // Auto-play
//   useEffect(() => {
//     if (!isAutoPlaying) return;
//     const interval = setInterval(nextSlide, 4000);
//     return () => clearInterval(interval);
//   }, [isAutoPlaying, nextSlide]);

//   // Touch handlers
//   const onTouchStart = (e) => {
//     setTouchEnd(null);
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

//   const onTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;
//     const distance = touchStart - touchEnd;
//     if (distance > minSwipeDistance) nextSlide();
//     else if (distance < -minSwipeDistance) prevSlide();
//   };

//   // ==================== MOBILE VIEW ====================
//   if (isMobile) {
//     const currentCell = cells[currentIndex];

//     const slideVariants = {
//       enter: (direction) => ({
//         x: direction > 0 ? 300 : -300,
//         opacity: 0
//       }),
//       center: {
//         x: 0,
//         opacity: 1
//       },
//       exit: (direction) => ({
//         x: direction < 0 ? 300 : -300,
//         opacity: 0
//       })
//     };

//     return (
//       <div className="relative w-full">
//         <div
//           className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
//           onTouchStart={onTouchStart}
//           onTouchMove={onTouchMove}
//           onTouchEnd={onTouchEnd}
//         >
//           <button
//             onClick={prevSlide}
//             className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center bg-white/95 text-gray-600 rounded-full shadow-md border border-gray-200 active:scale-90 transition-transform"
//           >
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center bg-white/95 text-gray-600 rounded-full shadow-md border border-gray-200 active:scale-90 transition-transform"
//           >
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
//             </svg>
//           </button>

        

//           <AnimatePresence mode="wait" custom={direction}>
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               variants={slideVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//               className="p-5"
//             >
//               <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl overflow-hidden p-4">
//                 <img
//                   src={currentCell.src}
//                   alt={currentCell.alt}
//                   className="w-full h-full object-contain"
//                 />
//               </div>
             
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         <div className="mt-4 overflow-x-auto pb-2 scrollbar-hide">
//           <div className="flex gap-2 px-1 min-w-max justify-center">
//             {cells.map((cell, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
//                   currentIndex === index
//                     ? "border-blue-500 shadow-md"
//                     : "border-gray-200 opacity-50 hover:opacity-80"
//                 }`}
//               >
//                 <img
//                   src={cell.src}
//                   alt={cell.name}
//                   className="w-full h-full object-contain bg-white p-0.5"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-center gap-1.5 mt-3">
//           {cells.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`rounded-full transition-all duration-200 ${
//                 currentIndex === index
//                   ? "w-5 h-2 bg-blue-600"
//                   : "w-2 h-2 bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     );
//   }

//   // ==================== DESKTOP VIEW (Continuous Sliding) ====================
//   const visibleItems = getVisibleItems();

//   return (
//     <div 
//       className="relative w-full"
//       onMouseEnter={() => setIsAutoPlaying(false)}
//       onMouseLeave={() => setIsAutoPlaying(true)}
//     >

//       {/* Main Carousel Container */}
//       <div 
//         ref={containerRef}
//         className="relative  overflow-hidden"
//       >
//         {/* Side Navigation Arrows */}
//         <button
//           onClick={prevSlide}
//           disabled={isAnimating}
//           className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white text-gray-700 hover:text-blue-600 rounded-full shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-400 transition-all duration-200 hover:scale-105 disabled:opacity-50"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         <button
//           onClick={nextSlide}
//           disabled={isAnimating}
//           className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white text-gray-700 hover:text-blue-600 rounded-full shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-400 transition-all duration-200 hover:scale-105 disabled:opacity-50"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//           </svg>
//         </button>

//         {/* Sliding Cards Container */}
//         <div className="px-8 py-12 overflow-hidden">
//           <motion.div
//             key={currentIndex}
//             initial={{ x: direction > 0 ? 200 : -200, opacity: 0.5 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ 
//               type: "spring", 
//               stiffness: 300, 
//               damping: 30 
//             }}
//             className="grid grid-cols-3 gap-8"
//           >
//             {visibleItems.map((cell, index) => (
//               <motion.div
//                 key={`${currentIndex}-${cell.originalIndex}`}
//                 initial={{ 
//                   opacity: 0, 
//                   scale: 0.9,
//                   x: direction > 0 ? 50 : -50 
//                 }}
//                 animate={{ 
//                   opacity: 1, 
//                   scale: 1,
//                   x: 0 
//                 }}
//                 transition={{ 
//                   duration: 0.35, 
//                   delay: direction > 0 ? index * 0.05 : (itemsPerView - 1 - index) * 0.05,
//                   ease: "easeOut"
//                 }}
//                 className="group"
//               >
//                 <div className="rounded-2xl overflow-hidden transition-transform duration-300 transform hover:-translate-y-2">

                 
                  
//                   {/* Image Container */}
//                  <div className="aspect-[4/3] p-4 relative flex items-center justify-center">
//   <img
//     src={cell.src}
//     alt={cell.alt}
//     className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
//     loading="lazy"
//   />
// </div>


//                   {/* Title Section */}
//                   {/* <div className="p-4 bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-50 border-t border-gray-100">
//                     <h3 className="font-bold text-gray-800 text-center text-sm group-hover:text-blue-600 transition-colors leading-tight">
//                       {cell.name}
//                     </h3>
//                   </div> */}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Thumbnail Navigation Strip */}
//       <div className="mt-6">
//         <div className="flex justify-center">
//           <div className="flex gap-2 p-3 bg-white/80 backdrop-blur rounded-2xl shadow-lg border border-gray-100 overflow-x-auto max-w-full">
//             {cells.map((cell, index) => {
//               const isVisible = visibleItems.some(item => item.originalIndex === index);
//               const isFirst = index === currentIndex;
              
//               return (
//                 <button
//                   key={index}
//                   onClick={() => jumpToPosition(index)}
//                   className={`relative flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
//                     isFirst
//                       ? "border-blue-500 shadow-lg ring-2 ring-blue-200 scale-110"
//                       : isVisible
//                       ? "border-blue-300 shadow-md"
//                       : "border-gray-200 opacity-50 hover:opacity-80 hover:border-gray-300"
//                   }`}
//                 >
//                   <img
//                     src={cell.src}
//                     alt={cell.name}
//                     className="w-full h-full object-contain bg-white p-1"
//                   />
             
                  
//                   {/* Current indicator line */}
//                   {isFirst && (
//                     <motion.div
//                       className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"
//                       layoutId="activeIndicator"
//                     />
//                   )}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Quick Navigation Dots */}
//       <div className="flex justify-center gap-2 mt-4">
//         {cells.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => jumpToPosition(index)}
//             className={`transition-all duration-300 rounded-full ${
//               index === currentIndex
//                 ? "w-8 h-2.5 bg-gradient-to-r from-blue-600 to-indigo-600"
//                 : visibleItems.some(item => item.originalIndex === index)
//                 ? "w-2.5 h-2.5 bg-blue-300 hover:bg-blue-400"
//                 : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
//             }`}
//             title={`Go to item ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TesterCellsCarousel;
// TesterCellsCarousel.jsx
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TesterCellsCarousel = ({ cells }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Responsive check
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const itemsPerPage = isMobile ? 1 : isTablet ? 2 : 3;
  const totalPages = Math.ceil(cells.length / itemsPerPage);
  const minSwipeDistance = 50;

  // Get items for the current page
  const getPageItems = useCallback(
    (page) => {
      const startIndex = page * itemsPerPage;
      return cells.slice(startIndex, startIndex + itemsPerPage);
    },
    [cells, itemsPerPage]
  );

  // Navigation
  const nextPage = useCallback(() => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const goToPage = (page) => {
    setDirection(page > currentPage ? 1 : -1);
    setCurrentPage(page);
  };

  // Reset page on screen size change
  useEffect(() => {
    setCurrentPage(0);
  }, [itemsPerPage]);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextPage, 2000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextPage]);

  // Touch handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextPage();
    else if (distance < -minSwipeDistance) prevPage();
  };

  const currentItems = getPageItems(currentPage);

  // Animation variants
  const containerVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 600 : -600,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 600 : -600,
      opacity: 0,
    }),
  };

  const cardVariants = {
    hidden: (i) => ({
      opacity: 0,
      y: 40,
      scale: 0.92,
    }),
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        delay: i * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Main Carousel Container */}
      <div
        className="relative"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Navigation Arrows */}
        <button
          onClick={prevPage}
          className="absolute left-0 sm:-left-2 lg:-left-5 top-1/2 -translate-y-1/2 z-20 
                     w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center 
                     bg-white text-gray-600 hover:text-blue-600 rounded-full 
                     shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-400 
                     transition-all duration-200 hover:scale-110 active:scale-95"
          aria-label="Previous set"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextPage}
          className="absolute right-0 sm:-right-2 lg:-right-5 top-1/2 -translate-y-1/2 z-20 
                     w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center 
                     bg-white text-gray-600 hover:text-blue-600 rounded-full 
                     shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-400 
                     transition-all duration-200 hover:scale-110 active:scale-95"
          aria-label="Next set"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden px-8 sm:px-10 lg:px-14 py-4">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={containerVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 280, damping: 30 },
                opacity: { duration: 0.25 },
              }}
              className={`grid gap-4 sm:gap-6 lg:gap-8 ${
                isMobile
                  ? "grid-cols-1"
                  : isTablet
                  ? "grid-cols-2"
                  : "grid-cols-3"
              }`}
            >
              {currentItems.map((cell, index) => (
                <motion.div
                  key={`${currentPage}-${index}`}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="group"
                >
                  <div
                    className=" overflow-hidden
                                transition-all duration-400 
                                transform hover:-translate-y-2 "
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] p-4 sm:p-6 flex items-center justify-center relative overflow-hidden">
                      {/* Subtle background pattern */}
                      <div className="absolute inset-0 opacity-[0.03]">
                        <div
                          className="w-full h-full"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
                            backgroundSize: "20px 20px",
                          }}
                        />
                      </div>
                      <img
                        src={cell.src}
                        alt={cell.alt}
                        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105 relative z-10"
                        loading="lazy"
                      />
                    </div>

                    {/* Title */}
                    {/* <div className="px-4 py-3 sm:px-5 sm:py-4 bg-gradient-to-r from-slate-50 via-blue-50/50 to-indigo-50/50 border-t border-gray-100">
                      <h3
                        className="font-bold text-gray-800 text-center text-sm sm:text-base 
                                    group-hover:text-blue-600 transition-colors duration-300 leading-tight"
                      >
                        {cell.name}
                      </h3>
                    </div> */}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Page Counter */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <span className="text-sm font-semibold text-gray-500">
          {currentPage + 1}{" "}
          <span className="text-gray-300 font-normal">/</span> {totalPages}
        </span>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 sm:gap-2.5 mt-3">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentPage
                ? "w-8 sm:w-10 h-2.5 sm:h-3 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md"
                : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-300 hover:bg-blue-400 hover:scale-110"
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail Strip */}
      <div className="mt-6 sm:mt-8">
        <div className="flex justify-center">
          <div
            className="flex gap-1.5 sm:gap-2 p-2 sm:p-3 bg-white/90 backdrop-blur-sm 
                        rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 
                        overflow-x-auto max-w-full scrollbar-hide"
          >
            {cells.map((cell, index) => {
              const pageOfItem = Math.floor(index / itemsPerPage);
              const isOnCurrentPage = pageOfItem === currentPage;

              return (
                <button
                  key={index}
                  onClick={() => goToPage(pageOfItem)}
                  className={`relative flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl 
                             overflow-hidden border-2 transition-all duration-300 ${
                               isOnCurrentPage
                                 ? "border-blue-500 shadow-lg ring-2 ring-blue-200 scale-105"
                                 : "border-gray-200 opacity-40 hover:opacity-75 hover:border-gray-300"
                             }`}
                  title={cell.name}
                >
                  <img
                    src={cell.src}
                    // alt={cell.name}
                    className="w-full h-full object-contain bg-white p-0.5 sm:p-1"
                  />

                  {/* Active page indicator */}
                  {isOnCurrentPage && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-indigo-600"
                      layoutId="thumbIndicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TesterCellsCarousel;