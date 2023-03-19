import React from "react";

function Task({catogry,text,handleDelete}) {

  return (
    <div className="task">
      <div className="label">{catogry}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={()=>{
        handleDelete(text)
      }}>X</button>
    </div>
  );
}

export default Task;
