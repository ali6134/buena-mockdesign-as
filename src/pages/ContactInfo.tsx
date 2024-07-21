import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';

interface ContactInfoProps {
  setCurrentStep: (step: number) => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ setCurrentStep }) => {
  const { state, dispatch } = useContext(AppContext);
  const [email, setEmail] = useState(state.email);
  const [phoneNumber, setPhoneNumber] = useState(state.phoneNumber);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentStep(2);
  }, [setCurrentStep]);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleNext = () => {
    if (!email.trim() || !phoneNumber.trim()) {
      setError('Email and Phone Number are required');
      return;
    }
    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }
    dispatch({ type: 'SET_EMAIL', payload: email });
    dispatch({ type: 'SET_PHONE_NUMBER', payload: phoneNumber });
    navigate('/salary-info');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Information</h1>
      <form>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </label>
        <br />
        <label className="block mb-2">
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </label>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex justify-between mt-4">
          <button type="button" onClick={handleBack} className="px-4 py-2 bg-gray-500 text-white rounded">
            Back
          </button>
          <button type="button" onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactInfo;
