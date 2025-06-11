import { useState } from 'react'

const platforms = [
  { id: 'facebook', name: 'Facebook', icon: '📘' },
  { id: 'instagram', name: 'Instagram', icon: '📷' },
  { id: 'twitter', name: 'Twitter', icon: '🐦' },
  { id: 'linkedin', name: 'LinkedIn', icon: '💼' },
  { id: 'youtube', name: 'YouTube', icon: '📺' },
  { id: 'tiktok', name: 'TikTok', icon: '🎵' }
]

function TaskForm({ taskData, onTaskDataChange }) {
  const [dragActive, setDragActive] = useState(false)

  const handlePlatformChange = (platformId) => {
    const currentPlatforms = taskData.platforms || []
    const updatedPlatforms = currentPlatforms.includes(platformId)
      ? currentPlatforms.filter(p => p !== platformId)
      : [...currentPlatforms, platformId]
    
    onTaskDataChange('platforms', updatedPlatforms)
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      onTaskDataChange('creative', file)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragActive(false)
    const file = e.dataTransfer.files[0]
    if (file) {
      onTaskDataChange('creative', file)
    }
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const removeFile = () => {
    onTaskDataChange('creative', null)
  }

  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0]
  }

  return (
    <div className="task-form">
      <div className="section-header">
        <h2>Task Details</h2>
        <p>Configure the task that will be assigned to selected users</p>
      </div>

      <div className="form-grid">
        {/* Basic Task Info */}
        <div className="form-group">
          <h3>Basic Information</h3>
          <div className="form-row">
            <div className="form-item full-width">
              <label>Task Title *</label>
              <input 
                type="text" 
                placeholder="Enter a clear, engaging task title"
                value={taskData.title}
                onChange={(e) => onTaskDataChange('title', e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-item full-width">
              <label>Task Description *</label>
              <textarea 
                placeholder="Describe what users need to do, including any specific requirements or goals"
                value={taskData.description}
                onChange={(e) => onTaskDataChange('description', e.target.value)}
                rows={4}
                required
              />
            </div>
          </div>
        </div>

        {/* Creative Upload */}
        <div className="form-group">
          <h3>Creative Assets</h3>
          <div className="form-row">
            <div className="form-item full-width">
              <label>Upload Creative</label>
              <div 
                className={`file-upload-area ${dragActive ? 'drag-active' : ''} ${taskData.creative ? 'has-file' : ''}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {taskData.creative ? (
                  <div className="uploaded-file">
                    <div className="file-info">
                      <span className="file-icon">📄</span>
                      <div className="file-details">
                        <span className="file-name">{taskData.creative.name}</span>
                        <span className="file-size">
                          {(taskData.creative.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                      </div>
                    </div>
                    <button 
                      type="button" 
                      className="remove-file-btn"
                      onClick={removeFile}
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="upload-content">
                      <span className="upload-icon">📁</span>
                      <p>Drag and drop your creative here, or</p>
                      <button type="button" className="upload-btn">Choose File</button>
                    </div>
                    <input 
                      type="file" 
                      onChange={handleFileUpload}
                      accept="image/*,video/*,.pdf"
                      hidden
                    />
                  </>
                )}
              </div>
              <small>Supported formats: Images, Videos, PDF (Max 50MB)</small>
            </div>
          </div>
        </div>

        {/* Platform Selection */}
        <div className="form-group">
          <h3>Platform Selection *</h3>
          <div className="platforms-grid">
            {platforms.map(platform => (
              <div 
                key={platform.id}
                className={`platform-card ${taskData.platforms.includes(platform.id) ? 'selected' : ''}`}
                onClick={() => handlePlatformChange(platform.id)}
              >
                <span className="platform-icon">{platform.icon}</span>
                <span className="platform-name">{platform.name}</span>
                <div className="platform-check">
                  {taskData.platforms.includes(platform.id) ? '✓' : ''}
                </div>
              </div>
            ))}
          </div>
          {taskData.platforms.length === 0 && (
            <p className="error-text">Please select at least one platform</p>
          )}
        </div>

        {/* Task Instructions */}
        <div className="form-group">
          <h3>Instructions & Guidelines</h3>
          <div className="form-row">
            <div className="form-item full-width">
              <label>Task Instructions *</label>
              <textarea 
                placeholder="Provide detailed instructions for users. Include specific requirements, hashtags, mention guidelines, content style, etc."
                value={taskData.instructions}
                onChange={(e) => onTaskDataChange('instructions', e.target.value)}
                rows={5}
                required
              />
            </div>
          </div>
        </div>

        {/* Task Validity & Credits */}
        <div className="form-group">
          <h3>Task Configuration</h3>
          <div className="form-row">
            <div className="form-item">
              <label>Start Date *</label>
              <input 
                type="date" 
                value={taskData.startDate}
                onChange={(e) => onTaskDataChange('startDate', e.target.value)}
                min={getTodayDate()}
                required
              />
            </div>
            <div className="form-item">
              <label>End Date *</label>
              <input 
                type="date" 
                value={taskData.endDate}
                onChange={(e) => onTaskDataChange('endDate', e.target.value)}
                min={taskData.startDate || getTodayDate()}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-item">
              <label>Credit Amount per User *</label>
              <input 
                type="number" 
                placeholder="e.g., 50"
                value={taskData.creditAmount}
                onChange={(e) => onTaskDataChange('creditAmount', e.target.value)}
                min="1"
                required
              />
            </div>
            <div className="form-item">
              <label>Maximum Users *</label>
              <input 
                type="number" 
                placeholder="e.g., 1000"
                value={taskData.maxUsers}
                onChange={(e) => onTaskDataChange('maxUsers', e.target.value)}
                min="1"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskForm