import buttonStyles from '@/shared/ui/button.module.css'
import { ExternalLink } from '@/shared/ui/ExternalLink'
import { PageHeader } from '@/shared/ui/PageHeader'
import { Section } from '@/shared/ui/Section'
import { TagList } from '@/shared/ui/TagList'
import { formatYearMonth } from '@/shared/utils/formatYearMonth'

import type { Project } from '../model/types'
import styles from './ProjectDetails.module.css'
import { ScreenshotGallery } from './ScreenshotGallery'

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
        <section className={styles.gallery} aria-label="Screenshots">
          <ScreenshotGallery key={project.slug} visuals={visuals} />
        </section>
      )}

      {glance.length > 0 && (
        <Section title="At a glance">
          <dl className={styles.glance}>
            {glance.map((item) => (
              <div key={item.label}>
                <dt className={styles.glanceLabel}>{item.label}</dt>
                <dd className={styles.glanceValue}>{item.value}</dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      {overview && overview.length > 0 && (
        <Section title="Overview">
          {overview.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </Section>
      )}

      {features && features.length > 0 && (
        <Section title="Key features">
          <ul className={styles.bullets}>
            {features.map((feature) => (
              <li key={feature}>
                {feature}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {learned && learned.length > 0 && (
        <Section title="What I learned">
          <ul className={styles.bullets}>
            {learned.map((lesson) => (
              <li key={lesson}>
                {lesson}
              </li>
            ))}
          </ul>
        </Section>
      )}
    </article>
  )
}
