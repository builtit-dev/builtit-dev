// This file provides helper functions for generating metadata in layout.tsx files

export interface SEOProps {
  title?: string
  description?: string
  ogImage?: string
  pathname?: string
}

export function generateMetadata({ 
  title = 'BuiltIt.dev | Strategic MVP Development',
  description = 'Strategic MVP development for founders and startups. We build beautiful, functional products that solve real problems.',
  ogImage = '/images/og-image.png',
  pathname = ''
}: SEOProps) {
  const canonicalUrl = `https://builtit.dev${pathname === '/' ? '' : pathname}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: ogImage }],
      url: canonicalUrl,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}
