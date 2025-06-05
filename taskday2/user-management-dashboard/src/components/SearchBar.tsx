import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400 dark:text-gray-500" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                 shadow-sm placeholder-gray-400 dark:placeholder-gray-500
                 focus:outline-none focus:ring-primary focus:border-primary
                 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                 transition-colors duration-200 ease-in-out"
        placeholder="Search users by name or email..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;