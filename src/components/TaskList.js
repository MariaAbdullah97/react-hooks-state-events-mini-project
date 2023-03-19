import React from "react";
import Task from "./Task";

function TaskList({tasks,handleDelete}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task,index)=>{
        return <Task catogry={task.catogry} text={task.text} key={index} handleDelete={handleDelete}/>
      })}
    </div>
  );
}

export default TaskList;
