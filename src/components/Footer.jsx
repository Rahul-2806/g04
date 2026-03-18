import './Footer.css';

export default function Footer({ onBookNow }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      {/* CTA Banner */}
      <div className="footer-cta">
        <div className="container footer-cta__inner">
          <div>
            <h3 className="footer-cta__title">Ready for Your Next Adventure?</h3>
            <p className="footer-cta__sub">Book now and experience the magic of South India</p>
          </div>
          <button className="btn-gold footer-cta__btn" onClick={onBookNow}>
            Book via WhatsApp
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container footer-main__grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-g4">G4</span>
              <span className="footer-logo-text">Expeditions</span>
            </div>
            <p className="footer-brand__desc">
              Crafting unforgettable journeys across South India since 2018.
              Every trip is a story waiting to be written.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="footer-social" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" className="footer-social" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col__title">Quick Links</h4>
            <ul className="footer-links">
              {['Packages', 'Destinations', 'Services', 'Food Menu', 'Transport', 'Testimonials'].map(l => (
                <li key={l}><a href={`#${l.toLowerCase().replace(' ', '')}`}>{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col__title">Our Services</h4>
            <ul className="footer-links">
              {['College Tours', 'School Tours', 'Family Tours', 'Pilgrimage', 'Customised Packages'].map(s => (
                <li key={s}><a href="#services">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col__title">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <span>📱</span>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <span>📧</span>
                <a href="mailto:info@g4expeditions.com">info@g4expeditions.com</a>
              </li>
              <li>
                <span>📍</span>
                <span>Kollam, Kerala, South India</span>
              </li>
              <li>
                <span>🕐</span>
                <span>Mon–Sat: 9AM – 7PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom__inner">
          <p>© {year} G4 Expeditions. All rights reserved.</p>
          <p>Crafted with ❤️ for South India travellers</p>
        </div>
      </div>
    </footer>
  );
}
