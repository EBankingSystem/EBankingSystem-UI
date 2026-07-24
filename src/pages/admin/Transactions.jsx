import React from 'react';
import { FiSearch } from 'react-icons/fi';

function Transactions() {
  const transactions = [
    { id: 'TXN-2024001', date: '2024-07-24 10:30', fromAcc: 'ACC-20240001', toAcc: 'ACC-20240055', type: 'Transfer', amount: 5000, status: 'Completed' },
    { id: 'TXN-2024002', date: '2024-07-24 11:15', fromAcc: 'CASH', toAcc: 'ACC-20240002', type: 'Credit', amount: 70000, status: 'Completed' },
    { id: 'TXN-2024003', date: '2024-07-24 14:20', fromAcc: 'ACC-20240003', toAcc: 'BILLER-ELEC', type: 'Debit', amount: 1450, status: 'Completed' },
    { id: 'TXN-2024004', date: '2024-07-23 09:45', fromAcc: 'LOAN-A/C', toAcc: 'ACC-20240004', type: 'Credit', amount: 100000, status: 'Pending' },
    { id: 'TXN-2024005', date: '2024-07-23 16:00', fromAcc: 'CORP-A/C', toAcc: 'ACC-20240005', type: 'Credit', amount: 45000, status: 'Completed' },
    { id: 'TXN-2024006', date: '2024-07-22 10:10', fromAcc: 'ACC-20240006', toAcc: 'ACC-20240099', type: 'Transfer', amount: 12000, status: 'Failed' },
    { id: 'TXN-2024007', date: '2024-07-22 13:25', fromAcc: 'ACC-20240007', toAcc: 'ATM-WD', type: 'Debit', amount: 5000, status: 'Completed' },
    { id: 'TXN-2024008', date: '2024-07-21 11:50', fromAcc: 'CASH', toAcc: 'ACC-20240008', type: 'Credit', amount: 20000, status: 'Completed' },
    { id: 'TXN-2024009', date: '2024-07-21 15:40', fromAcc: 'ACC-20240001', toAcc: 'MERCHANT', type: 'Debit', amount: 3500, status: 'Completed' },
    { id: 'TXN-2024010', date: '2024-07-20 09:30', fromAcc: 'ACC-20240005', toAcc: 'ACC-20240010', type: 'Transfer', amount: 15000, status: 'Pending' },
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
    return ''; // Transfer can be neutral or depends on context, leaving plain
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

      <div className="card">
        <div className="card-body">
          <table className="data-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Date</th>
                <th>From Account</th>
                <th>To Account</th>
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
                  <td>{txn.fromAcc}</td>
                  <td>{txn.toAcc}</td>
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
            <span>Page 1 of 12</span>
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

export default Transactions;
