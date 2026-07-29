# OnRise Storefront

A warm, editorial home-decor & furniture storefront — calm, hill-inspired pieces
from the (fictional) hills of Darjeeling. Built from the `OnRise Storefront` design
handoff as a **high-fidelity** recreation in a real codebase.

**Stack:** Next.js 14 (App Router) · React 18 · TypeScript. Design tokens, type scale,
spacing, radii, shadows, motion and copy are ported directly from the handoff.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Routes

| Route | Screen |
|---|---|
| `/` | Home — hero, latest looks, sale banner, favorites, story, rooms, redesign CTA, testimonials, inspiration mosaic, reels strip, FAQ |
| `/shop` | Product grid with client-side category filter (`?cat=`) |
| `/product/[slug]` | Product detail — gallery, info, delivery notes, related |
| `/checkout` | Checkout (active / empty / order-placed confirmation) |
| `/account` | Tabbed account (`?tab=`): overview, orders, wishlist, reels, addresses, settings |
| `/auth` | Sign in / create account |
| `/reset` | Password reset (form → sent) |
| `/gift` | Gift cards with live card preview |
| `/sale` | Live countdown + discounted grid |
| `/tracking` | Order lookup → tracked timeline |
| `/about` | Brand story, values, process, team |
| `/contact` | Contact methods + message form |

## Architecture

- `src/lib/data.ts` — catalog, collections, reviews, orders, addresses and copy
  (realistic placeholders, to be replaced by real API data).
- `src/lib/store.tsx` — global React context: cart (persisted to `localStorage`),
  cart drawer, search overlay, mobile nav, account menu, session, add-to-cart toast.
- `src/lib/nav.ts` — maps the prototype's `go(page, opts)` onto real routes/URLs.
- `src/components/` — global chrome (`Header`, `Footer`, `CartDrawer`, `SearchOverlay`,
  `MobileNav`, `MobileTabBar`, `Toast`) and shared UI (`ProductCard`, `Placeholder`, `icons`).
- `src/app/` — one route per screen; `globals.css` holds design tokens, keyframes,
  the single 760px responsive breakpoint and hover utilities.

## Design tokens

Colours (sage/forest on cream & sand), typography (`Marcellus` display + `Hanken
Grotesk` UI), spacing and elevation live as CSS custom properties in
`src/app/globals.css`. The single responsive breakpoint is **760px**.

## Not final (per the handoff)

- **Imagery** — all photography is intentionally stripped out. Every image area is a
  sized `Placeholder` (`#EAE0CD`) annotated via `data-img` / `data-img-fit`; swap for a
  real image component keeping the container aspect ratio, radius and `overflow: hidden`.
- **Data** — products, prices, reviews, orders and addresses are placeholders.
- Auth is not a real session; forms have no server wiring yet. Add validation, Esc-to-close
  and focus trapping on overlays for production.
