import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const editorsPicks = [
  {
    id: 1,
    image: '/news-datacenter.jpg',
    tags: ['Analysis', 'News'],
    likes: 62,
    title: 'How the state bought Lantmännen – and tolerates\' conflicts of interest...',
    tagLabel: 'SMB INVESTIGATES',
    description: 'SMB investigates how the state is both owner and regulator of one of Sweden\'s largest agricultural companies – and the risks this creates for independent oversight.',
    author: 'Lukas Frisell',
    authorInitial: 'L',
    date: '03 Oct 2024',
    readTime: 'Reading time: 14 minutes',
  },
  {
    id: 2,
    image: '/news-mountain.jpg',
    tags: ['Environmental Facts', 'News'],
    likes: 11,
    title: 'This is downsizing and post-growth: "Let\'s talk about what...',
    tagLabel: 'DEGROWTH PART 3',
    description: 'SMB presents the degrowth movement\'s proposals and solutions to contemporary ecological and social crises.',
    author: 'Lukas Frisell',
    authorInitial: 'L',
    date: '08 Jan 2024',
    readTime: 'Reading time: 23 minutes',
  },
  {
    id: 3,
    image: '/news-forest.jpg',
    tags: ['Analysis', 'News'],
    likes: 18,
    title: 'The church\'s forest investigation is being damaged from within – ...',
    tagLabel: 'SHADOW INVESTIGATIONS',
    description: 'The Church of Sweden\'s property boards and administrations have appointed three of their own investigations to refute and play down the proposals.',
    author: 'Jan Lindsten',
    authorInitial: 'J',
    date: '05 Jan 2024',
    readTime: 'Reading time: 9 minutes',
  },
  {
    id: 4,
    image: '/about-wind.jpg',
    tags: ['Analysis', 'Climate'],
    likes: 34,
    title: 'Sweden\'s climate targets under pressure as emissions rise again...',
    tagLabel: 'CLIMATE REPORT',
    description: 'New data shows Sweden\'s greenhouse gas emissions increased for the first time in a decade, casting doubt on 2030 climate pledges.',
    author: 'Anna Lindqvist',
    authorInitial: 'A',
    date: '02 Jan 2024',
    readTime: 'Reading time: 11 minutes',
  },
  {
    id: 5,
    image: '/about-plant.jpg',
    tags: ['Nature', 'News'],
    likes: 27,
    title: 'Biodiversity loss accelerates in Sweden despite new conservation laws...',
    tagLabel: 'NATURE CRISIS',
    description: 'Despite new legislation, Sweden\'s biodiversity continues to decline. Scientists warn the trend is irreversible without stronger action.',
    author: 'Maria Björk',
    authorInitial: 'M',
    date: '28 Dec 2023',
    readTime: 'Reading time: 7 minutes',
  },
]

function ArticleCard({ article }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col border border-gray-100"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden flex-shrink-0 bg-gray-100">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          style={{ filter: 'brightness(0.92) saturate(1.15)' }}
        />
        {/* Bookmark */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </motion.button>
        {/* Arrow button bottom-right */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4">
        {/* Tags + likes row */}
        <div className="flex items-center justify-between mb-2.5 flex-wrap gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            {article.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] font-bold px-2.5 py-1 rounded-full border"
                style={{
                  borderColor: i === 0 ? '#e879f9' : '#e5e7eb',
                  color: i === 0 ? '#c026d3' : '#6b7280',
                  backgroundColor: i === 0 ? '#fdf4ff' : '#f9fafb',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-[11px] font-semibold">{article.likes}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-sm font-extrabold text-gray-900 leading-snug mb-2 line-clamp-3 group-hover:text-fuchsia-600 transition-colors">
          {article.title}
        </h3>

        {/* Tag label + description */}
        <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-3 mb-3 flex-1">
          <span className="font-black text-gray-800 uppercase tracking-wide text-[10px]">{article.tagLabel} </span>
          {article.description}
        </p>

        {/* Author */}
        <div className="flex items-center gap-2 mt-auto pt-3 border-t border-gray-100">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold text-[11px] flex-shrink-0">
            {article.authorInitial}
          </div>
          <div>
            <p className="text-[11px] font-semibold text-gray-800 leading-none">{article.author}</p>
            <p className="text-[10px] text-gray-400 mt-0.5">{article.date} · {article.readTime}</p>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function EditorsPick() {
  const [startIdx, setStartIdx] = useState(0)
  const visible = 3
  const total = editorsPicks.length

  const goPrev = () => setStartIdx(i => Math.max(0, i - 1))
  const goNext = () => setStartIdx(i => Math.min(total - visible, i + 1))

  const visibleCards = editorsPicks.slice(startIdx, startIdx + visible)

  return (
    <section className="w-full bg-white py-14 lg:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8"
        >
          <div className="max-w-lg">
            {/* Label */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-[2px] bg-gradient-to-r from-pink-500 to-fuchsia-500" />
              <span className="text-[11px] font-bold text-pink-500 uppercase tracking-widest">The Editors Recommend</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-2">
              Handpicked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-600">
                by Our Editors
              </span>
            </h2>
            <p className="text-gray-500 text-sm">In-depth stories, analysis and perspectives on today's most important environmental issues.</p>
          </div>

          {/* Right: View all + arrows */}
          <div className="flex items-center gap-3 flex-shrink-0 sm:mt-2">
            <a
              id="editors-view-all"
              href="#"
              className="text-sm font-semibold text-gray-700 hover:text-pink-500 transition-colors flex items-center gap-1 whitespace-nowrap group"
            >
              View all articles
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <motion.button
              id="editors-prev"
              onClick={goPrev}
              disabled={startIdx === 0}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-pink-300 hover:text-pink-500 transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              id="editors-next"
              onClick={goNext}
              disabled={startIdx >= total - visible}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 flex items-center justify-center text-white shadow-md shadow-pink-200 hover:shadow-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Cards – sliding window */}
        <div className="flex gap-6 overflow-hidden">
          <AnimatePresence mode="popLayout">
            {visibleCards.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
