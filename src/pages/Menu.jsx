import Navbar from '../components/Navbar'
import './Menu.css'

const roastItems = [
  {
    name: 'Ethiopia Yirgacheffe',
    desc: 'Floral, Jasmine, Bergamot. Washed process.',
    badge: 'LIGHT ROAST',
    price: '$24',
    img: '/assets/midnight expresso.jpg',
  },
  {
    name: 'Colombia Supremo',
    desc: 'Caramel, Red Apple, Cocoa. Natural process.',
    badge: 'MEDIUM ROAST',
    price: '$22',
    img: '/assets/cheese cake.jpg',
  },
]

const collectives = [
  {
    name: 'The Pure Shot',
    desc: 'Rich Espresso with Thick Crema',
    img: 'https://images.unsplash.com/photo-1624362776159-9f2281429604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzg2MTEzMjJ8&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'The Morning Bloom',
    desc: 'Premium Cappuccino with Latte Art',
    img: 'https://images.unsplash.com/photo-1712262583546-8caaeb0e4761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzg2MTEzMjJ8&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'The Artisan Flake',
    desc: 'Flaky Buttery Golden Croissant',
    img: 'https://images.unsplash.com/photo-1605215199311-e50edb9c78fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzg2MTEzMjN8&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'The Creamy Classic',
    desc: 'New York Cheesecake with Cherry Garnish',
    img: 'https://images.unsplash.com/photo-1499961161516-49afc271aeed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzg2MTEzMjR8&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'The Golden Chilled Brew',
    desc: 'Honey Cold Brew with Soft Condensation',
    img: 'https://images.unsplash.com/photo-1586771787465-56c3a88f2fd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzg2MTEzMjV8&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'The Savory Brioche',
    desc: 'Breakfast Sandwich with Melted Cheese',
    img: 'https://images.unsplash.com/photo-1661416965611-d88cce80faf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzg2MTEzMjV8&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'The Midnight Decadence',
    desc: 'Dark Chocolate Chunk Cookie',
    img: 'https://images.unsplash.com/photo-1741732667053-0abb166c66b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzg2MTEzMjZ8&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'The Garden Sourdough',
    desc: 'Avocado Toast on Sourdough with Herbs',
    img: 'https://images.unsplash.com/photo-1558137623-ce933996c730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Nzg2MTEzMjZ8&ixlib=rb-4.1.0&q=80&w=1080',
  },
]

export default function Menu() {
  return (
    <div className="menu">
      <Navbar />

      {/* Page Header */}
      <section className="menu-header">
        <div className="menu-header__inner">
          <h1 className="menu-header__title">Our Offerings</h1>
          <p className="menu-header__desc">
            A curated selection of single-origin beans, precision-brewed beverages, and
            artisanal pastries. Sourced globally, crafted locally.
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
                <button className="menu-card__order">ORDER</button>
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
                <h3 className="menu-card__name menu-card__name--sm">{item.name}</h3>
                <p className="menu-card__desc menu-card__desc--sm">{item.desc}</p>
              </div>
              <button className="menu-card__order menu-card__order--sm">ORDER</button>
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
    </div>
  )
}
