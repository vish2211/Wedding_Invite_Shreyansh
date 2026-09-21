import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../animations'

const BG = [
  'radial-gradient(ellipse at 18% 12%, rgba(140,20,40,0.90) 0%, transparent 48%)',
  'radial-gradient(ellipse at 82% 88%, rgba(80,8,22,0.95) 0%, transparent 48%)',
  'radial-gradient(ellipse at 50% 50%, rgba(100,10,28,0.40) 0%, transparent 70%)',
  '#3A0412',
].join(', ')

const GOLD     = 'rgba(232,192,96,1)'
const GOLD_DIM = 'rgba(232,192,96,0.45)'
const GOLD_LOW = 'rgba(232,192,96,0.22)'
const CREAM    = 'rgba(255,245,220,0.95)'
const CREAM_DIM= 'rgba(245,228,195,0.62)'

/* ── Lotus corner ornament ── */
function LotusCorner({ flip }) {
  const sx = flip === 'x' || flip === 'xy' ? -1 : 1
  const sy = flip === 'y' || flip === 'xy' ? -1 : 1
  return (
    <svg
      viewBox="0 0 76 76" fill="none"
      style={{ width: 76, height: 76, transform: `scale(${sx},${sy})` }}
    >
      {/* L-bracket border lines */}
      <path d="M1 45 L1 2 Q1 1 2 1 L45 1" stroke={GOLD_DIM} strokeWidth="1.2"/>
      <path d="M4 45 L4 5 Q4 4 5 4 L45 4" stroke={GOLD_LOW} strokeWidth="0.6"/>

      {/* diagonal vine */}
      <path d="M3 40 Q14 28 22 22 Q28 14 40 3" stroke="rgba(232,192,96,0.35)" strokeWidth="0.8" strokeLinecap="round"/>

      {/* lotus petals at (24,24) */}
      <path d="M24 24 Q18 16 20 9 Q25 16 24 24Z"  fill="rgba(232,192,96,0.58)"/>
      <path d="M24 24 Q16 18 9 20 Q16 25 24 24Z"   fill="rgba(232,192,96,0.58)"/>
      <path d="M24 24 Q30 16 38 17 Q31 23 24 24Z"  fill="rgba(232,192,96,0.42)"/>
      <path d="M24 24 Q16 30 17 38 Q23 31 24 24Z"  fill="rgba(232,192,96,0.42)"/>
      <path d="M24 24 Q29 29 28 36 Q23 30 24 24Z"  fill="rgba(232,192,96,0.30)"/>
      <path d="M24 24 Q29 19 36 20 Q29 25 24 24Z"  fill="rgba(232,192,96,0.30)"/>

      {/* lotus centre */}
      <circle cx="24" cy="24" r="4" stroke={GOLD_DIM} strokeWidth="0.9" fill="rgba(232,192,96,0.16)"/>
      <circle cx="24" cy="24" r="1.5" fill="rgba(232,192,96,0.55)"/>

      {/* decorative dots */}
      <circle cx="9"  cy="4"  r="1.2" fill="rgba(232,192,96,0.45)"/>
      <circle cx="4"  cy="9"  r="1.2" fill="rgba(232,192,96,0.45)"/>
      <circle cx="42" cy="7"  r="0.8" fill="rgba(232,192,96,0.30)"/>
      <circle cx="7"  cy="42" r="0.8" fill="rgba(232,192,96,0.30)"/>
    </svg>
  )
}

/* ── Gold heart divider ── */
function HeartDivider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', margin: '4px 0' }}>
      <div style={{ flex: 1, height: '1px', background: `linear-gradient(to right, transparent, ${GOLD_DIM})` }} />
      <span style={{ color: GOLD, fontSize: '13px', opacity: 0.75 }}>♥</span>
      <div style={{ flex: 1, height: '1px', background: `linear-gradient(to left, transparent, ${GOLD_DIM})` }} />
    </div>
  )
}

/* ── Bottom lotus ornament ── */
function BottomLotus() {
  return (
    <svg viewBox="0 0 100 55" fill="none" style={{ width: 100, height: 55 }}>
      {/* big centre petals */}
      <path d="M50 35 Q44 22 46 10 Q51 22 50 35Z" fill="rgba(232,192,96,0.55)"/>
      <path d="M50 35 Q56 22 54 10 Q49 22 50 35Z" fill="rgba(232,192,96,0.55)"/>
      {/* side petals */}
      <path d="M50 35 Q36 28 28 18 Q40 28 50 35Z" fill="rgba(232,192,96,0.42)"/>
      <path d="M50 35 Q64 28 72 18 Q60 28 50 35Z" fill="rgba(232,192,96,0.42)"/>
      <path d="M50 35 Q32 34 22 26 Q36 32 50 35Z" fill="rgba(232,192,96,0.28)"/>
      <path d="M50 35 Q68 34 78 26 Q64 32 50 35Z" fill="rgba(232,192,96,0.28)"/>
      {/* leaves / water lines */}
      <path d="M50 35 Q40 40 28 44" stroke="rgba(232,192,96,0.40)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M50 35 Q60 40 72 44" stroke="rgba(232,192,96,0.40)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      {/* centre */}
      <circle cx="50" cy="35" r="5"   stroke={GOLD_DIM} strokeWidth="1" fill="rgba(232,192,96,0.18)"/>
      <circle cx="50" cy="35" r="2.2" fill="rgba(232,192,96,0.60)"/>
    </svg>
  )
}

const poem = (
  <>
    खुशियों के इस अवसर पर,<br />
    अपनेपन की यही आस है।<br />
    <br />
    विशाखा और श्रेयांश के इस शुभ मिलन में,<br />
    आपका साथ हमारे लिए सबसे खास है।
  </>
)

export default function Screen5_FamilyInvitation() {
  return (
    <section style={{
      minHeight: '100svh',
      background: BG,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center',
      padding: '56px 20px 52px',
      position: 'relative', overflow: 'hidden',
      textAlign: 'center',
    }}>
      {/* ── gold border ── */}
      <div style={{ position: 'absolute', top: 10, left: 10, right: 10, bottom: 10, border: `1px solid ${GOLD_DIM}`, borderRadius: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 14, left: 14, right: 14, bottom: 14, border: `0.5px solid ${GOLD_LOW}`, borderRadius: 2, pointerEvents: 'none' }} />

      {/* ── lotus corners ── */}
      <div style={{ position: 'absolute', top: 8,  left: 8  }}><LotusCorner /></div>
      <div style={{ position: 'absolute', top: 8,  right: 8, transform: 'translateX(0)' }}><LotusCorner flip="x" /></div>
      <div style={{ position: 'absolute', bottom: 8, left: 8  }}><LotusCorner flip="y" /></div>
      <div style={{ position: 'absolute', bottom: 8, right: 8 }}><LotusCorner flip="xy" /></div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '380px' }}
      >
        {/* WITH GRATITUDE */}
        <motion.p variants={fadeUp} style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 400, fontSize: '12px',
          letterSpacing: '6px', textTransform: 'uppercase',
          color: GOLD_DIM, marginBottom: '8px',
        }}>
          With Gratitude
        </motion.p>

        {/* सप्रेम आमंत्रण */}
        <motion.h2 variants={fadeUp} style={{
          fontFamily: 'Laila, serif',
          fontSize: '34px', fontWeight: 500,
          color: CREAM, marginBottom: '16px',
          textShadow: '0 2px 16px rgba(232,192,96,0.20)',
        }}>
          सप्रेम आमंत्रण
        </motion.h2>

        {/* gold rule */}
        <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', marginBottom: '18px' }}>
          <div style={{ flex: 1, height: '1px', background: `linear-gradient(to right, transparent, ${GOLD_DIM})` }} />
          <span style={{ color: GOLD, fontSize: '11px', opacity: 0.70 }}>✦</span>
          <div style={{ flex: 1, height: '1px', background: `linear-gradient(to left, transparent, ${GOLD_DIM})` }} />
        </motion.div>

        {/* opening poem */}
        <motion.p variants={fadeUp} style={{
          fontFamily: 'Laila, serif',
          fontSize: '15px', fontWeight: 400,
          color: CREAM, lineHeight: 2.0,
          marginBottom: '20px',
        }}>
          {poem}
        </motion.p>

        {/* ── two family panels ── */}
        <motion.div variants={fadeUp} style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>

          {/* वधू पक्ष */}
          <div style={{
            flex: 1,
            background: 'rgba(100,8,25,0.55)',
            backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
            border: `1px solid rgba(232,192,96,0.35)`,
            borderRadius: '10px',
            padding: '14px 10px',
          }}>
            <p style={{
              fontFamily: 'Laila, serif',
              fontSize: '14px', fontWeight: 600,
              color: GOLD, marginBottom: '10px',
              letterSpacing: '1px',
            }}>❖ वधू पक्ष ❖</p>
            <div style={{ height: '0.5px', background: 'rgba(232,192,96,0.35)', marginBottom: '10px' }} />
            {[
              'सचिन्द्र कुमार मिश्रा',
              'एवं बन्दना मिश्रा',
              'कोमल नंदिनी',
              'एवं समस्त मिश्रा परिवार',
            ].map((line, i) => (
              <p key={i} style={{
                fontFamily: 'Laila, serif',
                fontSize: i === 3 ? '13px' : '12.5px',
                fontWeight: i === 3 ? 500 : 400,
                color: CREAM,
                lineHeight: 1.85,
                fontStyle: 'italic',
              }}>{line}</p>
            ))}
          </div>

          {/* वर पक्ष */}
          <div style={{
            flex: 1,
            background: 'rgba(100,8,25,0.55)',
            backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
            border: `1px solid rgba(232,192,96,0.35)`,
            borderRadius: '10px',
            padding: '14px 10px',
          }}>
            <p style={{
              fontFamily: 'Laila, serif',
              fontSize: '14px', fontWeight: 600,
              color: GOLD, marginBottom: '10px',
              letterSpacing: '1px',
            }}>❖ वर पक्ष ❖</p>
            <div style={{ height: '0.5px', background: 'rgba(232,192,96,0.35)', marginBottom: '10px' }} />
            {[
              'सुबोध नारायण झा',
              'एवं रंजु झा',
              'प्रिय झा एवं बलराज झा',
              'मोहिनी झा',
              'एवं अपूर्व प्रतीक',
              'श्रद्धा सुमन',
              'एवं सृष्टि सुमन',
              'एवं समस्त झा परिवार',
            ].map((line, i) => (
              <p key={i} style={{
                fontFamily: 'Laila, serif',
                fontSize: i === 7 ? '13px' : '12.5px',
                fontWeight: i === 7 ? 500 : 400,
                color: CREAM,
                lineHeight: 1.85,
                fontStyle: 'italic',
              }}>{line}</p>
            ))}
          </div>
        </motion.div>

        {/* heart divider */}
        <motion.div variants={fadeUp} style={{ marginBottom: '16px' }}>
          <HeartDivider />
        </motion.div>

        {/* closing poem */}
        <motion.p variants={fadeUp} style={{
          fontFamily: 'Laila, serif',
          fontSize: '14px', fontWeight: 400,
          color: CREAM, lineHeight: 2.0,
          marginBottom: '20px',
        }}>
          
        </motion.p>

        {/* Vishakha | Shreyansh */}
        <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', marginBottom: '4px' }}>
          <div style={{ flex: 1, height: '1px', background: `linear-gradient(to right, transparent, ${GOLD_DIM})` }} />
          <span style={{ fontFamily: 'Great Vibes, cursive', fontSize: '30px', color: GOLD }}>
            Vishakha &nbsp; & &nbsp; Shreyansh
          </span>
          <div style={{ flex: 1, height: '1px', background: `linear-gradient(to left, transparent, ${GOLD_DIM})` }} />
        </motion.div>

        <motion.p variants={fadeUp} style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 400, fontSize: '12px',
          letterSpacing: '5px', textTransform: 'uppercase',
          color: CREAM_DIM, marginBottom: '18px',
        }}>
          Together Always
        </motion.p>

        {/* bottom lotus */}
        <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center', opacity: 0.75 }}>
          <BottomLotus />
        </motion.div>
      </motion.div>
    </section>
  )
}
