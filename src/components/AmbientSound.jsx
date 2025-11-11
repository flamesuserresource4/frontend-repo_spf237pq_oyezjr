import React, { useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

const AmbientSound = () => {
  const audioRef = useRef(null)
  const [on, setOn] = useState(false)

  const toggle = () => {
    const a = audioRef.current
    if (!a) return
    if (on) {
      a.pause()
      setOn(false)
    } else {
      a.volume = 0.35
      a.loop = true
      a.play().then(() => setOn(true)).catch(() => {})
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button onClick={toggle} className="flex items-center gap-2 rounded-full bg-[#1b1916]/80 px-4 py-2 text-[#e9e2d3] shadow-lg ring-1 ring-[#c9bfa6]/30 backdrop-blur hover:bg-[#1b1916] transition-colors">
        {on ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
        <span className="text-sm">{on ? 'Room sound on' : 'Play room sound'}</span>
      </button>
      <audio ref={audioRef} src="https://cdn.pixabay.com/download/audio/2022/03/01/audio_8e9a0b1d72.mp3?filename=vinyl-record-ambient-crackle-ambient-ambient-ambient-19629.mp3" preload="none" />
    </div>
  )
}

export default AmbientSound
