import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUserPlus, FiEye, FiEyeOff } from 'react-icons/fi';
import { toast } from 'react-toastify';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    panNumber: '',
    aadhaarNumber: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setLoading(true);
    
    // Mock API call
    setTimeout(() => {
      setLoading(false);
      toast.success('Account created successfully! Please login.');
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="auth-page">
      <div className="auth-card" style={{ maxWidth: '600px', margin: '40px 0' }}>
        <Link to="/" className="back-link">
          &larr; Back to Home
        </Link>
        
        <div className="auth-icon blue">
          <FiUserPlus />
        </div>
        
        <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 8px 0', color: '#1a1a2e' }}>Create an Account</h2>
        <p style={{ color: '#6c757d', marginBottom: '30px', fontSize: '14px' }}>
          Open your digital bank account in minutes
        </p>

        <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input 
                type="text" 
                name="fullName"
                className="form-control" 
                placeholder="Enter full name here" 
                value={formData.fullName}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input 
                type="email" 
                name="email"
                className="form-control" 
                placeholder="Email address here" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Phone Number *</label>
              <input 
                type="tel" 
                name="phone"
                className="form-control" 
                placeholder="+91 9999999999" 
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Date of Birth *</label>
              <input 
                type="date" 
                name="dob"
                className="form-control" 
                value={formData.dob}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">PAN Card Number *</label>
              <input 
                type="text" 
                name="panNumber"
                className="form-control" 
                placeholder="ABCDE1234F" 
                value={formData.panNumber}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Aadhaar Card Number *</label>
              <input 
                type="text" 
                name="aadhaarNumber"
                className="form-control" 
                placeholder="1234 5678 9012" 
                value={formData.aadhaarNumber}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group" style={{ gridColumn: '1 / span 2' }}>
              <label className="form-label">Address *</label>
              <input 
                type="text" 
                name="address"
                className="form-control" 
                placeholder="Kolhapur" 
                value={formData.address}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Password *</label>
              <div className="input-group">
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password"
                  className="form-control" 
                  placeholder="Create a strong password" 
                  value={formData.password}
                  onChange={handleChange}
                  required 
                />
                <button type="button" className="input-icon" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Confirm Password *</label>
              <div className="input-group">
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="confirmPassword"
                  className="form-control" 
                  placeholder="Confirm your password" 
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
          </div>

          <div className="checkbox-group" style={{ marginTop: '10px' }}>
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I agree to the Terms & Conditions and Privacy Policy.</label>
          </div>

          <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '24px' }} disabled={loading}>
            {loading ? 'Creating Account...' : 'CREATE ACCOUNT'}
          </button>
          
          <p className="form-text">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
