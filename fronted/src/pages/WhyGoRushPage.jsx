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
import { Link } from 'react-router-dom';
import './pages.css';
import '../home-hero-scenic.css';
import '../driver-first-redesign.css';
import '../perks-showcase-redesign.css';
import '../comparison-showcase-redesign.css';
import '../pillars-showcase-redesign.css';
import '../subpage-cta-redesign.css';

const pillars = [
  {
    badge: 'ZERO COMMISSION',
    icon: BadgePercent,
    title: '0% Platform Commission Cut',
    desc: 'Traditional platforms cut 25% to 30% from your hard work. GoRush charges 0% commission on passenger rides with a nominal daily pass, ensuring 100% of the customer fare stays in your pocket on every trip.',
    statNum: '0%',
    statLabel: 'Commission cut vs 28% market avg',
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
      {/* Hero Section - The GoRush Difference (100% Handcrafted Web) */}
      <section className="scenic-hero-section" id="features">
        <div className="scenic-hero-inner">
          <div className="scenic-header-badge">
            <Sparkles size={13} />
            <span>The GoRush Standard</span>
          </div>
          <h1 className="scenic-header-title">
            Built around the person <em>behind the wheel.</em>
          </h1>
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
                <ShieldCheck size={22} />
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

      {/* The 4 Core Pillars */}
      <section className="pillars-showcase-section-wrap">

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

      {/* Head-to-Head Comparison Matrix (100% Handcrafted Web Component) */}
      <section className="comparison-section-wrap" id="comparison">
        <div className="comparison-inner-container">
          <div className="comparison-header-center">
            <div className="comparison-eyebrow-pill">
              <Sparkles size={13} />
              <span>HEAD-TO-HEAD COMPARISON</span>
            </div>
            <h2 className="comparison-headline">
              Numbers that speak <em>for themselves.</em>
            </h2>
            <p className="comparison-subline">
              See why thousands of drivers are migrating from legacy aggregator apps to GoRush every single week.
            </p>
          </div>

          <div className="comparison-table-wrap">
            {/* Header */}
            <div className="comparison-table-header">
              <span className="comparison-col-title">Feature / Metric</span>
              <div className="comparison-brand-col">
                <span className="comparison-badge-gorush">
                  <span className="star-dot">★</span> GoRush
                </span>
              </div>
              <span className="comparison-badge-others">Legacy Aggregators</span>
            </div>

            {/* Row 1: Platform Fee */}
            <div className="comparison-row">
              <div className="comparison-feature-name">
                <strong>Platform Commission</strong>
                <span>Direct cut taken from passenger fare</span>
              </div>
              <div className="comparison-cell-gorush">
                <div className="icon-check-circle"><Check size={15} /></div>
                <span>Flat 10% transparent fee</span>
              </div>
              <div className="comparison-cell-others">
                <div className="icon-x-circle"><X size={15} /></div>
                <span>25% – 32% + hidden deductions</span>
              </div>
            </div>

            {/* Row 2: Payout Speed */}
            <div className="comparison-row">
              <div className="comparison-feature-name">
                <strong>Payout Frequency</strong>
                <span>How fast your earnings reach your account</span>
              </div>
              <div className="comparison-cell-gorush">
                <div className="icon-check-circle"><Check size={15} /></div>
                <span>Instant UPI & daily settlements</span>
              </div>
              <div className="comparison-cell-others">
                <div className="icon-x-circle"><X size={15} /></div>
                <span>Weekly or delayed cycle</span>
              </div>
            </div>

            {/* Row 3: Destination Transparency */}
            <div className="comparison-row">
              <div className="comparison-feature-name">
                <strong>Destination Transparency</strong>
                <span>Knowing where you're going before accepting</span>
              </div>
              <div className="comparison-cell-gorush">
                <div className="icon-check-circle"><Check size={15} /></div>
                <span>Full drop landmark & fare shown</span>
              </div>
              <div className="comparison-cell-others">
                <div className="icon-x-circle"><X size={15} /></div>
                <span>Blind trips / hidden destination</span>
              </div>
            </div>

            {/* Row 4: Trip Rejection Penalties */}
            <div className="comparison-row">
              <div className="comparison-feature-name">
                <strong>Declining Rides</strong>
                <span>Freedom to skip trips that don't make financial sense</span>
              </div>
              <div className="comparison-cell-gorush">
                <div className="icon-check-circle"><Check size={15} /></div>
                <span>0 penalties or acceptance blocks</span>
              </div>
              <div className="comparison-cell-others">
                <div className="icon-x-circle"><X size={15} /></div>
                <span>Account shadowbans & suspensions</span>
              </div>
            </div>

            {/* Row 5: Accidental Insurance */}
            <div className="comparison-row">
              <div className="comparison-feature-name">
                <strong>Accidental Medical Cover</strong>
                <span>Emergency protection during active duty</span>
              </div>
              <div className="comparison-cell-gorush">
                <div className="icon-check-circle"><Check size={15} /></div>
                <span>₹5,00,000 automatic free coverage</span>
              </div>
              <div className="comparison-cell-others">
                <div className="icon-x-circle"><X size={15} /></div>
                <span>Deducted from driver payout or zero</span>
              </div>
            </div>

            {/* Row 6: Driver Support */}
            <div className="comparison-row">
              <div className="comparison-feature-name">
                <strong>Customer Support Channel</strong>
                <span>Help when you're stuck on the road</span>
              </div>
              <div className="comparison-cell-gorush">
                <div className="icon-check-circle"><Check size={15} /></div>
                <span>24/7 Human Phone & City Hubs</span>
              </div>
              <div className="comparison-cell-others">
                <div className="icon-x-circle"><X size={15} /></div>
                <span>Chatbots & generic script replies</span>
              </div>
            </div>

            {/* Bottom Callout inside Table */}
            <div className="comparison-bottom-cta">
              <p>
                Ready to take home up to <strong>₹6,000 more every month</strong> by cutting out greedy commissions?
              </p>
              <button
                type="button"
                className="comparison-join-btn"
                onClick={onJoinClick}
                id="comparison-join-btn"
              >
                <span>Switch to GoRush</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Perks & Protection */}
      <section className="perks-showcase-section-wrap">

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


      {/* FINAL CALL TO ACTION - LUXURY REDESIGN */}
      <section className="subpage-prefooter-cta" id="join">
        <div className="subpage-cta-card-luxury">
          <div className="subpage-cta-header-center">
            <div className="subpage-cta-badge">
              <Sparkles size={14} />
              <span>Indore Driver Movement · 0% Commission</span>
            </div>
            <h2 className="subpage-cta-headline">
              Experience the <span>GoRush difference</span> today.
            </h2>
            <p className="subpage-cta-subtext">
              Sign up takes less than 5 minutes. Zero deposits, instant daily bank settlements, and dignity on every mile you drive.
            </p>
          </div>

          <div className="subpage-cta-perks-grid">
            <div className="subpage-cta-perk-box">
              <div className="subpage-cta-perk-icon-wrap">
                <Wallet size={22} />
              </div>
              <strong>100% Fare Retention</strong>
              <p>No sudden 25-30% deductions. What you see is what lands in your bank account every day.</p>
            </div>

            <div className="subpage-cta-perk-box">
              <div className="subpage-cta-perk-icon-wrap">
                <Zap size={22} />
              </div>
              <strong>Instant UPI Payouts</strong>
              <p>Cash out after every shift directly to GPay, PhonePe, or Paytm with zero gateway fees.</p>
            </div>

            <div className="subpage-cta-perk-box">
              <div className="subpage-cta-perk-icon-wrap">
                <ShieldCheck size={22} />
              </div>
              <strong>24/7 Indore Offline Hub</strong>
              <p>Face-to-face assistance at Vijay Nagar Square. Real humans who treat you with genuine respect.</p>
            </div>
          </div>

          <div className="subpage-cta-actions-row">
            <button
              type="button"
              className="subpage-cta-primary-pill"
              onClick={onJoinClick}
              id="whygorush-final-cta-btn"
            >
              <span>Become a GoRush Driver</span>
              <ArrowRight size={17} />
            </button>
            <Link to="/earnings" className="subpage-cta-secondary-pill">
              <span>Calculate Daily Earnings</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="subpage-cta-bottom-trust">
            <div className="subpage-cta-trust-tag">
              <Check size={16} />
              <span>₹0 Registration Charges</span>
            </div>
            <div className="subpage-cta-trust-tag">
              <Check size={16} />
              <span>₹5 Lakh Accidental Cover</span>
            </div>
            <div className="subpage-cta-trust-tag">
              <Check size={16} />
              <span>Verified in 15 Minutes</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
