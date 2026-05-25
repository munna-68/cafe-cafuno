import Navbar from "../components/Navbar";
import "./Location.css";

import heroImg from "../assets/hero.jpg";
import lowerManhattanImg from "../assets/atmosphare 2.jpg";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="M3 10h12" />
      <path d="M10 3l7 7-7 7" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="M10 18c3-3.2 5-5.6 5-8.1A5 5 0 0 0 5 9.9c0 2.5 2 4.9 5 8.1Z" />
      <circle cx="10" cy="9.5" r="1.8" />
    </svg>
  );
}

function SteamIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M8 18c1.8-1.3 1.8-3.6 0-4.9s-1.8-3.6 0-4.9" />
      <path d="M12 18c1.8-1.3 1.8-3.6 0-4.9s-1.8-3.6 0-4.9" />
      <path d="M16 18c1.8-1.3 1.8-3.6 0-4.9s-1.8-3.6 0-4.9" />
    </svg>
  );
}

const locations = [
  {
    name: "Cafuno Soho",
    chapter: "Chapter 01",
    quote:
      "Sculpting with Light. An exploration of soft morning glow and warm oak textures.",
    address: ["124 Prince St", "New York, NY 10012"],
    hours: [
      ["Mon—Fri", "7am — 7pm"],
      ["Sat—Sun", "8am — 8pm"],
    ],
    coords: "40.7247° N, 73.9998° W",
    image: heroImg,
    mapQuery: "124 Prince St, New York, NY 10012",
  },
  {
    name: "Cafuno Lower Manhattan",
    chapter: "Chapter 02",
    quote:
      "Structural Accents. A dialogue between patinated steel and industrial warmth.",
    address: ["45 Wall St", "New York, NY 10005"],
    hours: [
      ["Mon—Fri", "6am — 6pm"],
      ["Sat—Sun", "9am — 5pm"],
    ],
    coords: "40.7061° N, 74.0092° W",
    image: lowerManhattanImg,
    mapQuery: "45 Wall St, New York, NY 10005",
    reverse: true,
  },
];

export default function Location() {
  return (
    <div className="location-page">
      <Navbar />

      <main className="location-page__main">
        <header className="location-hero location-shell">
          <div className="location-hero__content">
            <h1 className="location-hero__title">Our Boutiques</h1>
            <p className="location-hero__desc">
              Spaces designed for the ritual of the pour, localized in New
              York&apos;s most intentional neighborhoods.
            </p>
          </div>
        </header>

        <section
          className="location-shell location-list"
          aria-label="Cafuno boutiques"
        >
          {locations.map((location) => (
            <article
              key={location.name}
              className={`location-card ${location.reverse ? "location-card--reverse" : ""}`}
            >
              <figure className="location-card__media">
                <div className="location-card__image-wrap">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="location-card__image"
                  />
                </div>
                <figcaption className="location-card__coords">
                  <PinIcon />
                  <span>{location.coords}</span>
                </figcaption>
              </figure>

              <div className="location-card__content">
                <div className="location-card__title-row">
                  <h2 className="location-card__title">{location.name}</h2>
                  <SteamIcon />
                </div>

                <p className="location-card__quote">
                  &quot;{location.quote}&quot;
                </p>

                <div className="location-card__details">
                  <div className="location-card__detail">
                    <span className="location-card__label">Address</span>
                    <address className="location-card__address">
                      {location.address[0]}
                      <br />
                      {location.address[1]}
                    </address>
                  </div>

                  <div className="location-card__detail">
                    <span className="location-card__label">Hours</span>
                    <div className="location-card__hours">
                      {location.hours.map(([day, time]) => (
                        <div className="location-card__hours-row" key={day}>
                          <span>{day}</span>
                          <span>{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    className="location-card__map"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapQuery)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Map
                    <ArrowIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="location-shell location-narrative">
          <div className="location-narrative__panel">
            <span className="location-narrative__label">
              Neighborhood Narrative
            </span>
            <p className="location-narrative__title">
              Finding quietude in the heart of the city&apos;s constant
              movement.
            </p>
          </div>
        </section>
      </main>

      <footer className="location-footer">
        <div className="location-shell location-footer__inner">
          <div className="location-footer__brand">
            <span className="location-footer__logo">CAFUNO</span>
            <p className="location-footer__copy">
              Artisan roasters dedicated to the sensory journey of the bean and
              the architecture of the ritual.
            </p>
          </div>

          <div className="location-footer__links">
            <div className="location-footer__column">
              <span className="location-footer__label">Journal</span>
              <a href="#!">Wholesale</a>
              <a href="#!">Careers</a>
              <a href="#!">Origins</a>
            </div>

            <div className="location-footer__column">
              <span className="location-footer__label">Connect</span>
              <a href="#!">Instagram</a>
              <a href="#!">Newsletter</a>
              <a href="#!">Press</a>
            </div>

            <div className="location-footer__updates">
              <span className="location-footer__label">Updates</span>
              <label className="location-footer__field" htmlFor="email-updates">
                <span className="sr-only">Email address</span>
                <input
                  id="email-updates"
                  type="email"
                  placeholder="YOUR EMAIL"
                />
                <button type="button" aria-label="Subscribe to updates">
                  <ArrowIcon />
                </button>
              </label>
            </div>
          </div>

          <div className="location-footer__meta">
            <span>© 2024 CAFUNO ARTISAN ROASTERS. ALL RIGHTS RESERVED.</span>
            <div>
              <a href="#!">PRIVACY</a>
              <a href="#!">ACCESSIBILITY</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
