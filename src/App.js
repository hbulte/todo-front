import "./App.css";
import Header from "./Components/Header/Header";
import { useState } from "react";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import Todos from "./Components/Todos/Todos";

function App() {
  const [logOrSign, setLogOrSign] = useState("log");
  const [token, setToken] = useState(localStorage.getItem("Bearer Token"));

  if (!token) {
    return (
      <div className="app">
        <Header userStatus="not connected" setLogOrSign={setLogOrSign} />
        <div className="content">
          <WelcomePage
            logOrSign={logOrSign}
            setLogOrSign={setLogOrSign}
            setToken={setToken}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header
        setLogOrSign={setLogOrSign}
        userStatus="connected"
        setToken={setToken}
      />
      <div className="content">
        <Todos userStatus="connected" />
      </div>
    </div>
  );
}

export default App;
