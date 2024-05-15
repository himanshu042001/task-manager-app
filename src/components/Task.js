import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../actions';

function Task({ task }) {
  const dispatch = useDispatch();
  const { id, title, description, priority, dueDate, completed } = task;

  const handleCheckboxChange = () => {
    dispatch(toggleTask(id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="task-item">
      <h3 className="task-title">{title}</h3>
      <p className="task-description">Description: {description}</p>
      <p className="task-priority">Priority: {priority}</p>
      <p className="task-due-date">Due Date: {dueDate}</p>
      <label className="task-completed">
        <input type="checkbox" checked={completed} onChange={handleCheckboxChange} />
        Completed
      </label>
      <button className="task-delete-btn" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;
