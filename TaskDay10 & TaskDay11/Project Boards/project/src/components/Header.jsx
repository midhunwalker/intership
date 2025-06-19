import React from 'react';
import { Home } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <button className="p-1 rounded-lg hover:bg-gray-100 transition-colors">
            <Home size={32} className="text-blue-600" />
          </button>
        </div>
        
        <nav className="flex items-center space-x-8">
          <a 
            href="#" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
          >
            Home
          </a>
          <a 
            href="#" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
          >
            About
          </a>
          <a 
            href="#" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;