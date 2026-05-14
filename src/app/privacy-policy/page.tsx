import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Sun Wave Counselling Services',
  description: 'Privacy policy for Sun Wave Counselling Services.',
  alternates: { canonical: 'https://sunwavecounselling.com/privacy-policy' },
}

const sections = [
  {
    title: 'Information we collect',
    content: 'When you contact us through our website, we collect the information you provide — including your name, email address, phone number, and any message you send. We also collect basic analytics data about how visitors use our website.',
  },
  {
    title: 'How we use your information',
    content: 'We use the information you provide solely to respond to your enquiries and to provide therapy services. We do not sell, rent, or share your personal information with third parties for marketing purposes.',
  },
  {
    title: 'Confidentiality of therapy sessions',
    content: 'All information shared during therapy sessions is strictly confidential. Exceptions to confidentiality exist only where required by law — for example, if there is a risk of serious harm to you or others. These limits will be discussed fully at the start of therapy.',
  },
  {
    title: 'Data storage and security',
    content: 'Your personal information is stored securely. We take reasonable precautions to protect your data from unauthorised access, disclosure, or loss. Session notes and clinical records are stored in compliance with Ontario privacy legislation.',
  },
  {
    title: 'Cookies and analytics',
    content: 'Our website may use cookies and analytics tools to understand how visitors use the site. This data is anonymous and aggregated — it cannot be used to identify you personally. You can disable cookies in your browser settings at any time.',
  },
  {
    title: 'Your rights',
    content: 'You have the right to access, correct, or request deletion of your personal information at any time. To make a request, please contact us at sunwavecounselling@gmail.com.',
  },
  {
    title: 'Contact',
    content: 'If you have any questions about this privacy policy or how we handle your information, please contact us at sunwavecounselling@gmail.com.',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div style={{ backgroundColor: '#FAFAF7', minHeight: '100vh' }}>
      <Navbar />
      <section style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem' }}>
          <Link href="/" style={{ fontSize: '13px', color: 'rgba(15,15,15,0.45)', textDecoration: 'none', display: 'block', marginBottom: '24px' }}>← Home</Link>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, color: '#0F0F0F', margin: '0 0 12px' }}>Privacy Policy</h1>
          <p style={{ fontSize: '14px', color: 'rgba(15,15,15,0.4)', marginBottom: '48px' }}>Last updated: May 2026</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {sections.map(s => (
              <div key={s.title}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: '#0F0F0F', margin: '0 0 10px' }}>{s.title}</h2>
                <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(15,15,15,0.65)', margin: 0 }}>{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}