import { ProjectGrid, projects } from '@/features/projects'
import { siteConfig } from '@/shared/config/site'
import { PageHeader } from '@/shared/ui/PageHeader'

import styles from './ProjectsPage.module.css'

export default function ProjectsPage() {
  return (
    <>
      <title>{`Projects — ${siteConfig.name}`}</title>

      <PageHeader title="Projects" />

      {projects.length === 0
        ? <p className={styles.empty}>No projects yet.</p>
        : <ProjectGrid projects={projects} />}
    </>
  )
}
