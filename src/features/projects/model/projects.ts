import type { Project, ProjectData } from './types'

const MAX_FAVORITES_PROJECTS = 3

const modules = import.meta.glob<ProjectData>('/src/content/projects/*/project.ts', {
  eager: true,
  import: 'default',
})

function slugFromPath(path: string): string {
  const slug = path.split('/').at(-2)
  if (!slug) {
    throw new Error(`Cannot get project slug from ${path}`)
  }
  return slug
}

export const projects: readonly Project[] = Object.entries(modules)
  .map(([path, data]) => ({ ...data, slug: slugFromPath(path) }))
  .filter((project) => !project.draft)
  .sort((a, b) => b.date.localeCompare(a.date))

export const featuredProjects = projects.filter((project) => project.featured).slice(
  0,
  MAX_FAVORITES_PROJECTS,
)

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
