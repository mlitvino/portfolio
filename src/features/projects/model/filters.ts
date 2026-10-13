import { FILTER_GROUPS } from './filterConfig'
import { projects } from './projects'
import type { Project } from './types'

export interface FilterOption {
  name: string
  count: number
  selected: boolean
}

export interface FilterGroup {
  label: string
  options: readonly FilterOption[]
}

const allowedTags = FILTER_GROUPS.flatMap((group) => group.tags)

function sameTag(a: string, b: string): boolean {
  return a.toLowerCase() === b.toLowerCase()
}

function projectTags(project: Project): string[] {
  const topics = project.topics ?? []
  return [...project.tech, ...topics]
}

function hasTag(project: Project, tag: string): boolean {
  return projectTags(project).some((projectTag) => sameTag(projectTag, tag))
}

export function parseSelectedTags(values: readonly string[]): string[] {
  const selected: string[] = []
  for (const value of values) {
    const tag = allowedTags.find((allowed) => sameTag(allowed, value))
    if (tag && !selected.includes(tag)) {
      selected.push(tag)
    }
  }
  return selected
}

export function filterProjects(list: readonly Project[], selected: readonly string[]) {
  return list.filter((project) => selected.every((tag) => hasTag(project, tag)))
}

export function getFilterGroups(
  selected: readonly string[],
  matching: readonly Project[],
): FilterGroup[] {
  return FILTER_GROUPS.map((group) => ({
    label: group.label,
    options: group.tags
      .filter((tag) => projects.some((project) => hasTag(project, tag)))
      .map((tag) => ({
        name: tag,
        count: matching.filter((project) => hasTag(project, tag)).length,
        selected: selected.includes(tag),
      })),
  }))
}
