import type { Metadata } from 'next'
import '../index.css'

export const metadata: Metadata = {
  title: 'Headlight Restoration Lethbridge | Dobson | Mobile Service',
  description: "Lethbridge's #1 Headlight Restoration. We restore permanent clarity for $99. Mobile service or drop-off available in Lethbridge, Taber, & Southern Alberta.",
  alternates: {
    canonical: 'https://www.dobsonheadlightrestoration.com/',
  },
  openGraph: {
    title: 'Headlight Restoration Lethbridge | Dobson | Rates from $99',
    description: "Don't replace your headlights. Restore them for 80% less. Serving Lethbridge & Southern Alberta.",
    type: 'website',
    url: 'https://www.dobsonheadlightrestoration.com/',
    images: [{ url: 'https://i.ibb.co/QFhDNcgn/20260106-175851-1.jpg', width: 1200, height: 630 }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'Dobson Headlight Restoration',
  image: 'https://i.ibb.co/QFhDNcgn/20260106-175851-1.jpg',
  description: 'Professional headlight restoration and ceramic coating services in Lethbridge and Southern Alberta. Mobile service or drop-off. Starting at $99 CAD.',
  url: 'https://www.dobsonheadlightrestoration.com',
  telephone: '+1-587-402-4794',
  email: 'dobsonheadlights@gmail.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lethbridge',
    addressRegion: 'AB',
    addressCountry: 'CA',
    postalCode: 'T1J',
  },
  logo: 'https://www.dobsonheadlightrestoration.com/dobson-logo.png',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.6935,
    longitude: -112.8418,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '21:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Lethbridge' },
    { '@type': 'City', name: 'Taber' },
    { '@type': 'City', name: 'Cardston' },
    { '@type': 'City', name: 'Raymond' },
    { '@type': 'City', name: 'Coaldale' },
    { '@type': 'City', name: 'Fort Macleod' },
    { '@type': 'AdministrativeArea', name: 'Southern Alberta' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    bestRating: '5',
    worstRating: '1',
    reviewCount: '47',
  },
  sameAs: [
    'https://www.facebook.com/DobsonHeadlightRestoration',
    'https://www.google.com/maps/search/Dobson+Headlight+Restoration+Lethbridge+AB',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Headlight Restoration Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Standard Headlight Restoration',
          description: 'Multi-step oxidation removal, machine polishing, industrial UV top coat. 1–2 year durability, factory clarity restored.',
        },
        price: '99',
        priceCurrency: 'CAD',
        priceSpecification: { '@type': 'PriceSpecification', minPrice: '99', priceCurrency: 'CAD' },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Premium Headlight Restoration with Ceramic Coating',
          description: 'Everything in Standard plus Ceramic Pro 9H coating and fog light treatment. 5+ year durability with ceramic protection.',
        },
        price: '169',
        priceCurrency: 'CAD',
        priceSpecification: { '@type': 'PriceSpecification', minPrice: '169', priceCurrency: 'CAD' },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'New Light Protection',
          description: 'Industrial ceramic coating for factory-new headlights. Prevents yellowing and adds 5–8 years of protection on top of factory life.',
        },
      },
    ],
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does headlight restoration cost in Lethbridge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Headlight restoration in Lethbridge starts at $99 CAD for the standard package, which includes oxidation removal and UV top coat with 1–2 year durability. The premium package with ceramic coating starts at $169 CAD and provides 5+ year protection. New light protection for factory-new headlights is available at a custom quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does headlight restoration last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard headlight restoration lasts 1–2 years. Premium restoration with Ceramic Pro 9H coating lasts 5+ years. Dobson Headlight Restoration backs all work with a re-do warranty — if your headlights fade early, we come back and fix it for free.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer mobile headlight restoration in Lethbridge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dobson Headlight Restoration offers mobile service in Lethbridge and throughout Southern Alberta including Taber, Cardston, Raymond, Coaldale, and Fort Macleod. During winter months, service is performed from a heated shop. The job takes 60–90 minutes and your presence is not required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is headlight restoration worth it compared to replacing headlights?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Headlight restoration typically costs $99–$169 compared to $200–$1,000+ per headlight assembly for replacement. Restored headlights return to factory clarity and significantly improve nighttime visibility and vehicle safety. Yellowed headlights can reduce light output by up to 80%, making restoration a safety investment as well as a cost saving.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas does Dobson Headlight Restoration serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dobson Headlight Restoration serves Lethbridge and all of Southern Alberta including Taber, Cardston, Raymond, Coaldale, Coalhurst, Fort Macleod, Magrath, and surrounding communities. Call or text 587-402-4794 to confirm availability in your area.',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png?v=5" />
        <link rel="apple-touch-icon" href="/favicon.png?v=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://i.ibb.co" />
        <link rel="preconnect" href="https://elfsightcdn.com" />
        <link rel="preload" as="image" href="https://i.ibb.co/QFhDNcgn/20260106-175851-1.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://elfsightcdn.com/platform.js" async />
        <style>{`
          body { font-family: 'Space Grotesk', 'Inter', sans-serif; scroll-behavior: smooth; }
          .bg-charcoal { background-color: #111827; }
          .text-headlight { color: #facc15; }
          .bg-headlight { background-color: #facc15; }
          .border-headlight { border-color: #facc15; }
          ::selection { background: #facc15; color: #000; }
        `}</style>
      </head>
      <body className="bg-white text-slate-900">
        {children}
      </body>
    </html>
  )
}
