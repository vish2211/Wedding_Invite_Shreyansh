import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../animations'

const shimmer = {
  background: 'linear-gradient(90deg, #7a3800, #c4841a, #f5d060, #c4841a, #7a3800)',
  backgroundSize: '200%',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

function FamilyBlock({ side, father, mother }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '10px', letterSpacing: '2px',
        color: 'rgba(74,32,16,0.5)',
        textTransform: 'uppercase', marginBottom: '6px',
      }}>{side}</p>
      {/* father and mother: same font, same size */}
      <p style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '13px', color: 'rgba(50,10,2,0.88)',
        lineHeight: 1.5, fontWeight: '500',
      }}>{father}</p>
      <p style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '13px', color: 'rgba(50,10,2,0.88)',
        lineHeight: 1.5, fontWeight: '500',
      }}>{mother}</p>
    </div>
  )
}

export default function HeroSlide() {
  return (
    <section style={{ position: 'relative', height: '100svh', overflow: 'hidden' }}>
      <img
        src="/couple.jpg"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 10%',
        }}
        alt=""
      />

      {/* warm amber vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(80,35,5,0.52) 0%, rgba(20,5,0,0.04) 38%, rgba(20,5,0,0.76) 100%)',
      }} />

      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', flexDirection: 'column', height: '100%',
      }}>

        {/* TOP — Om + families */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          style={{ padding: '22px 14px 0', textAlign: 'center' }}
        >
          <motion.p variants={fadeUp} style={{
            fontFamily: 'Laila, serif',
            fontSize: '20px', color: 'rgba(245,208,96,0.9)',
            marginBottom: '10px',
          }}>
            ॐ शुभ विवाह ॐ
          </motion.p>

          {/* parchment family block */}
          <motion.div variants={fadeUp} style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-start', gap: '6px',
            background: 'rgba(245,228,192,0.84)',
            backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
            borderRadius: '10px',
            border: '1px solid rgba(196,132,26,0.3)',
            padding: '12px 12px',
          }}>
            <FamilyBlock
              side="Groom's Family"
              father="Subodh Narayan Jha"
              mother="Smt. Ranju Jha"
            />
            <div style={{
              width: '1px', alignSelf: 'stretch',
              background: 'rgba(196,132,26,0.28)', flexShrink: 0,
            }} />
            <FamilyBlock
              side="Bride's Family"
              father="Sachindra Kumar Mishra"
              mother="Smt. Bandana Mishra"
            />
          </motion.div>
        </motion.div>

        <div style={{ flex: 1 }} />

        {/* BOTTOM — parchment names + date block */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            background: 'rgba(245,228,192,0.9)',
            backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
            borderTop: '2px solid rgba(196,132,26,0.45)',
            padding: '16px 22px 44px',
            textAlign: 'center',
          }}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: '8px' }}>
            <span style={{ color: 'rgba(196,132,26,0.55)', letterSpacing: '8px', fontSize: '11px' }}>✦ ✦ ✦</span>
          </motion.div>

          {/* names */}
          <motion.div variants={fadeUp} style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '4px',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ ...shimmer, fontFamily: 'Pinyon Script, cursive', fontSize: '46px', lineHeight: 1.1 }}>
                Shreyansh
              </div>
              <p style={{
                fontFamily: 'Playfair Display, serif', fontSize: '10px',
                letterSpacing: '3px', color: 'rgba(74,32,16,0.45)',
                textTransform: 'uppercase',
              }}>Shekhar</p>
            </div>
            <span style={{
              color: 'rgba(196,132,26,0.6)',
              fontFamily: 'Laila, serif',
              fontSize: '22px', alignSelf: 'center', marginTop: '-12px',
            }}>&amp;</span>
            <div style={{ textAlign: 'center' }}>
              <div style={{ ...shimmer, fontFamily: 'Pinyon Script, cursive', fontSize: '46px', lineHeight: 1.1 }}>
                Vishakha
              </div>
              <p style={{
                fontFamily: 'Playfair Display, serif', fontSize: '10px',
                letterSpacing: '3px', color: 'rgba(74,32,16,0.45)',
                textTransform: 'uppercase',
              }}>Vaishnavi</p>
            </div>
          </motion.div>

          {/* date + venue preview */}
          <motion.div variants={fadeUp} style={{
            display: 'flex', gap: '8px', justifyContent: 'center',
            flexWrap: 'wrap', marginTop: '10px',
          }}>
            <span style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '13px', color: 'rgba(74,32,16,0.65)',
              background: 'rgba(196,132,26,0.1)',
              borderRadius: '4px', padding: '4px 12px',
              border: '1px solid rgba(196,132,26,0.2)',
            }}>
              📅 30 November 2026
            </span>
            <span style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '13px', color: 'rgba(74,32,16,0.65)',
              background: 'rgba(196,132,26,0.1)',
              borderRadius: '4px', padding: '4px 12px',
              border: '1px solid rgba(196,132,26,0.2)',
            }}>
              📍 Sky Blue Resort, Patna
            </span>
          </motion.div>

          <motion.p variants={fadeUp} style={{
            fontFamily: 'Laila, serif',
            fontSize: '12px', color: 'rgba(74,32,16,0.5)',
            marginTop: '8px', letterSpacing: '1px',
          }}>
            विवाह में सादर आमंत्रण है
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
