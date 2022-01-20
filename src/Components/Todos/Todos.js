import React, { useState } from "react";
import Todo from "./Todo/Todo";
import "./Todos.css";

const Todos = ({ userStatus }) => {
  const [todos, setTodos] = useState([{ title: "Titre", tasks: ["Tâche 1"] }]);

  return (
    <div
      className="todos"
      style={{ display: userStatus === "connected" ? "" : "none" }}
    >
      <section className="head-section">
        <h2>Bienvenue, voici vos Listes</h2>
        <button
          onClick={(e) => {
            const newTodo = [...todos];
            newTodo.push({ title: "Titre", tasks: ["Tâche 1"] });
            setTodos(newTodo);
          }}
        >
          + Ajouter une liste
        </button>
      </section>
      <section className="todos-section">
        {todos.map(({ title, tasks }, index) => {
          return (
            <Todo
              key={index}
              index={index}
              title={title}
              setTodos={setTodos}
              todos={todos}
              tasks={tasks}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Todos;
