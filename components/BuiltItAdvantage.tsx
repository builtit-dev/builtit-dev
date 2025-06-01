'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { getBasePath } from '@/lib/utils'

interface Advantage {
  id: string
  title: string
  description: string
  iconPath: string
}

const advantages: Advantage[] = [
  {
    id: 'pm-strategy',
    title: 'PM-Led Product Strategy',
    description: 'More than just code. Every MVP is built on a foundation of rigorous product strategy led by a 6+ year SaaS PM, ensuring we solve the right problem for the right users.',
    iconPath: '/images/icons/Neon Brainstorm Symbol.png'
  },
  {
    id: 'nextjs-production',
    title: 'Production-Grade Next.js',
    description: 'Clean, scalable, and performant applications built with modern Next.js best practices by a developer who understands product lifecycles.',
    iconPath: '/images/icons/Neon _N_ Hexagonal Icon.png'
  },
  {
    id: 'ai-ready',
    title: 'Architected for AI',
    description: 'We build your MVP with an AI-first mindset, creating a flexible foundation that\'s ready for intelligent features, now or as you scale.',
    iconPath: '/images/icons/Glowing Neural Network Connection.png'
  },
  {
    id: 'transparent-process',
    title: 'Transparent Process, Daily Looms',
    description: 'No black boxes. You get daily video updates and direct access, ensuring you\'re informed and involved every step of the way.',
    iconPath: '/images/icons/Neon Play Window Illustration.png'
  },
  {
    id: 'dedicated-lead',
    title: 'One Dedicated Lead: PM & Developer',
    description: 'Streamlined decisions and total accountability. Your founder, Lyor, is your single point of contact for both product strategy and technical execution.',
    iconPath: '/images/icons/Arrow Hitting Bullseye Icon.png'
  },
  {
    id: 'predictable-investment',
    title: 'Predictable Investment',
    description: 'We focus on clear scopes and efficient sprints, offering transparent starting points that lead to a fixed proposal. No surprise hourly bills.',
    iconPath: '/images/icons/Price Tag Document Icon.png'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
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

const BuiltItAdvantage = () => {
  const basePath = getBasePath()
  return (
    <section id="advantage" className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary/30 to-bg-primary" />
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-gradient-radial from-accent-primary/8 via-accent-secondary/4 to-transparent rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >

          
          <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary mb-6 leading-tight">
            Your Edge: 
            <span className="block bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent pb-1 leading-tight">
              PM-Led Strategy, Expertly Coded.
            </span>
          </h2>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {advantages.map((advantage) => (
            <motion.div
              key={advantage.id}
              variants={cardVariants}
              className="group"
            >
              <motion.div
                className="relative h-full bg-bg-secondary/50 backdrop-blur-sm border border-transparent rounded-2xl p-6 transition-all duration-500 ease-out group hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(127,0,255,0.15)] hover:border-accent-primary/30"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center justify-center mb-8">
                    <Image
                      src={`/builtit-template${advantage.iconPath}`}
                      alt={advantage.title}
                      width={112}
                      height={112}
                      className="w-28 h-28 object-contain group-hover:animate-[float_2s_ease-in-out_infinite] transition-all duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="font-heading text-lg font-semibold text-text-primary mb-3 leading-tight group-hover:text-accent-primary/90 transition-colors duration-300">
                      {advantage.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed group-hover:text-text-primary/80 transition-colors duration-300">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BuiltItAdvantage
