import { useState } from 'react';
import './BookingModal.css';

// ✅ REPLACE WITH YOUR WHATSAPP NUMBER (country code, no + or spaces)
const WHATSAPP_NUMBER = '7994538496';

const WaIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function BookingModal({ pkg, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', date: '', guests: '', message: '' });
  const [focused, setFocused] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    const { name, phone, date, guests, message } = form;
    if (!name || !phone || !date || !guests) {
      alert('Please fill all required fields.');
      return;
    }
    const packageName = pkg?.name || 'a tour package';
    const duration = pkg?.days ? `${pkg.days} Day${pkg.days > 1 ? 's' : ''}` : '';
    const text = `Hello G4 Expeditions! 🌿\n\n*Booking Enquiry*\n──────────────────\n👤 Name: ${name}\n📱 Phone: ${phone}\n🗺️ Package: ${packageName}${duration ? ` (${duration})` : ''}\n📅 Travel Date: ${date}\n👥 Guests: ${guests}\n${message ? `💬 Message: ${message}\n` : ''}──────────────────\nPlease confirm my booking. Thank you!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <div className="bm-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="bm-box">

        {/* ── LEFT PANEL — dark emerald ── */}
        <div className="bm-left">
          {/* Decorative corner lines */}
          <div className="bm-corner bm-corner--tl" />
          <div className="bm-corner bm-corner--br" />

          <span className="bm-left__eyebrow">✦ G4 Expeditions</span>
          <h2 className="bm-left__title">Begin Your <em>Journey</em></h2>

          <div className="bm-left__rule">
            <span /><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
            </svg><span />
          </div>

          {/* Package info */}
          {pkg && (
            <div className="bm-left__pkg">
              <div className="bm-left__pkg-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <p className="bm-left__pkg-label">Selected Package</p>
                <p className="bm-left__pkg-name">{pkg.name}</p>
                {pkg.days && (
                  <span className="bm-left__pkg-days">
                    {pkg.days} {pkg.days === 1 ? 'Day' : 'Days'}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Trust points */}
          <div className="bm-left__trust">
            {[
              { icon: '🛡️', text: 'Secure & Private' },
              { icon: '⚡', text: 'Instant Confirmation' },
              { icon: '🌿', text: 'Expert Guided Tours' },
            ].map(t => (
              <div className="bm-left__trust-item" key={t.text}>
                <span>{t.icon}</span>
                <span>{t.text}</span>
              </div>
            ))}
          </div>

          {/* WhatsApp badge */}
          <div className="bm-left__wa">
            <div className="bm-left__wa-icon"><WaIcon /></div>
            <p>We respond within <strong>minutes</strong> on WhatsApp</p>
          </div>
        </div>

        {/* ── RIGHT PANEL — form ── */}
        <div className="bm-right">
          {/* Close */}
          <button className="bm-close" onClick={onClose}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          <p className="bm-right__sub">Fill in your details below</p>
          <h3 className="bm-right__title">Book via <em>WhatsApp</em></h3>
          <div className="bm-right__rule" />

          {/* Fields */}
          <div className="bm-fields">
            <div className="bm-row">
              <div className={`bm-field ${focused === 'name' ? 'bm-field--focused' : ''} ${form.name ? 'bm-field--filled' : ''}`}>
                <label className="bm-field__label">Full Name</label>
                <input
                  name="name" value={form.name}
                  placeholder="e.g. Arjun Nair"
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused('')}
                />
                <div className="bm-field__line" />
              </div>
              <div className={`bm-field ${focused === 'phone' ? 'bm-field--focused' : ''} ${form.phone ? 'bm-field--filled' : ''}`}>
                <label className="bm-field__label">Phone Number</label>
                <input
                  name="phone" value={form.phone}
                  placeholder="+91 98765 43210"
                  onChange={handleChange}
                  onFocus={() => setFocused('phone')}
                  onBlur={() => setFocused('')}
                />
                <div className="bm-field__line" />
              </div>
            </div>

            <div className="bm-row">
              <div className={`bm-field bm-field--filled ${focused === 'date' ? 'bm-field--focused' : ''}`}>
                <label className="bm-field__label">Travel Date</label>
                <input
                  name="date" type="date" value={form.date}
                  onChange={handleChange}
                  onFocus={() => setFocused('date')}
                  onBlur={() => setFocused('')}
                />
                <div className="bm-field__line" />
              </div>
              <div className={`bm-field ${focused === 'guests' ? 'bm-field--focused' : ''} ${form.guests ? 'bm-field--filled' : ''}`}>
                <label className="bm-field__label">No. of Guests</label>
                <input
                  name="guests" type="number" min="1" value={form.guests}
                  placeholder="e.g. 4"
                  onChange={handleChange}
                  onFocus={() => setFocused('guests')}
                  onBlur={() => setFocused('')}
                />
                <div className="bm-field__line" />
              </div>
            </div>

            <div className={`bm-field ${focused === 'message' ? 'bm-field--focused' : ''} ${form.message ? 'bm-field--filled' : ''}`}>
              <label className="bm-field__label">Special Requests</label>
              <textarea
                name="message" rows="3" value={form.message}
                placeholder="Any special requirements or questions..."
                onChange={handleChange}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused('')}
                style={{ resize: 'none' }}
              />
              <div className="bm-field__line" />
            </div>
          </div>

          {/* Submit */}
          <button className="bm-submit" onClick={handleSubmit}>
            <div className="bm-submit__wa"><WaIcon /></div>
            <span>Send via WhatsApp</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>

          <p className="bm-privacy">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0110 0v4"/>
            </svg>
            Your details are only shared with G4 Expeditions
          </p>
        </div>

      </div>
    </div>
  );
}