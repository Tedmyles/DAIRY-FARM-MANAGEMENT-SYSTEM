import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config/urlConfig';
import './styles/salesForm.css'; // Import the CSS file for styling

const MilkSalesForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    customerName: '',
    quantity: '',
    pricePerLiter: '',
    saleDate: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/api/milkSales`, formData);
      onClose();
    } catch (error) {
      console.error('Error adding milk sale record:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label>Customer Name:</label>
        <input type="text" name="customerName" value={formData.customerName} onChange={handleChange} required />
      </div>
      <div>
        <label>Quantity (liters):</label>
        <input type="number" step="0.01" name="quantity" value={formData.quantity} onChange={handleChange} required />
      </div>
      <div>
        <label>Price Per Liter (USD):</label>
        <input type="number" step="0.01" name="pricePerLiter" value={formData.pricePerLiter} onChange={handleChange} required />
      </div>
      <div>
        <label>Sale Date:</label>
        <input type="date" name="saleDate" value={formData.saleDate} onChange={handleChange} required />
      </div>
      <div className="button-container">
        <button type="submit" className="submit-button">Submit</button>
        <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
};

export default MilkSalesForm;
