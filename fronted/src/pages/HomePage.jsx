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
import '../human-mobility-redesign.css';
import '../motion-experience.css';

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

const fleetData = {
  auto: {
    name: 'Indore Auto',
    icon: '🛺',
    dailyEst: '₹1,350 - ₹1,800',
    monthlyEst: '₹38,500',
    rides: '14 - 18 rides/day',
    pingRoute: 'Vijay Nagar Sq ➔ Palasia Point (5.4 km)',
    pingFare: '₹140',
    demand: '🔥 High (Station & Bhanwarkua)',
  },
  bike: {
    name: 'Bike Taxi',
    icon: '🛵',
    dailyEst: '₹800 - ₹1,150',
    monthlyEst: '₹24,500',
    rides: '12 - 16 rides/day',
    pingRoute: 'Holkar Science ➔ Chappan Dukan (3.8 km)',
    pingFare: '₹65',
    demand: '⚡ High Surge (Student Hubs)',
  },
  cab: {
    name: 'Cab / Sedan',
    icon: '🚗',
    dailyEst: '₹2,200 - ₹3,100',
    monthlyEst: '₹62,000',
    rides: '8 - 12 trips/day',
    pingRoute: 'Indore Airport ➔ Super Corridor TCS (12 km)',
    pingFare: '₹380',
    demand: '✈️ High (Airport & Pithampur)',
  },
  parcel: {
    name: 'Parcel Delivery',
    icon: '📦',
    dailyEst: '₹950 - ₹1,400',
    monthlyEst: '₹29,000',
    rides: '15 - 20 drops/day',
    pingRoute: 'Rajwada Market ➔ Rau Bypass (9.2 km)',
    pingFare: '₹175',
    demand: '📦 Retail (Siyaganj & Cloth Market)',
  },
};

const vehicleFarePerTrip = {
  auto: 105,
  bike: 65,
  cab: 285,
  parcel: 85,
};

const indoreLiveDispatches = [
  {
    icon: '🛺',
    vehicle: 'Indore Auto',
    pickup: 'Bhanwarkua Square',
    drop: 'Regal Circle / High Court',
    dist: '4.8 km · 14 mins',
    fare: '₹125',
    tag: '⚡ Instant Dispatch',
  },
  {
    icon: '🛵',
    vehicle: 'Bike Taxi',
    pickup: 'Chappan Dukan Street',
    drop: 'Bombay Hospital Square',
    dist: '3.6 km · 9 mins',
    fare: '₹65',
    tag: '🔥 High Student Area',
  },
  {
    icon: '🚗',
    vehicle: 'Sedan Cab',
    pickup: 'Indore Airport Terminal 1',
    drop: 'Super Corridor TCS Campus',
    dist: '11.4 km · 21 mins',
    fare: '₹370',
    tag: '✈️ Airport Priority',
  },
  {
    icon: '📦',
    vehicle: 'Parcel Express',
    pickup: 'Siyaganj Market',
    drop: 'Annapurna Mandir Road',
    dist: '5.2 km · 16 mins',
    fare: '₹145',
    tag: '📦 Merchant Dispatch',
  },
];

const indoreCaptains = [
  {
    name: 'Mukesh Rathore',
    vehicle: 'Indore Auto Captain',
    plate: 'MP 09 TA 3842',
    hub: 'Bhanwarkua Hub',
    dailyAvg: '₹1,580/day',
    rating: '4.96 ★',
    trips: '2,840+ Rides',
    quote: 'Dusri apps 25-30% commission kaat leti thi. GoRush par zero commission hai, daily ₹450-₹500 zyada bachte hain jo seedha mere baccho ki school fees mein jaate hain. PhonePe par instant settlement sabse bada sahara hai.',
  },
  {
    name: 'Sandeep Patidar',
    vehicle: 'Bike Taxi Captain',
    plate: 'MP 09 VQ 9120',
    hub: 'Vijay Nagar Hub',
    dailyAvg: '₹920/day',
    rating: '4.92 ★',
    trips: '1,950+ Rides',
    quote: 'College ke baad 4-5 ghante bike taxi chalata hu. Daily ₹800-₹1,000 ban jate hain aur koi zabardasti ki shifts nahi hain. Vijay Nagar aur Chappan Dukan par demand hamesha rehti hai.',
  },
  {
    name: 'Devendra Singh',
    vehicle: 'Sedan Cab Captain',
    plate: 'MP 09 CX 1184',
    hub: 'Airport & Super Corridor',
    dailyAvg: '₹2,650/day',
    rating: '4.98 ★',
    trips: '3,410+ Rides',
    quote: 'Airport aur Pithampur corporate trips par poora customer fare mujhe milta hai. GoRush ka Indore local helpline hamesha responsive rehta hai, koi remote call center ka jhanjhat nahi.',
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
    const duration = 3500;
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
  const [selectedVehicle, setSelectedVehicle] = useState('auto');
  const [phoneInput, setPhoneInput] = useState('');
  const [submittedOtp, setSubmittedOtp] = useState(false);
  const [activeQuoteIdx, setActiveQuoteIdx] = useState(0);
  const nextQuote = () => setActiveQuoteIdx((prev) => (prev + 1) % indoreCaptains.length);
  const prevQuote = () => setActiveQuoteIdx((prev) => (prev - 1 + indoreCaptains.length) % indoreCaptains.length);

  const [earningsPeriod, setEarningsPeriod] = useState('this-week');
  const [periodDropdownOpen, setPeriodDropdownOpen] = useState(false);
  const activeEarnings = earningsData[earningsPeriod] || earningsData['this-week'];

  const [tripsPerDay, setTripsPerDay] = useState(14);
  const [activeDispatchIdx, setActiveDispatchIdx] = useState(0);

  useEffect(() => {
    const dispatchTimer = setInterval(() => {
      setActiveDispatchIdx((prev) => (prev + 1) % indoreLiveDispatches.length);
    }, 3800);
    return () => clearInterval(dispatchTimer);
  }, []);

  const currentFareRate = vehicleFarePerTrip[selectedVehicle] || 105;
  const computedDailyIncome = tripsPerDay * currentFareRate;
  const computedMonthlyIncome = computedDailyIncome * 26;
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
        {/* LIVE NETWORK TICKER */}
        <div className="motion-ticker-bar">
          <div className="motion-ticker-inner">
            <div className="motion-ticker-item">
              <span className="ticker-dot" />
              <span>Indore Network: <strong>482 Captains Online</strong></span>
            </div>
            <div className="motion-ticker-item">
              <span>Vijay Nagar Surge: <span className="ticker-surge">1.2x Active</span></span>
            </div>
            <div className="motion-ticker-item">
              <span>Live Booking: <strong>{indoreLiveDispatches[activeDispatchIdx].pickup} ➔ {indoreLiveDispatches[activeDispatchIdx].drop}</strong></span>
            </div>
            <div className="motion-ticker-item">
              <span>Zero Commission: <strong style={{ color: '#d4ef62' }}>100% Fare to Driver</strong></span>
            </div>
          </div>
        </div>

        {/* REAL HUMAN MOBILITY HERO SECTION */}
        <section className="real-hero-section">
          <div className="real-hero-container">
            {/* Left Column: Authentic Brand Pitch */}
            <div className="real-hero-left">
              <div className="real-hero-badge">
                <span className="live-green-dot" />
                <span>Indore's 0% Commission Captain Platform</span>
              </div>

              <h1 className="real-hero-title">
                Apni Gaadi, Poori Kamai.<br />
                <span className="accent-highlight">Zero Commission</span> Every Single Day.
              </h1>

              <p className="real-hero-sub">
                Join 10,000+ Indore Auto, Cab, Bike & Parcel captains earning up to ₹38,000/month. No platform cuts, instant daily UPI settlements to PhonePe/GPay, and ₹5,00,000 free family accidental insurance.
              </p>

              <div className="real-hero-ctas">
                <button
                  type="button"
                  className="real-hero-primary-btn"
                  onClick={onJoinClick}
                  id="hero-join-indore-fleet-btn"
                >
                  <span>Join Indore Fleet Today</span>
                  <ArrowRight size={18} />
                </button>
                <a href="#comparison" className="real-hero-secondary-btn">
                  <span>GoRush vs Ola/Uber</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="real-hero-guarantees">
                <div className="real-guarantee-item">
                  <div className="real-guarantee-icon"><IndianRupee size={16} /></div>
                  <div className="real-guarantee-text">
                    <strong>0% Platform Commission</strong>
                    <span>Customer fare is 100% yours</span>
                  </div>
                </div>
                <div className="real-guarantee-item">
                  <div className="real-guarantee-icon"><Zap size={16} /></div>
                  <div className="real-guarantee-text">
                    <strong>Instant UPI Payouts</strong>
                    <span>Direct deposit after every trip</span>
                  </div>
                </div>
                <div className="real-guarantee-item">
                  <div className="real-guarantee-icon"><ShieldCheck size={16} /></div>
                  <div className="real-guarantee-text">
                    <strong>₹5,00,000 Free Cover</strong>
                    <span>Accidental & medical shield</span>
                  </div>
                </div>
                <div className="real-guarantee-item">
                  <div className="real-guarantee-icon"><MapPin size={16} /></div>
                  <div className="real-guarantee-text">
                    <strong>3 Physical Indore Hubs</strong>
                    <span>Vijay Nagar & Bhanwarkua desks</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Real Onboarding & Earnings Simulator Widget */}
            <div className="real-hero-card">
              <div className="real-card-header">
                <div className="real-card-header-left">
                  <strong>Captain Earnings Simulator</strong>
                  <span>Select vehicle & trips to calculate real take-home</span>
                </div>
                <div className="real-card-live-chip">
                  <span className="dot" />
                  <span>482 Online</span>
                </div>
              </div>

              {/* Vehicle Tabs */}
              <div className="real-vehicle-tabs">
                {(['auto', 'bike', 'cab', 'parcel']).map((vehKey) => (
                  <button
                    key={vehKey}
                    type="button"
                    className={`real-veh-tab ${selectedVehicle === vehKey ? 'active' : ''}`}
                    onClick={() => setSelectedVehicle(vehKey)}
                  >
                    <span className="tab-icon">{fleetData[vehKey].icon}</span>
                    <strong>{fleetData[vehKey].name.split(' ')[0]}</strong>
                    <span>{fleetData[vehKey].name.split(' ')[1] || 'Fleet'}</span>
                  </button>
                ))}
              </div>

              {/* Interactive Daily Trips Slider */}
              <div className="motion-slider-wrap">
                <div className="motion-slider-header">
                  <span>Daily Trips:</span>
                  <strong>{tripsPerDay} Trips (~{Math.round(tripsPerDay * 0.6)} hrs/day)</strong>
                </div>
                <input
                  type="range"
                  min="4"
                  max="24"
                  step="1"
                  value={tripsPerDay}
                  onChange={(e) => setTripsPerDay(Number(e.target.value))}
                  className="motion-range-input"
                  aria-label="Trips per day slider"
                />
              </div>

              {/* Real Earnings Estimate Box */}
              <div className="real-sim-box">
                <div className="real-sim-row">
                  <span className="real-sim-label">Est. Monthly Take-Home (26 Days)</span>
                  <div className="real-sim-amount">
                    ₹{computedMonthlyIncome.toLocaleString('en-IN')} <small>/ mo</small>
                  </div>
                </div>
                <div className="real-sim-perks">
                  <span>Daily Avg: <strong>₹{computedDailyIncome.toLocaleString('en-IN')}/day</strong></span>
                  <span>Demand: <strong>{fleetData[selectedVehicle].demand}</strong></span>
                </div>
              </div>

              {/* Live Ride Ping Preview */}
              <div className="real-live-ride-ping">
                <div className="real-ping-icon">
                  <Navigation size={16} />
                </div>
                <div className="real-ping-text">
                  <strong>{fleetData[selectedVehicle].pingRoute}</strong>
                  <span>Live Booking Ping · 0% Commission Cut</span>
                  <div className="motion-ping-timer-bar">
                    <div className="motion-ping-timer-fill" />
                  </div>
                </div>
                <div className="real-ping-fare">
                  <strong>{fleetData[selectedVehicle].pingFare}</strong>
                  <small>100% IN HAND</small>
                </div>
              </div>

              {/* Quick Mobile Onboarding */}
              <form
                className="real-onboard-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (phoneInput.length >= 10) {
                    setSubmittedOtp(true);
                    setTimeout(() => {
                      if (onJoinClick) onJoinClick();
                      setSubmittedOtp(false);
                    }, 1200);
                  } else {
                    if (onJoinClick) onJoinClick();
                  }
                }}
                style={{ marginTop: '14px' }}
              >
                <div className="real-input-group">
                  <div className="real-input-prefix">
                    <span>🇮🇳</span> +91
                  </div>
                  <input
                    type="tel"
                    className="real-input-field"
                    placeholder="Enter 10-digit mobile number"
                    maxLength={10}
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value.replace(/\D/g, ''))}
                  />
                </div>
                <button type="submit" className="real-submit-btn">
                  {submittedOtp ? (
                    <span>OTP Sent! Opening Registration...</span>
                  ) : (
                    <>
                      <span>Start Driving with GoRush</span>
                      <ArrowRight size={17} />
                    </>
                  )}
                </button>
              </form>

              <div className="real-card-foot-trust">
                <span><Check size={13} color="#46a11f" /> Instant Approval</span>
                <span><Check size={13} color="#46a11f" /> No Hidden Fees</span>
                <span><Check size={13} color="#46a11f" /> Indore Verified</span>
              </div>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="stats-strip">
          {stats.map(([number, label]) => (
            <AnimatedStat key={label} text={number} label={label} />
          ))}
        </section>

        {/* GROUND-LEVEL COMPARISON: GORUSH VS OLA/UBER */}
        <section className="real-comparison-section" id="comparison">
          <div className="real-comparison-inner">
            <div className="real-section-header">
              <div className="real-section-eyebrow">
                <Banknote size={14} />
                <span>The Honest Indore Comparison</span>
              </div>
              <h2 className="real-section-title">
                Why 10,000+ Indore Captains Switched to GoRush
              </h2>
              <p className="real-section-desc">
                Traditional aggregator apps take up to 30% of every ride. Here is what your hard work actually brings home on GoRush vs others.
              </p>
            </div>

            <div className="real-compare-grid">
              {/* Card 1: Traditional Aggregators */}
              <div className="real-compare-card others">
                <span className="real-compare-card-badge">Traditional Apps (Ola / Uber)</span>
                <h3 className="real-compare-title">25% - 30% Commission Cut</h3>
                <p className="real-compare-subtitle">You drive in Indore heat, but a big slice of every customer payment is deducted before you see a single rupee.</p>
                <ul className="real-compare-list">
                  <li>
                    <X size={18} className="real-compare-icon-cross" />
                    <span><strong>High Commission Deduction:</strong> ₹300–₹500 cut every day from your earnings.</span>
                  </li>
                  <li>
                    <X size={18} className="real-compare-icon-cross" />
                    <span><strong>Delayed Weekly Payouts:</strong> Forced to wait until Tuesday/Wednesday for your own cash.</span>
                  </li>
                  <li>
                    <X size={18} className="real-compare-icon-cross" />
                    <span><strong>Trip Rejection Penalties:</strong> Blocked or penalized for declining unprofitable long pickups.</span>
                  </li>
                  <li>
                    <X size={18} className="real-compare-icon-cross" />
                    <span><strong>No Local Support Hub:</strong> Call centers with automated bots, zero local Indore offices.</span>
                  </li>
                </ul>
                <div className="real-compare-bottom-stat">
                  <span className="real-compare-stat-label">Lost in Commission Every Month</span>
                  <strong className="real-compare-stat-val">-₹12,500/mo</strong>
                </div>
              </div>

              {/* Card 2: GoRush */}
              <div className="real-compare-card gorush">
                <span className="real-compare-card-badge">The GoRush Standard</span>
                <h3 className="real-compare-title">100% Fare Goes into Your Pocket</h3>
                <p className="real-compare-subtitle">Zero commission model. Just a nominal ₹15 daily platform access pass. Everything the passenger pays is 100% yours.</p>
                <ul className="real-compare-list">
                  <li>
                    <Check size={18} className="real-compare-icon-check" />
                    <span><strong>0% Commission Cut:</strong> If the fare is ₹150, you take home the full ₹150 in cash or UPI.</span>
                  </li>
                  <li>
                    <Check size={18} className="real-compare-icon-check" />
                    <span><strong>Instant Daily UPI Settlement:</strong> 1-tap transfer directly into your PhonePe, GPay, or Paytm anytime.</span>
                  </li>
                  <li>
                    <Check size={18} className="real-compare-icon-check" />
                    <span><strong>Complete Captain Freedom:</strong> Set your preferred drop route (e.g. Return Home to Rau or Palasia).</span>
                  </li>
                  <li>
                    <Check size={18} className="real-compare-icon-check" />
                    <span><strong>3 Physical Indore Desks:</strong> Walk-in captain centers at Vijay Nagar & Bhanwarkua with live helpline.</span>
                  </li>
                </ul>
                <div className="real-compare-bottom-stat">
                  <span className="real-compare-stat-label">Extra Money You Save with GoRush</span>
                  <strong className="real-compare-stat-val">+₹13,200/mo</strong>
                </div>
              </div>
            </div>
          </div>
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

        {/* LIVE FLEET TELEMETRY & SETTLEMENT ENGINE - 100% HANDCRAFTED NATIVE MOTION */}
        <section className="earnings-redesign-wrap" id="earnings" style={{ padding: '60px 0 80px', background: '#09130d' }}>
          <div className="motion-telemetry-stage">
            <div className="motion-grid-backdrop" />

            {/* Top Telemetry Header */}
            <div className="motion-telemetry-topbar">
              <div className="motion-telemetry-title-col">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                  <span className="motion-telemetry-badge-live">
                    <span className="ticker-dot" /> LIVE INDORE TELEMETRY
                  </span>
                  <span style={{ fontSize: '12px', color: '#d4ef62', fontWeight: 750 }}>
                    0% Platform Commission Protocol · MP-09
                  </span>
                </div>
                <h3>Transparent Fares. Zero Deductions. Every Mile.</h3>
                <p>Live GPS ride routing and instant settlement ledger directly from the GoRush Indore dispatch network.</p>
              </div>
              <div>
                <button
                  type="button"
                  className="real-hero-primary-btn"
                  onClick={() => setFormOpen(true)}
                  style={{ padding: '10px 20px', fontSize: '13px' }}
                >
                  <span>Start Earning Now</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Two Column Layout: Left Animated Route Vector, Right Interactive Statement */}
            <div className="motion-telemetry-layout">
              {/* Left Column: Live GPS Route Canvas */}
              <div className="motion-route-canvas-box">
                <div className="motion-canvas-label">
                  <span>GPS RADAR · INDORE ZONE 01</span>
                  <strong>{indoreLiveDispatches[activeDispatchIdx].dist}</strong>
                </div>

                <div className="motion-gps-vector-stage">
                  {/* Waypoint Pills */}
                  <div className="motion-waypoint-pill start">
                    <span className="pulse-indicator" />
                    <span>{indoreLiveDispatches[activeDispatchIdx].pickup}</span>
                  </div>

                  <div className="motion-waypoint-pill mid">
                    <span>Palasia Sq Hub</span>
                  </div>

                  <div className="motion-waypoint-pill end">
                    <span className="pulse-indicator" />
                    <span>{indoreLiveDispatches[activeDispatchIdx].drop}</span>
                  </div>

                  {/* SVG Route Geometry */}
                  <svg className="motion-gps-svg" viewBox="0 0 500 220" preserveAspectRatio="none">
                    {/* Background faint path */}
                    <path
                      d="M 50,45 Q 180,110 260,65 T 450,185"
                      className="motion-route-path-bg"
                    />
                    {/* Neon Glow Outer */}
                    <path
                      d="M 50,45 Q 180,110 260,65 T 450,185"
                      className="motion-route-path-glow"
                    />
                    {/* Animated Flowing Dashes */}
                    <path
                      d="M 50,45 Q 180,110 260,65 T 450,185"
                      className="motion-route-path-flow"
                    />
                  </svg>

                  {/* Traveling Vehicle Marker */}
                  <div className="motion-vehicle-pulse-dot" title="Live Captain Vehicle">
                    {indoreLiveDispatches[activeDispatchIdx].icon}
                  </div>
                </div>

                {/* Live Dispatch Ping Toast with auto-rotation */}
                <div className="motion-live-dispatch-toast">
                  <div className="motion-toast-left">
                    <div className="motion-toast-icon">
                      <Navigation size={16} />
                    </div>
                    <div className="motion-toast-text">
                      <strong>{indoreLiveDispatches[activeDispatchIdx].vehicle}: {indoreLiveDispatches[activeDispatchIdx].tag}</strong>
                      <span>{indoreLiveDispatches[activeDispatchIdx].pickup} ➔ {indoreLiveDispatches[activeDispatchIdx].drop}</span>
                    </div>
                  </div>
                  <div className="motion-toast-fare">
                    <strong>{indoreLiveDispatches[activeDispatchIdx].fare}</strong>
                    <span>100% TO DRIVER</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Driver Statement */}
              <div className="motion-statement-card">
                <div className="motion-statement-top">
                  <strong>Captain Settlement Ledger</strong>
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

                <div style={{ fontSize: '11.5px', color: '#667d6c', marginBottom: '4px' }}>
                  {activeEarnings.month} · {activeEarnings.subPeriod}
                </div>

                <div className="motion-statement-amount">
                  ₹{activeEarnings.amount}
                  <small style={{ fontSize: '20px', color: '#7b9181' }}>{activeEarnings.decimal}</small>
                </div>

                <div className="motion-statement-growth">
                  <TrendingUp size={14} />
                  <span>{activeEarnings.growth}</span>
                </div>

                {/* Animated Interactive Bar Chart */}
                <div className="motion-bars-grid">
                  {activeEarnings.bars.map((bar, idx) => (
                    <div key={`${bar.day}-${idx}`} className="motion-bar-col">
                      <div className="motion-bar-track">
                        <div
                          className="motion-bar-active-fill"
                          style={{ height: `${bar.height}%` }}
                          title={`${bar.day}: ${bar.amount}`}
                        />
                      </div>
                      <span className="motion-bar-day">{bar.day}</span>
                    </div>
                  ))}
                </div>

                <div className="motion-statement-foot">
                  <div>
                    <span style={{ display: 'block', fontSize: '11px', color: '#7a8e7e' }}>0% Commission Deduction</span>
                    <strong style={{ color: '#25741b' }}>₹0 Platform Cut</strong>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ display: 'block', fontSize: '11px', color: '#7a8e7e' }}>Net Transferred to UPI</span>
                    <strong style={{ fontSize: '20px', color: '#122417' }}>{activeEarnings.net}</strong>
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

        {/* REAL INDORE CAPTAIN VOICES & STORIES */}
        <section className="real-captains-section" id="stories">
          <div className="real-section-header">
            <div className="real-section-eyebrow">
              <Star size={14} />
              <span>Verified Indore Captains</span>
            </div>
            <h2 className="real-section-title">
              Real Drivers. Real Earnings. Real Indore Stories.
            </h2>
            <p className="real-section-desc">
              Listen to the captains moving Indore every day. No paid actors—just honest numbers and real experiences.
            </p>
          </div>

          <div className="real-captains-grid">
            {indoreCaptains.map((capt) => (
              <div key={capt.name} className="real-captain-card">
                <div>
                  <div className="real-captain-top">
                    <div className="real-captain-photo">
                      {capt.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="real-captain-meta">
                      <strong>{capt.name}</strong>
                      <span>{capt.vehicle} · {capt.hub}</span>
                      <span className="real-captain-plate">{capt.plate}</span>
                    </div>
                  </div>
                  <p className="real-captain-quote">"{capt.quote}"</p>
                </div>
                <div className="real-captain-stats">
                  <div className="real-captain-stat-item">
                    <span>Daily Avg</span>
                    <strong>{capt.dailyAvg}</strong>
                  </div>
                  <div className="real-captain-stat-item" style={{ textAlign: 'center' }}>
                    <span>Rating</span>
                    <strong style={{ color: '#d97706' }}>{capt.rating}</strong>
                  </div>
                  <div className="real-captain-stat-item" style={{ textAlign: 'right' }}>
                    <span>Experience</span>
                    <strong>{capt.trips}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PHYSICAL INDORE CAPTAIN HUBS & HELPDESK */}
        <section className="real-hubs-section" id="hubs">
          <div className="real-hubs-inner">
            <div className="real-hubs-header">
              <div className="real-hubs-title-box">
                <h2>Visit Our Physical Indore Driver Centers</h2>
                <p>Need offline help with document verification, FASTag, or insurance? Walk into any GoRush center.</p>
              </div>
              <div className="real-hubs-helpline">
                <div className="real-helpline-icon">
                  <Headphones size={20} />
                </div>
                <div className="real-helpline-copy">
                  <small>24/7 Indore Local Captain Desk</small>
                  <a href="tel:9755125038" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <strong>+91 97551 25038</strong>
                  </a>
                </div>
              </div>
            </div>

            <div className="real-hubs-grid">
              <div className="real-hub-card">
                <div className="real-hub-location-name">📍 Vijay Nagar Captain Center</div>
                <div className="real-hub-address">
                  Plot 14, Near Orbit Mall Road, Scheme 54, Vijay Nagar, Indore - 452010
                </div>
                <div className="real-hub-facilities">
                  <span className="real-hub-tag">Free Chai Station</span>
                  <span className="real-hub-tag">Instant Verification Desk</span>
                  <span className="real-hub-tag">Phone Mount Fitting</span>
                </div>
              </div>

              <div className="real-hub-card">
                <div className="real-hub-location-name">📍 Bhanwarkua Fleet Hub</div>
                <div className="real-hub-address">
                  Bholaram Ustad Marg, Opposite Tower Square, Bhanwarkua, Indore - 452001
                </div>
                <div className="real-hub-facilities">
                  <span className="real-hub-tag">Auto & Bike Onboarding</span>
                  <span className="real-hub-tag">Emergency Fastag Replacement</span>
                  <span className="real-hub-tag">Driver Rest Lounge</span>
                </div>
              </div>

              <div className="real-hub-card">
                <div className="real-hub-location-name">📍 Indore Railway Station Desk</div>
                <div className="real-hub-address">
                  Station Road, Chhoti Gwaltoli, Near Platform 1 Exit, Indore - 452007
                </div>
                <div className="real-hub-facilities">
                  <span className="real-hub-tag">24/7 Night Helpdesk</span>
                  <span className="real-hub-tag">Station Queue Assistance</span>
                  <span className="real-hub-tag">SOS Squad Dispatch</span>
                </div>
              </div>
            </div>
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

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', margin: '32px 0 36px', textAlign: 'left' }}>
                  <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '18px 20px' }}>
                    <div style={{ color: '#d4ef62', marginBottom: '8px' }}><IndianRupee size={22} /></div>
                    <strong style={{ display: 'block', fontSize: '15px', color: '#fff', marginBottom: '4px' }}>0% Surge Commission</strong>
                    <span style={{ fontSize: '12.5px', color: '#9db4a0', lineHeight: 1.4 }}>Keep 100% of peak hour customer surge</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '18px 20px' }}>
                    <div style={{ color: '#d4ef62', marginBottom: '8px' }}><Zap size={22} /></div>
                    <strong style={{ display: 'block', fontSize: '15px', color: '#fff', marginBottom: '4px' }}>Instant UPI Transfers</strong>
                    <span style={{ fontSize: '12.5px', color: '#9db4a0', lineHeight: 1.4 }}>Settlements deposited after every single shift</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '18px 20px' }}>
                    <div style={{ color: '#d4ef62', marginBottom: '8px' }}><ShieldCheck size={22} /></div>
                    <strong style={{ display: 'block', fontSize: '15px', color: '#fff', marginBottom: '4px' }}>₹5 Lakh Road Cover</strong>
                    <span style={{ fontSize: '12.5px', color: '#9db4a0', lineHeight: 1.4 }}>Free comprehensive accident protection</span>
                  </div>
                </div>

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
