import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Bike,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  FileCheck2,
  Globe2,
  Headphones,
  IndianRupee,
  Menu,
  Moon,
  Navigation,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  TrendingUp,
  Users,
  X,
  Zap,
} from 'lucide-react';
import './website.css';
import './hero-video.css';
import './feature-motion.css';
import './feature-latest.css';
import './feature-polish.css';
import './feature-theme.css';
import './loader.css';
import './card-route.css';
import './hero-redesign.css';

const featureGroups = [
  {
    icon: Navigation,
    eyebrow: 'MOVE SMART',
    title: 'Every ride, mapped with confidence.',
    text: 'Live GPS, traffic-aware routes and clear trip status keep every pickup and drop-off calm, quick and predictable.',
    points: ['Live driver tracking', 'Pickup & destination navigation', 'Real-time ETA and re-routing'],
  },
  {
    icon: Banknote,
    eyebrow: 'EARN CLEARLY',
    title: 'The fare is yours to understand.',
    text: 'From estimated fare to commission and tips, GoRush keeps the full earning story visible for every ride.',
    points: ['Cash, UPI, wallet and online payments', 'Daily, weekly and monthly earnings', 'Fast payouts and incentive bonuses'],
  },
  {
    icon: ShieldCheck,
    eyebrow: 'DRIVE SAFELY',
    title: 'Support that stays close.',
    text: 'Emergency contacts, trip sharing and a 24/7 safety team are built into the journey when you need them.',
    points: ['One-tap SOS support', 'Passenger reporting and monitoring', 'Secure identity and document checks'],
  },
];

const steps = [
  ['01', 'Create your profile', 'Register with your mobile number, verify OTP and tell us a little about yourself.'],
  ['02', 'Verify your documents', 'Upload your license, RC, insurance and bank details. Our team checks everything quickly.'],
  ['03', 'Start earning', 'Go online, accept your first ride and watch your earnings grow in real time.'],
];

const stats = [
  ['48k+', 'active drivers'],
  ['2.4M', 'rides completed'],
  ['4.8/5', 'driver rating'],
  ['24/7', 'safety support'],
];

export default function Website() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menu, setMenu] = useState(false);
  const [notice, setNotice] = useState('');
  const [formOpen, setFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  const featureGridRef = useRef(null);
  const [featuresInView, setFeaturesInView] = useState(false);

  useEffect(() => {
    const el = featureGridRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFeaturesInView(true);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.floor(Math.random() * 9) + 5;
        return Math.min(100, prev + step);
      });
    }, 55);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const exitTimer = setTimeout(() => setExiting(true), 300);
      const hideTimer = setTimeout(() => setLoading(false), 900);
      return () => {
        clearTimeout(exitTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [progress]);

  const action = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(''), 2600);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenu(false);
  };

  return (
    <div className="site-shell">
      {loading && (
        <div className={`gorush-preloader ${exiting ? 'fade-out' : ''}`}>
          <div className="loader-center">
            <div className="loader-spinner-outer" />
            <div className="loader-spinner-inner" />
            <div className="loader-logo-card">
              <img src="/gorush-logo.png" alt="GoRush Logo" />
            </div>
          </div>

          <h2 className="loader-brand-title">
            <span>Go</span>Rush
          </h2>
          <div className="loader-tagline">Drive · Earn · Grow</div>

          <div className="loader-progress-container">
            <div className="loader-bar-track">
              <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="loader-meta">
              <span className="loader-status-text">
                <span className="loader-status-dot" />
                {progress < 40
                  ? 'Starting GoRush...'
                  : progress < 80
                  ? 'Connecting Indore drivers...'
                  : 'Ready! Welcome.'}
              </span>
              <span className="loader-percent">{progress}%</span>
            </div>
          </div>
        </div>
      )}

      {notice && (
        <div className="site-toast">
          <Check size={16} /> {notice}
        </div>
      )}

      {/* MOCKUP HERO, HEADER, CARDS, AND STATS STRIP WRAPPER */}
      <div className={`mockup-hero-wrapper ${isDarkMode ? 'dark-theme' : ''}`} id="top">
        {/* Organic Background Fluid Shapes */}
        <div className="mockup-bg-shape-top-right" />
        <div className="mockup-bg-shape-center-lime" />
        <div className="mockup-wave-bottom-left" />
        <div className="mockup-wave-bottom-right" />

        {/* 1. REDESIGNED HEADER */}
        <header className="mockup-header">
          <div className="mockup-header-left">
            <a className="mockup-brand" href="#top">
              <img src="/gorush-logo.png" alt="GoRush Logo" />
              <span>GoRush</span>
            </a>
          </div>

          <nav className="mockup-nav">
            <button className="nav-active" onClick={() => scrollTo('top')}>
              Home
            </button>
            <button onClick={() => scrollTo('features')}>Features</button>
            <button onClick={() => scrollTo('earnings')}>Earnings</button>
            <button onClick={() => scrollTo('safety')}>Safety</button>
            <button onClick={() => scrollTo('how-it-works')}>Support</button>
          </nav>

          <div className="mockup-header-right">
            {/* Day / Night Theme Switch */}
            <div
              className="mockup-theme-toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
              title="Toggle day/night theme"
            >
              <div className={`theme-toggle-icon ${!isDarkMode ? 'active' : ''}`}>
                <Sun size={13} />
              </div>
              <div className={`theme-toggle-icon ${isDarkMode ? 'active' : ''}`}>
                <Moon size={13} />
              </div>
            </div>

            <button className="mockup-download-btn" onClick={() => setFormOpen(true)}>
              Download Driver App <ArrowRight size={14} />
            </button>

            <button className="site-menu" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">
              {menu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        {menu && (
          <div className="mockup-mobile-menu">
            <button onClick={() => { scrollTo('top'); setMenu(false); }}>Home</button>
            <button onClick={() => { scrollTo('features'); setMenu(false); }}>Features</button>
            <button onClick={() => { scrollTo('earnings'); setMenu(false); }}>Earnings</button>
            <button onClick={() => { scrollTo('safety'); setMenu(false); }}>Safety</button>
            <button onClick={() => { scrollTo('how-it-works'); setMenu(false); }}>Support</button>
            <button onClick={() => { setFormOpen(true); setMenu(false); }}>Download Driver App</button>
          </div>
        )}

        {/* 2. HERO CONTENT + DRIVER PHOTO VISUAL (MATCHING MOCKUP) */}
        <section className="mockup-hero-main">
          <div className="mockup-hero-content">
            <div className="mockup-kicker">
              <span>THE GORUSH DIFFERENCE</span>
              <span className="mockup-kicker-line" />
            </div>

            <h1 className="mockup-title">
              Built around the person
              <em>behind the wheel.</em>
            </h1>

            <p className="mockup-description">
              You bring the drive. We bring the tools, trust and technology to make every working day feel more like yours.
            </p>

            <div className="mockup-hero-actions">
              <button className="btn-get-started" onClick={() => setFormOpen(true)}>
                Get Started <ArrowRight size={16} />
              </button>
              <button className="btn-watch-video" onClick={() => action('Watch the GoRush story')}>
                <Play size={14} fill="currentColor" /> Watch Video
              </button>
            </div>
          </div>

          {/* DRIVER VISUAL WITH FLOATING BADGES */}
          <div className="mockup-driver-visual">
            <div className="badge-script-quote">
              More Than Just a Ride
            </div>

            <div className="driver-photo-blob">
              <img src="/driver-hero.jpg" alt="GoRush Driver" />
            </div>

            <div className="badge-leaf-pill">
              <div className="badge-leaf-icon">
                <Sparkles size={14} />
              </div>
              <div className="badge-leaf-text">
                A brighter tomorrow on every ride.
              </div>
            </div>

            <div className="badge-mauve-pebble">
              <span>DRIVE</span>
              <span>EARN</span>
              <span>GROW</span>
            </div>
          </div>
        </section>

        {/* 3. 3 FEATURE CARDS (KEPT UNCHANGED AS REQUESTED, WITH MOCKUP ACCENTS) */}
        <section className="intro-section" id="features">
          <div className={`feature-grid ${featuresInView ? 'in-view' : ''}`} ref={featureGridRef}>
            {featureGroups.map(({ icon: Icon, eyebrow, title, text, points }, index) => {
              const slideClass =
                index === 0
                  ? 'card-slide-left'
                  : index === 1
                  ? 'card-slide-bottom'
                  : 'card-slide-right';
              return (
                <article className={`feature-card ${slideClass}`} key={title}>
                  {index === 0 && <CardRouteAnimation />}

                  {index === 1 && (
                    <div className="card-widget-earnings">
                      <div className="widget-earnings-head">
                        <span>TODAY'S EARNINGS</span>
                        <TrendingUp size={11} color="#7bc44a" />
                      </div>
                      <div className="widget-earnings-amount">
                        <span>₹1,850</span>
                        <div className="widget-mini-bars">
                          <i style={{ height: '8px' }} />
                          <i style={{ height: '14px' }} />
                          <i style={{ height: '11px' }} />
                          <i style={{ height: '16px' }} />
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    <>
                      <div className="card-widget-safety-script">
                        Your Safety Our Priority
                      </div>
                      <div className="card-widget-sos">
                        <div className="sos-call-circle">
                          <Headphones size={17} />
                        </div>
                        <span className="sos-tag-pill">24/7 SOS</span>
                      </div>
                    </>
                  )}

                  <div className="feature-icon">
                    <Icon size={21} />
                  </div>
                  <span className="card-eyebrow">{eyebrow}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <ul>
                    {points.map((point) => (
                      <li key={point}>
                        <Check size={14} />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => action(`${eyebrow} details opened`)}>
                    Explore feature <ArrowRight size={15} />
                  </button>
                </article>
              );
            })}
          </div>
        </section>

        {/* 4. BOTTOM STATS STRIP & BANNER (MATCHING MOCKUP) */}
        <section className="mockup-stats-strip">
          <div className="mockup-stats-items">
            <div className="mockup-stat-item">
              <div className="stat-icon-circle">
                <Users size={16} />
              </div>
              <div className="stat-text-wrap">
                <span className="stat-value">10K+</span>
                <span className="stat-label">Active Drivers</span>
              </div>
            </div>

            <div className="mockup-stat-divider" />

            <div className="mockup-stat-item">
              <div className="stat-icon-circle">
                <Bike size={16} />
              </div>
              <div className="stat-text-wrap">
                <span className="stat-value">2M+</span>
                <span className="stat-label">Rides Completed</span>
              </div>
            </div>

            <div className="mockup-stat-divider" />

            <div className="mockup-stat-item">
              <div className="stat-icon-circle">
                <Star size={16} fill="#8c5a60" />
              </div>
              <div className="stat-text-wrap">
                <span className="stat-value">4.8</span>
                <span className="stat-label">Driver Rating</span>
              </div>
            </div>

            <div className="mockup-stat-divider" />

            <div className="mockup-stat-item">
              <div className="stat-icon-circle">
                <Headphones size={16} />
              </div>
              <div className="stat-text-wrap">
                <span className="stat-value">24/7</span>
                <span className="stat-label">Customer Support</span>
              </div>
            </div>
          </div>

          <div className="mockup-stats-action-wrap">
            <span className="script-moving-forward">
              Let's keep moving forward.
            </span>
            <button className="btn-drive-tomorrow" onClick={() => setFormOpen(true)}>
              Drive a better tomorrow <ArrowRight size={14} />
            </button>
          </div>
        </section>
      </div>

      <main>

        {/* EARNINGS */}
        <section className="earnings-section" id="earnings">
          <div className="earnings-copy">
            <div className="section-label light">
              YOUR WORK, YOUR WORTH <span />
            </div>
            <h2>
              Know what you earn.
              <br />
              <em>Keep what you can.</em>
            </h2>
            <p>
              No mystery math. See the fare, platform fee, tips, incentives and your final take-home amount before you commit to
              a ride.
            </p>
            <div className="earning-list">
              <div>
                <span className="list-number">01</span>
                <strong>Transparent fares</strong>
                <small>Every ride shows a clear estimate.</small>
              </div>
              <div>
                <span className="list-number">02</span>
                <strong>Weekly incentives</strong>
                <small>Hit targets, unlock bonuses and peak-hour boosts.</small>
              </div>
              <div>
                <span className="list-number">03</span>
                <strong>Flexible payouts</strong>
                <small>Withdraw to your bank or UPI when you need it.</small>
              </div>
            </div>
            <button className="light-cta" onClick={() => setFormOpen(true)}>
              See your earning potential <ArrowRight size={16} />
            </button>
          </div>
          <div className="earnings-card">
            <div className="earning-card-top">
              <span>DRIVER STATEMENT</span>
              <ChevronDown size={16} />
            </div>
            <div className="earning-period">
              September 2026 <span>Week 2</span>
            </div>
            <div className="big-amount">
              ₹12,840<small>.50</small>
            </div>
            <div className="amount-change">
              <TrendingUp size={14} /> 18.4% compared with last week
            </div>
            <div className="earning-bars">
              {[
                ['M', '45'],
                ['T', '68'],
                ['W', '52'],
                ['T', '80'],
                ['F', '93'],
                ['S', '70'],
                ['S', '56'],
              ].map(([day, height], index) => (
                <div key={`${day}-${index}`}>
                  <i style={{ height: `${height}%` }} />
                  <span>{day}</span>
                </div>
              ))}
            </div>
            <div className="card-divider" />
            <div className="earning-total">
              <span>Net driver earnings</span>
              <strong>₹10,552</strong>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="steps-section" id="how-it-works">
          <div className="section-label">
            GET ON THE ROAD <span />
          </div>
          <div className="intro-heading">
            <h2>
              Three steps to your
              <br />
              <em>next chapter.</em>
            </h2>
            <p>Getting started is designed to be simple. You stay in control from the first tap.</p>
          </div>
          <div className="steps-grid">
            {steps.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <div className="step-line" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SAFETY */}
        <section className="safety-section" id="safety">
          <div className="safety-visual">
            <div className="safety-ring ring-one" />
            <div className="safety-ring ring-two" />
            <div className="safety-center">
              <ShieldCheck size={42} />
              <span>24/7</span>
              <small>SAFETY TEAM</small>
            </div>
            <div className="safety-chip chip-one">
              <BadgeCheck size={15} /> Identity verified
            </div>
            <div className="safety-chip chip-two">
              <Navigation size={15} /> Trip shared
            </div>
            <div className="safety-chip chip-three">
              <Headphones size={15} /> Live support
            </div>
          </div>
          <div className="safety-copy">
            <div className="section-label">
              WE HAVE YOUR BACK <span />
            </div>
            <h2>
              Confidence is
              <br />
              <em>part of every ride.</em>
            </h2>
            <p>
              From identity checks before your first ride to an always-on safety team, GoRush is built so you can focus on the
              road ahead.
            </p>
            <div className="safety-points">
              <div>
                <ShieldCheck size={19} />
                <span>
                  <strong>Every driver verified</strong>
                  <small>Documents and identity checked before you go online.</small>
                </span>
              </div>
              <div>
                <Users size={19} />
                <span>
                  <strong>Trip sharing built in</strong>
                  <small>Keep your trusted contacts close to every journey.</small>
                </span>
              </div>
              <div>
                <Zap size={19} />
                <span>
                  <strong>Help in one tap</strong>
                  <small>SOS support and incident reporting, whenever you need it.</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <section className="quote-section">
          <div className="quote-mark">“</div>
          <blockquote>
            GoRush gave me the flexibility to be present for my family without putting my goals on hold.
          </blockquote>
          <div className="quote-author">
            <div>NM</div>
            <span>
              <strong>Nitin Menon</strong>
              <small>GoRush driver · Pune</small>
            </span>
          </div>
          <div className="quote-dots">
            <i />
            <i className="active" />
            <i />
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final-cta">
          <div className="final-kicker">
            <Sparkles size={15} /> THE ROAD IS YOURS
          </div>
          <h2>
            Your next chapter
            <br />
            <em>starts here.</em>
          </h2>
          <p>Join thousands of drivers building a better way to work, one ride at a time.</p>
          <button className="primary-cta" onClick={() => setFormOpen(true)}>
            Become a GoRush driver <ArrowRight size={17} />
          </button>
          <span className="final-note">
            <Clock3 size={13} /> Registration takes less than 5 minutes
          </span>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <a className="site-brand" href="#top">
            <img src="/gorush-logo.png" alt="GoRush" className="brand-logo-img" />
            <strong>GoRush</strong>
          </a>
          <p>
            Move freely. Earn fairly.
            <br />
            Live fully.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <strong>For drivers</strong>
            <button onClick={() => setFormOpen(true)}>Become a driver</button>
            <button onClick={() => scrollTo('earnings')}>Earnings</button>
            <button onClick={() => scrollTo('safety')}>Safety center</button>
          </div>
          <div>
            <strong>Company</strong>
            <button onClick={() => action('About GoRush coming soon')}>About us</button>
            <button onClick={() => action('Careers page coming soon')}>Careers</button>
            <button onClick={() => action('Contact form opened')}>Contact</button>
          </div>
          <div>
            <strong>Follow along</strong>
            <button onClick={() => action('Instagram opened')}>Instagram</button>
            <button onClick={() => action('LinkedIn opened')}>LinkedIn</button>
            <button onClick={() => action('X opened')}>X / Twitter</button>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 GoRush Mobility Technologies</span>
          <span>Privacy · Terms · Accessibility</span>
          <span>
            <Globe2 size={13} /> India
          </span>
        </div>
      </footer>

      {formOpen && <DriverForm close={() => setFormOpen(false)} action={action} />}
    </div>
  );
}

function DriverForm({ close, action }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <div className="form-overlay" onClick={close}>
      <div className="driver-form" onClick={(event) => event.stopPropagation()}>
        {submitted ? (
          <div className="form-success">
            <div>
              <Check size={25} />
            </div>
            <h2>You are on your way.</h2>
            <p>Thanks for your interest. We will send an OTP to your mobile number to begin verification.</p>
            <button className="primary-cta" onClick={close}>
              Back to GoRush <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <>
            <button className="form-close" onClick={close}>
              <X size={19} />
            </button>
            <div className="form-kicker">DRIVER REGISTRATION</div>
            <h2>
              Ready to move
              <br />
              <em>forward?</em>
            </h2>
            <p>Tell us where to reach you. The rest takes just a few minutes.</p>
            <label>
              Full name
              <input placeholder="e.g. Arjun Kumar" />
            </label>
            <label>
              Mobile number
              <div className="phone-input">
                <span>+91</span>
                <input placeholder="98765 43210" />
              </div>
            </label>
            <label>
              City
              <select defaultValue="Indore">
                <option>Indore</option>
                <option>Mumbai</option>
                <option>Pune</option>
                <option>Bengaluru</option>
                <option>Delhi NCR</option>
              </select>
            </label>
            <label className="check-label">
              <input type="checkbox" /> I agree to the GoRush terms and privacy policy.
            </label>
            <button
              className="primary-cta form-submit"
              disabled={isSubmitting}
              onClick={() => {
                setIsSubmitting(true);
                setTimeout(() => {
                  setIsSubmitting(false);
                  setSubmitted(true);
                  action('Registration started');
                }, 850);
              }}
            >
              {isSubmitting ? (
                <>
                  <span className="btn-spinner" /> Verifying details...
                </>
              ) : (
                <>
                  Start registration <ArrowRight size={16} />
                </>
              )}
            </button>
            <small>We never share your details without permission.</small>
          </>
        )}
      </div>
    </div>
  );
}

function CardRouteAnimation() {
  const routePath = "M 325,26 C 265,65 210,120 255,170 C 315,225 330,270 275,310 C 235,342 275,372 315,365";
  return (
    <div className="first-card-route" aria-hidden="true">
      <div className="card-live-gps-pill">
        <span className="live-dot" /> LIVE ROUTE
      </div>
      <svg className="card-route-svg" viewBox="0 0 360 400" preserveAspectRatio="none">
        <defs>
          <linearGradient id="routeLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7bc44a" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#d4ef62" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.8" />
          </linearGradient>
          <radialGradient id="headlightConeGrad" cx="0%" cy="50%" r="100%">
            <stop offset="0%" stopColor="#d4ef62" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#d4ef62" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#d4ef62" stopOpacity="0" />
          </radialGradient>
          <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient base route line */}
        <path
          d={routePath}
          fill="none"
          stroke="rgba(123, 196, 74, 0.16)"
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* Animated Moving Dashed Route Line */}
        <path
          d={routePath}
          fill="none"
          stroke="url(#routeLineGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="moving-route-path"
          filter="url(#routeGlow)"
        />

        {/* Waypoint 1 (Start) */}
        <circle cx="325" cy="26" r="4.5" fill="#d4ef62" />
        <circle cx="325" cy="26" r="5" fill="none" stroke="#d4ef62" strokeWidth="1.5" className="gps-pulse-circle" />
        <circle cx="325" cy="26" r="5" fill="none" stroke="#7bc44a" strokeWidth="1" className="gps-pulse-circle delayed" />

        {/* Waypoint 2 (Mid turn) */}
        <circle cx="255" cy="170" r="3.5" fill="#7bc44a" />
        <circle cx="255" cy="170" r="4" fill="none" stroke="#7bc44a" strokeWidth="1.2" className="gps-pulse-circle" />

        {/* Waypoint 3 (End / Destination) */}
        <circle cx="315" cy="365" r="4.5" fill="#22c55e" />
        <circle cx="315" cy="365" r="5" fill="none" stroke="#22c55e" strokeWidth="1.5" className="gps-pulse-circle" />

        {/* Tiny Car Driving Along The Route */}
        <g className="tiny-car">
          {/* Headlight beam */}
          <polygon
            points="9,-4.5 35,-14 35,14 9,4.5"
            fill="url(#headlightConeGrad)"
            className="headlight-cone"
          />

          {/* Car Shadow */}
          <ellipse cx="0" cy="1" rx="10.5" ry="6" fill="rgba(0,0,0,0.6)" filter="blur(1.5px)" />

          {/* Tires (4 wheels) */}
          <rect x="-8" y="-7.5" width="4" height="2" rx="1" fill="#050a07" />
          <rect x="4" y="-7.5" width="4" height="2" rx="1" fill="#050a07" />
          <rect x="-8" y="5.5" width="4" height="2" rx="1" fill="#050a07" />
          <rect x="4" y="5.5" width="4" height="2" rx="1" fill="#050a07" />

          {/* Car Main Body */}
          <rect
            x="-9.5"
            y="-5.5"
            width="19"
            height="11"
            rx="3"
            fill="#0f1f17"
            stroke="#7bc44a"
            strokeWidth="1.2"
          />

          {/* Roof (Lime Accent) */}
          <rect x="-4" y="-3.5" width="9.5" height="7" rx="2" fill="#d4ef62" />

          {/* Front Windshield */}
          <rect x="2.5" y="-3" width="2" height="6" rx="0.5" fill="#14251b" />

          {/* Rear Windshield */}
          <rect x="-3.5" y="-3" width="1.5" height="6" rx="0.5" fill="#14251b" />

          {/* Headlights (Bright White Glow) */}
          <circle cx="9.5" cy="-3.8" r="1.5" fill="#ffffff" filter="drop-shadow(0 0 3px #ffffff)" />
          <circle cx="9.5" cy="3.8" r="1.5" fill="#ffffff" filter="drop-shadow(0 0 3px #ffffff)" />

          {/* Taillights (Red) */}
          <circle cx="-9.5" cy="-3.8" r="1.2" fill="#ef4444" filter="drop-shadow(0 0 2px #ef4444)" />
          <circle cx="-9.5" cy="3.8" r="1.2" fill="#ef4444" filter="drop-shadow(0 0 2px #ef4444)" />

          {/* Motion along the exact curved path */}
          <animateMotion
            path={routePath}
            dur="6.5s"
            repeatCount="indefinite"
            rotate="auto"
          />
        </g>
      </svg>
    </div>
  );
}
