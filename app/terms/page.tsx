'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ObfuscatedEmail from '@/components/ObfuscatedEmail'

const TermsOfService = () => {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-bg-primary overflow-hidden pt-24 pb-16">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-bg-card/40 backdrop-blur-xl border border-accent-primary/20 rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgba(127,0,255,0.12)]"
          >
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-center">
              <span className="text-text-primary">Terms of </span>
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">Last Updated: <span className="text-accent-primary">June 1, 2025</span></h2>
              
              <p className="mb-6 text-text-secondary">
                Welcome to BuiltIt.dev (the "Website"), operated by Lyor Itzhaki ("BuiltIt," "we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of the Website and any services, content, features, or applications we provide (collectively, the "Services").
              </p>
              
              <p className="mb-8 text-text-secondary">
                By accessing or using any part of the Services, you agree to be bound by these Terms. If you do not agree, do not use the Website or Services.
              </p>
              
              <hr className="border-accent-primary/20 my-8" />
              
              <h3 className="text-xl font-semibold mb-3 text-text-primary">
                <span className="text-accent-primary">1</span> | Eligibility & Authority
              </h3>
              <p className="mb-6 text-text-secondary">
                You confirm you are at least 18 years old and legally able to enter contracts. If you use the Services on behalf of an organization, you represent you have authority to bind that organization and that "you" refers to it.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-text-primary">
                <span className="text-accent-primary">2</span> | Description of Services
              </h3>
              <p className="mb-4 text-text-secondary">
                BuiltIt develops Minimum Viable Products (MVPs), AI-ready web apps, and tailored AI solutions. Scope, deliverables, fees, and refund terms for any project will appear in a separate written agreement (e.g., Statement of Work). Website descriptions (timeframes, "starts-at" pricing, etc.) are informational only.
              </p>
              <p className="mb-6 text-text-secondary font-semibold">
                <strong>AI-Generated Output Disclaimer</strong> – Any AI-generated code or content is provided "as-is." You are solely responsible for testing and validating it before use.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-text-primary">
                <span className="text-accent-primary">3</span> | Acceptable Use
              </h3>
              <p className="mb-3 text-text-secondary">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-secondary space-y-1">
                <li>violate any law or third-party right;</li>
                <li>upload malware or interfere with security or performance;</li>
                <li>scrape, reverse-engineer, or frame the Website;</li>
                <li>impersonate any person or entity; or</li>
                <li>send spam or other unsolicited messages.</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 text-text-primary">
                <span className="text-accent-primary">4</span> | Intellectual Property
              </h3>
              <p className="mb-6 text-text-secondary">
                The Website and its content are owned by BuiltIt or its licensors and are protected by intellectual-property laws. We grant you a limited, non-transferable license to access the Website for personal or internal-business evaluation of our Services. No other rights are granted. Client-project IP ownership is governed by the applicable Service Agreement.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-text-primary">
                <span className="text-accent-primary">5</span> | User Contributions
              </h3>
              <p className="mb-6 text-text-secondary">
                If the Website allows you to post or submit material ("User Contributions"), you grant BuiltIt a worldwide, royalty-free license to use, reproduce, and display those contributions to operate and promote the Services. You are solely responsible for your contributions.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-text-primary">
                <span className="text-accent-primary">6</span> | Reliance on Information
              </h3>
              <p className="mb-6 text-text-secondary">
                Website content is provided for general information only. We make no warranties regarding its accuracy or completeness, and you rely on it at your own risk.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-text-primary">
                <span className="text-accent-primary">7</span> | Links to Third-Party Sites
              </h3>
              <p className="mb-6 text-text-secondary">
                Links are provided for convenience; we are not responsible for third-party content or services.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-text-primary">
                <span className="text-accent-primary">8</span> | Disclaimers
              </h3>
              <p className="mb-6 text-text-secondary uppercase font-semibold">
                THE WEBSITE AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTY OF ANY KIND. BUILTIT DISCLAIMS ALL IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE THE WEBSITE WILL BE SECURE, ERROR-FREE, OR UNINTERRUPTED.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-text-primary">
                <span className="text-accent-primary">9</span> | Limitation of Liability
              </h3>
              <p className="mb-6 text-text-secondary uppercase font-semibold">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, BUILTIT WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, EVEN IF ADVISED OF THE POSSIBILITY. OUR AGGREGATE LIABILITY ARISING FROM THE WEBSITE OR SERVICES WILL NOT EXCEED ONE HUNDRED U.S. DOLLARS (US $100) OR THE AMOUNT PAID UNDER THE RELEVANT SERVICE AGREEMENT, WHICHEVER IS GREATER.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-text-primary">
                <span className="text-accent-primary">10</span> | Indemnification
              </h3>
              <p className="mb-6 text-text-secondary">
                You agree to indemnify and hold harmless BuiltIt and its officers, directors, employees, and agents from any claim or demand arising out of your use of the Website or Services or your breach of these Terms.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-text-primary">
                <span className="text-accent-primary">11</span> | Governing Law & Dispute Resolution
              </h3>
              <ul className="list-disc pl-6 mb-6 text-text-secondary space-y-2">
                <li><strong>Governing Law</strong> – California law (without regard to conflict-of-law rules).</li>
                <li><strong>Binding Arbitration</strong> – Any dispute will be resolved by binding arbitration under the AAA Commercial Arbitration Rules.</li>
                <li><strong>Small-Claims & IP Relief</strong> – Either party may (i) bring an individual action in small-claims court or (ii) seek injunctive relief in court for IP infringement.</li>
                <li><strong>Class-Action Waiver</strong> – Disputes must be brought individually; class actions are waived.</li>
                <li><strong>Opt-Out</strong> – You may opt out of arbitration by emailing <ObfuscatedEmail user="contact" domain="example.com" policyPage={true} /> within 30 days of first acceptance of these Terms.</li>
                <li><strong>Venue</strong> – If a dispute is not arbitrated, exclusive venue lies in the state or federal courts of San Mateo County, California.</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 text-text-primary">
                <span className="text-accent-primary">12</span> | Service & Terms Modifications
              </h3>
              <p className="mb-6 text-text-secondary">
                We may modify or discontinue the Website or Services at any time. We may also update these Terms; changes are effective when posted. Continued use constitutes acceptance.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-text-primary">
                <span className="text-accent-primary">13</span> | Force Majeure
              </h3>
              <p className="mb-6 text-text-secondary">
                BuiltIt is not liable for failures caused by events outside its reasonable control (e.g., natural disasters, war, labor disputes, internet outages).
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-text-primary">
                <span className="text-accent-primary">14</span> | Accessibility
              </h3>
              <p className="mb-6 text-text-secondary">
                We aim to conform to WCAG 2.1 AA. Email <ObfuscatedEmail user="contact" domain="example.com" policyPage={true} /> if you encounter accessibility barriers.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-text-primary">
                <span className="text-accent-primary">15</span> | Waiver & Severability
              </h3>
              <p className="mb-6 text-text-secondary">
                Failure to enforce any term is not a waiver. If any provision is held invalid, the remaining provisions remain in effect.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-text-primary">
                <span className="text-accent-primary">16</span> | Entire Agreement
              </h3>
              <p className="mb-6 text-text-secondary">
                These Terms and our Privacy Policy are the entire agreement regarding Website use. For clients, the Service Agreement governs project work and prevails over any conflict.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-text-primary">
                <span className="text-accent-primary">17</span> | Contact
              </h3>
              <p className="mb-6 text-text-secondary">
                Questions? Email <ObfuscatedEmail user="contact" domain="example.com" policyPage={true} /> or <ObfuscatedEmail user="contact" domain="example.com" policyPage={true} />.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default TermsOfService
