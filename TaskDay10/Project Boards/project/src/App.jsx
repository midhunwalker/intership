import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProjectCard from './components/ProjectCard';
import CalendarCard from './components/CalendarCard';
import TaskModal from './components/TaskModal';
import BoardModal from './components/BoardModal';

function App() {
  const [boards, setBoards] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState(null);
  const [isBoardModalOpen, setBoardModalOpen] = useState(false);
  const [isTaskModalOpen, setTaskModalOpen] = useState(false);
  const [boardName, setBoardName] = useState('');
  const [boardAdmin, setBoardAdmin] = useState('');
  const [taskName, setTaskName] = useState('');
  const [taskAdmin, setTaskAdmin] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSaveBoard = () => {
    if (boardName.trim() && boardAdmin.trim()) {
      setBoards(prev => [...prev, { id: Date.now(), name: boardName, admin: boardAdmin }]);
      setBoardName('');
      setBoardAdmin('');
      setBoardModalOpen(false);
    }
  };

  const handleOpenTaskModal = (boardId) => {
    setSelectedBoardId(boardId);
    setTaskModalOpen(true);
  };

  const handleSaveTask = () => {
    if (taskName.trim() && taskAdmin.trim() && selectedBoardId != null) {
      setTasks(prev => [
        ...prev,
        { id: Date.now(), taskName, taskAdmin, boardId: selectedBoardId }
      ]);
      setTaskName('');
      setTaskAdmin('');
      setTaskModalOpen(false);
      setSelectedBoardId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Project Boards
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {boards.map(board => (
                <ProjectCard
                  key={board.id}
                  boardName={board.name}
                  boardAdmin={board.admin}
                  tasks={tasks.filter(task => task.boardId === board.id)}
                  onCreateTask={() => handleOpenTaskModal(board.id)}
                />
              ))}

              {/* CalendarCard as the 'Add Board' card */}
              <CalendarCard onCreateBoard={() => setBoardModalOpen(true)} />
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={() => setBoardModalOpen(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Create Project Board
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Modals */}
      <BoardModal
        isOpen={isBoardModalOpen}
        onClose={() => setBoardModalOpen(false)}
        boardName={boardName}
        setBoardName={setBoardName}
        boardAdmin={boardAdmin}
        setBoardAdmin={setBoardAdmin}
        onSave={handleSaveBoard}
      />

      <TaskModal
        isOpen={isTaskModalOpen}
        onClose={() => setTaskModalOpen(false)}
        taskName={taskName}
        setTaskName={setTaskName}
        taskAdmin={taskAdmin}
        setTaskAdmin={setTaskAdmin}
        onSave={handleSaveTask}
      />
    </div>
  );
}

export default App;
