import { Bell, User, LogOut, Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useSidebar } from '../../contexts/SidebarContext';
import ToggleSwitch from '../ui/ToggleSwitch';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { toggleMobileSidebar } = useSidebar();

  const handleLogout = () => {
    alert('Logout functionality not implemented yet');
  };

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-3 sm:px-4 py-3 sticky top-0 z-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={toggleMobileSidebar}
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <Menu size={20} />
          </button>
          <h1 className="ml-2 md:ml-0 text-lg sm:text-xl font-semibold text-gray-900 dark:text-white truncate max-w-[180px] sm:max-w-none">
            Admin Dashboard
          </h1>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-4">
          {/* Theme Toggle - Switch disabled on mobile */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
            <div className="hidden sm:block">
              <ToggleSwitch
                checked={theme === 'dark'}
                onChange={toggleTheme}
                size="sm"
                aria-label="Toggle theme"
              />
            </div>
          </div>

          {/* Notifications */}
          <button 
            className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors relative"
            aria-label="Notifications"
          >
            <Bell size={18} className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Avatar */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <div className="hidden sm:block ml-2">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Midhun P</p>
              <p className="text-xs text-gray-600 dark:text-gray-300">Admin</p>
            </div>
          </div>

          {/* Logout */}
          <div className="flex items-center">
            <button
              onClick={handleLogout}
              className="hidden sm:flex items-center gap-2 px-3 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
            <button
              onClick={handleLogout}
              className="sm:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              aria-label="Logout"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;