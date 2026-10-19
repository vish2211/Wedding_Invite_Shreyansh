import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../animations'
import FlowerCorner from './FlowerCorner'

export default function FinalSlide() {
  return (
    <section style={{
      minHeight: '100svh',
      background: '#2E1005',
      backgroundImage: `
        radial-gradient(ellipse at 0% 0%, rgba(90,45,10,0.8) 0%, transparent 50%),
        radial-gradient(ellipse at 100% 100%, rgba(60,25,5,0.8) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(100,55,15,0.4) 0%, transparent 60%)
      `,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '60px 28px', textAlign: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* subtle parchment dot texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(245,210,130,0.08) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }} />

      {/* flower corners — gold tint on dark bg */}
      <FlowerCorner top={8}  left={8}  petalColor="#C4841A" leafColor="#7A6030" size={80} />
      <FlowerCorner top={8}  right={8} petalColor="#C4841A" leafColor="#7A6030" size={80} />
      <FlowerCorner bottom={8} left={8}  petalColor="#C4841A" leafColor="#7A6030" size={80} />
      <FlowerCorner bottom={8} right={8} petalColor="#C4841A" leafColor="#7A6030" size={80} />

      <div style={{
        position: 'absolute', top: 14, left: 14, right: 14, bottom: 14,
        border: '1px solid rgba(196,132,26,0.25)',
        pointerEvents: 'none',
      }} />

      {/* radial gold glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(196,132,26,0.16) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <motion.div variants={fadeUp}>
          <img
            src="/envelope.png"
            style={{
              width: '76px', height: '76px', objectFit: 'contain',
              borderRadius: '50%', marginBottom: '18px',
              filter: 'drop-shadow(0 4px 16px rgba(196,132,26,0.3))',
            }}
            alt=""
          />
        </motion.div>

        <motion.p variants={fadeUp} style={{
          fontFamily: 'Laila, serif',
          fontSize: '20px', color: 'rgba(245,210,100,0.88)',
          marginBottom: '4px',
        }}>
          आशीर्वाद दें
        </motion.p>

        <motion.p variants={fadeUp} style={{
          fontFamily: 'Playfair Display, serif',
          fontStyle: 'italic', fontSize: '12px',
          letterSpacing: '4px', textTransform: 'uppercase',
          color: 'rgba(245,228,192,0.4)', marginBottom: '22px',
        }}>
          Bless us with your presence
        </motion.p>

        <motion.h2 variants={fadeUp} style={{
          fontFamily: 'Pinyon Script, cursive',
          fontSize: '58px',
          background: 'linear-gradient(90deg, #7a3800, #c4841a, #f5d060, #c4841a, #7a3800)',
          backgroundSize: '200%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '18px', lineHeight: 1.2,
        }}>
          See you there!
        </motion.h2>

        <motion.div variants={fadeUp} style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          justifyContent: 'center', marginBottom: '24px',
        }}>
          <div style={{ height: '1px', width: '36px', background: 'linear-gradient(90deg, transparent, rgba(196,132,26,0.6))' }} />
          <span style={{ color: 'rgba(196,132,26,0.55)', fontSize: '11px', letterSpacing: '6px' }}>✦ ✦ ✦</span>
          <div style={{ height: '1px', width: '36px', background: 'linear-gradient(270deg, transparent, rgba(196,132,26,0.6))' }} />
        </motion.div>

        <motion.p variants={fadeUp} style={{
          fontFamily: 'EB Garamond, serif',
          fontSize: '16px', lineHeight: 1.8,
          color: 'rgba(245,228,192,0.5)',
          maxWidth: '300px', margin: '0 auto 32px',
        }}>
          Your blessings and presence are the greatest gift to us on this auspicious occasion.
        </motion.p>

        <motion.div variants={stagger} style={{
          display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center',
        }}>
          <motion.span variants={fadeUp} style={{
            fontFamily: 'Pinyon Script, cursive', fontSize: '36px', color: '#c4841a',
          }}>Vishakha</motion.span>
          <span style={{
            fontFamily: 'Laila, serif',
            color: 'rgba(196,132,26,0.4)', fontSize: '20px',
          }}>&amp;</span>
          <motion.span variants={fadeUp} style={{
            fontFamily: 'Pinyon Script, cursive', fontSize: '36px', color: '#c4841a',
          }}>Shreyansh</motion.span>
        </motion.div>

        <motion.p variants={fadeUp} style={{
          fontFamily: 'Laila, serif',
          fontSize: '11px', color: 'rgba(245,210,100,0.3)',
          marginTop: '36px', letterSpacing: '2px',
        }}>
          ३० नवंबर २०२६ • 30 November 2026
        </motion.p>
      </motion.div>
    </section>
  )
}
