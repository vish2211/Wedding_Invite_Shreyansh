import { useState } from 'react'
import { motion } from 'framer-motion'
import FlowerCorner from './FlowerCorner'
import { GoldBorder, TripleDot } from './Ornaments'
import { PARCHMENT } from '../theme'

export default function EnvelopeIntro({ onComplete, musicOn, onMusicToggle }) {
  const [isOpening, setIsOpening] = useState(false)

  function handleTap() {
    if (isOpening) return
    setIsOpening(true)
    if (!musicOn) onMusicToggle()
    setTimeout(onComplete, 900)
  }

  return (
    <motion.div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        maxWidth: '430px', margin: '0 auto',
        ...PARCHMENT,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer',
        overflow: 'hidden',
      }}
      animate={isOpening ? { y: '-100vh', opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.85, delay: isOpening ? 0.2 : 0, ease: [0.22, 1, 0.36, 1] }}
      onClick={handleTap}
    >
      <FlowerCorner top={8}  left={8}  petalColor="#D4A0B8" leafColor="#6A8A50" size={88} />
      <FlowerCorner top={8}  right={8} petalColor="#D4A0B8" leafColor="#6A8A50" size={88} />
      <FlowerCorner bottom={8} left={8}  petalColor="#D4A0B8" leafColor="#6A8A50" size={88} />
      <FlowerCorner bottom={8} right={8} petalColor="#D4A0B8" leafColor="#6A8A50" size={88} />
      <GoldBorder />

      {/* music toggle */}
      <button
        onClick={e => { e.stopPropagation(); onMusicToggle() }}
        style={{
          position: 'absolute', top: '22px', right: '22px',
          width: '36px', height: '36px', borderRadius: '50%',
          background: 'rgba(196,146,26,0.10)',
          border: '1px solid rgba(196,146,26,0.38)',
          color: '#7a3800', fontSize: '15px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 10,
        }}
        aria-label={musicOn ? 'Mute music' : 'Play music'}
      >
        {musicOn ? '♫' : '♪'}
      </button>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, width: '100%', maxWidth: '320px' }}>
        <TripleDot style={{ justifyContent: 'center', marginBottom: '24px' }} />

        {/* VS seal — breaks on open */}
        <motion.div
          animate={isOpening
            ? { scale: 1.35, rotate: -8, opacity: 0 }
            : { scale: [1, 1.04, 1] }
          }
          transition={isOpening
            ? { duration: 0.25 }
            : { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }
          }
          style={{ marginBottom: '26px' }}
        >
          <img
            src="/envelope.png"
            style={{
              width: '126px', height: '126px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 6px 22px rgba(196,146,26,0.38))',
            }}
            alt="VS Wax Seal"
          />
        </motion.div>

        {/* family names small */}
        <p style={{
          fontFamily: 'Playfair Display, serif',
          fontStyle: 'italic',
          fontSize: '12px',
          color: 'rgba(90,48,16,0.50)',
          letterSpacing: '1px',
          marginBottom: '14px',
          lineHeight: 1.6,
        }}>
          Mishra Family &amp; Jha Family
        </p>

        {/* date line */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          justifyContent: 'center', marginBottom: '26px',
        }}>
          <div style={{ height: '1px', width: '36px', background: 'rgba(196,146,26,0.40)' }} />
          <p style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '11px', letterSpacing: '4px',
            color: 'rgba(196,146,26,0.58)', textTransform: 'uppercase',
          }}>30 November 2026</p>
          <div style={{ height: '1px', width: '36px', background: 'rgba(196,146,26,0.40)' }} />
        </div>

        {/* tap hint */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        >
          <p style={{
            fontFamily: 'Laila, serif',
            fontSize: '22px',
            color: '#5A3010',
            marginBottom: '3px',
          }}>
            स्पर्श करें
          </p>
          <p style={{
            fontFamily: 'Playfair Display, serif',
            fontStyle: 'italic',
            fontSize: '12px',
            color: 'rgba(90,48,16,0.48)',
            letterSpacing: '3px',
          }}>
            Tap to open
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
