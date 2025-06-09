import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          type={inputType}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all duration-200 ${
            error ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
          }`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600 flex items-center">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;