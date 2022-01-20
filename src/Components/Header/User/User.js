import React from "react";
import "./User.css";
const User = ({ username, userStatus }) => {
  return (
    <div
      className="user"
      style={{ display: userStatus === "connected" ? "" : "none" }}
    >
      <h3 className="username">{username}</h3>
      <img
        className="profile-pic"
        src="https://thispersondoesnotexist.com/image"
        alt=""
      />
    </div>
  );
};

export default User;
