import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Bike,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  FileCheck2,
  Globe2,
  Headphones,
  IndianRupee,
  Menu,
  Navigation,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  X,
  Zap,
} from 'lucide-react';
import './website.css';
import './hero-video.css';
import './feature-motion.css';
import './feature-latest.css';
import './feature-polish.css';
import './feature-theme.css';
import './loader.css';

const featureGroups = [
  {
    icon: Navigation,
    eyebrow: 'MOVE SMART',
    title: 'Every ride, mapped with confidence.',
    text: 'Live GPS, traffic-aware routes and clear trip status keep every pickup and drop-off calm, quick and predictable.',
    points: ['Live driver tracking', 'Pickup & destination navigation', 'Real-time ETA and re-routing'],
  },
  {
    icon: Banknote,
    eyebrow: 'EARN CLEARLY',
    title: 'The fare is yours to understand.',
    text: 'From estimated fare to commission and tips, GoRush keeps the full earning story visible for every ride.',
    points: ['Cash, UPI, wallet and online payments', 'Daily, weekly and monthly earnings', 'Fast payouts and incentive bonuses'],
  },
  {
    icon: ShieldCheck,
    eyebrow: 'DRIVE SAFELY',
    title: 'Support that stays close.',
    text: 'Emergency contacts, trip sharing and a 24/7 safety team are built into the journey when you need them.',
    points: ['One-tap SOS support', 'Passenger reporting and monitoring', 'Secure identity and document checks'],
  },
];

const steps = [
  ['01', 'Create your profile', 'Register with your mobile number, verify OTP and tell us a little about yourself.'],
  ['02', 'Verify your documents', 'Upload your license, RC, insurance and bank details. Our team checks everything quickly.'],
  ['03', 'Start earning', 'Go online, accept your first ride and watch your earnings grow in real time.'],
];

const stats = [
  ['48k+', 'active drivers'],
  ['2.4M', 'rides completed'],
  ['4.8/5', 'driver rating'],
  ['24/7', 'safety support'],
];

export default function Website() {
  useEffect(() => {
    const artwork = document.querySelector('.hero-section');
    if (!artwork || artwork.querySelector('.hero-background-video')) return undefined;
    const video = document.createElement('video');
    video.className = 'hero-background-video';
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.setAttribute('aria-hidden', 'true');
    const source = document.createElement('source');
    source.src = 'https://res.cloudinary.com/zfpzqpwo/video/upload/v1788946371/image-to-video/i2v_4532ef3361d04aa0ac941e0535b2036b.mp4';
    source.type = 'video/mp4';
    video.appendChild(source);
    artwork.prepend(video);
    return () => video.remove();
  }, []);

  const [menu, setMenu] = useState(false);
  const [notice, setNotice] = useState('');
  const [formOpen, setFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 550);
      return () => clearTimeout(removeTimer);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  const action = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(''), 2600);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenu(false);
  };

  return (
    <div className="site-shell">
      {loading && (
        <div className={`gorush-preloader ${exiting ? 'fade-out' : ''}`}>
          <div className="loader-badge-container">
            <div className="loader-glow-ring" />
            <div className="loader-logo-wrapper">
              <img src="/gorush-logo.jpg" alt="GoRush" className="loader-logo-img" />
            </div>
          </div>
          <div className="loader-title">
            <span>Go</span>Rush
          </div>
          <div className="loader-tagline">Drive · Earn · Grow</div>
          <div className="loader-bar-wrap">
            <div className="loader-bar" />
          </div>
          <div className="loader-status">
            <span className="loader-dot" /> Now welcoming drivers in Indore
          </div>
        </div>
      )}

      {notice && (
        <div className="site-toast">
          <Check size={16} /> {notice}
        </div>
      )}

      <header className="site-header">
        <a className="site-brand" href="#top">
          <img src="/gorush-logo.jpg" alt="GoRush" className="brand-logo-img" />
          <div className="brand-title-wrap">
            <strong>GoRush</strong>
            <span className="brand-sub">DRIVE · EARN · GROW</span>
          </div>
        </a>
        <nav className={menu ? 'site-nav open' : 'site-nav'}>
          <button onClick={() => scrollTo('how-it-works')}>How it works</button>
          <button onClick={() => scrollTo('features')}>Why GoRush</button>
          <button onClick={() => scrollTo('earnings')}>Earnings</button>
          <button onClick={() => scrollTo('safety')}>Safety</button>
          <button
            className="mobile-cta"
            onClick={() => {
              setFormOpen(true);
              setMenu(false);
            }}
          >
            Become a driver <ArrowRight size={15} />
          </button>
        </nav>
        <div className="header-actions">
          <button className="header-login" onClick={() => action('Driver login is coming soon')}>
            Driver login
          </button>
          <button className="header-cta" onClick={() => setFormOpen(true)}>
            Join GoRush <ArrowRight size={15} />
          </button>
        </div>
        <button className="site-menu" onClick={() => setMenu(!menu)}>
          {menu ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span className="pulse-dot" /> Now welcoming drivers in Indore
            </div>
            <h1>
              More miles.
              <br />
              <em>More freedom.</em>
              <br />
              More you.
            </h1>
            <p>
              GoRush is the driver-first platform for people who want to move through the city on their own terms and earn
              fairly along the way.
            </p>
            <div className="hero-actions">
              <button className="primary-cta" onClick={() => setFormOpen(true)}>
                Start driving <ArrowRight size={17} />
              </button>
              <button className="play-cta" onClick={() => action('Watch the GoRush story')}>
                <span>
                  <Play size={13} fill="currentColor" />
                </span>{' '}
                See how it works
              </button>
            </div>
            <div className="hero-trust">
              <div className="trust-avatars">
                <i>AK</i>
                <i>RS</i>
                <i>NM</i>
                <b>+</b>
              </div>
              <span>
                <strong>48,000+ drivers</strong>
                <br />
                are already moving forward
              </span>
            </div>
          </div>

          <div className="hero-art">
            <div className="sun-disc" />
            <div className="city-lines" />
            <div className="hero-scooter">
              <Bike size={155} strokeWidth={1.1} />
            </div>
            <div className="route-stamp">
              <Navigation size={15} />
              <span>
                YOUR ROUTE
                <br />
                <strong>YOUR RULES</strong>
              </span>
            </div>
            <div className="earnings-float">
              <div className="float-icon">
                <TrendingUp size={16} />
              </div>
              <span>THIS MONTH</span>
              <strong>₹38,420</strong>
              <small>↑ 18.4% this week</small>
            </div>
            <div className="rating-float">
              <Star size={14} fill="currentColor" />
              <strong>4.92</strong>
              <span>driver rating</span>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="stats-strip">
          {stats.map(([number, label]) => (
            <div key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        {/* FEATURES */}
        <section className="intro-section" id="features">
          <div className="section-label">
            THE GORUSH DIFFERENCE <span />
          </div>
          <div className="intro-heading">
            <h2>
              Built around the person
              <br />
              <em>behind the wheel.</em>
            </h2>
            <p>
              You bring the drive. We bring the tools, trust and technology to make every working day feel more like yours.
            </p>
          </div>
          <div className="feature-grid">
            {featureGroups.map(({ icon: Icon, eyebrow, title, text, points }) => (
              <article className="feature-card" key={title}>
                <div className="feature-icon">
                  <Icon size={21} />
                </div>
                <span className="card-eyebrow">{eyebrow}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul>
                  {points.map((point) => (
                    <li key={point}>
                      <Check size={14} />
                      {point}
                    </li>
                  ))}
                </ul>
                <button onClick={() => action(`${eyebrow} details opened`)}>
                  Explore feature <ArrowRight size={15} />
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* EARNINGS */}
        <section className="earnings-section" id="earnings">
          <div className="earnings-copy">
            <div className="section-label light">
              YOUR WORK, YOUR WORTH <span />
            </div>
            <h2>
              Know what you earn.
              <br />
              <em>Keep what you can.</em>
            </h2>
            <p>
              No mystery math. See the fare, platform fee, tips, incentives and your final take-home amount before you commit to
              a ride.
            </p>
            <div className="earning-list">
              <div>
                <span className="list-number">01</span>
                <strong>Transparent fares</strong>
                <small>Every ride shows a clear estimate.</small>
              </div>
              <div>
                <span className="list-number">02</span>
                <strong>Weekly incentives</strong>
                <small>Hit targets, unlock bonuses and peak-hour boosts.</small>
              </div>
              <div>
                <span className="list-number">03</span>
                <strong>Flexible payouts</strong>
                <small>Withdraw to your bank or UPI when you need it.</small>
              </div>
            </div>
            <button className="light-cta" onClick={() => setFormOpen(true)}>
              See your earning potential <ArrowRight size={16} />
            </button>
          </div>
          <div className="earnings-card">
            <div className="earning-card-top">
              <span>DRIVER STATEMENT</span>
              <ChevronDown size={16} />
            </div>
            <div className="earning-period">
              September 2026 <span>Week 2</span>
            </div>
            <div className="big-amount">
              ₹12,840<small>.50</small>
            </div>
            <div className="amount-change">
              <TrendingUp size={14} /> 18.4% compared with last week
            </div>
            <div className="earning-bars">
              {[
                ['M', '45'],
                ['T', '68'],
                ['W', '52'],
                ['T', '80'],
                ['F', '93'],
                ['S', '70'],
                ['S', '56'],
              ].map(([day, height], index) => (
                <div key={`${day}-${index}`}>
                  <i style={{ height: `${height}%` }} />
                  <span>{day}</span>
                </div>
              ))}
            </div>
            <div className="card-divider" />
            <div className="earning-total">
              <span>Net driver earnings</span>
              <strong>₹10,552</strong>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="steps-section" id="how-it-works">
          <div className="section-label">
            GET ON THE ROAD <span />
          </div>
          <div className="intro-heading">
            <h2>
              Three steps to your
              <br />
              <em>next chapter.</em>
            </h2>
            <p>Getting started is designed to be simple. You stay in control from the first tap.</p>
          </div>
          <div className="steps-grid">
            {steps.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <div className="step-line" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SAFETY */}
        <section className="safety-section" id="safety">
          <div className="safety-visual">
            <div className="safety-ring ring-one" />
            <div className="safety-ring ring-two" />
            <div className="safety-center">
              <ShieldCheck size={42} />
              <span>24/7</span>
              <small>SAFETY TEAM</small>
            </div>
            <div className="safety-chip chip-one">
              <BadgeCheck size={15} /> Identity verified
            </div>
            <div className="safety-chip chip-two">
              <Navigation size={15} /> Trip shared
            </div>
            <div className="safety-chip chip-three">
              <Headphones size={15} /> Live support
            </div>
          </div>
          <div className="safety-copy">
            <div className="section-label">
              WE HAVE YOUR BACK <span />
            </div>
            <h2>
              Confidence is
              <br />
              <em>part of every ride.</em>
            </h2>
            <p>
              From identity checks before your first ride to an always-on safety team, GoRush is built so you can focus on the
              road ahead.
            </p>
            <div className="safety-points">
              <div>
                <ShieldCheck size={19} />
                <span>
                  <strong>Every driver verified</strong>
                  <small>Documents and identity checked before you go online.</small>
                </span>
              </div>
              <div>
                <Users size={19} />
                <span>
                  <strong>Trip sharing built in</strong>
                  <small>Keep your trusted contacts close to every journey.</small>
                </span>
              </div>
              <div>
                <Zap size={19} />
                <span>
                  <strong>Help in one tap</strong>
                  <small>SOS support and incident reporting, whenever you need it.</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <section className="quote-section">
          <div className="quote-mark">“</div>
          <blockquote>
            GoRush gave me the flexibility to be present for my family without putting my goals on hold.
          </blockquote>
          <div className="quote-author">
            <div>NM</div>
            <span>
              <strong>Nitin Menon</strong>
              <small>GoRush driver · Pune</small>
            </span>
          </div>
          <div className="quote-dots">
            <i />
            <i className="active" />
            <i />
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final-cta">
          <div className="final-kicker">
            <Sparkles size={15} /> THE ROAD IS YOURS
          </div>
          <h2>
            Your next chapter
            <br />
            <em>starts here.</em>
          </h2>
          <p>Join thousands of drivers building a better way to work, one ride at a time.</p>
          <button className="primary-cta" onClick={() => setFormOpen(true)}>
            Become a GoRush driver <ArrowRight size={17} />
          </button>
          <span className="final-note">
            <Clock3 size={13} /> Registration takes less than 5 minutes
          </span>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <a className="site-brand" href="#top">
            <img src="/gorush-logo.jpg" alt="GoRush" className="brand-logo-img" />
            <div className="brand-title-wrap">
              <strong>GoRush</strong>
              <span className="brand-sub">DRIVE · EARN · GROW</span>
            </div>
          </a>
          <p>
            Move freely. Earn fairly.
            <br />
            Live fully.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <strong>For drivers</strong>
            <button onClick={() => setFormOpen(true)}>Become a driver</button>
            <button onClick={() => scrollTo('earnings')}>Earnings</button>
            <button onClick={() => scrollTo('safety')}>Safety center</button>
          </div>
          <div>
            <strong>Company</strong>
            <button onClick={() => action('About GoRush coming soon')}>About us</button>
            <button onClick={() => action('Careers page coming soon')}>Careers</button>
            <button onClick={() => action('Contact form opened')}>Contact</button>
          </div>
          <div>
            <strong>Follow along</strong>
            <button onClick={() => action('Instagram opened')}>Instagram</button>
            <button onClick={() => action('LinkedIn opened')}>LinkedIn</button>
            <button onClick={() => action('X opened')}>X / Twitter</button>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 GoRush Mobility Technologies</span>
          <span>Privacy · Terms · Accessibility</span>
          <span>
            <Globe2 size={13} /> India
          </span>
        </div>
      </footer>

      {formOpen && <DriverForm close={() => setFormOpen(false)} action={action} />}
    </div>
  );
}

function DriverForm({ close, action }) {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="form-overlay" onClick={close}>
      <div className="driver-form" onClick={(event) => event.stopPropagation()}>
        {submitted ? (
          <div className="form-success">
            <div>
              <Check size={25} />
            </div>
            <h2>You are on your way.</h2>
            <p>Thanks for your interest. We will send an OTP to your mobile number to begin verification.</p>
            <button className="primary-cta" onClick={close}>
              Back to GoRush <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <>
            <button className="form-close" onClick={close}>
              <X size={19} />
            </button>
            <div className="form-kicker">DRIVER REGISTRATION</div>
            <h2>
              Ready to move
              <br />
              <em>forward?</em>
            </h2>
            <p>Tell us where to reach you. The rest takes just a few minutes.</p>
            <label>
              Full name
              <input placeholder="e.g. Arjun Kumar" />
            </label>
            <label>
              Mobile number
              <div className="phone-input">
                <span>+91</span>
                <input placeholder="98765 43210" />
              </div>
            </label>
            <label>
              City
              <select defaultValue="Indore">
                <option>Indore</option>
                <option>Mumbai</option>
                <option>Pune</option>
                <option>Bengaluru</option>
                <option>Delhi NCR</option>
              </select>
            </label>
            <label className="check-label">
              <input type="checkbox" /> I agree to the GoRush terms and privacy policy.
            </label>
            <button
              className="primary-cta form-submit"
              onClick={() => {
                setSubmitted(true);
                action('Registration started');
              }}
            >
              Start registration <ArrowRight size={16} />
            </button>
            <small>We never share your details without permission.</small>
          </>
        )}
      </div>
    </div>
  );
}
