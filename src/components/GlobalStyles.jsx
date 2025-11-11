import React, { useEffect } from 'react'

const GlobalStyles = () => {
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
    @font-face {
      font-family: 'OldStyleSerif';
      src: local('Georgia');
      font-weight: 400;
    }
    @font-face {
      font-family: 'TypeWriter';
      src: local('Courier New');
      font-weight: 400;
    }

    .font-serif { font-family: OldStyleSerif, Georgia, 'Times New Roman', serif; }
    .font-typewriter { font-family: TypeWriter, 'Courier New', monospace; }

    .film-grain { background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1600\" height=\"900\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.05\"/></svg>'); }
    .vhs-scanlines { background: repeating-linear-gradient(0deg, rgba(255,255,255,0.06), rgba(255,255,255,0.06) 1px, transparent 2px, transparent 3px); mix-blend-overlay; opacity: 0.2; }
    `
    document.head.appendChild(style)
    return () => { document.head.removeChild(style) }
  }, [])
  return null
}

export default GlobalStyles
