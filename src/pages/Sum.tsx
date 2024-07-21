import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';

interface SumProps {
  setCurrentStep: (step: number) => void;
}

const Sum: React.FC<SumProps> = ({ setCurrentStep }) => {
  const { state } = useContext(AppContext);
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    setCurrentStep(4);
  }, [setCurrentStep]);

  const handleEdit = () => {
    navigate('/salary-info'); 
  };

  const handleSubmit = () => {
    setShowConfirm(true);
  };

  const confirmSubmit = () => {
    setShowConfirm(false);
    alert('Form Submitted!');
    window.location.href = 'https://www.buena.com/ueber-uns#open-roles';
  };

  const cancelSubmit = () => {
    setShowConfirm(false);
  };

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h1 className="text-2xl font-bold mb-4">Sum</h1>
      <p className="mb-2"><strong>Full Name:</strong> {state.fullName}</p>
      <p className="mb-2"><strong>Email:</strong> {state.email}</p>
      <p className="mb-2"><strong>Phone Number:</strong> {state.phoneNumber}</p>
      <p className="mb-4"><strong>Salary:</strong> {state.salary}</p>
      <div className="flex justify-between mt-4">
        <button type="button" onClick={handleEdit} className="px-4 py-2 bg-gray-500 text-white rounded">
          Edit
        </button>
        <button type="button" onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </div>

      {showConfirm && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p>Are you sure you want to submit the form?</p>
          <div className="flex justify-between mt-2">
            <button onClick={confirmSubmit} className="px-4 py-2 bg-green-500 text-white rounded">
              Yes
            </button>
            <button onClick={cancelSubmit} className="px-4 py-2 bg-red-500 text-white rounded">
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sum;
