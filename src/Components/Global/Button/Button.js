import React from "react";
import "./Button.css";

const Button = ({ type, logOrSign, setLogOrSign }) => {
  if (type === "signup") {
    return (
      <button
        style={{ display: logOrSign === "sign" ? "none" : "" }}
        onClick={() => {
          setLogOrSign("sign");
        }}
      >
        S'inscrire
      </button>
    );
  }
  if (type === "logging") {
    return (
      <button
        style={{ display: logOrSign === "log" ? "none" : "" }}
        className="logging"
        onClick={() => {
          setLogOrSign("log");
        }}
      >
        S'identifier
      </button>
    );
  }
};

export default Button;
