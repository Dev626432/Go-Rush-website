import React, { useState, useRef } from 'react';
import { ArrowRight, Check, X, AlertCircle, Loader2, Sparkles, Database } from 'lucide-react';
import { api } from '../services/api';

export default function DriverForm({ close, action }) {
  const [submitted, setSubmitted] = useState(false);
  const [registeredData, setRegisteredData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [agreed, setAgreed] = useState(true);
  const formContainerRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    dateOfBirth: '1998-05-15',
    gender: 'Male',
    city: 'Indore',
    vehicleType: 'Bike / Scooter'
  });

  const handleChange = (e) => {
    setErrorMsg('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQuickFill = () => {
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const sampleNames = ['Dev Soni', 'Arjun Sharma', 'Rohan Patel', 'Vikas Verma', 'Deepak Tiwari'];
    const chosenName = sampleNames[Math.floor(Math.random() * sampleNames.length)];
    
    setFormData({
      fullName: chosenName,
      phone: `9826${randomSuffix}`,
      email: `driver.${randomSuffix}@gorush.in`,
      password: 'Password123',
      dateOfBirth: '1998-05-15',
      gender: 'Male',
      city: 'Indore',
      vehicleType: 'Bike / Scooter'
    });
    setErrorMsg('');
  };

  const validate = () => {
    if (!formData.fullName || !formData.fullName.trim()) {
      return 'Please enter your full name (or click Quick Fill Test Driver above).';
    }
    const cleanPhone = formData.phone ? formData.phone.replace(/\D/g, '').slice(-10) : '';
    if (!cleanPhone || cleanPhone.length !== 10 || !/^[6-9]/.test(cleanPhone)) {
      return 'Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      return 'Please enter a valid email address (e.g. name@example.com).';
    }
    if (!formData.password || formData.password.length < 6) {
      return 'Password must be at least 6 characters long.';
    }
    if (!formData.dateOfBirth) {
      return 'Please select your date of birth.';
    }
    if (!agreed) {
      return 'Please agree to the GoRush terms and privacy policy.';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setErrorMsg('');

    const validationError = validate();
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    setIsSubmitting(true);
    
    try {
      const cleanPhone = formData.phone.replace(/\D/g, '').slice(-10);
      const submissionData = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: cleanPhone,
        password: formData.password,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        city: formData.city,
        vehicleType: formData.vehicleType
      };

      console.log('Submitting driver registration to MongoDB Atlas:', submissionData.email, submissionData.phone);
      const response = await api.registerDriver(submissionData);
      
      if (response && response.success) {
        if (response.data && response.data.token) {
          localStorage.setItem('token', response.data.token);
        }
        setRegisteredData(response.data);
        setSubmitted(true);
        if (action) action('Registration successful! Saved to MongoDB Atlas.');
      } else {
        throw new Error(response.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration submission error:', error);
      if (error.message && (error.message.includes('Failed to fetch') || error.message.includes('NetworkError'))) {
        setErrorMsg('Server connection failed. Backend server is starting, please retry in 5 seconds.');
      } else if (error.message && error.message.includes('already exists')) {
        setErrorMsg('This Mobile or Email is already in MongoDB! Click "⚡ Quick Fill Test Driver" above to get a fresh unique number.');
      } else {
        setErrorMsg(error.message || 'Registration failed. Please check your details and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-overlay" onClick={close}>
      <div
        ref={formContainerRef}
        className="driver-form"
        style={{ maxHeight: '92vh', overflowY: 'auto', borderRadius: '20px' }}
        onClick={(event) => event.stopPropagation()}
      >
        {submitted ? (
          <div className="form-success" style={{ textAlign: 'center', padding: '24px 10px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: '#ecfccb',
              color: '#15803d',
              display: 'grid',
              placeItems: 'center',
              margin: '0 auto 16px',
              boxShadow: '0 8px 20px rgba(34, 197, 94, 0.25)'
            }}>
              <Check size={32} strokeWidth={3} />
            </div>
            <h2 style={{ fontSize: '26px', color: '#14251b', marginBottom: '8px' }}>Registration Successful!</h2>
            <p style={{ color: '#4b5563', fontSize: '13px', lineHeight: 1.6, marginBottom: '20px' }}>
              Welcome to GoRush, <strong>{formData.fullName}</strong>!<br />
              Your driver account is live in MongoDB Atlas cluster.
            </p>

            {registeredData && (
              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '14px 16px',
                textAlign: 'left',
                marginBottom: '22px',
                fontSize: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0f766e', fontWeight: 700, marginBottom: '8px' }}>
                  <Database size={15} />
                  <span>MongoDB Atlas Record Created</span>
                </div>
                <div style={{ color: '#334155', lineHeight: 1.8 }}>
                  <div><strong>Cluster Database:</strong> <code>gorush.drivers</code></div>
                  <div><strong>Driver ID:</strong> <code>{registeredData._id}</code></div>
                  <div><strong>Phone:</strong> {registeredData.phone}</div>
                  <div><strong>Email:</strong> {registeredData.email}</div>
                </div>
              </div>
            )}

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button
                type="button"
                className="primary-cta"
                onClick={() => {
                  window.location.href = '/driver';
                }}
                style={{ flex: 1, justifyContent: 'center' }}
              >
                Go to Driver Dashboard <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={close}
                style={{
                  padding: '12px 18px',
                  background: '#f3f4f6',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '12px',
                  color: '#374151'
                }}
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <button type="button" className="form-close" onClick={close} aria-label="Close registration modal">
              <X size={19} />
            </button>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div className="form-kicker" style={{ margin: 0 }}>DRIVER REGISTRATION</div>
              
              {/* Quick Auto-Fill Button for instant testing */}
              <button
                type="button"
                onClick={handleQuickFill}
                style={{
                  background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
                  border: '1px solid #86efac',
                  color: '#15803d',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'all 0.2s ease'
                }}
                title="Fill dummy test driver data with 1 click"
              >
                <Sparkles size={12} />
                <span>⚡ Auto-Fill Test Data</span>
              </button>
            </div>

            <h2>
              Ready to move
              <br />
              <em>forward?</em>
            </h2>
            <p>Tell us about yourself to begin your journey. Saved directly to MongoDB Atlas.</p>
            
            {errorMsg && (
              <div style={{
                color: '#b91c1c',
                marginBottom: '16px',
                fontSize: '13px',
                lineHeight: 1.5,
                padding: '12px 14px',
                background: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 600
              }}>
                <AlertCircle size={18} style={{ flexShrink: 0 }} />
                <span>{errorMsg}</span>
              </div>
            )}

            <label>
              Full name
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Arjun Kumar"
                style={{
                  borderColor: errorMsg && !formData.fullName.trim() ? '#ef4444' : undefined
                }}
              />
            </label>
            <label>
              Mobile number
              <div className="phone-input" style={{
                borderColor: errorMsg && (!formData.phone || formData.phone.replace(/\D/g, '').length < 10) ? '#ef4444' : undefined
              }}>
                <span>+91</span>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="9876543210"
                  maxLength={14}
                />
              </div>
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="arjun@example.com"
                style={{
                  borderColor: errorMsg && !formData.email.trim() ? '#ef4444' : undefined
                }}
              />
            </label>
            <label>
              Password
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="At least 6 characters"
                style={{
                  borderColor: errorMsg && (!formData.password || formData.password.length < 6) ? '#ef4444' : undefined
                }}
              />
            </label>
            <label>
              Date of Birth
              <input
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                style={{
                  borderColor: errorMsg && !formData.dateOfBirth ? '#ef4444' : undefined
                }}
              />
            </label>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <label>
                Gender
                <select name="gender" value={formData.gender} onChange={handleChange}>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                City
                <select name="city" value={formData.city} onChange={handleChange}>
                  <option>Indore</option>
                  <option>Mumbai</option>
                  <option>Pune</option>
                  <option>Bengaluru</option>
                  <option>Delhi NCR</option>
                  <option>Bhopal</option>
                  <option>Dabra</option>
                  <option>Gwalior</option>
                </select>
              </label>
            </div>
            
            <label>
              Vehicle Type
              <select name="vehicleType" value={formData.vehicleType} onChange={handleChange}>
                <option>Bike / Scooter</option>
                <option>Auto Rickshaw</option>
                <option>Cab / Taxi</option>
              </select>
            </label>

            <label className="check-label" style={{ cursor: 'pointer', marginTop: '14px' }}>
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => {
                  setErrorMsg('');
                  setAgreed(e.target.checked);
                }}
              />
              <span>I agree to the GoRush terms and privacy policy.</span>
            </label>

            {errorMsg && (
              <div style={{
                color: '#b91c1c',
                marginTop: '14px',
                fontSize: '13px',
                lineHeight: 1.4,
                padding: '10px 12px',
                background: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 600
              }}>
                <AlertCircle size={17} style={{ flexShrink: 0 }} />
                <span>{errorMsg}</span>
              </div>
            )}
            
            <button
              type="button"
              className="primary-cta form-submit"
              disabled={isSubmitting}
              onClick={handleSubmit}
              style={{
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.8 : 1,
                marginTop: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Saving to MongoDB Atlas...
                </>
              ) : (
                <>
                  Start registration <ArrowRight size={16} />
                </>
              )}
            </button>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '12px' }}>
              <button
                type="button"
                onClick={handleQuickFill}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#15803d',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                ⚡ 1-Click Auto Fill Test Driver
              </button>
            </div>

            <small style={{ display: 'block', textAlign: 'center', marginTop: '8px', color: '#667085' }}>
              Connected live to MongoDB Atlas Cluster.
            </small>
          </div>
        )}
      </div>
    </div>
  );
}
