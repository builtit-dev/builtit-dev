import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - BuiltIt.dev',
  description: 'Cookie Policy for BuiltIt.dev - Learn how we use cookies and similar technologies on our website.',
  openGraph: {
    title: 'Cookie Policy - BuiltIt.dev',
    description: 'Cookie Policy for BuiltIt.dev - Learn how we use cookies and similar technologies on our website.',
    url: 'https://builtit.dev/cookies',
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
    title: 'Cookie Policy - BuiltIt.dev',
    description: 'Cookie Policy for BuiltIt.dev - Learn how we use cookies and similar technologies on our website.',
    creator: '@builtitdev',
  },
  alternates: {
    canonical: 'https://builtit.dev/cookies',
  },
}

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
