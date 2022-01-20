import "./App.css";
import Header from "./Components/Header/Header";

import { useState } from "react";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import Todos from "./Components/Todos/Todos";

function App() {
  const [userStatus, setUserStatus] = useState("connected");
  const [logOrSign, setLogOrSign] = useState("log");
  return (
    <div className="app">
      <Header userStatus={userStatus} setLogOrSign={setLogOrSign} />
      <div className="content">
        <WelcomePage
          setUserStatus={setUserStatus}
          userStatus={userStatus}
          logOrSign={logOrSign}
          setLogOrSign={setLogOrSign}
        />
        <Todos userStatus={userStatus} />
      </div>
    </div>
  );
}

export default App;
