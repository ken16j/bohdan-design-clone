# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Screenshot:** hero top-left/top-right area visible in all screenshots
- **Interaction model:** fixed overlay, scroll-triggered bg

## DOM Structure
Fixed overlay at top of page, full width.
- Left: "Bohdan Skrypka" text (orange, Inter Display)
- Right: "+ LET'S TALK" rectangular button (orange bg, white text, Geist Mono caps)
- No middle content

## Computed Styles

### Container (nav wrapper)
- position: fixed
- top: 0
- left: 0
- right: 0
- width: 100%
- display: flex
- justifyContent: space-between
- alignItems: flex-start
- zIndex: 100
- backgroundColor: transparent (initially), rgb(12, 13, 13) on scroll
- padding: 0

### Logo "Bohdan Skrypka"
- fontFamily: "Inter Display", sans-serif
- fontSize: ~16px
- fontWeight: 600
- color: rgb(227, 76, 34) — orange always
- letterSpacing: -0.3px
- padding: 20px 24px
- cursor: pointer

### "LET'S TALK" button
- fontFamily: "Geist Mono", monospace
- fontSize: 12px
- fontWeight: 500
- letterSpacing: -0.48px
- color: rgb(255, 255, 255)
- backgroundColor: rgb(227, 76, 34)
- padding: 20px 28px
- display: flex
- alignItems: center
- gap: 8px
- cursor: pointer
- textTransform: uppercase
- The "+" is a separate character/icon before the text

## States & Behaviors

### Scroll-triggered background
- **Trigger:** scroll past ~50px
- **State A (before):** backgroundColor: transparent
- **State B (after):** backgroundColor: rgb(12, 13, 13)
- **Transition:** transition: background-color 0.3s ease
- **Implementation:** scroll listener in useEffect

### Hover states
- LET'S TALK: slight darken on hover, transform: none

## Text Content (verbatim)
- Logo: "Bohdan Skrypka"
- Button: "+ LET'S TALK"

## Responsive Behavior
- **Desktop (1440px):** flex row, both items at top corners
- **Mobile (390px):** same layout but potentially smaller padding
- Both items always visible
