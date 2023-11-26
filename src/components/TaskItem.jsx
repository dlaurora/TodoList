import React from 'react';

const TaskItem = ({
  task,
  toggleCompletion,
  deleteTask,
  startEditing,
  cancelEditing,
  submitEdit,
  editing,
  setEditingText,
  editingText,
}) => {
  const handleEdit = () => {
    startEditing(task);
  };

  const handleSave = () => {
    submitEdit(task.id);
  };

  const handleCancel = () => {
    cancelEditing();
  };

  const handleComplete = () => {
    toggleCompletion(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleChange = (e) => {
    setEditingText(e.target.value);
  };

  return (
    <div className={`task-item ${task.completed ? 'bg-gray-200 line-through' : ''} flex items-center justify-between p-3 hover:bg-gray-100`}>
      {editing === task.id ? (
        <>
          <input
            type="text"
            value={editingText}
            onChange={handleChange}
            className="task-edit-input flex-1 px-2 py-1 text-gray-700 border rounded"
          />
          <button onClick={handleSave} className="save-btn bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded mr-2"> Save </button>
          <button onClick={handleCancel} className="cancel-btn bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded"> Cancel </button>
        </>
      ) : (
        <>
          <span className="flex-1">{task.name}</span>
          <button onClick={handleComplete} className="complete-btn bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded mr-2">
            {task.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={handleEdit} className="edit-btn bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-3 rounded mr-2"> Edit </button>
          <button onClick={handleDelete} className="delete-btn bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded"> Delete </button>
        </>
      )}
    </div>
  );
};

export default TaskItem;