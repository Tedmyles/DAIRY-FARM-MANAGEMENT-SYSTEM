import React, { useState } from 'react';
import MilkSalesForm from './salesForm'; // Import the MilkSalesForm component
import Modal from './Modal'; // Import the Modal component
import './styles/salesScreen.css'; // Import the CSS file for styling
import SalesIcon from '../images/sales.png'


const SalesScreen = () => {
  const [showSalesForm, setShowSalesForm] = useState(false);

  const openSalesForm = () => {
    setShowSalesForm(true);
  };

  const closeSalesForm = () => {
    setShowSalesForm(false);
  };

  return (
    <div className="sales-screen">
      <h2>Sales Screen</h2>
      <div className="sales-icon" onClick={openSalesForm}>
      <img src={SalesIcon} alt="Sales" className="icon-image" />
      </div>

      {showSalesForm && (
        <Modal onClose={closeSalesForm}>
          <MilkSalesForm onClose={closeSalesForm} />
        </Modal>
      )}
    </div>
  );
};

export default SalesScreen;
