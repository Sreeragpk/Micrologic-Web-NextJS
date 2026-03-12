// import { motion } from "framer-motion";

// function AutoPlayYouTube() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-black"
//     >
//       <div className="relative pb-[56.25%]">
//         <iframe
//           title="AutoPlay YouTube"
//           src="https://www.youtube.com/embed/ffwmrKdZBSE?autoplay=1&mute=1&loop=1&playlist=ffwmrKdZBSE"
//           frameBorder="0"
//           allow="autoplay; encrypted-media"
//           allowFullScreen
//           className="absolute top-0 left-0 w-full h-full"
//         />
//       </div>

//     </motion.div>
//   );
// }

// export default AutoPlayYouTube;
"use client";

import { motion } from "framer-motion";

function AutoPlayYouTube() {
  return (
    <div className="bg-white px-4 sm:px-6 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl mx-auto space-y-4"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-light text-black">
            Media Player
          </h1>

          <span className="text-xs sm:text-sm text-neutral-400">
            Now playing
          </span>
        </div>

        {/* Video Container */}
        <div className="border border-neutral-200 bg-neutral-50 rounded-md overflow-hidden shadow-sm">
          <div className="relative bg-black">
            <div className="relative pb-[56.25%]">
              <iframe
                title="AutoPlay YouTube"
                src="https://www.youtube.com/embed/ffwmrKdZBSE?autoplay=1&mute=1&loop=1&playlist=ffwmrKdZBSE"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>

          {/* Controls */}
          <div className="px-3 py-2 flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-3 text-neutral-600">
              <span className="flex items-center gap-1">
                <span className="w-1 h-1 bg-neutral-900 rounded-full" />
                Auto
              </span>
              <span>Loop</span>
            </div>

            <button className="text-black hover:text-neutral-600 transition-colors">
              Fullscreen
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AutoPlayYouTube;