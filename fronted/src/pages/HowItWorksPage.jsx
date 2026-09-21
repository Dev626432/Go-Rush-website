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
      {/* HOW IT WORKS / ONBOARDING - NEW CHATGPT REDESIGN */}
      {/* HOW IT WORKS / ONBOARDING - CHATGPT SHOWCASE */}
      <section className="new-onboarding-section" id="how-it-works">
        <div className="onboarding-banner-wrapper">
          <img
            src="/onboarding-showcase-sep20.png"
            alt="Your next chapter starts here - GoRush"
            className="onboarding-banner-img"
          />
          {/* Real Interactive Button over 'Become a GoRush driver' */}
          <button
            type="button"
            className="onboarding-banner-real-btn"
            onClick={onJoinClick}
            title="Become a GoRush driver"
            id="onboarding-become-driver-btn"
          >
            <span>Become a GoRush driver</span>
            <span className="onboarding-banner-btn-arrow">
              <ArrowRight size={17} />
            </span>
          </button>
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

      {/* Vehicle Eligibility Requirements - Sep 21 Edition with Real Interactive Buttons */}
      <section className="criteria-showcase-section" id="vehicle-criteria">
        <div className="criteria-container">
          <div className="criteria-banner-wrapper">
            {/* Cropped AI banner without fake top bar */}
            <img
              src="/criteria-showcase-sep21.png"
              alt="GoRush Vehicle Requirements & Criteria"
              className="criteria-banner-img"
            />

            {/* Real Interactive Tab: Bike / Scooter */}
            <button
              type="button"
              className={`criteria-hitbox-tab criteria-hitbox-tab-bike ${selectedVehicle === 'bike' ? 'is-active' : ''}`}
              onClick={() => setSelectedVehicle('bike')}
              title="Bike / Scooter Criteria"
              aria-label="Bike / Scooter Criteria"
            >
              {selectedVehicle !== 'bike' && (
                <span className="criteria-tab-inactive-pill">
                  <Bike size={18} className="criteria-pill-icon" />
                  <span className="criteria-pill-texts">
                    <span className="criteria-pill-title">Bike / Scooter</span>
                    <span className="criteria-pill-sub">Most Popular</span>
                  </span>
                </span>
              )}
            </button>

            {/* Real Interactive Tab: Auto Rickshaw */}
            <button
              type="button"
              className={`criteria-hitbox-tab criteria-hitbox-tab-auto ${selectedVehicle === 'auto' ? 'is-active' : ''}`}
              onClick={() => setSelectedVehicle('auto')}
              title="Auto Rickshaw Criteria"
              aria-label="Auto Rickshaw Criteria"
            >
              {selectedVehicle === 'auto' && (
                <span className="criteria-tab-active-pill">
                  <Navigation size={18} className="criteria-pill-icon" />
                  <span className="criteria-pill-texts">
                    <span className="criteria-pill-title">Auto Rickshaw</span>
                    <span className="criteria-pill-sub">Earn More Daily</span>
                  </span>
                </span>
              )}
            </button>

            {/* Real Interactive Tab: Cab / Taxi */}
            <button
              type="button"
              className={`criteria-hitbox-tab criteria-hitbox-tab-cab ${selectedVehicle === 'cab' ? 'is-active' : ''}`}
              onClick={() => setSelectedVehicle('cab')}
              title="Cab / Taxi Criteria"
              aria-label="Cab / Taxi Criteria"
            >
              {selectedVehicle === 'cab' && (
                <span className="criteria-tab-active-pill">
                  <CarFront size={18} className="criteria-pill-icon" />
                  <span className="criteria-pill-texts">
                    <span className="criteria-pill-title">Cab / Taxi</span>
                    <span className="criteria-pill-sub">Drive Your Way</span>
                  </span>
                </span>
              )}
            </button>

            {/* Real Interactive CTA Button over 'Join GoRush Today' */}
            <button
              type="button"
              className="criteria-hitbox-join"
              onClick={onJoinClick}
              title="Join GoRush Today - Register as Driver"
              aria-label="Join GoRush Today - Register as Driver"
            >
              <span className="criteria-join-pulse" />
            </button>

            {/* Dynamic Card Overlay when Auto or Cab is selected */}
            {selectedVehicle !== 'bike' && (
              <div className="criteria-card-overlay">
                <div className="criteria-overlay-subcard">
                  <div className="criteria-overlay-icon-circle">
                    {selectedVehicle === 'auto' && <Navigation size={28} />}
                    {selectedVehicle === 'cab' && <CarFront size={28} />}
                  </div>
                  <h3 className="criteria-overlay-title">{vehicleRequirements[selectedVehicle].badgeTitle}</h3>
                  <div className="criteria-overlay-subtitle">{vehicleRequirements[selectedVehicle].badgeSub}</div>
                  <p className="criteria-overlay-desc">{vehicleRequirements[selectedVehicle].desc}</p>

                  <div className="criteria-overlay-badge-safe">
                    <Check size={13} strokeWidth={3} />
                    <span>{vehicleRequirements[selectedVehicle].safeText}</span>
                  </div>

                  <button
                    type="button"
                    className="criteria-overlay-register-btn"
                    onClick={onJoinClick}
                  >
                    <span>Register {vehicleRequirements[selectedVehicle].badgeTitle}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

                <div className="criteria-overlay-checklist-col">
                  <div className="criteria-overlay-checklist-header">
                    <div className="criteria-overlay-checklist-title">
                      <FileCheck2 size={16} />
                      <span>DOCUMENT CHECKLIST</span>
                    </div>
                    <div className="criteria-overlay-mandatory-tag">
                      <Check size={12} strokeWidth={3} />
                      <span>All documents are mandatory</span>
                    </div>
                  </div>

                  <ul className="criteria-overlay-list">
                    {vehicleRequirements[selectedVehicle].items.map((item, idx) => (
                      <li key={idx} className="criteria-overlay-list-item" onClick={onJoinClick}>
                        <div className="criteria-overlay-check-dot">
                          <Check size={13} strokeWidth={3} />
                        </div>
                        <div className="criteria-overlay-item-text">
                          <span className="criteria-overlay-item-main">{item}</span>
                          <span className="criteria-overlay-item-sub">Verification approved in &lt; 2 hrs</span>
                        </div>
                        <ChevronRight size={15} className="criteria-overlay-chevron" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Driver FAQs - Sep 21 Edition with Real Interactive Buttons */}
      <section className="faq-showcase-section" id="faq-showcase">
        <div className="faq-container">
          <div className="faq-banner-wrapper">
            {/* Cleaned AI Banner without fake top bar */}
            <img
              src="/faq-showcase-sep21.png"
              alt="Got questions? We've got answers - GoRush Driver FAQs"
              className="faq-banner-img"
            />

            {/* Category Tab 1: All Questions */}
            <button
              type="button"
              className={`faq-hitbox-category faq-cat-all ${selectedFaqCat === 'All Questions' ? 'is-active' : ''}`}
              onClick={() => setSelectedFaqCat('All Questions')}
              title="View All Questions"
              aria-label="View All Questions"
            >
              {selectedFaqCat !== 'All Questions' && (
                <span className="faq-cat-inactive-overlay">
                  <span>All Questions</span>
                </span>
              )}
            </button>

            {/* Category Tab 2: Onboarding */}
            <button
              type="button"
              className={`faq-hitbox-category faq-cat-onboarding ${selectedFaqCat === 'Onboarding' ? 'is-active' : ''}`}
              onClick={() => setSelectedFaqCat('Onboarding')}
              title="Onboarding Questions"
              aria-label="Onboarding Questions"
            >
              {selectedFaqCat === 'Onboarding' && (
                <span className="faq-cat-active-overlay">
                  <span>Onboarding</span>
                </span>
              )}
            </button>

            {/* Category Tab 3: Documents */}
            <button
              type="button"
              className={`faq-hitbox-category faq-cat-documents ${selectedFaqCat === 'Documents' ? 'is-active' : ''}`}
              onClick={() => setSelectedFaqCat('Documents')}
              title="Documents Questions"
              aria-label="Documents Questions"
            >
              {selectedFaqCat === 'Documents' && (
                <span className="faq-cat-active-overlay">
                  <span>Documents</span>
                </span>
              )}
            </button>

            {/* Category Tab 4: Payments */}
            <button
              type="button"
              className={`faq-hitbox-category faq-cat-payments ${selectedFaqCat === 'Payments' ? 'is-active' : ''}`}
              onClick={() => setSelectedFaqCat('Payments')}
              title="Payments Questions"
              aria-label="Payments Questions"
            >
              {selectedFaqCat === 'Payments' && (
                <span className="faq-cat-active-overlay">
                  <span>Payments</span>
                </span>
              )}
            </button>

            {/* Category Tab 5: Account */}
            <button
              type="button"
              className={`faq-hitbox-category faq-cat-account ${selectedFaqCat === 'Account' ? 'is-active' : ''}`}
              onClick={() => setSelectedFaqCat('Account')}
              title="Account Questions"
              aria-label="Account Questions"
            >
              {selectedFaqCat === 'Account' && (
                <span className="faq-cat-active-overlay">
                  <span>Account</span>
                </span>
              )}
            </button>

            {/* Category Tab 6: Support */}
            <button
              type="button"
              className={`faq-hitbox-category faq-cat-support ${selectedFaqCat === 'Support' ? 'is-active' : ''}`}
              onClick={() => setSelectedFaqCat('Support')}
              title="Support Questions"
              aria-label="Support Questions"
            >
              {selectedFaqCat === 'Support' && (
                <span className="faq-cat-active-overlay">
                  <span>Support</span>
                </span>
              )}
            </button>

            {/* Accordion Row 0 (Already expanded in graphic by default) */}
            <button
              type="button"
              className="faq-hitbox-row faq-row-0"
              onClick={() => setOpenFaq(openFaq === 0 ? -1 : 0)}
              title="Toggle Question: Document Verification"
              aria-label="Toggle Question: Document Verification"
            />

            {/* Accordion Row 1: Joining Fee */}
            <button
              type="button"
              className="faq-hitbox-row faq-row-1"
              onClick={() => setOpenFaq(openFaq === 1 ? -1 : 1)}
              title="View Question: Joining Fee or Deposit"
              aria-label="View Question: Joining Fee or Deposit"
            />

            {/* Accordion Row 2: Driving Hours */}
            <button
              type="button"
              className="faq-hitbox-row faq-row-2"
              onClick={() => setOpenFaq(openFaq === 2 ? -1 : 2)}
              title="View Question: Driving Hours"
              aria-label="View Question: Driving Hours"
            />

            {/* Accordion Row 3: Receive Earnings */}
            <button
              type="button"
              className="faq-hitbox-row faq-row-3"
              onClick={() => setOpenFaq(openFaq === 3 ? -1 : 3)}
              title="View Question: Receive Earnings"
              aria-label="View Question: Receive Earnings"
            />

            {/* Dynamic Card Overlay when Item 1, 2, or 3 is opened */}
            {openFaq > 0 && faqs[openFaq] && (
              <div className="faq-answer-card-overlay">
                <div className="faq-answer-card-header">
                  <div className="faq-answer-header-left">
                    <div className="faq-answer-icon-wrap">
                      {openFaq === 1 && <IndianRupee size={22} />}
                      {openFaq === 2 && <Clock3 size={22} />}
                      {openFaq === 3 && <Wallet size={22} />}
                    </div>
                    <h3 className="faq-answer-card-question">{faqs[openFaq].q}</h3>
                  </div>
                  <button
                    type="button"
                    className="faq-answer-close-btn"
                    onClick={() => setOpenFaq(0)}
                    title="Close"
                    aria-label="Close"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="faq-answer-card-body">
                  <p className="faq-answer-card-text">{faqs[openFaq].a}</p>
                  <div className="faq-answer-protip-box">
                    <Check size={16} strokeWidth={3} />
                    <span><strong>Pro Tip:</strong> {faqs[openFaq].tip}</span>
                  </div>
                </div>

                <div className="faq-answer-card-footer">
                  <span className="faq-answer-footer-tag">CATEGORY: {faqs[openFaq].category}</span>
                  <button
                    type="button"
                    className="faq-answer-footer-btn"
                    onClick={onJoinClick}
                  >
                    <span>Register as Driver</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* Real Interactive Support CTA at bottom-right */}
            <button
              type="button"
              className="faq-hitbox-support"
              onClick={onJoinClick}
              title="Need more help? Chat with our support team"
              aria-label="Need more help? Chat with our support team"
            />

            {/* Left Stats Badges (Interactive hover feedback) */}
            <div className="faq-stats-hitbox faq-stats-top" title="Over 10,000 Verified Drivers" />
            <div className="faq-stats-hitbox faq-stats-mid" title="Rated 4.9 out of 5 Stars" />
            <div className="faq-stats-hitbox faq-stats-bot" title="100% Safe, Secure & Reliable" />
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
