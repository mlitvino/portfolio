import { createContext } from 'react'

export type Theme = 'light' | 'dark'

export interface Point {
  x: number
  y: number
}

export interface ThemeContextValue {
  theme: Theme
  toggleTheme: (origin?: Point) => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)
