import React, { useState, useContext } from "react";
import { useDatabasePush } from "../database";
import firebase from "../firebase";

import { AuthContext } from "../auth";

const NewComment = () => {
  const [, save] = useDatabasePush("comments");
  const [comment, setComment] = useState("");
  const [commentLength, setCommentLength] = useState(0);
  const maxLength = 250;

  const auth = useContext(AuthContext);

  if (auth.user === null) {
    return null;
  }

  const { uid, email, displayName } = auth.user;
  const [alternativeDisplayName] = email.split("@");

  const onChangeComment = evt => {
    setComment(evt.target.value);
    setCommentLength(evt.target.value.length);
  };

  const createComment = () => {
    if (comment) {
      save({
        content: comment,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        user: { id: uid, name: displayName || alternativeDisplayName }
      });

      setComment("");
      setCommentLength(0);
    }
  };

  return (
    <>
      <div className="d-flex flex-column">
        <div className="input-group mb-3">
          <textarea
            value={comment}
            onChange={onChangeComment}
            className="form-control"
            placeholder="Write your comment here..."
            rows={4}
            maxLength={maxLength}
            style={{ resize: "none" }}
          />

          <div className="input-group-append">
            <button className="btn btn-primary" onClick={createComment}>
              Comment
            </button>
          </div>
        </div>

        <small className="text-muted">
          {commentLength} / {maxLength} characters
        </small>
      </div>

      <hr />
    </>
  );
};

export default NewComment;
