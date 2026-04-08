import { profile, Project, Writing } from '../data/profile';

/**
 * SearchResult interface
 */
export interface SearchResult {
  type: 'project' | 'writing' | 'experience';
  title: string;
  subtitle?: string;
  href: string;
}

/**
 * Client-side search for the portfolio.
 * Searches across projects, writings, and work experience.
 * 
 * @param query - The search string
 * @returns An array of search results (max 8)
 */
export function searchPortfolio(query: string): SearchResult[] {
  if (!query || query.trim().length < 2) return [];

  const q = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  // 1. Search projects by title, summary, technologies, and category
  profile.projects.forEach((p: Project) => {
    const matchesTitle = p.title.toLowerCase().includes(q);
    const matchesSummary = p.summary.toLowerCase().includes(q);
    const matchesTech = p.technologies.some((t: string) => t.toLowerCase().includes(q));
    const matchesCategory = p.category ? p.category.toLowerCase().includes(q) : false;

    if (matchesTitle || matchesSummary || matchesTech || matchesCategory) {
      results.push({
        type: 'project',
        title: p.title,
        subtitle: p.category || undefined,
        href: `/projects/${p.id}`,
      });
    }
  });

  // 2. Search writings by title and tags
  profile.writings.forEach((w: Writing) => {
    const matchesTitle = w.title.toLowerCase().includes(q);
    const matchesTags = w.tags ? w.tags.some((t: string) => t.toLowerCase().includes(q)) : false;

    if (matchesTitle || matchesTags) {
      results.push({
        type: 'writing',
        title: w.title,
        subtitle: 'Writing',
        href: '/writings',
      });
    }
  });

  // 3. Search experience by company and role
  profile.experience.forEach((e) => {
    if (e.company.toLowerCase().includes(q) || e.role.toLowerCase().includes(q)) {
      results.push({
        type: 'experience',
        title: e.role,
        subtitle: e.company,
        href: '/about',
      });
    }
  });

  // Limit to 8 results for the dropdown UI
  return results.slice(0, 8);
}
