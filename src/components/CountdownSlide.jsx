import { motion } from 'framer-motion'
import { useCountdown } from '../hooks/useCountdown'
import { fadeUp, stagger } from '../animations'

function CountBox({ value, label }) {
  return (
    <div style={{ textAlign: 'center', flex: 1 }}>
      <motion.div
        key={value}
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.28 }}
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '46px', fontWeight: 600, lineHeight: 1,
          background: 'linear-gradient(180deg, #f5d478, #c4841a)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {String(value ?? 0).padStart(2, '0')}
      </motion.div>
      <div style={{
        fontFamily: 'Laila, serif',
        fontSize: '9px', letterSpacing: '1px',
        color: 'rgba(245,228,192,0.7)', marginTop: '5px',
      }}>
        {label}
      </div>
    </div>
  )
}

export default function CountdownSlide() {
  const { days, hours, minutes, seconds } = useCountdown('2026-11-30')

  return (
    <section style={{ position: 'relative', height: '100svh', overflow: 'hidden' }}>
      <img
        src="/couple2.jpg"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
          filter: 'brightness(0.38) saturate(0.9)',
        }}
        alt=""
      />

      {/* warm amber overlay — not dark red */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(160deg, rgba(100,55,8,0.55) 0%, rgba(60,25,3,0.45) 100%)',
      }} />

      <div style={{
        position: 'relative', zIndex: 2,
        height: '100%', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '0 24px', textAlign: 'center',
      }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p variants={fadeUp} style={{
            fontFamily: 'Laila, serif',
            fontSize: '24px', color: 'rgba(245,210,100,0.9)',
            marginBottom: '4px',
          }}>
            शुभ मुहूर्त
          </motion.p>

          <motion.p variants={fadeUp} style={{
            fontFamily: 'Playfair Display, serif',
            fontStyle: 'italic', fontSize: '14px',
            color: 'rgba(245,228,192,0.55)',
            letterSpacing: '4px', textTransform: 'uppercase',
            marginBottom: '32px',
          }}>
            The Auspicious Moment
          </motion.p>

          {/* countdown box — parchment tinted */}
          <motion.div variants={fadeUp} style={{
            display: 'flex', gap: '6px',
            background: 'rgba(245,228,192,0.12)',
            backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '14px', padding: '26px 16px',
            border: '1px solid rgba(245,208,96,0.3)',
          }}>
            <CountBox value={days} label="दिन / Days" />
            <div style={{ color: 'rgba(245,208,96,0.4)', fontFamily: 'Playfair Display, serif', fontSize: '32px', alignSelf: 'center' }}>:</div>
            <CountBox value={hours} label="घंटे / Hrs" />
            <div style={{ color: 'rgba(245,208,96,0.4)', fontFamily: 'Playfair Display, serif', fontSize: '32px', alignSelf: 'center' }}>:</div>
            <CountBox value={minutes} label="मिनट / Min" />
            <div style={{ color: 'rgba(245,208,96,0.4)', fontFamily: 'Playfair Display, serif', fontSize: '32px', alignSelf: 'center' }}>:</div>
            <CountBox value={seconds} label="सेकंड / Sec" />
          </motion.div>

          <motion.p variants={fadeUp} style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '16px', letterSpacing: '3px',
            color: 'rgba(245,210,100,0.65)', marginTop: '28px',
          }}>
            30 November 2026
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
