import React, { useState } from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function Beneficiaries() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDelModal, setShowDelModal] = useState(false);
  const navigate = useNavigate();

  const mockBeneficiaries = [
    { id: 1, name: 'Sandesh Waingade', bank: 'SBI', acc: '****4455', ifsc: 'SBIN0001234', initials: 'RP' },
    { id: 2, name: 'Aadarsh Patil', bank: 'HDFC', acc: '****1234', ifsc: 'HDFC0004567', initials: 'PS' },
    { id: 3, name: 'Pranav Patil', bank: 'ICICI', acc: '****9876', ifsc: 'ICIC0008901', initials: 'AK' },
    { id: 4, name: 'Anish Warushe', bank: 'Axis Bank', acc: '****5678', ifsc: 'UTIB0002345', initials: 'NG' },
  ];

  return (
    <div>
      <div className="flex-between">
        <h2>Beneficiaries</h2>
        <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>+ Add Beneficiary</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {mockBeneficiaries.map(ben => (
          <div key={ben.id} className="card" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
              <div className="profile-avatar" style={{ width: '50px', height: '50px', fontSize: '1.2rem' }}>{ben.initials}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{ben.name}</div>
                <div style={{ color: '#666', fontSize: '0.9rem' }}>{ben.bank}</div>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="btn-icon" onClick={() => setShowAddModal(true)}><FiEdit2 /></button>
                <button className="btn-icon" style={{ color: 'red' }} onClick={() => setShowDelModal(true)}><FiTrash2 /></button>
              </div>
            </div>
            <div style={{ marginBottom: '15px', fontSize: '0.9rem' }}>
              <div><strong>Account:</strong> {ben.acc}</div>
              <div><strong>IFSC:</strong> {ben.ifsc}</div>
            </div>
            <button className="btn btn-sm btn-primary btn-block" onClick={() => navigate('/customer/transfer')}>Quick Transfer</button>
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>{showAddModal ? "Add Beneficiary" : "Edit Beneficiary"}</h3>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label className="form-label">Account Number</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label className="form-label">Confirm Account Number</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">IFSC Code</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label className="form-label">Bank Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Nickname (Optional)</label>
              <input type="text" className="form-control" />
            </div>
            <div className="modal-actions">
              <button className="btn btn-outline" onClick={() => setShowAddModal(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={() => setShowAddModal(false)}>Save</button>
            </div>
          </div>
        </div>
      )}

      {showDelModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Delete Beneficiary</h3>
            <p>Are you sure you want to delete this beneficiary? This action cannot be undone.</p>
            <div className="modal-actions">
              <button className="btn btn-outline" onClick={() => setShowDelModal(false)}>Cancel</button>
              <button className="btn btn-danger" onClick={() => setShowDelModal(false)}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
