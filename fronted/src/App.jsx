import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Check } from 'lucide-react';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import DriverForm from './components/DriverForm.jsx';
import ContactModal from './components/ContactModal.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import HomePage from './pages/HomePage.jsx';
import HowItWorksPage from './pages/HowItWorksPage.jsx';
import WhyGoRushPage from './pages/WhyGoRushPage.jsx';
import EarningsPage from './pages/EarningsPage.jsx';
import SafetyPage from './pages/SafetyPage.jsx';
import DriverDashboardPage from './pages/DriverDashboardPage.jsx';

import './website.css';
import './loader.css';
import './pages/pages.css';
import './typography-redesign.css';

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  const isDriverPortal = location.pathname.startsWith('/driver') || location.pathname.startsWith('/dashboard');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 5;
        return Math.min(100, prev + step);
      });
    }, 40);

    // Guaranteed fallback timer
    const fallbackTimer = setTimeout(() => {
      setProgress(100);
      setExiting(true);
      setTimeout(() => setLoading(false), 300);
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimer);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const exitTimer = setTimeout(() => setExiting(true), 250);
      const hideTimer = setTimeout(() => setLoading(false), 800);
      return () => {
        clearTimeout(exitTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [progress]);

  const action = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(''), 2600);
  };

  return (
    <div className="site-shell">
      {/* Brand Preloader */}
      {loading && !isDriverPortal && (
        <div className={`gorush-preloader ${exiting ? 'fade-out' : ''}`}>
          <div className="loader-center">
            <div className="loader-spinner-outer" />
            <div className="loader-spinner-inner" />
            <div className="loader-logo-card">
              <img src="/gorush-logo.png" alt="GoRush Logo" />
            </div>
          </div>

          <h2 className="loader-brand-title">
            <span>Go</span>Rush
          </h2>
          <div className="loader-tagline">Drive · Earn · Grow</div>

          <div className="loader-progress-container">
            <div className="loader-bar-track">
              <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="loader-meta">
              <span className="loader-status-text">
                <span className="loader-status-dot" />
                {progress < 40
                  ? 'Starting GoRush...'
                  : progress < 80
                  ? 'Connecting Indore drivers...'
                  : 'Ready! Welcome.'}
              </span>
              <span className="loader-percent">{progress}%</span>
            </div>
          </div>
        </div>
      )}

      <ScrollToTop />

      {/* Toast Notice */}
      {notice && (
        <div className="site-toast">
          <Check size={16} /> {notice}
        </div>
      )}

      {/* Persistent Global Header (Hidden on Driver Portal) */}
      {!isDriverPortal && (
        <Navbar
          onJoinClick={() => setFormOpen(true)}
          onContactClick={() => setContactOpen(true)}
          onLoginClick={() => window.location.href = '/driver'}
        />
      )}

      {/* Dynamic Page Routing */}
      <Routes>
        <Route
          path="/"
          element={<HomePage onJoinClick={() => setFormOpen(true)} action={action} />}
        />
        <Route
          path="/how-it-works"
          element={<HowItWorksPage onJoinClick={() => setFormOpen(true)} />}
        />
        <Route
          path="/why-gorush"
          element={<WhyGoRushPage onJoinClick={() => setFormOpen(true)} />}
        />
        <Route
          path="/earnings"
          element={<EarningsPage onJoinClick={() => setFormOpen(true)} />}
        />
        <Route
          path="/safety"
          element={<SafetyPage onJoinClick={() => setFormOpen(true)} />}
        />
        <Route
          path="/driver"
          element={<DriverDashboardPage action={action} />}
        />
        <Route
          path="/dashboard"
          element={<Navigate to="/driver" replace />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Persistent Global Footer (Hidden on Driver Portal) */}
      {!isDriverPortal && (
        <Footer
          onJoinClick={() => setFormOpen(true)}
          onContactClick={() => setContactOpen(true)}
          onAction={action}
        />
      )}

      {/* Global Registration Popup Modal */}
      {formOpen && <DriverForm close={() => setFormOpen(false)} action={action} />}

      {/* Global Contact Helpline Modal */}
      {contactOpen && <ContactModal close={() => setContactOpen(false)} />}
    </div>
  );
}
