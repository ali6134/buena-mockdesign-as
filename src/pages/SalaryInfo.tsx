import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';
import { motion } from 'framer-motion';
import '../index.css';

interface SalaryInfoProps {
  setCurrentStep: (step: number) => void;
}

const SalaryInfo: React.FC<SalaryInfoProps> = ({ setCurrentStep }) => {
  const { state, dispatch } = useContext(AppContext);
  const [salary, setSalary] = useState(state.salary);
  const [error, setError] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentStep(3);
    console.log('Current state:', state);
  }, [setCurrentStep, state]);

  const handleNext = () => {
    if (!salary) {
      setError('Salary is required');
      return;
    }
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        console.log('Updating salary to:', salary);
        dispatch({ type: 'SET_SALARY', payload: salary });
        navigate('/sum');
      }, 400); 
    }
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalary(e.target.value);
    if (error) {
      setError('');
    }
  };

  const handleBack = () => {
    navigate('/contact-info');
  };

  return (
    <div className="bg-[#f8f8f6] shadow-md rounded-3xl p-6">
      <h1 className="text-2xl font-bold mb-4">
        How much are you earning right now? <span className="font-normal text-sm">(Per month, after tax, in dollars)</span>
      </h1>
      <form>
        <div className="grid grid-cols-1 gap-4 mb-4">
          {['0 - 1.000', '1.000 - 2.000', '2.000 - 3.000', '3.000 - 4.000', 'Mehr als 4.000'].map((range) => (
            <div key={range} className="flex items-center">
              <motion.input
                type="radio"
                id={range}
                value={range}
                checked={salary === range}
                onChange={handleSalaryChange}
                className="hidden"
              />
              <motion.label
                htmlFor={range}
                className="flex items-center cursor-pointer"
                initial={{ backgroundColor: '#fff', borderColor: '#d1d5db' }}
                animate={salary === range ? { backgroundColor: '#000', borderColor: '#000' } : { backgroundColor: '#fff', borderColor: '#d1d5db' }}
                transition={{ duration: 0.3 }}
                style={{
                  width: '1.25rem',
                  height: '1.25rem',
                  borderWidth: '2px',
                  borderRadius: '0.25rem',
                  marginRight: '0.5rem',
                }}
              />
              <span>{range}</span>
            </div>
          ))}
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex justify-between mt-4">
          <button type="button" onClick={handleBack} className="px-4 py-2 bg-gray-600 text-white rounded">
            Back
          </button>
          <button type="button" onClick={handleNext} className={`px-4 py-2 fill-animation ${isAnimating ? 'animate' : ''}`}>
            <span>Next</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SalaryInfo;
