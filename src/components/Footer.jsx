import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 3000)
      setEmail('')
    }
  }

  const exploreLinks = [
    { name: 'News', href: '#news' },
    { name: 'Nonsense', href: '#nonsense' },
    { name: 'Positive news', href: '#positive-news' },
    { name: 'Policy', href: '#policy' },
    { name: 'Consumption', href: '#consumption' },
    { name: 'Opinion', href: '#opinion' },
  ]

  const aboutLinks = [
    { name: 'About SMB', href: '#about' },
    { name: 'Our Mission', href: '#mission' },
    { name: 'Our Writers', href: '#writers' },
    { name: 'Events & Seminars', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ]

  const resourceLinks = [
    { name: 'Topics', href: '#topics' },
    { name: 'Archive', href: '#archive' },
    { name: 'Guides', href: '#guides' },
    { name: 'Reports', href: '#reports' },
    { name: 'Newsletter', href: '#newsletter' },
    { name: 'Subscribe', href: '#subscribe' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const colVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <footer className="relative w-full bg-white overflow-hidden pt-12 sm:pt-16">
      {/* ── Decorative Leaf Accents on Left & Right ── */}
      <motion.div
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-0 bottom-44 sm:bottom-36 w-24 sm:w-32 h-24 sm:h-32 pointer-events-none opacity-40 -translate-x-6"
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-emerald-500">
          <path
            d="M20 80 C 10 40, 50 10, 80 15 C 75 55, 45 85, 20 80 Z"
            fill="currentColor"
            opacity="0.8"
          />
          <path
            d="M20 80 C 40 50, 60 30, 80 15"
            stroke="#059669"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      <motion.div
        animate={{ rotate: [2, -2, 2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-0 top-16 w-28 sm:w-36 h-28 sm:h-36 pointer-events-none opacity-40 translate-x-8"
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-emerald-500">
          <path
            d="M80 80 C 90 40, 50 10, 20 15 C 25 55, 55 85, 80 80 Z"
            fill="currentColor"
            opacity="0.75"
          />
          <path
            d="M80 80 C 60 50, 40 30, 20 15"
            stroke="#059669"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* ── Upper Content: Main Footer Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 items-start"
        >

          {/* 1. Brand Column (Col span 4) */}
          <motion.div variants={colVariants} className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Brand Logo */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 text-[#d91b70] flex-shrink-0">
                  <svg viewBox="0 0 40 40" fill="currentColor" className="w-full h-full">
                    <path d="M12 32 C10 18 20 6 32 8 C30 22 20 34 12 32 Z" fill="#d91b70" />
                    <path d="M14 32 C18 24 24 16 32 8" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M8 28 C6 20 12 14 18 16 C16 24 12 28 8 28 Z" fill="#e11d48" opacity="0.85" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-baseline">
                    <span className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">Supermiljö</span>
                    <span className="text-xl sm:text-2xl font-black text-[#db2777] tracking-tight">bloggen</span>
                  </div>
                  <span className="block text-[9px] font-semibold text-gray-400 tracking-[0.25em] -mt-1 uppercase">
                    NEWS · ANALYSIS · OPINION
                  </span>
                </div>
              </div>

              {/* Bio description */}
              <p className="mt-5 text-gray-500 text-sm leading-relaxed max-w-sm">
                Independent environmental journalism for a more sustainable and informed society.
              </p>
            </div>

            {/* Social Media Pill Buttons */}
            <div className="flex items-center gap-3 mt-6 sm:mt-8">
              {/* Instagram */}
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                whileHover={{ scale: 1.15, rotate: 4 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-pink-50 hover:bg-pink-100 text-[#db2777] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <circle cx="12" cy="12" r="3.5"></circle>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"></circle>
                </svg>
              </motion.a>

              {/* Bluesky */}
              <motion.a
                href="https://bsky.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bluesky"
                whileHover={{ scale: 1.15, rotate: -4 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 text-[#0285FF] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 568 501" fill="currentColor">
                  <path d="M123.121 33.664C188.241 82.5529 258.281 202.68 284 256.401C309.719 202.68 379.759 82.5529 444.879 33.664C491.866 -1.61166 568 -28.9064 568 57.9469C568 75.2934 558.113 203.493 552.274 224.238C531.954 296.425 458.749 313.165 393.425 302.261C508.823 321.722 534.619 390.642 473.098 453.695C367.65 561.765 301.769 423.864 284 386.732C266.231 423.864 200.35 561.765 94.9016 453.695C33.3807 390.642 59.1769 321.722 174.575 302.261C109.251 313.165 36.0463 296.425 15.7262 224.238C9.88673 203.493 0 75.2934 0 57.9469C0 -28.9064 76.1343 -1.61166 123.121 33.664Z" />
                </svg>
              </motion.a>

              {/* X / Twitter */}
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                whileHover={{ scale: 1.15, rotate: 4 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 flex items-center justify-center transition-colors shadow-sm cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>

              {/* YouTube */}
              <motion.a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                whileHover={{ scale: 1.15, rotate: -4 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-rose-50 hover:bg-rose-100 text-[#e11d48] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* 2. Explore Links (Col span 2) */}
          <motion.div variants={colVariants} className="lg:col-span-2">
            <h4 className="text-base font-extrabold text-gray-900 tracking-tight">Explore</h4>
            <div className="w-6 h-[2px] bg-[#db2777] mt-1.5 mb-4" />
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-[#db2777] text-sm transition-colors duration-150 block hover:translate-x-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 3. About Links (Col span 2) */}
          <motion.div variants={colVariants} className="lg:col-span-2">
            <h4 className="text-base font-extrabold text-gray-900 tracking-tight">About</h4>
            <div className="w-6 h-[2px] bg-[#db2777] mt-1.5 mb-4" />
            <ul className="space-y-2.5">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-[#db2777] text-sm transition-colors duration-150 block hover:translate-x-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 4. Resources Links (Col span 1) */}
          <motion.div variants={colVariants} className="lg:col-span-1">
            <h4 className="text-base font-extrabold text-gray-900 tracking-tight">Resources</h4>
            <div className="w-6 h-[2px] bg-[#db2777] mt-1.5 mb-4" />
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-[#db2777] text-sm transition-colors duration-150 block hover:translate-x-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 5. Stay in the Loop Newsletter Card (Col span 3) */}
          <motion.div variants={colVariants} className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-pink-100/70">
              <div className="flex items-start gap-3.5 mb-3">
                <div className="w-11 h-11 rounded-full bg-pink-100/80 flex items-center justify-center text-[#db2777] flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-black text-gray-900 leading-tight">
                    Stay in <span className="text-[#db2777]">the loop</span>
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Get the latest environmental news, analysis and opinions straight to your inbox.
                  </p>
                </div>
              </div>

              {/* Email Form */}
              <form onSubmit={handleSubscribe} className="mt-4">
                <div className="relative flex items-center bg-gray-50/90 border border-gray-200/80 rounded-full p-1 pl-3.5 focus-within:border-[#db2777] focus-within:ring-2 focus-within:ring-pink-100 transition-all shadow-inner">
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-transparent border-none outline-none text-xs sm:text-sm text-gray-800 placeholder-gray-400 px-2.5 py-1"
                  />
                  <motion.button
                    type="submit"
                    aria-label="Subscribe"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#9d174d] via-[#be185d] to-[#db2777] text-white flex items-center justify-center shadow-md flex-shrink-0 cursor-pointer"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </motion.button>
                </div>
                <AnimatePresence>
                  {subscribed && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-xs text-emerald-600 font-medium mt-2 pl-3"
                    >
                      ✓ Tack! Du prenumererar nu.
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* ── Bottom Wave Shape Section ── */}
      <div className="relative w-full">
        {/* SVG Curved Layered Wave Shape */}
        <div className="relative w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-24 sm:h-32 lg:h-36 block preserve-3d"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="footerWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4a044e" />
                <stop offset="25%" stopColor="#701a75" />
                <stop offset="55%" stopColor="#86198f" />
                <stop offset="85%" stopColor="#9d174d" />
                <stop offset="100%" stopColor="#be185d" />
              </linearGradient>

              <linearGradient id="waveStroke1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f472b6" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#d946ef" stopOpacity="0.1" />
              </linearGradient>

              <linearGradient id="waveStroke2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f472b6" stopOpacity="0.6" />
                <stop offset="60%" stopColor="#ec4899" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Layer 1: Very subtle faint pink wave ripple line */}
            <path
              d="M 0,95 C 320,135 560,95 860,45 C 1080,5 1280,25 1440,65"
              fill="none"
              stroke="url(#waveStroke1)"
              strokeWidth="2"
            />

            {/* Layer 2: Secondary wave stroke line */}
            <path
              d="M 0,110 C 330,150 570,110 870,58 C 1090,15 1290,35 1440,78"
              fill="none"
              stroke="url(#waveStroke2)"
              strokeWidth="2.5"
            />

            {/* Layer 3: Solid Main Wavy Curve */}
            <path
              d="M 0,120 C 340,165 580,120 880,70 C 1100,25 1300,45 1440,88 L 1440,180 L 0,180 Z"
              fill="url(#footerWaveGradient)"
            />
          </svg>
        </div>

        {/* Bottom Banner Bar Content */}
        <div className="w-full bg-gradient-to-r from-[#4a044e] via-[#701a75] to-[#9d174d] text-white py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-xs text-white/80">

            {/* Left: Copyright & Legal */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-center md:text-left">
              <div>
                <p className="font-medium text-white/90">© 2023 Supermiljöbloggen.</p>
                <p className="text-white/60 text-[11px]">All rights reserved.</p>
              </div>

              {/* Vertical divider on desktop */}
              <div className="hidden sm:block w-[1px] h-6 bg-white/20" />

              {/* Links */}
              <div className="flex items-center gap-4 sm:gap-5 text-white/75">
                <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#cookies" className="hover:text-white transition-colors">Cookie Settings</a>
                <a href="#accessibility" className="hover:text-white transition-colors">Accessibility</a>
              </div>
            </div>

            {/* Right: Motto + Codesinc Branding Badge */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">

              {/* Motto */}
              <div className="flex items-center gap-2 text-white/90 font-medium">
                <svg className="w-4 h-4 text-pink-300 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-7.07 17.07C7.43 16.57 9.5 14 12 14c2.5 0 4.57 2.57 7.07 5.07A10 10 0 0 0 12 2zm0 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                </svg>
                <span>A cleaner, fairer and more sustainable tomorrow.</span>
              </div>

              {/* Codesinc Branding Badge — Premium Card Style */}
              <motion.a
                href="https://codesinc.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 px-4 py-2.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex-shrink-0"
              >
                {/* Codesinc Hexagon Logo SVG */}
                <div className="flex-shrink-0">
                  <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="csGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#0285ff" />
                      </linearGradient>
                    </defs>
                    {/* Outer hexagon shape */}
                    <path
                      d="M50 5 L88 27.5 L88 72.5 L50 95 L12 72.5 L12 27.5 Z"
                      fill="url(#csGrad)"
                    />
                    {/* Inner C/S letter mark */}
                    <path
                      d="M65 35 L45 35 L35 50 L45 65 L65 65"
                      stroke="white"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="M58 50 L45 50"
                      stroke="white"
                      strokeWidth="7"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </div>

                {/* Text Content */}
                <div className="text-left">
                  <p className="text-white/60 text-[10px] font-normal leading-none tracking-wide uppercase">
                    Designed and hosted by
                  </p>
                  <p className="text-white font-extrabold text-base sm:text-lg leading-tight tracking-tight mt-0.5">
                    Codesinc.
                  </p>
                </div>
              </motion.a>

            </div>

          </div>
        </div>
      </div>
    </footer>
