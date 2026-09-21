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
      {/* Safety Hero Section - Clean Showcase Banner with Real Active Buttons */}
      <section className="safety-showcase-section" id="safety-hero">
        <div className="safety-showcase-wrapper">
          <img
            src="/safety-showcase-sep21.png"
            alt="Your security on every kilometer. Zero compromise - GoRush Safety"
            className="safety-showcase-img"
          />

          {/* Real Interactive Card 1: 24/7 Emergency Dispatch */}
          <button
            type="button"
            className="safety-interactive-card safety-card-emergency"
            onClick={() => setActiveModal('emergency')}
            title="Open 24/7 Emergency Dispatch Hotline"
            id="safety-card-emergency-btn"
            aria-label="24/7 Emergency Dispatch"
          >
            <span className="safety-card-live-indicator">
              <span className="live-dot" /> 24/7 Live
            </span>
          </button>

          {/* Real Interactive Card 2: ₹5 Lakh Accident Insurance */}
          <button
            type="button"
            className="safety-interactive-card safety-card-insurance"
            onClick={() => setActiveModal('insurance')}
            title="View ₹5 Lakh Accident Insurance Details"
            id="safety-card-insurance-btn"
            aria-label="₹5 Lakh Accident Insurance"
          >
            <span className="safety-card-live-indicator">
              <span className="live-dot" /> Covered
            </span>
          </button>

          {/* Real Interactive Card 3: 1-Tap SOS Beacon */}
          <button
            type="button"
            className="safety-interactive-card safety-card-sos"
            onClick={() => setActiveModal('sos')}
            title="Activate 1-Tap SOS Beacon Test"
            id="safety-card-sos-btn"
            aria-label="1-Tap SOS Beacon"
          >
            <span className="safety-card-live-indicator">
              <span className="live-dot" style={{ background: '#ef4444', boxShadow: '0 0 8px #ef4444' }} /> Ready
            </span>
          </button>

          {/* Right Floating Badge 1: Verified Passengers */}
          <button
            type="button"
            className="safety-floating-badge-hitbox safety-badge-passengers"
            onClick={() => showToast('🛡️ Verified Passengers: 100% ID & Phone verified riders prior to booking')}
            title="Verified Passengers: 100% ID Verified"
            id="safety-badge-passengers-btn"
            aria-label="Verified Passengers"
          />

          {/* Right Floating Badge 2: Real-time Monitoring */}
          <button
            type="button"
            className="safety-floating-badge-hitbox safety-badge-monitoring"
            onClick={() => showToast('📡 Real-Time Monitoring: 24/7 GPS route telemetry & off-course alerts')}
            title="Real-time Monitoring: 24/7 Route Watch"
            id="safety-badge-monitoring-btn"
            aria-label="Real-time Monitoring"
          />

          {/* Right Floating Badge 3: Hospital Network Support */}
          <button
            type="button"
            className="safety-floating-badge-hitbox safety-badge-hospitals"
            onClick={() => showToast('🏥 Hospital Network: Cashless trauma care across 2,400+ partner hospitals')}
            title="Hospital Network Support: Cashless Coverage"
            id="safety-badge-hospitals-btn"
            aria-label="Hospital Network Support"
          />

          {/* Left Signboard: Drive Earn Grow Together */}
          <button
            type="button"
            className="safety-signboard-hitbox"
            onClick={onJoinClick}
            title="Drive • Earn • Grow Together — Join GoRush Today"
            id="safety-signboard-join-btn"
            aria-label="Join GoRush Today"
          />

          {/* Center Eyebrow Pill: SAFETY & SECURITY FIRST */}
          <button
            type="button"
            className="safety-eyebrow-hitbox"
            onClick={() => showToast('✅ GoRush Standard: Institutional grade safety on every ride')}
            title="Safety & Security First - GoRush Quality Seal"
            id="safety-eyebrow-btn"
            aria-label="Safety & Security First"
          />
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



      {/* Central Emergency Desk - Clean Showcase Banner with Real Active Buttons */}
      <section className="emergency-showcase-banner-section" id="emergency-desk">
        <div className="emergency-showcase-wrapper">
          <img
            src="/emergency-showcase-sep21.png"
            alt="Central Emergency Desk - Help is always one second away - GoRush"
            className="emergency-showcase-img"
          />

          {/* Real Interactive Contact Row 1: GoRush Driver SOS Line */}
          <a
            href="tel:1800467874"
            className="emergency-interactive-row emergency-row-1"
            onClick={() => showToast('📞 Connecting to GoRush Driver SOS Line: 1800-467-874')}
            title="Call GoRush 24/7 Driver SOS Line (1800-467-874)"
            id="emergency-contact-sos-btn"
            aria-label="Call GoRush 24/7 Driver SOS Line"
          />

          {/* Real Interactive Contact Row 2: Direct Police Coordination */}
          <a
            href="tel:112"
            className="emergency-interactive-row emergency-row-2"
            onClick={() => showToast('🚨 Connecting to Direct Police Coordination: Dial 112 / 100')}
            title="Call Direct Police Coordination (112 / 100)"
            id="emergency-contact-police-btn"
            aria-label="Call Direct Police Coordination"
          />

          {/* Real Interactive Contact Row 3: Indore Safety Command Center */}
          <a
            href="tel:+917314982200"
            className="emergency-interactive-row emergency-row-3"
            onClick={() => showToast('🏛️ Connecting to Indore Safety Command Center: +91 731 498 2200')}
            title="Call Indore Safety Command Center (+91 731 498 2200)"
            id="emergency-contact-indore-btn"
            aria-label="Call Indore Safety Command Center"
          />

          {/* Real Interactive Button: DRIVE SAFE WITH GoRush Banner */}
          <button
            type="button"
            className="emergency-drive-safe-card"
            onClick={onJoinClick}
            title="Drive Safe with GoRush - Join as Partner"
            id="emergency-drive-safe-btn"
            aria-label="Drive Safe with GoRush"
          />

          {/* Real Interactive Micro-Feature Pills */}
          <button
            type="button"
            className="emergency-micro-pill-hitbox emergency-pill-1"
            onClick={() => showToast('⏱️ 24/7 Monitoring: Continuous telemetry & speed anomaly tracking')}
            title="24/7 Monitoring Active"
            id="emergency-pill-1-btn"
            aria-label="24/7 Monitoring"
          />
          <button
            type="button"
            className="emergency-micro-pill-hitbox emergency-pill-2"
            onClick={() => showToast('⚡ Quick Response: Incident officers dispatched in < 90 seconds')}
            title="Quick Response Desk"
            id="emergency-pill-2-btn"
            aria-label="Quick Response"
          />
          <button
            type="button"
            className="emergency-micro-pill-hitbox emergency-pill-3"
            onClick={() => showToast('🛡️ Your Safety: Highest rated driver protection network in MP')}
            title="Your Safety Our Priority"
            id="emergency-pill-3-btn"
            aria-label="Your Safety Our Priority"
          />

          {/* Eyebrow Pill */}
          <button
            type="button"
            className="emergency-eyebrow-hitbox"
            onClick={() => showToast('🏢 Central Emergency Desk: 24/7 Command Center, Indore HQ')}
            title="Central Emergency Desk"
            id="emergency-eyebrow-btn"
            aria-label="Central Emergency Desk"
          />

          {/* Right Floating Badges */}
          <button
            type="button"
            className="emergency-right-badge-hitbox emergency-badge-alone"
            onClick={() => showToast('📍 Always Connected: Live GPS location sharing for your peace of mind')}
            title="You're never alone on the road"
            id="emergency-badge-alone-btn"
            aria-label="You're never alone on the road"
          />
          <button
            type="button"
            className="emergency-right-badge-hitbox emergency-badge-support"
            onClick={() => showToast('👥 Real People Real Support: Trained safety officers on 24/7 watch')}
            title="Real People Real Support"
            id="emergency-badge-support-btn"
            aria-label="Real People Real Support"
          />

          {/* Smartphone Showcase */}
          <button
            type="button"
            className="emergency-smartphone-hitbox"
            onClick={onJoinClick}
            title="GoRush Driver App - Safety Always On"
            id="emergency-smartphone-btn"
            aria-label="GoRush Driver App"
          />

          {/* Bottom Trust Badges */}
          <button
            type="button"
            className="emergency-trust-strip-hitbox emergency-trust-1"
            onClick={() => showToast('🤝 Supporting Drivers: Dedicated support on every journey')}
            title="Supporting Drivers"
            aria-label="Supporting Drivers"
          />
          <button
            type="button"
            className="emergency-trust-strip-hitbox emergency-trust-2"
            onClick={() => showToast('🌱 Safer Communities: Promoting safe travels across Central India')}
            title="Safer Communities"
            aria-label="Safer Communities"
          />
          <button
            type="button"
            className="emergency-trust-strip-hitbox emergency-trust-3"
            onClick={() => showToast('✨ Responsible Mobility: Safe, professional, and reliable')}
            title="Responsible Mobility"
            aria-label="Responsible Mobility"
          />
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

      {/* Safety Best Practices for Drivers - Clean Showcase Banner with Real Active Buttons */}
      <section className="protocols-showcase-banner-section" id="driver-protocols">
        <div className="protocols-showcase-wrapper">
          <img
            src="/protocols-showcase-sep21.png"
            alt="Driver safety best practices - Road Protocols - GoRush"
            className="protocols-showcase-img"
          />

          {/* Interactive Card 01: Confirm Passenger Name at Pickup */}
          <button
            type="button"
            className="protocols-interactive-card protocols-card-1"
            onClick={() => showToast('🛡️ Protocol 1: Always verify Rider OTP & Profile Name before trip start')}
            title="Protocol 1: Confirm Passenger Name at Pickup"
            id="protocol-card-1-btn"
            aria-label="Confirm Passenger Name at Pickup"
          />
          <button
            type="button"
            className="protocols-action-btn-hitbox protocols-btn-1"
            onClick={(e) => {
              e.stopPropagation();
              showToast('🛡️ Verified Rider Check: Match booking details on GoRush app screen');
            }}
            title="Verify Ride Protocol"
            id="protocol-action-1-btn"
            aria-label="Verify Ride"
          />

          {/* Interactive Card 02: Keep Your Live GPS Active */}
          <button
            type="button"
            className="protocols-interactive-card protocols-card-2"
            onClick={() => showToast('📡 Protocol 2: Keep 4G/5G mobile data & high-accuracy GPS turned ON')}
            title="Protocol 2: Keep Your Live GPS Active"
            id="protocol-card-2-btn"
            aria-label="Keep Your Live GPS Active"
          />
          <button
            type="button"
            className="protocols-action-btn-hitbox protocols-btn-2"
            onClick={(e) => {
              e.stopPropagation();
              showToast('📡 Telemetry Active: Real-time route tracking enabled');
            }}
            title="Stay Connected Protocol"
            id="protocol-action-2-btn"
            aria-label="Stay Connected"
          />

          {/* Interactive Card 03: Utilize Well-Lit Break Hubs */}
          <button
            type="button"
            className="protocols-interactive-card protocols-card-3"
            onClick={() => showToast('☕ Protocol 3: Take breaks at designated 24/7 lit GoRush Partner Hubs')}
            title="Protocol 3: Utilize Well-Lit Break Hubs"
            id="protocol-card-3-btn"
            aria-label="Utilize Well-Lit Break Hubs"
          />
          <button
            type="button"
            className="protocols-action-btn-hitbox protocols-btn-3"
            onClick={(e) => {
              e.stopPropagation();
              showToast('☕ Rest & Recharge: Partner lounges available across Indore city routes');
            }}
            title="Rest & Recharge Hubs"
            id="protocol-action-3-btn"
            aria-label="Rest. Recharge."
          />

          {/* Interactive Card 04: Report Unruly Behavior Promptly */}
          <button
            type="button"
            className="protocols-interactive-card protocols-card-4"
            onClick={() => showToast('⚠️ Protocol 4: Immediately report unruly riders with zero penalty on your score')}
            title="Protocol 4: Report Unruly Behavior Promptly"
            id="protocol-card-4-btn"
            aria-label="Report Unruly Behavior Promptly"
          />
          <button
            type="button"
            className="protocols-action-btn-hitbox protocols-btn-4"
            onClick={(e) => {
              e.stopPropagation();
              showToast('⚠️ Incident Logged: GoRush Incident Team stands by all driver partners');
            }}
            title="Report Safely Protocol"
            id="protocol-action-4-btn"
            aria-label="Report Safely"
          />

          {/* Left Signboard: PEOPLE MOVE BETTER TOGETHER */}
          <button
            type="button"
            className="protocols-signboard-hitbox"
            onClick={onJoinClick}
            title="People Move Better Together — Join GoRush Community"
            id="protocols-signboard-btn"
            aria-label="Join GoRush Community"
          />

          {/* Center Eyebrow: ROAD PROTOCOLS */}
          <button
            type="button"
            className="protocols-eyebrow-hitbox"
            onClick={() => showToast('🛣️ Standard Operating Road Safety Protocols for All Drivers')}
            title="Road Protocols"
            id="protocols-eyebrow-btn"
            aria-label="Road Protocols"
          />

          {/* Bottom Quote Bar */}
          <button
            type="button"
            className="protocols-quote-hitbox"
            onClick={() => showToast('✨ "Your safety drives a brighter tomorrow." — GoRush')}
            title="GoRush Safety Motto"
            id="protocols-quote-btn"
            aria-label="GoRush Safety Motto"
          />

          {/* Right Map Pin */}
          <button
            type="button"
            className="protocols-right-pin-hitbox"
            onClick={() => showToast('📍 Indore Safety Network: 100% city route coverage')}
            title="Indore Safety Coverage"
            id="protocols-pin-btn"
            aria-label="Indore Safety Coverage"
          />
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
