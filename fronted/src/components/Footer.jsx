import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ChevronRight,
  Globe2,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  CarFront,
  Navigation,
  Send,
  Lock
} from 'lucide-react';
import '../footer-redesign.css';

export default function Footer({ onJoinClick, onAction }) {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!emailOrPhone.trim()) return;
    setNewsletterSent(true);
    if (onAction) {
      onAction('Subscribed! You will receive daily Indore driver surge & incentive alerts.');
    }
  };

  const handleActionClick = (message) => {
    if (onAction) {
      onAction(message);
    }
  };

  return (
    <footer className="site-footer-redesign">
      <div className="footer-inner-container">
        {/* =========================================================
            1. PRE-FOOTER VIP NEWSLETTER & INCENTIVE NOTIFICATION STRIP
            ========================================================= */}
        <section className="footer-newsletter-strip">
          <div className="newsletter-box-card">
            <div className="newsletter-text-col">
              <div className="newsletter-badge">
                <span className="newsletter-badge-dot" />
                <span>Indore Driver Network · Live Dispatch</span>
              </div>
              <h3 className="newsletter-heading">
                Never miss a high-surge zone or <span>₹500 daily bonus.</span>
              </h3>
              <p className="newsletter-subtext">
                Receive instant WhatsApp and SMS alerts for peak weekend zones, airport queues, and festival driver incentives in Indore.
              </p>
            </div>

            <div className="newsletter-form-col">
              {newsletterSent ? (
                <div
                  style={{
                    background: 'rgba(212, 239, 98, 0.15)',
                    border: '1px solid rgba(212, 239, 98, 0.4)',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    color: '#d4ef62',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '14px',
                    fontWeight: '600',
                  }}
                >
                  <Check size={20} color="#7bc44a" />
                  <span>You are on the priority driver list! Welcome to GoRush Indore.</span>
                </div>
              ) : (
                <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                  <input
                    type="text"
                    className="newsletter-input"
                    placeholder="Enter phone (+91) or email address..."
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    required
                  />
                  <button type="submit" className="newsletter-submit-btn">
                    <span>Get Alerts</span>
                    <Send size={15} />
                  </button>
                </form>
              )}

              <div className="newsletter-trust-tags">
                <span>
                  <ShieldCheck size={14} color="#7bc44a" /> 100% Free & No spam
                </span>
                <span>•</span>
                <span>
                  <Check size={14} color="#7bc44a" /> Instant daily payouts
                </span>
                <span>•</span>
                <span>
                  <Star size={14} color="#eab308" /> 4.9★ Captain satisfaction
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. MAIN 4-COLUMN FOOTER NAVIGATION GRID
            ========================================================= */}
        <div className="footer-main-grid">
          {/* COLUMN 1: Brand & Contact Hub */}
          <div className="footer-brand-col">
            <Link className="footer-brand-link" to="/">
              <img src="/gorush-logo.png" alt="GoRush" className="footer-brand-logo-img" />
              <div className="footer-brand-text">
                <span className="footer-brand-name">
                  Go<span>Rush</span>
                </span>
                <span className="footer-brand-subtitle">Mobility Technologies</span>
              </div>
            </Link>

            <p className="footer-tagline-para">
              India's first genuine driver-first ride network. Empowering auto, cab, and bike captains with zero commission surge, instant daily bank transfers, and dignity.
            </p>

            <div className="footer-contact-cards">
              <a href="tel:18004197874" className="footer-contact-item">
                <div className="footer-contact-icon-wrap">
                  <Phone size={16} />
                </div>
                <div className="footer-contact-info">
                  <strong>1800-419-RUSH (7874)</strong>
                  <span>24/7 Driver Toll-Free Helpline</span>
                </div>
              </a>

              <div
                className="footer-contact-item"
                style={{ cursor: 'pointer' }}
                onClick={() => handleActionClick('GoRush Driver Hub: Vijay Nagar Square, AB Road, Indore, MP')}
              >
                <div className="footer-contact-icon-wrap">
                  <MapPin size={16} />
                </div>
                <div className="footer-contact-info">
                  <strong>Indore Driver Onboarding Hub</strong>
                  <span>Vijay Nagar Square, AB Road, Indore</span>
                </div>
              </div>

              <div
                className="footer-contact-item"
                style={{ cursor: 'pointer' }}
                onClick={() => handleActionClick('WhatsApp helpline: +91 98930 46787')}
              >
                <div className="footer-contact-icon-wrap">
                  <MessageCircle size={16} />
                </div>
                <div className="footer-contact-info">
                  <strong>+91 98930 GORUSH</strong>
                  <span>Official WhatsApp Support Desk</span>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: For Drivers */}
          <div className="footer-nav-col">
            <h3>For Captains</h3>
            <ul className="footer-links-list">
              <li>
                <button
                  type="button"
                  className="footer-nav-link"
                  onClick={onJoinClick}
                  style={{ color: '#d4ef62', fontWeight: 700 }}
                >
                  <span>Become a GoRush Driver</span>
                  <span className="footer-tag-pill">₹0 Join Fee</span>
                </button>
              </li>
              <li>
                <Link to="/driver" className="footer-nav-link">
                  <span>Driver Console Portal</span>
                  <ChevronRight size={14} />
                </Link>
              </li>
              <li>
                <Link to="/earnings" className="footer-nav-link">
                  <span>Earnings & Fare Calculator</span>
                  <ChevronRight size={14} />
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="footer-nav-link">
                  <span>How GoRush Platform Works</span>
                  <ChevronRight size={14} />
                </Link>
              </li>
              <li>
                <Link to="/why-gorush" className="footer-nav-link">
                  <span>Vehicle Eligibility & Onboarding</span>
                  <ChevronRight size={14} />
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-nav-link"
                  onClick={() => handleActionClick('Weekly Fuel & EV Charging Subsidies: Active in Indore')}
                >
                  <span>Fuel & EV Charging Subsidies</span>
                  <ChevronRight size={14} />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-nav-link"
                  onClick={() => handleActionClick('Daily Instant Payout policy: 0% gateway fees')}
                >
                  <span>Instant Daily UPI Payouts</span>
                  <ChevronRight size={14} />
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Safety & Trust */}
          <div className="footer-nav-col">
            <h3>Safety & Riders</h3>
            <ul className="footer-links-list">
              <li>
                <Link to="/safety" className="footer-nav-link">
                  <span>GoRush Safety Center</span>
                  <ChevronRight size={14} />
                </Link>
              </li>
              <li>
                <Link to="/safety" className="footer-nav-link">
                  <span>24/7 Emergency SOS Desk</span>
                  <span className="footer-tag-pill" style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#f87171', borderColor: 'rgba(239, 68, 68, 0.4)' }}>
                    SOS
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/safety" className="footer-nav-link">
                  <span>₹5,00,000 Road Accident Cover</span>
                  <ChevronRight size={14} />
                </Link>
              </li>
              <li>
                <Link to="/why-gorush" className="footer-nav-link">
                  <span>Zero Cancellation Penalty Rule</span>
                  <ChevronRight size={14} />
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-nav-link"
                  onClick={() => handleActionClick('Indore City Service Zones: Vijay Nagar, Palasia, Bhawarkua, Airport, Super Corridor, Rau')}
                >
                  <span>Indore Operating Zones</span>
                  <ChevronRight size={14} />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-nav-link"
                  onClick={() => handleActionClick('Lost & Found item assistance desk opened')}
                >
                  <span>Lost & Found Support</span>
                  <ChevronRight size={14} />
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: App Download & Company */}
          <div className="footer-nav-col footer-app-col">
            <h3>Download App</h3>
            <p style={{ fontSize: '13px', color: '#97ab9b', lineHeight: 1.6, margin: '0 0 16px' }}>
              Download the official GoRush Captain app. Available now for Android and iOS devices.
            </p>

            <div className="footer-app-badges-group">
              <button
                type="button"
                className="footer-app-btn"
                onClick={() => handleActionClick('GoRush Driver App Android APK / Play Store download initiating...')}
              >
                <div className="footer-app-icon">
                  <Smartphone size={24} />
                </div>
                <div className="footer-app-labels">
                  <small>Get it on</small>
                  <strong>Google Play Store</strong>
                </div>
              </button>

              <button
                type="button"
                className="footer-app-btn"
                onClick={() => handleActionClick('GoRush Driver App for iOS (TestFlight / App Store) coming soon!')}
              >
                <div className="footer-app-icon">
                  <Smartphone size={24} />
                </div>
                <div className="footer-app-labels">
                  <small>Download on</small>
                  <strong>Apple App Store</strong>
                </div>
              </button>
            </div>

            <div style={{ marginTop: '20px' }}>
              <div style={{ fontSize: '11px', color: '#7a9180', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Lock size={13} color="#7bc44a" /> 256-Bit Bank Grade Encryption
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            3. SOCIAL MEDIA PILLS & SECURITY ACCREDITATIONS
            ========================================================= */}
        <div className="footer-middle-bar">
          <div className="footer-social-wrapper">
            <span className="footer-social-title">Follow GoRush</span>
            <div className="footer-social-icons">
              <button
                type="button"
                className="footer-social-btn"
                onClick={() => handleActionClick('Opening GoRush Instagram: @gorush.india')}
                aria-label="Instagram"
                title="Instagram"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </button>
              <button
                type="button"
                className="footer-social-btn"
                onClick={() => handleActionClick('Opening GoRush X / Twitter: @GoRushIndia')}
                aria-label="X / Twitter"
                title="X / Twitter"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>
              <button
                type="button"
                className="footer-social-btn"
                onClick={() => handleActionClick('Opening GoRush LinkedIn: GoRush Mobility Technologies')}
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </button>
              <button
                type="button"
                className="footer-social-btn"
                onClick={() => handleActionClick('Opening GoRush YouTube Channel: Driver Stories & Tutorials')}
                aria-label="YouTube"
                title="YouTube"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
                </svg>
              </button>
              <button
                type="button"
                className="footer-social-btn"
                onClick={() => handleActionClick('Opening GoRush WhatsApp Driver Community')}
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <MessageCircle size={17} />
              </button>
            </div>
          </div>

          <div className="footer-security-trust-pills">
            <span className="security-pill">
              <ShieldCheck size={14} /> ISO 27001 Certified
            </span>
            <span className="security-pill">
              <Lock size={14} /> PCI-DSS Compliant Payouts
            </span>
            <span className="security-pill">
              <Check size={14} /> DPIIT Recognized Indian Startup
            </span>
          </div>
        </div>

        {/* =========================================================
            4. BOTTOM COPYRIGHT & LEGAL BAR
            ========================================================= */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright-text">
            © 2026 GoRush Mobility Technologies Pvt. Ltd. All rights reserved.
          </p>

          <div className="footer-legal-links-wrap">
            <button
              type="button"
              className="footer-legal-link"
              onClick={() => handleActionClick('GoRush Privacy Policy (Updated 2026)')}
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              type="button"
              className="footer-legal-link"
              onClick={() => handleActionClick('Driver Partner Terms & Conditions')}
            >
              Terms of Service
            </button>
            <span>·</span>
            <button
              type="button"
              className="footer-legal-link"
              onClick={() => handleActionClick('Driver Code of Conduct & Fair Ethics')}
            >
              Captain Agreement
            </button>
            <span>·</span>
            <button
              type="button"
              className="footer-legal-link"
              onClick={() => handleActionClick('Grievance Officer: grievance@gorush.in')}
            >
              Grievance Officer
            </button>
            <span>·</span>
            <button
              type="button"
              className="footer-legal-link"
              onClick={() => handleActionClick('Accessibility Guidelines compliance')}
            >
              Accessibility
            </button>
          </div>

          <div className="footer-region-badge">
            <span className="footer-region-dot" />
            <Globe2 size={13} />
            <span>Indore, Madhya Pradesh · India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
