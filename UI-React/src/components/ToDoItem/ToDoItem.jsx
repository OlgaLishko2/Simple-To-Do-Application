

let ToDoItem  = ({task, deleteTask, toggleComplete }) =>{
    return <li>
      <span 
        onClick={() => toggleComplete(task.id)}
        style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)} className="delete">Delete</button>
    </li>;
}


export default ToDoItem