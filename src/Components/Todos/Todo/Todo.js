import React from "react";
import Task from "./Task/Task";
import "./Todo.css";

const Todo = ({
  title,
  tasks,
  todos,
  setTodos,
  todoIndex,
  modify,
  setModify,
  initialModifyState,
}) => {
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
    }
  };

  return (
    <div className="todo">
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

        {/*
       //////////////////////////////////////////////
       Div où sont lister les tâches de chaque Todo
       //////////////////////////////////////////////
       */}
      </div>

      {tasks.map((name, taskIndex) => {
        return (
          <Task
            key={taskIndex}
            name={name}
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
