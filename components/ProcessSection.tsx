'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { getBasePath } from '@/lib/utils'

interface ProcessStep {
  id: number
  phase: string
  title: string
  description: string
  iconPath: string
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Strategize & Blueprint",
    description: "PM-led discovery to define your core problem, target users, and success metrics. We craft a clear strategic roadmap and a focused MVP blueprint.",
    iconPath: "/images/icons/Neon Magnifier with Network Design.png"
  },
  {
    id: 2,
    phase: "Phase 2", 
    title: "Build & Iterate",
    description: "Rapid Next.js development of your core features. You get daily Loom updates, ensuring transparency and alignment as your AI-ready MVP takes shape.",
    iconPath: "/images/icons/Magenta Code Icon on Navy Background.png"
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "Launch & Validate", 
    description: "Smooth deployment of your MVP. We provide initial support and help you gather crucial user feedback to inform your next steps and drive validation.",
    iconPath: "/images/icons/Magenta Rocket in Flight.png"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2
    }
  }
}

const stepVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export default function ProcessSection() {
  const basePath = getBasePath()
  return (
    <section id="process" className="relative py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-10 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            Our Path to Your <span className="text-gradient">MVP</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A proven 3-phase approach that transforms your idea into a market-ready product in weeks, not months.
          </p>
        </motion.div>

        {/* Process Steps - Simplified Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto space-y-6 sm:space-y-8"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={stepVariants}
              className="group"
            >
              <motion.div 
                className="relative p-5 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-700/60 bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm overflow-hidden"
                whileHover={{
                  borderColor: 'rgba(168, 85, 247, 0.25)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
                }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <div className="relative z-10 flex flex-col sm:flex-row items-center sm:gap-8 text-center sm:text-left">
                  {/* Phase Label - Mobile Optimized */}
                  <motion.div
                    className="inline-block px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-3 sm:hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(127, 0, 255, 0.2), rgba(0, 201, 183, 0.15))',
                      border: '1px solid rgba(127, 0, 255, 0.4)',
                      color: '#A855F7'
                    }}
                  >
                    {step.phase}
                  </motion.div>
                  
                  {/* Icon - Smaller on Mobile */}
                  <motion.div 
                    className="flex-shrink-0 w-20 h-20 sm:w-28 md:w-32 sm:h-28 md:h-32 flex items-center justify-center mb-4 sm:mb-0"
                  >
                    <motion.div
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(127, 0, 255, 0.4))'
                      }}
                    >
                      <Image
                        src={`/builtit-template${step.iconPath}`}
                        alt={step.title}
                        width={index === 1 ? 80 : 75} 
                        height={index === 1 ? 80 : 75}
                        className={`object-contain transition-all duration-500 ease-out ${
                          index === 0 
                            ? 'group-hover:animate-[zoom_2s_cubic-bezier(0.25,0.46,0.45,0.94)]' 
                            : index === 1 
                            ? 'group-hover:animate-[flip_2.5s_cubic-bezier(0.25,0.46,0.45,0.94)]' 
                            : 'group-hover:animate-[rocket_3s_cubic-bezier(0.25,0.46,0.45,0.94)]'
                        }`}
                      />
                    </motion.div>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    {/* Phase Label - Desktop Only */}
                    <motion.div
                      className="hidden sm:inline-block px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-3 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 ease-out"
                      style={{
                        background: 'linear-gradient(135deg, rgba(127, 0, 255, 0.2), rgba(0, 201, 183, 0.15))',
                        border: '1px solid rgba(127, 0, 255, 0.4)',
                        color: '#A855F7'
                      }}
                    >
                      {step.phase}
                    </motion.div>
                    
                    {/* Title with subtle text animation */}
                    <motion.h3 
                      className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-300 transition-all duration-300 ease-out"
                    >
                      {step.title}
                    </motion.h3>
                    
                    {/* Description with gentle fade animation */}
                    <motion.p 
                      className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed group-hover:text-gray-300 transition-all duration-300 ease-out"
                    >
                      {step.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
              
              {/* Reduced Spacer */}
              {index < processSteps.length - 1 && (
                <div className="h-4 sm:h-8"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA - Simplified for Mobile */}
        <motion.div
          className="text-center mt-10 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a 
            href={`${basePath}/contact/`}
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
