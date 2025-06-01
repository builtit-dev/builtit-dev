'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-bg-primary overflow-hidden pt-24 pb-16">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center" style={{ minHeight: 'calc(100vh - 300px)' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-bg-card/40 backdrop-blur-xl border border-accent-primary/20 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgba(127,0,255,0.12)] text-center w-full max-w-2xl"
          >
            <motion.h1 
              className="font-heading text-6xl md:text-7xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-text-primary">4</span>
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">0</span>
              <span className="text-text-primary">4</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-text-secondary mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Oops! The page you're looking for has launched into space.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-primary hover:bg-accent-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-md">
                <span>Return to Home</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
