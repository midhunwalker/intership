import React from 'react';
import Modal from './Modal';

const TaskModal = ({
  isOpen,
  onClose,
  taskName,
  setTaskName,
  taskAdmin,
  setTaskAdmin,
  onSave
}) => {
  const handleSave = () => {
    if (taskName.trim() && taskAdmin.trim()) {
      onSave({ taskName, taskAdmin }); // pass task data as object
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create Task">
      <div className="space-y-4">
        <div>
          <label htmlFor="taskName" className="block text-sm font-medium text-gray-700 mb-2">
            Task Name
          </label>
          <input
            id="taskName"
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="Enter task name"
          />
        </div>

        <div>
          <label htmlFor="taskAdmin" className="block text-sm font-medium text-gray-700 mb-2">
            Task Admin
          </label>
          <input
            id="taskAdmin"
            type="text"
            value={taskAdmin}
            onChange={(e) => setTaskAdmin(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="Enter admin name"
          />
        </div>

        <div className="flex space-x-3 pt-4">
          <button
            onClick={handleSave}
            disabled={!taskName.trim() || !taskAdmin.trim()}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default TaskModal;
