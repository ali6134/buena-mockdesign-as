import React from 'react';
import { useNavigate } from 'react-router-dom';
import colleaguesImage from '../assets/Colleagues.jpeg'; // Importiere das Bild

const Welcome: React.FC = () => {
    const navigate = useNavigate();
  
  const handleNext = () => {
    navigate('/personal-info');
  };

  return (
    <div className="bg-[#f8f8f6] shadow-md rounded-3xl p-6 inner-box">
      <h1 className="text-3xl font-bold mb-4">First step towards freedom.</h1>
      <div className="mb-4">
      <img src={colleaguesImage} alt="Colleagues interacting" className="w-full h-auto rounded" />
      </div>
      <p className="text-lg mb-4">
        Joining Buena is a great idea because it simplifies property management, making it easier and more efficient for you to handle all your rental needs. Our platform provides top-notch tools and support, ensuring that your experience is seamless and hassle-free. TODO
      </p>
      <button type="button" onClick={handleNext} className="px-4 py-2 bg-black text-white rounded">
        Get Started
      </button>
    </div>
  );
};

export default Welcome;
