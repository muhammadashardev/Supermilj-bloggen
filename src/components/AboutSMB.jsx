import { motion } from 'framer-motion'
import { aboutSMB } from '../mockData/siteData'

export default function AboutSMB() {
  const { label, heading, headingHighlight, description, highlight, images } = aboutSMB

  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">

          {/* ── Left: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex-1 max-w-xl w-full"
          >
            {/* Label row */}
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                {label}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-5 leading-tight">
              {heading}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                {headingHighlight}
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              {description}
            </p>

            {/* Highlight info box */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-3.5 sm:gap-4 bg-pink-50 border border-pink-100 rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 shadow-sm"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-pink-200">
                <span className="text-base text-white">🌱</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {highlight?.text}{' '}
                <strong className="font-bold text-gray-800">{highlight?.boldText}</strong>
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right: Stacked Images + Decor (Fully responsive on sm screens) ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="flex-1 w-full flex justify-center lg:justify-end relative px-2 sm:px-0"
          >
            {/* Sizing container: max-w-[280px] on 320px screens, expanding naturally on larger breakpoints */}
            <div className="relative w-full max-w-[270px] sm:max-w-[360px] lg:max-w-[440px] h-[230px] sm:h-[300px] lg:h-[340px] mx-auto lg:mx-0">

              {/* Back image – wind turbines */}
              <motion.div
                whileHover={{ rotate: 0, scale: 1.04 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 right-1 sm:right-0 w-[78%] h-[85%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl shadow-pink-100 cursor-pointer"
                style={{ transform: 'rotate(3deg)' }}
              >
                <img
                  src={images.back}
                  alt="Wind turbines"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Front image – plant */}
              <motion.div
                whileHover={{ rotate: 0, scale: 1.04 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 w-[68%] h-[75%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl shadow-purple-100 border-2 sm:border-4 border-white cursor-pointer z-10"
                style={{ transform: 'rotate(-2deg)' }}
              >
                <img
                  src={images.front}
                  alt="Green plant with wind turbines"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Decor – pink leaf top right */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2.5 right-0 sm:-top-4 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center shadow-md sm:shadow-lg shadow-pink-200 z-20 text-white"
              >
                <span className="text-xs sm:text-sm">🍃</span>
              </motion.div>

              {/* Decor – globe bottom right */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-2 right-2 sm:-bottom-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shadow-md sm:shadow-lg shadow-purple-200 z-20 text-white"
              >
                <span className="text-xs sm:text-sm">🌍</span>
              </motion.div>

              {/* Subtle background blob */}
              <div
                className="absolute -right-4 sm:-right-8 -top-4 sm:-top-8 w-36 sm:w-48 h-36 sm:h-48 rounded-full opacity-25 -z-10"
                style={{
                  background: 'radial-gradient(circle, #f0abfc 0%, #e879f9 50%, transparent 80%)',
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
