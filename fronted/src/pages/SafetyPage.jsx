import React from 'react';
import {
  AlertTriangle,
  ArrowRight,
  Bell,
  Building2,
  Check,
  ChevronRight,
  Clock3,
  Coffee,
  Headphones,
  HeartHandshake,
  Lock,
  MapPin,
  Navigation,
  Phone,
  PhoneCall,
  Radio,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  UserCheck,
  X,
  Zap,
} from 'lucide-react';
import './pages.css';
import '../safety-hero-redesign.css';
import '../protocols-showcase-redesign.css';
import '../emergency-showcase-redesign.css';

const safetyFeatures = [
  {
    icon: ShieldAlert,
    title: 'One-Tap Emergency SOS',
    desc: 'An always-accessible red SOS beacon inside the GoRush Driver app. Tapping it instantly sends your live GPS coordinates to our 24/7 central control team and local emergency services.',
    tag: 'INSTANT DISPATCH',
  },
  {
    icon: UserCheck,
    title: 'Verified Passenger Profiles',
    desc: 'Every rider is required to authenticate with a verified phone number and digital ID. Riders with repeated cancellations or negative behavior are permanently blocked from booking.',
    tag: 'IDENTITY CHECKS',
  },
  {
    icon: Radio,
    title: 'Live Trip GPS Sharing',
    desc: 'With one tap, generate a private live-tracking web link that lets your family watch your route in real time, check your battery status, and see when your shift concludes.',
    tag: 'FAMILY ASSURANCE',
  },
  {
    icon: ShieldCheck,
    title: '₹5,00,000 Free Accidental Cover',
    desc: 'All active drivers are covered by an institutional group insurance policy at zero cost, covering medical emergencies, accidental injury, and emergency hospital bills.',
    tag: 'FINANCIAL SHIELD',
  },
  {
    icon: Headphones,
    title: '24/7 Local Language Support',
    desc: 'Whenever you encounter a route problem, difficult passenger, or vehicle issue, speak with trained local support specialists in Hindi, English, or regional languages.',
    tag: 'REAL HUMANS',
  },
  {
    icon: Lock,
    title: 'Night Escort & Safe Zones',
    desc: 'Designated well-lit partner fuel stations, GoRush hub rest stops, and 24-hour illuminated waiting bays across Indore for safe night-time breaks.',
    tag: 'NIGHT SAFETY',
  },
];

const safetyTips = [
  {
    icon: UserCheck,
    title: 'Confirm Passenger Name at Pickup',
    desc: 'Always verify the rider name shown on your GoRush screen before unlocking doors or starting the trip.',
    btnText: 'VERIFY RIDE',
  },
  {
    icon: Navigation,
    title: 'Keep Your Live GPS Active',
    desc: 'Ensure location services and 4G/5G mobile data remain enabled so your route is tracked continuously by dispatch.',
    btnText: 'STAY CONNECTED',
  },
  {
    icon: Coffee,
    title: 'Utilize Well-Lit Break Hubs',
    desc: 'Take rest breaks at designated partner petrol pumps and GoRush city hubs during late evening and night shifts.',
    btnText: 'REST. RECHARGE.',
  },
  {
    icon: AlertTriangle,
    title: 'Report Unruly Behavior Promptly',
    desc: 'If a passenger is intoxicated or disrespectful, conclude the ride in a safe public spot and report immediately via the app.',
    btnText: 'REPORT SAFELY',
  },
];


export default function SafetyPage({ onJoinClick }) {
  const [activeModal, setActiveModal] = React.useState(null);
  const [toastMsg, setToastMsg] = React.useState('');

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg((cur) => (cur === msg ? '' : cur));
    }, 3500);
  };

  return (
    <div className="subpage-wrap">
      {/* Safety Hero Section - 100% Handcrafted Web Component */}
      <section className="safety-showcase-section" id="safety-hero">
        <div className="safety-showcase-inner">
          <div className="safety-hero-badge">
            <ShieldCheck size={13} />
            <span>SAFETY & SECURITY FIRST</span>
          </div>
          <h1 className="safety-hero-title">
            Your security on every kilometer. <em>Zero compromise.</em>
          </h1>
          <p className="safety-hero-subtitle">
            Industry-leading safety infrastructure with physical response teams, ₹5,00,000 complimentary insurance, and 24/7 dedicated dispatch.
          </p>

          {/* 3 Clickable Modal Trigger Cards */}
          <div className="safety-interactive-cards-grid">
            {/* Card 1: Emergency Dispatch */}
            <div
              className="safety-modal-trigger-card"
              onClick={() => setActiveModal('emergency')}
              id="safety-card-emergency-btn"
            >
              <div>
                <div className="safety-trigger-card-top">
                  <div className="safety-trigger-icon-wrap">
                    <PhoneCall size={24} />
                  </div>
                  <span className="safety-trigger-status-badge">🟢 24/7 Live</span>
                </div>
                <h3 className="safety-trigger-title">Emergency Dispatch</h3>
                <p className="safety-trigger-desc">
                  Direct hotline to GoRush incident control and local law enforcement dispatch with &lt; 90s average response time.
                </p>
              </div>
              <div className="safety-trigger-action-row">
                <span>View Hotline Details</span>
                <ArrowRight size={14} />
              </div>
            </div>

            {/* Card 2: ₹5 Lakh Insurance */}
            <div
              className="safety-modal-trigger-card"
              onClick={() => setActiveModal('insurance')}
              id="safety-card-insurance-btn"
            >
              <div>
                <div className="safety-trigger-card-top">
                  <div className="safety-trigger-icon-wrap">
                    <Shield size={24} />
                  </div>
                  <span className="safety-trigger-status-badge">🛡️ Covered</span>
                </div>
                <h3 className="safety-trigger-title">₹5 Lakh Accident Cover</h3>
                <p className="safety-trigger-desc">
                  Automatic cashless hospitalization, trauma care across 2,400+ hospitals, and comprehensive driver protection.
                </p>
              </div>
              <div className="safety-trigger-action-row">
                <span>View Policy Summary</span>
                <ArrowRight size={14} />
              </div>
            </div>

            {/* Card 3: 1-Tap SOS */}
            <div
              className="safety-modal-trigger-card"
              onClick={() => setActiveModal('sos')}
              id="safety-card-sos-btn"
            >
              <div>
                <div className="safety-trigger-card-top">
                  <div className="safety-trigger-icon-wrap sos">
                    <ShieldAlert size={24} />
                  </div>
                  <span className="safety-trigger-status-badge red">🚨 Ready</span>
                </div>
                <h3 className="safety-trigger-title">1-Tap SOS Beacon</h3>
                <p className="safety-trigger-desc">
                  One press sends your live telemetry, speed, battery, and GPS coordinates to emergency dispatch marshals.
                </p>
              </div>
              <div className="safety-trigger-action-row" style={{ color: '#f87171' }}>
                <span>Run Signal Test</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </div>

          {/* Quick Badges Bar */}
          <div className="safety-quick-badges-bar">
            <button
              type="button"
              className="safety-badge-click-pill"
              onClick={() => showToast('🛡️ Verified Passengers: 100% ID & Phone verified riders prior to booking')}
            >
              <UserCheck size={16} />
              <span>Verified Passengers</span>
            </button>
            <button
              type="button"
              className="safety-badge-click-pill"
              onClick={() => showToast('📡 Real-Time Monitoring: 24/7 GPS route telemetry & off-course alerts')}
            >
              <Radio size={16} />
              <span>Real-Time Route Telemetry</span>
            </button>
            <button
              type="button"
              className="safety-badge-click-pill"
              onClick={() => showToast('🏥 Hospital Network: Cashless trauma care across 2,400+ partner hospitals')}
            >
              <Building2 size={16} />
              <span>2,400+ Hospital Network</span>
            </button>
          </div>
        </div>
      </section>

      {/* Real Interactive Modal: 24/7 Emergency Dispatch */}
      {activeModal === 'emergency' && (
        <div className="safety-active-modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="safety-active-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="safety-modal-close-btn"
              onClick={() => setActiveModal(null)}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="safety-modal-badge badge-green">
              <PhoneCall size={12} />
              <span>24/7 Rapid Incident Desk</span>
            </div>

            <h3 className="safety-modal-title">Emergency Dispatch Hotline</h3>
            <p className="safety-modal-desc">
              Direct, priority line to the GoRush Indore 24/7 safety command center. Immediate tie-up with local emergency services and hospital ambulances.
            </p>

            <div className="safety-modal-details-grid">
              <div className="safety-modal-stat-box">
                <div className="stat-box-label">Average Response Time</div>
                <div className="stat-box-val">&lt; 90 Seconds</div>
              </div>
              <div className="safety-modal-stat-box">
                <div className="stat-box-label">Police Dial 112</div>
                <div className="stat-box-val">Direct Integration</div>
              </div>
              <div className="safety-modal-stat-box">
                <div className="stat-box-label">Toll-Free Priority Line</div>
                <div className="stat-box-val">1800-467-8741</div>
              </div>
              <div className="safety-modal-stat-box">
                <div className="stat-box-label">Languages Supported</div>
                <div className="stat-box-val">Hindi, Malwi, English</div>
              </div>
            </div>

            <a
              href="tel:18004678741"
              className="safety-modal-primary-btn"
              id="safety-emergency-call-btn"
            >
              <PhoneCall size={18} />
              <span>Call Dispatch Desk Now (1800-467-8741)</span>
            </a>
          </div>
        </div>
      )}

      {/* Real Interactive Modal: ₹5 Lakh Accident Insurance */}
      {activeModal === 'insurance' && (
        <div className="safety-active-modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="safety-active-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="safety-modal-close-btn"
              onClick={() => setActiveModal(null)}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="safety-modal-badge badge-green">
              <ShieldCheck size={12} />
              <span>Institutional Safety Policy</span>
            </div>

            <h3 className="safety-modal-title">₹5,00,000 Driver Accidental Cover</h3>
            <p className="safety-modal-desc">
              Every driver-partner is enrolled in an institutional group policy at ₹0 cost from their first trip. Covers hospitalization, accidental damage, and critical medical support.
            </p>

            <div className="safety-modal-details-grid">
              <div className="safety-modal-stat-box">
                <div className="stat-box-label">Total Insurance Pool</div>
                <div className="stat-box-val">₹5,00,000</div>
              </div>
              <div className="safety-modal-stat-box">
                <div className="stat-box-label">Driver Cost</div>
                <div className="stat-box-val">₹0 / Month</div>
              </div>
              <div className="safety-modal-stat-box">
                <div className="stat-box-label">Cashless Hospitals</div>
                <div className="stat-box-val">2,400+ Centers</div>
              </div>
              <div className="safety-modal-stat-box">
                <div className="stat-box-label">Claim Processing</div>
                <div className="stat-box-val">24-Hour Express</div>
              </div>
            </div>

            <button
              type="button"
              className="safety-modal-primary-btn"
              onClick={() => {
                setActiveModal(null);
                onJoinClick();
              }}
              id="safety-insurance-join-btn"
            >
              <ShieldCheck size={18} />
              <span>Register as Driver to Activate Cover</span>
            </button>
          </div>
        </div>
      )}

      {/* Real Interactive Modal: 1-Tap SOS Beacon */}
      {activeModal === 'sos' && (
        <div className="safety-active-modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="safety-active-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="safety-modal-close-btn"
              onClick={() => setActiveModal(null)}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="safety-modal-badge badge-red">
              <ShieldAlert size={12} />
              <span>Live SOS Beacon System</span>
            </div>

            <h3 className="safety-modal-title">1-Tap Emergency SOS</h3>
            <p className="safety-modal-desc">
              Simulating driver SOS emergency protocol. In live trips, tapping this broadcasts high-precision telemetry and alerts nearest patrol units.
            </p>

            <div className="safety-sos-pulse-container">
              <div className="safety-sos-beacon-orb">
                <ShieldAlert size={34} />
              </div>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#991b1b', marginBottom: '4px' }}>
                BEACON ACTIVE • BROADCASTING
              </div>
              <div style={{ fontSize: '12px', color: '#7f1d1d', fontFamily: 'monospace' }}>
                GPS: 22.7196° N, 75.8577° E (Indore Control Mesh)
              </div>
            </div>

            <div className="safety-modal-details-grid">
              <div className="safety-modal-stat-box">
                <div className="stat-box-label">Telemetry Status</div>
                <div className="stat-box-val" style={{ color: '#15803d' }}>● Connected</div>
              </div>
              <div className="safety-modal-stat-box">
                <div className="stat-box-label">Nearest Patrol</div>
                <div className="stat-box-val">0.8 km Away</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="button"
                className="safety-modal-primary-btn btn-sos-trigger"
                onClick={() => {
                  showToast('🚨 Simulated Alert Sent: Dispatcher acknowledged signal.');
                  setActiveModal(null);
                }}
                id="safety-sos-confirm-btn"
              >
                <span>Confirm Test Signal</span>
              </button>
              <button
                type="button"
                className="safety-modal-primary-btn"
                style={{ background: '#e2ede0', color: '#164623', boxShadow: 'none' }}
                onClick={() => setActiveModal(null)}
                id="safety-sos-cancel-btn"
              >
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Quick Toast */}
      {toastMsg && (
        <div className="safety-quick-toast" role="status" aria-live="polite">
          <span className="safety-quick-toast-dot" />
          <span>{toastMsg}</span>
        </div>
      )}



      {/* Central Emergency Desk - 100% Handcrafted Web Component */}
      <section className="emergency-desk-section" id="emergency-desk">
        <div className="emergency-desk-inner">
          <div className="emergency-header-center">
            <div className="emergency-eyebrow-badge">
              <PhoneCall size={13} />
              <span>CENTRAL EMERGENCY DESK</span>
            </div>
            <h2 className="emergency-main-title">
              Help is always <em>one second away.</em>
            </h2>
            <p className="emergency-main-subtitle">
              Trained incident response officers stand by 24 hours a day, 7 days a week to support you during any on-road emergency.
            </p>
          </div>

          <div className="emergency-hotlines-grid">
            {/* Hotline 1 */}
            <a
              href="tel:1800467874"
              className="emergency-hotline-card"
              id="emergency-contact-sos-btn"
              onClick={() => showToast('📞 Connecting to GoRush Driver SOS Line: 1800-467-874')}
            >
              <div>
                <div className="emergency-card-top">
                  <div className="emergency-card-icon-wrap">
                    <PhoneCall size={24} />
                  </div>
                  <span className="emergency-live-indicator">🟢 24/7 Active</span>
                </div>
                <h3 className="emergency-hotline-title">GoRush Driver SOS Line</h3>
                <p className="emergency-hotline-desc">
                  Toll-free emergency helpline reserved exclusively for active GoRush driver partners.
                </p>
              </div>
              <div className="emergency-call-pill">
                <span>1800-467-874</span>
                <Phone size={15} />
              </div>
            </a>

            {/* Hotline 2 */}
            <a
              href="tel:112"
              className="emergency-hotline-card"
              id="emergency-contact-police-btn"
              onClick={() => showToast('🚨 Connecting to Direct Police Coordination: Dial 112')}
            >
              <div>
                <div className="emergency-card-top">
                  <div className="emergency-card-icon-wrap">
                    <ShieldAlert size={24} />
                  </div>
                  <span className="emergency-live-indicator">🟢 Police Tie-up</span>
                </div>
                <h3 className="emergency-hotline-title">Direct Police Dial 112</h3>
                <p className="emergency-hotline-desc">
                  Immediate connection with Madhya Pradesh police response units and PCR vans.
                </p>
              </div>
              <div className="emergency-call-pill">
                <span>Dial 112 / 100</span>
                <Phone size={15} />
              </div>
            </a>

            {/* Hotline 3 */}
            <a
              href="tel:+917314982200"
              className="emergency-hotline-card"
              id="emergency-contact-indore-btn"
              onClick={() => showToast('🏛️ Connecting to Indore Command Center: +91 731 498 2200')}
            >
              <div>
                <div className="emergency-card-top">
                  <div className="emergency-card-icon-wrap">
                    <Building2 size={24} />
                  </div>
                  <span className="emergency-live-indicator">🟢 Local Hub</span>
                </div>
                <h3 className="emergency-hotline-title">Indore Command Center</h3>
                <p className="emergency-hotline-desc">
                  Physical partner assistance desk located at Vijay Nagar, Indore for rapid dispatch.
                </p>
              </div>
              <div className="emergency-call-pill">
                <span>+91 731 498 2200</span>
                <Phone size={15} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Safety System Features Grid */}
      <section className="subpage-section alt-bg">
        <div className="subpage-container">
          <div className="subpage-section-header">
            <span className="section-tag">COMPREHENSIVE PROTECTION</span>
            <h2>
              The GoRush <em>safety architecture</em>
            </h2>
            <p>Every feature is engineered to give you and your loved ones complete peace of mind on the road.</p>
          </div>

          <div className="safety-features-grid">
            {safetyFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <div className="safety-card" key={f.title}>
                  <div className="safety-card-icon">
                    <Icon size={24} />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                  <span className="safety-pill-tag">{f.tag}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety Best Practices - 100% Handcrafted Web Component */}
      <section className="protocols-section-wrap" id="driver-protocols">
        <div className="protocols-inner-container">
          <div className="protocols-header-center">
            <div className="protocols-eyebrow-badge">
              <Sparkles size={13} />
              <span>DRIVER SAFETY BEST PRACTICES</span>
            </div>
            <h2 className="protocols-main-title">
              Road protocols for a <em>safe shift.</em>
            </h2>
            <p className="protocols-main-subtitle">
              Follow these simple golden rules every day to protect your safety, ratings, and peace of mind on the road.
            </p>
          </div>

          <div className="protocols-cards-grid">
            {/* Protocol 1 */}
            <div className="protocol-step-card">
              <div>
                <div className="protocol-card-top">
                  <span className="protocol-card-num">01</span>
                  <div className="protocol-card-icon">
                    <UserCheck size={22} />
                  </div>
                </div>
                <h3 className="protocol-card-title">Confirm Passenger Name</h3>
                <p className="protocol-card-desc">
                  Always confirm the passenger's name and OTP before unlocking the vehicle doors or starting the trip meter.
                </p>
              </div>
              <button
                type="button"
                className="protocol-action-pill-btn"
                onClick={() => showToast('🛡️ Verified Rider Check: Match booking details on GoRush app screen')}
              >
                <span>Verify Rider Check</span>
                <Check size={14} />
              </button>
            </div>

            {/* Protocol 2 */}
            <div className="protocol-step-card">
              <div>
                <div className="protocol-card-top">
                  <span className="protocol-card-num">02</span>
                  <div className="protocol-card-icon">
                    <Radio size={22} />
                  </div>
                </div>
                <h3 className="protocol-card-title">Keep Live GPS Active</h3>
                <p className="protocol-card-desc">
                  Ensure mobile data and high-accuracy GPS stay active so our telemetry system can monitor your route continuously.
                </p>
              </div>
              <button
                type="button"
                className="protocol-action-pill-btn"
                onClick={() => showToast('📡 Telemetry Active: Real-time route tracking enabled')}
              >
                <span>Stay Connected</span>
                <Check size={14} />
              </button>
            </div>

            {/* Protocol 3 */}
            <div className="protocol-step-card">
              <div>
                <div className="protocol-card-top">
                  <span className="protocol-card-num">03</span>
                  <div className="protocol-card-icon">
                    <Coffee size={22} />
                  </div>
                </div>
                <h3 className="protocol-card-title">Utilize Well-Lit Break Hubs</h3>
                <p className="protocol-card-desc">
                  Take rest breaks only at designated 24/7 GoRush partner petrol stations, cafes, and verified illuminated parking hubs.
                </p>
              </div>
              <button
                type="button"
                className="protocol-action-pill-btn"
                onClick={() => showToast('☕ Rest & Recharge: Partner lounges available across Indore city routes')}
              >
                <span>Rest & Recharge</span>
                <Check size={14} />
              </button>
            </div>
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
            Drive with the confidence you deserve.
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
            Join the platform that treats your safety and security as priority number one.
          </p>
          <button
            type="button"
            className="final-cta-action-btn"
            onClick={onJoinClick}
            id="safety-final-cta-btn"
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
