import { motion } from 'framer-motion'
import { newsCards } from '../mockData/siteData'

export default function NewsStrip() {
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
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <section className="bg-white border-t border-gray-100 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {newsCards.map((card) => (
            <motion.article
              key={card.id}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="news-card flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-pink-200 hover:shadow-md cursor-pointer group transition-all"
            >
              {/* Thumbnail */}
              <div className="w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold text-pink-500 uppercase tracking-wide">
                  {card.category}
                </span>
                <h3 className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight mt-0.5 line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {card.title}
                </h3>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-purple-600 group-hover:border-purple-600 transition-all">
                <svg
                  className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
