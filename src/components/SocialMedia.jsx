import { motion } from 'framer-motion'
import { socialMedia } from '../mockData/siteData'

export default function SocialMedia() {
  const { label, heading, headingHighlight, subtitle, instagram, bluesky } = socialMedia

  const gridContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const gridItem = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
  }

  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#fef7fb] via-[#fdf2f8]/50 to-white">
      {/* Decorative Background Assets */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 bg-cover bg-center"
        style={{ backgroundImage: `url('/social-bg.jpg')` }}
      />

      {/* Decorative Radial Glowing Rings & Globe Accent in top-right */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.35, 0.45, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-6 right-6 sm:right-16 w-72 sm:w-96 h-72 sm:h-96 pointer-events-none"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="280" cy="120" r="140" fill="none" stroke="#ec4899" strokeWidth="2" strokeOpacity="0.4" />
          <circle cx="280" cy="120" r="90" fill="none" stroke="#f472b6" strokeWidth="1.5" strokeOpacity="0.5" />
          <circle cx="280" cy="120" r="50" fill="none" stroke="#f472b6" strokeWidth="1" strokeOpacity="0.3" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12"
        >
          {/* Badge Label */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-[2px] bg-[#db2777]" />
            <span className="text-xs font-bold text-[#db2777] uppercase tracking-[0.2em]">
              {label}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            {heading}{' '}
            <span className="text-[#db2777] font-black">
              {headingHighlight}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-2xl font-normal leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* ── Grid: Two Platform Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">

          {/* ════ LEFT CARD: Instagram ════ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="bg-white rounded-[28px] p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-pink-100/60 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center p-2 text-white shadow-sm flex-shrink-0">
                    <svg
                      className="w-full h-full fill-none stroke-current"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">Instagram</h3>
                </div>

                <motion.a
                  href={instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-[#fdf2f8] hover:bg-[#fce7f3] text-[#db2777] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors group/btn"
                >
                  <span>Follow us</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </motion.a>
              </div>

              {/* 6 Photo Grid (3 x 2) */}
              <motion.div
                variants={gridContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-3 sm:gap-3.5"
              >
                {instagram.posts.map((post) => (
                  <motion.div
                    key={post.id}
                    variants={gridItem}
                    whileHover={{ scale: 1.03 }}
                    className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm bg-gray-100"
                  >
                    <img
                      src={post.image}
                      alt={post.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Dark gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Top-right Instagram icon badge */}
                    <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 w-6 h-6 rounded-md bg-black/30 backdrop-blur-[2px] flex items-center justify-center text-white/95 shadow-sm">
                      <svg
                        className="w-3.5 h-3.5 fill-none stroke-current"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <circle cx="12" cy="12" r="3.5"></circle>
                        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"></circle>
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* ════ RIGHT CARD: Bluesky ════ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="bg-white rounded-[28px] p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-pink-100/60 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <svg className="w-9 h-9 text-[#0285FF] flex-shrink-0" viewBox="0 0 568 501" fill="currentColor">
                    <path d="M123.121 33.664C188.241 82.5529 258.281 202.68 284 256.401C309.719 202.68 379.759 82.5529 444.879 33.664C491.866 -1.61166 568 -28.9064 568 57.9469C568 75.2934 558.113 203.493 552.274 224.238C531.954 296.425 458.749 313.165 393.425 302.261C508.823 321.722 534.619 390.642 473.098 453.695C367.65 561.765 301.769 423.864 284 386.732C266.231 423.864 200.35 561.765 94.9016 453.695C33.3807 390.642 59.1769 321.722 174.575 302.261C109.251 313.165 36.0463 296.425 15.7262 224.238C9.88673 203.493 0 75.2934 0 57.9469C0 -28.9064 76.1343 -1.61166 123.121 33.664Z" />
                  </svg>
                  <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">Bluesky</h3>
                </div>

                <motion.a
                  href={bluesky.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-[#fdf2f8] hover:bg-[#fce7f3] text-[#db2777] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors group/btn"
                >
                  <span>Follow us</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </motion.a>
              </div>

              {/* Feed List: 3 Post Cards */}
              <div className="flex flex-col gap-3 sm:gap-3.5">
                {bluesky.posts.map((post) => (
                  <motion.div
                    key={post.id}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="group rounded-2xl border border-gray-100 hover:border-pink-200 bg-white hover:bg-pink-50/20 p-4 sm:p-4.5 flex items-center justify-between gap-4 transition-all duration-200 cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-md"
                  >
                    {/* Pink Butterfly Avatar */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#db2777] flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 568 501" fill="currentColor">
                        <path d="M123.121 33.664C188.241 82.5529 258.281 202.68 284 256.401C309.719 202.68 379.759 82.5529 444.879 33.664C491.866 -1.61166 568 -28.9064 568 57.9469C568 75.2934 558.113 203.493 552.274 224.238C531.954 296.425 458.749 313.165 393.425 302.261C508.823 321.722 534.619 390.642 473.098 453.695C367.65 561.765 301.769 423.864 284 386.732C266.231 423.864 200.35 561.765 94.9016 453.695C33.3807 390.642 59.1769 321.722 174.575 302.261C109.251 313.165 36.0463 296.425 15.7262 224.238C9.88673 203.493 0 75.2934 0 57.9469C0 -28.9064 76.1343 -1.61166 123.121 33.664Z" />
                      </svg>
                    </div>

                    {/* Post Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-bold text-gray-900 text-[13px] sm:text-sm">
                          {post.author}
                        </span>
                        <span className="text-gray-400 text-xs font-normal">
                          {post.handle}
                        </span>
                        <span className="text-gray-300 text-xs">·</span>
                        <span className="text-gray-400 text-xs font-normal">
                          {post.time}
                        </span>
                      </div>
                      <p className="text-[12px] sm:text-[13px] text-gray-700 leading-snug sm:leading-relaxed mt-1 font-normal line-clamp-3 sm:line-clamp-none">
                        {post.text}
                      </p>
                    </div>

                    {/* Right Chevron Button */}
                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-[#db2777] group-hover:border-[#db2777]/50 group-hover:translate-x-0.5 transition-all flex-shrink-0">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
