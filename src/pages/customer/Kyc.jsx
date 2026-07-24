import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

export default function Kyc() {
  return (
    <div>
      <h2>KYC Verification</h2>

      <div className="card" style={{ marginBottom: '20px', background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
        <div className="card-body" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <FiCheckCircle style={{ fontSize: '2rem', color: '#16a34a' }} />
          <div>
            <h3 style={{ margin: 0, color: '#166534' }}>KYC Status: <span className="badge badge-success">Verified</span></h3>
            <p style={{ margin: '5px 0 0', color: '#15803d' }}>Last updated: 15 Jan 2024</p>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '20px' }}>
        <div className="card-header">
          <h3 className="card-title">Your Documents</h3>
        </div>
        <div className="card-body">
          <table className="data-table">
            <thead>
              <tr>
                <th>Document Type</th>
                <th>Document Number</th>
                <th>Status</th>
                <th>Uploaded On</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Aadhaar Card</td>
                <td>XXXX-XXXX-4521</td>
                <td><span className="badge badge-success">Verified</span></td>
                <td>15 Jan 2024</td>
                <td><button className="btn btn-sm btn-outline">View</button></td>
              </tr>
              <tr>
                <td>PAN Card</td>
                <td>ABCDE1234F</td>
                <td><span className="badge badge-success">Verified</span></td>
                <td>15 Jan 2024</td>
                <td><button className="btn btn-sm btn-outline">View</button></td>
              </tr>
              <tr>
                <td>Passport</td>
                <td>J1234567</td>
                <td><span className="badge badge-warning">Pending</span></td>
                <td>20 May 2024</td>
                <td><button className="btn btn-sm btn-outline">View</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Upload New Document</h3>
        </div>
        <div className="card-body">
          <form style={{ maxWidth: '600px' }}>
            <div className="form-group">
              <label className="form-label">Document Type</label>
              <select className="form-control">
                <option>Select Document</option>
                <option>Aadhaar Card</option>
                <option>PAN Card</option>
                <option>Passport</option>
                <option>Voter ID</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Document Number</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label className="form-label">Upload File</label>
              <input type="file" className="form-control" style={{ padding: '8px' }} />
              <small style={{ color: '#666', marginTop: '5px', display: 'block' }}>Accepted formats: PDF, JPG, PNG. Max size: 5MB</small>
            </div>
            <button type="submit" className="btn btn-primary" onClick={(e) => e.preventDefault()}>Submit Document</button>
          </form>
        </div>
      </div>
    </div>
  );
}
