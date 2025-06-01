import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import PortfolioNavButtons from '@/components/PortfolioNavButtons'

// Use hardcoded basePath for GitHub Pages deployment
const basePath = '/builtit-dev'

export default function FindMePetCaseStudy() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Navigation - Simple back link */}
      <nav className="border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link 
              href={`${basePath}/#recent-launches`} 
              className="flex items-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Case Study Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
            FindMe.pet: AI-Powered Pet Adoption Platform
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 max-w-4xl mx-auto leading-relaxed">
            Strategic MVP development combining AI, product thinking, and rapid execution to solve the pet adoption mismatch problem
          </p>
          <div className="mb-6 px-2">
            <div className="inline-block px-3 py-1.5 text-sm font-medium text-white" style={{
              background: 'rgba(20, 20, 20, 0.7)',
              boxShadow: '0 0 10px rgba(0, 224, 255, 0.6)',
              borderRadius: '4px'
            }}>
              <span className="inline-block w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#00E0FF'}}></span>
              AI & Matching Platform
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="my-12 md:my-16">
          <div className="max-w-5xl mx-auto">
            <Image
              src={`${basePath}/images/icons/shasta_main.png`}
              alt="FindMe.pet landing page featuring Shasta, the inspiration behind the project"
              width={1200}
              height={600}
              className="w-full h-auto rounded-2xl shadow-2xl border border-[var(--border-subtle)]"
              priority
              unoptimized
            />
            <p className="text-center text-[var(--text-muted)] mt-4 italic">
              The FindMe.pet landing page featuring Shasta, Lyor's adopted dog and inspiration for the project
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-20">
          {/* The Problem */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-8">
              The Problem: Pet Adoption is Broken
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Pet adoption faces a fundamental mismatch problem that affects thousands of animals and families every year:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                  <div className="text-3xl font-bold text-[var(--accent-primary)] mb-2">10-20%</div>
                  <p className="text-[var(--text-secondary)]">of adopted pets are returned to shelters due to mismatched expectations</p>
                </div>
                <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                  <div className="text-3xl font-bold text-[var(--accent-primary)] mb-2">80%</div>
                  <p className="text-[var(--text-secondary)]">of adopters choose pets based primarily on looks rather than compatibility</p>
                </div>
                <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                  <div className="text-3xl font-bold text-[var(--accent-primary)] mb-2">34%</div>
                  <p className="text-[var(--text-secondary)]">of pet owners buy from breeders instead of adopting from shelters</p>
                </div>
              </div>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                These aren't just statistics—they represent real animals who briefly experienced the joy of a home before being returned to a shelter cage.
              </p>
            </div>
          </section>

          {/* Strategic Approach */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-8">
              Strategic Product Approach
            </h2>
            <div className="space-y-8">
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                As an experienced PM, the approach was to create an AI "match-maker" for pets and humans, focusing on lifestyle compatibility over appearance. The strategy involved rapid MVP development with strategic constraints to validate the core value proposition.
              </p>
              
              <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Key Strategic Decisions</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--accent-primary)] flex items-center justify-center text-white font-bold text-sm mt-1">1</div>
                    <div>
                      <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Limited Animal Selection</h4>
                      <p className="text-[var(--text-secondary)]">While PetFinder API offers data on everything from dogs to chinchillas, launched with just dogs, cats, and rabbits to focus the experience and reduce complexity.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--accent-primary)] flex items-center justify-center text-white font-bold text-sm mt-1">2</div>
                    <div>
                      <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Streamlined Filtering</h4>
                      <p className="text-[var(--text-secondary)]">Implemented filtering upfront in the API call rather than allowing post-search filtering to simplify the initial user experience.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--accent-primary)] flex items-center justify-center text-white font-bold text-sm mt-1">3</div>
                    <div>
                      <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Visual Priority</h4>
                      <p className="text-[var(--text-secondary)]">Animals without photos are de-prioritized in results, recognizing that visuals drive emotional connection in adoption decisions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--accent-primary)] flex items-center justify-center text-white font-bold text-sm mt-1">4</div>
                    <div>
                      <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Dual User Paths</h4>
                      <p className="text-[var(--text-secondary)]">Included both a "Quick Search" for direct browsing and a guided questionnaire for personalized AI recommendations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Product Screenshots */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-8">
              User Experience & Product Flow
            </h2>
            <div className="space-y-12">
              {/* Results Page */}
              <div className="space-y-6">
                <Image
                  src={`${basePath}/images/icons/results_page-1.png`}
                  alt="AI-powered results page showing pet recommendations with compatibility metrics"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-2xl shadow-2xl border border-[var(--border-subtle)]"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">AI-Powered Recommendations</h3>
                  <p className="text-[var(--text-secondary)]">The results page highlights an AI-recommended pet with compatibility metrics</p>
                </div>
              </div>

              {/* Pet Details Page */}
              <div className="space-y-6">
                <Image
                  src={`${basePath}/images/icons/pet_details.png`}
                  alt="Comprehensive pet details page with adoption information"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-2xl shadow-2xl border border-[var(--border-subtle)]"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Comprehensive Pet Profiles</h3>
                  <p className="text-[var(--text-secondary)]">The pet details page provides comprehensive information to help users make informed decisions</p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Implementation */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-8">
              Technical Architecture & AI Integration
            </h2>
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">Tech Stack</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-[var(--accent-primary)]"></div>
                      <span className="text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Next.js 14</strong> with App Router</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-[var(--accent-primary)]"></div>
                      <span className="text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">OpenAI GPT-4o-mini</strong> for AI recommendations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-[var(--accent-primary)]"></div>
                      <span className="text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">PetFinder API</strong> for real-time pet data</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-[var(--accent-primary)]"></div>
                      <span className="text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">TailwindCSS</strong> for responsive design</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-[var(--accent-primary)]"></div>
                      <span className="text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Vercel</strong> for deployment</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">Key Challenges Solved</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                      <h4 className="font-semibold text-[var(--text-primary)] mb-2">PetFinder Authentication</h4>
                      <p className="text-sm text-[var(--text-secondary)]">Implemented OAuth 2.0 via Cloudflare Worker proxy for secure API access</p>
                    </div>
                    <div className="p-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                      <h4 className="font-semibold text-[var(--text-primary)] mb-2">AI Response Parsing</h4>
                      <p className="text-sm text-[var(--text-secondary)]">Careful prompt engineering to generate structured, parseable recommendations</p>
                    </div>
                    <div className="p-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                      <h4 className="font-semibold text-[var(--text-primary)] mb-2">Performance Optimization</h4>
                      <p className="text-sm text-[var(--text-secondary)]">Implemented caching to reduce API calls and improve user experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AI-Powered Development */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-8">
              AI-Powered Development Process
            </h2>
            <div className="space-y-8">
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                This project showcased the power of AI-assisted development, enabling rapid prototyping and implementation by a product manager without deep technical expertise.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">v0 Prototyping</h3>
                  <p className="text-[var(--text-secondary)]">Used for initial prototyping and generating layouts based on wireframes</p>
                </div>
                <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Cursor & Windsurf</h3>
                  <p className="text-[var(--text-secondary)]">AI-powered IDEs that assisted with coding and refactoring throughout development</p>
                </div>
                <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Claude 3.7</h3>
                  <p className="text-[var(--text-secondary)]">Advanced AI assistance for writing cleaner, more maintainable code</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 border border-[var(--border-subtle)] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Development Insights</h3>
                <div className="space-y-4">
                  <p className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">70% Rule:</strong> Getting to 70% completion was surprisingly easy with AI tools, but the final 20-30% followed the Pareto principle, taking 80% of development time.
                  </p>
                  <p className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Documentation Strategy:</strong> Having AI document its own work prevented context window exhaustion and provided crucial debugging context.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Results & Impact */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-8">
              Results & Future Roadmap
            </h2>
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">Current Achievements</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-3 bg-[var(--accent-primary)]"></div>
                      <p className="text-[var(--text-secondary)]">Functional AI-powered pet matching platform</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-3 bg-[var(--accent-primary)]"></div>
                      <p className="text-[var(--text-secondary)]">Integrated real-time shelter data from PetFinder API</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-3 bg-[var(--accent-primary)]"></div>
                      <p className="text-[var(--text-secondary)]">User-friendly questionnaire and quick search functionality</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-3 bg-[var(--accent-primary)]"></div>
                      <p className="text-[var(--text-secondary)]">Deployed and accessible at findme.pet</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">Planned Enhancements</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-3 bg-[var(--accent-secondary)]"></div>
                      <p className="text-[var(--text-secondary)]">Enhanced user input for detailed lifestyle preferences</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-3 bg-[var(--accent-secondary)]"></div>
                      <p className="text-[var(--text-secondary)]">Multiple recommendation tiers with comparisons</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-3 bg-[var(--accent-secondary)]"></div>
                      <p className="text-[var(--text-secondary)]">Performance metrics and adoption tracking</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-3 bg-[var(--accent-secondary)]"></div>
                      <p className="text-[var(--text-secondary)]">User research and refinement based on feedback</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">North Star Metric</h3>
                <p className="text-lg text-[var(--text-secondary)] mb-4">
                  Successful adoptions—pets who find permanent homes through the platform
                </p>
                <p className="text-[var(--text-muted)]">
                  Short-term tracking: engagement metrics like clicks on 'Adopt' button to measure interest
                </p>
              </div>
            </div>
          </section>

          {/* Key Learnings */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-8">
              Key Product & Technical Learnings
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Strategic Constraints Enable Speed</h3>
                  <p className="text-[var(--text-secondary)]">Focused constraints like limiting to three animal types enabled faster delivery and clearer user testing.</p>
                </div>
                <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">AI as Product Enhancement</h3>
                  <p className="text-[var(--text-secondary)]">AI can both enhance development process and deliver unique user value when strategically implemented.</p>
                </div>
                <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Personal Passion Drives Quality</h3>
                  <p className="text-[var(--text-secondary)]">Authentic foundation from personal experience with pet adoption created genuine product-market understanding.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Start with Core Value</h3>
                  <p className="text-[var(--text-secondary)]">Prioritizing the primary user need (finding compatible pets) before adding nice-to-have features.</p>
                </div>
                <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Modern Tools Enable Builders</h3>
                  <p className="text-[var(--text-secondary)]">AI tools are enabling PMs to directly build products without deep technical expertise.</p>
                </div>
                <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Document AI's Work</h3>
                  <p className="text-[var(--text-secondary)]">Having AI document its own code and reasoning saves time and provides crucial context for debugging.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
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
        </div>
      </main>
      
      <Footer />
      
      {/* Navigation Buttons */}
      <PortfolioNavButtons />
    </div>
  )
}
