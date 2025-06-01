'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface FormData {
  name: string
  email: string
  company: string
  budget: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  budget?: string
  message?: string
}

const ContactPageContent = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Component initialization
  useEffect(() => {
    // Any initialization code can go here
  }, [])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.budget) {
      newErrors.budget = 'Budget range is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Project description is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    try {
      const formSubmitData = {
        name: formData.name,
        email: formData.email,
        company: formData.company || 'Not provided',
        budget: formData.budget,
        message: formData.message,
        source: 'contact-page',
        timestamp: new Date().toISOString()
      };

      console.log('Sending form data to worker:', formSubmitData);
      
      const response = await fetch('https://builtit-contact-form.lyori6ux.workers.dev/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formSubmitData)
      });
      
      let result;
      try {
        result = await response.json();
      } catch (jsonError) {
        const errorText = await response.text();
        console.error('Failed to parse JSON response. Response text:', errorText);
        throw new Error(`Form submission failed: ${response.status} - Server sent non-JSON response: ${errorText.substring(0,100)}`);
      }

      console.log('Received response from worker/AppsScript:', result);

      if (!response.ok || result.status !== 'success') {
        throw new Error(result.message || `Form submission failed with status: ${response.status}`);
      }

      setIsSubmitted(true)
      setFormData({ name: '', email: '', company: '', budget: '', message: '' })
      
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error sending your message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="relative min-h-screen bg-bg-primary overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-16 lg:pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12 md:mb-16"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 sm:mb-6 leading-tight"
            style={{ lineHeight: '1.15' }}
          >
            Let's Build Something
            <span className="block bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent mt-1 sm:mt-2 pb-1 sm:pb-2" style={{ lineHeight: '1.15' }}>
              Amazing Together
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Choose how you'd like to get in touch with us
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Column - Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-bg-card/40 backdrop-blur-xl border border-accent-primary/20 rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgba(127,0,255,0.12)]"
          >
            <div className="text-center mb-6">
              <h2 className="font-heading text-2xl font-bold mb-2">
                <span className="text-text-primary">Send us a </span>
                <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                  Message
                </span>
              </h2>
              <p className="text-text-secondary text-sm">
                Fill out the form and we'll get back to you within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Message Sent!</h3>
                <p className="text-text-secondary mb-6">We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-accent-primary hover:text-accent-secondary transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 flex flex-col h-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-bg-secondary border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all ${
                        errors.name ? 'border-red-500' : 'border-border-subtle focus:border-accent-primary'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-bg-secondary border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all ${
                        errors.email ? 'border-red-500' : 'border-border-subtle focus:border-accent-primary'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-bg-secondary border border-border-subtle rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary transition-all"
                    placeholder="Your company (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-text-primary mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-bg-secondary border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all ${
                      errors.budget ? 'border-red-500' : 'border-border-subtle focus:border-accent-primary'
                    }`}
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-15k">$5k - $15k</option>
                    <option value="15k-30k">$15k - $30k</option>
                    <option value="30k-50k">$30k - $50k</option>
                    <option value="50k+">$50k+</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                  {errors.budget && (
                    <p className="mt-1 text-sm text-red-400">{errors.budget}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 bg-bg-secondary border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all resize-none ${
                      errors.message ? 'border-red-500' : 'border-border-subtle focus:border-accent-primary'
                    }`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>

                <div className="space-y-4 mt-auto">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full px-8 sm:px-12 py-4 sm:py-6 rounded-2xl font-semibold text-lg sm:text-xl overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: 'rgba(127, 0, 255, 0.08)',
                      color: 'white',
                      border: '2px solid rgba(127, 0, 255, 0.3)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 4px 20px rgba(127, 0, 255, 0.15)'
                    }}
                    whileHover={{ 
                      y: -2,
                      borderColor: 'rgba(127, 0, 255, 0.6)',
                      boxShadow: '0 8px 30px rgba(127, 0, 255, 0.25)',
                      background: 'rgba(127, 0, 255, 0.12)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-4 h-4 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Send'
                      )}
                    </span>
                    
                    {/* Subtle gradient overlay on hover */}
                    <motion.div 
                      className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(127, 0, 255, 0.1) 0%, rgba(159, 31, 255, 0.08) 100%)'
                      }}
                    />
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Right Column - Contact Information (Desktop) */}
          <motion.div 
            variants={itemVariants}
            className="hidden lg:flex bg-bg-card/40 backdrop-blur-xl border border-accent-primary/20 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(127,0,255,0.12)] flex-col h-full"
          >
            <div className="text-center p-6 md:p-8 pb-6">
              <h2 className="font-heading text-2xl font-bold mb-2">
                <span className="text-white">Contact</span> <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Information</span>
              </h2>
              <p className="text-text-secondary text-sm">
                We're here to help with your project needs.
              </p>
            </div>

            <div className="p-8 flex-grow flex flex-col space-y-8">
              {/* Email Contact */}
              <div className="flex items-start space-x-4">
                <div className="bg-accent-primary/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-1">Email Us</h4>
                  <p className="text-text-secondary text-sm mb-2">For project inquiries and questions</p>
                  <a href="mailto:contact@example.com" className="text-accent-primary hover:text-accent-secondary transition-colors">
                    contact@example.com
                  </a>
                </div>
              </div>
              
              {/* Response Time */}
              <div className="flex items-start space-x-4">
                <div className="bg-accent-primary/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-1">Response Time</h4>
                  <p className="text-text-secondary text-sm mb-2">We typically respond within</p>
                  <p className="text-text-primary">1-2 business days</p>
                </div>
              </div>
              
              {/* Office Hours */}
              <div className="flex items-start space-x-4">
                <div className="bg-accent-primary/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-1">Office Hours</h4>
                  <p className="text-text-secondary text-sm mb-2">When we're available</p>
                  <p className="text-text-primary">Monday - Friday: 9am - 5pm PST</p>
                </div>
              </div>
              
              {/* FAQ Link */}
              <div className="flex items-start space-x-4">
                <div className="bg-accent-primary/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-1">Common Questions</h4>
                  <p className="text-text-secondary text-sm mb-2">Find answers to frequently asked questions</p>
                  <a href="#" className="text-accent-primary hover:text-accent-secondary transition-colors flex items-center">
                    <span>View FAQ</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactPageContent
