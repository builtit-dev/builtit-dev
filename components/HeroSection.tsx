'use client'

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion'

export default function HeroSection() {
  const router = useRouter();
  useEffect(() => {
    // Any initialization code can go here
  }, [])

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    // Navigate to contact page
    router.push('/contact/')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sophisticated Background - Inspired by HTML design */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #0C0C0C 0%, #1a0a1a 50%, #0C0C0C 100%)'
      }} />
      
      {/* Radial gradient overlays */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(127, 0, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(0, 224, 255, 0.05) 0%, transparent 50%)
        `
      }} />
      
      {/* Animated grid pattern with pulse */}
      <motion.div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(127, 0, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(127, 0, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Rocket exhaust particles - elegant and fast */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: i % 4 === 0 
                ? 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,165,0,0.7) 40%, rgba(127,0,255,0.4) 100%)' 
                : i % 4 === 1 
                  ? 'radial-gradient(circle, rgba(255,165,0,0.8) 0%, rgba(255,69,0,0.6) 50%, rgba(127,0,255,0.3) 100%)'
                  : i % 4 === 2
                    ? 'radial-gradient(circle, rgba(0,224,255,0.7) 0%, rgba(127,0,255,0.5) 60%, rgba(127,0,255,0.2) 100%)'
                    : 'radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(127,0,255,0.4) 70%, rgba(127,0,255,0.1) 100%)',
              left: `${8 + i * 5.5}%`,
              width: `${4 + (i % 3) * 3}px`,
              height: `${4 + (i % 3) * 3}px`,
              boxShadow: i % 4 === 0 
                ? '0 0 8px rgba(255,255,255,0.8), 0 0 16px rgba(255,165,0,0.6), 0 0 24px rgba(255,165,0,0.3)' 
                : i % 4 === 1 
                  ? '0 0 6px rgba(255,165,0,0.8), 0 0 12px rgba(255,69,0,0.6), 0 0 18px rgba(255,69,0,0.3)'
                  : i % 4 === 2
                    ? '0 0 8px rgba(0,224,255,0.7), 0 0 16px rgba(127,0,255,0.5), 0 0 24px rgba(127,0,255,0.3)'
                    : '0 0 6px rgba(255,255,255,0.6), 0 0 12px rgba(127,0,255,0.4), 0 0 18px rgba(127,0,255,0.2)',
            }}
            animate={{
              y: [800, -100],
              x: [0, (i % 2 === 0 ? 60 : -40) + (i % 3) * 15, (i % 2 === 0 ? 80 : -60)],
              scale: [0.8, 1.2, 0.9, 1.1, 0.7],
              opacity: [0, 0.8, 0.7, 0.5, 0],
            }}
            transition={{
              y: { 
                duration: 3.5 + (i % 3) * 0.8, 
                repeat: Infinity, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: i * 0.3
              },
              x: { 
                duration: 3.5 + (i % 3) * 0.8, 
                repeat: Infinity, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: i * 0.3
              },
              scale: { 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.2
              },
              opacity: { 
                duration: 3.5 + (i % 3) * 0.8, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.3
              },
            }}
          />
        ))}
        
        {/* Additional micro sparkles for depth */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`spark-${i}`}
            className="absolute rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
              left: `${15 + i * 9}%`,
              width: '2px',
              height: '2px',
              boxShadow: '0 0 4px rgba(255,255,255,0.8), 0 0 8px rgba(255,255,255,0.3)',
            }}
            animate={{
              y: [800, -80],
              x: [0, (i % 2 === 0 ? 30 : -25)],
              opacity: [0, 0.8, 0.6, 0],
            }}
            transition={{
              duration: 4 + (i % 2) * 1,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.5 + 1,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10 mt-16 sm:mt-0">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          {/* Sophisticated badge matching HTML design */}
          {/* Spacing preserved after removing the MVP pill */}
          <div className="mb-8"></div>

          {/* Enhanced headline with better gradient text */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading font-extrabold mb-6 leading-tight"
            style={{
              fontSize: 'clamp(3rem, 8vw, 5.5rem)',
              letterSpacing: '-0.02em'
            }}
          >
            <span 
              className="block"
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #B0B0B0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Build & Launch Your
            </span>
            <span 
              className="block"
              style={{
                background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              AI-Ready MVP
            </span>
            <span 
              className="block"
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #B0B0B0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              in 14 Days
            </span>
          </motion.h1>

          {/* Refined subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed font-normal"
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)'
            }}
          >
            Expert Product Management meets Full-Stack Development. 
            Skip the agency runaround — work directly with a seasoned PM who codes.
          </motion.p>

          {/* Refined CTA Buttons matching HTML design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            {/* Primary CTA - Contact Page */}
            <Link href="/contact/" legacyBehavior passHref>
              <motion.a
              className="group relative px-10 py-5 rounded-xl font-semibold text-lg overflow-hidden min-w-[260px] text-center block"
              style={{
                background: 'linear-gradient(135deg, var(--accent-primary) 0%, #9A1FFF 100%)',
                color: 'white'
              }}
              whileHover={{ 
                y: -2,
                boxShadow: '0 10px 25px rgba(127, 0, 255, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Start Your Project</span>
              
              {/* Shine effect */}
              <div 
                className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full"
              />
                        </motion.a>
            </Link>

            {/* Secondary CTA - Contact Us */}
            <motion.button
              onClick={handleContactClick}
              className="group relative flex items-center justify-center px-10 py-5 font-semibold text-lg rounded-xl min-w-[260px] transition-all duration-300 overflow-hidden"
              style={{
                background: 'rgba(0, 0, 0, 0.3)',
                color: 'var(--text-primary)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(20px)'
              }}
              whileHover={{ 
                y: -2,
                borderColor: 'var(--accent-secondary)',
                color: 'white',
                boxShadow: '0 10px 25px rgba(0, 224, 255, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 mr-3">Contact Us</span>
              <svg className="relative z-10 w-5 h-5 text-accent-secondary opacity-70 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              
              {/* Shine effect */}
              <div 
                className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full"
              />
            </motion.button>
          </motion.div>

          {/* Stats section matching HTML design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex justify-center gap-12 flex-wrap opacity-80"
          >
            <div className="text-center min-w-[120px]">
              <div 
                className="font-heading font-bold text-3xl mb-2 block"
                style={{ color: 'var(--accent-primary)' }}
              >
                50+
              </div>
              <div className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                Features Shipped
              </div>
            </div>
            <div className="text-center min-w-[120px]">
              <div 
                className="font-heading font-bold text-3xl mb-2 block"
                style={{ color: 'var(--accent-primary)' }}
              >
                6+
              </div>
              <div className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                Years SaaS PM
              </div>
            </div>
            <div className="text-center min-w-[120px]">
              <div 
                className="font-heading font-bold text-3xl mb-2 block"
                style={{ color: 'var(--accent-primary)' }}
              >
                100%
              </div>
              <div className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                AI-Ready
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
