import React from 'react';
import { FiSearch } from 'react-icons/fi';

function AuditLogs() {
  const logs = [
    { id: 'LOG-001', time: '2024-07-24 10:05:22', user: 'Admin User', action: 'Login', desc: 'Successful admin login', ip: '192.168.1.1' },
    { id: 'LOG-002', time: '2024-07-24 10:15:45', user: 'Aadarsh Patil', action: 'Transaction', desc: 'Fund transfer of ₹50,000', ip: '10.0.0.15' },
    { id: 'LOG-003', time: '2024-07-24 10:20:10', user: 'System', action: 'KYC', desc: 'KYC document auto-verified', ip: 'localhost' },
    { id: 'LOG-004', time: '2024-07-24 10:35:00', user: 'Kumar Ghatage', action: 'Account', desc: 'Opened new Savings account', ip: '192.168.1.5' },
    { id: 'LOG-005', time: '2024-07-24 11:00:12', user: 'Admin User', action: 'User', desc: 'Created new staff user', ip: '192.168.1.1' },
    { id: 'LOG-006', time: '2024-07-24 11:30:44', user: 'Anish Warushe', action: 'Login', desc: 'Failed login attempt', ip: '10.0.0.22' },
    { id: 'LOG-007', time: '2024-07-24 12:15:30', user: 'System', action: 'Transaction', desc: 'Batch interest processing completed', ip: 'localhost' },
    { id: 'LOG-008', time: '2024-07-24 13:45:20', user: 'Pranav Patil', action: 'Account', desc: 'Frozen account ACC-20240006', ip: '192.168.1.3' },
    { id: 'LOG-009', time: '2024-07-24 14:10:05', user: 'Admin User', action: 'Settings', desc: 'Updated global interest rates', ip: '192.168.1.1' },
    { id: 'LOG-010', time: '2024-07-24 15:20:33', user: 'System', action: 'Backup', desc: 'Daily database backup successful', ip: 'localhost' },
  ];

  return (
    <div className="page-wrapper">
      <h2>Audit Logs</h2>

      <div className="toolbar">
        <div className="search-box">
          <FiSearch className="search-box-icon" />
          <input type="text" placeholder="Search logs..." className="form-control" />
        </div>
        <select className="filter-select form-control">
          <option>All Actions</option>
          <option>Login</option>
          <option>Transaction</option>
          <option>Account</option>
          <option>KYC</option>
        </select>
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <table className="data-table">
            <thead>
              <tr>
                <th>Log ID</th>
                <th>Timestamp</th>
                <th>User</th>
                <th>Action</th>
                <th>Description</th>
                <th>IP Address</th>
              </tr>
            </thead>
            <tbody>
              {logs.map(log => (
                <tr key={log.id}>
                  <td>{log.id}</td>
                  <td>{log.time}</td>
                  <td>{log.user}</td>
                  <td><span className="badge badge-info">{log.action}</span></td>
                  <td>{log.desc}</td>
                  <td>{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <span>Page 1 of 45</span>
            <div>
              <button className="page-btn">Prev</button>
              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <button className="page-btn">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuditLogs;
