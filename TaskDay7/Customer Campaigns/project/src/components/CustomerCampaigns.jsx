import { useState } from 'react';
import { mockCampaignsData } from '../data/mockData';
import CampaignCard from './CampaignCard';
import CreateCampaignModal from './CreateCampaignModal';

const CustomerCampaigns = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const currentCampaigns = mockCampaignsData.filter(campaign => campaign.status === 'Active');
  const previousCampaigns = mockCampaignsData.filter(campaign => campaign.status === 'Completed');

  const tabs = [
    { id: 'current', label: 'Current Campaigns', count: currentCampaigns.length },
    { id: 'previous', label: 'Previous Campaigns', count: previousCampaigns.length },
    { id: 'create', label: 'Create New', count: null }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'current':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCampaigns.map(campaign => (
              <CampaignCard 
                key={campaign.id} 
                campaign={campaign} 
                type="current" 
              />
            ))}
            {currentCampaigns.length === 0 && (
              <div className="col-span-full text-center py-12">
                <div className="text-gray-400 text-lg">No current campaigns</div>
                <button
                  onClick={() => setIsCreateModalOpen(true)}
                  className="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Create Your First Campaign
                </button>
              </div>
            )}
          </div>
        );
      case 'previous':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previousCampaigns.map(campaign => (
              <CampaignCard 
                key={campaign.id} 
                campaign={campaign} 
                type="previous" 
              />
            ))}
            {previousCampaigns.length === 0 && (
              <div className="col-span-full text-center py-12">
                <div className="text-gray-400 text-lg">No previous campaigns</div>
              </div>
            )}
          </div>
        );
      case 'create':
        return (
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Create New Campaign</h3>
              <p className="text-gray-600 mb-6">Launch a new marketing campaign to reach your target audience</p>
              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Get Started
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Campaigns</h1>
          <p className="text-gray-600">Manage and track all your marketing campaigns</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                  {tab.count !== null && (
                    <span className={`ml-2 py-0.5 px-2 rounded-full text-xs ${
                      activeTab === tab.id 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-6">
          {renderTabContent()}
        </div>

        {/* Floating Create Button */}
        {activeTab !== 'create' && (
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="fixed bottom-6 right-6 bg-primary text-white w-14 h-14 rounded-full shadow-lg hover:bg-blue-600 transition-all hover:scale-110 flex items-center justify-center z-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        )}

        {/* Create Campaign Modal */}
        <CreateCampaignModal 
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default CustomerCampaigns;