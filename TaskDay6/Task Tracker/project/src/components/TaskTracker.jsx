import { useState, useEffect } from 'react';
import { mockTasks, platforms, statuses } from '../data/mockData';
import './TaskTracker.css';

const TaskTracker = () => {
  const [tasks, setTasks] = useState(mockTasks);
  const [filteredTasks, setFilteredTasks] = useState(mockTasks);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('All Platforms');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(6);

  // Filter tasks based on search and filters
  useEffect(() => {
    let filtered = tasks;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.platform.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Platform filter
    if (selectedPlatform !== 'All Platforms') {
      filtered = filtered.filter(task => task.platform === selectedPlatform);
    }

    // Status filter
    if (selectedStatus !== 'All Status') {
      filtered = filtered.filter(task => task.status === selectedStatus);
    }

    setFilteredTasks(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedPlatform, selectedStatus, tasks]);

  // Pagination
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);
  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);

  const getStatusBadge = (status) => {
    const statusConfig = {
      completed: { class: 'status-completed', text: 'Completed' },
      'in-progress': { class: 'status-in-progress', text: 'In Progress' },
      expired: { class: 'status-expired', text: 'Expired' }
    };
    return statusConfig[status] || { class: 'status-default', text: status };
  };

  const getPlatformIcon = (platform) => {
    const icons = {
      Facebook: '📘',
      Instagram: '📷',
      Twitter: '🐦',
      LinkedIn: '💼',
      TikTok: '🎵'
    };
    return icons[platform] || '🌐';
  };

  const getCompletionPercentage = (completed, total) => {
    return Math.round((completed / total) * 100);
  };

  const handleViewDetails = (taskId) => {
    alert(`Viewing details for Task ID: ${taskId}\n\nThis would navigate to a detailed view showing individual user completion status.`);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedPlatform('All Platforms');
    setSelectedStatus('All Status');
  };

  return (
    <div className="task-tracker">
      <div className="tracker-header">
        <h1>Task Tracking Dashboard</h1>
        <p>Monitor and manage social media task assignments</p>
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search tasks or platforms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filter-controls">
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="filter-select"
          >
            {platforms.map(platform => (
              <option key={platform} value={platform}>{platform}</option>
            ))}
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="filter-select"
          >
            {statuses.map(status => (
              <option key={status} value={status}>
                {status === 'All Status' ? status : status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
              </option>
            ))}
          </select>

          <button onClick={clearFilters} className="clear-filters-btn">
            Clear Filters
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Tasks</h3>
          <p className="stat-number">{filteredTasks.length}</p>
        </div>
        <div className="stat-card completed">
          <h3>Completed</h3>
          <p className="stat-number">{filteredTasks.filter(t => t.status === 'completed').length}</p>
        </div>
        <div className="stat-card in-progress">
          <h3>In Progress</h3>
          <p className="stat-number">{filteredTasks.filter(t => t.status === 'in-progress').length}</p>
        </div>
        <div className="stat-card expired">
          <h3>Expired</h3>
          <p className="stat-number">{filteredTasks.filter(t => t.status === 'expired').length}</p>
        </div>
      </div>

      {/* Tasks Table */}
      <div className="table-container">
        <table className="tasks-table">
          <thead>
            <tr>
              <th>Task Details</th>
              <th>Platform</th>
              <th>Assigned Date</th>
              <th>Users Progress</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentTasks.map(task => (
              <tr key={task.id} className="task-row">
                <td className="task-details">
                  <div className="task-title">{task.title}</div>
                  <div className="task-id">ID: #{task.id}</div>
                </td>
                <td className="platform-cell">
                  <span className="platform-badge">
                    {getPlatformIcon(task.platform)} {task.platform}
                  </span>
                </td>
                <td className="date-cell">
                  {new Date(task.assignedDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </td>
                <td className="progress-cell">
                  <div className="progress-info">
                    <span className="progress-text">
                      {task.usersCompleted}/{task.usersAssigned} users
                    </span>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ width: `${getCompletionPercentage(task.usersCompleted, task.usersAssigned)}%` }}
                      ></div>
                    </div>
                    <span className="progress-percentage">
                      {getCompletionPercentage(task.usersCompleted, task.usersAssigned)}%
                    </span>
                  </div>
                </td>
                <td className="status-cell">
                  <span className={`status-badge ${getStatusBadge(task.status).class}`}>
                    {getStatusBadge(task.status).text}
                  </span>
                </td>
                <td className="actions-cell">
                  <button 
                    onClick={() => handleViewDetails(task.id)}
                    className="view-details-btn"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            Previous
          </button>
          
          <div className="pagination-info">
            Page {currentPage} of {totalPages}
          </div>
          
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            Next
          </button>
        </div>
      )}

      {filteredTasks.length === 0 && (
        <div className="no-results">
          <h3>No tasks found</h3>
          <p>Try adjusting your search criteria or clearing filters</p>
        </div>
      )}
    </div>
  );
};

export default TaskTracker;