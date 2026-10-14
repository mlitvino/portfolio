import { Link, NavLink } from 'react-router'

import { ThemeToggle } from '@/features/theme'
import { siteConfig } from '@/shared/config/site'

import styles from './Header.module.css'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo} viewTransition>
        {siteConfig.name}
      </Link>
      <div className={styles.actions}>
        <nav aria-label="Main" className={styles.nav}>
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              viewTransition
              className={({ isActive }) => (isActive ? styles.active : undefined)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
