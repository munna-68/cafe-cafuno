import { useState } from "react";
import Navbar from "../components/Navbar";
import "./Menu.css";

import pureShot from "../assets/the-pure-shot.jpeg";
import morningBloom from "../assets/the-morning-bloom.jpeg";
import artisanFlake from "../assets/the-artisan-flake.jpeg";
import creamyClassic from "../assets/the-creamy-classic.jpeg";
import goldenChilledBrew from "../assets/the-golden-chilled-brew.jpeg";
import savoryBrioche from "../assets/the-savory-brioche.jpeg";
import midnightDecadence from "../assets/midnight-decadence.jpeg";
import gardenSourdough from "../assets/the-garden-sourdough.jpeg";

const roastItems = [
  {
    name: "Ethiopia Yirgacheffe",
    desc: "Floral, Jasmine, Bergamot. Washed process.",
    badge: "LIGHT ROAST",
    price: "$24",
    img: pureShot,
  },
  {
    name: "Colombia Supremo",
    desc: "Caramel, Red Apple, Cocoa. Natural process.",
    badge: "MEDIUM ROAST",
    price: "$22",
    img: creamyClassic,
  },
];

const collectives = [
  {
    name: "The Pure Shot",
    desc: "Rich Espresso with Thick Crema",
    img: pureShot,
  },
  {
    name: "The Morning Bloom",
    desc: "Premium Cappuccino with Latte Art",
    img: morningBloom,
  },
  {
    name: "The Artisan Flake",
    desc: "Flaky Buttery Golden Croissant",
    img: artisanFlake,
  },
  {
    name: "The Creamy Classic",
    desc: "New York Cheesecake with Cherry Garnish",
    img: creamyClassic,
  },
  {
    name: "The Golden Chilled Brew",
    desc: "Honey Cold Brew with Soft Condensation",
    img: goldenChilledBrew,
  },
  {
    name: "The Savory Brioche",
    desc: "Breakfast Sandwich with Melted Cheese",
    img: savoryBrioche,
  },
  {
    name: "The Midnight Decadence",
    desc: "Dark Chocolate Chunk Cookie",
    img: midnightDecadence,
  },
  {
    name: "The Garden Sourdough",
    desc: "Avocado Toast on Sourdough with Herbs",
    img: gardenSourdough,
  },
];

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="menu">
      <Navbar />

      {/* Page Header */}
      <section className="menu-header">
        <div className="menu-header__inner">
          <h1 className="menu-header__title">Our Offerings</h1>
          <p className="menu-header__desc">
            A curated selection of single-origin beans, precision-brewed
            beverages, and artisanal pastries. Sourced globally, crafted
            locally.
          </p>
        </div>
      </section>

      {/* Section: The Roast Library */}
      <section className="menu-section">
        <div className="menu-section__header">
          <h2 className="menu-section__title">The Roast Library</h2>
          <span className="menu-section__subtitle">Whole Bean Reserves</span>
          <div className="menu-section__border" />
        </div>
        <div className="menu-grid menu-grid--2col">
          {roastItems.map((item, i) => (
            <div key={i} className="menu-card menu-card--roast">
              <div className="menu-card__img-wrap">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="menu-card__body">
                <h3 className="menu-card__name">{item.name}</h3>
                <p className="menu-card__desc">{item.desc}</p>
                <span className="menu-card__badge">{item.badge}</span>
              </div>
              <div className="menu-card__footer">
                <span className="menu-card__price">{item.price}</span>
                <button 
                  className="menu-card__order"
                  onClick={() => setSelectedItem(item)}
                >
                  DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: The Collective */}
      <section className="menu-section">
        <div className="menu-section__header">
          <h2 className="menu-section__title">The Collective</h2>
          <span className="menu-section__subtitle">Signature Offerings</span>
          <div className="menu-section__border" />
        </div>
        <div className="menu-grid menu-grid--4col">
          {collectives.map((item, i) => (
            <div key={i} className="menu-card menu-card--collective">
              <div className="menu-card__img-wrap menu-card__img-wrap--square">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="menu-card__body">
                <h3 className="menu-card__name menu-card__name--sm">
                  {item.name}
                </h3>
                <p className="menu-card__desc menu-card__desc--sm">
                  {item.desc}
                </p>
              </div>
              <button 
                className="menu-card__order menu-card__order--sm"
                onClick={() => setSelectedItem(item)}
              >
                DETAILS
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="menu-page-footer">
        <div className="menu-page-footer__inner">
          <div className="menu-page-footer__brand">
            <span className="menu-page-footer__logo">CAFUNO</span>
          </div>
          <div className="menu-page-footer__links">
            <a href="#!">JOURNAL</a>
            <a href="#!">WHOLESALE</a>
            <a href="#!">CAREERS</a>
            <a href="#!">PRIVACY</a>
          </div>
          <span className="menu-page-footer__copy">
            © 2024 CAFUNO ARTISAN COFFEE. BORN IN MANHATTAN.
          </span>
        </div>
      </footer>

      {/* Item Modal Popup */}
      {selectedItem && (
        <div className="menu-modal">
          <div className="menu-modal__backdrop" onClick={() => setSelectedItem(null)} />
          <div className="menu-modal__content">
            <button className="menu-modal__close" onClick={() => setSelectedItem(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="menu-modal__img">
              <img src={selectedItem.img} alt={selectedItem.name} />
            </div>
            <div className="menu-modal__info">
              {selectedItem.badge && <span className="menu-card__badge">{selectedItem.badge}</span>}
              <h2 className="menu-modal__title">{selectedItem.name}</h2>
              <p className="menu-modal__desc">{selectedItem.desc}</p>
              {selectedItem.price && <span className="menu-modal__price">{selectedItem.price}</span>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
