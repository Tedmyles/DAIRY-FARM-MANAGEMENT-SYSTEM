import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './milkProductionForm.css'; // Import the CSS file
import { BASE_URL } from '../../config/urlConfig';

const MilkProductionForm = ({ onClose }) => {
  const [cows, setCows] = useState([]);
  const [milkRecords, setMilkRecords] = useState([]);
  const [date, setDate] = useState(getCurrentDate());

  // Function to get the current date in YYYY-MM-DD format
  function getCurrentDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  useEffect(() => {
    const fetchCows = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/animals`);
        setCows(response.data);

        // Initialize milkRecords with fetched cows
        const initialRecords = response.data.map(cow => ({
          tagId: cow.tagId,
          morning: '0',
          evening: '0'
        }));
        setMilkRecords(initialRecords);
      } catch (error) {
        console.error('Error fetching cows:', error);
      }
    };

    fetchCows();
  }, []);

  const handleMorningChange = (tagId, e) => {
    const value = e.target.value;
    if (value >= 0) {
      setMilkRecords(prevRecords => 
        prevRecords.map(record =>
          record.tagId === tagId ? { ...record, morning: value } : record
        )
      );
    }
  };

  const handleEveningChange = (tagId, e) => {
    const value = e.target.value;
    if (value >= 0) {
      setMilkRecords(prevRecords => 
        prevRecords.map(record =>
          record.tagId === tagId ? { ...record, evening: value } : record
        )
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const grandTotal = calculateGrandTotal();
    try {
      await axios.post(`${BASE_URL}/milkProduction`, {
        date,
        records: milkRecords.map(record => ({
          tagId: record.tagId,
          morning: parseFloat(record.morning),
          evening: parseFloat(record.evening),
          grandTotal: parseFloat(record.morning) + parseFloat(record.evening),
        }))
      });
      onClose();
    } catch (error) {
      console.error('Error submitting milk production data:', error);
    }
  };

  const calculateGrandTotal = () => {
    return milkRecords.reduce((total, record) => {
      const morning = parseFloat(record.morning) || 0;
      const evening = parseFloat(record.evening) || 0;
      return total + morning + evening;
    }, 0);
  };

  return (
    <div className="milk-production-form-popup">
      <div className="form-header">
        <h2>Milk Production Form</h2>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          className="date-input" 
        />
      </div>
      <form onSubmit={handleSubmit} className="milk-production-form">
        <table className="milk-production-table">
          <thead>
            <tr className='tableHeaders' >
              <th>Tag ID</th>
              <th>Morning (Litres)</th>
              <th>Evening (Litres)</th>
            </tr>
          </thead>
          <tbody>
            {cows.map(cow => (
              <tr key={cow.tagId}>
                <td>{cow.tagId}</td>
                <td>
                  <input 
                    type="number" 
                    value={milkRecords.find(record => record.tagId === cow.tagId)?.morning || '0'} 
                    onChange={(e) => handleMorningChange(cow.tagId, e)} 
                    min="0"
                  />
                </td>
                <td>
                  <input className='milkInput' 
                    type="number" 
                    value={milkRecords.find(record => record.tagId === cow.tagId)?.evening || '0'} 
                    onChange={(e) => handleEveningChange(cow.tagId, e)} 
                    min="0"
                  />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2"><strong>Grand Total</strong></td>
              <td><strong>{calculateGrandTotal()} Litres</strong></td>
            </tr>
          </tfoot>
        </table>
        <div className="form-actions">
          <button type="submit" className="form-submit-btn">Submit</button>
          <button type="button" className="form-cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default MilkProductionForm;
