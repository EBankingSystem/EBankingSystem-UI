import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiMenu, FiBell } from 'react-icons/fi';

function Navbar({ onMenuClick }) {
  const { user } = useAuth();
  const location = useLocation();

  let pageTitle = 'Dashboard';
  if (location.pathname.includes('dashboard')) {
    if (user?.role === 'ADMIN') pageTitle = 'Admin Dashboard';
    else if (user?.role === 'EMPLOYEE') pageTitle = 'Employee Dashboard';
    else if (user?.role === 'CUSTOMER') pageTitle = `Welcome, ${user?.name} 🤗`;
  } else {
    const pathParts = location.pathname.split('/');
    const lastPart = pathParts[pathParts.length - 1];
    pageTitle = lastPart.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  return (
    <div className="top-navbar">
      <div className="navbar-left">
        <button className="menu-btn" onClick={onMenuClick}>
          <FiMenu />
        </button>
        <span className="page-title">{pageTitle}</span>
      </div>
      <div className="navbar-right">
        <button className="btn-icon">
          <FiBell />
        </button>
        <div className="navbar-user">
          <div className="navbar-avatar">
            {user?.name?.charAt(0)?.toUpperCase()}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="user-name">{user?.name}</span>
            <span className="user-role">{user?.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
