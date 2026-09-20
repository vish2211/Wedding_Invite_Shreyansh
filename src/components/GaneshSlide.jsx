import { motion } from 'framer-motion'
import { fadeUp, scaleIn, stagger } from '../animations'

const BG = [
  'radial-gradient(ellipse at 20% 8%,  rgba(255,248,220,0.98) 0%, transparent 52%)',
  'radial-gradient(ellipse at 80% 92%, rgba(240,210,130,0.80) 0%, transparent 52%)',
  'radial-gradient(ellipse at 50% 50%, rgba(252,242,195,0.60) 0%, transparent 72%)',
  '#FAF0D0',
].join(', ')

const GOLD     = 'rgba(184,140,30,1)'
const GOLD_DIM = 'rgba(184,140,30,0.45)'
const GOLD_LOW = 'rgba(184,140,30,0.20)'
const SAFFRON  = '#C05810'
const DEEP     = '#3A1800'
const DEEP_MED = '#6A3010'

/* ── Lotus corner (warm gold on ivory) ── */
function LotusCorner({ flip }) {
  const sx = flip === 'x' || flip === 'xy' ? -1 : 1
  const sy = flip === 'y' || flip === 'xy' ? -1 : 1
  return (
    <svg viewBox="0 0 76 76" fill="none" style={{ width: 76, height: 76, transform: `scale(${sx},${sy})` }}>
      <path d="M1 45 L1 2 Q1 1 2 1 L45 1"    stroke={GOLD_DIM} strokeWidth="1.2"/>
      <path d="M4 45 L4 5 Q4 4 5 4 L45 4"    stroke={GOLD_LOW} strokeWidth="0.6"/>
      <path d="M3 40 Q14 28 22 22 Q28 14 40 3" stroke="rgba(184,140,30,0.28)" strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M24 24 Q18 16 20 9  Q25 16 24 24Z" fill="rgba(192,88,16,0.52)"/>
      <path d="M24 24 Q16 18 9 20  Q16 25 24 24Z" fill="rgba(192,88,16,0.52)"/>
      <path d="M24 24 Q30 16 38 17 Q31 23 24 24Z" fill="rgba(184,140,30,0.48)"/>
      <path d="M24 24 Q16 30 17 38 Q23 31 24 24Z" fill="rgba(184,140,30,0.48)"/>
      <path d="M24 24 Q29 29 28 36 Q23 30 24 24Z" fill="rgba(184,140,30,0.30)"/>
      <path d="M24 24 Q19 29 18 36 Q23 29 24 24Z" fill="rgba(184,140,30,0.30)"/>
      <circle cx="24" cy="24" r="4"   stroke={GOLD_DIM} strokeWidth="0.9" fill="rgba(252,220,120,0.30)"/>
      <circle cx="24" cy="24" r="1.6" fill="rgba(184,140,30,0.70)"/>
      <circle cx="9"  cy="4"  r="1.2" fill="rgba(184,140,30,0.40)"/>
      <circle cx="4"  cy="9"  r="1.2" fill="rgba(184,140,30,0.40)"/>
      <circle cx="43" cy="7"  r="0.8" fill="rgba(184,140,30,0.28)"/>
      <circle cx="7"  cy="43" r="0.8" fill="rgba(184,140,30,0.28)"/>
    </svg>
  )
}

/* ── Traditional swastik ── */
function Swastik() {
  return (
    <svg viewBox="0 0 36 36" fill="none" style={{ width: 32, height: 32 }}>
      {/* centre cross */}
      <rect x="15" y="6"  width="6" height="24" rx="1" fill="rgba(192,88,16,0.65)"/>
      <rect x="6"  y="15" width="24" height="6" rx="1" fill="rgba(192,88,16,0.65)"/>
      {/* four arms */}
      <rect x="21" y="6"  width="9" height="6" rx="1" fill="rgba(192,88,16,0.65)"/>
      <rect x="21" y="24" width="6" height="6" rx="1" fill="rgba(192,88,16,0.65)"/>
      <rect x="6"  y="21" width="6" height="9" rx="1" fill="rgba(192,88,16,0.65)"/>
      <rect x="24" y="15" width="6" height="6" rx="1" fill="rgba(192,88,16,0.65)"/>
      {/* outer border circle */}
      <circle cx="18" cy="18" r="16" stroke="rgba(184,140,30,0.35)" strokeWidth="0.8" fill="none"/>
    </svg>
  )
}

/* ── Gold-lotus divider ── */
function LotusRule() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}>
      <div style={{ flex: 1, height: '0.5px', background: `linear-gradient(to right, transparent, ${GOLD_DIM})` }} />
      {/* tiny inline lotus SVG */}
      <svg viewBox="0 0 40 22" fill="none" style={{ width: 40, height: 22, flexShrink: 0 }}>
        <path d="M20 16 Q16 10 17 4 Q21 10 20 16Z" fill="rgba(184,140,30,0.58)"/>
        <path d="M20 16 Q24 10 23 4 Q19 10 20 16Z" fill="rgba(184,140,30,0.58)"/>
        <path d="M20 16 Q12 13 8  7  Q15 12 20 16Z" fill="rgba(184,140,30,0.42)"/>
        <path d="M20 16 Q28 13 32 7  Q25 12 20 16Z" fill="rgba(184,140,30,0.42)"/>
        <path d="M20 16 Q8  16 4  11 Q14 15 20 16Z" fill="rgba(184,140,30,0.28)"/>
        <path d="M20 16 Q32 16 36 11 Q26 15 20 16Z" fill="rgba(184,140,30,0.28)"/>
        <circle cx="20" cy="16" r="2.5" stroke={GOLD_DIM} strokeWidth="0.7" fill="rgba(252,220,120,0.35)"/>
        <circle cx="20" cy="16" r="1"   fill="rgba(184,140,30,0.70)"/>
      </svg>
      <div style={{ flex: 1, height: '0.5px', background: `linear-gradient(to left, transparent, ${GOLD_DIM})` }} />
    </div>
  )
}

/* ── Bottom lotus ── */
function BottomLotus() {
  return (
    <svg viewBox="0 0 80 44" fill="none" style={{ width: 80, height: 44 }}>
      <path d="M40 32 Q34 22 36 12 Q41 22 40 32Z" fill="rgba(192,88,16,0.50)"/>
      <path d="M40 32 Q46 22 44 12 Q39 22 40 32Z" fill="rgba(192,88,16,0.50)"/>
      <path d="M40 32 Q28 26 22 16 Q34 24 40 32Z" fill="rgba(184,140,30,0.45)"/>
      <path d="M40 32 Q52 26 58 16 Q46 24 40 32Z" fill="rgba(184,140,30,0.45)"/>
      <path d="M40 32 Q24 30 16 22 Q32 28 40 32Z" fill="rgba(184,140,30,0.28)"/>
      <path d="M40 32 Q56 30 64 22 Q48 28 40 32Z" fill="rgba(184,140,30,0.28)"/>
      <path d="M40 32 Q30 37 18 40" stroke="rgba(184,140,30,0.35)" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <path d="M40 32 Q50 37 62 40" stroke="rgba(184,140,30,0.35)" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <circle cx="40" cy="32" r="4.5" stroke={GOLD_DIM} strokeWidth="0.8" fill="rgba(252,220,120,0.25)"/>
      <circle cx="40" cy="32" r="1.8" fill="rgba(184,140,30,0.65)"/>
    </svg>
  )
}

export default function GaneshSlide() {
  return (
    <section style={{
      minHeight: '100svh',
      background: BG,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '60px 26px 52px',
      position: 'relative', overflow: 'hidden',
      textAlign: 'center',
    }}>
      {/* gold border */}
      <div style={{ position: 'absolute', top: 10, left: 10, right: 10, bottom: 10, border: `1px solid ${GOLD_DIM}`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 14, left: 14, right: 14, bottom: 14, border: `0.5px solid ${GOLD_LOW}`, pointerEvents: 'none' }} />

      {/* lotus corners */}
      <div style={{ position: 'absolute', top: 8,  left: 8  }}><LotusCorner /></div>
      <div style={{ position: 'absolute', top: 8,  right: 8 }}><LotusCorner flip="x" /></div>
      <div style={{ position: 'absolute', bottom: 8, left: 8  }}><LotusCorner flip="y" /></div>
      <div style={{ position: 'absolute', bottom: 8, right: 8 }}><LotusCorner flip="xy" /></div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '340px' }}
      >
        {/* ✦  ॐ  ✦ */}
        <motion.p variants={fadeUp} style={{
          fontFamily: 'Noto Serif Devanagari, serif',
          fontSize: '22px', fontWeight: 400,
          color: GOLD, letterSpacing: '12px',
          marginBottom: '18px',
          textShadow: '0 0 20px rgba(184,140,30,0.30)',
        }}>
          ✦&nbsp;&nbsp;ॐ&nbsp;&nbsp;✦
        </motion.p>

        {/* Ganesha illustration in ivory frame */}
        <motion.div variants={scaleIn} style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: '18px',
          marginBottom: '18px',
        }}>
          {/* left swastik */}
          <Swastik />

          {/* framed Ganesha */}
          <div style={{
            width: '150px', height: '150px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 40% 38%, rgba(255,252,238,1) 0%, rgba(252,240,195,0.90) 100%)',
            border: `2px solid ${GOLD_DIM}`,
            boxShadow: [
              `0 0 0 5px rgba(184,140,30,0.10)`,
              `0 0 0 8px rgba(184,140,30,0.06)`,
              `0 0 36px rgba(192,88,16,0.22)`,
              `inset 0 0 24px rgba(252,220,120,0.18)`,
            ].join(', '),
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <img
              src="/ganesh.png"
              style={{
                width: '118px', height: '118px',
                objectFit: 'contain',
                filter: [
                  'drop-shadow(0 3px 12px rgba(192,88,16,0.40))',
                  'sepia(0.15)',
                  'saturate(1.1)',
                ].join(' '),
              }}
              alt="Shree Ganesh"
            />
          </div>

          {/* right swastik */}
          <Swastik />
        </motion.div>

        {/* ॥ श्री गणेशाय नमः ॥ */}
        <motion.p variants={fadeUp} style={{
          fontFamily: 'Noto Serif Devanagari, serif',
          fontSize: '20px', fontWeight: 500,
          color: DEEP, letterSpacing: '1px',
          marginBottom: '4px',
          textShadow: '0 1px 8px rgba(184,140,30,0.20)',
        }}>
          ॥ श्री गणेशाय नमः ॥
        </motion.p>

        <motion.p variants={fadeUp} style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic', fontSize: '11px',
          letterSpacing: '5px', textTransform: 'uppercase',
          color: SAFFRON, opacity: 0.70, marginBottom: '20px',
        }}>
          Shri Ganeshaya Namah
        </motion.p>

        {/* lotus-gold divider */}
        <motion.div variants={fadeUp} style={{ marginBottom: '20px' }}>
          <LotusRule />
        </motion.div>

        {/* Vakratunda shloka */}
        <motion.p variants={fadeUp} style={{
          fontFamily: 'Noto Serif Devanagari, serif',
          fontSize: '17px', fontWeight: 400,
          color: DEEP, lineHeight: 2.2,
          marginBottom: '18px',
        }}>
          वक्रतुण्ड महाकाय<br />
          सूर्यकोटि समप्रभः।<br />
          निर्विघ्नं कुरु मे देव<br />
          सर्वकार्येषु सर्वदा॥
        </motion.p>

        {/* thin divider */}
        <motion.div variants={fadeUp} style={{ marginBottom: '18px' }}>
          <LotusRule />
        </motion.div>

        {/* wedding jingle */}
        <motion.p variants={fadeUp} style={{
          fontFamily: 'Noto Serif Devanagari, serif',
          fontSize: '15px', fontWeight: 400,
          color: DEEP_MED, lineHeight: 2.1,
          marginBottom: '20px',
        }}>
          शुभ कार्य की यह मंगल बेला,<br />
          गणपति बप्पा का रहे सदा मेला।<br />
          <br />
          विघ्न-विनाशक की कृपा से,<br />
          हर कदम पर सुख का उजियाला॥
        </motion.p>

        {/* bottom divider */}
        <motion.div variants={fadeUp} style={{ marginBottom: '16px' }}>
          <LotusRule />
        </motion.div>

        {/* bottom lotus */}
        <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center', opacity: 0.72 }}>
          <BottomLotus />
        </motion.div>
      </motion.div>
    </section>
  )
}
