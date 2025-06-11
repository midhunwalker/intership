import { useState } from 'react'

const dummyData = {
  countries: ['India', 'United States', 'Japan', 'Canada', 'China'],
  states: ['Maharashtra', 'Karnataka', 'Tamil Nadu', 'Delhi', 'Kerala', 'Telegana'],
  cities: ['Mumbai', 'Bangalore', 'Chennai', 'Kochi', 'Thiruvananthapuram', 'Hyderabad'],
  interests: [
    'Technology', 'Fashion', 'Food', 'Travel', 'Sports', 'Entertainment',
    'Health', 'Education', 'Business', 'Art', 'Music', 'Gaming'
  ]
}

function FilterSection({ filters, onFilterChange, estimatedReach }) {
  const [showAllInterests, setShowAllInterests] = useState(false)

  const handleInterestToggle = (interest) => {
    const currentInterests = filters.interests || []
    const updatedInterests = currentInterests.includes(interest)
      ? currentInterests.filter(i => i !== interest)
      : [...currentInterests, interest]
    
    onFilterChange('interests', updatedInterests)
  }

  const handleAgeRangeChange = (type, value) => {
    const newRange = [...filters.ageRange]
    if (type === 'min') {
      newRange[0] = parseInt(value)
    } else {
      newRange[1] = parseInt(value)
    }
    onFilterChange('ageRange', newRange)
  }

  return (
    <div className="filter-section">
      <div className="section-header">
        <h2>Target Users Filters</h2>
      
      </div>

      <div className="filter-grid">
        {/* Location Filters */}
        <div className="filter-group">
          <h3>Location</h3>
          <div className="filter-row">
            <div className="filter-item">
              <label>Country</label>
              <select 
                value={filters.country} 
                onChange={(e) => onFilterChange('country', e.target.value)}
              >
                <option value="">Select Country</option>
                {dummyData.countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
            <div className="filter-item">
              <label>State</label>
              <select 
                value={filters.state} 
                onChange={(e) => onFilterChange('state', e.target.value)}
              >
                <option value="">Select State</option>
                {dummyData.states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="filter-row">
            <div className="filter-item">
              <label>City</label>
              <select 
                value={filters.city} 
                onChange={(e) => onFilterChange('city', e.target.value)}
              >
                <option value="">Select City</option>
                {dummyData.cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
            <div className="filter-item">
              <label>Pin Code</label>
              <input 
                type="text" 
                placeholder="Enter Pin Code"
                value={filters.pinCode}
                onChange={(e) => onFilterChange('pinCode', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Demographics */}
        <div className="filter-group">
          <h3>Age & Gender</h3>
          <div className="filter-row">
            <div className="filter-item">
              <label>Age Range</label>
              <div className="age-range-container">
                <div className="age-inputs">
                  <input 
                    type="number" 
                    placeholder="Min"
                    value={filters.ageRange[0]}
                    onChange={(e) => handleAgeRangeChange('min', e.target.value)}
                    min="13"
                    max="100"
                  />
                  <span>to</span>
                  <input 
                    type="number" 
                    placeholder="Max"
                    value={filters.ageRange[1]}
                    onChange={(e) => handleAgeRangeChange('max', e.target.value)}
                    min="13"
                    max="100"
                  />
                </div>
                <div className="age-display">
                  {filters.ageRange[0]} - {filters.ageRange[1]} years
                </div>
              </div>
            </div>
            <div className="filter-item">
              <label>Gender</label>
              <select 
                value={filters.gender} 
                onChange={(e) => onFilterChange('gender', e.target.value)}
              >
                <option value="">All Genders</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* User Status & Performance */}
        <div className="filter-group">
          <h3>User Criteria</h3>
          <div className="filter-row">
            <div className="filter-item">
              <label>User Status</label>
              <select 
                value={filters.userStatus} 
                onChange={(e) => onFilterChange('userStatus', e.target.value)}
              >
                <option value="">All Users</option>
                <option value="active">Active</option>
                <option value="verified">Verified</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            <div className="filter-item">
              <label>Performance Rating</label>
              <select 
                value={filters.performance} 
                onChange={(e) => onFilterChange('performance', e.target.value)}
              >
                <option value="">All Ratings</option>
                <option value="excellent">Excellent (4.5+)</option>
                <option value="good">Good (3.5-4.4)</option>
                <option value="average">Average (2.5-3.4)</option>
                <option value="new">New Users</option>
              </select>
            </div>
          </div>
          <div className="filter-row">
            <div className="filter-item full-width">
              <label>Referral Source</label>
              <input 
                type="text" 
                placeholder="e.g., social media, website, referral"
                value={filters.referralSource}
                onChange={(e) => onFilterChange('referralSource', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="filter-group">
          <h3>Interests & Categories</h3>
          <div className="interests-container">
            <div className="interests-grid">
              {dummyData.interests
                .slice(0, showAllInterests ? dummyData.interests.length : 6)
                .map(interest => (
                <div 
                  key={interest}
                  className={`interest-tag ${filters.interests.includes(interest) ? 'selected' : ''}`}
                  onClick={() => handleInterestToggle(interest)}
                >
                  {interest}
                </div>
              ))}
            </div>
            {dummyData.interests.length > 6 && (
              <button 
                className="show-more-btn"
                onClick={() => setShowAllInterests(!showAllInterests)}
              >
                {showAllInterests ? 'Show Less' : `Show ${dummyData.interests.length - 6} More`}
              </button>
            )}
            {filters.interests.length > 0 && (
              <div className="selected-interests">
                <span className="selected-label">Selected: </span>
                {filters.interests.join(', ')}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterSection