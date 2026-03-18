import { useState } from 'react';
import { foodMenu } from '../data/data';
import './FoodSection.css';

const meals = [
  {
    key: 'breakfast',
    label: 'Breakfast',
    time: '7:00 AM — 9:00 AM',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    ),
    roman: 'I',
  },
  {
    key: 'lunch',
    label: 'Lunch',
    time: '1:00 PM — 3:00 PM',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/>
        <line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    roman: 'II',
  },
  {
    key: 'dinner',
    label: 'Dinner',
    time: '8:00 PM — 10:00 PM',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
      </svg>
    ),
    roman: 'III',
  },
];

export default function FoodSection() {
  const [active, setActive] = useState('breakfast');
  const activeMeal = meals.find(m => m.key === active);

  return (
    <section className="food-section" id="food">

      {/* FULL-BLEED HERO */}
      <div className="food-hero">
        <img
          src="https://images.unsplash.com/photo-1630383249896-424e482df921?w=1800&q=85"
          alt="South Indian cuisine"
          className="food-hero__img"
        />
        <div className="food-hero__veil" />
        <div className="food-hero__content">
          <span className="food-hero__eyebrow">✦ Culinary Excellence</span>
          <h2 className="food-hero__title">
            A Journey of <em>Flavours</em>
          </h2>
          <p className="food-hero__sub">
            Authentic South Indian cuisine, prepared fresh with heirloom recipes
          </p>
          <div className="food-hero__rule">
            <span />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
            </svg>
            <span />
          </div>
        </div>
      </div>

      {/* MENU BODY */}
      <div className="food-body">
        <div className="container">

          {/* Tabs */}
          <div className="food-tabs">
            {meals.map(m => (
              <button
                key={m.key}
                className={`food-tab ${active === m.key ? 'food-tab--active' : ''}`}
                onClick={() => setActive(m.key)}
              >
                <span className="food-tab__roman">{m.roman}</span>
                <span className="food-tab__label">{m.label}</span>
                <span className="food-tab__time">{m.time}</span>
              </button>
            ))}
          </div>

          {/* Panel */}
          <div className="food-panel" key={active}>

            {/* Left decorative column */}
            <div className="food-panel__deco">
              <div className="food-panel__deco-icon">
                {activeMeal.icon}
              </div>
              <div className="food-panel__deco-line" />
              <div className="food-panel__deco-num">{activeMeal.roman}</div>
              <p className="food-panel__deco-label">{activeMeal.label}</p>
              <p className="food-panel__deco-time">{activeMeal.time}</p>
            </div>

            {/* Dish list */}
            <div className="food-panel__dishes">
              <div className="food-panel__header">
                <h3 className="food-panel__title">
                  {activeMeal.label} <em>Selections</em>
                </h3>
                <p className="food-panel__count">{foodMenu[active].length} Dishes</p>
              </div>

              <ul className="food-dish-list">
                {foodMenu[active].map((item, i) => (
                  <li className="food-dish" key={i}>
                    <span className="food-dish__num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="food-dish__line" />
                    <span className="food-dish__name">{item}</span>
                    <span className="food-dish__leaf">✦</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Promise card */}
          <div className="food-promise">
            <div className="food-promise__icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.2">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
              </svg>
            </div>
            <div className="food-promise__body">
              <h4 className="food-promise__title">Personalised Food Service</h4>
              <p className="food-promise__desc">
                Every meal is crafted with care using fresh, traditional ingredients sourced locally.
                Choose your preferences and we ensure a dining experience worthy of royalty.
              </p>
            </div>
            <div className="food-promise__note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              Some dinner items subject to availability &amp; location
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}