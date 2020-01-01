import React, { useContext, useState } from "react";

import { AuthContext } from "../auth";

const CreateUser = () => {
  const auth = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });

  const onChange = field => evt => {
    setForm({ ...form, [field]: evt.target.value });
  };

  if (auth.user !== null) {
    return null;
  }

  const { email, password } = form;

  return (
    <>
      <h3>Create Account</h3>
      {auth.createUser.createUserState.error && (
        <p>{auth.createUser.createUserState.error}</p>
      )}
      <input
        type="email"
        placeholder="john@doe.com"
        value={email}
        onChange={onChange("email")}
      />
      <input
        type="password"
        placeholder="******"
        value={password}
        onChange={onChange("password")}
      />
      <button onClick={() => auth.createUser.createUser(email, password)}>
        Create User
      </button>
    </>
  );
};

export default CreateUser;
