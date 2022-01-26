import React from "react";
import Task from "./Task/Task";
import "./Todo.css";
import axios from "axios";

const Todo = ({
  setLocalState,
  title,
  tasks,
  todos,
  setTodos,
  todoIndex,
  modify,
  setModify,
  initialModifyState,
  deleteList,
  setDeleteList,
  todoId,
}) => {
  const handleDelete = async () => {
    const header = {
      Authorization: "Bearer " + localStorage.getItem("Bearer Token"),
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    };

    try {
      const response = await axios.delete(
        "http://localhost:5500/todos/delete-todo",
        { data: { todoId: todoId }, headers: header }
      );
      console.log(response);

      setTodos(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  //////////////////////////////////////////////////////////////////////////
  // fonction qui permet d'éditer le titre d'une Todo en déclenchant l'input
  //////////////////////////////////////////////////////////////////////////
  const handleRename = () => {
    if (modify.isModification) {
      setModify({
        ...modify,
        modifyTitle: true,
        modifyTask: false,
        modifyTodoIndex: todoIndex,
      });
    } else {
      setModify({
        isModification: true,
        modifyTitle: true,
        modifyTask: false,
        modifyTodoIndex: todoIndex,
      });
    }
  };

  //////////////////////////////////////////////////////////////////////////
  // fonction qui permet d'arrêter l'édition du titre d'une Todo en pressant la touche entrer
  //////////////////////////////////////////////////////////////////////////
  const handleKey = (e) => {
    if (e.key === "Enter") {
      setModify(initialModifyState);
      const updateTodo = async () => {
        try {
          const response = await axios.patch(
            "http://localhost:5500/todos/update-todo",
            {
              todoId: todoId,
              updatedValue: {
                title: title,
              },
            },
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("Bearer Token"),
              },
            }
          );
          console.log(response);
        } catch (error) {
          console.log(error.message);
        }
      };

      updateTodo();
    }
  };

  return (
    <div className="todo">
      <div className="todo-head">
        {/*
       //////////////////////////////////////////////////////////////////////
       Div où le titre où l'input est affiché selon l'état du state d'édition
       //////////////////////////////////////////////////////////////////////
       */}
        <div onDoubleClick={handleRename}>
          <h3
            name="title-div"
            style={{
              display:
                modify.modifyTitle && modify.modifyTodoIndex === todoIndex
                  ? "none"
                  : "",
            }}
          >
            {title}
          </h3>
          <input
            type="text"
            className="title-input"
            placeholder="Titre"
            name="title"
            style={{
              display:
                modify.modifyTitle && modify.modifyTodoIndex === todoIndex
                  ? ""
                  : "none",
            }}
            onChange={(e) => {
              const newTitle = [...todos];
              newTitle[todoIndex].title = e.target.value;
              setTodos(newTitle);
            }}
            onKeyPress={handleKey}
          />
        </div>
        <button
          style={{ display: deleteList ? "" : "none" }}
          className="red"
          onClick={handleDelete}
        >
          {" "}
          -{" "}
        </button>
      </div>
      {/*
       //////////////////////////////////////////////
       Div où sont lister les tâches de chaque Todo
       //////////////////////////////////////////////
       */}
      {tasks.map(({ task }, taskIndex) => {
        return (
          <Task
            key={taskIndex}
            task={task}
            todos={todos}
            setTodos={setTodos}
            modify={modify}
            taskIndex={taskIndex}
            todoIndex={todoIndex}
            setModify={setModify}
            initialModifyState={initialModifyState}
          />
        );
      })}

      <button
        onClick={(e) => {
          const newTodo = [...todos];
          newTodo[todoIndex].tasks.push("Tâche");
          setTodos(newTodo);
        }}
      >
        + Ajouter une tâche
      </button>
    </div>
  );
};

export default Todo;
