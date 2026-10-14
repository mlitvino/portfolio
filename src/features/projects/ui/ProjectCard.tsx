import { Link, useViewTransitionState } from 'react-router'

import { ExternalLink } from '@/shared/ui/ExternalLink'
import { TagList } from '@/shared/ui/TagList'

import type { Project } from '../model/types'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { slug, title, summary, tech, topics, cover, links } = project
  const href = `/projects/${slug}`
  const isTransitioning = useViewTransitionState(href)

  return (
    <article className={styles.card}>
      {cover && <img src={cover} alt="" className={styles.cover} />}

      <h3
        className={styles.title}
        style={isTransitioning ? { viewTransitionName: 'project-title' } : undefined}
      >
        <Link to={href} className={styles.cardLink} viewTransition>
          {title}
        </Link>
      </h3>
      <p className={styles.summary}>{summary}</p>

      <TagList items={tech} label="Technologies" />
      {topics && <TagList items={topics} label="Topics" />}

      <div className={styles.links}>
        {links.live && <ExternalLink href={links.live}>Live demo</ExternalLink>}
        {links.repo && <ExternalLink href={links.repo}>Source code</ExternalLink>}
      </div>
    </article>
  )
}
