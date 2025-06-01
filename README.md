# Next.js 14 Landing Page Template (Open Source)

This is an open-source, production-ready landing page template built with Next.js 14, Tailwind CSS, and Framer Motion. It is designed for rapid customization and easy deployment for any SaaS, startup, or personal project.

- **Live Template Demo:** https://builtit-dev.github.io/builtit-template/
- **Original Inspiration:** https://builtit.dev (the commercial site this template is based on)

---

## ✨ Features
- Modern, dark-mode design system
- Fully responsive and mobile-first
- Component-based architecture for easy customization
- Framer Motion for premium animations
- SEO-ready with proper metadata and OG image handling
- Anti-scraping email protection (client-side assembly)
- Example backend integrations (Cloudflare Worker & Google Apps Script)

---

## 🗂️ Project Structure
```
/app                      # Main Next.js app (App Router)
/components               # Reusable UI components
/public                   # Static assets (images, OG, favicon, etc.)
/backend                  # Example backend code (see below)
/lib                      # Utility libraries (analytics, etc.)
```

---

## 🧩 Main Sections & Components
- **Header**: Responsive navigation, mobile menu, CTA
- **Hero**: Animated background, headline, subheadline, CTA
- **Feature Sections**: Advantages, process, testimonials
- **Portfolio/Case Studies**: Example project cards and detail pages
- **Contact Page**: Professional form, Calendly integration, validation
- **Footer**: Social links, anti-scraping email, legal links

---

## ⚙️ Example Backend Integrations
This template includes anonymized backend code for handling contact form submissions:

### 1. `/backend/cloudflare-worker`
- **index.js**: Cloudflare Worker proxy for secure form submission and CORS handling. Update the placeholders with your own production domains and Apps Script endpoint before deploying.

### 2. `/backend/google-apps-script`
- **contact-form.gs**: Google Apps Script to receive POSTs, write to Google Sheets, and send notification emails. All sensitive info is replaced with placeholders—fill in your own values before use.

See each subfolder's README for setup instructions.

---

## 🚀 Getting Started
```bash
npm install
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Customization
- Edit content in `/app` and `/components` to match your brand and offering.
- Update images and OG assets in `/public`.
- Adjust colors, fonts, and breakpoints in `tailwind.config.js`.
- Swap out or extend backend integrations as needed for your stack.

---

## 📦 Deployment
Deploy easily to Vercel, Netlify, Cloudflare Pages, or any Next.js-compatible host.

---

## 🙏 Credits & License
- This template is open source and free to use under the MIT License.
- Inspired by and forked from the commercial site [builtit.dev](https://builtit.dev).
- See [LICENSE](LICENSE) for full license details.

---

Enjoy building with this template! If you use it, a star or PR is always appreciated.


## May 2025 Security, Analytics & SEO Upgrades



---

### Open Graph & Meta Image Fixes (May 2025)
- **Universal OG Image:** The site now uses a single Open Graph image for all pages: [`/og-image.png`](public/og-image.png). This image was manually edited and optimized for size and clarity, which finally resolved persistent OG image loading issues in WhatsApp, iMessage, and other platforms. If you need to update the OG image, edit this file directly.
- **SVG Workflow:** The square OG image [`/og-image-square.svg`](public/og-image-square.svg) is maintained in the codebase and should be updated using Figma. Always keep the SVG in sync with your latest branding/artwork.
- **Cleanup:** All unused, duplicate, and large OG/test images have been removed from the repo. Only the universal PNG and SVG remain.
- **Best Practices:**
  - Only one OG image is specified in the Next.js metadata for universal compatibility.
  - No duplicate or conflicting OG meta tags in the HTML head—Next.js Metadata API handles all meta generation.
  - OG image is 1200x630px, PNG, and under 300KB for maximum compatibility with all social and messaging platforms.
- **Standardized Metadata:** All major pages (home, case studies, legal, contact) have dedicated `metadata.ts` files with consistent structure and image dimensions.
- **Contact Page Metadata:** Added a new `metadata.ts` for the contact page and refactored the page to import it.
- **Troubleshooting:** Multiple attempts were made to fix OG image loading issues, including switching between absolute and relative URLs, and adding `secureUrl` for Facebook/Twitter compatibility. The final, working solution uses a single, manually optimized PNG and a clean metadata setup.

#### How to Add Metadata for New Pages
1. Create a `metadata.ts` file in the page directory (e.g. `/app/newpage/metadata.ts`).
2. Use `/og-image.png` for the `openGraph.images` field for universal OG image coverage, or update `/og-image.png` if you want to change the image for the whole site.
3. If you update the SVG, use Figma and export to `/og-image-square.svg`.
4. Import and export the metadata in your page file if needed.
5. Analytics integration is not included by default.

#### Example OG Image Metadata
```ts
openGraph: {
  images: [
    {
      url: '/og-image.png',
      secureUrl: '[REDACTED_FOR_OPEN_SOURCE]',
      width: 1200,
      height: 630,
      alt: 'BuiltIt.dev - AI-Ready MVPs. Expertly Shipped.',
      type: 'image/png',
    }
  ]
}
// For SVG (branding, not OG): Edit `/og-image-square.svg` in Figma and keep it up to date in the repo.
```

---

- **All email addresses (footer, Terms, Privacy, Cookie Policy) are protected from scraping using the ObfuscatedEmail component.** Emails are revealed immediately on page load for users, but are never present in static HTML. This dramatically reduces spam and scraping risk, while maintaining accessibility and user experience.
- **Footer & Policy Pages:** email@example.com and email@example.com are shown as normal, clickable email addresses immediately. There are no [at]/[dot] placeholders anywhere on the site.
- **Security:** Emails are assembled client-side from separate user/domain props, so bots scraping HTML can't harvest them. No emails are present in static HTML output.
- **Metadata Compliance:** Policy pages use layout.tsx for metadata, enabling Framer Motion and Next.js 14 compatibility.
- **Build/Deployment:** Fully Next.js 14-compliant, with Framer Motion and SEO preserved.


A sophisticated, dark-mode landing page built with Next.js 14, showcasing BuiltIt.dev's 14-day MVP development sprint methodology.

## 🎨 Design Philosophy

**Inspired by Draftbit's clean, sophisticated aesthetic:**
- **Dark Mode First**: Deep, rich dark themes with strategic luminous accents
- **Minimal Gradients**: Clean UI with gradients used sparingly in pills and objects, not buttons
- **High Contrast**: Crisp typography and clear information hierarchy
- **Purposeful Animation**: Subtle movements and micro-interactions that enhance UX
- **Generous Spacing**: Ample whitespace for premium feel and reduced cognitive load

## 🎯 Color System

```css
/* Primary Backgrounds */
--bg-primary: #0D0618        /* Deep purple-black */
--bg-secondary: #1A1527      /* Slightly lighter purple */
--bg-card: #1F1A30          /* Card backgrounds */

/* Accent Colors */
--accent-primary: #5A45FF    /* Vibrant purple (CTAs only, updated May 2025) */
--accent-secondary: #00C9B7  /* Turquoise (pills, objects) */

/* Typography */
--text-primary: #F5F5F7      /* Primary text */
--text-secondary: #A0A0B8    /* Secondary text */
--text-muted: #70708A        /* Muted text */

/* Borders */
--border-subtle: rgba(90, 69, 255, 0.15)
--border-highlight: rgba(0, 224, 255, 0.25)
```

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion for smooth transitions
- **Fonts**: Inter (body) + Manrope (headings)

### Component Structure
```
components/
├── Header.tsx              # Fixed navigation with scroll effects
├── HeroSection.tsx         # Main hero with animated backgrounds
├── ProcessSection.tsx      # 14-day sprint methodology
├── PortfolioSection.tsx    # Case studies and success metrics
├── TestimonialsSection.tsx # Client testimonials (card layout)
├── PricingSection.tsx      # Transparent pricing tiers
├── CTASection.tsx          # Final conversion section
└── Footer.tsx              # Links and brand elements
```

## 📱 Sections Overview

### 1. Header
- Fixed navigation with scroll effects
- Mobile-responsive hamburger menu
- Clean, minimal design without gradients
- Smooth hover animations

### 2. Hero Section
- Full-screen impact with animated rocket exhaust particles (premium, smooth animation)
- Clear value proposition and 14-day promise
- Strategic CTA placement
- **Primary CTA Button:** Uses Framer Motion for vertical translate, box shadow, and shine effect (standardized across site)

### 3. Process Section
- Interactive timeline of 14-day sprint methodology
- Phase-by-phase breakdown with deliverables
- Unified group-hover icon animation (rocket, magnifying glass, dev icon)
- Ultra-smooth rocket keyframe animation and responsive layout

### 4. Portfolio Section (Recent MVP Launches)
- Case studies with real project examples
- Success metrics and tech stacks
- **Card Design:** Ultra-premium glow, multi-layer shine, and harmonized micro-animations
- **Category Labels:** White text, purple glow, accent dot, high contrast
- **Button:** Minimal scale-105, shadow-md, rightward icon animation (translate-x-1)
- **Case Study Pages:** DebtCat and FindMe.pet feature consistent styling with homepage
  - **Glowing Pills:** Same premium pill design from homepage applied to case studies
  - **Back-to-Top Button:** Floating button appears after scrolling with smooth scroll to top
  - **Component Architecture:** Server/client component separation for Next.js compliance

### 5. Testimonials Section (Reviews)
- Card-based layout with hover effects
- Client success stories and metrics
- Clean header ("Client Success" pill removed)
- Navigation label updated from "Testimonials" to "Reviews" in both header and footer
- Hidden anchor with proper scroll margin for smooth navigation

### 6. Pricing Section
- Three-tier pricing structure
- Transparent, fixed-price model
- Optional add-ons section
- Money-back guarantee

### 7. Contact Section & Contact Page
- All contact emails (footer and policies) are protected from scraping using client-side rendering. Emails are shown as normal, clickable addresses for users, but are never present in static HTML. No [at]/[dot] placeholders are used anywhere.
- **Contact Page**: Dedicated `/contact` route, enhanced form and embedded scheduler
  - **Layout Enhancement (May 2025)**: Complete redesign with clean two-column grid layout
  - **Mobile UX**: Strategy call button prominently placed at top with homepage-style gradient and shine animation
  - **Desktop UX**: Side-by-side layout with contact form (left) and embedded Calendly widget (right)
  - **Header Consistency**: Both "Send us a Message" and "Schedule Strategy Call" use matching typography with gradient accents
  - **Button Hierarchy**: Send message button styled with subtle purple theme, strategy call buttons use primary gradient
- **Form:** Name, Email, Company, Budget, Message, Timeline; animated validation; black text fields for accessibility
- **Calendly:** Embedded widget and popup, brand color integration
- **Form Submission:** Connected to Cloudflare Worker → Google Apps Script → Google Sheet/email
- **Button Effects:** Standardized shine and hover (Framer Motion) to match Hero section
- **CORS:** Worker allows localhost and production origins
- **Metadata Architecture**: Homepage metadata moved to separate server component (`app/page.metadata.ts`) for Next.js 14 compliance

### 8. Footer
- **May 2025:** Now features email@example.com in near-white, highly visible style using ObfuscatedEmail for anti-scraping. The email is shown immediately for users, but is never present in HTML source.
- All emails are protected from scraping by being assembled client-side. There are no [at]/[dot] placeholders and no need for hover/click to reveal.
- Social media and legal links unchanged.
- Comprehensive link structure
- Social media integration
- Brand elements and legal links

---

## 🛠️ Backend & Contact Form Integration

### Contact Form Workflow
1. **Frontend:** User submits the form on `/contact` or ContactSection
2. **Cloudflare Worker:** Receives POST, validates origin, proxies JSON to Google Apps Script
3. **Google Apps Script:**
   - Validates fields: `name`, `email`, `budget`, `message`
   - Appends row to Google Sheet: `[timestamp, name, email, company, budget, message, source]`
   - Sends notification email with all fields
   - Returns JSON `{ status: 'success', ... }` or error
4. **Frontend:** Parses JSON response, shows success/failure state

### Cloudflare Worker
- File: `/workers/contact-form-worker.js`
- Allows CORS for production and localhost
- Proxies requests to `GOOGLE_APPS_SCRIPT_URL`
- Returns Apps Script response with proper headers

### Google Apps Script
- Receives JSON, validates, writes to sheet, sends email
- Sheet columns: Timestamp, Name, Email, Company, Budget, Message, Source
- Logs all steps for debugging (see "Executions" in Apps Script editor)

### CORS

- Apps Script URL is only accessible via the worker

### Troubleshooting
- **Form not working?**
  - Check browser console for error details
  - Check Cloudflare Worker logs (Cloudflare dashboard)
  - Check Google Apps Script "Executions" for logs/errors
  - Ensure Apps Script has updated `doPost` to match schema
  - Verify Sheet columns match: Timestamp, Name, Email, Company, Budget, Message, Source

---

## 🧑‍💻 Development & Contribution

### SEO Troubleshooting
- For OG images, use Facebook Sharing Debugger or Twitter Card Validator to confirm correct image loading. If images do not appear, double-check relative paths and `secureUrl` fields, and ensure images are in the `/public` directory.
- All OG fixes are global—no need to update for new pages if you follow the patterns above.


### Local Setup
```bash
npm install
npm run dev
```
- Visit [http://localhost:3000](http://localhost:3000)

### Deploying & Updating Backend

This repository includes two example backend scripts for handling contact form submissions and proxying requests securely:

### 1. `/backend/cloudflare-worker`
- **File:** `index.js`
- **Purpose:** Cloudflare Worker code for securely proxying contact form submissions to your Google Apps Script endpoint, with CORS handling and origin validation.
- **Security:** All real origins and script URLs are replaced with clear placeholders. Update `ALLOWED_ORIGINS` and `GOOGLE_APPS_SCRIPT_URL` with your own values before deploying.
- **Usage:** Deploy as a Cloudflare Worker. Update placeholders for your production domains and script endpoint.

### 2. `/backend/google-apps-script`
- **File:** `contact-form.gs`
- **Purpose:** Google Apps Script code to receive POST requests from the contact form, write submissions to a Google Sheet, and send a notification email.
- **Security:** All sensitive values (spreadsheet ID, sheet name, email recipient) are replaced with placeholders. Fill in your own values before use.
- **Usage:** Deploy as a Google Apps Script Web App. Replace all placeholder values with your actual Google Sheet and email information.

**Note:**
- All backend code is anonymized and safe for open source sharing.
- See the README files in each backend subfolder for more specific setup instructions.
- Update Cloudflare Worker via dashboard or Wrangler
- Update Google Apps Script via script editor and redeploy
- Update allowed origins for CORS as needed

### Contribution Guidelines
- All major UI, logic, or backend changes **must** be documented in `/docs/architecture.md`
- Keep this README and docs up to date
- Use clear commit messages and PR descriptions

---

## ❓ FAQ

**Q: Why use a Cloudflare Worker as a proxy?**
A: To securely handle CORS, hide the Apps Script URL, and allow flexible backend logic.

**Q: Why are form fields black text?**
A: For maximum readability and accessibility, especially on dark backgrounds.

**Q: How do I debug form issues?**
A: Check browser console, then Worker logs, then Apps Script "Executions" for detailed logs (see docs).

**Q: How do I add new fields to the form?**
A: Update the frontend, worker, Apps Script, and Google Sheet columns. Document changes in `/docs/architecture.md`.

---

## 🎭 Animation Strategy

### Framer Motion Implementation
- **Entrance Animations**: Staggered reveals for sections
- **Hover Effects**: Subtle scale and glow effects
- **Scroll Animations**: Elements animate in as they enter viewport
- **Micro-interactions**: Button hovers, card lifts, icon rotations

### Performance Considerations
- Animations use `transform` and `opacity` for GPU acceleration
- `will-change` property used sparingly
- Reduced motion support via `prefers-reduced-motion`

## 📝 Content Strategy

### Key Messaging
1. **Speed**: "14-day delivery guarantee"
2. **Quality**: "Production-ready MVPs"
3. **Success**: "$2.5M+ funding raised by clients"
4. **Trust**: "92% success rate"

### Tone of Voice
- Professional yet approachable
- Confident without being arrogant
- Technical but accessible
- Results-focused

## 🚀 Development Workflow

### Getting Started
```bash
npm install
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

### Key Scripts
- `dev`: Development server with hot reload
- `build`: Production build
- `start`: Production server
- `lint`: ESLint checking

## 🎨 Design Decisions

### Why This Approach?
1. **Dark Mode**: Aligns with developer/tech audience preferences
2. **Minimal Gradients**: Cleaner, more professional appearance
3. **Component-Based**: Maintainable and scalable architecture
4. **Animation-Rich**: Engages users without overwhelming
5. **Mobile-First**: Responsive design for all devices

### Gradient Usage Guidelines
- ✅ **Good**: Pills, badges, subtle background elements
- ✅ **Good**: Text gradients for emphasis
- ✅ **Good**: Primary CTA buttons (sparingly)
- ❌ **Avoid**: Multiple gradient buttons
- ❌ **Avoid**: Overwhelming background gradients
- ❌ **Avoid**: Gradient borders everywhere

## 📊 Performance Metrics

### Core Web Vitals Targets
- **LCP**: < 2.5s (Large Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

### Optimization Features
- Next.js Image optimization
- Font preloading
- Code splitting
- Lazy loading for below-fold content

## 🔄 Future Enhancements

### Phase 2 Additions
- [ ] Real testimonials integration
- [ ] Case study detail pages
- [ ] Blog/resources section
- [ ] Contact form with validation
- [ ] Add your own analytics integration
- [ ] SEO optimization

### Phase 3 Features
- [ ] Client portal integration
- [ ] Project tracking dashboard
- [ ] Payment processing
- [ ] Automated onboarding flow

---

**Built with ❤️ by [Lyor](https://www.linkedin.com/in/lyor/)**  
*Turning ideas into reality, one sprint at a time.*
