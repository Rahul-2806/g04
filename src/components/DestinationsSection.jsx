import { useState } from 'react';
import { destinations } from '../data/data';
import './DestinationsSection.css';

export default function DestinationsSection({ onBook }) {
  const [active, setActive] = useState(destinations[0]);

  return (
    <section className="dest-section" id="destinations">
      <div className="container">

        {/* ── HEADER ── */}
        <div className="dest-header">
          <div>
            <span className="section-label">Explore South India</span>
            <h2 className="dest-main-title">Featured <em>Destinations</em></h2>
            <div className="gold-line" />
          </div>
          <p className="dest-header__sub">
            Discover breathtaking destinations across South India
            with our expert-guided tours
          </p>
        </div>

        {/* ── SPLIT LAYOUT ── */}
        <div className="dest-layout">

          {/* LEFT — stacked name list */}
          <div className="dest-list">
            {destinations.map((d, i) => (
              <button
                key={d.id}
                className={`dest-list__item ${active.id === d.id ? 'dest-list__item--active' : ''}`}
                onClick={() => setActive(d)}
              >
                <span className="dest-list__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="dest-list__info">
                  <span className="dest-list__name">{d.name}</span>
                  <span className="dest-list__region">{d.region}</span>
                </div>
                <span className="dest-list__count">{d.attractions} sites</span>
                <svg className="dest-list__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            ))}
          </div>

          {/* RIGHT — featured detail panel */}
          <div className="dest-panel" key={active.id}>
            {/* Image */}
            <div className="dest-panel__img-wrap">
              <img src={active.image} alt={active.name} className="dest-panel__img" />
              <div className="dest-panel__img-veil" />

              {/* Top overlay info */}
              <div className="dest-panel__img-top">
                <span className="dest-panel__eyebrow">✦ Featured Destination</span>
                <div className="dest-panel__img-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {active.attractions} Attractions
                </div>
              </div>

              {/* Bottom name overlay */}
              <div className="dest-panel__img-bottom">
                <h3 className="dest-panel__name">{active.name}</h3>
                <p className="dest-panel__region">{active.region}</p>
              </div>
            </div>

            {/* Attractions body */}
            <div className="dest-panel__body">
              <div className="dest-panel__body-header">
                <p className="dest-panel__label">
                  <span className="dest-panel__label-dot" />
                  Popular Attractions
                </p>
                {active.more > 0 && (
                  <span className="dest-panel__more">+{active.more} more</span>
                )}
              </div>

              <ul className="dest-panel__list">
                {active.popular.map((a, i) => (
                  <li className="dest-panel__item" key={a}>
                    <span className="dest-panel__item-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="dest-panel__item-rule" />
                    <span className="dest-panel__item-name">{a}</span>
                    <span className="dest-panel__item-star">✦</span>
                  </li>
                ))}
              </ul>

              <button
                className="dest-panel__btn"
                onClick={() => onBook({ name: active.name, days: 2 })}
              >
                Book This Destination
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}