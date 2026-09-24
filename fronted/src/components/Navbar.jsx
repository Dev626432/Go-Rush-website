import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Home,
  Menu,
  Phone,
  Settings,
  ShieldCheck,
  User,
  Users,
  X,
} from 'lucide-react';
import '../navbar-redesign.css';

export default function Navbar({ onJoinClick, onContactClick, onLoginClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/why-gorush' },
    { label: 'How it Works', path: '/how-it-works' },
    { label: 'Benefits', path: '/earnings' },
    { label: 'Support', path: '/safety' },
    { label: 'Contact', isContact: true },
  ];

  const handleContactClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (onContactClick) {
      onContactClick();
    }
  };

  return (
    <header className="site-header-redesign-wrap">
      <div className="gorush-floating-navbar">
        {/* Left: Brand Identity with Logo */}
        <Link className="nav-brand-wrap" to="/" onClick={() => setMenuOpen(false)}>
          <img
            src="/gorush-nav-logo.png"
            alt="GoRush - Drive. Earn. Grow."
            className="nav-brand-logo"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
            style={{ height: '42px', objectFit: 'contain' }}
          />
        </Link>

        {/* Center: Navigation Links with Icons */}
        <nav className="nav-center-menu" aria-label="Main Navigation">
          {navLinks.map((item) => {
            if (item.isContact) {
              return (
                <button
                  key={item.label}
                  type="button"
                  className="nav-link-item"
                  id="nav-contact-link"
                  onClick={handleContactClick}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#d4ef62',
                    fontWeight: 700
                  }}
                >
                  <Phone size={13} color="#d4ef62" />
                  <span>Contact (9755125038)</span>
                </button>
              );
            }
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

      <div className={`nav-mobile-dropdown ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((item) => {
          if (item.isContact) {
            return (
              <button
                key={item.label}
                type="button"
                className="nav-mobile-link"
                id="nav-mobile-contact-link"
                onClick={handleContactClick}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#d4ef62',
                  fontWeight: 700
                }}
              >
                <Phone size={15} />
                <span>Contact Desk: 9755125038</span>
              </button>
            );
          }
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-mobile-link ${isActive ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
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
