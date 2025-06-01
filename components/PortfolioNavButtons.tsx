'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function PortfolioNavButtons() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {/* Floating Back to Portfolio Button - Positioned exactly like the nav button */}
      <div 
        className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start">
            <Link
              href="/#recent-launches"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 group backdrop-blur-md"
              style={{
                background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
                boxShadow: '0 8px 32px rgba(90, 69, 255, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2)'
              }}
              aria-label="Back to portfolio"
            >
              <svg 
                className="w-4 h-4 text-white transition-transform duration-200 group-hover:-translate-x-0.5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-white text-sm font-medium whitespace-nowrap">← Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button - Right side */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full transition-all duration-300 group z-50 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        style={{
          background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
          boxShadow: '0 4px 20px rgba(90, 69, 255, 0.3)'
        }}
        aria-label="Back to top"
      >
        <svg 
          className="w-5 h-5 text-white transition-transform duration-200 group-hover:-translate-y-0.5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  )
}
