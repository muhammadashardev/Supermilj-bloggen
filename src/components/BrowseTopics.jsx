import { motion } from 'framer-motion'
import { browseTopics } from '../mockData/siteData'

// Pink SVG Icons
const icons = {
  news: (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" stroke="#e91e8c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="10" width="48" height="44" rx="4" />
      <rect x="14" y="18" width="16" height="16" rx="2" />
      <line x1="36" y1="18" x2="50" y2="18" />
      <line x1="36" y1="24" x2="50" y2="24" />
      <line x1="36" y1="30" x2="50" y2="30" />
      <line x1="14" y1="42" x2="50" y2="42" />
      <line x1="14" y1="48" x2="38" y2="48" />
    </svg>
  ),
  nonsense: (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" stroke="#e91e8c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 8 C18 8 10 18 10 28 C10 36 16 42 24 44 L22 56 L32 48 L42 56 L40 44 C48 42 54 36 54 28 C54 18 46 8 32 8Z" />
      <circle cx="24" cy="27" r="2.5" fill="#e91e8c" stroke="none"/>
      <circle cx="40" cy="27" r="2.5" fill="#e91e8c" stroke="none"/>
      <path d="M24 36 Q32 30 40 36" />
    </svg>
  ),
  positive: (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" stroke="#e91e8c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 54 L32 20" />
      <path d="M32 20 C32 20 20 28 14 20 C20 12 32 18 32 20Z" />
      <path d="M32 30 C32 30 44 22 50 30 C44 38 32 32 32 30Z" />
      <circle cx="32" cy="10" r="5" />
      <path d="M20 54 L44 54" />
    </svg>
  ),
  policy: (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" stroke="#e91e8c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="18" y="22" width="10" height="32" rx="1" />
      <rect x="36" y="22" width="10" height="32" rx="1" />
      <rect x="12" y="50" width="40" height="4" rx="1" />
      <path d="M10 22 L32 10 L54 22" />
      <rect x="26" y="36" width="12" height="18" rx="1" />
    </svg>
  ),
  consumption: (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" stroke="#e91e8c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 36 C10 28 16 18 28 18 C36 18 40 22 40 22" />
      <path d="M40 22 C44 14 54 12 54 22 C54 32 44 34 40 38 C36 42 32 50 24 52" />
      <circle cx="18" cy="48" r="6" />
      <path d="M24 52 C20 56 14 58 10 54" />
    </svg>
  ),
  opinion: (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" stroke="#e91e8c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="18" r="10" />
      <path d="M14 54 C14 44 22 38 32 38 C42 38 50 44 50 54" />
      <circle cx="46" cy="28" r="6" />
      <path d="M52 50 C52 44 48 40 44 40" />
      <line x1="32" y1="24" x2="32" y2="28" />
      <circle cx="32" cy="32" r="1.5" fill="#e91e8c" stroke="none" />
    </svg>
  ),
}

// Single Topic Card
function TopicCard({ topic }) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group flex items-center gap-4 bg-white rounded-2xl border border-gray-100 px-5 py-5 hover:border-pink-200 hover:shadow-lg hover:shadow-pink-50 transition-all duration-300"
    >
      {/* Icon box */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="w-14 h-14 flex-shrink-0 bg-pink-50 rounded-xl flex items-center justify-center p-2.5 group-hover:bg-pink-100 transition-colors"
      >
        {icons[topic.icon]}
      </motion.div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-black text-pink-500 uppercase tracking-widest mb-0.5">{topic.category}</p>
        <h3 className="text-base font-extrabold text-gray-900 leading-tight mb-1 group-hover:text-fuchsia-600 transition-colors">
          {topic.title}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{topic.description}</p>
      </div>

      {/* Arrow */}
      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-fuchsia-600 group-hover:border-transparent transition-all duration-300">
        <svg
          className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </motion.a>
  )
}

// Browse by Topic Section
export default function BrowseTopics() {
  const { label, heading, headingHighlight, subtitle, topics } = browseTopics

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <section className="w-full bg-gray-50 py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-10"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-[2px] bg-gradient-to-r from-pink-500 to-fuchsia-500" />
              <span className="text-[11px] font-bold text-pink-500 uppercase tracking-widest">{label}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-2">
              {heading}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-600">
                {headingHighlight}
              </span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">{subtitle}</p>
          </div>

          <a
            id="topics-view-all"
            href="#"
            className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-pink-500 transition-colors whitespace-nowrap sm:mt-10 flex-shrink-0 group"
          >
            View all topics
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* 2-column grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {topics.map((topic) => (
            <motion.div key={topic.id} variants={itemVariants}>
              <TopicCard topic={topic} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}