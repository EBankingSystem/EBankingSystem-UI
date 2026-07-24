import React from 'react';
import { FiSearch } from 'react-icons/fi';

function EmpTransactions() {
  const transactions = [
    { id: 'TXN-2024001', date: '2024-07-24 10:30', customer: 'Ramesh Verma', type: 'Transfer', amount: 5000, status: 'Completed' },
    { id: 'TXN-2024002', date: '2024-07-24 11:15', customer: 'Sunita Sharma', type: 'Credit', amount: 70000, status: 'Completed' },
    { id: 'TXN-2024003', date: '2024-07-24 14:20', customer: 'Vikram Singh', type: 'Debit', amount: 1450, status: 'Completed' },
    { id: 'TXN-2024004', date: '2024-07-23 09:45', customer: 'Priya Desai', type: 'Credit', amount: 100000, status: 'Pending' },
    { id: 'TXN-2024005', date: '2024-07-23 16:00', customer: 'Amit Patel', type: 'Credit', amount: 45000, status: 'Completed' },
    { id: 'TXN-2024006', date: '2024-07-22 10:10', customer: 'Neha Gupta', type: 'Transfer', amount: 12000, status: 'Failed' },
    { id: 'TXN-2024007', date: '2024-07-22 13:25', customer: 'Suresh Kumar', type: 'Debit', amount: 5000, status: 'Completed' },
    { id: 'TXN-2024008', date: '2024-07-21 11:50', customer: 'Anjali Joshi', type: 'Credit', amount: 20000, status: 'Completed' },
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Completed': return 'badge badge-success';
      case 'Pending': return 'badge badge-warning';
      case 'Failed': return 'badge badge-danger';
      default: return 'badge';
    }
  };

  const getAmountClass = (type) => {
    if (type === 'Credit') return 'amount-positive';
    if (type === 'Debit') return 'amount-negative';
    return '';
  };

  return (
    <div className="page-wrapper">
      <h2>Transactions</h2>

      <div className="toolbar">
        <div className="search-box">
          <FiSearch className="search-box-icon" />
          <input type="text" placeholder="Search transactions..." className="form-control" />
        </div>
        <select className="filter-select form-control">
          <option>All Types</option>
          <option>Credit</option>
          <option>Debit</option>
          <option>Transfer</option>
        </select>
        <input type="date" className="form-control" style={{ width: 'auto' }} />
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <table className="data-table">
            <thead>
              <tr>
                <th>Txn ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(txn => (
                <tr key={txn.id}>
                  <td>{txn.id}</td>
                  <td>{txn.date}</td>
                  <td>{txn.customer}</td>
                  <td>{txn.type}</td>
                  <td className={getAmountClass(txn.type)}>
                    {txn.type === 'Credit' ? '+' : txn.type === 'Debit' ? '-' : ''}₹{txn.amount.toLocaleString()}
                  </td>
                  <td><span className={getStatusBadge(txn.status)}>{txn.status}</span></td>
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
    </div>
  );
}

export default EmpTransactions;
