import { motion } from 'framer-motion'
import { fadeUp, fadeLeft, stagger } from '../animations'
import FlowerCorner from './FlowerCorner'

const THEMES = {
  haldi: {
    bg: '#FFF8D0',
    bgImage: `radial-gradient(ellipse at 0% 0%, rgba(255,240,160,0.9) 0%, transparent 45%),
               radial-gradient(ellipse at 100% 100%, rgba(220,180,80,0.65) 0%, transparent 45%)`,
    petal: '#E8C040', leaf: '#8A9040',
    card: 'rgba(255,248,200,0.88)', border: 'rgba(200,160,30,0.3)',
    headingColor: '#9a5800',
  },
  mehendi: {
    bg: '#EEF4E0',
    bgImage: `radial-gradient(ellipse at 0% 0%, rgba(220,240,195,0.9) 0%, transparent 45%),
               radial-gradient(ellipse at 100% 100%, rgba(165,200,115,0.6) 0%, transparent 45%)`,
    petal: '#A8C870', leaf: '#5A7A3A',
    card: 'rgba(230,245,210,0.88)', border: 'rgba(100,150,60,0.25)',
    headingColor: '#3a6820',
  },
  vivah: {
    bg: '#FAE8EE',
    bgImage: `radial-gradient(ellipse at 0% 0%, rgba(255,220,230,0.9) 0%, transparent 45%),
               radial-gradient(ellipse at 100% 100%, rgba(210,155,170,0.65) 0%, transparent 45%)`,
    petal: '#D4A0B0', leaf: '#7A9060',
    card: 'rgba(255,235,240,0.88)', border: 'rgba(180,100,120,0.25)',
    headingColor: '#8B3050',
  },
  dinner: {
    bg: '#FAE8D8',
    bgImage: `radial-gradient(ellipse at 0% 0%, rgba(255,230,205,0.9) 0%, transparent 45%),
               radial-gradient(ellipse at 100% 100%, rgba(210,160,120,0.65) 0%, transparent 45%)`,
    petal: '#D4A888', leaf: '#7A8A50',
    card: 'rgba(255,235,215,0.88)', border: 'rgba(180,120,80,0.25)',
    headingColor: '#9A4810',
  },
}

// Slides with a background illustration image
function PhotoLayout({ t, bgImage, objPos = 'center top', labelHindi, label, heading,
                       description, date, time, venue, dressCode, mapsUrl, verse }) {
  const hc = t.headingColor
  return (
    // height (not minHeight) so absolutely-positioned img fills 100%
    <section style={{ position: 'relative', height: '100svh', overflow: 'hidden' }}>

      {/* full-bleed background image */}
      <img
        src={bgImage}
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: objPos,
        }}
        alt=""
      />

      {/* dark-to-light gradient — bottom half only, for card readability */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, transparent 0%, transparent 42%, rgba(0,0,0,0.72) 100%)',
      }} />

      {/* flex column so top label + spacer + bottom card fill the viewport exactly */}
      <div style={{
        position: 'relative', zIndex: 2,
        height: '100%', display: 'flex', flexDirection: 'column',
      }}>

        {/* ── TOP LABEL ── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ padding: '28px 24px 0', textAlign: 'center' }}
        >
          <p style={{
            fontFamily: 'Noto Serif Devanagari, serif',
            fontSize: '18px', color: 'rgba(255,235,150,0.95)',
            letterSpacing: '1px', marginBottom: '4px',
            textShadow: '0 1px 8px rgba(0,0,0,0.5)',
          }}>{labelHindi}</p>
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic', fontSize: '11px',
            letterSpacing: '5px', textTransform: 'uppercase',
            color: 'rgba(255,235,150,0.65)',
            textShadow: '0 1px 6px rgba(0,0,0,0.4)',
          }}>{label}</p>
        </motion.div>

        {/* ── SPACER (shows the illustration) ── */}
        <div style={{ flex: 1 }} />

        {/* ── BOTTOM PARCHMENT CARD ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          style={{ padding: '0 12px 12px' }}
        >
          <div style={{
            background: 'rgba(245,228,192,0.94)',
            backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
            borderRadius: '16px 16px 8px 8px',
            border: `1px solid ${hc}44`,
            padding: '16px 18px 20px',
            position: 'relative', overflow: 'hidden',
          }}>

            {/* heading row */}
            <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '4px' }}>
              <h2 style={{
                fontFamily: 'Great Vibes, cursive',
                fontSize: '54px', lineHeight: 1,
                color: hc, margin: 0,
              }}>{heading}</h2>
            </motion.div>

            {/* divider */}
            <motion.div variants={fadeUp} style={{
              display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px',
            }}>
              <div style={{ height: '1px', flex: 1, background: `linear-gradient(90deg, ${hc}99, transparent)` }} />
              <span style={{ color: hc, fontSize: '13px', opacity: 0.7 }}>🌸</span>
              <div style={{ height: '1px', flex: 1, background: `linear-gradient(270deg, ${hc}99, transparent)` }} />
            </motion.div>

            <motion.p variants={fadeUp} style={{
              fontFamily: 'EB Garamond, serif',
              fontSize: '15px', lineHeight: 1.65,
              color: '#3a1008', marginBottom: '8px',
            }}>{description}</motion.p>

            {verse && (
              <motion.p variants={fadeUp} style={{
                fontFamily: 'Noto Serif Devanagari, serif',
                fontSize: '12px', lineHeight: 1.8,
                color: `${hc}cc`, marginBottom: '12px',
                paddingBottom: '10px',
                borderBottom: `1px dashed ${hc}33`,
                fontStyle: 'italic',
              }}>{verse}</motion.p>
            )}

            {/* detail rows */}
            <motion.div variants={stagger} style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
              {[
                { icon: '📅', text: date },
                { icon: '🕐', text: time },
                { icon: '📍', text: venue },
                { icon: '🥻', text: `Dress Code: ${dressCode}` },
              ].map(({ icon, text }) => (
                <motion.div key={icon} variants={fadeUp} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '10px',
                  background: 'rgba(255,255,255,0.65)', borderRadius: '7px',
                  padding: '8px 12px', border: `1px solid ${hc}1A`,
                }}>
                  <span style={{ fontSize: '13px', marginTop: '2px' }}>{icon}</span>
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '14px', color: '#2a0808', lineHeight: 1.4 }}>{text}</span>
                </motion.div>
              ))}
            </motion.div>

            {mapsUrl && (
              <motion.a variants={fadeUp} href={mapsUrl} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                marginTop: '12px', padding: '10px 20px',
                background: hc, color: '#fff', borderRadius: '4px',
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '13px', letterSpacing: '2px',
                textTransform: 'uppercase', textDecoration: 'none',
                boxShadow: `0 4px 14px ${hc}55`,
              }}>
                View on Maps →
              </motion.a>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

// Parchment slides (no background image)
function ParchmentLayout({ t, labelHindi, label, heading, description, date, time, venue, dressCode, mapsUrl, verse }) {
  const hc = t.headingColor
  return (
    <section style={{
      minHeight: '100svh',
      background: t.bg, backgroundImage: t.bgImage,
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center',
      padding: '70px 28px',
      position: 'relative', overflow: 'hidden',
    }}>
      <FlowerCorner top={8}  left={8}  petalColor={t.petal} leafColor={t.leaf} size={80} />
      <FlowerCorner top={8}  right={8} petalColor={t.petal} leafColor={t.leaf} size={80} />
      <FlowerCorner bottom={8} left={8}  petalColor={t.petal} leafColor={t.leaf} size={80} />
      <FlowerCorner bottom={8} right={8} petalColor={t.petal} leafColor={t.leaf} size={80} />
      <div style={{
        position: 'absolute', top: 14, left: 14, right: 14, bottom: 14,
        border: `1px solid ${hc}33`, pointerEvents: 'none',
      }} />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* couple portrait */}
        <motion.div variants={fadeUp} style={{ marginBottom: '16px' }}>
          <img
            src="/couple.jpg"
            style={{
              width: '90px', height: '90px',
              objectFit: 'cover', objectPosition: 'center 15%',
              borderRadius: '50%',
              border: `3px solid ${hc}66`,
              boxShadow: `0 4px 20px ${hc}33`,
            }}
            alt=""
          />
        </motion.div>

        {labelHindi && (
          <motion.p variants={fadeUp} style={{
            fontFamily: 'Noto Serif Devanagari, serif',
            fontSize: '15px', color: hc,
            opacity: 0.85, marginBottom: '2px', letterSpacing: '1px',
          }}>{labelHindi}</motion.p>
        )}

        <motion.p variants={fadeUp} style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic', fontSize: '12px',
          letterSpacing: '4px', textTransform: 'uppercase',
          color: hc, opacity: 0.6, marginBottom: '8px',
        }}>{label}</motion.p>

        <motion.h2 variants={fadeLeft} style={{
          fontFamily: 'Great Vibes, cursive',
          fontSize: '66px', lineHeight: 1,
          color: hc, marginBottom: '12px',
        }}>{heading}</motion.h2>

        <motion.div variants={fadeUp} style={{
          display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px',
        }}>
          <div style={{ height: '1px', flex: 1, background: `linear-gradient(90deg, ${hc}99, transparent)` }} />
          <span style={{ color: hc, fontSize: '15px', opacity: 0.7 }}>🌸</span>
          <div style={{ height: '1px', flex: 1, background: `linear-gradient(270deg, ${hc}99, transparent)` }} />
        </motion.div>

        <motion.p variants={fadeUp} style={{
          fontFamily: 'EB Garamond, serif',
          fontSize: '16px', lineHeight: 1.75,
          color: '#3a1008', marginBottom: '12px', maxWidth: '340px',
        }}>{description}</motion.p>

        {verse && (
          <motion.div variants={fadeUp} style={{
            background: 'rgba(255,255,255,0.55)',
            borderRadius: '8px', border: `1px dashed ${hc}33`,
            padding: '12px 16px', marginBottom: '16px',
          }}>
            <p style={{
              fontFamily: 'Noto Serif Devanagari, serif',
              fontSize: '14px', lineHeight: 1.85,
              color: `${hc}cc`, fontStyle: 'italic',
            }}>{verse}</p>
          </motion.div>
        )}

        <motion.div variants={stagger} style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '16px' }}>
          {[
            { icon: '📅', text: date },
            { icon: '🕐', text: time },
            { icon: '📍', text: venue },
            { icon: '🥻', text: `Dress Code: ${dressCode}` },
          ].map(({ icon, text }) => (
            <motion.div key={icon} variants={fadeUp} style={{
              display: 'flex', alignItems: 'flex-start', gap: '11px',
              background: t.card, borderRadius: '8px',
              padding: '10px 14px', border: `1px solid ${t.border}`,
            }}>
              <span style={{ fontSize: '14px', marginTop: '2px' }}>{icon}</span>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '15px', color: '#2a0808', lineHeight: 1.4 }}>{text}</span>
            </motion.div>
          ))}
        </motion.div>

        {mapsUrl && (
          <motion.a variants={fadeUp} href={mapsUrl} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '11px 22px', background: hc, color: '#fff',
            borderRadius: '4px',
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '14px', letterSpacing: '2px',
            textTransform: 'uppercase', textDecoration: 'none',
            boxShadow: `0 4px 18px ${hc}44`,
          }}>
            View on Maps →
          </motion.a>
        )}
      </motion.div>
    </section>
  )
}

export default function EventSlide({ theme = 'vivah', bgImage, objPos, verse, ...props }) {
  const t = THEMES[theme] ?? THEMES.vivah
  if (bgImage) {
    return <PhotoLayout t={t} bgImage={bgImage} objPos={objPos} verse={verse} {...props} />
  }
  return <ParchmentLayout t={t} verse={verse} {...props} />
}
