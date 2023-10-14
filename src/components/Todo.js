import React, { useState } from "react";
import "../styles.css";

export default function Todo(props) {
  const { todo, removeTask, toggleCompleted } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editTaskText, setEditTaskText] = useState(todo.title);

  function handleDelete() {
    removeTask(todo);
  }

  function handleToggle() {
    toggleCompleted(todo);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSaveEdit() {
    const updatedTask = { ...todo, title: editTaskText };
    setEditTaskText(updatedTask.title);
    setIsEditing(false);
  }

  function handleCancelEdit() {
    setIsEditing(false);
  }

  return (
    <li className="check">
      <span>
        {isEditing ? (
          <input
            type="text"
            value={editTaskText}
            onChange={(e) => setEditTaskText(e.target.value)}
          />
        ) : (
          <>
            {todo.completed === true ? (
              <del> {editTaskText}</del>
            ) : (
              <span>{editTaskText}</span>
            )}
          </>
        )}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
        />
      </span>
      <div>
        {isEditing ? (
          <>
            <button className="save" onClick={handleSaveEdit}>
              Save
            </button>
            <button className="cancel" onClick={handleCancelEdit}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button className="edit" onClick={handleEdit}>
              Edit
            </button>
            <button className="remove" onClick={handleDelete}>
              Remove
            </button>
          </>
        )}
      </div>
    </li>
  );
}
