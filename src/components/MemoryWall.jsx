import React from 'react'
import { motion } from 'framer-motion'
import { Camera, Tv, Type, Radio, Book, Phone, Film } from 'lucide-react'

const items = [
  { icon: Camera, label: 'old camera', note: 'Moments don’t repeat, they echo.' },
  { icon: Tv, label: 'crt tv', note: 'The glow keeps lonely rooms honest.' },
  { icon: Type, label: 'typewriter', note: 'Some words like to arrive slowly.' },
  { icon: Phone, label: 'rotary phone', note: 'Silence after the ring says enough.' },
  { icon: Radio, label: 'radio', note: 'Static is just music catching its breath.' },
  { icon: Book, label: 'letters', note: 'Paper remembers what we forget.' },
  { icon: Film, label: 'film reel', note: 'Dust looks pretty when it floats in light.' },
]

const MemoryCard = ({ Icon, label, note }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="group relative rounded-xl border border-[#c9bfa6]/40 bg-[#f3ede0]/60 p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] backdrop-blur-sm hover:bg-[#f3ede0]/80 transition-colors"
  >
    <div className="flex items-center gap-4">
      <div className="rounded-lg bg-[#2e2b24] p-3 text-[#e9e2d3]">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className="font-typewriter text-sm uppercase tracking-widest text-[#5b554b]">{label}</p>
        <p className="mt-1 font-serif text-xl text-[#2e2b24]">{note}</p>
      </div>
    </div>
    <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity ring-1 ring-[#c9bfa6]/60" />
  </motion.div>
)

const MemoryWall = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((it, i) => (
        <MemoryCard key={i} Icon={it.icon} label={it.label} note={it.note} />)
      )}
    </div>
  )
}

export default MemoryWall
