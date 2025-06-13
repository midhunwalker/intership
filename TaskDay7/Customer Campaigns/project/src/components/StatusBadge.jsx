const StatusBadge = ({ status }) => {
  const getStatusConfig = (status) => {
    switch (status) {
      case 'Active':
        return {
          color: 'bg-green-100 text-green-800',
          dot: 'bg-green-500'
        };
      case 'Completed':
      case 'Ended':
        return {
          color: 'bg-red-100 text-red-800',
          dot: 'bg-red-500'
        };
      case 'Scheduled':
        return {
          color: 'bg-yellow-100 text-yellow-800',
          dot: 'bg-yellow-500'
        };
      default:
        return {
          color: 'bg-gray-100 text-gray-800',
          dot: 'bg-gray-500'
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
      <div className={`w-1.5 h-1.5 rounded-full ${config.dot} mr-1.5`}></div>
      {status}
    </span>
  );
};

export default StatusBadge;