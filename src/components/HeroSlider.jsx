import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { slides } from '../mockData/siteData'

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState('next')
  const timerRef = useRef(null)

  const goTo = (index, direction) => {
    if (index === current) return
    setDir(direction)
    setCurrent(index)
  }

  const goNext = () => goTo((current + 1) % slides.length, 'next')
  const goPrev = () => goTo((current - 1 + slides.length) % slides.length, 'prev')

  // Auto-slide every 6 seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      goNext()
    }, 6000)
    return () => clearInterval(timerRef.current)
  }, [current])

  const slide = slides[current]

  const slideVariants = {
    enter: (direction) => ({
      x: direction === 'next' ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.45,
        ease: 'easeOut',
      },
    },
    exit: (direction) => ({
      x: direction === 'next' ? -40 : 40,
      opacity: 0,
      transition: {
        duration: 0.35,
        ease: 'easeIn',
      },
    }),
  }

  return (
    <div className="relative w-full min-h-[540px] sm:min-h-[520px] lg:h-[580px] overflow-hidden bg-[#fdf0fb] flex flex-col justify-center">

      {/* Background Image with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${slide.id}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Mobile Overlay: Solid/translucent background layer so text never clashes with image */}
          <div className="absolute inset-0 bg-[#fdf0fb]/90 backdrop-blur-[2px] sm:hidden" />

          {/* Desktop Overlay: Left-to-right gradient fade */}
          <div
            className="hidden sm:block absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, #fdf0fb 0%, #fdf0fb 32%, rgba(253,240,251,0.95) 45%, rgba(253,240,251,0.65) 58%, rgba(253,240,251,0.15) 75%, transparent 90%)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Text Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 pb-20 sm:pb-8 sm:pt-0">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={slide.id}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="max-w-xl"
          >
            {/* Category Badge */}
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="badge-news inline-block px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold rounded-full mb-3 sm:mb-4 uppercase tracking-wide shadow-sm"
            >
              {slide.category}
            </motion.span>

            {/* Title with highlighted words */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-2.5 sm:mb-4">
              {slide.title.split(' ').map((word, i) => {
                const clean = word.replace(/[^a-zA-ZÅÄÖåäö]/g, '')
                const isHighlight = slide.highlight?.some(h => clean.toLowerCase().includes(h.toLowerCase()))
                return (
                  <span
                    key={i}
                    className={
                      isHighlight
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600'
                        : 'text-gray-900'
                    }
                  >
                    {word}{' '}
                  </span>
                )
              })}
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-xs sm:text-base leading-relaxed mb-4 sm:mb-6 max-w-md line-clamp-3 sm:line-clamp-none">
              {slide.subtitle}
            </p>

            {/* Author Row */}
            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0 shadow-sm">
                {slide.author.charAt(0)}
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-gray-800">{slide.author}</p>
                <p className="text-[10px] sm:text-xs text-gray-500">{slide.date}</p>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 ml-1 sm:ml-2">
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white/80 hover:bg-pink-50 hover:border-pink-300 transition-colors text-gray-500 hover:text-pink-500 shadow-sm cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white/80 hover:bg-purple-50 hover:border-purple-300 transition-colors text-gray-500 hover:text-purple-500 shadow-sm cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating emission badge (desktop only) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`badge-${slide.id}`}
          initial={{ opacity: 0, scale: 0.85, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: -15 }}
          transition={{ duration: 0.4 }}
          className="absolute z-20 hidden lg:flex"
          style={{ left: '38%', top: '28%' }}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-pink-100">
            <span className="text-xl">{slide.badge?.icon || '⚡'}</span>
            <div>
              <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wide">Emission Data</p>
              <p className="text-sm font-bold text-gray-800 mt-0.5">{slide.badge?.text}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slider Controls */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Dot Indicators */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {slides.map((_, i) => (
              <motion.button
                key={i}
                id={`slider-dot-${i}`}
                onClick={() => goTo(i, i > current ? 'next' : 'prev')}
                animate={{
                  width: i === current ? 24 : 8,
                }}
                transition={{ duration: 0.3 }}
                className={`h-2 rounded-full cursor-pointer ${
                  i === current
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600'
                    : 'bg-gray-300 hover:bg-purple-300'
                }`}
              />
            ))}
          </div>

          {/* Counter + Arrow Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-xs font-semibold text-gray-500 tabular-nums">{slide.count}</span>
            <motion.button
              id="slider-prev"
              onClick={goPrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 border border-gray-200 shadow-sm flex items-center justify-center hover:bg-purple-50 hover:border-purple-300 hover:text-purple-600 transition-colors text-gray-600 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              id="slider-next"
              onClick={goNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-md flex items-center justify-center hover:shadow-lg hover:shadow-purple-200 transition-all text-white cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}
