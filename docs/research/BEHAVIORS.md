# Norell — Behaviors Bible

## Global
- **Lenis smooth scroll** active (`html.lenis`). Install `lenis`, init at root. Easing feels like default Lenis.
- Fixed nav, light bg `#F5F5F5`, height 106px, stays pinned. (Framer hides on scroll-down/shows on scroll-up; acceptable to keep it simply fixed/visible.)
- Many sections **fade/slide up on enter viewport** (opacity 0→1, translateY ~30px→0). Use IntersectionObserver, once.
- Headings that span two colors reveal a **word-by-word dark→gray gradient** (e.g. "Honors & achievements", "Projects we're proud of", "Journeys that Inspire us"): part black, part gray. Implemented as static two-tone text (first words dark, rest gray) — good enough visually.

## Nav / Menu
- Hamburger button (dark rounded square, white lines) top-right. Click → fullscreen overlay menu (dark) slides in with big links: Home, About, Work, Blog, Contact, 404 (56px). Icon morphs hamburger↔close. Build as toggle overlay.

## Hero
- Static. Centered overline H5 24px white. Giant "norell" P ~446px (≈31vw) white, weight 500, ls -6.97px, absolutely overlapping centered portrait. Circled ® (icon-r.svg) top-right area, white.

## Work Section
- 2-column grid of project cards (studiolink, zentrox, corehue, elevana). Each: rounded image + centered white brand logo overlay. Cards reveal on scroll. Hover: subtle image scale-up.

## Service Section (CLICK-DRIVEN — verified)
- Dark bg. Left: list of 4 items (Branding(01), Development(02), Motion(03), UI/UX Design(04)). Active item = white text + RED number `#F9452D`; inactive = dim gray (~#3a3a3a), with thin divider lines between. Clicking an item makes it active.
- Right: sticky card = image (rounded) + label + description for the active item. Switches with fade.
- Default active = Branding (01).

## About Section
- "(+) About us" label (circled plus icon). Big statement heading reveals on scroll. Portrait + supporting text.
- **Stats count-up** on scroll into view: 120+ / 75% / 8+ / 99% (animate 0→target). Each has caption.

## Video Section
- Full-bleed image (video-poster.png), centered white circular play button + "Watch now". Static (no actual video element on page).

## Pricing Section (CLICK TOGGLE — verified)
- White bg. Centered heading "Let's find the right fit". Toggle pill (light gray track, active = white rounded): "Per project" | "Monthly".
- Two cards: Basic (badge black pill) + Pro (badge red pill `#F9452D`). Prices swap:
  - Per project: Basic **$999** /Per Project · Pro **$4999** /month
  - Monthly: Basic **$799** /Per Project · Pro **$3999** /month
- Basic CTA = white button; Pro CTA = black button. Each card: price, /unit, plan badge, blurb, "Get in touch", feature list with check rows.

## Award Section
- "Honors & achievements" two-tone heading. Table rows: Year | Award | Org (gray) | ↗ arrow. Top divider + row dividers. Hover row.

## Blog Section
- "(+) From the journal" label. 3 cards: image (rounded) + category (small) + title. Slightly staggered.

## Contact + Footer
- Contact: dark bg, portrait on right half. Left white rounded card form: Your Name*, Email Address*, Message*, Submit (black). Right: "Get In Touch" huge white, phone, emails, social links (LinkedIn/X.com/Facebook) with ↗ + underline.
- Footer: light bg. Big "norell®" wordmark left. Right 3 link columns. Bottom dark bar: "© 2025 norell, Inc. All rights reserved." + Terms & Privacy.
