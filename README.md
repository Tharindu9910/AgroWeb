# Tharul Agro Products — Official Website

The official website for **Tharul Agro Products Pvt Ltd**, a Sri Lankan manufacturer and exporter of premium coconut coir substrates. Built with Next.js 14, TypeScript, and Tailwind CSS.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | GSAP (with SplitText, ScrollTrigger, TextPlugin) |
| Icons | Lucide React |
| Images | Next.js `<Image />` (optimized) |
| Font | Custom (Signika via `next/font`) |

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/your-org/tharul-agro-website.git
cd tharul-agro-website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## Project Structure

```
tharul-agro-website/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── page.tsx                # Home page
│   ├── about/
│   │   └── page.tsx            # About / Our Team page
│   ├── products/
│   │   └── [id]/
│   │       └── page.tsx        # Dynamic product detail page
│   └── contact/
│       └── page.tsx            # Contact page
│
├── components/
│   ├── Navbar.tsx              # Responsive navbar with mobile drawer
│   ├── Footer.tsx              # Full footer with top bar
│   ├── WhoWeAreSection.tsx     # Homepage — Who We Are section
│   ├── ProductCard.tsx         # Product card + 5-column grid
│   ├── ChooseSection.tsx       # Homepage — Choose What's Perfect section
│   ├── GlobalReachSection.tsx  # Homepage — Global Reach section
│   ├── ContactSection.tsx      # Contact form section
│   └── AboutTeamPage.tsx       # About page (hero + team cards)
│
├── constants/
│   └── index.ts                # All product data (5 products)
│
├── public/
│   ├── logo-tharul-agro.svg
│   ├── favicon.ico
│   ├── icons/                  # All SVG icons
│   ├── products/               # Product images
│   ├── team/                   # Team member portraits
│   └── gallery/                # Gallery images
│
└── types/                      # Shared TypeScript interfaces
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, who we are, products, features, global reach, contact CTA |
| `/about` | Leadership hero + team member cards |
| `/products/[id]` | Dynamic product detail page (hero, specs, why choose, bulk CTA) |
| `/contact` | Contact form page |

---

## Product Catalogue

Products are defined in `constants/index.ts`. Each product is accessed via its `id`:

| ID | Product Name |
|---|---|
| `coco-blocks` | Premium Coco Blocks |
| `open-top-bags` | Open Top Quick-Fill Bags |
| `grow-bags` | Premium Grow Bags |
| `coco-discs` | Coco Discs & Coins |
| `coco-chips` | Premium Coco Chips |

### Adding a New Product

1. Open `constants/index.ts`
2. Add a new object to the `PRODUCTS` array following the `Product` interface
3. Add product images to `public/products/`
4. The route `/products/[your-id]` is automatically available — no page file needed

```ts
{
  id: "new-product",
  badge: "Category Label",
  name: "Product",
  nameHighlight: "Name Here",
  description: "Short description shown in the hero.",
  images: ["/products/new-product-1.png"],
  gmgCertified: true,
  techSpecsSubtitle: "Subtitle for the specs section.",
  techSpecs: [
    { label: "Spec Label", value: "Spec value" },
  ],
  whyChoose: {
    title: "Why Choose Our Product?",
    items: [ /* 6 items */ ],
  },
  bulkInquiry: {
    phone: "+94 77 650 6029",
    ctaLabel: "Request Wholesale Quote",
  },
}
```

---

## Animations

This project uses **GSAP** for all animations.

### Required GSAP Plugins

```bash
npm install gsap
```

The following GSAP Club plugins are used (requires a GSAP Club membership):

- `SplitText` — line-by-line text reveal animations
- `ScrollTrigger` — scroll-based animation triggers
- `TextPlugin` — typewriter effect in the hero

Register plugins once at the top of each component that uses them:

```ts
gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);
```

### Animation Patterns Used

- **Hero typewriter** — cycles through product keywords with type/backspace loop
- **Scroll text reveal** — `SplitText` line split with `y: 110%` slide-up on scroll into view
- **Stagger reveals** — section content fades in with `stagger: 0.12` for natural flow

---

## Responsive Breakpoints

All components follow this breakpoint strategy:

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | `< 640px` | Single column, stacked |
| `sm` | `≥ 640px` | 2-column grids, side-by-side pairs |
| `lg` | `≥ 1024px` | Full desktop layout |
| `xl` | `≥ 1280px` | Max-width constrained, extra padding |

---


## Environment Variables

 create a `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

---
