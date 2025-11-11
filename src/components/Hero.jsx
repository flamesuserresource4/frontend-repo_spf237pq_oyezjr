import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative h-[90svh] w-full overflow-hidden bg-[#0f0d0a] text-[#e8e1d5]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/fA4LwfT7IUUelEGO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft vignette + film glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay film-grain" />
      <div className="pointer-events-none absolute inset-0 vhs-scanlines" />

      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <motion.div
          className="max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d3c7a8]/70">A quiet corner of the internet</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight">
            Hey… welcome. This isn’t a portfolio. It’s just my space.
          </h1>
          <p className="mt-6 text-[#e8e1d5]/80 font-typewriter text-base sm:text-lg">
            Take a seat. Let the room warm up. No rush here.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
