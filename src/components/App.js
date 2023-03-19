import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState([...TASKS]);
  const [category, setCategory] = useState("All");

  function handleDelete(itemText) {
    setTasks(
      tasks.filter((task) => {
        return task.text !== itemText;
      })
    );
  }

  const visibleTasks = tasks.filter(
    (task) => category === 'All' || task.category === category
  )

  function onTaskFormSubmit(taskObj) {
    setTasks([...tasks, taskObj]);
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onSelectCategory={setCategory} categories={CATEGORIES} selectedCategory={category}/>
      <NewTaskForm  categories={CATEGORIES}
        tasks={tasks}
        onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={visibleTasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
