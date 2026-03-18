import { services } from '../data/data';
import './ServicesSection.css';

export default function ServicesSection() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="text-center">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Our <span>Services</span></h2>
          <div className="gold-line center" />
          <p className="section-subtitle">
            We offer comprehensive travel solutions for every type of journey
          </p>
        </div>

        <div className="srv-grid">
          {services.map((s, i) => (
            <div className="card srv-card" key={s.id} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="srv-icon" style={{ background: s.color }}>
                <span>{s.icon}</span>
              </div>
              <h3 className="srv-title">{s.title}</h3>
              <p className="srv-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
