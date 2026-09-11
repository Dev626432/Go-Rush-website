import React, { useState } from 'react';
import {
  ArrowRight,
  BadgePercent,
  Banknote,
  BarChart3,
  Bike,
  Calculator,
  Calendar,
  CarFront,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  Coins,
  Flame,
  Fuel,
  Gift,
  Heart,
  IndianRupee,
  MapPin,
  Navigation,
  Percent,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet,
  Zap,
} from 'lucide-react';
import './pages.css';
import '../earnings-hero-redesign.css';
import '../calc-showcase-redesign.css';
import '../incentives-showcase-redesign.css';

const cityMultipliers = {
  Indore: 1.0,
  Mumbai: 1.35,
  Pune: 1.2,
  Bengaluru: 1.3,
  Bhopal: 0.95,
  'Delhi NCR': 1.25,
};

const vehicleRates = {
  bike: { label: 'Bike / Scooter', baseHourly: 140, fuelPct: 0.22, icon: Bike },
  auto: { label: 'Auto Rickshaw', baseHourly: 210, fuelPct: 0.28, icon: Navigation },
  cab: { label: 'Cab / Sedan', baseHourly: 340, fuelPct: 0.32, icon: CarFront },
};

export default function EarningsPage({ onJoinClick }) {
  const [city, setCity] = useState('Indore');
  const [vehicle, setVehicle] = useState('bike');
  const [hoursPerDay, setHoursPerDay] = useState(7);
  const [daysPerWeek, setDaysPerWeek] = useState(6);

  // Calculations
  const cityFactor = cityMultipliers[city] || 1.0;
  const currentVehicle = vehicleRates[vehicle];
  const hourlyGross = currentVehicle.baseHourly * cityFactor;
  const dailyGross = Math.round(hourlyGross * hoursPerDay);
  const weeklyGross = Math.round(dailyGross * daysPerWeek);
  const monthlyGross = Math.round(weeklyGross * 4.3);

  const platformFee = Math.round(monthlyGross * 0.1);
  const estimatedFuel = Math.round(monthlyGross * currentVehicle.fuelPct);
  const netMonthly = monthlyGross - platformFee - estimatedFuel;
  const netDaily = Math.round(netMonthly / (daysPerWeek * 4.3));

  return (
    <div className="subpage-wrap">
      {/* Earnings Hero Section - Exact Match to ChatGPT Showcase: https://chatgpt.com/s/m_6aa3900293188191aba452864ff1c1e8 */}
      <section className="earnings-hero-redesign-wrap">
        {/* Top Mini Brand Bar */}
        <div className="earnings-top-brand-bar">
          <div className="earnings-top-logo">
            <span>Go</span><span className="logo-accent">Rush</span>
          </div>
          <div className="earnings-top-divider" />
          <div className="earnings-top-tagline">
            <span>DRIVE • EARN • GROW</span>
          </div>
        </div>

        <div className="earnings-hero-main-container">
          {/* Left Content Column */}
          <div className="earnings-hero-left-content">
            <div className="earnings-eyebrow-badge">
              <BarChart3 size={13} />
              <span>TRANSPARENT INCOME & PAYOUTS</span>
            </div>

            <h1 className="earnings-display-headline">
              <span className="earnings-headline-line">Earn with complete</span>
              <span className="earnings-headline-line">clarity.</span>
              <span className="earnings-script-wrap">
                <em className="earnings-headline-script">Paid every single day.</em>
                <svg className="earnings-swoosh-svg" viewBox="0 0 280 14" fill="none">
                  <path d="M 8 8 Q 140 14 270 5" stroke="#729837" strokeWidth="2.8" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="earnings-lead-desc">
              No hidden fees, no opaque algorithms. Estimate your take-home pay based on your vehicle,
              preferred city, and weekly working hours.
            </p>

            <div className="earnings-feature-cards-row">
              <div className="earnings-stat-card-pill">
                <div className="earnings-stat-icon-box">%</div>
                <div className="earnings-stat-text">
                  <strong>10% Flat commission</strong>
                  <span>No hidden charges</span>
                </div>
              </div>

              <div className="earnings-stat-card-pill">
                <div className="earnings-stat-icon-box">⚡</div>
                <div className="earnings-stat-text">
                  <strong>100% Peak surge to driver</strong>
                  <span>You keep what you earn</span>
                </div>
              </div>

              <div className="earnings-stat-card-pill">
                <div className="earnings-stat-icon-box">💳</div>
                <div className="earnings-stat-text">
                  <strong>Daily 11:30 PM UPI payout</strong>
                  <span>Direct to your bank</span>
                </div>
              </div>
            </div>

            <div className="earnings-bottom-ticker">
              <span className="earnings-ticker-line" />
              <div className="earnings-ticker-badge">
                <ShieldCheck size={13} />
                <span>FAIR • TRANSPARENT • DRIVER FIRST</span>
              </div>
              <span className="earnings-ticker-line" />
            </div>
          </div>

          {/* Right Visual Column (Phone Mockup, City Skyline, Road & Badges) */}
          <div className="earnings-hero-right-visual" aria-hidden="true">
            <img
              src="/earnings-hero-artwork.webp"
              alt="GoRush Earnings Phone UI and Real-time Estimates"
              className="earnings-showcase-img"
            />
          </div>
        </div>

        {/* Bottom-Left Foliage Leaf Accent */}
        <img
          src="/earnings-hero-leaves.webp"
          alt=""
          className="earnings-hero-leaves-corner"
          aria-hidden="true"
        />
      </section>

      {/* Interactive Calculator Section - Exact Match to ChatGPT Showcase: https://chatgpt.com/s/m_6aa391692c948191b0510016ec9d98a3 */}
      <section className="calc-showcase-section-wrap">
        <div className="calc-showcase-inner-container">
          {/* Left Decorative Handwritten Doodle */}
          <div className="calc-doodle-annotation calc-doodle-left">
            <svg viewBox="0 0 50 40" fill="none" className="calc-doodle-arrow" aria-hidden="true">
              <path d="M 6 34 C 18 10 32 8 44 14" stroke="#1a331e" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M 36 8 L 45 14 L 40 24" stroke="#1a331e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="calc-doodle-text">
              Flexible<br />Work.<br />Higher<br />Earnings.
            </div>
          </div>

          {/* Top-Right Decorative Handwritten Doodle */}
          <div className="calc-doodle-annotation calc-doodle-topright">
            <div className="calc-doodle-text">
              Your Time.<br />Real Earnings.
            </div>
            <svg viewBox="0 0 140 12" fill="none" className="calc-doodle-underline" aria-hidden="true">
              <path d="M 4 8 Q 70 2 136 7" stroke="#729837" strokeWidth="2.8" strokeLinecap="round" />
            </svg>
          </div>

          {/* Bottom-Right Decorative Handwritten Doodle */}
          <div className="calc-doodle-annotation calc-doodle-bottomright">
            <svg viewBox="0 0 50 40" fill="none" className="calc-doodle-arrow" aria-hidden="true">
              <path d="M 44 32 C 34 14 20 10 8 16" stroke="#1a331e" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M 16 8 L 7 16 L 14 25" stroke="#1a331e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="calc-doodle-text">
              Drive<br />Earn<br />Grow<br />Together
            </div>
          </div>

          {/* Floating 'Same City. More Opportunities.' Sticker */}
          <div className="calc-floating-sticker-wrap">
            <img
              src="/calc-sticker-content.webp"
              alt="Same City. More Opportunities."
              className="calc-floating-sticker-img"
            />
          </div>

          {/* Behind-Card Foliage Leaves */}
          <div className="calc-floating-leaves-wrap" aria-hidden="true">
            <img src="/earnings-hero-leaves.webp" alt="" />
          </div>

          {/* Main Dual-Tone Split Card */}
          <div className="calc-dual-container">
            {/* Left Column: Interactive Inputs */}
            <div className="calc-left-column">
              {/* Header */}
              <div className="calc-left-header">
                <div className="calc-left-kicker-row">
                  <span className="calc-kicker-pill" />
                  <h2 className="calc-left-title">Plan Your Earnings</h2>
                </div>
                <p className="calc-left-subtitle">
                  Select your city, vehicle and working hours to see your estimated take-home pay.
                </p>
              </div>

              {/* Group 1: Operating City */}
              <div className="calc-control-group">
                <div className="calc-control-header">
                  <div className="calc-control-info">
                    <div className="calc-control-icon-box">
                      <MapPin size={20} />
                    </div>
                    <div className="calc-control-titles">
                      <span className="calc-control-label">Operating City</span>
                      <span className="calc-control-sublabel">Choose where you drive</span>
                    </div>
                  </div>
                  <div className="calc-control-badge">
                    <span>{city}</span>
                    <ChevronDown size={14} />
                  </div>
                </div>

                <div className="calc-pills-row">
                  {Object.keys(cityMultipliers).map((c) => (
                    <button
                      key={c}
                      type="button"
                      className={`calc-pill-btn ${city === c ? 'active' : ''}`}
                      onClick={() => setCity(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Group 2: Vehicle Category */}
              <div className="calc-control-group">
                <div className="calc-control-header">
                  <div className="calc-control-info">
                    <div className="calc-control-icon-box">
                      <Bike size={20} />
                    </div>
                    <div className="calc-control-titles">
                      <span className="calc-control-label">Vehicle Category</span>
                      <span className="calc-control-sublabel">Select your vehicle type</span>
                    </div>
                  </div>
                  <div className="calc-control-badge">
                    <span>{currentVehicle.label}</span>
                    <ChevronDown size={14} />
                  </div>
                </div>

                <div className="calc-pills-row">
                  {Object.entries(vehicleRates).map(([key, item]) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={key}
                        type="button"
                        className={`calc-pill-btn ${vehicle === key ? 'active' : ''}`}
                        onClick={() => setVehicle(key)}
                      >
                        <Icon size={16} />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Group 3: Hours driven per day */}
              <div className="calc-control-group">
                <div className="calc-control-header">
                  <div className="calc-control-info">
                    <div className="calc-control-icon-box">
                      <Clock3 size={20} />
                    </div>
                    <div className="calc-control-titles">
                      <span className="calc-control-label">Hours driven per day</span>
                      <span className="calc-control-sublabel">Adjust your daily driving hours</span>
                    </div>
                  </div>
                  <div className="calc-control-badge">
                    <span>{hoursPerDay} hours / day</span>
                  </div>
                </div>

                <div className="calc-slider-box">
                  {/* Floating tooltip above thumb */}
                  <div
                    className="calc-slider-tooltip"
                    style={{ left: `${Math.round(((hoursPerDay - 2) / (12 - 2)) * 100)}%` }}
                  >
                    {hoursPerDay}h
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="12"
                    step="1"
                    value={hoursPerDay}
                    onChange={(e) => setHoursPerDay(Number(e.target.value))}
                    className="calc-range-input"
                    style={{
                      background: `linear-gradient(to right, #417c33 0%, #417c33 ${Math.round(
                        ((hoursPerDay - 2) / (12 - 2)) * 100
                      )}%, #e5ede2 ${Math.round(
                        ((hoursPerDay - 2) / (12 - 2)) * 100
                      )}%, #e5ede2 100%)`,
                    }}
                  />
                  <div className="calc-ticks-scale">
                    {[2, 4, 6, 8, 10, 12].map((num) => (
                      <span key={num} className="calc-tick-num">
                        {num}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Group 4: Days driven per week */}
              <div className="calc-control-group">
                <div className="calc-control-header">
                  <div className="calc-control-info">
                    <div className="calc-control-icon-box">
                      <Calendar size={20} />
                    </div>
                    <div className="calc-control-titles">
                      <span className="calc-control-label">Days driven per week</span>
                      <span className="calc-control-sublabel">Choose how many days you drive</span>
                    </div>
                  </div>
                  <div className="calc-control-badge">
                    <span>{daysPerWeek} days / week</span>
                  </div>
                </div>

                <div className="calc-slider-box">
                  {/* Floating tooltip above thumb */}
                  <div
                    className="calc-slider-tooltip"
                    style={{ left: `${Math.round(((daysPerWeek - 1) / (7 - 1)) * 100)}%` }}
                  >
                    {daysPerWeek}d
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="7"
                    step="1"
                    value={daysPerWeek}
                    onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                    className="calc-range-input"
                    style={{
                      background: `linear-gradient(to right, #417c33 0%, #417c33 ${Math.round(
                        ((daysPerWeek - 1) / (7 - 1)) * 100
                      )}%, #e5ede2 ${Math.round(
                        ((daysPerWeek - 1) / (7 - 1)) * 100
                      )}%, #e5ede2 100%)`,
                    }}
                  />
                  <div className="calc-ticks-scale">
                    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                      <span key={num} className="calc-tick-num">
                        {num}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dark Forest Green Projected Earnings */}
            <div className="calc-right-column">
              {/* Road & Car Skyline Artwork in Top-Right Corner */}
              <div className="calc-road-art-wrap">
                <img
                  src="/calc-road-art.webp"
                  alt=""
                  className="calc-road-art-img"
                  aria-hidden="true"
                />
              </div>

              <div className="calc-right-inner-content">
                <div>
                  <span className="calc-right-kicker">YOUR ESTIMATED TAKE-HOME PAY</span>
                  <div className="calc-hero-number-row">
                    <span className="calc-hero-rupee">₹</span>
                    <span className="calc-hero-val">{netMonthly.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="calc-hero-period">per month</div>

                  {/* Glassmorphic Estimate Notice Box */}
                  <div className="calc-estimate-glass-card">
                    <div className="calc-glass-icon-box">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="12" width="4" height="9" rx="1.5" fill="#d4ef62" />
                        <rect x="10" y="7" width="4" height="14" rx="1.5" fill="#d4ef62" />
                        <rect x="17" y="3" width="4" height="18" rx="1.5" fill="#d4ef62" />
                      </svg>
                    </div>
                    <div className="calc-glass-text-box">
                      <span className="calc-glass-bold-title">
                        This is an estimate based on your inputs.
                      </span>
                      <span className="calc-glass-sub-title">
                        Actual earnings may vary by demand, time and location.
                      </span>
                    </div>
                  </div>

                  {/* Breakdown rows with icons and matching colors */}
                  <div className="calc-breakdown-table">
                    <div className="calc-breakdown-row">
                      <div className="calc-breakdown-label-col">
                        <TrendingUp size={16} className="calc-breakdown-icon" />
                        <span>Average Daily Net</span>
                      </div>
                      <span className="calc-breakdown-val-col white">
                        ₹{netDaily.toLocaleString('en-IN')} / day
                      </span>
                    </div>

                    <div className="calc-breakdown-row">
                      <div className="calc-breakdown-label-col">
                        <Coins size={16} className="calc-breakdown-icon" />
                        <span>Gross Monthly Revenue</span>
                      </div>
                      <span className="calc-breakdown-val-col white">
                        ₹{monthlyGross.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="calc-breakdown-row">
                      <div className="calc-breakdown-label-col">
                        <Percent size={15} className="calc-breakdown-icon" />
                        <span>GoRush Platform Fee (10%)</span>
                      </div>
                      <span className="calc-breakdown-val-col lime">
                        - ₹{platformFee.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="calc-breakdown-row">
                      <div className="calc-breakdown-label-col">
                        <Fuel size={16} className="calc-breakdown-icon" />
                        <span>Est. Fuel & Running Cost (~{Math.round(currentVehicle.fuelPct * 100)}%)</span>
                      </div>
                      <span className="calc-breakdown-val-col coral">
                        - ₹{estimatedFuel.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <button type="button" className="calc-start-earning-btn" onClick={onJoinClick}>
                    <span>Start earning with GoRush</span>
                    <ArrowRight size={18} />
                  </button>

                  <div className="calc-guarantee-line">
                    <ShieldCheck size={14} color="#84cc16" />
                    <span>100% Transparent</span>
                    <span>|</span>
                    <span>No Hidden Fees</span>
                    <span>|</span>
                    <span>Driver First</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Transparent Fare Anatomy */}
      <section className="subpage-section alt-bg">
        <div className="subpage-container">
          <div className="subpage-section-header">
            <span className="section-tag">ANATOMY OF A FARE</span>
            <h2>
              Where does your <em>money go?</em>
            </h2>
            <p>Every rupee paid by a passenger is clearly accounted for. Here is a typical ₹300 ride breakdown.</p>
          </div>

          <div
            style={{
              maxWidth: '820px',
              margin: '0 auto',
              background: '#ffffff',
              borderRadius: '24px',
              padding: '36px clamp(24px, 5vw, 44px)',
              border: '1px solid rgba(20, 37, 27, 0.08)',
              boxShadow: '0 10px 30px rgba(20, 37, 27, 0.04)',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div
                style={{
                  padding: '24px',
                  borderRadius: '16px',
                  background: '#f1f7e7',
                  border: '1px solid rgba(112, 147, 58, 0.25)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'DM Mono',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: '#4f7526',
                    textTransform: 'uppercase',
                  }}
                >
                  YOU KEEP (90%)
                </span>
                <h3
                  style={{
                    fontFamily: 'Playfair Display',
                    fontSize: '32px',
                    margin: '10px 0 6px',
                    color: '#14251b',
                    fontWeight: 700,
                  }}
                >
                  ₹270.00
                </h3>
                <p style={{ fontSize: '12.5px', color: '#5b715e', margin: 0, lineHeight: 1.5 }}>
                  Base fare, distance rate, waiting time, and 100% of any passenger tips.
                </p>
              </div>

              <div
                style={{
                  padding: '24px',
                  borderRadius: '16px',
                  background: '#fafaf7',
                  border: '1px solid rgba(20, 37, 27, 0.08)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'DM Mono',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: '#718374',
                    textTransform: 'uppercase',
                  }}
                >
                  PLATFORM FEE (10%)
                </span>
                <h3
                  style={{
                    fontFamily: 'Playfair Display',
                    fontSize: '32px',
                    margin: '10px 0 6px',
                    color: '#556c59',
                    fontWeight: 700,
                  }}
                >
                  ₹30.00
                </h3>
                <p style={{ fontSize: '12.5px', color: '#687e6b', margin: 0, lineHeight: 1.5 }}>
                  Covers servers, 24/7 safety dispatch team, insurance coverage, and app updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Boosters & Surge - Exact Match to ChatGPT Showcase: https://chatgpt.com/s/m_6aa3c003318c819181cb06bb14d40ca0 */}
      <section className="incentives-showcase-section-wrap">
        <div className="incentives-scenery-left" aria-hidden="true">
          <img src="/incentives-scenery-left.webp" alt="" />
        </div>
        <div className="incentives-scenery-right" aria-hidden="true">
          <img src="/incentives-scenery-right.webp" alt="" />
        </div>

        <div className="incentives-inner-container">
          <div className="incentives-eyebrow-pill">
            <Gift size={13} />
            <span>INCENTIVE PROGRAM</span>
          </div>

          <h2 className="incentives-headline">
            Boost your daily
            <span className="incentives-script-wrap">
              <em className="incentives-headline-script">income</em>
              <svg className="incentives-swoosh-svg" viewBox="0 0 170 12" fill="none" aria-hidden="true">
                <path d="M 6 7 Q 85 12 164 4" stroke="#5a8a30" strokeWidth="2.8" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          <p className="incentives-subtitle">
            In addition to regular fares, unlock performance bonuses and peak surge rewards.
          </p>

          <div className="incentives-cards-grid">
            <div className="incentives-card">
              <div className="incentives-card-top-row">
                <div className="incentives-card-icon-box">
                  <Flame size={22} />
                </div>
                <span className="incentives-card-badge">2.0x</span>
              </div>
              <h3 className="incentives-card-title">100% Peak Hour Surge</h3>
              <p className="incentives-card-desc">
                During rain, festivals, or peak traffic hours, fares increase by 1.2x to 2.0x. GoRush passes 100% of the
                surge multiplier directly to the driver.
              </p>
              <div className="incentives-card-bottom-row">
                <TrendingUp size={14} />
                <span>HIGHER EARNINGS</span>
                <span className="incentives-card-dash" />
              </div>
            </div>

            <div className="incentives-card">
              <div className="incentives-card-top-row">
                <div className="incentives-card-icon-box">
                  <BarChart3 size={22} />
                </div>
                <span className="incentives-card-badge">₹550</span>
              </div>
              <h3 className="incentives-card-title">Daily Milestone Streaks</h3>
              <p className="incentives-card-desc">
                Complete 8 rides in a day and earn an extra ₹250 cash bonus. Complete 14 rides and unlock ₹550 in instant
                streak rewards.
              </p>
              <div className="incentives-card-bottom-row">
                <Gift size={14} />
                <span>RIDE MORE, EARN MORE</span>
                <span className="incentives-card-dash" />
              </div>
            </div>

            <div className="incentives-card">
              <div className="incentives-card-top-row">
                <div className="incentives-card-icon-box">
                  <Wallet size={22} />
                </div>
                <span className="incentives-card-badge">100%</span>
              </div>
              <h3 className="incentives-card-title">Zero Tip Deductions</h3>
              <p className="incentives-card-desc">
                When grateful riders add a tip for great service or safe driving, 100% of the tip goes to you with
                zero platform commission.
              </p>
              <div className="incentives-card-bottom-row">
                <Heart size={14} />
                <span>YOUR EFFORT, YOUR REWARD</span>
                <span className="incentives-card-dash" />
              </div>
            </div>
          </div>

          <div className="incentives-bottom-ticker">
            <span className="incentives-ticker-line" />
            <span>DRIVE • EARN • GROW</span>
            <span className="incentives-ticker-line" />
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section
        style={{
          padding: '80px 24px',
          background: '#14251b',
          color: '#ffffff',
          textAlign: 'center',
        }}
      >
        <div className="subpage-container">
          <h2
            style={{
              fontSize: 'clamp(32px, 4.5vw, 54px)',
              fontWeight: 800,
              margin: '0 0 16px',
              letterSpacing: '-0.03em',
            }}
          >
            Start putting more money in your pocket.
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: '#9db4a0',
              maxWidth: '520px',
              margin: '0 auto 30px',
              lineHeight: 1.65,
            }}
          >
            Join the driver community that believes in fair pay and daily settlements.
          </p>
          <button
            type="button"
            className="final-cta-action-btn"
            style={{ background: '#d4ef62', color: '#122417' }}
            onClick={onJoinClick}
          >
            <span>Become a GoRush driver</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
