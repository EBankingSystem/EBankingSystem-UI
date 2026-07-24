import React from 'react';
import { Link } from 'react-router-dom';

function AdminProfile() {
  return (
    <div className="page-wrapper">
      <div className="profile-section">
        <div className="profile-header">
          <div className="profile-avatar">
            SA
          </div>
          <div className="profile-info">
            <h2>Super Admin</h2>
            <p>admin@finix.com</p>
            <span className="badge badge-danger">Admin</span>
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
                <p className="value">Super Admin</p>
              </div>
              <div className="info-item">
                <p className="label">Email</p>
                <p className="value">admin@finix.com</p>
              </div>
              <div className="info-item">
                <p className="label">Phone</p>
                <p className="value">+91 98765 43210</p>
              </div>
              <div className="info-item">
                <p className="label">Role</p>
                <p className="value">System Administrator</p>
              </div>
              <div className="info-item">
                <p className="label">Department</p>
                <p className="value">IT Support</p>
              </div>
              <div className="info-item">
                <p className="label">Employee ID</p>
                <p className="value">EMP-001</p>
              </div>
              <div className="info-item">
                <p className="label">Joined Date</p>
                <p className="value">15 Jan, 2021</p>
              </div>
              <div className="info-item">
                <p className="label">Last Login</p>
                <p className="value">24 Jul, 2024 09:00 AM</p>
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
              <div className="form-group flex-between" style={{ borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                <div>
                  <h4 style={{ margin: 0 }}>Password</h4>
                  <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '0.9em' }}>Update your password regularly</p>
                </div>
                <Link to="/admin/change-password" className="btn btn-outline">Change Password</Link>
              </div>
              <div className="form-group flex-between" style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', paddingTop: '15px' }}>
                <div>
                  <h4 style={{ margin: 0 }}>Two-Factor Authentication</h4>
                  <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '0.9em' }}>Add an extra layer of security</p>
                </div>
                <div style={{ background: '#eee', width: '40px', height: '20px', borderRadius: '10px', position: 'relative' }}>
                  <div style={{ background: '#3b82f6', width: '20px', height: '20px', borderRadius: '50%', position: 'absolute', right: 0 }}></div>
                </div>
              </div>
              <div className="form-group flex-between" style={{ paddingTop: '15px' }}>
                <div>
                  <h4 style={{ margin: 0 }}>Active Sessions</h4>
                  <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '0.9em' }}>Manage your active login sessions</p>
                </div>
                <span className="badge badge-info">2 Active</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Recent Activity</h3>
            </div>
            <div className="card-body">
              <table className="data-table">
                <tbody>
                  <tr>
                    <td>Login from Windows PC</td>
                    <td style={{ textAlign: 'right', color: '#666' }}>Today, 09:00 AM</td>
                  </tr>
                  <tr>
                    <td>Settings Updated</td>
                    <td style={{ textAlign: 'right', color: '#666' }}>Yesterday, 04:30 PM</td>
                  </tr>
                  <tr>
                    <td>Login from Mobile App</td>
                    <td style={{ textAlign: 'right', color: '#666' }}>22 Jul, 08:15 AM</td>
                  </tr>
                  <tr>
                    <td>Password Changed</td>
                    <td style={{ textAlign: 'right', color: '#666' }}>15 Jul, 10:20 AM</td>
                  </tr>
                  <tr>
                    <td>Login from Windows PC</td>
                    <td style={{ textAlign: 'right', color: '#666' }}>14 Jul, 09:05 AM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
