import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import PortfolioNavButtons from '@/components/PortfolioNavButtons'

// Hardcoded basePath for GitHub Pages deployment
const basePath = process.env.NODE_ENV === 'development' ? '' : '/builtit-template'

export default function DebtCatCaseStudy() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary-dark)]">
      {/* Navigation */}
      <nav className="border-b border-[var(--border-subtle)] bg-[var(--bg-secondary-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href={`${basePath}/#recent-launches`} className="flex items-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
            DebtCat: Building a No-BS First Aid Kit for People Drowning in Debt
          </h1>
          <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto">
            How a former debt collection insider built an AI-powered platform to democratize debt knowledge and empower consumers with actionable tools to fight unfair collection practices.
          </p>
          <div className="mb-6 px-2">
            <div className="inline-block px-3 py-1.5 text-sm font-medium text-white" style={{
              background: 'rgba(20, 20, 20, 0.7)',
              boxShadow: '0 0 10px rgba(127, 0, 255, 0.6)',
              borderRadius: '4px'
            }}>
              <span className="inline-block w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#7F00FF'}}></span>
              Fintech & Consumer Rights
            </div>
          </div>
          <div className="relative w-full max-w-4xl mx-auto mb-8">
            <Image
              src="/builtit-template/images/debtcat_1.png"
              alt="DebtCat landing page showing the main homepage"
              width={1200}
              height={600}
              className="w-full h-auto rounded-2xl shadow-2xl border border-[var(--border-subtle)]"
              priority
              unoptimized
            />
            <p className="text-sm text-[var(--text-muted)] mt-3 italic">
              DebtCat's homepage emphasizing empowerment over intimidation
            </p>
          </div>
        </header>

        {/* Problem Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">The Market Reality: Debt Collection is Fundamentally Unfair</h2>
          
          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              The debt collection system is designed to exploit consumer confusion and shame. With insider knowledge from working in collections, 
              we identified a massive opportunity to level the playing field.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-[var(--bg-secondary-dark)] p-6 rounded-lg border border-[var(--border-subtle)]">
              <div className="text-3xl font-bold text-[var(--accent-purple)] mb-2">70M+</div>
              <div className="text-[var(--text-secondary)]">Americans with debts in collections</div>
            </div>
            <div className="bg-[var(--bg-secondary-dark)] p-6 rounded-lg border border-[var(--border-subtle)]">
              <div className="text-3xl font-bold text-[var(--accent-purple)] mb-2">44%</div>
              <div className="text-[var(--text-secondary)]">Feel scared, confused, or helpless when contacted</div>
            </div>
            <div className="bg-[var(--bg-secondary-dark)] p-6 rounded-lg border border-[var(--border-subtle)]">
              <div className="text-3xl font-bold text-[var(--accent-purple)] mb-2">5%</div>
              <div className="text-[var(--text-secondary)]">Actually dispute debts (despite 59% containing errors)</div>
            </div>
            <div className="bg-[var(--bg-secondary-dark)] p-6 rounded-lg border border-[var(--border-subtle)]">
              <div className="text-3xl font-bold text-[var(--accent-purple)] mb-2">45+</div>
              <div className="text-[var(--text-secondary)]">Hours spent trying to resolve debt issues</div>
            </div>
          </div>
        </section>

        {/* Strategic Approach */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">Strategic Product Vision: Democratizing Insider Knowledge</h2>
          
          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Unlike typical fintech debt products, DebtCat deliberately avoids subscriptions, data collection, and generic advice. 
              Instead, we built a "first aid kit" around three core pillars that founders can apply to any consumer empowerment product.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-[var(--bg-secondary-dark)] p-6 rounded-lg border border-[var(--border-subtle)]">
              <div className="flex items-start space-x-4">
                <div className="bg-[var(--accent-purple)] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Education-First Approach</h3>
                  <p className="text-[var(--text-secondary)]">Clear, jargon-free guides about consumer rights that build trust before asking for any commitment.</p>
                </div>
              </div>
            </div>
            <div className="bg-[var(--bg-secondary-dark)] p-6 rounded-lg border border-[var(--border-subtle)]">
              <div className="flex items-start space-x-4">
                <div className="bg-[var(--accent-purple)] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">AI-Powered Conversation</h3>
                  <p className="text-[var(--text-secondary)]">Intelligent chatbot that provides specific, actionable answers without requiring personal information.</p>
                </div>
              </div>
            </div>
            <div className="bg-[var(--bg-secondary-dark)] p-6 rounded-lg border border-[var(--border-subtle)]">
              <div className="flex items-start space-x-4">
                <div className="bg-[var(--accent-purple)] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Actionable Tools</h3>
                  <p className="text-[var(--text-secondary)]">Dispute letter generator that creates legally-sound communications without requiring legal expertise.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Screenshots */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">User Experience: Trust Through Transparency</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <Image
                src={`${basePath}/images/icons/dispute_options.png`}
                alt="DebtCat dispute options interface"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full"
              />
              <p className="text-sm text-[var(--text-muted)] mt-3 italic">
                Dispute options page - clear choices without overwhelming users
              </p>
            </div>
            <div>
              <Image
                src={`${basePath}/images/icons/debtcat_chat.png`}
                alt="DebtCat AI chat interface"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full"
              />
              <p className="text-sm text-[var(--text-muted)] mt-3 italic">
                AI chatbot providing specific guidance without data collection
              </p>
            </div>
          </div>

          <div className="mb-8">
            <Image
              src={`${basePath}/images/icons/debtcat_guides.png`}
              alt="DebtCat consumer guides"
              width={800}
              height={400}
              className="rounded-lg shadow-lg w-full"
            />
            <p className="text-sm text-[var(--text-muted)] mt-3 italic">
              Comprehensive consumer guides building credibility through education
            </p>
          </div>
        </section>

        {/* Technical Evolution */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">Technical Evolution: From WordPress to Firebase</h2>
          
          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              DebtCat's journey through three tech stacks illustrates how early-stage products need technical flexibility to match evolving product requirements and resource constraints.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-[var(--bg-secondary-dark)] p-6 rounded-lg border border-[var(--border-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Phase 1: WordPress + Elementor</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-[var(--accent-green)] mb-2">Strengths</h4>
                  <ul className="text-[var(--text-secondary)] space-y-1">
                    <li>• Fastest time to market</li>
                    <li>• Familiar CMS workflow</li>
                    <li>• Content management built-in</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-[var(--accent-red)] mb-2">Limitations</h4>
                  <ul className="text-[var(--text-secondary)] space-y-1">
                    <li>• Design constraints</li>
                    <li>• Performance issues</li>
                    <li>• Limited customization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[var(--bg-secondary-dark)] p-6 rounded-lg border border-[var(--border-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Phase 2: Webflow</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-[var(--accent-green)] mb-2">Strengths</h4>
                  <ul className="text-[var(--text-secondary)] space-y-1">
                    <li>• Superior design control</li>
                    <li>• Visual editing interface</li>
                    <li>• Professional aesthetics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-[var(--accent-red)] mb-2">Limitations</h4>
                  <ul className="text-[var(--text-secondary)] space-y-1">
                    <li>• High costs at scale</li>
                    <li>• Limited technical extensibility</li>
                    <li>• Resource allocation concerns</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[var(--bg-secondary-dark)] p-6 rounded-lg border border-[var(--border-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Phase 3: Firebase (Current)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-[var(--accent-green)] mb-2">Strengths</h4>
                  <ul className="text-[var(--text-secondary)] space-y-1">
                    <li>• Highly scalable</li>
                    <li>• Cost-effective</li>
                    <li>• Full developer control</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-[var(--accent-red)] mb-2">Tradeoffs</h4>
                  <ul className="text-[var(--text-secondary)] space-y-1">
                    <li>• Lost CMS functionality</li>
                    <li>• Required component rebuilding</li>
                    <li>• Technical debt accumulation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Development */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">AI-Powered Development: Solo Founder Advantage</h2>
          
          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              DebtCat demonstrates how AI tools enable non-technical founders to build sophisticated products without traditional development teams. 
              This represents a fundamental shift in the founder-to-market equation.
            </p>
          </div>

          <div className="bg-[var(--bg-secondary-dark)] p-6 rounded-lg border border-[var(--border-subtle)] mb-8">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">AI Development Workflow</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--accent-purple)] rounded-full"></div>
                <span className="text-[var(--text-secondary)]"><strong>Planning:</strong> Define features using traditional PM methods</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--accent-purple)] rounded-full"></div>
                <span className="text-[var(--text-secondary)]"><strong>Component Design:</strong> Generate baseline HTML/CSS with AI</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--accent-purple)] rounded-full"></div>
                <span className="text-[var(--text-secondary)]"><strong>Integration:</strong> Connect components and add functionality</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--accent-purple)] rounded-full"></div>
                <span className="text-[var(--text-secondary)]"><strong>Debugging:</strong> Identify and fix implementation issues</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[var(--accent-purple)]/10 to-[var(--accent-blue)]/10 p-6 rounded-lg border border-[var(--accent-purple)]/20">
            <p className="text-[var(--text-secondary)] italic">
              "AI didn't replace product thinking, but it removed the technical barrier to implementation. 
              I could focus on 'what should we build?' rather than getting stuck on 'how do I write this code?'"
            </p>
          </div>
        </section>

        {/* Key Challenges */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">Founder Challenges: Credibility, Distribution & Technical Debt</h2>
          
          <div className="space-y-8">
            <div className="bg-[var(--bg-secondary-dark)] p-6 rounded-lg border border-[var(--border-subtle)]">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 text-[var(--accent-purple)] mt-1 flex items-center justify-center">🛡️</div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">Building Trust in a Predatory Market</h3>
                  <p className="text-[var(--text-secondary)] mb-3">
                    The debt relief space is notorious for scams. Establishing credibility required refusing payment upfront, 
                    transparent pricing, and education-first approach.
                  </p>
                  <p className="text-sm text-[var(--text-muted)] italic">
                    Lesson: In sensitive markets, trust-building must precede monetization.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--bg-secondary-dark)] p-6 rounded-lg border border-[var(--border-subtle)]">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 text-[var(--accent-purple)] mt-1 flex items-center justify-center">📈</div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">Distribution Roadblocks</h3>
                  <p className="text-[var(--text-secondary)] mb-3">
                    Email providers and Google flagged debt-related content as potentially predatory, forcing reliance on 
                    social channels and community engagement over traditional growth tactics.
                  </p>
                  <p className="text-sm text-[var(--text-muted)] italic">
                    Lesson: Regulated industries require alternative distribution strategies from day one.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--bg-secondary-dark)] p-6 rounded-lg border border-[var(--border-subtle)]">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 text-[var(--accent-purple)] mt-1 flex items-center justify-center">⚡</div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">Technical Debt vs. Speed</h3>
                  <p className="text-[var(--text-secondary)] mb-3">
                    Platform migrations broke styling and CMS functionality, requiring weekend rebuilds. 
                    The tradeoff between technical perfection and market speed became a constant balancing act.
                  </p>
                  <p className="text-sm text-[var(--text-muted)] italic">
                    Lesson: Early-stage products must prioritize learning over technical elegance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Future */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">Results & Strategic Roadmap</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--bg-secondary-dark)] p-6 rounded-lg border border-[var(--border-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Current Achievements</h3>
              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[var(--accent-green)] rounded-full"></div>
                  <span>Free dispute letter generation without signup</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[var(--accent-green)] rounded-full"></div>
                  <span>AI chatbot providing specific debt guidance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[var(--accent-green)] rounded-full"></div>
                  <span>Comprehensive consumer education library</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[var(--accent-green)] rounded-full"></div>
                  <span>Zero-friction user experience</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[var(--bg-secondary-dark)] p-6 rounded-lg border border-[var(--border-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Strategic Roadmap</h3>
              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[var(--accent-purple)] rounded-full"></div>
                  <span>Negotiation tools for direct collector communication</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[var(--accent-purple)] rounded-full"></div>
                  <span>Credit report integration for comprehensive debt view</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[var(--accent-purple)] rounded-full"></div>
                  <span>Expanded situation-specific content</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[var(--accent-purple)] rounded-full"></div>
                  <span>Ethical partnerships with reputable services</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">Strategic Insights for Founders</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[var(--bg-secondary-dark)] p-6 rounded-lg border border-[var(--border-subtle)]">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">1. Insider Knowledge Creates Moats</h3>
              <p className="text-[var(--text-secondary)]">
                Domain expertise reveals opportunities invisible to outsiders. Your unique background is often your biggest competitive advantage.
              </p>
            </div>
            
            <div className="bg-[var(--bg-secondary-dark)] p-6 rounded-lg border border-[var(--border-subtle)]">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">2. Tech Stack Should Follow Product Needs</h3>
              <p className="text-[var(--text-secondary)]">
                Be ready to change technical direction when product requirements evolve, even if it means short-term inconvenience.
              </p>
            </div>
            
            <div className="bg-[var(--bg-secondary-dark)] p-6 rounded-lg border border-[var(--border-subtle)]">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">3. AI Democratizes Technical Implementation</h3>
              <p className="text-[var(--text-secondary)]">
                Non-technical founders can now build sophisticated products, but only when the product vision is crystal clear.
              </p>
            </div>
            
            <div className="bg-[var(--bg-secondary-dark)] p-6 rounded-lg border border-[var(--border-subtle)]">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">4. Trust Precedes Monetization</h3>
              <p className="text-[var(--text-secondary)]">
                In sensitive domains, establishing credibility is worth sacrificing short-term revenue opportunities.
              </p>
            </div>
            
            <div className="bg-[var(--bg-secondary-dark)] p-6 rounded-lg border border-[var(--border-subtle)]">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">5. Distribution Challenges Vary by Industry</h3>
              <p className="text-[var(--text-secondary)]">
                Regulated industries require alternative growth strategies. Plan distribution roadblocks into your go-to-market strategy.
              </p>
            </div>
            
            <div className="bg-[var(--bg-secondary-dark)] p-6 rounded-lg border border-[var(--border-subtle)]">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">6. Education-First Builds Sustainable Moats</h3>
              <p className="text-[var(--text-secondary)]">
                Teaching users creates deeper engagement and trust than transactional interactions, especially in complex domains.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 px-8 rounded-2xl border border-[var(--border-subtle)]" 
                 style={{ 
                   background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(90, 69, 255, 0.05) 100%)'
                 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
            Ready to Build Your Strategic MVP?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto">
            Let's discuss how strategic product thinking combined with rapid development can bring your vision to life in 14 days.
          </p>
          <Link
            href={`${basePath}/contact`}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
              boxShadow: '0 8px 32px rgba(90, 69, 255, 0.3)'
            }}
          >
            <span className="relative z-10">Start Your Project</span>
            <svg className="ml-2 w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            
            {/* Shine effect */}
            <div 
              className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full"
            />
          </Link>
        </section>
      </main>
      
      <Footer />
      
      {/* Navigation Buttons */}
      <PortfolioNavButtons />
    </div>
  )
}
