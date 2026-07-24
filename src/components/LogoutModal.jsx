import React from 'react';
import { FiLogOut } from 'react-icons/fi';

function LogoutModal({ show, onClose, onConfirm }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-icon red">
          <FiLogOut />
        </div>
        <h2>Logout</h2>
        <p style={{ color: '#6c757d', marginBottom: '20px' }}>
          Are you sure you want to logout?
        </p>
        <div className="modal-actions">
          <button className="btn btn-outline" onClick={onClose}>
            CANCEL
          </button>
          <button className="btn btn-danger" onClick={onConfirm}>
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
