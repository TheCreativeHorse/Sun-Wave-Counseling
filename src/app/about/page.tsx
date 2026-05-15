'use client'

import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { useIsMobile } from '@/hooks/useIsMobile'

const JANE_URL = 'https://sunwavecounsellingservices.janeapp.com'

const approaches = [
  { num: '01', title: 'Narrative Therapy', desc: 'We look at the stories you tell yourself — about who you are, what you\'re capable of, what you deserve — and work to rewrite the ones that are holding you back.' },
  { num: '02', title: 'Cognitive Behavioural Therapy (CBT)', desc: 'We identify the thought patterns and behaviours that keep you stuck, and build practical tools to shift them. Evidence-based, goal-oriented, and genuinely useful.' },
  { num: '03', title: 'Expressive Arts', desc: 'Not everything can be put into words. Sometimes we use creative approaches to access emotions and experiences that are hard to articulate — but important to process.' },
]

const values = [
  { title: 'No judgment, ever', desc: 'Whatever you bring to sessions — the messy, the complicated, the things you\'ve never said out loud — this is a space where you\'re met with understanding, not evaluation.' },
  { title: 'At your pace', desc: 'There\'s no agenda here. We move at whatever speed feels right for you. Therapy isn\'t a race, and progress looks different for everyone.' },
  { title: 'Practical tools', desc: 'Understanding yourself is important — but so is being able to actually do something with that understanding. We focus on building real skills you can use outside of sessions.' },
  { title: 'Genuine collaboration', desc: 'You\'re the expert on your own life. My job is to ask the right questions, offer perspective, and work alongside you — not to hand down answers.' },
]

export default function AboutPage() {
  const isMobile = useIsMobile()

  return (
    <div style={{ backgroundColor: '#FAFAF7', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ paddingTop: isMobile ? '90px' : '120px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '40px' : '80px', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#3DD6D0', marginBottom: '16px', display: 'block' }}>Your therapist</span>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2.6rem' : 'clamp(2.4rem, 5vw, 3.6rem)', lineHeight: 1.1, color: '#0F0F0F', margin: '0 0 24px' }}>
                Hi, I&apos;m Khadija.<br />
                <em style={{ fontStyle: 'italic', color: '#F5C842' }}>Nice to meet you.</em>
              </h1>
              <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'rgba(15,15,15,0.6)', margin: '0 0 32px' }}>
                I&apos;m a Toronto-based psychotherapist who works with teenagers, young adults, individuals, and couples navigating the hard stuff — anxiety, burnout, relationship challenges, identity questions, and the weight of major life transitions.
              </p>
              <a href={JANE_URL} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#0F0F0F', color: '#FAFAF7', fontWeight: 600, fontSize: '14px', padding: '14px 24px', borderRadius: '9999px', textDecoration: 'none' }}>
                <span style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#F5C842', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#0F0F0F', flexShrink: 0 }}>→</span>
                Book a free consultation
              </a>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '24px', overflow: 'hidden', aspectRatio: isMobile ? '4/3' : '4/5', position: 'relative', backgroundColor: '#E8F4F3' }}>
                <Image src="/Images/khadija-photo.jpg" alt="Khadija Lokhandwala — Psychotherapist Toronto" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority />
              </div>
              {!isMobile && (
                <div style={{ position: 'absolute', bottom: '28px', right: '-20px', backgroundColor: 'white', borderRadius: '16px', padding: '16px 20px', boxShadow: '0 8px 32px rgba(0,0,0,0.10)', display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '172px' }}>
                  <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'rgba(15,15,15,0.3)', marginBottom: '2px' }}>Approach</div>
                  {['CBT', 'Narrative Therapy', 'Expressive Arts'].map(a => (
                    <div key={a} style={{ fontSize: '12px', fontWeight: 500, color: '#0F0F0F', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#3DD6D0', flexShrink: 0 }} />{a}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section style={{ backgroundColor: '#0F0F0F', padding: isMobile ? '56px 0' : '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2rem' : 'clamp(1.8rem, 3vw, 2.6rem)', color: 'white', margin: '0 0 40px' }}>
            My <em style={{ fontStyle: 'italic', color: '#F5C842' }}>approach</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
            {approaches.map(a => (
              <div key={a.num} style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '28px' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: 'rgba(245,200,66,0.3)', marginBottom: '12px', display: 'block' }}>{a.num}</span>
                <div style={{ fontSize: '16px', fontWeight: 600, color: 'white', marginBottom: '8px' }}>{a.title}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: '#FAFAF7', padding: isMobile ? '56px 0' : '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2rem' : 'clamp(1.8rem, 3vw, 2.6rem)', color: '#0F0F0F', margin: '0 0 40px' }}>
            What you can <em style={{ fontStyle: 'italic', color: '#F5C842' }}>expect</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: isMobile ? '32px' : '48px' }}>
            {values.map(v => (
              <div key={v.title} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ width: '32px', height: '3px', borderRadius: '2px', backgroundColor: '#F5C842' }} />
                <div style={{ fontSize: '16px', fontWeight: 600, color: '#0F0F0F' }}>{v.title}</div>
                <div style={{ fontSize: '14px', color: 'rgba(15,15,15,0.55)', lineHeight: 1.7 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#F5E8D0', padding: isMobile ? '56px 0' : '80px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2rem' : 'clamp(1.8rem, 3vw, 2.6rem)', color: '#0F0F0F', margin: 0 }}>
            Ready to get <em style={{ fontStyle: 'italic' }}>started?</em>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(15,15,15,0.55)', lineHeight: 1.7, margin: 0 }}>
            Book a free 25-minute consultation — no commitment, just a conversation to see if we&apos;re the right fit.
          </p>
          <a href={JANE_URL} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#0F0F0F', color: '#FAFAF7', fontWeight: 600, fontSize: '14px', padding: '14px 24px', borderRadius: '9999px', textDecoration: 'none' }}>
            <span style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#F5C842', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#0F0F0F', flexShrink: 0 }}>→</span>
            Book Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}