import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';

interface SalaryInfoProps {
  setCurrentStep: (step: number) => void;
}

const SalaryInfo: React.FC<SalaryInfoProps> = ({ setCurrentStep }) => {
  const { state, dispatch } = useContext(AppContext);
  const [salary, setSalary] = useState(state.salary);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentStep(3);
  }, [setCurrentStep]);

  const handleNext = () => {
    if (!salary) {
      setError('Salary is required');
      return;
    }
    dispatch({ type: 'SET_SALARY', payload: salary });
    navigate('/sum');
  };

  const handleBack = () => {
    navigate('/contact-info');
  };

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h1 className="text-2xl font-bold mb-4">Salary Information</h1>
      <form>
        <div className="mb-4">
          <label className="block mb-2">
            <input
              type="radio"
              value="0 - 1.000"
              checked={salary === '0 - 1.000'}
              onChange={(e) => setSalary(e.target.value)}
              className="mr-2"
            />
            0 - 1.000
          </label>
          <label className="block mb-2">
            <input
              type="radio"
              value="1.000 - 2.000"
              checked={salary === '1.000 - 2.000'}
              onChange={(e) => setSalary(e.target.value)}
              className="mr-2"
            />
            1.000 - 2.000
          </label>
          <label className="block mb-2">
            <input
              type="radio"
              value="2.000 - 3.000"
              checked={salary === '2.000 - 3.000'}
              onChange={(e) => setSalary(e.target.value)}
              className="mr-2"
            />
            2.000 - 3.000
          </label>
          <label className="block mb-2">
            <input
              type="radio"
              value="3.000 - 4.000"
              checked={salary === '3.000 - 4.000'}
              onChange={(e) => setSalary(e.target.value)}
              className="mr-2"
            />
            3.000 - 4.000
          </label>
          <label className="block mb-2">
            <input
              type="radio"
              value="Mehr als 4.000"
              checked={salary === 'Mehr als 4.000'}
              onChange={(e) => setSalary(e.target.value)}
              className="mr-2"
            />
            Mehr als 4.000
          </label>
        </div>
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

export default SalaryInfo;
