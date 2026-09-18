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
    { label: 'Home', path: '/' },
    { label: 'About', path: '/why-gorush' },
    { label: 'How it Works', path: '/how-it-works' },
    { label: 'Benefits', path: '/earnings' },
    { label: 'Support', path: '/safety' },
  ];

  return (
    <header className="site-header-redesign-wrap">
      <div className="gorush-floating-navbar">
        {/* Left: Brand Identity with Logo */}
        <Link className="nav-brand-wrap" to="/" onClick={() => setMenuOpen(false)}>
          <img
            src="/gorush-nav-logo.webp"
            alt="GoRush Drivers Drive Change"
            className="nav-brand-logo"
            style={{ height: '42px', objectFit: 'contain' }}
          />
        </Link>

        {/* Center: Navigation Links with Icons */}
        <nav className="nav-center-menu" aria-label="Main Navigation">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link-item ${isActive ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA */}
        <div className="nav-right-actions">
          <button
            type="button"
            className="nav-become-driver-btn"
            onClick={onJoinClick}
          >
            <span>Become a Driver</span>
            <ArrowRight size={16} />
          </button>

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
