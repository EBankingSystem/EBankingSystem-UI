import React, { useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

function EmpAccounts() {
  const [accounts, setAccounts] = useState([
    { id: 'ACC-20240001', name: 'Sandesh Waingade', type: 'Savings', balance: 45000, status: 'Active' },
    { id: 'ACC-20240002', name: 'Aadarsh Patil', type: 'Current', balance: 120000, status: 'Active' },
    { id: 'ACC-20240003', name: 'Pranav Patil', type: 'Savings', balance: 5000, status: 'Dormant' },
    { id: 'ACC-20240004', name: 'Anish Warushe', type: 'Fixed Deposit', balance: 500000, status: 'Active' },
  ]);

  const [selectedAccount, setSelectedAccount] = useState(null);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Active': return 'badge badge-success';
      case 'Frozen': return 'badge badge-danger';
      case 'Dormant': return 'badge badge-warning';
      default: return 'badge';
    }
  };

  return (
    <div className="page-wrapper">
      <h2>Accounts</h2>

      <div className="toolbar">
        <div className="search-box">
          <FiSearch className="search-box-icon" />
          <input type="text" placeholder="Search accounts..." className="form-control" />
        </div>
        <select className="filter-select form-control">
          <option>All Types</option>
          <option>Savings</option>
          <option>Current</option>
          <option>Fixed Deposit</option>
        </select>
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <table className="data-table">
            <thead>
              <tr>
                <th>Account No</th>
                <th>Customer Name</th>
                <th>Type</th>
                <th>Balance</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map(acc => (
                <tr key={acc.id}>
                  <td>{acc.id}</td>
                  <td>{acc.name}</td>
                  <td>{acc.type}</td>
                  <td>₹{acc.balance.toLocaleString()}</td>
                  <td><span className={getStatusBadge(acc.status)}>{acc.status}</span></td>
                  <td>
                    <button className="btn btn-sm btn-primary" onClick={() => setSelectedAccount(acc)}>View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedAccount && (
        <div className="modal-overlay">
          <div className="modal-box" style={{ maxWidth: '600px' }}>
            <div className="flex-between" style={{ marginBottom: '20px' }}>
              <h3 style={{ margin: 0 }}>Account Details</h3>
              <FiX style={{ cursor: 'pointer' }} size={24} onClick={() => setSelectedAccount(null)} />
            </div>
            
            <div className="info-grid" style={{ marginBottom: '20px' }}>
              <div className="info-item">
                <p className="label">Account Number</p>
                <p className="value">{selectedAccount.id}</p>
              </div>
              <div className="info-item">
                <p className="label">Customer Name</p>
                <p className="value">{selectedAccount.name}</p>
              </div>
              <div className="info-item">
                <p className="label">Account Type</p>
                <p className="value">{selectedAccount.type}</p>
              </div>
              <div className="info-item">
                <p className="label">Status</p>
                <p className="value"><span className={getStatusBadge(selectedAccount.status)}>{selectedAccount.status}</span></p>
              </div>
              <div className="info-item">
                <p className="label">Current Balance</p>
                <p className="value" style={{ fontSize: '1.2em', fontWeight: 'bold' }}>₹{selectedAccount.balance.toLocaleString()}</p>
              </div>
            </div>

            <h4 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Recent Transactions</h4>
            <table className="data-table" style={{ fontSize: '0.9em' }}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>24 Jul 2024</td>
                  <td>Cash Deposit</td>
                  <td className="amount-positive">+₹5,000</td>
                </tr>
                <tr>
                  <td>22 Jul 2024</td>
                  <td>ATM Withdrawal</td>
                  <td className="amount-negative">-₹2,000</td>
                </tr>
                <tr>
                  <td>15 Jul 2024</td>
                  <td>Salary Credit</td>
                  <td className="amount-positive">+₹45,000</td>
                </tr>
              </tbody>
            </table>

            <div className="modal-actions" style={{ marginTop: '20px' }}>
              <button className="btn btn-primary" onClick={() => setSelectedAccount(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmpAccounts;
