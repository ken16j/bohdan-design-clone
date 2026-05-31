# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** first viewport (scroll 0)
- **Interaction model:** scroll-driven image sequence + static text

## DOM Structure
- Full viewport height section (100vh), background #D3D9D9
- Center: person image (scroll-driven frame sequence, positioned center-right)
- Large white text overlaid: "I make / tech / more / human" — 3 words per 2 lines
- Bottom-left corner: info box with orange corner brackets
  - Orange label "BUILT TO PERFORM" (Geist Mono, caps)
  - Description text (white Geist Mono)
  - Blurred avatar/small image (personal photo - blurred for privacy)

## Computed Styles

### Section container
- width: 100%
- height: 100vh
- position: relative
- backgroundColor: rgb(211, 217, 217)
- overflow: hidden
- display: flex
- alignItems: center

### Hero image (frame sequence)
- position: absolute
- width: ~880px (natural width of frames)
- height: auto
- left: 50%
- transform: translateX(-50%)
- top: 0
- objectFit: cover
- zIndex: 1
- Image is a person cutout (no background) on the gray bg

### Headline text "I make tech more human"
- fontFamily: "Inter Display", sans-serif
- fontWeight: 600
- fontSize: ~130-140px (computed: 133.6px at ~668px viewport, scales with vw)
- lineHeight: ~0.8 (106.88px / 133.6px)
- letterSpacing: -8px (tight, almost overlapping)
- color: rgb(255, 255, 255)
- position: absolute
- zIndex: 2
- The text spans: line1 "I make" / line2 "tech more" / line3 "human"
- Actually displayed as: the image sits behind, text wraps around the image concept

### Bottom-left info box
- position: absolute
- bottom: 24px
- left: 24px
- zIndex: 3
- padding: 16px
- backgroundColor: transparent (orange bracket border decoration only)
- Has 4 corner bracket elements (L-shapes in orange)

### Info box label
- fontFamily: "Geist Mono", monospace
- fontSize: 12px
- fontWeight: 500
- color: rgb(227, 76, 34)
- letterSpacing: -0.48px
- lineHeight: 12px
- textTransform: uppercase (implied from Geist Mono BUILT TO PERFORM)

### Info box description
- fontFamily: "Geist Mono", monospace
- fontSize: 12px
- fontWeight: 500
- color: rgb(255, 255, 255)
- lineHeight: 18px (or 1.5x)
- maxWidth: ~280px

## States & Behaviors

### Image sequence animation
- 190 frames at `/images/hero-sequence/001.webp` through `190.webp`
- Driven by scroll position within the hero section
- Frame = Math.floor((scrollY / sectionHeight) * 190)
- Implementation: useEffect scroll listener, update img src or canvas draw

### Text overlay
- Static — always visible
- Text appears layered with the person image (image is between bg and text visually)

## Assets
- Frame sequence: `/images/hero-sequence/001.webp` → `190.webp`
- Small blurred portrait (use placeholder or skip for privacy)

## Text Content (verbatim)
- Main heading: "I make tech more human"
- Label: "BUILT TO PERFORM"
- Description: "A product designer shaping experiences users choose and competitors chase."

## Responsive Behavior
- **Desktop (1440px):** Full width, image centered, text spans full width with huge font
- **Mobile (390px):** Smaller font size, image scales down, same layout intent
- Font size scales with viewport width: ~9vw at desktop
