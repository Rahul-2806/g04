import { useState } from 'react';
import { transportFeatures, seatCapacities } from '../data/data';
import './TransportSection.css';

const features = [
  {
    roman: 'I',
    title: 'Modern Fleet',
    desc: 'Well-maintained buses serviced regularly for peak performance on every route.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    roman: 'II',
    title: 'Safety First',
    desc: 'Experienced drivers with impeccable safety records and valid certifications.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9,12 11,14 15,10"/>
      </svg>
    ),
  },
  {
    roman: 'III',
    title: 'Comfort Journey',
    desc: 'AC and Non-AC options with plush seating, ample legroom and onboard amenities.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M18 8h1a4 4 0 010 8h-1"/>
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/>
        <line x1="10" y1="1" x2="10" y2="4"/>
        <line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
  },
  {
    roman: 'IV',
    title: 'Expert Drivers',
    desc: 'Professional drivers with years of South India route expertise and courteous service.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
];

const busTypes = [
  {
    type: 'A/C',
    label: 'Air Conditioned',
    detail: 'Climate-controlled for maximum comfort on long journeys across South India',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>
      </svg>
    ),
  },
  {
    type: 'NON A/C',
    label: 'Non Air Conditioned',
    detail: 'Spacious and breezy, ideal for scenic hill routes and shorter excursions',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/>
      </svg>
    ),
  },
];

export default function TransportSection() {
  const [hoveredSeat, setHoveredSeat] = useState(null);

  return (
    <section className="transport-section" id="transport">

      {/* ── FULL-BLEED HERO ── */}
      <div className="transport-hero">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1800&q=85"
          alt="Luxury transport"
          className="transport-hero__img"
        />
        <div className="transport-hero__veil" />
        <div className="transport-hero__content">
          <span className="transport-hero__eyebrow">✦ Premium Fleet</span>
          <h2 className="transport-hero__title">
            Travel in <em>Absolute Comfort</em>
          </h2>
          <div className="transport-hero__rule">
            <span />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
            </svg>
            <span />
          </div>
          <p className="transport-hero__sub">
            Modern fleet · Expert drivers · Safe journeys · All of South India
          </p>
        </div>
      </div>

      {/* ── DARK BODY ── */}
      <div className="transport-body">
        <div className="container">

          {/* ── FEATURES TIMELINE ── */}
          <div className="transport-timeline">
            {features.map((f, i) => (
              <div className="transport-node" key={i}>
                <div className="transport-node__roman">{f.roman}</div>
                <div className="transport-node__circle">{f.icon}</div>
                {i < features.length - 1 && <div className="transport-node__connector" />}
                <h4 className="transport-node__title">{f.title}</h4>
                <p className="transport-node__desc">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* ── GOLD DIVIDER ── */}
          <div className="transport-divider">
            <span />
            <span className="transport-divider__text">Our Fleet</span>
            <span />
          </div>

          {/* ── BUS TYPES — side by side luxury cards ── */}
          <div className="transport-bus-row">
            {busTypes.map((b, i) => (
              <div className="transport-bus-card" key={i}>
                {/* Large faint bg letter */}
                <span className="transport-bus-card__bg-text">{i === 0 ? 'AC' : 'N'}</span>
                <div className="transport-bus-card__icon-wrap">
                  <div className="transport-bus-card__icon">{b.icon}</div>
                </div>
                <div className="transport-bus-card__body">
                  <div className="transport-bus-card__top">
                    <h4 className="transport-bus-card__type">{b.type}</h4>
                    <span className="transport-bus-card__badge">Available</span>
                  </div>
                  <p className="transport-bus-card__label">{b.label}</p>
                  <div className="transport-bus-card__rule" />
                  <p className="transport-bus-card__detail">{b.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── SEATING CAPACITIES ── */}
          <div className="transport-seats-section">
            <div className="transport-seats-header">
              <span className="section-label" style={{ color: 'var(--gold)' }}>Capacity Options</span>
              <h3 className="transport-seats-title">Seating <em>Capacities</em></h3>
              <p className="transport-seats-sub">Choose the perfect vehicle size for your group</p>
            </div>

            <div className="transport-seats-grid">
              {seatCapacities.map((s, i) => (
                <div
                  className={`transport-seat-card ${hoveredSeat === i ? 'transport-seat-card--active' : ''}`}
                  key={s}
                  onMouseEnter={() => setHoveredSeat(i)}
                  onMouseLeave={() => setHoveredSeat(null)}
                >
                  <span className="transport-seat-card__num">{s}</span>
                  <span className="transport-seat-card__label">Seats</span>
                  {s === 45 && <span className="transport-seat-card__tag">Glider</span>}
                  <div className="transport-seat-card__shine" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}