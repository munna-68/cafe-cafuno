import Navbar from '../components/Navbar'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero__text">
          <h1 className="hero__title">
            The Quiet Art of<br />Espresso.
          </h1>
        </div>
        <div className="hero__desc">
          <p>
            A sensory sanctuary born in Manhattan,<br />
            where Scandinavian precision meets<br />
            industrial warmth.
          </p>
        </div>
        <div className="hero__image-wrap">
          <img
            src="/assets/hero.jpg"
            alt=""
            className="hero__image"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="story" id="story">
        <div className="story__inner">
          <div className="story__image">
            <img
              src="/assets/crafting moment of slience.jpg"
              alt="Crafting the Momentum of Silence"
            />
          </div>
          <div className="story__content">
            <span className="story__label">STORY</span>
            <h2 className="story__title">
              Crafting the<br />Momentum of Silence.
            </h2>
            <div className="story__body">
              <p className="story__text">
                Cafuno was established with a singular vision: to strip away
                the noise of the city and focus on the fundamental purity of
                the bean. Our process is a dialogue between the roaster and
                the harvest.
              </p>
              <a href="#!" className="story__cta">LEARN OUR PROCESS</a>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Bento Section */}
      <section className="bento" id="menu">
        <div className="bento__inner">
          <div className="bento__header">
            <h2 className="bento__heading">Curated Selection</h2>
            <span className="bento__season">SEASON 01 — SPRING</span>
          </div>
          <div className="bento__grid">
            {/* Midnight Espresso — large left */}
            <div className="bento__item bento__item--large">
              <img
                src="/assets/midnight expresso.jpg"
                alt="Midnight Espresso"
                className="bento__img--large"
              />
              <div className="bento__item-body">
                <h3 className="bento__item-title">Midnight Espresso</h3>
                <p className="bento__item-desc">
                  our signature roast, featuring a rich, velvety body and a
                  dense, golden crema.
                </p>
              </div>
            </div>

            {/* Cheese Cake — top middle */}
            <div className="bento__item bento__item--small bento__item--cake">
              <span className="bento__tag">POUR OVER</span>
              <img
                src="/assets/cheese cake.jpg"
                alt="Cheese Cake"
                className="bento__img--small"
              />
              <span className="bento__item-name">Cheese Cake</span>
            </div>

            {/* Cold Coffee — top right */}
            <div className="bento__item bento__item--small bento__item--coffee">
              <span className="bento__tag">POUR OVER</span>
              <div className="bento__img--placeholder" />
              <span className="bento__item-name">Cold Coffee</span>
            </div>

            {/* CTA — bottom right */}
            <a href="/menu" className="bento__item bento__item--cta">
              <span className="bento__cta-text">Explore Full Menu</span>
              <svg className="bento__cta-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fcf9f8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section className="atmosphere" id="atmosphere">
        <div className="atmosphere__inner">
          <div className="atmosphere__col">
            <div className="atmosphere__img-frame">
              <img
                src="/assets/astmosphere1.jpg"
                alt="Atmosphere"
              />
            </div>
            <div className="atmosphere__text-block">
              <h3 className="atmosphere__title">Atmosphere</h3>
              <p className="atmosphere__desc">
                Designed by Studio Nord, our spaces are a study in negative
                space and material integrity.
              </p>
            </div>
          </div>
          <div className="atmosphere__col-img">
            <img
              src="/assets/atmosphare 2.jpg"
              alt="Cafuno interior"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer" id="locations">
        <div className="home-footer__inner">
          <div className="home-footer__brand">
            <span className="home-footer__logo">CAFUNO</span>
            <span className="home-footer__copy">
              © 2024 CAFUNO ARTISAN COFFEE. BORN IN MANHATTAN.
            </span>
          </div>
          <div className="home-footer__links">
            <a href="#!">JOURNAL</a>
            <a href="#!">WHOLESALE</a>
            <a href="#!">CAREERS</a>
            <a href="#!">PRIVACY</a>
          </div>
          <div className="home-footer__social">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#49463f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
            <svg width="18" height="20" viewBox="0 0 24 24" fill="none" stroke="#49463f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </div>
        </div>
      </footer>
    </div>
  )
}
