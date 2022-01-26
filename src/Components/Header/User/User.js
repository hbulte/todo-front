import React from "react";
import "./User.css";

const User = ({ username, userStatus, setToken }) => {
  const handleClick = () => {
    setToken(undefined);
    localStorage.removeItem("Bearer Token");
  };

  return (
    <div
      className="user"
      style={{ display: userStatus === "connected" ? "" : "none" }}
    >
      <h3 className="username">{username}</h3>
      <button onClick={handleClick} className="disconnect-button">
        Disconnect
      </button>
    </div>
  );
};

export default User;
