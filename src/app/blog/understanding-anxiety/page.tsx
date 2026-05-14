import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Understanding Anxiety: What It Is and How Therapy Helps | Sun Wave Counselling',
  description: 'Anxiety is one of the most common reasons people seek therapy. Learn what anxiety actually is, why your brain does it, and how therapy can help you manage it.',
  alternates: { canonical: 'https://sunwavecounselling.com/blog/understanding-anxiety' },
}

const JANE_URL = 'https://sunwavecounsellingservices.janeapp.com'

export default function UnderstandingAnxietyPost() {
  return (
    <div style={{ backgroundColor: '#FAFAF7', minHeight: '100vh' }}>
      <Navbar />

      <article style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Header */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <Link href="/blog" style={{ fontSize: '13px', color: 'rgba(15,15,15,0.45)', textDecoration: 'none' }}>← Blog</Link>
              <span style={{ fontSize: '11px', fontWeight: 600, padding: '4px 12px', borderRadius: '9999px', backgroundColor: '#E8F4F3', color: '#1A7A7A' }}>Anxiety & Mental Health</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.15, color: '#0F0F0F', margin: '0 0 20px' }}>
              Understanding Anxiety: What It Is, Why It Happens, and How Therapy Helps
            </h1>
            <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: 'rgba(15,15,15,0.4)' }}>
              <span>Khadija Lokhandwala</span>
              <span>·</span>
              <span>May 2026</span>
              <span>·</span>
              <span>5 min read</span>
            </div>
          </div>

          {/* Content */}
          <div style={{ fontSize: '16px', lineHeight: 1.85, color: 'rgba(15,15,15,0.7)', display: 'flex', flexDirection: 'column', gap: '24px' }}>

            <p>Anxiety is one of the most common reasons people reach out for therapy — and one of the most misunderstood. If you&apos;ve ever found yourself lying awake at 3am running through every possible thing that could go wrong, or felt your heart race before a conversation you&apos;ve been dreading, you already know what anxiety feels like. But understanding <em>why</em> it happens — and what to actually do about it — is a different thing entirely.</p>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F0F0F', margin: '8px 0 0' }}>What anxiety actually is</h2>
            <p>Anxiety isn&apos;t a flaw or a weakness. It&apos;s your nervous system doing exactly what it was designed to do — scan for threats and prepare you to respond. The problem is that your brain can&apos;t always tell the difference between a genuine threat and a difficult email from your boss. So it activates the same alarm system either way.</p>
            <p>That alarm system — the fight, flight, or freeze response — is incredibly useful when you&apos;re in actual danger. But when it fires constantly in response to everyday stress, it becomes exhausting. Your body is running on high alert all the time, and eventually that takes a toll on your sleep, your focus, your relationships, and your sense of self.</p>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F0F0F', margin: '8px 0 0' }}>Why some people experience more anxiety than others</h2>
            <p>Anxiety isn&apos;t randomly distributed. Your genetics, your early experiences, the environment you grew up in, and the things that have happened to you all shape how your nervous system responds to stress. Some people learn early on that the world is unpredictable or unsafe, and their brain calibrates accordingly — staying vigilant, scanning for danger, preparing for the worst.</p>
            <p>This isn&apos;t a character flaw. It&apos;s an adaptation. The challenge is that adaptations that made sense in one context don&apos;t always serve us well in another.</p>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F0F0F', margin: '8px 0 0' }}>What therapy actually does</h2>
            <p>Therapy for anxiety isn&apos;t about eliminating the feeling — it&apos;s about changing your relationship with it. Through approaches like Cognitive Behavioural Therapy (CBT) and Narrative Therapy, we work on a few things:</p>

            <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><strong>Identifying the thought patterns</strong> that are fuelling your anxiety — the catastrophising, the worst-case thinking, the assumptions you&apos;re making without realising it.</li>
              <li><strong>Building practical tools</strong> to interrupt those patterns in the moment — not just understanding them intellectually, but actually being able to use them when you&apos;re in the middle of an anxious spiral.</li>
              <li><strong>Exploring the story</strong> you&apos;ve been telling yourself about who you are and what you&apos;re capable of — because anxiety often has a narrative attached to it.</li>
              <li><strong>Gradually facing the things</strong> you&apos;ve been avoiding — because avoidance, while it feels like relief in the moment, tends to make anxiety worse over time.</li>
            </ul>

            <p>The goal isn&apos;t to become someone who never feels anxious. The goal is to get to a place where anxiety doesn&apos;t run your life — where you can feel the discomfort, understand what it&apos;s telling you, and choose how to respond.</p>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F0F0F', margin: '8px 0 0' }}>If you&apos;re not sure where to start</h2>
            <p>The first step doesn&apos;t have to be a big one. A free 25-minute consultation is a low-pressure way to talk about what you&apos;re experiencing and figure out whether therapy might help. There&apos;s no commitment — just a conversation.</p>

          </div>

          {/* CTA */}
          <div style={{ marginTop: '64px', backgroundColor: '#E8F4F3', borderRadius: '20px', padding: '32px', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F0F0F', margin: '0 0 12px' }}>
              Ready to talk about it?
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(15,15,15,0.55)', margin: '0 0 24px', lineHeight: 1.7 }}>
              Book a free 25-minute consultation — no commitment, just a conversation.
            </p>
            <a href={JANE_URL} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#0F0F0F', color: '#FAFAF7', fontWeight: 600, fontSize: '14px', padding: '14px 24px', borderRadius: '9999px', textDecoration: 'none' }}>
              <span style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#F5C842', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#0F0F0F', flexShrink: 0 }}>→</span>
              Book Consultation
            </a>
          </div>

          {/* Back */}
          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '0.5px solid rgba(15,15,15,0.08)' }}>
            <Link href="/blog" style={{ fontSize: '14px', fontWeight: 600, color: '#0F0F0F', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              ← Back to all posts
            </Link>
          </div>

        </div>
      </article>

      <Footer />
    </div>
  )
}