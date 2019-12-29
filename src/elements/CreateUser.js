import React, { useContext } from "react";

import { AuthContext } from "../auth";

const CreateUser = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      {JSON.stringify(auth.createUser)}
      <button
        onClick={() =>
          auth.createUser.createUser("dev.mathiusso2@gmail.com", "abc123")
        }
      >
        Create User
      </button>
    </>
  );
};

export default CreateUser;
