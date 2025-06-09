import React from 'react';

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  error
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all duration-200 ${
          error ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
        }`}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-600 flex items-center">
          {error}
        </p>
      )}
    </div>
  );
};

export default SelectField;