'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface CaseStudy {
  id: number
  title: string
  description: string
  category: string
  tech: string[]
  metrics: {
    label: string
    value: string
  }[]
  image: string
  link: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "FindMe.pet",
    description: "AI-powered pet recovery platform that connects lost pets with their families using computer vision and geolocation.",
    category: "AI & Computer Vision",
    tech: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "Stripe"],
    metrics: [
      { label: "Development Time", value: "12 days" },
      { label: "Funding Secured", value: "$250K" },
      { label: "User Growth", value: "2,000+ users" }
    ],
    image: "/api/placeholder/600/400",
    link: "#case-study-1"
  },
  {
    id: 2,
    title: "DebtCat",
    description: "Smart debt management SaaS helping users optimize payment strategies and achieve financial freedom faster.",
    category: "FinTech SaaS",
    tech: ["React", "Node.js", "Plaid API", "MongoDB", "AWS"],
    metrics: [
      { label: "Development Time", value: "14 days" },
      { label: "Monthly Revenue", value: "$15K MRR" },
      { label: "Customer Growth", value: "500+ users" }
    ],
    image: "/api/placeholder/600/400",
    link: "#case-study-2"
  },
  {
    id: 3,
    title: "TechFounders",
    description: "B2B marketplace connecting technical co-founders with non-technical entrepreneurs for startup ventures.",
    category: "Marketplace Platform",
    tech: ["Vue.js", "Django", "Redis", "PostgreSQL", "Docker"],
    metrics: [
      { label: "Development Time", value: "13 days" },
      { label: "Matches Made", value: "150+ pairs" },
      { label: "Success Rate", value: "78%" }
    ],
    image: "/api/placeholder/600/400",
    link: "#case-study-3"
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export default function PortfolioSection() {
  return null;
}
