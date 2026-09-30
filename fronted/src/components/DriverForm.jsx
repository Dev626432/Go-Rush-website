import React, { useState, useRef } from 'react';
import { ArrowRight, Check, X, AlertCircle, Loader2 } from 'lucide-react';
import { api } from '../services/api';

export default function DriverForm({ close, action }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [agreed, setAgreed] = useState(true);
  const formContainerRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    dateOfBirth: '',
    gender: 'Male',
    city: 'Indore',
    vehicleType: 'Bike / Scooter'
  });

  const handleChange = (e) => {
    setErrorMsg('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!formData.fullName || !formData.fullName.trim()) {
      return 'Please enter your full name.';
    }
    const cleanPhone = formData.phone ? formData.phone.replace(/\D/g, '').slice(-10) : '';
    if (!cleanPhone || cleanPhone.length !== 10 || !/^[6-9]/.test(cleanPhone)) {
      return 'Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).';
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
      // Scroll smoothly to top if the missing field is at the top
      if (formContainerRef.current) {
        formContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
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

      console.log('Submitting driver registration:', submissionData.email, submissionData.phone);
      const response = await api.registerDriver(submissionData);
      
      if (response && response.success) {
        if (response.data && response.data.token) {
          localStorage.setItem('token', response.data.token);
        }
        setSubmitted(true);
        if (action) action('Registration successful! Welcome to GoRush.');
      } else {
        throw new Error(response.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration submission error:', error);
      if (error.message && (error.message.includes('Failed to fetch') || error.message.includes('NetworkError'))) {
        setErrorMsg('Server is currently offline. Please ensure the backend server is running on port 5000.');
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
        style={{ maxHeight: '92vh', overflowY: 'auto' }}
        onClick={(event) => event.stopPropagation()}
      >
        {submitted ? (
          <div className="form-success">
            <div>
              <Check size={25} />
            </div>
            <h2>Registration Successful!</h2>
            <p>Welcome to GoRush, <strong>{formData.fullName}</strong>! Your driver profile has been created securely in our database.</p>
            <button className="primary-cta" onClick={close} style={{ marginTop: '20px' }}>
              Done <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <div>
            <button type="button" className="form-close" onClick={close} aria-label="Close registration modal">
              <X size={19} />
            </button>
            <div className="form-kicker">DRIVER REGISTRATION</div>
            <h2>
              Ready to move
              <br />
              <em>forward?</em>
            </h2>
            <p>Tell us about yourself to begin your journey.</p>
            
            {errorMsg && (
              <div style={{
                color: '#b91c1c',
                marginBottom: '18px',
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

            <label className="check-label" style={{ cursor: 'pointer' }}>
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
                  <Loader2 size={16} className="animate-spin" /> Creating account...
                </>
              ) : (
                <>
                  Start registration <ArrowRight size={16} />
                </>
              )}
            </button>
            <small style={{ display: 'block', textAlign: 'center', marginTop: '10px', color: '#667085' }}>
              We securely encrypt your personal details.
            </small>
          </div>
        )}
      </div>
    </div>
  );
}
