import { destinations } from '../data/data';
import './DestinationsSection.css';

export default function DestinationsSection({ onBook }) {
  return (
    <section className="section destinations-section" id="destinations">
      <div className="container">
        <div className="text-center">
          <span className="section-label">Explore South India</span>
          <h2 className="section-title">Featured <span>Destinations</span></h2>
          <div className="gold-line center" />
          <p className="section-subtitle">
            Discover the most breathtaking destinations across South India with our expert-guided tours
          </p>
        </div>

        <div className="dest-grid">
          {destinations.map((d, i) => (
            <div className="card dest-card" key={d.id} style={{ animationDelay: `${i * 0.07}s` }}>
              {/* Image with overlay */}
              <div className="dest-card__img-wrap">
                <img src={d.image} alt={d.name} className="dest-card__img" />
                <div className="dest-card__img-overlay">
                  <h3 className="dest-card__name">{d.name}</h3>
                  <span className="dest-card__count">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {d.attractions} Attractions
                  </span>
                </div>
                {/* Icons */}
                <div className="dest-card__actions">
                  <button className="dest-card__icon-btn" title="Gallery">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                      <polyline points="21,15 16,10 5,21"/>
                    </svg>
                  </button>
                  <button className="dest-card__icon-btn" title="Map">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="3,6 9,3 15,6 21,3 21,18 15,21 9,18 3,21"/>
                      <line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="dest-card__body">
                <p className="dest-card__pop-title">Popular Attractions:</p>
                <ul className="dest-card__list">
                  {d.popular.map(a => <li key={a}>{a}</li>)}
                </ul>
                {d.more > 0 && (
                  <span className="dest-card__more">+{d.more} more attractions</span>
                )}
                <button className="btn-gold dest-card__btn" onClick={() => onBook({ name: d.name, days: 2 })}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
