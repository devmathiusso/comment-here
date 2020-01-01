import React, { useState, useContext } from "react";

import { AuthContext } from "../auth";

const FormDisplayName = ({ displayName, user }) => {
  const [newDisplayName, setNewDisplayName] = useState(displayName);

  const onChange = evt => setNewDisplayName(evt.target.value);

  const save = () => {
    if (newDisplayName.trim()) {
      user.updateProfile({ displayName: newDisplayName });
    }
  };

  return (
    <div>
      <input type="text" value={newDisplayName} onChange={onChange} />
      <button onClick={save}>Save Display Name</button>
    </div>
  );
};

const UserInfo = () => {
  const auth = useContext(AuthContext);

  if (auth.user === null) {
    return null;
  }

  const { email, displayName } = auth.user;
  const [alternativeDisplayName] = email.split("@");
  const dn = displayName || alternativeDisplayName;

  return (
    <>
      <p>
        Hello, <b>{dn}</b>!
      </p>
      <FormDisplayName displayName={dn} user={auth.user} />
      <button onClick={auth.logout}>Logout</button>
    </>
  );
};

export default UserInfo;
