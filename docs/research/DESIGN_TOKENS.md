# Norell — Design Tokens

## Colors
- `--bg-light`: #F5F5F5 (page bg, nav)
- `--bg-white`: #FFFFFF (pricing)
- `--bg-dark`: #0A0A0A (service, contact, menu, footer bottom bar)
- `--fg`: #0A0A0A (text on light)
- `--fg-on-dark`: #FFFFFF
- `--muted`: rgba(10,10,10,0.5) ~ #737373 (descriptions, captions on light)
- `--muted-dark`: ~#8A8A8A / dim white on dark; inactive service ≈ #3A3A3A
- `--accent`: #F9452D (red — numbers, Pro badge, accents)
- `--border`: rgba(10,10,10,0.1) dividers

## Typography — Inter (variable, 400/500/600)
- Body/links: 16px / weight 500 / lh 27.2px
- Hero overline (H5): 24px / 500 / lh 33.6 / ls -0.5px
- Giant "norell": ~446px @1440 ≈ clamp via 31vw / 500 / ls -6.97px
- Menu links / big nav (H3): 56px / 600 / lh 78.4 / ls -1.12px
- Section display headings (Let's find the right fit / Honors & achievements / Projects we're proud of): ~80px, weight ~600/500, ls negative
- Card titles (H4): 36px

## Spacing / layout
- Content max-width: 1200px; nav inner 1296px; side padding ~24px (px-6)
- Section vertical rhythm: large (~120px top/bottom typical)
- Border radius: cards/images ~16-20px; buttons pill (full); inputs ~12px

## Icons (in src/components/icons.tsx, inline SVG)
- RIcon (circled R, white) — hero
- ArrowUpRight (↗) — award rows, blog, socials; variants color via currentColor
- PlayIcon (triangle) — video
- PlusCircle / circled icon — section labels "About us", "From the journal"
- Hamburger / Close — nav
- Socials: simple text links (In, Tw, Fc abbreviations in social bar)

## Brand work logos (image files, white wordmarks)
work-studiolink-logo.svg, work-zentrox-logo.svg, work-corehue-logo.svg, work-elevana-logo.svg
