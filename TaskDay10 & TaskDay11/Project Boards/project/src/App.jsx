import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
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

  // Create a new board
  const handleSaveBoard = () => {
    if (boardName.trim() && boardAdmin.trim()) {
      setBoards(prev => [
        ...prev,
        { id: Date.now(), name: boardName, admin: boardAdmin }
      ]);
      setBoardName('');
      setBoardAdmin('');
      setBoardModalOpen(false);
    }
  };

  // Open modal for adding a task to a specific board
  const handleOpenTaskModal = boardId => {
    setSelectedBoardId(boardId);
    setTaskModalOpen(true);
  };

  // Save the new task under the selected board
  const handleSaveTask = () => {
    if (
      taskName.trim() &&
      taskAdmin.trim() &&
      selectedBoardId !== null
    ) {
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

  // Handle drag-and-drop between boards
  const onDragEnd = result => {
    const { source, destination, draggableId } = result;
    // dropped outside a droppable area
    if (!destination) return;

    // dropped back in the same place
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const srcBoardId = Number(source.droppableId);
    const destBoardId = Number(destination.droppableId);

    setTasks(prev =>
      prev.map(task =>
        task.id.toString() === draggableId
          ? { ...task, boardId: destBoardId }
          : task
      )
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="min-h-screen bg-gray-100">
        <Header />

        <div className="flex">
          <Sidebar
            isOpen={sidebarOpen}
            onToggle={() => setSidebarOpen(!sidebarOpen)}
          />

          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
                Project Boards
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {boards.map(board => (
                  <ProjectCard
                    key={board.id}
                    boardId={board.id}
                    boardName={board.name}
                    boardAdmin={board.admin}
                    tasks={tasks.filter(
                      task => task.boardId === board.id
                    )}
                    onCreateTask={() => handleOpenTaskModal(board.id)}
                  />
                ))}

                {/* "Add Board" card */}
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

        {/* Board Creation Modal */}
        <BoardModal
          isOpen={isBoardModalOpen}
          onClose={() => setBoardModalOpen(false)}
          boardName={boardName}
          setBoardName={setBoardName}
          boardAdmin={boardAdmin}
          setBoardAdmin={setBoardAdmin}
          onSave={handleSaveBoard}
        />

        {/* Task Creation Modal */}
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
    </DragDropContext>
  );
}

export default App;
