import React from 'react';
import { Link } from 'react-router-dom';
import { FiFileText, FiCreditCard, FiTrendingUp, FiClipboard } from 'react-icons/fi';

function EmployeeDashboard() {
  const kycRequests = [
    { id: 1, customer: 'Ramesh Verma', date: '2024-07-24' },
    { id: 2, customer: 'Sunita Sharma', date: '2024-07-23' },
    { id: 3, customer: 'Vikram Singh', date: '2024-07-23' },
    { id: 4, customer: 'Priya Desai', date: '2024-07-22' },
    { id: 5, customer: 'Amit Patel', date: '2024-07-21' },
  ];

  const transactions = [
    { id: 1, date: '2024-07-24', description: 'Money Transfer', amount: 5000, status: 'SUCCESS' },
    { id: 2, date: '2024-07-24', description: 'Cash Deposit', amount: 20000, status: 'SUCCESS' },
    { id: 3, date: '2024-07-23', description: 'Cheque Clearance', amount: 15000, status: 'SUCCESS' },
    { id: 4, date: '2024-07-23', description: 'Loan EMI', amount: 8500, status: 'SUCCESS' },
    { id: 5, date: '2024-07-22', description: 'Fund Transfer', amount: 12000, status: 'SUCCESS' },
  ];

  return (
    <div className="page-wrapper">
      <h2>Employee Dashboard</h2>
      
      <div className="stat-cards">
        <div className="stat-card">
          <div className="stat-card-icon orange"><FiFileText size={24} /></div>
          <div className="stat-card-info">
            <h3>42</h3>
            <p>KYC Pending</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon blue"><FiCreditCard size={24} /></div>
          <div className="stat-card-info">
            <h3>32</h3>
            <p>Accounts Opened</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon green"><FiTrendingUp size={24} /></div>
          <div className="stat-card-info">
            <h3>118</h3>
            <p>Active Loans</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon red"><FiClipboard size={24} /></div>
          <div className="stat-card-info">
            <h3>7</h3>
            <p>Today's Tasks</p>
          </div>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-header flex-between">
            <h3 className="card-title">Pending KYC Requests</h3>
            <Link to="/employee/kyc-requests" className="card-action">View All</Link>
          </div>
          <div className="card-body">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Submitted On</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {kycRequests.map(req => (
                  <tr key={req.id}>
                    <td>{req.customer}</td>
                    <td>{req.date}</td>
                    <td><button className="btn btn-sm btn-primary">Review</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card-header flex-between">
            <h3 className="card-title">Recent Transactions</h3>
            <Link to="/employee/transactions" className="card-action">View All</Link>
          </div>
          <div className="card-body">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(txn => (
                  <tr key={txn.id}>
                    <td>{txn.date}</td>
                    <td>{txn.description}</td>
                    <td>₹{txn.amount.toLocaleString()}</td>
                    <td><span className="badge badge-success">{txn.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
