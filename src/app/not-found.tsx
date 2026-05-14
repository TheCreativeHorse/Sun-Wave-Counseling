import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <div style={{ backgroundColor: '#FAFAF7', minHeight: '100vh' }}>
      <Navbar />
      <section style={{ paddingTop: '160px', paddingBottom: '120px', textAlign: 'center' }}>
        <div style={{ maxWidth: '480px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '120px', color: 'rgba(15,15,15,0.06)', lineHeight: 1, fontStyle: 'italic' }}>404</div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0F0F0F', margin: 0 }}>
            Page not <em style={{ fontStyle: 'italic', color: '#F5C842' }}>found.</em>
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(15,15,15,0.55)', lineHeight: 1.7, margin: 0 }}>
            The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.
          </p>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#0F0F0F', color: '#FAFAF7', fontWeight: 600, fontSize: '14px', padding: '14px 24px', borderRadius: '9999px', textDecoration: 'none', marginTop: '8px' }}>
            <span style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#F5C842', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#0F0F0F', flexShrink: 0 }}>→</span>
            Back to homepage
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}