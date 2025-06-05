import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { SortConfig, SortField } from '../types/User';

interface SortDropdownProps {
  sortConfig: SortConfig;
  onSortChange: (field: SortField) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ sortConfig, onSortChange }) => {
  const options: { value: SortField; label: string }[] = [
    { value: 'name', label: 'Name' },
    { value: 'email', label: 'Email' },
  ];

  return (
    <div className="relative flex items-center">
      <ArrowUpDown className="h-5 w-5 text-gray-400 dark:text-gray-500 mr-2" />
      <select
        value={sortConfig.field}
        onChange={(e) => onSortChange(e.target.value as SortField)}
        className="block w-full pl-3 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md
                  bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                  shadow-sm focus:outline-none focus:ring-primary focus:border-primary
                  transition-colors duration-200 ease-in-out"
        aria-label="Sort users"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            Sort by: {option.label} ({sortConfig.direction === 'asc' ? '↑' : '↓'})
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortDropdown;