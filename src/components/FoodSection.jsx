import { foodMenu } from '../data/data';
import './FoodSection.css';

const meals = [
  {
    key: 'breakfast',
    label: 'Breakfast',
    icon: '☀️',
    color: '#F59E0B',
    bg: '#FEF3C7',
  },
  {
    key: 'lunch',
    label: 'Lunch',
    icon: '🍽️',
    color: '#22C55E',
    bg: '#DCFCE7',
  },
  {
    key: 'dinner',
    label: 'Dinner',
    icon: '🌙',
    color: '#A855F7',
    bg: '#F3E8FF',
  },
];

export default function FoodSection() {
  return (
    <section className="section food-section" id="food">
      {/* Top Banner */}
      <div className="food-banner">
        <img
          src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1600&q=80"
          alt="South Indian Food"
          className="food-banner__img"
        />
        <div className="food-banner__overlay">
          <h3 className="food-banner__title">Authentic South Indian Flavors</h3>
          <p className="food-banner__sub">Fresh, traditional recipes prepared with care</p>
        </div>
      </div>

      <div className="container">
        <div className="text-center" style={{ marginTop: '70px' }}>
          <span className="section-label">Culinary Experience</span>
          <h2 className="section-title">Our Food <span>Menu</span></h2>
          <div className="gold-line center" />
          <p className="section-subtitle">
            Choose what food to order and we will serve you wholeheartedly
          </p>
        </div>

        {/* Meal Cards */}
        <div className="food-grid">
          {meals.map(m => (
            <div className="food-card card" key={m.key}>
              <div className="food-card__header" style={{ background: m.bg }}>
                <div className="food-card__icon" style={{ background: m.color }}>
                  <span>{m.icon}</span>
                </div>
                <h3 className="food-card__title" style={{ color: m.color }}>{m.label}</h3>
              </div>
              <ul className="food-card__list">
                {foodMenu[m.key].map((item, i) => (
                  <li key={i} className="food-card__item">
                    <span className="food-card__dot" style={{ background: m.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Personalized Note */}
        <div className="food-note">
          <div className="food-note__icon">🍴</div>
          <h4 className="food-note__title">Personalized Food Service</h4>
          <p className="food-note__desc">
            Choose what food to order and we will serve you wholeheartedly. Our menu features
            fresh, authentic South Indian cuisine prepared with traditional recipes and high-quality ingredients.
          </p>
          <div className="food-note__alert">
            <strong>Note:</strong> Some dinner items depend on availability and location.
            We ensure the best possible options for your journey.
          </div>
        </div>
      </div>
    </section>
  );
}
