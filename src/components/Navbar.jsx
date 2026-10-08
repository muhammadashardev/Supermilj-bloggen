import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navDropdowns } from '../mockData/siteData'

export default function Navbar() {
  const [areasOpen, setAreasOpen] = useState(false)
  const [envOpen, setEnvOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeAll = () => {
    setAreasOpen(false)
    setEnvOpen(false)
  }

  return (
    <>
      <AnimatePresence>
        {(areasOpen || envOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            onClick={closeAll}
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 glass-nav transition-shadow duration-300 ${
          scrolled ? 'shadow-lg bg-white/95 backdrop-blur-md' : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <motion.a
              href="/"
              id="nav-logo"
              className="flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img src="/Brand.png" alt="Supermiljöbloggen" className="h-10 w-auto" />
            </motion.a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {/* Areas Dropdown */}
              <div className="relative z-50">
                <button
                  id="nav-areas"
                  onClick={() => { setAreasOpen(!areasOpen); setEnvOpen(false) }}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-purple-600 rounded-full hover:bg-purple-50 transition-all cursor-pointer"
                >
                  AREAS
                  <svg className={`w-3 h-3 transition-transform duration-200 ${areasOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {areasOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 left-0 bg-white rounded-2xl shadow-2xl border border-purple-100 py-2 min-w-[190px] overflow-hidden"
                    >
                      {navDropdowns.areas.map(item => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Environmental Facts Dropdown */}
              <div className="relative z-50">
                <button
                  id="nav-env"
                  onClick={() => { setEnvOpen(!envOpen); setAreasOpen(false) }}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-purple-600 rounded-full hover:bg-purple-50 transition-all cursor-pointer"
                >
                  ENVIRONMENTAL FACTS
                  <svg className={`w-3 h-3 transition-transform duration-200 ${envOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {envOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 left-0 bg-white rounded-2xl shadow-2xl border border-purple-100 py-2 min-w-[190px] overflow-hidden"
                    >
                      {navDropdowns.environmentalFacts.map(item => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a id="nav-about" href="#" className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-purple-600 rounded-full hover:bg-purple-50 transition-all">
                ABOUT US
              </a>
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                id="nav-support"
                href="#support"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="px-5 py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-bold rounded-full shadow-sm hover:shadow-lg hover:shadow-purple-200 transition-shadow"
              >
                Support SMEs
              </motion.a>
              <motion.button
                id="nav-search"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-purple-100 transition-colors text-gray-600 hover:text-purple-600 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </motion.button>
              <motion.button
                id="nav-more"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-purple-100 transition-colors text-gray-600 hover:text-purple-600 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
            </div>

            {/* Mobile Hamburger */}
            <motion.button
              id="nav-mobile-toggle"
              whileTap={{ scale: 0.9 }}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-gray-100"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="md:hidden overflow-hidden pb-4 border-t border-purple-100 mt-1"
              >
                <div className="flex flex-col gap-1 pt-3">
                  <a href="#" className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl">AREAS</a>
                  <a href="#" className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl">ENVIRONMENTAL FACTS</a>
                  <a href="#" className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl">ABOUT US</a>
                  <a href="#" className="mt-2 px-5 py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-bold rounded-full text-center">Support SMEs</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  )
}
