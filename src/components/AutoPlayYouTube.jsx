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
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl space-y-6"
      >
        {/* Simple Header */}
        <div className="flex items-baseline justify-between">
          <h1 className="text-3xl font-light text-black">
            Media Player
          </h1>
          <span className="text-sm text-neutral-400">
            Now playing
          </span>
        </div>

        {/* Video Container */}
        <div className="border border-neutral-200 bg-neutral-50">
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
          
          <div className="p-4 flex items-center justify-between text-sm">
            <div className="flex items-center gap-4 text-neutral-600">
              <span className="flex items-center gap-2">
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