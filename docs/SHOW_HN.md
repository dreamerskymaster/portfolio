# Show HN Draft

**Title:** Show HN: ManuFX — Open-source industrial engineering portfolio with static SSR prerendering for LLMs

**Link:** https://manufx.vercel.app

**Repository:** https://github.com/dreamerskymaster/portfolio

---

### Body

Hey HN! I'm Ajith, an advanced manufacturing engineer bridging physical operations (Hero MotoCorp, Van Dyk Recycling Solutions) with AI.

I built ManuFX (https://manufx.vercel.app) to solve two core challenges that many modern single-page engineering portfolios face:

1. **The SPA Blindspot for AI Search**: Modern web scrapers and AI agents (GPTBot, ClaudeBot, Perplexity) frequently don't evaluate complex client JS bundles, leaving SPAs indexed as empty `#root` containers. I implemented a lightweight, zero-dependency post-build prerender pipeline (`scripts/prerender.mjs`) that generates static semantic HTML with route-specific OpenGraph, JSON-LD, and `<noscript>` fallback content for all 43 routes. It also exposes machine-readable endpoints (`/llms.txt` and `/llms-full.txt`).

2. **60fps Micro-Interactions Without Bloat**:
   - 3D interactive tilt cards (`useTiltEffect`) with hardware-accelerated transforms.
   - Smooth Framer Motion transitions with cubic-bezier easing.
   - Device-aware performance guards: heavy Three.js canvas components, trailing cursors, and particle fields are automatically disabled on mobile or coarse-pointer screens (`(pointer: coarse)`).

The entire codebase is open-source under the MIT license. Would love to hear feedback from the community on the design, performance architecture, or SEO approach!

