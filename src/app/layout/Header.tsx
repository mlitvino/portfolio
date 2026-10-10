import { Link, NavLink } from 'react-router'

import { site } from '@/shared/config/site'

import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">{site.name}</Link>
      <nav aria-label="Main" className={styles.nav}>
        <NavLink to="/" end className={({ isActive }) => (isActive ? styles.active : undefined)}>
          Home
        </NavLink>
      </nav>
    </header>
  )
}
