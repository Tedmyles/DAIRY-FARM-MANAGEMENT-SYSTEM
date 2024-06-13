import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config/urlConfig';
import './styles/MedicationAdministration.css'; // Import the CSS file

const MedicationAdministrationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    tagId: '',
    date: '',
    medicationName: '',
    dosage: '',
    method: '',
    administeredBy: '',
    notes: ''
  });

  const [animalTags, setAnimalTags] = useState([]);

  useEffect(() => {
    const fetchAnimalTags = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/animals`);
        const tags = response.data.map(animal => animal.tagId);
        setAnimalTags(tags);
      } catch (error) {
        console.error('Error fetching animal tags:', error);
      }
    };

    fetchAnimalTags();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/api/medicationAdministration`, formData);
      onClose();
    } catch (error) {
      console.error('Error adding medication administration record:', error);
    }
  };

  return (
    <div className="form-container" style={{ maxHeight: '500px', overflowY: 'auto' }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tag ID:</label>
          <select name="tagId" value={formData.tagId} onChange={handleChange} required>
            <option value="" disabled>Select Tag ID</option>
            {animalTags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Medication Name:</label>
          <input type="text" name="medicationName" value={formData.medicationName} onChange={handleChange} required />
        </div>
        <div>
          <label>Dosage:</label>
          <input type="text" name="dosage" value={formData.dosage} onChange={handleChange} required />
        </div>
        <div>
          <label>Method:</label>
          <input type="text" name="method" value={formData.method} onChange={handleChange} required />
        </div>
        <div>
          <label>Administered By:</label>
          <input type="text" name="administeredBy" value={formData.administeredBy} onChange={handleChange} required />
        </div>
        <div>
          <label>Notes:</label>
          <textarea name="notes" value={formData.notes} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default MedicationAdministrationForm;
