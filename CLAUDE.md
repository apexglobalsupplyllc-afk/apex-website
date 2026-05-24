# Project Guidance for Claude Code

This file gives Claude Code the context it needs to continue working on the Apex Global Supply website effectively.

## Project Overview

This is a single-page marketing website for **Apex Global Supply LLC**, a veteran-owned wholesale and distribution partner for **BLU Energy Drink** in Maryland and the East Coast. The site serves two audiences simultaneously: B2B (convenience stores, gas stations, distributors) and B2C (consumers buying via Amazon).

**Important positioning:** Apex is a regional distributor, NOT the national BLU brand owner. Copy must never claim ownership of BLU, only partnership/distribution.

## Tech Stack

- Pure HTML, CSS, and JavaScript (no framework, no build step)
- Mobile-first responsive design
- IntersectionObserver for scroll animations
- Google Fonts: Anton (display), Space Grotesk (body), JetBrains Mono (technical)

## File Organization

- `index.html` — Single HTML page with all sections
- `assets/css/styles.css` — All styles, organized top-to-bottom by section
- `assets/js/main.js` — All JavaScript (header scroll, mobile menu, flavor grid generation, scroll reveal animations, counter animations, form handling, structured data)
- `assets/images/` — Logo + 7 BLU can images

## Brand Constraints

**Colors (do not introduce new accent colors without discussion):**
- `#0A0E1A` — Primary background navy
- `#070A14` — Alternate section background
- `#050810` — Footer darkest
- `#3B7BC9` — Brand blue (primary CTAs)
- `#1E4E8C` — Brand blue dark (hover)
- `#5B9BD5` — Brand blue light (accents)

**Typography:**
- Display: Anton (uppercase headlines)
- Body: Space Grotesk
- Technical labels: JetBrains Mono (used for "// LABEL" tags and stats)

**Tone:**
- Confident, clean, modern, direct
- Premium but not overhyped
- Retail-ready and professional
- NOT cheesy, slangy, or extreme

## Legal/Copy Guardrails (CRITICAL)

The following are non-negotiable:

- **Never** claim Apex owns BLU nationally or in the US
- **Never** say "FDA approved" — the FDA does not approve individual food products
- **Never** make medical, treatment, performance, or disease claims
- **Never** mention kosher, halal, or any certification without verified documentation
- **Never** invent retailer logos, testimonials, certifications, or sales numbers
- **Never** hardcode consumer pricing
- The trademark notice in the footer must remain
- The responsible consumption disclaimer must remain

## Open Tasks (Reference Apex Launch Checklist PDF)

Tasks that may be requested in future sessions:

1. ~~**Update professional email**~~ — Done. All instances updated to `contact@apexglobalsupply.co`.

2. **Wire up form submissions** — The business inquiry form (in the `#business` section) currently shows a fake success message. Replace with real submission to Formspree or Web3Forms endpoint. Add a honeypot field for spam protection.

3. **Add Privacy Policy and Terms pages** — Create `privacy.html` and `terms.html` as separate pages, link from footer. Use same styles.

4. **Add Google Analytics** — Insert GA4 tracking code in `<head>` of index.html. Configure event tracking for form submissions and Amazon clicks.

5. **Add cookie consent banner** — Lightweight GDPR-compliant banner, ideally without third-party dependencies.

6. **Add Amazon product URLs** — In `assets/js/main.js`, the `flavors` array has placeholder URLs. Replace with real Amazon links as products go live. When a URL is real, the button text should update from "Coming Soon On Amazon" to "Buy on Amazon".

7. **Add retail partner logos** — Build a new "Featured Retail Partners" section to display logos as Apex signs accounts. Section infrastructure ready in the CSS pattern.

## Animation Philosophy

The site uses **restrained, premium animations**:
- Sections fade up + slide in on scroll (via `.reveal` class + IntersectionObserver)
- Sibling elements stagger automatically (80ms apart)
- Number counters animate from 0 with ease-out cubic
- Hover states are subtle: color shifts, slight transforms

**DO NOT add:** spinning text, bouncing elements, page flips, zoom-from-offscreen, parallax that breaks on mobile, particle effects, or anything that feels "Looney Tunes." This is a premium B2B brand.

## Code Style Preferences

- Two-space indentation
- Use existing CSS custom properties (`--bg`, `--blue`, `--blue-dark`, `--blue-light`, `--white`) — defined in `:root`
- Keep CSS organized by section in the same order as HTML
- For JS, prefer plain DOM APIs over libraries
- Accessibility matters: keep semantic HTML, alt text on all images, aria-labels on icon-only buttons, respect `prefers-reduced-motion`

## What's Working Well (Don't Break)

- Mobile responsiveness across all sections
- Sticky header with scroll-darken effect
- Mobile menu hamburger
- Flavor grid auto-generated from JS array
- Scroll reveal animations
- Number counter animations
- Form success state
- SEO meta tags + structured data (LocalBusiness schema)

## Common Tweaks Likely To Be Requested

- Updating copy in any section
- Swapping an image
- Adjusting colors slightly
- Adding a new section
- Improving form fields
- Tweaking animation timing
- Adding a phone number, address, or contact method

## Deployment

The site is static and can be hosted anywhere. Recommended deployment is Cloudflare Pages (free, fast, global CDN). Just upload the project folder.

## Owner Context

- Business: Apex Global Supply LLC
- Owner: Veteran, Maryland-based
- Primary product line: BLU Energy Drink (7 flavors)
- Current email: contact@apexglobalsupply.co
- Current phone: 410-705-0922
- Target territory: Maryland (HQ), Virginia, Delaware, D.C., Pennsylvania, New Jersey

## When in Doubt

Refer to the **Apex Launch Checklist PDF** which documents the launch roadmap and pending tweaks in detail. Ask the user before making structural changes; small tweaks (copy, colors, spacing) can usually proceed directly.
