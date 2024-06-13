import React, { useState } from 'react';
import MilkProductionForm from '../milkProduction/milkProductionForm';
import milkCanIcon from '../images/milkCan.png'; // Import the milkCan.png image
import './milkProductionScreen.css';

const MilkProductionScreen = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className='icons' >
     
      <button className="icon-button" onClick={toggleForm}>
        <img src={milkCanIcon} alt="Add Milk Production" className="icon-image" />
      </button>
      {showForm && <MilkProductionForm onClose={toggleForm} />} {/* Pass onClose prop */}
    </div>
  );
};

export default MilkProductionScreen;
