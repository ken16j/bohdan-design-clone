# Page Topology — bohdan.design

## Overall Layout
- Single-page, vertical scroll (~9990px total)
- **Smooth scroll**: Lenis (window.lenis exists)
- **Magnetic cursor**: Magnet2 plugin on nav elements
- **Parallax**: Parallax_1 plugin on selected elements
- Page-level background: starts `#D3D9D9` (light gray hero), transitions to `#1A1E1E` (dark works section), ends `#781F06` (rust contact)

## Sections (top to bottom)

| # | Name | y-start | Height | BG | Interaction |
|---|------|---------|--------|----|-------------|
| 1 | **Navbar** | fixed overlay | ~56px | transparent → `#0C0D0D` on scroll | scroll-triggered |
| 2 | **Hero** | 0 | ~646px (100vh) | `#D3D9D9` | image sequence scroll-driven |
| 3 | **About/Details** | ~648 | ~3218px | `#D3D9D9` | scroll-driven sticky panels |
| 4 | **Works Section** | ~2531 | ~6813px | `#1A1E1E` over `#781F06` | static |
| 4a | Works Marquee/Title | 2531 | ~646px | `#781F06` | scroll-driven horizontal marquee |
| 4b | Portfolio Grid | ~3100 | ~2950px | `#1A1E1E` | static |
| 4c | Project Case Studies | ~5100 | ~3600px | `#1A1E1E` | static |
| 5 | **Contact/Footer** | ~9344 | ~646px | `#781F06` | static |

## Fixed/Sticky Overlays
- **Navbar**: Fixed top, full width, z-index above all content
  - Left: "Bohdan Skrypka" orange text
  - Right: "+ LET'S TALK" orange button rectangle

## Color Palette
- `#D3D9D9` = `rgb(211, 217, 217)` — Hero background (cool light gray)
- `#1A1E1E` = `rgb(26, 30, 30)` — Works dark background
- `#781F06` = `rgb(120, 31, 6)` — Rust/Contact background + Works title
- `#E34C22` = `rgb(227, 76, 34)` — Primary accent (orange)
- `rgba(227, 76, 34, 0.08)` — Text box tint background
- `#0C0D0D` = `rgb(12, 13, 13)` — Near-black (nav bg on scroll)
- `#5F6B6B` = `rgb(95, 107, 107)` — Muted gray text
- `#858E8E` = `rgb(133, 142, 142)` — Fade/transition gray

## Fonts
- **Inter Display** (woff2 from framerusercontent.com/assets/) — all big headings, hero text, section titles
  - Weights: 400, 500, 600, 700, 900
- **Geist Mono** (Google Fonts) — labels, small caps text, monospace elements
  - Weights: 400, 500, 600, 900
- **Fragment Mono** (Google Fonts) — possibly some label text
  - Weight: 400

## Image Assets
- **Hero**: 190-frame image sequence at `https://bgdnskrpk.github.io/img-sequence/frames010/001.webp` → `190.webp`
- **Portfolio thumbnails**: 21 images from framerusercontent.com/images/
- **Logo/favicon**: `https://framerusercontent.com/images/CF3bC9T8cE71CK8E4bUPfEugs.png`
