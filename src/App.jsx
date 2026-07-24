import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import DashboardLayout from './components/DashboardLayout'

const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const LandingPage = lazy(() => import('./pages/LandingPage'))
const OtpVerification = lazy(() => import('./pages/OtpVerification'))
const ChangePassword = lazy(() => import('./pages/ChangePassword'))
const ChangePasswordPage = lazy(() => import('./pages/ChangePasswordPage'))

// Admin
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'))
const Customers = lazy(() => import('./pages/admin/Customers'))
const KycRequests = lazy(() => import('./pages/admin/KycRequests'))
const AdminAccounts = lazy(() => import('./pages/admin/Accounts'))
const AdminTransactions = lazy(() => import('./pages/admin/Transactions'))
const Users = lazy(() => import('./pages/admin/Users'))
const AuditLogs = lazy(() => import('./pages/admin/AuditLogs'))
const AdminNotifications = lazy(() => import('./pages/admin/AdminNotifications'))
const AdminProfile = lazy(() => import('./pages/admin/AdminProfile'))

// Employee
const EmployeeDashboard = lazy(() => import('./pages/employee/EmployeeDashboard'))
const EmpKycRequests = lazy(() => import('./pages/employee/EmpKycRequests'))
const EmpAccounts = lazy(() => import('./pages/employee/EmpAccounts'))
const EmpTransactions = lazy(() => import('./pages/employee/EmpTransactions'))
const EmpLoans = lazy(() => import('./pages/employee/EmpLoans'))
const EmpProfile = lazy(() => import('./pages/employee/EmpProfile'))

// Customer
const CustomerDashboard = lazy(() => import('./pages/customer/CustomerDashboard'))
const CustAccounts = lazy(() => import('./pages/customer/CustAccounts'))
const TransferMoney = lazy(() => import('./pages/customer/TransferMoney'))
const Beneficiaries = lazy(() => import('./pages/customer/Beneficiaries'))
const CustTransactions = lazy(() => import('./pages/customer/CustTransactions'))
const Kyc = lazy(() => import('./pages/customer/Kyc'))
const CustNotifications = lazy(() => import('./pages/customer/CustNotifications'))
const CustProfile = lazy(() => import('./pages/customer/CustProfile'))

function App() {
  return (
    <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/change-password" element={<ChangePassword />} />

        <Route path="/admin" element={<ProtectedRoute role="ADMIN"><DashboardLayout /></ProtectedRoute>}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="kyc-requests" element={<KycRequests />} />
          <Route path="accounts" element={<AdminAccounts />} />
          <Route path="transactions" element={<AdminTransactions />} />
          <Route path="users" element={<Users />} />
          <Route path="audit-logs" element={<AuditLogs />} />
          <Route path="notifications" element={<AdminNotifications />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="change-password" element={<ChangePasswordPage />} />
        </Route>

        <Route path="/employee" element={<ProtectedRoute role="EMPLOYEE"><DashboardLayout /></ProtectedRoute>}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<EmployeeDashboard />} />
          <Route path="kyc-requests" element={<EmpKycRequests />} />
          <Route path="accounts" element={<EmpAccounts />} />
          <Route path="transactions" element={<EmpTransactions />} />
          <Route path="loans" element={<EmpLoans />} />
          <Route path="profile" element={<EmpProfile />} />
          <Route path="change-password" element={<ChangePasswordPage />} />
        </Route>

        <Route path="/customer" element={<ProtectedRoute role="CUSTOMER"><DashboardLayout /></ProtectedRoute>}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<CustomerDashboard />} />
          <Route path="accounts" element={<CustAccounts />} />
          <Route path="transfer" element={<TransferMoney />} />
          <Route path="beneficiaries" element={<Beneficiaries />} />
          <Route path="transactions" element={<CustTransactions />} />
          <Route path="kyc" element={<Kyc />} />
          <Route path="notifications" element={<CustNotifications />} />
          <Route path="profile" element={<CustProfile />} />
          <Route path="change-password" element={<ChangePasswordPage />} />
        </Route>

        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  )
}

export default App
