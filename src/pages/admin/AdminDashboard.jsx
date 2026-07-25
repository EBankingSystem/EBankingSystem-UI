import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUsers, FiCreditCard, FiFileText, FiTrendingUp } from 'react-icons/fi';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function AdminDashboard() {
  const navigate = useNavigate();
  const lineData = [
    { name: 'Jan', value: 800 },
    { name: 'Feb', value: 920 },
    { name: 'Mar', value: 1050 },
    { name: 'Apr', value: 1100 },
    { name: 'May', value: 1180 },
    { name: 'Jun', value: 1258 },
  ];

  const barData = [
    { name: 'Savings', value: 1200 },
    { name: 'Current', value: 845 },
    { name: 'Fixed Deposit', value: 500 },
    { name: 'Loan', value: 300 },
  ];

  const kycRequests = [
    { id: 1, customer: 'Aadarsh Patil', date: '2024-07-20', status: 'Pending' },
    { id: 2, customer: 'Pranav Patil', date: '2024-07-21', status: 'Approved' },
    { id: 3, customer: 'Kumar Ghatage', date: '2024-07-22', status: 'Review' },
    { id: 4, customer: 'Vaibhav Patil', date: '2024-07-23', status: 'Pending' },
    { id: 5, customer: 'Anish Warushe', date: '2024-07-24', status: 'Approved' },
  ];

  const transactions = [
    { id: 1, date: '2024-07-24', description: 'Money Transfer', amount: -5000, status: 'SUCCESS' },
    { id: 2, date: '2024-07-24', description: 'Cash Deposit', amount: 70000, status: 'SUCCESS' },
    { id: 3, date: '2024-07-23', description: 'Electricity Bill', amount: -1450, status: 'SUCCESS' },
    { id: 4, date: '2024-07-23', description: 'Loan Disbursed', amount: 100000, status: 'SUCCESS' },
    { id: 5, date: '2024-07-22', description: 'Salary Credit', amount: 45000, status: 'SUCCESS' },
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Pending': return 'badge badge-warning';
      case 'Approved': return 'badge badge-success';
      case 'Review': return 'badge badge-info';
      case 'SUCCESS': return 'badge badge-success';
      default: return 'badge';
    }
  };

  return (
    <div className="page-wrapper">
      <h2>Admin Dashboard</h2>
      
      <div className="stat-cards">
        <div className="stat-card">
          <div className="stat-card-icon blue"><FiUsers size={24} /></div>
          <div className="stat-card-info">
            <h3>1,258</h3>
            <p>Total Customers</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon green"><FiCreditCard size={24} /></div>
          <div className="stat-card-info">
            <h3>2,845</h3>
            <p>Total Accounts</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon orange"><FiFileText size={24} /></div>
          <div className="stat-card-info">
            <h3>42</h3>
            <p>Pending KYC</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon red"><FiTrendingUp size={24} /></div>
          <div className="stat-card-info">
            <h3>18</h3>
            <p>Pending Loans</p>
          </div>
        </div>
      </div>

      <div className="grid-2">
        {/* <div className="card">
          <div className="card-header">
            <h3 className="card-title">Customer Growth</h3>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div> */}
        {/* <div className="card">
          <div className="card-header">
            <h3 className="card-title">Account Statistics</h3>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div> */}
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-header flex-between">
            <h3 className="card-title">Recent KYC Requests</h3>
            <Link to="/admin/kyc-requests" className="card-action">View All</Link>
          </div>
          <div className="card-body">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Submitted On</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {kycRequests.map(req => (
                  <tr key={req.id}>
                    <td>{req.customer}</td>
                    <td>{req.date}</td>
                    <td><span className={getStatusBadge(req.status)}>{req.status}</span></td>
                    <td><button className="btn btn-sm btn-primary" onClick={() => navigate('/admin/kyc-requests')}>Review</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <div className="card-header flex-between">
            <h3 className="card-title">Recent Transactions</h3>
            <Link to="/admin/transactions" className="card-action">View All</Link>
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
                    <td className={txn.amount > 0 ? 'amount-positive' : 'amount-negative'}>
                      {txn.amount > 0 ? '+' : '-'}₹{Math.abs(txn.amount).toLocaleString()}
                    </td>
                    <td><span className={getStatusBadge(txn.status)}>{txn.status}</span></td>
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

export default AdminDashboard;
