import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/dashboard/Navbar';
import Sidebar from './components/dashboard/Sidebar';
import Dashboard from './components/dashboard/dashboard';
import AnimalsPage from './components/animals/animalsPage';
import MilkProduction from './components/milkProduction/milkProduction';
import HealthRecordsScreen from './components/healthRecords/healthRecordsScreen';
import SalesScreen from './components/sales/salesScreen';


function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <Navbar />
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/animals" element={<AnimalsPage />} />
              <Route path="/milk-production" element={<MilkProduction />} />
              <Route path="/health-records" element={<HealthRecordsScreen />} />
              <Route path="/sales" element={<SalesScreen />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
