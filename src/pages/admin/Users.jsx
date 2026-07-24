import React, { useState } from 'react';
import { FiEdit2, FiTrash2, FiAlertCircle } from 'react-icons/fi';
import { toast } from 'react-toastify';

function Users() {
  const [users, setUsers] = useState([
    { id: 'USR001', name: 'Super Admin', email: 'admin@gmail.com', role: 'Admin', status: 'Active', lastLogin: '2024-07-24 09:00' },
    { id: 'USR002', name: 'Sandesh Waingade', email: 'sandesh@gmail.com', role: 'Manager', status: 'Active', lastLogin: '2024-07-24 09:15' },
    { id: 'USR003', name: 'Aadarsh Patil', email: 'aadarsh@gmail.com', role: 'Staff', status: 'Active', lastLogin: '2024-07-24 09:30' },
    { id: 'USR004', name: 'Pranav Patil', email: 'pranav@gmail.com', role: 'Staff', status: 'Inactive', lastLogin: '2024-07-20 18:00' },
    { id: 'USR005', name: 'Anish Warushe', email: 'anish@gmail.com', role: 'Manager', status: 'Active', lastLogin: '2024-07-23 10:00' },
    { id: 'USR006', name: 'Kumar Ghatage', email: 'kumar@gmail.com', role: 'Staff', status: 'Active', lastLogin: '2024-07-24 08:45' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const getRoleBadge = (role) => {
    switch(role) {
      case 'Admin': return 'badge badge-danger';
      case 'Manager': return 'badge badge-warning';
      case 'Staff': return 'badge badge-info';
      default: return 'badge';
    }
  };

  const handleDeleteClick = (id) => {
    setUserToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setUsers(users.filter(u => u.id !== userToDelete));
    setShowDeleteModal(false);
    toast.success('User deleted successfully');
  };

  return (
    <div className="page-wrapper">
      <div className="section-header flex-between">
        <h2>Users</h2>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>+ Add User</button>
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Last Login</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td><span className={getRoleBadge(user.role)}>{user.role}</span></td>
                  <td>
                    <span className={`badge ${user.status === 'Active' ? 'badge-success' : 'badge-danger'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>{user.lastLogin}</td>
                  <td>
                    <button className="btn-icon"><FiEdit2 /></button>
                    <button className="btn-icon" onClick={() => handleDeleteClick(user.id)}><FiTrash2 /></button>
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
            <h3>Add/Edit User</h3>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Enter name" />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label className="form-label">Role</label>
              <select className="form-control">
                <option>Admin</option>
                <option>Manager</option>
                <option>Staff</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input type="text" className="form-control" placeholder="Enter phone number" />
            </div>
            <div className="modal-actions">
              <button className="btn btn-outline" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={() => setShowModal(false)}>Save User</button>
            </div>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-icon red"><FiAlertCircle size={32} /></div>
            <h3>Delete User</h3>
            <p>Are you sure you want to delete this user?</p>
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

export default Users;
