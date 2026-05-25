import Navbar from "../components/Navbar";
import "./Home.css";

import heroImg from "../assets/hero.jpg";
import craftingImg from "../assets/crafting moment of slience.jpg";
import midnightExpressoImg from "../assets/the-pure-shot.jpeg";
import cheeseCakeImg from "../assets/the-creamy-classic.jpeg";
import coldCoffeeImg from "../assets/the-golden-chilled-brew.jpeg";
import atmosphere1Img from "../assets/astmosphere1.jpg";
import atmosphere2Img from "../assets/atmosphare 2.jpg";

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero__top">
          <h1 className="hero__title">
            The Quiet Art of
            <br />
            Espresso.
          </h1>
          <div className="hero__desc">
            <p>
              A sensory sanctuary born in Manhattan,
              <br />
              where Scandinavian precision meets
              <br />
              industrial warmth.
            </p>
          </div>
        </div>
        <div className="hero__image-wrap">
          <img src={heroImg} alt="" className="hero__image" />
        </div>
      </section>

      {/* Story Section */}
      <section className="story" id="story">
        <div className="story__inner">
          <div className="story__image">
            <img src={craftingImg} alt="Crafting the Momentum of Silence" />
          </div>
          <div className="story__content">
            <span className="story__label">STORY</span>
            <h2 className="story__title">
              Crafting the
              <br />
              Momentum of Silence.
            </h2>
            <div className="story__body">
              <p className="story__text">
                Cafuno was established with a singular vision: to strip away the
                noise of the city and focus on the fundamental purity of the
                bean. Our process is a dialogue between the roaster and the
                harvest.
              </p>
              <a href="#!" className="story__cta">
                LEARN OUR PROCESS
              </a>
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
                src={midnightExpressoImg}
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
                src={cheeseCakeImg}
                alt="Cheese Cake"
                className="bento__img--small"
              />
              <span className="bento__item-name">Cheese Cake</span>
            </div>

            {/* Cold Coffee — top right */}
            <div className="bento__item bento__item--small bento__item--coffee">
              <span className="bento__tag">POUR OVER</span>
              <img
                src={coldCoffeeImg}
                alt="Cold Coffee"
                className="bento__img--small"
              />
              <span className="bento__item-name">Cold Coffee</span>
            </div>

            {/* CTA — bottom right */}
            <a href="/menu" className="bento__item bento__item--cta">
              <span className="bento__cta-text">Explore Full Menu</span>
              <svg
                className="bento__cta-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.2625 13.5l-18.2625 0 0-3 18.2625 0-8.4-8.4 2.1375-2.1 12 12-12 12-2.1375-2.1 8.4-8.4 0 0"
                  fill="#fcf9f8"
                />
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
              <img src={atmosphere1Img} alt="Atmosphere" />
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
            <img src={atmosphere2Img} alt="Cafuno interior" />
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
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 20c-1.38333 0-2.68333-0.2625-3.9-0.7875-1.21667-0.525-2.275-1.2375-3.175-2.1375-0.9-0.9-1.6125-1.95833-2.1375-3.175-0.525-1.21667-0.7875-2.51667-0.7875-3.9 0-1.38333 0.2625-2.68333 0.7875-3.9 0.525-1.21667 1.2375-2.275 2.1375-3.175 0.9-0.9 1.95833-1.6125 3.175-2.1375 1.21667-0.525 2.51667-0.7875 3.9-0.7875 1.38333 0 2.68333 0.2625 3.9 0.7875 1.21667 0.525 2.275 1.2375 3.175 2.1375 0.9 0.9 1.6125 1.95833 2.1375 3.175 0.525 1.21667 0.7875 2.51667 0.7875 3.9 0 1.38333-0.2625 2.68333-0.7875 3.9-0.525 1.21667-1.2375 2.275-2.1375 3.175-0.9 0.9-1.95833 1.6125-3.175 2.1375-1.21667 0.525-2.51667 0.7875-3.9 0.7875v0m-1-2.05v-1.95c-0.55 0-1.02083-0.19583-1.4125-0.5875-0.39167-0.39167-0.5875-0.8625-0.5875-1.4125v-1l-4.8-4.8c-0.05 0.3-0.09583 0.6-0.1375 0.9-0.04167 0.3-0.0625 0.6-0.0625 0.9 0 2.01667 0.6625 3.78333 1.9875 5.3 1.325 1.51667 2.99583 2.4 5.0125 2.65v0m6.9-2.55c0.68333-0.75 1.20417-1.5875 1.5625-2.5125 0.35833-0.925 0.5375-1.8875 0.5375-2.8875 0-1.63333-0.45417-3.125-1.3625-4.475-0.90833-1.35-2.12083-2.325-3.6375-2.925v0.4c0 0.55-0.19583 1.02083-0.5875 1.4125-0.39167 0.39167-0.8625 0.5875-1.4125 0.5875h-2v2c0 0.28333-0.09583 0.52083-0.2875 0.7125-0.19167 0.19167-0.42917 0.2875-0.7125 0.2875h-2v2h6c0.28333 0 0.52083 0.09583 0.7125 0.2875 0.19167 0.19167 0.2875 0.42917 0.2875 0.7125v3h1c0.43333 0 0.825 0.12917 1.175 0.3875 0.35 0.25833 0.59167 0.59583 0.725 1.0125v0"
                fill="#49463f"
              />
            </svg>
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
              <path
                d="M15 20c-0.83333 0-1.54167-0.29167-2.125-0.875-0.58333-0.58333-0.875-1.29167-0.875-2.125 0-0.1 0.025-0.33333 0.075-0.7l-7.025-4.1c-0.26667 0.25-0.575 0.44583-0.925 0.5875-0.35 0.14167-0.725 0.2125-1.125 0.2125-0.83333 0-1.54167-0.29167-2.125-0.875-0.58333-0.58333-0.875-1.29167-0.875-2.125 0-0.83333 0.29167-1.54167 0.875-2.125 0.58333-0.58333 1.29167-0.875 2.125-0.875 0.4 0 0.775 0.07083 1.125 0.2125 0.35 0.14167 0.65833 0.3375 0.925 0.5875l7.025-4.1c-0.03333-0.11667-0.05417-0.22917-0.0625-0.3375-0.00833-0.10833-0.0125-0.22917-0.0125-0.3625 0-0.83333 0.29167-1.54167 0.875-2.125 0.58333-0.58333 1.29167-0.875 2.125-0.875 0.83333 0 1.54167 0.29167 2.125 0.875 0.58333 0.58333 0.875 1.29167 0.875 2.125 0 0.83333-0.29167 1.54167-0.875 2.125-0.58333 0.58333-1.29167 0.875-2.125 0.875-0.4 0-0.775-0.07083-1.125-0.2125-0.35-0.14167-0.65833-0.3375-0.925-0.5875l-7.025 4.1c0.03333 0.11667 0.05417 0.22917 0.0625 0.3375 0.00833 0.10833 0.0125 0.22917 0.0125 0.3625 0 0.13333-0.00417 0.25417-0.0125 0.3625-0.00833 0.10833-0.02917 0.22083-0.0625 0.3375l7.025 4.1c0.26667-0.25 0.575-0.44583 0.925-0.5875 0.35-0.14167 0.725-0.2125 1.125-0.2125 0.83333 0 1.54167 0.29167 2.125 0.875 0.58333 0.58333 0.875 1.29167 0.875 2.125 0 0.83333-0.29167 1.54167-0.875 2.125-0.58333 0.58333-1.29167 0.875-2.125 0.875v0m0-2c0.28333 0 0.52083-0.09583 0.7125-0.2875 0.19167-0.19167 0.2875-0.42917 0.2875-0.7125 0-0.28333-0.09583-0.52083-0.2875-0.7125-0.19167-0.19167-0.42917-0.2875-0.7125-0.2875-0.28333 0-0.52083 0.09583-0.7125 0.2875-0.19167 0.19167-0.2875 0.42917-0.2875 0.7125 0 0.28333 0.09583 0.52083 0.2875 0.7125 0.19167 0.19167 0.42917 0.2875 0.7125 0.2875v0m-12-7c0.28333 0 0.52083-0.09583 0.7125-0.2875 0.19167-0.19167 0.2875-0.42917 0.2875-0.7125 0-0.28333-0.09583-0.52083-0.2875-0.7125-0.19167-0.19167-0.42917-0.2875-0.7125-0.2875-0.28333 0-0.52083 0.09583-0.7125 0.2875-0.19167 0.19167-0.2875 0.42917-0.2875 0.7125 0 0.28333 0.09583 0.52083 0.2875 0.7125 0.19167 0.19167 0.42917 0.2875 0.7125 0.2875v0m12-7c0.28333 0 0.52083-0.09583 0.7125-0.2875 0.19167-0.19167 0.2875-0.42917 0.2875-0.7125 0-0.28333-0.09583-0.52083-0.2875-0.7125-0.19167-0.19167-0.42917-0.2875-0.7125-0.2875-0.28333 0-0.52083 0.09583-0.7125 0.2875-0.19167 0.19167-0.2875 0.42917-0.2875 0.7125 0 0.28333 0.09583 0.52083 0.2875 0.7125 0.19167 0.19167 0.42917 0.2875 0.7125 0.2875v0"
                fill="#49463f"
              />
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
}
