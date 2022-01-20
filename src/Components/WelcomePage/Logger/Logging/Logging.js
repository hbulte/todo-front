import React from "react";
import { useState } from "react";

const Logging = ({ logOrSign, setUserStatus }) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const newForm = { ...form };
    const key = e.target.name;
    newForm[key] = e.target.value;
    setForm(newForm);
  };

  return (
    <div className="log" style={{ display: logOrSign === "log" ? "" : "none" }}>
      <h3>Se connecter</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUserStatus("connected");
        }}
      >
        <label>Nom d'utilisateur</label>
        <input
          type="text"
          placeholder="Nom d'utilisateur ou Email"
          required={true}
          name="username"
          onChange={handleChange}
        />
        <label>Mot de passe </label>
        <input
          type="password"
          placeholder="Mot de passe"
          name="password"
          required={true}
          onChange={handleChange}
        />
        <button>S'enregistrer</button>
      </form>
    </div>
  );
};

export default Logging;
