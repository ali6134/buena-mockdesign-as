import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonalInfo from './pages/PersonalInfo';
import ContactInfo from './pages/ContactInfo';
import SalaryInfo from './pages/SalaryInfo';
import Sum from './pages/Sum';
import Welcome from './pages/Welcome';
import { AppProvider } from './AppContext';
import Layout from './Layout';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 4; // Aktualisiere die Anzahl der Schritte

  return (
    <AppProvider>
      <Router>
        <div className="App flex flex-col min-h-screen">
          <Layout currentStep={currentStep} totalSteps={totalSteps}>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/personal-info" element={<PersonalInfo setCurrentStep={setCurrentStep} />} />
              <Route path="/contact-info" element={<ContactInfo setCurrentStep={setCurrentStep} />} />
              <Route path="/salary-info" element={<SalaryInfo setCurrentStep={setCurrentStep} />} />
              <Route path="/sum" element={<Sum setCurrentStep={setCurrentStep} />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
