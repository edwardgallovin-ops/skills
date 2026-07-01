# INFERNIS

Heavyweight-fabric hoodie storefront. Darkness, demons, ancient symbols — a red-and-black underworld aesthetic. Built with Next.js 16 (App Router), Tailwind CSS v4, and Framer Motion.

## What's here

- **Bilingual** (RU/EN) storefront with a language switcher, persisted per visitor.
- **Full shopping flow**: catalog with size filtering, product detail pages, a persistent cart (localStorage), and a checkout form.
- **Product art**: since no real product photography or logo was provided, each hoodie uses a generated SVG "sigil" on a dark gradient panel instead of a photo — swap `ProductVisual` (`src/components/ProductVisual.tsx`) for real photography when it's available.
- **Motion**: scroll-triggered reveals and hero animation via Framer Motion, respecting `prefers-reduced-motion`.
- **Content**: product copy, catalog data, and translations live in `src/lib/products.ts` and `src/lib/dictionaries.ts` — no CMS, just static data.

## Checkout is a demo

The checkout form simulates a payment (form → "processing" → success) and **does not charge a real card**. To go live, wire the `handleSubmit` logic in `src/app/checkout/page.tsx` to a real payment gateway (e.g. Stripe or a local processor like YooKassa) and move order handling to a real backend/API route.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```
