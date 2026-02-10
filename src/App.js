import { useState } from 'react';
import "./App.css";
import AddToDo from './components/AddToDo/AddToDo';
import ToDoList from './components/ToDoList/ToDoList'

let App = ()=>  {

    const [tasks, setTasks] = useState([]); // rows array

    // add task
  const addList = (text) => {
    setTasks([...tasks, { text: text, completed: false }]); 
  };

  //delete task

 const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  //mark as done
  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
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

