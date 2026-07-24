import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { toast } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please enter both email and password');
      return;
    }
    
    setLoading(true);
    try {
      const role = login(email, password);
      navigate(`/${role.toLowerCase()}/dashboard`);
    } catch (err) {
      toast.error(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const setDemo = (e, p) => {
    setEmail(e);
    setPassword(p);
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div style={{ fontSize: '64px', marginBottom: '20px' }}>🏦</div>
        <div className="login-brand">FINIX BANKING</div>
        <div className="login-tagline">Secure Banking for Better Tomorrow</div>
      </div>
      <div className="login-right">
        <div className="login-form-container">
          <h1 className="login-title">Welcome Back!</h1>
          <p className="login-subtitle">Please login to your account</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input 
                type="email" 
                className="form-control" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="form-control" 
                  placeholder="Enter your password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" className="input-icon" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>
            
            <div className="flex-between mb-3">
              <div className="checkbox-group mb-0">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#" className="form-link">Forgot Password?</a>
            </div>
            
            <button type="submit" className="btn btn-primary btn-block mb-3" disabled={loading}>
              {loading ? 'LOGGING IN...' : 'LOGIN'}
            </button>
            
            <p className="form-text">
              Don't have an account? <Link to="/register">Register here</Link>
            </p>

            <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #e0e0e0' }}>
              <p style={{ fontSize: '12px', color: '#6c757d', marginBottom: '8px' }}>Demo Accounts:</p>
              <div className="demo-buttons">
                <button type="button" className="demo-btn" onClick={() => setDemo('admin@ebanking.com', 'admin123')}>Admin</button>
                <button type="button" className="demo-btn" onClick={() => setDemo('employee@ebanking.com', 'emp123')}>Employee</button>
                <button type="button" className="demo-btn" onClick={() => setDemo('customer@ebanking.com', 'cust123')}>Customer</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
