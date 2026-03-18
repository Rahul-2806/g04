import { useState, useEffect } from 'react';
import { testimonials } from '../data/data';
import './TestimonialsSection.css';

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section testi-section" id="testimonials">
      <div className="container">
        <div className="text-center">
          <span className="section-label">Guest Stories</span>
          <h2 className="section-title">What Our <span>Travellers Say</span></h2>
          <div className="gold-line center" />
        </div>

        <div className="testi-carousel">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`testi-card card ${i === active ? 'testi-card--active' : ''}`}
            >
              {/* Quote mark */}
              <div className="testi-quote">"</div>

              {/* Stars */}
              <div className="stars testi-stars">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                  </svg>
                ))}
              </div>

              <p className="testi-text">"{t.text}"</p>

              <div className="testi-author">
                <div className="testi-avatar">{t.avatar}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-loc">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="testi-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testi-dot ${i === active ? 'testi-dot--active' : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
