import { site } from '@/shared/config/site'

export default function HomePage() {
  return (
    <>
      <title>{`${site.name} — ${site.title}`}</title>
      <h1>Home</h1>
      <p>Hero, about, featured projects and contacts will go here.</p>
    </>
  )
}
