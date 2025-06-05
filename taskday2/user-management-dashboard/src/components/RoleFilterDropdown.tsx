import React from 'react';
import { Role } from '../types/User';
import { Filter } from 'lucide-react';

interface RoleFilterDropdownProps {
  selectedRole: Role;
  onRoleChange: (role: Role) => void;
}

const RoleFilterDropdown: React.FC<RoleFilterDropdownProps> = ({ 
  selectedRole, 
  onRoleChange 
}) => {
  const roles: Role[] = ['All', 'Admin', 'User', 'Customer'];

  return (
    <div className="relative flex items-center">
      <Filter className="h-5 w-5 text-gray-400 dark:text-gray-500 mr-2" />
      <select
        value={selectedRole}
        onChange={(e) => onRoleChange(e.target.value as Role)}
        className="block w-full pl-3 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md
                  bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                  shadow-sm focus:outline-none focus:ring-primary focus:border-primary
                  transition-colors duration-200 ease-in-out"
        aria-label="Filter users by role"
      >
        {roles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RoleFilterDropdown;