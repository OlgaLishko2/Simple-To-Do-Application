import React, { useState } from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';


const ToDoList = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <ul>
      {tasks.length === 0 ? (
        <p>No tasks available!</p>
      ) : (
        tasks.map((task, index) => (
          <ToDoItem 
            key={index} 
            task={task} 
            index={index} 
            deleteTask={deleteTask} 
            toggleComplete={toggleComplete} 
          />
        ))
      )}
    </ul>

  );
};

export default ToDoList;