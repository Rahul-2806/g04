import { transportFeatures, seatCapacities } from '../data/data';
import './TransportSection.css';

export default function TransportSection() {
  return (
    <section className="section transport-section" id="transport">
      <div className="container">
        <div className="text-center">
          <span className="section-label">Fleet & Comfort</span>
          <h2 className="section-title">Safe & Comfortable <span>Transportation</span></h2>
          <div className="gold-line center" />
          <p className="section-subtitle">
            Travel in comfort and safety with our modern fleet of well-maintained vehicles
          </p>
        </div>

        {/* Feature Cards */}
        <div className="transport-features">
          {transportFeatures.map((f, i) => (
            <div className="card transport-feat" key={i}>
              <div className="transport-feat__icon" style={{ background: f.color }}>
                <span>{f.icon}</span>
              </div>
              <h4 className="transport-feat__title">{f.title}</h4>
              <p className="transport-feat__desc">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Bus Types + Seating */}
        <div className="transport-bottom">
          {/* Bus Types */}
          <div className="card transport-bus">
            <h4 className="transport-bus__title">
              <span>🚌</span> Bus Types Available
            </h4>
            <div className="transport-bus__types">
              <div className="transport-bus__type transport-bus__type--ac">
                <span>A/C</span>
                <small>Available</small>
              </div>
              <div className="transport-bus__type transport-bus__type--nonac">
                <span>NON A/C</span>
                <small>Available</small>
              </div>
            </div>
          </div>

          {/* Seating Capacities */}
          <div className="card transport-seats">
            <h4 className="transport-seats__title">
              <span>👥</span> Seating Capacities
            </h4>
            <div className="transport-seats__grid">
              {seatCapacities.map(s => (
                <div className="transport-seat" key={s}>
                  {s}{s === 45 ? ' (Glider)' : ''} seats
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
