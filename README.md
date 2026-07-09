# 🧶 Fainaya For You

> **Kreasi Rajutan Tangan Terbaik** — Handcrafted crochet products made with love.

Fainaya For You is a modern e-commerce landing page for a handmade crochet products business based in Indonesia. The website showcases unique handcrafted items such as bags, wallets, and accessories, all made with premium-quality yarn by skilled artisans.

## ✨ Features

- **Responsive Design** — Fully responsive layout optimized for mobile, tablet, and desktop.
- **Smooth Animations** — Scroll-triggered animations powered by Framer Motion for an engaging user experience.
- **Product Catalog** — Display of products with modal detail view (colors, materials, pricing).
- **Image Gallery** — Masonry-style gallery showcasing product inspirations with hover effects.
- **Customer Testimonials** — Interactive carousel showcasing customer reviews.
- **Contact Section** — Direct contact information and social media links.
- **Accessible Navigation** — Fixed navbar with smooth scroll to sections.

## 🖥️ Tech Stack

| Technology          | Purpose                        |
| ------------------- | ------------------------------ |
| **Next.js** 16      | React framework (App Router)   |
| **React** 19        | UI library                     |
| **TypeScript**      | Type-safe JavaScript           |
| **Tailwind CSS** 4  | Utility-first styling          |
| **Framer Motion**   | Animation library              |
| **Lucide React**    | Icon library                   |

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css         # Global styles & Tailwind imports
│   ├── layout.tsx          # Root layout with fonts & metadata
│   └── page.tsx            # Home page (assembles all sections)
├── components/
│   ├── Navbar.tsx          # Fixed navigation bar
│   ├── Hero.tsx            # Hero section with CTA
│   ├── About.tsx           # About section with brand story & values
│   ├── Products.tsx        # Product catalog grid
│   ├── ProductDetailModal.tsx  # Product detail modal
│   ├── Gallery.tsx         # Image gallery grid
│   ├── Testimonials.tsx    # Customer testimonials carousel
│   ├── Contact.tsx         # Contact info & social links
│   └── Footer.tsx          # Site footer
├── data/
│   └── products.ts         # Product data & metadata
public/
└── images/
    └── products/           # Product images
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/fainaya-for-you.git
cd fainaya-for-you

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## 🎨 Design

The website uses a warm, earthy color palette reflecting the handmade, natural aesthetic of crochet products:

- **Primary** — Warm brown/terracotta `#c4956a`
- **Secondary** — Soft muted brown
- **Dark Brown** — Deep brown for headings
- **Rose** — Soft rose accent
- **Sage** — Muted sage green accent
- **Cream** — Warm cream background

**Typography:**
- **Playfair Display** — Serif font for headings (elegant, handcrafted feel)
- **Inter** — Sans-serif for body text (clean, readable)

## 🌐 Sections

1. **Hero** — Brand tagline, description, and CTA buttons ("Lihat Koleksi" / "Tentang Kami")
2. **About** — Brand story, mission, and core values
3. **Products** — Product catalog with filtering, modal details for each product
4. **Gallery** — Visual inspiration gallery with hover effects
5. **Testimonials** — Customer reviews carousel
6. **Contact** — WhatsApp contact, email, Instagram, and location

## 🚢 Deploy to Vercel

The easiest way to deploy this Next.js app is with [Vercel](https://vercel.com), the platform built by the creators of Next.js.

### Prerequisites

- A [GitHub](https://github.com) account
- A [Vercel](https://vercel.com) account (free tier is sufficient)

### Step-by-Step

#### 1. Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files and commit
git add .
git commit -m "Initial commit"

# Create a repository on GitHub, then push
git remote add origin https://github.com/your-username/fainaya-for-you.git
git branch -M main
git push -u origin main
```

#### 2. Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Select your `fainaya-for-you` repository
4. Click **"Import"**

#### 3. Configure & Deploy

Vercel will automatically detect Next.js and pre-fill the settings:

| Setting            | Value                        |
| ------------------ | ---------------------------- |
| **Framework**      | Next.js (auto-detected)      |
| **Root Directory** | `./` (default)               |
| **Build Command**  | `next build` (auto-detected) |
| **Output Dir**     | `.next` (auto-detected)      |

No environment variables are needed for this project.

Click **"Deploy"** — Vercel will build and deploy your site in about a minute.

#### 4. Done 🎉

Your site will be live at a URL like: `https://fainaya-for-you.vercel.app`

Vercel provides:
- **Automatic HTTPS** — SSL certificate included
- **Custom Domain** — Add your own domain in the Vercel dashboard (Settings → Domains)
- **Continuous Deployment** — Every push to `main` automatically redeploys
- **Preview Deployments** — Pull requests get their own preview URL

### Deploy from CLI (Alternative)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project root
vercel

# Follow the prompts to link and deploy
# For production:
vercel --prod
```

---

## 📄 License

This project is private and intended for Fainaya For You.

---

<p align="center">Made with ❤️ and lots of yarn 🧶</p>
