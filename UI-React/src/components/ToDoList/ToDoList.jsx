import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';


const ToDoList = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <ul>
      {tasks.length === 0 ? (
        <p style={{color: 'red'}}>🗓Your list is empty!</p>
      ) : (
        tasks.map((task) => (
          <ToDoItem 
            key={task.id} 
            task={task} 
            deleteTask={deleteTask} 
            toggleComplete={toggleComplete} 
          />
        ))
      )}
    </ul>

  );
};

export default ToDoList;