import type { Metadata } from 'next'
import { Bricolage_Grotesque, Instrument_Serif } from 'next/font/google'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const instrument = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
  weight: '400',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sunwavecounselling.com'),
  title: {
    template: '%s | Sun Wave Counselling Services',
    default: 'Sun Wave Counselling Services | Online Therapy in Toronto & Ontario',
  },
  description: 'Therapy for individuals, teens, and couples in Toronto. Online sessions across Ontario with Khadija Lokhandwala, psychotherapist. Book a free 25-minute consultation.',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://sunwavecounselling.com',
    siteName: 'Sun Wave Counselling Services',
    title: 'Sun Wave Counselling Services | Online Therapy in Toronto & Ontario',
    description: 'Therapy for individuals, teens, and couples in Toronto. Online sessions across Ontario. Book a free 25-minute consultation.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Sun Wave Counselling Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sun Wave Counselling Services | Online Therapy in Toronto & Ontario',
    description: 'Therapy for individuals, teens, and couples in Toronto. Online sessions across Ontario.',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${instrument.variable}`}>
      <body className="bg-brand-cream text-brand-ink antialiased">
        {children}
      </body>
    </html>
  )
}
