import React, { useState } from "react";
import Logging from "./Logging/Logging";
import SignUp from "./SignUp/SignUp";
import "./Logger.css";
const Logger = ({ logOrSign, setUserStatus }) => {
  return (
    <div className="logger">
      <Logging setUserStatus={setUserStatus} logOrSign={logOrSign} />{" "}
      {/* //Disable if logStatus true */}
      <SignUp logOrSign={logOrSign} setUserStatus={setUserStatus} />
    </div>
  );
};

export default Logger;
