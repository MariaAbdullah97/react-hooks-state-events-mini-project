import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  let notAllcategory = categories.filter((cat) => cat !== "All");
  const [taskName, setTaskName] = useState();
  const [taskCategory, settaskCategory] = useState();

  function handleInput(event) {
    setTaskName(event.target.value);
  }
  function handleCategory(event) {
    settaskCategory(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const taskObj = {
      text: taskName,
      category: taskCategory,
    };
    onTaskFormSubmit(taskObj);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleInput} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategory}>
          {notAllcategory.map((cat, index) => {
            return (
              <option key={index} value={cat}>
                {cat}
              </option>
            );
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;