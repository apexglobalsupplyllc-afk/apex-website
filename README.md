# Apex Global Supply — Website

Single-page website for Apex Global Supply LLC, a veteran-owned wholesale and distribution partner bringing BLU Energy Drink to East Coast retailers.

## Project Structure

```
apex-website/
├── index.html              # Main HTML page
├── README.md               # This file
├── CLAUDE.md               # Guidance for Claude Code
├── .gitignore              # Files to exclude from version control
└── assets/
    ├── css/
    │   └── styles.css      # All site styles
    ├── js/
    │   └── main.js         # All site JavaScript
    └── images/
        ├── logo.png        # Apex Global Supply logo
        ├── classic.jpg     # BLU Classic can
        ├── watermelon.jpg  # BLU Watermelon can
        ├── cranberry.jpg   # BLU Cranberry can
        ├── grape.jpg       # BLU Grape can
        ├── blu-day.jpg     # BLU Day can
        ├── mojito.jpg      # BLU Mojito can
        └── sugar-free.jpg  # BLU Sugar Free can
```

## How to Preview Locally

The site uses external CSS/JS files, so opening `index.html` directly may have minor issues with some browsers due to file:// restrictions. Best to run a simple local server:

**Option 1: Python (built into Mac/Linux/Windows)**
```bash
cd apex-website
python3 -m http.server 8000
```
Then open http://localhost:8000 in your browser.

**Option 2: Node.js**
```bash
npx serve apex-website
```

**Option 3: VS Code Live Server extension**
Install the "Live Server" extension, right-click `index.html`, choose "Open with Live Server".

## Tech Stack

- **Pure HTML / CSS / JavaScript** — no framework, no build step
- Fonts loaded from Google Fonts (Anton, Space Grotesk, JetBrains Mono)
- All animations powered by IntersectionObserver — no animation libraries
- Form submissions currently show a success message but don't send anywhere yet (see CLAUDE.md for integration plan)

## Brand Colors

- `#0A0E1A` — Background navy (primary dark)
- `#070A14` — Background darker (alternate sections)
- `#3B7BC9` — Brand blue (primary action)
- `#1E4E8C` — Brand blue dark (hover state)
- `#5B9BD5` — Brand blue light (accents, highlights)

## Sections

1. Hero (logo, headline, CTAs)
2. Trust strip (4 credibility signals)
3. About BLU intro (story with timeline stats)
4. Why BLU / Inside the Can (B-vitamins, caffeine, ingredients)
5. Flavors grid (7 can cards)
6. Where to Buy (online + local + territory map)
7. Business With Us (lead capture form)
8. About (Apex story + BLU story)
9. Contact (email/phone/service area)
10. Final CTA + Footer

## Contact Info Currently in Site

- Email: apexglobalsupply.llc@gmail.com (TO BE UPDATED to professional address)
- Phone: 410-705-0922
- Service Area: Maryland and East Coast

## Deployment

Ready to deploy to:
- Cloudflare Pages (recommended — free, fastest)
- Netlify Drop (drag-and-drop)
- Vercel (free tier)
- Any static hosting

Just upload the entire `apex-website/` folder.
