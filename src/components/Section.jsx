import React from 'react'
import { motion } from 'framer-motion'

const Section = ({ title, subtitle, children, className = '' }) => {
  return (
    <section className={`relative py-20 md:py-28 ${className}`}>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(214,199,168,0.08),transparent_60%)]" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {title && (
          <div className="mb-8">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2c2a26] dark:text-[#e9e2d3]">{title}</h2>
            {subtitle && (
              <p className="mt-2 text-[#4a463f] dark:text-[#cfc6b0]">{subtitle}</p>
            )}
          </div>
        )}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {children}
        </motion.div>
      </div>
    </section>
  )
}

export default Section
