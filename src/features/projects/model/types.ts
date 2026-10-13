export interface ProjectVisual {
  src: string
  alt: string
  caption?: string
}

export interface ProjectData {
  title: string
  summary: string
  date: string
  tech: readonly string[]
  topics?: readonly string[]
  cover?: string
  links: {
    live?: string
    repo?: string
  }
  featured?: boolean
  draft?: boolean

  role?: string
  duration?: string
  context?: string
  visuals?: readonly ProjectVisual[]
  overview?: readonly string[]
  features?: readonly string[]
  learned?: readonly string[]
}

export interface Project extends ProjectData {
  slug: string
}
