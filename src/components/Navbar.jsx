import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const MENU_CLOSE_DURATION = 240

export default function Navbar() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuClosing, setMenuClosing] = useState(false)
  const closeTimeoutRef = useRef(null)
  const isHome = pathname === '/'
  const isMenu = pathname === '/menu'
  const isReserve = pathname === '/reserve'
  const isAtmosphere = pathname === '/atmosphere'
  const isLocations = pathname === '/locations'

  const openMenu = () => {
    window.clearTimeout(closeTimeoutRef.current)
    setMenuClosing(false)
    setMenuOpen(true)
  }

  const closeMenu = () => {
    if (!menuOpen || menuClosing) return

    setMenuClosing(true)
    window.clearTimeout(closeTimeoutRef.current)
    closeTimeoutRef.current = window.setTimeout(() => {
      setMenuOpen(false)
      setMenuClosing(false)
    }, MENU_CLOSE_DURATION)
  }

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu()
      return
    }

    openMenu()
  }

  useEffect(() => {
    document.body.classList.toggle('nav-menu-open', menuOpen || menuClosing)

    return () => {
      document.body.classList.remove('nav-menu-open')
    }
  }, [menuOpen, menuClosing])

  useEffect(() => {
    return () => {
      window.clearTimeout(closeTimeoutRef.current)
    }
  }, [])

  return (
    <nav className={`navbar ${menuOpen && !menuClosing ? 'navbar--open' : ''} ${menuClosing ? 'navbar--closing' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">CAFUNO</Link>
        <div className="navbar__links">
          <a href="/#story" className={`navbar__link ${isHome ? 'navbar__link--active' : ''}`} onClick={closeMenu}>STORY</a>
          <Link to="/menu" className={`navbar__link ${isMenu ? 'navbar__link--active' : ''}`} onClick={closeMenu}>MENU</Link>
          <Link to="/atmosphere" className={`navbar__link ${isAtmosphere ? 'navbar__link--active' : ''}`} onClick={closeMenu}>ATMOSPHERE</Link>
          <Link to="/locations" className={`navbar__link ${isLocations ? 'navbar__link--active' : ''}`} onClick={closeMenu}>LOCATIONS</Link>
        </div>
        <Link to="/reserve" className={`navbar__cta ${isReserve ? 'navbar__cta--active' : ''}`} onClick={closeMenu}>RESERVE</Link>
        <button
          className="navbar__toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen && !menuClosing}
          onClick={toggleMenu}
        >
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
