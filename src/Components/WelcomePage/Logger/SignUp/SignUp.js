import React from "react";
import { useState } from "react";

const SignUp = ({ logOrSign, setUserStatus }) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPaswword: "",
  });

  const handleChange = (e) => {
    const newForm = { ...form };
    const key = e.target.name;
    newForm[key] = e.target.value;
    setForm(newForm);
  };

  return (
    <div
      className="sign"
      style={{ display: logOrSign === "sign" ? "" : "none" }}
    >
      <h3>S'inscrire</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUserStatus("connected");
        }}
      >
        <label>Nom d'utilisateur</label>
        <input
          type="text"
          name="username"
          placeholder="Nom d'utilisateur"
          required={true}
          value="username"
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required={true}
          onChange={handleChange}
        />
        <label>Mot de passe</label>
        <input
          type="password"
          name="Password"
          placeholder="Password"
          required={true}
          onChange={handleChange}
        />
        <label>Confirmer le mot de passe</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          required={true}
          onChange={handleChange}
        />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default SignUp;
