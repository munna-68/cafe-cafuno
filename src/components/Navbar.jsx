import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const { pathname } = useLocation()
  const isMenu = pathname === '/menu'
  const isReserve = pathname === '/reserve'

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">CAFUNO</Link>
        <div className="navbar__links">
          <a href="/#story" className="navbar__link">STORY</a>
          <Link to="/menu" className={`navbar__link ${isMenu ? 'navbar__link--active' : ''}`}>MENU</Link>
          <a href="/#atmosphere" className="navbar__link">ATMOSPHERE</a>
          <a href="/#locations" className="navbar__link">LOCATIONS</a>
        </div>
        <Link to="/reserve" className={`navbar__cta ${isReserve ? 'navbar__cta--active' : ''}`}>RESERVE</Link>
      </div>
    </nav>
  )
}
