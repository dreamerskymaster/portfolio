import React from 'react';

/**
 * The always-on base background.
 *
 * Four stacked layers, all pure CSS/SVG and zero JavaScript, so this renders
 * identically on a phone and a workstation and costs nothing at runtime:
 *
 *   1. aurora   - slow drifting colour fields built from the theme tokens
 *   2. grid     - architectural dot lattice, masked to fade at the edges
 *   3. grain    - fine SVG noise that stops the gradients banding
 *   4. vignette - pulls focus toward the centre column
 *
 * Every animation is disabled under prefers-reduced-motion.
 */
const DotGridBackground: React.FC = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -5 }} aria-hidden="true">
        <style>{`
      @keyframes mfx-drift-a {
        0%, 100% { transform: translate3d(-8%, -6%, 0) scale(1); }
        50%      { transform: translate3d(6%, 4%, 0) scale(1.15); }
      }
      @keyframes mfx-drift-b {
        0%, 100% { transform: translate3d(7%, 5%, 0) scale(1.1); }
        50%      { transform: translate3d(-5%, -7%, 0) scale(0.95); }
      }
      .mfx-aurora-a { animation: mfx-drift-a 38s ease-in-out infinite; }
      .mfx-aurora-b { animation: mfx-drift-b 46s ease-in-out infinite; }
      @media (prefers-reduced-motion: reduce) {
        .mfx-aurora-a, .mfx-aurora-b { animation: none; }
      }
    `}</style>

        {/* 1. Aurora colour fields */}
        <div
            className="mfx-aurora-a absolute -top-1/3 -left-1/4 w-[75vw] h-[75vw] rounded-full will-change-transform"
            style={{
                background:
                    'radial-gradient(circle at 50% 50%, rgba(var(--primary-rgb), 0.16) 0%, rgba(var(--primary-rgb), 0.06) 40%, transparent 70%)',
                filter: 'blur(60px)',
            }}
        />
        <div
            className="mfx-aurora-b absolute -bottom-1/3 -right-1/4 w-[70vw] h-[70vw] rounded-full will-change-transform"
            style={{
                background:
                    'radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--accent-1) 14%, transparent) 0%, transparent 68%)',
                filter: 'blur(70px)',
            }}
        />

        {/* 2. Dot lattice, faded toward the edges */}
        <div
            className="absolute inset-0"
            style={{
                backgroundImage: 'radial-gradient(circle, var(--bg-grid) 1px, transparent 1px)',
                backgroundSize: '34px 34px',
                opacity: 0.4,
                maskImage: 'radial-gradient(ellipse 80% 65% at 50% 40%, #000 55%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 80% 65% at 50% 40%, #000 55%, transparent 100%)',
            }}
        />

        {/* 3. Film grain - keeps the gradients from banding on wide screens */}
        <div
            className="absolute inset-0 mix-blend-overlay"
            style={{
                opacity: 0.035,
                backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
        />

        {/* 4. Vignette */}
        <div
            className="absolute inset-0"
            style={{
                background:
                    'radial-gradient(ellipse 100% 80% at 50% 45%, transparent 55%, color-mix(in srgb, var(--bg) 55%, transparent) 100%)',
            }}
        />
    </div>
);

export default DotGridBackground;
