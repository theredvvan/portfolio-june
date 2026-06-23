# Norell — Page Topology

Target: https://norelltemplate.framer.website/ · Design width 1440 (content max-width 1200px, nav 1296px) · Page height ~10479px
Smooth scroll: **Lenis** (`html.lenis`). Whole page light bg `#F5F5F5`, dark sections `#0A0A0A`.

| # | Section (data-framer-name) | ~top | h | bg | Interaction |
|---|---|---|---|---|---|
| — | Nav (fixed top) | 0 | 106 | #F5F5F5 | hamburger opens fullscreen menu overlay |
| 1 | Hero Area | 0 | 723 | dark portrait | static; ® + giant "norell" overlay portrait |
| 2 | Social Area | 723 | 66 | #F5F5F5 | static bar |
| 3 | Work Section | 789 | 1691 | #F5F5F5 | 2-col project grid, scroll reveal, hover zoom |
| 4 | Testimonial Section | 2480 | 868 | #F5F5F5 | static; big gray heading + quote |
| 5 | Service Section | 3348 | 862 | #0A0A0A | **click-driven** list → swaps right card |
| 6 | About Section | 4210 | 1223 | #F5F5F5 | scroll reveal + **count-up** stats |
| 7 | Video Section | 5433 | 723 | image | static play button ("Watch now") |
| 8 | Pricing Section | 6156 | 1101 | #FFFFFF | **click toggle** Per project/Monthly swaps prices |
| 9 | Award Section | 7257 | 964 | #F5F5F5 | table rows, hover |
| 10 | Blog Section | 8221 | 827 | #F5F5F5 | 3-card grid |
| 11 | Contact + Footer (Desktop) | 9048 | 905 | #0A0A0A then #F5F5F5 | form + footer |

Layout: single vertical flow, fixed nav overlay (light bg) on top, z-index nav above content. Menu overlay slides from top, full screen.
