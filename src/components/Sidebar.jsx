import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  FiGrid, FiUsers, FiFileText, FiCreditCard, FiDollarSign, 
  FiUserCheck, FiClipboard, FiBell, FiUser, FiLogOut, FiTrendingUp, FiSend, FiBookmark 
} from 'react-icons/fi';
import LogoutModal from './LogoutModal';

function Sidebar({ isOpen }) {
  const { user, logout } = useAuth();
  const [showLogout, setShowLogout] = useState(false);

  if (!user) return null;

  const adminMenu = [
    { path: '/admin/dashboard', name: 'Dashboard', icon: <FiGrid /> },
    { path: '/admin/customers', name: 'Customers', icon: <FiUsers /> },
    { path: '/admin/kyc-requests', name: 'KYC Requests', icon: <FiFileText /> },
    { path: '/admin/accounts', name: 'Accounts', icon: <FiCreditCard /> },
    { path: '/admin/transactions', name: 'Transactions', icon: <FiDollarSign /> },
    { path: '/admin/users', name: 'Users', icon: <FiUserCheck /> },
    { path: '/admin/audit-logs', name: 'Audit Logs', icon: <FiClipboard /> },
    { path: '/admin/notifications', name: 'Notifications', icon: <FiBell /> }
  ];

  const employeeMenu = [
    { path: '/employee/dashboard', name: 'Dashboard', icon: <FiGrid /> },
    { path: '/employee/kyc-requests', name: 'KYC Requests', icon: <FiFileText /> },
    { path: '/employee/accounts', name: 'Accounts', icon: <FiCreditCard /> },
    { path: '/employee/transactions', name: 'Transactions', icon: <FiDollarSign /> },
    { path: '/employee/loans', name: 'Loans', icon: <FiTrendingUp /> }
  ];

  const customerMenu = [
    { path: '/customer/dashboard', name: 'Dashboard', icon: <FiGrid /> },
    { path: '/customer/accounts', name: 'Accounts', icon: <FiCreditCard /> },
    { path: '/customer/transfer', name: 'Transfer Money', icon: <FiSend /> },
    { path: '/customer/beneficiaries', name: 'Beneficiaries', icon: <FiBookmark /> },
    { path: '/customer/transactions', name: 'Transactions', icon: <FiDollarSign /> },
    { path: '/customer/kyc', name: 'KYC', icon: <FiFileText /> },
    { path: '/customer/notifications', name: 'Notifications', icon: <FiBell /> }
  ];

  let currentMenu = [];
  let profilePath = '';
  
  if (user.role === 'ADMIN') {
    currentMenu = adminMenu;
    profilePath = '/admin/profile';
  } else if (user.role === 'EMPLOYEE') {
    currentMenu = employeeMenu;
    profilePath = '/employee/profile';
  } else if (user.role === 'CUSTOMER') {
    currentMenu = customerMenu;
    profilePath = '/customer/profile';
  }

  return (
    <>
      <div className={`sidebar ${!isOpen ? 'collapsed' : ''}`}>
        <div className="sidebar-brand">
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>🏦 E-BANKING</span>
        </div>
        <ul className="sidebar-menu">
          {currentMenu.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path} className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>
                <span className="sidebar-icon">{item.icon}</span>
                {item.name}
              </NavLink>
            </li>
          ))}
          <div className="sidebar-divider"></div>
          <li>
            <NavLink to={profilePath} className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>
              <span className="sidebar-icon"><FiUser /></span>
              Profile
            </NavLink>
          </li>
          <li>
            <div className="sidebar-item logout" onClick={() => setShowLogout(true)}>
              <span className="sidebar-icon"><FiLogOut /></span>
              Logout
            </div>
          </li>
        </ul>
      </div>

      <LogoutModal 
        show={showLogout} 
        onClose={() => setShowLogout(false)} 
        onConfirm={() => {
          setShowLogout(false);
          logout();
        }}
      />
    </>
  );
}

export default Sidebar;
