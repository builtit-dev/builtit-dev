import React from 'react'
import Header from '../../components/Header'
import ContactPageContent from '../../components/ContactPageContent'
import Footer from '../../components/Footer'
import Script from 'next/script'

export { metadata } from './metadata'

const ContactPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact BuiltIt.dev",
    "description": "Get in touch with BuiltIt.dev to discuss your MVP project. Schedule a free strategy call or send us a message.",
    "url": "https://builtit.dev/contact",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://builtit.dev/contact"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BuiltIt.dev",
      "logo": {
        "@type": "ImageObject",
        "url": "https://builtit.dev/favicon-512x512.png"
      }
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": "https://builtit.dev/contact",
        "availableLanguage": ["en"],
        "contactOption": [
          "https://schema.org/HearingImpairedSupported",
          "https://schema.org/TollFree"
        ]
      }
    ]
  }

  return (
    <>
      <Script
        id="contact-page-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className="min-h-screen">
        <ContactPageContent />
      </main>
      <Footer />
    </>
  )
}

export default ContactPage
