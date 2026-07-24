import React, { useState } from 'react';

export default function CustNotifications() {
  const [activeTab, setActiveTab] = useState('all');

  const notifications = [
    { id: 1, type: 'transaction', title: 'Money transfer successful', desc: '₹5,000 transferred to Rahul Patil', time: '10 mins ago', dot: 'green', unread: true },
    { id: 2, type: 'transaction', title: 'Salary credited', desc: 'Your salary of ₹45,000 has been credited', time: '2 hours ago', dot: 'green', unread: true },
    { id: 3, type: 'transaction', title: 'Bill payment due reminder', desc: 'Electricity bill of ₹1,450 is due tomorrow', time: '5 hours ago', dot: 'orange', unread: true },
    { id: 4, type: 'security', title: 'KYC verification update', desc: 'Your KYC documents are under review', time: '1 day ago', dot: 'blue', unread: true },
    { id: 5, type: 'offer', title: 'New offer: 7% FD rate', desc: 'Open a Fixed Deposit today and earn up to 7% p.a.', time: '2 days ago', dot: 'blue', unread: false },
    { id: 6, type: 'security', title: 'Security alert: New login from Chrome', desc: 'A new login was detected on Windows PC', time: '3 days ago', dot: 'orange', unread: false },
    { id: 7, type: 'transaction', title: 'Account statement ready', desc: 'Your monthly account statement for May is ready', time: '4 days ago', dot: 'blue', unread: false },
    { id: 8, type: 'offer', title: 'Loan pre-approved', desc: 'You are pre-approved for a personal loan of ₹5 Lakhs', time: '5 days ago', dot: 'green', unread: false },
    { id: 9, type: 'transaction', title: 'Card activation reminder', desc: 'Please activate your new debit card ending in 4521', time: '1 week ago', dot: 'orange', unread: false },
    { id: 10, type: 'transaction', title: 'UPI mandate created', desc: 'A new UPI mandate for ₹649 was created for Netflix', time: '1 week ago', dot: 'green', unread: false },
  ];

  const filteredNotifs = notifications.filter(n => {
    if (activeTab === 'all') return true;
    if (activeTab === 'unread') return n.unread;
    return n.type === activeTab;
  });

  return (
    <div>
      <div className="flex-between" style={{ marginBottom: '20px' }}>
        <h2>Notifications</h2>
        <button className="btn btn-outline">Mark All Read</button>
      </div>

      <div className="card">
        <div className="tab-bar" style={{ padding: '10px 15px 0' }}>
          <div className={`tab-item ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>All (10)</div>
          <div className={`tab-item ${activeTab === 'unread' ? 'active' : ''}`} onClick={() => setActiveTab('unread')}>Unread (4)</div>
          <div className={`tab-item ${activeTab === 'transaction' ? 'active' : ''}`} onClick={() => setActiveTab('transaction')}>Transactions</div>
          <div className={`tab-item ${activeTab === 'security' ? 'active' : ''}`} onClick={() => setActiveTab('security')}>Security</div>
          <div className={`tab-item ${activeTab === 'offer' ? 'active' : ''}`} onClick={() => setActiveTab('offer')}>Offers</div>
        </div>

        <div className="card-body" style={{ padding: 0 }}>
          <div className="notification-list" style={{ padding: '15px' }}>
            {filteredNotifs.length > 0 ? filteredNotifs.map(n => (
              <div key={n.id} className="notification-item" style={{ 
                padding: '15px', 
                borderBottom: '1px solid #eee', 
                display: 'flex', 
                gap: '15px',
                backgroundColor: n.unread ? '#f0f9ff' : 'transparent',
                borderRadius: '8px',
                marginBottom: '5px'
              }}>
                <div className={`notification-dot ${n.dot}`} style={{ marginTop: '5px' }}></div>
                <div className="notification-content" style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h4 style={{ margin: '0 0 5px 0', fontWeight: n.unread ? 'bold' : 'normal' }}>{n.title}</h4>
                    <span style={{ fontSize: '0.85em', color: '#666' }}>{n.time}</span>
                  </div>
                  <p style={{ margin: 0, color: '#444' }}>{n.desc}</p>
                </div>
                {n.unread && <button className="btn btn-sm btn-outline" style={{ alignSelf: 'center' }}>Mark as Read</button>}
              </div>
            )) : (
              <div style={{ padding: '30px', textAlign: 'center', color: '#666' }}>
                No notifications found for this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
