import { siteConfig } from '@/shared/config/site'

export function pageTitle(title?: string): string {
  return title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.title}`
}
