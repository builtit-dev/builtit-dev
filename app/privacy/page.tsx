'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ObfuscatedEmail from '@/components/ObfuscatedEmail'

const PrivacyPolicy = () => {
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
              <span className="text-text-primary">Privacy </span>
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">Last Updated: <span className="text-accent-primary">June 2, 2025</span></h2>

              <p className="mb-6 text-text-secondary">
                Lyor Itzhaki ("BuiltIt," "we," "us," or "our") operates BuiltIt.dev. This Privacy Policy explains how we collect, use, and disclose personal information ("Personal Data") and the choices you have.
              </p>

              <p className="mb-6 text-text-secondary font-semibold">
                <strong>BuiltIt does not sell or share Personal Data for cross-context behavioral advertising.</strong>
              </p>

              <hr className="border-accent-primary/20 my-8" />

              <h3 className="text-xl font-semibold mb-3 text-text-primary">1 | Notice at Collection (California CCPA/CPRA)</h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full text-sm border border-accent-primary/30">
                  <thead>
                    <tr className="bg-bg-card/60">
                      <th className="px-3 py-2 border-b border-accent-primary/20">Category (CPRA)</th>
                      <th className="px-3 py-2 border-b border-accent-primary/20">Purpose of Use</th>
                      <th className="px-3 py-2 border-b border-accent-primary/20">Typical Retention</th>
                      <th className="px-3 py-2 border-b border-accent-primary/20">Sold or Shared?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-3 py-2">Identifiers (name, email, IP, cookie IDs)</td>
                      <td className="px-3 py-2">Respond to inquiries, provide Services, analytics, security</td>
                      <td className="px-3 py-2">Customer-life + up to 24 months; cookies per Cookie Policy</td>
                      <td className="px-3 py-2 font-semibold">No sale. Limited sharing with analytics providers.</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">Customer Records (name, company, contact info)</td>
                      <td className="px-3 py-2">Client onboarding, billing, support</td>
                      <td className="px-3 py-2">Relationship + 7 years (legal)</td>
                      <td className="px-3 py-2">No</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">Internet Activity (page views, clicks, Clarity session data)</td>
                      <td className="px-3 py-2">Analytics, UX improvement, security</td>
                      <td className="px-3 py-2">Up to 26 months (aggregated)</td>
                      <td className="px-3 py-2">Shared with analytics providers</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">Geolocation (coarse)</td>
                      <td className="px-3 py-2">Analytics, language/local UX</td>
                      <td className="px-3 py-2">Same as Internet Activity</td>
                      <td className="px-3 py-2">Shared with analytics providers</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">Professional Info (company, role)</td>
                      <td className="px-3 py-2">Context for Services</td>
                      <td className="px-3 py-2">Relationship duration</td>
                      <td className="px-3 py-2">No</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">Inferences</td>
                      <td className="px-3 py-2">Improve Services & marketing</td>
                      <td className="px-3 py-2">Same as analytics</td>
                      <td className="px-3 py-2">No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mb-6 text-text-secondary">We do <strong>not</strong> intentionally collect Sensitive Personal Information.</p>

              <h3 className="text-xl font-semibold mb-3 text-text-primary">2 | What We Collect & Why</h3>
              <ul className="list-disc pl-6 mb-6 text-text-secondary space-y-1">
                <li><strong>Personal Data you provide</strong> – contact emails, project details, payment info (via Stripe).</li>
                <li><strong>Usage Data</strong> – IP address, device/browser type, pages visited, interactions, collected via Microsoft Clarity and Google Analytics 4. Clarity may record anonymized session replays.</li>
                <li><strong>Cookies</strong> – see Cookie Policy.</li>
              </ul>
              <p className="mb-6 text-text-secondary">We use this data to operate the Website, fulfill contracts, improve Services, secure the site, and (with consent) send marketing communications.</p>

              <h3 className="text-xl font-semibold mb-3 text-text-primary">3 | Legal Bases (EEA/UK)</h3>
              <ul className="list-disc pl-6 mb-6 text-text-secondary space-y-1">
                <li>Contract performance</li>
                <li>Legitimate interests (site security, analytics, basic marketing)</li>
                <li>Consent (cookie analytics, marketing emails)</li>
                <li>Legal obligations</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-text-primary">4 | Data Retention</h3>
              <p className="mb-6 text-text-secondary">We keep data only as long as needed for stated purposes, to comply with law, or to resolve disputes (see table above).</p>

              <h3 className="text-xl font-semibold mb-3 text-text-primary">5 | International Transfers</h3>
              <p className="mb-6 text-text-secondary">BuiltIt.dev is US-based. Transfers from the EEA, UK, or Switzerland rely on <strong>Standard Contractual Clauses</strong> (plus UK and Swiss addenda). Request copies at <ObfuscatedEmail user="contact" domain="example.com" policyPage={true} />.</p>

              <h3 className="text-xl font-semibold mb-3 text-text-primary">6 | Who We Share Data With</h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full text-sm border border-accent-primary/30">
                  <thead>
                    <tr className="bg-bg-card/60">
                      <th className="px-3 py-2 border-b border-accent-primary/20">Purpose</th>
                      <th className="px-3 py-2 border-b border-accent-primary/20">Provider</th>
                      <th className="px-3 py-2 border-b border-accent-primary/20">Privacy Docs</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-3 py-2">Hosting/CDN</td>
                      <td className="px-3 py-2 font-semibold">Vercel</td>
                      <td className="px-3 py-2"><a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline">Privacy</a> • <a href="https://vercel.com/legal/data-processing-addendum" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline">DPA</a></td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">Analytics</td>
                      <td className="px-3 py-2 font-semibold">Microsoft Clarity</td>
                      <td className="px-3 py-2"><a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline">Privacy</a> • <a href="https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline">DPA</a></td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">Email & Docs</td>
                      <td className="px-3 py-2 font-semibold">Google Workspace</td>
                      <td className="px-3 py-2"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline">Privacy</a> • <a href="https://workspace.google.com/terms/dpa_terms.html" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline">DPA</a></td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">Payments</td>
                      <td className="px-3 py-2 font-semibold">Stripe</td>
                      <td className="px-3 py-2"><a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline">Privacy</a> • <a href="https://stripe.com/legal/dpa" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline">DPA</a></td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">Scheduling</td>
                      <td className="px-3 py-2 font-semibold">Calendly</td>
                      <td className="px-3 py-2"><a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline">Privacy</a> • <a href="https://calendly.com/dpa" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline">DPA</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mb-6 text-text-secondary">Processors act only under our instructions and under written DPAs.</p>

              <h3 className="text-xl font-semibold mb-3 text-text-primary">7 | Security</h3>
              <p className="mb-6 text-text-secondary">We use industry-standard safeguards (HTTPS/TLS, access controls, encryption at rest for key services). No system is 100% secure; transmission is at your own risk.</p>

              <h3 className="text-xl font-semibold mb-3 text-text-primary">8 | Your Rights</h3>
              <ul className="list-disc pl-6 mb-6 text-text-secondary space-y-1">
                <li><strong>EEA/UK</strong> – access, rectification, erasure, restriction, portability, objection, lodge complaint.</li>
                <li><strong>California</strong> – right to know, delete, correct, opt-out of sharing, non-discrimination, limit SPI.</li>
                <li><strong>Global Privacy Control</strong> signals are honored as an opt-out of sharing for targeted advertising (we currently do none).</li>
              </ul>
              <p className="mb-6 text-text-secondary">Email <ObfuscatedEmail user="contact" domain="example.com" policyPage={true} /> to exercise rights; we may verify identity before acting.</p>

              <h3 className="text-xl font-semibold mb-3 text-text-primary">9 | Children</h3>
              <p className="mb-6 text-text-secondary">The Services are not directed to anyone under 18. We do not knowingly collect data from minors.</p>

              <h3 className="text-xl font-semibold mb-3 text-text-primary">10 | Third-Party Links</h3>
              <p className="mb-6 text-text-secondary">We are not responsible for external sites linked from the Website.</p>

              <h3 className="text-xl font-semibold mb-3 text-text-primary">11 | Policy Changes</h3>
              <p className="mb-6 text-text-secondary">We may update this Privacy Policy. Changes are effective when posted with a new "Last Updated" date.</p>

              <h3 className="text-xl font-semibold mb-3 text-text-primary">12 | Contact</h3>
              <p className="mb-6 text-text-secondary">Questions? Email <ObfuscatedEmail user="contact" domain="example.com" policyPage={true} />.</p>

            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default PrivacyPolicy
