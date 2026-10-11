import { Link } from 'react-router'

import { featuredProjects, ProjectGrid } from '@/features/projects'

import styles from '../HomePage.module.css'

export function FeaturedProjects() {
  if (featuredProjects.length === 0) return null

  return (
    <section className={styles.section} aria-labelledby="featured-heading">
      <h2 id="featured-heading" className={styles.sectionHeading}>
        Featured projects
      </h2>

      <ProjectGrid projects={featuredProjects} />

      <p className={styles.more}>
        <Link to="/projects">See all projects →</Link>
      </p>
    </section>
  )
}
