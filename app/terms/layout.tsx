import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - BuiltIt.dev',
  description: 'Terms of Service for BuiltIt.dev - Read about our terms and conditions for using our services.',
  openGraph: {
    title: 'Terms of Service - BuiltIt.dev',
    description: 'Terms of Service for BuiltIt.dev - Read about our terms and conditions for using our services.',
    url: 'https://builtit.dev/terms',
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
    title: 'Terms of Service - BuiltIt.dev',
    description: 'Terms of Service for BuiltIt.dev - Read about our terms and conditions for using our services.',
    creator: '@builtitdev',
  },
  alternates: {
    canonical: 'https://builtit.dev/terms',
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
