'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { useIsMobile } from '@/hooks/useIsMobile'

const JANE_URL = 'https://sunwavecounsellingservices.janeapp.com'

const services = [
  {
    num: '01', title: 'Individual Therapy', slug: 'individual-therapy', price: '$100', duration: '50 min',
    tagline: 'A space entirely yours.',
    desc: 'A space to untangle your thoughts, navigate life\'s challenges, and discover your inner strengths. Together, we explore emotions, build coping skills, and create practical tools to help you move forward.',
    tags: ['Anxiety', 'Depression', 'Burnout', 'Identity', 'Life transitions', 'Work stress'],
    accent: '#F5C842', bg: '#FDF6E3',
  },
  {
    num: '02', title: 'Teenage Therapy', slug: 'teenage-therapy', price: '$100', duration: '60 min',
    tagline: 'No performance required.',
    desc: 'A confidential and understanding space for teens to talk about school, relationships, friendships, family, stress, anxiety, or any challenges they\'re facing.',
    tags: ['School stress', 'Friendships', 'Family', 'Anxiety', 'Confidence', 'Emotional challenges'],
    accent: '#3DD6D0', bg: '#EDF6F5',
  },
  {
    num: '03', title: 'Child Therapy', slug: 'child-therapy', price: '$100', duration: '60 min',
    tagline: 'Big feelings, safe space.',
    desc: 'A safe space where kids can explore their feelings, navigate challenges at home, school, or with friends, and discover their inner strengths through play, stories, and creative activities.',
    tags: ['Play-based', 'Creative', 'School', 'Home challenges', 'Confidence', 'Resilience'],
    accent: '#1A7A7A', bg: '#E8F4F3',
  },
  {
    num: '04', title: 'Couples Therapy', slug: 'couples-therapy', price: '$140', duration: '60 min',
    tagline: 'For relationships worth fighting for.',
    desc: 'A safe and supportive space for partners to strengthen their connection and navigate challenges together — improving communication, resolving conflict, and rebuilding intimacy.',
    tags: ['Communication', 'Trust', 'Conflict', 'Reconnection', 'Intimacy', 'Understanding'],
    accent: '#F5C842', bg: '#FDF6E3',
  },
]

export default function ServicesPage() {
  const isMobile = useIsMobile()

  return (
    <div style={{ backgroundColor: '#FAFAF7', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ paddingTop: isMobile ? '90px' : '120px', paddingBottom: '48px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#3DD6D0', marginBottom: '16px', display: 'block' }}>Services</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2.6rem' : 'clamp(2.4rem, 5vw, 3.6rem)', lineHeight: 1.1, color: '#0F0F0F', margin: '0 0 20px' }}>
            Support that fits<br /><em style={{ fontStyle: 'italic', color: '#F5C842' }}>where you are.</em>
          </h1>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(15,15,15,0.55)', margin: 0, maxWidth: '560px' }}>
            Every person who walks through this door — or logs into this session — is dealing with something real. Here&apos;s how I can help.
          </p>
        </div>
      </section>

      {/* Free bar */}
      <div style={{ backgroundColor: '#0F0F0F', padding: '20px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'white', fontStyle: 'italic' }}>Not sure where to start?</div>
            <div style={{ fontSize: '13px', color: 'rgba(250,250,247,0.5)', marginTop: '4px' }}>Book a free 25-minute consultation — no commitment.</div>
          </div>
          <a href={JANE_URL} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#F5C842', color: '#0F0F0F', fontWeight: 600, fontSize: '13px', padding: '10px 18px', borderRadius: '9999px', textDecoration: 'none', flexShrink: 0 }}>
            <span style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#0F0F0F', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', color: '#F5C842' }}>→</span>
            Book Consultation
          </a>
        </div>
      </div>

      {/* Services list */}
      <section style={{ padding: isMobile ? '48px 0' : '64px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          {services.map((svc, i) => (
            <div key={svc.slug} style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '24px' : '64px', alignItems: 'center', padding: isMobile ? '40px 0' : '64px 0', borderBottom: '0.5px solid rgba(15,15,15,0.08)' }}>

              {/* Content — alternates sides on desktop */}
              <div style={{ order: isMobile ? 1 : (i % 2 === 1 ? 2 : 1) }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'rgba(15,15,15,0.25)', marginBottom: '12px', display: 'block' }}>{svc.num}</span>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2rem' : 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0F0F0F', margin: '0 0 16px', lineHeight: 1.15 }}>{svc.title}</h2>
                <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(15,15,15,0.58)', margin: '0 0 20px' }}>{svc.desc}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                  {svc.tags.map(tag => (
                    <span key={tag} style={{ fontSize: '12px', padding: '5px 12px', borderRadius: '9999px', backgroundColor: 'rgba(15,15,15,0.05)', color: 'rgba(15,15,15,0.5)', fontWeight: 500 }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: '#0F0F0F' }}>{svc.price}</span>
                  <span style={{ fontSize: '13px', color: 'rgba(15,15,15,0.4)' }}>{svc.duration}</span>
                  <Link href={`/services/${svc.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, color: '#0F0F0F', textDecoration: 'none', marginLeft: 'auto' }}>
                    <span style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: svc.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>→</span>
                    Learn more
                  </Link>
                </div>
              </div>

              {/* Visual */}
<div style={{ order: isMobile ? 0 : (i % 2 === 1 ? 1 : 2), borderRadius: '24px', aspectRatio: '4/3', display: 'flex', flexDirection: 'column' as const, alignItems: 'flex-start', justifyContent: 'flex-end', backgroundColor: svc.bg, padding: '32px', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', top: '24px', right: '24px', fontFamily: 'var(--font-serif)', fontSize: '80px', fontStyle: 'italic', opacity: 0.08, color: '#0F0F0F', lineHeight: 1 }}>{svc.num}</div>
  <div style={{ position: 'relative', zIndex: 1 }}>
    <div style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '1.4rem' : '1.6rem', fontStyle: 'italic', color: '#0F0F0F', lineHeight: 1.3, marginBottom: '12px', maxWidth: '260px' }}>
      {svc.tagline}
    </div>
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' as const }}>
      {svc.tags.slice(0, 3).map(tag => (
        <span key={tag} style={{ fontSize: '11px', padding: '4px 10px', borderRadius: '9999px', backgroundColor: 'rgba(15,15,15,0.06)', color: 'rgba(15,15,15,0.5)', fontWeight: 500 }}>{tag}</span>
      ))}
    </div>
  </div>
</div>

            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}