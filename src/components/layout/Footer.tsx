'use client'
import Link from 'next/link'
import Image from 'next/image'

const JANE_URL = 'https://sunwavecounsellingservices.janeapp.com'

const links = {
  pages: [
    { label: 'About',    href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Fees',     href: '/fees' },
    { label: 'Blog',     href: '/blog' },
    { label: 'FAQ',      href: '/faq' },
    { label: 'Contact',  href: '/contact' },
  ],
  services: [
    { label: 'Individual Therapy', href: '/services/individual-therapy' },
    { label: 'Teenage Therapy',    href: '/services/teenage-therapy' },
    { label: 'Child Therapy',      href: '/services/child-therapy' },
    { label: 'Couples Therapy',    href: '/services/couples-therapy' },
  ],
}

const S: Record<string, React.CSSProperties> = {
  footer: { backgroundColor: '#0F0F0F', color: '#FAFAF7', padding: '64px 0 0' },
  inner: { maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' },
  top: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '48px', paddingBottom: '48px', borderBottom: '1px solid rgba(255,255,255,0.07)' },
  brand: { display: 'flex', flexDirection: 'column' as const, gap: '16px' },
  logoRow: { display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' },
  logoImgWrap: { width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden', backgroundColor: '#1A7A7A', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  logoName: { fontWeight: 600, fontSize: '14px', color: '#FAFAF7', letterSpacing: '-0.01em' },
  logoSub: { fontSize: '10px', color: 'rgba(250,250,247,0.4)', letterSpacing: '0.02em', marginTop: '2px' },
  tagline: { fontSize: '13px', lineHeight: 1.65, color: 'rgba(250,250,247,0.45)', maxWidth: '220px' },
  ctaBtn: { display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#F5C842', color: '#0F0F0F', fontWeight: 600, fontSize: '12px', padding: '10px 18px', borderRadius: '9999px', textDecoration: 'none', width: 'fit-content' },
  ctaIcon: { width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#0F0F0F', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', color: '#F5C842', flexShrink: 0 },
  colLabel: { fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'rgba(250,250,247,0.25)', marginBottom: '16px' },
  colLinks: { display: 'flex', flexDirection: 'column' as const, gap: '10px' },
  colLink: { fontSize: '13px', color: 'rgba(250,250,247,0.55)', textDecoration: 'none', transition: 'color 0.2s' },
  contact: { display: 'flex', flexDirection: 'column' as const, gap: '10px' },
  contactItem: { fontSize: '13px', color: 'rgba(250,250,247,0.55)' },
  contactLink: { fontSize: '13px', color: '#3DD6D0', textDecoration: 'none' },
  bottom: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: '12px', padding: '20px 0' },
  copyright: { fontSize: '12px', color: 'rgba(250,250,247,0.25)' },
  bottomLinks: { display: 'flex', gap: '20px' },
  bottomLink: { fontSize: '12px', color: 'rgba(250,250,247,0.25)', textDecoration: 'none' },
}

export default function Footer() {
  return (
    <footer style={S.footer}>
      <div style={S.inner}>
        <div style={S.top}>
          <div style={S.brand}>
            <Link href="/" style={S.logoRow as React.CSSProperties}>
              <div style={S.logoImgWrap}>
                <Image src="/images/sunwave-logo.svg" alt="Sun Wave" width={32} height={32} style={{ display: 'block' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                <span style={S.logoName}>Sun Wave</span>
                <span style={S.logoSub}>Counselling Services</span>
              </div>
            </Link>
            <p style={S.tagline}>Warm, judgement-free therapy for individuals, teens, and couples. Online across Ontario.</p>
            <a href={JANE_URL} target="_blank" rel="noopener noreferrer" style={S.ctaBtn}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
              <span style={S.ctaIcon}>→</span>
              Book Consultation
            </a>
          </div>

          <div>
            <p style={S.colLabel}>Pages</p>
            <div style={S.colLinks}>
              {links.pages.map(link => (
                <Link key={link.href} href={link.href} style={S.colLink}
                  onMouseEnter={e => (e.currentTarget.style.color = '#FAFAF7')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(250,250,247,0.55)')}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p style={S.colLabel}>Services</p>
            <div style={S.colLinks}>
              {links.services.map(link => (
                <Link key={link.href} href={link.href} style={S.colLink}
                  onMouseEnter={e => (e.currentTarget.style.color = '#FAFAF7')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(250,250,247,0.55)')}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p style={S.colLabel}>Contact</p>
            <div style={S.contact}>
              <span style={S.contactItem}>Toronto · Online across Ontario</span>
              <a href="mailto:sunwavecounselling@gmail.com" style={S.contactLink}>sunwavecounselling@gmail.com</a>
              <span style={{ ...S.contactItem, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#3DD6D0', flexShrink: 0 }} />
                Accepting new clients
              </span>
            </div>
          </div>
        </div>

        <div style={S.bottom}>
          <p style={S.copyright}>© {new Date().getFullYear()} Sun Wave Counselling Services. All rights reserved.</p>
          <div style={S.bottomLinks}>
            <Link href="/privacy-policy" style={S.bottomLink}>Privacy Policy</Link>
            <Link href="/terms" style={S.bottomLink}>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}