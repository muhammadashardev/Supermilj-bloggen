import { motion } from 'framer-motion'
import { latestNews } from '../mockData/siteData'

// Single Article Card
function ArticleCard({ article }) {
  const { category, categoryColor, image, title, highlight, tag, description, author, authorInitial, date, readTime } = article

  const badgeCls = categoryColor === 'purple'
    ? 'bg-purple-600 text-white'
    : 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white'

  return (
    <motion.article
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
    >
      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden flex-shrink-0 bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category badge top-left */}
        <span className={`absolute top-3 left-3 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm ${badgeCls}`}>
          {category}
        </span>
        {/* Bookmark top-right */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </motion.button>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title */}
        <h3 className="text-lg font-extrabold text-gray-900 leading-snug mb-3">
          {title.split(' ').map((word, i) => {
            const clean = word.replace(/[^a-zA-Z0-9ÅÄÖåäö"']/g, '')
            const isHighlight = highlight?.some(h => h.toLowerCase() === clean.toLowerCase() || word.toLowerCase().includes(h.toLowerCase()))
            return (
              <span
                key={i}
                className={
                  isHighlight
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-600'
                    : ''
                }
              >
                {word}{' '}
              </span>
            )
          })}
        </h3>

        {/* Tag + Description */}
        <div className="mb-4 flex-1">
          <p className="text-[11px] font-black text-gray-800 uppercase tracking-wider mb-1">
            {tag}{' '}
            <span className="font-normal normal-case text-gray-500 tracking-normal text-xs">
              {description}
            </span>
          </p>
        </div>

        {/* Footer: Author + Arrow */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold text-xs flex-shrink-0 shadow-sm">
              {authorInitial}
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-800 leading-none">{author}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">{date} · {readTime}</p>
            </div>
          </div>
          {/* Pink arrow button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 flex items-center justify-center shadow-md shadow-pink-200 hover:shadow-lg transition-all flex-shrink-0 cursor-pointer"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}

// Latest News Section
export default function LatestNews() {
  const { label, heading, headingHighlight, subtitle, articles } = latestNews

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section className="w-full bg-gray-50 py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10"
        >
          {/* Left: label + heading + subtitle */}
          <div className="max-w-md">
            {/* Label */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-[2px] bg-gradient-to-r from-pink-500 to-fuchsia-500" />
              <span className="text-xs font-bold text-pink-500 uppercase tracking-widest">{label}</span>
            </div>
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-2">
              {heading}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-600">
                {headingHighlight}
              </span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">{subtitle}</p>
          </div>

          {/* Right: View all link + arrows */}
          <div className="flex items-center gap-3 sm:mt-2 flex-shrink-0">
            <a
              href="#"
              id="latest-news-view-all"
              className="text-sm font-semibold text-gray-700 hover:text-pink-500 transition-colors whitespace-nowrap flex items-center gap-1 group"
            >
              View all news
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            {/* Prev arrow */}
            <motion.button
              id="news-prev"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-pink-300 hover:text-pink-500 transition-all shadow-sm cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            {/* Next arrow */}
            <motion.button
              id="news-next"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 flex items-center justify-center text-white shadow-md shadow-pink-200 hover:shadow-lg transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* 3 Articles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {articles.map((article) => (
            <motion.div key={article.id} variants={cardVariants}>
              <ArticleCard article={article} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
