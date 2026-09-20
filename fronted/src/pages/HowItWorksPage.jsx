import React, { useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Bike,
  BarChart3,
  CarFront,
  Check,
  ChevronDown,
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
  },
  {
    q: 'Is there any joining fee or security deposit?',
    a: 'Absolutely not. GoRush does not charge any upfront joining fee, kit fee, or security deposit. You can register and test the platform completely free.',
    icon: IndianRupee,
  },
  {
    q: 'Can I choose my own driving hours?',
    a: 'Yes, 100%. You have total freedom. Turn the app online whenever you want to drive, and switch offline when you want to take a break or spend time with family.',
    icon: Clock3,
  },
  {
    q: 'How and when do I receive my earnings?',
    a: 'Trip earnings are settled directly to your UPI ID or bank account every single day. For cash rides, you collect the fare directly from the passenger with zero delay.',
    icon: Wallet,
  },
];


export default function HowItWorksPage({ onJoinClick }) {
  const [selectedVehicle, setSelectedVehicle] = useState('bike');
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="subpage-wrap">
      {/* HOW IT WORKS / ONBOARDING - NEW CHATGPT REDESIGN */}
      <section className="new-onboarding-section" id="how-it-works">
        {/* Top Navigation */}
        <div className="new-onboarding-nav">
          <div className="new-onboarding-logo">
            <User size={16} color="#3C5935" />
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
            <h1 className="new-hero-headline">
              <div className="new-headline-dark">Your next chapter</div>
              <div className="new-headline-green">
                starts here.
                <svg className="new-headline-underline" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="#5A8545" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
            </h1>
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

      {/* Vehicle Eligibility Requirements - Exact Match to ChatGPT Showcase: https://chatgpt.com/s/m_6aa3c20857348191945d87863dbf3615 */}
      <section className="vehicle-criteria-section-wrap">
        <div className="vehicle-scenery-left" aria-hidden="true">
          <img src="/vehicle-scenery-left.webp" alt="" />
        </div>
        <div className="vehicle-scenery-right" aria-hidden="true">
          <img src="/vehicle-scenery-right.webp" alt="" />
        </div>

        <div className="vehicle-inner-container">
          <div className="vehicle-eyebrow-pill">
            <CarFront size={14} />
            <span>VEHICLE & CRITERIA</span>
          </div>

          <h2 className="vehicle-headline">
            What do you need
            <span className="vehicle-script-wrap">
              <em className="vehicle-headline-script">to drive?</em>
              <svg className="vehicle-swoosh-svg" viewBox="0 0 170 12" fill="none" aria-hidden="true">
                <path d="M 6 7 Q 85 12 164 4" stroke="#44772b" strokeWidth="2.8" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          <p className="vehicle-subtitle">
            Select your vehicle category to view the checklist of required documents.
          </p>

          <div className="vehicle-tabs-row">
            <button
              type="button"
              className={`vehicle-tab-btn ${selectedVehicle === 'bike' ? 'active' : ''}`}
              onClick={() => setSelectedVehicle('bike')}
            >
              <Bike size={18} />
              <span>Bike / Scooter</span>
            </button>
            <button
              type="button"
              className={`vehicle-tab-btn ${selectedVehicle === 'auto' ? 'active' : ''}`}
              onClick={() => setSelectedVehicle('auto')}
            >
              <Navigation size={18} />
              <span>Auto Rickshaw</span>
            </button>
            <button
              type="button"
              className={`vehicle-tab-btn ${selectedVehicle === 'cab' ? 'active' : ''}`}
              onClick={() => setSelectedVehicle('cab')}
            >
              <CarFront size={18} />
              <span>Cab / Taxi</span>
            </button>
          </div>

          <div className="vehicle-showcase-card">
            <div className="vehicle-summary-subcard">
              <div className="vehicle-icon-circle">
                {selectedVehicle === 'bike' && <Bike size={28} />}
                {selectedVehicle === 'auto' && <Navigation size={28} />}
                {selectedVehicle === 'cab' && <CarFront size={28} />}
              </div>
              <h3 className="vehicle-summary-title">{vehicleRequirements[selectedVehicle].badgeTitle}</h3>
              <div className="vehicle-summary-subtitle">{vehicleRequirements[selectedVehicle].badgeSub}</div>
              <p className="vehicle-summary-desc">{vehicleRequirements[selectedVehicle].desc}</p>
              <div className="vehicle-safe-badge">
                <div className="vehicle-check-circle" style={{ width: 18, height: 18 }}>
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>{vehicleRequirements[selectedVehicle].safeText}</span>
              </div>
            </div>

            <div className="vehicle-checklist-col">
              <div className="vehicle-checklist-header">
                <span className="vehicle-checklist-kicker">DOCUMENT CHECKLIST</span>
                <div className="vehicle-mandatory-badge">
                  <Check size={13} strokeWidth={2.8} />
                  <span>All documents are mandatory</span>
                </div>
              </div>

              <ul className="vehicle-checklist-list">
                {vehicleRequirements[selectedVehicle].items.map((item) => (
                  <li key={item} className="vehicle-checklist-item">
                    <div className="vehicle-check-circle">
                      <Check size={13} strokeWidth={2.8} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="vehicle-bottom-ticker">
            <span>PEOPLE • SAFETY • BETTER JOURNEYS</span>
            <span className="vehicle-ticker-line" />
          </div>
        </div>
      </section>

      {/* Driver FAQs Redesign matching ChatGPT Showcase */}
      <section className="faq-showcase-section-wrap">
        {/* Scenic Wings */}
        <div className="faq-scenery-left" aria-hidden="true">
          <img src="/faq-scenery-left.webp" alt="" />
        </div>
        <div className="faq-scenery-right" aria-hidden="true">
          <img src="/faq-scenery-right.webp" alt="" />
        </div>

        <div className="faq-inner-container">
          <div className="faq-header">
            <div className="faq-eyebrow-pill">
              <MessageSquare size={13} />
              <span>COMMON QUESTIONS</span>
            </div>
            <h2 className="faq-headline">
              <span>Got questions?</span>
              <span className="faq-headline-italic">
                We've got answers.
                <svg viewBox="0 0 170 14" fill="none" className="faq-headline-swoosh" aria-hidden="true">
                  <path d="M 4 8 Q 85 2 166 7" stroke="#729837" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="faq-subtitle">Clear details about onboarding, documents, payments, and support.</p>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((f, idx) => {
              const IconComp = f.icon;
              return (
                <div
                  className={`faq-accordion-item ${openFaq === idx ? 'active' : ''}`}
                  key={f.q}
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                >
                  <div className="faq-item-icon">
                    <IconComp size={22} />
                  </div>
                  <div className="faq-item-content">
                    <h3 className="faq-item-question">{f.q}</h3>
                    {openFaq === idx && <div className="faq-item-answer">{f.a}</div>}
                  </div>
                  <div className="faq-item-chevron-wrap">
                    <ChevronDown size={18} strokeWidth={2.5} className="faq-item-chevron-icon" />
                  </div>
                </div>
              );
            })}
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
