import { type ReactNode, useEffect, useState } from 'react'
import { flushSync } from 'react-dom'

import { type Point, type Theme, ThemeContext } from './ThemeContext'
import { switchThemeAnimated } from './themeTransition'

const STORAGE_KEY = 'theme'

function readSavedTheme(): Theme | null {
  try {
    // theme key is used in index.html
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'light' || saved === 'dark' ? saved : null
  } catch {
    return null
  }
}

function saveTheme(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch { /* private mode, skip saving */ }
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
}

function getInitialTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    const media = matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event: MediaQueryListEvent) => {
      if (readSavedTheme() !== null) return
      const next = event.matches ? 'dark' : 'light'
      applyTheme(next)
      setTheme(next)
    }
    media.addEventListener('change', onChange)

    return () => {
      media.removeEventListener('change', onChange)
    }
  }, [])

  const value = {
    theme,
    toggleTheme: (origin?: Point) => {
      const next = theme === 'dark' ? 'light' : 'dark'
      const update = () => {
        applyTheme(next)
        saveTheme(next)
        // eslint-disable-next-line @eslint-react/dom-no-flush-sync
        flushSync(() => {
          setTheme(next)
        })
      }

      if (origin) {
        switchThemeAnimated(next, origin, update)
      } else {
        update()
      }
    },
  }

  return <ThemeContext value={value}>{children}</ThemeContext>
}
