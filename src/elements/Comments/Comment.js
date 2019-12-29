import React from "react";
import ReactTimeAgo from "react-time-ago/tooltip";

const Comment = ({ comment }) => (
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

export default Comment;
