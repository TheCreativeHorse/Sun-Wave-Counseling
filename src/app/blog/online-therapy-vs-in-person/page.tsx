import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Online Therapy vs In-Person: Which Is Right for You? | Sun Wave Counselling',
  description: 'Considering therapy but not sure whether to go online or in-person? Here is an honest breakdown of both options and why online therapy works just as well for most people.',
  alternates: { canonical: 'https://sunwavecounselling.com/blog/online-therapy-vs-in-person' },
}

const JANE_URL = 'https://sunwavecounsellingservices.janeapp.com'

export default function OnlineTherapyPost() {
  return (
    <div style={{ backgroundColor: '#FAFAF7', minHeight: '100vh' }}>
      <Navbar />

      <article style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Header */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <Link href="/blog" style={{ fontSize: '13px', color: 'rgba(15,15,15,0.45)', textDecoration: 'none' }}>← Blog</Link>
              <span style={{ fontSize: '11px', fontWeight: 600, padding: '4px 12px', borderRadius: '9999px', backgroundColor: '#FDF6E3', color: '#7A5E00' }}>Getting Started</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.15, color: '#0F0F0F', margin: '0 0 20px' }}>
              Online Therapy vs. In-Person: What&apos;s the Difference and Which Is Right for You?
            </h1>
            <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: 'rgba(15,15,15,0.4)' }}>
              <span>Khadija Lokhandwala</span>
              <span>·</span>
              <span>May 2026</span>
              <span>·</span>
              <span>4 min read</span>
            </div>
          </div>

          {/* Content */}
          <div style={{ fontSize: '16px', lineHeight: 1.85, color: 'rgba(15,15,15,0.7)', display: 'flex', flexDirection: 'column', gap: '24px' }}>

            <p>If you&apos;ve been thinking about starting therapy but feel stuck on the question of online versus in-person — you&apos;re not alone. It&apos;s one of the most common things people wonder about, especially if they&apos;ve never tried either. The short answer is: both work. But there are real differences worth knowing about before you decide.</p>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F0F0F', margin: '8px 0 0' }}>What the research actually says</h2>
            <p>The evidence on this is pretty clear — online therapy is just as effective as in-person therapy for the vast majority of people and presenting concerns, including anxiety, depression, relationship difficulties, and stress. This has been studied extensively, and the outcomes are consistently comparable. The therapeutic relationship — the quality of connection between you and your therapist — is what matters most, and that translates well to video.</p>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F0F0F', margin: '8px 0 0' }}>The real advantages of online therapy</h2>
            <p>Beyond the research, there are some practical reasons why online therapy actually works better for a lot of people:</p>

            <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><strong>No commute.</strong> You don&apos;t have to factor in travel time, parking, or public transit. You can have a session from your living room, your car, or wherever feels private and comfortable.</li>
              <li><strong>More scheduling flexibility.</strong> Without geography as a constraint, it&apos;s easier to find appointment times that actually fit your life.</li>
              <li><strong>Lower barrier to starting.</strong> A lot of people find it easier to open up when they&apos;re in their own space. There&apos;s something about being at home that makes the first few sessions feel less intimidating.</li>
              <li><strong>Access regardless of location.</strong> If you&apos;re in Ontario but not in a major city, online therapy means you&apos;re not limited to whoever happens to be nearby.</li>
            </ul>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F0F0F', margin: '8px 0 0' }}>When in-person might be a better fit</h2>
            <p>Online therapy isn&apos;t for everyone, and there&apos;s no shame in preferring a physical space. Some people find it easier to be present and focused when they&apos;re away from their home environment. Others simply prefer the experience of being in the same room as their therapist. If that&apos;s you, that&apos;s completely valid — and worth factoring into your decision.</p>
            <p>It&apos;s also worth considering your home setup. Online therapy works best when you have a private, quiet space where you can speak freely. If that&apos;s difficult to find, in-person might be worth exploring.</p>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F0F0F', margin: '8px 0 0' }}>How online sessions work at Sun Wave</h2>
            <p>All sessions at Sun Wave Counselling are held via secure video. Before your appointment, you&apos;ll receive a link to join — no software to download, no complicated setup. You just need a device with a camera and microphone, a stable internet connection, and a private space.</p>
            <p>Most clients find they settle into it quickly. The first session is usually the most awkward — and that&apos;s true whether you&apos;re online or in-person. After that, it tends to feel natural.</p>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F0F0F', margin: '8px 0 0' }}>Still not sure?</h2>
            <p>The free consultation is a good place to figure this out. It&apos;s a 25-minute video call — which means it&apos;s also a low-stakes way to experience what online sessions actually feel like before you commit to anything.</p>

          </div>

          {/* CTA */}
          <div style={{ marginTop: '64px', backgroundColor: '#FDF6E3', borderRadius: '20px', padding: '32px', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F0F0F', margin: '0 0 12px' }}>
              Want to try it for yourself?
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(15,15,15,0.55)', margin: '0 0 24px', lineHeight: 1.7 }}>
              Book a free 25-minute consultation and experience online therapy first-hand — no commitment required.
            </p>
            <a href={JANE_URL} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#0F0F0F', color: '#FAFAF7', fontWeight: 600, fontSize: '14px', padding: '14px 24px', borderRadius: '9999px', textDecoration: 'none' }}>
              <span style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#F5C842', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#0F0F0F', flexShrink: 0 }}>→</span>
              Book Consultation
            </a>
          </div>

          {/* Back */}
          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '0.5px solid rgba(15,15,15,0.08)' }}>
            <Link href="/blog" style={{ fontSize: '14px', fontWeight: 600, color: '#0F0F0F', textDecoration: 'none' }}>
              ← Back to all posts
            </Link>
          </div>

        </div>
      </article>

      <Footer />
    </div>
  )
}