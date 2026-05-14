'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const JANE_URL = 'https://sunwavecounsellingservices.janeapp.com'

const faqs = [
  {
    q: 'Do I need a referral to start therapy?',
    a: 'No referral needed. You can book directly through the free consultation link. Just reach out and we\'ll take it from there.',
  },
  {
    q: 'Are sessions covered by insurance?',
    a: 'Many extended health benefit plans cover psychotherapy services. We recommend contacting your insurance provider directly to confirm your coverage, session limits, and any requirements before your first appointment.',
  },
  {
    q: 'How do online sessions work?',
    a: 'Sessions are held via a secure video platform. You\'ll receive a link before each session. All you need is a private space, a stable internet connection, and a device with a camera and microphone.',
  },
  {
    q: 'How long does therapy take?',
    a: 'It depends on what you\'re working through and what your goals are. Some people find a few months helpful, others prefer longer-term support. We\'ll discuss this together and check in regularly to make sure the pace works for you.',
  },
  {
    q: 'What\'s the difference between individual and couples therapy?',
    a: 'Individual therapy focuses entirely on you — your thoughts, patterns, emotions, and goals. Couples therapy focuses on the relationship dynamic between two partners — communication, conflict, connection, and shared goals.',
  },
  {
    q: 'Do you offer therapy for children?',
    a: 'Yes. Child therapy uses play-based and creative approaches that are age-appropriate and effective. Sessions are designed to help kids explore their feelings and develop coping skills in a safe, comfortable environment.',
  },
  {
    q: 'What if my teen doesn\'t want to come?',
    a: 'That\'s more common than you\'d think. The free consultation is a good first step — it\'s a low-pressure way to explore whether therapy might be helpful and to ask any questions before committing to sessions.',
  },
  {
    q: 'Is everything I share confidential?',
    a: 'Yes, with standard legal and ethical exceptions — for example, if there is a risk of serious harm to you or someone else, or if required by law. Confidentiality and its limits will be discussed in your first session.',
  },
  {
    q: 'How do I book a session?',
    a: 'Start with a free 25-minute consultation by clicking the Book button on this site. It\'s a relaxed call to see if we\'re a good fit — no pressure, no commitment.',
  },
  {
    q: 'What if I\'m on the waitlist?',
    a: 'If spots are full, you can add yourself to the waitlist through Jane App. You\'ll be contacted as soon as a spot opens up.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Please provide at least 24 hours notice if you need to cancel or reschedule a session. Late cancellations may be subject to a fee.',
  },
  {
    q: 'Do you offer sliding scale or reduced fees?',
    a: 'A limited number of reduced-fee spots may be available for those experiencing financial hardship. Please reach out directly to discuss — sunwavecounselling@gmail.com.',
  },
]

const S: Record<string, React.CSSProperties> = {
  page: { backgroundColor: '#FAFAF7', minHeight: '100vh' },
  hero: { paddingTop: '120px', paddingBottom: '64px' },
  inner: { maxWidth: '720px', margin: '0 auto', padding: '0 2rem' },
  eyebrow: { fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#3DD6D0', marginBottom: '16px', display: 'block' },
  h1: { fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', lineHeight: 1.1, color: '#0F0F0F', margin: '0 0 20px' },
  h1Italic: { fontStyle: 'italic', color: '#F5C842' },
  lead: { fontSize: '16px', lineHeight: 1.8, color: 'rgba(15,15,15,0.55)', margin: 0 },
  faqSection: { padding: '0 0 80px' },
  faqItem: { borderBottom: '0.5px solid rgba(15,15,15,0.08)' },
  faqQ: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', cursor: 'pointer', gap: '16px' },
  faqQText: { fontSize: '16px', fontWeight: 500, color: '#0F0F0F', lineHeight: 1.4 },
  faqIcon: { width: '28px', height: '28px', borderRadius: '50%', border: '0.5px solid rgba(15,15,15,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', color: 'rgba(15,15,15,0.4)', flexShrink: 0, transition: 'all 0.2s' },
  faqA: { fontSize: '15px', lineHeight: 1.75, color: 'rgba(15,15,15,0.6)', paddingBottom: '20px' },
  ctaSection: { backgroundColor: '#F5E8D0', padding: '80px 0', textAlign: 'center' as const },
  ctaInner: { maxWidth: '500px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '20px' },
  ctaH2: { fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0F0F0F', margin: 0 },
  ctaSub: { fontSize: '15px', color: 'rgba(15,15,15,0.55)', lineHeight: 1.7, margin: 0 },
  cta: { display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#0F0F0F', color: '#FAFAF7', fontWeight: 600, fontSize: '14px', padding: '14px 24px', borderRadius: '9999px', textDecoration: 'none' },
  ctaIcon: { width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#F5C842', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#0F0F0F', flexShrink: 0 },
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={S.faqItem}>
      <div style={S.faqQ} onClick={() => setOpen(!open)}>
        <span style={S.faqQText}>{q}</span>
        <span style={{ ...S.faqIcon, backgroundColor: open ? '#0F0F0F' : 'transparent', color: open ? '#F5C842' : 'rgba(15,15,15,0.4)', borderColor: open ? '#0F0F0F' : 'rgba(15,15,15,0.15)' }}>
          {open ? '−' : '+'}
        </span>
      </div>
      {open && <div style={S.faqA}>{a}</div>}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div style={S.page}>
      <Navbar />

      <section style={S.hero}>
        <div style={S.inner}>
          <span style={S.eyebrow}>FAQ</span>
          <h1 style={S.h1}>
            Questions you might<br />
            <em style={S.h1Italic}>be wondering.</em>
          </h1>
          <p style={S.lead}>
            Starting therapy comes with a lot of questions — that&apos;s completely normal. Here are the ones that come up most often.
          </p>
        </div>
      </section>

      <section style={S.faqSection}>
        <div style={S.inner}>
          {faqs.map(faq => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      <section style={S.ctaSection}>
        <div style={S.ctaInner}>
          <h2 style={S.ctaH2}>Still have <em style={{ fontStyle: 'italic' }}>questions?</em></h2>
          <p style={S.ctaSub}>Book a free 25-minute consultation and ask anything — no commitment required.</p>
          <a href={JANE_URL} target="_blank" rel="noopener noreferrer" style={S.cta}>
            <span style={S.ctaIcon}>→</span>
            Book Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}