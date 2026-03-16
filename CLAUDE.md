# ReportResults — AI Agent Reference

## What This Is
A shared reports host. Each research report is a standalone HTML page in `public/`.
The index page (`public/index.html`) lists all available reports as cards.

## Adding a New Report
1. Create `public/<report-name>.html` — match the dark theme of existing reports
2. **Always add a card to `public/index.html`** linking to the new report
3. Include a `← All Reports` back-navigation link at the top of the new page
4. Commit and push — Railway auto-deploys from main

## Structure
- `public/index.html` — report directory (cards linking to each report)
- `public/oil-report.html` — Oil Market Analysis, March 2026
- `public/ebayer-report.html` — Ebayer AI Listing Marketing Plan
- `server.js` — Express static file server
- `railway.toml` — Railway deploy config

## Stack
Node.js, Express, vanilla HTML/CSS/JS, Chart.js (CDN), Railway

## Railway
- URL: https://web-production-9232b.up.railway.app
- Auto-deploys on push to main

## Style Guide
- Dark theme (#0a0a0f background, #e0e0e0 text)
- Accent: gold (#c9a227) for headings, green (#4caf50) for positive indicators
- Font: system-ui or Georgia for body
- All pages must be mobile responsive
- Use Chart.js via CDN for any charts

## Rules
- ALWAYS update index.html when adding a new report page
- Never deploy without verifying the index links work
- Keep reports self-contained (no shared JS files to break across pages)
