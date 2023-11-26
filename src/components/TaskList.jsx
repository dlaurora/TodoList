import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleCompletion, deleteTask }) => {
  return (
    <div className='task-list'>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} toggleCompletion={toggleCompletion} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;