import React, { useState } from "react";
import Todo from "./Todo/Todo";
import "./Todos.css";

const Todos = ({ userStatus }) => {
  //State qui stocke l'état des Todos dans un arrays
  const [todos, setTodos] = useState([{ title: "Titre", tasks: ["Tâche"] }]);

  //State pour delete une liste
  const [deleteList, setDeleteList] = useState(false);
  // State utilisé pour modifier des listes et totos 1 par 1
  const initialModifyState = {
    isModification: false,
    modifyTitle: false,
    modifyTask: false,
    modifyTodoIndex: null,
    modifyTaskIndex: null,
  };

  const [modify, setModify] = useState(initialModifyState);

  return (
    <div
      className="todos"
      style={{ display: userStatus === "connected" ? "" : "none" }}
    >
      <section className="head-section">
        <h2>Bienvenue, voici vos Listes</h2>
        <div>
          {" "}
          <button
            className="head-buttons green"
            onClick={(e) => {
              const newTodo = [...todos];
              newTodo.push({ title: "Titre", tasks: ["Tâche"] });
              setTodos(newTodo);
            }}
          >
            + Ajouter une liste
          </button>
          <button
            className="head-buttons red"
            onClick={(e) => {
              if (!deleteList) {
                setDeleteList(true);
              } else {
                setDeleteList(false);
              }
            }}
            style={{ display: todos.length >= 1 ? "" : "none" }}
          >
            - Supprimer une liste
          </button>
        </div>
      </section>

      {/*
       ///////////////////////////////////
       Section où sont afficher les Todos
       //////////////////////////////////
       */}
      <section className="todos-section">
        {todos.map(({ title, tasks }, todoIndex) => {
          return (
            <Todo
              key={todoIndex}
              todoIndex={todoIndex}
              title={title}
              setTodos={setTodos}
              todos={todos}
              tasks={tasks}
              modify={modify}
              setModify={setModify}
              initialModifyState={initialModifyState}
              deleteList={deleteList}
              setDeleteList={setDeleteList}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Todos;
