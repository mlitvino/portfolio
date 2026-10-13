import { NotFound } from '@/shared/ui/NotFound'
import { pageTitle } from '@/shared/utils/pageTitle'

export default function NotFoundPage() {
  return (
    <>
      <title>{pageTitle('Page not found')}</title>
      <NotFound />
    </>
  )
}
