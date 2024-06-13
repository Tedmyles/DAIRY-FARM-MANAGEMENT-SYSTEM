import React, { useState } from 'react';
import LabTestForm from './labTest';
import MedicationForm from './MedicationForm';
import ReproductiveHealthForm from './reproductiveHealth';
import VaccinationForm from './vaccination';
import HealthCheckForm from './healthChecks';
import Modal from './Modal'; // Import the Modal component
import './styles/healthRecordScreen.css'; // Import the CSS file

import labTestIcon from '../images/test.png';
import VaccinationIcon from '../images/vaccination.png';
import ReproductiveHealthIcon from '../images/repro.png';
import MedicationIcon from '../images/medication.png';
import HealthCheckIcon from '../images/checkup.png';

const HealthRecordsScreen = () => {
  const [showLabTestForm, setShowLabTestForm] = useState(false);
  const [showMedicationForm, setShowMedicationForm] = useState(false);
  const [showReproductiveHealthForm, setShowReproductiveHealthForm] = useState(false);
  const [showVaccinationForm, setShowVaccinationForm] = useState(false);
  const [showHealthCheckForm, setShowHealthCheckForm] = useState(false);

  return (
    <div>
      <h2>Health Records</h2>
      <div className="icon-buttons">
        {/* Icon to open Lab Test form */}
        <button onClick={() => setShowLabTestForm(true)} className="icon-button">
          <img src={labTestIcon} alt="Lab Test" className="icon-image" />
          <span className="tooltip">Lab Test</span>
        </button>
        {/* Icon to open Medication form */}
        <button onClick={() => setShowMedicationForm(true)} className="icon-button">
          <img src={MedicationIcon} alt="Medication" className="icon-image" />
          <span className="tooltip">Medication</span>
        </button>
        {/* Icon to open Reproductive Health form */}
        <button onClick={() => setShowReproductiveHealthForm(true)} className="icon-button">
          <img src={ReproductiveHealthIcon} alt="Reproductive Health" className="icon-image" />
          <span className="tooltip">Reproductive Health</span>
        </button>
        {/* Icon to open Vaccination form */}
        <button onClick={() => setShowVaccinationForm(true)} className="icon-button">
          <img src={VaccinationIcon} alt="Vaccination" className="icon-image" />
          <span className="tooltip">Vaccination</span>
        </button>
        {/* Icon to open Health Check form */}
        <button onClick={() => setShowHealthCheckForm(true)} className="icon-button">
          <img src={HealthCheckIcon} alt="Checkup" className="icon-image" />
          <span className="tooltip">Health Check</span>
        </button>
      </div>

      {/* Render forms in modals based on state */}
      {showLabTestForm && (
        <Modal onClose={() => setShowLabTestForm(false)}>
          <LabTestForm onClose={() => setShowLabTestForm(false)} />
        </Modal>
      )}
      {showMedicationForm && (
        <Modal onClose={() => setShowMedicationForm(false)}>
          <MedicationForm onClose={() => setShowMedicationForm(false)} />
        </Modal>
      )}
      {showReproductiveHealthForm && (
        <Modal onClose={() => setShowReproductiveHealthForm(false)}>
          <ReproductiveHealthForm onClose={() => setShowReproductiveHealthForm(false)} />
        </Modal>
      )}
      {showVaccinationForm && (
        <Modal onClose={() => setShowVaccinationForm(false)}>
          <VaccinationForm onClose={() => setShowVaccinationForm(false)} />
        </Modal>
      )}
      {showHealthCheckForm && (
        <Modal onClose={() => setShowHealthCheckForm(false)}>
          <HealthCheckForm onClose={() => setShowHealthCheckForm(false)} />
        </Modal>
      )}
    </div>
  );
};

export default HealthRecordsScreen;
