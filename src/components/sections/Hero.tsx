'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useIsMobile } from '@/hooks/useIsMobile'

const JANE_URL = 'https://sunwavecounsellingservices.janeapp.com'

const audiences = [
  {
    tag: 'For students',
    tagBg: '#EAF4F3', tagColor: '#1A7A7A', cardBg: '#EDF6F5', quoteColor: '#0f3330', accent: '#1A7A7A',
    quote: '"I get it — university is a lot. The pressure, the uncertainty, the feeling that everyone else has it figured out. You don\'t have to white-knuckle through it alone."',
  },
  {
    tag: 'For professionals',
    tagBg: '#FDF6E3', tagColor: '#7A5E00', cardBg: '#FDF6E3', quoteColor: '#3D2E00', accent: '#C9A000',
    quote: '"Burnout doesn\'t mean you\'re weak — it means you\'ve been strong for too long without support. Let\'s figure out what\'s actually going on beneath the exhaustion."',
  },
  {
    tag: 'For couples',
    tagBg: '#F5EEE8', tagColor: '#6B4226', cardBg: '#F5EEE8', quoteColor: '#3D2010', accent: '#A05030',
    quote: '"Feeling disconnected doesn\'t mean it\'s broken. Sometimes you just need a space where both of you can actually be heard — without it turning into another argument."',
  },
  {
    tag: 'For teens',
    tagBg: '#EEF3FA', tagColor: '#1A4580', cardBg: '#EEF3FA', quoteColor: '#0D2040', accent: '#2D5A9A',
    quote: '"School, friends, family, figuring out who you are — it\'s genuinely a lot. This is a space where you don\'t have to perform. Just show up as you are."',
  },
  {
    tag: 'For everyone',
    tagBg: '#F0EDE8', tagColor: '#4A3728', cardBg: '#EDE8E0', quoteColor: '#2A1F14', accent: '#6B4828',
    quote: '"I\'m Khadija — and I get it. Life gets heavy, relationships get complicated, and sometimes your own brain feels like your biggest obstacle. I\'m here to help, without the judgment."',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const [fading, setFading] = useState(false)
  const isMobile = useIsMobile()
  const DURATION = 7000
  const TICK = 60

  useEffect(() => {
    setProgress(0)
    const prog = setInterval(() => {
      setProgress(p => {
        const next = p + (TICK / DURATION) * 100
        return next >= 100 ? 100 : next
      })
    }, TICK)
    const slide = setTimeout(() => goTo((current + 1) % audiences.length), DURATION)
    return () => { clearInterval(prog); clearTimeout(slide) }
  }, [current])

  function goTo(idx: number) {
    setFading(true)
    setTimeout(() => { setCurrent(idx); setProgress(0); setFading(false) }, 320)
  }

  const m = audiences[current]

  return (
    <section style={{ paddingTop: isMobile ? '80px' : '96px', paddingBottom: isMobile ? '48px' : '64px', backgroundColor: '#FAFAF7', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Main grid — stacks on mobile */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '40px' : '48px', alignItems: 'center' }}>

          {/* LEFT */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#E8F4F3', borderRadius: '9999px', padding: '5px 14px 5px 8px', width: 'fit-content' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#3DD6D0', flexShrink: 0 }} />
              <span style={{ fontSize: '12px', fontWeight: 500, color: '#1A7A7A' }}>Now accepting new clients · Toronto</span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2.6rem' : 'clamp(2.4rem, 5vw, 3.8rem)', lineHeight: 1.05, color: '#0F0F0F', letterSpacing: '-0.02em', margin: 0 }}>
              Therapy that{' '}<em style={{ fontStyle: 'italic', color: '#F5C842' }}>actually</em><br />
              gets{' '}<span style={{ color: '#3DD6D0' }}>you.</span>
            </h1>

            <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(15,15,15,0.55)', maxWidth: '400px', margin: 0 }}>
              For the overthinkers, the burnout survivors, the relationship navigators — a real space to figure things out.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a href={JANE_URL} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#0F0F0F', color: '#FAFAF7', fontWeight: 600, fontSize: '14px', padding: '14px 24px', borderRadius: '9999px', textDecoration: 'none' }}>
                <span style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#F5C842', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#0F0F0F', flexShrink: 0 }}>→</span>
                Book Consultation
              </a>
              <Link href="/about" style={{ fontSize: '14px', color: 'rgba(15,15,15,0.55)', textDecoration: 'none', fontWeight: 500 }}>
                Meet Khadija ↗
              </Link>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['Anxiety & overthinking', 'Couples', 'Teens & young adults'].map(t => (
                <span key={t} style={{ fontSize: '12px', padding: '5px 14px', borderRadius: '9999px', backgroundColor: 'white', border: '0.5px solid rgba(15,15,15,0.1)', color: 'rgba(15,15,15,0.55)' }}>{t}</span>
              ))}
              <span style={{ fontSize: '12px', padding: '5px 14px', borderRadius: '9999px', backgroundColor: 'rgba(245,200,66,0.12)', border: '0.5px solid rgba(245,200,66,0.35)', color: '#7A5E00' }}>Online · Ontario</span>
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '5fr 3fr', gap: '12px', alignItems: 'stretch' }}>

            {/* Photo */}
            <div style={{ backgroundColor: '#E8F4F3', borderRadius: '24px 24px 60px 24px', aspectRatio: isMobile ? '3/4' : '3/4', position: 'relative', overflow: 'hidden' }}>
              <Image
                src="/Images/khadija-photo.jpg"
                alt="Khadija Lokhandwala — Psychotherapist Toronto"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: isMobile ? 'center 62%' : 'center top',
                }}
                priority
              />
              <div
                style={{
                  position: 'absolute',
                  ...(isMobile
                    ? { top: '12px', left: '10px', right: '10px', bottom: 'auto' }
                    : { bottom: '14px', left: '10px', right: '10px' }),
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  padding: '8px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                }}
              >
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #F5C842, #3DD6D0)', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#0F0F0F' }}>Khadija L.</div>
                  <div style={{ fontSize: '10px', color: 'rgba(15,15,15,0.45)' }}>Psychotherapist · Toronto</div>
                </div>
              </div>
            </div>

            {/* Side column — hidden on mobile */}
            {!isMobile && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Rotating card */}
                <div
                  style={{ borderRadius: '18px', padding: '20px', flex: 1, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer',  backgroundColor: m.cardBg, opacity: fading ? 0 : 1, transform: fading ? 'translateY(6px)' : 'translateY(0)', transition: 'opacity 0.4s ease, transform 0.4s ease' }}
                  onClick={() => goTo((current + 1) % audiences.length)}
                >
                  <div style={{ position: 'absolute', bottom: 0, left: 0, height: '2.5px', width: `${progress}%`, backgroundColor: m.accent }} />
                  <div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', borderRadius: '9999px', padding: '4px 12px', fontSize: '10px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '12px', backgroundColor: m.tagBg, color: m.tagColor }}>{m.tag}</div>
                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', lineHeight: 1.65, fontStyle: 'italic', color: m.quoteColor, margin: 0 }}>{m.quote}</p>
                  </div>
                  <div style={{ marginTop: '14px', fontSize: '11px', fontWeight: 600, color: m.accent }}>— Khadija</div>
                </div>

                {/* Free consult card */}
                <a href={JANE_URL} target="_blank" rel="noopener noreferrer"
                  style={{ backgroundColor: '#F5C842', borderRadius: '18px', padding: '16px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                  <div>
                    <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(15,15,15,0.5)', marginBottom: '3px' }}>Start here</div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: '#0F0F0F', fontStyle: 'italic', lineHeight: 1 }}>Free consult</div>
                    <div style={{ fontSize: '10px', color: 'rgba(15,15,15,0.5)', marginTop: '4px', lineHeight: 1.4 }}>25 min · no commitment<br />just a conversation</div>
                  </div>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#0F0F0F', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: '#F5C842', flexShrink: 0 }}>→</div>
                </a>

                {/* Dots */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '6px' }}>
                  {audiences.map((_, i) => (
                    <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
                      style={{ width: i === current ? '20px' : '6px', height: '6px', borderRadius: i === current ? '3px' : '50%', backgroundColor: i === current ? m.accent : '#D5CFC6', border: 'none', padding: 0, cursor: 'pointer', transition: 'all 0.35s ease' }} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile rotating card — shown below photo on mobile */}
        {isMobile && (
          <div style={{ marginTop: '20px' }}>
            <div
              style={{ borderRadius: '18px', padding: '20px', position: 'relative', overflow: 'hidden', backgroundColor: m.cardBg, opacity: fading ? 0 : 1, transition: 'opacity 0.4s ease', cursor: 'pointer' }}
              onClick={() => goTo((current + 1) % audiences.length)}
            >
              <div style={{ position: 'absolute', bottom: 0, left: 0, height: '2.5px', width: `${progress}%`, backgroundColor: m.accent }} />
              <div style={{ display: 'inline-flex', alignItems: 'center', borderRadius: '9999px', padding: '4px 12px', fontSize: '10px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '12px', backgroundColor: m.tagBg, color: m.tagColor }}>{m.tag}</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '17px', lineHeight: 1.65, fontStyle: 'italic', color: m.quoteColor, margin: '0 0 12px' }}>{m.quote}</p>
              <div style={{ fontSize: '11px', fontWeight: 600, color: m.accent }}>— Khadija</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '12px' }}>
              {audiences.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
                  style={{ width: i === current ? '20px' : '6px', height: '6px', borderRadius: i === current ? '3px' : '50%', backgroundColor: i === current ? m.accent : '#D5CFC6', border: 'none', padding: 0, cursor: 'pointer', transition: 'all 0.35s ease' }} />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}