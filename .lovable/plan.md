# Coda-style Scroll Morph + Rotating Tabs (Second Hero Section)

A new section placed directly below the existing `<Hero />` on the Home page, cloning the two effects from coda.co's hero: a scroll-pinned curved band that morphs to fill the viewport, plus an auto-rotating pill tab switcher with a synced side card and a 3D glossy spiral blob centerpiece.

## Files

1. **New asset: `src/assets/spiral-blob-3d.png`** (generated via imagegen, premium quality, transparent PNG)
   - Glossy 3D spiral / twisted-torus blob in brand forest `#993c1d` with warm gold `#B8945A` rim light and soft ivory specular highlights, on a transparent background.
   - Used as a static high-fidelity render; we animate it with CSS transform (slow rotate + subtle float) so it feels alive without a heavy Lottie/Spline asset.

2. **New: `src/components/site/ScrollMorphHero.tsx`** — the section. Composed of:
   - **GSAP ScrollTrigger pin**: pins the section while the user scrolls a vertical distance (~120vh). During the pin, the inner "stage" animates:
     - The curved forest band grows from `~420px` tall with rounded top to full viewport height with `border-radius: 0`.
     - Concentric ivory arcs fade out as the band fills.
     - The pill + side card + spiral blob fade/scale in once the band is filled (second half of the scrub).
   - **Auto-rotating pill** built on top of the existing `SlideTabs` component (`src/components/ui/slide-tabs.tsx`). 4 tabs cycle every 3.5s; hovering a tab pauses the timer; clicking a tab pins it.
   - **Side card** (right of blob on desktop, below on mobile) with `framer-motion` `AnimatePresence` swapping title / 1-line description / "Learn more →" CTA in sync with the active tab. CTA links to `/services`.
   - **Spiral blob** centerpiece: the generated PNG inside a wrapper that:
     - rotates 360° over 24s (CSS `@keyframes spin`),
     - gently floats Y ±10px over 6s (framer-motion `animate`),
     - has a soft radial gold glow behind it (CSS `radial-gradient` + blur).
   - Tabs (defaults, confirmed):
     1. **Capacity Building** — Practical training that scales expertise across teams.
     2. **Leadership Development** — Executive coaching for visionary Ethiopian leaders.
     3. **Organizational Redesign** — Restructure for clarity, speed, and accountability.
     4. **Strategic Advisory** — Sector insight that turns strategy into execution.
   - `prefers-reduced-motion`: skip scrub + auto-rotate; render the "end state" statically (full forest band, blob visible, first tab active, no auto-cycle).

3. **Edit: `src/components/site/Home.tsx`**
   - Import `ScrollMorphHero`.
   - Insert `<Reveal><ScrollMorphHero /></Reveal>` immediately after `<Hero />` and before `<Mission />`.

## Technical notes

- **Deps already installed**: `gsap` (added with DotGrid), `framer-motion`, `lucide-react`. No new packages needed. ScrollTrigger ships in the main `gsap` package — registered with `gsap.registerPlugin(ScrollTrigger)` inside a `useEffect`. MorphSVG is not used (it's a paid Club GSAP plugin); we morph via animated `border-radius` + `height` on the band div, which matches the coda effect closely.
- **SSR safety**: all GSAP setup runs inside `useEffect` so it only executes in the browser; `ScrollTrigger.kill()` on cleanup.
- **Brand tokens only**: forest `var(--brand-forest)`, ivory `var(--brand-ivory)`, gold `var(--brand-gold)`, graphite `var(--brand-graphite)`. Pill reuses existing `SlideTabs` (already brand-themed).
- **No business logic changes** — purely a new presentation component + one import in Home.

## Out of scope

- No changes to the existing top `<Hero />` (DotGrid + headline + CTAs stay as-is).
- No new routes, no copy changes elsewhere, no nav changes.
