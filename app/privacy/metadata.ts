import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | BuiltIt.dev',
  description: 'Privacy Policy for BuiltIt.dev - AI-Ready MVPs. Expertly Shipped. Learn how we protect your data and privacy when using our MVP development services.',
  keywords: 'privacy policy, data protection, BuiltIt.dev, MVP development, privacy',
  alternates: {
    canonical: 'https://builtit.dev/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | BuiltIt.dev',
    description: 'Privacy Policy for BuiltIt.dev - AI-Ready MVPs. Expertly Shipped.',
    url: 'https://builtit.dev/privacy',
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
