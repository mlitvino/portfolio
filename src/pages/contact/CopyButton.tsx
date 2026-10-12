import { useEffect, useState } from 'react'

import styles from './ContactPage.module.css'

type Status = 'idle' | 'copied' | 'failed'

const statusText: Record<Status, string> = {
  idle: 'Copy',
  copied: 'Copied!',
  failed: 'Failed',
}

interface CopyButtonProps {
  value: string
  label: string
}

export function CopyButton({ value, label }: CopyButtonProps) {
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    if (status === 'idle') return undefined

    const timer = setTimeout(() => {
      setStatus('idle')
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [status])

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setStatus('copied')
    } catch {
      setStatus('failed')
    }
  }

  return (
    <button
      type="button"
      className={styles.button}
      aria-live="polite"
      onClick={() => { void copy() }}
    >
      {statusText[status]}
      <span className={styles.srOnly}>{` ${label}`}</span>
    </button>
  )
}
