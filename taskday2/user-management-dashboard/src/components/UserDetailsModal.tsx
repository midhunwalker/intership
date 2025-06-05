import React, { useEffect, useRef } from 'react';
import { User } from '../types/User';
import { X, Mail, Phone, Globe, Briefcase, MapPin, Building, AtSign } from 'lucide-react';

interface UserDetailsModalProps {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}

const UserDetailsModal: React.FC<UserDetailsModalProps> = ({ user, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4 transition-opacity duration-300">
      <div 
        ref={modalRef}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full mx-auto 
                  transform transition-all duration-300 ease-in-out
                  animate-[fadeIn_0.3s_ease-in-out]"
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{user.name}</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-200 
                      transition-colors duration-200 ease-in-out rounded-full p-1
                      hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <AtSign className="h-5 w-5 text-blue-500" />
              <span className="font-medium">Username:</span>
              <span>{user.username}</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <Mail className="h-5 w-5 text-blue-500" />
              <span className="font-medium">Email:</span>
              <a href={`mailto:${user.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                {user.email}
              </a>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <Phone className="h-5 w-5 text-blue-500" />
              <span className="font-medium">Phone:</span>
              <a href={`tel:${user.phone}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                {user.phone}
              </a>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <Globe className="h-5 w-5 text-blue-500" />
              <span className="font-medium">Website:</span>
              <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" 
                className="text-blue-600 dark:text-blue-400 hover:underline">
                {user.website}
              </a>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-blue-500" />
              Address
            </h3>
            <div className="pl-7 space-y-2 text-gray-700 dark:text-gray-300">
              <p>{user.address.street}, {user.address.suite}</p>
              <p>{user.address.city}, {user.address.zipcode}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Geo: {user.address.geo.lat}, {user.address.geo.lng}
              </p>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
              <Building className="h-5 w-5 mr-2 text-blue-500" />
              Company
            </h3>
            <div className="pl-7 space-y-2 text-gray-700 dark:text-gray-300">
              <p className="font-medium">{user.company.name}</p>
              <p className="italic">"{user.company.catchPhrase}"</p>
              <p className="text-sm">{user.company.bs}</p>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
              <Briefcase className="h-5 w-5 mr-2 text-blue-500" />
              Role
            </h3>
            <div className="pl-7">
              <span className={`px-3 py-1 text-sm font-medium rounded-full 
                ${user.role === 'Admin' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' : 
                  user.role === 'User' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 
                  'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'}`}>
                {user.role}
              </span>
            </div>
          </div>
        </div>
        
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200
                      dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600
                      rounded-md font-medium transition-colors duration-200 ease-in-out"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;