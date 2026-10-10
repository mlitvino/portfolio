import type { Project } from '../model/types'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, summary, tech, cover, links } = project

  return (
    <article className={styles.card}>
      {cover && <img src={cover} alt="" className={styles.cover} />}

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.summary}>{summary}</p>

      <ul className={styles.tags} aria-label="Technologies">
        {tech.map((name) => (
          <li key={name}>
            {name}
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        {links.live && (
          <a href={links.live} target="_blank" rel="noreferrer noopener">
            Live demo
          </a>
        )}

        {links.repo && (
          <a href={links.repo} target="_blank" rel="noreferrer noopener">
            Source code
          </a>
        )}
      </div>
    </article>
  )
}
