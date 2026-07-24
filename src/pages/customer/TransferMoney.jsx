import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function TransferMoney() {
  const [transferType, setTransferType] = useState('beneficiary');
  const [amount, setAmount] = useState('');
  const [showModal, setShowModal] = useState(false);
  
  const handleTransfer = (e) => {
    e.preventDefault();
    if (!amount || amount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }
    if (amount > 85450) {
      toast.error("Insufficient balance");
      return;
    }
    setShowModal(true);
  };

  const confirmTransfer = () => {
    setShowModal(false);
    toast.success("Transfer successful!");
    setAmount('');
  };

  return (
    <div className="transfer-container">
      <h2>Transfer Money</h2>
      
      <div className="grid-2">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Transfer Details</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleTransfer}>
              <div className="form-group">
                <label className="form-label">From Account</label>
                <select className="form-control">
                  <option>Savings - ₹85,450.00</option>
                  <option>Current - ₹19,400.00</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Transfer To</label>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <label><input type="radio" name="transferType" checked={transferType === 'own'} onChange={() => setTransferType('own')} /> Own Account</label>
                  <label><input type="radio" name="transferType" checked={transferType === 'beneficiary'} onChange={() => setTransferType('beneficiary')} /> Beneficiary</label>
                  <label><input type="radio" name="transferType" checked={transferType === 'new'} onChange={() => setTransferType('new')} /> New Account</label>
                </div>
              </div>

              {transferType === 'beneficiary' && (
                <div className="form-group">
                  <label className="form-label">Select Beneficiary</label>
                  <select className="form-control">
                    <option>Rahul Patil - SBI (****4455)</option>
                    <option>Priya Sharma - HDFC (****1234)</option>
                    <option>Amit Kumar - ICICI (****9876)</option>
                  </select>
                </div>
              )}

              {transferType === 'new' && (
                <>
                  <div className="form-group">
                    <label className="form-label">Account Number</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">IFSC Code</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Account Holder Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </>
              )}

              <div className="form-group">
                <label className="form-label">Amount</label>
                <div className="input-group">
                  <span className="input-icon">₹</span>
                  <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Purpose/Remarks</label>
                <input type="text" className="form-control" placeholder="Optional" />
              </div>

              <button type="submit" className="btn btn-primary btn-block">Transfer Now</button>
            </form>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Quick Transfer</h3>
          </div>
          <div className="card-body">
            <p style={{marginBottom: '15px'}}>Select a saved beneficiary for quick transfer.</p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
              <div className="card" style={{padding: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '15px'}} onClick={() => {setTransferType('beneficiary'); toast.info("Beneficiary selected");}}>
                <div className="profile-avatar" style={{width: '40px', height: '40px', fontSize: '1rem'}}>RP</div>
                <div>
                  <div style={{fontWeight: 'bold'}}>Rahul Patil</div>
                  <div style={{fontSize: '0.85em', color: '#666'}}>SBI • ****4455</div>
                </div>
              </div>
              <div className="card" style={{padding: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '15px'}} onClick={() => {setTransferType('beneficiary'); toast.info("Beneficiary selected");}}>
                <div className="profile-avatar" style={{width: '40px', height: '40px', fontSize: '1rem'}}>PS</div>
                <div>
                  <div style={{fontWeight: 'bold'}}>Priya Sharma</div>
                  <div style={{fontSize: '0.85em', color: '#666'}}>HDFC • ****1234</div>
                </div>
              </div>
              <div className="card" style={{padding: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '15px'}} onClick={() => {setTransferType('beneficiary'); toast.info("Beneficiary selected");}}>
                <div className="profile-avatar" style={{width: '40px', height: '40px', fontSize: '1rem'}}>AK</div>
                <div>
                  <div style={{fontWeight: 'bold'}}>Amit Kumar</div>
                  <div style={{fontSize: '0.85em', color: '#666'}}>ICICI • ****9876</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Confirm Transfer</h3>
            <div style={{margin: '20px 0'}}>
              <p>Are you sure you want to transfer <strong>₹{amount}</strong>?</p>
            </div>
            <div className="modal-actions">
              <button className="btn btn-outline" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={confirmTransfer}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
