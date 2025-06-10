import React from 'react';

const Card = ({ children, className = '', onClick }) => {
  return (
    <div 
      className={`bg-cardBg rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-200 hover:shadow-md ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;