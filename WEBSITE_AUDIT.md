# Williams Properties Website Audit Report
## www.williamsproperties.com
### Audit Date: April 8, 2026

---

## 1. EXECUTIVE SUMMARY

### Overall Grades
| Area | Grade |
|------|-------|
| Technical SEO | **F** |
| On-Page SEO | **F** |
| Copywriting | **D+** |
| Conversion Optimization | **F** |
| User Experience | **F** |
| Performance | **D** |

### What the Site Does Well
- The family story is authentic, compelling, and differentiating — 120+ years of property ownership history is a powerful trust signal that few competitors can match.
- The properties themselves appear to be genuinely high-character, well-maintained vintage buildings with real craftsmanship.
- Contact information (phone, email, address) is present and easy to find on the contact page.

### Biggest Problems
- The site has **no mobile responsiveness whatsoever** — no viewport meta tag, no responsive CSS. On mobile devices (60%+ of web traffic), the site is nearly unusable.
- The site runs on **HTTP by default** with no automatic redirect to HTTPS, damaging both security and SEO rankings.
- There are **6 broken internal links** to building sub-pages that all return 404 errors — meaning visitors clicking to learn about specific properties hit dead ends.
- There is **zero SEO infrastructure**: no meta descriptions, no structured data, no sitemap, no robots.txt, no heading hierarchy, no analytics tracking of any kind.
- The visual design appears to be from approximately 2005-2010 and actively undermines the credibility of what is clearly a high-quality property management company.

---

## 2. PRIORITY ACTION MATRIX

| Finding | Category | Severity | Est. Fix Time | Est. Business Impact |
|---------|----------|----------|--------------|---------------------|
| No HTTPS redirect | Technical SEO | CRITICAL | 1 hour | Google penalizes HTTP sites; visitors see "Not Secure" warning |
| 6 broken building sub-page links | Technical SEO | CRITICAL | 2 hours | Visitors clicking building links hit dead ends — lost leads |
| No mobile responsiveness | UX/Technical | CRITICAL | Full rebuild | 60%+ of visitors cannot use the site effectively |
| No viewport meta tag | Technical SEO | CRITICAL | 5 minutes | Google mobile-first indexing cannot properly render site |
| No meta descriptions on any page | On-Page SEO | HIGH | 2 hours | Poor search result appearance, lower CTR |
| Same title tag on every page | On-Page SEO | HIGH | 1 hour | Google can't differentiate pages; keyword cannibalization |
| No heading hierarchy (H1/H2) | On-Page SEO | HIGH | 2 hours | Google can't understand page structure or topic relevance |
| 8 of 9 images missing alt text | On-Page SEO/Accessibility | HIGH | 1 hour | Invisible to Google Image search; accessibility violation |
| No robots.txt | Technical SEO | HIGH | 30 min | No crawl directives for search engines |
| No sitemap.xml | Technical SEO | HIGH | 30 min | Search engines can't efficiently discover all pages |
| No structured data/schema | Technical SEO | HIGH | 3 hours | Missing rich results in search (LocalBusiness, etc.) |
| No Google Analytics | Analytics | HIGH | 1 hour | Zero visibility into traffic, behavior, conversions |
| No favicon | UX/Branding | MEDIUM | 30 min | Unprofessional appearance in browser tabs/bookmarks |
| No contact form | Conversion | HIGH | 2 hours | Only contact method is email/phone — high friction |
| No lang attribute | Technical SEO/Accessibility | MEDIUM | 5 min | Accessibility violation; search engine language detection |
| Default 404 page | UX | MEDIUM | 1 hour | Visitors who hit errors have no way back to the site |
| Dated visual design | UX/Trust | HIGH | Full rebuild | Erodes trust and credibility for a premium property company |
| No CTA buttons anywhere | Conversion | HIGH | 2 hours | No clear action for visitors to take |
| No blog or content | Content Strategy | MEDIUM | Ongoing | Missing SEO opportunity for organic traffic |
| No Google Business Profile integration | Local SEO | HIGH | 2 hours | Missing critical local search visibility |

---

## 3. FULL FINDINGS BY SECTION

---

### SECTION 1: TECHNICAL INFRASTRUCTURE

#### 1A. robots.txt

**Issue: No robots.txt File**
- **Severity:** HIGH
- **Location:** williamsproperties.com/robots.txt
- **What Was Found:** The file does not exist (returns 404).
- **Why It Matters:** Without robots.txt, search engines have no directives about what to crawl or not crawl. There's also no sitemap reference for crawlers.
- **How to Fix It:** Create a robots.txt file at the root of the site with proper directives and a sitemap reference.

#### 1B. XML Sitemap

**Issue: No XML Sitemap**
- **Severity:** HIGH
- **Location:** williamsproperties.com/sitemap.xml
- **What Was Found:** No sitemap exists (returns 404). No sitemap_index.xml either.
- **Why It Matters:** Search engines can't efficiently discover and index all pages. This slows indexation and can cause pages to be missed entirely.
- **How to Fix It:** Generate an XML sitemap listing all live pages with lastmod dates. Submit to Google Search Console and Bing Webmaster Tools.

#### 1C. HTTPS and Security

**Issue: No HTTP to HTTPS Redirect**
- **Severity:** CRITICAL
- **Location:** Site-wide
- **What Was Found:** The site loads on both HTTP and HTTPS, but HTTP does NOT automatically redirect to HTTPS. The default URL (www.williamsproperties.com) loads over HTTP.
- **Why It Matters:** Google has used HTTPS as a ranking signal since 2014. Browsers display "Not Secure" warnings for HTTP sites. Visitor data (including form submissions) is transmitted unencrypted.
- **How to Fix It:** Configure server-level 301 redirect from all HTTP URLs to their HTTPS equivalents.

**Issue: No Security Headers**
- **Severity:** MEDIUM
- **Location:** Site-wide (response headers)
- **What Was Found:** No Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, or Permissions-Policy headers detected.
- **Why It Matters:** The site is vulnerable to clickjacking, MIME-type attacks, and other security issues.
- **How to Fix It:** Add security headers via server configuration or meta tags.

#### 1D. Redirect and URL Structure

**Issue: 6 Broken Internal Links (Building Sub-Pages)**
- **Severity:** CRITICAL
- **Location:** buildings.html page — links to charleston.html, Epsilon.html, Hampshire.html, LewisClark.html, Thornwood.html, tuscany.html
- **What Was Found:** All 6 building detail page links on the "Our Buildings" page return 404 errors. The pages have either been deleted or moved without redirects.
- **Why It Matters:** Visitors who click to learn about specific properties — the single most important action on this site — hit a dead end. This is directly losing potential tenants.
- **How to Fix It:** Either restore the building detail pages or remove/update the links.

**Issue: Inconsistent URL Casing**
- **Severity:** LOW
- **Location:** Building sub-page links
- **What Was Found:** Some URLs use uppercase (Hampshire.html, LewisClark.html, Epsilon.html) while others use lowercase (charleston.html, tuscany.html).
- **Why It Matters:** Inconsistent URL casing can cause duplicate content issues on case-sensitive servers.
- **How to Fix It:** Standardize all URLs to lowercase.

#### 1E. Crawlability and Indexation

**Issue: No Canonical Tags**
- **Severity:** MEDIUM
- **Location:** All pages
- **What Was Found:** No canonical tags present on any page.
- **Why It Matters:** Without canonicals, search engines may index duplicate versions of pages (HTTP vs HTTPS, www vs non-www).
- **How to Fix It:** Add self-referencing canonical tags to every page.

#### 1F. Core Web Vitals and Performance

**Issue: No Viewport Meta Tag**
- **Severity:** CRITICAL
- **Location:** All pages
- **What Was Found:** The viewport meta tag is completely missing from all pages.
- **Why It Matters:** Google's mobile-first indexing cannot properly render the site. Mobile users see a desktop-sized page they must pinch and zoom.
- **How to Fix It:** Add `<meta name="viewport" content="width=device-width, initial-scale=1">` to every page.

#### 1G. Structured Data

**Issue: No Structured Data of Any Kind**
- **Severity:** HIGH
- **Location:** All pages
- **What Was Found:** Zero JSON-LD schema markup on any page. No Organization, LocalBusiness, ApartmentComplex, or any other schema type.
- **Why It Matters:** The site is invisible to rich search results. For a local property management business, LocalBusiness schema with address, phone, hours, and geo coordinates is essential for local search visibility.
- **How to Fix It:** Implement LocalBusiness schema on every page, plus specific property schemas for each building.

---

### SECTION 2: ON-PAGE SEO

#### 2A. Title Tags

**Issue: Identical Title Tag on Every Page**
- **Severity:** HIGH
- **Location:** All pages use "Williams Properties" as the title (insurance.html uses just "Insurance")
- **What Was Found:** 5 of 6 pages share the exact same title tag "Williams Properties." No page has a unique, keyword-rich title.
- **Why It Matters:** Google uses title tags as a primary ranking signal. Identical titles cause keyword cannibalization and make it impossible for Google to distinguish pages.
- **How to Fix It:** Write unique, descriptive title tags for each page (45-60 characters) with target keywords near the front. Example: "Apartments for Rent in Tacoma, WA | Williams Properties"

#### 2B. Meta Descriptions

**Issue: No Meta Descriptions on Any Page**
- **Severity:** HIGH
- **Location:** All pages
- **What Was Found:** Not a single page has a meta description.
- **Why It Matters:** Google may auto-generate a snippet from page content, but it's usually poor. Custom meta descriptions with target keywords improve click-through rates from search results.
- **How to Fix It:** Write unique meta descriptions (120-158 characters) for each page with target keywords and a call-to-action.

#### 2C. Heading Structure

**Issue: No H1 or H2 Tags on Any Page**
- **Severity:** HIGH
- **Location:** All pages
- **What Was Found:** Zero H1, H2, or H3 tags on any page. All text appears to be styled with font tags, bold tags, or inline CSS rather than semantic HTML headings.
- **Why It Matters:** Search engines rely heavily on heading hierarchy to understand page structure and topic relevance. Without headings, Google can't determine what each page is about.
- **How to Fix It:** Implement proper heading hierarchy: one H1 per page containing the primary keyword, H2s for major sections, H3s for sub-sections.

#### 2D. Content Quality

**Issue: Homepage Content Is About-Page Content**
- **Severity:** HIGH
- **Location:** Homepage (index.html)
- **What Was Found:** The homepage reads like an About page — it's entirely focused on the Williams family history. There's no information about available apartments, property types, location benefits, or any content that would help a potential renter.
- **Why It Matters:** The homepage should immediately communicate what the company offers and help visitors find what they need. A visitor looking for an apartment in Tacoma would not understand this is a rental property company within 5 seconds.
- **How to Fix It:** Restructure homepage with: hero section showing available properties, clear value proposition, property highlights, neighborhood info, CTA to view vacancies.

#### 2E. Image SEO

**Issue: 8 of 9 Images Missing Alt Text**
- **Severity:** HIGH
- **Location:** All pages (navigation button images, Yelp icon, Facebook icon)
- **What Was Found:** 8 out of 9 images have empty or missing alt attributes. The navigation is built entirely with image buttons that have no alt text.
- **Why It Matters:** Screen readers can't describe these images. Google can't index them. This is both an accessibility and SEO failure.
- **How to Fix It:** Add descriptive alt text to every image. Navigation images should have alt text matching their function (e.g., alt="View Vacancies").

#### 2F. Internal Linking

**Issue: Minimal Internal Linking**
- **Severity:** MEDIUM
- **Location:** All pages
- **What Was Found:** Internal linking is limited to the navigation bar. There are no contextual internal links within body copy connecting related pages.
- **Why It Matters:** Internal links distribute page authority and help users and search engines discover content.
- **How to Fix It:** Add contextual links within page copy (e.g., link building names in the homepage text to their detail pages).

---

### SECTION 3: COPYWRITING AND MESSAGING

#### 3A. Homepage Copy

**Issue: No Clear Value Proposition**
- **Severity:** HIGH
- **Location:** Homepage above the fold
- **What Was Found:** The headline is "Williams Properties" followed by "Family. Character. Homes." — a tagline that sounds pleasant but doesn't communicate what the company does or who it serves. A first-time visitor cannot determine within 5 seconds that this is a Tacoma apartment rental company.
- **Why It Matters:** Fails the "Stranger Test." If someone who knows nothing about the company lands on this page, they won't understand the offering quickly enough. Most visitors will bounce.
- **How to Fix It:** Lead with a clear, benefit-driven headline like "Character Apartments in Historic Tacoma" with a subheadline that elaborates the value proposition.

**Issue: Company-Centric Copy (Not Customer-Centric)**
- **Severity:** HIGH
- **Location:** Homepage
- **What Was Found:** The entire homepage is about the Williams family — their history, their grandfather, their work ethic, their design approach. While authentic, it's all first-person narrative. The word "you" barely appears.
- **Why It Matters:** Visitors care about what the company can do for THEM. The family story is valuable but should be secondary to addressing the visitor's needs.
- **How to Fix It:** Restructure to lead with tenant benefits, then weave in the family story as supporting proof of quality.

#### 3B. Service Pages

**Issue: No Dedicated Service/Feature Pages**
- **Severity:** MEDIUM
- **Location:** Site-wide
- **What Was Found:** There are no dedicated pages for specific property types, neighborhoods, amenities, pet policy details, or application process.
- **Why It Matters:** Each of these would be a ranking opportunity and would help prospective tenants find the information they need.
- **How to Fix It:** Create dedicated pages for key topics: Pet-Friendly Apartments, Historic Tacoma Apartments, Application Process, Neighborhood Guide, etc.

#### 3E. Calls-to-Action

**Issue: No CTA Buttons Anywhere on the Site**
- **Severity:** HIGH
- **Location:** All pages
- **What Was Found:** There is not a single CTA button on the entire site. No "View Available Apartments," "Schedule a Tour," "Apply Now," or "Contact Us" buttons. The only actionable elements are email links.
- **Why It Matters:** Without clear CTAs, visitors don't know what to do next. The site provides no guided path toward conversion (scheduling a tour, applying for an apartment, contacting the office).
- **How to Fix It:** Add prominent CTA buttons on every page. Primary CTA: "View Available Apartments" or "Schedule a Tour." Secondary CTA: "Apply Now."

#### 3F. Trust Signals

**Issue: No Testimonials or Reviews on Site**
- **Severity:** MEDIUM
- **Location:** Site-wide
- **What Was Found:** The site links to Yelp for reviews but doesn't display any testimonials or reviews on the site itself. There's text saying "See what others have to say about us" with a Yelp link, but no actual reviews visible.
- **Why It Matters:** Social proof near decision points dramatically increases conversion. Sending visitors offsite to read reviews means they may never come back.
- **How to Fix It:** Pull top reviews and display them on the homepage and property pages.

---

### SECTION 4: CONVERSION AND SALESMANSHIP

#### 4A. Funnel

**Issue: No Conversion Funnel Exists**
- **Severity:** HIGH
- **Location:** Site-wide
- **What Was Found:** There is no defined path from "interested visitor" to "applicant." The site has no contact form, no tour scheduling, no application process visible (there's a PDF link but it's buried on the contact page), and no clear next steps on any page.
- **Why It Matters:** The site functions as a static brochure. Every visitor who doesn't already know to call or email is essentially lost.
- **How to Fix It:** Design a clear funnel: Browse Properties -> View Details -> Schedule Tour / Apply Now -> Contact form with auto-response.

#### 4D. Contact and Lead Capture

**Issue: No Contact Form**
- **Severity:** HIGH
- **Location:** contact.html
- **What Was Found:** The contact page has only an address, phone number, and two email addresses. There is no contact form. There are "Application" and "Maintenance" buttons, but Application links to a PDF.
- **Why It Matters:** Many visitors prefer filling out a form to composing an email. A PDF application is high-friction — it must be downloaded, printed, filled out, and returned. This is losing qualified leads.
- **How to Fix It:** Add an inline contact form. Consider an online application system.

---

### SECTION 5: USER EXPERIENCE AND VISUAL AUDIT

#### 5A. Navigation

**Issue: Navigation Built Entirely with Images**
- **Severity:** HIGH
- **Location:** Site-wide header navigation
- **What Was Found:** All navigation items are image-based buttons with no alt text. They are not HTML text links.
- **Why It Matters:** Screen readers can't read them. Search engines can't follow them properly. They don't scale on different screen sizes. They can't be translated.
- **How to Fix It:** Replace image navigation with semantic HTML nav elements using text links styled with CSS.

#### 5B. Mobile Responsiveness

**Issue: Site Is Completely Non-Responsive**
- **Severity:** CRITICAL
- **Location:** All pages at all mobile viewports
- **What Was Found:** At 375px viewport (iPhone), the site displays at full desktop width requiring horizontal scrolling and pinch-to-zoom. No viewport meta tag exists. No responsive CSS is in use. No mobile navigation (hamburger menu) exists.
- **Why It Matters:** Over 60% of web traffic is mobile. Google uses mobile-first indexing. A non-responsive site is effectively invisible to mobile search and unusable for mobile visitors.
- **How to Fix It:** Full responsive rebuild is required.

#### 5C. Visual Design

**Issue: Severely Dated Visual Design**
- **Severity:** HIGH
- **Location:** Site-wide
- **What Was Found:** Dark red/maroon background, gold script text, image-based navigation buttons with stone/rust textures, center-aligned body copy with no visual hierarchy. The design aesthetic is approximately 2005-2010 era.
- **Why It Matters:** Visual design directly impacts trust. Research shows visitors form an opinion about a website's credibility within 50 milliseconds. A dated design undermines the credibility of what is clearly a high-quality property company managing beautiful historic buildings.
- **How to Fix It:** Full visual redesign with modern typography, clean layout, high-quality property photography as heroes, and a color palette that communicates "premium historic character."

**Issue: No Visual Hierarchy or Content Structure**
- **Severity:** HIGH
- **Location:** All pages
- **What Was Found:** All pages use centered text with minimal formatting. There's no clear visual hierarchy — no cards, no sections, no whitespace structure, no imagery integrated with content.
- **Why It Matters:** Users can't scan the page to find what they need. Everything looks the same, so nothing stands out.
- **How to Fix It:** Redesign with clear sections, cards for properties, visual hierarchy using size/weight/color, and strategic use of whitespace.

#### 5D. Accessibility

**Issue: Multiple Critical Accessibility Failures**
- **Severity:** HIGH
- **Location:** Site-wide
- **What Was Found:** No lang attribute. Image navigation with no alt text. No heading hierarchy. No skip-to-content link. No focus indicators visible. Yellow text on dark red background has questionable contrast ratios. Phone number not clickable on mobile.
- **Why It Matters:** The site fails WCAG 2.1 AA on multiple counts. This creates legal liability (ADA compliance) and excludes users with disabilities.
- **How to Fix It:** Address in full rebuild — semantic HTML, ARIA labels, proper contrast, keyboard navigation.

#### 5F. 404 Page

**Issue: Default Server 404 Page**
- **Severity:** MEDIUM
- **Location:** Any non-existent URL
- **What Was Found:** The 404 page shows a bare "Not Found" message with no branding, no navigation, and no helpful links.
- **Why It Matters:** Visitors who hit a 404 have no way to get back to the site. Given that 6 internal links produce 404s, this is especially damaging.
- **How to Fix It:** Create a custom branded 404 page with navigation, search, and links to key pages.

---

### SECTION 6: ANALYTICS AND TRACKING

**Issue: No Analytics Tracking Whatsoever**
- **Severity:** HIGH
- **Location:** Site-wide
- **What Was Found:** No Google Analytics (GA4), no Google Tag Manager, no Facebook Pixel, no heat mapping, no conversion tracking of any kind. Zero scripts on the page.
- **Why It Matters:** The business has absolutely no visibility into how many people visit the site, which pages they view, where they come from, or what they do. It's impossible to measure marketing effectiveness or identify problems.
- **How to Fix It:** Install GA4 + GTM. Set up conversion goals (contact form submission, phone clicks, application downloads). Consider Microsoft Clarity for free heat mapping.

**Issue: No Cookie Consent or Privacy Policy**
- **Severity:** MEDIUM
- **Location:** Site-wide
- **What Was Found:** No cookie consent banner, no privacy policy page, no terms of service.
- **Why It Matters:** Legal requirement under CCPA (California) and potentially GDPR. Even without tracking cookies currently, a privacy policy should exist.
- **How to Fix It:** Create privacy policy and terms of service pages.

---

### SECTION 7: COMPETITIVE POSITION

**Issue: No SEO Competitive Presence**
- **Severity:** HIGH
- **Location:** Search results
- **What Was Found:** Given the complete absence of SEO infrastructure, the site likely ranks poorly or not at all for valuable search terms like "apartments for rent in Tacoma," "Tacoma apartments," "historic apartments Tacoma," etc.
- **Why It Matters:** Every day without search visibility is lost potential tenant inquiries. Competitors with even basic SEO will outrank this site.
- **How to Fix It:** Full SEO implementation in rebuild — target keywords per page, proper meta tags, structured data, content strategy.

---

### SECTION 8: CONTENT STRATEGY

**Issue: No Blog or Content Hub**
- **Severity:** MEDIUM
- **Location:** Site-wide
- **What Was Found:** No blog, no content section, no resources. The site has only 6 static pages.
- **Why It Matters:** A blog with content about Tacoma neighborhoods, renting tips, historic building features, etc. would drive organic traffic and establish authority.
- **How to Fix It:** Create a blog section as part of the rebuild. Plan an initial set of 5-10 articles targeting key search terms.

---

### SECTION 9: LOCAL SEO

**Issue: No Local SEO Implementation**
- **Severity:** HIGH
- **Location:** Site-wide
- **What Was Found:** No LocalBusiness schema. No embedded Google Map. NAP (Name, Address, Phone) is present on the contact page but not consistently on all pages. No Google Business Profile integration visible.
- **Why It Matters:** For a local property management company, local search is the primary discovery channel. Without local SEO, the business is invisible in "near me" searches and Google Maps.
- **How to Fix It:** Implement LocalBusiness schema. Embed Google Maps. Add NAP to footer of every page. Claim/optimize Google Business Profile.

---

### SECTION 10: EMAIL AND MARKETING

**Issue: No Email Capture Mechanism**
- **Severity:** MEDIUM
- **Location:** Site-wide
- **What Was Found:** There is a mention of a "Subscribe" feature for vacancy notifications, but the link appears to just open a mailto: link. There's no actual email signup form connected to an email marketing platform.
- **Why It Matters:** Prospective tenants who aren't ready to apply today could be captured via email and notified when units matching their needs become available.
- **How to Fix It:** Implement an email signup form connected to a platform like Mailchimp. Offer vacancy alerts by building/unit type.

**Issue: No Open Graph Tags or Twitter Cards**
- **Severity:** LOW
- **Location:** All pages
- **What Was Found:** No OG tags or Twitter Card meta tags on any page.
- **Why It Matters:** When pages are shared on social media, they display with no image, no description — just a plain URL.
- **How to Fix It:** Add OG and Twitter Card meta tags to every page.

---

## 4. WHAT'S WORKING WELL

1. **Authentic brand story** — The 120+ year family history is genuinely compelling and differentiating. This is a real competitive advantage that should be prominently featured (but not at the expense of customer-focused messaging).
2. **Beautiful properties** — The historic buildings (Biltmore, Lewis & Clark, Charleston) are genuinely stunning. The descriptions convey real character and craftsmanship.
3. **Direct ownership model** — The fact that tenants communicate directly with long-term owners (not a management company) is a strong differentiator worth highlighting.
4. **Vacancy listings exist** — The vacancies page does provide useful information about available units with pricing and details.
5. **Contact information is clear** — Phone, email, and address are easy to find on the contact page.

---

## 5. 90-DAY ACTION PLAN

**This site requires a full rebuild, not incremental fixes.** The technical debt is too deep, the design is too dated, and the infrastructure is too limited for patching. The rebuild plan is detailed in the companion document REBUILD_PLAN.md.

| Timeline | Focus |
|----------|-------|
| Week 1-2 | Full site rebuild: Next.js, responsive design, HTTPS, mobile-first, all CRITICAL issues resolved |
| Month 1 | All HIGH issues: SEO implementation, structured data, analytics, contact form, CTAs, content restructure |
| Month 2 | MEDIUM issues: Blog launch (5 initial posts), email capture, local SEO optimization, Google Business Profile |
| Month 3 | LOW issues + strategic: Content marketing cadence, competitive tools, ongoing SEO refinement |

---

## 6. APPENDIX: FULL URL INVENTORY

| URL | Status | Notes |
|-----|--------|-------|
| williamsproperties.com/ | 200 | Homepage — loads on HTTP by default |
| williamsproperties.com/index.html | 200 | Same as homepage |
| williamsproperties.com/vacancies.html | 200 | Vacancy listings |
| williamsproperties.com/buildings.html | 200 | Building overview |
| williamsproperties.com/photos.html | 200 | Historical photos |
| williamsproperties.com/contact.html | 200 | Contact info |
| williamsproperties.com/insurance.html | 200 | Renter's insurance |
| williamsproperties.com/charleston.html | **404** | Broken link from buildings.html |
| williamsproperties.com/Epsilon.html | **404** | Broken link from buildings.html |
| williamsproperties.com/Hampshire.html | **404** | Broken link from buildings.html |
| williamsproperties.com/LewisClark.html | **404** | Broken link from buildings.html |
| williamsproperties.com/Thornwood.html | **404** | Broken link from buildings.html |
| williamsproperties.com/tuscany.html | **404** | Broken link from buildings.html |
| williamsproperties.com/forms/Application.pdf | Unknown | PDF download link |
| williamsproperties.com/robots.txt | **404** | Does not exist |
| williamsproperties.com/sitemap.xml | **404** | Does not exist |
| williamsproperties.com/.well-known/security.txt | Not checked | Likely does not exist |

### External Links Found
- yelp.com/biz/williams-properties-tacoma-2
- facebook.com/WilliamsProperties
- mailto:Dax@WilliamsProperties.com
- mailto:office@williamsproperties.com
- mailto:maintenance@williamsproperties.com
- mailto:pgirolami@farmersagent.com

---

## SUMMARY OF CRITICAL/HIGH FINDINGS COUNT

| Severity | Count |
|----------|-------|
| CRITICAL | 5 |
| HIGH | 18 |
| MEDIUM | 9 |
| LOW | 2 |
| PASSING | 5 |

**Total findings: 39**

This site needs a complete rebuild from the ground up. The good news: the brand, the story, the properties, and the business fundamentals are strong. The website is the weakest link — and fixing it will have an outsized positive impact on the business.
