import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";

import { AuthContext } from "../auth";
import AuthPage from "../elements/AuthPage";
import DefaultInput from "../elements/DefaultInput";

const CreateUser = () => {
  const auth = useContext(AuthContext);
  const [form, setForm] = useState({
    displayName: "",
    email: "",
    password: ""
  });

  const onChange = field => evt => {
    setForm({ ...form, [field]: evt.target.value });
  };

  if (auth.user !== null) {
    return <Redirect to="/comments" />;
  }

  const { email, password } = form;

  return (
    <AuthPage
      pageName="Sign up"
      buttonOnClick={() => auth.createUser.createUser(email, password)}
      errorMsg={auth.createUser.createUserState.error}
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

export default CreateUser;
