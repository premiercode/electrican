# Ampwell Electric (fictional): homepage design preview

Design preview prepared by Premier Code Inc.

Preview: https://electrician.premiercodeinc.com/

Ampwell Electric is a fictional company, invented to show Dallas–Fort Worth electricians what
their homepage could look like. The phone number, email, license number, prices, reviews and
company claims are samples. Trade, code and safety facts on the pages come from public sources
(EPA, DOE, CPSC, CDC/NIOSH, NFPA, TDLR, Oncor, CoServ).

## The three options

| Option | Concept | Link |
|---|---|---|
| Option A | High voltage: near-black and navy, electric-yellow accents, condensed type, a circuit trace that draws from the call button through every section | https://electrician.premiercodeinc.com/option-a/ |
| Option B | Clean and trusted: white, ink blue and copper, rounded type, a starting-price menu and a calm two-path hero | https://electrician.premiercodeinc.com/option-b/ |
| Option C | Schematic: a drafting-paper drawing set with a title block, a symbol legend for services and a panel-schedule emergency guide | https://electrician.premiercodeinc.com/option-c/ |

Switch between them with the Option A / B / C control at the bottom-left of every page.
Photo credits: https://electrician.premiercodeinc.com/credits.html

## Confirm with the client (every `<!-- PLACEHOLDER -->`)

Every item below is invented for the preview and must be replaced or confirmed before launch.
Each is marked in the HTML with a `<!-- PLACEHOLDER -->` comment.

| Item | Where |
|---|---|
| Company name (header wordmark, footer, title block) | A, B, C |
| Contractor license number `TECL 00000` (header, hero, footer, title block). Texas requires the real name and TECL number on all advertising (16 TAC §73.51(e)) | A, B, C |
| Phone (469) 555-0132 and email hello@example.com | A, B, C |
| 24/7 emergency line, and what 24/7 actually means | A, B, C |
| Same-day service when booked by noon | A, B, C |
| Starting prices: troubleshooting visit $99, surge protector $450, Level 2 EV charger $650, 200-amp panel upgrade $2,400 | A, B, C |
| "What changes the price" line (panel, distance, permit) | B |
| Upfront pricing promise ("you see the price before we start") | A, B, C |
| Licensed & insured, Master Electrician of record | A, B, C |
| Clean job sites | A, B, C |
| 1-year workmanship warranty | A, B, C |
| Financing available | A, B, C |
| "Based in Frisco" and the seven service-area cities | B (A and C list the cities) |
| All three reviews. They are written samples: replace with real, verifiable customer reviews, with no edits or filtering (FTC 16 CFR Part 465) | A, B, C |
| Photo credits: Pexels display names, and whether stock photos stay at all | A, B, C, credits.html |

## Remove at launch

- [ ] The option switcher: the block between `<!-- REMOVE AT LAUNCH: option switcher -->` and `<!-- /REMOVE AT LAUNCH -->` at the end of each option's `index.html`, plus each option's CSS reset for the switcher's padding (commented in `styles.css`).
- [ ] The two unused options, and the root `index.html` redirect (serve the chosen option at `/`).
- [ ] `<meta name="robots" content="noindex, nofollow">` on every page.
- [ ] The `Disallow: /` block in `robots.txt`.
- [ ] The "Design preview" bar and every "Sample" label, once the facts are real.
- [ ] The preview-only form handler: wire the form to a real endpoint with reCAPTCHA v3 (placeholder comment in each form) and keep the honeypot.

## Notes

- Static files, no build step. Each option has its own `index.html`, `styles.css` and `main.js`, and shares `assets/img/`.
- Forms never transmit anything. Submitting shows "Preview only. Nothing was sent."
- Images are royalty-free stock (Pexels and Pixabay), resized to WebP. None shows the client's work.
