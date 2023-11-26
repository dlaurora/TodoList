import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = task => {
    setTasks([...tasks, { id: Date.now(), name: task, completed: false }]);
  };

  const toggleCompletion = id => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className='app'>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleCompletion={toggleCompletion} deleteTask={deleteTask} />
    </div>
  );
};

export default App;