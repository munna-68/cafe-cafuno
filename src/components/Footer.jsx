import { useState } from "react";
import "./Footer.css";

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="M3 10h12" />
      <path d="M10 3l7 7-7 7" />
    </svg>
  );
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Enter your email");
      return;
    }
    if (!isValidEmail(email.trim())) {
      setError("Invalid email address");
      return;
    }
    setError("");
    setSubmitted(true);
  };

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
            {submitted ? (
              <div className="site-footer__success">
                <div className="site-footer__success-icon-wrap">
                  <CheckIcon />
                </div>
                <span className="site-footer__success-label">SUBSCRIBED</span>
                <p className="site-footer__success-desc">
                  You're on the list. We'll be in touch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label className="site-footer__field" htmlFor="email-updates">
                  <span className="sr-only">Email address</span>
                  <input
                    id="email-updates"
                    type="email"
                    placeholder="YOUR EMAIL"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                  />
                  <button type="submit" aria-label="Subscribe to updates">
                    <ArrowIcon />
                  </button>
                </label>
                {error && <span className="site-footer__error">{error}</span>}
              </form>
            )}
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
