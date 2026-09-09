import React, { useState } from 'react';
import Website from './website.jsx';
import { createRoot } from 'react-dom/client';
import {
  Bell, Bike, CarFront, ChevronDown, ChevronRight, CircleHelp, Clock3,
  FileCheck2, Headphones, Home, IndianRupee, LayoutDashboard, MapPin,
  Menu, MessageCircle, Navigation, Power, ReceiptText, Search, Settings,
  ShieldCheck, Star, ToggleRight, TrendingUp, UserRound, WalletCards, X
} from 'lucide-react';
import './styles.css';

const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Ride requests', icon: Navigation, badge: '03' },
  { label: 'Live trips', icon: MapPin },
  { label: 'Earnings', icon: IndianRupee },
  { label: 'Trip history', icon: ReceiptText },
  { label: 'Incentives', icon: TrendingUp },
];

const activity = [
  { time: '09:42 AM', title: 'Ride completed', detail: 'Andheri West → BKC', amount: '+₹284', type: 'positive' },
  { time: '09:18 AM', title: 'Cash collected', detail: 'Trip #GR-10482', amount: '+₹190', type: 'positive' },
  { time: '08:47 AM', title: 'Ride cancelled', detail: 'Pickup: Powai Lake', amount: '—', type: 'neutral' },
  { time: '08:15 AM', title: 'Online shift started', detail: 'Device verified', amount: 'Today', type: 'neutral' },
];

function App() {
  const [activeNav, setActiveNav] = useState('Overview');
  const [isOnline, setIsOnline] = useState(true);
  const [showRequest, setShowRequest] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState('');

  const action = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(''), 2600);
  };

  return (
    <div className="app-shell">
      <aside className={`sidebar ${menuOpen ? 'is-open' : ''}`}>
        <div className="brand-lockup">
          <div className="brand-mark"><Bike size={20} strokeWidth={2.5} /></div>
          <div><strong>GoRush</strong><span>DRIVER CONSOLE</span></div>
          <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={18} /></button>
        </div>
        <div className="driver-mini">
          <div className="avatar">AK</div>
          <div><strong>Arjun Kumar</strong><span>Gold driver · Mumbai</span></div>
          <span className="verified-dot"><ShieldCheck size={14} /></span>
        </div>
        <nav className="primary-nav">
          <p className="nav-label">WORKSPACE</p>
          {navItems.map(({ label, icon: Icon, badge }) => (
            <button key={label} className={`nav-item ${activeNav === label ? 'active' : ''}`} onClick={() => { setActiveNav(label); setMenuOpen(false); }}>
              <Icon size={18} /><span>{label}</span>{badge && <b>{badge}</b>}
            </button>
          ))}
          <p className="nav-label second">ACCOUNT</p>
          <button className="nav-item" onClick={() => action('Documents are up to date')}><FileCheck2 size={18} /><span>Documents</span><i className="nav-status" /></button>
          <button className="nav-item" onClick={() => action('Support center opened')}><Headphones size={18} /><span>Support</span></button>
          <button className="nav-item" onClick={() => action('Settings opened')}><Settings size={18} /><span>Settings</span></button>
        </nav>
        <div className="sidebar-foot"><div className="sos-icon">!</div><div><strong>Need help?</strong><span>Safety center is here</span></div><ChevronRight size={16} /></div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={21} /></button>
          <div className="breadcrumb"><span>Workspace</span><ChevronRight size={14} /><strong>{activeNav}</strong></div>
          <div className="top-actions">
            <button className="icon-button" onClick={() => action('No new notifications')} aria-label="Notifications"><Bell size={19} /><i className="notification-dot" /></button>
            <div className="top-profile"><div className="avatar small">AK</div><ChevronDown size={15} /></div>
          </div>
        </header>

        <div className="page-wrap">
          <section className="welcome-row">
            <div><p className="eyebrow">WEDNESDAY, SEPTEMBER 09, 2026</p><h1>Good morning, Arjun<span>.</span></h1><p className="subline">Your driving day, at a glance.</p></div>
            <div className="online-control"><div><span className="live-indicator" /> <strong>{isOnline ? 'You are online' : 'You are offline'}</strong><small>{isOnline ? 'Accepting new rides' : 'Go online to receive rides'}</small></div><button className={`switch ${isOnline ? 'on' : ''}`} onClick={() => setIsOnline(!isOnline)} aria-label="Toggle online status"><span /></button></div>
          </section>

          {notice && <div className="toast"><ShieldCheck size={17} />{notice}</div>}

          <section className="stat-grid">
            <article className="stat-card featured"><div className="stat-head"><span>Today's earnings</span><span className="stat-icon"><IndianRupee size={16} /></span></div><strong>₹1,284<span>.50</span></strong><div className="stat-foot"><span className="trend"><TrendingUp size={13} /> 12.8%</span><small>vs yesterday</small></div></article>
            <article className="stat-card"><div className="stat-head"><span>Completed rides</span><span className="stat-icon pale"><CarFront size={16} /></span></div><strong>08</strong><div className="stat-foot"><span className="muted-stat">+2 rides</span><small>vs yesterday</small></div></article>
            <article className="stat-card"><div className="stat-head"><span>Online hours</span><span className="stat-icon pale"><Clock3 size={16} /></span></div><strong>04<span className="unit">h 32m</span></strong><div className="progress-line"><span style={{ width: '64%' }} /></div><div className="stat-foot"><small>Goal: 7h today</small></div></article>
            <article className="stat-card"><div className="stat-head"><span>Driver rating</span><span className="stat-icon pale"><Star size={16} fill="currentColor" /></span></div><strong>4<span className="unit">.92</span></strong><div className="stat-foot"><span className="rating-stars">★★★★★</span><small>from 248 trips</small></div></article>
          </section>

          <section className="main-grid">
            <article className="panel live-panel">
              <div className="panel-heading"><div><p className="eyebrow">LIVE OPERATIONS</p><h2>Current trip</h2></div><span className="live-pill"><span /> Live</span></div>
              <div className="map-stage"><div className="map-grid" /><div className="route route-one" /><div className="route route-two" /><div className="map-label label-a">Bandra Kurla Complex</div><div className="map-label label-b">Sion Circle</div><div className="map-label label-c">Powai</div><div className="pin pickup"><span><MapPin size={15} /></span><b>Pickup</b></div><div className="driver-pin"><Navigation size={16} fill="currentColor" /></div><div className="map-scale"><span>1 km</span><i /></div><button className="map-center" onClick={() => action('Map centered on your location')}><Navigation size={16} /></button></div>
              <div className="trip-summary"><div className="trip-person"><div className="passenger-avatar">RS</div><div><strong>Riya Sharma</strong><span>Passenger · 3 min away</span></div></div><div className="trip-meta"><div><span>Trip fare</span><strong>₹386</strong></div><div><span>ETA</span><strong>12 min</strong></div></div></div>
              <button className="full-button" onClick={() => action('Opening live trip details')}>View live trip <ChevronRight size={16} /></button>
            </article>

            <article className="panel request-panel">
              <div className="panel-heading"><div><p className="eyebrow">NEXT UP</p><h2>Ride requests</h2></div><button className="plain-action" onClick={() => setShowRequest(!showRequest)}>{showRequest ? 'Dismiss' : 'Show request'}</button></div>
              {showRequest ? <div className="request-card"><div className="request-top"><span className="new-tag">NEW REQUEST</span><strong><Clock3 size={14} /> 00:18</strong></div><div className="route-pair"><div className="route-dot green" /><div><span>Pickup</span><strong>Lower Parel, Mumbai</strong></div></div><div className="route-connector" /><div className="route-pair"><div className="route-dot dark" /><div><span>Drop-off</span><strong>Worli Sea Face</strong></div></div><div className="request-details"><div><span>Distance</span><strong>6.4 km</strong></div><div><span>Est. fare</span><strong>₹248–₹310</strong></div><div><span>Trip time</span><strong>19 min</strong></div></div><div className="request-actions"><button className="reject-button" onClick={() => { setShowRequest(false); action('Ride request rejected'); }}>Reject</button><button className="accept-button" onClick={() => { setShowRequest(false); action('Ride accepted. Navigation ready'); }}>Accept ride <ChevronRight size={16} /></button></div></div> : <div className="empty-request"><div className="empty-icon"><Navigation size={21} /></div><strong>All caught up</strong><p>New requests will appear here while you are online.</p></div>}
            </article>
          </section>

          <section className="bottom-grid">
            <article className="panel activity-panel"><div className="panel-heading"><div><p className="eyebrow">TODAY</p><h2>Recent activity</h2></div><button className="plain-action" onClick={() => setActiveNav('Trip history')}>View all <ChevronRight size={15} /></button></div><div className="activity-list">{activity.map((item) => <div className="activity-row" key={item.time}><div className={`activity-marker ${item.type}`}><ReceiptText size={14} /></div><div className="activity-copy"><strong>{item.title}</strong><span>{item.detail}</span></div><div className="activity-time">{item.time}</div><strong className={`activity-amount ${item.type}`}>{item.amount}</strong></div>)}</div></article>
            <article className="panel quick-panel"><div className="panel-heading"><div><p className="eyebrow">SHORTCUTS</p><h2>Quick actions</h2></div><CircleHelp size={18} className="help-icon" /></div><div className="quick-actions"><button onClick={() => action('Earnings report opened')}><WalletCards size={18} /><span>Earnings report</span><ChevronRight size={15} /></button><button onClick={() => action('Documents opened')}><FileCheck2 size={18} /><span>Manage documents</span><ChevronRight size={15} /></button><button onClick={() => action('Safety center opened')}><ShieldCheck size={18} /><span>Safety center</span><ChevronRight size={15} /></button><button onClick={() => action('Support chat started')}><MessageCircle size={18} /><span>Chat with support</span><ChevronRight size={15} /></button></div></article>
          </section>
          <footer className="footer-note"><span><ShieldCheck size={14} /> All systems operational</span><span>Last synced just now</span></footer>
        </div>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<Website />);
