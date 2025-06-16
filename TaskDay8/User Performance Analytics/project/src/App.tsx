import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { UserAnalytics } from './components/UserAnalytics';

function App() {
  const [activeTab, setActiveTab] = useState('analytics');

  const renderContent = () => {
    switch (activeTab) {
      case 'analytics':
        return <UserAnalytics />;
      case 'dashboard':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
              <p className="text-gray-600">Overview and key metrics will be displayed here.</p>
            </div>
          </div>
        );
      case 'performance':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Performance</h1>
              <p className="text-gray-600">Detailed performance metrics and trends.</p>
            </div>
          </div>
        );
      case 'reports':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports</h1>
              <p className="text-gray-600">Generate and view detailed reports.</p>
            </div>
          </div>
        );
      case 'activity':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Activity Feed</h1>
              <p className="text-gray-600">Recent activity and updates.</p>
            </div>
          </div>
        );
      case 'calendar':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Calendar</h1>
              <p className="text-gray-600">Schedule and task calendar view.</p>
            </div>
          </div>
        );
      case 'charts':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Charts & Analytics</h1>
              <p className="text-gray-600">Visual data representations and insights.</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
              <p className="text-gray-600">Configure application preferences.</p>
            </div>
          </div>
        );
      default:
        return <UserAnalytics />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;