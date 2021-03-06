import React from "react";
import Logger from "./Logger/Logger";
import "./WelcomePage.css";
import Button from "../Global/Button/Button";
import taskJpg from "../../Asset/tasks.png";
const WelcomePage = ({
  userStatus,
  logOrSign,
  setLogOrSign,
  setUserStatus,
}) => {
  return (
    <div
      className="welcome-page"
      style={{ display: userStatus === "not connected" ? "" : "none" }}
    >
      <img src={taskJpg} alt="Bloc-note" className="taskJpg" />
      <div className="welcome-message">
        <h2 className="welcome-text">
          Bienvenue dans votre outil favoris pour gérer votre Todo list
        </h2>
        <div className="welcome-button">
          <Button
            type="signup"
            logOrSign={logOrSign}
            setLogOrSign={setLogOrSign}
          />
          <Button
            type="logging"
            logOrSign={logOrSign}
            setLogOrSign={setLogOrSign}
          />
        </div>
      </div>
      <Logger setUserStatus={setUserStatus} logOrSign={logOrSign} />
    </div>
  );
};

export default WelcomePage;
