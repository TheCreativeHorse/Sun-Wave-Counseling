import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Teenage Therapy Toronto | Sun Wave Counselling',
  description: 'Therapy for teenagers in Toronto. A safe, confidential space for teens dealing with school stress, anxiety, friendships, and family challenges. Online sessions available.',
  alternates: { canonical: 'https://sunwavecounselling.com/services/teenage-therapy' },
}

const JANE_URL = 'https://sunwavecounsellingservices.janeapp.com'

const faqs = [
  { q: 'How old do teens need to be for therapy?', a: 'Teenage therapy is generally for those aged 13–17. For younger children, child therapy is a better fit.' },
  { q: 'Will my parents know what I talk about?', a: 'Sessions are confidential. What you share stays between you and your therapist, with standard exceptions for safety concerns.' },
  { q: 'What if my teen is reluctant to come?', a: 'That\'s very common. A free consultation is a low-pressure way to explore whether therapy might help before committing to sessions.' },
  { q: 'How do online sessions work for teens?', a: 'Sessions are held via secure video. Teens can join from home, which many find more comfortable than an office setting.' },
  { q: 'How do I book?', a: 'Book a free 25-minute consultation through the link on this page. We\'ll discuss what your teen is going through and whether it\'s a good fit.' },
]

const whatItems = [
  { num: '01', title: 'School & academic stress', desc: 'Exams, expectations, pressure to perform — we build tools to manage stress and find balance.' },
  { num: '02', title: 'Friendships & social life', desc: 'Navigating friendships, social anxiety, fitting in, and dealing with conflict.' },
  { num: '03', title: 'Family dynamics', desc: 'Communication with parents, family conflict, and finding your place at home.' },
  { num: '04', title: 'Identity & self-esteem', desc: 'Figuring out who you are, building confidence, and feeling good about yourself.' },
]

const S: Record<string, React.CSSProperties> = {
  page: { backgroundColor: '#FAFAF7', minHeight: '100vh' },
  hero: { paddingTop: '120px', paddingBottom: '80px' },
  inner: { maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' },
  innerNarrow: { maxWidth: '720px', margin: '0 auto', padding: '0 2rem' },
  eyebrow: { fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#3DD6D0', marginBottom: '16px', display: 'block' },
  h1: { fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', lineHeight: 1.1, color: '#0F0F0F', margin: '0 0 24px' },
  h1Italic: { fontStyle: 'italic', color: '#3DD6D0' },
  lead: { fontSize: '17px', lineHeight: 1.8, color: 'rgba(15,15,15,0.6)', margin: '0 0 32px', maxWidth: '560px' },
  tags: { display: 'flex', gap: '8px', flexWrap: 'wrap' as const, marginBottom: '32px' },
  tag: { fontSize: '12px', padding: '6px 14px', borderRadius: '9999px', backgroundColor: '#E8F4F3', color: '#1A7A7A', fontWeight: 500 },
  cta: { display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#0F0F0F', color: '#FAFAF7', fontWeight: 600, fontSize: '14px', padding: '14px 24px', borderRadius: '9999px', textDecoration: 'none' },
  ctaIcon: { width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#3DD6D0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#0F0F0F', flexShrink: 0 },
  whatSection: { backgroundColor: '#0F0F0F', padding: '80px 0' },
  whatGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginTop: '40px' },
  whatCard: { backgroundColor: 'rgba(61,214,208,0.06)', border: '0.5px solid rgba(61,214,208,0.15)', borderRadius: '16px', padding: '24px' },
  whatNum: { fontFamily: 'var(--font-serif)', fontSize: '24px', color: 'rgba(61,214,208,0.3)', marginBottom: '10px', display: 'block' },
  whatTitle: { fontSize: '14px', fontWeight: 600, color: 'white', marginBottom: '6px' },
  whatDesc: { fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 },
  sectionH2: { fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: 'white', margin: 0 },
  sectionH2Dark: { fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0F0F0F', margin: 0 },
  italic: { fontStyle: 'italic', color: '#3DD6D0' },
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

export default function TeenageTherapyPage() {
  return (
    <div style={S.page}>
      <Navbar />
      <section style={S.hero}>
        <div style={S.inner}>
          <span style={S.eyebrow}>Teenage Therapy · $100 · 60 min</span>
          <h1 style={S.h1}>A space where you don&apos;t have to<br /><em style={S.h1Italic}>perform.</em></h1>
          <p style={S.lead}>Teenage therapy offers a confidential and understanding space for teens to talk about school, relationships, friendships, family, stress, anxiety, or any challenges they&apos;re facing.</p>
          <div style={S.tags}>
            {['School stress', 'Anxiety', 'Friendships', 'Family', 'Confidence', 'Identity', 'Emotional challenges'].map(t => (
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