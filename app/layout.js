import './globals.css'
import { Providers } from './providers'
import { Toaster } from 'sonner'

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://arroyoengineering.com'),
  title: {
    default: 'Arroyo Engineering & Infrastructure Pvt. Ltd. | EPC, Oil & Gas, Civil & Fuel Station Construction',
    template: '%s | Arroyo Engineering',
  },
  description:
    'Arroyo Engineering & Infrastructure Pvt. Ltd. — a premier EPC, civil construction, oil & gas, fuel station, road, bridge and heavy machinery company delivering large-scale industrial projects across India.',
  keywords: [
    'Arroyo Engineering', 'EPC contractor India', 'fuel station construction',
    'oil and gas infrastructure', 'civil construction', 'road construction',
    'bridge construction', 'industrial projects', 'heavy machinery', 'infrastructure company'
  ],
  openGraph: {
    title: 'Arroyo Engineering & Infrastructure Pvt. Ltd.',
    description: 'Engineering Excellence That Builds Tomorrow. EPC, Oil & Gas, Civil, Fuel Stations, Roads, Bridges & Heavy Machinery.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Arroyo Engineering',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arroyo Engineering & Infrastructure Pvt. Ltd.',
    description: 'Engineering Excellence That Builds Tomorrow.',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Arroyo Engineering & Infrastructure Pvt. Ltd.',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    description: 'EPC, Civil, Oil & Gas, Fuel Station, Roads, Bridges and Heavy Machinery.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Corporate Headquarters',
      addressLocality: 'Mumbai',
      addressRegion: 'MH',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-98765-43210',
      contactType: 'customer service',
    },
  }
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body>
        <Providers>{children}</Providers>
        <Toaster theme="dark" position="top-right" richColors />
      </body>
    </html>
  )
}
