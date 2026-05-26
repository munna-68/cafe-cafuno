import Footer from "../components/Footer";
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
            <a
              href="/menu"
              className="bento__item bento__item--cta cta-hover-effect"
            >
              <div className="cta-hover-bg"></div>
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
                  fill="currentColor"
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
      <Footer />
    </div>
  );
}
