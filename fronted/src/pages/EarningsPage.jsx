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
  const [activeIncentiveCard, setActiveIncentiveCard] = useState(null);
  const [incentiveBubbles, setIncentiveBubbles] = useState([]);

  const handleIncentiveTap = (cardNum) => {
    setActiveIncentiveCard(cardNum);
    const newBubbles = Array.from({ length: 8 }).map((_, i) => ({
      id: Math.random(),
      left: Math.random() * 70 + 15 + '%',
      size: Math.random() * 22 + 12,
      duration: (Math.random() * 0.4 + 1.0).toFixed(2),
      delay: (i * 0.08).toFixed(2),
    }));
    setIncentiveBubbles(newBubbles);
    setTimeout(() => {
      setActiveIncentiveCard(null);
      setIncentiveBubbles([]);
    }, 1600);
  };

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
      {/* Earnings Hero Section - Sealed Showcase Banner */}
      <section className="earnings-banner-section" id="earnings-hero">
        <div className="earnings-banner-wrapper">
          <img
            src="/earnings-showcase-sep21.png"
            alt="Earn with complete clarity. Paid every single day - GoRush"
            className="earnings-banner-img"
          />
          {/* Real Interactive Button over 'Start Driving Today' */}
          <button
            type="button"
            className="earnings-banner-real-btn"
            onClick={onJoinClick}
            title="Start Driving Today"
            id="earnings-start-driving-btn"
          >
            <span>Start Driving Today</span>
            <span className="earnings-banner-btn-arrow">
              <ArrowRight size={16} />
            </span>
          </button>

          {/* Interactive Link over 'See How It Works' */}
          <Link
            to="/how-it-works"
            className="earnings-banner-video-btn"
            title="See How It Works"
            id="earnings-see-how-btn"
            aria-label="See How It Works"
          />
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


      {/* Transparent Fare Anatomy - Sep 21 Edition with Cleaned Banner & Interactive Hitboxes */}
      <section className="anatomy-showcase-section" id="fare-anatomy">
        <div className="anatomy-container">
          <div className="anatomy-banner-wrapper">
            {/* Cleaned AI Banner without fake top bar */}
            <img
              src="/fare-anatomy-sep21.png"
              alt="Where does your money go? Anatomy of a Fare - GoRush"
              className="anatomy-banner-img"
            />

            {/* Interactive Driver Card Hitbox (You Keep 90% - ₹270.00) */}
            <button
              type="button"
              className="anatomy-hitbox-driver"
              onClick={onJoinClick}
              title="You Keep 90% (₹270.00) - Register as Driver"
              aria-label="You Keep 90% (₹270.00) - Register as Driver"
            />

            {/* Interactive More Rides, More Earnings Pill */}
            <button
              type="button"
              className="anatomy-hitbox-pill"
              onClick={onJoinClick}
              title="More Rides, More Earnings - Start Driving"
              aria-label="More Rides, More Earnings - Start Driving"
            />

            {/* Interactive Platform Fee Card Hitbox (10% - ₹30.00) */}
            <button
              type="button"
              className="anatomy-hitbox-platform"
              onClick={onJoinClick}
              title="Platform Fee 10% (₹30.00) Covers 24/7 Support & Safety"
              aria-label="Platform Fee 10% (₹30.00) Covers 24/7 Support & Safety"
            />

            {/* Interactive Bottom Bar (Fair Pricing, Transparent Split, etc.) */}
            <button
              type="button"
              className="anatomy-hitbox-bar"
              onClick={onJoinClick}
              title="Fair Pricing, Transparent Split & Community Growth"
              aria-label="Fair Pricing, Transparent Split & Community Growth"
            />
          </div>
        </div>
      </section>

      {/* Bonus Boosters & Surge - Sep 21 Edition with Bubbling Cards & Real Buttons */}
      <section className="incentives-showcase-section" id="incentives-program">
        <div className="incentives-container">
          <div className="incentives-banner-wrapper">
            {/* Cleaned AI Banner without fake top bar */}
            <img
              src="/incentives-showcase-sep21.png"
              alt="Boost your daily income - GoRush Incentive Program"
              className="incentives-banner-img"
            />

            {/* Card 1 Tap Hitbox: 100% Peak Hour Surge */}
            <div
              className={`incentives-hitbox-card incentives-card-1 ${activeIncentiveCard === 1 ? 'is-active' : ''}`}
              onClick={() => handleIncentiveTap(1)}
              title="Tap for 100% Peak Hour Surge details"
            >
              {activeIncentiveCard === 1 && (
                <>
                  <div className="incentives-bubble-wrap">
                    {incentiveBubbles.map((b) => (
                      <span
                        key={b.id}
                        className="incentive-bubble"
                        style={{
                          left: b.left,
                          width: `${b.size}px`,
                          height: `${b.size}px`,
                          animationDuration: `${b.duration}s`,
                          animationDelay: `${b.delay}s`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="incentive-reward-pill">
                    <Zap size={14} />
                    <span>⚡ 2.0x Peak Surge Active!</span>
                  </div>
                </>
              )}
            </div>

            {/* Real Button 1: Earn More in Peak Hours -> */}
            <button
              type="button"
              className="incentives-real-btn incentives-btn-1"
              onClick={onJoinClick}
              title="Earn More in Peak Hours - Join GoRush"
              aria-label="Earn More in Peak Hours - Join GoRush"
            />

            {/* Card 2 Tap Hitbox: Daily Milestone Streaks */}
            <div
              className={`incentives-hitbox-card incentives-card-2 ${activeIncentiveCard === 2 ? 'is-active' : ''}`}
              onClick={() => handleIncentiveTap(2)}
              title="Tap for Daily Milestone Streaks details"
            >
              {activeIncentiveCard === 2 && (
                <>
                  <div className="incentives-bubble-wrap">
                    {incentiveBubbles.map((b) => (
                      <span
                        key={b.id}
                        className="incentive-bubble"
                        style={{
                          left: b.left,
                          width: `${b.size}px`,
                          height: `${b.size}px`,
                          animationDuration: `${b.duration}s`,
                          animationDelay: `${b.delay}s`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="incentive-reward-pill">
                    <Gift size={14} />
                    <span>🎁 ₹550 Daily Cash Bonus!</span>
                  </div>
                </>
              )}
            </div>

            {/* Real Button 2: Ride More, Earn More -> */}
            <button
              type="button"
              className="incentives-real-btn incentives-btn-2"
              onClick={onJoinClick}
              title="Ride More, Earn More - Join GoRush"
              aria-label="Ride More, Earn More - Join GoRush"
            />

            {/* Card 3 Tap Hitbox: Zero Tip Deductions */}
            <div
              className={`incentives-hitbox-card incentives-card-3 ${activeIncentiveCard === 3 ? 'is-active' : ''}`}
              onClick={() => handleIncentiveTap(3)}
              title="Tap for Zero Tip Deductions details"
            >
              {activeIncentiveCard === 3 && (
                <>
                  <div className="incentives-bubble-wrap">
                    {incentiveBubbles.map((b) => (
                      <span
                        key={b.id}
                        className="incentive-bubble"
                        style={{
                          left: b.left,
                          width: `${b.size}px`,
                          height: `${b.size}px`,
                          animationDuration: `${b.duration}s`,
                          animationDelay: `${b.delay}s`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="incentive-reward-pill">
                    <Heart size={14} />
                    <span>💚 100% Tips Kept Directly!</span>
                  </div>
                </>
              )}
            </div>

            {/* Real Button 3: Keep What You Earn -> */}
            <button
              type="button"
              className="incentives-real-btn incentives-btn-3"
              onClick={onJoinClick}
              title="Keep What You Earn - Join GoRush"
              aria-label="Keep What You Earn - Join GoRush"
            />

            {/* Interactive Signboard (Left bottom) */}
            <button
              type="button"
              className="incentives-signboard-hitbox"
              onClick={onJoinClick}
              title="Drive, Earn, Grow Together - Register as Driver"
              aria-label="Drive, Earn, Grow Together - Register as Driver"
            />

            {/* Interactive Bottom Transparency Bar */}
            <button
              type="button"
              className="incentives-bottom-bar-hitbox"
              onClick={onJoinClick}
              title="Fair, Transparent Rewards & Performance Bonuses"
              aria-label="Fair, Transparent Rewards & Performance Bonuses"
            />
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
            onClick={onJoinClick}
            id="earnings-final-cta-btn"
          >
            <span>Become a GoRush driver</span>
            <span className="final-cta-btn-arrow-wrap">
              <ArrowRight size={17} />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
