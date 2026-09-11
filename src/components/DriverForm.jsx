import React, { useState } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';

export default function DriverForm({ close, action }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="form-overlay" onClick={close}>
      <div className="driver-form" onClick={(event) => event.stopPropagation()}>
        {submitted ? (
          <div className="form-success">
            <div>
              <Check size={25} />
            </div>
            <h2>You are on your way.</h2>
            <p>Thanks for your interest. We will send an OTP to your mobile number to begin verification.</p>
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
            <p>Tell us where to reach you. The rest takes just a few minutes.</p>
            <label>
              Full name
              <input placeholder="e.g. Arjun Kumar" />
            </label>
            <label>
              Mobile number
              <div className="phone-input">
                <span>+91</span>
                <input placeholder="98765 43210" />
              </div>
            </label>
            <label>
              City
              <select defaultValue="Indore">
                <option>Indore</option>
                <option>Mumbai</option>
                <option>Pune</option>
                <option>Bengaluru</option>
                <option>Delhi NCR</option>
                <option>Bhopal</option>
              </select>
            </label>
            <label className="check-label">
              <input type="checkbox" defaultChecked /> I agree to the GoRush terms and privacy policy.
            </label>
            <button
              className="primary-cta form-submit"
              disabled={isSubmitting}
              onClick={() => {
                setIsSubmitting(true);
                setTimeout(() => {
                  setIsSubmitting(false);
                  setSubmitted(true);
                  action('Registration started');
                }, 850);
              }}
            >
              {isSubmitting ? (
                <>
                  <span className="btn-spinner" /> Verifying details...
                </>
              ) : (
                <>
                  Start registration <ArrowRight size={16} />
                </>
              )}
            </button>
            <small>We never share your details without permission.</small>
          </>
        )}
      </div>
    </div>
  );
}
