import { useState, useEffect, useRef } from 'react'
import { useScroll, useSpring, motion } from 'framer-motion'
import EnvelopeIntro from './components/EnvelopeIntro'
import Screen2_Monogram from './components/Screen2_Monogram'
import Screen3_DateReveal from './components/Screen3_DateReveal'
import GaneshSlide from './components/GaneshSlide'
import Screen5_FamilyInvitation from './components/Screen5_FamilyInvitation'
import Screen7_Haldi from './components/Screen7_Haldi'
import Screen8_Mehendi from './components/Screen8_Mehendi'
import Screen9_Wedding from './components/Screen9_Wedding'
import Screen12_FamilyBlessings from './components/Screen12_FamilyBlessings'
import './index.css'

export default function App() {
  const [inviteOpen, setInviteOpen] = useState(false)
  const [musicOn, setMusicOn] = useState(false)
  const audioRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  function toggleMusic() {
    if (!audioRef.current) {
      const a = new Audio('/Sachet_Tandon_-_Ghantalele.com_-_Kudmayi_Ghantalele.com_(mp3.pm).mp3')
      a.loop = true
      a.volume = 0.30
      a.play().catch(() => {})
      audioRef.current = a
      setMusicOn(true)
      return
    }
    if (musicOn) {
      audioRef.current.pause()
      setMusicOn(false)
    } else {
      audioRef.current.play().catch(() => {})
      setMusicOn(true)
    }
  }

  useEffect(() => {
    return () => { if (audioRef.current) audioRef.current.pause() }
  }, [])

  if (!inviteOpen) {
    return (
      <EnvelopeIntro
        musicOn={musicOn}
        onMusicToggle={toggleMusic}
        onComplete={() => setInviteOpen(true)}
      />
    )
  }

  return (
    <>
      <motion.div style={{
        position: 'fixed', right: 0, top: 0,
        width: '3px', height: '100vh',
        background: 'linear-gradient(180deg, #E8C060, #C4921A, #8B640A)',
        transformOrigin: 'top', scaleY, zIndex: 9999, pointerEvents: 'none',
      }} />

      <button
        onClick={toggleMusic}
        style={{
          position: 'fixed', top: '16px', right: '16px', zIndex: 99999,
          width: '38px', height: '38px', borderRadius: '50%',
          background: 'rgba(30,10,4,0.65)',
          backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(245,220,140,0.35)',
          color: 'rgba(245,220,140,0.90)', fontSize: '16px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.30)',
        }}
        aria-label={musicOn ? 'Mute music' : 'Play music'}
      >
        {musicOn ? '♫' : '♪'}
      </button>

      <main>
        <Screen2_Monogram />
        <Screen3_DateReveal />
        <GaneshSlide />
        <Screen5_FamilyInvitation />
        <Screen7_Haldi />
        <Screen8_Mehendi />
        <Screen9_Wedding />
        <Screen12_FamilyBlessings />
      </main>
    </>
  )
}
