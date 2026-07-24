import React, { useState } from 'react';
import { FiSearch, FiAlertCircle } from 'react-icons/fi';
import { toast } from 'react-toastify';

function KycRequests() {
  const [requests, setRequests] = useState([
    { id: 1, name: 'Sandesh Waingade', docType: 'Aadhaar Card', date: '2024-07-20', status: 'Pending' },
    { id: 2, name: 'Aadarsh Patil', docType: 'PAN Card', date: '2024-07-21', status: 'Approved' },
    { id: 3, name: 'Pranav Patil', docType: 'Passport', date: '2024-07-22', status: 'Pending' },
    { id: 4, name: 'Anish Warushe', docType: 'Voter ID', date: '2024-07-23', status: 'Rejected' },
    { id: 5, name: 'Kumar Ghatage', docType: 'Aadhaar Card', date: '2024-07-24', status: 'Approved' },
    { id: 6, name: 'Sanjay Kapse', docType: 'PAN Card', date: '2024-07-24', status: 'Pending' },
    { id: 7, name: 'Vaibhav Patil', docType: 'Passport', date: '2024-07-25', status: 'Approved' },
    { id: 8, name: 'Rushikesh Damugade', docType: 'Voter ID', date: '2024-07-25', status: 'Pending' },
  ]);

  const [activeTab, setActiveTab] = useState('All');
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
          <input type="text" placeholder="Search requests..." className="form-control" />
        </div>
        <select className="filter-select form-control">
          <option>All Status</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>
      </div>

      <div className="tab-bar">
        <div className={`tab-item ${activeTab === 'All' ? 'active' : ''}`} onClick={() => setActiveTab('All')}>All (42)</div>
        <div className={`tab-item ${activeTab === 'Pending' ? 'active' : ''}`} onClick={() => setActiveTab('Pending')}>Pending (18)</div>
        <div className={`tab-item ${activeTab === 'Approved' ? 'active' : ''}`} onClick={() => setActiveTab('Approved')}>Approved (16)</div>
        <div className={`tab-item ${activeTab === 'Rejected' ? 'active' : ''}`} onClick={() => setActiveTab('Rejected')}>Rejected (8)</div>
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
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
                  <td>REQ-{req.id.toString().padStart(4, '0')}</td>
                  <td>{req.name}</td>
                  <td>{req.docType}</td>
                  <td>{req.date}</td>
                  <td><span className={getStatusBadge(req.status)}>{req.status}</span></td>
                  <td>
                    <button className="btn btn-sm btn-outline mr-2">View Details</button>
                    {req.status === 'Pending' && (
                      <>
                        <button className="btn btn-sm btn-success mr-2" onClick={() => handleActionClick(req.id, 'approve')}>Approve</button>
                        <button className="btn btn-sm btn-danger" onClick={() => handleActionClick(req.id, 'reject')}>Reject</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <span>Page 1 of 5</span>
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

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className={`modal-icon ${modalAction === 'approve' ? 'green' : 'red'}`}><FiAlertCircle size={32} /></div>
            <h3>{modalAction === 'approve' ? 'Approve' : 'Reject'} KYC Request</h3>
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

export default KycRequests;
