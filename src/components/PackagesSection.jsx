import { useState } from 'react';
import { packages } from '../data/data';
import './PackagesSection.css';

const days = [1, 2, 3, 4, 5, 6];

function StarRating({ rating }) {
  return (
    <div className="pkg-stars">
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24"
          fill={i <= Math.round(rating) ? '#C9A84C' : 'none'}
          stroke="#C9A84C" strokeWidth="1.5">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
      ))}
      <span>{rating}</span>
    </div>
  );
}

export default function PackagesSection({ onBook }) {
  const [activeDay, setActiveDay] = useState(1);
  const [hovered, setHovered] = useState(null);
  const filtered = packages.filter(p => p.days === activeDay);

  return (
    <section className="pkg-section" id="packages">
      <div className="container">

        {/* ── HEADER ── */}
        <div className="pkg-header">
          <div>
            <span className="section-label">Curated Journeys</span>
            <h2 className="pkg-main-title">Our Tour <em>Packages</em></h2>
            <div className="gold-line" />
          </div>
          <p className="pkg-header__sub">
            From one-day escapes to week-long odysseys —<br />every journey crafted with care.
          </p>
        </div>

        {/* ── DAY FILTER ── */}
        <div className="pkg-filter">
          <span className="pkg-filter__label">Filter by Duration</span>
          <div className="pkg-filter__tabs">
            {days.map(d => (
              <button
                key={d}
                className={`pkg-filter__tab ${activeDay === d ? 'pkg-filter__tab--active' : ''}`}
                onClick={() => setActiveDay(d)}
              >
                <span className="pkg-filter__tab-num">{d}</span>
                <span className="pkg-filter__tab-unit">{d === 1 ? 'Day' : 'Days'}</span>
              </button>
            ))}
          </div>
          <div className="pkg-filter__count">
            {filtered.length} {filtered.length === 1 ? 'Package' : 'Packages'} Available
          </div>
        </div>

        {/* ── CARDS GRID ── */}
        <div className="pkg-grid">
          {filtered.map((pkg, i) => (
            <div
              className={`pkg-card ${hovered === pkg.id ? 'pkg-card--hovered' : ''}`}
              key={pkg.id}
              style={{ animationDelay: `${i * 0.07}s` }}
              onMouseEnter={() => setHovered(pkg.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* ── IMAGE ── */}
              <div className="pkg-card__img-wrap">
                <img src={pkg.image} alt={pkg.name} className="pkg-card__img" />

                {/* Gradient overlay */}
                <div className="pkg-card__veil" />

                {/* Duration badge */}
                <div className="pkg-card__badge">
                  <span className="pkg-card__badge-num">{pkg.days}</span>
                  <span className="pkg-card__badge-unit">{pkg.days === 1 ? 'Day' : 'Days'}</span>
                </div>

                {/* Rating floating top right */}
                <div className="pkg-card__rating-badge">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="#C9A84C" stroke="none">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                  </svg>
                  {pkg.rating}
                </div>

                {/* Name overlay at bottom of image */}
                <div className="pkg-card__img-footer">
                  <h3 className="pkg-card__name">{pkg.name}</h3>
                  <div className="pkg-card__region">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {pkg.region}
                  </div>
                </div>
              </div>

              {/* ── BODY ── */}
              <div className="pkg-card__body">
                {/* Tags */}
                <div className="pkg-card__tags">
                  {pkg.tags.map(t => (
                    <span className="pkg-tag" key={t}>
                      <span className="pkg-tag__dot" />
                      {t}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="pkg-card__rule" />

                {/* Stars + Book row */}
                <div className="pkg-card__footer">
                  <StarRating rating={pkg.rating} />
                  <button className="pkg-card__book" onClick={() => onBook(pkg)}>
                    Book Now
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Left gold border accent — reveals on hover */}
              <div className="pkg-card__accent" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}