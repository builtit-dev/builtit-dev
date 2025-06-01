'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface PricingTier {
  id: string
  name: string
  description: string
  price: string
  duration: string
  features: string[]
  highlights: string[]
  cta: string
  popular?: boolean
  enterprise?: boolean
}

const pricingTiers: PricingTier[] = [
  {
    id: 'mvp-launchpad',
    name: 'MVP Launchpad',
    description: 'Perfect for founders who need to validate their core idea quickly with a high-quality foundation.',
    price: '$5,000',
    duration: '2-3 weeks',
    features: [
      'PM-Led Discovery & Strategic Blueprint',
      'User-Centric UI/UX Design',
      'Core Feature Development (Next.js)',
      'AI-Ready Architecture Foundation',
      'Deployment & Launch Support',
      'Post-Launch Optimization Guide'
    ],
    highlights: [
      'Quick Validation',
      'AI-Ready Foundation',
      'Launch Support'
    ],
    cta: 'Start Your MVP',
    popular: false
  },
  {
    id: 'ai-accelerated-mvp',
    name: 'AI-Accelerated MVP',
    description: 'Launch with integrated AI capabilities from day one for a distinct competitive advantage.',
    price: '$6,500',
    duration: '3-5 weeks',
    features: [
      'Everything in MVP Launchpad',
      'Custom AI Feature Integration',
      'GPT-Powered User Interactions',
      'Intelligent Search & Recommendations',
      'AI Model & API Integration',
      'Advanced Analytics Setup',
      'AI Performance Optimization'
    ],
    highlights: [
      'AI From Day One',
      'Competitive Edge',
      'Smart Features'
    ],
    cta: 'Build AI-Powered MVP',
    popular: true
  },
  {
    id: 'tailored-ai-solutions',
    name: 'Tailored AI Solutions',
    description: 'Custom AI development for complex visions and enterprise-level optimization needs.',
    price: 'Custom',
    duration: 'Project-based',
    features: [
      'Comprehensive AI Opportunity Audit',
      'Custom AI Agent Development',
      'Workflow Automation Design',
      'Advanced Data Analysis Systems',
      'Scalable AI Architecture',
      'Enterprise Integration Support',
      'Ongoing AI Strategy Consultation'
    ],
    highlights: [
      'Bespoke Development',
      'Enterprise Scale',
      'Strategic Consultation'
    ],
    cta: 'Discuss Your Vision',
    enterprise: true
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export default function PricingSection() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const toggleExpansion = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

  return (
    <section id="pricing" className="relative py-20 lg:py-24 overflow-hidden scroll-mt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary/50 to-bg-primary" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-radial from-accent-primary/10 via-accent-secondary/5 to-transparent rounded-full blur-3xl" />
      
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          
          
          <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary mb-6 leading-tight">
            Choose Your
            <span className="block bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              MVP Journey
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Clear scopes, focused sprints. From validation to AI-powered solutions.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              variants={cardVariants}
              className={`relative group ${
                tier.popular ? 'lg:scale-105 lg:-translate-y-4' : ''
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-accent-primary to-accent-secondary text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`relative h-full bg-bg-card/80 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-700 ease-out hover:scale-[1.02] hover:shadow-2xl flex flex-col ${
                tier.popular 
                  ? 'border-accent-primary/40 shadow-xl shadow-accent-primary/5' 
                  : tier.enterprise
                  ? 'border-border-subtle hover:border-border-highlight/50'
                  : 'border-border-subtle hover:border-border-highlight/50'
              } ${expandedCard === tier.id ? 'ring-1 ring-border-highlight/50' : ''}`}>
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 rounded-2xl opacity-30 transition-opacity duration-700 ${
                  tier.popular 
                    ? 'bg-gradient-to-br from-accent-primary/8 via-transparent to-accent-secondary/8'
                    : 'bg-gradient-to-br from-bg-secondary/10 to-transparent'
                }`} />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h3 className="font-heading text-xl font-bold text-text-primary mb-3">
                      {tier.name}
                    </h3>
                    
                    <div className="mb-4">
                      <div className="flex items-baseline justify-center gap-1 mb-1">
                        {tier.price !== 'Custom' && (
                          <span className="text-sm text-text-muted">from</span>
                        )}
                        <span className="text-3xl lg:text-4xl font-bold text-text-primary">
                          {tier.price}
                        </span>
                      </div>
                      <div className="text-sm text-text-muted">
                        {tier.duration}
                      </div>
                    </div>

                    <p className="text-sm text-text-secondary leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {tier.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-xs font-medium rounded-full transition-colors duration-300 ${
                          tier.popular
                            ? 'bg-accent-primary text-white'
                            : index === 0
                            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                            : index === 2
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-bg-secondary/60 text-text-secondary border border-border-subtle'
                        }`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6 flex-1">
                    <div className="space-y-2.5">
                      {tier.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 transition-colors duration-300 ${
                            tier.popular
                              ? 'bg-accent-primary/15'
                              : index === 0
                              ? 'bg-blue-500/15'
                              : index === 2
                              ? 'bg-emerald-500/15'
                              : 'bg-bg-secondary/80'
                          }`}>
                            <svg className={`w-2.5 h-2.5 transition-colors duration-300 ${
                              tier.popular
                                ? 'text-accent-primary'
                                : index === 0
                                ? 'text-blue-400'
                                : index === 2
                                ? 'text-emerald-400'
                                : 'text-text-muted'
                            }`} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-sm text-text-secondary leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}

                      {/* Expandable Features */}
                      {tier.features.length > 4 && (
                        <>
                          <motion.div
                            initial={false}
                            animate={{
                              height: expandedCard === tier.id ? 'auto' : 0,
                              opacity: expandedCard === tier.id ? 1 : 0
                            }}
                            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-2.5 pt-2.5">
                              {tier.features.slice(4).map((feature, idx) => (
                                <div key={idx + 4} className="flex items-start gap-3">
                                  <div className={`w-4 h-4 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 transition-colors duration-300 ${
                                    tier.popular
                                      ? 'bg-accent-primary/15'
                                      : index === 0
                                      ? 'bg-blue-500/15'
                                      : index === 2
                                      ? 'bg-emerald-500/15'
                                      : 'bg-bg-secondary/80'
                                  }`}>
                                    <svg className={`w-2.5 h-2.5 transition-colors duration-300 ${
                                      tier.popular
                                        ? 'text-accent-primary'
                                        : index === 0
                                        ? 'text-blue-400'
                                        : index === 2
                                        ? 'text-emerald-400'
                                        : 'text-text-muted'
                                    }`} fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                  <span className="text-sm text-text-secondary leading-relaxed">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                          
                          <button
                            onClick={() => toggleExpansion(tier.id)}
                            className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 group mt-2 ${
                              tier.popular
                                ? 'text-accent-primary hover:text-accent-primary/80'
                                : index === 0
                                ? 'text-blue-400 hover:text-blue-300'
                                : index === 2
                                ? 'text-emerald-400 hover:text-emerald-300'
                                : 'text-text-muted hover:text-text-secondary'
                            }`}
                          >
                            <span>
                              {expandedCard === tier.id ? 'Show less' : `+${tier.features.length - 4} more`}
                            </span>
                            <motion.svg
                              animate={{ rotate: expandedCard === tier.id ? 180 : 0 }}
                              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </motion.svg>
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  {/* CTA Button - Always at bottom */}
                  <div className="mt-auto">
                    <motion.a
                      href="/contact"
                      className={`w-full py-4 px-6 rounded-xl font-semibold text-base transition-all duration-500 ease-out group relative overflow-hidden text-center min-h-[48px] flex items-center justify-center ${
                        tier.enterprise
                          ? 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40 hover:-translate-y-0.5'
                          : tier.popular
                          ? 'bg-gradient-to-r from-accent-primary to-accent-primary/90 hover:from-accent-primary/90 hover:to-accent-primary/80 text-white shadow-lg hover:shadow-xl hover:shadow-accent-primary/20 hover:-translate-y-0.5'
                          : index === 0
                          ? 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 hover:border-blue-500/40 hover:-translate-y-0.5'
                          : 'bg-bg-secondary/60 hover:bg-bg-secondary/80 text-text-primary border border-border-subtle hover:border-border-highlight/50 hover:-translate-y-0.5'
                      }`}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                        {tier.cta}
                      </span>
                      
                      {/* Shine effect for popular tier */}
                      {tier.popular && (
                        <div 
                          className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full"
                        />
                      )}
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  )
}
