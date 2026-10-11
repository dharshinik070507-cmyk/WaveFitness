import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SiteShell } from '@/components/site';
import { brand } from '@/lib/data';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#08090b',
  colorScheme: 'dark'
};

const siteUrl = brand.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Wave Fitness | Train Natural. Move Different.',
    template: '%s | Wave Fitness'
  },
  description:
    'Wave Fitness unisex gym at Camp Road Junction, Selaiyur, Tambaram East, Chennai. Memberships from ₹999/month. Explore strength training, cardio, coaching and free trials.',
  applicationName: 'Wave Fitness',
  keywords: [
    'gym in tambaram',
    'fitness center selaiyur',
    'unisex gym camp road',
    'wave fitness chennai',
    'natural bodybuilding',
    'personal training tambaram'
  ],
  authors: [{ name: 'Wave Fitness' }],
  creator: 'Wave Fitness',
  publisher: 'Wave Fitness',
  formatDetection: {
    email: false,
    address: true,
    telephone: true
  },
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Wave Fitness | Train Natural. Move Different.',
    description:
      'Unisex fitness gym in Tambaram East, Chennai. Modern equipment, natural strength training, and flexible passes from ₹999/month.',
    url: siteUrl,
    siteName: 'Wave Fitness',
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wave Fitness | Train Natural. Move Different.',
    description:
      'Unisex fitness gym at Camp Road Junction, Tambaram East, Chennai. Memberships from ₹999/month.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthClub',
  name: 'Wave Fitness',
  alternateName: 'Wave Fitness Tambaram',
  description:
    'Unisex fitness center and gym at Camp Road Junction, Selaiyur, Tambaram East, Chennai. Memberships from ₹999/month.',
  url: siteUrl,
  telephone: brand.phone,
  priceRange: '₹999 - ₹2,499',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No.2, Bharathi, Lenin Complex, School St, Camp Road Junction',
    addressLocality: 'Selaiyur, Tambaram East',
    addressRegion: 'Tamil Nadu',
    postalCode: '600073',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.9234,
    longitude: 80.1415
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '06:00',
      closes: '22:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '06:00',
      closes: '13:00'
    }
  ],
  sameAs: [
    brand.instagram,
    brand.youtube,
    brand.maps
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
