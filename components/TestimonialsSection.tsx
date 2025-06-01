'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Testimonial {
  id: number
  quote: string
  author: string
  title: string
  company: string
  image?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "This is a fantastic service! The team was professional, fast, and exceeded my expectations.",
    author: "Jane Doe",
    title: "Founder",
    company: "Startup Inc.",
    image: "/images/thispersondoesnotexist-1.jpg"
  },
  {
    id: 2,
    quote: "Highly recommended. Great communication and delivery on time.",
    author: "Sophia Kim",
    title: "Product Manager",
    company: "Tech Solutions",
    image: "/images/thispersondoesnotexist-2.jpg"
  },
  {
    id: 3,
    quote: "The process was smooth and the results were outstanding. Would work with them again!",
    author: "Alex Lee",
    title: "CEO",
    company: "InnovateX",
    image: "/images/thispersondoesnotexist.jpg"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
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

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-primary/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Tag removed */}
          
          <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary mb-6">
            What Our{' '}
            <div id="reviews" className="absolute -top-32 h-0 w-0 scroll-mt-32" aria-hidden="true" />
<span className="text-gradient">Clients Say</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Real founders sharing their experience building AI-ready MVPs with our 14-day sprint process.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
  <motion.div
    key={testimonial.id}
    variants={cardVariants}
    className="group relative h-full flex flex-col"
  >
    {/* Card */}
    <div className="relative h-full bg-bg-card border border-border-subtle rounded-xl p-8 hover-lift flex flex-col justify-between">
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Avatar Image */}
      <div className="flex justify-center mb-6">
        <span className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-accent-primary via-accent-secondary to-accent-primary block">
          <img 
            src={testimonial.image} 
            alt={`${testimonial.author} avatar`} 
            className="w-full h-full rounded-full object-cover bg-bg-card"
          />
        </span>
      </div>

      {/* Quote */}
      <blockquote className="relative text-text-secondary leading-relaxed mb-8 text-base lg:text-lg">
        "{testimonial.quote}"
      </blockquote>

      {/* Author (anchored to bottom) */}
      <div className="relative pt-6 border-t border-border-subtle mt-auto">
        <div className="flex flex-col items-start">
          <div className="font-semibold text-text-primary text-sm">
            {testimonial.author}
          </div>
          <div className="text-text-muted text-sm">
            {testimonial.title}, {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-text-secondary mb-6 text-lg">
            Ready to join our success stories?
          </p>
          <a 
            href="/contact"
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-primary/80 hover:from-accent-primary/90 hover:to-accent-primary/70 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-primary/25 overflow-hidden"
          >
            <span className="relative z-10">Start Your 14-Day Sprint</span>
            <svg className="relative z-10 ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            
            {/* Shine effect */}
            <div 
              className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full"
            />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
