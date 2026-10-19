import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../animations'

const MC  = '#1A4A3A'
const MCL = '#2A7A5A'

export default function Screen8_Mehendi() {
  return (
    <section style={{
      minHeight: '100svh',
      background: '#EBF5EE',
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* ── Title at top ── */}
      <div style={{ padding: '24px 24px 14px', textAlign: 'left' }}>
        <p style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 300, fontSize: '10px',
          letterSpacing: '5px', textTransform: 'uppercase',
          color: MCL, marginBottom: '4px',
        }}></p>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '42px', fontWeight: 300,
          lineHeight: 1.0, margin: 0,
          color: '#0A1E10', letterSpacing: '4px',
          textTransform: 'uppercase',
        }}>Rang-e-Ishq</h2>
      </div>

      {/* ── Hero image ── */}
      <div style={{ position: 'relative', flexShrink: 0, height: '44vh', overflow: 'hidden' }}>
        <img
          src="/mehendi-real.jpg"
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 50%',
          }}
          alt=""
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(235,245,238,0.28) 0%, transparent 30%, rgba(8,22,14,0.28) 100%)',
        }} />
      </div>

      {/* ── Details card ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-20px' }}
        style={{
          padding: '18px 20px 32px',
          display: 'flex', flexDirection: 'column', gap: '8px',
        }}
      >
        <motion.p variants={fadeUp} style={{
          fontFamily: 'Playfair Display, serif',
          fontStyle: 'italic', fontSize: '15px',
          color: '#1A5A3A', lineHeight: 1.6,
          marginBottom: '6px',
        }}>
          An evening of art, fragrance<br />and beautiful beginnings
        </motion.p>

        <motion.div variants={fadeUp} style={{ width: '44px', height: '1px', background: MCL, marginBottom: '6px' }} />

        {[
          { icon: '📅', label: 'Date',  text: '27 November 2026' },
          { icon: '🕓', label: 'Time',  text: '4:00 PM onwards' },
          { icon: '📍', label: 'Venue', text: 'At Our Residence\nGopalganj, Bihar' },
          { icon: '🥻', label: 'Dress', text: 'Ethnic Green' },
        ].map(({ icon, label, text }) => (
          <motion.div key={label} variants={fadeUp} style={{
            display: 'flex', alignItems: 'flex-start', gap: '12px',
            background: 'rgba(210,240,220,0.72)',
            borderRadius: '10px', padding: '10px 14px',
            border: '1px solid rgba(42,122,90,0.14)',
          }}>
            <span style={{ fontSize: '15px', marginTop: '2px', flexShrink: 0 }}>{icon}</span>
            <div>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500, fontSize: '9px',
                letterSpacing: '2px', textTransform: 'uppercase',
                color: MC, marginBottom: '2px',
              }}>{label}</p>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400, fontSize: '13px',
                color: '#0A1E10', lineHeight: 1.55,
                whiteSpace: 'pre-line',
              }}>{text}</p>
            </div>
          </motion.div>
        ))}

      </motion.div>
    </section>
  )
}
