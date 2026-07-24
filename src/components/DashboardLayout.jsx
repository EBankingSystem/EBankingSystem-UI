import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="main-layout">
      <Sidebar isOpen={sidebarOpen} />
      <div className="content-area">
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="page-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
