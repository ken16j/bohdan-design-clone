# Behaviors — bohdan.design

## Global
- **Lenis smooth scroll**: `window.lenis` exists. Native scroll is replaced by Lenis. Page feels slightly decelerated/glided.
- **Magnetic cursor**: Nav elements (logo, LET'S TALK button) use Framer Magnet2 plugin. On hover, elements subtly follow the cursor. Parameters: `strength=0.05 speed=0.06 spring=0.08 friction=0.8` (logo) and `strength=0.5 speed=0.06 spring=0 friction=2` (button).
- **Parallax**: Some elements use Parallax_1 plugin for subtle depth scrolling.

## Navbar
- **Interaction model**: scroll-triggered + static
- Initially overlays hero. Always visible.
- On scroll: likely gains background / changes appearance
- "LET'S TALK" button: rectangular orange box, "+ LET'S TALK" in white mono caps
- Logo: "Bohdan Skrypka" in orange, Inter Display or similar

## Hero Section ("100vh")
- **Interaction model**: scroll-driven image sequence
- Background: `#D3D9D9`
- Huge white text "I make / tech / more / human" (Inter Display, weight 600, ~130px+, letter-spacing tight)
- Image sequence: 190 frames of person photo, plays as user scrolls
- Bottom-left corner: labeled box with orange bracket corners
  - Label: "BUILT TO PERFORM" (Geist Mono, orange)
  - Description: "A product designer shaping experiences users choose and competitors chase."
- Image: person standing/walking, cutout against gray bg, positioned right-center

## About/Details Section
- **Interaction model**: scroll-driven, sticky panels
- Three sticky text panels that appear/fade as user scrolls:
  - Panel 1 ("text1"): text about data-driven design
  - Panel 2 ("text2"): text about human-first design
  - Panel 3 ("text3"): text about smooth experiences
- Each panel has orange-tinted bg box `rgba(227, 76, 34, 0.08)` with orange bracket corners
- Panel keywords: "HUMAN FIRST", "SMOOTH EXPERIENCE" labels in orange mono
- Scroll trigger: each panel occupies ~1072px of scroll space, content sticks at ~426px from top

## Works Section
- **Interaction model**: largely static, with fade-in animations on scroll
- Background transitions: `#D3D9D9` (hero) → `#1A1E1E` (works)
- "SquaresGrey" and "SquaresBlack" elements suggest a checker/mosaic pattern transition

### Works Title / Marquee
- "Selected work" in huge orange Inter Display text
- Horizontal scroll or auto-scrolling marquee
- Background: `#781F06` (dark rust)

### Portfolio Grid
- Dark background `#1A1E1E`
- Masonry or CSS grid of thumbnails
- Orange corner brackets (L-shaped) on each thumbnail
- Project images: 462×462px thumbnails from framerusercontent CDN

### Project Case Studies (Projects section)
- Individual project showcases
- Each has: category label (Geist Mono caps), title (Inter Display), description, "↳ Case study" link
- Large mockup images on left, thumbnail stack on right
- Known projects:
  - "SECURE DASHBOARD FOR TRAFFIC MANAGEMENT" (finance.ua)
  - "GROWING REVENUE IN AN INSURANCE MARKETPLACE" (+60% upsell, +40% conversion)
  - "CONVERTING FREE USERS TO PAID" (+70% monthly revenue)
  - "LOWERING THE BARRIER TO INVEST" (+24% trade completion)

### Quote Interstitials
- Dark brownish sections between projects
- Orange text quotes in Inter Display:
  - "Where clarity, empathy, and business sense come together."
  - "Because when experiences feel right, results follow."
  - "Human-centered design for measurable growth."

## Contact Section
- **Interaction model**: static
- Background: `#781F06` (rust red)
- Heading: "Good design starts with a conversation" (Inter Display, large, rust/orange-ish text)
- Subtext: "When products feel right, people stay. Let's build an experience..."
- Form: 3 labeled fields (01 YOUR NAME, 02 YOUR EMAIL, 03 YOUR MESSAGE)
  - Orange borders, orange placeholder labels in Geist Mono
  - Send button: "↗ SEND MESSAGE"
- Footer links: HELLO@BOHDAN.DESIGN | LINKEDIN | CV

## Hover States
- "LET'S TALK" button: likely subtle scale or bg change on hover
- Portfolio thumbnails: possibly zoom or overlay on hover
- Project cards: may reveal more info on hover
- Footer links: underline or color shift
