import React from 'react';
import Modal from './Modal';

const BoardModal = ({
  isOpen,
  onClose,
  boardName,
  setBoardName,
  boardAdmin,
  setBoardAdmin,
  onSave
}) => {
  const handleSave = () => {
    if (boardName.trim() && boardAdmin.trim()) {
      onSave();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create Project Board">
      <div className="space-y-4">
        <div>
          <label htmlFor="boardName" className="block text-sm font-medium text-gray-700 mb-2">
            Project Name
          </label>
          <input
            id="boardName"
            type="text"
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="Enter project name"
          />
        </div>
        
        <div>
          <label htmlFor="boardAdmin" className="block text-sm font-medium text-gray-700 mb-2">
            Project Admin
          </label>
          <input
            id="boardAdmin"
            type="text"
            value={boardAdmin}
            onChange={(e) => setBoardAdmin(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="Enter admin name"
          />
        </div>
        
        <div className="flex space-x-3 pt-4">
          <button
            onClick={handleSave}
            disabled={!boardName.trim() || !boardAdmin.trim()}
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

export default BoardModal;