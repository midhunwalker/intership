import React from 'react';

const ProjectCard = ({ 
  boardName, 
  boardAdmin,
  tasks = [], 
  onCreateTask
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center bg-gray-100 px-4 py-3 mb-4 rounded">
        <h3 className="text-sm font-semibold text-gray-800 truncate">
          {boardName}
        </h3>
        <p className="text-xs text-gray-600 truncate">
          {boardAdmin}
        </p>
      </div>
      
      <div className="space-y-4 mb-6">
        {tasks.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No tasks yet
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tasks.map((task, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-800 mb-1">{task.taskName}</h4>
                <p className="text-sm text-gray-600">{task.taskAdmin}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="text-center">
        <button
          onClick={onCreateTask}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Create Task
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
