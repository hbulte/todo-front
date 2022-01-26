import React, { useEffect, useContext } from "react";
import { useState } from "react";
import axios from "axios";

const Logging = ({ logOrSign, setToken }) => {
  const [form, setForm] = useState({
    username: "User1",
    password: "User1234",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendSubmit = async () => {
      try {
        const response = await axios.post("http://localhost:5500/login", form);
        localStorage.setItem("Bearer Token", response.data.access_token);
        setToken(localStorage.getItem("Bearer Token"));
      } catch (error) {
        console.log(error);
      }
    };
    sendSubmit();
  };

  const handleChange = (e) => {
    const newForm = { ...form };
    const key = e.target.name;
    newForm[key] = e.target.value;
    setForm(newForm);
  };

  return (
    <div className="log" style={{ display: logOrSign === "log" ? "" : "none" }}>
      <h3>Se connecter</h3>
      <form onSubmit={handleSubmit}>
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
