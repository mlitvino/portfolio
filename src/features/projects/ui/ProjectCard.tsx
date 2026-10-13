import { ExternalLink } from '@/shared/ui/ExternalLink'
import { TagList } from '@/shared/ui/TagList'

import type { Project } from '../model/types'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, summary, tech, topics, cover, links } = project

  return (
    <article className={styles.card}>
      {cover && <img src={cover} alt="" className={styles.cover} />}

      <h3 className={styles.title}>{title}</h3>
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
