# 🏭 ManuFX - Ajith Srikanth Portfolio

> **Advanced Manufacturing Engineer & AI Innovation Specialist**  
> Bridging Smart Manufacturing, Supply Chain Optimization, and AI-Driven Automation for Industry 4.0 Transformation

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-manufx.vercel.app-00D4AA?style=for-the-badge&logo=vercel)](https://manufx.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-dreamerskymaster-181717?style=for-the-badge&logo=github)](https://github.com/dreamerskymaster)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ajith%20Srikanth-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/as31)
[![Email](https://img.shields.io/badge/Email-ajithsrikanth.f@northeastern.edu-D14836?style=for-the-badge&logo=gmail)](mailto:ajithsrikanth.f@northeastern.edu)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdreamerskymaster%2Fportfolio)

</div>

## 🚀 Live Demo

**🌐 Portfolio Website**: [https://manufx.vercel.app](https://manufx.vercel.app)  
**📁 GitHub Repository**: [https://github.com/dreamerskymaster/portfolio](https://github.com/dreamerskymaster/portfolio)

## 🔄 Automatic Deployment

This portfolio features **GitHub Actions** for seamless CI/CD:

- ✅ **Push to main** → Automatic production deployment
- ✅ **Pull requests** → Preview deployments  
- ✅ **CI/CD Pipeline** → Automated testing and building
- ✅ **Environment Variables** → Secure configuration management

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [Key Sections](#key-sections)
- [Media & Assets](#media--assets)
- [Performance](#performance)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This portfolio represents **Ajith Srikanth**, an Advanced Manufacturing Engineer with expertise in:

- **🏭 Manufacturing Excellence**: TPM, Kaizen, Lean Methodology, OEE optimization
- **🤖 Automation & Systems**: PLC/HMI Programming, SCADA, IoT, Industry 4.0
- **🧠 AI & Innovation**: Machine Learning, Computer Vision, Predictive Analytics
- **👥 Leadership**: Cross-functional team management, Training & Development

## ✨ Features (Overhaul v2.0)

### 🎨 **Premium UI/UX**
- **OLED Dark Mode**: True black background for incredible contrast.
- **Warm Light Mode**: Editorial-style warm paper theme for readability.
- **Typography System**: Integrated Satoshi, Instrument Serif, and JetBrains Mono for a premium feel.
- **Glassmorphic Design**: Modern glassmorphic effects with dynamic gradient backgrounds.
- **Micro-Interactions**: Custom trailing cursor, section parallax, and animated link underlines.

### 📱 **Interactive Sections**
- **Impact Dashboard**: Dynamic metrics grid with animated counters (`useCountUp`).
- **3D Tilt Cards**: Project cards with interactive 3D tilt and glow effects.
- **Professional Timeline**: Interactive career progression with detailed achievements.
- **Personal Interests**: Gamified hobbies section with media galleries.
- **Technical Tooltips**: Interactive explanations for industry-specific terms.

### 🔧 **Technical Excellence**
- **SPA Routing**: Seamless Single Page Application transitions via `react-router-dom`.
- **SEO Optimized**: Helmet-powered metadata and JSON-LD Structured Data for high search rankings.
- **Accessibility**: ARIA labels, skip-links, and full keyboard navigation support.
- **Performance**: Code splitting, lazy loading, and zero build-time syntax errors.

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing

### **Build & Deployment**
- **Vite** - Fast build tool and dev server
- **Vercel** - Cloud platform for deployment
- **GitHub Actions** - CI/CD automation

## 📁 Project Structure

```
├── src/
│   ├── components/          # UI Components
│   │   ├── ui/              # Atom-level components (Button, Card, Chip)
│   │   ├── CustomCursor.tsx # Trailing cursor logic
│   │   ├── ImpactDashboard.tsx # Animated metrics
│   │   ├── PageTransition.tsx  # Global blur-fade wrapper
│   │   ├── ScrollProgress.tsx  # Vertical reading indicator
│   │   └── ParallaxHeading.tsx # Parallax header effects
│   ├── pages/              # Routed Page Components
│   ├── data/               # Static Data Modules
│   │   ├── profile.ts      # Main career & project data
│   │   └── technicalTerms.ts # Tooltip definitions
│   ├── utils/              # Hooks & Logic
│   │   ├── useTiltEffect.ts # 3D interaction hook
│   │   └── useCountUp.ts    # Counter animation hook
│   └── styles/             # Global CSS & Tokens
├── public/                 # Static Assets (ManuFX logo, etc.)
├── content/               # Markdown content (Projects, Articles)
└── .github/workflows/     # CI/CD configuration
```

## 🚀 Installation

### Prerequisites
- **Node.js 18+**
- **npm**

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/dreamerskymaster/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run typecheck    # TypeScript type checking
```

## 🖼️ Media & Assets

This project uses a centralized mapping system for all visual content. See the [Media & Assets Mapping Guide](MEDIA_GUIDE.md) for details.

## 🤝 Contributing

This is a personal professional portfolio. While it is public, it is maintained for individual professional representation.

## 📄 License

This project is licensed under the **MIT License**.

---

**Built with ❤️ by Ajith Srikanth | ManuFX Branding**

*Last updated: February 2026*