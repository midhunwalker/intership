import React, { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Button from './components/Button';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  if (currentPage === 'login') {
    return (
      <Login 
        onNavigateToRegister={() => setCurrentPage('register')}
        onNavigateToForgotPassword={() => setCurrentPage('forgot-password')}
      />
    );
  }

  if (currentPage === 'register') {
    return <Register onNavigateToLogin={() => setCurrentPage('login')} />;
  }

  if (currentPage === 'forgot-password') {
    return <ForgotPassword onNavigateToLogin={() => setCurrentPage('login')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] to-[#E8F4FD] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] rounded-full mb-6">
            <span className="text-3xl font-bold text-white">LR</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Login & Registration</h1>
          <p className="text-gray-600">Choose an option to get started</p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => setCurrentPage('login')}
            variant="primary"
          >
            Go to Login Page
          </Button>
          
          <Button
            onClick={() => setCurrentPage('register')}
            variant="outline"
          >
            Go to Registration Page
          </Button>

        
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        
        </div>
      </div>
    </div>
  );
}

export default App;