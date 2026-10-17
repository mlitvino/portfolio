import { resume } from '@/content/resume'
import { pageTitle } from '@/shared/utils/pageTitle'

import styles from './AboutPage.module.css'
import { AboutHeader } from './sections/AboutHeader'
import { EducationSection } from './sections/EducationSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HobbiesSection } from './sections/HobbiesSection'
import { LanguagesSection } from './sections/LanguagesSection'
import { ProseSection } from './sections/ProseSection'
import { SkillsSection } from './sections/SkillsSection'

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <title>{pageTitle('About')}</title>

      <AboutHeader intro={resume.intro} photo={resume.photo} cv={resume.cv} />
      <ProseSection title="What I do" paragraphs={resume.whatIDo} />
      <ProseSection title="Background" paragraphs={resume.background} />
      <ExperienceSection items={resume.experience} />
      <EducationSection items={resume.education} />
      <SkillsSection groups={resume.skills} />
      <LanguagesSection languages={resume.languages} />
      <HobbiesSection hobbies={resume.hobbies} />
    </div>
  )
}
