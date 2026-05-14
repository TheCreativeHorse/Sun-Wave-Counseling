'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { useIsMobile } from '@/hooks/useIsMobile'

const posts = [
  {
    slug: 'understanding-anxiety',
    title: 'Understanding Anxiety: What It Is, Why It Happens, and How Therapy Helps',
    excerpt: 'Anxiety is one of the most common reasons people seek therapy — but it\'s also one of the most misunderstood. Here\'s what anxiety actually is, why your brain does it, and how therapy can help you manage it.',
    date: 'May 2026',
    readTime: '5 min read',
    tag: 'Anxiety & Mental Health',
    accent: '#3DD6D0',
  },
  {
    slug: 'online-therapy-vs-in-person',
    title: 'Online Therapy vs. In-Person: What\'s the Difference and Which Is Right for You?',
    excerpt: 'If you\'ve been considering therapy but aren\'t sure whether to go online or in-person, you\'re not alone. Here\'s an honest breakdown of both — and why online therapy works just as well for most people.',
    date: 'May 2026',
    readTime: '4 min read',
    tag: 'Getting Started',
    accent: '#F5C842',
  },
]

export default function BlogPage() {
  const isMobile = useIsMobile()

  return (
    <div style={{ backgroundColor: '#FAFAF7', minHeight: '100vh' }}>
      <Navbar />

      <section style={{ paddingTop: isMobile ? '90px' : '120px', paddingBottom: '64px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#3DD6D0', marginBottom: '16px', display: 'block' }}>Blog</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2.6rem' : 'clamp(2.4rem, 5vw, 3.6rem)', lineHeight: 1.1, color: '#0F0F0F', margin: '0 0 20px' }}>
            Thoughts on therapy,<br /><em style={{ fontStyle: 'italic', color: '#F5C842' }}>mental health & you.</em>
          </h1>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(15,15,15,0.55)', margin: 0, maxWidth: '520px' }}>
            Honest, practical writing about mental health — no jargon, no judgment. Just useful things to know.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '24px' }}>
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '32px', border: '0.5px solid rgba(15,15,15,0.07)', height: '100%', display: 'flex', flexDirection: 'column', gap: '16px', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '11px', fontWeight: 600, padding: '4px 12px', borderRadius: '9999px', backgroundColor: `${post.accent}15`, color: post.accent }}>{post.tag}</span>
                    <span style={{ fontSize: '12px', color: 'rgba(15,15,15,0.35)' }}>{post.readTime}</span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', lineHeight: 1.3, color: '#0F0F0F', margin: 0 }}>{post.title}</h2>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(15,15,15,0.55)', margin: 0, flex: 1 }}>{post.excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '0.5px solid rgba(15,15,15,0.07)' }}>
                    <span style={{ fontSize: '12px', color: 'rgba(15,15,15,0.35)' }}>{post.date}</span>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: post.accent, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}