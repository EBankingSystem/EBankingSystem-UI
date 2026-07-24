import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { FiSend, FiUserPlus, FiFileText, FiTrendingUp } from 'react-icons/fi';

export default function CustomerDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="section-header">
        <h2>Welcome, {user?.name || 'Pranav Patil'} 🤗</h2>
      </div>

      <div className="account-cards">
        <div className="account-card savings">
          <div className="account-type">Savings Account</div>
          <div className="account-number">SA-****4521</div>
          <div className="account-balance">₹85,450.00</div>
        </div>
        <div className="account-card current">
          <div className="account-type">Current Account</div>
          <div className="account-number">CA-****7832</div>
          <div className="account-balance">₹19,400.00</div>
        </div>
        <div className="account-card fixed">
          <div className="account-type">Fixed Deposit</div>
          <div className="account-number">FD-****1290</div>
          <div className="account-balance">₹1,00,000.00</div>
        </div>
      </div>

      <div className="quick-actions">
        <div className="quick-action-card" onClick={() => navigate('/customer/transfer')}>
          <div className="quick-action-icon"><FiSend /></div>
          <div className="quick-action-label">Transfer Money</div>
        </div>
        <div className="quick-action-card" onClick={() => navigate('/customer/beneficiaries')}>
          <div className="quick-action-icon"><FiUserPlus /></div>
          <div className="quick-action-label">Add Beneficiary</div>
        </div>
        <div className="quick-action-card" onClick={() => navigate('/customer/transactions')}>
          <div className="quick-action-icon"><FiFileText /></div>
          <div className="quick-action-label">View Statements</div>
        </div>
        <div className="quick-action-card" onClick={() => navigate('/customer/accounts')}>
          <div className="quick-action-icon"><FiTrendingUp /></div>
          <div className="quick-action-label">Open FD</div>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Recent Transactions</h3>
            <Link to="/customer/transactions" className="card-action">View All</Link>
          </div>
          <div className="card-body">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>24 May 2024</td>
                  <td>Money Transfer to Rahul</td>
                  <td>Debit</td>
                  <td className="amount-negative">-₹5,000.00</td>
                  <td><span className="badge badge-success">Success</span></td>
                </tr>
                <tr>
                  <td>23 May 2024</td>
                  <td>Salary Credit</td>
                  <td>Credit</td>
                  <td className="amount-positive">+₹45,000.00</td>
                  <td><span className="badge badge-success">Success</span></td>
                </tr>
                <tr>
                  <td>21 May 2024</td>
                  <td>Electricity Bill</td>
                  <td>Debit</td>
                  <td className="amount-negative">-₹1,450.00</td>
                  <td><span className="badge badge-success">Success</span></td>
                </tr>
                <tr>
                  <td>20 May 2024</td>
                  <td>Cash Deposit</td>
                  <td>Credit</td>
                  <td className="amount-positive">+₹10,000.00</td>
                  <td><span className="badge badge-success">Success</span></td>
                </tr>
                <tr>
                  <td>19 May 2024</td>
                  <td>ATM Withdrawal</td>
                  <td>Debit</td>
                  <td className="amount-negative">-₹2,000.00</td>
                  <td><span className="badge badge-success">Success</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Notifications</h3>
            <Link to="/customer/notifications" className="card-action">View All</Link>
          </div>
          <div className="card-body">
            <div className="notification-list">
              <div className="notification-item">
                <div className="notification-dot green"></div>
                <div className="notification-content">
                  <h4>Money Transfer Successful</h4>
                  <p>₹5,000 transferred to Rahul Patil</p>
                  <small>24 May 2024, 10:30 AM</small>
                </div>
              </div>
              <div className="notification-item">
                <div className="notification-dot blue"></div>
                <div className="notification-content">
                  <h4>KYC Submitted</h4>
                  <p>Your KYC is under review</p>
                  <small>22 May 2024, 02:15 PM</small>
                </div>
              </div>
              <div className="notification-item">
                <div className="notification-dot orange"></div>
                <div className="notification-content">
                  <h4>FD Maturity Alert</h4>
                  <p>Your FD will mature on 15 Jun 2024</p>
                  <small>20 May 2024, 09:00 AM</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
