# JuraganKambing.id — Design Direction

## Three Initial Approaches

### Approach 1 — Harvest Table
**Very Brief Intro:** A warm editorial catering identity that pairs deep Islamic green with cream paper textures, generous whitespace, and appetizing food photography. The emotional intent is dependable, generous, and family-oriented.

**Probability:** 0.03

### Approach 2 — Emerald Majlis
**Very Brief Intro:** A refined modern Islamic hospitality system using architectural framing, emerald fields, brass details, and asymmetrical editorial composition. The emotional intent is premium yet approachable, with a calm sense of order and amanah.

**Probability:** 0.07

### Approach 3 — Neon Night Market
**Very Brief Intro:** A dark, expressive food-event visual language with electric accents, high-contrast cards, and energetic motion. The emotional intent is celebratory and contemporary, but less suitable for the trust-heavy aqiqah and qurban audience.

**Probability:** 0.01

## Chosen Approach — Emerald Majlis

### Design Movement
Contemporary Islamic editorial design, informed by modern hospitality branding and quiet architectural minimalism rather than ornate decoration.

### Core Principles
1. **Trust before spectacle:** clear information, restrained claims, and visible service pathways take priority over decorative effects.
2. **Warm precision:** deep emerald, bone cream, muted brass, and natural brown create a premium but grounded atmosphere.
3. **Asymmetric hospitality:** content flows through split layouts, offset cards, framed images, and editorial bands rather than repetitive centered blocks.
4. **Conversion with dignity:** WhatsApp CTAs are prominent and easy to use, but integrated as helpful invitations rather than aggressive sales prompts.

### Color Philosophy
Deep emerald signals halal-minded care, calm, and dependability. Cream keeps the page welcoming and legible on mobile. Brass gold is reserved for emphasis and small moments of reward, while umber grounds the food and livestock story in natural materiality. The ownable signature color is **Juragan Emerald — #0E5A4A**.

### Layout Paradigm
A long-form editorial landing page with a sticky utility header, an offset hero composition, horizontal service navigation, split content bands, and alternating image/text rails. Sections should feel like rooms in a welcoming majlis: distinct, calm, and easy to navigate.

### Signature Elements
1. Fine brass rule lines and small numbered section labels.
2. Architectural image frames with clipped corners and subtle inset borders.
3. A recurring “Pesan dengan tenang” WhatsApp ribbon that anchors conversion without overwhelming the content.

### Interaction Philosophy
Interactions should feel like opening a well-made menu: direct, responsive, and reassuring. Buttons use short press feedback, cards lift gently on hover, and the mobile menu opens as a calm full-height drawer. Every service card carries a relevant WhatsApp message so the next step feels considered.

### Animation
Use 180–260ms ease-out transitions. Reveal image frames and section content with small upward movement and opacity only when motion is allowed. Stagger service cards by 40ms. Avoid looping animations except a subtle breathing accent on the floating WhatsApp control. Respect `prefers-reduced-motion` by removing non-essential transforms.

### Typography System
Use **DM Serif Display** for major editorial headlines and **Plus Jakarta Sans** for body copy, navigation, labels, and buttons. H1 is large and compact with restrained line-height; H2 uses a serif lead paired with a small uppercase eyebrow; body text remains 16–18px with generous line-height on mobile.

### Brand Essence
**JuraganKambing.id is the practical, trustworthy food partner for families, offices, and events across Tangerang Selatan—complete service, clear choices, and a warm human handoff to WhatsApp.**

Personality adjectives: **amanah, hangat, sigap**.

### Brand Voice
Headlines are confident and human. CTAs are direct but helpful. Microcopy explains what happens next and avoids inflated claims.

Example headline: “Sajian yang membuat acara terasa lebih siap.”

Example CTA line: “Ceritakan acaranya. Kami bantu pilihkan paket yang pas.”

### Wordmark & Logo
Use a compact symbol combining a stylized goat horn arc with a serving cloche silhouette, drawn as a bold emerald mark with a brass accent. The wordmark is set in an uppercase geometric sans with a distinctive dot separator in “JURAGANKAMBING.ID”; the symbol must remain recognizable without text and work as a favicon.

### Signature Brand Color
**Juragan Emerald — #0E5A4A**.

## Implementation Notes

All front-end files should preserve this design direction in a top-of-file comment. The website will use real service copy from the brief, clearly marked placeholders for unavailable business facts, a centralized WhatsApp number placeholder, and no fabricated reviews, ratings, certifications, addresses, or operating claims.

The first delivery focuses on a polished homepage with responsive navigation, service cards, package previews, FAQ accordion, local service areas, gallery placeholders using generated visuals, contact form behavior, schema-ready metadata, and WhatsApp conversion paths. Service routes can be represented as anchored sections until separate page content is supplied.

## Style Decisions

- Keep emerald as the visual anchor and brass as a restrained accent.
- Keep the homepage editorial and breathable; do not turn every service into a dense product grid.
- Make every CTA actionable through the same centralized WhatsApp helper.
- Use transparent placeholders only where the brief does not provide verified business facts.

## Style Decisions

Following the visual review, the first delivery strengthens the architectural language with brass inset image frames, offset service ribbons, and room-like content bands. The header and footer mark are enlarged so the goat-horn/cloche symbol reads as an independent brand asset. The recurring **“Pesan dengan tenang”** motif now appears in the hero and service/package pathways as a calm, branded conversion handoff rather than only as a standard button. The layout remains content-rich but uses editorial split sections to prevent the middle of the page from becoming a generic product catalog.
