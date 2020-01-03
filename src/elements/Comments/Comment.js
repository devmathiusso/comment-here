import React from "react";
import ReactTimeAgo from "react-time-ago/tooltip";

const Comment = ({ comment }) => {
  return (
    <div className="col-12 border rounded-top text-left mb-3">
      <div className="d-flex flex-column p-2">
        <div className="d-flex justify-content-between">
          <span className="font-weight-bold">{comment.user.name}</span>{" "}
          <small className="text-secondary">
            <ReactTimeAgo date={comment.createdAt} />
          </small>
        </div>

        <div className="mb-2 mt-2">
          <p className="m-0 text-dark">{comment.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
