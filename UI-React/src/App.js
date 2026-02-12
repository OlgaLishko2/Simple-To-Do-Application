import { useState, useEffect } from 'react';
import "./App.css";
import AddToDo from './components/AddToDo/AddToDo';
import ToDoList from './components/ToDoList/ToDoList'

let App = ()=>  {

    const [tasks, setTasks] = useState([]); // rows array
 
    //add backend

    useEffect(() => {
    fetch("http://localhost:4000/list")
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.log(err.message));
  }, []);
  
    // add task
  const addList = (text) => {
    fetch("http://localhost:4000/list", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, completed: false })
    })
      .then(res => res.json())
      .then(newList => setTasks(newList))
      .catch(err => console.log(err));
  };

  //delete task

 const deleteTask = (id) => {
    fetch(`http://localhost:4000/list/${id}`, { method: "DELETE" })
    .then(() => setTasks(prev => prev.filter(task => task.id !== id)))
    .catch(err => console.log(err));

  };

  //mark as done
  const toggleComplete = (id) => {
    const task = tasks.find(task => task.id === id);
    fetch(`http://localhost:4000/list/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: !task.completed }) 
    })
    .then(() => {

      setTasks(prev =>
        prev.map(task =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    })
    .catch(err => console.log(err));
  };


  return (
    <div className="AppContainer">
    <h3>⋆｡‧˚ʚ🌺ɞ˚‧｡Daily Tasks｡‧˚ʚ🌺ɞ˚‧｡⋆</h3>
    <AddToDo addList={addList}/>
    <ToDoList tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete}/>

     </div>
  );
}

export default App;

