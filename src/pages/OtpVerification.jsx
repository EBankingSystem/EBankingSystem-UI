import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiShield, FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

function OtpVerification() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(25);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    
    if (element.nextSibling && element.value !== '') {
      element.nextSibling.focus();
    }
  };

  const handleVerify = () => {
    if (otp.join('').length === 6) {
      toast.success('Verified successfully!');
      if (user) {
        navigate(`/${user.role.toLowerCase()}/dashboard`);
      } else {
        navigate('/login');
      }
    } else {
      toast.error('Please enter a valid 6-digit OTP');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="back-link" onClick={() => navigate(-1)}>
          <FiArrowLeft /> Back
        </div>
        
        <div className="auth-icon blue">
          <FiShield />
        </div>
        
        <h2 className="mb-1">Two Factor Authentication</h2>
        <p className="login-subtitle">Enter the 6 digit code sent to your registered mobile number ****7890</p>
        
        <div className="otp-inputs">
          {otp.map((data, index) => {
            return (
              <input
                className="otp-input"
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={e => handleChange(e.target, index)}
                onFocus={e => e.target.select()}
              />
            );
          })}
        </div>
        
        <div className="mb-3 text-center" style={{ fontSize: '14px', color: '#6c757d' }}>
          Didn't receive code?{' '}
          {timeLeft > 0 ? (
            <span>Resend (00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft})</span>
          ) : (
            <span className="form-link clickable" onClick={() => setTimeLeft(25)}>Resend Now</span>
          )}
        </div>
        
        <button className="btn btn-danger btn-block" onClick={handleVerify}>
          VERIFY & CONTINUE
        </button>
      </div>
    </div>
  );
}

export default OtpVerification;
