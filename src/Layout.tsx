import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/buena-logo.png';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <header className="w-full p-4 bg-white shadow flex justify-between items-center">
        <div className="flex space-x-6 items-center">
          <a href="https://app.buena.com/login" className="text-gray-800 hover:text-gray-900 bg-gray-100 hover:bg-gray-300 px-4 py-2 rounded-full transition duration-300 ease-in-out">Einloggen</a>
          <a href="https://www.buena.com/ablauf" className="text-gray-500 hover:text-gray-700">So funktioniert's</a>
          <a href="https://www.buena.com/ueber-uns#open-roles" className="text-gray-500 hover:text-gray-700">Über Buena</a>
          <a href="https://www.buena.com/jobs" className="text-gray-500 hover:text-gray-700">Jobs</a>
        </div>
        <Link to="/">
          <img src={logo} alt="Buena Logo" className="h-12" />
        </Link>
      </header>
      <main className="w-full max-w-4xl p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
