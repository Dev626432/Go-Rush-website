import React from 'react';
import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronRight,
  Coffee,
  Headphones,
  HeartHandshake,
  Lock,
  MapPin,
  Navigation,
  PhoneCall,
  Radio,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Zap,
} from 'lucide-react';
import './pages.css';
import '../safety-hero-redesign.css';
import '../protocols-showcase-redesign.css';

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
  return (
    <div className="subpage-wrap">
      {/* Safety Hero Section - Exact Match to ChatGPT Showcase: https://chatgpt.com/s/m_6aa39d0ac2288191a55abcc2f5b72965 */}
      <section className="safety-hero-v2-wrap">
        {/* Left Scenery Wing (Radar, Location Pin, Skyline & 'Safer Rides Happier Tomorrows') */}
        <div className="safety-v2-scenery-left" aria-hidden="true">
          <img src="/safety-scenery-left.webp" alt="" />
        </div>

        {/* Right Scenery Wing (Highway, Skyline, 'DRIVE • EARN • GROW' & 'Every Ride Counts...') */}
        <div className="safety-v2-scenery-right" aria-hidden="true">
          <img src="/safety-scenery-right.webp" alt="" />
        </div>

        <div className="safety-v2-center-container">
          {/* Eyebrow Badge */}
          <div className="safety-v2-eyebrow">
            <ShieldCheck size={14} />
            <span>SAFETY & SECURITY FIRST</span>
          </div>

          {/* Headline */}
          <h1 className="safety-v2-headline">
            <span className="safety-v2-headline-main">Your security on every</span>
            <span className="safety-v2-headline-main">kilometer.</span>
            <span className="safety-v2-script-wrap">
              <em className="safety-v2-headline-script">Zero compromise.</em>
              <svg className="safety-v2-swoosh-svg" viewBox="0 0 280 14" fill="none" aria-hidden="true">
                <path d="M 8 8 Q 140 14 270 5" stroke="#5f8a32" strokeWidth="2.8" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="safety-v2-lead-desc">
            Driving should never feel uncertain. GoRush surrounds you with an institutional safety net,
            24/7 rapid emergency dispatch, verified passenger protocols, and full medical insurance.
          </p>

          {/* 3 Stat / Feature Pills Row */}
          <div className="safety-v2-pills-row">
            <div className="safety-v2-stat-pill">
              <div className="safety-v2-icon-circle">
                <PhoneCall size={14} />
              </div>
              <span>24/7 Emergency dispatch</span>
            </div>

            <div className="safety-v2-stat-pill">
              <div className="safety-v2-icon-circle">
                <ShieldCheck size={14} />
              </div>
              <span>₹5 Lakh accident insurance</span>
            </div>

            <div className="safety-v2-stat-pill">
              <div className="safety-v2-icon-circle">
                <ShieldAlert size={14} />
              </div>
              <span>1-Tap SOS beacon</span>
            </div>
          </div>

          {/* Bottom Ticker */}
          <div className="safety-v2-bottom-ticker">
            <span className="safety-v2-ticker-line" />
            <span>PEOPLE • SAFETY • BETTER JOURNEYS</span>
            <span className="safety-v2-ticker-line" />
          </div>
        </div>
      </section>



      {/* Emergency Dispatch Banner */}
      <section className="subpage-section">
        <div className="subpage-container">
          <div className="safety-dispatch-banner">
            <div className="safety-dispatch-content">
              <span
                style={{
                  fontFamily: 'DM Mono',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  color: '#d4ef62',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '10px',
                }}
              >
                CENTRAL EMERGENCY DESK
              </span>
              <h3>
                Help is always <span>one second away.</span>
              </h3>
              <p>
                Our central command monitors flagged routes, sudden stops, and distress beacons around the clock.
                If anything feels wrong, our dedicated security officers respond immediately.
              </p>
            </div>

            <div className="safety-hotlines-box">
              <div className="safety-hotline-item">
                <span>GoRush 24/7 Driver SOS Line</span>
                <strong>1800-467-874</strong>
              </div>
              <div className="safety-hotline-item">
                <span>Direct Police Coordination</span>
                <strong>112 / 100</strong>
              </div>
              <div className="safety-hotline-item">
                <span>Indore Safety Command Center</span>
                <strong>+91 731 498 2200</strong>
              </div>
            </div>
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

      {/* Safety Best Practices for Drivers - Exact Match to ChatGPT Showcase: https://chatgpt.com/s/m_6aa3bcfd65288191aa4786c82fba3400 */}
      <section className="protocols-showcase-section-wrap">
        {/* Scenic Left Backdrop (Winding Road, Skyline & "Safe Drivers Stronger Communities") */}
        <div className="protocols-scenery-left" aria-hidden="true">
          <img src="/protocols-scenery-left.webp" alt="" />
        </div>

        {/* Scenic Right Backdrop (Signpost, Skyline & "Every Ride Counts") */}
        <div className="protocols-scenery-right" aria-hidden="true">
          <img src="/protocols-scenery-right.webp" alt="" />
        </div>

        <div className="protocols-inner-container">
          {/* Eyebrow Badge */}
          <div className="protocols-eyebrow-pill">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              aria-hidden="true"
            >
              <path d="M4 19L8 5" strokeLinecap="round" />
              <path d="M20 19L16 5" strokeLinecap="round" />
              <path d="M12 7V9" strokeLinecap="round" />
              <path d="M12 15V17" strokeLinecap="round" />
            </svg>
            <span>ROAD PROTOCOLS</span>
          </div>

          {/* Headline */}
          <h2 className="protocols-headline">
            Driver safety
            <span className="protocols-script-wrap">
              <em className="protocols-headline-script">best practices</em>
              <svg className="protocols-swoosh-svg" viewBox="0 0 230 12" fill="none" aria-hidden="true">
                <path d="M 6 7 Q 115 12 224 4" stroke="#5d8932" strokeWidth="2.8" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          <p className="protocols-subtitle">
            Simple daily habits recommended by our safety enforcement team.
          </p>

          {/* 4 Protocol Cards Grid */}
          <div className="protocols-cards-grid">
            {safetyTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div className="protocols-card" key={tip.title}>
                  <div className="protocols-card-icon-circle">
                    <TipIcon size={22} />
                  </div>
                  <h3 className="protocols-card-title">{tip.title}</h3>
                  <p className="protocols-card-desc">{tip.desc}</p>
                  <button type="button" className="protocols-card-chip-btn">
                    <span>{tip.btnText}</span>
                    <ArrowRight size={13} />
                  </button>
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
