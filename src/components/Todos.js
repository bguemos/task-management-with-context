import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { useState } from "react";
import "../styles.css";
export default function Todos() {
  const [todos, setTodos] = useState([]);

  function addTask(todo) {
    const updatedTask = [...todos, todo];
    setTodos(updatedTask);
  }

  function removeTask(job) {
    const updatedTask = todos.filter(function (todo) {
      return todo.id !== job.id;
    });
    setTodos(updatedTask);
  }

  function toggleCompleted(job) {
    const updatedTask = todos.map(function (todo) {
      if (todo.id === job.id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(updatedTask);
  }

  return (
    <div className="main">
      <ul className="form">
        {todos.map((todo) => (
          <Todo
            className="content"
            key={todo.id}
            todo={todo}
            removeTask={removeTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </ul>
      <TodoForm addTask={addTask} />
    </div>
  );
}
