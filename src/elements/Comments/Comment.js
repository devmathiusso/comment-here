import React, { useContext } from "react";
import ReactTimeAgo from "react-time-ago/tooltip";
import { AuthContext } from "../../auth";

const Comment = ({ comment }) => {
  const auth = useContext(AuthContext);

  return (
    <div>
      <div>
        <b>{comment.user.name}</b> -{" "}
        <small>
          <ReactTimeAgo date={comment.createdAt} />
        </small>
      </div>
      <p>{comment.content}</p>
    </div>
  );
};

export default Comment;
