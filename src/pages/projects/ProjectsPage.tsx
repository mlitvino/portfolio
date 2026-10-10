import { ProjectCard, projects } from '@/features/projects'
import { site } from '@/shared/config/site'

import styles from './ProjectsPage.module.css'

export default function ProjectsPage() {
  return (
    <>
      <title>{`Projects — ${site.name}`}</title>
  
      <h1 className={styles.heading}>Projects</h1>
      <hr className={styles.separator} />

      {projects.length === 0
        ? <p className={styles.empty}>No projects yet.</p>
        : (
          <ul className={styles.grid}>
            {projects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        )}
    </>
  )
}
