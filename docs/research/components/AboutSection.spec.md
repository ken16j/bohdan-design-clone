# AboutSection Specification

## Overview
- **Target file:** `src/components/AboutSection.tsx`
- **Screenshot:** scroll position ~1200-2500px
- **Interaction model:** scroll-driven sticky panels (3 panels, each occupies ~1072px scroll space)

## DOM Structure
Container ~3217px tall, background #D3D9D9 (same as hero, seamless).
Three text panels stacked vertically. Each panel:
- Outer scroll container (~1072px tall)
- Inner sticky element (position: sticky, top: 33vh)
- Text box with orange bracket corners + content

## Computed Styles

### Outer section container
- width: 100%
- backgroundColor: rgb(211, 217, 217)
- display: flex
- flexDirection: column

### Per-panel scroll container
- height: 1072px
- position: relative

### Sticky inner
- position: sticky
- top: 426px (approx 33vh at 1300px viewport height... or ~66% down from top)
- height: 646px (100vh)
- display: flex
- alignItems: center
- justifyContent: flex-start
- paddingLeft: 24px

### Text box container
- position: relative
- width: ~322px (desktop) / ~270px (tablet)
- padding: 24px
- backgroundColor: rgba(227, 76, 34, 0.08)

### Text box label (e.g. "HUMAN FIRST")
- fontFamily: "Geist Mono", monospace
- fontSize: 12px
- fontWeight: 500
- color: rgb(227, 76, 34)
- letterSpacing: -0.48px
- textTransform: uppercase
- lineHeight: 12px
- marginBottom: 12px

### Text box body text
- fontFamily: "Geist Mono", monospace
- fontSize: 12px
- fontWeight: 500
- color: rgb(255, 255, 255)
- lineHeight: 18px

## States & Behaviors

### Scroll-sticky
- Each panel sticks in viewport as you scroll through its scroll container
- Next panel replaces previous via natural stacking
- **Trigger:** scroll within the 1072px container → sticky top: 426px
- **Implementation:** CSS `position: sticky` on inner elements

### Fade in animation
- Text boxes may fade/slide in as they become sticky
- Implementation: IntersectionObserver or scroll-based opacity

## Per-Panel Content

### Panel 1
- Label: "BUILT TO PERFORM" (may be continuation of hero concept)
- Body: text about data-driven designs, measurable results, meaningful connections
  - "tying digital products" → create data-driven designs that deliver measurable results meaningful connections.

### Panel 2 ("HUMAN FIRST")
- Label: "HUMAN FIRST"
- Body: "design with empathy make user experience feel natural frictionless people foolproof"

### Panel 3 ("SMOOTH EXPERIENCE")
- Label: "SMOOTH EXPERIENCE"
- Body: "effortless use, focus what truly matters. interfaces"

## Assets
- Corner bracket decorations (CSS only, no images)

## Text Content (verbatim from page)
Panel 1: "tying digital products create data-driven designs that deliver measurable results meaningful connections."
Panel 2 label: "HUMAN FIRST" — body: "design with empathy make user experience feel natural frictionless. people foolproof"
Panel 3 label: "SMOOTH EXPERIENCE" — body: "effortless use, focus what truly matters. interfaces"

## Responsive Behavior
- **Desktop (1440px):** Text box on left ~1/3 width, rest of viewport empty
- **Mobile (390px):** Text box same relative width, may be ~90% width
