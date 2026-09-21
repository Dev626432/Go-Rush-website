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
      {/* Hero Section - The GoRush Difference Showcase Banner */}
      <section className="scenic-hero-section" id="features">
        <div className="difference-banner-wrapper">
          <img
            src="/difference-showcase-sep21.png"
            alt="Built around the person behind the wheel - The GoRush Difference"
            className="difference-banner-img"
          />
          {/* Real Interactive Button over 'Get Started' */}
          <button
            type="button"
            className="difference-banner-real-btn"
            onClick={onJoinClick}
            title="Get Started"
            id="difference-get-started-btn"
          >
            <span>Get Started</span>
            <span className="difference-banner-btn-arrow">
              <ArrowRight size={15} />
            </span>
          </button>

          {/* Interactive Link over 'See How It Works' */}
          <Link
            to="/how-it-works"
            className="difference-banner-video-btn"
            title="See How It Works"
            id="difference-see-how-btn"
            aria-label="See How It Works"
          />
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

      {/* Head-to-Head Comparison Table - Showcase Banner */}
      <section className="comparison-banner-section" id="comparison">
        <div className="comparison-banner-wrapper">
          <img
            src="/comparison-showcase.png"
            alt="GoRush vs Legacy Apps - Compare numbers and transparent policies"
            className="comparison-banner-img"
          />
          {/* Interactive Hitbox over GoRush Platform Card */}
          <button
            type="button"
            className="comparison-banner-interactive-hitbox"
            onClick={onJoinClick}
            title="Join GoRush Platform - Built for drivers, not just rides"
            aria-label="Join GoRush Platform"
          />
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
