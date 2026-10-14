import { useSearchParams } from 'react-router'

import {
  filterProjects,
  getFilterGroups,
  parseSelectedTags,
  ProjectFilter,
  ProjectGrid,
  projects,
} from '@/features/projects'
import { PageHeader } from '@/shared/ui/PageHeader'
import { pageTitle } from '@/shared/utils/pageTitle'

import styles from './ProjectsPage.module.css'

export default function ProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const selected = parseSelectedTags(searchParams.getAll('tag'))
  const visible = filterProjects(projects, selected)

  function setTags(tags: readonly string[]) {
    const params = new URLSearchParams()
    for (const tag of tags) params.append('tag', tag)
    setSearchParams(params, { preventScrollReset: true })
  }

  function toggleTag(tag: string) {
    setTags(
      selected.includes(tag)
        ? selected.filter((t) => t !== tag)
        : [...selected, tag],
    )
  }

  return (
    <div className={styles.page}>
      <title>{pageTitle('Projects')}</title>

      <PageHeader title="Projects" />

      {projects.length === 0
        ? <p className={styles.empty}>No projects yet.</p>
        : (
          <>
            <ProjectFilter
              groups={getFilterGroups(selected, visible)}
              total={projects.length}
              hasSelection={selected.length > 0}
              onToggle={toggleTag}
              onClear={() => {
                setTags([])
              }}
            />

            <p className="sr-only" aria-live="polite">
              {`Showing ${String(visible.length)} of ${String(projects.length)} projects`}
            </p>

            {visible.length === 0
              ? (
                <p className={styles.empty}>
                  No projects match all selected filters.{' '}
                  <button
                    type="button"
                    className={styles.reset}
                    onClick={() => {
                      setTags([])
                    }}
                  >
                    Clear filters
                  </button>
                </p>
              )
              : (
                <>
                  <h2 className="sr-only">Project list</h2>
                  <ProjectGrid projects={visible} />
                </>
              )}
          </>
        )}
    </div>
  )
}
