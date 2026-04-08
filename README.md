# Williams Properties Website

Complete website rebuild for [Williams Properties](https://www.williamsproperties.com) — a family-owned apartment rental company in Tacoma, WA operating since 1902.

## Tech Stack

- **Framework:** Next.js (App Router) with Static Site Generation
- **Styling:** Tailwind CSS
- **Typography:** Playfair Display + DM Sans (Google Fonts)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel (auto-deploy on push to main)
- **Package Manager:** pnpm

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
  app/
    page.tsx                    # Homepage
    about/                      # Our Story page
    available-units/            # Current vacancies
    blog/                       # Blog (coming soon)
    contact/                    # Contact page with form
    properties/                 # Properties overview
      [slug]/                   # Individual property pages (SSG)
    resources/                  # Tools hub
      rent-calculator/          # Rent affordability calculator
      find-your-apartment/      # Apartment matching quiz
      move-in-calculator/       # Move-in cost calculator
    privacy/                    # Privacy policy
    terms/                      # Terms of service
    not-found.tsx               # Custom 404
    sitemap.ts                  # Auto-generated sitemap
    robots.ts                   # Robots.txt
  components/
    Header.tsx                  # Sticky header with mobile nav
    Footer.tsx                  # Footer with schema markup
    AnimateIn.tsx               # Scroll-triggered animation wrapper
  lib/
    properties.ts               # Property data and types
```

## Adding Blog Posts

Create a new `.mdx` file in `/content/blog/` with this frontmatter:

```mdx
---
title: "Post Title Here"
date: "2026-04-08"
description: "A brief description for SEO and previews."
author: "Author Name"
tags: ["tag1", "tag2"]
featuredImage: "/images/blog/post-slug.jpg"
---

Post content here in MDX format.
```

Push to `main` and Vercel auto-deploys.

## Documentation

- `WEBSITE_AUDIT.md` - Full audit of the original site
- `BRAND_BRIEF.md` - Brand extraction and design direction
- `CONTENT_INVENTORY.md` - Content classification
- `REBUILD_PLAN.md` - Architecture, design system, SEO plan
- `TOOLS_RESEARCH.md` - Competitive research for interactive tools
