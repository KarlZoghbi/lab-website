# Assets needed from the client

Every photo on the live preview right now is a **generated placeholder**
(a soft magenta/violet gradient, tagged "Sample photo" in the corner) — there
are no external images and no lorem-ipsum copy. Drop real files into the
paths below and each one is picked up automatically; no other code changes
needed.

## 1. Logo — done

`lab-logo.webp` is in place and wired into the navbar and footer via
[`src/components/Logo.tsx`](../../src/components/Logo.tsx). Its source has a
solid black background rather than a transparent one, so the component uses
`mix-blend-mode: screen` to drop the black out — that only works cleanly on
dark surfaces, which is why the logo stays on the header/footer's dark
background. If a transparent-background export becomes available later, swap
the blend-mode trick for a plain `<img>`.

## 2. Founder portrait

- `public/assets/founder.jpg` (or `.webp`) — portrait of Dany Attieh for the
  About section.
- Then set `founderPortrait` in [`src/content/imageSlots.ts`](../../src/content/imageSlots.ts)
  to `"/assets/founder.jpg"`.

## 3. Hero marquee (8 images)

- `public/assets/hero/hero-1.jpg` through `hero-8.jpg` — the scrolling strip
  under the hero headline. Portrait crops (roughly 4:5) work best.
- Then fill in the matching entries in the `heroMarqueeImages` array in
  [`src/content/imageSlots.ts`](../../src/content/imageSlots.ts), in order.

## 4. Course photos (11 images)

One photo per course, named to match its slug:

- `public/assets/courses/barbering.jpg`
- `public/assets/courses/hair-artistry.jpg`
- `public/assets/courses/face-tattoo.jpg`
- `public/assets/courses/lashes-extension.jpg`
- `public/assets/courses/lash-lifting.jpg`
- `public/assets/courses/make-up.jpg`
- `public/assets/courses/body-tattoo.jpg`
- `public/assets/courses/special-effects.jpg`
- `public/assets/courses/skin-care.jpg`
- `public/assets/courses/nail-course.jpg`
- `public/assets/courses/organic-course.jpg`

Then set the matching course's `img` field in
[`src/content/content.ts`](../../src/content/content.ts) to
`"/assets/courses/<slug>.jpg"`. These photos are used both on the course
carousel cards and the course detail pages.

## Favicon

`public/favicon.svg` is a simple placeholder monogram (dark tile, magenta
"L"). Replace with a real favicon whenever one's ready.
