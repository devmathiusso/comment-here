import React, { useContext, useState } from "react";

import { AuthContext } from "../auth";

const LoginUser = () => {
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
      <h3>Sign In</h3>
      {auth.loginUser.loginUserState.error && (
        <p>{auth.loginUser.loginUserState.error}</p>
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
      <button onClick={() => auth.loginUser.loginUser(email, password)}>
        Sign In
      </button>
    </>
  );
};

export default LoginUser;
