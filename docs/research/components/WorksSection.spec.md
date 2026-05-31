# WorksSection Specification

## Overview
- **Target file:** `src/components/WorksSection.tsx`
- **Screenshot:** scroll position ~1300-2500px
- **Interaction model:** scroll-driven horizontal marquee + static portfolio grid

## DOM Structure
Dark section starting at ~y:2531. Contains:
1. Marquee title area with "Selected work" huge orange text on #781F06 rust background
2. Dark portfolio grid (#1A1E1E) with thumbnail images in square cells with orange corner brackets

## Computed Styles

### Section wrapper
- backgroundColor: rgb(26, 30, 30)
- width: 100%
- position: relative

### Marquee title area
- backgroundColor: rgb(120, 31, 6)
- height: 646px (100vh)
- overflow: hidden
- display: flex
- alignItems: center

### Marquee text
- fontFamily: "Inter Display", sans-serif
- fontWeight: 600
- fontSize: ~200px (fills viewport height proportionally)
- color: rgb(227, 76, 34)
- letterSpacing: -12px
- whiteSpace: nowrap
- Text content: "Selected work " (repeated)
- Animation: scrolls left continuously (marquee)

### Portfolio grid container
- backgroundColor: rgb(26, 30, 30)
- padding: 24px
- display: grid or flex
- gap: 2px (tight grid, near-seamless)

### Portfolio grid cells
- Each cell: square, ~462px natural image size
- position: relative (for corner brackets)
- overflow: hidden
- backgroundColor: rgb(26, 30, 30)

### Corner bracket overlays on each cell
- 4 corner L-shapes
- color: rgb(227, 76, 34)
- size: ~12px x 12px
- strokeWidth: 1.5px
- position: absolute at each corner

### Portfolio images
- objectFit: cover
- width: 100%
- height: 100%
- display: block

## States & Behaviors

### Marquee animation
- Continuous left scroll, no pause on hover
- Speed: ~20s per cycle
- Duplicated text for seamless loop: "Selected work  Selected work  " (2x)

### Grid fade in
- Images fade in as they enter viewport
- IntersectionObserver with subtle opacity transition

### Image hover
- Possible: slight scale(1.02) or brightness shift on hover
- transition: 0.3s ease

## Assets
Portfolio images (21 total):
- /images/p1.jpg through /images/p21.jpg (and p20.png)
All are 462×462px or 1524×1524px source images

## Text Content
- Marquee text: "Selected work" (repeating)
- No other text in grid (images only)

## Responsive Behavior
- **Desktop (1440px):** Grid of ~4-5 columns
- **Tablet (768px):** Grid of 2-3 columns
- **Mobile (390px):** Grid of 2 columns, images smaller
- Marquee font size scales with viewport
