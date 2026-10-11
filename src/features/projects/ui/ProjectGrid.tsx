import type { Project } from '../model/types'
import { ProjectCard } from './ProjectCard'
import styles from './ProjectGrid.module.css'

interface ProjectGridProps {
  projects: readonly Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <ul className={styles.grid}>
      {projects.map((project) => (
        <li key={project.slug}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  )
}
