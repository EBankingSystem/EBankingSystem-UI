import React, { useState } from 'react';
import { FiSearch, FiAlertCircle } from 'react-icons/fi';
import { toast } from 'react-toastify';

function EmpKycRequests() {
  const [requests, setRequests] = useState([
    { id: 1, name: 'Ramesh Verma', docType: 'Aadhaar Card', date: '2024-07-24', status: 'Pending' },
    { id: 2, name: 'Sunita Sharma', docType: 'PAN Card', date: '2024-07-23', status: 'Pending' },
    { id: 3, name: 'Vikram Singh', docType: 'Passport', date: '2024-07-23', status: 'Approved' },
    { id: 4, name: 'Priya Desai', docType: 'Voter ID', date: '2024-07-22', status: 'Pending' },
    { id: 5, name: 'Amit Patel', docType: 'Aadhaar Card', date: '2024-07-21', status: 'Rejected' },
    { id: 6, name: 'Neha Gupta', docType: 'PAN Card', date: '2024-07-20', status: 'Approved' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalAction, setModalAction] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Pending': return 'badge badge-warning';
      case 'Approved': return 'badge badge-success';
      case 'Rejected': return 'badge badge-danger';
      default: return 'badge';
    }
  };

  const handleActionClick = (id, action) => {
    setSelectedRequest(id);
    setModalAction(action);
    setShowModal(true);
  };

  const confirmAction = () => {
    setRequests(requests.map(r => r.id === selectedRequest ? { ...r, status: modalAction === 'approve' ? 'Approved' : 'Rejected' } : r));
    setShowModal(false);
    toast.success(`KYC request ${modalAction === 'approve' ? 'approved' : 'rejected'}`);
  };

  return (
    <div className="page-wrapper">
      <h2>KYC Requests</h2>

      <div className="toolbar">
        <div className="search-box">
          <FiSearch className="search-box-icon" />
          <input type="text" placeholder="Search customer..." className="form-control" />
        </div>
        <select className="filter-select form-control">
          <option>All Status</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <table className="data-table">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Document Type</th>
                <th>Submitted Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map(req => (
                <tr key={req.id}>
                  <td>{req.name}</td>
                  <td>{req.docType}</td>
                  <td>{req.date}</td>
                  <td><span className={getStatusBadge(req.status)}>{req.status}</span></td>
                  <td>
                    {req.status === 'Pending' ? (
                      <>
                        <button className="btn btn-sm btn-success mr-2" onClick={() => handleActionClick(req.id, 'approve')}>Approve</button>
                        <button className="btn btn-sm btn-danger" onClick={() => handleActionClick(req.id, 'reject')}>Reject</button>
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
            <h3>{modalAction === 'approve' ? 'Approve' : 'Reject'} KYC</h3>
            <p>Are you sure you want to {modalAction} this KYC request?</p>
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

export default EmpKycRequests;
