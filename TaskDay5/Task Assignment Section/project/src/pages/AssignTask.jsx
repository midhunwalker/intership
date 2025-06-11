import { useState } from 'react'
import FilterSection from '../components/FilterSection'
import TaskForm from '../components/TaskForm'
import './AssignTask.css'

function AssignTask() {
  const [filters, setFilters] = useState({
    country: '',
    state: '',
    city: '',
    pinCode: '',
    ageRange: [18, 65],
    gender: '',
    userStatus: '',
    interests: [],
    performance: '',
    referralSource: ''
  })

  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    creative: null,
    platforms: [],
    instructions: '',
    startDate: '',
    endDate: '',
    creditAmount: '',
    maxUsers: ''
  })

  const [assignedUsers, setAssignedUsers] = useState(0)

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }))
  }

  const handleTaskDataChange = (fieldName, value) => {
    setTaskData(prev => ({
      ...prev,
      [fieldName]: value
    }))
  }

  const isFormValid = () => {
    return taskData.title && 
           taskData.description && 
           taskData.platforms.length > 0 && 
           taskData.instructions && 
           taskData.startDate && 
           taskData.endDate && 
           taskData.creditAmount && 
           taskData.maxUsers
  }

  const handleAssignTask = () => {
    if (isFormValid()) {
      // Simulate task assignment
      const matchedUsers = Math.floor(Math.random() * 500) + 50
      setAssignedUsers(matchedUsers)
      
      alert(`Task assigned successfully to ${matchedUsers} users!`)
      
      // Reset form
      setTaskData({
        title: '',
        description: '',
        creative: null,
        platforms: [],
        instructions: '',
        startDate: '',
        endDate: '',
        creditAmount: '',
        maxUsers: ''
      })
    }
  }

  // Calculate estimated reach based on filters
  const getEstimatedReach = () => {
    let baseUsers = 10000
    
    if (filters.country) baseUsers *= 0.3
    if (filters.state) baseUsers *= 0.4
    if (filters.city) baseUsers *= 0.5
    if (filters.gender) baseUsers *= 0.6
    if (filters.userStatus) baseUsers *= 0.7
    if (filters.interests.length > 0) baseUsers *= 0.8
    
    return Math.floor(baseUsers)
  }

  return (
    <div className="assign-task-container">
      <header className="page-header">
        <h1>Task Assignment Panel</h1>
        <p>Assign social media tasks to users based on your targeting criteria</p>
      </header>

      <div className="main-content">
        <div className="content-grid">
          {/* Filter Section */}
          <div className="filter-panel">
            <FilterSection 
              filters={filters} 
              onFilterChange={handleFilterChange}
              estimatedReach={getEstimatedReach()}
            />
          </div>

          {/* Task Form Section */}
          <div className="task-panel">
            <TaskForm 
              taskData={taskData}
              onTaskDataChange={handleTaskDataChange}
            />
            
            {/* Action Section */}
            <div className="action-section">
              <div className="task-summary">
                <div className="summary-stats">
                  
                  <div className="stat-item">
                    <span className="stat-label">Total Credit Cost</span>
                    <span className="stat-value">
                      {taskData.creditAmount && taskData.maxUsers 
                        ? (taskData.creditAmount * taskData.maxUsers).toLocaleString()
                        : '0'} credits
                    </span>
                  </div>
                </div>
              </div>
              
              <button 
                className={`assign-btn ${!isFormValid() ? 'disabled' : ''}`}
                onClick={handleAssignTask}
                disabled={!isFormValid()}
              >
                Assign Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssignTask