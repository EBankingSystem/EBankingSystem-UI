import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { toast } from 'react-toastify';

function ChangePasswordPage() {
  const [current, setCurrent] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirm, setConfirm] = useState('');
  
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

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
    setCurrent('');
    setNewPass('');
    setConfirm('');
  };

  const rules = [
    { text: 'Minimum 8 characters', valid: newPass.length >= 8 },
    { text: 'At least one uppercase letter', valid: /[A-Z]/.test(newPass) },
    { text: 'At least one number', valid: /[0-9]/.test(newPass) },
    { text: 'At least one special character', valid: /[^A-Za-z0-9]/.test(newPass) }
  ];

  return (
    <div className="grid-2">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Change Password</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
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
            
            <button type="submit" className="btn btn-danger mt-2">
              UPDATE PASSWORD
            </button>
          </form>
        </div>
      </div>
      
      <div>
        <div className="password-policy" style={{ marginTop: 0 }}>
          <h4>Password Policy</h4>
          {rules.map((rule, idx) => (
            <div key={idx} className={`policy-item ${rule.valid ? 'valid' : ''}`}>
              <div className="dot"></div>
              {rule.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChangePasswordPage;
