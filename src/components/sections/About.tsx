'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useIsMobile } from '@/hooks/useIsMobile'

const S: Record<string, React.CSSProperties> = {
  section: { backgroundColor: '#FAFAF7', padding: '80px 0' },
  badge: { position: 'absolute' as const, bottom: '28px', right: '16px', backgroundColor: 'white', borderRadius: '16px', padding: '16px 20px', boxShadow: '0 8px 32px rgba(0,0,0,0.10)', display: 'flex', flexDirection: 'column' as const, gap: '8px', minWidth: '172px' },
  badgeLabel: { fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'rgba(15,15,15,0.3)', marginBottom: '2px' },
  badgeItem: { fontSize: '12px', fontWeight: 500, color: '#0F0F0F', display: 'flex', alignItems: 'center', gap: '8px' },
  badgeDot: { width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#3DD6D0', flexShrink: 0 },
  eyebrow: { fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#3DD6D0' },
  h2: { fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', lineHeight: 1.2, color: '#0F0F0F', margin: 0 },
  h2Italic: { fontStyle: 'italic', color: '#F5C842' },
  body: { fontSize: '15px', lineHeight: 1.8, color: 'rgba(15,15,15,0.58)', margin: 0 },
  tagTeal: { fontSize: '12px', padding: '6px 14px', borderRadius: '9999px', backgroundColor: '#E8F4F3', color: '#1A7A7A', fontWeight: 500 },
  tagGrey: { fontSize: '12px', padding: '6px 14px', borderRadius: '9999px', backgroundColor: '#F0EFED', color: 'rgba(15,15,15,0.5)', fontWeight: 500 },
  linkArrow: { width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#F5C842', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#0F0F0F', flexShrink: 0 },
}

export default function About() {
  const isMobile = useIsMobile()

  return (
    <section style={S.section}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '48px' : '80px', alignItems: 'center' }}>

          {/* Image */}
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '24px', overflow: 'hidden', aspectRatio: isMobile ? '4/3' : '4/5', position: 'relative', backgroundColor: '#E8F4F3' }}>
              <Image src="/images/khadija-photo.jpg" alt="Khadija Lokhandwala — Toronto Psychotherapist" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
            {!isMobile && (
              <div style={S.badge}>
                <div style={S.badgeLabel}>Approach</div>
                {['CBT', 'Narrative Therapy', 'Expressive Arts'].map(a => (
                  <div key={a} style={S.badgeItem}><span style={S.badgeDot} />{a}</div>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span style={S.eyebrow}>Your therapist</span>
            <h2 style={S.h2}>
              Hi, I&apos;m Khadija.<br />
              Let&apos;s figure this out{' '}
              <em style={S.h2Italic}>together.</em>
            </h2>
            <p style={S.body}>
              I&apos;m Khadija — and I get it. Life gets heavy, relationships get complicated, and sometimes your own brain feels like your biggest obstacle. I&apos;m here to help you make sense of it all, without the judgment.
            </p>
            <p style={S.body}>
              I work with teenagers, young adults, individuals, and couples using a blend of Narrative Therapy, CBT, and expressive arts — helping you understand your patterns and build real tools to move forward.
            </p>
            {isMobile && (
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['CBT', 'Narrative Therapy', 'Expressive Arts'].map(t => <span key={t} style={S.tagTeal}>{t}</span>)}
              </div>
            )}
            {!isMobile && (
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['CBT', 'Narrative Therapy', 'Expressive Arts'].map(t => <span key={t} style={S.tagTeal}>{t}</span>)}
                {['Toronto-based', 'Online · Ontario'].map(t => <span key={t} style={S.tagGrey}>{t}</span>)}
              </div>
            )}
            <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 600, color: '#0F0F0F', textDecoration: 'none', width: 'fit-content' }}>
              <span style={S.linkArrow}>→</span>
              Full story &amp; approach
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}