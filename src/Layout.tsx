import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/buena-logo.png';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <header className="w-full p-4 bg-white shadow flex justify-end">
        <Link to="/">
          <img src={logo} alt="Buena Logo" className="h-10" />
        </Link>
      </header>
      <main className="w-full max-w-4xl p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
