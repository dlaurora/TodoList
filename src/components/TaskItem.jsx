import React from 'react';

const TaskItem = ({ task, toggleCompletion, deleteTask }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {task.name}
      <button onClick={() => toggleCompletion(task.id)}>Complete</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;