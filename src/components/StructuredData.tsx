import React from 'react';
import { Helmet } from 'react-helmet-async';
import { profile } from '../data/profile';

/**
 * Injects JSON-LD structured data into the page head for better SEO.
 * Follows the Person schema for a professional portfolio.
 */
const StructuredData: React.FC = () => {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": profile.name,
        "url": typeof window !== 'undefined' ? window.location.origin : 'https://ajithsrikanth.com',
        "jobTitle": profile.title,
        "description": "Ajith Srikanth is a Manufacturing Engineer and Intelligent Automation specialist building high-efficiency industrial systems and AI-driven solutions.",
        "sameAs": [
            profile.linkedin,
            profile.github
        ].filter(Boolean)
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(personSchema)}
            </script>
        </Helmet>
    );
};

export default StructuredData;
