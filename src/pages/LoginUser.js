import React, { useContext, useState } from "react";

import { AuthContext } from "../auth";
import AuthPage from "../elements/AuthPage";
import DefaultInput from "../elements/DefaultInput";

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
    <AuthPage
      pageName="Sign in"
      buttonOnClick={() => auth.loginUser.loginUser(email, password)}
      errorMsg={auth.loginUser.loginUserState.error}
    >
      <DefaultInput
        type="email"
        id="email"
        label="Email address"
        value={email}
        onChange={onChange("email")}
      />

      <DefaultInput
        type="password"
        id="password"
        label="Password"
        value={password}
        onChange={onChange("password")}
      />
    </AuthPage>
  );
};

export default LoginUser;
