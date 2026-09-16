import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BadgePercent,
  Building2,
  Check,
  CircleDollarSign,
  Clock3,
  Compass,
  Crown,
  FileText,
  Fuel,
  Gift,
  Headphones,
  Heart,
  HeartHandshake,
  IndianRupee,
  Leaf,
  MapPin,
  Navigation,
  Percent,
  Settings,
  ShieldCheck,
  ShieldPlus,
  Sparkles,
  Star,
  Tag,
  TrendingUp,
  Umbrella,
  Users,
  Wallet,
  Wrench,
  X,
  Zap,
} from 'lucide-react';
import './pages.css';
import '../driver-first-redesign.css';
import '../perks-showcase-redesign.css';
import '../comparison-showcase-redesign.css';
import '../pillars-showcase-redesign.css';

const pillars = [
  {
    badge: 'FAIR FARES',
    icon: BadgePercent,
    title: 'Flat 10% Platform Fee',
    desc: 'Traditional platforms cut 25% to 30% from your hard work. GoRush charges a flat, transparent 10% fee, ensuring more than 90% stays in your pocket on every trip.',
    statNum: '10%',
    statLabel: 'Flat fee vs 28% market avg',
  },
  {
    badge: 'FREEDOM',
    icon: Clock3,
    title: 'Total Schedule Independence',
    desc: 'You are your own boss. No minimum mandatory hours, no punitive acceptance rate drops, and no penalties for choosing which trips make sense for you.',
    statNum: '100%',
    statLabel: 'Schedule control & autonomy',
  },
  {
    badge: 'TRANSPARENCY',
    icon: Compass,
    title: 'Upfront Fare & Route Details',
    desc: 'No blind trips. Before accepting any ride, you see the exact pickup landmark, drop destination, passenger rating, and estimated earnings upfront.',
    statNum: '0',
    statLabel: 'Hidden routes or surprises',
  },
  {
    badge: 'RESPECT',
    icon: HeartHandshake,
    title: 'Human-First Support 24/7',
    desc: 'When you call for help, you talk to real local support teams in your city, not endless automated chat loops. We have physical partner hubs ready to assist.',
    statNum: '24/7',
    statLabel: 'Real human assistance',
  },
];

const comparisonData = [
  {
    icon: Percent,
    feature: 'Platform Commission',
    gorush: 'Flat 10% platform fee',
    competitors: '25% to 32% deduction',
  },
  {
    icon: MapPin,
    feature: 'Upfront Destination Info',
    gorush: 'Full drop-off location visible',
    competitors: 'Hidden until passenger is picked up',
  },
  {
    icon: Zap,
    feature: 'Surge / Peak Multiplier',
    gorush: '100% of peak surge given to driver',
    competitors: 'Aggregator takes 30–40% of surge',
  },
  {
    icon: Wallet,
    feature: 'Payout Frequency',
    gorush: 'Instant daily UPI or bank payout',
    competitors: 'Weekly cycles with delayed transfers',
  },
  {
    icon: ShieldCheck,
    feature: 'Accidental Insurance',
    gorush: '₹5,00,000 cover at zero cost',
    competitors: 'Requires extra daily opt-in fee',
  },
  {
    icon: FileText,
    feature: 'Cancellation & Penalties',
    gorush: 'Zero penalization for rejected trips',
    competitors: 'Temporary bans & algorithmic throttling',
  },
  {
    icon: Headphones,
    feature: 'Support Channel',
    gorush: 'Direct phone & local city hubs',
    competitors: 'Chatbot tickets with delayed reply',
  },
];

const perks = [
  {
    icon: Fuel,
    title: 'Fuel Partner Discounts',
    desc: 'Save up to ₹2.50 per litre on petrol, diesel, and CNG at certified partner stations across Indore and partner cities.',
    badgeIcon: Tag,
    badgeText: 'LOWER FUEL COSTS',
  },
  {
    icon: Wrench,
    title: 'Subsidized Vehicle Care',
    desc: 'Exclusive discounts on vehicle servicing, engine oil changes, tyre replacements, and battery checks at authorized garages.',
    badgeIcon: Settings,
    badgeText: 'KEEP YOUR RIDE READY',
  },
  {
    icon: ShieldPlus,
    title: '₹5 Lakh Accident Cover',
    desc: 'Comprehensive accidental insurance covering hospitalization, emergency medical aid, and disability for all active drivers.',
    badgeIcon: Umbrella,
    badgeText: "YOU'RE ALWAYS COVERED",
  },
  {
    icon: Users,
    title: 'Driver Welfare Community',
    desc: 'Quarterly driver meetups, awards for safe drivers, child education grants, and emergency medical hardship relief funds.',
    badgeIcon: Heart,
    badgeText: 'A STRONGER TOGETHER',
  },
];


export default function WhyGoRushPage({ onJoinClick }) {
  return (
    <div className="subpage-wrap">
      {/* Hero Section - Exact Match to ChatGPT Showcase: https://chatgpt.com/s/m_6aa389920d7881918651e7e81909beae */}
      <section className="driver-first-section">
        <div className="driver-first-grid">
          {/* Left Column: 3 Benefit Pills + Handwritten Cursive */}
          <div className="driver-first-left-stack">
            <div className="driver-first-pill-item">
              <div className="driver-first-icon-circle">
                <CircleDollarSign size={18} />
              </div>
              <div className="driver-first-pill-text">
                <strong>Higher Earnings</strong>
                <span>Keep more of what you earn</span>
              </div>
            </div>

            <div className="driver-first-pill-item">
              <div className="driver-first-icon-circle">
                <ShieldCheck size={18} />
              </div>
              <div className="driver-first-pill-text">
                <strong>Fair & Transparent</strong>
                <span>No hidden cuts, no surprises</span>
              </div>
            </div>

            <div className="driver-first-pill-item">
              <div className="driver-first-icon-circle">
                <Users size={18} />
              </div>
              <div className="driver-first-pill-text">
                <strong>A Supportive Community</strong>
                <span>Drivers help drivers grow</span>
              </div>
            </div>

            <div className="driver-first-script-left">
              <span>Drive</span>
              <span>A Brighter Tomorrow</span>
              <svg className="driver-first-script-curve" viewBox="0 0 140 10" fill="none">
                <path d="M 5 6 Q 70 11 135 4" stroke="#688e36" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Center Column: Eyebrow + Headline + Lead + 3 Badges + Ticker */}
          <div className="driver-first-center-col">
            <div className="driver-first-eyebrow-pill">
              <Users size={13} />
              <span>THE DRIVER-FIRST ADVANTAGE</span>
            </div>

            <h1 className="driver-first-headline">
              <span className="driver-first-headline-main">Built for drivers.</span>
              <span className="driver-first-script-wrap">
                <em className="driver-first-headline-accent">Not corporate algorithms.</em>
                <svg className="driver-first-swoosh-svg" viewBox="0 0 290 14" fill="none">
                  <path d="M 8 8 Q 145 14 280 5" stroke="#759c38" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="driver-first-desc">
              We started GoRush with a simple belief: driving through the city should be empowering,
              rewarding, and respected. Here is how we put you first on every single kilometer.
            </p>

            <div className="driver-first-badges-row">
              <div className="driver-first-badge-chip">
                <Percent size={14} className="driver-first-chip-icon" />
                <span>Flat 10% platform fee</span>
              </div>
              <div className="driver-first-badge-chip">
                <TrendingUp size={14} className="driver-first-chip-icon" />
                <span>15–20% higher take-home</span>
              </div>
              <div className="driver-first-badge-chip">
                <MapPin size={14} className="driver-first-chip-icon" />
                <span>Upfront drop destinations</span>
              </div>
            </div>

            <div className="driver-first-bottom-ticker">
              <span className="driver-ticker-line" />
              <span className="driver-ticker-text">DRIVE • EARN • GROW TOGETHER</span>
              <span className="driver-ticker-line" />
            </div>
          </div>

          {/* Right Column: Driver Visual Hero Artwork */}
          <div className="driver-first-right-visual" aria-hidden="true">
            <img
              src="/driver-first-hero.webp"
              alt="GoRush Driver - Real Drivers Real Opportunities"
              className="driver-first-hero-img"
            />
          </div>
        </div>

        {/* Bottom-Left Foliage Leaf Accent */}
        <img
          src="/driver-first-leaves.webp"
          alt=""
          className="driver-first-corner-leaves"
          aria-hidden="true"
        />
      </section>

      {/* The 4 Core Pillars - Exact Match to ChatGPT Showcase: https://chatgpt.com/s/m_6aa3cb8e798c8191840ff06f0e633fbc */}
      <section className="pillars-showcase-section-wrap">
        <div className="pillars-scenery-left" aria-hidden="true">
          <img src="/pillars-scenery-left.webp" alt="" />
        </div>
        <div className="pillars-scenery-right" aria-hidden="true">
          <img src="/pillars-scenery-right.webp" alt="" />
        </div>

        <div className="pillars-inner-container">
          <div className="pillars-eyebrow-pill">
            <Sparkles size={13} />
            <span>OUR CORE PROMISES</span>
          </div>

          <h2 className="pillars-headline">
            The four pillars of
            <span className="pillars-script-wrap">
              <em className="pillars-headline-script">GoRush</em>
              <svg className="pillars-swoosh-svg" viewBox="0 0 170 12" fill="none" aria-hidden="true">
                <path d="M 6 7 Q 85 12 164 4" stroke="#44772b" strokeWidth="2.8" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          <p className="pillars-subtitle">
            Every rule, feature, and policy on GoRush is designed around driver dignity and earning potential.
          </p>

          <div className="pillars-cards-grid">
            {pillars.map((p) => {
              const PillarIcon = p.icon;
              return (
                <div className="pillars-card" key={p.title}>
                  <div className="pillars-card-top-row">
                    <span className="pillars-card-badge">{p.badge}</span>
                    <div className="pillars-card-icon-box">
                      <PillarIcon size={22} />
                    </div>
                  </div>
                  <h3 className="pillars-card-title">{p.title}</h3>
                  <p className="pillars-card-desc">{p.desc}</p>
                  <div className="pillars-card-stat-row">
                    <span className="pillars-stat-num">{p.statNum}</span>
                    <span className="pillars-stat-label-badge">{p.statLabel}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Head-to-Head Comparison Table - Exact Match to ChatGPT Showcase: https://chatgpt.com/s/m_6aa3c8e119348191b0934883adb9e75d */}
      <section className="comparison-showcase-section-wrap">
        <div className="comparison-scenery-left" aria-hidden="true">
          <img src="/comparison-scenery-left.webp" alt="" />
        </div>
        <div className="comparison-scenery-right" aria-hidden="true">
          <img src="/comparison-scenery-right.webp" alt="" />
        </div>

        <div className="comparison-inner-container">
          <div className="comparison-eyebrow-tag">
            <span className="comparison-eyebrow-line" />
            <span>SIDE BY SIDE</span>
            <span className="comparison-eyebrow-line" />
          </div>

          <h2 className="comparison-headline">
            GoRush vs
            <span className="comparison-script-wrap">
              <em className="comparison-headline-script">Legacy Apps</em>
              <svg className="comparison-swoosh-svg" viewBox="0 0 170 12" fill="none" aria-hidden="true">
                <path d="M 6 7 Q 85 12 164 4" stroke="#44772b" strokeWidth="2.8" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          <p className="comparison-subtitle">
            Compare the numbers and transparent policies before you decide where to invest your driving time.
          </p>

          <div className="comparison-card-wrapper">
            {/* Column 1: Feature / Policy */}
            <div className="comp-col-feature">
              <div className="comp-col-feature-header">
                <span>Feature / Policy</span>
              </div>
              {comparisonData.map((row) => {
                const RowIcon = row.icon;
                return (
                  <div key={row.feature} className="comp-col-feature-row">
                    <div className="comp-feature-icon-box">
                      <RowIcon size={16} />
                    </div>
                    <span className="comp-feature-title">{row.feature}</span>
                  </div>
                );
              })}
            </div>

            {/* Column 2: GoRush Platform (Elevated Hero Column) */}
            <div className="comp-col-gorush">
              <div className="comp-col-gorush-header">
                <div className="comp-gorush-crown-circle">
                  <Crown size={20} />
                </div>
                <div className="comp-gorush-header-text">
                  <span className="comp-gorush-header-title">GoRush Platform</span>
                  <span className="comp-gorush-header-sub">Built for drivers, not just rides.</span>
                </div>
              </div>
              {comparisonData.map((row) => (
                <div key={row.feature} className="comp-col-gorush-row">
                  <div className="comp-check-circle">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="comp-gorush-text">{row.gorush}</span>
                </div>
              ))}
            </div>

            {/* Column 3: Legacy Cab Apps */}
            <div className="comp-col-legacy">
              <div className="comp-col-legacy-header">
                <div className="comp-legacy-icon-circle">
                  <Building2 size={18} />
                </div>
                <div className="comp-legacy-header-text">
                  <span className="comp-legacy-header-title">Legacy Cab Apps</span>
                  <span className="comp-legacy-header-sub">Higher cuts, lower control.</span>
                </div>
              </div>
              {comparisonData.map((row) => (
                <div key={row.feature} className="comp-col-legacy-row">
                  <div className="comp-cross-circle">
                    <X size={12} strokeWidth={2.6} />
                  </div>
                  <span className="comp-legacy-text">{row.competitors}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Ticker */}
          <div className="comparison-bottom-ticker">
            <span className="comparison-ticker-item">
              <Leaf size={15} />
              <span>DRIVE MORE</span>
            </span>
            <span className="comparison-ticker-divider">|</span>
            <span className="comparison-ticker-item">
              <Users size={15} />
              <span>EARN MORE</span>
            </span>
            <span className="comparison-ticker-divider">|</span>
            <span className="comparison-ticker-item">
              <TrendingUp size={15} />
              <span>GROW TOGETHER</span>
            </span>
          </div>
        </div>
      </section>

      {/* Driver Perks & Protection - Exact Match to ChatGPT Showcase: https://chatgpt.com/s/m_6aa39c0e6e4481918ef7f201cf5ae0cd */}
      <section className="perks-showcase-section-wrap">
        {/* Scenic Left Backdrop (Winding Road & Skyline) */}
        <div className="perks-scenery-left" aria-hidden="true">
          <img src="/perks-scenery-left-clean.webp" alt="" />
        </div>

        {/* Scenic Right Backdrop (Shield & Skyline) */}
        <div className="perks-scenery-right" aria-hidden="true">
          <img src="/perks-scenery-right-clean.webp" alt="" />
        </div>

        <div className="perks-inner-container">
          {/* Eyebrow Badge */}
          <div className="perks-eyebrow-pill">
            <Gift size={13} />
            <span>BEYOND THE RIDE</span>
          </div>

          {/* Headline */}
          <h2 className="perks-headline">
            Driver perks &
            <span className="perks-script-wrap">
              <em className="perks-headline-script">protection</em>
              <svg className="perks-swoosh-svg" viewBox="0 0 200 12" fill="none" aria-hidden="true">
                <path d="M 6 7 Q 100 12 194 4" stroke="#5a8a30" strokeWidth="2.8" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          <p className="perks-subtitle">
            Partnering with GoRush opens up discounts, savings, and safety blankets for you and your family.
          </p>

          {/* 4 Feature Cards Grid */}
          <div className="perks-cards-grid">
            {perks.map((perk) => {
              const PerkIcon = perk.icon;
              const BadgeIcon = perk.badgeIcon;
              return (
                <div className="perks-card" key={perk.title}>
                  <div className="perks-card-top-row">
                    <div className="perks-card-icon-squircle">
                      <PerkIcon size={22} />
                    </div>
                    <div className="perks-card-arrow-circle">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  <h3 className="perks-card-title">{perk.title}</h3>
                  <p className="perks-card-desc">{perk.desc}</p>
                  <div className="perks-card-chip">
                    <BadgeIcon size={13} />
                    <span>{perk.badgeText}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Brand Ticker */}
          <div className="perks-bottom-ticker">
            <span>DRIVE • EARN • GROW</span>
            <span className="perks-ticker-line" />
            <span>PEOPLE • SAFETY • OPPORTUNITY</span>
            <span className="perks-ticker-line" />
            <span>A SAFER TOMORROW TOGETHER</span>
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
            Experience the GoRush difference today.
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
            Sign up takes less than 5 minutes. No deposits, zero registration charges, just fair work.
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
