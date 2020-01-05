import React, { useContext } from "react";

import { AuthContext } from "../auth";
import FormDisplayName from "../elements/FormDisplayName";

const UserInfo = () => {
  const auth = useContext(AuthContext);

  if (auth.user === null) {
    return null;
  }

  const { email, displayName } = auth.user;
  const [alternativeDisplayName] = email.split("@");
  const dn = displayName || alternativeDisplayName;

  return <FormDisplayName displayName={dn} user={auth.user} />;
};

export default UserInfo;
