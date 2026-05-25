import Navbar from "../components/Navbar";
import "./Atmosphere.css";

import heroImg from "../assets/atmosphare 2.jpg";
import chapterOneImg from "../assets/astmosphere1.jpg";
import chapterTwoImg from "../assets/hero.jpg";

function WaveIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 12c1.5 0 1.5-2 3-2s1.5 2 3 2 1.5-2 3-2 1.5 2 3 2 1.5-2 3-2" />
    </svg>
  );
}

function EqualizerIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5 8v8" />
      <path d="M9 5v14" />
      <path d="M13 9v6" />
      <path d="M17 6v12" />
      <path d="M21 8v8" />
    </svg>
  );
}

export default function Atmosphere() {
  return (
    <div className="atmosphere-page">
      <Navbar />

      <main className="atmosphere-page__main">
        <section className="atmosphere-hero atmosphere-shell">
          <div className="atmosphere-hero__media">
            <img src={heroImg} alt="Cafuno interior at golden hour" />
            <div className="atmosphere-hero__overlay" />
            <div className="atmosphere-hero__content">
              <h1 className="atmosphere-hero__title">The Sensory Narrative.</h1>
              <p className="atmosphere-hero__desc">
                A curated exploration of light, shadow, and acoustics.
                Industrial Zen philosophy materialized in Lower Manhattan.
              </p>
            </div>
          </div>
        </section>

        <section className="atmosphere-shell atmosphere-section atmosphere-section--chapter-1">
          <div className="atmosphere-grid atmosphere-grid--chapter-1">
            <article className="atmosphere-card atmosphere-card--text">
              <span className="atmosphere-card__eyebrow">Chapter 01</span>
              <h2 className="atmosphere-card__title">Sculpting with Light</h2>
              <p className="atmosphere-card__body">
                We don&apos;t merely illuminate spaces; we sculpt them. The
                interplay of harsh, directional morning light and the soft,
                diffused glow of golden hour creates a dynamic environment. The
                raw concrete and exposed brick act as a canvas, catching shadows
                that shift throughout the day, ensuring the atmosphere is never
                static.
              </p>

              <blockquote className="atmosphere-card__quote">
                <span aria-hidden="true">“</span>A space should feel alive,
                breathing with the natural rhythm of the day.
              </blockquote>
            </article>

            <figure className="atmosphere-media atmosphere-media--tall">
              <img
                src={chapterOneImg}
                alt="Soft light and a quiet café table"
              />
            </figure>
          </div>
        </section>

        <section className="atmosphere-shell atmosphere-section atmosphere-section--chapter-2">
          <div className="atmosphere-grid atmosphere-grid--chapter-2">
            <figure className="atmosphere-media atmosphere-media--wide">
              <img
                src={chapterTwoImg}
                alt="Warm oak paneling and espresso equipment"
              />
            </figure>

            <article className="atmosphere-card atmosphere-card--content">
              <span className="atmosphere-card__eyebrow">Chapter 02</span>
              <h2 className="atmosphere-card__title">The Quiet Resonance</h2>
              <p className="atmosphere-card__body atmosphere-card__body--tight">
                Acoustics are the unseen architecture. Our spaces are designed
                to absorb the chaos of the city and amplify the subtle,
                comforting sounds of the craft: the hiss of the steam wand, the
                click of ceramic, the low murmur of conversation. Ribbed wood
                panels and strategic fabric baffling create a muted, intimate
                soundscape.
              </p>

              <div className="atmosphere-card__divider" />

              <div className="atmosphere-features">
                <div className="atmosphere-feature">
                  <span className="atmosphere-feature__icon">
                    <WaveIcon />
                  </span>
                  <div className="atmosphere-feature__text">
                    <span className="atmosphere-feature__label">
                      Acoustic Baffling
                    </span>
                    <span className="atmosphere-feature__desc">
                      Precision-milled oak panels
                    </span>
                  </div>
                </div>

                <div className="atmosphere-feature">
                  <span className="atmosphere-feature__icon">
                    <EqualizerIcon />
                  </span>
                  <div className="atmosphere-feature__text">
                    <span className="atmosphere-feature__label">
                      Curated Frequencies
                    </span>
                    <span className="atmosphere-feature__desc">
                      Custom-tuned spatial audio
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="atmosphere-footer">
        <div className="atmosphere-shell atmosphere-footer__inner">
          <div className="atmosphere-footer__brand">
            <span className="atmosphere-footer__logo">CAFUNO</span>
            <p className="atmosphere-footer__copy">
              © 2024 CAFUNO ARTISAN COFFEE. BORN IN MANHATTAN.
            </p>
          </div>

          <div className="atmosphere-footer__links">
            <a href="#!">JOURNAL</a>
            <a href="#!">WHOLESALE</a>
            <a href="#!">CAREERS</a>
            <a href="#!">PRIVACY</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
