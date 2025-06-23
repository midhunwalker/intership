import { Outlet } from 'react-router-dom';
import { useSidebar } from '../../contexts/SidebarContext';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = () => {
  const { isCollapsed, isMobileOpen } = useSidebar();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" />
      )}
      
      <div className={`transition-all duration-300 ${isCollapsed ? 'md:ml-16' : 'md:ml-64'} ml-0`}>
        <Navbar />
        
        <main className="p-3 sm:p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;