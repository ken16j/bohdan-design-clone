# ProjectsSection Specification

## Overview
- **Target file:** `src/components/ProjectsSection.tsx`
- **Screenshot:** scroll position ~5000-9300px
- **Interaction model:** static + scroll-driven fade-in, with quote interstitials

## DOM Structure
Dark section containing alternating:
1. Quote interstitial (dark rust bg with orange text)
2. Project case study card (dark bg, image stacks + text)
Repeats for each project.

## Computed Styles

### Section container
- backgroundColor: rgb(26, 30, 30)
- width: 100%
- padding: 0

### Quote interstitial
- backgroundColor: rgb(120, 31, 6) exposed (inherited or set)
- Actually appears as dark brown section between projects
- height: ~300-400px
- display: flex
- alignItems: center
- padding: 40px 24px
- position: relative
- Has orange bracket corners (L-shapes) on the entire block

### Quote text
- fontFamily: "Inter Display", sans-serif
- fontWeight: 500
- fontSize: ~18-22px
- color: rgb(227, 76, 34)
- lineHeight: 1.4
- maxWidth: ~600px

### Project card container
- backgroundColor: rgb(26, 30, 30)
- display: grid
- gridTemplateColumns: 1fr 1fr (left: large mockup, right: thumbnail stack)
- OR: large mockup on left taking ~60%, thumbnail stack on right taking ~35%
- gap: 24px
- padding: 40px 24px
- alignItems: start

### Project mockup (main image, left)
- Large bordered image/mockup display
- Has orange corner brackets
- backgroundColor: rgb(211, 217, 217) (light gray bg inside)
- padding: 24px
- Image shows UI mockups of the actual product

### Project thumbnail stack (right side)
- Stack of 4-6 smaller thumbnails
- Each: ~200px wide, aspect ratio ~16:9 or square
- Has orange corner brackets on each
- Stacked vertically with ~8px gap

### Project text (below images on left or below main card)
- Category label: Geist Mono, 12px, 500w, orange (#E34C22), caps, -0.48px tracking
- Project title: Inter Display, 18-24px, 600-700w, white, -1px tracking
- Description: Geist Mono, 12-14px, 500w, muted gray (#5F6B6B or white), 1.5 line-height
- "↳ Case study" link: Geist Mono, 12px, 500w, white, arrow prefix

### Impact metrics row
- 3 metrics displayed horizontally
- Metric value: Inter Display, 32-48px, 700w, white
- Metric label: Geist Mono, 10-12px, 500w, muted gray, caps
- Examples: "+60% UPSELL REVENUE", "+40% CHECKOUT CONVERSION"

## Per-Project Content

### Project 1: Traffic Management Dashboard
- Category: implied by "SECURE DASHBOARD FOR TRAFFIC MANAGEMENT"
- Title: "SECURE DASHBOARD FOR TRAFFIC MANAGEMENT"
- Description: "A showcase of my Figma skills and product-driven design approach for a traffic management platform"
- Link: "↳ Case study"
- No impact metrics shown (or metrics not extracted)

### Project 2: Insurance Marketplace
- Category: implied
- Title: "GROWING REVENUE IN AN INSURANCE MARKETPLACE"
- Description: "How my design increased upsell revenue by 60% and checkout conversion by 40% with the simplest and most straightforward insurance-buying process available."
- Metrics: IMPACT +60% UPSELL REVENUE | +40% CHECKOUT CONVERSION | -30% ORDER FILLING TIME

### Project 3: Currency Exchange (Free → Paid)
- Title: "CONVERTING FREE USERS TO PAID"
- Description: "Currency exchange service redesign that led to a 70% increase in paid plan sales, even with a 50% price increase."
- Status: "Coming soon"
- Metrics: +70% MONTHLY REVENUE | +30% CTA ENGAGEMENT

### Project 4: Investment App
- Title: "LOWERING THE BARRIER TO INVEST"
- Description: "Designed an in-app tutorial and simplified the buy/sell flow to help novice investors understand basic trading concepts and feel confident placing their first trades."
- Metrics: +24% TRADE COMPLETION RATE | −31% DROP-OFF IN BUY/SELL FLOW | +18% AVERAGE TRANSACTIONS PER USER

## Quote Interstitials (verbatim)
1. "Where clarity, empathy, and business sense come together."
2. "Because when experiences feel right, results follow."
3. "Human-centered design for measurable growth."

## Assets
- Project images: /images/p1.jpg through /images/p21.jpg
- Project 1 (traffic): finance.ua-style UI — use p1-p5 range
- Project 2 (insurance): insurance marketplace UI — use p6-p11 range
- Project 3 (currency): exchange/fintech UI — use remaining
- Project 4 (invest): investment app UI

## Responsive Behavior
- **Desktop (1440px):** 2-column layout (mockup left, stack right)
- **Mobile (390px):** Single column, full-width images stacked
- **Breakpoint:** ~768px switches from 2-col to 1-col
