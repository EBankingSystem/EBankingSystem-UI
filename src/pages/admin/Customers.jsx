import React, { useState } from 'react';
import { FiSearch, FiEye, FiEdit2, FiTrash2, FiAlertCircle } from 'react-icons/fi';
import { toast } from 'react-toastify';

function Customers() {
  const [customers, setCustomers] = useState([
    { id: 'CUST001', name: 'Pranav Patil', email: 'pranav@example.com', phone: '9876543210', status: 'Active', joined: '2023-01-15' },
    { id: 'CUST002', name: 'Aadarsh Patil', email: 'aadarsh@example.com', phone: '9876543211', status: 'Active', joined: '2023-02-20' },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState(null);
  const [currentCustomer, setCurrentCustomer] = useState(null);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    setShowAddModal(false);
    toast.success('Customer added successfully!');
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setShowEditModal(false);
    toast.success('Customer updated successfully!');
  };

  const handleDeleteClick = (id) => {
    setCustomerToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setCustomers(customers.filter(c => c.id !== customerToDelete));
    setShowDeleteModal(false);
    toast.success('Customer deleted successfully');
  };

  return (
    <div className="page-wrapper">
      <div className="section-header flex-between">
        <h2>Customers</h2>
        <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>+ Add Customer</button>
      </div>

      <div className="toolbar">
        <div className="search-box">
          <FiSearch className="search-box-icon" />
          <input type="text" placeholder="Search customers..." className="form-control" />
        </div>
        <select className="filter-select form-control">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      <div className="card">
        <div className="card-body">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Joined Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map(customer => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>
                    <span className={`badge ${customer.status === 'Active' ? 'badge-success' : 'badge-danger'}`}>
                      {customer.status}
                    </span>
                  </td>
                  <td>{customer.joined}</td>
                  <td>
                    <button className="btn-icon"><FiEye /></button>
                    <button className="btn-icon" onClick={() => { setCurrentCustomer(customer); setShowEditModal(true); }}><FiEdit2 /></button>
                    <button className="btn-icon" onClick={() => handleDeleteClick(customer.id)}><FiTrash2 /></button>
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

      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-icon red"><FiAlertCircle size={32} /></div>
            <h3>Delete Customer</h3>
            <p>Are you sure you want to delete this customer? This action cannot be undone.</p>
            <div className="modal-actions">
              <button className="btn btn-outline" onClick={() => setShowDeleteModal(false)}>Cancel</button>
              <button className="btn btn-danger" onClick={confirmDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}

      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-box" style={{ maxWidth: '500px' }}>
            <h3>Add New Customer</h3>
            <form onSubmit={handleAddSubmit} style={{ textAlign: 'left', marginTop: '20px' }}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="modal-actions" style={{ marginTop: '24px' }}>
                <button type="button" className="btn btn-outline" onClick={() => setShowAddModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Save Customer</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showEditModal && currentCustomer && (
        <div className="modal-overlay">
          <div className="modal-box" style={{ maxWidth: '500px' }}>
            <h3>Edit Customer</h3>
            <form onSubmit={handleEditSubmit} style={{ textAlign: 'left', marginTop: '20px' }}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" defaultValue={currentCustomer.name} required />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" defaultValue={currentCustomer.email} required />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input type="text" className="form-control" defaultValue={currentCustomer.phone} required />
              </div>
              <div className="modal-actions" style={{ marginTop: '24px' }}>
                <button type="button" className="btn btn-outline" onClick={() => setShowEditModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Update Customer</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Customers;
