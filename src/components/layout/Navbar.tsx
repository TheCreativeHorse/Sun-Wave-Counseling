'use client'

import { useState, useEffect, type CSSProperties, type MouseEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Fees', href: '/fees' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

const JANE_URL = 'https://sunwavecounsellingservices.janeapp.com'

const S = {
  header: (scrolled: boolean): CSSProperties => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: scrolled ? 'rgba(250,250,247,0.96)' : '#FAFAF7',
    borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
    backdropFilter: scrolled ? 'blur(8px)' : 'none',
    transition: 'all 0.3s ease',
  }),
  inner: { maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' } as CSSProperties,
  row: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' } as CSSProperties,
  logoWrap: { display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' } as CSSProperties,
  logoCircle: {
    width: 44,
    height: 44,
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: '#1A7A7A',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as CSSProperties,
  logoText: { display: 'flex', flexDirection: 'column', lineHeight: 1 } as CSSProperties,
  logoName: { fontWeight: 600, fontSize: '16px', color: '#0F0F0F', letterSpacing: '-0.01em' } as CSSProperties,
  logoSub: { fontSize: '11px', color: 'rgba(15,15,15,0.45)', letterSpacing: '0.02em', marginTop: '2px' } as CSSProperties,
  desktopNav: { display: 'flex', alignItems: 'center', gap: '2rem' } as CSSProperties,
  navLink: { fontSize: '15px', textDecoration: 'none' } as CSSProperties,
  ctaBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#0F0F0F',
    color: '#FAFAF7',
    fontWeight: 600,
    fontSize: '14px',
    padding: '12px 22px',
    borderRadius: '9999px',
    textDecoration: 'none',
    whiteSpace: 'nowrap' as const,
    transition: 'opacity 0.2s ease',
  } as CSSProperties,
  ctaIcon: {
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    backgroundColor: '#F5C842',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px',
    color: '#0F0F0F',
    flexShrink: 0,
  } as CSSProperties,
  menuBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as CSSProperties,
  mobileOverlay: {
    position: 'fixed',
    inset: 0,
    top: '68px',
    backgroundColor: '#FAFAF7',
    zIndex: 100,
    overflowY: 'auto' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    padding: '2rem 1.5rem',
    gap: '4px',
  } as CSSProperties,
  mobileLink: {
    fontSize: '20px',
    fontWeight: 500,
    textDecoration: 'none',
    padding: '14px 0',
    borderBottom: '1px solid rgba(15,15,15,0.07)',
    display: 'block',
  } as CSSProperties,
  mobileCta: {
    marginTop: '2rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: '#0F0F0F',
    color: '#FAFAF7',
    fontWeight: 600,
    fontSize: '15px',
    padding: '16px 28px',
    borderRadius: '9999px',
    textDecoration: 'none',
    transition: 'opacity 0.2s ease',
  } as CSSProperties,
  mobileCtaIcon: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#F5C842',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px',
    color: '#0F0F0F',
  } as CSSProperties,
  mobileFooter: {
    marginTop: 'auto',
    paddingTop: '2.5rem',
    fontSize: '12px',
    color: 'rgba(15,15,15,0.35)',
    textAlign: 'center' as const,
  } as CSSProperties,
}

function fadeCtaHover(e: MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.opacity = '0.85'
}

function fadeCtaLeave(e: MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.opacity = '1'
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header style={S.header(scrolled)}>
      <div style={S.inner}>
        <div style={S.row}>
          <Link href="/" style={S.logoWrap}>
            <div style={S.logoCircle} aria-hidden>
              <Image
                src="/Images/sunwave-logo.svg"
                alt=""
                width={28}
                height={28}
                priority
                style={{ display: 'block', objectFit: 'contain' }}
              />
            </div>
            <div style={S.logoText}>
              <span style={S.logoName}>Sun Wave</span>
              <span style={S.logoSub}>Counselling Services</span>
            </div>
          </Link>

          <nav className="hide-mobile" style={S.desktopNav}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="navbar-desktop-link" style={S.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hide-mobile">
            <a
              href={JANE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={S.ctaBtn}
              onMouseEnter={fadeCtaHover}
              onMouseLeave={fadeCtaLeave}
            >
              <span style={S.ctaIcon}>→</span>
              Book Consultation
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            style={S.menuBtn}
            className="show-mobile"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} color="#0F0F0F" /> : <Menu size={22} color="#0F0F0F" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div style={S.mobileOverlay}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="navbar-mobile-link"
              style={S.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={JANE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={S.mobileCta}
            onClick={() => setMenuOpen(false)}
            onMouseEnter={fadeCtaHover}
            onMouseLeave={fadeCtaLeave}
          >
            <span style={S.mobileCtaIcon}>→</span>
            Book Consultation
          </a>
          <p style={S.mobileFooter}>Online therapy across Ontario · Toronto-based</p>
        </div>
      ) : null}
    </header>
  )
}
