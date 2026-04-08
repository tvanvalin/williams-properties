# REBUILD PLAN - Williams Properties

## Site Architecture

### Page List & URL Structure
| Page | URL | Purpose |
|------|-----|---------|
| Homepage | / | Hero + value prop + featured properties + social proof + CTA |
| Available Units | /available-units | Current vacancies with filtering |
| Our Properties | /properties | Portfolio overview of all buildings |
| The Biltmore | /properties/the-biltmore | Individual property page |
| The Brentwood | /properties/the-brentwood | Individual property page |
| The Charleston | /properties/the-charleston | Individual property page |
| The Brickworks | /properties/the-brickworks | Individual property page |
| The Hampshire | /properties/the-hampshire | Individual property page |
| The Lewis & Clark | /properties/the-lewis-and-clark | Individual property page |
| The Foundry | /properties/the-foundry | Individual property page |
| Tuscany | /properties/tuscany | Individual property page |
| About / Our Story | /about | Family history, team, philosophy |
| Contact | /contact | Form, map, phone, email, address |
| Apply | /apply | Online application info + PDF download |
| Blog | /blog | Content hub (MDX-powered) |
| Blog Post | /blog/[slug] | Individual blog posts |
| Resources/Tools | /resources | Interactive tools section |
| Privacy Policy | /privacy | Legal |
| Terms of Service | /terms | Legal |
| 404 | Custom | Branded error page |

### Navigation Structure
**Primary Nav:** Available Units | Our Properties | About | Contact
**Secondary/CTA:** Apply Now (button)
**Footer:** All pages + legal + social + contact info

### Internal Linking Strategy
- Every property page links to Available Units (filtered for that building)
- Blog posts link contextually to relevant property pages
- Homepage features 2-3 properties with links to detail pages
- Every page has CTA to Available Units or Contact

## Design Direction

### Design System Commitment
**"Refined heritage editorial with warm industrial accents"** — a design that feels like a premium architectural magazine covering Tacoma's historic district. Warm, grounded palette inspired by brick, hardwood, and craftsman details. Modern layout that lets photography tell the story.

### Color Palette
| Token | Hex | Usage | Contrast on White | Contrast on Dark |
|-------|-----|-------|-------------------|-----------------|
| --color-primary | #1C1917 | Dark backgrounds, headings | 16.2:1 AA PASS | N/A |
| --color-secondary | #FAF7F2 | Light backgrounds | N/A | 15.4:1 AA PASS |
| --color-accent | #B45309 | CTAs, links, highlights | 4.8:1 AA PASS | 3.7:1 (large text only) |
| --color-accent-dark | #92400E | Hover states, dark accent | 6.5:1 AA PASS | N/A |
| --color-text | #292524 | Body text on light bg | 14.5:1 AA PASS | N/A |
| --color-text-light | #FAFAF9 | Body text on dark bg | N/A | 16.1:1 AA PASS |
| --color-muted | #57534E | Secondary text | 7.1:1 AA PASS | N/A |
| --color-border | #D6D3D1 | Borders, dividers | N/A | N/A |
| --color-surface | #F5F5F4 | Card backgrounds | N/A | N/A |

### Typography
- **Display/Headings:** Playfair Display (Google Fonts) — elegant serif with architectural character
- **Body:** DM Sans (Google Fonts) — clean, modern, excellent readability
- **Scale:** Display 56px / H1 40px / H2 32px / H3 24px / Body 18px / Small 14px
- **Body line-height:** 1.6 on light, 1.7 on dark

### Component Style Guide
- **Buttons:** Rounded corners (8px), solid fill for primary, outline for secondary
- **Cards:** Subtle shadow, hover lift animation, 12px radius
- **Images:** Full-bleed heros, rounded corners on cards, subtle overlay on text-over-image
- **Spacing:** 8px base unit, generous padding (sections: 96px vertical)
- **Animations:** Scroll-triggered fade-up reveals, subtle hover scales, staggered entry

## Image Strategy
| Category | Decision |
|----------|----------|
| Building exterior photos | KEEP from existing site, optimize to WebP |
| Historical B&W photos | KEEP, optimize |
| Hero images | REPLACE with Unsplash (Tacoma skyline, historic architecture, apartment interiors) |
| Property interior shots | REPLACE with Unsplash (styled apartment interiors) |
| Team/owner photos | Not currently available — use placeholder or skip |
| Icons | CREATE using Lucide React icon library |

## Copy Strategy
### Key Messaging Pillars
1. **Heritage & Trust:** 120+ years of family property ownership
2. **Character & Craft:** Each apartment personally designed, no two alike
3. **Direct Ownership:** Talk to the owners, not a management company
4. **Historic Tacoma:** Premium living in character-rich historic buildings

### Tone of Voice
Warm, confident, personal. Like a friend who happens to own beautiful historic buildings and genuinely cares about making them feel like home. Not corporate. Not salesy. Authentic.

### Copy Rewrites Needed
- Homepage: Complete rewrite — customer-focused, benefit-driven
- Property pages: Enhance with benefit language, neighborhood context
- About: Restructure family story to serve customer (why this matters to YOU)
- Contact: Add form, hours, map, "what to expect" language
- Vacancies: Better structured, filterable, with property photos

## SEO Implementation Plan
### Target Keywords Per Page
| Page | Primary Keyword | Secondary Keywords |
|------|----------------|-------------------|
| Homepage | apartments for rent tacoma wa | tacoma apartments, tacoma rentals |
| Available Units | available apartments tacoma | tacoma apartment vacancies, rent in tacoma |
| Properties Overview | historic apartments tacoma | vintage apartments tacoma, character apartments |
| Individual Properties | [building name] apartments tacoma | [address] apartments |
| About | williams properties tacoma | tacoma property management, family owned apartments |
| Blog | [topic-specific] | tacoma living, tacoma neighborhoods |

### Schema Types
- LocalBusiness (every page, in layout)
- ApartmentComplex (property pages)
- BreadcrumbList (all pages)
- BlogPosting (blog posts)
- FAQPage (if FAQ section added)

### Blog Content Strategy (Initial 5 Posts)
1. "Guide to Tacoma's Historic Stadium District Apartments"
2. "What to Know Before Renting a Vintage Apartment"
3. "Pet-Friendly Apartments in Tacoma: Your Complete Guide"
4. "The History of Tacoma's Most Beautiful Buildings"
5. "First-Time Renter's Guide: Everything You Need to Know"

## Technical Plan
- **Framework:** Next.js 14+ App Router with SSG
- **Styling:** Tailwind CSS v3+
- **Blog:** MDX files in /content/blog/
- **Images:** next/image with WebP/AVIF
- **Deployment:** Vercel via GitHub (tvanvalin)
- **Package Manager:** pnpm
- **Linting:** ESLint + Prettier
- **Accessibility:** axe-core dev dependency
- **Performance Targets:** Lighthouse 90+ all categories

## Accessibility Targets
- Zero axe-core critical/serious violations
- WCAG AA all color combinations (verified above)
- Keyboard navigation throughout
- Skip-to-content link
- Proper heading hierarchy
- All images with descriptive alt text
- prefers-reduced-motion respected
