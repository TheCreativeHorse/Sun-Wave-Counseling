'use client'

import Link from 'next/link'
import { useIsMobile } from '@/hooks/useIsMobile'

const JANE_URL = 'https://sunwavecounsellingservices.janeapp.com'

const services = [
  { num: '01', title: 'Individual Therapy', desc: 'Anxiety, depression, burnout, identity, life transitions', price: '$100', href: '/services/individual-therapy', accent: '#F5C842', external: false, dashed: false },
  { num: '02', title: 'Teenage Therapy', desc: 'School pressure, friendships, confidence, family stress', price: '$100', href: '/services/teenage-therapy', accent: '#3DD6D0', external: false, dashed: false },
  { num: '03', title: 'Child Therapy', desc: 'Play-based, creative, age-appropriate support', price: '$100', href: '/services/child-therapy', accent: '#1A7A7A', external: false, dashed: false },
  { num: '04', title: 'Couples Therapy', desc: 'Communication, trust, conflict, reconnection', price: '$140', href: '/services/couples-therapy', accent: '#F5C842', external: false, dashed: false },
  { num: '✦', title: 'Free Consultation', desc: '25 min · No pressure · Just a conversation', price: 'Free', href: JANE_URL, accent: '#3DD6D0', external: true, dashed: true },
]

export default function Services() {
  const isMobile = useIsMobile()

  return (
    <section style={{ backgroundColor: '#0F0F0F', padding: isMobile ? '56px 0' : '80px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2.2rem' : 'clamp(2.4rem, 4vw, 3.4rem)', color: 'white', lineHeight: 1.1, margin: 0 }}>
            How I can<br />support <em style={{ fontStyle: 'italic', color: '#F5C842' }}>you</em>
          </h2>
          {!isMobile && <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', maxWidth: '220px', lineHeight: 1.5, textAlign: 'right' }}>Every session is online · tailored to where you are right now</p>}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {services.map((svc) => {
            const cardStyle: React.CSSProperties = {
              borderRadius: '16px',
              padding: isMobile ? '16px 18px' : '20px 24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
              backgroundColor: svc.dashed ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)',
              border: `0.5px ${svc.dashed ? 'dashed' : 'solid'} rgba(255,255,255,0.06)`,
            }

            const inner = (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '12px' : '20px', flex: 1 }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'rgba(255,255,255,0.2)', width: '24px', flexShrink: 0 }}>{svc.num}</span>
                  <div>
                  <div style={{ fontSize: isMobile ? '16px' : '18px', fontWeight: 600, color: 'white', marginBottom: '4px' }}>{svc.title}</div>
                  <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>{svc.desc}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                <span style={{ fontSize: '16px', fontWeight: 600, color: svc.accent }}>{svc.price}</span>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: `0.5px solid ${svc.accent}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: svc.accent, flexShrink: 0 }}>→</div>
                </div>
              </>
            )

            if (svc.external) {
              return <a key={svc.num} href={svc.href} target="_blank" rel="noopener noreferrer" style={cardStyle} onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>{inner}</a>
            }
            return <Link key={svc.num} href={svc.href} style={cardStyle} onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>{inner}</Link>
          })}
        </div>

      </div>
    </section>
  )
}