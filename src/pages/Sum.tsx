import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';
import { FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';

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

  const handleEdit = (step: number) => {
    setCurrentStep(step);
    switch (step) {
      case 1:
        navigate('/personal-info');
        break;
      case 2:
        navigate('/contact-info');
        break;
      case 3:
        navigate('/salary-info');
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    setShowConfirm(true);
  };

  const confirmSubmit = () => {
    setShowConfirm(false);
    toast.success('Thank you for your time!', {
      position: "top-center"
    });
    setTimeout(() => {
      window.location.href = 'https://www.buena.com/ueber-uns';
    }, 6000); 
  };

  const cancelSubmit = () => {
    setShowConfirm(false);
  };

  // Funktion zum Hinzufügen des Pluszeichens, falls es fehlt
  const formatPhoneNumber = (phoneNumber: string) => {
    return phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
  };

  return (
    <div className="bg-[#f8f8f6] shadow-md rounded-3xl p-6 inner-box">
      <h1 className="text-2xl font-bold mb-4">
        Summary <span className="font-normal text-sm"></span>
      </h1>
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <span className="font-bold">Full Name:</span>
          <span className="ml-2">{state.fullName}</span>
          <FaEdit
            className="ml-2 text-black cursor-pointer"
            onClick={() => handleEdit(1)}
          />
        </div>
        <div className="flex items-center mb-2">
          <span className="font-bold">Email:</span>
          <span className="ml-2">{state.email}</span>
          <FaEdit
            className="ml-2 text-black cursor-pointer"
            onClick={() => handleEdit(2)}
          />
        </div>
        <div className="flex items-center mb-2">
          <span className="font-bold">Phone Number:</span>
          <span className="ml-2">{formatPhoneNumber(state.phoneNumber)}</span>
          <FaEdit
            className="ml-2 text-black cursor-pointer"
            onClick={() => handleEdit(2)}
          />
        </div>
        <div className="flex items-center mb-2">
          <span className="font-bold">Salary:</span>
          <span className="ml-2">{state.salary}</span>
          <FaEdit
            className="ml-2 text-black cursor-pointer"
            onClick={() => handleEdit(3)}
          />
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button type="button" onClick={handleSubmit} className="px-4 py-2 bg-[#f8e98e] text-black rounded">
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
