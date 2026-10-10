import { site } from '@/shared/config/site'

export default function AboutPage() {
  return (
    <>
      <title>{`About me — ${site.name}`}</title>
      <h1>About me</h1>
      <p>Who I am, what I do, skills and experience will go here.</p>
    </>
  )
}
