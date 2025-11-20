# 🏭 ManuFX - Ajith Srikanth Portfolio

> **Advanced Manufacturing Engineer & AI Innovation Specialist**  
> Bridging Smart Manufacturing, Supply Chain Optimization, and AI-Driven Automation for Industry 4.0 Transformation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-manufx.vercel.app-00D4AA?style=for-the-badge&logo=vercel)](https://manufx.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-dreamerskymaster-181717?style=for-the-badge&logo=github)](https://github.com/dreamerskymaster)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ajith%20Srikanth-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/as31)
[![Email](https://img.shields.io/badge/Email-ajithsrikanth.f@northeastern.edu-D14836?style=for-the-badge&logo=gmail)](mailto:ajithsrikanth.f@northeastern.edu)

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
- [Performance](#performance)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This portfolio represents **Ajith Srikanth**, an Advanced Manufacturing Engineer with expertise in:

- **🏭 Manufacturing Excellence**: TPM, Kaizen, Lean Methodology, OEE optimization
- **🤖 Automation & Systems**: PLC/HMI Programming, SCADA, IoT, Industry 4.0
- **🧠 AI & Innovation**: Machine Learning, Computer Vision, Predictive Analytics
- **👥 Leadership**: Cross-functional team management, Training & Development

## ✨ Features

### 🎨 **Modern UI/UX**
- **Glassmorphic Design**: Modern glassmorphic effects with gradient backgrounds
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Responsive Design**: Mobile-first approach with perfect scaling across devices
- **Smooth Animations**: Framer Motion powered micro-interactions and transitions
- **Easter Eggs**: Interactive elements and delightful surprises throughout

### 📱 **Interactive Sections**
- **Dynamic Homepage**: Hero section with animated statistics and call-to-actions
- **Professional Timeline**: Interactive career progression with detailed achievements
- **Project Showcase**: Comprehensive project portfolio with live demos and case studies
- **Research Publications**: Academic papers and research contributions
- **Document Viewer**: In-browser document viewing (Resume, Reports, LORs)
- **Personal Interests**: Interactive hobbies section with media galleries
- **Testimonials**: Professional recommendations and LinkedIn endorsements

### 🔧 **Technical Features**
- **Formspree Integration**: Direct email contact form with validation
- **Document Management**: In-browser PDF, PowerPoint, and Word document viewing
- **Technical Tooltips**: Interactive explanations for industry-specific terms
- **Search Functionality**: Global search with keyboard shortcuts (Ctrl+K)
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Code splitting, lazy loading, and optimized assets

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

### **Content Management**
- **Markdown** - Content authoring
- **Gray Matter** - Frontmatter parsing
- **Rehype** - HTML processing

### **Icons & UI**
- **Lucide React** - Beautiful icon library
- **Custom Components** - Reusable UI elements

## 📁 Project Structure

```
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx      # Navigation with ManuFX branding
│   │   ├── Footer.tsx      # Site footer
│   │   ├── ContactForm.tsx # Formspree contact form
│   │   └── TechnicalTooltip.tsx # Interactive tooltips
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Landing page
│   │   ├── About.tsx       # Professional timeline
│   │   ├── Projects.tsx    # Project showcase
│   │   ├── Hobbies.tsx     # Personal interests
│   │   ├── Writings.tsx    # Research publications
│   │   ├── Certifications.tsx # Professional certifications
│   │   ├── Documents.tsx   # Document viewer
│   │   └── Contact.tsx     # Contact information
│   ├── data/               # Static data
│   │   ├── profile.ts      # Personal information
│   │   ├── skills.ts       # Technical skills
│   │   ├── timeline.ts     # Career timeline
│   │   ├── certificates.ts # Certifications data
│   │   ├── documents.ts    # Document metadata
│   │   ├── hobbies.ts      # Personal interests
│   │   └── testimonials.ts # Professional recommendations
│   ├── styles/             # Styling
│   │   └── theme.css       # CSS variables
│   └── utils/              # Utility functions
├── public/                 # Static assets
│   ├── ManuFX.png         # Brand logo
│   ├── profile-pic.png    # Profile picture
│   ├── certificates/      # Certification images
│   ├── documents/         # Professional documents
│   └── hobbies/           # Personal media
├── content/               # Markdown content
│   ├── projects/          # Project descriptions
│   ├── writing/           # Research articles
│   └── resume/            # Resume PDF
└── .github/workflows/     # CI/CD configuration
```

## 🚀 Installation

### Prerequisites
- **Node.js 18+**
- **npm** or **yarn**

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

4. **Open your browser**
   Navigate to `http://localhost:5173`

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

### Environment Variables

Create a `.env` file based on `env.example`:

```env
VITE_SITE_URL=https://manufx.vercel.app
VITE_SITE_NAME="ManuFX - Ajith Srikanth Portfolio"
VITE_FORMSPREE_ENDPOINT=xzzanvdl
VITE_CONTACT_EMAIL=ajithsrikanth.f@northeastern.edu
```

## 🚀 Deployment

### Automatic Deployment (Recommended)

This portfolio is configured for automatic deployment to Vercel:

1. **Connect GitHub to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import repository: `skuller-007/portfolio`
   - Vercel auto-detects Vite configuration

2. **Set Environment Variables**
   - `VITE_SITE_URL`: `https://manufx.vercel.app`
   - `VITE_FORMSPREE_ENDPOINT`: `xzzanvdl`
   - `VITE_CONTACT_EMAIL`: `ajithsrikanth.f@northeastern.edu`

3. **Deploy**
   - Push to `main` branch → Automatic production deployment
   - Create pull request → Preview deployment

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login and deploy
vercel login
vercel --prod
```

## 📊 Key Sections

### 🏠 **Homepage**
- **Hero Section**: Animated introduction with ManuFX branding
- **Statistics**: Key achievements and metrics
- **Call-to-Actions**: Contact and project links
- **Easter Eggs**: Interactive "Namaskaram" modal

### 👨‍💼 **About**
- **Professional Timeline**: Career progression with achievements
- **Technical Evolution**: Skills development over time
- **Availability**: "Available from December 2026 for Full-time Roles"
- **Interactive Tooltips**: Technical term explanations

### 🚀 **Projects**
- **Manufacturing Innovation**: TPM implementation, OEE optimization
- **AI & Automation**: Machine learning, computer vision projects
- **Research Publications**: Academic papers and studies
- **Live Demos**: Interactive project showcases

### 🎯 **Personal Interests**
- **Cultural Exploration**: Travel photography and videos
- **Culinary Adventures**: Cooking and cuisine exploration
- **Outdoor Activities**: Biking, hiking adventures
- **Entertainment**: Music, TV shows, and movies

### 📜 **Certifications**
- **Six Sigma & Quality**: Lean methodology, process improvement
- **Cloud & AI**: AWS, machine learning certifications
- **Manufacturing**: TPM, smart manufacturing credentials
- **Project Management**: Agile, waterfall methodologies

### 📄 **Documents**
- **Resume**: Interactive PDF viewer
- **Letters of Recommendation**: Professional endorsements
- **Research Papers**: Academic publications
- **Training Materials**: Presentations and reports

## ⚡ Performance

### **Optimizations**
- **Code Splitting**: Lazy loading for optimal performance
- **Image Optimization**: Compressed and responsive images
- **Bundle Analysis**: Optimized JavaScript bundles
- **Caching**: Strategic cache headers for static assets

### **Metrics**
- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### **Browser Support**
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test thoroughly**
   ```bash
   npm run lint
   npm run build
   ```
5. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Ajith Srikanth**  
Advanced Manufacturing Engineer & AI Innovation Specialist

- **📧 Email**: [ajithsrikanth.f@northeastern.edu](mailto:ajithsrikanth.f@northeastern.edu)
- **💼 LinkedIn**: [linkedin.com/in/as31](https://linkedin.com/in/as31)
- **🐙 GitHub**: [github.com/dreamerskymaster](https://github.com/dreamerskymaster)
- **🌐 Portfolio**: [manufx.vercel.app](https://manufx.vercel.app)

## 🙏 Acknowledgments

- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Vite** - Build tool
- **Vercel** - Deployment platform
- **Formspree** - Contact form service

---

**Built with ❤️ by Ajith Srikanth | ManuFX Branding**

*Last updated: January 2025*