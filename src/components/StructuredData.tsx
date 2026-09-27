import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import { profile } from '../data/profile';

const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://manufx.vercel.app').replace(/\/$/, '');

/**
 * Emits the per-page canonical URL and page-specific JSON-LD.
 *
 * The baseline Person schema lives as static markup in index.html, because
 * that is the only structured data a crawler which does not execute
 * JavaScript will ever see. This component deliberately does NOT repeat it —
 * two competing Person graphs on one page is worse than one.
 *
 * Rendered once from App.tsx so every route gets a canonical without each
 * page having to remember.
 */
const StructuredData: React.FC = () => {
    const { pathname } = useLocation();
    const canonical = `${SITE_URL}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`;

    // Project detail pages describe the specific project.
    const projectMatch = pathname.match(/^\/projects\/([^/]+)$/);
    const project = projectMatch
        ? profile.projects.find((p) => p.id === projectMatch[1])
        : undefined;

    const graph: Record<string, unknown>[] = [];

    if (project) {
        graph.push({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: project.title,
            headline: project.title,
            description: project.summary,
            url: canonical,
            dateCreated: project.date,
            keywords: project.technologies?.join(', '),
            author: { '@type': 'Person', name: profile.name, url: SITE_URL },
            ...(project.images?.length ? { image: `${SITE_URL}${project.images[0]}` } : {}),
        });
    }

    if (pathname === '/') {
        graph.push({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'ManuFX Portfolio',
            url: SITE_URL,
            author: { '@type': 'Person', name: profile.name },
        });
    }

    return (
        <Helmet>
            <link rel="canonical" href={canonical} />
            {graph.map((node, i) => (
                <script type="application/ld+json" key={i}>
                    {JSON.stringify(node)}
                </script>
            ))}
        </Helmet>
    );
};

export default StructuredData;
