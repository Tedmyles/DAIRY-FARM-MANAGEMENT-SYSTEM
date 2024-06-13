import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config/urlConfig';
import './styles/RoutineHealthCheck.css'; // Import the CSS file

const RoutineHealthCheckForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    tagId: '',
    date: '',
    weight: '',
    bodyConditionScore: '',
    vetNotes: '',
  });

  const [animalTags, setAnimalTags] = useState([]);

  useEffect(() => {
    const fetchAnimalTags = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/animals`);
        console.log('API Response:', response.data); // Debug: log the response
        const tags = response.data.map(animal => animal.tagId);
        setAnimalTags(tags);
        console.log('Animal Tags:', tags); // Debug: log the tags
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
      await axios.post(`${BASE_URL}/api/routineHealthChecks`, formData);
      onClose();
    } catch (error) {
      console.error('Error adding routine health check:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
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
        <label>Weight:</label>
        <input type="number" name="weight" value={formData.weight} onChange={handleChange} required />
      </div>
      <div>
        <label>Body Condition Score:</label>
        <input type="number" step="0.1" name="bodyConditionScore" value={formData.bodyConditionScore} onChange={handleChange} required />
      </div>
      <div>
        <label>Vet Notes:</label>
        <textarea name="vetNotes" value={formData.vetNotes} onChange={handleChange} required></textarea>
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default RoutineHealthCheckForm;
