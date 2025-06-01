'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const MeetTheFounder = () => {
  return (
    <section id="founder" className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary to-bg-secondary/30" />
      <div className="absolute top-1/2 right-1/4 w-[800px] h-[400px] bg-gradient-radial from-accent-secondary/8 via-accent-primary/5 to-transparent rounded-full blur-3xl" />
      
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Headline */}
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-primary mb-6 leading-tight">
              Meet Lyor: Your 
              <span className="block bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                PM & Tech Lead
              </span>
            </h2>

            {/* Bio Text */}
            <div className="space-y-4 text-text-secondary leading-relaxed mb-8">
              <p>
                Hi, I'm <span className="font-semibold text-text-primary">Lyor Itzhaki</span>. With over 6 years leading product at SaaS companies like TrueML and EcoCart, I've launched impactful features and driven growth in complex spaces like fintech.
              </p>
              
              <p>
                I founded buildit because I saw too many great ideas stall due to the disconnect between strategy and execution. Here, my product management expertise is fused directly with hands-on Next.js development.
              </p>
              
              <p>
                This means your MVP isn't just built fast—it's built right, strategically designed to solve real user problems and validate your vision efficiently. You work directly with me, ensuring clarity, speed, and a product truly ready for the market.
              </p>
            </div>

            {/* LinkedIn Link */}
            <motion.a
              href="https://www.linkedin.com/in/lyor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-bg-card/60 hover:bg-bg-card/80 border border-border-subtle hover:border-border-highlight/50 rounded-xl text-text-primary font-medium text-sm transition-all duration-500 ease-out hover:shadow-lg hover:-translate-y-0.5 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-4 h-4 text-text-muted group-hover:text-accent-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                Connect on LinkedIn
              </span>
              <svg className="w-3.5 h-3.5 text-text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative group">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-2xl blur-xl transform rotate-3" />
              
              {/* Photo Container */}
              <motion.div 
                className="relative bg-bg-card/80 backdrop-blur-sm border border-border-subtle rounded-2xl p-2 shadow-xl"
                whileHover={{ 
                  y: -4,
                  boxShadow: '0 20px 40px rgba(127, 0, 255, 0.15)',
                  borderColor: 'rgba(127, 0, 255, 0.3)'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 rounded-xl overflow-hidden">
                  <Image
                    src="/images/icons/founder.jpeg"
                    alt="Lyor Itzhaki - Founder & PM"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </motion.div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-primary/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent-secondary/15 rounded-full animate-pulse delay-1000" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MeetTheFounder
