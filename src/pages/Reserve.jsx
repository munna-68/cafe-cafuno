import Navbar from '../components/Navbar'
import './Reserve.css'

export default function Reserve() {
  return (
    <div className="reserve">
      <Navbar />

      <section className="reserve__main">
        {/* Title area */}
        <div className="reserve__title-area">
          <h1 className="reserve__title">Reserve a Moment</h1>
          <p className="reserve__desc">
            Secure your place in our atmosphere. A curated experience of
            architectural warmth and exceptional espresso, prepared
            exclusively for you.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="reserve__grid">
          {/* Left — imagery */}
          <div className="reserve__col-left">
            <div className="reserve__image-wrap">
              <img
                src="/assets/astmosphere1.jpg"
                alt="Cafuno Interior"
                className="reserve__image"
              />
            </div>
            <div className="reserve__quote-wrap">
              <div className="reserve__quote-border">
                <div className="reserve__quote-content">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7b776e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                  <p className="reserve__quote-text">
                    &ldquo;The ritual of coffee, elevated by space and silence.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="reserve__col-right">
            <div className="reserve__form-shadow" />
            <div className="reserve__form">
              {/* Select Boutique */}
              <div className="reserve__field">
                <label className="reserve__label">SELECT BOUTIQUE</label>
                <div className="reserve__select">
                  <span className="reserve__select-text">Choose a location</span>
                  <svg className="reserve__select-arrow" width="12" height="7" viewBox="0 0 12 8" fill="none" stroke="#7b776e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 1l5 5 5-5" />
                  </svg>
                </div>
              </div>

              {/* Date & Hour */}
              <div className="reserve__row">
                <div className="reserve__field">
                  <label className="reserve__label">DATE</label>
                  <div className="reserve__input">
                    <span className="reserve__input-text">Choose a date</span>
                  </div>
                </div>
                <div className="reserve__field">
                  <label className="reserve__label">HOUR</label>
                  <div className="reserve__select">
                    <span className="reserve__select-text">Choose a time</span>
                    <svg className="reserve__select-arrow" width="12" height="7" viewBox="0 0 12 8" fill="none" stroke="#7b776e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 1l5 5 5-5" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Guests */}
              <div className="reserve__field">
                <label className="reserve__label">GUESTS</label>
                <div className="reserve__select">
                  <span className="reserve__select-text">2 People</span>
                  <svg className="reserve__select-arrow" width="12" height="7" viewBox="0 0 12 8" fill="none" stroke="#7b776e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 1l5 5 5-5" />
                  </svg>
                </div>
              </div>

              {/* Special Requests */}
              <div className="reserve__field">
                <label className="reserve__label">NOTES (OPTIONAL)</label>
                <textarea
                  className="reserve__textarea"
                  placeholder="Any special requests?"
                  rows={1}
                />
              </div>

              {/* Submit */}
              <button className="reserve__submit">
                <span>CONFIRM RESERVATION</span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1b1c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              {/* Footnote */}
              <p className="reserve__footnote">
                Reservations are held for 15 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="reserve-footer">
        <div className="reserve-footer__inner">
          <div className="reserve-footer__brand">
            <span className="reserve-footer__logo">CAFUNO</span>
            <span className="reserve-footer__copy">
              © 2024 CAFUNO ARTISAN COFFEE. BORN IN MANHATTAN.
            </span>
          </div>
          <div className="reserve-footer__links">
            <a href="/">JOURNAL</a>
            <a href="/">WHOLESALE</a>
            <a href="/">CAREERS</a>
            <a href="/">PRIVACY</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
