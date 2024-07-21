import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';

interface PersonalInfoProps {
  setCurrentStep: (step: number) => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ setCurrentStep }) => {
  const { state, dispatch } = useContext(AppContext);
  const [fullName, setFullName] = useState(state.fullName);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentStep(1); // Aktualisiere auf den richtigen Schritt
  }, [setCurrentStep]);

  const handleNext = () => {
    if (!fullName.trim()) {
      setError('Full Name is required');
      return;
    }
    dispatch({ type: 'SET_FULL_NAME', payload: fullName });
    navigate('/contact-info');
  };

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h1 className="text-2xl font-bold mb-4">Personal Information</h1>
      <form>
        <label className="block mb-2">
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </label>
        {error && <p className="text-red-500">{error}</p>}
        <button type="button" onClick={handleNext} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Next
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;
