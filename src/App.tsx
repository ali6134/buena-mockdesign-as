import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonalInfo from './pages/PersonalInfo';
import ContactInfo from './pages/ContactInfo';
import SalaryInfo from './pages/SalaryInfo';
import Sum from './pages/Sum';
import ProgressBar from './ProgressBar';
import { AppProvider } from './AppContext';
import Layout from './Layout';
import Welcome from './pages/Welcome';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  return (
    <AppProvider>
      <Router>
        <div className="App">
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
          <Layout>
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
