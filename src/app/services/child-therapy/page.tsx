import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Child Therapy Toronto | Sun Wave Counselling',
  description: 'Play-based child therapy in Toronto. A safe, creative space for kids to explore feelings and build resilience. Online sessions with Khadija Lokhandwala.',
  alternates: { canonical: 'https://sunwavecounselling.com/services/child-therapy' },
}

const JANE_URL = 'https://sunwavecounsellingservices.janeapp.com'

const faqs = [
  { q: 'What age range is child therapy for?', a: 'Child therapy is generally suited for children aged 5–12. For teenagers, teenage therapy is a better fit.' },
  { q: 'How does play-based therapy work?', a: 'Play is how children naturally communicate and process emotions. Through games, stories, art, and creative activities, children explore feelings in a way that feels natural and safe.' },
  { q: 'Will I know what my child discusses in sessions?', a: 'Parents receive general updates on themes and progress. Specific details are kept confidential to maintain a safe space for the child, with exceptions for safety concerns.' },
  { q: 'How many sessions does my child need?', a: 'This depends on the child and what they\'re working through. We\'ll discuss goals at the start and check in regularly on progress.' },
  { q: 'Are sessions online?', a: 'Yes, sessions are held via secure video. Many children actually adapt quickly to online sessions and find them comfortable.' },
]

const whatItems = [
  { num: '01', title: 'Emotional expression', desc: 'Helping kids identify and express their feelings in healthy, constructive ways.' },
  { num: '02', title: 'Coping skills', desc: 'Building practical tools children can use when things feel hard at home, school, or with friends.' },
  { num: '03', title: 'Confidence & resilience', desc: 'Discovering strengths and building the confidence to navigate challenges.' },
  { num: '04', title: 'Family & school challenges', desc: 'Working through difficulties at home, with siblings, or in the classroom environment.' },
]

const S: Record<string, React.CSSProperties> = {
  page: { backgroundColor: '#FAFAF7', minHeight: '100vh' },
  hero: { paddingTop: '120px', paddingBottom: '80px' },
  inner: { maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' },
  innerNarrow: { maxWidth: '720px', margin: '0 auto', padding: '0 2rem' },
  eyebrow: { fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#1A7A7A', marginBottom: '16px', display: 'block' },
  h1: { fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', lineHeight: 1.1, color: '#0F0F0F', margin: '0 0 24px' },
  h1Italic: { fontStyle: 'italic', color: '#1A7A7A' },
  lead: { fontSize: '17px', lineHeight: 1.8, color: 'rgba(15,15,15,0.6)', margin: '0 0 32px', maxWidth: '560px' },
  tags: { display: 'flex', gap: '8px', flexWrap: 'wrap' as const, marginBottom: '32px' },
  tag: { fontSize: '12px', padding: '6px 14px', borderRadius: '9999px', backgroundColor: '#E8F4F3', color: '#1A7A7A', fontWeight: 500 },
  cta: { display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#0F0F0F', color: '#FAFAF7', fontWeight: 600, fontSize: '14px', padding: '14px 24px', borderRadius: '9999px', textDecoration: 'none' },
  ctaIcon: { width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#1A7A7A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'white', flexShrink: 0 },
  whatSection: { backgroundColor: '#0F0F0F', padding: '80px 0' },
  whatGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginTop: '40px' },
  whatCard: { backgroundColor: 'rgba(26,122,122,0.08)', border: '0.5px solid rgba(26,122,122,0.2)', borderRadius: '16px', padding: '24px' },
  whatNum: { fontFamily: 'var(--font-serif)', fontSize: '24px', color: 'rgba(26,122,122,0.5)', marginBottom: '10px', display: 'block' },
  whatTitle: { fontSize: '14px', fontWeight: 600, color: 'white', marginBottom: '6px' },
  whatDesc: { fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 },
  sectionH2: { fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: 'white', margin: 0 },
  sectionH2Dark: { fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0F0F0F', margin: 0 },
  italic: { fontStyle: 'italic', color: '#1A7A7A' },
  faqSection: { padding: '80px 0' },
  faqItem: { borderBottom: '0.5px solid rgba(15,15,15,0.08)', padding: '20px 0' },
  faqQ: { fontSize: '15px', fontWeight: 600, color: '#0F0F0F', marginBottom: '8px' },
  faqA: { fontSize: '14px', lineHeight: 1.75, color: 'rgba(15,15,15,0.58)' },
  priceSection: { backgroundColor: '#E8F4F3', padding: '64px 0', textAlign: 'center' as const },
  priceInner: { maxWidth: '480px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '16px' },
  priceNum: { fontFamily: 'var(--font-serif)', fontSize: '64px', color: '#0F0F0F', lineHeight: 1, fontStyle: 'italic' },
  priceSub: { fontSize: '14px', color: 'rgba(15,15,15,0.5)' },
  priceH2: { fontFamily: 'var(--font-serif)', fontSize: '24px', color: '#0F0F0F', margin: 0 },
}

export default function ChildTherapyPage() {
  return (
    <div style={S.page}>
      <Navbar />
      <section style={S.hero}>
        <div style={S.inner}>
          <span style={S.eyebrow}>Child Therapy · $100 · 60 min</span>
          <h1 style={S.h1}>A safe space to<br /><em style={S.h1Italic}>grow and feel heard.</em></h1>
          <p style={S.lead}>Child therapy is a safe space where kids can explore their feelings, navigate challenges at home, school, or with friends, and discover their inner strengths through play, stories, and creative activities.</p>
          <div style={S.tags}>
            {['Play-based', 'Creative', 'School challenges', 'Home & family', 'Confidence', 'Resilience', 'Coping skills'].map(t => (
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
          <div style={S.priceSub}>per 60-minute session · online</div>
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