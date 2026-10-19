import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../animations'

const WC  = '#5A0A1A'
const WCL = '#9A2040'

export default function Screen9_Wedding() {
  return (
    <section style={{
      minHeight: '100svh',
      background: '#FDF0F2',
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* ── Title at top ── */}
      <div style={{ padding: '24px 24px 14px', textAlign: 'left' }}>
        <p style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 300, fontSize: '10px',
          letterSpacing: '5px', textTransform: 'uppercase',
          color: WCL, marginBottom: '4px',
        }}></p>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '48px', fontWeight: 300,
          lineHeight: 0.9, margin: 0,
          color: WC, letterSpacing: '4px',
          textTransform: 'uppercase',
        }}>Vivah Utsav</h2>
      </div>

      {/* ── Hero image ── */}
      <div style={{ position: 'relative', flexShrink: 0, height: '44vh', overflow: 'hidden' }}>
        <img
          src="/vivah-real.jpg"
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 22%',
          }}
          alt=""
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(253,240,242,0.28) 0%, transparent 30%, rgba(30,4,10,0.30) 100%)',
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
          color: WCL, lineHeight: 1.6,
          marginBottom: '6px',
        }}>
          A grand celebration of two souls<br />becoming one, forever
        </motion.p>

        <motion.div variants={fadeUp} style={{ width: '44px', height: '1px', background: WCL, marginBottom: '6px' }} />

        {[
          { icon: '📅', label: 'Date',            text: '30 November 2026' },
          { icon: '🚗', label: 'Barat Departure', text: '1:00 PM\nFrom Our Residence, Gopalganj' },
          { icon: '🏨', label: 'Janvasa',          text: 'Hotel Surya Inn\nTribhuvan More, Patna' },
          { icon: '💐', label: 'Jaymala Ceremony', text: '9:30 PM onwards' },
          { icon: '📍', label: 'Venue',            text: 'Sky Blue Resort, Patna' },
        ].map(({ icon, label, text }) => (
          <motion.div key={label} variants={fadeUp} style={{
            display: 'flex', alignItems: 'flex-start', gap: '12px',
            background: 'rgba(250,220,225,0.65)',
            borderRadius: '10px', padding: '10px 14px',
            border: '1px solid rgba(154,32,64,0.13)',
          }}>
            <span style={{ fontSize: '15px', marginTop: '2px', flexShrink: 0 }}>{icon}</span>
            <div>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500, fontSize: '9px',
                letterSpacing: '2px', textTransform: 'uppercase',
                color: WC, marginBottom: '2px',
              }}>{label}</p>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400, fontSize: '13px',
                color: '#2A0508', lineHeight: 1.55,
              whiteSpace: 'pre-line',
              }}>{text}</p>
            </div>
          </motion.div>
        ))}

      </motion.div>
    </section>
  )
}
