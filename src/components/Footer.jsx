import "./Footer.css";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="M3 10h12" />
      <path d="M10 3l7 7-7 7" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__shell site-footer__inner">
        <div className="site-footer__brand">
          <span className="site-footer__logo">CAFUNO</span>
          <p className="site-footer__copy">
            Artisan roasters dedicated to the sensory journey of the bean and
            the architecture of the ritual.
          </p>
        </div>

        <div className="site-footer__links">
          <div className="site-footer__column">
            <span className="site-footer__label">Journal</span>
            <a href="#!">Wholesale</a>
            <a href="#!">Careers</a>
            <a href="#!">Origins</a>
          </div>

          <div className="site-footer__column">
            <span className="site-footer__label">Connect</span>
            <a href="#!">Instagram</a>
            <a href="#!">Newsletter</a>
            <a href="#!">Press</a>
          </div>

          <div className="site-footer__updates">
            <span className="site-footer__label">Updates</span>
            <label className="site-footer__field" htmlFor="email-updates">
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

        <div className="site-footer__meta">
          <span>© 2026 CAFUNO ARTISAN ROASTERS. ALL RIGHTS RESERVED.</span>
          <div>
            <a href="#!">PRIVACY</a>
            <a href="#!">ACCESSIBILITY</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
