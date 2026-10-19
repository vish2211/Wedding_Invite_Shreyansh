import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../animations'

const shimmer = {
  background: 'linear-gradient(135deg, #fff8d0 0%, #f5d770 40%, #fff8d0 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

function VSMonogram() {
  return (
    <div style={{
      width: '112px', height: '112px',
      borderRadius: '50%',
      border: '2px solid rgba(245,215,120,0.75)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(10,3,0,0.55)',
      boxShadow: '0 0 0 6px rgba(245,215,120,0.12), 0 0 44px rgba(245,215,120,0.30)',
    }}>
      <span style={{
        ...shimmer,
        fontFamily: 'Great Vibes, cursive',
        fontSize: '50px',
        lineHeight: 1,
        display: 'block',
        filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.8))',
      }}>SV</span>
    </div>
  )
}

export default function Screen2_Monogram() {
  return (
    <section style={{ position: 'relative', height: '100svh', overflow: 'hidden' }}>
      {/* couple background */}
      <img
        src="/couple.jpg"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 12%',
        }}
        alt=""
      />

      {/* base dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(10,2,0,0.78) 0%, rgba(6,1,0,0.50) 40%, rgba(10,2,0,0.88) 100%)',
      }} />

      {/* centered dark radial for text legibility */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 60% at 50% 42%, rgba(6,1,0,0.60) 0%, transparent 80%)',
      }} />

      {/* content */}
      <div style={{
        position: 'relative', zIndex: 2,
        height: '100%',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '60px 32px',
      }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          style={{ width: '100%', maxWidth: '310px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: '22px' }}>
            <VSMonogram />
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginBottom: '2px' }}>
            <span style={{
              ...shimmer,
              fontFamily: 'Great Vibes, cursive',
              fontSize: '58px', lineHeight: 1,
              display: 'block',
              filter: 'drop-shadow(0 3px 8px rgba(0,0,0,0.95))',
            }}>
              Shreyansh
            </span>
          </motion.div>

          <motion.p variants={fadeUp} style={{
            fontFamily: 'Great Vibes, cursive',
            fontSize: '32px',
            color: 'rgba(245,215,120,0.70)',
            margin: '0 0 2px',
            textShadow: '0 2px 8px rgba(0,0,0,0.9)',
          }}>
            &amp;
          </motion.p>

          <motion.div variants={fadeUp} style={{ marginBottom: '28px' }}>
            <span style={{
              ...shimmer,
              fontFamily: 'Great Vibes, cursive',
              fontSize: '58px', lineHeight: 1,
              display: 'block',
              filter: 'drop-shadow(0 3px 8px rgba(0,0,0,0.95))',
            }}>
              Vishakha
            </span>
          </motion.div>

          {/* scroll hint */}
          <motion.div
            animate={{ y: [0, 6, 0], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ color: 'rgba(245,215,120,0.75)', fontSize: '20px', lineHeight: 1 }}>↓</div>
            <p style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 300, fontSize: '10px',
              letterSpacing: '4px', textTransform: 'uppercase',
              color: 'rgba(245,215,120,0.55)', marginTop: '3px',
            }}>Scroll</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
