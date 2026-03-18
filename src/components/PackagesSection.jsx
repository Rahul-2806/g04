import { useState } from 'react';
import { packages } from '../data/data';
import './PackagesSection.css';

function StarRating({ rating }) {
  return (
    <div className="stars">
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24"
          fill={i <= Math.round(rating) ? 'currentColor' : 'none'}
          stroke="currentColor" strokeWidth="1.5">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
      ))}
      <span>({rating})</span>
    </div>
  );
}

export default function PackagesSection({ onBook }) {
  const [activeDay, setActiveDay] = useState(1);
  const days = [1, 2, 3, 4, 5, 6];
  const filtered = packages.filter(p => p.days === activeDay);

  return (
    <section className="section packages-section" id="packages">
      <div className="container">
        {/* Header */}
        <div className="text-center">
          <span className="section-label">Curated Journeys</span>
          <h2 className="section-title">Our Tour <span>Packages</span></h2>
          <div className="gold-line center" />
          <p className="section-subtitle">
            From one-day escapes to week-long odysseys — every journey crafted with care.
          </p>
        </div>

        {/* Day Filter Tabs */}
        <div className="pkg-tabs">
          {days.map(d => (
            <button
              key={d}
              className={`pkg-tab ${activeDay === d ? 'pkg-tab--active' : ''}`}
              onClick={() => setActiveDay(d)}
            >
              {d} {d === 1 ? 'Day' : 'Days'}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="pkg-grid">
          {filtered.map((pkg, i) => (
            <div className="card pkg-card" key={pkg.id}
              style={{ animationDelay: `${i * 0.08}s` }}>
              {/* Image */}
              <div className="pkg-card__img-wrap">
                <img src={pkg.image} alt={pkg.name} className="pkg-card__img" />
                <div className="pkg-card__badge">{pkg.days} {pkg.days === 1 ? 'Day' : 'Days'}</div>
                <div className="pkg-card__img-overlay" />
              </div>

              {/* Body */}
              <div className="pkg-card__body">
                <h3 className="pkg-card__name">{pkg.name}</h3>
                <div className="pkg-card__region">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {pkg.region}
                </div>

                {/* Tags */}
                <div className="pkg-card__tags">
                  {pkg.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>

                <StarRating rating={pkg.rating} />

                <button className="pkg-card__book btn-gold" onClick={() => onBook(pkg)}>
                  Book Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
