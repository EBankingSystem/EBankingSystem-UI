import React from 'react';
import { Link } from 'react-router-dom';
import { FiShield, FiTrendingUp, FiCreditCard } from 'react-icons/fi';

function LandingPage() {
  return (
    <div className="landing-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8fafc' }}>
      {/* Navbar */}
      <nav style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ fontSize: '32px' }}>🏦</div>
          <h1 style={{ margin: 0, fontSize: '24px', color: '#0a1929', fontWeight: 800 }}>FINIX BANKING</h1>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Link to="/login" className="btn btn-outline">Login</Link>
          <Link to="/register" className="btn btn-primary">Open Account</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '48px', color: '#1a1a2e', fontWeight: 800, marginBottom: '20px', maxWidth: '800px' }}>
          Secure Banking for a <span style={{ color: '#0B5ED7' }}>Better Tomorrow</span>
        </h1>
        <p style={{ fontSize: '18px', color: '#6c757d', maxWidth: '600px', marginBottom: '40px', lineHeight: 1.6 }}>
          Experience next-generation digital banking. Manage your accounts, transfer funds, and apply for loans entirely online with enterprise-grade security.
        </p>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/register" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '16px' }}>Open an Account Today</Link>
          <Link to="/login" className="btn btn-outline" style={{ padding: '14px 32px', fontSize: '16px' }}>Access Dashboard</Link>
        </div>

        {/* Feature Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1000px', width: '100%', marginTop: '80px' }}>
          <div className="card" style={{ padding: '30px', textAlign: 'center', marginBottom: 0 }}>
            <div className="auth-icon blue" style={{ margin: '0 auto 20px' }}><FiShield /></div>
            <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#1a1a2e' }}>Bank-Grade Security</h3>
            <p style={{ color: '#6c757d', fontSize: '14px', margin: 0 }}>Your funds and data are protected with 256-bit encryption and two-factor authentication.</p>
          </div>
          <div className="card" style={{ padding: '30px', textAlign: 'center', marginBottom: 0 }}>
            <div className="auth-icon green" style={{ margin: '0 auto 20px' }}><FiTrendingUp /></div>
            <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#1a1a2e' }}>High Interest Rates</h3>
            <p style={{ color: '#6c757d', fontSize: '14px', margin: 0 }}>Grow your wealth faster with industry-leading interest rates on savings and fixed deposits.</p>
          </div>
          <div className="card" style={{ padding: '30px', textAlign: 'center', marginBottom: 0 }}>
            <div className="auth-icon red" style={{ margin: '0 auto 20px' }}><FiCreditCard /></div>
            <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#1a1a2e' }}>Zero Hidden Fees</h3>
            <p style={{ color: '#6c757d', fontSize: '14px', margin: 0 }}>What you see is what you get. Enjoy banking with absolutely no hidden maintenance charges.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
