import React, { useState, useEffect } from "react";
import Todo from "./Todo/Todo";
import "./Todos.css";
import axios from "axios";

const Todos = ({ userStatus }) => {
  //State qui stocke l'état des Todos dans un arrays
  const [todos, setTodos] = useState([
    { title: "Titre", tasks: [{ task: "Tâche" }] },
  ]);

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
  const [localState, setLocalState] = useState(true);
  const handleAdd = async () => {
    const header = {
      Authorization: "Bearer " + localStorage.getItem("Bearer Token"),
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    };
    const body = { key: null };

    try {
      const response = await axios.post(
        "http://localhost:5500/todos/add-todo",
        body,
        { headers: header }
      );

      setTodos(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5500/todos", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("Bearer Token"),
          },
        });
        console.log(response.data);
        setTodos(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [localState]);

  return (
    <div
      className="todos"
      style={{ display: userStatus === "connected" ? "" : "none" }}
    >
      <section className="head-section">
        <h2>Bienvenue, voici vos Listes</h2>
        <div>
          {" "}
          <button className="head-buttons green" onClick={handleAdd}>
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
        {todos.map(({ title, tasks, id, ...rest }, todoIndex) => {
          return (
            <Todo
              setLocalState={setLocalState}
              todoId={id}
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
