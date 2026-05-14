'use client'

import { useIsMobile } from '@/hooks/useIsMobile'

const JANE_URL = 'https://sunwavecounsellingservices.janeapp.com'

const steps = [
  { num: '01', title: 'Book a free 25-min call', desc: 'No commitment. Just see if it feels right. You can ask anything.' },
  { num: '02', title: 'First session, your pace', desc: 'Share what\'s going on. No agenda, no pressure — just a conversation.' },
  { num: '03', title: 'Do the work together', desc: 'Build tools. Gain clarity. Move forward — at a pace that works for you.' },
]

export default function HowItWorks() {
  const isMobile = useIsMobile()

  return (
    <section style={{ backgroundColor: '#F5E8D0', padding: isMobile ? '56px 0' : '80px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        <div style={{ marginBottom: '40px' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#1A7A7A', marginBottom: '12px', display: 'block' }}>
            The process
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2rem' : 'clamp(1.8rem, 3vw, 2.6rem)', lineHeight: 1.15, color: '#0F0F0F', margin: 0 }}>
            Starting therapy is easier<br />than you <em style={{ fontStyle: 'italic' }}>think.</em>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '40px' }}>
          {steps.map((step) => (
            <div key={step.num} style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', padding: '24px 0', borderBottom: '0.5px solid rgba(15,15,15,0.1)' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '28px' : '32px', color: 'rgba(196,169,96,0.35)', lineHeight: 1, flexShrink: 0, width: '40px' }}>{step.num}</div>
              <div>
                <div style={{ fontSize: isMobile ? '15px' : '16px', fontWeight: 600, color: '#0F0F0F', marginBottom: '4px' }}>{step.title}</div>
                <div style={{ fontSize: '14px', color: 'rgba(15,15,15,0.55)', lineHeight: 1.6 }}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <a href={JANE_URL} target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#0F0F0F', color: '#FAFAF7', fontWeight: 600, fontSize: '14px', padding: '14px 24px', borderRadius: '9999px', textDecoration: 'none' }}>
          <span style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#F5C842', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#0F0F0F', flexShrink: 0 }}>→</span>
          Book your free consult
        </a>

      </div>
    </section>
  )
}