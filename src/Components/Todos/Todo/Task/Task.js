import React from "react";
import "./Task.css";
const Task = ({ name }) => {
  return (
    <div className="task">
      <p className="task-name">{name}</p>
      <button className="delete-task-button">+</button>
    </div>
  );
};

export default Task;
