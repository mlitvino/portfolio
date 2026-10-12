import { ProjectGrid, projects } from '@/features/projects'
import { PageHeader } from '@/shared/ui/PageHeader'
import { pageTitle } from '@/shared/utils/pageTitle'

import styles from './ProjectsPage.module.css'

export default function ProjectsPage() {
  return (
    <>
      <title>{pageTitle('Projects')}</title>

      <PageHeader title="Projects" />

      {projects.length === 0
        ? <p className={styles.empty}>No projects yet.</p>
        : <ProjectGrid projects={projects} />}
    </>
  )
}
