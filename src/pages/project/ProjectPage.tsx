import { useParams } from 'react-router'

import { getProjectBySlug, ProjectDetails } from '@/features/projects'
import { NotFound } from '@/shared/ui/NotFound'
import { pageTitle } from '@/shared/utils/pageTitle'

export default function ProjectPage() {
  const { slug = '' } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <>
        <title>{pageTitle('Page not found')}</title>
        <NotFound />
      </>
    )
  }

  return (
    <>
      <title>{pageTitle(project.title)}</title>
      <ProjectDetails project={project} />
    </>
  )
}
