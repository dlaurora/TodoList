import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Solo agrega la tarea si el input no está vacío
    if (input.trim() !== '') {
      addTask(input);
      setInput(''); // Limpia el input después de agregar la tarea
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        className="task-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit" className="task-button">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
