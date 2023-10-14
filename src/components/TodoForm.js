import React, { useState } from "react";
import { nanoid } from "nanoid";

export default function TodoForm(props) {
  const [title, setTitle] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleAddClick() {
    setIsAdding(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      title: title,
      completed: false,
      id: nanoid()
    };
    props.addTask(newTask);
    setTitle("");
    setIsAdding(false);
  }

  return (
    <div>
      {isAdding ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleTitleChange}
            placeholder="Add new task.."
            value={title}
          />
          <button type="submit">Add</button>
        </form>
      ) : (
        <button onClick={handleAddClick}>Add new task</button>
      )}
    </div>
  );
}
