import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Individual Therapy Toronto | Sun Wave Counselling',
  description: 'Individual therapy in Toronto for anxiety, depression, burnout, identity, and life transitions. Online sessions with Khadija Lokhandwala. Book a free consultation.',
  alternates: { canonical: 'https://sunwavecounselling.com/services/individual-therapy' },
}

const JANE_URL = 'https://sunwavecounsellingservices.janeapp.com'

const faqs = [
  { q: 'How long are individual therapy sessions?', a: 'Sessions are 50 minutes. Most clients start with weekly sessions and adjust frequency as they progress.' },
  { q: 'What issues do you help with?', a: 'Anxiety, depression, burnout, overthinking, work stress, identity questions, relationship difficulties, and major life transitions.' },
  { q: 'How many sessions will I need?', a: 'This varies for everyone. Some people find 8–12 sessions helpful, others prefer ongoing support. We\'ll discuss your goals and check in regularly.' },
  { q: 'Do you offer online sessions?', a: 'Yes — all sessions are online via secure video. You can join from anywhere in Ontario.' },
  { q: 'How do I get started?', a: 'Book a free 25-minute consultation. It\'s a relaxed call to see if we\'re a good fit — no pressure, no commitment.' },
]

const S: Record<string, React.CSSProperties> = {
  page: { backgroundColor: '#FAFAF7', minHeight: '100vh' },
  hero: { paddingTop: '120px', paddingBottom: '80px', backgroundColor: '#FAFAF7' },
  inner: { maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' },
  innerNarrow: { maxWidth: '720px', margin: '0 auto', padding: '0 2rem' },
  eyebrow: { fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#3DD6D0', marginBottom: '16px', display: 'block' },
  h1: { fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', lineHeight: 1.1, color: '#0F0F0F', margin: '0 0 24px' },
  h1Italic: { fontStyle: 'italic', color: '#F5C842' },
  lead: { fontSize: '17px', lineHeight: 1.8, color: 'rgba(15,15,15,0.6)', margin: '0 0 32px', maxWidth: '560px' },
  tags: { display: 'flex', gap: '8px', flexWrap: 'wrap' as const, marginBottom: '32px' },
  tag: { fontSize: '12px', padding: '6px 14px', borderRadius: '9999px', backgroundColor: '#E8F4F3', color: '#1A7A7A', fontWeight: 500 },
  cta: { display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#0F0F0F', color: '#FAFAF7', fontWeight: 600, fontSize: '14px', padding: '14px 24px', borderRadius: '9999px', textDecoration: 'none' },
  ctaIcon: { width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#F5C842', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#0F0F0F', flexShrink: 0 },
  whatSection: { backgroundColor: '#0F0F0F', padding: '80px 0' },
  whatGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginTop: '40px' },
  whatCard: { backgroundColor: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '24px' },
  whatNum: { fontFamily: 'var(--font-serif)', fontSize: '24px', color: 'rgba(245,200,66,0.3)', marginBottom: '10px', display: 'block' },
  whatTitle: { fontSize: '14px', fontWeight: 600, color: 'white', marginBottom: '6px' },
  whatDesc: { fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 },
  sectionH2: { fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: 'white', margin: 0 },
  sectionH2Dark: { fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0F0F0F', margin: 0 },
  italic: { fontStyle: 'italic', color: '#F5C842' },
  faqSection: { padding: '80px 0' },
  faqItem: { borderBottom: '0.5px solid rgba(15,15,15,0.08)', padding: '20px 0' },
  faqQ: { fontSize: '15px', fontWeight: 600, color: '#0F0F0F', marginBottom: '8px' },
  faqA: { fontSize: '14px', lineHeight: 1.75, color: 'rgba(15,15,15,0.58)' },
  priceSection: { backgroundColor: '#F5E8D0', padding: '64px 0', textAlign: 'center' as const },
  priceInner: { maxWidth: '480px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '16px' },
  priceNum: { fontFamily: 'var(--font-serif)', fontSize: '64px', color: '#0F0F0F', lineHeight: 1, fontStyle: 'italic' },
  priceSub: { fontSize: '14px', color: 'rgba(15,15,15,0.5)' },
  priceH2: { fontFamily: 'var(--font-serif)', fontSize: '24px', color: '#0F0F0F', margin: 0 },
}

const whatItems = [
  { num: '01', title: 'Understand your patterns', desc: 'We look at the thoughts, behaviours, and beliefs that are keeping you stuck — and start to shift them.' },
  { num: '02', title: 'Build practical tools', desc: 'You leave sessions with real strategies you can use — not just insight, but actual skills for managing what you\'re going through.' },
  { num: '03', title: 'Gain clarity', desc: 'Sometimes you just need a space to think out loud with someone who won\'t judge you. That\'s what this is.' },
  { num: '04', title: 'Move forward', desc: 'Whether that means feeling less anxious, handling stress better, or just feeling more like yourself — we work toward what matters to you.' },
]

export default function IndividualTherapyPage() {
  return (
    <div style={S.page}>
      <Navbar />

      <section style={S.hero}>
        <div style={S.inner}>
          <span style={S.eyebrow}>Individual Therapy · $100 · 50 min</span>
          <h1 style={S.h1}>
            A space that&apos;s entirely<br />
            <em style={S.h1Italic}>yours.</em>
          </h1>
          <p style={S.lead}>
            Individual therapy is a safe space to untangle your thoughts, navigate life&apos;s challenges, and discover your inner strengths. Together, we explore emotions, build coping skills, and create practical tools to help you move forward.
          </p>
          <div style={S.tags}>
            {['Anxiety', 'Depression', 'Burnout', 'Overthinking', 'Work stress', 'Identity', 'Life transitions'].map(t => (
              <span key={t} style={S.tag}>{t}</span>
            ))}
          </div>
          <a href={JANE_URL} target="_blank" rel="noopener noreferrer" style={S.cta}>
            <span style={S.ctaIcon}>→</span>
            Book Consultation
          </a>
        </div>
      </section>

      <section style={S.whatSection}>
        <div style={S.inner}>
          <h2 style={S.sectionH2}>What we <em style={S.italic}>work on</em></h2>
          <div style={S.whatGrid}>
            {whatItems.map(item => (
              <div key={item.num} style={S.whatCard}>
                <span style={S.whatNum}>{item.num}</span>
                <div style={S.whatTitle}>{item.title}</div>
                <div style={S.whatDesc}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={S.faqSection}>
        <div style={S.innerNarrow}>
          <h2 style={{ ...S.sectionH2Dark, marginBottom: '40px' }}>Common <em style={S.italic}>questions</em></h2>
          {faqs.map(faq => (
            <div key={faq.q} style={S.faqItem}>
              <div style={S.faqQ}>{faq.q}</div>
              <div style={S.faqA}>{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={S.priceSection}>
        <div style={S.priceInner}>
          <div style={S.priceNum}>$100</div>
          <div style={S.priceSub}>per 50-minute session · online</div>
          <h2 style={S.priceH2}>Start with a free consultation</h2>
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