import React, { useState } from 'react';
import { FiSearch, FiAlertCircle } from 'react-icons/fi';
import { toast } from 'react-toastify';

function EmpLoans() {
  const [loans, setLoans] = useState([
    { id: 'LN-202401', customer: 'Ramesh Verma', type: 'Home Loan', amount: 2500000, emi: 22000, status: 'Active' },
    { id: 'LN-202402', customer: 'Sunita Sharma', type: 'Personal Loan', amount: 500000, emi: 12000, status: 'Pending' },
    { id: 'LN-202403', customer: 'Vikram Singh', type: 'Vehicle Loan', amount: 800000, emi: 18000, status: 'Active' },
    { id: 'LN-202404', customer: 'Priya Desai', type: 'Education Loan', amount: 1500000, emi: 15000, status: 'Closed' },
    { id: 'LN-202405', customer: 'Amit Patel', type: 'Home Loan', amount: 3500000, emi: 31000, status: 'Pending' },
    { id: 'LN-202406', customer: 'Neha Gupta', type: 'Personal Loan', amount: 300000, emi: 8000, status: 'Active' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalAction, setModalAction] = useState(null);
  const [selectedLoan, setSelectedLoan] = useState(null);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Active': return 'badge badge-success';
      case 'Pending': return 'badge badge-warning';
      case 'Closed': return 'badge badge-info';
      default: return 'badge';
    }
  };

  const handleActionClick = (id, action) => {
    setSelectedLoan(id);
    setModalAction(action);
    setShowModal(true);
  };

  const confirmAction = () => {
    setLoans(loans.map(l => l.id === selectedLoan ? { ...l, status: modalAction === 'approve' ? 'Active' : 'Closed' } : l));
    setShowModal(false);
    toast.success(`Loan request ${modalAction === 'approve' ? 'approved' : 'rejected'}`);
  };

  return (
    <div className="page-wrapper">
      <h2>Loans</h2>

      <div className="toolbar">
        <div className="search-box">
          <FiSearch className="search-box-icon" />
          <input type="text" placeholder="Search loans..." className="form-control" />
        </div>
        <select className="filter-select form-control">
          <option>All Status</option>
          <option>Active</option>
          <option>Pending</option>
          <option>Closed</option>
        </select>
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <table className="data-table">
            <thead>
              <tr>
                <th>Loan ID</th>
                <th>Customer</th>
                <th>Type</th>
                <th>Amount</th>
                <th>EMI</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loans.map(loan => (
                <tr key={loan.id}>
                  <td>{loan.id}</td>
                  <td>{loan.customer}</td>
                  <td>{loan.type}</td>
                  <td>₹{loan.amount.toLocaleString()}</td>
                  <td>₹{loan.emi.toLocaleString()}</td>
                  <td><span className={getStatusBadge(loan.status)}>{loan.status}</span></td>
                  <td>
                    {loan.status === 'Pending' ? (
                      <>
                        <button className="btn btn-sm btn-success mr-2" onClick={() => handleActionClick(loan.id, 'approve')}>Approve</button>
                        <button className="btn btn-sm btn-danger" onClick={() => handleActionClick(loan.id, 'reject')}>Reject</button>
                      </>
                    ) : (
                      <button className="btn btn-sm btn-outline">View Details</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className={`modal-icon ${modalAction === 'approve' ? 'green' : 'red'}`}><FiAlertCircle size={32} /></div>
            <h3>{modalAction === 'approve' ? 'Approve' : 'Reject'} Loan</h3>
            <p>Are you sure you want to {modalAction} this loan request?</p>
            <div className="modal-actions">
              <button className="btn btn-outline" onClick={() => setShowModal(false)}>Cancel</button>
              <button className={`btn ${modalAction === 'approve' ? 'btn-success' : 'btn-danger'}`} onClick={confirmAction}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmpLoans;
