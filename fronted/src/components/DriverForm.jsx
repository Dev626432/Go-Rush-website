import React, { useState } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import { api } from '../services/api';

export default function DriverForm({ close, action }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setErrorMsg('');
    setIsSubmitting(true);
    
    try {
      const response = await api.registerDriver(formData);
      if (response.success) {
        localStorage.setItem('token', response.data.token);
        setSubmitted(true);
        action('Registration successful!');
      }
    } catch (error) {
      setErrorMsg(error.message || 'Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-overlay" onClick={close}>
      <div className="driver-form" style={{ maxHeight: '90vh', overflowY: 'auto' }} onClick={(event) => event.stopPropagation()}>
        {submitted ? (
          <div className="form-success">
            <div>
              <Check size={25} />
            </div>
            <h2>Registration Successful!</h2>
            <p>Your driver account has been created securely. Our team will contact you shortly.</p>
            <button className="primary-cta" onClick={close}>
              Back to GoRush <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <>
            <button className="form-close" onClick={close} aria-label="Close registration modal">
              <X size={19} />
            </button>
            <div className="form-kicker">DRIVER REGISTRATION</div>
            <h2>
              Ready to move
              <br />
              <em>forward?</em>
            </h2>
            <p>Tell us about yourself to begin your journey.</p>
            
            {errorMsg && <div style={{ color: '#ef4444', marginBottom: '15px', fontSize: '14px', padding: '10px', background: '#fef2f2', borderRadius: '6px' }}>{errorMsg}</div>}

            <label>
              Full name
              <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="e.g. Arjun Kumar" />
            </label>
            <label>
              Mobile number
              <div className="phone-input">
                <span>+91</span>
                <input name="phone" value={formData.phone} onChange={handleChange} placeholder="98765 43210" />
              </div>
            </label>
            <label>
              Email address
              <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="arjun@example.com" />
            </label>
            <label>
              Password
              <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Secure password" />
            </label>
            <label>
              Date of Birth
              <input name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleChange} />
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

            <label className="check-label">
              <input type="checkbox" defaultChecked /> I agree to the GoRush terms and privacy policy.
            </label>
            
            <button
              className="primary-cta form-submit"
              disabled={isSubmitting}
              onClick={handleSubmit}
            >
              {isSubmitting ? (
                <>
                  <span className="btn-spinner" /> Creating account...
                </>
              ) : (
                <>
                  Start registration <ArrowRight size={16} />
                </>
              )}
            </button>
            <small>We securely encrypt your personal details.</small>
          </>
        )}
      </div>
    </div>
  );
}
