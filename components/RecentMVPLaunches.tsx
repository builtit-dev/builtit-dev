'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { getBasePath } from '@/lib/utils'

interface MVPProject {
  id: string
  title: string
  description: string
  outcome: string
  pillTag: string
  pillColor: 'primary' | 'secondary'
  ctaLink: string
  imagePlaceholder: string
}

const mvpProjects: MVPProject[] = [
  {
    id: 'findme-pet',
    title: 'FindMe.pet',
    description: 'Bridging the gap between hopeful adopters and shelter animals. FindMe.pet uses a lifestyle-matching algorithm to create lasting connections, ensuring pets find their perfect forever homes.',
    outcome: '',
    pillTag: 'AI & Matching Platform',
    pillColor: 'secondary',
    ctaLink: '/portfolio/findme-pet',
    imagePlaceholder: '/images/shasta_main.png'
  },
  {
    id: 'debtcat',
    title: 'DebtCat',
    description: 'Empowering consumers facing debt challenges. DebtCat educates users on their rights and provides accessible tools to effectively understand, manage, and fight their debt.',
    outcome: '',
    pillTag: 'Fintech & Consumer Rights',
    pillColor: 'primary',
    ctaLink: '/portfolio/debtcat',
    imagePlaceholder: '/images/debtcat_1.png'
  }
]

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
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.7, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const RecentMVPLaunches = () => {
  const basePath = getBasePath()
  return (
    <section id="recent-launches" className="relative py-12 lg:py-24 overflow-hidden mb-24 sm:mb-32 lg:mb-0 scroll-mt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary to-bg-secondary/30" />
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[500px] bg-gradient-radial from-accent-primary/6 via-accent-secondary/3 to-transparent rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-text-primary">Recent </span>
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">MVP Launches</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Real solutions, tangible results. See how our PM-led sprint approach transforms founder visions into market-ready products.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-24 sm:mb-32 lg:mb-0"
        >
          {mvpProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group"
            >
              {/* Card is now a single unit without external elements */}

              <Link href={`/portfolio/${project.id}`} className="relative block h-full rounded-3xl overflow-hidden transition-all duration-700 ease-out cursor-pointer group" style={{
                  background: 'linear-gradient(135deg, rgba(35, 35, 35, 0.9) 0%, rgba(25, 25, 25, 0.8) 50%, rgba(20, 20, 20, 0.7) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(20px)'
                }}>
                <div className="relative">
                {/* Enhanced Inner Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" 
                     style={{
                       background: 'linear-gradient(135deg, rgba(127, 0, 255, 0.18) 0%, rgba(0, 224, 255, 0.12) 30%, rgba(255, 0, 127, 0.08) 60%, rgba(127, 0, 255, 0.18) 100%)',
                       boxShadow: 'inset 0 2px 0 rgba(255, 255, 255, 0.2), inset 0 -2px 0 rgba(0, 0, 0, 0.4), inset 0 0 60px rgba(127, 0, 255, 0.1)'
                     }} />
                
                {/* Enhanced Stroke Highlight */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"
                     style={{
                       background: 'linear-gradient(135deg, rgba(127, 0, 255, 0.6) 0%, rgba(0, 224, 255, 0.4) 25%, rgba(255, 0, 127, 0.3) 50%, rgba(0, 224, 255, 0.4) 75%, rgba(127, 0, 255, 0.6) 100%)',
                       mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                       maskComposite: 'xor',
                       WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                       WebkitMaskComposite: 'xor',
                       padding: '1.5px'
                     }} />

                {/* Stronger Multi-Layer Outer Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"
                     style={{
                       boxShadow: `
                         0 0 30px rgba(127, 0, 255, 0.4),
                         0 0 60px rgba(127, 0, 255, 0.3),
                         0 0 100px rgba(127, 0, 255, 0.2),
                         0 0 140px rgba(127, 0, 255, 0.1),
                         0 10px 40px rgba(0, 0, 0, 0.3)
                       `
                     }} />

                {/* Ambient Light Ring */}
                <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"
                     style={{
                       background: 'radial-gradient(circle, rgba(127, 0, 255, 0.15) 0%, rgba(0, 224, 255, 0.08) 40%, transparent 70%)',
                       filter: 'blur(20px)'
                     }} />

                <div className="relative z-10">
                  {/* Card Image */}
                  <div className="relative w-full h-32 sm:h-40 md:h-56 lg:h-72 overflow-hidden rounded-t-3xl">
                    {/* Enhanced overlay gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <Image
                      src={`/builtit-template${project.imagePlaceholder}`}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover transition-all duration-1000 ease-out group-hover:scale-115 group-hover:brightness-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized
                    />
                    
                    {/* Enhanced multi-layer shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-out delay-100" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1400 ease-out delay-200" />
                    
                    {/* Subtle particle effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute top-4 left-4 w-1 h-1 bg-white/60 rounded-full animate-pulse" />
                      <div className="absolute top-8 right-6 w-0.5 h-0.5 bg-accent-primary/80 rounded-full animate-pulse delay-300" />
                      <div className="absolute bottom-6 left-8 w-0.5 h-0.5 bg-accent-secondary/60 rounded-full animate-pulse delay-500" />
                    </div>
                  </div>

                  {/* Ultra-Enhanced Content */}
                  <div className="p-4 sm:p-6 md:p-8 relative">
                    {/* Subtle background glow for content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/3 to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white/90 leading-tight group-hover:text-accent-primary/90 transition-all duration-500 group-hover:transform group-hover:scale-105 flex-1 pr-3">
                          {project.title}
                        </h3>
                        {/* Category Label with Purple Glow - Right aligned */}
                        <div className="inline-flex items-center px-2.5 py-1 text-xs font-medium text-white transition-all duration-700 group-hover:scale-105 flex-shrink-0 self-start" style={{
                          background: 'rgba(20, 20, 20, 0.8)',
                          boxShadow: `0 0 12px ${project.pillColor === 'primary' ? 'rgba(127, 0, 255, 0.4)' : 'rgba(0, 224, 255, 0.4)'}`,
                          borderRadius: '6px',
                          border: `1px solid ${project.pillColor === 'primary' ? 'rgba(127, 0, 255, 0.3)' : 'rgba(0, 224, 255, 0.3)'}`
                        }}>
                          <span className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 transition-all duration-700 group-hover:scale-110" style={{
                            backgroundColor: project.pillColor === 'primary' ? '#7F00FF' : '#00E0FF'
                          }}></span>
                          <span className="whitespace-nowrap text-xs">{project.pillTag}</span>
                        </div>
                      </div>
                      
                      <p className="text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed line-clamp-1 sm:line-clamp-2 md:line-clamp-none group-hover:text-text-primary/95 transition-all duration-500 group-hover:transform group-hover:translate-y-[-2px]">
                        {project.description}
                      </p>

                      {/* Enhanced hover indicator with glow */}
                      <div className="mt-2 sm:mt-3 md:mt-6 flex items-center gap-2 text-accent-primary/60 group-hover:text-accent-primary transition-all duration-500 group-hover:transform group-hover:translate-x-1">
                        <span className="text-sm font-medium relative text-white/80 group-hover:text-accent-primary/90 transition-colors duration-500">
                          View Case Study
                          <div className="absolute inset-0 bg-accent-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </span>
                        <svg className="w-4 h-4 transition-all duration-500 group-hover:translate-x-3 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default RecentMVPLaunches
