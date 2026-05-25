import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const isMenu = pathname === '/menu'
  const isReserve = pathname === '/reserve'
  const isAtmosphere = pathname === '/atmosphere'
  const isLocations = pathname === '/locations'

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">CAFUNO</Link>
        <div className="navbar__links">
          <a href="/#story" className={`navbar__link ${isHome ? 'navbar__link--active' : ''}`}>STORY</a>
          <Link to="/menu" className={`navbar__link ${isMenu ? 'navbar__link--active' : ''}`}>MENU</Link>
          <Link to="/atmosphere" className={`navbar__link ${isAtmosphere ? 'navbar__link--active' : ''}`}>ATMOSPHERE</Link>
          <Link to="/locations" className={`navbar__link ${isLocations ? 'navbar__link--active' : ''}`}>LOCATIONS</Link>
        </div>
        <Link to="/reserve" className={`navbar__cta ${isReserve ? 'navbar__cta--active' : ''}`}>RESERVE</Link>
      </div>
    </nav>
  )
}
