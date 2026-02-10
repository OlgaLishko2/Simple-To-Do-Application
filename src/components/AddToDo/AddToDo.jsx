import React, { useState } from 'react';

const AddToDo = ({addList}) =>{
  const [text, setText] = useState(""); 

  const handleAdd = ()=>{

        if (text !== "") {
            addList(text); // send text
            setText(""); //clean the field
        }
 } ;

  return (
    <div>

      <input 
      type="text" 
      placeholder="New task" 
      value={text} 
      onChange={(e) => setText(e.target.value)}/>

      <button onClick={handleAdd} className="add">Add</button>
    </div>
  );
}

export default AddToDo;
