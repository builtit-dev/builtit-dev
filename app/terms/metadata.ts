import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | BuiltIt.dev',
  description: 'Terms of Service for BuiltIt.dev - AI-Ready MVPs. Expertly Shipped. Review our terms and conditions for using our MVP development services.',
  keywords: 'terms of service, legal, BuiltIt.dev, MVP development, terms and conditions',
  alternates: {
    canonical: 'https://builtit.dev/terms',
  },
  openGraph: {
    title: 'Terms of Service | BuiltIt.dev',
    description: 'Terms of Service for BuiltIt.dev - AI-Ready MVPs. Expertly Shipped.',
    url: 'https://builtit.dev/terms',
    type: 'website',
    images: [
      {
        url: 'https://builtit.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BuiltIt.dev - AI-Ready MVPs. Expertly Shipped.',
      }
    ],
  },
}
