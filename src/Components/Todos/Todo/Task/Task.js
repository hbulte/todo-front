import React from "react";
import "./Task.css";

const Task = ({
  name,
  modify,
  setModify,
  taskIndex,
  todoIndex,
  initialModifyState,
  todos,
  setTodos,
}) => {
  //////////////////////////////////////////////////////////////////////////
  // fonction qui permet d'éditer le texte d'une tâche en déclenchant l'input
  //////////////////////////////////////////////////////////////////////////
  const handleRename = () => {
    if (modify.isModification) {
      setModify({
        ...modify,
        modifyTitle: false,
        modifyTask: true,
        modifyTodoIndex: todoIndex,
        modifyTaskIndex: taskIndex,
      });
    } else {
      setModify({
        isModification: true,
        modifyTitle: false,
        modifyTask: true,
        modifyTodoIndex: todoIndex,
        modifyTaskIndex: taskIndex,
      });
    }
  };

  //////////////////////////////////////////////////////////////////////////
  // fonction qui permet d'arrêter l'édition du text d'une tâche en pressant la touche entrer
  //////////////////////////////////////////////////////////////////////////

  const handleKey = (e) => {
    if (e.key === "Enter") {
      setModify(initialModifyState);
    }
  };

  return (
    <div className="task">
      <div onDoubleClick={handleRename}>
        <p
          className="task-name"
          style={{
            display:
              modify.modifyTask &&
              modify.modifyTodoIndex === todoIndex &&
              modify.modifyTaskIndex === taskIndex
                ? "none"
                : "",
          }}
        >
          {todos[todoIndex][taskIndex] ? todos[todoIndex][taskIndex] : name}
        </p>
        <input
          type="text"
          className="task-input"
          placeholder="Tâche"
          name="task"
          style={{
            display:
              modify.modifyTask &&
              modify.modifyTodoIndex === todoIndex &&
              modify.modifyTaskIndex === taskIndex
                ? ""
                : "none",
          }}
          onKeyPress={handleKey}
          onChange={(e) => {
            const newText = [...todos];
            newText[todoIndex][taskIndex] = e.target.value;
            setTodos(newText);
            // console.log(todos);
          }}
        />
      </div>
      <button
        className="delete-task-button"
        onClick={() => {
          const newTodo = [...todos];
          newTodo[todoIndex].tasks.splice(taskIndex, 1);
          setTodos(newTodo);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Task;
