import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';

export interface Project {
  title: string;
  slug: string;
  year: number;
  role: string;
  tech: string[];
  summary: string;
  links: {
    demo?: string;
    repo?: string;
  };
  images: string[];
  content: string;
}

export interface Writing {
  title: string;
  slug: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
}

// Load all projects from markdown files
export async function loadProjects(): Promise<Project[]> {
  const projectFiles = import.meta.glob('/content/projects/*.md', { eager: true }) as Record<string, { default: string }>;
  const projects: Project[] = [];

  for (const path in projectFiles) {
    const file = projectFiles[path] as { default: string };
    const { data, content } = matter(file.default);
    
    projects.push({
      title: data.title,
      slug: data.slug,
      year: data.year,
      role: data.role,
      tech: data.tech || [],
      summary: data.summary,
      links: data.links || {},
      images: data.images || [],
      content: await processMarkdown(content)
    });
  }

  return projects.sort((a, b) => b.year - a.year);
}

// Load all writing from markdown files
export async function loadWriting(): Promise<Writing[]> {
  const writingFiles = import.meta.glob('/content/writing/*.md', { eager: true }) as Record<string, { default: string }>;
  const writings: Writing[] = [];

  for (const path in writingFiles) {
    const file = writingFiles[path] as { default: string };
    const { data, content } = matter(file.default);
    
    writings.push({
      title: data.title,
      slug: data.slug,
      date: data.date,
      summary: data.summary,
      tags: data.tags || [],
      content: await processMarkdown(content)
    });
  }

  return writings.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Process markdown content to HTML
export async function processMarkdown(content: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(content);

  return String(result);
}

export interface ProjectIndex {
  title: string;
  summary: string;
  tech: string[];
  year: number;
  slug: string;
}

// Generate projects index for search
export async function generateProjectsIndex(): Promise<ProjectIndex[]> {
  const projects = await loadProjects();
  return projects.map(project => ({
    title: project.title,
    summary: project.summary,
    tech: project.tech,
    year: project.year,
    slug: project.slug
  }));
}

// Search projects and writing
export function searchContent(query: string, projects: ProjectIndex[], writings: Writing[]): {
  projects: ProjectIndex[];
  writings: Writing[];
} {
  const lowercaseQuery = query.toLowerCase();
  
  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.summary.toLowerCase().includes(lowercaseQuery) ||
    project.tech.some((tech: string) => tech.toLowerCase().includes(lowercaseQuery))
  );

  const filteredWritings = writings.filter(writing => 
    writing.title.toLowerCase().includes(lowercaseQuery) ||
    writing.summary.toLowerCase().includes(lowercaseQuery) ||
    writing.tags.some((tag: string) => tag.toLowerCase().includes(lowercaseQuery))
  );

  return {
    projects: filteredProjects,
    writings: filteredWritings
  };
}


