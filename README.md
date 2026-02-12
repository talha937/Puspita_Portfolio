# 🚀 Professional Portfolio Website

A high-performance, visually stunning portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Designed to impress FAANG recruiters and high-frequency trading firms with technical depth, visual polish, and attention to detail.

![Portfolio Preview](https://via.placeholder.com/1200x600/1a1a1a/3b82f6?text=Your+Portfolio+Preview)

## ✨ Features

### 🎨 Design & UX
- **Silicon Valley Premium Aesthetic**: Clean, modern interface inspired by Apple and Linear
- **Custom Gradient Cursor**: Interactive cursor with glowing trail effect
- **Micro-interactions**: Subtle animations throughout for enhanced user experience
- **Fully Responsive**: Flawless experience on mobile, tablet, and ultra-wide monitors
- **Dark Theme**: Professional charcoal and slate color palette with electric blue accents

### 🔧 Technical Features
- **Data-Driven Architecture**: All content separated into `portfolio.config.ts` for easy updates
- **Performance Optimized**: Built with Next.js 14 App Router for optimal loading speed
- **SEO Ready**: Proper meta tags and semantic HTML for search engine optimization
- **Type-Safe**: Full TypeScript implementation for robust development
- **Smooth Animations**: Powered by Framer Motion for 60fps animations

### 📱 Sections
1. **Hero Section**: Magnetic introduction with animated particle background
2. **About Me**: Professional bio with achievements and education highlights
3. **Experience Timeline**: Interactive vertical timeline with company logos and milestones
4. **Featured Projects**: Grid layout with hover effects, live demos, and GitHub links
5. **Skills Marquee**: Auto-scrolling skill showcase with proficiency indicators
6. **Contact/Footer**: Clean design with social links and copy email functionality

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone or navigate to the repository**
   ```bash
   cd Portfolio_Puspita
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization Guide

### Update Your Information

All portfolio content is centralized in `portfolio.config.ts`. Simply edit this file to update your information:

```typescript
// portfolio.config.ts
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    // ... more fields
  },
  // ... other sections
}
```

### Sections to Customize:

1. **Personal Information**
   - Name, title, tagline, email, location, phone
   - Profile image path
   - Bio

2. **Social Media Links**
   - GitHub, LinkedIn, LeetCode, Twitter, etc.

3. **Hero Section**
   - Headline, subheadline
   - CTA buttons
   - Stats display

4. **Experience**
   - Companies, positions, dates
   - Achievements and responsibilities
   - Technologies used

5. **Education**
   - Degrees, institutions
   - GPA, dates
   - Achievements

6. **Projects**
   - Title, description
   - Technologies, highlights
   - Live demo and GitHub links
   - Project images

7. **Skills**
   - Categorized by type (Languages, Backend, ML, etc.)
   - Proficiency levels
   - Icons

8. **Certifications**
   - Certification name and issuer
   - Date and credential ID
   - Logo

9. **Achievements**
   - Awards, patents, publications
   - Organizations and dates

### Add Images

Place your images in the `public` folder:

```
public/
├── profile.jpg          # Your profile photo
├── resume.pdf          # Your resume
├── logos/              # Company logos
│   ├── meta.png
│   ├── google.png
│   └── ...
├── projects/           # Project screenshots
│   ├── project1.jpg
│   └── ...
└── certs/             # Certification badges
    ├── aws-sap.png
    └── ...
```

Then reference them in `portfolio.config.ts`:
```typescript
profileImage: "/profile.jpg",
logo: "/logos/meta.png",
```

### Customize Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  charcoal: '#1a1a1a',        // Main background
  'electric-blue': '#3b82f6',  // Primary accent
  'electric-cyan': '#06b6d4',  // Secondary accent
}
```

### Customize Animations

Modify animation settings in `tailwind.config.ts` under the `animation` and `keyframes` sections.

## 🏗️ Project Structure

```
Portfolio_Puspita/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and custom CSS
├── components/
│   ├── CustomCursor.tsx    # Gradient cursor effect
│   ├── Navigation.tsx      # Sticky navigation bar
│   ├── Hero.tsx           # Hero section with particles
│   ├── About.tsx          # About me section
│   ├── Experience.tsx     # Experience timeline
│   ├── Projects.tsx       # Projects grid
│   ├── Skills.tsx         # Skills marquee
│   └── Contact.tsx        # Contact & footer
├── public/                # Static assets
├── portfolio.config.ts    # 🎯 ALL YOUR DATA HERE
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies
```

## 🎨 Design Philosophy

### Color Palette
- **Charcoal (`#1a1a1a`)**: Main background
- **Slate Gray**: Secondary backgrounds
- **Electric Blue (`#3b82f6`)**: Primary accent
- **Electric Cyan (`#06b6d4`)**: Secondary accent
- **High-contrast text**: White and light gray for readability

### Typography
- **Font**: Inter for clean, professional look
- **Sizes**: Responsive with mobile-first approach
- **Weight**: Strategic use of bold for hierarchy

### Spacing
- Generous whitespace for breathing room
- Consistent padding and margins
- Section-based layout

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Build for Production

```bash
npm run build
npm run start
```

## 📊 Performance Optimizations

- **Static Generation**: Pre-rendered at build time
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Font Optimization**: System fonts with fallbacks
- **Lazy Loading**: Components load on demand
- **Minimal Bundle**: Only essential dependencies

## 🔧 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 🙏 Acknowledgments

- Design inspiration from Apple, Linear, and Stripe
- Icons from Lucide React
- Animations powered by Framer Motion

## 💼 Targeting FAANG & HFT Firms

This portfolio is specifically designed to impress recruiters from:
- **FAANG**: Meta, Amazon, Apple, Netflix, Google
- **HFT/Finance**: Goldman Sachs, JP Morgan, Jane Street, Two Sigma

### Key Highlights for Recruiters:
- ✅ Clean, professional design that shows attention to detail
- ✅ Performance-first approach demonstrating technical excellence
- ✅ Type-safe codebase showing best practices
- ✅ Comprehensive project showcase with live demos
- ✅ Clear demonstration of full-stack capabilities
- ✅ Security and performance metrics highlighted

---

**Built with 💙 by Puspita**

Ready to impress? Start customizing and deploy your portfolio today!
