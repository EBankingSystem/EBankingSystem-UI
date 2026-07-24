import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function CustProfile() {
  const { user } = useAuth();
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <div>
      <div className="flex-between">
        <h2>My Profile</h2>
        <button className="btn btn-primary" onClick={() => setShowEditModal(true)}>Edit Profile</button>
      </div>

      <div className="profile-section card" style={{ padding: '30px', textAlign: 'center', marginBottom: '20px' }}>
        <div className="profile-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="profile-avatar" style={{ width: '100px', height: '100px', fontSize: '2.5rem', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0ea5e9', color: 'white', borderRadius: '50%' }}>
            {user?.name ? user.name.split(' ').map(n => n[0]).join('') : 'PP'}
          </div>
          <h2 style={{ margin: '0 0 5px 0' }}>{user?.name || 'Pranav Patil'}</h2>
          <p style={{ margin: '0 0 10px 0', color: '#666' }}>{user?.email || 'pranav@example.com'}</p>
          <span className="badge badge-info" style={{ padding: '5px 15px', borderRadius: '20px' }}>Customer</span>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Personal Information</h3>
          </div>
          <div className="card-body">
            <div className="info-grid">
              <div className="info-item">
                <label>Full Name</label>
                <p>{user?.name || 'Pranav Patil'}</p>
              </div>
              <div className="info-item">
                <label>Email</label>
                <p>{user?.email || 'pranav@example.com'}</p>
              </div>
              <div className="info-item">
                <label>Phone</label>
                <p>+91 98765 43210</p>
              </div>
              <div className="info-item">
                <label>Date of Birth</label>
                <p>15 Aug 1995</p>
              </div>
              <div className="info-item">
                <label>Gender</label>
                <p>Male</p>
              </div>
              <div className="info-item">
                <label>Occupation</label>
                <p>Software Engineer</p>
              </div>
              <div className="info-item" style={{ gridColumn: '1 / -1' }}>
                <label>Address</label>
                <p>42 MG Road, Pune, Maharashtra - 411001</p>
              </div>
              <div className="info-item" style={{ gridColumn: '1 / -1' }}>
                <label>Customer ID</label>
                <p style={{ fontWeight: 'bold' }}>CUST-2024-0042</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Bank Details</h3>
            </div>
            <div className="card-body">
              <div className="info-grid">
                <div className="info-item" style={{ gridColumn: '1 / -1' }}>
                  <label>Primary Account</label>
                  <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>SA-2024-004521</p>
                </div>
                <div className="info-item">
                  <label>Branch</label>
                  <p>Pune Main</p>
                </div>
                <div className="info-item">
                  <label>IFSC Code</label>
                  <p>EBNK0001234</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Security Settings</h3>
            </div>
            <div className="card-body" style={{ padding: '0' }}>
              <Link to="/customer/change-password" style={{ display: 'block', padding: '15px', borderBottom: '1px solid #eee', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong>Change Password</strong>
                  <span style={{ color: '#0ea5e9' }}>Update &rarr;</span>
                </div>
              </Link>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', borderBottom: '1px solid #eee' }}>
                <div>
                  <strong>Two-Factor Authentication</strong>
                  <p style={{ margin: '5px 0 0', fontSize: '0.85em', color: '#666' }}>Require OTP for all transactions</p>
                </div>
                <input type="checkbox" defaultChecked style={{ width: '40px', height: '20px' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px' }}>
                <div>
                  <strong>Login Alerts</strong>
                  <p style={{ margin: '5px 0 0', fontSize: '0.85em', color: '#666' }}>Get notified of new logins</p>
                </div>
                <input type="checkbox" defaultChecked style={{ width: '40px', height: '20px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '20px' }}>
        <div className="card-header">
          <h3 className="card-title">Connected Devices</h3>
        </div>
        <div className="card-body">
          <table className="data-table">
            <thead>
              <tr>
                <th>Device</th>
                <th>Browser</th>
                <th>Last Active</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Windows PC</td>
                <td>Chrome</td>
                <td>Just now (Current)</td>
                <td><button className="btn btn-sm btn-outline" disabled>Current</button></td>
              </tr>
              <tr>
                <td>iPhone 13</td>
                <td>Safari</td>
                <td>Yesterday, 10:45 AM</td>
                <td><button className="btn btn-sm btn-danger">Revoke</button></td>
              </tr>
              <tr>
                <td>MacBook Pro</td>
                <td>Firefox</td>
                <td>15 May 2024, 02:30 PM</td>
                <td><button className="btn btn-sm btn-danger">Revoke</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {showEditModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Edit Profile</h3>
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input type="text" className="form-control" defaultValue="+91 98765 43210" />
            </div>
            <div className="form-group">
              <label className="form-label">Occupation</label>
              <input type="text" className="form-control" defaultValue="Software Engineer" />
            </div>
            <div className="form-group">
              <label className="form-label">Address</label>
              <textarea className="form-control" rows="3" defaultValue="42 MG Road, Pune, Maharashtra - 411001"></textarea>
            </div>
            <div className="modal-actions">
              <button className="btn btn-outline" onClick={() => setShowEditModal(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={() => setShowEditModal(false)}>Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
