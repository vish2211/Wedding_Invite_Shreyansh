import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../animations'
import { OrnamentalDivider } from './Ornaments'

// Deep warm earth — dramatic contrast after 4 parchment screens
const DARK_BG = [
  'radial-gradient(ellipse at 22% 18%, rgba(88,40,12,0.90) 0%, transparent 55%)',
  'radial-gradient(ellipse at 78% 82%, rgba(44,16,4,0.98) 0%, transparent 55%)',
  '#160804',
].join(', ')

const GOLD_LIGHT = 'rgba(245,215,130,0.90)'
const GOLD_DIM = 'rgba(245,215,130,0.50)'
const TEXT_MUTED = 'rgba(220,198,168,0.60)'

function VenueCard({ name, hindiTag, address, maps, accent }) {
  return (
    <motion.div
      variants={fadeUp}
      style={{
        background: 'rgba(255,255,255,0.06)',
        borderRadius: '12px',
        border: `1px solid ${accent}30`,
        padding: '18px 20px',
        marginBottom: '14px',
        textAlign: 'left',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '10px' }}>
        <span style={{ fontSize: '22px', marginTop: '1px' }}>📍</span>
        <div>
          <p style={{
            fontFamily: 'Laila, serif',
            fontSize: '18px', fontWeight: 400,
            color: GOLD_LIGHT, lineHeight: 1.25, marginBottom: '3px',
          }}>{name}</p>
          <p style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '13px', color: TEXT_MUTED, lineHeight: 1.45,
          }}>{address}</p>
        </div>
      </div>

      {hindiTag && (
        <p style={{
          fontFamily: 'Laila, serif',
          fontSize: '12px', color: accent, opacity: 0.80,
          marginBottom: '12px', letterSpacing: '1px',
        }}>{hindiTag}</p>
      )}

      <a
        href={maps}
        target="_blank" rel="noopener noreferrer"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          padding: '8px 16px',
          background: `${accent}28`,
          border: `1px solid ${accent}50`,
          color: accent,
          borderRadius: '4px',
          fontFamily: 'Playfair Display, serif',
          fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase',
          textDecoration: 'none',
        }}
      >
        Get Directions →
      </a>
    </motion.div>
  )
}

export default function Screen11_Venue() {
  return (
    <section style={{
      minHeight: '100svh',
      background: DARK_BG,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '70px 28px',
      position: 'relative', overflow: 'hidden',
      textAlign: 'center',
    }}>
      {/* subtle top/bottom border lines */}
      <div style={{
        position: 'absolute', top: 14, left: 14, right: 14,
        height: '1px', background: 'rgba(245,215,130,0.18)',
      }} />
      <div style={{
        position: 'absolute', bottom: 14, left: 14, right: 14,
        height: '1px', background: 'rgba(245,215,130,0.18)',
      }} />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '360px' }}
      >
        <motion.p variants={fadeUp} style={{
          fontFamily: 'Playfair Display, serif',
          fontStyle: 'italic', fontSize: '11px',
          letterSpacing: '6px', textTransform: 'uppercase',
          color: GOLD_DIM, marginBottom: '8px',
        }}>
          Venue Details
        </motion.p>

        <motion.h2 variants={fadeUp} style={{
          fontFamily: 'Laila, serif',
          fontSize: '34px', fontWeight: 400,
          color: GOLD_LIGHT, marginBottom: '6px',
        }}>
          स्थान
        </motion.h2>

        <motion.div variants={fadeUp} style={{ marginBottom: '24px' }}>
          <OrnamentalDivider color="rgba(245,215,130,0.45)" />
        </motion.div>

        {/* Haldi & Mehendi venue */}
        <motion.p variants={fadeUp} style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '11px', letterSpacing: '4px',
          textTransform: 'uppercase',
          color: 'rgba(255,215,100,0.55)',
          textAlign: 'left', marginBottom: '8px',
        }}>
          हल्दी · मेहंदी
        </motion.p>

        <VenueCard
          name="Bihar Stay"
          hindiTag="हल्दी · मेहंदी — २९ नवंबर"
          address="Opposite S. Raza Girls High School, Patna, Bihar"
          maps="https://maps.google.com/?q=S+Raza+Girls+High+School+Patna"
          accent="rgba(255,215,100,0.80)"
        />

        {/* Wedding venue */}
        <motion.p variants={fadeUp} style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '11px', letterSpacing: '4px',
          textTransform: 'uppercase',
          color: 'rgba(245,175,170,0.55)',
          textAlign: 'left', marginBottom: '8px',
        }}>
          शुभ विवाह · भोज
        </motion.p>

        <VenueCard
          name="Sky Blue Resort"
          hindiTag="शुभ विवाह · विवाह भोज — ३० नवंबर"
          address="Patna, Bihar"
          maps="https://maps.google.com/?q=Sky+Blue+Resort+Patna"
          accent="rgba(245,175,170,0.85)"
        />

        <motion.div variants={fadeUp} style={{ marginTop: '10px' }}>
          <OrnamentalDivider color="rgba(245,215,130,0.30)" />
        </motion.div>
      </motion.div>
    </section>
  )
}
