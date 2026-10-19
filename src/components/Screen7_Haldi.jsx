import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../animations'

const HC  = '#8A5200'
const HCL = '#C47A00'

export default function Screen7_Haldi() {
  return (
    <section style={{
      minHeight: '100svh',
      background: '#FBF0C8',
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* ── Title at top ── */}
      <div style={{ padding: '24px 24px 14px', textAlign: 'left' }}>
        <p style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 300, fontSize: '10px',
          letterSpacing: '5px', textTransform: 'uppercase',
          color: HCL, marginBottom: '4px',
        }}></p>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '42px', fontWeight: 300,
          lineHeight: 1.0, margin: 0,
          color: '#3A1A00', letterSpacing: '4px',
          textTransform: 'uppercase',
        }}>The Yellow Hour</h2>
      </div>

      {/* ── Hero image ── */}
      <div style={{ position: 'relative', flexShrink: 0, height: '44vh', overflow: 'hidden' }}>
        <img
          src="/haldi-real.jpg"
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 50%',
          }}
          alt=""
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(251,240,200,0.30) 0%, transparent 30%, rgba(20,8,0,0.28) 100%)',
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
          color: '#7A4A00', lineHeight: 1.6,
          marginBottom: '6px',
        }}>
          A joyful noon filled with love,<br />laughter and turmeric blessings
        </motion.p>

        <motion.div variants={fadeUp} style={{ width: '44px', height: '1px', background: HCL, marginBottom: '6px' }} />

        {[
          { icon: '📅', label: 'Date',  text: '29 November 2026' },
          { icon: '🕐', label: 'Time',  text: '12:00 PM onwards' },
          { icon: '📍', label: 'Venue', text: 'Bihar Stay, Patna\nOpp. S Raza Girls High School' },
          { icon: '🥻', label: 'Dress', text: 'Yellow / Mustard' },
        ].map(({ icon, label, text }) => (
          <motion.div key={label} variants={fadeUp} style={{
            display: 'flex', alignItems: 'flex-start', gap: '12px',
            background: 'rgba(255,245,195,0.80)',
            borderRadius: '10px', padding: '10px 14px',
            border: '1px solid rgba(180,120,0,0.14)',
          }}>
            <span style={{ fontSize: '15px', marginTop: '2px', flexShrink: 0 }}>{icon}</span>
            <div>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500, fontSize: '9px',
                letterSpacing: '2px', textTransform: 'uppercase',
                color: HC, marginBottom: '2px',
              }}>{label}</p>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400, fontSize: '13px',
                color: '#3A1A00', lineHeight: 1.55,
                whiteSpace: 'pre-line',
              }}>{text}</p>
            </div>
          </motion.div>
        ))}

        <motion.a
          variants={fadeUp}
          href="https://maps.google.com/?q=Bihar+Stay+Patna+Opp+S+Raza+Girls+High+School"
          target="_blank" rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            marginTop: '4px', padding: '12px 24px',
            background: HC, color: '#fff', borderRadius: '8px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500, fontSize: '11px',
            letterSpacing: '1.5px', textTransform: 'uppercase',
            textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(138,82,0,0.38)',
          }}
        >
          📍  View on Google Maps
        </motion.a>
      </motion.div>
    </section>
  )
}