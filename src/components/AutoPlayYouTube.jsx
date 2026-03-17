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

function CompanyVideo() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Video */}
        <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
          <div className="relative pb-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/PNj_ujIpY-k?autoplay=1&mute=1&loop=1&playlist=PNj_ujIpY-k"
              title="Micrologic Company Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default CompanyVideo;


