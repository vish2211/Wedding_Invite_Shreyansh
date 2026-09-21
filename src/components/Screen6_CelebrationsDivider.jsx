import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../animations'
import FlowerCorner from './FlowerCorner'
import { GoldBorder } from './Ornaments'
import { PARCHMENT, GOLD } from '../theme'

export default function Screen6_CelebrationsDivider() {
  return (
    <section style={{
      minHeight: '100svh',
      ...PARCHMENT,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '60px 32px',
      position: 'relative', overflow: 'hidden',
      textAlign: 'center',
    }}>
      <FlowerCorner top={8}  left={8}  petalColor="#D4A0B8" leafColor="#6A8A50" size={88} />
      <FlowerCorner top={8}  right={8} petalColor="#D4A0B8" leafColor="#6A8A50" size={88} />
      <FlowerCorner bottom={8} left={8}  petalColor="#D4A0B8" leafColor="#6A8A50" size={88} />
      <FlowerCorner bottom={8} right={8} petalColor="#D4A0B8" leafColor="#6A8A50" size={88} />
      <GoldBorder />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '320px' }}
      >
        {/* top divider */}
        <motion.div variants={fadeUp} style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          justifyContent: 'center', marginBottom: '32px',
        }}>
          <div style={{ height: '1px', flex: 1, background: `linear-gradient(90deg, transparent, ${GOLD}70)` }} />
          <span style={{ color: GOLD, fontSize: '18px', opacity: 0.65 }}>🪷</span>
          <div style={{ height: '1px', flex: 1, background: `linear-gradient(270deg, transparent, ${GOLD}70)` }} />
        </motion.div>

        {/* label */}
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: 'Playfair Display, serif',
            fontStyle: 'italic', fontSize: '12px',
            letterSpacing: '6px', textTransform: 'uppercase',
            color: GOLD, opacity: 0.55, marginBottom: '12px',
          }}
        >
          Celebrations
        </motion.p>

        {/* main heading */}
        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: 'Laila, serif',
            fontSize: '36px', fontWeight: 400,
            color: '#2A1505', lineHeight: 1.4,
            marginBottom: '14px',
          }}
        >
          मांगलिक कार्यक्रम
        </motion.h1>

        {/* lotus divider */}
        <motion.div variants={fadeUp} style={{
          display: 'flex', alignItems: 'center',
          gap: '8px', justifyContent: 'center',
          margin: '10px 0 30px',
        }}>
          <div style={{ height: '1px', flex: 1, background: `linear-gradient(90deg, transparent, ${GOLD}60)` }} />
          <span style={{ color: GOLD, fontSize: '12px', opacity: 0.65 }}>✦</span>
          <span style={{ color: GOLD, fontSize: '16px', opacity: 0.80 }}>❋</span>
          <span style={{ color: GOLD, fontSize: '22px', opacity: 0.70 }}>🪷</span>
          <span style={{ color: GOLD, fontSize: '16px', opacity: 0.80 }}>❋</span>
          <span style={{ color: GOLD, fontSize: '12px', opacity: 0.65 }}>✦</span>
          <div style={{ flex: 1, height: '1px', background: `linear-gradient(270deg, transparent, ${GOLD}60)` }} />
        </motion.div>

        {/* events list preview */}
        {[
          { hindi: 'हल्दी', date: '२९ नवंबर', time: 'प्रातः ११ बजे' },
          { hindi: 'मेहंदी', date: '२९ नवंबर', time: 'सायं ५ बजे' },
          { hindi: 'शुभ विवाह', date: '३० नवंबर', time: 'शुभ मुहूर्त' },
          { hindi: 'विवाह भोज', date: '३० नवंबर', time: 'सायं ७ बजे' },
        ].map((ev, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between',
              padding: '9px 16px',
              marginBottom: '8px',
              background: 'rgba(255,255,255,0.45)',
              borderRadius: '8px',
              border: `1px solid ${GOLD}22`,
            }}
          >
            <p style={{
              fontFamily: 'Laila, serif',
              fontSize: '16px', color: '#3A1505',
            }}>{ev.hindi}</p>
            <div style={{ textAlign: 'right' }}>
              <p style={{
                fontFamily: 'Laila, serif',
                fontSize: '12px', color: GOLD, opacity: 0.80,
              }}>{ev.date}</p>
              <p style={{
                fontFamily: 'Laila, serif',
                fontSize: '11px', color: '#9A7050',
              }}>{ev.time}</p>
            </div>
          </motion.div>
        ))}

        {/* bottom divider */}
        <motion.div variants={fadeUp} style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          justifyContent: 'center', marginTop: '24px',
        }}>
          <div style={{ height: '1px', flex: 1, background: `linear-gradient(90deg, transparent, ${GOLD}70)` }} />
          <span style={{ color: GOLD, fontSize: '18px', opacity: 0.65 }}>🪷</span>
          <div style={{ height: '1px', flex: 1, background: `linear-gradient(270deg, transparent, ${GOLD}70)` }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
