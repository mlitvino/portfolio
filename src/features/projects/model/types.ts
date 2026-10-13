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
}

export interface Project extends ProjectData {
  slug: string
}
