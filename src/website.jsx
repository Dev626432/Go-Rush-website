import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Banknote,
  BarChart3,
  Bike,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  Crown,
  FileCheck2,
  Globe2,
  Headphones,
  IndianRupee,
  Leaf,
  MapPin,
  Menu,
  Navigation,
  Play,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  UserCheck,
  UserPlus,
  Users,
  Wallet,
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
import './features-redesign.css';
import './earnings-redesign.css';
import './steps-redesign.css';
import './safety-redesign.css';

const featureGroups = [
  {
    num: '01',
    icon: Navigation,
    eyebrow: 'MOVE SMART',
    title: 'Every ride, mapped with confidence.',
    text: 'Live GPS, traffic-aware routes and clear trip status keep every pickup and drop-off calm, quick and predictable.',
    points: ['Live driver tracking', 'Pickup & destination navigation', 'Real-time ETA and re-routing'],
  },
  {
    num: '02',
    icon: Banknote,
    eyebrow: 'EARN CLEARLY',
    title: 'The fare is yours to understand.',
    text: 'From estimated fare to commission and tips, GoRush keeps the full earning story visible for every ride.',
    points: ['Cash, UPI, wallet and online payments', 'Daily, weekly and monthly earnings', 'Fast payouts and incentive bonuses'],
  },
  {
    num: '03',
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

const earningsData = {
  'this-week': {
    label: 'This Week',
    month: 'September 2026',
    subPeriod: 'Week 2',
    amount: '12,840',
    decimal: '.50',
    growth: '18.4% compared with last week',
    net: '₹10,552',
    bars: [
      { day: 'M', height: 44, amount: '₹1,450' },
      { day: 'T', height: 68, amount: '₹2,100' },
      { day: 'W', height: 52, amount: '₹1,680' },
      { day: 'T', height: 88, amount: '₹2,640' },
      { day: 'F', height: 96, amount: '₹2,920' },
      { day: 'S', height: 78, amount: '₹2,350' },
      { day: 'S', height: 60, amount: '₹1,800' },
    ],
  },
  'last-week': {
    label: 'Last Week',
    month: 'September 2026',
    subPeriod: 'Week 1',
    amount: '10,845',
    decimal: '.00',
    growth: '12.1% compared with prev week',
    net: '₹8,920',
    bars: [
      { day: 'M', height: 38, amount: '₹1,220' },
      { day: 'T', height: 58, amount: '₹1,800' },
      { day: 'W', height: 48, amount: '₹1,500' },
      { day: 'T', height: 72, amount: '₹2,200' },
      { day: 'F', height: 84, amount: '₹2,550' },
      { day: 'S', height: 68, amount: '₹2,050' },
      { day: 'S', height: 50, amount: '₹1,525' },
    ],
  },
  'this-month': {
    label: 'This Month',
    month: 'September 2026',
    subPeriod: 'Full Month',
    amount: '48,650',
    decimal: '.80',
    growth: '22.8% compared with August',
    net: '₹39,890',
    bars: [
      { day: 'W1', height: 62, amount: '₹10,845' },
      { day: 'W2', height: 85, amount: '₹12,840' },
      { day: 'W3', height: 74, amount: '₹11,450' },
      { day: 'W4', height: 92, amount: '₹13,515' },
    ],
  },
};

export default function Website() {
  const [earningsPeriod, setEarningsPeriod] = useState('this-week');
  const [periodDropdownOpen, setPeriodDropdownOpen] = useState(false);
  const activeEarnings = earningsData[earningsPeriod] || earningsData['this-week'];
  useEffect(() => {
    const artwork = document.querySelector('.hero-section');
    if (!artwork || artwork.querySelector('.hero-background-video')) return undefined;
    const video = document.createElement('video');
    video.className = 'hero-background-video';
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.setAttribute('aria-hidden', 'true');
    const source = document.createElement('source');
    source.src = 'https://res.cloudinary.com/zfpzqpwo/video/upload/v1788946371/image-to-video/i2v_4532ef3361d04aa0ac941e0535b2036b.mp4';
    source.type = 'video/mp4';
    video.appendChild(source);
    artwork.prepend(video);
    return () => video.remove();
  }, []);

  const [menu, setMenu] = useState(false);
  const [notice, setNotice] = useState('');
  const [formOpen, setFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  const featureGridRef = useRef(null);
  const [featuresInView, setFeaturesInView] = useState(true);

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

      <header className="site-header">
        <a className="site-brand" href="#top">
          <img src="/gorush-logo.png" alt="GoRush" className="brand-logo-img" />
          <strong>GoRush</strong>
        </a>
        <nav className={menu ? 'site-nav open' : 'site-nav'}>
          <button onClick={() => scrollTo('how-it-works')}>How it works</button>
          <button onClick={() => scrollTo('features')}>Why GoRush</button>
          <button onClick={() => scrollTo('earnings')}>Earnings</button>
          <button onClick={() => scrollTo('safety')}>Safety</button>
          <button
            className="mobile-cta"
            onClick={() => {
              setFormOpen(true);
              setMenu(false);
            }}
          >
            Become a driver <ArrowRight size={15} />
          </button>
        </nav>
        <div className="header-actions">
          <button className="header-login" onClick={() => action('Driver login is coming soon')}>
            Driver login
          </button>
          <button className="header-cta" onClick={() => setFormOpen(true)}>
            Join GoRush <ArrowRight size={15} />
          </button>
        </div>
        <button className="site-menu" onClick={() => setMenu(!menu)}>
          {menu ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span className="pulse-dot" /> Now welcoming drivers in Indore
            </div>
            <h1>
              More miles.
              <br />
              <em>More freedom.</em>
              <br />
              More you.
            </h1>
            <p>
              GoRush is the driver-first platform for people who want to move through the city on their own terms and earn
              fairly along the way.
            </p>
            <div className="hero-actions">
              <button className="primary-cta" onClick={() => setFormOpen(true)}>
                Start driving <ArrowRight size={17} />
              </button>
              <button className="play-cta" onClick={() => action('Watch the GoRush story')}>
                <span>
                  <Play size={13} fill="currentColor" />
                </span>{' '}
                See how it works
              </button>
            </div>
            <div className="hero-trust">
              <div className="trust-avatars">
                <i>AK</i>
                <i>RS</i>
                <i>NM</i>
                <b>+</b>
              </div>
              <span>
                <strong>48,000+ drivers</strong>
                <br />
                are already moving forward
              </span>
            </div>
          </div>

          <div className="hero-art">
            <div className="sun-disc" />
            <div className="city-lines" />
            <div className="hero-scooter">
              <Bike size={155} strokeWidth={1.1} />
            </div>
            <div className="route-stamp">
              <Navigation size={15} />
              <span>
                YOUR ROUTE
                <br />
                <strong>YOUR RULES</strong>
              </span>
            </div>
            <div className="earnings-float">
              <div className="float-icon">
                <TrendingUp size={16} />
              </div>
              <span>THIS MONTH</span>
              <strong>₹38,420</strong>
              <small>↑ 18.4% this week</small>
            </div>
            <div className="rating-float">
              <Star size={14} fill="currentColor" />
              <strong>4.92</strong>
              <span>driver rating</span>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="stats-strip">
          {stats.map(([number, label]) => (
            <div key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        {/* FEATURES SECTION (MATCHING CHATGPT DESIGN) */}
        <section className="intro-section" id="features">
          {/* Top-Right Large Watermark */}
          <div className="features-watermark">DRIVE YOUR DAY</div>

          {/* Left City Skyline Silhouette */}
          <svg className="features-bg-skyline" viewBox="0 0 320 480" fill="none" aria-hidden="true">
            <path
              d="M0 480 L0 260 L25 260 L25 220 L40 220 L40 180 L55 180 L55 140 L70 140 L70 110 L85 110 L85 80 L95 80 L95 50 L105 50 L105 80 L115 80 L115 150 L140 150 L140 190 L160 190 L160 230 L180 230 L180 270 L210 270 L210 310 L250 310 L250 360 L290 360 L290 420 L320 420 L320 480 Z"
              fill="rgba(80, 120, 90, 0.35)"
            />
            <path
              d="M0 480 L0 320 L35 320 L35 280 L75 280 L75 240 L120 240 L120 290 L170 290 L170 340 L230 340 L230 390 L280 390 L280 440 L320 440 L320 480 Z"
              fill="rgba(60, 100, 70, 0.25)"
            />
            <path
              d="M-20 380 Q 80 340 180 380 T 340 370 L 340 480 L -20 480 Z"
              fill="rgba(100, 140, 90, 0.22)"
            />
          </svg>

          {/* Right Highway Silhouette */}
          <svg className="features-bg-highway" viewBox="0 0 380 450" fill="none" aria-hidden="true">
            <path
              d="M50 450 C 120 350 220 280 380 230 L 380 450 Z"
              fill="rgba(120, 160, 100, 0.22)"
            />
            <path
              d="M0 450 C 140 380 260 340 380 320 L 380 450 Z"
              fill="rgba(90, 130, 80, 0.28)"
            />
          </svg>

          {/* Upper-Right Floating GPS Pin & Route Ahead Widget */}
          <div className="features-bg-route-wrap" aria-hidden="true">
            <div className="route-pin-beacon">
              <div className="beacon-dot" />
            </div>
            <div className="route-pill-widget">
              <span>A Better Route Ahead</span>
              <ArrowRight size={13} />
            </div>
          </div>

          {/* Background Dashed Route Curve */}
          <svg className="features-bg-dashed-route" viewBox="0 0 320 220" fill="none" aria-hidden="true">
            <path
              d="M 280 20 C 220 50 140 90 60 190"
              stroke="#8cb344"
              strokeWidth="2.5"
              strokeDasharray="6 7"
              strokeLinecap="round"
            />
          </svg>

          {/* Upper-Right Floating Cursive Script */}
          <div className="features-script-quote" aria-hidden="true">
            <span>More Miles</span>
            <span>More Freedom</span>
          </div>

          {/* Blurred Corner Foliage */}
          <div className="features-leaf-corner left" aria-hidden="true" />
          <div className="features-leaf-corner right" aria-hidden="true" />

          {/* Left Grouped Header: Title + Subtitle */}
          <div className="features-header-wrap">
            <div className="features-kicker">
              <span>THE GORUSH DIFFERENCE</span>
              <span className="features-kicker-line" />
            </div>
            <h2 className="features-main-title">
              Built around the person
              <em>behind the wheel.</em>
            </h2>
            <p className="features-main-desc">
              You bring the drive. We bring the tools, trust and technology to make every working day feel more like yours.
            </p>
          </div>

          {/* 3 Cards Grid */}
          <div className={`features-cards-grid feature-grid ${featuresInView ? 'in-view' : ''}`} ref={featureGridRef}>
            {featureGroups.map(({ num, icon: Icon, eyebrow, title, text, points }, index) => {
              const cardClass =
                index === 0
                  ? 'card-dark-forest card-slide-left'
                  : index === 1
                  ? 'card-vibrant-lime card-slide-bottom'
                  : 'card-dark-forest card-slide-right';
              return (
                <article className={`feature-card ${cardClass}`} key={title}>
                  {/* Decorative Corner Arc */}
                  <div className="card-top-corner-arc" />

                  {/* Card 1 Animated Route & Tiny Driving Car */}
                  {index === 0 && <CardRouteAnimation />}

                  <div>
                    <div className="card-icon-wrap">
                      <Icon size={22} />
                    </div>
                    <div className="card-num-pill">
                      <span>{num}</span> {eyebrow}
                    </div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>

                  <div>
                    <ul>
                      {points.map((point) => (
                        <li key={point}>
                          <span className="point-check-badge">
                            <Check size={11} strokeWidth={3} />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <button onClick={() => action(`${eyebrow} details opened`)}>
                      Explore feature <ArrowRight size={15} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* EARNINGS */}
        <section className="earnings-redesign-wrap" id="earnings">
          {/* Central Background: Rider on Highway at Night toward City */}
          <div className="earnings-bg-layer">
            <img
              src="/earnings-rider-bg.jpg"
              alt="GoRush Night Road Rider"
              className="earnings-bg-image"
            />
            <div className="earnings-bg-vignette" />
          </div>

          {/* Glowing Route Curve & Map Pin */}
          <div className="earnings-route-overlay">
            <div className="earnings-pin-container">
              <div className="earnings-pin-marker">
                <MapPin size={22} />
                <span className="pin-glow-ring" />
              </div>
              <div className="earnings-pin-tooltip">
                <span>More Rides.</span>
                <small>More Freedom.</small>
              </div>
            </div>
          </div>

          {/* Top Right Handwritten Script */}
          <div className="earnings-script-quote">
            Good People
            <br />
            Great Journeys
          </div>

          <div className="earnings-container">
            {/* LEFT COLUMN: Copy, Features Timeline & CTA */}
            <div className="earnings-left-col">
              <div className="earnings-eyebrow">
                YOUR WORK. YOUR WORTH <span className="earnings-eyebrow-line" />
              </div>

              <h2 className="earnings-headline">
                Know what you earn.
                <br />
                <em>Keep what you can.</em>
              </h2>

              <p className="earnings-desc">
                No mystery math. See the fare, platform fee, tips, incentives and your final take-home amount before you commit to a ride.
              </p>

              {/* Connected Feature Timeline */}
              <div className="earnings-timeline">
                <div className="earnings-timeline-line" />

                <div className="earnings-timeline-item">
                  <div className="timeline-icon-box">
                    <Wallet size={20} />
                  </div>
                  <div className="timeline-text">
                    <div className="timeline-title-row">
                      <span className="timeline-num">01</span>
                      <strong className="timeline-title">Transparent fares</strong>
                    </div>
                    <p className="timeline-desc">Every ride shows a clear estimate.</p>
                  </div>
                </div>

                <div className="earnings-timeline-item">
                  <div className="timeline-icon-box">
                    <BarChart3 size={20} />
                  </div>
                  <div className="timeline-text">
                    <div className="timeline-title-row">
                      <span className="timeline-num">02</span>
                      <strong className="timeline-title">Weekly incentives</strong>
                    </div>
                    <p className="timeline-desc">Hit targets, unlock bonuses and peak-hour boosts.</p>
                  </div>
                </div>

                <div className="earnings-timeline-item">
                  <div className="timeline-icon-box">
                    <Zap size={20} />
                  </div>
                  <div className="timeline-text">
                    <div className="timeline-title-row">
                      <span className="timeline-num">03</span>
                      <strong className="timeline-title">Flexible payouts</strong>
                    </div>
                    <p className="timeline-desc">Withdraw to your bank or UPI when you need it.</p>
                  </div>
                </div>
              </div>

              {/* CTA + Social Proof Avatars */}
              <div className="earnings-action-row">
                <button className="earnings-primary-btn" onClick={() => setFormOpen(true)}>
                  See your earning potential <ArrowRight size={16} />
                </button>

                <div className="earnings-social-proof">
                  <div className="earnings-avatar-stack">
                    <img src="/driver-avatar-1.jpg" alt="GoRush Driver" className="earnings-avatar-item" />
                    <img src="/driver-avatar-2.jpg" alt="GoRush Driver" className="earnings-avatar-item" />
                    <img src="/driver-avatar-3.jpg" alt="GoRush Driver" className="earnings-avatar-item" />
                  </div>
                  <div className="earnings-social-text">
                    <strong>48,000+ drivers</strong>
                    <span>are earning better with GoRush</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Driver Statement Card & Floating Badges */}
            <div className="earnings-right-col">
              <div className="earnings-card-wrapper">
                {/* Outer Glow Halo */}
                <div className="earnings-card-glow" />

                {/* Main Card */}
                <div className="driver-statement-card">
                  <div className="statement-card-top">
                    <span className="statement-tag">DRIVER STATEMENT</span>
                    <div style={{ position: 'relative' }}>
                      <button
                        type="button"
                        className="statement-dropdown-btn"
                        onClick={() => setPeriodDropdownOpen(!periodDropdownOpen)}
                      >
                        {activeEarnings.label} <ChevronDown size={13} />
                      </button>
                      {periodDropdownOpen && (
                        <div
                          style={{
                            position: 'absolute',
                            right: 0,
                            top: '110%',
                            background: '#ffffff',
                            borderRadius: '12px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                            border: '1px solid #dbe5d4',
                            zIndex: 20,
                            overflow: 'hidden',
                            minWidth: '120px',
                          }}
                        >
                          {['this-week', 'last-week', 'this-month'].map((key) => (
                            <button
                              key={key}
                              type="button"
                              onClick={() => {
                                setEarningsPeriod(key);
                                setPeriodDropdownOpen(false);
                              }}
                              style={{
                                display: 'block',
                                width: '100%',
                                textAlign: 'left',
                                padding: '8px 14px',
                                background: earningsPeriod === key ? '#eff6e6' : '#ffffff',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '11px',
                                fontWeight: earningsPeriod === key ? '800' : '600',
                                color: earningsPeriod === key ? '#2a441e' : '#4a5d4d',
                              }}
                            >
                              {earningsData[key].label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="statement-period-row">
                    <span className="statement-month">{activeEarnings.month}</span>
                    <span className="statement-week">{activeEarnings.subPeriod}</span>
                  </div>

                  <div className="statement-amount-display">
                    ₹{activeEarnings.amount}
                    <small>{activeEarnings.decimal}</small>
                  </div>

                  <div className="statement-growth">
                    <TrendingUp size={13} /> {activeEarnings.growth}
                  </div>

                  {/* Dynamic Interactive Bar Chart */}
                  <div className="statement-chart">
                    {activeEarnings.bars.map((bar, idx) => (
                      <div key={`${bar.day}-${idx}`} className="chart-bar-col">
                        <div className="chart-tooltip">{bar.amount}</div>
                        <div
                          className="chart-bar-fill"
                          style={{ height: `${bar.height}%` }}
                        />
                        <span className="chart-day-label">{bar.day}</span>
                      </div>
                    ))}
                  </div>

                  <div className="statement-card-bottom">
                    <span className="statement-net-label">Net driver earnings</span>
                    <strong className="statement-net-val">{activeEarnings.net}</strong>
                  </div>
                </div>

                {/* Floating Chip 1: Growth Badge (+18.4% vs last week) */}
                <div className="floating-chip-growth">
                  <div className="chip-growth-icon">
                    <ArrowUpRight size={17} strokeWidth={2.5} />
                  </div>
                  <div className="chip-growth-text">
                    <strong>+18.4%</strong>
                    <span>vs last week</span>
                  </div>
                </div>

                {/* Floating Chip 2: Peak Hours Badge */}
                <div className="floating-chip-peak">
                  <div className="chip-peak-icon">
                    <Crown size={16} />
                  </div>
                  <div className="chip-peak-text">
                    <strong>Peak Hours</strong>
                    <span>Higher earnings</span>
                  </div>
                </div>

                {/* Floating Chip 3: Effort Badge */}
                <div className="floating-chip-effort">
                  <div className="chip-effort-icon">
                    <Leaf size={15} />
                  </div>
                  <div className="chip-effort-text">
                    <strong>Your Effort</strong>
                    <span>Drives Better Tomorrows.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS / THREE STEPS REDESIGNED */}
        <section className="steps-redesign-wrap" id="how-it-works">
          {/* Scenic Background: Rider on Winding Highway toward City */}
          <div className="steps-bg-layer">
            <img
              src="/steps-scenic-bg.jpg"
              alt="GoRush Scenic Highway Rider"
              className="steps-bg-image"
            />
            <div className="steps-bg-fade" />
          </div>

          {/* Decorative Corner Botanical Leaf Accents */}
          <svg className="steps-leaf-accent-top" viewBox="0 0 100 100" fill="none">
            <path
              d="M10,80 Q30,30 80,10 Q60,60 10,80 Z M35,45 Q70,40 80,10"
              stroke="#558026"
              strokeWidth="2"
              fill="rgba(110, 160, 50, 0.08)"
            />
            <path
              d="M25,85 Q45,55 75,45 Q50,75 25,85 Z"
              stroke="#558026"
              strokeWidth="1.5"
              fill="rgba(110, 160, 50, 0.05)"
            />
          </svg>

          <svg className="steps-leaf-accent-bottom" viewBox="0 0 120 120" fill="none">
            <path
              d="M15,100 Q40,40 100,15 Q75,75 15,100 Z M45,55 Q85,50 100,15"
              stroke="#558026"
              strokeWidth="2"
              fill="rgba(110, 160, 50, 0.12)"
            />
          </svg>

          {/* Cursive Handwritten Script Quote */}
          <div className="steps-script-quote">
            Same Roads
            <br />
            <em>Bigger Dreams</em>
          </div>

          {/* Scenic Route Map Pin */}
          <div className="steps-scenic-pin">
            <div className="steps-pin-icon">
              <MapPin size={18} />
            </div>
            <div className="steps-pin-tooltip">
              <span>More Rides</span>
              <small>More Freedoms</small>
            </div>
          </div>

          <div className="steps-container">
            {/* Header Area */}
            <div className="steps-header-row">
              <div className="steps-title-col">
                <div className="steps-eyebrow">
                  GET ON THE ROAD <span className="steps-eyebrow-line" />
                </div>
                <h2 className="steps-headline">
                  Three steps to your
                  <br />
                  <em>next chapter.</em>
                </h2>
              </div>
              <p className="steps-subtitle">
                Getting started is designed to be simple. You stay in control from the first tap.
              </p>
            </div>

            {/* Connected Cards Stage */}
            <div className="steps-cards-stage">
              {/* Route Line Connector Spanning Across Cards */}
              <div className="steps-route-connector">
                <div className="steps-waypoint steps-waypoint-1" />
                <div className="steps-waypoint steps-waypoint-2" />
              </div>

              {/* 3 Step Cards Grid */}
              <div className="steps-grid-row">
                {/* Step 1 */}
                <div className="step-item-card" onClick={() => setFormOpen(true)}>
                  <div className="step-card-header">
                    <span className="step-card-num">01</span>
                    <div className="step-card-icon-wrap">
                      <UserPlus size={26} />
                    </div>
                  </div>
                  <div className="step-card-body">
                    <h3 className="step-card-title">Create your profile</h3>
                    <p className="step-card-text">
                      Register with your mobile number, verify OTP and tell us a little about yourself.
                    </p>
                  </div>
                  <button type="button" className="step-card-link-btn">
                    Get Started <ArrowRight size={14} />
                  </button>
                </div>

                {/* Step 2 (Featured / Highlighted) */}
                <div className="step-item-card featured-step" onClick={() => setFormOpen(true)}>
                  <div className="step-card-header">
                    <span className="step-card-num">02</span>
                    <div className="step-card-icon-wrap">
                      <FileCheck2 size={26} />
                    </div>
                  </div>
                  <div className="step-card-body">
                    <h3 className="step-card-title">Verify your documents</h3>
                    <p className="step-card-text">
                      Upload your license, RC, insurance and bank details. Our team checks everything quickly.
                    </p>
                  </div>
                  <button type="button" className="step-card-link-btn">
                    Learn More <ArrowRight size={14} />
                  </button>
                </div>

                {/* Step 3 */}
                <div className="step-item-card" onClick={() => setFormOpen(true)}>
                  <div className="step-card-header">
                    <span className="step-card-num">03</span>
                    <div className="step-card-icon-wrap">
                      <TrendingUp size={26} />
                    </div>
                  </div>
                  <div className="step-card-body">
                    <h3 className="step-card-title">Start earning</h3>
                    <p className="step-card-text">
                      Go online, accept your first ride and watch your earnings grow in real time.
                    </p>
                  </div>
                  <button type="button" className="step-card-link-btn">
                    Go Online <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Row: Trust Badges & Corner Ribbon Banner */}
            <div className="steps-bottom-row">
              <div className="steps-trust-strip">
                <div className="steps-trust-item">
                  <ShieldCheck size={18} />
                  <span>Safe & Secure</span>
                </div>
                <div className="steps-trust-item">
                  <Headphones size={18} />
                  <span>24/7 Support</span>
                </div>
                <div className="steps-trust-item">
                  <Leaf size={18} />
                  <span>Grow Your Earnings</span>
                </div>
              </div>

              <div className="steps-corner-banner" onClick={() => setFormOpen(true)}>
                <div className="steps-banner-icon">
                  <BarChart3 size={18} />
                </div>
                <div className="steps-banner-text">
                  <strong>Every Ride</strong>
                  <span>A Brighter Tomorrow. <ArrowRight size={12} /></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SAFETY SECTION REDESIGNED */}
        <section className="safety-redesign-wrap" id="safety">
          {/* Scenic Background: Highway Overpass & City Skyline */}
          <div className="safety-bg-layer">
            <img
              src="/safety-scenic-bg.jpg"
              alt="GoRush Safety Highway"
              className="safety-bg-image"
            />
            <div className="safety-bg-fade" />
          </div>

          {/* Decorative Corner Leaves */}
          <svg className="safety-leaf-top-left" viewBox="0 0 100 100" fill="none">
            <path
              d="M15,85 Q35,30 85,15 Q65,65 15,85 Z M40,45 Q75,40 85,15"
              stroke="#558026"
              strokeWidth="2"
              fill="rgba(110, 160, 50, 0.12)"
            />
          </svg>

          <svg className="safety-leaf-bottom-left" viewBox="0 0 120 120" fill="none">
            <path
              d="M15,100 Q40,40 100,15 Q75,75 15,100 Z M45,55 Q85,50 100,15"
              stroke="#558026"
              strokeWidth="2"
              fill="rgba(110, 160, 50, 0.14)"
            />
          </svg>

          <svg className="safety-leaf-bottom-right" viewBox="0 0 120 120" fill="none">
            <path
              d="M15,100 Q40,40 100,15 Q75,75 15,100 Z M45,55 Q85,50 100,15"
              stroke="#558026"
              strokeWidth="2"
              fill="rgba(110, 160, 50, 0.14)"
            />
          </svg>

          {/* Top-Right Dashed Swoosh Line */}
          <svg className="safety-swoosh-svg" viewBox="0 0 400 200" fill="none">
            <path
              d="M380,10 Q260,80 180,110 T0,160"
              stroke="#8fb572"
              strokeWidth="1.5"
              strokeDasharray="5,6"
              opacity="0.75"
            />
          </svg>

          {/* Cursive Handwritten Quotes */}
          <div className="safety-script-quote-top">
            More People
            <br />
            <em>More Possibilities</em>
          </div>

          <div className="safety-script-quote-bottom">
            Safer People
            <br />
            <em>Brighter Tomorrows</em>
          </div>

          <div className="safety-container">
            {/* LEFT COLUMN: 3D Holographic Radar & Floating Pills */}
            <div className="safety-radar-col">
              <div className="safety-radar-stage">
                {/* Concentric Radar Rings */}
                <div className="radar-ring radar-ring-1" />
                <div className="radar-ring radar-ring-2" />
                <div className="radar-ring radar-ring-3" />

                {/* Orbital Checkpoint Dots */}
                <span className="radar-waypoint radar-waypoint-top" />
                <span className="radar-waypoint radar-waypoint-bottom" />
                <span className="radar-waypoint radar-waypoint-right" />

                {/* Central 3D Crystal Shield Badge */}
                <div className="safety-center-crystal" onClick={() => setFormOpen(true)}>
                  <div className="safety-center-halo" />
                  <img
                    src="/safety-center-shield.png"
                    alt="24/7 Safety Verified"
                  />
                </div>

                {/* Floating Pill 1: Identity Verified */}
                <div className="safety-floating-pill safety-pill-identity">
                  <UserCheck size={16} className="pill-icon" />
                  <span className="pill-label">Identity verified</span>
                  <span className="pill-check-badge">
                    <Check size={11} />
                  </span>
                </div>

                {/* Floating Pill 2: Trip Sharing Active */}
                <div className="safety-floating-pill safety-pill-trip">
                  <Send size={15} className="pill-icon" />
                  <span className="pill-label">Trip sharing active</span>
                  <span className="pill-check-badge">
                    <Check size={11} />
                  </span>
                </div>

                {/* Floating Pill 3: 24/7 Live Support */}
                <div className="safety-floating-pill safety-pill-support">
                  <Headphones size={16} className="pill-icon" />
                  <span className="pill-label">24/7 live support</span>
                  <span className="pill-check-badge">
                    <Check size={11} />
                  </span>
                </div>

                {/* Floating Pill 4: Safer Rides Community Card */}
                <div className="safety-card-community" onClick={() => setFormOpen(true)}>
                  <BarChart3 size={18} className="community-icon" />
                  <div className="community-text">
                    <strong>Safer rides</strong>
                    <span>Stronger community</span>
                  </div>
                  <ArrowRight size={14} className="community-arrow" />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Copy & Features Points */}
            <div className="safety-copy-col">
              <div className="safety-eyebrow">
                WE HAVE YOUR BACK <span className="safety-eyebrow-line" />
              </div>

              <h2 className="safety-headline">
                Confidence is
                <br />
                <em>part of every ride.</em>
              </h2>

              <p className="safety-desc">
                From identity checks before your first ride to an always-on safety team, GoRush is built so you can focus on the road ahead.
              </p>

              <div className="safety-points-list">
                <div className="safety-point-item">
                  <div className="safety-point-icon-box">
                    <ShieldCheck size={20} />
                  </div>
                  <div className="safety-point-text">
                    <h4 className="safety-point-title">Every driver verified</h4>
                    <p className="safety-point-desc">Documents and identity checked before you go online.</p>
                  </div>
                </div>

                <div className="safety-point-item">
                  <div className="safety-point-icon-box">
                    <Users size={20} />
                  </div>
                  <div className="safety-point-text">
                    <h4 className="safety-point-title">Trip sharing built in</h4>
                    <p className="safety-point-desc">Keep your trusted contacts close to every journey.</p>
                  </div>
                </div>

                <div className="safety-point-item">
                  <div className="safety-point-icon-box">
                    <Zap size={20} />
                  </div>
                  <div className="safety-point-text">
                    <h4 className="safety-point-title">Help in one tap</h4>
                    <p className="safety-point-desc">SOS support and incident reporting, whenever you need it.</p>
                  </div>
                </div>
              </div>

              {/* Action Button & Trust Note */}
              <div className="safety-action-row">
                <button
                  type="button"
                  className="safety-primary-btn"
                  onClick={() => setFormOpen(true)}
                >
                  Drive with confidence <ArrowRight size={15} />
                </button>

                <div className="safety-note-badge">
                  <div className="safety-note-icon">
                    <Leaf size={15} />
                  </div>
                  <div className="safety-note-text">
                    <strong>Safer Drivers.</strong>
                    <span>Happier Journeys.</span>
                  </div>
                </div>
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
