import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const ProjectCard = ({ 
  boardId,
  boardName, 
  boardAdmin,
  tasks = [], 
  onCreateTask
}) => {
  const droppableId = boardId.toString();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      {/* Header */}
      <div className="flex justify-between items-center bg-gray-100 px-4 py-3 mb-4 rounded">
        <h3 className="text-sm font-semibold text-gray-800 truncate">
          {boardName}
        </h3>
        <p className="text-xs text-gray-600 truncate">
          {boardAdmin}
        </p>
      </div>
      
      {/* Droppable Task List */}
      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={
              `space-y-4 mb-6 min-h-[100px] p-2 rounded ` +
              (snapshot.isDraggingOver ? 'bg-blue-50' : '')
            }
          >
            {tasks.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No tasks yet
              </div>
            ) : (
              tasks.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={task.id.toString()}
                  index={index}
                >
                  {(prov, snap) => (
                    <div
                      ref={prov.innerRef}
                      {...prov.draggableProps}
                      {...prov.dragHandleProps}
                      className={
                        `bg-gray-50 rounded-lg p-4 mb-2 transition-colors ` +
                        (snap.isDragging ? 'shadow-lg bg-white' : 'hover:bg-gray-100')
                      }
                    >
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {task.taskName}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {task.taskAdmin}
                      </p>
                    </div>
                  )}
                </Draggable>
              ))
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      
      {/* Create Task Button */}
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
