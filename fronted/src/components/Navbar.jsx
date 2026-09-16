import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Home,
  Menu,
  Settings,
  ShieldCheck,
  User,
  Users,
  X,
} from 'lucide-react';
import '../navbar-redesign.css';

export default function Navbar({ onJoinClick, onLoginClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'How it works', path: '/how-it-works', icon: Settings },
    { label: 'Why GoRush', path: '/why-gorush', icon: Users },
    { label: 'Earnings', path: '/earnings', icon: BarChart3 },
    { label: 'Safety', path: '/safety', icon: ShieldCheck },
  ];

  return (
    <header className="site-header-redesign-wrap">
      <div className="gorush-floating-navbar">
        {/* Left: Brand Identity with Speed Pin Logo */}
        <Link className="nav-brand-wrap" to="/" onClick={() => setMenuOpen(false)}>
          <img
            src="/gorush-speed-pin-clean.webp"
            alt="GoRush"
            className="nav-brand-pin"
          />
          <div className="nav-brand-text">
            <span className="nav-brand-name">
              Go<span className="brand-accent">Rush</span>
            </span>
            <span className="nav-brand-tagline">Drive • Earn • Grow</span>
          </div>
        </Link>

        {/* Center: Navigation Links with Icons */}
        <nav className="nav-center-menu" aria-label="Main Navigation">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link-pill ${isActive ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                <Icon size={15} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right: Driver Login, Join GoRush CTA & Leaves Decor */}
        <div className="nav-right-actions">
          <div className="nav-actions-divider" />

          <button
            type="button"
            className="nav-driver-login-btn"
            onClick={onLoginClick}
          >
            <User size={15} />
            <span>Driver login</span>
          </button>

          <button
            type="button"
            className="nav-join-btn"
            onClick={onJoinClick}
          >
            <span>Join GoRush</span>
            <ArrowRight size={14} />
          </button>

          <img
            src="/navbar-leaves-clean.webp"
            alt=""
            className="nav-leaves-corner"
            aria-hidden="true"
          />

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="nav-mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      <div className={`nav-mobile-dropdown ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-mobile-link ${isActive ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <Icon size={16} />
              <span>{item.label}</span>
            </Link>
          );
        })}

        <div className="nav-mobile-divider" />

        <button
          type="button"
          className="nav-mobile-link"
          onClick={() => {
            onLoginClick();
            setMenuOpen(false);
          }}
          style={{ background: 'transparent', border: 'none', width: '100%', cursor: 'pointer' }}
        >
          <User size={16} />
          <span>Driver login</span>
        </button>

        <button
          type="button"
          className="nav-mobile-cta-btn"
          onClick={() => {
            onJoinClick();
            setMenuOpen(false);
          }}
        >
          <span>Join GoRush</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </header>
  );
}
