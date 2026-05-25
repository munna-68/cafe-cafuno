import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const { pathname, hash } = useLocation();
  const isHome = pathname === "/";
  const isLocationsPage = pathname === "/locations";
  const isAtmospherePage = pathname === "/atmosphere";
  const isMenu = pathname === "/menu";
  const isReserve = pathname === "/reserve";
  const isStoryActive = isHome && (!hash || hash === "#story");
  const isHomeAtmosphere = isHome && hash === "#atmosphere";
  const isHomeLocations = isHome && hash === "#locations";

  const storyHref = "/#story";
  const atmosphereHref = isHome ? "/#atmosphere" : "/atmosphere";
  const locationsHref = isHome ? "/#locations" : "/locations";
  const ctaLabel = isLocationsPage ? "ORDER NOW" : "RESERVE";
  const ctaHref = isLocationsPage ? "/menu" : "/reserve";

  const leftLinks = [
    {
      label: "STORY",
      href: storyHref,
      active: isStoryActive,
      anchor: true,
    },
    {
      label: "MENU",
      href: "/menu",
      active: isMenu,
      anchor: false,
    },
    {
      label: "ATMOSPHERE",
      href: atmosphereHref,
      active: isAtmospherePage || isHomeAtmosphere,
      anchor: isHome,
    },
    {
      label: "LOCATIONS",
      href: locationsHref,
      active: isLocationsPage || isHomeLocations,
      anchor: isHome,
    },
  ];

  const rightLinks = isLocationsPage ? [leftLinks[3]] : [];
  const visibleLeftLinks = isLocationsPage ? leftLinks.slice(0, 3) : leftLinks;

  const renderLink = (link) => {
    const className = `navbar__link ${link.active ? "navbar__link--active" : ""}`;

    if (link.anchor) {
      return (
        <a key={link.label} href={link.href} className={className} aria-current={link.active ? "page" : undefined}>
          {link.label}
        </a>
      );
    }

    return (
      <Link key={link.label} to={link.href} className={className} aria-current={link.active ? "page" : undefined}>
        {link.label}
      </Link>
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar__group navbar__group--left">
          {visibleLeftLinks.map(renderLink)}
        </div>

        <Link to="/" className="navbar__logo">
          CAFUNO
        </Link>

        <div className="navbar__group navbar__group--right">
          {rightLinks.map(renderLink)}
          <Link
            to={ctaHref}
            className={`navbar__cta ${isReserve ? "navbar__cta--active" : ""}`}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </nav>
  );
}
