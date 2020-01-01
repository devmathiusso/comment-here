import React, { useState, useContext } from "react";
import { useDatabasePush } from "../database";
import firebase from "../firebase";

import { AuthContext } from "../auth";

const NewComment = () => {
  const [, save] = useDatabasePush("comments");
  const [comment, setComment] = useState("");

  const auth = useContext(AuthContext);

  if (auth.user === null) {
    return null;
  }

  const { uid, email, displayName } = auth.user;
  const [alternativeDisplayName] = email.split("@");

  const createComment = () => {
    if (comment) {
      save({
        content: comment,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        user: { id: uid, name: displayName || alternativeDisplayName }
      });

      setComment("");
    }
  };

  return (
    <div>
      <textarea
        value={comment}
        onChange={evt => setComment(evt.target.value)}
      />
      <button onClick={createComment}>Comment</button>
    </div>
  );
};

export default NewComment;
