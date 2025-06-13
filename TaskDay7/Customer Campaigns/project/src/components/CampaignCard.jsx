import PlatformIcon from './PlatformIcon';
import StatusBadge from './StatusBadge';
import PerformanceRating from './PerformanceRating';

const CampaignCard = ({ campaign, type }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleViewEdit = () => {
    console.log(`View/Edit campaign: ${campaign.id}`);
  };

  const handleReuse = () => {
    console.log(`Reuse campaign: ${campaign.id}`);
  };

  const handleDownloadReport = () => {
    console.log(`Download report for campaign: ${campaign.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-900 truncate pr-2">
            {campaign.campaignName}
          </h3>
          <StatusBadge status={campaign.status} />
        </div>
        <p className="text-gray-600 font-medium">{campaign.customerName}</p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Date Range */}
        <div className="flex items-center text-sm text-gray-600">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{formatDate(campaign.startDate)} - {formatDate(campaign.endDate)}</span>
        </div>

        {/* Platforms */}
        <div>
          <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Platforms</label>
          <div className="flex items-center space-x-2 mt-1">
            {campaign.platforms.map(platform => (
              <PlatformIcon key={platform} platform={platform} />
            ))}
          </div>
        </div>

        {/* Tasks */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Tasks Assigned</label>
            <p className="text-lg font-semibold text-gray-900">{campaign.tasksAssigned}</p>
          </div>
          {type === 'previous' && (
            <div>
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Completed</label>
              <p className="text-lg font-semibold text-gray-900">{campaign.tasksCompleted}</p>
            </div>
          )}
        </div>

        {/* Previous Campaign Metrics */}
        {type === 'previous' && (
          <div className="space-y-3 border-t border-gray-100 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Impressions</label>
                <p className="text-lg font-semibold text-gray-900">{campaign.impressions.toLocaleString()}</p>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Rating</label>
                <PerformanceRating rating={campaign.performanceRating} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="px-6 pb-6">
        {type === 'current' ? (
          <button
            onClick={handleViewEdit}
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            View / Edit
          </button>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleReuse}
              className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Reuse
            </button>
            <button
              onClick={handleDownloadReport}
              className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Report
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampaignCard;