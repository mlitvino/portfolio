import { Link } from 'react-router'

import { featuredProjects, ProjectGrid } from '@/features/projects'
import { Section } from '@/shared/ui/Section'

import styles from '../HomePage.module.css'

export function FeaturedProjects() {
  if (featuredProjects.length === 0) return null

  return (
    <Section title="Featured projects" align="center" className={styles.section}>
      <ProjectGrid projects={featuredProjects} />

      <p className={styles.more}>
        <Link to="/projects">See all projects →</Link>
      </p>
    </Section>
  )
}
