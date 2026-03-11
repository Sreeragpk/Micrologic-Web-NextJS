// import React, { useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// // Lightbox Modal
// const Lightbox = ({ image, onClose }) => {
//   if (!image) return null;
//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
//       onClick={onClose}
//     >
//       <div
//         className="relative max-w-5xl w-full mx-4"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <img
//           src={image.src}
//           alt={image.alt}
//           className="w-full max-h-[85vh] object-contain rounded-2xl"
//         />
//         <button
//           onClick={onClose}
//           className="absolute -top-3 -right-3 w-10 h-10 flex items-center justify-center 
//                      bg-white text-gray-700 rounded-full shadow-xl border border-gray-200
//                      hover:bg-red-50 hover:text-red-600 hover:border-red-200
//                      transition-all duration-200 hover:scale-110 active:scale-95 z-10"
//         >
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

      
//       </div>
//     </div>
//   );
// };

// const Carousel = ({ images }) => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <div className="w-full max-w-6xl mx-auto relative">
//       {/* Custom Navigation Arrows */}
//       <button
//         ref={prevRef}
//         className="absolute left-0 sm:-left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-20
//                    w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center
//                    bg-white text-gray-600 rounded-full
//                    shadow-lg hover:shadow-xl
//                    border border-gray-200 hover:border-blue-400
//                    hover:text-blue-600 hover:bg-blue-50
//                    transition-all duration-200 hover:scale-110 active:scale-95"
//         aria-label="Previous slide"
//       >
//         <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>

//       <button
//         ref={nextRef}
//         className="absolute right-0 sm:-right-2 lg:-right-6 top-1/2 -translate-y-1/2 z-20
//                    w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center
//                    bg-white text-gray-600 rounded-full
//                    shadow-lg hover:shadow-xl
//                    border border-gray-200 hover:border-blue-400
//                    hover:text-blue-600 hover:bg-blue-50
//                    transition-all duration-200 hover:scale-110 active:scale-95"
//         aria-label="Next slide"
//       >
//         <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
//         </svg>
//       </button>

//       {/* Swiper Carousel */}
//       <div className="px-8 sm:px-10 lg:px-14">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={24}
//           slidesPerView={1}
//           loop={true}
//           pagination={{
//             clickable: true,
//             bulletClass: "swiper-pagination-bullet custom-bullet",
//             bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
//           }}
//           autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
//           onInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//             swiper.navigation.init();
//             swiper.navigation.update();
//           }}
//           breakpoints={{
//             640: { slidesPerView: 1, spaceBetween: 16 },
//             768: { slidesPerView: 2, spaceBetween: 20 },
//             1024: { slidesPerView: 3, spaceBetween: 24 },
//           }}
//           className="pb-14"
//         >
//           {images.map((img, idx) => (
//             <SwiperSlide key={idx}>
//               <div
//                 className="group overflow-hidden rounded-2xl bg-white cursor-pointer
//                            border border-gray-100 shadow-md hover:shadow-2xl
//                            transition-all duration-400 transform hover:-translate-y-1
//                            hover:border-blue-200"
//                 onClick={() => setSelectedImage(img)}
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={img.src}
//                     alt={img.alt}
//                     className="w-full h-[380px] sm:h-[400px] md:h-[420px] object-contain
//                                bg-gradient-to-br from-gray-50 via-white to-blue-50
//                                p-4 sm:p-5
//                                transition-transform duration-500 group-hover:scale-105"
//                     loading="lazy"
//                   />

           
//                 </div>

//                 {/* Caption bar */}
//                 {/* {img.alt && (
//                   <div className="px-4 py-3 bg-gradient-to-r from-slate-50 via-blue-50/50 to-indigo-50/50 
//                                   border-t border-gray-100">
//                     <p className="text-sm font-semibold text-gray-700 text-center 
//                                   group-hover:text-blue-600 transition-colors duration-300 
//                                   truncate">
//                       {img.alt}
//                     </p>
//                   </div>
//                 )} */}
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Lightbox */}
//       <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />

//       {/* Custom Swiper Pagination Styles */}
//       <style>{`
//         .custom-bullet {
//           width: 10px !important;
//           height: 10px !important;
//           background: #d1d5db !important;
//           opacity: 1 !important;
//           border-radius: 9999px !important;
//           transition: all 0.3s ease !important;
//           margin: 0 4px !important;
//         }
//         .custom-bullet:hover {
//           background: #93c5fd !important;
//           transform: scale(1.2);
//         }
//         .custom-bullet-active {
//           width: 28px !important;
//           background: linear-gradient(to right, #2563eb, #4f46e5) !important;
//           border-radius: 9999px !important;
//         }
        
//         /* Hide default swiper navigation */
//         .swiper-button-next,
//         .swiper-button-prev {
//           display: none !important;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Carousel;
"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Image Protection Hook
const useImageProtection = () => {
  useEffect(() => {
    const handleContextMenu = (e) => {
      if (e.target.tagName === 'IMG' || e.target.closest('.protected-carousel')) {
        e.preventDefault();
        return false;
      }
    };

    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG' || e.target.closest('.protected-carousel')) {
        e.preventDefault();
        return false;
      }
    };

    const handleKeyDown = (e) => {
      // Prevent Ctrl+S / Cmd+S
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
        const activeElement = document.activeElement;
        if (activeElement && activeElement.tagName === 'IMG') {
          e.preventDefault();
          return false;
        }
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
};

// Lightbox Modal with Protection
const Lightbox = ({ image, onClose }) => {
  const handleContextMenu = (e) => {
    e.preventDefault();
    return false;
  };

  const handleDragStart = (e) => {
    e.preventDefault();
    return false;
  };

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full mx-4 select-none"
        onClick={(e) => e.stopPropagation()}
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
      >
        <div className="relative">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full max-h-[85vh] object-contain rounded-2xl select-none pointer-events-none"
            draggable={false}
            onContextMenu={handleContextMenu}
            onDragStart={handleDragStart}
            style={{
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
              WebkitUserDrag: 'none',
            }}
          />
          {/* Invisible overlay for lightbox image */}
          <div 
            className="absolute inset-0 z-10"
            onContextMenu={handleContextMenu}
            onDragStart={handleDragStart}
          />
        </div>

        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-10 h-10 flex items-center justify-center 
                     bg-white text-gray-700 rounded-full shadow-xl border border-gray-200
                     hover:bg-red-50 hover:text-red-600 hover:border-red-200
                     transition-all duration-200 hover:scale-110 active:scale-95 z-20"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Carousel = ({ images }) => {
  useImageProtection(); // Enable image protection
  const [selectedImage, setSelectedImage] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleContextMenu = (e) => {
    e.preventDefault();
    return false;
  };

  const handleDragStart = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <div className="w-full max-w-6xl mx-auto relative protected-carousel">
      {/* Custom Navigation Arrows */}
      <button
        ref={prevRef}
        className="absolute left-0 sm:-left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-20
                   w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center
                   bg-white text-gray-600 rounded-full
                   shadow-lg hover:shadow-xl
                   border border-gray-200 hover:border-blue-400
                   hover:text-blue-600 hover:bg-blue-50
                   transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        ref={nextRef}
        className="absolute right-0 sm:-right-2 lg:-right-6 top-1/2 -translate-y-1/2 z-20
                   w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center
                   bg-white text-gray-600 rounded-full
                   shadow-lg hover:shadow-xl
                   border border-gray-200 hover:border-blue-400
                   hover:text-blue-600 hover:bg-blue-50
                   transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Swiper Carousel */}
      <div className="px-8 sm:px-10 lg:px-14">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet custom-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="pb-14"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="group overflow-hidden rounded-2xl bg-white cursor-pointer
                           border border-gray-100 shadow-md hover:shadow-2xl
                           transition-all duration-400 transform hover:-translate-y-1
                           hover:border-blue-200 select-none"
                onClick={() => setSelectedImage(img)}
                onContextMenu={handleContextMenu}
                onDragStart={handleDragStart}
              >
                <div 
                  className="relative overflow-hidden"
                  onContextMenu={handleContextMenu}
                  onDragStart={handleDragStart}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-[380px] sm:h-[400px] md:h-[420px] object-contain
                               bg-gradient-to-br from-gray-50 via-white to-blue-50
                               p-4 sm:p-5
                               transition-transform duration-500 group-hover:scale-105
                               select-none pointer-events-none"
                    loading="lazy"
                    draggable={false}
                    onContextMenu={handleContextMenu}
                    onDragStart={handleDragStart}
                    style={{
                      userSelect: 'none',
                      WebkitUserSelect: 'none',
                      MozUserSelect: 'none',
                      msUserSelect: 'none',
                      WebkitUserDrag: 'none',
                      KhtmlUserDrag: 'none',
                      MozUserDrag: 'none',
                      OUserDrag: 'none',
                    }}
                  />
                  {/* Invisible overlay to prevent direct image interaction */}
                  <div 
                    className="absolute inset-0 z-10"
                    onContextMenu={handleContextMenu}
                    onDragStart={handleDragStart}
                  />
                </div>

                {/* Optional: Caption bar - uncomment if needed */}
                {/* {img.alt && (
                  <div className="px-4 py-3 bg-gradient-to-r from-slate-50 via-blue-50/50 to-indigo-50/50 
                                  border-t border-gray-100 select-none">
                    <p className="text-sm font-semibold text-gray-700 text-center 
                                  group-hover:text-blue-600 transition-colors duration-300 
                                  truncate">
                      {img.alt}
                    </p>
                  </div>
                )} */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox */}
      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />

      {/* Custom Swiper Pagination Styles + Image Protection Styles */}
      <style>{`
        .custom-bullet {
          width: 10px !important;
          height: 10px !important;
          background: #d1d5db !important;
          opacity: 1 !important;
          border-radius: 9999px !important;
          transition: all 0.3s ease !important;
          margin: 0 4px !important;
        }
        .custom-bullet:hover {
          background: #93c5fd !important;
          transform: scale(1.2);
        }
        .custom-bullet-active {
          width: 28px !important;
          background: linear-gradient(to right, #2563eb, #4f46e5) !important;
          border-radius: 9999px !important;
        }
        
        /* Hide default swiper navigation */
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }

        /* Image Protection Styles */
        .protected-carousel img {
          user-select: none !important;
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          -webkit-user-drag: none !important;
          -khtml-user-drag: none !important;
          -moz-user-drag: none !important;
          -o-user-drag: none !important;
          user-drag: none !important;
          pointer-events: none !important;
        }

        .protected-carousel .swiper-slide {
          user-select: none !important;
          -webkit-user-select: none !important;
        }

        .protected-carousel img::selection {
          background: transparent !important;
        }

        .protected-carousel img::-moz-selection {
          background: transparent !important;
        }

        /* Prevent selection in lightbox */
        .fixed img {
          user-select: none !important;
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          pointer-events: none !important;
        }
      `}</style>
    </div>
  );
};

export default Carousel;