import { motion } from 'framer-motion';

const ToggleSwitch = ({ 
  checked, 
  onChange, 
  disabled = false, 
  size = 'md',
  navbar = false 
}) => {
  const sizes = {
    sm: {
      switch: navbar ? 'w-9 h-5' : 'w-8 h-4',  
      thumb: navbar ? 'w-4 h-4' : 'w-3 h-3',    
      translate: navbar ? 'translate-x-4' : 'translate-x-4'
    },
    md: {
      switch: 'w-11 h-6',
      thumb: 'w-5 h-5',
      translate: 'translate-x-5'
    },
    lg: {
      switch: 'w-14 h-7',
      thumb: 'w-6 h-6',
      translate: 'translate-x-7'
    }
  };

  const currentSize = sizes[size];

  return (
    <button
      type="button"
      className={`
        ${currentSize.switch} 
        relative inline-flex items-center rounded-full 
        transition-all duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${checked 
          ? 'bg-primary-600 dark:bg-primary-500' 
          : 'bg-gray-300 dark:bg-gray-600'  // More contrast in navbar
        }
        ${navbar ? 'mx-1' : ''}  // Add spacing when in navbar
      `}
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
      aria-pressed={checked}
    >
      <motion.div
        className={`
          ${currentSize.thumb}
          inline-block rounded-full bg-white shadow-md transform
          ring-0 transition-all ease-in-out duration-200
          ${navbar ? 'shadow-sm' : ''}
        `}
        animate={{
          x: checked ? (size === 'sm' ? (navbar ? 16 : 16) : size === 'md' ? 20 : 28) : 0
        }}
        transition={{ 
          type: "spring", 
          stiffness: navbar ? 600 : 500,  // Snappier animation in navbar
          damping: 30 
        }}
      />
    </button>
  );
};

export default ToggleSwitch;