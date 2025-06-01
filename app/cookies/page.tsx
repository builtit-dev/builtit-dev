'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ObfuscatedEmail from '@/components/ObfuscatedEmail'

const CookiePolicy = () => {
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
              <span className="text-text-primary">Cookie </span>
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">Last Updated: <span className="text-accent-primary">June 2, 2025</span></h2>

              <p className="mb-6 text-text-secondary">
                This Cookie Policy explains how BuiltIt uses cookies on BuiltIt.dev.
              </p>

              <hr className="border-accent-primary/20 my-8" />

              <h3 className="text-xl font-semibold mb-3 text-text-primary">1 | Cookies &amp; Similar Tech</h3>
              <p className="mb-6 text-text-secondary">Cookies are small text files placed on your device to store data that can be recalled by a web server.</p>

              <h3 className="text-xl font-semibold mb-3 text-text-primary">2 | Types We Use</h3>
              <ul className="list-disc pl-6 mb-6 text-text-secondary space-y-1">
                <li><strong>Strictly Necessary</strong> – essential for site operation and security.</li>
                <li><strong>Analytics</strong> – Google Analytics 4 and Microsoft Clarity help us understand site usage. Clarity may record anonymized session replays. Analytics cookies load only after you click <strong>“Accept Cookies.”</strong></li>
                <li><strong>Functionality</strong> – remembers your cookie choice.</li>
              </ul>
              <p className="mb-6 text-text-secondary">We do <strong>not</strong> currently use advertising cookies.</p>

              <h3 className="text-xl font-semibold mb-3 text-text-primary">3 | Cookie Inventory</h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full text-sm border border-accent-primary/30">
                  <thead>
                    <tr className="bg-bg-card/60">
                      <th className="px-3 py-2 border-b border-accent-primary/20">Cookie</th>
                      <th className="px-3 py-2 border-b border-accent-primary/20">Provider</th>
                      <th className="px-3 py-2 border-b border-accent-primary/20">Type</th>
                      <th className="px-3 py-2 border-b border-accent-primary/20">Purpose</th>
                      <th className="px-3 py-2 border-b border-accent-primary/20">Expiry</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-3 py-2">_ga</td>
                      <td className="px-3 py-2">Google Analytics</td>
                      <td className="px-3 py-2">Analytics</td>
                      <td className="px-3 py-2">Distinguishes users</td>
                      <td className="px-3 py-2">2 years</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">_gid</td>
                      <td className="px-3 py-2">Google Analytics</td>
                      <td className="px-3 py-2">Analytics</td>
                      <td className="px-3 py-2">Tracks user behavior per session</td>
                      <td className="px-3 py-2">24 h</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">CLID</td>
                      <td className="px-3 py-2">Microsoft Clarity</td>
                      <td className="px-3 py-2">Analytics</td>
                      <td className="px-3 py-2">Identifies first-time visit</td>
                      <td className="px-3 py-2">1 year</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">cookie_consent_status</td>
                      <td className="px-3 py-2">BuiltIt.dev</td>
                      <td className="px-3 py-2">Functionality</td>
                      <td className="px-3 py-2">Stores consent choice</td>
                      <td className="px-3 py-2">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-text-primary">4 | Your Choices</h3>
              <p className="mb-6 text-text-secondary">A banner asks you to <strong>“Accept Cookies.”</strong> If you decline or ignore the banner, only strictly necessary cookies load. To change your choice later, clear cookies in your browser and revisit the site. Most browsers also let you block cookies entirely (may degrade site experience).</p>

              <h3 className="text-xl font-semibold mb-3 text-text-primary">5 | Policy Changes</h3>
              <p className="mb-6 text-text-secondary">We may update this Cookie Policy; a new “Last Updated” date will appear at the top.</p>

              <h3 className="text-xl font-semibold mb-3 text-text-primary">6 | Contact</h3>
              <p className="mb-6 text-text-secondary">Email <ObfuscatedEmail user="privacy" domain="builtit.dev" policyPage={true} /> with cookie questions.</p>

            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default CookiePolicy
