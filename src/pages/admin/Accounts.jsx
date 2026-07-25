import React, { useState } from 'react';
import { FiSearch, FiEye, FiEdit2, FiLock, FiUnlock } from 'react-icons/fi';
import { toast } from 'react-toastify';

function Accounts() {
  const accounts = [
    { id: 'ACC-20240001', name: 'Aadarsh Patil', type: 'Savings', balance: 45000, status: 'Active', opened: '2026-01-15' },
    { id: 'ACC-20240002', name: 'Kumar Ghatage', type: 'Current', balance: 120000, status: 'Active', opened: '2026-02-20' },
    { id: 'ACC-20240003', name: 'Sahebrao Salunkhe', type: 'Savings', balance: 5000, status: 'Dormant', opened: '2026-03-10' },
    { id: 'ACC-20240004', name: 'Uday Mahilamuri', type: 'Fixed Deposit', balance: 500000, status: 'Active', opened: '2026-04-05' },
    { id: 'ACC-20240005', name: 'Abhishek Patil', type: 'Savings', balance: 85000, status: 'Active', opened: '2026-05-12' },
    { id: 'ACC-20240006', name: 'Vaibhav Patil', type: 'Current', balance: 250000, status: 'Frozen', opened: '2026-06-18' },
    { id: 'ACC-20240007', name: 'Suyash Wagh', type: 'Savings', balance: 12000, status: 'Active', opened: '2026-07-22' },
  ];

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    setShowAddModal(false);
    toast.success('Account created successfully!');
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setShowEditModal(false);
    toast.success('Account updated successfully!');
  };

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
      <div className="section-header flex-between">
        <h2>Accounts</h2>
        <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>+ New Account</button>
      </div>

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

      <div className="card">
        <div className="card-body">
          <table className="data-table">
            <thead>
              <tr>
                <th>Account No</th>
                <th>Customer Name</th>
                <th>Type</th>
                <th>Balance</th>
                <th>Status</th>
                <th>Opened Date</th>
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
                  <td>{acc.opened}</td>
                  <td>
                    <button className="btn-icon"><FiEye /></button>
                    <button className="btn-icon" onClick={() => { setCurrentAccount(acc); setShowEditModal(true); }}><FiEdit2 /></button>
                    <button className="btn-icon" onClick={() => toast.info(`Account status toggled for ${acc.id}`)}>
                      {acc.status === 'Frozen' ? <FiUnlock /> : <FiLock />}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <span>Page 1 of 8</span>
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

      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-box" style={{ maxWidth: '500px' }}>
            <h3>Create New Account</h3>
            <form onSubmit={handleAddSubmit} style={{ textAlign: 'left', marginTop: '20px' }}>
              <div className="form-group">
                <label className="form-label">Customer ID / Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="form-group">
                <label className="form-label">Account Type</label>
                <select className="form-control" required>
                  <option>Savings</option>
                  <option>Current</option>
                  <option>Fixed Deposit</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Initial Deposit (₹)</label>
                <input type="number" className="form-control" required />
              </div>
              <div className="modal-actions" style={{ marginTop: '24px' }}>
                <button type="button" className="btn btn-outline" onClick={() => setShowAddModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Create Account</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showEditModal && currentAccount && (
        <div className="modal-overlay">
          <div className="modal-box" style={{ maxWidth: '500px' }}>
            <h3>Edit Account: {currentAccount.id}</h3>
            <form onSubmit={handleEditSubmit} style={{ textAlign: 'left', marginTop: '20px' }}>
              <div className="form-group">
                <label className="form-label">Account Type</label>
                <select className="form-control" defaultValue={currentAccount.type} required>
                  <option>Savings</option>
                  <option>Current</option>
                  <option>Fixed Deposit</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Status</label>
                <select className="form-control" defaultValue={currentAccount.status} required>
                  <option>Active</option>
                  <option>Dormant</option>
                  <option>Frozen</option>
                </select>
              </div>
              <div className="modal-actions" style={{ marginTop: '24px' }}>
                <button type="button" className="btn btn-outline" onClick={() => setShowEditModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Accounts;
