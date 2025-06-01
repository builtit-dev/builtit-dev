'use client'

import React, { useState, useEffect } from 'react'

interface ObfuscatedEmailProps {
  user: string
  domain: string
  className?: string
  children?: React.ReactNode
  policyPage?: boolean // New prop to determine if this is in a policy page
}

export default function ObfuscatedEmail({ user, domain, className = '', children, policyPage = false }: ObfuscatedEmailProps) {
  const [email, setEmail] = useState('')
  const [isRevealed, setIsRevealed] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Simple obfuscation that gets decoded on client side
    const decodedEmail = `${user}@${domain}`
    setEmail(decodedEmail)
    setIsMounted(true)
    
    // For policy pages, immediately reveal the email
    if (policyPage) {
      setIsRevealed(true)
    }
  }, [user, domain, policyPage])

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (email) {
      setIsRevealed(true)
      window.location.href = `mailto:${email}`
    }
  }

  const handleMouseEnter = () => {
    if (!policyPage) { // Only change state on hover for non-policy pages
      setIsRevealed(true)
    }
  }

  // For policy pages, always show the real email once mounted
  // For footer/other pages, show obfuscated version until interaction
  const getDisplayText = () => {
    if (children) return children
    
    if (policyPage) {
      return isMounted ? email : `${user}@${domain}` // Show real email immediately for policy pages
    }
    
    // For footer and other non-policy pages, show obfuscated until revealed
    return isRevealed ? email : `${user}[at]${domain.replace('.', '[dot]')}`
  }

  return (
    <a
      href="#"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      className={className}
      title={`Email ${email}`}
    >
      {getDisplayText()}
    </a>
  )
}

// Utility function for creating obfuscated emails
export function createObfuscatedEmail(emailAddress: string) {
  const [user, domain] = emailAddress.split('@')
  return { user, domain }
}
