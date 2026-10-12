import type { ComponentProps } from 'react'

type ExternalLinkProps = Omit<ComponentProps<'a'>, 'target' | 'rel'> & {
  href: string
}

export function ExternalLink({ children, ...props }: ExternalLinkProps) {
  return (
    <a {...props} target="_blank" rel="noreferrer noopener">
      {children}
      <span className="sr-only">{' (opens in a new tab)'}</span>
    </a>
  )
}
