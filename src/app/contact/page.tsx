'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const JANE_URL = 'https://sunwavecounsellingservices.janeapp.com'

const S: Record<string, React.CSSProperties> = {
  page: { backgroundColor: '#FAFAF7', minHeight: '100vh' },
  hero: { paddingTop: '120px', paddingBottom: '64px' },
  inner: { maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' },
  eyebrow: { fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#3DD6D0', marginBottom: '16px', display: 'block' },
  h1: { fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', lineHeight: 1.1, color: '#0F0F0F', margin: '0 0 20px' },
  h1Italic: { fontStyle: 'italic', color: '#F5C842' },
  lead: { fontSize: '16px', lineHeight: 1.8, color: 'rgba(15,15,15,0.55)', margin: '0 0 40px' },
  infoList: { display: 'flex', flexDirection: 'column' as const, gap: '24px' },
  infoItem: { display: 'flex', flexDirection: 'column' as const, gap: '4px' },
  infoLabel: { fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'rgba(15,15,15,0.35)' },
  infoValue: { fontSize: '15px', color: '#0F0F0F', fontWeight: 500 },
  infoLink: { fontSize: '15px', color: '#3DD6D0', textDecoration: 'none', fontWeight: 500 },
  statusBadge: { display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#E8F4F3', borderRadius: '9999px', padding: '6px 14px', width: 'fit-content' },
  statusDot: { width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#3DD6D0', flexShrink: 0 },
  statusText: { fontSize: '13px', fontWeight: 500, color: '#1A7A7A' },
  bookBtn: { display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#0F0F0F', color: '#FAFAF7', fontWeight: 600, fontSize: '14px', padding: '14px 24px', borderRadius: '9999px', textDecoration: 'none', marginTop: '8px' },
  bookIcon: { width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#F5C842', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#0F0F0F', flexShrink: 0 },
  formTitle: { fontFamily: 'var(--font-serif)', fontSize: '22px', color: '#0F0F0F', margin: 0 },
  formSub: { fontSize: '13px', color: 'rgba(15,15,15,0.45)', margin: 0, marginTop: '-10px' },
  field: { display: 'flex', flexDirection: 'column' as const, gap: '6px' },
  label: { fontSize: '12px', fontWeight: 600, color: 'rgba(15,15,15,0.55)', letterSpacing: '0.04em' },
  input: { fontSize: '14px', color: '#0F0F0F', backgroundColor: '#FAFAF7', border: '1px solid rgba(15,15,15,0.12)', borderRadius: '10px', padding: '12px 14px', outline: 'none', fontFamily: 'var(--font-sans)', transition: 'border-color 0.2s' },
  textarea: { fontSize: '14px', color: '#0F0F0F', backgroundColor: '#FAFAF7', border: '1px solid rgba(15,15,15,0.12)', borderRadius: '10px', padding: '12px 14px', outline: 'none', fontFamily: 'var(--font-sans)', resize: 'vertical' as const, minHeight: '120px', transition: 'border-color 0.2s' },
  submitBtn: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', backgroundColor: '#0F0F0F', color: '#FAFAF7', fontWeight: 600, fontSize: '14px', padding: '14px 24px', borderRadius: '9999px', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', transition: 'opacity 0.2s' },
  submitIcon: { width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#F5C842', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#0F0F0F', flexShrink: 0 },
  success: { backgroundColor: '#E8F4F3', borderRadius: '12px', padding: '16px 20px', fontSize: '14px', color: '#1A7A7A', fontWeight: 500, textAlign: 'center' as const },
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={S.page}>
      <Navbar />

      <section style={S.hero}>
        <div style={S.inner}>
          <div className="contact-page-grid">

            <div>
              <span style={S.eyebrow}>Get in touch</span>
              <h1 style={S.h1}>
                Let&apos;s start a<br />
                <em style={S.h1Italic}>conversation.</em>
              </h1>
              <p style={S.lead}>
                The first step is the hardest — but it&apos;s also the most important. Reach out below or book directly through the consultation link.
              </p>

              <div style={S.infoList}>
                <div style={S.infoItem}>
                  <span style={S.infoLabel}>Email</span>
                  <a href="mailto:sunwavecounselling@gmail.com" style={S.infoLink}>sunwavecounselling@gmail.com</a>
                </div>
                <div style={S.infoItem}>
                  <span style={S.infoLabel}>Location</span>
                  <span style={S.infoValue}>Toronto · Online across Ontario</span>
                </div>
                <div style={S.infoItem}>
                  <span style={S.infoLabel}>Availability</span>
                  <div style={S.statusBadge}>
                    <span style={S.statusDot} />
                    <span style={S.statusText}>Currently accepting new clients</span>
                  </div>
                </div>
                <div style={S.infoItem}>
                  <span style={S.infoLabel}>Book directly</span>
                  <a href={JANE_URL} target="_blank" rel="noopener noreferrer" style={S.bookBtn}>
                    <span style={S.bookIcon}>→</span>
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-card">
              {submitted ? (
                <div style={S.success}>
                  ✓ Message sent! Khadija will be in touch within 1–2 business days.
                </div>
              ) : (
                <>
                  <h2 style={S.formTitle}>Send a message</h2>
                  <p style={S.formSub}>Prefer email? No problem — we&apos;ll get back to you within 1–2 business days.</p>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div className="contact-field-row">
                      <div style={S.field}>
                        <label style={S.label}>First name</label>
                        <input name="firstName" value={form.firstName} onChange={handleChange} required style={S.input} placeholder="Jane" />
                      </div>
                      <div style={S.field}>
                        <label style={S.label}>Last name</label>
                        <input name="lastName" value={form.lastName} onChange={handleChange} required style={S.input} placeholder="Smith" />
                      </div>
                    </div>

                    <div style={S.field}>
                      <label style={S.label}>Email</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required style={S.input} placeholder="jane@email.com" />
                    </div>

                    <div style={S.field}>
                      <label style={S.label}>Phone (optional)</label>
                      <input name="phone" value={form.phone} onChange={handleChange} style={S.input} placeholder="+1 (416) 000-0000" />
                    </div>

                    <div style={S.field}>
                      <label style={S.label}>I&apos;m interested in</label>
                      <select name="service" value={form.service} onChange={handleChange} style={{ ...S.input, appearance: 'none' as const }}>
                        <option value="">Select a service</option>
                        <option>Individual Therapy</option>
                        <option>Teenage Therapy</option>
                        <option>Child Therapy</option>
                        <option>Couples Therapy</option>
                        <option>Free Consultation</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>

                    <div style={S.field}>
                      <label style={S.label}>Message</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required style={S.textarea} placeholder="Tell me a little about what you're looking for..." />
                    </div>

                    <button type="submit" style={S.submitBtn}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                      <span style={S.submitIcon}>→</span>
                      Send message
                    </button>
                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}