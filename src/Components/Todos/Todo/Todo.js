import React, { useState } from "react";

import Task from "./Task/Task";
import "./Todo.css";
const Todo = ({ title, tasks, todos, setTodos, index }) => {
  const [modify, setModify] = useState(false);
  const handleRename = () => {
    setModify(true);
  };
  const handleKey = (e) => {
    if (e.key === "Enter") {
      setModify(false);
    }
  };

  return (
    <div className="todo">
      <div onDoubleClick={handleRename}>
        <h3 style={{ display: modify ? "none" : "" }}>{title}</h3>
        <input
          type="text"
          className="title-input"
          placeholder="Titre"
          name="title"
          style={{ display: modify ? "" : "none" }}
          onChange={(e) => {
            console.log("aa");
            const newTitle = [...todos];
            newTitle[index].title = e.target.value;
            setTodos(newTitle);
          }}
          onKeyPress={handleKey}
        />
      </div>
      {tasks.map((name, index) => {
        return <Task key={index} name={name} />;
      })}
      <button
        onClick={(e) => {
          const newTodo = [...todos];
          newTodo[index].tasks.push("Tâche");
          setTodos(newTodo);
        }}
      >
        + Ajouter une tâche
      </button>
    </div>
  );
};

export default Todo;
