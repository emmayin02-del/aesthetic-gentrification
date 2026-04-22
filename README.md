# Aesthetic Cartography — Design System

**aesthetic-cartography**: Mapping the visual language of gentrification across Amsterdam, London, and Tokyo.

A master thesis visualization project — Media Studies, University of Amsterdam, 2026. Uses CLIP embeddings + UMAP to project 1,164 Airbnb and Instagram images into shared aesthetic space, revealing transnational convergences in the visual grammar of gentrification.

---

## Sources

| Source | Path / URL |
|--------|-----------|
| Visualization codebase | `vis data/index.html` (mounted local folder) |
| Galaxy data | `vis data/galaxy_data.json` |
| Network data | `vis data/network_data.json` |
| GitHub repo | https://github.com/emmayin02-del/aesthetic-cartography |
| Data credits | InsideAirbnb + Instagram via Zeeschuimer |

---

## Product Overview

**One product surface: a single-page data visualization web app.**

The app presents two interactive views:
1. **Galaxy View** — A UMAP scatter plot where each point is one image (Airbnb or Instagram), colored by neighborhood. Filterable by platform and neighborhood. Canvas-rendered with hover tooltips.
2. **Marker Co-occurrence Network** — A D3 force-directed graph where nodes are canonical visual markers (e.g. "exposed brick", "minimalist furniture"), connected by co-occurrence edges. Filterable by neighborhood.

Six neighborhoods across three cities:
- 🇳🇱 **Amsterdam**: De Pijp (`#d4886a`), Jordaan (`#d4a76a`)
- 🇬🇧 **London**: Shoreditch (`#7aa3c8`), Hackney (`#6a98b8`)
- 🇯🇵 **Tokyo**: Shimokitazawa (`#a8c87a`), Kiyosumi-Shirakawa (`#7ac896`)

---

## CONTENT FUNDAMENTALS

**Tone**: Quiet scholarly authority. Academic without being dry. Curious and methodical. The copy reads like a careful observer, not a polemicist — it presents findings rather than arguments.

**Voice**: Third-person analytical. No "I" or "you". Descriptions are precise and understated. Data speaks first; interpretation follows.

**Casing**: Title Case for section headers and eyebrows. Sentence case for body copy. ALL CAPS + letter-spacing for micro labels (nav tabs, legend items, stat labels) in JetBrains Mono. Neighborhood names use their proper local capitalization (De Pijp, Kiyosumi-Shirakawa).

**Length**: Extremely terse. Body copy is 1–2 sentences max. Hero subtitle is ≤ 40 words. Stats surface numbers, not prose.

**Vocabulary**: Prefers: *aesthetic*, *convergence*, *visual markers*, *annotation*, *neighborhood*, *transnational*, *projection*, *grammar*. Avoids buzzwords, marketing language, and superlatives.

**Emoji**: Not used anywhere in the UI — reserved only for internal documentation.

**Specific examples from the product**:
- Eyebrow: `"Media Studies × Computational Analysis"`
- H1: `"Aesthetic Cartography"`
- Subtitle: `"Mapping the visual language of gentrification across Amsterdam, London, and Tokyo — through 1,164 Airbnb and Instagram images, annotated by vision-language models and projected into shared aesthetic space."`
- Stat label: `"Images analysed"` (British English spelling)
- Section description: `"Nodes are canonical visual markers identified by VLM annotation. Edges connect markers that appear together in the same image."`

**British English**: Used throughout ("analysed", not "analyzed").

---

## VISUAL FOUNDATIONS

### Color System

**Base palette — dark academic**:
- Background `#0a0a0f` — near-black with a faint blue cast
- Surface `#13131a` — card/container background
- Surface-2 `#1a1a24` — elevated surface (tooltips, nested)
- Border `#2a2a3a` — subtle separator, always 1px
- Text `#e8e6e3` — warm off-white (not pure white)
- Text-dim `#8a8898` — secondary text, captions
- Text-muted `#5a5868` — micro labels, metadata
- Accent `#c8a882` — warm amber/sand; used sparingly on active states, display numerals, and italic display type

**Neighborhood palette — muted earth/jewel tones** (all slightly desaturated):
- De Pijp `#d4886a` — terracotta
- Jordaan `#d4a76a` — golden clay
- Shoreditch `#7aa3c8` — steel blue
- Hackney `#6a98b8` — slate blue
- Shimokitazawa `#a8c87a` — sage green
- Kiyosumi-Shirakawa `#7ac896` — mint teal

**Accent dim**: `rgba(200,168,130,0.15)` — used as active filter background.

### Typography

Three families, each with a distinct role:

| Family | Use | Weights |
|--------|-----|---------|
| **Playfair Display** | Display headlines, section H2s, stat numbers | 400 (roman + italic), 700 |
| **DM Sans** | Body copy, nav, tooltips, all prose | 300, 400, 500, 700 |
| **JetBrains Mono** | Eyebrows, micro labels, nav tabs, filter buttons, metadata | 300, 400 |

- Display size: `clamp(2.8rem, 6vw, 5.5rem)` with `line-height: 1.08`
- Stat numerals: `2.2rem` Playfair Display, accent color
- Body: `0.95–1.05rem`, `line-height: 1.6–1.65`
- Micro labels: `10–12px`, `letter-spacing: 1–4px`, uppercase

### Spacing & Layout

- Page padding: `0 8vw` (hero), `48px 4vw` (sections)
- Section max-width: `720px` (centered headers)
- Viz containers: `70vh` min-height, `500px` minimum
- Nav tabs: `18px 32px` padding
- Gap between stat items: `48px`
- Card/container border-radius: `6–8px`
- Filter pill border-radius: `999px` (fully rounded capsules)

### Backgrounds & Textures

No images, no textures. Pure dark backgrounds. The single decorative element is a **radial gradient glow**:
```css
background: radial-gradient(ellipse, rgba(200,168,130,0.06) 0%, transparent 70%);
```
Positioned top-right, `60vw × 60vw`, pointer-events none. Extremely subtle — barely visible. No other background decoration.

### Animation

- Entry: `fadeUp` — `opacity: 0 → 1` + `translateY(20px → 0)`, `0.8s ease`, staggered delays (0.2s increments)
- Scroll indicator: `scrollPulse` — opacity 0.3 → 0.8, `2s ease infinite`
- Transitions: `0.2–0.3s ease` on hover states
- No bounces, no spring physics. Smooth, unhurried fades only.
- D3 force simulation for the network graph (physics-based, not CSS)

### Hover & Press States

- Nav tabs: `color → text-dim` on hover; `color: accent + border-bottom: accent` when active
- Filter buttons: `border-color → text-dim, color → text` on hover; `background: accent-dim, border: accent, color: accent` when active
- Network nodes: draggable (D3 drag behavior); color interpolated from surface to accent by frequency
- No scale transforms, no shadow changes on hover. Pure color transitions.

### Borders & Shadows

- **Borders**: Always `1px solid var(--border)` (`#2a2a3a`). Never thicker. Used on containers, nav, footer.
- **Shadows**: None. The dark background makes shadows invisible and they aren't used.
- Sticky nav uses `backdrop-filter: blur(12px)` with semi-transparent background `rgba(10,10,15,0.92)`.

### Corner Radii

- Viz containers (galaxy, network): `border-radius: 8px`
- Tooltips: `border-radius: 6px`
- Filter pills: `border-radius: 999px`
- Nav: no radius (full-width bar)

### Cards / Tooltips

Tooltips are the only "card" pattern:
- Background: `rgba(19,19,26,0.95)` (surface-2, near-opaque)
- Border: `1px solid var(--border)`
- Padding: `12px 16px`
- Border-radius: `6px`
- Font: 12px DM Sans body; 10px JetBrains Mono uppercase for the neighborhood label
- Neighborhood label colored with its neighborhood hue
- Platform shown in text-muted, 10px

### Imagery

No photography or illustration in the interface itself. The "imagery" is the data — colored points on a canvas and SVG nodes. Color of imagery (if any were used) would favor cool, desaturated, slightly dark tones to match the palette.

### Iconography

See ICONOGRAPHY section below.

---

## ICONOGRAPHY

**No icon library or font is used.** The project has zero icons in the traditional sense.

Visual markers are represented as:
- Colored dots (CSS `border-radius: 50%`) in the galaxy legend
- D3 `<circle>` nodes in the network graph
- Text strings in tooltips and filter buttons

The only "icon-adjacent" element is the scroll indicator — a 1px wide, 40px tall vertical line (a CSS `::after` pseudo-element on `.hero-scroll`), animated with `scrollPulse`.

No SVG icons, no PNG icons, no emoji, no Unicode symbols used as icons.

---

## File Index

```
README.md                        — This file
SKILL.md                         — Agent skill definition
colors_and_type.css              — CSS custom properties for all tokens
assets/                          — Brand assets (none in source; see below)
preview/                         — Design system card previews
  colors-base.html               — Base dark palette swatches
  colors-neighborhoods.html      — Neighborhood color palette
  colors-semantic.html           — Semantic color roles
  type-display.html              — Playfair Display specimens
  type-body.html                 — DM Sans specimens
  type-mono.html                 — JetBrains Mono specimens
  type-scale.html                — Full type scale in use
  spacing-tokens.html            — Spacing + border-radius + border tokens
  components-nav.html            — Nav tab component
  components-filters.html        — Filter pill component
  components-tooltip.html        — Tooltip card component
  components-stat.html           — Hero stat component
  components-hero.html           — Hero section
ui_kits/
  visualization/
    README.md
    index.html                   — Interactive UI kit prototype
    Hero.jsx
    Nav.jsx
    FilterBar.jsx
    Tooltip.jsx
    Footer.jsx
```
