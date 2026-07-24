import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export default function CustTransactions() {
  const [activeTab, setActiveTab] = useState('all');

  const transactions = [
    { id: 'TXN20240012', date: '28 May 2024', desc: 'Salary Credit - TechCorp', type: 'Credit', amt: '+₹45,000.00', bal: '₹85,450.00' },
    { id: 'TXN20240011', date: '25 May 2024', desc: 'Amazon Purchase', type: 'Debit', amt: '-₹2,450.00', bal: '₹40,450.00' },
    { id: 'TXN20240010', date: '24 May 2024', desc: 'Transfer to Rahul Patil', type: 'Transfer', amt: '-₹5,000.00', bal: '₹42,900.00' },
    { id: 'TXN20240009', date: '22 May 2024', desc: 'FD Interest Credit', type: 'Credit', amt: '+₹3,550.00', bal: '₹47,900.00' },
    { id: 'TXN20240008', date: '21 May 2024', desc: 'Electricity Bill - MSEDCL', type: 'Debit', amt: '-₹1,450.00', bal: '₹44,350.00' },
    { id: 'TXN20240007', date: '20 May 2024', desc: 'Cash Deposit', type: 'Credit', amt: '+₹10,000.00', bal: '₹45,800.00' },
    { id: 'TXN20240006', date: '19 May 2024', desc: 'ATM Withdrawal', type: 'Debit', amt: '-₹2,000.00', bal: '₹35,800.00' },
    { id: 'TXN20240005', date: '15 May 2024', desc: 'UPI - Swiggy', type: 'Debit', amt: '-₹450.00', bal: '₹37,800.00' },
    { id: 'TXN20240004', date: '12 May 2024', desc: 'Transfer from Priya', type: 'Transfer', amt: '+₹8,000.00', bal: '₹38,250.00' },
    { id: 'TXN20240003', date: '10 May 2024', desc: 'Mobile Recharge', type: 'Debit', amt: '-₹599.00', bal: '₹30,250.00' },
    { id: 'TXN20240002', date: '05 May 2024', desc: 'Dividend Credit', type: 'Credit', amt: '+₹1,200.00', bal: '₹30,849.00' },
    { id: 'TXN20240001', date: '01 May 2024', desc: 'Netflix Subscription', type: 'Debit', amt: '-₹649.00', bal: '₹29,649.00' },
  ];

  return (
    <div>
      <h2>Transaction History</h2>

      <div className="grid-2" style={{ marginBottom: '20px' }}>
        <div className="card" style={{ background: 'linear-gradient(to right, #e0f7fa, #80deea)', padding: '15px' }}>
          <h4>Total Credits</h4>
          <h2 style={{ color: '#00695c' }}>₹1,25,000</h2>
        </div>
        <div className="card" style={{ background: 'linear-gradient(to right, #ffebee, #ffcdd2)', padding: '15px' }}>
          <h4>Total Debits</h4>
          <h2 style={{ color: '#c62828' }}>₹42,500</h2>
        </div>
      </div>

      <div className="card">
        <div className="toolbar" style={{ padding: '15px', display: 'flex', gap: '15px', borderBottom: '1px solid #eee' }}>
          <div className="search-box" style={{ flex: 1, display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '4px', padding: '5px 10px' }}>
            <FiSearch className="search-box-icon" />
            <input type="text" placeholder="Search transactions..." style={{ border: 'none', outline: 'none', marginLeft: '10px', width: '100%' }} />
          </div>
          <select className="filter-select form-control" style={{ width: '150px' }}>
            <option>All Types</option>
            <option>Credit</option>
            <option>Debit</option>
            <option>Transfer</option>
          </select>
          <input type="date" className="form-control" style={{ width: '150px' }} />
          <input type="date" className="form-control" style={{ width: '150px' }} />
          <button className="btn btn-outline">Export</button>
        </div>

        <div className="tab-bar" style={{ padding: '0 15px' }}>
          <div className={`tab-item ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>All Transactions</div>
          <div className={`tab-item ${activeTab === 'credits' ? 'active' : ''}`} onClick={() => setActiveTab('credits')}>Credits</div>
          <div className={`tab-item ${activeTab === 'debits' ? 'active' : ''}`} onClick={() => setActiveTab('debits')}>Debits</div>
          <div className={`tab-item ${activeTab === 'transfers' ? 'active' : ''}`} onClick={() => setActiveTab('transfers')}>Transfers</div>
        </div>

        <div className="card-body">
          <table className="data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Transaction ID</th>
                <th>Description</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Balance After</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, index) => (
                <tr key={index}>
                  <td>{txn.date}</td>
                  <td>{txn.id}</td>
                  <td>{txn.desc}</td>
                  <td>{txn.type}</td>
                  <td className={txn.amt.startsWith('+') ? 'amount-positive' : 'amount-negative'}>{txn.amt}</td>
                  <td>{txn.bal}</td>
                  <td><span className="badge badge-success">Success</span></td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', gap: '5px' }}>
            <button className="page-btn">Prev</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
