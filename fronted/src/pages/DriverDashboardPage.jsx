import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bell, Bike, CarFront, ChevronDown, ChevronRight, CircleHelp, Clock3,
  FileCheck2, Headphones, Home, IndianRupee, LayoutDashboard, MapPin,
  Menu, MessageCircle, Navigation, Power, ReceiptText, Search, Settings,
  ShieldCheck, Star, ToggleRight, TrendingUp, UserRound, WalletCards, X,
  ArrowLeft
} from 'lucide-react';
import '../styles.css';

const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Ride requests', icon: Navigation, badge: '03' },
  { label: 'Live trips', icon: MapPin },
  { label: 'Earnings', icon: IndianRupee },
  { label: 'Trip history', icon: ReceiptText },
  { label: 'Incentives', icon: TrendingUp },
];

const activity = [
  { time: '09:42 AM', title: 'Ride completed', detail: 'Palasia → Vijay Nagar Square', amount: '+₹284', type: 'positive' },
  { time: '09:18 AM', title: 'Cash collected', detail: 'Trip #GR-10482', amount: '+₹190', type: 'positive' },
  { time: '08:47 AM', title: 'Ride cancelled', detail: 'Pickup: Rajwada Palace', amount: '—', type: 'neutral' },
  { time: '08:15 AM', title: 'Online shift started', detail: 'Device & vehicle verified', amount: 'Today', type: 'neutral' },
];

export default function DriverDashboardPage({ action }) {
  const [activeNav, setActiveNav] = useState('Overview');
  const [isOnline, setIsOnline] = useState(true);
  const [showRequest, setShowRequest] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [localNotice, setLocalNotice] = useState('');

  const triggerAction = (msg) => {
    if (action) {
      action(msg);
    } else {
      setLocalNotice(msg);
      setTimeout(() => setLocalNotice(''), 2600);
    }
  };

  return (
    <div className="app-shell" style={{ minHeight: '100vh', background: '#f5f7f5' }}>
      <aside className={`sidebar ${menuOpen ? 'is-open' : ''}`}>
        <div className="brand-lockup">
          <img
            src="/gorush-logo.png"
            alt="GoRush"
            style={{ width: '34px', height: '34px', borderRadius: '10px', objectFit: 'contain', display: 'block' }}
          />
          <div>
            <strong>GoRush</strong>
            <span>DRIVER PORTAL</span>
          </div>
          <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={18} />
          </button>
        </div>

        <div className="driver-mini">
          <div className="avatar">AK</div>
          <div>
            <strong>Arjun Kumar</strong>
            <span>Gold Captain · Indore</span>
          </div>
          <span className="verified-dot" title="Verified Driver Partner">
            <ShieldCheck size={14} />
          </span>
        </div>

        <nav className="primary-nav">
          <p className="nav-label">WORKSPACE</p>
          {navItems.map(({ label, icon: Icon, badge }) => (
            <button
              key={label}
              className={`nav-item ${activeNav === label ? 'active' : ''}`}
              onClick={() => {
                setActiveNav(label);
                setMenuOpen(false);
              }}
            >
              <Icon size={18} />
              <span>{label}</span>
              {badge && <b>{badge}</b>}
            </button>
          ))}

          <p className="nav-label second">ACCOUNT</p>
          <button className="nav-item" onClick={() => triggerAction('All 6 Driver documents verified')}>
            <FileCheck2 size={18} />
            <span>Documents</span>
            <i className="nav-status" />
          </button>
          <button className="nav-item" onClick={() => triggerAction('24/7 Driver Support hotline connected')}>
            <Headphones size={18} />
            <span>Support</span>
          </button>
          <button className="nav-item" onClick={() => triggerAction('Driver Preferences & Vehicle settings')}>
            <Settings size={18} />
            <span>Settings</span>
          </button>
        </nav>

        <div className="sidebar-foot" onClick={() => triggerAction('Safety center SOS triggered')}>
          <div className="sos-icon">!</div>
          <div>
            <strong>Driver SOS</strong>
            <span>24/7 Indore Emergency Desk</span>
          </div>
          <ChevronRight size={16} />
        </div>

        <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#34543d',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 600
            }}
          >
            <ArrowLeft size={16} /> Back to GoRush Website
          </Link>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu size={21} />
          </button>
          <div className="breadcrumb">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>GoRush</Link>
            <ChevronRight size={14} />
            <span>Driver Portal</span>
            <ChevronRight size={14} />
            <strong>{activeNav}</strong>
          </div>
          <div className="top-actions">
            <button className="icon-button" onClick={() => triggerAction('0 Unread Notifications')} aria-label="Notifications">
              <Bell size={19} />
              <i className="notification-dot" />
            </button>
            <div className="top-profile">
              <div className="avatar small">AK</div>
              <ChevronDown size={15} />
            </div>
          </div>
        </header>

        <div className="page-wrap">
          <section className="welcome-row">
            <div>
              <p className="eyebrow">LIVE DRIVER CONSOLE · INDORE METRO</p>
              <h1>Good morning, Arjun<span>.</span></h1>
              <p className="subline">Your driving day, metrics and active trips at a glance.</p>
            </div>
            <div className="online-control">
              <div>
                <span className={`live-indicator ${isOnline ? 'online' : 'offline'}`} />
                <strong>{isOnline ? 'You are online' : 'You are offline'}</strong>
                <small>{isOnline ? 'Accepting new rides in Indore' : 'Go online to receive ride alerts'}</small>
              </div>
              <button
                className={`switch ${isOnline ? 'on' : ''}`}
                onClick={() => {
                  setIsOnline(!isOnline);
                  triggerAction(isOnline ? 'Driver status changed to OFFLINE' : 'Driver status changed to ONLINE');
                }}
                aria-label="Toggle online status"
              >
                <span />
              </button>
            </div>
          </section>

          {localNotice && (
            <div className="toast" style={{ marginBottom: '20px' }}>
              <ShieldCheck size={17} /> {localNotice}
            </div>
          )}

          <section className="stat-grid">
            <article className="stat-card featured">
              <div className="stat-head">
                <span>Today's Net Earnings</span>
                <span className="stat-icon">
                  <IndianRupee size={16} />
                </span>
              </div>
              <strong>₹1,840<span>.50</span></strong>
              <div className="stat-foot">
                <span className="trend">
                  <TrendingUp size={13} /> +18.4%
                </span>
                <small>vs yesterday · 0% commission</small>
              </div>
            </article>

            <article className="stat-card">
              <div className="stat-head">
                <span>Completed Trips</span>
                <span className="stat-icon pale">
                  <CarFront size={16} />
                </span>
              </div>
              <strong>11</strong>
              <div className="stat-foot">
                <span className="muted-stat">+3 trips</span>
                <small>Goal: 14 for ₹300 bonus</small>
              </div>
            </article>

            <article className="stat-card">
              <div className="stat-head">
                <span>Online Hours</span>
                <span className="stat-icon pale">
                  <Clock3 size={16} />
                </span>
              </div>
              <strong>05<span className="unit">h 14m</span></strong>
              <div className="progress-line">
                <span style={{ width: '75%' }} />
              </div>
              <div className="stat-foot">
                <small>Target: 7h today (Indore Surge Active)</small>
              </div>
            </article>

            <article className="stat-card">
              <div className="stat-head">
                <span>Captain Rating</span>
                <span className="stat-icon pale">
                  <Star size={16} fill="currentColor" />
                </span>
              </div>
              <strong>4<span className="unit">.94</span></strong>
              <div className="stat-foot">
                <span className="rating-stars" style={{ color: '#eab308' }}>★★★★★</span>
                <small>from 342 reviews</small>
              </div>
            </article>
          </section>

          <section className="main-grid">
            <article className="panel live-panel">
              <div className="panel-heading">
                <div>
                  <p className="eyebrow">LIVE TRIP DISPATCH</p>
                  <h2>Current assigned ride</h2>
                </div>
                <span className="live-pill">
                  <span /> En Route
                </span>
              </div>
              <div className="map-stage">
                <div className="map-grid" />
                <div className="route route-one" />
                <div className="route route-two" />
                <div className="map-label label-a">Vijay Nagar Square</div>
                <div className="map-label label-b">Palasia Point</div>
                <div className="map-label label-c">Bhawarkua</div>
                <div className="pin pickup">
                  <span><MapPin size={15} /></span>
                  <b>Pickup</b>
                </div>
                <div className="driver-pin">
                  <Navigation size={16} fill="currentColor" />
                </div>
                <div className="map-scale">
                  <span>1.2 km</span>
                  <i />
                </div>
                <button className="map-center" onClick={() => triggerAction('Map recentered to current GPS coordinates')}>
                  <Navigation size={16} />
                </button>
              </div>
              <div className="trip-summary">
                <div className="trip-person">
                  <div className="passenger-avatar">RS</div>
                  <div>
                    <strong>Riya Sharma</strong>
                    <span>Passenger · 2 min away</span>
                  </div>
                </div>
                <div className="trip-meta">
                  <div>
                    <span>Est. Fare</span>
                    <strong>₹340</strong>
                  </div>
                  <div>
                    <span>ETA</span>
                    <strong>8 min</strong>
                  </div>
                </div>
              </div>
              <button className="full-button" onClick={() => triggerAction('Opening turn-by-turn navigation in Google Maps')}>
                Navigate to Pickup <ChevronRight size={16} />
              </button>
            </article>

            <article className="panel request-panel">
              <div className="panel-heading">
                <div>
                  <p className="eyebrow">HIGH DEMAND ZONE</p>
                  <h2>Incoming ride request</h2>
                </div>
                <button className="plain-action" onClick={() => setShowRequest(!showRequest)}>
                  {showRequest ? 'Dismiss' : 'Show request'}
                </button>
              </div>
              {showRequest ? (
                <div className="request-card">
                  <div className="request-top">
                    <span className="new-tag">NEW INCOMING RIDE</span>
                    <strong><Clock3 size={14} /> 00:22</strong>
                  </div>
                  <div className="route-pair">
                    <div className="route-dot green" />
                    <div>
                      <span>Pickup Point</span>
                      <strong>Chappan Dukan, New Palasia</strong>
                    </div>
                  </div>
                  <div className="route-connector" />
                  <div className="route-pair">
                    <div className="route-dot dark" />
                    <div>
                      <span>Drop-off Destination</span>
                      <strong>Indore Airport (IDR), Aerodrome Rd</strong>
                    </div>
                  </div>
                  <div className="request-details">
                    <div>
                      <span>Distance</span>
                      <strong>9.8 km</strong>
                    </div>
                    <div>
                      <span>Guaranteed Payout</span>
                      <strong>₹390–₹430</strong>
                    </div>
                    <div>
                      <span>Est. Travel Time</span>
                      <strong>24 min</strong>
                    </div>
                  </div>
                  <div className="request-actions">
                    <button
                      className="reject-button"
                      onClick={() => {
                        setShowRequest(false);
                        triggerAction('Ride request declined');
                      }}
                    >
                      Decline
                    </button>
                    <button
                      className="accept-button"
                      onClick={() => {
                        setShowRequest(false);
                        triggerAction('Ride accepted! GPS Navigation initialized.');
                      }}
                    >
                      Accept Ride <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="empty-request">
                  <div className="empty-icon">
                    <Navigation size={21} />
                  </div>
                  <strong>All caught up!</strong>
                  <p>New ride requests in your Indore sector will appear here instantly while you are online.</p>
                </div>
              )}
            </article>
          </section>

          <section className="activity-section" style={{ marginTop: '30px' }}>
            <div className="panel-heading" style={{ marginBottom: '16px' }}>
              <div>
                <p className="eyebrow">TODAY'S SHIFT</p>
                <h2>Recent trip activity</h2>
              </div>
              <button className="plain-action" onClick={() => triggerAction('Opening complete trip statement')}>
                View all statements
              </button>
            </div>
            <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.06)', overflow: 'hidden' }}>
              {activity.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    borderBottom: idx < activity.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ fontSize: '11px', color: '#7a8c7e', fontFamily: 'monospace', minWidth: '70px' }}>
                      {item.time}
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '14px', color: '#14251b' }}>{item.title}</strong>
                      <span style={{ fontSize: '12px', color: '#687b6d' }}>{item.detail}</span>
                    </div>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: item.type === 'positive' ? '#1e7b34' : '#6b7a6d' }}>
                    {item.amount}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <footer className="footer-note" style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between', color: '#6d8071', fontSize: '12px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={15} color="#22c55e" /> All GoRush driver dispatch systems operational
            </span>
            <span>Last synced with Indore Hub just now</span>
          </footer>
        </div>
      </main>
    </div>
  );
}
