import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import FinalCTA from '@/components/sections/FinalCTA'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Sun Wave Counselling Services',
  description: 'Online therapy in Toronto for individuals, teens, and couples. Warm, judgement-free psychotherapy with Khadija Lokhandwala using CBT, Narrative Therapy, and Expressive Arts.',
  url: 'https://sunwavecounselling.com',
  email: 'sunwavecounselling@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Toronto',
    addressRegion: 'ON',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.6532,
    longitude: -79.3832,
  },
  areaServed: [
    { '@type': 'City', name: 'Toronto' },
    { '@type': 'City', name: 'Mississauga' },
    { '@type': 'City', name: 'Brampton' },
    { '@type': 'City', name: 'Scarborough' },
    { '@type': 'State', name: 'Ontario' },
  ],
  serviceType: [
    'Individual Therapy',
    'Teenage Therapy',
    'Child Therapy',
    'Couples Therapy',
    'Online Psychotherapy',
    'CBT',
    'Narrative Therapy',
    'Expressive Arts Therapy',
  ],
  priceRange: '$100 - $140',
  currenciesAccepted: 'CAD',
  paymentAccepted: 'Credit Card, E-transfer',
  openingHours: 'Mo-Fr 09:00-18:00',
  sameAs: [],
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sun Wave Counselling Services',
  url: 'https://sunwavecounselling.com',
  logo: 'https://sunwavecounselling.com/Images/sunwave-logo.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'sunwavecounselling@gmail.com',
    contactType: 'customer service',
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main>
        <Navbar />
        <Hero />
        <Marquee />
        <Services />
        <About />
        <HowItWorks />
        <Testimonials />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}