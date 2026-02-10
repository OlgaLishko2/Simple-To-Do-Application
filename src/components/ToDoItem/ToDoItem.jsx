

let ToDoItem  = ({task,index, deleteTask, toggleComplete }) =>{
    return <li>
      <span 
        onClick={() => toggleComplete(index)}
        style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(index)} className="delete">Delete</button>
    </li>;
}


export default ToDoItem;