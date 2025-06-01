'use client'

import React from 'react'
import Script from 'next/script'
import { motion } from 'framer-motion'
import Header from '../components/Header'

import HeroSection from '../components/HeroSection'
import ProcessSection from '../components/ProcessSection'
import BuiltItAdvantage from '../components/BuiltItAdvantage'
import RecentMVPLaunches from '../components/RecentMVPLaunches'
import PortfolioSection from '../components/PortfolioSection'
import TestimonialsSection from '../components/TestimonialsSection'
import MeetTheFounder from '../components/MeetTheFounder'
import PricingSection from '../components/PricingSection'
import Footer from '../components/Footer'

// Structured data for homepage
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "BuiltIt.dev - AI-Ready MVPs. Expertly Shipped.",
  "description": "Transform your startup idea into a production-ready AI MVP in just 14 days. Expert development, strategic thinking, and rapid execution.",
  "publisher": {
    "@type": "Organization",
    "name": "BuiltIt.dev",
    "logo": {
      "@type": "ImageObject",
      "url": "https://builtit.dev/favicon-512x512.png"
    }
  },
  "mainEntity": {
    "@type": "Service",
    "name": "AI-Powered MVP Development",
    "serviceType": "14-day MVP development sprint",
    "description": "Transform your startup idea into a production-ready AI MVP in just 14 days with expert development, strategic thinking, and rapid execution.",
    "provider": {
      "@type": "Organization",
      "name": "BuiltIt.dev"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "offers": {
      "@type": "Offer",
      "price": "5000",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    }
  }
}

export default function Home() {
  const basePath = '/builtit-template'
  const handleCalendlyClick = () => {
    // @ts-ignore - Calendly is loaded dynamically
    if (typeof window !== 'undefined' && window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/lyor-builtit/30min' })
    }
  }
  
  // Handle scrolling to section when navigating from another page
  React.useEffect(() => {
    const handleScrollToSection = () => {
      const sectionId = sessionStorage.getItem('scrollToSection')
      if (sectionId) {
        // Clear the stored section ID
        sessionStorage.removeItem('scrollToSection')
        
        // Give the page a moment to fully render before scrolling
        setTimeout(() => {
          const targetElement = document.getElementById(sectionId)
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }
    }
    
    // Run once when component mounts
    handleScrollToSection()
  }, [])

  return (
    <>
      <Script
        id="homepage-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ProcessSection />
        <BuiltItAdvantage />
        <RecentMVPLaunches />
        <PortfolioSection />
        <TestimonialsSection />
        <MeetTheFounder />
        <PricingSection />
        
        {/* Final CTA Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, #0C0C0C 0%, #1a0a1a 50%, #0C0C0C 100%)'
          }} />
          
          {/* Animated background elements */}
          <div className="absolute inset-0" style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(127, 0, 255, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(0, 224, 255, 0.06) 0%, transparent 50%)
            `
          }} />
          
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center z-10">
            {/* Header */}
            <div className="mb-16">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-8 leading-tight">
                Ready to Build Your
                <span className="block bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary bg-clip-text text-transparent mt-2 pb-6 mb-2">
                  Next Big Thing?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto mt-4">
                Join founders who've shipped successful MVPs in weeks, not months.
              </p>
            </div>

            {/* Enhanced CTA Buttons - Larger than hero */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* Primary CTA - Contact Page */}
              <motion.a
                href={`${basePath}/contact`}
                className="group relative px-10 py-5 rounded-xl font-semibold text-lg overflow-hidden text-center flex items-center justify-center transition-all duration-300 w-full sm:w-auto"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-primary) 0%, #9A1FFF 100%)',
                  color: 'white',
                  boxShadow: '0 8px 32px rgba(127, 0, 255, 0.4)',
                  minWidth: '260px'
                }}
                whileHover={{ 
                  y: -2,
                  boxShadow: '0 12px 40px rgba(127, 0, 255, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Started</span>
                
                {/* Enhanced shine effect */}
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-all duration-700" />
              </motion.a>

              {/* Secondary CTA - Contact Us */}
              <a
                href={`${basePath}/contact`}
                className="group relative flex items-center justify-center px-10 py-5 font-semibold text-lg rounded-xl transition-all duration-300 overflow-hidden w-full sm:w-auto"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  color: 'var(--text-primary)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(20px)',
                  minWidth: '260px'
                }}
              >
                <span className="relative z-10 mr-3">Contact Us</span>
                <svg className="relative z-10 w-6 h-6 text-accent-secondary opacity-70 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                
                {/* Shine effect - exactly like in Hero */}
                <div 
                  className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
