import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FindMe.pet Case Study - AI-Powered Pet Adoption Platform | BuiltIt.dev',
  description: 'How BuiltIt.dev built an AI-powered pet adoption platform in 14 days, combining strategic product thinking with modern tech to solve real-world adoption challenges.',
  keywords: 'pet adoption, AI matching, MVP development, Next.js, OpenAI API, PetFinder API, product strategy, case study',
  alternates: {
    canonical: 'https://builtit.dev/portfolio/findme-pet',
  },
  openGraph: {
    title: 'FindMe.pet Case Study - AI-Powered Pet Adoption Platform',
    description: 'Strategic MVP development combining AI, product thinking, and rapid execution to solve pet adoption challenges.',
    url: 'https://builtit.dev/portfolio/findme-pet',
    type: 'article',
    images: [
      {
        url: 'https://builtit.dev/images/icons/finndmepet1-compressed.jpg',
        width: 1200,
        height: 600,
        alt: 'FindMe.pet - AI-Powered Pet Adoption Platform',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FindMe.pet Case Study - AI-Powered Pet Adoption Platform',
    description: 'Strategic MVP development combining AI, product thinking, and rapid execution to solve pet adoption challenges.',
    images: ['https://builtit.dev/images/icons/finndmepet1-compressed.jpg'],
  },
}
