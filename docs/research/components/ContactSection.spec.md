# ContactSection Specification

## Overview
- **Target file:** `src/components/ContactSection.tsx`
- **Screenshot:** scroll position ~9344px (bottom of page)
- **Interaction model:** static

## DOM Structure
Full-viewport rust/orange-red section with:
1. Large heading: "Good design starts with a conversation"
2. Subtext paragraph
3. Contact form: 3 fields (name, email, message) + send button
4. Footer row: email | LinkedIn | CV links

## Computed Styles

### Section container
- backgroundColor: rgb(120, 31, 6)
- width: 100%
- minHeight: 100vh
- padding: 80px 24px 40px 24px
- display: flex
- flexDirection: column
- justifyContent: space-between

### Heading "Good design starts with a conversation"
- fontFamily: "Inter Display", sans-serif
- fontWeight: 600
- fontSize: ~52-64px
- color: rgb(227, 76, 34)
- lineHeight: 1.1
- letterSpacing: -2px
- maxWidth: ~700px
- marginBottom: 24px

### Subtext
- fontFamily: "Inter Display", sans-serif
- fontWeight: 400
- fontSize: 16-18px
- color: rgb(227, 76, 34) (same hue, slightly more readable)
- lineHeight: 1.5
- maxWidth: ~700px
- marginBottom: 48px

### Form container
- display: flex
- flexDirection: column
- gap: 0 (fields are separated by borders, not gaps)
- border: 1.5px solid rgb(227, 76, 34) (outer border on whole form block)
- marginBottom: 24px

### Form field
- width: 100%
- padding: 20px 24px
- borderBottom: 1.5px solid rgb(227, 76, 34) (except last field)
- backgroundColor: transparent
- color: rgb(227, 76, 34)
- fontFamily: "Geist Mono", monospace
- fontSize: 12px
- fontWeight: 500
- letterSpacing: -0.48px
- outline: none
- &::placeholder / label: numbered prefix like "01 YOUR NAME", "02 YOUR EMAIL", "03 YOUR MESSAGE"

### Message field
- height: ~160px
- resize: none
- padding: 20px 24px

### Send button row
- border: 1.5px solid rgb(227, 76, 34) (part of form block, below message field)
- padding: 20px 24px
- display: flex
- justifyContent: center
- alignItems: center
- gap: 8px
- fontFamily: "Geist Mono", monospace
- fontSize: 12px
- fontWeight: 500
- color: rgb(227, 76, 34)
- letterSpacing: -0.48px
- cursor: pointer
- textTransform: uppercase
- Text: "↗ SEND MESSAGE"

### Footer row
- display: flex
- gap: 24-48px
- marginTop: auto
- paddingTop: 40px
- fontFamily: "Geist Mono", monospace
- fontSize: 12px
- fontWeight: 500
- color: rgb(227, 76, 34)
- letterSpacing: -0.48px

## States & Behaviors

### Form inputs focus
- No visible focus ring (borderColor change or glow on focus field)

### Submit hover
- Slight opacity change or color invert on hover

### Footer link hover
- Underline on hover

## Text Content (verbatim)
- Heading: "Good design starts with a conversation"
- Subtext: "When products feel right, people stay. Let's build an experience that lifts your metrics and earns your users' trust. Tell me what you're building — I'll help you make it shine."
- Field 1 placeholder: "01 YOUR NAME" (or label "Your name")
- Field 2 placeholder: "02 YOUR EMAIL" (or label "Your email")
- Field 3 placeholder: "03 YOUR MESSAGE" (or label "Your message")
- Button: "↗ SEND MESSAGE"
- Footer: "HELLO@BOHDAN.DESIGN" | "LINKEDIN" | "CV"

## Responsive Behavior
- **Desktop (1440px):** Wide form, footer links spread out
- **Mobile (390px):** Full-width form, same layout
- Heading font scales with viewport
