import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Fees & Insurance | Sun Wave Counselling Services',
  description: 'Transparent pricing for therapy sessions in Toronto. Individual therapy from $100, couples therapy $140. Free 25-minute consultation available.',
  alternates: { canonical: 'https://sunwavecounselling.com/fees' },
}

const JANE_URL = 'https://sunwavecounsellingservices.janeapp.com'

const fees = [
  { service: 'Free Consultation', duration: '25 min', price: 'Free', desc: 'A relaxed call to see if we\'re a good fit. No commitment required.', accent: '#3DD6D0', highlight: true },
  { service: 'Individual Therapy', duration: '50 min', price: '$100', desc: 'For adults navigating anxiety, depression, burnout, identity, or life transitions.', accent: '#F5C842', highlight: false },
  { service: 'Teenage Therapy', duration: '60 min', price: '$100', desc: 'A confidential space for teens dealing with school, friendships, family, and more.', accent: '#3DD6D0', highlight: false },
  { service: 'Child Therapy', duration: '60 min', price: '$100', desc: 'Play-based and creative approaches to support kids through life\'s challenges.', accent: '#1A7A7A', highlight: false },
  { service: 'Couples Therapy', duration: '60 min', price: '$140', desc: 'For partners working through communication, trust, conflict, or disconnection.', accent: '#F5C842', highlight: false },
]

const S: Record<string, React.CSSProperties> = {
  page: { backgroundColor: '#FAFAF7', minHeight: '100vh' },
  hero: { paddingTop: '120px', paddingBottom: '64px' },
  inner: { maxWidth: '860px', margin: '0 auto', padding: '0 2rem' },
  innerWide: { maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' },
  eyebrow: { fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#3DD6D0', marginBottom: '16px', display: 'block' },
  h1: { fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', lineHeight: 1.1, color: '#0F0F0F', margin: '0 0 20px' },
  h1Italic: { fontStyle: 'italic', color: '#F5C842' },
  lead: { fontSize: '16px', lineHeight: 1.8, color: 'rgba(15,15,15,0.55)', margin: 0 },
  feesSection: { padding: '0 0 0' },
  feeCards: { display: 'flex', flexDirection: 'column' as const, gap: '12px', marginBottom: '48px' },
  feeCard: { borderRadius: '16px', padding: '24px 28px', display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', alignItems: 'center', border: '0.5px solid rgba(15,15,15,0.08)', backgroundColor: 'white' },
  feeCardHighlight: { borderRadius: '16px', padding: '24px 28px', display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', alignItems: 'center', border: '0.5px solid rgba(61,214,208,0.3)', backgroundColor: '#E8F4F3' },
  feeTitle: { fontSize: '16px', fontWeight: 600, color: '#0F0F0F', marginBottom: '4px' },
  feeDuration: { fontSize: '12px', color: 'rgba(15,15,15,0.4)', marginBottom: '6px' },
  feeDesc: { fontSize: '13px', color: 'rgba(15,15,15,0.55)', lineHeight: 1.6 },
  feePrice: { fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 400, textAlign: 'right' as const, whiteSpace: 'nowrap' as const },
  infoSection: { backgroundColor: '#0F0F0F', padding: '64px 0' },
  infoGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginTop: '40px' },
  infoCard: { backgroundColor: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '24px' },
  infoTitle: { fontSize: '14px', fontWeight: 600, color: 'white', marginBottom: '8px' },
  infoDesc: { fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 },
  sectionH2: { fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: 'white', margin: 0 },
  ctaSection: { padding: '80px 0', textAlign: 'center' as const },
  ctaInner: { maxWidth: '500px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '20px' },
  ctaH2: { fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0F0F0F', margin: 0 },
  ctaSub: { fontSize: '15px', color: 'rgba(15,15,15,0.55)', lineHeight: 1.7, margin: 0 },
  cta: { display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#0F0F0F', color: '#FAFAF7', fontWeight: 600, fontSize: '14px', padding: '14px 24px', borderRadius: '9999px', textDecoration: 'none' },
  ctaIcon: { width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#F5C842', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#0F0F0F', flexShrink: 0 },
}

const infoItems = [
  { title: 'Insurance coverage', desc: 'Many extended health benefit plans cover psychotherapy. Check with your provider before your first session to confirm your coverage and any limits.' },
  { title: 'Payment', desc: 'Payment is due at the time of your session. We accept major credit cards and e-transfer.' },
  { title: 'Cancellation policy', desc: 'Please provide at least 24 hours notice if you need to cancel or reschedule. Late cancellations may be subject to a fee.' },
  { title: 'Reduced-fee spots', desc: 'A limited number of reduced-fee spots may be available for those experiencing financial hardship. Please reach out to discuss.' },
]

export default function FeesPage() {
  return (
    <div style={S.page}>
      <Navbar />

      <section style={S.hero}>
        <div style={S.inner}>
          <span style={S.eyebrow}>Fees & Insurance</span>
          <h1 style={S.h1}>
            Transparent pricing,<br />
            <em style={S.h1Italic}>no surprises.</em>
          </h1>
          <p style={S.lead}>
            Knowing what to expect financially before you start makes everything easier. Here&apos;s a clear breakdown of session fees and what you need to know about insurance.
          </p>
        </div>
      </section>

      <section style={S.feesSection}>
        <div style={S.inner}>
          <div style={S.feeCards}>
            {fees.map(fee => (
              <div key={fee.service} style={fee.highlight ? S.feeCardHighlight : S.feeCard}>
                <div>
                  <div style={S.feeTitle}>{fee.service}</div>
                  <div style={S.feeDuration}>{fee.duration}</div>
                  <div style={S.feeDesc}>{fee.desc}</div>
                </div>
                <div style={{ ...S.feePrice, color: fee.accent }}>{fee.price}</div>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div style={{ backgroundColor: '#F5C842', borderRadius: '20px', padding: '28px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', flexWrap: 'wrap' as const, marginBottom: '80px' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: '#0F0F0F', fontStyle: 'italic', marginBottom: '4px' }}>Start with a free 25-minute call.</div>
              <div style={{ fontSize: '14px', color: 'rgba(15,15,15,0.6)' }}>No commitment — just a conversation to see if we&apos;re the right fit.</div>
            </div>
            <a href={JANE_URL} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#0F0F0F', color: '#FAFAF7', fontWeight: 600, fontSize: '14px', padding: '14px 24px', borderRadius: '9999px', textDecoration: 'none', flexShrink: 0 }}>
              <span style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#F5C842', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#0F0F0F', flexShrink: 0 }}>→</span>
              Book Consultation
            </a>
          </div>
        </div>
      </section>

      <section style={S.infoSection}>
        <div style={S.innerWide}>
          <h2 style={S.sectionH2}>Good to <em style={{ fontStyle: 'italic', color: '#F5C842' }}>know</em></h2>
          <div style={S.infoGrid}>
            {infoItems.map(item => (
              <div key={item.title} style={S.infoCard}>
                <div style={S.infoTitle}>{item.title}</div>
                <div style={S.infoDesc}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={S.ctaSection}>
        <div style={S.ctaInner}>
          <h2 style={S.ctaH2}>Start with a <em style={{ fontStyle: 'italic' }}>free call</em></h2>
          <p style={S.ctaSub}>Book a free 25-minute consultation — no commitment, just a conversation.</p>
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