import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primary-600 to-primary-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Welcome to React Student Dashboard
          </h1>
          <p className="mt-2 text-primary-100 text-lg">
            Manage student attendance with ease
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;