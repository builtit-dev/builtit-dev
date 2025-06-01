import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BuiltIt.dev - AI-Ready MVPs. Expertly Shipped.',
  description: 'Transform your startup idea into a production-ready AI MVP in just 14 days. Expert development, strategic thinking, and rapid execution.',
  openGraph: {
    title: 'BuiltIt.dev - AI-Ready MVPs. Expertly Shipped.',
    description: 'Transform your startup idea into a production-ready AI MVP in just 14 days. Expert development, strategic thinking, and rapid execution.',
    url: 'https://builtit.dev',
    siteName: 'BuiltIt.dev',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BuiltIt.dev - AI-Ready MVPs. Expertly Shipped.',
      },
      {
        url: '/og-image-square.png',
        width: 1200,
        height: 1200,
        alt: 'BuiltIt.dev - AI-Ready MVPs. Expertly Shipped.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BuiltIt.dev - AI-Ready MVPs. Expertly Shipped.',
    description: 'Transform your startup idea into a production-ready AI MVP in just 14 days. Expert development, strategic thinking, and rapid execution.',
    creator: '@builtitdev',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://builtit.dev',
  },
}
