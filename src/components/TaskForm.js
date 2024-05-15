import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';

function TaskForm() {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: 'low',
    dueDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    setTask({ title: '', description: '', priority: 'low', dueDate: '' });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input className="task-form-input" type="text" name="title" value={task.title} onChange={handleChange} placeholder="Task Title" required />
      <textarea className="task-form-textarea" name="description" value={task.description} onChange={handleChange} placeholder="Task Description" required />
      <select className="task-form-select" name="priority" value={task.priority} onChange={handleChange}>
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
      <input className="task-form-date" type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
      <button className="task-form-button" type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
