import Button from "../Global/Button/Button";
import "./Header.css";
import User from "./User/User";

const Header = ({ userStatus, setLogOrSign, setToken }) => {
  return (
    <div className="header">
      <h1 className="site-name">Todo App</h1>
      <User username="John" userStatus={userStatus} setToken={setToken} />
      <div
        className="connection-buttons"
        style={{ display: userStatus === "not connected" ? "" : "none" }}
      >
        <Button type="signup" setLogOrSign={setLogOrSign} />
        <Button type="logging" setLogOrSign={setLogOrSign} />
      </div>
    </div>
  );
};

export default Header;
