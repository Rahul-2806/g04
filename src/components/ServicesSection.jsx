import { useState } from 'react';
import './ServicesSection.css';

const services = [
  {
    id: 1,
    roman: 'I',
    title: 'College Tours',
    subtitle: 'Campus to Adventure',
    desc: 'Educational and fun trips designed for college students — blending exploration, culture, and unforgettable memories.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    stat: '200+ Groups',
  },
  {
    id: 2,
    roman: 'II',
    title: 'School Tours',
    subtitle: 'Learn Beyond Classrooms',
    desc: 'Safe and enriching excursions for school groups — crafted to educate, inspire and delight young minds.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
    stat: '150+ Schools',
  },
  {
    id: 3,
    roman: 'III',
    title: 'Family Tours',
    subtitle: 'Together is Better',
    desc: 'Perfect getaways for families of all sizes — thoughtfully planned so every age group has something to cherish.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    stat: '500+ Families',
  },
  {
    id: 4,
    roman: 'IV',
    title: 'Pilgrimage',
    subtitle: 'Sacred Journeys',
    desc: 'Spiritual journeys to India\'s most sacred destinations — handled with deep reverence and meticulous care.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    stat: '100+ Routes',
  },
  {
    id: 5,
    roman: 'V',
    title: 'Customised Packages',
    subtitle: 'Your Vision, Our Craft',
    desc: 'Tailored travel experiences built entirely around your preferences — every detail curated to perfection.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/>
        <path d="M22.54 6.42a15 15 0 010 11.16M1.46 6.42a15 15 0 000 11.16"/>
      </svg>
    ),
    stat: 'Fully Flexible',
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="srv-section" id="services">
      <div className="container">

        {/* ── HEADER ── */}
        <div className="srv-header">
          <div className="srv-header__left">
            <span className="section-label">What We Offer</span>
            <h2 className="srv-title-main">
              Our <em>Services</em>
            </h2>
            <div className="gold-line" />
          </div>
          <p className="srv-header__sub">
            Comprehensive travel solutions crafted for every kind of journey — from spiritual sojourns to family adventures.
          </p>
        </div>

        {/* ── MAIN LAYOUT ── */}
        <div className="srv-layout">

          {/* Left — vertical tab list */}
          <div className="srv-tabs">
            {services.map((s, i) => (
              <button
                key={s.id}
                className={`srv-tab ${active === i ? 'srv-tab--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="srv-tab__roman">{s.roman}</span>
                <span className="srv-tab__name">{s.title}</span>
                <svg className="srv-tab__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            ))}
          </div>

          {/* Right — detail panel */}
          <div className="srv-panel" key={active}>
            {/* Top accent line */}
            <div className="srv-panel__top-line" />

            <div className="srv-panel__inner">
              {/* Roman + icon */}
              <div className="srv-panel__badge-row">
                <span className="srv-panel__roman">{services[active].roman}</span>
                <div className="srv-panel__icon">{services[active].icon}</div>
              </div>

              {/* Titles */}
              <p className="srv-panel__subtitle">{services[active].subtitle}</p>
              <h3 className="srv-panel__title">{services[active].title}</h3>

              {/* Divider */}
              <div className="srv-panel__rule">
                <span />
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                </svg>
                <span />
              </div>

              {/* Description */}
              <p className="srv-panel__desc">{services[active].desc}</p>

              {/* Stat pill */}
              <div className="srv-panel__stat">
                <span className="srv-panel__stat-dot" />
                {services[active].stat}
              </div>

              {/* Progress dots */}
              <div className="srv-panel__dots">
                {services.map((_, i) => (
                  <button
                    key={i}
                    className={`srv-panel__dot ${i === active ? 'srv-panel__dot--active' : ''}`}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>
            </div>

            {/* Big faint background roman */}
            <span className="srv-panel__bg-num">{services[active].roman}</span>
          </div>

        </div>
      </div>
    </section>
  );
}