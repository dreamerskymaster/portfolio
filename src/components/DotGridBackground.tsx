import React from 'react';

/**
 * DotGridBackground - A subtle architectural background overlay.
 * Uses a CSS radial-gradient to create a flexible dot grid pattern.
 * Set to a very low opacity to provide structure without distracting from content.
 */
const DotGridBackground: React.FC = () => {
    return (
        <div
            className="fixed inset-0 pointer-events-none -z-5"
            style={{
                backgroundImage: `radial-gradient(circle, var(--muted) 1px, transparent 1px)`,
                backgroundSize: '32px 32px',
                opacity: 0.15,
            }}
            aria-hidden="true"
        />
    );
};

export default DotGridBackground;
