import React from "react";
import { useDatabase } from "../../database";

import Comment from "./Comment";

const Comments = () => {
  const data = useDatabase("comments");

  if (!data) {
    return <p>There are no comments yet :(</p>;
  }

  const ids = Object.keys(data);

  if (!ids.length) return <p>Loading comments...</p>;

  return (
    <>
      <p className="text-secondary pb">{ids.length} Comments</p>
      {ids.map(id => (
        <Comment key={id} comment={data[id]} />
      ))}
    </>
  );
};

export default Comments;
