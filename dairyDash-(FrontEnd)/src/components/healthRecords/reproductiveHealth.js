import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config/urlConfig';
import './styles/ReproductiveHealthForm.css'; // Import the CSS file

const ReproductiveHealthForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    tagId: '',
    breedingDate: '',
    pregnancyCheckDate: '',
    result: '',
    calvingDate: '',
    postPartumHealthStatus: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/api/reproductiveHealth`, formData);
      onClose();
    } catch (error) {
      console.error('Error adding reproductive health record:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label>Tag ID:</label>
        <input type="text" name="tagId" value={formData.tagId} onChange={handleChange} required />
      </div>
      <div>
        <label>Breeding Date:</label>
        <input type="date" name="breedingDate" value={formData.breedingDate} onChange={handleChange} required />
      </div>
      <div>
        <label>Pregnancy Check Date:</label>
        <input type="date" name="pregnancyCheckDate" value={formData.pregnancyCheckDate} onChange={handleChange} />
      </div>
      <div>
        <label>Result:</label>
        <input type="text" name="result" value={formData.result} onChange={handleChange} />
      </div>
      <div>
        <label>Calving Date:</label>
        <input type="date" name="calvingDate" value={formData.calvingDate} onChange={handleChange} />
      </div>
      <div>
        <label>Post-Partum Health Status:</label>
        <textarea name="postPartumHealthStatus" value={formData.postPartumHealthStatus} onChange={handleChange}></textarea>
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default ReproductiveHealthForm;
