import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | BuiltIt.dev',
  description: 'Get in touch with BuiltIt.dev to discuss your AI-powered MVP project. Transform your startup idea into reality in just 14 days with expert development and strategic thinking.',
  keywords: 'contact, BuiltIt.dev, MVP development, AI development, startup consulting, get in touch',
  alternates: {
    canonical: 'https://builtit.dev/contact',
  },
  openGraph: {
    title: 'Contact Us | BuiltIt.dev',
    description: 'Get in touch with BuiltIt.dev to discuss your AI-powered MVP project.',
    url: 'https://builtit.dev/contact',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | BuiltIt.dev',
    description: 'Get in touch with BuiltIt.dev to discuss your AI-powered MVP project.',
    images: ['https://builtit.dev/og-image.png'],
  },
}
