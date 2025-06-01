'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


// Helper function to determine if we're in development or production
// Removed as we now use getBasePath utility

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle paths differently in development vs production
  // Get basePath from utility function
  const basePath = '/builtit-template'
  
  // In development, pathname won't have basePath
  // In production with static export, it will include basePath
  const normalizedPath = pathname.replace('/builtit-template', '')
  const isContactPage = normalizedPath === '/contact' || normalizedPath === '/contact/'
  
  // Navigation items with proper routing logic
  const navItems = [
    { name: 'Home', href: `${basePath}/`, isHome: true },
    { name: 'Portfolio', href: `${basePath}/#recent-launches`, isHashLink: true },
    { name: 'Reviews', href: `${basePath}/#reviews`, isHashLink: true },
    { name: 'Pricing', href: `${basePath}/#pricing`, isHashLink: true },
    { name: 'Contact', href: `${basePath}/contact/`, isContactLink: true }
  ]

  // Filter out Contact item when on contact page
  const filteredNavItems = navItems.filter(item => !(isContactPage && item.name === 'Contact'))

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    // For home link on any page, navigate to home and scroll to top
    if (item.isHome) {
      if (normalizedPath === '/') {
        // If already on home page, just scroll to top
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      // Otherwise let normal navigation happen
    }
    
    // For hash links, handle differently based on current page
    if (item.isHashLink) {
      const targetId = item.href.split('#')[1]
      
      if (normalizedPath === '/') {
        // If on home page, scroll to section directly
        e.preventDefault()
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        // If on another page, add a session storage flag to scroll after navigation
        sessionStorage.setItem('scrollToSection', targetId)
      }
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${isScrolled ? 'bg-bg-primary/95 backdrop-blur-md border-b border-border-subtle' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <Link href={`${basePath}/`} className="group">
              <img 
                src="/builtit-template/images/full logo.svg" 
                alt="BuiltIt.dev Logo" 
                className="h-9 w-auto transition-all duration-200 group-hover:opacity-80 group-hover:scale-105"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {filteredNavItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="relative text-text-secondary hover:text-text-primary transition-all duration-200 font-medium group"
                  scroll={!item.isHashLink} // Disable automatic scrolling for hash links
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Hover underline effect */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-primary transition-all duration-300 group-hover:w-full" />
                  {/* Glow effect on hover */}
                  <span className="absolute inset-0 rounded-lg bg-accent-primary/0 group-hover:bg-accent-primary/10 transition-all duration-300 blur-xl" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button - Clean, no gradient */}
          <motion.div
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {!isContactPage && (
              <Link href={`${basePath}/contact/`}>
                <motion.button
                  className="group relative px-8 py-3 bg-white rounded-full transition-all duration-500 overflow-hidden shadow-md hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                >
                  {/* Purple splash fill effect from bottom */}
                  <div className="absolute inset-0 rounded-full">
                    <div 
                      className="absolute bottom-0 left-0 w-full h-0 bg-accent-primary rounded-full transition-all duration-500 ease-out group-hover:h-full"
                    />
                  </div>
                  <span className="relative z-10 text-black group-hover:text-white font-semibold transition-colors duration-300 delay-100">
                    Start Building
                  </span>
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-full bg-accent-primary/30 blur-xl animate-pulse" />
                  </div>
                </motion.button>
              </Link>
            )}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileTap={{ scale: 0.9 }}
            type="button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden w-full ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'} ${isMobileMenuOpen ? 'bg-gradient-to-br from-[#1a1a2e]/95 to-[#0D0618]/90 backdrop-blur-xl shadow-2xl border border-border-subtle' : ''}`}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '100%',
            zIndex: 40
          }}
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4">
            <nav className="flex flex-col items-center space-y-4">
              {filteredNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-text-secondary hover:text-text-primary transition-all duration-200 font-medium px-4 py-2 text-center hover:bg-accent-primary/10 rounded-lg"
                  onClick={(e) => {
                    handleNavClick(e, item)
                    setIsMobileMenuOpen(false)
                  }}
                  scroll={!item.isHashLink} // Disable automatic scrolling for hash links
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 w-full flex justify-center">
                {!isContactPage && (
                  <Link href={`${basePath}/contact/`}>
                    <motion.button
                      className="group relative px-6 py-2.5 bg-white rounded-full transition-all duration-500 overflow-hidden shadow-md hover:shadow-xl w-auto min-w-[140px]"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                    >
                      <div className="absolute inset-0 rounded-full">
                        <div 
                          className="absolute bottom-0 left-0 w-full h-0 bg-accent-primary rounded-full transition-all duration-500 ease-out group-hover:h-full"
                        />
                      </div>
                      <span className="relative z-10 text-black group-hover:text-white font-semibold transition-colors duration-300 delay-100">
                        Start Building
                      </span>
                      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 rounded-full bg-accent-primary/30 blur-xl animate-pulse" />
                      </div>
                    </motion.button>
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}
