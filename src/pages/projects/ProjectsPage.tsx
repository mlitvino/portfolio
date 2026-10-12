import { ProjectGrid, projects } from '@/features/projects'
import { siteConfig } from '@/shared/config/site'

import styles from './ProjectsPage.module.css'

export default function ProjectsPage() {
  return (
    <>
      <title>{`Projects — ${siteConfig.name}`}</title>

      <h1 className={styles.heading}>Projects</h1>
      <hr className={styles.separator} />

      {projects.length === 0
        ? <p className={styles.empty}>No projects yet.</p>
        : <ProjectGrid projects={projects} />}
    </>
  )
}
