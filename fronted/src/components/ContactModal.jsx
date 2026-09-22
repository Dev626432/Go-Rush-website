import React, { useState } from 'react';
import {
  Phone,
  PhoneCall,
  MessageCircle,
  Copy,
  Check,
  X,
  MapPin,
  Clock,
  ShieldCheck
} from 'lucide-react';
import './contact-modal.css';

export default function ContactModal({ close }) {
  const [copied, setCopied] = useState(false);
  const phoneNumber = '9755125038';
  const formattedNumber = '+91 97551 25038';

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="contact-modal-overlay" onClick={close}>
      <div
        className="contact-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        {/* Close Button */}
        <button
          type="button"
          className="contact-modal-close"
          onClick={close}
          aria-label="Close Contact Dialog"
        >
          <X size={20} />
        </button>

        {/* Header Ribbon */}
        <div className="contact-modal-header">
          <div className="contact-modal-badge">
            <span className="contact-pulse-dot" />
            <span>24/7 Active Indore Support Line</span>
          </div>
          <h2 id="contact-modal-title" className="contact-modal-heading">
            Contact GoRush Support
          </h2>
          <p className="contact-modal-subtext">
            Speak directly with our Indore operations team for driver onboarding, fare inquiries, or ride assistance.
          </p>
        </div>

        {/* Primary Phone Showcase Card */}
        <div className="contact-phone-hero-card">
          <div className="contact-phone-kicker">
            <PhoneCall size={16} color="#d4ef62" />
            <span>OFFICIAL HELPLINE NUMBER</span>
          </div>

          <div className="contact-phone-digits-wrap">
            <span className="contact-phone-digits">{formattedNumber}</span>
          </div>

          <div className="contact-phone-actions-row">
            {/* Direct Call Button */}
            <a
              href={`tel:${phoneNumber}`}
              className="contact-action-btn call"
              id="contact-modal-call-btn"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>

            {/* Direct WhatsApp Button */}
            <a
              href={`https://wa.me/91${phoneNumber}?text=Hello%20GoRush%20Support%2C%20I%20have%20an%20inquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action-btn whatsapp"
              id="contact-modal-wa-btn"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>

            {/* Copy Number Button */}
            <button
              type="button"
              className={`contact-action-btn copy ${copied ? 'copied' : ''}`}
              onClick={handleCopy}
              id="contact-modal-copy-btn"
            >
              {copied ? <Check size={16} color="#7bc44a" /> : <Copy size={16} />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Quick Highlights & Local Info */}
        <div className="contact-modal-details-grid">
          <div className="contact-detail-item">
            <div className="contact-detail-icon">
              <Clock size={16} />
            </div>
            <div className="contact-detail-copy">
              <strong>Instant 24/7 Response</strong>
              <span>Zero waiting time. Picked up in under 3 rings.</span>
            </div>
          </div>

          <div className="contact-detail-item">
            <div className="contact-detail-icon">
              <MapPin size={16} />
            </div>
            <div className="contact-detail-copy">
              <strong>Indore Physical Center</strong>
              <span>Plot 14, Orbit Mall Road, Scheme 54, Vijay Nagar</span>
            </div>
          </div>

          <div className="contact-detail-item full-width">
            <div className="contact-detail-icon verified">
              <ShieldCheck size={16} />
            </div>
            <div className="contact-detail-copy">
              <strong>Verified Captain & Customer Care</strong>
              <span>All calls are handled by genuine Indore-based mobility coordinators.</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="contact-modal-footer">
          <p>
            Emergency? For road accidents or police emergencies, dial{' '}
            <a href="tel:112" style={{ color: '#ef4444', fontWeight: 700 }}>
              112 SOS
            </a>{' '}
            immediately.
          </p>
        </div>
      </div>
    </div>
  );
}
