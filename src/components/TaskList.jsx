import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({
  tasks,
  toggleCompletion,
  deleteTask,
  startEditing,
  cancelEditing,
  submitEdit,
  editing,
  setEditingText,
  editingText,
}) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleCompletion={toggleCompletion}
          deleteTask={deleteTask}
          startEditing={startEditing}
          cancelEditing={cancelEditing}
          submitEdit={submitEdit}
          editing={editing}
          setEditingText={setEditingText}
          editingText={editingText}
        />
      ))}
    </div>
  );
};

export default TaskList;
