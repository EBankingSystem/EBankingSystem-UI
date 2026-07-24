import React from 'react';
import { Link } from 'react-router-dom';
import { FiUsers } from 'react-icons/fi';

function EmpProfile() {
  return (
    <div className="page-wrapper">
      <div className="profile-section">
        <div className="profile-header">
          <div className="profile-avatar">
            RK
          </div>
          <div className="profile-info">
            <h2>Rajesh Kumar</h2>
            <p>rajesh@finix.com</p>
            <span className="badge badge-info">Employee</span>
          </div>
        </div>
      </div>

      <div className="grid-2 mt-4">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Personal Information</h3>
          </div>
          <div className="card-body">
            <div className="info-grid">
              <div className="info-item">
                <p className="label">Full Name</p>
                <p className="value">Rajesh Kumar</p>
              </div>
              <div className="info-item">
                <p className="label">Email</p>
                <p className="value">rajesh@finix.com</p>
              </div>
              <div className="info-item">
                <p className="label">Phone</p>
                <p className="value">+91 98765 12345</p>
              </div>
              <div className="info-item">
                <p className="label">Employee ID</p>
                <p className="value">EMP-045</p>
              </div>
              <div className="info-item">
                <p className="label">Department</p>
                <p className="value">Operations</p>
              </div>
              <div className="info-item">
                <p className="label">Branch</p>
                <p className="value">Mumbai Main</p>
              </div>
              <div className="info-item">
                <p className="label">Joined Date</p>
                <p className="value">10 Feb, 2022</p>
              </div>
              <div className="info-item">
                <p className="label">Manager Name</p>
                <p className="value">Sandeep Sharma</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Security Settings</h3>
            </div>
            <div className="card-body">
              <div className="form-group flex-between">
                <div>
                  <h4 style={{ margin: 0 }}>Password</h4>
                  <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '0.9em' }}>Update your password regularly</p>
                </div>
                <Link to="/employee/change-password" className="btn btn-outline">Change Password</Link>
              </div>
            </div>
          </div>

          <div className="stat-card" style={{ background: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', padding: '20px' }}>
            <div className="stat-card-icon blue"><FiUsers size={24} /></div>
            <div className="stat-card-info">
              <h3>245</h3>
              <p>Assigned Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmpProfile;
