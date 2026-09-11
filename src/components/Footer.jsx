import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2 } from 'lucide-react';

export default function Footer({ onJoinClick, onAction }) {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Link className="site-brand" to="/" style={{ textDecoration: 'none', color: '#ffffff' }}>
          <img src="/gorush-logo.png" alt="GoRush" className="brand-logo-img" />
          <strong>GoRush</strong>
        </Link>
        <p>
          Move freely. Earn fairly.
          <br />
          Live fully.
        </p>
      </div>
      <div className="footer-links">
        <div>
          <strong>For drivers</strong>
          <button type="button" onClick={onJoinClick}>
            Become a driver
          </button>
          <Link to="/how-it-works" style={{ textDecoration: 'none', color: '#9dae9e', fontSize: '10px' }}>
            How it works
          </Link>
          <Link to="/why-gorush" style={{ textDecoration: 'none', color: '#9dae9e', fontSize: '10px' }}>
            Why GoRush
          </Link>
          <Link to="/earnings" style={{ textDecoration: 'none', color: '#9dae9e', fontSize: '10px' }}>
            Earnings
          </Link>
          <Link to="/safety" style={{ textDecoration: 'none', color: '#9dae9e', fontSize: '10px' }}>
            Safety center
          </Link>
        </div>
        <div>
          <strong>Company</strong>
          <button type="button" onClick={() => onAction('About GoRush coming soon')}>
            About us
          </button>
          <button type="button" onClick={() => onAction('Careers page coming soon')}>
            Careers
          </button>
          <button type="button" onClick={() => onAction('Contact form opened')}>
            Contact
          </button>
        </div>
        <div>
          <strong>Follow along</strong>
          <button type="button" onClick={() => onAction('Instagram opened')}>
            Instagram
          </button>
          <button type="button" onClick={() => onAction('LinkedIn opened')}>
            LinkedIn
          </button>
          <button type="button" onClick={() => onAction('X opened')}>
            X / Twitter
          </button>
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
  );
}
