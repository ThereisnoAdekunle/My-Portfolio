# Web3godVater Portfolio 🐍⚡

> **The legendary portfolio of Web3godVater (Ø,G)** — a cinematic, hyper-modern Web3 × AI × Python portfolio built with Next.js 15, Framer Motion, and a ferocious commitment to legendary design.

---

## ✨ Features

- **Next.js 15** (App Router, Server Actions, Turbopack)
- **Cinematic Animations** — Framer Motion scroll-triggered reveals, typewriter, glitch effects
- **Custom Canvas** — Animated Python snake + neural network hero, background particle neural nodes
- **3D Business Card** — Interactive CSS 3D perspective + canvas animation
- **NFT Minting Flow** — Confetti explosion + success modal with Crossmint/Thirdweb placeholder integration
- **Custom Cursor** — Neon cyan ring cursor with magnetic expand on hover
- **Easter Egg** — Type "python" anywhere to unleash the snake 🐍
- **Auto-Scrolling Testimonials** — Infinite CSS carousel
- **Glassmorphism Design System** — Heavy blur, neon borders, glowing cards
- **PWA Ready** — Manifest + meta tags
- **SEO Optimized** — Open Graph, Twitter Card, JSON-LD structured data
- **Lighthouse 90+** — Optimized fonts, images, and animation performance
- **Filterable Projects Grid** — Animated modal with tech stack details
- **Neon Timeline** — Alternating experience layout
- **Beautiful 404** — Lost snake page

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17+ or Node 20+
- npm 9+ or pnpm 8+

### Install & Run

```bash
# Clone / unzip the project
cd web3godvater-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
web3godvater/
├── app/
│   ├── layout.tsx          # Root layout with meta, fonts, JSON-LD
│   ├── page.tsx            # Main page — assembles all sections
│   ├── globals.css         # Full design system (variables, glassmorphism, animations)
│   └── not-found.tsx       # Custom 404 with animated lost snake
├── components/
│   ├── BackgroundCanvas.tsx # Neural network particle system
│   ├── Cursor.tsx           # Custom neon ring cursor
│   ├── EasterEgg.tsx        # "python" keyword snake easter egg
│   ├── LoadingScreen.tsx    # Cinematic loading screen
│   ├── Navbar.tsx           # Glassmorphic sticky nav + mobile drawer
│   ├── Hero.tsx             # Full-viewport hero with canvas snake + typewriter
│   ├── About.tsx            # Two-column bio with futuristic avatar
│   ├── Skills.tsx           # 6-card grid with animated progress bars
│   ├── Projects.tsx         # Filterable grid + modal
│   ├── Experience.tsx       # Vertical neon timeline
│   ├── Insights.tsx         # Thought leadership blog cards
│   ├── MintCard.tsx         # 🌟 STAR FEATURE — 3D NFT card + minting flow
│   ├── Testimonials.tsx     # Auto-scrolling infinite carousel
│   ├── Contact.tsx          # Form + social links
│   └── Footer.tsx           # Full footer with nav tree
├── public/
│   └── manifest.json        # PWA manifest
├── tailwind.config.ts        # Full custom neon design system
├── next.config.ts            # Image optimization, security headers
└── package.json
```

---

## 🌐 Deploy to Vercel (Recommended — 2 minutes)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. **Framework Preset**: Next.js (auto-detected)
5. Click **Deploy**

Done. Your portfolio is live! 🎉

### Environment Variables (for real integrations)

Create `.env.local`:

```env
# Thirdweb (for real NFT minting)
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your_thirdweb_client_id

# Crossmint (for email wallet NFT delivery)
NEXT_PUBLIC_CROSSMINT_CLIENT_ID=your_crossmint_client_id

# Email service (for contact form)
SENDGRID_API_KEY=your_sendgrid_key
CONTACT_EMAIL=your@email.com

# Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
```

---

## 🎴 Activating Real NFT Minting

### Option A: Thirdweb (Recommended)

```bash
npm install @thirdweb-dev/react @thirdweb-dev/sdk
```

In `MintCard.tsx`, replace the mock handler:

```tsx
import { useSDK } from "@thirdweb-dev/react";

const sdk = useSDK();

const handleMint = async (e: FormEvent) => {
  e.preventDefault();

  // Deploy your NFT contract first:
  // const contract = await sdk.deployer.deployNFTCollection({...})

  const contract = await sdk.getContract("YOUR_CONTRACT_ADDRESS");

  // Mint to wallet
  if (wallet) {
    await contract.erc721.mintTo(wallet, {
      name: "Web3godVater Digital Business Card",
      description: "The legendary digital business card of Web3godVater (Ø,G)",
      image: "ipfs://YOUR_NFT_IMAGE_CID",
      attributes: [
        { trait_type: "Edition", value: "Genesis" },
        { trait_type: "Skills", value: "Solidity, AI/ML, Python, Frontend, Content, Social" },
        { trait_type: "Location", value: "Lagos, Nigeria" },
        { trait_type: "Twitter", value: "@Web3godfather" },
      ],
    });
  }
};
```

### Option B: Crossmint (Email Wallet — Zero-Friction)

```tsx
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

// In your form:
<CrossmintPayButton
  clientId="YOUR_CROSSMINT_CLIENT_ID"
  mintConfig={{
    type: "erc-721",
    totalPrice: "0",
    quantity: 1,
  }}
  environment="staging" // change to "production" when live
  emailInputOptions={{
    show: true,
    default: email,
  }}
/>
```

### NFT Metadata (IPFS upload)

```json
{
  "name": "Web3godVater Digital Business Card #001",
  "description": "Own a piece of the legend. This exclusive NFT is the digital business card of Web3godVater (Ø,G) — Solidity Sorcerer, AI Visionary, Python Alchemist, Legendary Designer from Lagos, Nigeria.",
  "image": "ipfs://QmYOUR_IMAGE_CID",
  "external_url": "https://web3godvater.dev",
  "attributes": [
    { "trait_type": "Collection", "value": "Genesis" },
    { "trait_type": "Edition", "value": "001 of 999" },
    { "trait_type": "Chain", "value": "Ethereum" },
    { "trait_type": "Skills", "value": "Solidity, AI/ML, Python, Frontend, Content, Social" },
    { "trait_type": "Location", "value": "Lagos, Nigeria" },
    { "trait_type": "Twitter", "value": "@Web3godfather" }
  ]
}
```

Upload image + metadata to **IPFS via Pinata** or **NFT.Storage**, then use the `ipfs://` URIs in your contract.

---

## 📧 Connecting the Contact Form

### With EmailJS (No backend needed)

```bash
npm install @emailjs/browser
```

```tsx
import emailjs from "@emailjs/browser";

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  await emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    { from_name: form.name, from_email: form.email, message: form.message },
    "YOUR_PUBLIC_KEY"
  );
};
```

### With Next.js Server Action + SendGrid

Create `app/api/contact/route.ts`:

```ts
import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  await sgMail.send({
    to: process.env.CONTACT_EMAIL!,
    from: "noreply@web3godvater.dev",
    subject: `New message from ${name}`,
    text: `From: ${email}\n\n${message}`,
  });
  return NextResponse.json({ success: true });
}
```

---

## 🎨 Customization Quick Reference

| What to Change | File | Variable/Section |
|---|---|---|
| Colors | `globals.css` | `:root` CSS variables |
| Fonts | `globals.css` + `layout.tsx` | `@import` + `<link>` |
| Hero text | `components/Hero.tsx` | `subtitlePhrases` array |
| About bio | `components/About.tsx` | bio paragraph text |
| Skills | `components/Skills.tsx` | `skills` array |
| Projects | `components/Projects.tsx` | `projects` array |
| Experience | `components/Experience.tsx` | `timeline` array |
| Insights | `components/Insights.tsx` | `insights` array |
| Testimonials | `components/Testimonials.tsx` | `testimonials` array |
| Social links | `components/Navbar.tsx` + `Footer.tsx` | href values |

---

## 🔍 Performance Notes

- Fonts loaded via `@import` in CSS + preconnect in `<head>`
- Canvas animations use `requestAnimationFrame` with proper cleanup
- All animations respect `prefers-reduced-motion` (add media query to extend)
- `"use client"` only on components that need interactivity
- Images: use `next/image` for any real photos

---

## 🐍 Easter Egg

Type **"python"** anywhere on the page to unleash a fleet of Python snakes across the screen. Share it with friends!

---

## 📜 License

MIT — Build legendary things.

---

*Built with 🐍 Python, 🤖 AI, and pure legendary energy from Lagos, Nigeria.*

*Web3godVater (Ø,G) — @Web3godfather on X*
# My-Portfolio
