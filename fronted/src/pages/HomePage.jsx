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
  ChevronLeft,
  ChevronRight,
  Clock3,
  Crown,
  FileCheck2,
  Globe2,
  Headphones,
  Heart,
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
import { Link } from 'react-router-dom';
import '../website.css';
import '../hero-video.css';
import '../feature-motion.css';
import '../feature-latest.css';
import '../feature-polish.css';
import '../feature-theme.css';
import '../loader.css';
import '../card-route.css';
import '../features-redesign.css';
import '../earnings-redesign.css';
import '../steps-redesign.css';
import '../safety-redesign.css';
import '../quote-redesign.css';
import '../final-cta-redesign.css';
import '../onboarding-hero-redesign.css';
import '../home-hero-scenic.css';

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

const driverQuotes = [
  {
    initials: 'NM',
    name: 'Nitin Menon',
    role: 'GoRush driver · Indore',
    avatarBg: '#c8816c',
    text: 'gave me the flexibility to be present for my family without putting my goals on hold.',
  },
  {
    initials: 'PS',
    name: 'Pooja Sharma',
    role: 'GoRush driver · Indore',
    avatarBg: '#7ca872',
    text: 'transparent fares and instant daily payouts gave me complete control over my income and my time.',
  },
  {
    initials: 'AR',
    name: 'Arjun Rathore',
    role: 'GoRush driver · Indore',
    avatarBg: '#597fa6',
    text: 'the 24/7 safety team and live trip sharing give me and my family absolute confidence every single night.',
  },
];

const AnimatedStat = ({ text, label }) => {
  const [displayValue, setDisplayValue] = useState(text);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const match = text.match(/^([\d.]+)(.*)$/);
    if (!match) return;

    const targetNum = parseFloat(match[1]);
    const suffix = match[2];
    const isFloat = match[1].includes('.');
    
    let current = isFloat ? 0.0 : 1;
    const duration = 3500; // Increased duration for slower animation
    const fps = 30;
    const steps = duration / (1000 / fps);
    const stepTime = 1000 / fps;
    const increment = targetNum / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNum) {
        current = targetNum;
        clearInterval(timer);
      }
      
      let formattedNum = isFloat ? current.toFixed(1) : Math.floor(current);
      setDisplayValue(formattedNum + suffix);
    }, stepTime);

    return () => clearInterval(timer);
  }, [text, key]);

  return (
    <div onClick={() => setKey(k => k + 1)} style={{ cursor: 'pointer', userSelect: 'none' }} title="Click to animate">
      <strong>{displayValue}</strong>
      <span>{label}</span>
    </div>
  );
};

export default function HomePage({ onJoinClick, action }) {
  const setFormOpen = () => {
    if (onJoinClick) onJoinClick();
  };
  const [activeQuoteIdx, setActiveQuoteIdx] = useState(0);
  const nextQuote = () => setActiveQuoteIdx((prev) => (prev + 1) % driverQuotes.length);
  const prevQuote = () => setActiveQuoteIdx((prev) => (prev - 1 + driverQuotes.length) % driverQuotes.length);

  const [earningsPeriod, setEarningsPeriod] = useState('this-week');
  const [periodDropdownOpen, setPeriodDropdownOpen] = useState(false);
  const activeEarnings = earningsData[earningsPeriod] || earningsData['this-week'];
  useEffect(() => {
    const artwork = document.querySelector('.hero-section');
    if (!artwork || artwork.querySelector('.hero-background-video')) return undefined;
    const video = document.createElement('video');
    video.className = 'hero-background-video';
    video.autoplay = true;
    video.defaultMuted = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.poster = 'https://res.cloudinary.com/zfpzqpwo/image/upload/f_auto,q_auto/pexels-neilstha-firman-1119718312-35985469';
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('muted', '');
    video.setAttribute('aria-hidden', 'true');
    const source = document.createElement('source');
    source.src = 'https://res.cloudinary.com/zfpzqpwo/video/upload/v1788946371/image-to-video/i2v_4532ef3361d04aa0ac941e0535b2036b.mp4';
    source.type = 'video/mp4';
    video.appendChild(source);
    artwork.prepend(video);
    // Safari iOS explicit play call with silent catch for Low Power Mode
    video.play().catch(() => {});
    return () => video.remove();
  }, []);

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

  return (
    <div className="home-page-wrap">
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
              <button className="primary-cta" onClick={onJoinClick}>
                Start driving <ArrowRight size={17} />
              </button>
              <Link to="/how-it-works" className="play-cta">
                <span>
                  <Play size={13} fill="currentColor" />
                </span>{' '}
                See how it works
              </Link>
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
            <AnimatedStat key={label} text={number} label={label} />
          ))}
        </section>

        {/* THE GORUSH DIFFERENCE - 100% HANDCRAFTED NATIVE WEB */}
        <section className="scenic-hero-section" id="features">
          <div className="scenic-hero-inner">
            <div className="scenic-header-badge">
              <Sparkles size={13} />
              <span>The GoRush Standard</span>
            </div>
            <h2 className="scenic-header-title">
              Built around the person <em>behind the wheel.</em>
            </h2>
            <p className="scenic-header-subtitle">
              Fair commissions, predictable earnings, and human-first driver care from the moment you hit go. Experience a platform engineered for your growth.
            </p>

            <div className="difference-cards-grid">
              {/* Card 1 */}
              <div className="difference-card">
                <div>
                  <div className="difference-card-badge">TRANSPARENT</div>
                  <div className="difference-card-icon-box">
                    <Wallet size={24} />
                  </div>
                  <h3 className="difference-card-title">Clear, Fair Pay Every Mile</h3>
                  <p className="difference-card-desc">
                    No hidden deductions or unpredictable algorithms. Know your fare upfront with instant weekly settlements directly into your bank.
                  </p>
                  <ul className="difference-card-points">
                    <li className="difference-card-point">
                      <Check size={16} /> Instant UPI & direct deposit
                    </li>
                    <li className="difference-card-point">
                      <Check size={16} /> 0% surprise platform commission
                    </li>
                    <li className="difference-card-point">
                      <Check size={16} /> Surge & peak hour bonus pass-through
                    </li>
                  </ul>
                </div>
                <div className="difference-card-highlight">
                  <div>
                    <span>Weekly Average</span>
                    <strong>₹14,500+</strong>
                  </div>
                  <span>Full-time Partner</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="difference-card">
                <div>
                  <div className="difference-card-badge">SECURITY</div>
                  <div className="difference-card-icon-box">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="difference-card-title">Comprehensive Protection</h3>
                  <p className="difference-card-desc">
                    Drive with peace of mind. Every trip is covered by complimentary accidental medical coverage and dedicated round-the-clock emergency response.
                  </p>
                  <ul className="difference-card-points">
                    <li className="difference-card-point">
                      <Check size={16} /> ₹5,00,000 accidental cover
                    </li>
                    <li className="difference-card-point">
                      <Check size={16} /> 24/7 in-app SOS & rapid marshal response
                    </li>
                    <li className="difference-card-point">
                      <Check size={16} /> Driver identity & rating protection
                    </li>
                  </ul>
                </div>
                <div className="difference-card-highlight">
                  <div>
                    <span>Coverage</span>
                    <strong>Active 24/7</strong>
                  </div>
                  <span>Zero Premium</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="difference-card">
                <div>
                  <div className="difference-card-badge">CONTROL</div>
                  <div className="difference-card-icon-box">
                    <Navigation size={24} />
                  </div>
                  <h3 className="difference-card-title">Total Flexibility & Autonomy</h3>
                  <p className="difference-card-desc">
                    You choose when, where, and how long to drive. Pick your preferred delivery hubs, set home routes, and log off whenever family calls.
                  </p>
                  <ul className="difference-card-points">
                    <li className="difference-card-point">
                      <Check size={16} /> Set preferred return destination
                    </li>
                    <li className="difference-card-point">
                      <Check size={16} /> No minimum mandatory hours
                    </li>
                    <li className="difference-card-point">
                      <Check size={16} /> Live demand heatmaps for quick bookings
                    </li>
                  </ul>
                </div>
                <div className="difference-card-highlight">
                  <div>
                    <span>Flexibility</span>
                    <strong>100% Freedom</strong>
                  </div>
                  <span>Your Terms</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="scenic-actions-bar">
              <div className="scenic-actions-info">
                <div className="scenic-actions-icon">
                  <BadgeCheck size={22} />
                </div>
                <div className="scenic-actions-text">
                  <strong>Ready to see the difference for yourself?</strong>
                  <span>Join over 10,000+ drivers already earning with dignity on GoRush.</span>
                </div>
              </div>
              <div className="scenic-actions-btns">
                <button
                  type="button"
                  className="scenic-primary-cta"
                  onClick={onJoinClick}
                  id="difference-get-started-btn"
                >
                  <span>Get Started</span>
                  <ArrowRight size={16} />
                </button>
                <Link
                  to="/how-it-works"
                  className="scenic-secondary-link"
                  id="difference-see-how-btn"
                >
                  <span>See How It Works</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
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
                  <div className="earnings-avatar-stack" aria-label="GoRush Top Drivers">
                    <span className="earnings-avatar-item" style={{ background: '#d9c4aa' }}>AK</span>
                    <span className="earnings-avatar-item" style={{ background: '#9cb8a0' }}>RS</span>
                    <span className="earnings-avatar-item" style={{ background: '#d4ef62' }}>★</span>
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

        {/* HOW IT WORKS / ONBOARDING - 100% HANDCRAFTED NATIVE WEB */}
        <section className="new-onboarding-section" id="how-it-works">
          <div className="onboarding-inner-container">
            <div className="onboarding-header-center">
              <div className="onboarding-eyebrow-badge">
                <Sparkles size={13} />
                <span>Simple 3-Step Process</span>
              </div>
              <h2 className="onboarding-main-title">
                Your journey to earning <em>starts in minutes.</em>
              </h2>
              <p className="onboarding-main-subtitle">
                No long paper queues or bureaucratic delays. Everything is managed seamlessly from your phone with instant automated verification.
              </p>
            </div>

            <div className="onboarding-steps-row">
              {/* Step 1 */}
              <div className="onboarding-step-card">
                <div className="step-card-num-row">
                  <span className="step-big-num">01</span>
                  <span className="step-time-badge">2 MINS</span>
                </div>
                <div className="step-card-icon-box">
                  <UserPlus size={22} />
                </div>
                <h3 className="step-card-title">Register Your Profile</h3>
                <p className="step-card-desc">
                  Enter your mobile number, select your vehicle category (bike, auto, or cab), and set up your personal driver account in seconds.
                </p>
                <ul className="step-card-checklist">
                  <li>
                    <Check size={14} /> Quick OTP verification
                  </li>
                  <li>
                    <Check size={14} /> Choose preferred city & zone
                  </li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="onboarding-step-card">
                <div className="step-card-num-row">
                  <span className="step-big-num">02</span>
                  <span className="step-time-badge">3 MINS</span>
                </div>
                <div className="step-card-icon-box">
                  <FileCheck2 size={22} />
                </div>
                <h3 className="step-card-title">Upload Documents</h3>
                <p className="step-card-desc">
                  Snap clear photos of your Driving License, Vehicle RC, and Aadhaar card directly through the app. Our AI instantly validates your files.
                </p>
                <ul className="step-card-checklist">
                  <li>
                    <Check size={14} /> Instant automated OCR scanning
                  </li>
                  <li>
                    <Check size={14} /> Bank passbook or UPI for payouts
                  </li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="onboarding-step-card">
                <div className="step-card-num-row">
                  <span className="step-big-num">03</span>
                  <span className="step-time-badge">READY!</span>
                </div>
                <div className="step-card-icon-box">
                  <Zap size={22} />
                </div>
                <h3 className="step-card-title">Get Approved & Drive</h3>
                <p className="step-card-desc">
                  Receive your partner badge within 24 hours. Switch online, receive nearby ride requests, and start earning instantly.
                </p>
                <ul className="step-card-checklist">
                  <li>
                    <Check size={14} /> ₹500 First Week Welcome Bonus
                  </li>
                  <li>
                    <Check size={14} /> Free safety kit & phone mount
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Capsule */}
            <div className="onboarding-bottom-cta">
              <div className="onboarding-cta-copy">
                <h3>Ready to take the driver seat?</h3>
                <p>Sign up now. Your documents are verified rapidly so you can start making money today.</p>
              </div>
              <button
                type="button"
                className="onboarding-cta-btn"
                onClick={onJoinClick}
                id="onboarding-become-driver-btn"
              >
                <span>Become a GoRush driver</span>
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </section>

        {/* SAFETY SECTION - 100% HANDCRAFTED NATIVE WEB */}
        <section className="safety-redesign-wrap" id="safety">
          <div className="safety-inner-container">
            <div className="safety-header-row">
              <div className="safety-header-left">
                <div className="safety-eyebrow-pill">
                  <ShieldCheck size={13} />
                  <span>Uncompromised Protection</span>
                </div>
                <h2 className="safety-headline">
                  Confidence is part of <em>every single ride.</em>
                </h2>
                <p className="safety-subline">
                  We treat driver safety with the highest priority. From live GPS tracking to emergency response teams, we’ve got your back on every road.
                </p>
              </div>
              <div className="safety-status-badge">
                <span className="safety-status-dot" />
                <span>24/7 GoRush Safety Operations Active</span>
              </div>
            </div>

            <div className="safety-cards-grid">
              {/* Feature 1 */}
              <div className="safety-feature-card">
                <div>
                  <div className="safety-card-icon-wrap">
                    <Navigation size={24} />
                  </div>
                  <h3 className="safety-card-title">Live Trip Telemetry & GPS</h3>
                  <p className="safety-card-desc">
                    Every journey is monitored in real-time. Share your live location with loved ones automatically whenever you switch online.
                  </p>
                </div>
                <div className="safety-card-tag">
                  <BadgeCheck size={13} />
                  <span>Real-time Geo-Tracking</span>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="safety-feature-card">
                <div>
                  <div className="safety-card-icon-wrap">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="safety-card-title">Instant SOS & Rapid Response</h3>
                  <p className="safety-card-desc">
                    One-touch emergency button alerts our safety dispatch center and nearest law enforcement with precision GPS coordinates.
                  </p>
                </div>
                <div className="safety-card-tag">
                  <Zap size={13} />
                  <span>&lt; 3 Min Dispatch Protocol</span>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="safety-feature-card">
                <div>
                  <div className="safety-card-icon-wrap">
                    <Headphones size={24} />
                  </div>
                  <h3 className="safety-card-title">24/7 Dedicated Driver Desk</h3>
                  <p className="safety-card-desc">
                    Speak directly to human support specialists anytime. Whether you encounter a route dispute or vehicle breakdown, we assist immediately.
                  </p>
                </div>
                <div className="safety-card-tag">
                  <Clock3 size={13} />
                  <span>Zero Waiting Support</span>
                </div>
              </div>
            </div>

            {/* Bottom Safety Strip */}
            <div className="safety-bottom-strip">
              <div className="safety-strip-copy">
                <div className="safety-shield-icon">
                  <ShieldCheck size={22} />
                </div>
                <div className="safety-strip-text">
                  <strong>₹5,00,000 Accidental & Medical Shield</strong>
                  <span>Automatic coverage for every verified driver partner from trip start to trip end.</span>
                </div>
              </div>
              <button
                type="button"
                className="safety-strip-cta"
                onClick={onJoinClick}
                id="safety-drive-confidence-btn"
              >
                <span>Drive with confidence</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* QUOTE / TESTIMONIAL REDESIGNED */}
        <section className="quote-redesign-wrap" id="stories">
          {/* Soft Decorative Corner Leaves */}
          <svg className="quote-leaf-top-left" viewBox="0 0 100 100" fill="none">
            <path
              d="M15,85 Q35,30 85,15 Q65,65 15,85 Z M40,45 Q75,40 85,15"
              stroke="#558026"
              strokeWidth="2"
              fill="rgba(110, 160, 50, 0.12)"
            />
          </svg>
          <svg className="quote-leaf-bottom-left" viewBox="0 0 120 120" fill="none">
            <path
              d="M15,100 Q40,40 100,15 Q75,75 15,100 Z M45,55 Q85,50 100,15"
              stroke="#558026"
              strokeWidth="2"
              fill="rgba(110, 160, 50, 0.14)"
            />
          </svg>
          <svg className="quote-leaf-bottom-right" viewBox="0 0 120 120" fill="none">
            <path
              d="M15,100 Q40,40 100,15 Q75,75 15,100 Z M45,55 Q85,50 100,15"
              stroke="#558026"
              strokeWidth="2"
              fill="rgba(110, 160, 50, 0.14)"
            />
          </svg>

          {/* Top-Center Label */}
          <div className="quote-section-label">
            <span className="quote-label-line" />
            REAL STORIES. REAL IMPACT
            <span className="quote-label-line" />
          </div>

          {/* Cursive Handwritten Quotes */}
          <div className="quote-script-left">
            People
            <br />
            Like You
            <br />
            <em>Make It Real</em>
          </div>

          <div className="quote-script-right">
            Same
            <br />
            Journeys
            <br />
            Bigger
            <br />
            <em>Stories</em>
          </div>

          {/* Top-Right Tracked Text Stamp */}
          <div className="quote-badge-top-right">
            <span>MORE</span>
            <span>PEOPLE</span>
            <span>BRIGHTER</span>
            <span>TOMORROWS</span>
          </div>

          {/* Bottom-Left Brand Stamp */}
          <div className="quote-stamp-bottom-left">
            <div className="quote-heart-badge">
              <Heart size={13} />
            </div>
            <span>DRIVE</span>
            <span>EARN</span>
            <span>GROW</span>
            <div className="quote-stamp-line" />
          </div>

          {/* Main Stage: Carousel with Left / Right Arrows */}
          <div className="quote-stage-container">
            <button
              type="button"
              className="quote-nav-btn prev"
              onClick={prevQuote}
              aria-label="Previous story"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="quote-main-card">
              <div className="quote-bubble-mark">“</div>
              <blockquote className="quote-statement">
                <span className="quote-brand-accent">GoRush</span>
                {driverQuotes[activeQuoteIdx].text}
              </blockquote>

              <div className="quote-author-row">
                <div
                  className="quote-author-avatar"
                  style={{ background: driverQuotes[activeQuoteIdx].avatarBg }}
                >
                  {driverQuotes[activeQuoteIdx].initials}
                </div>
                <div className="quote-author-meta">
                  <strong>{driverQuotes[activeQuoteIdx].name}</strong>
                  <span>{driverQuotes[activeQuoteIdx].role}</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="quote-nav-btn next"
              onClick={nextQuote}
              aria-label="Next story"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="quote-dots-nav">
            {driverQuotes.map((q, idx) => (
              <button
                key={q.name}
                type="button"
                className={`quote-dot-pill ${activeQuoteIdx === idx ? 'active' : ''}`}
                onClick={() => setActiveQuoteIdx(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </section>

        {/* FINAL CALL TO ACTION - 100% HANDCRAFTED NATIVE WEB */}
        <section className="final-cta-banner-section" id="join">
          <div className="final-cta-container">
            <div className="final-cta-card">
              <div className="final-cta-inner">
                <div className="final-cta-badge">
                  <Sparkles size={13} />
                  <span>Join the Mobility Revolution</span>
                </div>
                <h2 className="final-cta-headline">
                  Your next chapter <em>starts here.</em>
                </h2>
                <p className="final-cta-desc">
                  Earn on your own terms, receive instant payouts, and enjoy maximum respect. Register now and join thousands of empowered driver partners.
                </p>
                <div className="final-cta-actions">
                  <button
                    type="button"
                    className="final-cta-primary-btn"
                    onClick={onJoinClick}
                    id="final-cta-become-driver-btn"
                  >
                    <span>Become a GoRush driver</span>
                    <ArrowRight size={17} />
                  </button>
                  <Link
                    to="/why-gorush"
                    className="final-cta-secondary-link"
                    id="final-cta-why-link"
                  >
                    <span>Why GoRush?</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
                <div className="final-cta-trust-bar">
                  <div className="trust-item">
                    <Check size={15} />
                    <span>Instant Daily Payouts</span>
                  </div>
                  <div className="trust-item">
                    <Check size={15} />
                    <span>Accidental Cover Included</span>
                  </div>
                  <div className="trust-item">
                    <Check size={15} />
                    <span>0% Joining Fees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
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
