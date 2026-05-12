import Navbar from '../components/Navbar'
import './Menu.css'

const coffees = [
  {
    name: 'Ethiopian Pour-Over',
    desc: 'Single-origin Yirgacheffe, floral notes, jasmine & bergamot',
    price: '$6.50',
  },
  {
    name: 'Classic Cappuccino',
    desc: 'Double espresso, steamed milk, thick velvety microfoam',
    price: '$5.25',
  },
  {
    name: 'Spanish Latte',
    desc: 'Espresso, condensed milk, cinnamon-dusted foam',
    price: '$5.75',
  },
  {
    name: 'Cold Brew Tonic',
    desc: 'Slow-steeped cold brew, tonic water, lemon wheel',
    price: '$6.00',
  },
]

const pastries = [
  {
    name: 'Butter Croissant',
    desc: 'French-style laminated dough, European butter, golden bake',
    price: '$4.50',
  },
  {
    name: 'Almond Pain au Chocolat',
    desc: 'Flaky chocolate-filled pastry topped with sliced almonds',
    price: '$5.25',
  },
  {
    name: 'Sourdough Morning Bun',
    desc: 'Cinnamon-orange glaze, house-starter sourdough, flaky layers',
    price: '$4.75',
  },
  {
    name: 'New York Cheesecake',
    desc: 'Silky cream cheese filling, graham cracker crust, berry compote',
    price: '$7.00',
  },
]

const seasonalLeft = [
  {
    name: 'Lavender Honey Latte',
    desc: 'Espresso, house-made lavender syrup, local honey, oat milk',
    price: '$6.75',
  },
  {
    name: 'Maple Pecan Affogato',
    desc: 'Vanilla gelato, hot espresso shot, candied pecans, maple drizzle',
    price: '$8.50',
  },
  {
    name: 'Smoked Salt Caramel Mocha',
    desc: 'Dark chocolate, smoked sea salt caramel, double espresso',
    price: '$6.50',
  },
]

const seasonalRight = [
  {
    name: 'Citrus Matcha Spritz',
    desc: 'Ceremonial matcha, fresh grapefruit, sparkling water, mint',
    price: '$7.25',
  },
  {
    name: 'Chai Pomegranate Fizz',
    desc: 'House chai concentrate, pomegranate reduction, soda float',
    price: '$5.75',
  },
  {
    name: 'Saffron Cardamom Bouba',
    desc: 'Steamed milk, saffron threads, freshly ground cardamom, rose',
    price: '$7.50',
  },
]

export default function Menu() {
  return (
    <div className="menu">
      <Navbar />

      {/* Hero */}
      <section className="menu-hero">
        <div className="menu-hero__bg">
          <div className="menu-hero__overlay" />
          <img src="/assets/hero.jpg" alt="" />
        </div>
        <div className="menu-hero__content">
          <span className="menu-hero__eyebrow">EXPLORE OUR SELECTION</span>
          <h1 className="menu-hero__title">Artisan Menu</h1>
          <p className="menu-hero__desc">
            Single-origin coffees, handcrafted beverages, and artisanal
            pastries — sourced with intention, prepared with care.
          </p>
          <button className="menu-hero__cta">VIEW FULL MENU</button>
        </div>
      </section>

      {/* Label Row */}
      <div className="menu-labels">
        <span className="menu-labels__item">COFFEE</span>
        <div className="menu-labels__divider" />
        <span className="menu-labels__item">PASTRIES</span>
        <div className="menu-labels__divider" />
        <span className="menu-labels__item">SPECIALS</span>
        <div className="menu-labels__divider" />
        <span className="menu-labels__item">SEASONAL</span>
      </div>

      {/* Zone 1: Coffees */}
      <section className="menu-zone menu-zone--coffee">
        <div className="menu-zone__text">
          <span className="menu-zone__eyebrow">SIGNATURE COFFEES</span>
          <h2 className="menu-zone__title">
            Handcrafted<br />Brews
          </h2>
          <div className="menu-zone__list">
            {coffees.map((item, i) => (
              <div key={i} className="menu-zone__item">
                <span className="menu-zone__item-name">{item.name}</span>
                <span className="menu-zone__item-desc">{item.desc}</span>
                <span className="menu-zone__item-price">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="menu-zone__image">
          <img src="/assets/midnight expresso.jpg" alt="Coffee" />
        </div>
      </section>

      {/* Transition 1 */}
      <div className="menu-transition">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="#7D6B3D">
          <path d="M8 20c0-2.2 1.8-4 4-4h8c2.2 0 4 1.8 4 4v2c0 2.2-1.8 4-4 4h-8c-2.2 0-4-1.8-4-4v-2z" />
          <path d="M10 16V8c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v8" stroke="#7D6B3D" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      {/* Zone 2: Pastries */}
      <section className="menu-zone menu-zone--pastry">
        <div className="menu-zone__image">
          <div className="menu-zone__img-sat" />
          <img src="/assets/cheese cake.jpg" alt="Pastries" />
        </div>
        <div className="menu-zone__text">
          <span className="menu-zone__eyebrow">ARTISAN PASTRIES</span>
          <h2 className="menu-zone__title">
            Baked Fresh<br />Daily
          </h2>
          <div className="menu-zone__list">
            {pastries.map((item, i) => (
              <div key={i} className="menu-zone__item">
                <span className="menu-zone__item-name">{item.name}</span>
                <span className="menu-zone__item-desc">{item.desc}</span>
                <span className="menu-zone__item-price">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition 2 */}
      <div className="menu-transition">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="#7D6B3D">
          <path d="M16 4C9.4 4 4 8.3 4 13.5c0 3.5 2.2 6.7 5.5 8.5l-1 4h15l-1-4c3.3-1.8 5.5-5 5.5-8.5C28 8.3 22.6 4 16 4z" />
          <path d="M12 20c1.5 2 4 3 6 0 2 3 4.5 2 6 0" stroke="#7D6B3D" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Zone 3: Seasonal Specials */}
      <section className="menu-specials">
        <div className="menu-specials__header">
          <span className="menu-specials__eyebrow">SEASONAL SPECIALS</span>
          <h2 className="menu-specials__title">Limited Edition Creations</h2>
        </div>
        <div className="menu-specials__columns">
          <div className="menu-specials__col">
            {seasonalLeft.map((item, i) => (
              <div key={i} className="menu-specials__item">
                <span className="menu-specials__item-name">{item.name}</span>
                <span className="menu-specials__item-desc">{item.desc}</span>
                <span className="menu-specials__item-price">{item.price}</span>
              </div>
            ))}
          </div>
          <div className="menu-specials__col">
            {seasonalRight.map((item, i) => (
              <div key={i} className="menu-specials__item">
                <span className="menu-specials__item-name">{item.name}</span>
                <span className="menu-specials__item-desc">{item.desc}</span>
                <span className="menu-specials__item-price">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition 3 */}
      <div className="menu-transition">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="#7D6B3D">
          <path d="M16 28c-2-4-10-6-10-12 0-3.3 2.7-6 6-6 2.2 0 4.2 1.2 5.2 3h-2.4c-.8-1-2-1.5-3.2-1.5-2.2 0-4 1.8-4 4 0 3.5 4.5 5.5 8.4 10.5 3.9-5 8.4-7 8.4-10.5 0-2.2-1.8-4-4-4-1.2 0-2.4.5-3.2 1.5h-2.4c1-1.8 3-3 5.2-3 3.3 0 6 2.7 6 6 0 6-8 8-10 12z" />
        </svg>
      </div>

      {/* Footer */}
      <footer className="menu-footer">
        <span className="menu-footer__brand">CAFUNO</span>
        <div className="menu-footer__links">
          <a href="/">HOME</a>
          <a href="/menu" className="menu-footer__links--active">MENU</a>
          <a href="#!">LOCATIONS</a>
          <a href="#!">CONTACT</a>
        </div>
        <span className="menu-footer__copy">© 2024 CAFUNO</span>
      </footer>
    </div>
  )
}
