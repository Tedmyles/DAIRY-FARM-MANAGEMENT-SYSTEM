import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config/urlConfig';
import './styles/VaccinationForm.css'; // Import the CSS file

const VaccinationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    tagId: '',
    date: '',
    vaccine: '',
    dosage: '',
    nextDueDate: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/api/vaccinations`, formData);
      onClose();
    } catch (error) {
      console.error('Error adding vaccination:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label>Tag ID:</label>
        <input type="text" name="tagId" value={formData.tagId} onChange={handleChange} required />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </div>
      <div>
        <label>Vaccine:</label>
        <input type="text" name="vaccine" value={formData.vaccine} onChange={handleChange} required />
      </div>
      <div>
        <label>Dosage:</label>
        <input type="text" name="dosage" value={formData.dosage} onChange={handleChange} required />
      </div>
      <div>
        <label>Next Due Date:</label>
        <input type="date" name="nextDueDate" value={formData.nextDueDate} onChange={handleChange} required />
      </div>
      <button type="submit" className="submit-button">Submit</button>
      <button type="button" onClick={onClose} className="cancel-button">Cancel</button>
    </form>
  );
};

export default VaccinationForm;
