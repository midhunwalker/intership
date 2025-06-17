import React from 'react';

const StudentCard = ({ student, onToggleStatus, onDeleteStudent }) => {
  const { id, name, rollNumber, status } = student;
  
  const isPresent = status === 'Present';
  
  const handleToggle = () => {
    onToggleStatus(id);
  };

  const handleDelete = () => {
    onDeleteStudent(id, name);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="flex flex-col gap-4">
        {/* Student Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
              <p className="text-gray-600 mb-3">
                <span className="font-medium">Roll Number:</span> {rollNumber}
              </p>
            </div>
            
            {/* Delete Button */}
            <button
              onClick={handleDelete}
              className="p-2 text-gray-400 hover:text-error-600 hover:bg-error-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-error-500 focus:ring-offset-2"
              title="Delete Student"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
          
          {/* Status Badge */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-medium text-gray-700">Status:</span>
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                isPresent
                  ? 'bg-success-100 text-success-600 border border-success-200'
                  : 'bg-error-100 text-error-600 border border-error-200'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full mr-2 ${
                  isPresent ? 'bg-success-500' : 'bg-error-500'
                }`}
              ></span>
              {status}
            </span>
          </div>
        </div>
        
        {/* Toggle Button */}
        <div className="flex justify-end">
          <button
            onClick={handleToggle}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isPresent
                ? 'bg-error-600 hover:bg-error-700 text-white focus:ring-error-500'
                : 'bg-success-600 hover:bg-success-700 text-white focus:ring-success-500'
            }`}
          >
            Mark as {isPresent ? 'Absent' : 'Present'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;