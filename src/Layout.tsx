import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';
import logo from './assets/buena-logo.png';
import ProgressBar from './components/ProgressBar';

interface LayoutProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
}

const Layout: React.FC<LayoutProps> = ({ children, currentStep, totalSteps }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isWelcomePage = location.pathname === '/';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-">
      <header className="w-full p-4 bg-white flex justify-between items-center">
        <div className="flex space-x-6 items-center">
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              {menuOpen ? <FaTimes size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <a href="https://app.buena.com/login" className="text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full transition duration-300 ease-in-out">Login</a>
            <a href="https://www.buena.com/ablauf" className="text-gray-500 hover:text-gray-700 transition duration-300 ease-in-out">How it works</a>
            <a href="https://www.buena.com/ueber-uns" className="text-gray-500 hover:text-gray-700 transition duration-300 ease-in-out">About Buena</a>
            <a href="https://www.buena.com/jobs" className="text-gray-500 hover:text-gray-700 transition duration-300 ease-in-out">Jobs</a>
          </div>
        </div>
        <div className="flex-grow flex justify-end">
          <Link to="/">
            <img src={logo} alt="Buena Logo" className="h-12" />
          </Link>
        </div>
      </header>
      {!isWelcomePage && (
        <div className="w-full flex justify-center my-4">
          <ProgressBar
            bgcolor="#f8e98e"
            completed={(currentStep / totalSteps) * 100}
            currentStep={currentStep}
            totalSteps={totalSteps}
          />
        </div>
      )}
      {menuOpen && (
        <nav className="w-full bg-white shadow-md md:hidden">
          <div className="flex flex-col p-4">
            <a href="https://app.buena.com/login" className="text-gray-500 hover:text-gray-900 px-4 py-2 rounded-full transition duration-300 ease-in-out">Login</a>
            <a href="https://www.buena.com/ablauf" className="text-gray-500 hover:text-gray-700 px-4 py-2 transition duration-300 ease-in-out">How it works</a>
            <a href="https://www.buena.com/ueber-uns" className="text-gray-500 hover:text-gray-700 px-4 py-2 transition duration-300 ease-in-out">About Buena</a>
            <a href="https://www.buena.com/jobs" className="text-gray-500 hover:text-gray-700 px-4 py-2 transition duration-300 ease-in-out">Jobs</a>
          </div>
        </nav>
      )}
      <main className="w-full flex justify-center p-4 mt-4">
        <div className="w-full max-w-6xl bg-[#f8f8f6] rounded-lg p-6 inner-box"> {/* Äußere Box mit abgerundeten Ecken */}
          <div className="w-full max-w-4xl mx-auto p-6 inner-box"> {/* Innere Box */}
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
