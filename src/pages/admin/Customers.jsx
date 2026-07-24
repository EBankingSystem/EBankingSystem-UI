import React, { useState } from 'react';
import { FiSearch, FiEye, FiEdit2, FiTrash2, FiAlertCircle } from 'react-icons/fi';
import { toast } from 'react-toastify';

function Customers() {
  const [customers, setCustomers] = useState([
    { id: 'CUST001', name: 'Pranav Patil', email: 'pranav@example.com', phone: '9876543210', status: 'Active', joined: '2023-01-15' },
    { id: 'CUST002', name: 'Aadarsh Patil', email: 'aadarsh@example.com', phone: '9876543211', status: 'Active', joined: '2023-02-20' },
  ]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState(null);

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
        <button className="btn btn-primary">+ Add Customer</button>
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
                    <button className="btn-icon"><FiEdit2 /></button>
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
    </div>
  );
}

export default Customers;
