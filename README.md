# 🦋 Butterfly

**The AI-powered business operating system** — a modern, animated marketing site built with Next.js.

Capture, nurture and close new leads into bookings, sales, reviews and repeat customers. UI inspired by AiSensy; content adapted from GoHighLevel.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v3** — custom design system (emerald brand + butterfly-gradient accents, glassmorphism)
- **Framer Motion** — scroll reveals, animated counters, marquees, layout-animated tabs, floating butterflies
- **lucide-react** — icons

Every "screenshot" is a real CSS/SVG mockup (no blank placeholder images): live CRM, chat, calendar, reputation, analytics, inbox, workflow-builder and import dashboards, plus device frames, charts and gradient avatars.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

## Structure

```
app/
  layout.tsx        # fonts (Inter + Sora), metadata
  page.tsx          # composes all sections
  globals.css       # design system, glass utilities, keyframes
  icon.svg          # butterfly favicon
components/
  brand/            # Logo, ButterflyMark (animated SVG)
  ui/               # Reveal, Counter, Marquee, Decor (orbs + flyers)
  mockups/          # Frames (browser/phone/avatar), Charts (donut/spark/bars/stars), Mockups
  sections/         # 16 page sections (Hero, Solution, Pricing, …)
lib/
  data.ts           # all copy/content (single source of truth)
  utils.ts          # cn() helper
tailwind.config.ts  # brand palette, gradients, animations
```

## Design tokens

- **Brand:** emerald `brand-500 #10b981`
- **Wing accents:** violet `#7c3aed`, fuchsia `#d946ef`, teal `#14b8a6`, sky `#0ea5e9`, amber `#f59e0b`
- **Gradients:** `bg-brand-gradient`, `bg-wing-gradient`, `bg-mesh-light`
- **Glass:** `.glass`, `.glass-card`, `.glass-dark`
- **Fonts:** Sora (display) + Inter (body)

Respects `prefers-reduced-motion`.
