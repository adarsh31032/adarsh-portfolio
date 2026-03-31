# Adarsh Krishna M — Portfolio (Next.js)

A stunning, modern developer portfolio built with **Next.js 14**, **Framer Motion**, **Three.js / React Three Fiber**, and **Tailwind CSS**.

## ✨ Features

- **3D Hero Scene** — Animated distorted sphere with orbit rings & particle field using React Three Fiber
- **Smooth Animations** — Page reveals, staggered card entrances, skill bar fills via Framer Motion
- **Typewriter Effect** — Role cycling animation in the hero section
- **Responsive Design** — Mobile hamburger nav, fluid grid layouts
- **Scroll-triggered Reveals** — Sections animate in as you scroll using Intersection Observer
- **Glowing UI** — Neon cyan & purple color palette with box shadows and text glows
- **Noise Texture Overlay** — Subtle grain for depth and texture
- **Animated Border Cards** — Cards with gradient border animation on hover
- **Custom Scrollbar** — Styled to match the brand accent color
- **Dark Cosmic Theme** — Deep void backgrounds with mesh gradients

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Unzip the project folder
cd adarsh-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
adarsh-portfolio/
├── app/
│   ├── globals.css        # Global styles, animations, CSS variables
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page assembling all sections
├── components/
│   ├── Navbar.tsx         # Fixed nav with active section indicator
│   ├── Hero.tsx           # Hero with 3D scene + typewriter
│   ├── HeroScene.tsx      # Three.js 3D canvas scene
│   ├── About.tsx          # About + Education timeline + Interest cards
│   ├── Skills.tsx         # Animated skill bars + tech stack cloud
│   ├── Experience.tsx     # Certifications grid with hover effects
│   ├── Contact.tsx        # Contact form + info cards
│   └── Footer.tsx         # Footer with animated heart
├── public/
│   └── profile.jpg        # ← Place your photo here!
│   └── cv.pdf             # ← Place your CV here!
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Customization

1. **Replace profile photo** — Add `profile.jpg` to `/public/`
2. **Add CV** — Add `cv.pdf` to `/public/`
3. **Update content** — Edit the data in each component file
4. **Colors** — Edit CSS variables in `app/globals.css` and `tailwind.config.js`

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — animations
- **React Three Fiber + Drei** — 3D scene
- **Three.js** — WebGL rendering
- **react-type-animation** — typewriter effect
- **react-intersection-observer** — scroll-triggered reveals
