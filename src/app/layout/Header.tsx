import { Link, NavLink } from 'react-router'

export function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Misha
      </Link>
      <nav aria-label="Main">
        <NavLink to="/" end>
          Home
        </NavLink>
      </nav>
    </header>
  )
}
