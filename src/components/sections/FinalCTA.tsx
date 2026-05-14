'use client'

import { useIsMobile } from '@/hooks/useIsMobile'

const JANE_URL = 'https://sunwavecounsellingservices.janeapp.com'

export default function FinalCTA() {
  const isMobile = useIsMobile()

  return (
    <section style={{ backgroundColor: '#1A4A48', padding: isMobile ? '64px 0' : '100px 0' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '20px' }}>

        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '56px', color: 'rgba(61,214,208,0.35)', lineHeight: 0.8 }}>"</div>

        <p style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '1.2rem' : 'clamp(1.2rem, 2.5vw, 1.7rem)', lineHeight: 1.55, color: 'rgba(250,250,247,0.75)', fontStyle: 'italic', margin: 0 }}>
          I finally feel like I have tools to manage my anxiety instead of just white-knuckling through it.
        </p>

        <span style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(61,214,208,0.6)', letterSpacing: '0.04em' }}>
          — Client, Toronto · Individual Therapy
        </span>

        <div style={{ width: '32px', height: '1px', backgroundColor: 'rgba(255,255,255,0.15)', margin: '8px 0' }} />

        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2rem' : 'clamp(2rem, 4vw, 3rem)', color: '#FAFAF7', margin: 0, lineHeight: 1.1 }}>
          Ready to take the<br /><em style={{ fontStyle: 'italic', color: '#F5C842' }}>first step?</em>
        </h2>

        <p style={{ fontSize: '15px', color: 'rgba(250,250,247,0.5)', maxWidth: '380px', lineHeight: 1.7, margin: 0 }}>
          Book a free 25-minute consultation — no commitment, just a conversation to see if we&apos;re the right fit.
        </p>

        <a href={JANE_URL} target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#F5C842', color: '#0F0F0F', fontWeight: 700, fontSize: '14px', padding: '16px 28px', borderRadius: '9999px', textDecoration: 'none', marginTop: '8px' }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.9' }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}>
          <span style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#0F0F0F', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#F5C842', flexShrink: 0 }}>→</span>
          Book your free consult
        </a>

        <p style={{ fontSize: '12px', color: 'rgba(250,250,247,0.3)' }}>
          Or email sunwavecounselling@gmail.com
        </p>

      </div>
    </section>
  )
}