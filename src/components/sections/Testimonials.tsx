'use client'

import { useIsMobile } from '@/hooks/useIsMobile'

const testimonials = [
  {
    quote: 'I finally feel like I have tools to manage my anxiety instead of just white-knuckling through it. Khadija made me feel completely at ease from the very first session.',
    author: 'Client, Toronto',
    service: 'Individual Therapy',
    accent: '#3DD6D0',
  },
  {
    quote: 'Our communication has completely changed. We actually listen to each other now instead of just waiting to argue. I wish we had started sooner.',
    author: 'Client, Toronto',
    service: 'Couples Therapy',
    accent: '#F5C842',
  },
  {
    quote: 'As a university student I was really nervous to try therapy. Khadija made it feel like talking to someone who actually gets what my generation is going through.',
    author: 'Client, Toronto',
    service: 'Individual Therapy',
    accent: '#1A7A7A',
  },
]

export default function Testimonials() {
  const isMobile = useIsMobile()

  return (
    <section style={{ backgroundColor: '#FAFAF7', padding: isMobile ? '56px 0' : '80px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(15,15,15,0.35)', marginBottom: '10px', display: 'block' }}>Kind words</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2rem' : 'clamp(1.8rem, 3vw, 2.6rem)', lineHeight: 1.15, color: '#0F0F0F', margin: 0 }}>
              What clients <em style={{ fontStyle: 'italic' }}>say</em>
            </h2>
          </div>
          {!isMobile && <p style={{ fontSize: '12px', color: 'rgba(15,15,15,0.35)', maxWidth: '180px', textAlign: 'right', lineHeight: 1.5 }}>Names withheld to protect client privacy</p>}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ backgroundColor: 'white', borderRadius: '20px', padding: '28px', border: '0.5px solid rgba(15,15,15,0.07)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '52px', lineHeight: 0.8, color: t.accent }}>"</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', lineHeight: 1.7, color: 'rgba(15,15,15,0.75)', fontStyle: 'italic', flex: 1, margin: 0 }}>{t.quote}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '0.5px solid rgba(15,15,15,0.07)' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(15,15,15,0.5)' }}>— {t.author}</span>
                <span style={{ fontSize: '11px', padding: '4px 10px', borderRadius: '9999px', fontWeight: 500, backgroundColor: `${t.accent}15`, color: t.accent }}>{t.service}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}