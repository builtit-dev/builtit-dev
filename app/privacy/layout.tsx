import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - BuiltIt.dev',
  description: 'Privacy Policy for BuiltIt.dev - Learn how we collect, use, and protect your personal information.',
  openGraph: {
    title: 'Privacy Policy - BuiltIt.dev',
    description: 'Privacy Policy for BuiltIt.dev - Learn how we collect, use, and protect your personal information.',
    url: 'https://builtit.dev/privacy',
    images: [
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
    title: 'Privacy Policy - BuiltIt.dev',
    description: 'Privacy Policy for BuiltIt.dev - Learn how we collect, use, and protect your personal information.',
    creator: '@builtitdev',
  },
  alternates: {
    canonical: 'https://builtit.dev/privacy',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
