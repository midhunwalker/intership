import React, { useState, useEffect } from 'react';
import { fetchUsers } from './services/api';
import { User, Role, SortConfig, SortField} from './types/User';
import UserCard from './components/UserCard';
import SearchBar from './components/SearchBar';
import RoleFilterDropdown from './components/RoleFilterDropdown';
import UserDetailsModal from './components/UserDetailsModal';
import Pagination from './components/Pagination';
import Spinner from './components/Spinner';
import ThemeToggle from './components/ThemeToggle';
import SortDropdown from './components/SortDropdown';
import { Users } from 'lucide-react';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedRole, setSelectedRole] = useState<Role>('All');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [usersPerPage] = useState<number>(5);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' || 
             window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    field: 'name',
    direction: 'asc'
  });

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const data = await fetchUsers();
        setUsers(data);
        setFilteredUsers(data);
      } catch (err) {
        setError('Failed to fetch users. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  useEffect(() => {
    let result = [...users];
    
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      result = result.filter(
        user => 
          user.name.toLowerCase().includes(searchTermLower) || 
          user.email.toLowerCase().includes(searchTermLower)
      );
    }
    
    if (selectedRole !== 'All') {
      result = result.filter(user => user.role === selectedRole);
    }
    
    result.sort((a, b) => {
      let aValue = a[sortConfig.field];
      let bValue = b[sortConfig.field];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        const comparison = aValue.localeCompare(bValue);
        return sortConfig.direction === 'asc' ? comparison : -comparison;
      }
      
      return 0;
    });
    
    setFilteredUsers(result);
    setCurrentPage(1); 
  }, [searchTerm, selectedRole, users, sortConfig]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const handleViewDetails = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleSortChange = (field: SortField) => {
    setSortConfig(prevConfig => ({
      field,
      direction: 
        prevConfig.field === field
          ? (prevConfig.direction === 'asc' ? 'desc' : 'asc')
          : 'asc'
    }));
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200 ease-in-out">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Users className="h-7 w-7 text-blue-600 dark:text-blue-400 mr-3" />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">User Management Dashboard</h1>
          </div>
          <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error ? (
          <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-800 text-red-700 dark:text-red-200 px-4 py-3 rounded relative mb-6">
            <strong className="font-bold">Error! </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        ) : (
          <>
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
              
              <div className="flex flex-col sm:flex-row gap-4">
                <RoleFilterDropdown selectedRole={selectedRole} onRoleChange={setSelectedRole} />
                <SortDropdown sortConfig={sortConfig} onSortChange={handleSortChange} />
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Users ({filteredUsers.length})
                </h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Showing {indexOfFirstUser + 1}-{Math.min(indexOfLastUser, filteredUsers.length)} of {filteredUsers.length}
                </span>
              </div>
              
              {loading ? (
                <Spinner />
              ) : currentUsers.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400">No users found matching your criteria.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentUsers.map(user => (
                    <UserCard 
                      key={user.id} 
                      user={user} 
                      onViewDetails={handleViewDetails} 
                    />
                  ))}
                </div>
              )}
              
              {filteredUsers.length > usersPerPage && (
                <Pagination 
                  currentPage={currentPage} 
                  totalPages={totalPages} 
                  onPageChange={handlePageChange} 
                />
              )}
            </div>
          </>
        )}
      </main>
      
      <UserDetailsModal 
        user={selectedUser} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default App;