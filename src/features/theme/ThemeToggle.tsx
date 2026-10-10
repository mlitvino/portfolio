import { useTheme } from './useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button type="button" onClick={toggleTheme}>
      {theme === 'dark' ? 'Light mode' : 'Dark mode'}
    </button>
  )
}
