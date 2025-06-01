import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DebtCat Case Study | BuiltIt.dev - AI-Powered Debt Relief Platform',
  description: 'How we built DebtCat, an AI-powered debt relief platform that democratizes insider knowledge for consumers fighting unfair debt collection practices. A comprehensive product case study.',
  keywords: 'DebtCat, debt relief, fintech, AI chatbot, consumer empowerment, product development, case study',
  alternates: {
    canonical: 'https://builtit.dev/portfolio/debtcat',
  },
  openGraph: {
    title: 'DebtCat: AI-Powered Debt Relief Platform | BuiltIt.dev',
    description: 'Building a no-BS first aid kit for people drowning in debt - a comprehensive product case study',
    url: 'https://builtit.dev/portfolio/debtcat',
    type: 'article',
    images: [
      {
        url: 'https://builtit.dev/images/icons/debtcat1-compressed.jpg',
        width: 1200,
        height: 600,
        alt: 'DebtCat - AI-Powered Debt Relief Platform',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DebtCat: AI-Powered Debt Relief Platform | BuiltIt.dev',
    description: 'Building a no-BS first aid kit for people drowning in debt - a comprehensive product case study',
    images: ['https://builtit.dev/images/icons/debtcat1-compressed.jpg'],
  },
}
