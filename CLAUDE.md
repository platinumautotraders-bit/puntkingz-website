# Punt Kingz Marketing Website

## Overview
Marketing website for Punt Kingz NRL — a sports prediction platform powered by Monte Carlo simulation. This is a separate project from the app itself.

- **App codebase**: `c:/Coding - Apps/Punt_Kingz_NRL/`
- **This website**: `D:/PuntKingz-Website/`
- **Purpose**: Sell the Punt Kingz NRL prediction subscription

## Tech Stack
- Next.js 15 (App Router) + TypeScript (strict)
- Tailwind CSS 4
- Framer Motion for animations
- Lucide React for icons
- Deployed to Vercel (when ready)

## Design System
- **Fonts**: Space Grotesk (headlines), DM Sans (body), JetBrains Mono (stats/numbers)
- **Backgrounds**: #050508 (primary), #0a0a0f (secondary), #0d1117 (cards)
- **Accent**: #00ff87 (electric green), #ffd700 (gold)
- **Text**: #e2e8f0 (primary), #7c8db0 (secondary), #3e4d68 (faint)
- **Cards**: Glassmorphism with backdrop-blur-12px
- See `globals.css` for full token definitions

## Pages
1. `/` — Landing page (Hero, StatsBar, HowItWorks, NotAI, AppPreview, Features, Pricing, FAQ)
2. `/how-it-works` — V6 engine deep dive
3. `/pricing` — Single plan: $29.90/week, 7-day trial
4. `/results` — Track record, round-by-round accuracy
5. `/about` — Creator story, philosophy, contact

## Key Copy Rules
- NEVER call this "AI" or "machine learning" — it's a Monte Carlo simulation engine
- Use: "Monte Carlo simulation", "mathematical modelling", "10,000 simulations"
- Lead with specific numbers: 43,000+ data points, 10,000 sims, 82% accuracy
- No emojis anywhere

## Component Architecture
- Shared: ScrollReveal, AnimatedCounter, SectionHeading, Button, Card
- Layout: Navbar (with sport selector), MobileMenu, Footer (with gambling disclaimer)
- Landing: Hero, HeroBackground (Canvas 2D), StatsBar, HowItWorks, NotAI, AppPreview, Features, Pricing, FAQ

## Running Locally
```bash
npm run dev    # Development server
npm run build  # Production build
```

## Deployment
Vercel. Do not deploy without confirmation.

### Changelog
- 2026-04-17: Initial build — 5 pages, full design system, animations, SEO
