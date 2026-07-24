import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLock, FiArrowLeft, FiEye, FiEyeOff } from 'react-icons/fi';
import { toast } from 'react-toastify';

function ChangePassword() {
  const [current, setCurrent] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirm, setConfirm] = useState('');
  
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!current || !newPass || !confirm) {
      toast.error('Please fill all fields');
      return;
    }
    if (newPass !== confirm) {
      toast.error('New password and confirm password do not match');
      return;
    }
    toast.success('Password updated successfully');
    navigate('/login');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="back-link" onClick={() => navigate(-1)}>
          <FiArrowLeft /> Back
        </div>
        
        <div className="auth-icon green">
          <FiLock />
        </div>
        
        <h2 className="mb-1">Change Your Password</h2>
        <p className="login-subtitle">For your security, please change your password</p>
        
        <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
          <div className="form-group">
            <label className="form-label">Current Password</label>
            <div className="input-group">
              <input 
                type={showCurrent ? "text" : "password"} 
                className="form-control" 
                value={current}
                onChange={(e) => setCurrent(e.target.value)}
              />
              <button type="button" className="input-icon" onClick={() => setShowCurrent(!showCurrent)}>
                {showCurrent ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">New Password</label>
            <div className="input-group">
              <input 
                type={showNew ? "text" : "password"} 
                className="form-control" 
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
              />
              <button type="button" className="input-icon" onClick={() => setShowNew(!showNew)}>
                {showNew ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">Confirm New Password</label>
            <div className="input-group">
              <input 
                type={showConfirm ? "text" : "password"} 
                className="form-control" 
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
              <button type="button" className="input-icon" onClick={() => setShowConfirm(!showConfirm)}>
                {showConfirm ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary btn-block mt-3">
            UPDATE PASSWORD
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
