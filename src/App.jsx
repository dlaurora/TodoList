import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [editing, setEditing] = useState(null);
  const [editingText, setEditingText] = useState('');

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

  const startEditing = task => {
    setEditing(task.id);
    setEditingText(task.name);
  };

  const cancelEditing = () => {
    setEditing(null);
    setEditingText('');
  };

  const submitEdit = id => {
    setTasks(tasks.map(task => task.id === id ? { ...task, name: editingText } : task));
    setEditing(null);
    setEditingText('');
  };

  return (
    <div className='app'>
      <h1>Todo List</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleCompletion={toggleCompletion}
        deleteTask={deleteTask}
        startEditing={startEditing}
        cancelEditing={cancelEditing}
        submitEdit={submitEdit}
        editing={editing}
        setEditingText={setEditingText}
        editingText={editingText}
      />
    </div>
  );
};

export default App;
