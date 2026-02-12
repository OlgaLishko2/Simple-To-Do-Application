import React, { useState } from 'react';

const AddToDo = ({addList}) =>{
  const [text, setText] = useState(""); 
const [error, setError] = useState("");

const handleAdd = () => {
    if (text.trim() === "") {
      setError("🪄Please enter a task!🪄");
      return;
    }

    addList(text);
    setText("");
    setError("");
  };

  return (
    <div>

      <input 
      type="text" 
      placeholder="New task" 
      value={text} 
      onChange={(e) => setText(e.target.value)}/>

      <button onClick={handleAdd} className="add">Add</button>
      {error && <p style={{color: 'green'}}>{error}</p>}
    </div>
  );
}

export default AddToDo;
