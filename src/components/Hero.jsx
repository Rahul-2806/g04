import './Hero.css';

export default function Hero({ onBookNow }) {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1800&q=85"
          alt="South India"
          className="hero__img"
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <span className="hero__eyebrow">✦ Luxury South India Travel</span>

        <h1 className="hero__title">
          Discover the <br />
          <em>Soul of South India</em>
        </h1>

        <p className="hero__subtitle">
          Handcrafted journeys through emerald hills, ancient temples,<br />
          pristine backwaters, and golden coastlines.
        </p>

        <div className="hero__actions">
          <button className="btn-gold hero__btn-primary" onClick={onBookNow}>
            Book Your Journey
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <a href="#packages" className="btn-outline hero__btn-secondary">
            Explore Packages
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">500+</span>
            <span className="hero__stat-label">Happy Travellers</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">50+</span>
            <span className="hero__stat-label">Destinations</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">6+</span>
            <span className="hero__stat-label">Years Experience</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">4.9★</span>
            <span className="hero__stat-label">Average Rating</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll">
        <span>Scroll to explore</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
