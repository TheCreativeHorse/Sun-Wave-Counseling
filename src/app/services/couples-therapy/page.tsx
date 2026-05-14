import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Couples Therapy Toronto | Sun Wave Counselling',
  description: 'Couples therapy in Toronto. A safe space to improve communication, rebuild trust, and reconnect. Online sessions with Khadija Lokhandwala. Book a free consultation.',
  alternates: { canonical: 'https://sunwavecounselling.com/services/couples-therapy' },
}

const JANE_URL = 'https://sunwavecounsellingservices.janeapp.com'

const faqs = [
  { q: 'Do both partners need to attend every session?', a: 'Yes, couples therapy works best when both partners attend together. Occasionally individual sessions may be recommended as a supplement.' },
  { q: 'We argue a lot — is therapy still helpful?', a: 'Absolutely. Conflict is often a sign that both partners care but don\'t yet have the tools to communicate effectively. That\'s exactly what we work on.' },
  { q: 'What if one of us is reluctant?', a: 'That\'s very common. A free consultation is a low-pressure way for both of you to ask questions and see if it feels right before committing.' },
  { q: 'How long does couples therapy take?', a: 'It depends on what you\'re working through. Many couples find 8–16 sessions helpful. We\'ll set goals together and check in on progress regularly.' },
  { q: 'Are sessions online?', a: 'Yes — all sessions are via secure video. Both partners can join from the same location or separately if needed.' },
]

const whatItems = [
  { num: '01', title: 'Communication', desc: 'Learning to actually hear each other — not just wait for your turn to speak. Building patterns that work.' },
  { num: '02', title: 'Conflict resolution', desc: 'Moving from arguments that go in circles to conversations that actually resolve something.' },
  { num: '03', title: 'Trust & intimacy', desc: 'Rebuilding connection and closeness — emotional and physical — when it\'s felt distant.' },
  { num: '04', title: 'Understanding each other', desc: 'Getting underneath the surface reactions to understand what\'s actually going on for both of you.' },
]

const S: Record<string, React.CSSProperties> = {
  page: { backgroundColor: '#FAFAF7', minHeight: '100vh' },
  hero: { paddingTop: '120px', paddingBottom: '80px' },
  inner: { maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' },
  innerNarrow: { maxWidth: '720px', margin: '0 auto', padding: '0 2rem' },
  eyebrow: { fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#3DD6D0', marginBottom: '16px', display: 'block' },
  h1: { fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', lineHeight: 1.1, color: '#0F0F0F', margin: '0 0 24px' },
  h1Italic: { fontStyle: 'italic', color: '#F5C842' },
  lead: { fontSize: '17px', lineHeight: 1.8, color: 'rgba(15,15,15,0.6)', margin: '0 0 32px', maxWidth: '560px' },
  tags: { display: 'flex', gap: '8px', flexWrap: 'wrap' as const, marginBottom: '32px' },
  tag: { fontSize: '12px', padding: '6px 14px', borderRadius: '9999px', backgroundColor: '#FDF6E3', color: '#7A5E00', fontWeight: 500 },
  cta: { display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#0F0F0F', color: '#FAFAF7', fontWeight: 600, fontSize: '14px', padding: '14px 24px', borderRadius: '9999px', textDecoration: 'none' },
  ctaIcon: { width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#F5C842', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#0F0F0F', flexShrink: 0 },
  whatSection: { backgroundColor: '#0F0F0F', padding: '80px 0' },
  whatGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginTop: '40px' },
  whatCard: { backgroundColor: 'rgba(245,200,66,0.06)', border: '0.5px solid rgba(245,200,66,0.15)', borderRadius: '16px', padding: '24px' },
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
  priceSection: { backgroundColor: '#FDF6E3', padding: '64px 0', textAlign: 'center' as const },
  priceInner: { maxWidth: '480px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '16px' },
  priceNum: { fontFamily: 'var(--font-serif)', fontSize: '64px', color: '#0F0F0F', lineHeight: 1, fontStyle: 'italic' },
  priceSub: { fontSize: '14px', color: 'rgba(15,15,15,0.5)' },
  priceH2: { fontFamily: 'var(--font-serif)', fontSize: '24px', color: '#0F0F0F', margin: 0 },
}

export default function CouplesTherapyPage() {
  return (
    <div style={S.page}>
      <Navbar />
      <section style={S.hero}>
        <div style={S.inner}>
          <span style={S.eyebrow}>Couples Therapy · $140 · 60 min</span>
          <h1 style={S.h1}>For relationships worth<br /><em style={S.h1Italic}>fighting for.</em></h1>
          <p style={S.lead}>Couples therapy provides a safe and supportive space for partners to strengthen their connection and navigate challenges together — improving communication, resolving conflict, and rebuilding intimacy.</p>
          <div style={S.tags}>
            {['Communication', 'Trust', 'Conflict resolution', 'Reconnection', 'Intimacy', 'Understanding'].map(t => (
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
          <div style={S.priceNum}>$140</div>
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