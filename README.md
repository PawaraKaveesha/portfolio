# Pawara Kaveesha — Personal Portfolio Website

> **"Building technology. Creating experiences. Connecting ideas."**  
> Software Developer | Network & Cybersecurity Enthusiast | Digital Creator

A high-performance personal portfolio website built with **Astro**, **TypeScript**, and **Tailwind CSS**. Designed with an agency-grade dark aesthetic inspired by Linear, Vercel, and Raycast, uniting Pawara Kaveesha's three interconnected dimensions: **Technology**, **Creativity**, and **Leadership**.

---

## 🚀 Key Highlights & Architectural Features

- **Blazing Fast Performance**: Statically generated with Astro 5, producing lightweight HTML and zero unnecessary runtime JavaScript (< 12 kB total client bundle).
- **Dual Brand Visual System**: Uses **Electric Blue (`#4285FF`)** to represent technology and **Creative Orange (`#FF8A35`)** to represent media creativity against a deep space dark palette (`#080B12`).
- **Interactive Network Visual**: Custom interactive HTML5 Canvas topology background featuring interconnected nodes, real-time animated data packets, and cursor-reactive physics.
- **Centralized Data Architecture**: All portfolio information (projects, skills, media, experience, education, social links) is organized in `src/data/` for rapid maintenance without modifying UI components.
- **Project Case Studies with Interactive Modal**: Built-in modal viewer displaying architectural overviews, key features, technology badges, and direct links to live deployments and GitHub repositories.
- **Media Production Gallery**: Equal visual weighting for media work, featuring verified YouTube channel embeds (`@Channel19lk`, `Rundown Podcast`, `Me Dan Methana`, `MediaLK`), TikTok (`@techhttp_lk`), and Facebook references with editable contribution fields.
- **Cloudflare Pages Ready**: Configured for static site generation with immediate deployment compatibility.

---

## 📁 Project Architecture

```
portfolio/
├── dist/                          # Production build output (static HTML, CSS, JS)
├── public/
│   ├── favicon.svg                # Custom PK monogram SVG favicon
│   ├── robots.txt                 # Search engine crawler directive
│   └── images/
│       ├── profile/               # Avatar & headshot placeholders
│       │   └── pawara-avatar.svg
│       ├── projects/              # Project diagrams & illustrations
│       │   ├── security-automation.svg
│       │   ├── orenda-villa.svg
│       │   ├── hashing-analysis.svg
│       │   ├── teamflow.svg
│       │   ├── simpleclix.svg
│       │   ├── techie.svg
│       │   ├── password-checker.svg
│       │   └── ebanking.svg
│       └── media/                 # Channel & social media thumbnails
│           ├── techhttp-thumb.svg
│           ├── live-and-let-live-thumb.svg
│           └── gihan-mangala-thumb.svg
├── src/
│   ├── components/
│   │   ├── Navbar.astro           # Floating navbar with PK monogram & mobile menu
│   │   ├── Hero.astro             # Interactive network visual & headline
│   │   ├── About.astro            # 4 dimensions & currently exploring tags
│   │   ├── Expertise.astro        # Categorized technical & creative capabilities
│   │   ├── Projects.astro         # Filterable software & cybersecurity projects
│   │   ├── ProjectCard.astro      # Individual project card with modal trigger
│   │   ├── MediaPortfolio.astro   # Filterable media production showcase
│   │   ├── MediaCard.astro        # Media item card with video player modal
│   │   ├── Experience.astro       # Timeline (Channel 19, Computerage, Orenda, Simpleclix)
│   │   ├── Leadership.astro       # IEEE NSBM, Duothan 6.0, StudPro, PROFILE 2026
│   │   ├── Education.astro        # Plymouth/NSBM BSc Computer Networks & Certifications
│   │   ├── BeyondCode.astro       # Cross-disciplinary curiosity pillars
│   │   ├── Contact.astro          # Validated contact form with mailto fallback
│   │   └── Footer.astro           # Monogram, copyright, and quick navigation
│   ├── data/                      # 📌 CENTRALIZED CONTENT FILES
│   │   ├── profile.ts             # Name, bio, tagline, and dimensions
│   │   ├── projects.ts            # Software and security project entries
│   │   ├── skills.ts              # Categorized skills (practical vs learning)
│   │   ├── media.ts               # Video channels, TikTok, Facebook & roles
│   │   ├── experience.ts          # Work history and organizational roles
│   │   ├── leadership.ts          # IEEE, competitions, and university committees
│   │   ├── education.ts           # BSc degree and certifications
│   │   ├── beyondCode.ts          # Broader multidisciplinary interests
│   │   └── social.ts              # Centralized URLs & contact handles
│   ├── layouts/
│   │   └── MainLayout.astro       # HTML wrapper, SEO meta, modals & progress bar
│   ├── scripts/
│   │   └── interactions.ts        # Canvas simulation, filtering, modals, form
│   ├── styles/
│   │   └── global.css             # Tailwind base, dark palette, animations
│   └── pages/
│       ├── index.astro            # Primary portfolio landing page
│       └── 404.astro              # Custom 404 network packet lost page
├── astro.config.mjs               # Astro configuration with Tailwind
├── tailwind.config.mjs            # Custom colors, glows, and keyframes
└── package.json                   # Dependencies and npm scripts
```

---

## 🛠️ Local Development & Build Commands

### Prerequisites
- Node.js `v20.0.0` or higher
- npm `v9.0.0` or higher

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates the fully optimized static distribution files in the `dist/` directory.

### 4. Preview the Production Build
```bash
npm run preview
```

---

## 🌐 Deploying to Cloudflare Pages

Cloudflare Pages provides zero-cold-start edge delivery, instant HTTPS, and automatic Git deployments.

### Method 1: Git-Connected Automated Deployment (Recommended)
1. Push your portfolio repository to your GitHub account (`https://github.com/PawaraKaveesha/portfolio`).
2. Log into the [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select your repository.
4. Configure Build Settings:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js Version** (under Environment Variables): `NODE_VERSION` = `22.14.0` or `20.18.0`
5. Click **Save and Deploy**. Cloudflare will build and publish your site at `https://<your-project>.pages.dev` with automatic SSL.

### Method 2: Direct Upload via Wrangler CLI
```bash
# Build the project
npm run build

# Deploy directly using Wrangler
npx wrangler pages deploy dist --project-name=pawara-portfolio
```

---

## ✏️ Content Management Guide

You do **NOT** need to edit HTML or Astro components to update your portfolio content. Simply modify the files inside `src/data/`:

### 1. Replacing Your Profile Photograph
1. Save your photograph (e.g. `pawara.jpg` or `pawara.webp`) inside `public/images/profile/`.
2. Open `src/data/profile.ts`.
3. Update the `image` field:
   ```typescript
   image: {
     src: '/images/profile/pawara.jpg',
     alt: 'Pawara Kaveesha — Professional Portrait',
     caption: 'Software Developer | Network & Cybersecurity Enthusiast',
   }
   ```
4. Run `npm run build` to update.

### 2. Adding a New Project
1. Open `src/data/projects.ts`.
2. Add a new object to the `projects` array:
   ```typescript
   {
     id: 'my-new-project',
     name: 'Project Name',
     subtitle: 'Short Subtitle',
     category: 'Cybersecurity', // or 'Web Development', 'Software Engineering', etc.
     status: 'Production',      // 'In Progress' | 'Production' | 'Academic' | 'Prototype'
     statusBadge: 'Deployed Live',
     featured: true,
     accent: 'blue',            // 'blue' or 'orange'
     shortDescription: 'One or two sentence summary of the project.',
     fullOverview: 'Full markdown / paragraph overview for the case study modal.',
     keyFeatures: ['Feature 1', 'Feature 2', 'Feature 3'],
     technologies: ['Python', 'Docker', 'PostgreSQL'],
     role: 'Lead Developer',
     githubUrl: 'https://github.com/PawaraKaveesha/your-repo',
     liveUrl: 'https://your-demo.com',
     image: '/images/projects/your-image.svg',
   }
   ```

### 3. Adding or Updating Media Production Work
1. Open `src/data/media.ts`.
2. Update the `contribution` field or add a new media item:
   ```typescript
   {
     id: 'new-production',
     title: 'Show Title — Episode / Feature',
     channelOrProject: 'Channel Name',
     platform: 'YouTube',        // 'YouTube' | 'TikTok' | 'Facebook'
     category: 'Video Production',// 'Video Production' | 'Content Creation' | etc.
     contribution: 'Lead Video Editor & Colorist', // EDIT YOUR EXACT ROLE
     description: 'Detailed description of video pacing and production.',
     link: 'https://www.youtube.com/watch?v=VIDEO_ID',
     videoId: 'VIDEO_ID',        // Enables embedded modal player
     thumbnail: 'https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg',
     featured: true,
     tags: ['Premiere Pro', 'Multi-Cam', 'Audio Mastering'],
   }
   ```

### 4. Updating Social Links & Contact Info
1. Open `src/data/social.ts`.
2. Update your email, phone, LinkedIn, and other channels:
   ```typescript
   export const socialLinks = {
     github: 'https://github.com/PawaraKaveesha',
     linkedin: 'https://www.linkedin.com/in/pawara-kaveesha-86b4b121b/',
     email: 'your-email@example.com',
     whatsapp: '+947XXXXXXXX',
     // ...
   };
   ```

### 5. Adding Completed Certifications & Verification URLs
1. Open `src/data/education.ts`.
2. Once you complete a certification (e.g. Google Cybersecurity), update:
   ```typescript
   status: 'Completed',
   statusBadge: 'Verified Certificate',
   dateOrPeriod: '2026',
   credentialUrl: 'https://coursera.org/verify/YOUR_CREDENTIAL_ID',
   credentialId: 'YOUR_CREDENTIAL_ID',
   ```

---

## 🔒 Content Accuracy & Ethical Adherence

This website adheres strictly to accurate professional representation:
- **No fabricated employment history**: Roles reflect actual engagements (Channel 19 media production, Computerage IT technician, Orenda Villa web engineering, Simpleclix digital initiative).
- **No fabricated project claims**: The final-year Network Security Automation Platform is clearly indicated as *Under Development*; Orenda Villa is represented with verified React/Vite/Express/PostgreSQL tech stack; Hashing analysis is represented as academic cryptographic research.
- **No false third-party channel ownership**: Third-party YouTube, TikTok, and Facebook channels are represented as external creative references with customizable contribution tags.
- **No artificial percentage bars**: Skills and capabilities are transparently categorized as *Practical Experience* vs *Currently Learning*.

---

© 2026 Pawara Kaveesha. All rights reserved.
