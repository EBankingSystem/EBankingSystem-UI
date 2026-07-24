import React, { useState } from 'react';
import { FiBell, FiShield, FiAlertTriangle, FiCheckCircle } from 'react-icons/fi';

function AdminNotifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'KYC', title: 'New KYC submission', desc: 'Rahul Patil submitted documents for KYC verification.', time: '10 mins ago', read: false },
    { id: 2, type: 'Alert', title: 'High value transaction alert', desc: 'A transaction of ₹5,00,000 initiated from ACC-20240012.', time: '1 hour ago', read: false },
    { id: 3, type: 'System', title: 'System update available', desc: 'V1.2.4 update is ready to be installed during maintenance window.', time: '2 hours ago', read: false },
    { id: 4, type: 'Security', title: 'Multiple failed logins', desc: '5 failed login attempts detected from IP 192.168.1.100.', time: '3 hours ago', read: false },
    { id: 5, type: 'KYC', title: 'KYC Rejected', desc: 'Document verification failed for Neha Singh.', time: '1 day ago', read: false },
    { id: 6, type: 'Alert', title: 'Account frozen automatically', desc: 'ACC-20240045 frozen due to suspicious activity.', time: '1 day ago', read: true },
    { id: 7, type: 'System', title: 'Database Backup Completed', desc: 'Daily scheduled backup completed successfully.', time: '2 days ago', read: true },
    { id: 8, type: 'KYC', title: 'KYC Approved', desc: 'KYC approved for Amit Kumar.', time: '2 days ago', read: true },
  ]);

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const getIcon = (type) => {
    switch(type) {
      case 'KYC': return <FiCheckCircle className="blue" size={24} />;
      case 'Alert': return <FiAlertTriangle className="orange" size={24} />;
      case 'Security': return <FiShield className="red" size={24} />;
      case 'System': return <FiBell className="green" size={24} />;
      default: return <FiBell size={24} />;
    }
  };

  return (
    <div className="page-wrapper">
      <div className="section-header flex-between">
        <h2>Notifications</h2>
        <button className="btn btn-outline" onClick={markAllRead}>Mark All Read</button>
      </div>

      <div className="tab-bar">
        <div className="tab-item active">All</div>
        <div className="tab-item">Unread ({notifications.filter(n => !n.read).length})</div>
        <div className="tab-item">System</div>
        <div className="tab-item">Alerts</div>
      </div>

      <div className="mt-4" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {notifications.map(note => (
          <div 
            key={note.id} 
            className="card" 
            style={{ 
              borderLeft: note.read ? 'none' : '4px solid #3b82f6',
              cursor: 'pointer'
            }}
            onClick={() => markAsRead(note.id)}
          >
            <div className="card-body" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <div>{getIcon(note.type)}</div>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: 0 }}>{note.title}</h4>
                <p style={{ margin: '5px 0 0 0', color: '#666' }}>{note.desc}</p>
              </div>
              <div style={{ color: '#999', fontSize: '0.9em' }}>{note.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminNotifications;
