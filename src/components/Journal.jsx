import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const seedNotes = [
  {
    title: 'Window, 7:13 PM',
    body: 'Streetlights blink on. The room agrees. Dust dances like it knows the song.'
  },
  {
    title: 'A cassette pause',
    body: 'Clicks. Then quiet. The kind that lets a thought take the front seat.'
  },
  {
    title: 'Rain on film',
    body: 'If you listen close, every drop is a memory trying to come back.'
  },
  {
    title: 'Matches',
    body: 'One spark. A whole mood. Not everything needs to last to mean something.'
  }
]

const Page = ({ note, i }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: i * 0.05 }}
    className="rounded-xl border border-[#c9bfa6]/40 bg-[#f6efe2]/70 p-6 backdrop-blur-sm shadow-sm"
  >
    <h4 className="font-serif text-2xl text-[#2e2b24]">{note.title}</h4>
    <p className="mt-2 text-[#4a463f]">{note.body}</p>
  </motion.div>
)

const Journal = () => {
  const [notes] = useState(seedNotes)
  return (
    <div className="space-y-4">
      <AnimatePresence initial={false}>
        {notes.map((n, i) => (
          <Page key={i} note={n} i={i} />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default Journal
