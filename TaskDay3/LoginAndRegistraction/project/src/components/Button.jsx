import React from 'react';

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  disabled = false,
  onClick,
  className = ''
}) => {
  const baseClasses = 'w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] text-white hover:from-[#3A7BC8] hover:to-[#40D4B3] focus:ring-[#4A90E2] shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300',
    outline: 'border-2 border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white focus:ring-[#4A90E2]'
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed hover:transform-none';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabled ? disabledClasses : 'transform hover:scale-[1.02]'} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;