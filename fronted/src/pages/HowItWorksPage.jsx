import React, { useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Bike,
  BarChart3,
  CarFront,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  FileCheck2,
  FileText,
  HelpCircle,
  IndianRupee,
  MessageSquare,
  Navigation,
  ShieldCheck,
  Sparkles,
  Smartphone,
  User,
  Users,
  Wallet,
  X,
  Zap,
} from 'lucide-react';
import './pages.css';
import '../onboarding-hero-redesign.css';
import '../vehicle-criteria-redesign.css';
import '../faq-showcase-redesign.css';

const stepsData = [
  {
    step: '01',
    badge: 'STAGE 1',
    title: 'Download & Register with your Mobile',
    desc: 'Enter your 10-digit mobile number, verify with a one-time password (OTP), and select your city (e.g. Indore, Mumbai, Pune). No upfront deposits or registration fees required.',
    tags: ['< 3 Minutes', 'Zero Deposit', 'Instant OTP Verification'],
    visualLabel: 'STEP 1 · REGISTER',
    icon: Smartphone,
  },
  {
    step: '02',
    badge: 'STAGE 2',
    title: 'Upload Essential Documents Digitally',
    desc: 'Take quick clear photos of your Driving License, Vehicle RC book, active Insurance, and PAN/Aadhaar card. Our automated AI verification system approves valid papers in record time.',
    tags: ['AI Document Scan', 'Same-Day Clearance', 'Paperless Process'],
    visualLabel: 'STEP 2 · VERIFY',
    icon: FileCheck2,
  },
  {
    step: '03',
    badge: 'STAGE 3',
    title: 'Switch Online & Take Your First Ride',
    desc: 'Open the GoRush Driver app, toggle the green "Online" switch, and view high-demand heatmaps across the city. Receive ride alerts with upfront pickup, drop-off, and exact estimated fare.',
    tags: ['Upfront Destination', 'Traffic-Smart GPS', 'Guaranteed Fare'],
    visualLabel: 'STEP 3 · DRIVE',
    icon: Navigation,
  },
  {
    step: '04',
    badge: 'STAGE 4',
    title: 'Collect Earnings with Instant Daily Payout',
    desc: 'Receive payments via cash or UPI directly into your connected bank account. View detailed earning statements with zero hidden commissions and transparent tips.',
    tags: ['Daily UPI Transfer', '0% Cash Handling Fee', 'Tip Protection'],
    visualLabel: 'STEP 4 · GET PAID',
    icon: IndianRupee,
  },
];

const vehicleRequirements = {
  bike: {
    badgeTitle: '2-Wheeler',
    badgeSub: '(Bike / Electric Scooter)',
    desc: 'Ideal for rapid urban mobility, delivery, and quick passenger hops across Indore and metro hubs.',
    icon: Bike,
    safeText: 'Safe Vehicle. Happy Journeys.',
    items: [
      'Valid Driving License (2-Wheeler with gear)',
      'Vehicle RC book (Year 2014 or newer)',
      'Active third-party or comprehensive insurance',
      'Standard ISI certified helmet for rider & passenger',
      'Smartphone with GPS and 4G/5G connection',
    ],
  },
  auto: {
    badgeTitle: '3-Wheeler',
    badgeSub: '(Auto Rickshaw)',
    desc: 'The backbone of city commute with consistent high volume and high demand round the clock.',
    icon: Navigation,
    safeText: 'Safe Auto. Reliable Rides.',
    items: [
      'Commercial Driving License with 3-Wheeler badge',
      'Valid city transport permit & Fitness Certificate',
      'Active Auto Rickshaw Insurance & Pollution (PUC)',
      'Bank passbook or cancelled cheque for UPI payouts',
      'Clean vehicle interior with working meter/fare display',
    ],
  },
  cab: {
    badgeTitle: '4-Wheeler',
    badgeSub: '(Cab / Taxi)',
    desc: 'Premium comfort rides, airport pickups, and intercity trips with maximum earning per kilometer.',
    icon: CarFront,
    safeText: 'Comfort Drive. Safe Journeys.',
    items: [
      'Commercial Driving License (LMV / Transport)',
      'Commercial yellow-board registration (T-Permit)',
      'Commercial insurance and valid fitness certificate',
      'Working air conditioner and functional seatbelts',
      'Clean driver background check and police verification',
    ],
  },
};

const faqs = [
  {
    q: 'How long does the document verification process take?',
    a: 'Most profiles are verified in less than 2 hours. If your photos are clear and details match your Aadhaar, activation is same-day so you can start driving immediately.',
    icon: FileText,
    category: 'Onboarding',
    tip: 'Keep clear photos of your documents to get faster approval.',
  },
  {
    q: 'Is there any joining fee or security deposit?',
    a: 'Absolutely not. GoRush does not charge any upfront joining fee, kit fee, or security deposit. You can register and test the platform completely free.',
    icon: IndianRupee,
    category: 'Payments',
    tip: 'Zero deposit required. 100% free registration.',
  },
  {
    q: 'Can I choose my own driving hours?',
    a: 'Yes, 100%. You have total freedom. Turn the app online whenever you want to drive, and switch offline when you want to take a break or spend time with family.',
    icon: Clock3,
    category: 'Onboarding',
    tip: 'Drive part-time, full-time, or weekend shifts at your choice.',
  },
  {
    q: 'How and when do I receive my earnings?',
    a: 'Trip earnings are settled directly to your UPI ID or bank account every single day. For cash rides, you collect the fare directly from the passenger with zero delay.',
    icon: Wallet,
    category: 'Payments',
    tip: 'Daily auto-settlement directly into your bank or UPI account.',
  },
];

export default function HowItWorksPage({ onJoinClick }) {
  const [selectedVehicle, setSelectedVehicle] = useState('bike');
  const [openFaq, setOpenFaq] = useState(0);
  const [selectedFaqCat, setSelectedFaqCat] = useState('All Questions');

  return (
    <div className="subpage-wrap">
      {/* HOW IT WORKS / ONBOARDING - 100% HANDCRAFTED NATIVE WEB */}
      <section className="new-onboarding-section" id="how-it-works">
        <div className="onboarding-inner-container">
          <div className="onboarding-header-center">
            <div className="onboarding-eyebrow-badge">
              <Sparkles size={13} />
              <span>Simple 3-Step Process</span>
            </div>
            <h1 className="onboarding-main-title">
              Your journey to earning <em>starts in minutes.</em>
            </h1>
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
                <Smartphone size={22} />
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

      {/* 4-Step Deep Dive */}
      <section className="subpage-section">
        <div className="subpage-container">
          <div className="subpage-section-header">
            <span className="section-tag">THE 4 SIMPLE STAGES</span>
            <h2>
              How your journey <em>unfolds</em>
            </h2>
            <p>
              We removed the red tape. Here is the straightforward path from your mobile screen to your
              first completed trip.
            </p>
          </div>

          <div className="hiw-steps-stack">
            {stepsData.map((s) => {
              const StepIcon = s.icon;
              return (
                <div className="hiw-step-card" key={s.step}>
                  <div className="hiw-step-num-badge">
                    <strong>{s.step}</strong>
                    <span>{s.badge}</span>
                  </div>

                  <div className="hiw-step-content">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <div className="hiw-step-tags">
                      {s.tags.map((tag) => (
                        <span className="hiw-tag" key={tag}>
                          <Check size={12} /> {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="hiw-step-visual">
                    <div className="hiw-visual-chip">
                      <StepIcon size={16} />
                      <span>{s.visualLabel}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vehicle Eligibility Requirements - 100% Handcrafted Web Component */}
      <section className="criteria-section-wrap" id="vehicle-criteria">
        <div className="criteria-inner-container">
          <div className="criteria-header-center">
            <div className="criteria-eyebrow-pill">
              <Sparkles size={13} />
              <span>VEHICLE ELIGIBILITY & CRITERIA</span>
            </div>
            <h2 className="criteria-headline">
              Drive with what you <em>already own.</em>
            </h2>
            <p className="criteria-subline">
              Select your vehicle category to see specific paperwork and checklist requirements.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="criteria-tabs-bar">
            <button
              type="button"
              className={`criteria-tab-btn ${selectedVehicle === 'bike' ? 'active' : ''}`}
              onClick={() => setSelectedVehicle('bike')}
            >
              <Bike size={18} />
              <span>2-Wheeler (Bike / EV)</span>
            </button>
            <button
              type="button"
              className={`criteria-tab-btn ${selectedVehicle === 'auto' ? 'active' : ''}`}
              onClick={() => setSelectedVehicle('auto')}
            >
              <Navigation size={18} />
              <span>3-Wheeler (Auto Rickshaw)</span>
            </button>
            <button
              type="button"
              className={`criteria-tab-btn ${selectedVehicle === 'cab' ? 'active' : ''}`}
              onClick={() => setSelectedVehicle('cab')}
            >
              <CarFront size={18} />
              <span>4-Wheeler (Cab / Taxi)</span>
            </button>
          </div>

          {/* Dynamic Content Card */}
          <div className="criteria-content-card">
            <div className="criteria-card-left">
              <div className="criteria-card-left-top">
                <div className="criteria-vehicle-icon-box">
                  {selectedVehicle === 'bike' && <Bike size={28} />}
                  {selectedVehicle === 'auto' && <Navigation size={28} />}
                  {selectedVehicle === 'cab' && <CarFront size={28} />}
                </div>
                <h3 className="criteria-vehicle-title">{vehicleRequirements[selectedVehicle].badgeTitle}</h3>
                <div className="criteria-vehicle-sub">{vehicleRequirements[selectedVehicle].badgeSub}</div>
                <p className="criteria-vehicle-desc">{vehicleRequirements[selectedVehicle].desc}</p>
              </div>

              <button
                type="button"
                className="criteria-register-btn"
                onClick={onJoinClick}
              >
                <span>Register {vehicleRequirements[selectedVehicle].badgeTitle}</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="criteria-card-right">
              <div className="criteria-checklist-header">
                <div className="criteria-checklist-title">
                  <FileCheck2 size={16} />
                  <span>MANDATORY DOCUMENTS</span>
                </div>
                <span className="criteria-fast-badge">Approval &lt; 2 Hours</span>
              </div>

              <ul className="criteria-items-list">
                {vehicleRequirements[selectedVehicle].items.map((item, idx) => (
                  <li key={idx} className="criteria-item-row">
                    <div className="criteria-item-check">
                      <Check size={14} />
                    </div>
                    <span className="criteria-item-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Driver FAQs - 100% Handcrafted Accordion Component */}
      <section className="faq-section-wrap" id="faq-showcase">
        <div className="faq-inner-container">
          <div className="faq-header-center">
            <div className="faq-eyebrow-pill">
              <Sparkles size={13} />
              <span>DRIVER HELP & COMMON QUESTIONS</span>
            </div>
            <h2 className="faq-headline">
              Got questions? We've got <em>answers.</em>
            </h2>
            <p className="faq-subline">
              Everything you need to know about joining GoRush, onboarding, payouts, and driving terms.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="faq-categories-row">
            {['All Questions', 'Onboarding', 'Payments'].map((cat) => (
              <button
                key={cat}
                type="button"
                className={`faq-cat-pill ${selectedFaqCat === cat ? 'active' : ''}`}
                onClick={() => setSelectedFaqCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="faq-accordion-list">
            {faqs
              .filter((f) => selectedFaqCat === 'All Questions' || f.category === selectedFaqCat)
              .map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`} key={faq.q}>
                    <button
                      type="button"
                      className="faq-accordion-header"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    >
                      <span className="faq-question-text">{faq.q}</span>
                      <div className="faq-accordion-chevron">
                        <ChevronDown size={18} />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="faq-accordion-body">
                        <p className="faq-answer-text">{faq.a}</p>
                        {faq.tip && (
                          <div className="faq-protip-box">
                            <Check size={15} />
                            <span><strong>Pro Tip:</strong> {faq.tip}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>

          {/* Bottom Support Strip */}
          <div className="faq-support-strip">
            <div className="faq-support-strip-left">
              <div className="faq-support-icon-circle">
                <MessageSquare size={22} />
              </div>
              <div className="faq-support-text">
                <strong>Still have questions or need assistance?</strong>
                <span>Our partner helpline is available 24 hours a day to guide you through registration.</span>
              </div>
            </div>
            <button
              type="button"
              className="faq-support-action-btn"
              onClick={onJoinClick}
            >
              <span>Speak to Driver Desk</span>
              <ArrowRight size={15} />
            </button>
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
            Ready to get started?
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
            Take 5 minutes to submit your details. Join thousands of verified drivers across India.
          </p>
          <button
            type="button"
            className="final-cta-action-btn"
            onClick={onJoinClick}
            id="howitworks-final-cta-btn"
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
