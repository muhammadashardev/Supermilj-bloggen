import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { supportWork } from '../mockData/siteData'

export default function SupportWork() {
  const { bgImage, qrImage, phone, heading, headingHighlight, description, subLabel, readMoreLink } = supportWork
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(phone)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="support"
      className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden py-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Subtle white overlay so text stays readable */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />

      {/* Content – centered */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-lg mx-auto"
      >
        {/* Swish QR Card */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-8 w-44 sm:w-52 rounded-3xl overflow-hidden shadow-2xl shadow-purple-200/60 border-4 border-white/80 bg-white cursor-pointer"
        >
          <img
            src={qrImage}
            alt="Swish QR code for SMB"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
          {heading}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-600">
            {headingHighlight}
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
          {description}
        </p>

        {/* Sub label */}
        <p className="text-gray-500 text-sm font-medium mb-4">{subLabel}</p>

        {/* Phone number button */}
        <motion.button
          id="support-copy-phone"
          onClick={handleCopy}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-600 text-white text-lg font-bold rounded-2xl shadow-xl shadow-pink-300/40 hover:shadow-2xl transition-all duration-300 mb-6 cursor-pointer"
        >
          <span>{phone}</span>
          {/* Copy icon */}
          {copied ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </motion.button>
        <AnimatePresence>
          {copied && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-xs text-green-600 font-semibold -mt-4 mb-4"
            >
              ✓ Copied to clipboard!
            </motion.p>
          )}
        </AnimatePresence>

        {/* Read more link */}
        <motion.a
          id="support-read-more"
          href="#"
          whileHover={{ x: 2 }}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-pink-500 transition-colors underline underline-offset-4 decoration-gray-300 hover:decoration-pink-400"
        >
          {readMoreLink}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  )
}
