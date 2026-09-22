import React, { useState, useEffect } from 'react';
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
  Leaf,
  MapPin,
  Navigation,
  Percent,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';
import './pages.css';
import '../earnings-hero-redesign.css';
import '../calc-showcase-redesign.css';
import '../incentives-showcase-redesign.css';
import '../fare-anatomy-redesign.css';
import '../subpage-cta-redesign.css';

const cityMultipliers = {
  Indore: 1.0,
  Mumbai: 1.35,
  Pune: 1.2,
  Bengaluru: 1.3,
  Bhopal: 0.95,
  'Delhi NCR': 1.25,
};

const vehicleRates = {
  bike: { label: 'Bike / Scooter', baseFare: 92.5, fuelPct: 0.22, icon: Bike },
  auto: { label: 'Auto Rickshaw', baseFare: 145, fuelPct: 0.26, icon: Navigation },
  cab: { label: 'Cab / Sedan', baseFare: 265, fuelPct: 0.28, icon: CarFront },
};

function computeLocalEarnings(cityName, vehicleKey, hours, days) {
  const veh = vehicleRates[vehicleKey] || vehicleRates.bike;
  const mult = cityMultipliers[cityName] || 1;
  const ridesPerHour = 1.5;
  const totalRidesPerDay = hours * ridesPerHour;
  const fare = veh.baseFare * mult;
  const dailyGross = totalRidesPerDay * fare;
  const daysPerMonth = days * 4.33;
  const monthlyGross = Math.round(dailyGross * daysPerMonth);
  const platformFee = Math.round(monthlyGross * 0.10);
  const estimatedFuelCost = Math.round(monthlyGross * veh.fuelPct);
  const monthlyNet = monthlyGross - platformFee - estimatedFuelCost;
  const dailyNet = Math.round(monthlyNet / daysPerMonth);

  return {
    dailyNet,
    monthlyNet,
    monthlyGross,
    platformFee,
    estimatedFuelCost,
  };
}

export default function EarningsPage({ onJoinClick }) {
  const [city, setCity] = useState('Indore');
  const [vehicle, setVehicle] = useState('bike');
  const [hoursPerDay, setHoursPerDay] = useState(7);
  const [daysPerWeek, setDaysPerWeek] = useState(6);
  
  const [earnings, setEarnings] = useState(() => computeLocalEarnings('Indore', 'bike', 7, 6));
  const [isCalculating, setIsCalculating] = useState(false);
  const currentVehicle = vehicleRates[vehicle] || vehicleRates.bike;

  useEffect(() => {
    // Immediately calculate dynamic local numbers so values are never 0 or NaN
    setEarnings(computeLocalEarnings(city, vehicle, hoursPerDay, daysPerWeek));

    const fetchCalculations = async () => {
      try {
        const response = await api.calculateEarnings({
          city,
          vehicleType: currentVehicle.label,
          hoursPerDay,
          daysPerWeek,
          platformFeePercentage: 10,
        });

        if (response && response.success && response.data && response.data.estimations) {
          setEarnings(response.data.estimations);
        }
      } catch (err) {
        // Fallback already active with computeLocalEarnings
      }
    };

    const timeoutId = setTimeout(fetchCalculations, 500);
    return () => clearTimeout(timeoutId);
  }, [city, vehicle, hoursPerDay, daysPerWeek]);

  return (
    <div className="subpage-wrap">
      {/* Earnings Hero Section - 100% Handcrafted Web Component */}
      <section className="earnings-banner-section" id="earnings-hero">
        <div className="earnings-hero-inner">
          <div className="earnings-header-badge">
            <Sparkles size={13} />
            <span>TRANSPARENT EARNINGS GUARANTEE</span>
          </div>
          <h1 className="earnings-header-title">
            Earn with complete clarity. <em>Paid every single day.</em>
          </h1>
          <p className="earnings-header-subtitle">
            Flat 10% platform commission, zero hidden vehicle deductions, and instantaneous UPI payouts after every shift.
          </p>

          <div className="earnings-highlights-grid">
            <div className="earnings-highlight-card">
              <div>
                <div className="earnings-card-top-stat">
                  <span className="earnings-stat-big">10%</span>
                  <div className="earnings-stat-icon-wrap">
                    <Percent size={22} />
                  </div>
                </div>
                <h3 className="earnings-card-title">Flat Commission</h3>
                <p className="earnings-card-desc">
                  Keep 90% of every passenger rupee. Traditional apps cut up to 30% plus extra hidden fees.
                </p>
              </div>
            </div>

            <div className="earnings-highlight-card">
              <div>
                <div className="earnings-card-top-stat">
                  <span className="earnings-stat-big">DAILY</span>
                  <div className="earnings-stat-icon-wrap">
                    <Wallet size={22} />
                  </div>
                </div>
                <h3 className="earnings-card-title">Instant Settlements</h3>
                <p className="earnings-card-desc">
                  Your money is credited straight to your UPI or bank account automatically by midnight.
                </p>
              </div>
            </div>

            <div className="earnings-highlight-card">
              <div>
                <div className="earnings-card-top-stat">
                  <span className="earnings-stat-big">100%</span>
                  <div className="earnings-stat-icon-wrap">
                    <Gift size={22} />
                  </div>
                </div>
                <h3 className="earnings-card-title">Tip Retention</h3>
                <p className="earnings-card-desc">
                  Every single rupee tipped by happy passengers goes directly into your pocket with 0% platform take.
                </p>
              </div>
            </div>
          </div>

          <div className="earnings-hero-bottom-strip">
            <div className="earnings-strip-left">
              <div className="earnings-strip-icon">
                <ShieldCheck size={22} />
              </div>
              <div className="earnings-strip-text">
                <strong>Transparent Pay Slip & Live Route Tracker</strong>
                <span>Know what you earn mile by mile with zero surprise deductions.</span>
              </div>
            </div>
            <button
              type="button"
              className="earnings-hero-primary-btn"
              onClick={onJoinClick}
              id="earnings-start-driving-btn"
            >
              <span>Start Driving Today</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Calculator Section - Redesigned Background */}
      <section className="calc-showcase-section-wrap" id="earnings-calculator">
        {/* Ambient Decorative Background Glows */}
        <div className="calc-bg-glow-orb calc-bg-glow-left" aria-hidden="true" />
        <div className="calc-bg-glow-orb calc-bg-glow-right" aria-hidden="true" />
        <div className="calc-bg-contour-pattern" aria-hidden="true" />

        <div className="calc-showcase-inner-container">
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
                    <span className="calc-hero-val">
                      {isCalculating ? '...' : (earnings.monthlyNet || 0).toLocaleString('en-IN')}
                    </span>
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
                        ₹{isCalculating ? '...' : (earnings.dailyNet || 0).toLocaleString('en-IN')} / day
                      </span>
                    </div>

                    <div className="calc-breakdown-row">
                      <div className="calc-breakdown-label-col">
                        <Coins size={16} className="calc-breakdown-icon" />
                        <span>Gross Monthly Revenue</span>
                      </div>
                      <span className="calc-breakdown-val-col white">
                        ₹{isCalculating ? '...' : (earnings.monthlyGross || 0).toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="calc-breakdown-row">
                      <div className="calc-breakdown-label-col">
                        <Percent size={15} className="calc-breakdown-icon" />
                        <span>GoRush Platform Fee (10%)</span>
                      </div>
                      <span className="calc-breakdown-val-col lime">
                        - ₹{isCalculating ? '...' : (earnings.platformFee || 0).toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="calc-breakdown-row">
                      <div className="calc-breakdown-label-col">
                        <Fuel size={16} className="calc-breakdown-icon" />
                        <span>Est. Fuel & Running Cost (~{Math.round(currentVehicle.fuelPct * 100)}%)</span>
                      </div>
                      <span className="calc-breakdown-val-col coral">
                        - ₹{isCalculating ? '...' : (earnings.estimatedFuelCost || 0).toLocaleString('en-IN')}
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

      {/* Transparent Fare Anatomy - 100% Handcrafted Web Component */}
      <section className="anatomy-showcase-section" id="fare-anatomy">
        <div className="anatomy-inner-container">
          <div className="anatomy-header-center">
            <div className="anatomy-eyebrow-badge">
              <Banknote size={13} />
              <span>WHERE DOES YOUR MONEY GO?</span>
            </div>
            <h2 className="anatomy-main-title">
              Anatomy of a <em>GoRush fare.</em>
            </h2>
            <p className="anatomy-main-subtitle">
              We take the guesswork out of commissions. Here is exactly how a typical ₹300 trip fare is split.
            </p>
          </div>

          <div className="anatomy-split-card">
            {/* Driver Col */}
            <div className="anatomy-driver-col">
              <div>
                <div className="anatomy-driver-badge">
                  <Sparkles size={13} />
                  <span>YOU KEEP 90%</span>
                </div>
                <div className="anatomy-driver-pct">90%</div>
                <div className="anatomy-driver-amount">₹270.00 from a ₹300 Fare</div>
                <p className="anatomy-driver-desc">
                  Credited directly to your daily bank account or collected directly in cash. No platform withholding or retroactive penalty deductions.
                </p>
              </div>
              <ul className="anatomy-driver-points">
                <li>
                  <Check size={16} /> 0% surprise platform commission
                </li>
                <li>
                  <Check size={16} /> Instant UPI settlement every single day
                </li>
                <li>
                  <Check size={16} /> 100% of tips kept with zero deduction
                </li>
              </ul>
            </div>

            {/* Platform Col */}
            <div className="anatomy-platform-col">
              <div className="anatomy-platform-box">
                <div className="anatomy-platform-header">
                  <div className="anatomy-platform-pct">10%</div>
                  <div className="anatomy-platform-amount">₹30.00</div>
                </div>
                <h3 className="anatomy-platform-title">Platform Operating Fee</h3>
                <p className="anatomy-platform-desc">
                  Covers AWS servers, high-precision GPS maps, 24/7 human safety marshals, and customer marketing to keep ride demand high.
                </p>
              </div>

              <div className="anatomy-tips-box">
                <div className="anatomy-tips-icon">
                  <Gift size={20} />
                </div>
                <div className="anatomy-tips-text">
                  <strong>100% Rider Tips Kept Directly</strong>
                  <p>When passengers tip for great service, 100% passes straight to you with zero platform fee.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Boosters & Surge - 100% Handcrafted Web Component */}
      <section className="incentives-showcase-section" id="incentives-program">
        <div className="incentives-inner-container">
          <div className="incentives-header-center">
            <div className="incentives-eyebrow-badge">
              <Zap size={13} />
              <span>BOOST YOUR DAILY INCOME</span>
            </div>
            <h2 className="incentives-main-title">
              GoRush incentive & <em>surge program.</em>
            </h2>
            <p className="incentives-main-subtitle">
              Extra reward multipliers that reward consistency, peak-hour availability, and 5-star customer ratings.
            </p>
          </div>

          <div className="incentives-cards-grid">
            {/* Booster 1 */}
            <div className="incentive-feature-card" onClick={onJoinClick}>
              <div>
                <div className="incentive-card-top-row">
                  <div className="incentive-card-icon-box">
                    <Zap size={24} />
                  </div>
                  <span className="incentive-card-rate-badge">UP TO 2.0x</span>
                </div>
                <h3 className="incentive-card-title">100% Surge Pass-Through</h3>
                <p className="incentive-card-desc">
                  During peak rush hours and rain showers, fares automatically surge. You receive the full multiplier without app fee skimming.
                </p>
              </div>
              <button type="button" className="incentive-card-action-btn">
                <span>Earn More in Peak Hours</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Booster 2 */}
            <div className="incentive-feature-card" onClick={onJoinClick}>
              <div>
                <div className="incentive-card-top-row">
                  <div className="incentive-card-icon-box">
                    <TrendingUp size={24} />
                  </div>
                  <span className="incentive-card-rate-badge">₹350+ BONUS</span>
                </div>
                <h3 className="incentive-card-title">Daily Milestone Streaks</h3>
                <p className="incentive-card-desc">
                  Complete 10 rides in a single day and unlock extra cash bonuses credited automatically into your evening settlement.
                </p>
              </div>
              <button type="button" className="incentive-card-action-btn">
                <span>Ride More, Earn More</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Booster 3 */}
            <div className="incentive-feature-card" onClick={onJoinClick}>
              <div>
                <div className="incentive-card-top-row">
                  <div className="incentive-card-icon-box">
                    <Gift size={24} />
                  </div>
                  <span className="incentive-card-rate-badge">0% CUT</span>
                </div>
                <h3 className="incentive-card-title">Zero Tip Deductions</h3>
                <p className="incentive-card-desc">
                  We believe passenger gratuity belongs solely to the person behind the wheel. Every rupee tipped is 100% yours.
                </p>
              </div>
              <button type="button" className="incentive-card-action-btn">
                <span>Keep What You Earn</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <div className="incentives-bottom-trust">
            <div className="incentives-bottom-text">
              <strong>Fair, Transparent Rewards:</strong> Performance bonuses and surge pass-throughs are calculated real-time in your driver dashboard.
            </div>
            <button
              type="button"
              className="incentives-join-btn"
              onClick={onJoinClick}
            >
              <span>Join GoRush Driver Partner</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION - LUXURY REDESIGN */}
      <section className="subpage-prefooter-cta" id="join">
        <div className="subpage-cta-card-luxury">
          <div className="subpage-cta-header-center">
            <div className="subpage-cta-badge">
              <Sparkles size={14} />
              <span>Daily UPI Settlements · Real Numbers</span>
            </div>
            <h2 className="subpage-cta-headline">
              Start putting <span>more money</span> in your pocket.
            </h2>
            <p className="subpage-cta-subtext">
              Join thousands of full-time and part-time Indore captains earning ₹35,000–₹65,000 every month with guaranteed daily cash-outs.
            </p>
          </div>

          <div className="subpage-cta-perks-grid">
            <div className="subpage-cta-perk-box">
              <div className="subpage-cta-perk-icon-wrap">
                <IndianRupee size={22} />
              </div>
              <strong>Zero Commission Surge</strong>
              <p>During peak Indore hours, 100% of the customer surge goes into your pocket, not corporate servers.</p>
            </div>

            <div className="subpage-cta-perk-box">
              <div className="subpage-cta-perk-icon-wrap">
                <TrendingUp size={22} />
              </div>
              <strong>Weekly Target Rewards</strong>
              <p>Hit easily achievable milestone targets (e.g., 14 rides) for instant ₹300–₹800 cash bonus credit.</p>
            </div>

            <div className="subpage-cta-perk-box">
              <div className="subpage-cta-perk-icon-wrap">
                <Fuel size={22} />
              </div>
              <strong>Fuel & EV Recharge Tie-Ups</strong>
              <p>Exclusive discounted fuel at top Indore petrol pumps and subsidized EV fast-charging stations.</p>
            </div>
          </div>

          <div className="subpage-cta-actions-row">
            <button
              type="button"
              className="subpage-cta-primary-pill"
              onClick={onJoinClick}
              id="earnings-final-cta-btn"
            >
              <span>Start Earning Today</span>
              <ArrowRight size={17} />
            </button>
            <Link to="/how-it-works" className="subpage-cta-secondary-pill">
              <span>View Onboarding Steps</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="subpage-cta-bottom-trust">
            <div className="subpage-cta-trust-tag">
              <Check size={16} />
              <span>Daily Automated Bank Transfers</span>
            </div>
            <div className="subpage-cta-trust-tag">
              <Check size={16} />
              <span>No Hidden Penalties</span>
            </div>
            <div className="subpage-cta-trust-tag">
              <Check size={16} />
              <span>Transparent Fare Breakup</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
