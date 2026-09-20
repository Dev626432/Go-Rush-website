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

        {/* FEATURES SECTION (MATCHING CHATGPT DESIGN) */}
        <section className="scenic-hero-section" id="features">
          <div className="scenic-hero-container">
            {/* Left Content Column */}
            <div className="scenic-hero-content">
              <div className="scenic-kicker">
                <span>THE GORUSH DIFFERENCE</span>
                <span className="scenic-kicker-line" />
              </div>
              
              <h2 className="scenic-title">
                Built around the person
                <span className="scenic-script">behind the wheel.</span>
              </h2>
              
              <p className="scenic-desc">
                You bring the drive. We bring the tools, trust and technology to make every working day feel more like yours.
              </p>

              {/* 3 Chips */}
              <div className="scenic-chips-row">
                <div className="scenic-chip">
                  <div className="scenic-chip-icon">
                    <Navigation size={18} />
                  </div>
                  <div className="scenic-chip-text">
                    <strong>Drive Smarter</strong>
                    <span>Live GPS & optimized routes</span>
                  </div>
                </div>

                <div className="scenic-chip">
                  <div className="scenic-chip-icon">
                    <ShieldCheck size={18} />
                  </div>
                  <div className="scenic-chip-text">
                    <strong>Feel Safer</strong>
                    <span>24/7 support & emergency help</span>
                  </div>
                </div>

                <div className="scenic-chip">
                  <div className="scenic-chip-icon">
                    <BarChart3 size={18} />
                  </div>
                  <div className="scenic-chip-text">
                    <strong>Earn More</strong>
                    <span>Transparent earnings & instant payouts</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="scenic-actions-row">
                <button className="btn-get-started" onClick={() => action('Get Started clicked')}>
                  Get Started <ArrowRight size={16} />
                </button>
                <button className="btn-watch-video" onClick={() => action('Watch Video clicked')}>
                  <div className="play-circle">
                    <Play size={18} fill="currentColor" />
                  </div>
                  <div className="watch-text">
                    <strong>See How It Works</strong>
                    <span>2 min video</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Visuals Column */}
            <div className="scenic-hero-visuals">
              <div className="highway-sign-widget">
                <span>More Miles</span>
                <span>More Freedom</span>
              </div>
              <div className="cleaner-cities-pill">
                <div className="cleaner-icon-circle">
                  <Leaf size={16} />
                </div>
                <div className="cleaner-text">
                  <strong>Cleaner Cities</strong>
                  <span>Brighter Tomorrows</span>
                </div>
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

        {/* HOW IT WORKS / ONBOARDING - NEW CHATGPT REDESIGN */}
        <section className="new-onboarding-section" id="how-it-works">
          {/* Top Navigation */}
          <div className="new-onboarding-nav">
            <div className="new-onboarding-logo">
              <Sparkles size={16} color="#3C5935" />
              <span>THE ROAD IS YOURS</span>
            </div>
            <div className="new-onboarding-links">
              <span>DRIVE • EARN • GROW • TOGETHER</span>
            </div>
          </div>

          {/* Main Layout */}
          <div className="new-onboarding-main">
            
            {/* Left Column (Pills & Note) */}
            <div className="new-onboarding-left">
              <div className="new-floating-pill">
                <div className="new-floating-icon"><Wallet size={18} /></div>
                <div className="new-floating-text"><strong>Flexible</strong><br />Earnings</div>
              </div>
              <div className="new-floating-pill">
                <div className="new-floating-icon"><Clock3 size={18} /></div>
                <div className="new-floating-text"><strong>Be Your</strong><br />Own Boss</div>
              </div>
              <div className="new-floating-pill">
                <div className="new-floating-icon"><Users size={18} /></div>
                <div className="new-floating-text"><strong>A Growing</strong><br />Community</div>
              </div>
              <div className="new-handwritten-note">
                More Journeys<br />Brighter Tomorrows
                <svg className="new-handwritten-swoosh" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,2" stroke="#5A8545" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            {/* Center Column (Hero Content) */}
            <div className="new-onboarding-center">
              <div className="new-hero-badge">
                <Zap size={14} />
                <span>JOIN A BETTER TOMORROW</span>
              </div>
              <h2 className="new-hero-headline">
                <div className="new-headline-dark">Your next chapter</div>
                <div className="new-headline-green">
                  starts here.
                  <svg className="new-headline-underline" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,10 100,5" stroke="#5A8545" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
              </h2>
              <p className="new-hero-subtext">
                Join thousands of drivers building a better way to work, one ride at a time.
              </p>
              <button type="button" className="new-hero-cta" onClick={onJoinClick}>
                <span>Become a GoRush driver</span>
                <span className="new-hero-cta-arrow">
                  <ArrowRight size={17} />
                </span>
              </button>
              <div className="new-hero-eta">
                <Clock3 size={14} />
                <span>Registration takes less than 5 minutes</span>
              </div>
            </div>

            {/* Right Column (Visual Mockup) - HERE IS THE CORRECTED IMAGE! */}
            <div className="new-onboarding-right" aria-hidden="true">
              <div className="new-visual-box">
                <img src="/driver-hero-new.png" alt="App Interface" className="new-visual-image" />
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

        {/* FINAL CALL TO ACTION */}
        <section className="final-cta-redesign-wrap" id="join">
          {/* Top Bar: Left Kicker & Right Tagline */}
          <div className="final-cta-topbar">
            <div className="final-cta-top-kicker">
              <Sparkles size={13} className="final-cta-kicker-icon" />
              <span>THE ROAD IS YOURS</span>
            </div>
            <div className="final-cta-top-tagline">
              <span>DRIVE</span>
              <span className="dot">•</span>
              <span>EARN</span>
              <span className="dot">•</span>
              <span>GROW</span>
              <span className="dot">•</span>
              <span>TOGETHER</span>
            </div>
          </div>

          {/* Main 3-Column Layout */}
          <div className="final-cta-main-layout">
            {/* Left Feature Badges Stack */}
            <div className="final-cta-left-stack">
              <div className="final-cta-feature-pill">
                <div className="final-cta-feat-icon-box">
                  <Wallet size={16} />
                </div>
                <div className="final-cta-feat-text">
                  <strong>Flexible</strong>
                  <span>Earnings</span>
                </div>
              </div>

              <div className="final-cta-feature-pill">
                <div className="final-cta-feat-icon-box">
                  <Clock3 size={16} />
                </div>
                <div className="final-cta-feat-text">
                  <strong>Be Your</strong>
                  <span>Own Boss</span>
                </div>
              </div>

              <div className="final-cta-feature-pill">
                <div className="final-cta-feat-icon-box">
                  <Users size={16} />
                </div>
                <div className="final-cta-feat-text">
                  <strong>A Growing</strong>
                  <span>Community</span>
                </div>
              </div>

              <div className="final-cta-script-quote">
                <span>More Journeys</span>
                <span>Brighter Tomorrows</span>
                <svg className="final-cta-script-curve" viewBox="0 0 140 10" fill="none">
                  <path d="M 5 6 Q 70 11 135 4" stroke="#688e36" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Center Hero Copy, Pill & CTA */}
            <div className="final-cta-center-content">
              <div className="final-cta-badge-pill">
                <Zap size={13} />
                <span>JOIN A BETTER TOMORROW</span>
              </div>

              <h2 className="final-cta-headline">
                <span className="final-cta-headline-main">Your next chapter</span>
                <span className="final-cta-headline-script-wrap">
                  <em className="final-cta-headline-accent">starts here.</em>
                  <svg className="final-cta-swoosh" viewBox="0 0 240 14" fill="none">
                    <path d="M 10 7 Q 120 13 230 5" stroke="#7ca836" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>

              <p className="final-cta-desc">
                Join thousands of drivers building a better way to work, one ride at a time.
              </p>

              <button
                type="button"
                className="final-cta-action-btn"
                onClick={onJoinClick}
              >
                <span>Become a GoRush driver</span>
                <ArrowRight size={16} className="final-cta-btn-arrow" />
              </button>

              <div className="final-cta-subnote">
                <Clock3 size={13} className="final-cta-subnote-icon" />
                <span>Registration takes less than 5 minutes</span>
              </div>
            </div>

            {/* Right Side Visual Hero (Driver, Car, Phone & City) */}
            <div className="final-cta-driver-showcase" aria-hidden="true">
              <img
                src="/driver-hero-new.png"
                alt="Drive with GoRush Today"
                className="final-cta-driver-img"
              />
            </div>
          </div>

          {/* Bottom-Left Leaf Accent */}
          <img
            src="/final-cta-leaves-clean.webp"
            alt=""
            className="final-cta-leaves-corner"
            aria-hidden="true"
          />

          {/* Bottom Center Ticker */}
          <div className="final-cta-bottom-ticker">
            <span className="ticker-line" />
            <span className="ticker-text">PEOPLE MOVE</span>
            <span className="ticker-car">🚖</span>
            <span className="ticker-text">OPPORTUNITIES GROW</span>
            <span className="ticker-line" />
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
