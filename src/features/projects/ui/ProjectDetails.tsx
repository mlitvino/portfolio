import buttonStyles from '@/shared/ui/button.module.css'
import { ExternalLink } from '@/shared/ui/ExternalLink'
import { PageHeader } from '@/shared/ui/PageHeader'
import { TagList } from '@/shared/ui/TagList'
import { formatYearMonth } from '@/shared/utils/formatYearMonth'

import type { Project } from '../model/types'
import styles from './ProjectDetails.module.css'

interface ProjectDetailsProps {
  project: Project
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const { title, summary, date, tech, topics, links, visuals, overview, features, learned } =
    project

  const glance = [
    { label: 'Role', value: project.role },
    { label: 'Duration', value: project.duration },
    { label: 'Context', value: project.context },
  ].filter((item) => item.value)

  return (
    <article className={styles.page}>
      <PageHeader title={title}>
        <p className={styles.date}>
          <time dateTime={date}>{formatYearMonth(date)}</time>
        </p>
        <p className={styles.summary}>{summary}</p>

        <div className={styles.tags}>
          <TagList items={tech} label="Technologies" />
          {topics && <TagList items={topics} label="Topics" />}
        </div>

        {(links.live ?? links.repo) && (
          <div className={styles.links}>
            {links.live && (
              <ExternalLink
                href={links.live}
                className={buttonStyles.button}
                data-variant="primary"
              >
                Live demo
              </ExternalLink>
            )}
            {links.repo && (
              <ExternalLink href={links.repo} className={buttonStyles.button}>
                Source code
              </ExternalLink>
            )}
          </div>
        )}
      </PageHeader>

      {visuals && visuals.length > 0 && (
        <section className={styles.section} aria-label="Screenshots">
          {visuals.map((visual) => (
            <figure key={visual.src} className={styles.figure}>
              <img src={visual.src} alt={visual.alt} loading="lazy" className={styles.image} />
              {visual.caption && (
                <figcaption className={styles.caption}>{visual.caption}</figcaption>
              )}
            </figure>
          ))}
        </section>
      )}

      {glance.length > 0 && (
        <section className={styles.section} aria-labelledby="glance-heading">
          <h2 id="glance-heading" className={styles.heading}>At a glance</h2>
          <dl className={styles.glance}>
            {glance.map((item) => (
              <div key={item.label}>
                <dt className={styles.glanceLabel}>{item.label}</dt>
                <dd className={styles.glanceValue}>{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {overview && overview.length > 0 && (
        <section className={styles.section} aria-labelledby="overview-heading">
          <h2 id="overview-heading" className={styles.heading}>Overview</h2>
          {overview.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </section>
      )}

      {features && features.length > 0 && (
        <section className={styles.section} aria-labelledby="features-heading">
          <h2 id="features-heading" className={styles.heading}>Key features</h2>
          <ul className={styles.bullets}>
            {features.map((feature) => (
              <li key={feature}>
                {feature}
              </li>
            ))}
          </ul>
        </section>
      )}

      {learned && learned.length > 0 && (
        <section className={styles.section} aria-labelledby="learned-heading">
          <h2 id="learned-heading" className={styles.heading}>What I learned</h2>
          <ul className={styles.bullets}>
            {learned.map((lesson) => (
              <li key={lesson}>
                {lesson}
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  )
}
