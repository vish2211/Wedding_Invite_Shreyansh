import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../animations'

const BG = [
  'radial-gradient(ellipse at 20% 10%, rgba(140,18,38,0.92) 0%, transparent 48%)',
  'radial-gradient(ellipse at 80% 90%, rgba(75,6,20,0.96) 0%, transparent 48%)',
  'radial-gradient(ellipse at 50% 48%, rgba(105,8,25,0.45) 0%, transparent 68%)',
  '#380410',
].join(', ')

const GOLD     = 'rgba(232,192,96,1)'
const GOLD_DIM = 'rgba(232,192,96,0.48)'
const GOLD_LOW = 'rgba(232,192,96,0.20)'
const CREAM    = 'rgba(255,245,220,0.94)'
const CREAM_DIM= 'rgba(240,220,185,0.58)'

/* ── Lotus corner ornament ── */
function LotusCorner({ flip }) {
  const sx = flip === 'x' || flip === 'xy' ? -1 : 1
  const sy = flip === 'y' || flip === 'xy' ? -1 : 1
  return (
    <svg viewBox="0 0 76 76" fill="none" style={{ width: 76, height: 76, transform: `scale(${sx},${sy})` }}>
      <path d="M1 45 L1 2 Q1 1 2 1 L45 1"   stroke={GOLD_DIM} strokeWidth="1.2"/>
      <path d="M4 45 L4 5 Q4 4 5 4 L45 4"   stroke={GOLD_LOW} strokeWidth="0.6"/>
      <path d="M3 40 Q14 28 22 22 Q28 14 40 3" stroke="rgba(232,192,96,0.32)" strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M24 24 Q18 16 20 9  Q25 16 24 24Z" fill="rgba(232,192,96,0.56)"/>
      <path d="M24 24 Q16 18 9 20  Q16 25 24 24Z" fill="rgba(232,192,96,0.56)"/>
      <path d="M24 24 Q30 16 38 17 Q31 23 24 24Z" fill="rgba(232,192,96,0.40)"/>
      <path d="M24 24 Q16 30 17 38 Q23 31 24 24Z" fill="rgba(232,192,96,0.40)"/>
      <path d="M24 24 Q29 29 28 36 Q23 30 24 24Z" fill="rgba(232,192,96,0.28)"/>
      <path d="M24 24 Q19 29 18 36 Q23 29 24 24Z" fill="rgba(232,192,96,0.28)"/>
      <circle cx="24" cy="24" r="4"   stroke={GOLD_DIM} strokeWidth="0.9" fill="rgba(232,192,96,0.14)"/>
      <circle cx="24" cy="24" r="1.6" fill="rgba(232,192,96,0.60)"/>
      <circle cx="9"  cy="4"  r="1.2" fill="rgba(232,192,96,0.42)"/>
      <circle cx="4"  cy="9"  r="1.2" fill="rgba(232,192,96,0.42)"/>
      <circle cx="43" cy="7"  r="0.8" fill="rgba(232,192,96,0.28)"/>
      <circle cx="7"  cy="43" r="0.8" fill="rgba(232,192,96,0.28)"/>
    </svg>
  )
}

/* ── Top lotus ornament ── */
function TopLotus() {
  return (
    <svg viewBox="0 0 80 50" fill="none" style={{ width: 80, height: 50 }}>
      <path d="M40 38 Q34 26 36 14 Q41 24 40 38Z" fill="rgba(232,192,96,0.60)"/>
      <path d="M40 38 Q46 26 44 14 Q39 24 40 38Z" fill="rgba(232,192,96,0.60)"/>
      <path d="M40 38 Q28 30 22 20 Q34 28 40 38Z" fill="rgba(232,192,96,0.45)"/>
      <path d="M40 38 Q52 30 58 20 Q46 28 40 38Z" fill="rgba(232,192,96,0.45)"/>
      <path d="M40 38 Q24 36 16 26 Q32 34 40 38Z" fill="rgba(232,192,96,0.30)"/>
      <path d="M40 38 Q56 36 64 26 Q48 34 40 38Z" fill="rgba(232,192,96,0.30)"/>
      <path d="M40 38 Q30 43 18 46" stroke="rgba(232,192,96,0.38)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M40 38 Q50 43 62 46" stroke="rgba(232,192,96,0.38)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <circle cx="40" cy="38" r="5"   stroke={GOLD_DIM} strokeWidth="0.9" fill="rgba(232,192,96,0.16)"/>
      <circle cx="40" cy="38" r="2.2" fill="rgba(232,192,96,0.65)"/>
    </svg>
  )
}

/* ── Gold rule divider ── */
function GoldRule({ symbol = '❦' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
      <div style={{ flex: 1, height: '0.5px', background: `linear-gradient(to right, transparent, ${GOLD_DIM})` }} />
      <span style={{ color: GOLD, fontSize: '13px', letterSpacing: '8px', opacity: 0.70 }}>{symbol}</span>
      <div style={{ flex: 1, height: '0.5px', background: `linear-gradient(to left, transparent, ${GOLD_DIM})` }} />
    </div>
  )
}

export default function Screen12_FamilyBlessings() {
  return (
    <section style={{
      minHeight: '100svh',
      background: BG,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '60px 26px 56px',
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
        viewport={{ once: true, margin: '-40px' }}
        style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '360px' }}
      >
        {/* top lotus */}
        <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px', opacity: 0.80 }}>
          <TopLotus />
        </motion.div>

        {/* मंगलकामना */}
        <motion.h1 variants={fadeUp} style={{
          fontFamily: 'Laila, serif',
          fontSize: '36px', fontWeight: 600,
          color: GOLD,
          letterSpacing: '2px',
          marginBottom: '14px',
          textShadow: '0 0 28px rgba(232,192,96,0.35)',
        }}>
          मंगलकामना
        </motion.h1>

        {/* ❦ ❦ ❦ divider */}
        <motion.div variants={fadeUp} style={{ marginBottom: '18px' }}>
          <GoldRule symbol="❦  ❦  ❦" />
        </motion.div>

        {/* Sanskrit shloka */}
        <motion.p variants={fadeUp} style={{
          fontFamily: 'Laila, serif',
          fontSize: '15px', fontWeight: 400,
          color: CREAM, lineHeight: 2.2,
          marginBottom: '18px',
        }}>
          मंगलं भगवान विष्णुः मंगलं गरुड़ध्वजः।<br />
          मंगलं पुण्डरीकाक्षः मंगलाय तनो हरिः॥
        </motion.p>

        <motion.div variants={fadeUp} style={{ marginBottom: '18px' }}>
          <GoldRule />
        </motion.div>

        {/* blessing message */}
        <motion.p variants={fadeUp} style={{
          fontFamily: 'Laila, serif',
          fontSize: '14px', fontWeight: 400,
          color: CREAM, lineHeight: 2.1,
          marginBottom: '18px',
        }}>
          ईश्वर से हमारी प्रार्थना है कि<br />
          श्रेयांश एवं विशाखा का यह वैवाहिक जीवन<br />
          प्रेम, विश्वास, सौहार्द एवं सुख-समृद्धि से<br />
          सदैव परिपूर्ण रहे।
        </motion.p>

        <motion.div variants={fadeUp} style={{ marginBottom: '18px' }}>
          <GoldRule />
        </motion.div>

        {/* second blessing */}
        <motion.p variants={fadeUp} style={{
          fontFamily: 'Laila, serif',
          fontSize: '15px', fontWeight: 500,
          color: CREAM_DIM, lineHeight: 2.1,
          marginBottom: '18px',
        }}>
          नवजीवन की इस मंगल यात्रा में<br />
          श्रेयांश एवं विशाखा पर अपना स्नेह,<br />
          आशीर्वाद एवं शुभकामनाएँ बनाए रखें।
        </motion.p>

        <motion.div variants={fadeUp} style={{ marginBottom: '20px' }}>
          <GoldRule />
        </motion.div>

        {/* ❦ विशाखा ♥ श्रेयांश ❦ */}
        <motion.p variants={fadeUp} style={{
          fontFamily: 'Laila, serif',
          fontSize: '18px', fontWeight: 500,
          color: GOLD,
          letterSpacing: '2px',
          marginBottom: '8px',
          textShadow: '0 0 18px rgba(232,192,96,0.30)',
        }}>
          ❦ श्रेयांश ♥ विशाखा ❦
        </motion.p>

        {/* family names */}
        <motion.p variants={fadeUp} style={{
          fontFamily: 'Laila, serif',
          fontSize: '15px', fontWeight: 400,
          color: CREAM_DIM,
          letterSpacing: '1px',
          marginBottom: '20px',
        }}>
          झा परिवार एवं मिश्रा परिवार
        </motion.p>

        {/* ॥ शुभमस्तु ॥ */}
        <motion.p variants={fadeUp} style={{
          fontFamily: 'Laila, serif',
          fontSize: '22px', fontWeight: 600,
          color: GOLD,
          letterSpacing: '3px',
          textShadow: '0 0 24px rgba(232,192,96,0.40)',
        }}>
          ॥ शुभमस्तु ॥
        </motion.p>
      </motion.div>
    </section>
  )
}
