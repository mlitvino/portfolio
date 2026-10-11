import { resume } from '@/content/resume'
import { site } from '@/shared/config/site'

import styles from './AboutPage.module.css'
import { AboutHeader } from './sections/AboutHeader'
import { EducationSection } from './sections/EducationSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HobbiesSection } from './sections/HobbiesSection'
import { LanguagesSection } from './sections/LanguagesSection'
import { SkillsSection } from './sections/SkillsSection'

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <title>{`About me — ${site.name}`}</title>

      <AboutHeader summary={resume.summary} cv={resume.cv} />
      <ExperienceSection items={resume.experience} />
      <EducationSection items={resume.education} />
      <SkillsSection groups={resume.skills} />
      <LanguagesSection languages={resume.languages} />
      <HobbiesSection hobbies={resume.hobbies} />
    </div>
  )
}
