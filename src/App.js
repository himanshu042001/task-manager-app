// App.js

import React from 'react';
import './App.css'; // Import the CSS file
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="container"> {/* Apply styles from App.css */}
        <h1 className="heading">Task Manager</h1>
        <TaskForm />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
