import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Section from './components/Section'
import MemoryWall from './components/MemoryWall'
import Journal from './components/Journal'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0a08] text-[#2e2b24]">
      {/* Global textures */}
      <div className="pointer-events-none fixed inset-0 mix-blend-soft-light opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 20% 10%, #d6c7a8 0, transparent 40%)' }} />

      <Hero />

      <Section title="Who I Am" subtitle="I’m Girichandran. I notice things most people walk past.">
        <div className="prose prose-invert max-w-3xl">
          <p className="text-[#e9e2d3]/90 text-lg leading-relaxed">
            I like silence, messy thoughts, and finding meaning in things that don’t speak.
            I’m a quiet observer. Young, but with an old soul. I don’t say much about what I do.
            But everything I make tries to carry a feeling.
          </p>
        </div>
      </Section>

      <Section title="Memory Wall" subtitle="Hover over the things I keep around.">
        <MemoryWall />
      </Section>

      <Section title="My Journal" subtitle="A slow scroll through a few pages.">
        <Journal />
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif text-2xl text-[#e9e2d3]">Maybe we all just want to be seen — not loudly, but deeply.</p>
          <p className="mt-3 text-[#cfc6b0]">Thanks for stopping by my little corner of time.</p>
        </div>
      </Section>

      <footer className="py-12 text-center text-xs text-[#b7ad98]">
        <p>Soft jazz. Warm lamp. Pages that turn slowly.</p>
      </footer>
    </div>
  )
}

export default App
