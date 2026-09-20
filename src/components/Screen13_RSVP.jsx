import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger } from '../animations'
import FlowerCorner from './FlowerCorner'
import { OrnamentalDivider, GoldBorder, TripleDot } from './Ornaments'
import { PARCHMENT, GOLD } from '../theme'

const FIELDS = [
  { id: 'name', label: 'आपका नाम', placeholder: 'Your full name', type: 'text' },
  { id: 'mobile', label: 'मोबाइल नंबर', placeholder: 'Mobile number', type: 'tel' },
  { id: 'guests', label: 'अतिथि संख्या', placeholder: 'Number of guests', type: 'number' },
]

export default function Screen13_RSVP() {
  const [form, setForm] = useState({ name: '', mobile: '', guests: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.id]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.mobile) return
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    background: 'rgba(255,255,255,0.65)',
    border: `1px solid ${GOLD}35`,
    borderRadius: '7px',
    fontFamily: 'EB Garamond, Georgia, serif',
    fontSize: '15px',
    color: '#2A1505',
    outline: 'none',
    WebkitAppearance: 'none',
  }

  const labelStyle = {
    fontFamily: 'Noto Serif Devanagari, serif',
    fontSize: '13px',
    color: '#5A3010',
    display: 'block',
    marginBottom: '5px',
  }

  return (
    <section style={{
      minHeight: '100svh',
      ...PARCHMENT,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '70px 28px',
      position: 'relative', overflow: 'hidden',
      textAlign: 'center',
    }}>
      <FlowerCorner top={8}  left={8}  petalColor="#C09040" leafColor="#6A8040" size={85} />
      <FlowerCorner top={8}  right={8} petalColor="#C09040" leafColor="#6A8040" size={85} />
      <FlowerCorner bottom={8} left={8}  petalColor="#C09040" leafColor="#6A8040" size={85} />
      <FlowerCorner bottom={8} right={8} petalColor="#C09040" leafColor="#6A8040" size={85} />
      <GoldBorder />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '360px' }}
      >
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic', fontSize: '11px',
            letterSpacing: '5px', textTransform: 'uppercase',
            color: GOLD, opacity: 0.55, marginBottom: '8px',
          }}
        >
          Kindly Confirm Attendance
        </motion.p>

        <motion.h2
          variants={fadeUp}
          style={{
            fontFamily: 'Noto Serif Devanagari, serif',
            fontSize: '32px', fontWeight: 400,
            color: '#2A1505', marginBottom: '6px',
          }}
        >
          उपस्थिति की पुष्टि
        </motion.h2>

        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: 'Noto Serif Devanagari, serif',
            fontSize: '14px', color: '#7A5030', marginBottom: '18px',
          }}
        >
          आपकी उपस्थिति हमारे लिए विशेष है
        </motion.p>

        <motion.div variants={fadeUp} style={{ marginBottom: '22px' }}>
          <OrnamentalDivider />
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              style={{ textAlign: 'left' }}
            >
              {FIELDS.map(f => (
                <div key={f.id} style={{ marginBottom: '14px' }}>
                  <label htmlFor={f.id} style={labelStyle}>{f.label}</label>
                  <input
                    id={f.id}
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.id]}
                    onChange={handleChange}
                    style={inputStyle}
                    min={f.type === 'number' ? '1' : undefined}
                  />
                </div>
              ))}

              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="message" style={labelStyle}>संदेश (वैकल्पिक)</label>
                <textarea
                  id="message"
                  placeholder="Your blessings / message..."
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  style={{
                    ...inputStyle,
                    resize: 'vertical',
                    minHeight: '80px',
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '13px',
                  background: GOLD,
                  color: '#fff',
                  borderRadius: '6px',
                  fontFamily: 'Noto Serif Devanagari, serif',
                  fontSize: '17px',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  border: 'none',
                  boxShadow: `0 4px 18px ${GOLD}44`,
                  transition: 'opacity 0.2s',
                }}
              >
                उत्तर भेजें
              </button>

              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '11px', color: '#9A7050',
                marginTop: '10px', textAlign: 'center',
              }}>
                Send Reply
              </p>
            </motion.form>
          ) : (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                background: 'rgba(255,255,255,0.55)',
                borderRadius: '14px',
                border: `1px solid ${GOLD}30`,
                padding: '32px 24px',
                textAlign: 'center',
              }}
            >
              <p style={{ fontSize: '40px', marginBottom: '12px' }}>🪷</p>
              <p style={{
                fontFamily: 'Noto Serif Devanagari, serif',
                fontSize: '22px', color: '#2A1505',
                marginBottom: '8px',
              }}>
                धन्यवाद
              </p>
              <p style={{
                fontFamily: 'Noto Serif Devanagari, serif',
                fontSize: '14px', color: '#7A5030',
                lineHeight: 1.9, marginBottom: '14px',
              }}>
                आपकी उपस्थिति की<br />पुष्टि हो गई है।
              </p>
              <OrnamentalDivider />
              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '14px', color: '#9A7050', marginTop: '14px',
              }}>
                Thank you, {form.name || 'dear guest'}.<br />
                We look forward to seeing you.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {!submitted && (
          <motion.div variants={fadeUp} style={{ marginTop: '24px' }}>
            <TripleDot style={{ justifyContent: 'center' }} />
            <p style={{
              fontFamily: 'Noto Serif Devanagari, serif',
              fontSize: '18px', color: '#2A1505',
              margin: '14px 0 4px',
            }}>
              विशाखा &amp; श्रेयांश
            </p>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '13px', color: '#9A7050',
            }}>
              30 November 2026 · Patna
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
