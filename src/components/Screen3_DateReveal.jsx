import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger } from '../animations'
import FlowerCorner from './FlowerCorner'
import { OrnamentalDivider, GoldBorder } from './Ornaments'
import { PARCHMENT, GOLD } from '../theme'
import { useCountdown } from '../hooks/useCountdown'

const WEDDING_DATE = '2026-11-30T00:00:00'

function CountBox({ value, hindiLabel, label }) {
  const display = value !== undefined ? String(value).padStart(2, '0') : '00'
  return (
    <div style={{
      flex: 1, minWidth: 0,
      background: 'rgba(255,255,255,0.62)',
      borderRadius: '12px',
      border: `1px solid ${GOLD}2A`,
      padding: '14px 6px 12px',
      textAlign: 'center',
    }}>
      <p style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '40px', fontWeight: 400,
        color: GOLD, lineHeight: 1, marginBottom: '4px',
      }}>{display}</p>
      <p style={{
        fontFamily: 'Noto Serif Devanagari, serif',
        fontSize: '11px', color: '#7A5030',
        marginBottom: '2px',
      }}>{hindiLabel}</p>
      <p style={{
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 300, fontSize: '9px',
        letterSpacing: '2px', textTransform: 'uppercase',
        color: '#9A7050',
      }}>{label}</p>
    </div>
  )
}

function ScratchCanvas({ onRevealed }) {
  const canvasRef = useRef(null)
  const isDrawing = useRef(false)
  const strokeCount = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    // Gold foil fill
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    grad.addColorStop(0, '#B87A08')
    grad.addColorStop(0.25, '#E8C840')
    grad.addColorStop(0.5, '#D4A020')
    grad.addColorStop(0.75, '#F0D860')
    grad.addColorStop(1, '#A87010')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Fine shimmer texture
    for (let i = 0; i < 120; i++) {
      ctx.beginPath()
      ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 1, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,248,180,0.55)'
      ctx.fill()
    }

    // Stamp border
    ctx.strokeStyle = 'rgba(80,40,0,0.40)'
    ctx.lineWidth = 2
    ctx.strokeRect(6, 6, canvas.width - 12, canvas.height - 12)

    // English hint only
    ctx.fillStyle = 'rgba(60,25,0,0.72)'
    ctx.textAlign = 'center'
    ctx.font = '500 13px Poppins, sans-serif'
    ctx.fillText('✦  Scratch to Reveal  ✦', canvas.width / 2, canvas.height / 2 + 5)
  }, [])

  const checkReveal = useCallback(() => {
    strokeCount.current += 1
    if (strokeCount.current % 3 !== 0) return // throttle pixel check
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data
    let transparent = 0
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] < 128) transparent++
    }
    if (transparent / (data.length / 4) > 0.38) onRevealed()
  }, [onRevealed])

  const getXY = (e, canvas) => {
    const rect = canvas.getBoundingClientRect()
    const sx = canvas.width / rect.width
    const sy = canvas.height / rect.height
    const src = e.touches ? e.touches[0] : e
    return { x: (src.clientX - rect.left) * sx, y: (src.clientY - rect.top) * sy }
  }

  const scratch = (e) => {
    if (!isDrawing.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const { x, y } = getXY(e, canvas)
    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(x, y, 22, 0, Math.PI * 2)
    ctx.fill()
    checkReveal()
  }

  return (
    <canvas
      ref={canvasRef}
      width={290}
      height={108}
      style={{
        width: '100%', height: '108px',
        borderRadius: '12px',
        cursor: 'crosshair',
        touchAction: 'none',
        boxShadow: '0 4px 20px rgba(180,130,10,0.35)',
      }}
      onMouseDown={(e) => { isDrawing.current = true; scratch(e) }}
      onMouseMove={scratch}
      onMouseUp={() => { isDrawing.current = false }}
      onMouseLeave={() => { isDrawing.current = false }}
      onTouchStart={(e) => { e.preventDefault(); isDrawing.current = true; scratch(e) }}
      onTouchMove={(e) => { e.preventDefault(); scratch(e) }}
      onTouchEnd={() => { isDrawing.current = false }}
    />
  )
}

export default function Screen3_DateReveal() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATE)
  const [revealed, setRevealed] = useState(false)

  return (
    <section style={{
      minHeight: '100svh',
      ...PARCHMENT,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '64px 28px',
      position: 'relative', overflow: 'hidden',
      textAlign: 'center',
    }}>
      <FlowerCorner top={8}  left={8}  petalColor="#D4B060" leafColor="#7A9050" size={80} />
      <FlowerCorner top={8}  right={8} petalColor="#D4B060" leafColor="#7A9050" size={80} />
      <FlowerCorner bottom={8} left={8}  petalColor="#D4B060" leafColor="#7A9050" size={80} />
      <FlowerCorner bottom={8} right={8} petalColor="#D4B060" leafColor="#7A9050" size={80} />
      <GoldBorder />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '340px' }}
      >
        <motion.p variants={fadeUp} style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 300, fontSize: '11px',
          letterSpacing: '6px', textTransform: 'uppercase',
          color: GOLD, opacity: 0.55, marginBottom: '8px',
        }}>
          Auspicious Date
        </motion.p>

        <motion.h2 variants={fadeUp} style={{
          fontFamily: 'Noto Serif Devanagari, serif',
          fontSize: '34px', fontWeight: 400,
          color: '#2A1505', marginBottom: '18px',
        }}>
          शुभ मुहूर्त
        </motion.h2>

        <motion.div variants={fadeUp} style={{ marginBottom: '20px' }}>
          <OrnamentalDivider />
        </motion.div>

        {/* Hindi couplet */}
        <motion.div variants={fadeUp} style={{
          background: 'rgba(255,255,255,0.48)',
          borderRadius: '12px',
          border: `1px solid ${GOLD}22`,
          padding: '18px 20px',
          marginBottom: '20px',
        }}>
          <p style={{
            fontFamily: 'Noto Serif Devanagari, serif',
            fontSize: '17px', fontWeight: 400,
            color: '#3A1A00', lineHeight: 2.1,
          }}>
            मंगल घड़ी अब निकट है आई,<br />
            शुभ तिथि की बेला मुस्कुराई।
          </p>
        </motion.div>

        {/* scratch → countdown */}
        <motion.div variants={fadeUp}>
          <AnimatePresence mode="wait">
            {!revealed ? (
              <motion.div
                key="scratch"
                exit={{ opacity: 0, scale: 0.92, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <ScratchCanvas onRevealed={() => setRevealed(true)} />
              </motion.div>
            ) : (
              <motion.div
                key="revealed"
                initial={{ opacity: 0, scale: 0.88, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                {/* date card */}
                <div style={{
                  background: 'rgba(255,255,255,0.62)',
                  borderRadius: '14px',
                  border: `1px solid ${GOLD}30`,
                  padding: '20px 24px',
                  marginBottom: '16px',
                }}>
                  <p style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '52px', fontWeight: 300,
                    color: GOLD, lineHeight: 1, marginBottom: '4px',
                  }}>30</p>
                  <p style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '22px', fontWeight: 400,
                    color: '#5A3010', letterSpacing: '5px',
                    textTransform: 'uppercase', marginBottom: '2px',
                  }}>November</p>
                  <p style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 300, fontSize: '14px',
                    color: '#9A7050', letterSpacing: '3px',
                  }}>2026</p>
                </div>

                <p style={{
                  fontFamily: 'Noto Serif Devanagari, serif',
                  fontSize: '14px', color: '#7A5030',
                  marginBottom: '12px', opacity: 0.75,
                }}>
                  विवाह तक शेष समय
                </p>

                <div style={{ display: 'flex', gap: '8px', marginBottom: '4px' }}>
                  <CountBox value={days}    hindiLabel="दिन"   label="Days" />
                  <CountBox value={hours}   hindiLabel="घंटे"  label="Hours" />
                  <CountBox value={minutes} hindiLabel="मिनट"  label="Min" />
                  <CountBox value={seconds} hindiLabel="सेकंड" label="Sec" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div variants={fadeUp} style={{ marginTop: '18px', marginBottom: '14px' }}>
          <OrnamentalDivider />
        </motion.div>

        <motion.p variants={fadeUp} style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 300, fontSize: '12px',
          color: '#9A7050', letterSpacing: '1px',
        }}>
          📍 Sky Blue Resort, Patna
        </motion.p>
      </motion.div>
    </section>
  )
}
