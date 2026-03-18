import type { Metadata } from 'next'
import '../index.css'

export const metadata: Metadata = {
  title: 'Headlight Restoration Lethbridge | Dobson | Mobile Service',
  description: "Lethbridge's #1 Headlight Restoration. We restore permanent clarity for $99. Mobile service or drop-off available in Lethbridge, Taber, & Southern Alberta.",
  alternates: {
    canonical: 'https://dobsonheadlightrestoration.com/',
  },
  openGraph: {
    title: 'Headlight Restoration Lethbridge | Dobson | Rates from $99',
    description: "Don't replace your headlights. Restore them for 80% less. Serving Lethbridge & Southern Alberta.",
    type: 'website',
    url: 'https://dobsonheadlightrestoration.com/',
    images: [{ url: 'https://i.ibb.co/QFhDNcgn/20260106-175851-1.jpg', width: 1200, height: 630 }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'Dobson Headlight Restoration',
  image: 'https://i.ibb.co/QFhDNcgn/20260106-175851-1.jpg',
  description: 'Professional headlight restoration and ceramic coating services in Lethbridge and Southern Alberta. Mobile service or drop-off. Starting at $99 CAD.',
  url: 'https://dobsonheadlightrestoration.com',
  telephone: '+1-587-402-4794',
  email: 'dobsonheadlights@gmail.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lethbridge',
    addressRegion: 'AB',
    addressCountry: 'CA',
  },
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
    'https://share.google/KYMPrdpx2hJIyl69o',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://i.ibb.co" />
        <link rel="preconnect" href="https://elfsightcdn.com" />
        <link rel="preload" as="image" href="https://i.ibb.co/QFhDNcgn/20260106-175851-1.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://elfsightcdn.com/platform.js" async />
        <style>{`
          body { font-family: 'Inter', sans-serif; scroll-behavior: smooth; }
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
