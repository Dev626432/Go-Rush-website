import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowRight,
  Bike,
  Building2,
  CarFront,
  Check,
  ChevronRight,
  Clock3,
  Globe2,
  Headphones,
  HeartHandshake,
  IndianRupee,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Package,
  Phone,
  PhoneCall,
  Radio,
  Send,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Tag,
  TrendingUp,
  UserCheck,
  Wallet,
  Wrench,
  Zap
} from 'lucide-react';
import '../footer-redesign.css';

export default function Footer({ onJoinClick, onContactClick, onAction }) {
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
            0. LIVE INDORE DISPATCH & DRIVER SHIFT TICKER
            ========================================================= */}
        <div className="footer-live-ticker-strip">
          <div className="footer-ticker-inner">
            <span className="footer-ticker-tag">
              <Zap size={13} fill="currentColor" /> Live Indore Dispatch
            </span>
            <div className="footer-ticker-marquee">
              <div className="footer-ticker-item">
                <span>📍 Vijay Nagar Square:</span>
                <strong>Vikram P.</strong>
                <span className="gain">+₹2,140</span>
                <span>today (14 rides)</span>
              </div>
              <span>•</span>
              <div className="footer-ticker-item">
                <span>📍 Indore Airport (IDR):</span>
                <strong>Anand S.</strong>
                <span className="gain">+₹1,850</span>
                <span>direct UPI transfer</span>
              </div>
              <span>•</span>
              <div className="footer-ticker-item">
                <span>📍 Palasia Point:</span>
                <strong>Rohit M.</strong>
                <span>New Captain Onboarded in 11 mins</span>
              </div>
              <span>•</span>
              <div className="footer-ticker-item">
                <span>⚡ Active Indore Incentive:</span>
                <span className="gain">₹500 Weekend Target Bonus</span>
                <span>Unlocked by 340+ drivers</span>
              </div>
              <span>•</span>
              <div className="footer-ticker-item">
                <span>📍 Bhawarkua:</span>
                <strong>Manoj K.</strong>
                <span className="gain">+₹1,420</span>
                <span>today (Student shift)</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            1. DRIVER FLEET CATEGORIES & VEHICLE QUICK GUIDE
            ========================================================= */}
        <section className="footer-fleet-strip">
          <div className="footer-strip-heading">
            <div className="footer-strip-title-wrap">
              <CarFront size={20} color="#d4ef62" />
              <h3 className="footer-strip-title">GoRush Indore Driver Fleet Categories</h3>
              <span className="footer-strip-badge">0% Commission Across All</span>
            </div>
            <button
              type="button"
              onClick={onJoinClick}
              style={{
                background: 'none',
                border: 'none',
                color: '#d4ef62',
                fontSize: '12.5px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <span>Onboard Your Vehicle</span>
              <ChevronRight size={15} />
            </button>
          </div>

          <div className="footer-fleet-grid">
            <div className="footer-fleet-card" onClick={() => handleActionClick('GoRush Auto: Bajaj/TVS/Piaggio CNG & EV Autos eligible in Indore')}>
              <div className="footer-fleet-top">
                <div className="footer-fleet-icon">
                  <Navigation size={18} />
                </div>
                <span className="footer-fleet-tag">High Local Demand</span>
              </div>
              <strong>GoRush Auto (CNG & EV)</strong>
              <p>Short-distance city transit across Indore. Zero commission surge deduction on peak hours.</p>
              <span className="footer-fleet-earning">
                <IndianRupee size={13} /> ₹1,800–₹2,600 / Day
              </span>
            </div>

            <div className="footer-fleet-card" onClick={() => handleActionClick('GoRush Cab: WagonR, Dzire, Ertiga, Tigor EV eligible in Indore')}>
              <div className="footer-fleet-top">
                <div className="footer-fleet-icon">
                  <CarFront size={18} />
                </div>
                <span className="footer-fleet-tag">Airport Priority</span>
              </div>
              <strong>GoRush Cab (Mini / Sedan / EV)</strong>
              <p>AC intercity and city rides. Airport return queue priority and guaranteed long-route fares.</p>
              <span className="footer-fleet-earning">
                <IndianRupee size={13} /> ₹2,800–₹4,500 / Day
              </span>
            </div>

            <div className="footer-fleet-card" onClick={() => handleActionClick('GoRush Moto: 100cc+ Bikes & Electric Scooters eligible in Indore')}>
              <div className="footer-fleet-top">
                <div className="footer-fleet-icon">
                  <Bike size={18} />
                </div>
                <span className="footer-fleet-tag">Flexible Shifts</span>
              </div>
              <strong>GoRush Moto (Bike Taxi)</strong>
              <p>Beat Indore traffic with bike rides. Perfect for students and part-time flexible earning.</p>
              <span className="footer-fleet-earning">
                <IndianRupee size={13} /> ₹900–₹1,500 / Day
              </span>
            </div>

            <div className="footer-fleet-card" onClick={() => handleActionClick('GoRush Express Parcel: Same-day local packages & document courier')}>
              <div className="footer-fleet-top">
                <div className="footer-fleet-icon">
                  <Package size={18} />
                </div>
                <span className="footer-fleet-tag">Instant Delivery</span>
              </div>
              <strong>GoRush Parcel Delivery</strong>
              <p>Intra-city express courier service. Zero wait times between pickup and immediate drop-off.</p>
              <span className="footer-fleet-earning">
                <IndianRupee size={13} /> ₹1,100–₹1,800 / Day
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. CAPTAIN VOICES & REAL INDORE TESTIMONIALS
            ========================================================= */}
        <section className="footer-voice-strip">
          <div className="footer-strip-heading">
            <div className="footer-strip-title-wrap">
              <HeartHandshake size={20} color="#d4ef62" />
              <h3 className="footer-strip-title">Real Words From Indore Captains</h3>
              <span className="footer-strip-badge">Verified Partners</span>
            </div>
            <span style={{ fontSize: '12px', color: '#8ca191' }}>
              4.94★ Average Driver Satisfaction Score
            </span>
          </div>

          <div className="footer-voice-grid">
            <div className="footer-voice-card">
              <p className="footer-voice-quote">
                “GoRush aane se hamari har mahine ₹10,000–₹12,000 ki commission bachti hai. Pura paisa sham ko bina kisi cut ke seedhe bank account me transfer ho jata hai.”
              </p>
              <div className="footer-voice-author">
                <div className="footer-voice-avatar" style={{ background: 'rgba(212, 239, 98, 0.15)', color: '#d4ef62', border: '1px solid rgba(212, 239, 98, 0.3)' }}>
                  <UserCheck size={18} />
                </div>
                <div className="footer-voice-info">
                  <strong>Mukesh Verma</strong>
                  <span>Auto Captain · Vijay Nagar, Indore</span>
                </div>
                <span className="footer-voice-stars">★★★★★</span>
              </div>
            </div>

            <div className="footer-voice-card">
              <p className="footer-voice-quote">
                “Airport duty me booking cancel hone ka koi dar nahi rehta. Rate pehle hi pata chal jata hai aur support center wale sach me phone uthakar baat sunte hain.”
              </p>
              <div className="footer-voice-author">
                <div className="footer-voice-avatar" style={{ background: 'rgba(212, 239, 98, 0.15)', color: '#d4ef62', border: '1px solid rgba(212, 239, 98, 0.3)' }}>
                  <UserCheck size={18} />
                </div>
                <div className="footer-voice-info">
                  <strong>Arvind Patidar</strong>
                  <span>Sedan Cab Captain · Palasia Point</span>
                </div>
                <span className="footer-voice-stars">★★★★★</span>
              </div>
            </div>

            <div className="footer-voice-card">
              <p className="footer-voice-quote">
                “College ke baad 4 ghante bike chalata hoon. Fuel ka kharcha nikal kar roz ₹800–₹1,100 bach jate hain. Student ke liye isse behtar platform nahi ho sakta.”
              </p>
              <div className="footer-voice-author">
                <div className="footer-voice-avatar" style={{ background: 'rgba(212, 239, 98, 0.15)', color: '#d4ef62', border: '1px solid rgba(212, 239, 98, 0.3)' }}>
                  <UserCheck size={18} />
                </div>
                <div className="footer-voice-info">
                  <strong>Sameer Khan</strong>
                  <span>Moto Captain · Bhawarkua Hub</span>
                </div>
                <span className="footer-voice-stars">★★★★★</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            3. VIP NEWSLETTER & INCENTIVE NOTIFICATION STRIP
            ========================================================= */}
        <section className="footer-newsletter-strip">
          <div className="newsletter-box-card">
            <div className="newsletter-text-col">
              <div className="newsletter-badge">
                <span className="newsletter-badge-dot" />
                <span>Indore Driver Network · Live Alerts</span>
              </div>
              <h3 className="newsletter-heading">
                Never miss a high-surge zone or <span>₹500 daily bonus.</span>
              </h3>
              <p className="newsletter-subtext">
                Receive instant WhatsApp and SMS alerts for peak weekend surge maps, airport queues, and festival driver incentives in Indore.
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
            4. 24/7 ROADSIDE EMERGENCY ASSISTANCE BAR
            ========================================================= */}
        <div className="footer-roadside-strip">
          <div className="footer-roadside-card">
            <div className="footer-roadside-left">
              <div className="footer-roadside-icon-pill">
                <ShieldAlert size={22} />
              </div>
              <div className="footer-roadside-text">
                <strong>24/7 Captain Safety & Emergency Response Network</strong>
                <span>Active road paramedic patrol & instant accident assistance across Indore Municipal limits.</span>
              </div>
            </div>

            <div className="footer-roadside-actions">
              <a href="tel:112" className="footer-roadside-btn sos">
                <AlertTriangle size={15} />
                <span>Police 112 SOS</span>
              </a>
              <a
                href="tel:9755125038"
                className="footer-roadside-btn desk"
                onClick={(e) => {
                  e.preventDefault();
                  if (onContactClick) onContactClick();
                }}
              >
                <Phone size={15} />
                <span>Helpline: 9755125038</span>
              </a>
              <button
                type="button"
                className="footer-roadside-btn desk"
                onClick={() => handleActionClick('Free Roadside Mechanical Assistance: Free puncture repair & towing within 15 km of Vijay Nagar')}
              >
                <Wrench size={15} />
                <span>Free Puncture & Towing</span>
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================
            5. MAIN 4-COLUMN FOOTER NAVIGATION DIRECTORY
            ========================================================= */}
        <div className="footer-main-grid">
          {/* COLUMN 1: Brand & Contact Hub */}
          <div className="footer-brand-col">
            <Link className="footer-brand-link" to="/">
              <img
                src="/gorush-logo.png"
                alt="GoRush"
                className="footer-brand-logo-img"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
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
              <a
                href="tel:9755125038"
                className="footer-contact-item"
                id="footer-call-contact-card"
                onClick={(e) => {
                  e.preventDefault();
                  if (onContactClick) onContactClick();
                }}
              >
                <div className="footer-contact-icon-wrap">
                  <Phone size={16} />
                </div>
                <div className="footer-contact-info">
                  <strong>+91 97551 25038</strong>
                  <span>24/7 Driver Contact Helpline (Click to Open)</span>
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

              <a
                href="https://wa.me/919755125038"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
                id="footer-whatsapp-contact-card"
              >
                <div className="footer-contact-icon-wrap">
                  <MessageCircle size={16} />
                </div>
                <div className="footer-contact-info">
                  <strong>+91 97551 25038</strong>
                  <span>Official WhatsApp Contact Desk</span>
                </div>
              </a>
            </div>
          </div>

          {/* COLUMN 2: For Captains */}
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
              <li>
                <a
                  href="tel:9755125038"
                  className="footer-nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onContactClick) onContactClick();
                  }}
                  style={{ color: '#d4ef62', fontWeight: 700 }}
                >
                  <Phone size={14} />
                  <span>Captain Support: 9755125038</span>
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Safety & Riders */}
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
              <li>
                <a
                  href="tel:9755125038"
                  className="footer-nav-link"
                  id="footer-contact-link-col"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onContactClick) onContactClick();
                  }}
                  style={{ color: '#d4ef62', fontWeight: 700 }}
                >
                  <Phone size={14} />
                  <span>Contact: +91 97551 25038</span>
                </a>
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

            <div style={{ marginTop: '16px' }}>
              <a
                href="tel:9755125038"
                onClick={(e) => {
                  e.preventDefault();
                  if (onContactClick) onContactClick();
                }}
                style={{
                  color: '#d4ef62',
                  fontSize: '12.5px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginBottom: '10px'
                }}
              >
                <Phone size={14} />
                <span>Contact Desk: 9755125038</span>
              </a>
              <div style={{ fontSize: '11px', color: '#7a9180', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Lock size={13} color="#7bc44a" /> 256-Bit Bank Grade Encryption
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            6. INDORE OPERATIONAL HUBS & SURGE ZONES
            ========================================================= */}
        <div className="footer-hubs-strip">
          <div className="footer-hubs-title">
            <MapPin size={15} /> Indore High-Demand Operating Hubs
          </div>
          <div className="footer-hubs-list">
            <span className="footer-hub-chip active-zone" onClick={() => handleActionClick('Vijay Nagar Square: 1.4x Driver Surge active')}>
              Vijay Nagar
            </span>
            <span className="footer-hub-chip active-zone" onClick={() => handleActionClick('Indore Airport (IDR): 1.6x Priority Pickup active')}>
              Airport (IDR)
            </span>
            <span className="footer-hub-chip" onClick={() => handleActionClick('Palasia Point: Steady high trip frequency')}>
              Palasia Point
            </span>
            <span className="footer-hub-chip" onClick={() => handleActionClick('Bhawarkua Square: Active student & transit rides')}>
              Bhawarkua
            </span>
            <span className="footer-hub-chip active-zone" onClick={() => handleActionClick('Super Corridor IT Park: Evening Tech Park Surge')}>
              Super Corridor
            </span>
            <span className="footer-hub-chip" onClick={() => handleActionClick('Rajwada Heritage Market: High local demand')}>
              Rajwada
            </span>
            <span className="footer-hub-chip" onClick={() => handleActionClick('Rau Bypass: Outstation & highway trip hub')}>
              Rau Bypass
            </span>
            <span className="footer-hub-chip" onClick={() => handleActionClick('Silicon City: Morning office transit zone')}>
              Silicon City
            </span>
          </div>
        </div>

        {/* =========================================================
            7. INSTANT SETTLEMENTS & BANKING GATEWAYS
            ========================================================= */}
        <div className="footer-payments-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Wallet size={15} color="#7bc44a" />
            <span>Instant Daily Bank & UPI Payouts Supported:</span>
          </div>
          <div className="footer-payments-list">
            <span className="footer-pay-pill">UPI AutoPay</span>
            <span className="footer-pay-pill">Google Pay</span>
            <span className="footer-pay-pill">PhonePe</span>
            <span className="footer-pay-pill">Paytm Wallet</span>
            <span className="footer-pay-pill">BHIM UPI</span>
            <span className="footer-pay-pill">IMPS / NEFT Direct</span>
            <span className="footer-pay-pill">100% Cash Direct</span>
          </div>
        </div>

        {/* =========================================================
            8. SOCIAL MEDIA PILLS & SECURITY ACCREDITATIONS
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
            9. BOTTOM COPYRIGHT & LEGAL BAR
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
            <span>·</span>
            <a
              href="tel:9755125038"
              className="footer-legal-link"
              id="footer-legal-contact-btn"
              onClick={(e) => {
                e.preventDefault();
                if (onContactClick) onContactClick();
              }}
              style={{ color: '#d4ef62', textDecoration: 'none', fontWeight: 700, cursor: 'pointer' }}
            >
              Contact (9755125038)
            </a>
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
