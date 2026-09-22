import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error('GoRush ErrorBoundary caught error:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '80px 24px', textAlign: 'center', fontFamily: 'sans-serif', color: '#14251b', background: '#f7f6f0', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '12px' }}>Oops! Something went wrong</h2>
          <p style={{ color: '#556c58', maxWidth: '520px', marginBottom: '24px', lineHeight: 1.6 }}>
            {this.state.error?.message || 'An unexpected rendering error occurred.'}
          </p>
          <button onClick={() => window.location.href = '/'} style={{ background: '#14251b', color: '#fff', border: 'none', padding: '12px 26px', borderRadius: '8px', cursor: 'pointer', fontWeight: 700 }}>
            Reload GoRush
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>
);
