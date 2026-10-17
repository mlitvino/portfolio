export type YearMonth = `${number}-${number}`

export interface Experience {
  role: string
  company: string
  location?: string
  start: YearMonth
  end?: YearMonth
  highlights: readonly string[]
  tech?: readonly string[]
}

export interface Education {
  institution: string
  degree: string
  location?: string
  start: YearMonth
  end?: YearMonth
  details?: readonly string[]
}

export interface SkillGroup {
  label: string
  items: readonly string[]
}

export type LanguageLevel =
  | 'elementary'
  | 'intermediate'
  | 'professional'
  | 'fluent'
  | 'native'

export interface SpokenLanguage {
  name: string
  level: LanguageLevel
}

export interface CvFile {
  file: string
  downloadName: string
}

export interface Resume {
  cv?: CvFile
  photo?: string
  intro: string
  story: readonly string[]
  experience: readonly Experience[]
  education: readonly Education[]
  skills: readonly SkillGroup[]
  languages: readonly SpokenLanguage[]
  hobbies: readonly string[]
}
