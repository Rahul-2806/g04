import { useState, useEffect } from 'react';
import { db } from '../firebase';
import {
  collection, addDoc, onSnapshot,
  orderBy, query, serverTimestamp
} from 'firebase/firestore';
import './TestimonialsSection.css';

function StarPicker({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="star-picker">
      {[1,2,3,4,5].map(s => (
        <button
          key={s} type="button"
          className={`star-picker__star ${s <= (hovered || value) ? 'star-picker__star--on' : ''}`}
          onMouseEnter={() => setHovered(s)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(s)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24"
            fill={s <= (hovered || value) ? '#C9A84C' : 'none'}
            stroke="#C9A84C" strokeWidth="1.5">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
          </svg>
        </button>
      ))}
    </div>
  );
}

function ReviewForm({ onClose }) {
  const [form, setForm] = useState({ name: '', location: '', rating: 0, text: '' });
  const [focused, setFocused] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.rating || !form.text) {
      alert('Please fill your name, rating and review.');
      return;
    }
    setSubmitting(true);
    try {
      await addDoc(collection(db, 'reviews'), {
        name: form.name,
        location: form.location || 'India',
        rating: form.rating,
        text: form.text,
        avatar: form.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2),
        createdAt: serverTimestamp(),
      });
      setDone(true);
    } catch (err) {
      alert('Something went wrong. Please try again.');
    }
    setSubmitting(false);
  };

  return (
    <div className="rf-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="rf-box">

        {/* Left */}
        <div className="rf-left">
          <div className="rf-corner rf-corner--tl" />
          <div className="rf-corner rf-corner--br" />
          <span className="rf-left__eyebrow">✦ G4 Expeditions</span>
          <h2 className="rf-left__title">Share Your <em>Experience</em></h2>
          <div className="rf-left__rule"><span />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
            </svg>
          <span /></div>
          <p className="rf-left__desc">
            Your journey matters to us. Share your story and help fellow travellers discover the magic of South India.
          </p>
          <div className="rf-left__points">
            {['Your review goes live instantly','Helps other travellers decide','Takes less than 2 minutes'].map(p => (
              <div className="rf-left__point" key={p}>
                <span className="rf-left__point-dot" />
                <span>{p}</span>
              </div>
            ))}
          </div>
          <div className="rf-left__quote">"Every journey begins with a single step — and a great review helps others take theirs."</div>
        </div>

        {/* Right */}
        <div className="rf-right">
          <button className="rf-close" onClick={onClose}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          {done ? (
            <div className="rf-success">
              <div className="rf-success__icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                  <polyline points="22,4 12,14.01 9,11.01"/>
                </svg>
              </div>
              <h3 className="rf-success__title">Thank You!</h3>
              <p className="rf-success__sub">Your review has been published. We appreciate your time!</p>
              <button className="rf-success__btn" onClick={onClose}>Close</button>
            </div>
          ) : (
            <>
              <p className="rf-right__sub">We'd love to hear from you</p>
              <h3 className="rf-right__title">Write a <em>Review</em></h3>
              <div className="rf-right__rule" />

              <div className="rf-fields">
                {/* Name & Location */}
                <div className="rf-row">
                  <div className={`rf-field ${focused === 'name' ? 'rf-field--focused' : ''} ${form.name ? 'rf-field--filled' : ''}`}>
                    <label className="rf-field__label">Your Name *</label>
                    <input name="name" value={form.name} placeholder="e.g. Arjun Nair"
                      onChange={handleChange} onFocus={() => setFocused('name')} onBlur={() => setFocused('')} />
                    <div className="rf-field__line" />
                  </div>
                  <div className={`rf-field ${focused === 'location' ? 'rf-field--focused' : ''} ${form.location ? 'rf-field--filled' : ''}`}>
                    <label className="rf-field__label">Your City</label>
                    <input name="location" value={form.location} placeholder="e.g. Kochi, Kerala"
                      onChange={handleChange} onFocus={() => setFocused('location')} onBlur={() => setFocused('')} />
                    <div className="rf-field__line" />
                  </div>
                </div>

                {/* Star Rating */}
                <div className="rf-rating-wrap">
                  <p className="rf-rating__label">Your Rating *</p>
                  <StarPicker value={form.rating} onChange={r => setForm({ ...form, rating: r })} />
                  {form.rating > 0 && (
                    <span className="rf-rating__text">
                      {['','Poor','Fair','Good','Great','Excellent!'][form.rating]}
                    </span>
                  )}
                </div>

                {/* Review text */}
                <div className={`rf-field ${focused === 'text' ? 'rf-field--focused' : ''} ${form.text ? 'rf-field--filled' : ''}`}>
                  <label className="rf-field__label">Your Review *</label>
                  <textarea name="text" rows="4" value={form.text}
                    placeholder="Tell us about your experience..."
                    onChange={handleChange} onFocus={() => setFocused('text')} onBlur={() => setFocused('')}
                    style={{ resize: 'none' }} />
                  <div className="rf-field__line" />
                </div>
              </div>

              <button className="rf-submit" onClick={handleSubmit} disabled={submitting}>
                {submitting ? (
                  <span className="rf-submit__spinner" />
                ) : (
                  <>
                    Publish My Review
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </>
                )}
              </button>
              <p className="rf-note">Your review will appear instantly in the testimonials section</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, snap => {
      setReviews(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return () => unsub();
  }, []);

  // Auto-slide
  useEffect(() => {
    if (reviews.length === 0) return;
    const t = setInterval(() => setActive(p => (p + 1) % Math.min(reviews.length, 8)), 4500);
    return () => clearInterval(t);
  }, [reviews]);

  const visible = reviews.slice(0, 8);

  return (
    <>
      <section className="testi-section" id="testimonials">
        <div className="container">

          {/* Header */}
          <div className="testi-header">
            <div>
              <span className="section-label" style={{ color: 'var(--gold-light)' }}>Guest Stories</span>
              <h2 className="testi-main-title">What Our <em>Travellers Say</em></h2>
              <div className="testi-rule"><span />
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                </svg>
              <span /></div>
            </div>
            <button className="testi-write-btn" onClick={() => setShowForm(true)}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
              Write a Review
            </button>
          </div>

          {/* Reviews */}
          {loading ? (
            <div className="testi-loading">
              <div className="testi-loading__spinner" />
              <p>Loading reviews...</p>
            </div>
          ) : reviews.length === 0 ? (
            <div className="testi-empty">
              <div className="testi-empty__icon">✦</div>
              <h4>Be the first to share your experience!</h4>
              <p>Your review helps other travellers discover the magic of South India.</p>
              <button className="testi-write-btn" onClick={() => setShowForm(true)}>Write the First Review</button>
            </div>
          ) : (
            <>
              <div className="testi-grid">
                {visible.map((r, i) => (
                  <div key={r.id} className={`testi-card ${i === active ? 'testi-card--active' : ''}`}>
                    <div className="testi-card__quote">"</div>
                    <div className="testi-card__stars">
                      {[1,2,3,4,5].map(s => (
                        <svg key={s} width="13" height="13" viewBox="0 0 24 24"
                          fill={s <= r.rating ? '#C9A84C' : 'none'} stroke="#C9A84C" strokeWidth="1.5">
                          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                        </svg>
                      ))}
                    </div>
                    <p className="testi-card__text">"{r.text}"</p>
                    <div className="testi-card__author">
                      <div className="testi-card__avatar">{r.avatar || r.name?.[0]}</div>
                      <div>
                        <div className="testi-card__name">{r.name}</div>
                        <div className="testi-card__loc">{r.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dots */}
              <div className="testi-dots">
                {visible.map((_, i) => (
                  <button key={i}
                    className={`testi-dot ${i === active ? 'testi-dot--active' : ''}`}
                    onClick={() => setActive(i)} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Floating Review Button */}
      <button className="review-fab" onClick={() => setShowForm(true)} title="Write a Review">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
          <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
        </svg>
        <span>Review</span>
      </button>

      {/* Review Form Popup */}
      {showForm && <ReviewForm onClose={() => setShowForm(false)} />}
    </>
  );
}