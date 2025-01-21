import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = ({ cart, total, onPaymentSuccess }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/payment', {
        cart,
        total,
        paymentDetails: { cardNumber, expiryDate, cvv, name }
      });

      if (response.data.success) {
        onPaymentSuccess();
        alert('Payment successful and order validated');
      } else {
        alert('Payment failed');
      }
    } catch (error) {
      console.error('Payment error', error);
      alert('Payment error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Payment Information</h2>
      <div>
        <label>Name on Card:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Card Number:</label>
        <input 
          type="text" 
          value={cardNumber} 
          onChange={(e) => setCardNumber(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Expiry Date:</label>
        <input 
          type="text" 
          value={expiryDate} 
          onChange={(e) => setExpiryDate(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>CVV:</label>
        <input 
          type="text" 
          value={cvv} 
          onChange={(e) => setCvv(e.target.value)} 
          required 
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default PaymentForm;