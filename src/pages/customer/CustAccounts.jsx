import React, { useState } from 'react';

export default function CustAccounts() {
  const [activeTab, setActiveTab] = useState('savings');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="accounts-container">
      <div className="flex-between">
        <h2>My Accounts</h2>
        <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Open New Account</button>
      </div>

      <div className="account-cards">
        <div className="account-card savings">
          <div className="account-type">Savings Account <span className="badge badge-success" style={{float: 'right'}}>Active</span></div>
          <div className="account-number">SA-2024-004521</div>
          <div className="account-balance">₹85,450.00</div>
          <div style={{marginTop: '10px', fontSize: '0.85em', opacity: 0.8}}>Last Trxn: 24 May 2024</div>
        </div>
        <div className="account-card current">
          <div className="account-type">Current Account <span className="badge badge-success" style={{float: 'right'}}>Active</span></div>
          <div className="account-number">CA-2024-007832</div>
          <div className="account-balance">₹19,400.00</div>
          <div style={{marginTop: '10px', fontSize: '0.85em', opacity: 0.8}}>Last Trxn: 21 May 2024</div>
        </div>
        <div className="account-card fixed">
          <div className="account-type">Fixed Deposit <span className="badge badge-success" style={{float: 'right'}}>Active</span></div>
          <div className="account-number">FD-2024-001290</div>
          <div className="account-balance">₹1,00,000.00</div>
          <div style={{marginTop: '10px', fontSize: '0.85em', opacity: 0.8}}>Last Trxn: 01 Jan 2024</div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '20px' }}>
        <div className="card-header">
          <h3 className="card-title">Account Details</h3>
        </div>
        <div className="tab-bar">
          <div className={`tab-item ${activeTab === 'savings' ? 'active' : ''}`} onClick={() => setActiveTab('savings')}>Savings</div>
          <div className={`tab-item ${activeTab === 'current' ? 'active' : ''}`} onClick={() => setActiveTab('current')}>Current</div>
          <div className={`tab-item ${activeTab === 'fixed' ? 'active' : ''}`} onClick={() => setActiveTab('fixed')}>Fixed Deposit</div>
        </div>
        
        <div className="card-body">
          {activeTab === 'savings' && (
            <div>
              <div className="info-grid" style={{marginBottom: '20px'}}>
                <div className="info-item">
                  <label>Account Number</label>
                  <p>SA-2024-004521</p>
                </div>
                <div className="info-item">
                  <label>IFSC Code</label>
                  <p>EBNK0001234</p>
                </div>
                <div className="info-item">
                  <label>Branch</label>
                  <p>Pune Main</p>
                </div>
                <div className="info-item">
                  <label>Opening Date</label>
                  <p>15 Aug 2023</p>
                </div>
                <div className="info-item">
                  <label>Current Balance</label>
                  <p>₹85,450.00</p>
                </div>
              </div>
              <h4>Recent Transactions</h4>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>24 May 2024</td><td>Money Transfer to Rahul</td><td className="amount-negative">-₹5,000.00</td></tr>
                  <tr><td>23 May 2024</td><td>Salary Credit</td><td className="amount-positive">+₹45,000.00</td></tr>
                  <tr><td>21 May 2024</td><td>Electricity Bill</td><td className="amount-negative">-₹1,450.00</td></tr>
                  <tr><td>20 May 2024</td><td>Cash Deposit</td><td className="amount-positive">+₹10,000.00</td></tr>
                  <tr><td>19 May 2024</td><td>ATM Withdrawal</td><td className="amount-negative">-₹2,000.00</td></tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'current' && (
            <div>
              <div className="info-grid" style={{marginBottom: '20px'}}>
                <div className="info-item">
                  <label>Account Number</label>
                  <p>CA-2024-007832</p>
                </div>
                <div className="info-item">
                  <label>IFSC Code</label>
                  <p>EBNK0001234</p>
                </div>
                <div className="info-item">
                  <label>Branch</label>
                  <p>Pune Main</p>
                </div>
                <div className="info-item">
                  <label>Opening Date</label>
                  <p>10 Sep 2023</p>
                </div>
                <div className="info-item">
                  <label>Current Balance</label>
                  <p>₹19,400.00</p>
                </div>
              </div>
              <h4>Recent Transactions</h4>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>21 May 2024</td><td>Vendor Payment</td><td className="amount-negative">-₹12,000.00</td></tr>
                  <tr><td>18 May 2024</td><td>Client Invoice</td><td className="amount-positive">+₹25,000.00</td></tr>
                  <tr><td>15 May 2024</td><td>Office Rent</td><td className="amount-negative">-₹15,000.00</td></tr>
                  <tr><td>10 May 2024</td><td>Client Invoice</td><td className="amount-positive">+₹18,000.00</td></tr>
                  <tr><td>05 May 2024</td><td>Internet Bill</td><td className="amount-negative">-₹2,500.00</td></tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'fixed' && (
            <div>
              <div className="info-grid" style={{marginBottom: '20px'}}>
                <div className="info-item">
                  <label>Account Number</label>
                  <p>FD-2024-001290</p>
                </div>
                <div className="info-item">
                  <label>Interest Rate</label>
                  <p>7.1% p.a.</p>
                </div>
                <div className="info-item">
                  <label>Maturity Date</label>
                  <p>15 Jun 2024</p>
                </div>
                <div className="info-item">
                  <label>Opening Date</label>
                  <p>15 Jun 2023</p>
                </div>
                <div className="info-item">
                  <label>Current Value</label>
                  <p>₹1,00,000.00</p>
                </div>
              </div>
              <h4>Recent Transactions</h4>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>01 Jan 2024</td><td>Interest Accrued</td><td className="amount-positive">+₹3,550.00</td></tr>
                  <tr><td>01 Jul 2023</td><td>Interest Accrued</td><td className="amount-positive">+₹3,550.00</td></tr>
                  <tr><td>15 Jun 2023</td><td>Initial Deposit</td><td className="amount-positive">+₹92,900.00</td></tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Open New Account</h3>
            <div className="form-group">
              <label className="form-label">Account Type</label>
              <select className="form-control">
                <option>Savings Account</option>
                <option>Current Account</option>
                <option>Fixed Deposit</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Initial Deposit (₹)</label>
              <input type="number" className="form-control" placeholder="Enter amount" />
            </div>
            <div className="form-group">
              <label className="form-label">Nominee Name</label>
              <input type="text" className="form-control" placeholder="Enter nominee name" />
            </div>
            <div className="modal-actions">
              <button className="btn btn-outline" onClick={() => setIsModalOpen(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={() => setIsModalOpen(false)}>Submit Application</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
