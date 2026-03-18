import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ onBookNow }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Packages', href: '#packages' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Services', href: '#services' },
    { label: 'Food', href: '#food' },
    { label: 'Transport', href: '#transport' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-g4">G4</span>
          <span className="navbar__logo-text">Expeditions</span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map(l => (
            <li key={l.label}>
              <a href={l.href} className="navbar__link">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="btn-gold navbar__cta" onClick={onBookNow}>
          Book Now
        </button>

        {/* Hamburger */}
        <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar__mobile">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} className="navbar__mobile-link"
               onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <button className="btn-gold" onClick={() => { setMenuOpen(false); onBookNow(); }}>
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}
