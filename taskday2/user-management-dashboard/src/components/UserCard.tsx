import React from 'react';
import { User } from '../types/User';
import { Mail, MapPin, User as UserIcon, Eye } from 'lucide-react';

interface UserCardProps {
  user: User;
  onViewDetails: (user: User) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onViewDetails }) => {
  const getRoleColor = (role?: string) => {
    switch (role) {
      case 'Admin':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'User':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Customer':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden 
                  border border-gray-200 dark:border-gray-700 transition-all duration-300 
                  hover:shadow-lg transform hover:-translate-y-1">
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
            {user.name}
          </h3>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRoleColor(user.role)}`}>
            {user.role}
          </span>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="truncate">{user.email}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <UserIcon className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="truncate">@{user.username}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="truncate">{user.address.city}</span>
          </div>
        </div>
        
        <button
          onClick={() => onViewDetails(user)}
          className="w-full mt-2 flex items-center justify-center px-4 py-2 
                   border border-transparent rounded-md shadow-sm text-sm font-medium 
                   text-white bg-blue-600 hover:bg-blue-700 
                   dark:bg-blue-700 dark:hover:bg-blue-800
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                   transition-colors duration-200 ease-in-out"
        >
          <Eye className="h-4 w-4 mr-2" />
          View Details
        </button>
      </div>
    </div>
  );
};

export default UserCard;